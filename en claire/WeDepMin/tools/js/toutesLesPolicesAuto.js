var myIdPoliceAuto = ["IdHistorique", "Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours","Police"];                 
var idgridPoliceAuto = "gridAutoPDT" + makeId();
let Years_lists = generateArrayOfYears(5);


var toutesLesPolicesAuto = {
	id:"toutesLesPolicesAuto",
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
							view:"label", template:"<h1>Toutes polices automobile</h1> ", css:"h1",
						},
					]
				},
				{
					padding:{
						top:0, bottom:0, left:20, right:30
					},
					cols: [
							{},
							{
								css: 'export_excel_button',
								view: "button", label: "<img src='./tools/images/xls-icon-3379.png' style='height:82%; width:auto; margin-bottom: -3%;'> <sapn>Export Excel</span>", width: 140, click:function(){
									webix.toExcel($$(idgridPoliceAuto), {
									filename: "TOUTES-LES-POLICES-AUTO",
									name: "Films",
										columns:{
											"Marque":{header: "Marque"},
											"Matricule":{header: "Matricule"},
											"Avenant":{header: "Avenant"},
											"Date_effet":{header: "Date_effet"},
											"Date_eche":{header: "Date_eche"},
											"Ptotale":{header: "Prime Totale",template:function(obj){
													return obj.Ptotale;
												}
											},
											"Prorata":{header: "Prorata",template:function(obj){
													return obj.Prorata;
												}
											},
											"SinistreEncours":{header: "Sinistre en cours" ,template:function(obj){
												return obj.SinistreEncours;
											}
										}
									}
									});
								}
							},
							{
									css: 'export_pdf_button',
									view: "button", label: "<img src='./tools/images/pdf-icon-png-2056.png' style='height:82%; width:auto; margin-bottom: -3%;'> Export PDF", width: 120, click:function(){
									webix.toPDF($$(idgridPoliceAuto), {
										filename: "TOUTES-LES-POLICES-AUTO",
										orientation:"landscape",
										name: "Films",
										columns:{
												"Marque":{header: "Marque",width: 70,},
												"Matricule":{header: "Matricule",width: 70},
												"Avenant":{header: "Avenant",width: 100},
												"Date_effet":{header: "Date_effet",width: 80},
												"Date_eche":{header: "Date_eche",width: 80},
												"Ptotale":{header: "Prime Totale",width: 80,template:function(obj){
														return obj.Ptotale;
													}
												},
												"Prorata":{header: "Prorata",width: 80,template:function(obj){
														return obj.Prorata;
													}
												},
												"SinistreEncours":{header: "Sinistre en cours",width: 120 ,template:function(obj){
													return obj.SinistreEncours;
												}
											}
										}
									});
								}
							}
					]
				},
				{	
					type:"clean",
					padding:{
						top:5, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridPoliceAuto,
							view:"datatable", 
							css:"styleDT",
							minWidth:200,
							height:500,
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
							footer:false,
							columns:[
								{ id:myIdPoliceAuto[9], header:[ {text:"Police", css:{'text-align':'center'} },{ content:"textFilter" }], width:120, sort:"ntsSortDecimal", css:{'text-align':'left'}},
								{ id:myIdPoliceAuto[1], header:[ {text:"Marque", css:{'text-align':'center'} },{ content:"selectFilter" } ], sort:"string",fillspace:true, css:{'text-align':'center'}},
								{ id:myIdPoliceAuto[2], header:[ {text:"Matricule", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'center'}},
								{ id:myIdPoliceAuto[3], header:[ {text:"Avenant", css:{'text-align':'center'} },{ content:"selectFilter" } ], sort:"string", fillspace:true, css:{'text-align':'left'}},
								
								{ id:myIdPoliceAuto[4], header:[ {text:"Date d'effet", css:{'text-align':'center'}  }, { content:"textFilter" }],sort:'ntsSortDecimal', minWidth:100, sort:'ntsSortDecimal', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true, css:{'text-align':'center'} },
								{ id:myIdPoliceAuto[5], header:[{text:"Date d'écheance", css:{'text-align':'center'} },{ content:"textFilter" }],  sort:'ntsSortDecimal', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdPoliceAuto[6], header:[ {text:"Prime Totale", css:{'text-align':'center'} }, { content:"textFilter" }], sort:'ntsSortDecimal', css:{'text-align':'center'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'center nts_font_13'}},
								{ id:myIdPoliceAuto[7], header:"Prorata", hidden:true, sort:'ntsSortDecimal', css:{'text-align':'right'},fillspace:true },
								{ id:myIdPoliceAuto[8], header:{text:"Sinistre en cours", css:{'text-align':'center'} }, template:"{common.rcheckboxON()}", css:{'text-align':'center'},fillspace:true,sort:"string"},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
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
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesPolicesAuto");
									
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridPoliceAuto).scrollTo(1,1);
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

function renderAllPoliceAuto(){
	var grid = $$(idgridPoliceAuto);
	grid.clearAll();

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABX","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

		if(data.length>0){
			
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdPoliceAuto);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function generateArrayOfYears(years_ago) {
	var max = new Date().getFullYear()
	var min = max - years_ago
	var years = []
  
	for (var i = max; i >= min; i--) {
	  years.push(i)
	}
	return years
  }