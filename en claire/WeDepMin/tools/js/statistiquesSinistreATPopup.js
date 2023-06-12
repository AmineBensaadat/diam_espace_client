var statistiquesSinistreATPopup = {	
	id:"my_pop_sinistre_AT",
	view:"window",
	css:"bg-main window_popup_statistic",
	type:"space", 
	maxHeight:600,
	maxWidth:1000,
	resize:true,
	modal:true,
	close:true,
	position:"center",
	move:true,
	margin:0,
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
				template: "<h1>Statistiques des sinistres AT </h1>",
				height:50,
			},
			{
				view:"label", template:"<h2>Nombre de sinistres AT declarés par exercice</h2> ", css:"ml4 colorRose Bold",height:30
			},
			{
				cols:[
					{
						width: 20
				   	},
					{
						css: "tbHome3",
						view:"chart",
						id: "barchart_AT",
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
					},
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
								id:"chartATPreviousOfPreviousYear",
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
								id:"chartPreviousYearAT", 
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
								id:"chartAtCurrentYear", 
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
				]
			}
		],
	}
};

function renderAllSinisterATByYear(){
	// show the popup
	webix.ui(statistiquesSinistreATPopup).show();

		// data for bar chart
	var doc=AddAction(null,1,"EspEvolutionATAnn","SELECT","ABM","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");

		// data for Previous Of Previous of Previous Year
		doc=AddAction(doc,2,"EspEvolutionATPreviousOfPreviousMonth","SELECT","ABN","O");
		doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,2,2,"Annee_",Years_lists[2],"O");

		// data for 3Dchart of year 2021
		doc=AddAction(doc,3,"EspEvolutionATPreviousYear","SELECT","ABN","O");
		doc=AddParam(doc,3,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,3,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,3,2,"Annee_",Years_lists[1],"O");

		// data for chart current year
		doc=AddAction(doc,4,"EspEvolutionATCurrentYear","SELECT","ABN","O");
		doc=AddParam(doc,4,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,4,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,4,2,"Annee_",Years_lists[0],"O");

	var xml=XML2String(doc);
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
	var zArr=splitString(data,5);
	for(var i=0; i<zArr.length; i++){
		var doc=splitString(zArr[i],4);
		
		if(doc[4].length>3){
			webix.message('Error !!!'+doc[4]);
		// barchart_AT
		} else if((doc[2]==="ESPEVOLUTIONATANN")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("barchart_AT").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["NbrSin", "year"]);
			$$("barchart_AT").parse(jdata);

		// data for chart of Previous of Previous year 
		}else if ((doc[2]==="ESPEVOLUTIONATPREVIOUSOFPREVIOUSMONTH")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartATPreviousOfPreviousYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartATPreviousOfPreviousYear").parse(jdata);
		
		// data for chart of Previous year 
		} else if ((doc[2]==="ESPEVOLUTIONATPREVIOUSYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousYearAT").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartPreviousYearAT").parse(jdata);
		
		// data for chart of year Current
		}else if ((doc[2]==="ESPEVOLUTIONATCURRENTYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartAtCurrentYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartAtCurrentYear").parse(jdata);
		}
	}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
	
}	

	