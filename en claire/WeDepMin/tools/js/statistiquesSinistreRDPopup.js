var StatistiquesSinistresRDPop = {	
	id:"my_pop_sinistres_rd",
	view:"window",
	css:"bg-main window_popup_statistic",
	type:"space", 
	maxHeight:600,
	maxWidth:1000,
	responsive:true,
	close:true,
	modal:true,
	position:"center",
	move:true,
	resize:true,
	padding:3,
		body:{
		css:"bg-main",
		type:"space", 
		padding:20, 
		rows:[
			{
				css:"bg-main",
				type:"space", 
				borderless: true,
				template: "<h1>Statistiques des sinistres RD </h1>",
				height:50,
			},
			{
				view:"label", template:"<h2>Nombre de sinistres RD declarés par exercice</h2> ", css:"ml4 colorRose Bold",height:30
			},
			{
				cols:[
					{
						width: 20
				   	},
					{
						css: "tbHome3",
						view:"chart",
						type:"bar",
						id: "barchart_rd",
						type:"bar",
						value:"#NbrSin#",
						label:"Nbre Sin. #NbrSin#",
						barWidth:35,
						borderless: true,
						radius:0,
						yAxis:{
							title:"Nbre sinistres"
						},
						xAxis:{
							template: "#year#",
							title:"Année"
						},
						data:[]
					}
				]
			},
			{
				view:"label", template:"<h2>Détail par mois</h2> ", css:"ml4 colorRose Bold"
			},
			{
				borderless: true,
				cols:[
					{
						borderless: true,
						padding:0,
						width: 250,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								template:"<center><h1>"+Years_lists[2]+"</h1></center>",
								height: 40
							},
							{
								id:"chartRDPreviousOfPreviousYear", 
								borderless: true,
								view:"chart",
								type:"bar",
								label:"#nbre#",
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,
								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					}, 
					{
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[1]+"</h1></center>",
								height: 40
							},
							{
								id:"chartPreviousYearRD", 
								view: "chart",
								view:"chart",
								label:"#nbre#",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,
								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					},
					{
						
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[0]+"</h1></center>",
								height: 40
							},
							{
								id:"chartRDCurrentYear", 
								view: "chart",
								view:"chart",
								label:"#nbre#",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					}
					
				]
			}
		],
	  
	}
};
function renderAllSinisterRD(){
	// show the popup
	webix.ui(StatistiquesSinistresRDPop).show();

		// data for bar chart
	var doc=AddAction(null,1,"EspEvolutionRDAnn","SELECT","ABU","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
		// data for 3Dchart of year Current
		doc=AddAction(doc,2,"EspEvolutionRDCurrentYear","SELECT","ABV","O");
		doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,2,3,"Annee_",Years_lists[0],"O");

		// data for 3Dchart of Previous year 
		doc=AddAction(doc,3,"ESPEVOLUTIONRDPREVIOUSYEAR","SELECT","ABV","O");
		doc=AddParam(doc,3,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,3,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,3,2,"Annee_",Years_lists[1],"O");

		// data for 3Dchart of Previous of Previous year
		doc=AddAction(doc,4,"EspEvolutionRDPreviousOfPreviousMonth","SELECT","ABV","O");
		doc=AddParam(doc,4,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,4,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,4,2,"Annee_",Years_lists[2],"O");

	var xml=XML2String(doc);
	let data = [];
	var resultsData = [];
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
	var zArr=splitString(data,5);
	
	for(var i=0; i<zArr.length; i++){
		var doc=splitString(zArr[i],4);
		if(doc[4].length>3){
			webix.message('Error !!!'+doc[4]);
		// barchart_rd
		} else if((doc[2]==="ESPEVOLUTIONRDANN")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("barchart_rd").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["NbrSin", "year"]);
			$$("barchart_rd").parse(jdata);

		// paie chart CURRENT YEAR
		}else if ((doc[2]==="ESPEVOLUTIONRDCURRENTYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartRDCurrentYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartRDCurrentYear").parse(jdata);
		
		// paie chart CURRENT YEAR
		} else if ((doc[2]==="ESPEVOLUTIONRDPREVIOUSYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousYearRD").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartPreviousYearRD").parse(jdata);
		
		// data for 3Dchart of Previous of Previous year
		}else if ((doc[2]==="ESPEVOLUTIONRDPREVIOUSOFPREVIOUSMONTH")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartRDPreviousOfPreviousYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartRDPreviousOfPreviousYear").parse(jdata);
		}
	}
		
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
	
}	

	