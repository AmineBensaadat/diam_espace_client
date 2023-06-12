'use strict';
var myIdHAdhAff = ["IdPARENT", "IdAdherent", "NOM", "PRENOM", "LIEN", "SEXE", "DATENAISSANCE", "DATEADHESION", "DATESORTIE", "ETAT", "Photo"];                 

var formIdVal = ["IdAdherent", "MATRICULEAdh", "nameAdherent", "VIPAdh", "DATEADHESIONAdh", "DATESORTIEAdh", "ETATAdh", "CIN_SejourAdh", "DATENAISSANCEAdh",
"SEXEAdh", "SituationAdh", "BeneficiaireAdh", "ADRESSEAdh", "IdVilleAdh", "villeAdh", "CodePostalAdh",
"IdProfessionAdh", "ProfessionAdh", "DATEEMBAUCHEAdh","InvaliditeAdh", "Date_InvaliditeAdh", "IdBanqueAdh", "BanqueAdh", "AgenceAdh", "NumCompteAdh", "IdPoliceAdh" ];

var arrLienParente = [
	{ "id":'A', "value":"Adhérent" },
	{ "id":'C', "value":"Conjoint" },
	{ "id":'E', "value":"Enfant" }
];
	


var ficheAdherent = {
	id:"ficheAdherent",
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:3,
	cols:[
		{	
			
			rows:[
				{	minWidth:300,
					height:40,
					cols:[
						{view:"label", id:"", template:"<span class='mdi mdi-arrow-left'></span>", width:40,
						 css:"icon-return", 
						 click:function(){
							$$('maladieAdherents').show();

							$$(idgridSinDosMal).scrollTo(1,1);
						 }	
					  	}, 
						{
							view:"label", template:"<h1>Mes polices : maladie</h1> ", css:"h1",
						},
						
					]
					
				},
				
				{
					view:"label", template:"<h2>Fiche Adhérent</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"idPoliceFichAdh", name:"idPoliceFichAdh", css:" colorTxt infoNum",height:20, align:"left"},
						
					]
				},
				
				{	
					padding:{
						top:20, bottom:10, left:10, right:10
					},
					
					cols:[
						{
							id:"fiche",
							rows:[
								{	margin:10,
									padding:5,
									type:"clean",
									responsive:"fiche",
									cols:[
										{	
											
											margin:10,padding:0,
											type:"clean",
											id:"adh",
											rows:[
												{   
													//Details Assurance
													css:"box-fiche ficheAdherent",
													id:"idformAdherentF",
													borderless:true,
													view:"form",
													responsive:"adh",
													margin:0,padding:0,
													cols:[
														{	minWidth:150,
															css:"bgGrey",
															margin:5, padding:0,
															type:"clean",
															gravity:1,
															rows:[
																{height:20},
																{	
																	//img
																	view: "label",
																	id:"adherent-img",
																	label:"",
																	align: "center",
																	width: 0,
																	height:130,
																},
																{height:5},

																{
																	view: "label", label:"",
																	id:"nameAdherent", name:"nameAdherent", css:"textUppercase titre2Fiche Bold",
																	align:"center",
																},
																{height:5},
																{
																	view: "label", label:"N° Adhésion",
																	css:" labelFiche grey",
																	align:"center",height:20,
																},
																{
																	view: "label", label:"",
																	id:"MATRICULEAdh", name:"MATRICULEAdh", css:"textUppercase titre3Fiche Bold blue",
																	align:"center",
																},
																{height:5},
																{
																	view: "label", label:"VIP", css:" labelFiche grey",
																	align:"center", height:20,
																},
																{
																	view: "checkbox", id:"VIPAdh", name:"VIPAdh", 
																	css:"textUppercase titre3Fiche Bold blue checkboxCenter",
																	labelWidth:0, align:"center", readonly:true, 
																	format:{parse:function(a){if(a=='N'){a=0;}else if(a=='O'){a=1}return a;}}
																},
																{height:5},
															]
														},
														{	
															minWidth:320,
															gravity:2,
															padding:0,margin:0,
															type:"clean",
															rows:[
																{
																	
																	cols:[
																		{	
																			padding:8,margin:0,
																			
																			rows:[
																				{	height:20,
																					
																					cols:[
																						{	
																							view: "label", label:"CIN / Carte séjour ", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{	
																							view: "label", label:"",
																							id:"CIN_SejourAdh", name:"CIN_SejourAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},



																				{	
																					height:20,
																					cols:[
																						{	
																							view: "label", label:"Date de naissance", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{	
																							view: "label", label:"",
																							id:"DATENAISSANCEAdh", name:"DATENAISSANCEAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Sexe", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label",
																							id:"SEXEAdh", name:"SEXEAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Situation familiale", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"Marié",
																							id:"SituationAdh", name:"SituationAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},


																		
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Bénéficiaires (ayant droits)", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"Parents",
																							id:"BeneficiaireAdh", name:"BeneficiaireAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Adresse", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"57, quartier berger",
																							id:"ADRESSEAdh", name:"ADRESSEAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Ville", css:" labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"Casablanca",
																							id:"villeAdh", name:"villeAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Code postal", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"20500",
																							id:"CodePostalAdh", name:"CodePostalAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						{
																							view: "label", label:"Profession", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{
																							view: "label", label:"Cadre",
																							id:"ProfessionAdh", name:"ProfessionAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},
																				
																				{height:5},


																				{	
																					height:20,
																					cols:[
																						{	
																							gravity:1,
																							view: "label", label:"Actif", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{	
																							gravity:1,
																							view: "checkbox", label:"", id:"ETATAdh", name:"ETATAdh", 
																							css:"textUppercase titre3Fiche Bold blue checkboxRight",
																							labelWidth:0, align:"center", readonly:true, 
																							format:{parse:function(a){if(a=='N'){a=0;}else if(a=='O'){a=1}return a;}}
																						},
																						
																					]
																				},

																				{	
																					cols:[
																						{
																							rows:[
																								{	
																									height:20,
																									view: "label", label:"Date embauche", css:"labelFiche grey Bold",
																									align:"left", 
																								},
																								{	
																									height:20,
																									view: "label", label:"12/02/2010",
																									id:"DATEEMBAUCHEAdh", name:"DATEEMBAUCHEAdh", css:"textUppercase titre3Fiche Bold blue",
																									align:"left",
																								},
																							]
																						},
																						{
																							rows:[
																								{	
																									height:20,
																									view: "label", label:"Date Adhésion", css:"labelFiche grey Bold",
																									align:"left", 
																								},
																								{	
																									height:20,
																									view: "label", label:"12/02/2010",
																									id:"DATEADHESIONAdh", name:"DATEADHESIONAdh", css:"textUppercase titre3Fiche Bold blue",
																									align:"left",
																								},
																							]
																						},
																						{
																							rows:[
																								{	
																									height:20,
																									view: "label", label:"Date Sortie", css:"labelFiche grey Bold",
																									align:"left", 
																								},
																								{	
																									height:20,
																									view: "label", label:"-",
																									id:"DATESORTIEAdh", name:"DATESORTIEAdh", css:"textUppercase titre3Fiche Bold blue",
																									align:"left",
																								},
																							]
																						},
																					]
																				},
																				{	
																					height:5,
																				},

																				{	
																					height:20,
																					cols:[
																						{	
																							
																							view: "label", label:"Invalidité", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{	
																							view: "checkbox", id:"InvaliditeAdh", name:"InvaliditeAdh",
																							css:"textUppercase titre3Fiche Bold blue checkboxRight",
																							labelWidth:0, align:"center", readonly:true, 
																							format:{parse:function(a){if(a=='O'){a=1;}else{a=0}return a;}}
																						},
																						
																					]
																				},
																				{	
																					height:20,
																					cols:[
																						
																						{	
																							
																							view: "label", label:"Date Invalidité", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{	
																							
																							view: "label", label:"-",
																							id:"Date_InvaliditeAdh", name:"Date_InvaliditeAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"right",
																						},
																					]
																				},

																				{	
																					height:5,
																				},

																				{	
																					height:20,		
																					view: "label", label:"Informations Bancaires", css:"labelFiche grey Bold textUppercase",
																					align:"left", 
																				},
																				
																				{	
																					
																					cols:[
																						{	
																							
																							rows:[
																								{	
																									height:20,
																									view: "label", label:"Banque", css:"labelFiche grey Bold",
																									align:"left", 
																								},
																								{	
																									height:20,
																									view: "label", label:"BMCE",
																									id:"BanqueAdh", name:"BanqueAdh", css:"textUppercase titre3Fiche Bold blue",
																									align:"left",
																								},
																							]
																						},
																						{	
																							
																							rows:[
																								{	
																									height:20,
																									view: "label", label:"Agence", css:"labelFiche grey Bold",
																									align:"left", 
																								},
																								{	
																									height:20,
																									view: "label", label:"BMCE Maarif",
																									id:"AgenceAdh", name:"AgenceAdh", css:"textUppercase titre3Fiche Bold blue",
																									align:"left",
																								},
																							]
																						},
																						
																					]
																				},

																				{
																							
																					rows:[
																						{	
																							height:20,
																							view: "label", label:"RIB", css:"labelFiche grey Bold",
																							align:"left", 
																						},
																						{	
																							height:20,
																							view: "label", label:"12796857438987076958",
																							id:"NumCompteAdh", name:"NumCompteAdh", css:"textUppercase titre3Fiche Bold blue",
																							align:"left",
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

												{
													view:"label", template:"<h2>Liste des Affiliés </h2> ", css:"colorRose Bold",height:30
												},
												{	
													id:"idgridAdhAff",
													minWidth:320,
													minHeight:180,
													view:"datatable", 
													css:"styleDT",
													resizeColumn: true,
													select: true,
													borderless:false,
													rowHeight:40,
													autoHeight:true,
													headerRowHeight:40,
													columns:[
														{ id:myIdHAdhAff[0], header:"idParent", width:50, hidden:true},
														{ id:myIdHAdhAff[1], header:"idAdherent", width:50, hidden:true},
														{ id:myIdHAdhAff[2], header:"Nom", width:120, minWidth:120, sort:"string",fillspace:true},
														{ id:myIdHAdhAff[3], header:"Prénom", width:120, minWidth:120, sort:"string",fillspace:true},
														{ id:myIdHAdhAff[4], header:[ {text:"Lien de parenté", css:{'text-align':'center'} }], css:{'text-align':'center'},width:140, sort:"string",options:arrLienParente,fillspace:true},
														{ id:myIdHAdhAff[5], header:"Sexe", width:90, sort:"string", options:arrSexe, fillspace:true},
														{ id:myIdHAdhAff[6], header:[ {text:"Date de naissance", css:{'text-align':'center'} }], width:140, sort:"date", css:{'text-align':'center'}, format: webix.Date.dateToStr("%d/%m/%Y"), fillspace:true},
														{ id:myIdHAdhAff[7], header:[ {text:"Date Adhésion", css:{'text-align':'center'} }], width:130, sort:"date", css:{'text-align':'center'}, format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
														{ id:myIdHAdhAff[8], header:[ {text:"Date Sortie", css:{'text-align':'center'} }], width:130, sort:"date", css:{'text-align':'center'}, format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
														{ id:myIdHAdhAff[9], header:[ {text:"Actif", css:{'text-align':'center'} }], width:70, template:"{common.rcheckboxON()}", css:{'text-align':'center'}, sort:"string",fillspace:true},
														{ id:myIdHAdhAff[10], header:"Photo", hidden:true, width:100, template:"{common.rcheckboxON()}", css:{'text-align':'center'}, sort:"string",fillspace:true},
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
													scheme:{
														$init:function(obj){
															obj.DATENAISSANCE = date_format(obj.DATENAISSANCE);
															obj.DATEADHESION = date_format(obj.DATEADHESION);
															obj.DATESORTIE = date_format(obj.DATESORTIE);
														}
													},
													on:{
														"onItemDblClick":function(id, e, trg){ 
															
														}
													},
													data: [
													
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



function renderficheAdherent(item,idPolice, Police){
	$$("idPoliceFichAdh").setValue(Police);

	var doc=AddAction(null,1,"ADHERENTFICHE","SELECT","AAD","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",idPolice,"O");

	doc=AddAction(doc,2,"ADHERENTAFFILIE","SELECT","AAE","O");
	doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,2,2,"IdAdherent_",item["IdAdherent"],"O");
	doc=AddParam(doc,2,3,"Idpolice_",idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
		var zArr=splitString(data,5);
		data=null;
		for(var i=0; i<zArr.length; i++){
			var doc=splitString(zArr[i],4);
			if(doc[4].length>3){
				webix.message('Error !!!'+doc[4]);
			} else if((doc[2]==="ADHERENTFICHE")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
				var jdata = csv2ARRAY(doc[5],String.fromCharCode(3),String.fromCharCode(2));
				var obj = {};
				for(var j = 0; j < jdata[0].length; j++) {
					switch (formIdVal[j]){
						case "SEXEAdh":
							if(jdata[0][j]=="M"){
								obj[formIdVal[j]]="Masculin";
								$$("adherent-img").setValue("<img class='rounded' src='./tools/images/portraitmen.png' style='height:120px;margin-top:2px;'>");
							}else if(jdata[0][j]=="F"){
								obj[formIdVal[j]]="Féminin";
								$$("adherent-img").setValue("<img class='rounded' src='./tools/images/portraitfemale.png' style='height:120px;margin-top:2px;'>");
							}else{
								$$("adherent-img").setValue("<img class='rounded' src='./tools/images/portraitmen.png' style='height:120px;margin-top:2px;'>");
							}
							break;
						case "SituationAdh":
							if(jdata[0][j]=="C")obj[formIdVal[j]]="Célibataire";
							if(jdata[0][j]=="M")obj[formIdVal[j]]="Marié";
							break;
						default:
							obj[formIdVal[j]]=jdata[0][j];  
					}
				}; 
				$$("idformAdherentF").setValues(obj);   
			} else if((doc[2]==="ADHERENTAFFILIE")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
				var grid = $$("idgridAdhAff");
				grid.clearAll();
				var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),myIdHAdhAff);
				grid.parse(jdata, "json");
			}
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}


function showficheAdherent(_item, _idPolice,_categorie) {
		renderficheAdherent(_item,_idPolice,_categorie );
		$$("ficheAdherent").show();
}
