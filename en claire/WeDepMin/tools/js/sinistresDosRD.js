
/* Autres */
	
var myIdHSinDosRD = ["idSinistre", "IdPolice" , "police", "DATESIN", "date_dec", "GarantieSinistree", "MTDevisTTC", "MTRegle", "DateReg", "refsin","statut"];                 
var idgridSinDosRD = "gridSinDosRD" + makeId();

var sinistresRDDosAutres = {
	id:"sinistresRDDosAutres",
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:3,
	cols:[
		{
			rows:[
				{	
					minWidth:300,
					height:40,
					cols:[
						{view:"label", id:"", template:"<span class='mdi mdi-arrow-left'></span>", width:40,
						 css:"icon-return", 
							click:function(){
								$$("sinistresRD").show();
							}  
						},
						{
							view:"label", template:"<h1>Mes sinistres : R.D</h1> ", css:"h1 textUppercase",
						},
						{ 
							padding:{
								top:20, bottom:50, left:30, right:50
							},
							view:"button", css:"btn_all", type:"icon", icon:"mdi mdi-plus", label:"Ajouter réclamation", hidden:mySession.getReclamation(), width:180, click:function(){
								var SelectedRow = $$(idgridSinDosRD).getSelectedItem();
								if(SelectedRow){
									webix.ui({
										view:"window",
										id:"ceate_reclamation_rd_form",
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
													id:"reclamation_rd_form",
													borderless: true,
													elements:[
																{ view:"textarea", id:"msgID", name:"message" },
																{
																	view:"uploader",
																	height:40,
																	css: "button_reclamation_add_file",
																	id:"uploader_rd_reclamation_files", name:"files",
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
																				IdSinistre = SelectedRow.idSinistre;
																				var Message = $$("msgID").getValue();
																				

																				if(Message){
																					checkReclamationRDForm(-1, IdSinistre, Message, "uploader_rd_reclamation_files", 5);
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
				{	
					view:"label", template:"<h2>Autres : Liste des Dossiers</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"libPoliceSinRD", name:"libPoliceSinRD", css:" colorTxt infoNum",height:20, align:"left"},
						{view:"label", label:"",id:"idPoliceSinRD", name:"idPoliceSinRD", hidden:true},
					]
				},
				{
					view:"form", id:"formDosRDAutres",
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:10
					},
					css:"noBg noBorder",
					elements:[
						{	padding:3,
							cols:[
								{},
								{ view:"datepicker", label:"DU", id:"duAutres", name:"duAutres", minWidth:110, maxWidth:170, labelWidth:30, stringResult:true, format:"%d/%m/%Y" },
								{ view:"datepicker", label:"AU", id:"auAutres", name:"auAutres", minWidth:110, maxWidth:170, labelWidth:30, stringResult:true, format:"%d/%m/%Y" },
								{ view:"button", value:"OK", css:"btnSearch", width:35,
									click:function(){
										var du = $$("formDosRDAutres").getValues().duAutres;
										var au = $$("formDosRDAutres").getValues().auAutres;
										renderSinistresDosRD($$("idPoliceSinRD").getValue(), $$("libPoliceSinRD").getValue(), du, au);
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
							id:idgridSinDosRD,
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
							rightSplit:1,
							headerRowHeight:44,
							columns:[
								{ id:myIdHSinDosRD[0], header:"idSinistre", width:50, hidden:true},
								{ id:myIdHSinDosRD[1], header:"idPolice", width:50, hidden:true},
								{ id:myIdHSinDosRD[3], header:[ {text:"Date Sinsitre", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:140, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdHSinDosRD[4], header:[ {text:"Date Déclaration", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:140, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdHSinDosRD[5], header:[ {text:"Garantie(s) Sinistrée(s)", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:170, sort:"string",css:{'text-align':'center'},fillspace:true},
								{ id:myIdHSinDosRD[6], header:[ {text:"Montant Devis", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:120, sort:"int", css:{'text-align':'center'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:{'text-align':'center'}}},
								{ id:myIdHSinDosRD[7], header:[ {text:"Montant Réglé", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:120, sort:"int", css:{'text-align':'center'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:{'text-align':'center'}}},
								{ id:myIdHSinDosRD[8], header:[ {text:"ref.sin", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:170, sort:"string",css:{'text-align':'center'},fillspace:true},
								{ id:myIdHSinDosRD[9], header:[ {text:"Statut", css:{'text-align':'center'} } ], css:{'text-align':'center'}, sort:"string", template:"<span class=' #statutClass#'>#statut#</span>", minWidth:100,fillspace:true,},
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
							on:{
								"onItemDblClick":function(id, e, trg){ 
								}
							},
							scheme:{
								$init:function(obj){
									obj.DATESIN = date_format(obj.DATESIN);
									obj.date_dec = date_format(obj.date_dec);
									obj.DateReg = date_format(obj.DateReg);
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
							data: [],
						},
					]
				},
			]
		}
	]
};


function renderSinistresDosRD(idPolice, police, dateDu, dateAu){
	$$("idPoliceSinRD").setValue(idPolice);
	$$("libPoliceSinRD").setValue(police);
	var grid = $$(idgridSinDosRD);
	grid.clearAll();
	var doc=AddAction(null,1,"SINRDDOS","SELECT","ABK","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",idPolice,"O");
	doc=AddParam(doc,1,5,"DateSinDU_",dateDu,"O");
	doc=AddParam(doc,1,6,"DateSinAU_",dateAu,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHSinDosRD);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}

function checkReclamationRDForm(IdReclamation, IdSinistre, Message, uploaderId, Idcategorie){
	var obj_files = $$(uploaderId).files;
	var nbre_fics = 0;
	if (isAssigned(obj_files)) { 
	    nbre_fics=obj_files.count();
	};
	if (nbre_fics <= 0) {
			webix.confirm("Attention, cette réclamation n'a pas de fichier. Souhaitez-vous continuer", "confirm-warning")
				.then(function(result){
					saveRDReclamationForm(IdReclamation, IdSinistre, Message, 0, obj_files, Idcategorie);
					$$("ceate_reclamation_rd_form").close();
			})
			.fail(function(){
				return;
			});
	} else {
		saveRDReclamationForm(IdReclamation, IdSinistre, Message, 1, obj_files, Idcategorie);
		$$("ceate_reclamation_rd_form").close();
	};
};

function saveRDReclamationForm(IdReclamation, IdSinistre, Message, nbre_fics, obj_files, Idcategorie){
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






