

var policesListe = {
    // Content
    id:"policesListe",
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:3,
	cols:[
		{
			rows:[
				{	minWidth:300,
					height:40,
					cols:[
							{view:"label", template:"", width:20, css:"icon-return"},
							{
								view:"label", template:"<h1>Mes polices automobile</h1> ", css:"h1",
							},
							///********************* USER GUIDE */
							{ 
								css:"webix_transparent help_button",
								type:"clean",
								view:"button", 
								type: "image", 
								image:"./tools/images/Help.png", 
								click:showHelpMenu,
								width:50
							},
							///********************* END USER GUIDE */
							{ view:"button", value:"Toutes les polices", css:"btn_all", width:150, margin: 8,
								click:function(){
									$$("toutesLesPolicesAuto").show();
									renderAllPoliceAuto();
								} 
							},
						]
				},	
				{	
					type:"clean",
					padding:{
						top:0, bottom:10, left:20, right:10
					},
					cols:[
						{
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:"idPoliceDV",
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
									autoheight:true,
									minHeight:500,
									type: {
                                        height:400,
                                        width:210,
                                        css:"policesDV"
                                    },
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#date_effet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#Categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#Branche#</span> </div><span  onclick="listsContrats(#idPolice#)"><u><i class="fa fa-paperclip" aria-hidden="true"></i> Contrats</u></span></div>',
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
                                            var item = $$("idPoliceDV").getSelectedItem();
                                            $$('policeVehicules').show();
                                            renderVehiculesPolice(item);
                                        },
                                    },
                                    ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
                                    data:[
									]
								},
								
                            ]
                        },
						
					]
				}
			]
		},
		
	]
    
};



function renderPolicesListe(){

	var doc=AddAction(null,1,"POLICESLISTE","SELECT","ACD","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "date_effet", "Categorie", "Branche"]);
		$$("idPoliceDV").clearAll();
		$$("idPoliceDV").parse(tmp);
		
		$$("idPoliceDV").hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

	
}

function showPolicesListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderPolicesListe();
    }else{
        $$(id).show();
    }
}

///********************* USER GUIDE */
function showHelpMenu(){
	var popupHelpMenu = {	
		view:"popup",
		id:"helppopupMenu",
		width:550,
		css:"helpMD",
		position:"center",
		body:{
			rows:[
				{
					height:30,
					view:"label",
					label:"Mes polices automobile",
					align:"center",
					css:"title1"
				},
				{
					height:20
				},
				{
					height:170,
					borderless: true,
					template:"<body>Ici, vous trouverez la liste de vos contrats en cours. Des documents affiliés sont téléchargeables.<br><br>En double cliquant sur l'un des contrats, vous trouverez la liste des véhicules liée à ce contrat.<br>Le bouton bleu en haut de l'écran permet d'afficher tous les véhicules toutes polices confondues.<br><br>Le principe est le même pour toutes les branches.</body>"
				},
				{
					cols:[
              
						{height:35},
						{view:"button", label:"Quitter", css:"webix_secondary", width:160, height:35,
						  click:function(){
							$$("helppopupMenu").hide();
						  }
						},
			
						{
						},
					  ]
				  }
			]
		}
	};

	webix.ui(popupHelpMenu);
	$$("helppopupMenu").show();
}
///********************* END USER GUIDE */



