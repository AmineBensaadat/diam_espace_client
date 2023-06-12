var idSinAutoDV = "SinAutoDV" + makeId();

var sinistresAuto = {
	id:"sinistresAuto",
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:3,
	cols:[
		{
			rows:[
				{	minWidth:320,
					height:40,
					cols:[
						{view:"label", template:"", width:20, css:"icon-return"},
						{
							view:"label", template:"<h1>Mes sinistres automobile</h1> ", css:"h1",
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
						{ view:"button", type:"icon", css:"btn_all", icon:"mdi mdi-chart-pie", label:"Statistiques", width:150, margin: 8,
							click:function(){
								renderAllSinisterByYear();
							} 
						},
					]
				},
				{	
					type:"clean",
					padding:{ bottom:10, left:20, right:10
					},
					cols:[
						{
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idSinAutoDV,
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
                                    autoheight:true,
									minHeight:500,
									type: {
                                        height:315,
                                        width:210,
                                        css:"policesDV"
                                    },
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#date_effet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#Categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#Branche#</span> </div></div>',
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
                                            var item = $$(idSinAutoDV).getSelectedItem();
											$$('sinistresVehicules').show();
											$$('formSinistresV').clear();
                                            renderSinistresVehicules(item.idPolice, item.police,'','');
                                        },
                                    },
                                    ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
                                    data:[]
								},
								
                            ]
                        }
					]
				},
			]
		}
	]
};

function renderSinAutoListe(idSinAutoDV){
	var doc=AddAction(null,1,"SINAUTOLISTE","SELECT","ABC","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "date_effet", "Categorie", "Branche"]);
		$$(idSinAutoDV).clearAll();
		$$(idSinAutoDV).parse(tmp);
		$$(idSinAutoDV).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

	
}

function showSinAutoListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderSinAutoListe(idSinAutoDV);
    }else{
        $$(id).show();
    }
}

///********************* USER GUIDE */
function showHelpMenu(){
	var popupHelpMenu = {	
		view:"popup",
		id:"helppopupMenu",
		width:450,
		css:"helpMD",
		position:"center",
		body:{
			rows:[
				{
					height:40,
					view:"label",
					label:"Mes sinistres automobile",
					align:"center",
					css:"title1"
				},
				{
					height:20
				},
				{
					height:200,
					borderless: true,
					template:"<body>Ici, vous trouverez la liste des sinistres automobiles en cours.<br><br>En double cliquant sur l'un des contrats, vous trouverez la liste des sinistres liée à ce contrat. <br><br>Le bouton bleu en haut de l'écran permet d'afficher des statisques (graphiques) sur l'ensemble de vos sinistres automobiles.<br><br></br>Le principe est le même pour toutes les branches.</body>"
				},
				{
					cols:[
              
						{},
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



