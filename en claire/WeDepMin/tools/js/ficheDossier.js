var idformDosSin = "formDosSin" + makeId();
var ficheDossierSin = {
	id:"ficheDossierSin",
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
							$$("sinistresDosMaladie").show();
						 }	
					  	}, 
						{
							view:"label", template:"<h1>Mes sinistres : maladie</h1> ", css:"h1",
						},
					]
				},
				{
					view:"label", template:"<h2>Détails Dossier</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"N°: ", css:"ml5 colorTxt infoNum",height:20, width:30},
						{view:"label", label:"",id:"numDossierMAL", name:"numDossierMAL", css:" colorTxt infoNum",height:20, align:"left"},	
					]
				},
				{	
					padding:{
						top:20, bottom:10, left:10, right:10
					},
					cols:[
						{
							rows:[
								{	margin:10,
									padding:5,
									type:"clean",
									cols:[
										{	id:idformDosSin,
											css:"box-fiche",
											margin:10,
											type:"clean",
											view:"form", padding:0,
											rows:[
												{   
													responsive:idformDosSin,
													cols:[
														{	minWidth:300,
															gravity:1,
															padding:0,margin:0,
															type:"clean",
															rows:[
																{
																	cols:[
																		{	
																			padding:10,margin:0,
																			rows:[
																				{	
																					height:20,		
																					view: "label", label:"Informations Patient", css:"enteteFiche blue Bold textUppercase",
																					align:"left", 
																				},
																				{	
																					height:5,	
																				},
																				{	height:20,
																					cols:[
																						{
																							view: "label", label:"Adhérent", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"AdherentMAL", name:"AdherentMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Patient", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"PatientMAL", name:"PatientMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:10,	
																				},
																				{	
																					height:20,		
																					view: "label", label:"Informations Dossier", css:"enteteFiche blue Bold textUppercase",
																					align:"left", 
																				},
																				{	
																					height:5,	
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"N° Lot", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"LotMAL", name:"LotMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Nature maladie", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"NatureMaladieMAL", name:"NatureMaladieMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Médecin", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"MedecinMAL", name:"MedecinMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Spécialité médecin", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"SpecialiteMedecinMAL", name:"SpecialiteMedecinMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	height:10,},
																				{	height:20,
																					cols:[
																						{
																							view: "label", label:"Date visite", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"DATEVISITEMAL", name:"DATEVISITEMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Date réception dossier", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"DATERECEPTMAL", name:"DATERECEPTMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Date saisie dossier", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"DATESAISIEMAL", name:"DATESAISIEMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Statut dossier", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"StatusMAL", name:"StatusMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Date statut", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"DateStatusMAL", name:"DateStatusMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																			]
																		}
																	]
																},
															]
														},
														{	minWidth:300,
															gravity:1,
															padding:0,margin:0,
															type:"clean",
															rows:[
																{
																	cols:[
																		{	
																			padding:10,margin:0,
																			rows:[
																				{	
																					height:25,
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Date remboursement", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"DATEREMBMAL", name:"DATEREMBMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Montant engagé", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"MTDeclareMAL", name:"MTDeclareMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Montant couvert", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"MTENGAGEMAL", name:"MTENGAGEMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Base remboursement", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"MTBaseRembMAL", name:"MTBaseRembMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{	
																							gravity:1,
																							view: "label", label:"Montant remboursé", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{	
																							gravity:1,
																							view: "label", label:"-",
																							id:"MTREMBMAL", name:"MTREMBMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{height:20},
																				{	
																					height:20,		
																					view: "label", label:"Informations Contre Visite", css:"enteteFiche blue Bold textUppercase",
																					align:"left", 
																				},
																				{height:5,},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Contre visite", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"ContreVisiteMAL", name:"ContreVisiteMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Date édition contre visite", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"DateEditionCVMAL", name:"DateEditionCVMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Date limite contre visite", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"",
																							id:"DateLimiteCVMAL", name:"DateLimiteCVMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{
																					cols:[
																						{	
																							height:20,
																							view: "label", label:"Médecin", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{	
																							height:20,
																							view: "label", label:"",
																							id:"MedecinCVMAL", name:"MedecinCVMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{
																					cols:[
																						{	
																							height:20,
																							view: "label", label:"Statut", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{	
																							height:20,
																							view: "label", label:"",
																							id:"StatutCVMAL", name:"StatutCVMAL", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																			]
																		}
																	]
																},
															]
														}
													]
												},
											]
										},
										
									]
								}
							]
						},
					]
				},
			]
		}
	]

};
function renderSinistreDosMaladie(arr_){
	$$("numDossierMAL").setValue(arr_['idSinistre']);
	var doc=AddAction(null,1,"FICHESINMALADIE","SELECT","AAF","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",arr_['IdPolice'],"O");
	doc=AddParam(doc,1,3,"idDecompte_",arr_['idSinistre'],"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		var jdata = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
		var tmp = ["idDecompteMAL", "IdPoliceMAL" , "IdAdherentMAL",  "AdherentMAL", "IdPATIENTMAL", "PatientMAL", "ContreVisiteMAL", "DateEditionCVMAL", "DateLimiteCVMAL" ,"MedecinCVMAL",
			"StatutCVMAL", "LotMAL", "IdNatMALADIEMAL", "NatureMaladieMAL", "MedecinMAL", "SpecialiteMedecinMAL", "DATEVISITEMAL", "DATERECEPTMAL",
			"DATESAISIEMAL", "StatusMAL", "DateStatusMAL", "DATEREMBMAL", "MTENGAGEMAL",  "MTDeclareMAL", "MTBaseRembMAL", "MTREMBMAL"  ];			

			var obj = {};
				for(var j = 0; j < jdata[0].length; j++) {
					switch (tmp[j]){
	
						case "StatusMAL":
							if(jdata[0][j]=="A")obj[tmp[j]]="Saisie Int.";
							if(jdata[0][j]=="D")obj[tmp[j]]="Emis à la Cie";
							if(jdata[0][j]=="E")obj[tmp[j]]="En cours Cie";
							if(jdata[0][j]=="F")obj[tmp[j]]="Traité Cie";
							if(jdata[0][j]=="G")obj[tmp[j]]="Rejet Cie";
							if(jdata[0][j]=="H")obj[tmp[j]]="Complement d'information";
							if(jdata[0][j]=="I")obj[tmp[j]]="Reglé Cie";
							if(jdata[0][j]=="J")obj[tmp[j]]="Approbation Reglé Cie";
							if(jdata[0][j]=="O")obj[tmp[j]]="Validé";
							if(jdata[0][j]=="N")obj[tmp[j]]="Non Validé";
							if(jdata[0][j]=="X")obj[tmp[j]]="Archivé";
							break;
						case "ContreVisiteMAL":
							if(jdata[0][j]=="O")obj[tmp[j]]="Oui";
							if(jdata[0][j]=="N")obj[tmp[j]]="Non";
							break;
						case "StatutCVMAL":
							if(jdata[0][j]=="O")obj[tmp[j]]="Oui";
							if(jdata[0][j]=="N")obj[tmp[j]]="Non";
							break;
							
						case "MTENGAGEMAL":
							obj[tmp[j]]=formatDecimal(jdata[0][j]);
							break;
						case "MTDeclareMAL":
							obj[tmp[j]]=formatDecimal(jdata[0][j]);
							break;
						case "MTBaseRembMAL":
							obj[tmp[j]]=formatDecimal(jdata[0][j]);
							break;
						case "MTREMBMAL":
							obj[tmp[j]]=formatDecimal(jdata[0][j]);
							break;
						
						default:
							obj[tmp[j]]=jdata[0][j];  
							break;
					}
				}; 
				$$(idformDosSin).setValues(obj);   
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);


	
	
}


