var idformVehiculeF = "formFV" + makeId();
var idDVSinVeh = "DVsinV" + makeId();
var idDVGarVeh = "DVsinG" + makeId();
var formpage = "";

var ficheVehicule = {
	id:"ficheVehicule",
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
								$$(formpage).show();
							}  
						},
						{
							view:"label", template:"<h1>Mes polices automobile</h1> ", css:"h1",
						},
						
					]
					
				},
				
				{
					view:"label", template:"<h2>Fiche Véhicule</h2> ", css:"ml4 colorRose Bold",height:30
				},

				{
					cols:[
						{view:"label", template:"N°: ", css:"ml5 colorTxt infoNum",height:20, width:30},
						{view:"label", label:"",id:"matriculeVeh", name:"matriculeVeh", css:" colorTxt infoNum",height:20, width:150, align:"left"},
						{}
					]
				},

				
				{	
					padding:{
						top:20, bottom:10, left:10, right:10
					},
					
					cols:[
						{
							id:"ficheV",
							rows:[
								{	margin:10,
									padding:5,
									type:"clean",
									responsive:"ficheV",
									cols:[
										{	
											
											minWidth:320,
											margin:10,
											type:"clean",
											rows:[
												{   
													//Details Assurance
													css:"box-fiche fichevehicule",
													id:idformVehiculeF,
													view:"form",
													borderless:true,
													cols:[
														{	
															padding:0,margin:0,
															type:"clean",
															rows:[
																{
																	//Detail Voiture
																	cols:[
																		{
																			
																			rows:[
																				{
																					padding:7,margin:0,
																					type:"clean",
																					cols:[
																						{
																							//img
																							view: "label",
																							id:"vehicule-img",
																							label:"",
																							//label: "<img src='./tools/images/car.png' style='height:80px; width:auto;'>",
																							align: "center",
																							width: 0,
																							height:80,
																						},
																						{
	
																							rows:[
																								{
																									view: "label", label:"",
																									id:"MarqueV", name:"MarqueV", css:"textUppercase titreFiche Bold",
																									align:"right",
																								},
																								{
																									view: "label", label:"",
																									id:"MatriculeV", name:"MatriculeV", css:"textUppercase titre2Fiche Bold",
																									align:"right",
																								},

																								{
																									view: "label", label:"Essence | 8 CV",
																									id:"essVpuisV", name:"essVpuisV", css:"textUppercase smlabelFiche",
																									align:"right",
																								},
																							]
																						}
																					]
																				},
																				{	
																					padding:7,margin:0,
																					type:"clean",
																					cols:[
																						{
																							view: "label", label:"Valeur Neuf", css:"textUppercase smlabelFiche",
																							align:"center",
																						},
																						{
																							view: "label", label:"",
																							id:"V_VAL_NEUV", name:"V_VAL_NEUV", css:"textUppercase smlabelFiche",
																							align:"center",
																						},
																						{
																							view: "label", label:"Valeur vénale", css:"textUppercase smlabelFiche borderLeft",
																							align:"center",
																						},
																						{
																							view: "label", label:"",
																							id:"V_VAL_VENA", name:"V_VAL_VENA", css:"textUppercase smlabelFiche",
																							align:"center",
																						},
																					]
																				},
																				{css:"borderBottom", height:1},
																				{	
																					padding:7,margin:0,
																					type:"clean",
																					cols:[
																						{
																							rows:[
																								{view: "label", label:"Garanties", css:"textUppercase titreFiche Bold",align:"center"},
																								{height:7},

																								{   
																									//Liste Garanties
																									css:"", padding:0,margin:0,
																									cols:[
																										{	padding:0,margin:0,
																											type:"clean",
																											rows:[
												
																												 {	padding:0,margin:0,
																													id:idDVGarVeh,
																													view:"list",
																													css:"listGAR",
																													borderless:true,
																													height:220,
																													scroll:"auto",
																													select:false,
																													//<div><span class='iconExpert floatRight'></span></div>
																													template:"<div class='row'><div class='col'><span class='iconExpert mdi mdi-check floatRight'></span><span class='textUppercase smlabelFiche left Bold'>#Garantie#</span><span class='smlabelFiche fontNormal'>#valeur#</span></div></div>",
																													type:{
																														height:"auto",
																													},
																													data:[]
																												},
																												
																												{
																													height:10,
																												}
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{css:"borderBottom", height:1},
																				{
																					cols:[
																						{
																							rows:[
																								{view:"label", label:"Prime totale", css:"titre3Fiche Bold textUppercase", align:"center"},
																								{view:"label", label:"6102.12 Dhs", css:"valeurFiche", id:"PtotaleV", name:"PtotaleV", align:"center"},
																							]
																						},
																						{
																							rows:[
																								{view:"label", label:"Date d'echéance", css:"titre3Fiche Bold textUppercase", align:"center"},
																								{view:"label", label:"30/11/2021", css:"valeurFiche", id:"Date_echeV", name:"Date_echeV", align:"center"},
																							]
																						}
																					]
																				},
																				{height:5},
																				
								
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
										{
											minWidth:320,
											margin:10,
											type:"clean",
											rows:[
												{   
													//Liste Avenants
													css:"box-fiche",
													hidden:true,
													cols:[
														{	padding:0,margin:0,
															type:"clean",
															rows:[
																
																{view: "label", template:"<div class='imgTitle'><img src='./tools/images/avenants.png' class=''><span>Avenant En cours</span></div>",
																 css:"textUppercase titreBox green ", align:"center", height:50 },
																{
																	height:10,
																},
																{
																	view:"list",
																	css:"listAV",
																	height:100,
																	template:"<span class='textUppercase smlabelFiche left'>#label# </span><span class='textUppercase smlabelFiche right'>#valeur#</span>",
																	scroll:false,
																	data:[
																	  { id:1, label:"Renouvellement", valeur:"6120.53"},
																	 
																	]
																},
															]
														}
													]
												},
												{   
													//Liste Sinistres
													css:"box-fiche",
													cols:[
														{	ppadding:0,margin:0,
															type:"clean",
															rows:[

																{view: "label", template:"<div class='imgTitle'><img src='./tools/images/sinistres.png' class=''><span><b>Sinistres En cours<b></span></div>",
																 css:"textUppercase titreBox ", align:"center", height:50 },

																 {
																	height:20,
																	},
																 {	
																	id:idDVSinVeh,
																	view:"list",
																	css:"listSN",
																	borderless:true,
																	height:430,
																	autowidth:true,
																	width:0,
																	//minHeight:400,
																	scroll:"auto",
																	select:false,
																	template:"<div class='row'><div class='col'><span class='textUppercase smlabelFiche left'>D. Sinistre</span><span class='textUppercase smlabelFiche right'>#dateSinis#</span></div><div class='col'><span class='textUppercase smlabelFiche left'>EXPERT</span><span class='textUppercase smlabelFiche right'><span class='iconExpert #expert# floatRight'></span></span></div></div><div class='row'><div class='col'><span class='textUppercase smlabelFiche left'>D. Déclaration</span><span class='textUppercase smlabelFiche right'>#dateDeclar#</span></div><div class='col'><span class='textUppercase smlabelFiche left'>MT Devis</span><span class='textUppercase smlabelFiche right'>#mtDevis#</span></div></div><div class='row'><div class='col'><span class='textUppercase smlabelFiche left'></span><span class='textUppercase smlabelFiche right'></span></div><div class='col'><span class='textUppercase smlabelFiche left'>Situation</span><span class='textUppercase smlabelFiche right #colorSt#'>#situation#</span></div></div>",
																	type:{
																		minHeight:80,
																		height:"auto",
																		//width:"auto",
																	},
																	
																	data:[
																		
																	  
																	]
																},
																
																{
																	height:10,
																}
															]
														}
													]
												}
											]
										}
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

function renderficheVehicule(idPolice, idHistorique, matriculeV){
	var doc=AddAction(null,1,"VEHICULEFICHE","SELECT","AAG","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,4,"Idhistorique_",idHistorique,"O");

	doc=AddAction(doc,2,"VEHICULESIN","SELECT","AAH","O");
	doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,2,4,"Idpolice_",idPolice,"O");
	doc=AddParam(doc,2,5,"matricule_",matriculeV,"O");

	doc=AddAction(doc,3,"VEHICULEGAR","SELECT","AAI","O");
	doc=AddParam(doc,3,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,3,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,3,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,3,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,3,4,"Idhistorique_",idHistorique,"O");

	doc=AddAction(doc,4,"USAGEVEHICULE","SELECT","AAJ","O");
	doc=AddParam(doc,4,0,"Idhistorique_",idHistorique,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
		var zArr=splitString(data,5);
		data=null;
		for(var i=0; i<zArr.length; i++){
			var doc=splitString(zArr[i],4);
			if(doc[4].length>3){
				webix.message('Error !!!'+doc[4]);
			} else if((doc[2]==="VEHICULEFICHE")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
				var jdata = csv2ARRAY(doc[5],String.fromCharCode(3),String.fromCharCode(2));
				var tmp = ["MarqueV", "MatriculeV", "essVpuisV", "V_VAL_NEUV", "V_VAL_VENA", "V_DEF_REC", "V_TIERCE", "V_VOL", "V_INCENDIE", "V_BRIS_GLA", "V_Collision", "V_Assist", "V_CarteVerte", "V_PFI", "Date_effetV", "Date_echeV", "PtotaleV" ];			
				

				var obj = {};
				for(var j = 0; j < jdata[0].length; j++) {
					if(tmp[j]=="MatriculeV"){
						//matricule in header
						$$("matriculeVeh").setValue(jdata[0][j]);
					}
					switch(tmp[j]){
						case 'V_VAL_NEUV':
							obj[tmp[j]]=formatDecimal(jdata[0][j]);  
							break;
						case 'V_VAL_VENA':
							obj[tmp[j]]=formatDecimal(jdata[0][j]);  
							break;
						case 'PtotaleV':
							obj[tmp[j]]=formatDecimal(jdata[0][j]);  
							break;
						default:
							obj[tmp[j]]=jdata[0][j];  
							break;
					}
				}; 
				$$(idformVehiculeF).setValues(obj);   
			} else if((doc[2]==="VEHICULESIN")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
				var data = csv2ARRAY(doc[5],String.fromCharCode(3),String.fromCharCode(2));
				var tmp = convertToArrayOfObjects(data, ["id","dateSinis", "dateDeclar", "expert", "mtDevis", "situation"]);
				for(var j = 0; j < tmp.length; j++) {
					//expert icon
					if(tmp[j]["expert"]=="O"){
						tmp[j]["expert"]="mdi mdi-check-circle";
					}else{
						tmp[j]["expert"]="mdi mdi-checkbox-blank-circle";
					}
					//mtDevis
					tmp[j]["mtDevis"]=formatDecimal(tmp[j]["mtDevis"]);  
					switch (tmp[j]["situation"]){
						case 'E':
							tmp[j]["situation"]="En cours";
							tmp[j]["colorSt"]="green";
							break;
						case 'C':
							tmp[j]["situation"]="Cloturé";
							tmp[j]["colorSt"]="red";
							break;
						case 'S':
							tmp[j]["situation"]="Sans suite";
							tmp[j]["colorSt"]="yellow";
							break;
						case 'R':
							tmp[j]["situation"]="En cours";
							tmp[j]["colorSt"]="green";
							break;
					}
				}; 

				$$(idDVSinVeh).clearAll();
				$$(idDVSinVeh).parse(tmp);
			} else if((doc[2]==="VEHICULEGAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
				var data = csv2ARRAY(doc[5],String.fromCharCode(3),String.fromCharCode(2));
				var tmp = convertToArrayOfObjects(data, ["Garantie", "valeur"]);
				for(var j = 0; j < tmp.length; j++) {
					if(tmp[j]["valeur"]=='0'){
						tmp[j]["valeur"]='';
					}
				}
				$$(idDVGarVeh).clearAll();
				$$(idDVGarVeh).parse(tmp);

			} else if((doc[2]==="USAGEVEHICULE")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
				var UsV = doc[5];
				var imgSrc="<img src='./tools/images/vehiculeAA.png' style='height:70px; width:auto;'>";
				if(UsV.length>0){
					imgSrc="<img src='./tools/images/vehicule"+UsV+".png' style='height:70px; width:auto;'>";
				}
				$$("vehicule-img").setValue(imgSrc);   
			}
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function showficheVehicule(idPolice, idHistorique, matriculeV, formPage) {
	window['formpage'] = formPage;
        $$("ficheVehicule").show();
        renderficheVehicule(idPolice, idHistorique, matriculeV);
}