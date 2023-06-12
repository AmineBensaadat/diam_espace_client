var myIdHVehiculesP = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridVehiculesP = "gridPDT" + makeId();


var policeVehicules = {
	id:"policeVehicules",
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
						}
						///********************* END USER GUIDE */
						
					]
					
				},
				
				{
					view:"label", template:"<h2>Liste des Véhicules</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"idLabelPolice", name:"idLabelPolice", css:" colorTxt infoNum",height:20, align:"left"},
						{view:"label", label:"",id:"idPoliceV", name:"idPoliceV", hidden:true},
					]
				},
				{	
					type:"clean",
					padding:{
						top:0, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridVehiculesP,
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
							/*
							header:[
            { content:"{filtername}Filter" },
            "Title"
        ]
							*/
							columns:[
								{ id:myIdHVehiculesP[0], header:"idHistorique", hidden:true},
								{ id:myIdHVehiculesP[2], header:[ {text:"Matricule", css:{'text-align':'center'}},{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true, css:{'text-align':'center'}},
								{ id:myIdHVehiculesP[1], header:[ {text:"Marque", css:{'text-align':'center'} }, { content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true, css:{'text-align':'center'}},
								{ id:myIdHVehiculesP[3], header:[ {text:"Avenant", css:{'text-align':'center'}},{ content:"selectFilter"}, ], minWidth:180, sort:"string", fillspace:true, css:{'text-align':'left'}},
								{ id:myIdPoliceAuto[4], header:[ {text:"D.Effet", css:{'text-align':'center'} }, {  content:"textFilter"}], minWidth:100, sort:'ntsDate', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true, css:{'text-align':'center'} },
								{ id:myIdHVehiculesP[5], header: [ {text:"D.Echéance", css:{'text-align':'center'} }, {  content:"textFilter"}], minWidth:100, sort:'ntsDate', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdHVehiculesP[6], header:[{text:"Prime Totale", css:{'text-align':'center'} }, { content:"textFilter" }], minWidth:80, sort:'ntsSortDecimal', css:{'text-align':'center'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:{'text-align':'center'}}},
								{ id:myIdHVehiculesP[7], header:"Prorata", hidden:true, minWidth:100, sort:'ntsSortDecimal', css:{'text-align':'right'},fillspace:true },
								{ id:myIdHVehiculesP[8], header:{text:"Sinistre en cours", css:{'text-align':'center'} }, template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true, sort:"string"},
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
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "policeVehicules");
									
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridVehiculesP).scrollTo(1,1);
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


function renderVehiculesPolice(item){

	var grid = $$(idgridVehiculesP);
	grid.clearAll();
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","AAY","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHVehiculesP);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

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
					label:"Liste des Véhicules",
					align:"center",
					css:"title1"
				},
				{
					height:20
				},
				{
					height:100,
					borderless: true,
					template:"<body>Ce tableau affiche les principales informations par véhicule.<br><br> En cliquant sur la flèche en bout de ligne, vous trouverez le détail lié à ce véhicule</body>"
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