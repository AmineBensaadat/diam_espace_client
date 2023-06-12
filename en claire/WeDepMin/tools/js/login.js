webix.ready(function () {
    // check user Connexion
	NtsLoadSession("NTSBEL");

    if(!checkConnexion()){

        webix.ui({
            responsive: true,
            id:"body",
            css:"login-page",
            minWidth:320,
            minheight:600,
            rows: [

                {	type:"clean",
                    margin:0,
                    padding:0,
                    cols:[
                        {
                            gravity:1,
                        },
                        {   
                            gravity:1,
                            rows:[
                                {
                                    view:"form", id:"loginForm",
                                    height:470,
                                    minWidth:300,
                                            elements:[
                                                {height:10},
                                                {	
                                                    view: "label",
                                                    id:"logo-img",
                                                    label: "<img src='./tools/images/logo192.png' style='height:90%; width:auto;'>",
                                                    align: "center",
                                                    width: 0,
                                                    height:80,
                                                },
                                                {height:50},
                                                {
                                                    //label
                                                    view:"label",
                                                    label:"Nom d'utilisateur",
                                                    css:"login-label",
                                                    align: "center",
                                                },
                                                
                                                {
                                                    //input login
                                                    view:"text", labelWidth:0, css:"input-login", id:"xLogin", name:"xLogin",
                                                },
                                                {height:10},
                                                {
                                                    //label
                                                    view:"label",
                                                    label:"Mot de Passe",
                                                    css:"login-label",
                                                    align: "center",
                                                },
                                                
                                                {
                                                    //input login
                                                    view:"text", type:"password",css:"input-login", labelWidth:0,  id:"xPassword", name:"xPassword",
                                                    value:"",
                                                },
                                                {height:40},
                                                {
                                                cols:[
                                                    {gravity:1},
                                                    { //conx btn
                                                            view:"button", label:"Connexion", css:"btnLogin", gravity:1, height:40,
                                                            href:"index.html",
                                                            click:function(){
                                                                var xLogin = $$("xLogin").getValue();
                                                                var xPass = $$("xPassword").getValue();
                                                                var doc = AddAction(null, 1, "LoginWeb", "PROCEDURE", "AAP", "N");
                                                                doc = AddParam(doc, 1, 0, "Login_", xLogin, "N");
                                                                doc = AddParam(doc, 1, 0, "PWord_", xPass, "N");
                                                                var xml = XML2String(doc);
                                                                ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
                                                                    var doc = String2XML(data);
                                                                    console.log(GetTag(doc, "Reclamation_"));
                                                                    mySession.setIdUser(GetTag(doc, "IdUser_"));
                                                                    mySession.setLibUser(GetTag(doc, "LibUser_"));
                                                                    mySession.setGuid(GetTag(doc, "Idsession_"));
                                                                    mySession.setMenu(GetTag(doc, "Menu_"));
                                                                    mySession.setProfil(GetTag(doc, "Profil_"));
                                                                    mySession.setReclamation((GetTag(doc, "Reclamation_") == "O"));
                                                                    
                                                                    // start set the token
                                                                    mySession.setToken(GetTag(doc, "Token_"));
                                                                    // end set the token

                                                                    NtsSaveSession("NTSBEL");
                                                                    window.open("index.html", '_self');
                                                                }, function (obj, data, args) {
                                                                    webix.alert({
                                                                        title:"Erreur",
                                                                        text:data,
                                                                        type:"alert-error"
                                                                    });
                                                                }, [], false);
                                                            } 
                                                        },
                                                    {gravity:1}
                                                ]
                                                },
                                                {
                                                    //label
                                                    view:"label",
                                                    label:"Mot de passe oublié ?",
                                                    css:"forgetPass",
                                                    align: "center",
                                                    hidden:true,
                                                },
                                            ]
                                },
                                { // don't remove
                                    css:"bg-login",
                                    height:25, autowidth:true, template:" ", borderless:true,
                                },
                            ]
                        },
                        {
                            gravity:1,
                        },
                    ]
                },
            ]
        });
        webix.event(window, "resize", function(e){
            $$("body").resize();
        });
    }else{
        window.open("index.html", '_self');
    }
});




