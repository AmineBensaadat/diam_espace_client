
var myIdHSinDosMal = ["idSinistre", "IdPolice", "police", "Lot", "IdAdherent", "Adherent", "IdPATIENT", "Patient", "DATERECEPT", "MTENGAGE", "MTREMB", "Statut", "Ndhesion"];                 
var idgridSinDosMal = "gridSinDosMal" + makeId();


var sinistresDosMaladie = {
	id:"sinistresDosMaladie",
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
							showSinMaladieListe(false, "sinistresMaladie");
					  	 }  
						},
						{
							view:"label", template:"<h1>Mes sinistres : Maladie</h1> ", css:"h1",
						},
						{ 
							padding:{
								top:20, bottom:50, left:30, right:50
							},
							view:"button", css:"btn_all", type:"icon", icon:"mdi mdi-plus", label:"éclamation", hidden:!mySession.getReclamation(), width:180, click:function(){
								SelectedRow = $$(idgridSinDosMal).getSelectedItem();
								if(SelectedRow){
									webix.ui({
										view:"window",
										id:"ceate_maladie_reclamation_window",
										css: "ceate_reclamation",
										height:400,
										width:800,
										position:"top",
										move: true,
										padding:-50,
										modal:true,
										left:700, top:350,
										close:true,
										head:"Creation d'une réclamation",
										body:{
											borderless: true,
											rows: 
											[
												{
													height:50,
													borderless: true,
													padding:{
														 left:10, top: 10
													},
													cols:
													[
														{
															borderless: true,
															template:"<h1>N° bordereau : "+SelectedRow.Lot+"</h1>"
														},
														{
															borderless: true,
															template:isAssigned(SelectedRow.Adherent)?" <h1>Adhérent : "+SelectedRow.Adherent+" <h1>":""
														}
													]
												},
												{
													view:"form", 
													id:"reclamation_maladie_form",
													borderless: true,
													elements:[
																{ view:"textarea", id:"msgMaladieText", name:"message" },
																{
																	view:"uploader", upload:"//docs.webix.com/samples/server/upload",
																	height:40,
																	css: "button_reclamation_add_file",
																	id:"uploader_maladie_reclamation_files", name:"files",
																	link:"doclist", autosend:false,
																	label:"<span class='text'>Ajouter des documents</span>",
																	multiple: false,
																},
																{ view:"list", scroll:true, id:"doclist", type:"uploader", autoheight:true, borderless:true	 },
																{cols:[
																	{ 
																		align:"right",
																		height:40,
																		view:"button", value:"envoyer", css:"save_reclmation_button",
																		click:function(){ 
																			IdSinistre= SelectedRow.idSinistre;
																			var Message = $$("msgMaladieText").getValue();

																			if(Message){
																				checkMaladieReclamationForm(-1, IdSinistre, Message, "uploader_maladie_reclamation_files", 1);
																			}else{
																				webix.alert("Merci d'ecrire quelque chose");
																			}
																		} 
																	}
																]}
															]
												}
											]
										}
									  }).show();
								}else{
									webix.alert("Merci de sélectionner une ligne");	
								}
							}  
						}
						
					]
					
				},
				
				{
					view:"label", template:"<h2>Liste des Dossiers</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"libPoliceSinMal", name:"libPoliceSinMal", css:" colorTxt infoNum",height:20,  align:"left"},
						{view:"label", label:"",id:"idPoliceSinMal", name:"idPoliceSinMal", hidden:true},
						
					]
				},
				
				{
					view:"form", id:"formDossiersMal",
					type:"clean",
					padding:{
						top:0, bottom:0, left:10, right:10
					},
					css:"noBg noBorder",
					elements:[
						{	
							padding:3,
							cols:[
								{	id:"resMal",
									rows:[
										{	
											responsive:"resMal",
											cols:[
												{},
												{minWidth:300,
													rows:[
														{	
															cols:[
																{
																	rows:[
																		{ view:"datepicker", label:"DU", id:"duM", name:"duM", minWidth:110, maxWidth:170,  labelWidth:30, stringResult:true, format:"%d/%m/%Y" },
																	]
																},
																{
																	rows:[
																		{ view:"datepicker", label:"AU", id:"auM", name:"auM", minWidth:110, maxWidth:170,  labelWidth:30, stringResult:true, format:"%d/%m/%Y" },
																	]
																},
																{ view:"button", value:"OK", css:"btnSearch", width:35,
																	click:function(){
																		var du = $$("formDossiersMal").getValues().duM;
																		var au = $$("formDossiersMal").getValues().auM;
																		renderSinistresDosMaladie($$("idPoliceSinMal").getValue(), $$("libPoliceSinMal").getValue(), du, au);
																	}
																},
															]
														}
													]
												},
											]
										}
									]
								}
							]
						},
					]
				},
				{	
					type:"clean",
					padding:{
						top:0, bottom:10, left:20, right:10
					},
					cols:[
						{
							minWidth:300,
							height:450,
							id:idgridSinDosMal,
							view:"datatable", 
							css:"styleDT",
							borderless:false,
							rowHeight:40,
							resizeColumn: true,
							resizeRow: false,
							select:"row",
							navigation:false,
							scrollX:true,
							datatype:"jsarray",
							autofocus:false,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdHSinDosMal[0], header:"IdDecompte", width:50, hidden:true},
								{ id:myIdHSinDosMal[12], header:[ {text:"N°Adhesion", css:{'text-align':'center'} },{ content:"textFilter" } ], css:{'text-align':'left'},  minWidth:120, sort:"string",fillspace:true},
								{ id:myIdHSinDosMal[3], header:[ {text:"N°bordereau", css:{'text-align':'center'} },{ content:"textFilter" } ], css:{'text-align':'center'},  minWidth:120, sort:"string",fillspace:true},
								{ id:myIdHSinDosMal[1], header:[ {text:"Marque", css:{'text-align':'center'} },{ content:"selectFilter" } ], width:120, hidden:true},
								{ id:myIdHSinDosMal[4], header:[ {text:"idAdherent", css:{'text-align':'center'} },{ content:"textFilter" } ], css:{'text-align':'center'}, width:50, hidden:true},
								{ id:myIdHSinDosMal[5], header:[ {text:"Adhérent", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:120, sort:"string", fillspace:true},
								{ id:myIdHSinDosMal[6], header:"idPatient", width:50, hidden:true},
								{ id:myIdHSinDosMal[7], header:[ {text:"Patient", css:{'text-align':'center'} },{ content:"textFilter" } ], css:{'text-align':'left'}, minWidth:150, sort:"string", fillspace:true},
								{ id:myIdHSinDosMal[8], header:[ {text:"Date Déclaration", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:100, sort:'ntsDate', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdHSinDosMal[9], header:[ {text:"Montant Engagé", css:{'text-align':'center'} },{ content:"textFilter" } ],  minWidth:120, sort:'ntsSortDecimal', css:{'text-align':'center'}, format:myReelformat,fillspace:true},
								{ id:myIdHSinDosMal[10], header:[ {text:"Montant Remboursé", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:120, sort:'ntsSortDecimal', css:{'text-align':'center'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns', css:{'text-align':'center'} }},
								{ id:myIdHSinDosMal[11], header:[ {text:"Statut", sort:"string", css:{'text-align':'center'}} ], template:"<span class='#statutClass#'>#Statut#</span>", minWidth:100,fillspace:true, css:{'text-align':'right'}},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:30,}
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
									obj.DATERECEPT = date_format(obj.DATERECEPT);
									switch (obj.Statut){
										case 'F':
											obj.Statut="Traité Cie";
											obj.statutClass="statut_Ouverte";
											break;
										case 'G':
											obj.Statut="Rejet Cie";
											break;
										case 'E':
											obj.Statut="En cours Cie";
											obj.statutClass="statut_Ouverte";
											break;
										case 'A':
											obj.Statut="Saisie Int.";
											obj.statutClass="statut_bleu";
											break;
										case 'I':
											obj.Statut="Reglé Cie";
											obj.statutClass="statut_Traitee";
											break;
										case 'J':
											obj.Statut="Approbation Reglé Cie";
											break;
										case 'X':
											obj.Statut="Archivé";
											obj.statutClass="statut_Ouverte";
											break;

										case 'D':
											obj.Statut="Emis à la Cie";
											obj.statutClass="statut_bleu";
											break;

										case 'H':
											obj.Statut="Complément Infos";
											obj.statutClass="statut_red";
											break;
										
										case 'O':
											obj.Statut="Validé";
											obj.statutClass="statut_Traitee";
											break;
										case 'N':
											obj.Statut="Non Validé";
											obj.statutClass="statut_Ouverte";
											break;
									}
								}
							},
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									renderSinistreDosMaladie(item);
									$$("ficheDossierSin").show();
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridSinDosMal).scrollTo(1,1);
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

function renderSinistresDosMaladie(idPolice, libPolice, dateDu, dateAu){
	$$("idPoliceSinMal").setValue(idPolice);
	$$("libPoliceSinMal").setValue(libPolice);

	var grid = $$(idgridSinDosMal);
	grid.clearAll();

	var doc=AddAction(null,1,"SINMALADIEDOS","SELECT","ABH","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",idPolice,"O");
	doc=AddParam(doc,1,3,"DateDeclareDU_",dateDu,"O");
	doc=AddParam(doc,1,4,"DateDeclareAU_",dateAu,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHSinDosMal);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}

function checkMaladieReclamationForm(IdReclamation, IdSinistre, Message, uploaderId, Idcategorie){
	var obj_files = $$(uploaderId).files;
	var nbre_fics = 0;
	if (isAssigned(obj_files)) { 
	    nbre_fics=obj_files.count();
	};
	if (nbre_fics <= 0) {
			webix.confirm("Attention, cette réclamation n'a pas de fichier. Souhaitez-vous continuer", "confirm-warning")
				.then(function(result){
					saveMaladieReclamationForm(IdReclamation, IdSinistre, Message, 0, obj_files, Idcategorie);
					$$("ceate_maladie_reclamation_window").close();
			})
			.fail(function(){
				return;
			});
	} else {
		saveMaladieReclamationForm(IdReclamation, IdSinistre, Message, 1, obj_files, Idcategorie);
		$$("ceate_maladie_reclamation_window").close();
	};
};

function saveMaladieReclamationForm(IdReclamation, IdSinistre, Message, nbre_fics, obj_files, Idcategorie){
	if (nbre_fics == 0) {
		var doc=AddAction(null,1,"RECLAMTION","PROCEDURE","ACB","O");
		doc=AddParam(doc,1,0,"IdReclamation_",IdReclamation,"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,1,2,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,3,"Idsinistre_",IdSinistre,"O");
		doc=AddParam(doc,1,4,"Idcategorie_",Idcategorie,"O");
		doc=AddParam(doc,1,4,"filedata","","N");
		doc=AddParam(doc,1,4,"fileName_","","N");
		doc=AddParam(doc,1,4,"fileExt_","","N");
		doc=AddParam(doc,1,4,"message_",Message,"O");
		doc=AddParam(doc,1,4,"Nature_","C","O");
		var xml=XML2String(doc);
		ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
			webix.alert("réclamation enregistré avec succés");
		}, function (obj, data, args) {
			webix.alert(data);
		}, [], false);
		
	} else {	
		var formData=new FormData();
		var file_id = obj_files.getFirstId(); // getting the ID
		var file_item = obj_files.getItem(file_id);
	
		formData.append("PROCNAME","ACB");
		// "file" input à ne pas changer
        formData.append("file",file_item.file);
        // "file" à ne pas changer
		
		formData.append("IdSession_",mySession.getGuid());
		formData.append("IdUser_",mySession.getIdUser());
		formData.append("IdReclamation_",IdReclamation);
		formData.append("Idsinistre_", IdSinistre);
		formData.append("Idcategorie_", Idcategorie);
		formData.append("Nature_","C");
		formData.append('ZIP_','N');
		formData.append("message_",Message);
		
		formData.append('FileName_',file_item.name);
		formData.append("fileExt_",file_item.type);

		var r=new XMLHttpRequest;
		r.onload=function(e){
			if((r.readyState===4)&&(r.status===200)){
					var myBuffer=arrayBufferToString(this.response);
					const Obj = JSON.parse(myBuffer);					
					if(isAssigned(Obj.error)){
						webix.alert(Obj.error);
						return;
					};					
			}
		};
		
		r.ontimeout=function(e){
			throw new Error("NTSOFT System Error : TimeOut "+e);
		};
		

		var reqUrl = mySession.getAdrPub()+":"+mySession.getPortPub();
		r.open("POST",reqUrl+"/UPLOAD",true);
			
		r.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		// set the token in header
        r.setRequestHeader('Authorization', 'Bearer ' + mySession.getToken());
		r.timeout=20000;
		r.responseType="arraybuffer";
		r.send(formData);
		webix.alert("réclamation enregistré avec succés");
		
		return false;

	}
};