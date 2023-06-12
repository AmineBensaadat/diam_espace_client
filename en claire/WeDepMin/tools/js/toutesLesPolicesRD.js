var myIdPoliceRD = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridPoliceRD = "gridPDT" + makeId();


var toutesLesPolicesRD = {
	id:"toutesLesPolicesRD",
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
						{view:"label", id:"", template:"<span class='mdi mdi-arrow-left'></span>", width:40,
						 css:"icon-return", 
							click:function(){
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes polices : RD</h1> ", css:"h1 textUppercase",
						}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridPoliceRD,
							view:"datatable", 
							css:"styleDT",
							minWidth:200,
							height:450,
							borderless:false,
							rowHeight:40,
							resizeColumn: true,
							resizeRow: false,
							select:"row",
							navigation:"false",
							scrollX:true,
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdPoliceRD[0], header:"idHistorique", hidden:true},
								{ id:myIdPoliceRD[1], header:[ "Marque",{ content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true},
								{ id:myIdPoliceRD[2], header:[ "Matricule",{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdPoliceRD[3], header:[ "Avenant",{ content:"textFilter" } ], minWidth:180, sort:"string", fillspace:true},
								{ id:myIdPoliceRD[4], header:"D.Effet", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdPoliceRD[5], header:"D.Echéance", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdPoliceRD[6], header:"Prime Totale", minWidth:120, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:myIdPoliceRD[7], header:"Prorata", hidden:true, minWidth:100, sort:"int", css:{'text-align':'right'},fillspace:true },
								{ id:myIdPoliceRD[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true,},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
							scheme:{
								$init:function(obj){
								  obj.Date_effet = date_format(obj.Date_effet);
								  obj.Date_eche = date_format(obj.Date_eche);
								}
							  },
							type:{
                              
								rcheckbox01:function(obj, common, value, config){
									var checked = (value == config.checkValue) ? 'checked="true"' : '';
									return "<input disabled class='webix_table_checkbox' type='checkbox' "+checked+">";
								},
								rcheckboxON:function(obj, common, value, config){
									var checked = (value == "O") ? 'checked="true"' : '';
									return "<input disabled class='webix_table_checkbox' type='checkbox' "+checked+">";
								}
							},
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesPolicesRD");
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridPoliceRD).scrollTo(1,1);
								}
							},
							data: []
						},
					]
				},
			]
		}
	]

};


function renderAllPoliceRD(item){
	
	var grid = $$(idgridPoliceRD);
	grid.clearAll();
		  
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABW","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

		if(data.length>0){
			
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdPoliceRD);
			
			grid.parse(jdata, "json");
		}

	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}