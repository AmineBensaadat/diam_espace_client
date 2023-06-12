var idPoliceMarDV = "DVPMar" + makeId();

var policesMaritime = {
	id:"policesMaritime",
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
							view:"label", template:"<h1>Mes polices maritimes</h1> ", css:"h1",
						},
				]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:10
					},
					cols:[
						{
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idPoliceMarDV,
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
                                           var item = $$(idPoliceMarDV).getSelectedItem();
                                           if(item.idCategorie==57){
												renderFacultesOrdres(item);
                                           }else if(item.idCategorie==54){
												renderProductionCorps(item);
                                           } 
                                        }
                                    }, 
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#dateeffet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#branche#</span> <span  onclick="listsContrats(#idPolice#)"><u><i class="fa fa-paperclip" aria-hidden="true"></i> Contrats</u></div></div>',
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
                        }
					]
				},
			]
		}
	]

};




function renderPolicesMaritimeListe(idPoliceMarDV){

	var doc=AddAction(null,1,"POLICESMARITIME","SELECT","AAW","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "dateeffet", "idCategorie", "categorie", "branche"]);
		$$(idPoliceMarDV).clearAll();
		$$(idPoliceMarDV).parse(tmp);
		$$(idPoliceMarDV).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function showPolicesMaritimeListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderPolicesMaritimeListe(idPoliceMarDV);
    }else{
        $$(id).show();
    }
}