var idformAccount = "formAC" + makeId();
var monCompte = {
	
	id:"monCompte",
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:3,
	cols:[
		{
			rows:[
				{	
                    height:40,
                    padding:{
						left:20,
					},
					cols:[
						{view:"label", template:"<h1>Mon compte</h1> ", css:"h1 textUppercase",},
					]
				},
				{
					view:"form", id:idformAccount,
                    type:"clean", 
                    autowidth:true,
					padding:{
						top:30, bottom:30, left:20, right:10
					},
					css:"noBg noBorder",
					elements:[
                        {
                            cols:[
                                {
                                    margin:2,
                                    rows:[
                                        { view:"text", label:"Raison Sociale", id:"raisonSociale", name:"raisonSociale",labelWidth:170, height:34, readonly:true, },
                                        { view:"text", label:"Matricule", id:"Matricule", name:"Matricule", labelWidth:170, height:34, readonly:true, },
                                        { view:"text", label:"Adresse", id:"AdresseCompte", name:"AdresseCompte", labelWidth:170, height:34, readonly:true, },
                                        { view:"text", label:"Tél.", id:"tel", name:"tel", labelWidth:170, height:34, gravity:2, readonly:true, },
                                        { view:"text", label:"Email", id:"Email", name:"Email", labelWidth:170, height:34, readonly:true, },
                                        {   
                                            css:"",
                                            height:20,
                                        },
                                        { view:"text", label:"Identifiant", id:"Identifiant", name:"Identifiant", labelWidth:170, height:34, readonly:true, },
                                        { view:"text", type:"password", label:"Ancien Mot de passe", id:"oldpass", name:"oldpass", labelWidth:170, height:34 },
                                        { view:"text", type:"password", label:"Mot de passe", id:"newpass", name:"newpass", labelWidth:170, height:34 },
                                        { view:"text", type:"password", label:"Confirmer le mot de passe", id:"newpass2", name:"newpass2", labelWidth:170, height:34 },
                                        {
                                            cols:[
                                                {},
                                                { view:"button", value:"Valider", css:"btnLogin", width:150, height:40,
                                                    click:function(){

                                                        if ($$(idformAccount).validate()){ //validate form
                                                            var doc = AddAction(null, 1, "TEST", "PROCEDURE", "AAT", "O");
                                                            doc = AddParam(doc, 1, 0, "IdSous_", mySession.getIdUser(), "O");
                                                            doc = AddParam(doc, 1, 0, "IdAssure_", mySession.getIdAssure(), "O");
                                                            doc = AddParam(doc, 1, 0, "IdAdherent_", mySession.getIdAdherant(), "O");
                                                            doc = AddParam(doc, 1, 0, "Session_", mySession.getGuid(), "O");
                                                            doc = AddParam(doc, 1, 0, "PwdOld_", $$(idformAccount).getValues().oldpass, "O");
                                                            doc = AddParam(doc, 1, 0, "PwdNew_", $$(idformAccount).getValues().newpass, "O");
                                                            var xml = XML2String(doc);
                                                            ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
                                                                var doc = String2XML(data);
                                                                var Rtr_ = GetTag(doc, "retour_");
                                                                var Msg_ = GetTag(doc, "Message_"); 
                                                                if(Rtr_=='E'){
                                                                    webix.alert({
                                                                        title:"Erreur",
                                                                        text:Msg_,
                                                                        type:"alert-error"
                                                                    });
                                                                }else{
                                                                    webix.alert({
                                                                        title:"Mot de passe modifié avec succés !",
                                                                        ok:"D'accord",
                                                                        text:""
                                                                    });
                                                                }
                                                            }, function (obj, data, args) {
                                                                  webix.alert({
                                                                      title:"Erreur",
                                                                      text:data,
                                                                      type:"alert-error"
                                                                  });
                                                            }, [], false);
                                                        }
                                                    } 
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }	
                    ],
                    rules:{
                        "oldpass":webix.rules.isNotEmpty,
                        "newpass":webix.rules.isNotEmpty,
                        "newpass2":webix.rules.isNotEmpty,
                        $obj:function(){
                            var data = this.getValues(); // !getting data object
                            if(data.oldpass.length==0){ 
                                webix.alert("Veuillez saisir l'ancien mot de passe","alert-warning");
                                return false;
                            }else if (data.newpass.length==0){ 
                                webix.alert("Veuillez saisir le nouveau mot de passe","alert-warning");
                                return false;
                            }else if (data.newpass2.length==0){ 
                                webix.alert("Veuillez saisir la cofirmation du nouveau mot de passe","alert-warning");
                                return false;
                            }else if (data.oldpass == data.newpass ){ 
                                webix.alert("Le nouveau mot de passe doit être différent de l'ancien mot de passe","alert-warning");
                                return false;
                            }else if (data.newpass != data.newpass2 ){
                                webix.alert("La confirmation du nouveau mot de passe ne correspond pas","alert-warning");
                                return false;
                            }else{
                                return true;
                            }
                        }
                    },
                    on:{
                        onViewShow: function(id){
                            renderMonCompteForm(idformAccount);
                        },
                    },
                },
			]
		}
	]
};

function renderMonCompteForm(idformAccount){
    var doc=AddAction(null,1,"FRMACCOUNT","SELECT","AAU","O");
    doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
    doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var jdata = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = ["raisonSociale", "Matricule", "AdresseCompte", "tel", "Email", "Identifiant"];

        var obj = {};
        for(var i = 0; i < jdata[0].length; i++) {
            obj[tmp[i]]=jdata[0][i];  
        }; 
        $$(idformAccount).setValues(obj);   
		
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

	
}