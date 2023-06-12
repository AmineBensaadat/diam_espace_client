
var myIdHSinVeh = ["IdSinistre", "Marque", "Matricule", "Conducteur", "DateSin", "ReferenceCie", "DateDecCie", "Expertise", "MT_Devis", "garantieSinistre", "Recours", "MtRegle", "DateRegle", "responsable" ,"SortSin"];                 
var idgridSinVeh = "gridSinVDT" + makeId();

var sinistresVehicules = {
	id:"sinistresVehicules",
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
								showSinAutoListe(false, "sinistresAuto")
					  		}  
						},
						{
							view:"label", template:"<h1>Mes sinistres : AUTO</h1> ", css:"h1",
						},
						///********************* USER GUIDE */
						{ 
							css:"webix_transparent help_button",
							type:"clean",
							view:"button", 
							type: "image", 
							image:"./tools/images/Help.png", 
							click:showHelpMenu,
							width:50
						},
						///********************* END USER GUIDE */
						{ 
							padding:{
								top:20, bottom:50, left:30, right:50
							},
							view:"button", css:"btn_all", type:"icon", icon:"mdi mdi-plus", label:"Ajouter réclamation", hidden:mySession.getReclamation(), width:180, click:function(){
								SelectedRow = $$(idgridSinVeh).getSelectedItem();
								if(SelectedRow){
									webix.ui({
										view:"window",
										id:"ceate_reclamation_form",
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
															template:"<h1>N° Sinistre : "+SelectedRow.IdSinistre+"</h1>"
														},
														{
															borderless: true,
															template:isAssigned(SelectedRow.Conducteur)?" <h1>Client : "+SelectedRow.Conducteur+" <h1>":""
														}
													]
												},
												{
													view:"form", 
													id:"reclamation_form",
													borderless: true,
													elements:[
																{ view:"textarea", id:"msgID", name:"message" },
																{
																	view:"uploader",
																	height:40,
																	css: "button_reclamation_add_file",
																	id:"uploader_reclamation_files", name:"files",
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
																				IdSinistre= SelectedRow.IdSinistre;
																			
																				var Message = $$("msgID").getValue();
																				

																				if(Message){
																					check_reclamation_form(-1, IdSinistre, Message, "uploader_reclamation_files", 2);
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
					view:"label", template:"<h2>Liste des Sinistres</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"libPoliceSinV", name:"libPoliceSinV", css:" colorTxt infoNum",height:20,  align:"left"},
						{view:"label", label:"",id:"idPoliceSinV", name:"idPoliceSinV", hidden:true},
					]
				},
				{
					view:"form", id:"formSinistresV",
					type:"clean",
					padding:{
						top:0, bottom:0, left:0, right:10
					},
					css:"noBg noBorder",
					elements:[
						{	
							padding:3,
							cols:[
								{gravity:1},
								{ view:"datepicker", label:"DU", id:"duV", name:"duV", gravity:2, minWidth:110, maxWidth:170, labelWidth:30, stringResult:true, format:"%d/%m/%Y"},
								{ view:"datepicker", label:"AU", id:"auV", name:"auV", gravity:2, minWidth:110, maxWidth:170, labelWidth:30, stringResult:true, format:"%d/%m/%Y"},
								{ view:"button", value:"OK", css:"btnSearch", minWidth:30, maxWidth:40,
									click:function(){
										var du = $$("formSinistresV").getValues().duV;
										var au = $$("formSinistresV").getValues().auV;
										renderSinistresVehicules($$("idPoliceSinV").getValue(), $$("libPoliceSinV").getValue(),du, au);
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
							minWidth:300,
							height:430,
							id:idgridSinVeh,
							view:"datatable", 
							css:"styleDT",
							borderless:false,
							rowHeight:40,
							resizeColumn: true,
							resizeRow: true,
							select:"row",
							scroll:true,
							navigation:"false",
							scrollX:true,
							datatype:"jsarray",
							autofocus:true,
							footer:true,
							tooltip:true,
							headerRowHeight:44,
							columns:[
								{ id:myIdHSinVeh[0], header:[ {text:"Id-Sinistre", css:{'text-align':'center'} },{ content:"numberFilter" } ], sort:'ntsSortDecimal',tooltip:false,},
								{ id:myIdHSinVeh[4], header:[ {text:"D.Sinistre", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:90, sort:'ntsDate', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true, tooltip:false,},
								{ id:myIdHSinVeh[6], header:[ {text:"D.Déclaration", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:'ntsDate', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true, tooltip:false,},
								{ id:myIdHSinVeh[5], header:[ {text:"Réf. Sinistre", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'center'},tooltip:false,},
								{ id:myIdHSinVeh[3], header:[ {text:"Conducteur", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'left'}, tooltip:false,},
								{ id:myIdHSinVeh[2], header:[ {text:"Matricule", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'center'}, tooltip:false,},
								{ id:myIdHSinVeh[1], header:[ {text:"Marque", css:{'text-align':'center'} },{ content:"selectFilter" } ], sort:"string", fillspace:true, css:{'text-align':'center', 'font-weight':'bold'},tooltip:false,},
								{ id:myIdHSinVeh[7], header:[{text:"Expert", sort:"string", css:{'text-align':'center'} }],  template:"{common.rcheckboxON()}", css:{'text-align':'center'}},
								{ id:myIdHSinVeh[9], header:[ {text:"Garantie.S", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, tooltip:"Incendie, Bris de glace  "},
								{ id:myIdHSinVeh[8], header:[ {text:"Mt Devis", css:{'text-align':'center'} },{ content:"numberFilter" } ], css:{'text-align':'center'}, sort:'ntsSortDecimal', format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'},tooltip:false,},
								{ id:myIdHSinVeh[10], header:"Recours", sort:"string", template:"{common.rcheckboxON()}", css:{'text-align':'center'} ,tooltip:false,},
								{ id:myIdHSinVeh[11], header:[ {text:"Mt Réglé", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:'ntsSortDecimal',  css:{'text-align':'center'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}, tooltip:false,},
								{ id:myIdHSinVeh[13], header:[ {text:"Responsable", css:{'text-align':'center'} } ], sort:"string",sort:"string",fillspace:true,  css:{'text-align':'center'}, tooltip:false,},
								{ id:myIdHSinVeh[14], header:[ {text:"Statut", css:{'text-align':'center'} } ], sort:"string", template:"<span class='#statutClass#'>#statut#</span>",sort:"string", minWidth:100,fillspace:true, tooltip:false,}
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
									switch (obj.SortSin){
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
							on:{"onItemDblClick":function(id, e, trg){ 
								this.unselect(id);
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

function renderSinistresVehicules(idPolice, libPolice, dateDu, dateAu){
	$$("idPoliceSinV").setValue(idPolice);
	$$("libPoliceSinV").setValue(libPolice);
	var grid = $$(idgridSinVeh);
	grid.clearAll();
	var doc=AddAction(null,1,"SINVEHICULES","SELECT","ABL","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",idPolice,"O");
	doc=AddParam(doc,1,3,"DateSinDU_",dateDu,"O");
	doc=AddParam(doc,1,4,"DateSinAU_",dateAu,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHSinVeh);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}


function check_reclamation_form(IdReclamation, IdSinistre, Message, uploaderId, Idcategorie){
	var obj_files = $$(uploaderId).files;
	var nbre_fics = 0;
	if (isAssigned(obj_files)) { 
	    nbre_fics=obj_files.count();
	};
	if (nbre_fics <= 0) {
			webix.confirm("Attention, cette réclamation n'a pas de fichier. Souhaitez-vous continuer", "confirm-warning")
				.then(function(result){
					save_reclamation_form(IdReclamation, IdSinistre, Message, 0, obj_files, Idcategorie);
					$$("ceate_reclamation_form").close();
			})
			.fail(function(){
				return;
			});
	} else {
		save_reclamation_form(IdReclamation, IdSinistre, Message, 1, obj_files, Idcategorie);
		$$("ceate_reclamation_form").close();
	};
};

function save_reclamation_form(IdReclamation, IdSinistre, Message, nbre_fics, obj_files, Idcategorie){
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
		formData.append("Idcategorie_", 2);
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
}

///********************* USER GUIDE */
function showHelpMenu(){
	var popupHelpMenu = {	
		view:"popup",
		id:"helppopupMenu",
		width:450,
		css:"helpMD",
		position:"center",
		body:{
			rows:[
				{
					height:40,
					view:"label",
					label:"Liste des Sinistres",
					align:"center",
					css:"title1"
				},
				{
					height:20
				},
				{
					height:200,
					borderless: true,
					template:"<body>Ce tableau affiche les principales informations par sinistre.<br><br> Une recherche par date de déclaration est possible. <br><br>Sélectionnez la ligne du sinistre pour lequel vous souhaitez faire une réclamation et cliquez sur le bouton bleu en haut à droite de l'écran 'ajouter réclamation'. <br><br>Un pop up s'affichera. Vous pourrez alors envoyer votre message et ajouter des documents.</body>"
				},
				{
					cols:[
						{},
						{view:"button", label:"Quitter", css:"webix_secondary", width:160, height:35,
						  click:function(){
							$$("helppopupMenu").hide();
						  }
						},
						{
						},
					  ]
				  }
			]
		}
	};
	webix.ui(popupHelpMenu);
	$$("helppopupMenu").show();
}
///********************* END USER GUIDE */

