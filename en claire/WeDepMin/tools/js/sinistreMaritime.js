var idSinMarDV = "SinMarDV" + makeId();


var sinistresMaritime = {
	id:"sinistresMaritime",
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
							view:"label", template:"<h1>Mes sinistres : Maritime</h1> ", css:"h1",
						},
						{ view:"button", type:"icon", css:"btn_all", icon:"mdi mdi-chart-pie", label:"Statistiques", width:150, margin: 8,
							click:function(){
								renderAllSinisterMaritimeByYear();
							} 
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
									id:idSinMarDV,
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
											var item = $$(idSinMarDV).getSelectedItem();
											
											if(item.idCategorie==4){
												$$("sinistresDosMaritimeFac").show();
												renderSinistresDosMaritimeFac(item.idPolice, item.police,'','');
											}else if(item.idCategorie==6){
												$$("sinistresDosMaritimeCor").show();
												renderSinistresDosMaritimCor(item.idPolice, item.police,'','');
												
											}
											
                                        },
                                    },
                                    ready:function(){
										if (!this.count()){ 
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



function renderSinMaritimeListe(idSinMarDV){
	var doc=AddAction(null,1,"SINMARITIMELISTE","SELECT","ABE","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "date_effet", "idCategorie", "Categorie", "Branche"]);
		$$(idSinMarDV).clearAll();
		$$(idSinMarDV).parse(tmp);
		$$(idSinMarDV).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function showSinMaritimeListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderSinMaritimeListe(idSinMarDV);
    }else{
        $$(id).show();
    }
}
