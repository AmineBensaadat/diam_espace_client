/** Facultes **/
var myIdHSinDosMarFac = ["idSinistre", "IdPolice", "police", "Ordre",  "CERTIFICAT", "NumSinistre", "DateSinistre", "DateDeclarationClient", "GarantieSinistree", "MTRegle",  "DateRegle", "statut"];                 
var idgridSinDosMarFac = "gridSinDosMarF" + makeId();


var sinistresDosMaritimeFac = {
	id:"sinistresDosMaritimeFac",
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
								$$("sinistresMaritime").show();
							}  
						},
						{
							view:"label", template:"<h1>Mes sinistres : Maritime</h1> ", css:"h1 textUppercase",
						},
						{ 
							padding:{
								top:20, bottom:50, left:30, right:50
							},
							view:"button", css:"btn_all", type:"icon", icon:"mdi mdi-plus", label:"Ajouter réclamation", hidden:mySession.getReclamation(), width:180, click:function(){
								SelectedRow = $$(idgridSinDosMarFac).getSelectedItem();
								if(SelectedRow){
									webix.ui({
										view:"window",
										id:"ceate_reclamation_maritime_form",
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
															template:"<h1>N° Sinistre : "+SelectedRow.idSinistre+"</h1>"
														},
														{
															borderless: true,
															template:isAssigned(SelectedRow.GarantieSinistree)?" <h1>Garantie : "+SelectedRow.GarantieSinistree+" <h1>":""
														}
													]
												},
												{
													view:"form", 
													id:"reclamation_maritime_form",
													borderless: true,
													elements:[
																{ view:"textarea", id:"msgID", name:"message" },
																{
																	view:"uploader", upload:"//docs.webix.com/samples/server/upload",
																	height:40,
																	css: "button_reclamation_add_file",
																	id:"uploader_maritime_reclamation_files", name:"files",
																	link:"doclist", autosend:false,
																	multiple: false,
																	label:"<span class='text'>Ajouter des documents</span>"
																},
																{ view:"list", scroll:true, id:"doclist", type:"uploader", autoheight:true, borderless:true	 },
																{
																	cols:[
																		{ 
																			align:"right",
																			height:40,
																			view:"button", value:"envoyer", css:"save_reclmation_button",
																			click:function(){ 
																				IdSinistre= SelectedRow.idSinistre;
																				var Message = $$("msgID").getValue();
																				

																				if(Message){
																					checkReclamationMaritimeForm(-1, IdSinistre, Message, "uploader_maritime_reclamation_files", 3);
																				}else{
																					webix.alert("Merci d'ecrire quelque chose");
																				}
																				
																				
																			} 
																		}
																	]
																}
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
				{view:"label", template:"<h2>Sinistres Facultés : Liste des Dossiers</h2> ", css:"ml4 colorRose Bold",height:30},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"libPoliceSinMarF", name:"libPoliceSinMarF", css:" colorTxt infoNum",height:20, align:"left"},
					]
				},
				{
					view:"form", id:"formDosMarFac",
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:10
					},
					css:"noBg noBorder",
					elements:[
						{	
							padding:3,
							cols:[
								{},
								{ view:"datepicker", label:"DU", id:"duFac", name:"duFac", minWidth:110, maxWidth:170, labelWidth:30, stringResult:true, format:"%d/%m/%Y" },
								{ view:"datepicker", label:"AU", id:"auFac", name:"auFac", minWidth:110, maxWidth:170, labelWidth:30,  stringResult:true, format:"%d/%m/%Y" },
								{view:"text", label:"",id:"idPoliceSinMarF", name:"idPoliceSinMarF", hidden:true},
								{ view:"button", value:"OK", css:"btnSearch", width:35,
									click:function(){
										var du = $$("formDosMarFac").getValues().duFac;
										var au = $$("formDosMarFac").getValues().auFac;
										renderSinistresDosMaritimeFac($$("idPoliceSinMarF").getValue(), $$("libPoliceSinMarF").getValue(), du, au);
									} 
								},
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
							id:idgridSinDosMarFac,
							minWidth:300,
							Width:300,
							height:430,
							view:"datatable", 
							css:"styleDT",
							borderless:false,
							rowHeight:40,
							resizeColumn: true,
							resizeRow: true,
							select:"row",
							navigation:"false",
							scrollX:true,
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdHSinDosMarFac[0], header:"IdSinistre", width:50, hidden:true},
								{ id:myIdHSinDosMarFac[1], header:[ {text:"IdPolice", css:{'text-align':'center'} },{ content:"textFilter" } ], width:50, hidden:true},
								{ id:myIdHSinDosMarFac[3], header:[{text:"N°Ordre", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdHSinDosMarFac[4], header:[{text:"N°Certificat", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdHSinDosMarFac[5], header:[{text:"N°Sinistre", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdHSinDosMarFac[6], header:[{text:"D.Sinistre", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:150, sort:"date", css:{'text-align':'center'}, format:webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdHSinDosMarFac[7], header:[{text:"Date Déclaration Client", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:180, sort:"date", css:{'text-align':'center'}, format:webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdHSinDosMarFac[8], header:[{text:"Garantie(s) Sinistrée(s)", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:180, sort:"string",fillspace:true, css:{'text-align':'left'}},
								{ id:myIdHSinDosMarFac[9], header:[{text:"Montant Réglé", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:120, sort:"int", format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'center nts_font_13'}},
								{ id:myIdHSinDosMarFac[10], header:[{text:"Date de Règlement", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:150, sort:"date", css:{'text-align':'center'},  format:webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdHSinDosMarFac[11], header:"Statut", sort:"string", template:"<span class='#statutClass#'>#statut#</span>", minWidth:100,},
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
									obj.DateSinistre = date_format(obj.DateSinistre);
									obj.DateDeclarationClient = date_format(obj.DateDeclarationClient);
									obj.DateRegle = date_format(obj.DateRegle);
									switch (obj.statut){
										case 'E':
											obj.statut="En cours";
											obj.statutClass="statut_Ouverte";
											break;
										case 'C':
											obj.statut="Cloturé";
											obj.statutClass="statut_Cloturee";
											break;
										case 'S':
											obj.statut="En cours";
											obj.statutClass="statut_Ouverte";
											break;
										case 'R':
											obj.statut="En cours";
											obj.statutClass="statut_Ouverte";
											break;
									}
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

function renderSinistresDosMaritimeFac(idPolice, police, dateDu, dateAu){

	$$("idPoliceSinMarF").setValue(idPolice);
	$$("libPoliceSinMarF").setValue(police);
	var grid = $$(idgridSinDosMarFac);
	grid.clearAll();
	var doc=AddAction(null,1,"SINMARFDOS","SELECT","ABI","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",idPolice,"O");
	doc=AddParam(doc,1,3,"DateSinDU_",dateDu,"O");
	doc=AddParam(doc,1,4,"DateSinAU_",dateAu,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHSinDosMarFac);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
/** Facultes **/
var myIdHSinDosMarCor = ["idSinistre", "IdPolice", "police", "Ordre", "CERTIFICAT", "NumSinistre", "DateSinistre", "DateDeclarationClient", "Navire", "GarantieSinistree", "MTRegle", "DateRegle", "statut"];                 
var idgridSinDosMarCor = "gridSinDosMarC" + makeId();
var sinistresDosMaritimeCor = {
	id:"sinistresDosMaritimeCor",
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
								$$("sinistresMaritime").show();
							}  
						},
						{
							view:"label", template:"<h1>Mes sinistres : Maritime</h1> ", css:"h1 textUppercase",
						},
					]
				},
				{view:"label", template:"<h2>Sinistres Corps : Liste des Dossiers</h2> ", css:"ml4 colorRose Bold",height:30},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"libPoliceSinMarC", name:"libPoliceSinMarC", css:" colorTxt infoNum",height:20, align:"left"},
					]
				},
				{
					view:"form", id:"formDosMarCorps",
					type:"clean",
					padding:{
						top:0, bottom:0, left:10, right:10
					},
					css:"noBg noBorder",
					elements:[
						{	
							padding:3,
							cols:[
								{},
								{ view:"datepicker", label:"DU", id:"duCorps", name:"duCorps", minWidth:110, maxWidth:170,  labelWidth:30, format:"%d/%m/%Y" },
								{ view:"datepicker", label:"AU", id:"auCorps", name:"auCorps", minWidth:110, maxWidth:170,  labelWidth:30, format:"%d/%m/%Y" },
								{view:"text", label:"",id:"idPoliceSinMarC", name:"idPoliceSinMarC", hidden:true},
								{ view:"button", value:"OK", css:"btnSearch", width:35,
									click:function(){
										var du = $$("formDosMarCorps").getValues().duCorps;
										var au = $$("formDosMarCorps").getValues().auCorps;
										renderSinistresDosMaritimCor($$("idPoliceSinMarC").getValue(), $$("libPoliceSinMarC").getValue(), du, au);
									} 
								},
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
							id:idgridSinDosMarCor,
							height:430,
							view:"datatable", 
							css:"styleDT",
							borderless:false,
							rowHeight:40,
							resizeColumn: true,
							resizeRow: true,
							select:"row",
							navigation:"false",
							scrollX:true,
							datatype:"jsarray",
							autofocus:true,
							footer:true,
							leftSplit:0,
							rightSplit:0,
							headerRowHeight:44,
							columns:[
								{ id:myIdHSinDosMarCor[0], header:"idSinistre", hidden:true},
								{ id:myIdHSinDosMarCor[1], header:"idPolice", hidden:true},
								{ id:myIdHSinDosMarCor[3], header:[ {text:"N°Ordre", css:{'text-align':'center'} },{ content:"numberFilter" } ], sort:"string", css:{'text-align':'left'},fillspace:true},
								{ id:myIdHSinDosMarCor[4], header:[ {text:"N°Certificat", css:{'text-align':'center'} },{ content:"numberFilter" } ], sort:"string", css:{'text-align':'left'},fillspace:true},
								{ id:myIdHSinDosMarCor[5], header:[ {text:"N°Sinistre", css:{'text-align':'center'} },{ content:"numberFilter" } ],  sort:"string", css:{'text-align':'center'},fillspace:true},
								{ id:myIdHSinDosMarCor[6], header:[ {text:"D.Sinistre", css:{'text-align':'center'} },{ content:"dateFilter" } ], sort:"date", css:{'text-align':'center'}, format:webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdHSinDosMarCor[7], header:[ {text:"D.Déclaration Client", css:{'text-align':'center'} },{ content:"dateFilter" } ], sort:"date", css:{'text-align':'center'}, format:webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdHSinDosMarCor[8], header:[ {text:"Navire", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string", css:{'text-align':'center'},fillspace:true},
								{ id:myIdHSinDosMarCor[9], header:[ {text:"Garantie(s) Sinistrée(s)", css:{'text-align':'center'} },{ content:"textFilter" } ], css:{'text-align':'center'} , width:180, sort:"string", css:{'text-align':'left'},fillspace:true},
								{ id:myIdHSinDosMarCor[10], header:[ {text:"Montant Réglé", css:{'text-align':'center'} },{ content:"numberFilter" } ], sort:"int", css:{'text-align':'right'}, format:myReelformat,footer:{content:'totalColumns',css:'right nts_font_13'},fillspace:true},
								{ id:myIdHSinDosMarCor[12], header:"Statut", sort:"string", template:"<span class='#statutClass#'>#statut#</span>"},
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
									obj.DateSinistre = date_format(obj.DateSinistre);
									obj.DateDeclarationClient = date_format(obj.DateDeclarationClient);
									obj.DateRegle = date_format(obj.DateRegle);
									switch (obj.statut){
										case 'E':
											obj.statut="En cours";
											obj.statutClass="statut_Ouverte";
											break;
										case 'C':
											obj.statut="Cloturé";
											obj.statutClass="statut_Cloturee";
											break;
										case 'S':
											obj.statut="En cours";
											obj.statutClass="statut_Ouverte";
											break;
										case 'R':
											obj.statut="En cours";
											obj.statutClass="statut_Ouverte";
											break;
									}	
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
function renderSinistresDosMaritimCor(idPolice, police, dateDu, dateAu){

	$$("idPoliceSinMarC").setValue(idPolice);
	$$("libPoliceSinMarC").setValue(police);

	var grid = $$(idgridSinDosMarCor);
	grid.clearAll();
	var doc=AddAction(null,1,"SINMARCDOS","SELECT","ABJ","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",idPolice,"O");
	doc=AddParam(doc,1,3,"DateSinDU_",dateDu,"O");
	doc=AddParam(doc,1,4,"DateSinAU_",dateAu,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHSinDosMarCor);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}

function checkReclamationMaritimeForm(IdReclamation, IdSinistre, Message, uploaderId, Idcategorie){
	var obj_files = $$(uploaderId).files;
	var nbre_fics = 0;
	if (isAssigned(obj_files)) { 
	    nbre_fics=obj_files.count();
	};
	if (nbre_fics <= 0) {
			webix.confirm("Attention, cette réclamation n'a pas de fichier. Souhaitez-vous continuer", "confirm-warning")
				.then(function(result){
					saveMaritimeReclamationForm(IdReclamation, IdSinistre, Message, 0, obj_files, Idcategorie);
					$$("ceate_reclamation_maritime_form").close();
			})
			.fail(function(){
				return;
			});
	} else {
		saveMaritimeReclamationForm(IdReclamation, IdSinistre, Message, 1, obj_files, Idcategorie);
		$$("ceate_reclamation_maritime_form").close();
	};
};

function saveMaritimeReclamationForm(IdReclamation, IdSinistre, Message, nbre_fics, obj_files, Idcategorie){
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
		r.timeout=20000;
		r.responseType="arraybuffer";
		r.send(formData);
		webix.alert("réclamation enregistré avec succés");
		
		return false;

	}
};

