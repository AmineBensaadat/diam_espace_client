var statistiquesSinistreMaritimePopup = {	
	id:"my_pop_sinistre_Maritime",
	view:"window",
	css:"bg-main window_popup_statistic",
	type:"space", 
	maxHeight:600,
	maxWidth:1000,
	resize:true,
	close:true,
	position:"center",
	move:true,
	modal:true,
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
				template: "<h1>Statistiques des sinistres Maritime </h1>",
				height:50,
			},
			{
				view:"label", template:"<h2>Nombre de sinistres maritime declarés par exercice</h2> ", css:"ml4 colorRose Bold",height:30
			},
			{
				cols:[
					{
						width: 20
				   	},
					{
						css: "tbHome3",
						view:"chart",
						id: "barchart_maritime",
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
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
			
							{
								template:"<center><h1>"+Years_lists[2]+"</h1></center>",
								height: 40
							},
							{
								id:"chartMaritimePreviousOfPreviousYear",
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
								id:"chartPreviousYearAuto", 
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
								id:"chartMaritimeCurrentYear", 
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

function renderAllSinisterMaritimeByYear(){
	// show the popup
	webix.ui(statistiquesSinistreMaritimePopup).show();

		// data for bar chart
	var doc=AddAction(null,1,"EspEvolutionMaritimeAnn","SELECT","ABS","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");

		// data for chart of Previous of Previous year 
		doc=AddAction(doc,2,"EspEvolutionMaritimePreviousOfPreviousMonth","SELECT","ABT","O");
		doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,2,2,"Annee_",Years_lists[2],"O");
		// data for chart of Previous year
		doc=AddAction(doc,3,"EspEvolutionMaritimePreviousYear","SELECT","ABT","O");
		doc=AddParam(doc,3,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,3,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,3,2,"Annee_",Years_lists[1],"O");
		// data for 3Dchart of year 2022
		doc=AddAction(doc,4,"EspEvolutionMaritimeCurrentYear","SELECT","ABT","O");
		doc=AddParam(doc,4,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,4,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,4,2,"Annee_",Years_lists[0],"O");

	var xml=XML2String(doc);
	let data = [];
	var resultsData = [];
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
	var zArr=splitString(data,5);
	for(var i=0; i<zArr.length; i++){
		var doc=splitString(zArr[i],4);
		if(doc[4].length>3){
			webix.message('Error !!!'+doc[4]);
		// barchart_maritime
		} else if((doc[2]==="ESPEVOLUTIONMARITIMEANN")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("barchart_maritime").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["NbrSin", "year"]);
			$$("barchart_maritime").parse(jdata);

		// data for chart of Previous of Previous year 
		}else if ((doc[2]==="ESPEVOLUTIONMARITIMEPREVIOUSOFPREVIOUSMONTH")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartMaritimePreviousOfPreviousYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartMaritimePreviousOfPreviousYear").parse(jdata);
		
		// data for chart of Previous year 
		} else if ((doc[2]==="ESPEVOLUTIONMARITIMEPREVIOUSYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartPreviousYearAuto").parse(jdata);
		
		// data for chart Current year
		}else if ((doc[2]==="ESPEVOLUTIONMARITIMECURRENTYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartMaritimeCurrentYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartMaritimeCurrentYear").parse(jdata);
		}
	}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
	
}	

	