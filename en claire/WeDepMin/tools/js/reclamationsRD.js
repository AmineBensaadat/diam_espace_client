var idReclamationsRD = "reclamationsRD" + makeId();
var reclamationsColMalritime = ["datecreation", "numreclamation",  "nsinistre", "Statut" , "LastMessage", "client" ,"idcategorie"];                 

var reclamationsRD = {
    id:"reclamationsRD",
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:3,
	cols:[
		{
			rows:[
				{	minWidth:320,
					height:40,
					cols:[
						{view:"label", template:"", width:20, css:"icon-return"},
						{view:"label", template:"<h1>Mes réclamations RD</h1> ", css:"h1"},
					]
				},
                {	
					type:"clean",
					padding:{
						top:5, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idReclamationsRD,
							view:"datatable", 
							css:"styleDT",
							minWidth:200,
							height:450,
							borderless:false,
							rowHeight:40,
							resizeColumn: true,
							resizeRow: false,
							select:"row",
							navigation:"false",
							scrollX:true,
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:false,
							
							columns:[
								{ id:reclamationsColMalritime[0], header:[ {text:"Date creation", css:{'text-align':'center'} }, {  
									content:"selectFilter",
									 options:
									Years_lists
								   }], 
								   minWidth:100, sort:'ntsDate', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true
								},
								{ id:reclamationsColMalritime[1], header:[ {text:"Num reclamation", css:{'text-align':'center'} },{ content:"textFilter" }] , sort:'ntsSortDecimal', css:{'text-align':'center'}, fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:reclamationsColMalritime[2], header:[ {text:"Num sinistre", css:{'text-align':'center'} },{ content:"textFilter" }] , sort:'ntsSortDecimal', css:{'text-align':'center'},fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:reclamationsColMalritime[4], header:[ {text:"Dernier message", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'left'}},
								{ id:reclamationsColMalritime[5], header:[ {text:"Client", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'left'}},
								{ id:reclamationsColMalritime[3], header:[ {text:"Statut", css:{'text-align':'center'} } ], css:{'text-align':'center'}, sort:"string", template:"<span class='statut_#statutClass#'>#statut#</span>",sort:"string", minWidth:100,fillspace:true},


							],
							
							scheme:{
								$init:function(obj){
									// Statut Sin
									switch (obj.Statut){
										case 'Ouverte':
											obj.statut="Ouverte";
											obj.statutClass="Ouverte";
											break;
										case 'Traité':
											obj.statut="Traitée";
											obj.statutClass="Traitee";
											break;
										case 'Cloturée':
											obj.statut="Cloturée";
											obj.statutClass="Cloturee";
											break;
								}
								}
							  },

							data: [],
							on:{
								"onItemClick":function(id, e, trg){
									if($$("list_RD_reclamations")){
										$$("list_RD_reclamations").close();
									}
									
									selectedRow = $$(idReclamationsRD).getSelectedItem();
									
									webix.ui({
										view:"window",
										id:"list_RD_reclamations",
										css: "list_RD_reclamations",
										resize: true,
										height:600,
										width:500,
										move: true,
										close:true,
										position:function(state){
											state.top = state.maxHeight - ( state.height + 50 );
											state.left = state.maxWidth - (state.width + 20);
										},
										head:{
											view:"toolbar", cols:[
											{ view:"label", label: "&nbsp;&nbsp;"+selectedRow.client },
											{ view:"label", width:30, label: '<i style="margin-right: 10px;" class="fa fa-times" aria-hidden="true"></i>',  align: 'right', click:function(){ $$('list_RD_reclamations').close(); }}
											]
										},
										body:{
											borderless: true,
											rows: 
											[
												{
													view:"dataview", 
													id:"reclamationsRDdataview",       
													css:"chat-conversation", 
													xCount:1,
													type: {
													height: "auto",
													width:"auto"
													},
													template: '<div class="conversation-list #posision#"><div class="chat-avatar"><img src="#img#" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content" id="1"><p class="mb-0 ctext-content">#Msg#</p></div>#NPJ#</div><div class="conversation-name"><span class="d-none name">#Client#</span><small class="text-muted time">#Datecreation#</small> <span class="text-success check-message-icon"><i class="bx bx-check-double"></i></span></div></div> </div>',
													data: []
												},
												{
													view:"form", 
													id:"replay_RD_reclamation_form",
													borderless: true,
													elements:[
														{
															borderless:true,
															height:40,
															cols:
															[
																{ view:"textarea", id:"reply_msg_RD", name:"reply_msg_RD", width:300, borderless:true },
																{
																	width:50,
																	view:"uploader", upload:"//docs.webix.com/samples/server/upload",
																	id:"uploader_reply_RD_reclamation_file", name:"files",
																	link:"doclistRD", autosend:false,
																	multiple: false,
																	label:'<i class="fa fa-paperclip" aria-hidden="true"></i>'
																},
																
																{ 	
																	align:"right",
																	width:50,				
																	view:"button", 
																	label:'<i class="fa fa-paper-plane" aria-hidden="true"></i>',
																	css: "button_reclamation_add_file",
																	id:"button_reclamation_add_file_RD",
																	click:function(){ 
																		var Message = $$("reply_msg_RD").getValue();
																		SelectedRow = $$(idReclamationsRD).getSelectedItem();
																		var IdSinistre_reply = SelectedRow.nsinistre;
																		if(Message){
																			checkReclamationRDFormReply(mySession.getArrValue('lastMessage').Idreclamation, IdSinistre_reply, Message, "uploader_reply_RD_reclamation_file", 2);
																		}else{
																			webix.alert("Merci d'ecrire quelque chose");
																		}
																	}  
																},
															]
														},
														...(selectedRow.statut == "Cloturée" ? [] : [
															{ view:"label", label:'<u style="color: #140a3b;"> Clôturer la reclamation </u>',align:"center",
															click:function(){ 
																webix.confirm("Attention, Souhaitez-vous continuer", "confirm-warning")
																	.then(function(result){
																		CloturerReclamtaionRD(mySession.getArrValue('lastMessage').Idreclamation);
																		
																})
																.fail(function(){
																	return;
																});	
															}   
														}
														])
														,
														{ view:"list", scroll:true, id:"doclistRD", type:"uploader", autoheight:true, borderless:true	 },
														]
													
												}
											]
										}
									}).show();
								  renderreclamationsRDListeByNumReclamation(selectedRow.numreclamation);
								  if(selectedRow.statut == "Cloturée"){
									$$("reply_msg_RD").disable();
									$$("uploader_reply_RD_reclamation_file").disable();
									$$("button_reclamation_add_file_RD").disable();
								}
								}
							  }
						},
					]
				},
			]
		}
	]
};


function CloturerReclamtaionRD(IdReclamation){
	var doc=AddAction(null,1,"RECLAMTIONClOTURE","PROCEDURE","ABZ","O");
	doc=AddParam(doc,1,0,"IdReclamation_",IdReclamation,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
	   webix.alert("Réclamation cloturée avec succés");
	   renderreclamationsRDListe(5);
	}, function (obj, data, args) {
		webix.alert(data);
	}, [], false);
}

function showReclamationsRDListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderreclamationsRDListe(5);
    }else{
        $$(id).show();
    }
}

function renderreclamationsRDListe(IdCategorie){
		var grid = $$(idReclamationsRD);
		grid.clearAll();

		var doc=AddAction(null,1,"RECLAMATIONAUTOLIST","SELECT","ABY","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,1,2,"IdCategorie_",IdCategorie,"O");
		
		var xml=XML2String(doc);
		ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

			if(data.length>0){
				var Adata = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
				var tmp = convertToArrayOfObjects(Adata, reclamationsColMalritime);
				grid.parse(tmp);
			}
		}, function (obj, data, args) {
			webix.message(data);
		}, [], false);
		}

		function generateArrayOfYears(years_ago) {
		var max = new Date().getFullYear()
		var min = max - years_ago
		var years = []

		for (var i = max; i >= min; i--) {
		years.push(i)
		}
		return years
}

function renderreclamationsRDListeByNumReclamation(NumReclamation){
	var grid = $$("reclamationsRDdataview");
	grid.clearAll();


	var doc=AddAction(null,1,"GetReclamationMSG","SELECT","ACA","O");
	doc=AddParam(doc,1,0,"NumReclamation_",NumReclamation,"O");
	
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));

			var tmp = convertToArrayOfObjects(data, ["nature", "NumReclamation", "Msg", "Datecreation", "NSinistre", "IdAuteur", "Client", "Idreclamation", "Agent", "NPJ", "FileName", "FileExt"]);
			mySession.clearArrData(['lastMessage']);
			mySession.setArrValue('lastMessage', tmp[tmp.length - 1]);
			for(var j = 0; j < tmp.length; j++) {
				
				switch(tmp[j]["nature"]){
					case "C":
						tmp[j]["posision"] = "conversation-list-left";
						break;
					case "A":
						tmp[j]["posision"] = "conversation-list-right";
						break;
				}

				if(tmp[j]["NPJ"] == "O"){
					var o = [ QuotedStr(tmp[j]["Idreclamation"]), QuotedStr(tmp[j]["FileName"]), QuotedStr(tmp[j]["FileExt"])].toString();
				    tmp[j]["NPJ"] = '<i class="fa fa-paperclip" aria-hidden="true" onclick="doDwnPJ(' + o + ')"></i> <i><u> Fichier à telecharger</u></i>';
				}else{
					tmp[j]["NPJ"] = "";
				}
				
				tmp[j]["img"] = "./tools/images/ntlogo-chat.png";
				
			}
			grid.parse(tmp, "json");
			$$('reclamationsRDdataview').showItem($$('reclamationsRDdataview').getLastId());
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}


function checkReclamationRDFormReply(IdReclamation, IdSinistre, Message, uploaderId, Idcategorie){
	var obj_files = $$(uploaderId).files;
	var nbre_fics = 0;
	if (isAssigned(obj_files)) { 
	    nbre_fics=obj_files.count();
	};
	if (nbre_fics <= 0) {
		saveReclamationRDFormReplay(IdReclamation, IdSinistre, Message, 0, obj_files, Idcategorie);
 
	}  else {
		saveReclamationRDFormReplay(IdReclamation, IdSinistre, Message, 1, obj_files, Idcategorie)
	};
};

function saveReclamationRDFormReplay(IdReclamation, IdSinistre, Message, nbre_fics, obj_files, Idcategorie){
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
		   $$("reply_msg_RD").setValue("");
		   renderreclamationsRDListeByNumReclamation(selectedRow.numreclamation);

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
					$$("reply_msg_RD").setValue("");
		   			renderreclamationsRDListeByNumReclamation(selectedRow.numreclamation);
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
		
		return false;

	}
}