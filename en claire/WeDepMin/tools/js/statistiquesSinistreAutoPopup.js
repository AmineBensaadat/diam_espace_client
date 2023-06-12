var StatistiquesSinistresAutoPop = {	
	id:"my_pop_sinistres_auto",
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
				template: "<h1>Statistiques des sinistres auto </h1>",
				height:50,
			},
			{
				view:"label", template:"<h2>Nombre de sinistres automobile declarés par exercice</h2> ", css:"ml4 colorRose Bold",height:30
			},
			{
				cols:[
					{
						width: 20
				   	},
					{
						css: "tbHome3",
						view:"chart",
						id: "barchart_auto",
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
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
			
							{
								template:"<center><h1>"+Years_lists[2]+"</h1></center>",
								height: 40
							},
							{
								id:"chartPreviousOfPreviousYearAuto",
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
								template:"<center><h1>"+Years_lists[1]+"</h1><c/enter>",
								height: 40
							},
							{
								id:"chartPreviousYearAuto", 
								view: "chart",
								view:"chart",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								label:"#nbre#",
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
								template:"<center><h1>"+Years_lists[0]+"</h1><c/enter>",
								height: 40
							},
							{
								id:"chartCurrentYearAuto", 
								view: "chart",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								//label:"#Pourcent#%",
								label:"#nbre#",
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

function renderAllSinisterByYear(){
	// show the popup
	webix.ui(StatistiquesSinistresAutoPop).show();
		// data for bar chart
	var doc=AddAction(null,1,"EspEvolutionAutoAnn","SELECT","ABO","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
		// data for 3Dchart of year Current
		doc=AddAction(doc,2,"EspEvolutionAutoCurrentYear","SELECT","ABP","O");
		doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,2,2,"Annee_",Years_lists[0],"N");

		// data for 3Dchart of Previous year 
		doc=AddAction(doc,3,"ESPEVOLUTIONAUTOPREVIOUSYEAR","SELECT","ABP","O");
		doc=AddParam(doc,3,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,3,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,3,2,"Annee_",Years_lists[1],"N");

		// data for 3Dchart of Previous of Previous year
		doc=AddAction(doc,4,"EspEvolutionAutoPreviousOfPreviousMonth","SELECT","ABP","O");
		doc=AddParam(doc,4,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,4,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,4,2,"Annee_",Years_lists[2],"N");

	var xml=XML2String(doc);
	let data = [];
	var resultsData = [];
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
	var zArr=splitString(data,5);
	for(var i=0; i<zArr.length; i++){
		var doc=splitString(zArr[i],4);
		if(doc[4].length>3){
			webix.message('Error !!!'+doc[4]);
		// barchart_auto
		} else if((doc[2]==="ESPEVOLUTIONAUTOANN")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("barchart_auto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["NbrSin", "year"]);
			$$("barchart_auto").parse(jdata);

		// paie chart CURRENT YEAR
		}else if ((doc[2]==="ESPEVOLUTIONAUTOCURRENTYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartCurrentYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartCurrentYearAuto").parse(jdata);
		
		// paie chart CURRENT YEAR
		} else if ((doc[2]==="ESPEVOLUTIONAUTOPREVIOUSYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartPreviousYearAuto").parse(jdata);
		
		// data for 3Dchart of Previous of Previous year
		}else if ((doc[2]==="ESPEVOLUTIONAUTOPREVIOUSOFPREVIOUSMONTH")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousOfPreviousYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
		
			$$("chartPreviousOfPreviousYearAuto").parse(jdata);
		}
	}
		
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
	
}	

	