var idPoliceAT = "DVPAT" + makeId();

var policesAT = {
    id:"policesAT",
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:3,
	cols:[
		{
			rows:[
				{	
					height:40,
					cols:[
						{view:"label", template:"", width:20, css:"icon-return"},
						{
							view:"label", template:"<h1>Mes polices AT</h1> ", css:"h1",
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
									id:idPoliceAT,
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
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
                                           var item = $$(idPoliceAT).getSelectedItem();
                                           renderAvenantsAT(item);
                                        }
                                    }, 
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#dateeffet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#branche#</span> <span  onclick="listsContrats(#idPolice#)"><u><i class="fa fa-paperclip" aria-hidden="true"></i> Contrats</u></div></div>',
                                    data:[],
                                    ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
								},
                            ]
                        }
					]
				},
			]
		}
	]
};

function renderPolicesATListe(idPoliceAT){
	var doc=AddAction(null,1,"POLICESAT","SELECT","AAV","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "dateeffet", "idCategorie", "categorie", "branche"]);
		$$(idPoliceAT).clearAll();
		$$(idPoliceAT).parse(tmp);
		$$(idPoliceAT).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}
function showPolicesATListe(loadData, id) {
    if(loadData){    
        $$(id).show();
        renderPolicesATListe(idPoliceAT);
    }else{
        $$(id).show();
    }
}