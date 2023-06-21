//------------------------  Start ntsoft.js -------------------------------------------------------------------------------
webix.env.cdn='./codebase/extras';
window.webix_strict=true;

var NtsSession, tmpstartTime;

/**
  Ci-après les accès:
    Login Adhérent: X
    Mot de Passe Adhèrent: X

  Login
    Souscripteur: Z
    Mot de Passe Souscripteur: Z
*/

(function () {
    var arrData = {};
    arrData['IDUSER_'] = -1; 
    arrData['IDASSUR_'] = -1;
    arrData['IDADHER_'] = -1;
    arrData['LIBUSER_'] = "";
    arrData['MATRICULE_'] = ""; //Matricule
    arrData['HOSTPRI_'] = "www.nt-soft.ma"//"192.168.100.99";//"196.12.235.242" 192.168.100.99
    arrData['PORTPRI_'] = 9097;//8098;//8088
    arrData['HOSTPUB_'] = "www.nt-soft.ma"//"192.168.100.99";//"196.12.235.242" 192.168.100.99
    arrData['PORTPUB_'] = 9097;//8098;//8088
    arrData['HOSTART_'] = "";
    arrData['PORTART_'] = 0;
    arrData['PATH'] = './/assets//images//'; 
    arrData['WAIT_'] = false;
    arrData["GUID"] = ""; //idsession
    // start token array key
    arrData["Token_"] = "";
    // end token array key
    arrData['RECLAMATION_'] = false;

    NtsSession = function () {
    };
    NtsSession.prototype.getIdUser = function () {
        return arrData['IDUSER_'];
    };
    NtsSession.prototype.setIdUser = function (value) {
        arrData['IDUSER_'] = value;
    };

    NtsSession.prototype.getIdAssure = function () {
        return arrData['IDASSUR_'];
    };
    NtsSession.prototype.setIdAssure = function (value) {
        arrData['IDASSUR_'] = value;
    };
    // start seter and geter token
    NtsSession.prototype.setToken = function (value) {
        arrData['Token_'] = value;
    };

    NtsSession.prototype.getToken = function () {
        return arrData['Token_'];
    };
    // end seter and getter token

    NtsSession.prototype.getReclamation = function () {
        return arrData['RECLAMATION_'];
    };
    NtsSession.prototype.setReclamation = function (value) {
        arrData['RECLAMATION_'] = value;
    };

    NtsSession.prototype.getIdAdherant = function () {
        return arrData['IDADHER_'];
    };
    NtsSession.prototype.setIdAdherant = function (value) {
        arrData['IDADHER_'] = value;
    };

    NtsSession.prototype.getImgPath = function () {
        return arrData['PATH'];
    };
    NtsSession.prototype.getLibUser = function () {
        return arrData['LIBUSER_'];
    };
    NtsSession.prototype.setLibUser = function (value) {
        arrData['LIBUSER_'] = value;
    };

    NtsSession.prototype.getProfil = function () {
        return arrData['PROFIL_'];
    };
    NtsSession.prototype.setProfil = function (value) {
        arrData['PROFIL_'] = value;
    };   
    
    NtsSession.prototype.getMenu = function () {
        return arrData['MENU_'];
    };
    NtsSession.prototype.setMenu = function (value) {
        arrData['MENU_'] = value;
    };   


    NtsSession.prototype.getMatriculeUser = function () {
        return arrData['MATRICULE_'];
    };
    NtsSession.prototype.setMatriculeUser = function (value) {
        arrData['MATRICULE_'] = value;
    };

    NtsSession.prototype.getAdrPri = function () {
        return arrData['HOSTPRI_'];
    };
    NtsSession.prototype.setAdrPri = function (value) {
        arrData['HOSTPRI_'] = value;
    };
    NtsSession.prototype.getPortPri = function () {
        return arrData['PORTPRI_'];
    };
    NtsSession.prototype.setPortPri = function (value) {
        arrData['PORTPRI_'] = value;
    };
    NtsSession.prototype.getAdrPub = function () {
        return arrData['HOSTPUB_'];
    };
    NtsSession.prototype.setAdrPub = function (value) {
        arrData['HOSTPUB_'] = value;
    };
    NtsSession.prototype.getPortPub = function () {
        return arrData['PORTPUB_'];
    };
    NtsSession.prototype.setPortPub = function (value) {
        arrData['PORTPUB_'] = value;
    };
    NtsSession.prototype.getGuid = function () {
        return arrData['GUID'];
    };
    NtsSession.prototype.setGuid = function (value) {
        arrData['GUID'] = value;
    };
    NtsSession.prototype.getAdrArt = function () {
        return arrData['HOSTART_'];
    };
    NtsSession.prototype.setAdrArt = function (value) {
        arrData['HOSTART_'] = value;
    };
    NtsSession.prototype.getPortArt = function () {
        return arrData['PORTART_'];
    };
    NtsSession.prototype.setPortArt = function (value) {
        arrData['PORTART_'] = value;
    };
    NtsSession.prototype.getWait = function () {
        return arrData['WAIT_'];
    };
    NtsSession.prototype.setWait = function (value) {
        arrData['WAIT_'] = value;
    };
    NtsSession.prototype.getArrData = function () {
        return arrData;
    };
    NtsSession.prototype.getArrValue = function (name) {
        return arrData[name.toUpperCase()];
    };
    NtsSession.prototype.setArrData = function (value) {
        arrData = value;
    };
    NtsSession.prototype.setArrValue = function (name, value) {
        arrData[name.toUpperCase()] = value;
    };
    NtsSession.prototype.clearArrData = function (names) {
        for (var i = 0; i < names.length; i++) {
            arrData[names[i].toUpperCase()] = null;
            for (var j = 0; j < arrData.length; i++) {
                if (arrData[j][0] == names[i].toUpperCase()) {
                    arrData.splice(j, 1);
                }
            }
        }
    }
}());



function QuotedStr(s){
	return "'"+s+"'"
}


var mySession = new NtsSession;
var tmp = sessionStorage.getItem("SESSION");
if ((typeof (tmp) !== 'undefined') && (tmp !== null) && (tmp !== "")) {
    mySession.setArrData(JSON.parse(atou(tmp)));
    tmp = null;
}

function inithost(host,port){
    mySession.setAdrPub(host);
    mySession.setPortPub(port);
    mySession.setAdrPri(host);
    mySession.setPortPri(port);
    NtsSaveSession("NTSBEL");
}
function atou(b64){
    return decodeURIComponent(escape(atob(b64)));
}

function utoa(data){
    return btoa(unescape(encodeURIComponent(data)));
}

function makeId(){
    return (+new Date).toString(36).slice(-5);
}



function getFileExtension(fname){
 var temp=/(?:\.([^.]+))?$/.exec(fname)[1];
 return temp&&temp.toLowerCase()
}

function GetTag(docx,tag){
 try{
  var nts=docx.getElementsByTagName(tag)[0].getAttribute("NTS").trim();
  var str=docx.getElementsByTagName(tag)[0].getAttribute("VALUE").trim();
  if(nts=="O"){
   str=atou(str)
  }
 } catch(err){
  str='';
 }
 return str.trim();
}

function collectString(obj){
 return isAssigned(obj)&&csv2ARRAY(obj,String.fromCharCode(3),String.fromCharCode(2))
}

function splitString(obj,key){
 return isAssigned(obj)&&obj.split(String.fromCharCode(key));
}

function isEmpty(obj){
 for(var key in obj){
  if(obj.hasOwnProperty(key))
   return false;
 }
 return true;
};

function csv2JSON(csv,lineDel,colDel,headers){
 var result=[];
 var lines=csv.split(lineDel);
 var n=0;
 if(isEmpty(headers)&&(lines.length>0)){
  headers=lines[0].split(colDel);
  n=1;
 }
 for(var i=n; i<lines.length; i++){
  var obj={};
  var currently=lines[i].split(colDel);
  for(var j=0; j<headers.length; j++){
   obj[headers[j]]=currently[j];
  }
  result.push(obj);
 }
 return JSON.stringify(result);
}


function csv2ARRAY(csv,lineDel,colDel){
 var lines,result=[];
 if(!csv) return result;
 lines=csv.split(lineDel);
 for(var i=0; i<lines.length; i++){
  result.push(lines[i].split(colDel));
 }
 return result;
}

function getWidth(){
    return document.body.clientWidth-200;
};

function AddFilterString(Where, Name, Value){
    if (Value !== "") {
        if (Where == ""){
            return "(" + Name + " like '" + Value + "%')"
        } else {
            return Where + " and (" + Name + " like '"  + Value + "%')"
        }
    } else {
        return Where
    };
};

function AddFilterDate(Where, Name, Symbol, Value){
    if (Value !== "") {
        if (Where == ""){
            return "(" + Name + Symbol + "'" + Value.substring(0, 10) + "')"
        } else {
            return Where + " and (" + Name + Symbol + "'" + Value.substring(0, 10) + "')"
        }
    } else {
        return Where
    };
};

function AddFilterNumber(Where, Name, Symbol, Value){
    if (Value !== "") {
        if (Where == ""){
            return "(" + Name + Symbol + Value + ")"
        } else {
            return Where + " and (" + Name + Symbol + Value + ")"
        }
    } else {
        return Where
    };
};

function AddFilterInt(Where, Name, Value){
    if ((Value !== "") && (!isNaN(Value)) && (Value !== 0)) {
        if (Where == ""){
            return "(" + Name + " = " + Value + ")"
        } else {
            return Where + " and (" + Name + " = " + Value + ")"
        }
    } else {
        return Where
    };
};

function Nts2R(a){
    if (isNumber(a)) {
        return a.replace(",", ".").replace(" ", "");
    } else {
        return 0;
    }
};

webix.DataStore.prototype.sorting.as.byNumber = function(a,b){ return Number(Nts2R(a)) > Number(Nts2R(b)) ? 1 : -1};

function NtsEcranRecherche(winPere, myHeader, myKey, mySQL, onSuccess){
    var idRechercheGrid = "idRecGrid"+makeId();
    var mycolumns = [ { id:"data0",	header:"ID", hidden:true} ];
    for(var i=1; i<myHeader.length; i++){
        mycolumns.push({ id:"data"+i.toString(), header:[ myHeader[i], { content:"textFilter" }], fillspace:(i==1),	sort:"string"})
    };
    var winSearch = webix.ui({
      view:"window",
      move:true,
      modal:true,
      head:myHeader[0],
      position: "center",
      height:500,
      minwidth:400,
      autowidth:true,
      resize: true,
      minHeight:400,
      select:true,
      headerRowHeight:20,
      rowHeight:20,
      scrollX:false,

    head:{
        cols:[
            {template:myHeader[0], type:"header", borderless:false},
            {view:"icon", icon:"mdi mdi-fullscreen", tooltip:"enable fullscreen mode", click: function(){
                if(winSearch.config.fullscreen){
                  webix.fullscreen.exit();
                  this.define({icon:"mdi mdi-fullscreen", tooltip:"Enable fullscreen mode"});
                } else {
                  webix.fullscreen.set(winSearch);
                  this.define({icon:"mdi mdi-fullscreen-exit", tooltip:"Disable fullscreen mode"});
                }
                this.refresh();
            }},
            {view:"icon", icon:"wxi-close", tooltip:"Close window", click: function(){
                winSearch.close();
            }}
        ]
    },
    body:{
            view: "datatable",
            id:idRechercheGrid,
            select:"row",
    	    resizeColumn: true,
            resizeRow: true,
            navigation:"false",
            autoheight:false,
            autowidth:false,
            columns:mycolumns
        }
    });

    var evt = $$(idRechercheGrid).attachEvent("onItemDblClick", function(id, e, node){
        onSuccess(winPere, json2array(this.getSelectedItem()));
        this.detachEvent(evt);
        webix.delay(function(){
          winSearch.close();
        });
        return false;
    });

    // Filtre Coté Serveur en cas de besoin
    $$(idRechercheGrid).filterByAll = function(){
        // gets filter values
        var valeur = "";
        var doc = AddAction(null, 1, "TEST", "SELECT", mySQL, "N");
        for(var i=1; i<myHeader.length; i++){
            valeur = this.getFilter("data"+i.toString()).value+"%";
            doc = AddParam(doc, 1, 0, myKey[i], valeur, "N");
        };
        var xml = XML2String(doc);
        ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
               	var delimiter = {rows:String.fromCharCode(3),  cols:String.fromCharCode(2) };
           		var adata  = webix.csv.parse(data, delimiter);
                var grid = $$(idRechercheGrid);
                grid.clearAll();
                grid.parse(adata,"jsarray");
                }, function (obj, data, args) {
                        webix.message(data);
                },
        [], false);
    };
    winSearch.show();
};


function doDwnPJ(id, fname, fext){
   var doc=AddAction(null,1,'DOWNLOAD_DOC','DOWNLOAD',"ACE",'O');
       doc=AddParam(doc,1,0,'IdDocument_',id,'N');
       doc=AddParam(doc,1,0,'Session_',mySession.getGuid(),'O');
       doc=AddParam(doc,1,0,'IdUser_',mySession.getIdUser(),'O'); 
       doc=AddParam(doc,1,0,'FileName_',fname,'O');
       doc=AddParam(doc,1,0,'ZIP_','U','O');
       
	   
   var xml=XML2String(doc);
                          

  ExecuteCommand("P","AOOA",xml,function(a,b,c){
	  
		if(!isAssigned(b)){
			
			webix.alert("Erreur de Chargement du fichier");
			return;
		} 
		var urlFile =mySession.getAdrPub()+":"+mySession.getPortPub()+"/DOWNLOAD?FileName="+encodeURI(b);
        fext = fext.toLowerCase().trim();
		if(fext=="pdf"){
			NtsShowPdf(urlFile,[fname])
		}else if(fext=="jpg"||fext=="jpeg"||fext=="png"){
			NtsShowImage(urlFile,[fname])
		}else{
			Ntsdownload(urlFile, fname, 'P');
		}

		},
		function(a,b,c){
	
			webix.alert(b);
		},[],true);
		mySession.setWait(false);
};

function NtsShowPdf(myFile){
      var ShowPdf=webix.ui({
       view:"window",
       modal:true,
       fullscreen:true,
       position:"center",
       //direction:direction,
       
       head:{
        cols:[
          {},
          {
          view:"icon",icon:"wxi-close",tooltip:"",click:function(){
           webix.fullscreen.exit();
           ShowPdf.close();
          }
         },
         
        ]
       },
       body:{
        id:"bodyContent",
        width:250,
        rows:[
         {view:"pdfbar",id:"toolbar"},
         {
          view:"pdfviewer",
          id:"pdf",
          toolbar:"toolbar",
          url:"binary->"+myFile
         }
        ]
       },
       on:{
            "onShow": function(){
              
            },  
          }   
      });
      $$("pdf").define("scale","page-width");
      ShowPdf.show();
     
};
  
  
function NtsShowImage(myFile){
      var ShowImage=webix.ui({
       view:"window",
       modal:true,
       fullscreen:true,
       position:"center",
       head:{
        cols:[
          {},
         {
          view:"icon",icon:"wxi-close",tooltip:"",click:function(){
           webix.fullscreen.exit();
           ShowImage.close();
          }
         },
        ]
       },
       body:{
        css:"",
        id:"bodyContent",
        rows:[
         
          { id:"imageV", css: "imageViewer", template:"<img src='"+myFile+"' class='imgViewer' />",
            data:{src:"binary->"+myFile,} 
          },
                  
        ]
       }
      });
      $$("imageV").define("scale","page-width");
      ShowImage.show();
};
	 
	 


function Ntsdownload(uri, name) {
	var link = document.createElement("a");
		// If you don't know the name or want to use
		// the webserver default set name = ''
       	link.setAttribute('download', name);
		link.href = uri;
		link.target="_blank";
		link.style.display = 'none';
		document.body.appendChild(link);
		link.click();
		link.remove();
};


function NtsEtatForm(myIdUser, myParams, myDestination, myEtat, myDataForm){
    var idmyform = "myform" + makeId();
    var winEtatForm = webix.ui({
        view:"window",
        move:true,
        modal:true,
        head:"Dialogue",
        position: "center",
        height:500,
        width:400,
        resize: true,
        minHeight:400,
        select: true,
        headerRowHeight:20,
        rowHeight:20,
        scrollX:false,

        head:{
                cols:[
                        {template:"Dialogue", type:"header", borderless:false},
                        {view:"icon", icon:"mdi mdi-fullscreen", tooltip:"enable fullscreen mode", click: function(){
                                if(winEtatForm.config.fullscreen){
                                    webix.fullscreen.exit();
                                    this.define({icon:"mdi mdi-fullscreen", tooltip:"Enable fullscreen mode"});
                                } else {
                                    webix.fullscreen.set(winEtatForm);
                                    this.define({icon:"mdi mdi-fullscreen-exit", tooltip:"Disable fullscreen mode"});
                                }
                                this.refresh();
                        }},
                        {view:"icon", icon:"wxi-close", tooltip:"Close window", click: function(){
                                winEtatForm.close();
                        }}
                ]
        },
        body:{
                    view:"form",
                    id:idmyform,
                    elements:[
                            { cols:[
                                { view:"button", value:"Go", css:"btn_cancel", click: function(){
                                    var values = $$(idmyform).getValues();
                                    var arr = json2matrice(values);
                                    for (var i=0; i<arr.length; i++){
                                         myParams.push(arr[i])
                                    };
                                    winEtatForm.close();
                                    NtsEtatFin(myIdUser, myParams, myDestination, myEtat);
                                }
                                },
                                { view:"button", value:"Cancel", css:"webix_secondary", click: function(){
                                    winEtatForm.close();
                                }
                                }
                            ]
                            }
                    ]
            }
        });
        var vq = false;
        var tmpForm = $$(idmyform);
        for (var i=0; i<myDataForm.length; i++){
              //0=Boolean; 1 Chaine; 2 Date; 3 entier; 4 MT; 5 taux; 6 Liste
              vq = (myDataForm[i][3]=="O" ? true : false);
              // Boolean 0/1
              if (myDataForm[i][2]==0){
                tmpForm.addView({ view: "switch", onLabel: "On", offLabel:"Off", value: 1, id:myDataForm[i][3], name:myDataForm[i][3], required:vq },i);
              } else if (myDataForm[i][2]==1){
                // Chaine
                tmpForm.addView({view:"text", id:myDataForm[i][3], name:myDataForm[i][3], label:myDataForm[i][6], required:vq}, i);
              } else if (myDataForm[i][2]==2){
                // Date
                tmpForm.addView({view:"datepicker", id:myDataForm[i][3], name:myDataForm[i][3], label:myDataForm[i][6], stringResult:true, inputAlign:"center", required:vq}, i);
              } else if (myDataForm[i][2]==3){
                // Entier
                tmpForm.addView({view:"text", id:myDataForm[i][3], name:myDataForm[i][3], label:myDataForm[i][6], inputAlign:"right", format:"1 111", required:vq}, i);
              } else if (myDataForm[i][2]==4){
                  // Reel
                tmpForm.addView({view:"text", id:myDataForm[i][3], name:myDataForm[i][3], label:myDataForm[i][6], inputAlign:"right", format:"1 111.00", required:vq}, i);
              } else if (myDataForm[i][2]==5){
                  // Taux
                tmpForm.addView({view:"text", id:myDataForm[i][3], name:myDataForm[i][3], label:myDataForm[i][6], inputAlign:"right", format:"1 111.00%", required:vq}, i);
              } else if (myDataForm[i][2]==6){
                  // Liste
                tmpForm.addView({view:"combo", id:myDataForm[i][3], name:myDataForm[i][3], label:myDataForm[i][6], suggest:[], required:vq}, i);
                var doc = AddAction(null, 1, "GET", "SELECT", myDataForm[i][7], "O");
                doc = AddParam(doc, 1, 0, "IdUser", myIdUser, "N");
                for(var i=0; i<myPrarams.length; i++){
                    doc = AddParam(doc, 1, 0, myPrarams[i][0], myPrarams[i][1], "N");
                };
                NtsGetData(doc, "A", fillCombo, null, [myDataForm[i][3]]);
              }
        };
        //myDataForm
        winEtatForm.show();
};

function NtsEtatExec(myIdUser, myPrarams, myDestination, myEtat) {
    var idetat = 0;
    var inbre = 0;
    if (Array.isArray(myEtat)) {
        idetat = myEtat[0];
        inbre = myEtat[2];
    } else return;
    //
    if (inbre > 0) {
        // inbre est le nombre de parametres dans dialogue
        ///var mySQL = "select * From dbo.webfn_EtatsParams(:IdUser_, :IdEtat_) order by 2";
        var doc = AddAction(null, 1, "PRM", "SELECT", "ACH", "O");
        doc=AddParam(doc,1,0,"IdUser_",myIdUser,"O");
	    doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
        doc=AddParam(doc,1,1,"IdEtat_",idetat,"O");
        var xml = XML2String(doc);
        ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
               	var delimiter = {rows:String.fromCharCode(3),  cols:String.fromCharCode(2) };
                var adataForm = webix.csv.parse(data, delimiter);
                NtsEtatForm(myIdUser, myPrarams, myDestination, myEtat, adataForm);
        }, function (obj, data, args) {
                webix.message(data);
        },
        [], false);
    } else {
        NtsEtatFin(myIdUser, myPrarams, myDestination, myEtat);
    }
    return
};


function buildForm(myForm, myArr, myPrms, myOk){
 if(!myForm) return false;

 var form=webix.ui({
  view:"window",
  height:400,
  width:500,
  left:50,top:50,
  move:true,
  modal:true,
  resize:true,

  head:{
   cols:[
    {
     template:"<img src='./tools/images/Diam2@4x.png' style='height:80%;vertical-align: middle;padding-right:5px; '><span>Title</span>",
     type:"header",
     borderless:false
    },
    {
     view:"icon",icon:"mdi mdi-fullscreen",tooltip:"enable fullscreen mode",click:function(){
      if(form.config.fullscreen){
       webix.fullscreen.exit();
       this.define({icon:"mdi mdi-fullscreen",tooltip:"Enable fullscreen mode"});
      } else{
       webix.fullscreen.set(form);
       this.refresh();
       this.define({icon:"mdi mdi-fullscreen-exit",tooltip:"Disable fullscreen mode"});
      }
     }
    },
    {
     view:"icon",icon:"wxi-close",tooltip:"Close window",click:function(){
      form.close();
     }
    }
   ]
  },
  body:
   {
    view:"form",id:myForm,elements:[]
   }

 });
 form.show();
 //
 var l=myArr.length,formatter=[],obj={},temp;
 var parser=webix.Date.strToDate("%d/%m/%Y");
 for(var i=0; i<l; i++){
  obj={};
  obj["labelAlign"]="right";
  obj["validate"]="isNotEmpty";
  switch(myArr[i][1]){
   case 1:
    obj["view"]="text";
    obj["name"]=myArr[i][2];
    obj["label"]=myArr[i][2];
    obj["value"]=myArr[i][3];
    break;
   case 2:
    obj["view"]="datepicker";
    obj["name"]=myArr[i][2];
    obj["label"]=myArr[i][2];
    obj["value"]=parser(myArr[i][3]);
    obj["format"]="%d/%m/%Y";
    break;
  }
  formatter.push(obj);
 };
 obj={};
 obj["view"]="button";
 obj["css"]="btn_cancel";
 obj["value"]="Validate";
 obj["click"]=function(){
     if(this.getFormView().validate()){
            var values = $$(myForm).getValues();
            var arr = json2matrice(values);
            for (var i=0; i<arr.length; i++){
                 myPrms.push(arr[i])
            };
            myOk(myPrms);
     } else{
     }
 };
 formatter.push(obj);
 temp=$$(myForm);
 formatter.forEach(function(el){
    temp.addView(el)
 });
};


function NtsGetData(doc, type, onSucceed, onFail, Args) {
    var xml = XML2String(doc), data=null;
    if (type=="A") {
        ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
            if (isFunction(onSucceed)) {
                onSucceed(data,Args)
            }
            return true;
        }, function (obj, data, args) {
                webix.message(data);
            if (isFunction(onFail)) {
                onFail(data, Args)
            };
            return false;
        },
        [], false);
    } else {
        var delimiter = {rows:String.fromCharCode(3),  cols:String.fromCharCode(2) };
        ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
            var zArr=splitString(data,5);
            data = {};
            for(var i=0; i<zArr.length; i++){
                var loc=splitString(zArr[i],4);
                if(loc[4].length>3){
                    webix.message('Error !!!'+loc[4]);
                } else if (loc[5].length>=0){
                    data[loc[2]]  = webix.csv.parse(loc[5], delimiter);
                } else {
                    data[loc[2]] = null;
                };
            };
            if (isFunction(onSucceed)) {
                 onSucceed(data,Args)
            }
        }, function (obj, data, args) {
                webix.message(data);
                if (isFunction(onFail)) {
                    onFail(data, Args)
                };
                return false;
        }, [], false);
    }
};


function NtsEtatFin(myIdUser, myPrarams, myDestination, myEtat) {
    var idetat = 0;
    if (Array.isArray(myEtat)) {
        idetat = myEtat[0];
    } else return;
    //
    if (myDestination == "PDF") {
         var doc = AddAction(null, 1, "test.PDF", "CRYSTAL", idetat, "N");  //------> generer un nom fichier
    } else {
        var doc = AddAction(null, 1, "CSV", "CRYSTAL", idetat, "N");  //------> generer un nom fichier
    };
    doc = AddParam(doc, 1, 0, "IdUser_", myIdUser, "N");
    for(var i=0; i<myPrarams.length; i++){
        doc = AddParam(doc, 1, 0, myPrarams[i][0], myPrarams[i][1], "N");
    };
    var xml = XML2String(doc);
    ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
               	var delimiter = {rows:String.fromCharCode(3),  cols:String.fromCharCode(2) };
                if  ( myDestination == "PDF") {
					 Ntsdownload(data, "test.pdf", args)  //------> generer un nom fichier
                } else {
                    var zArr=splitString(data,7);
                    if (zArr.length > 0) {
                		var aHeader  = webix.csv.parse(zArr[0], delimiter);
                		var aData  = webix.csv.parse(zArr[1], delimiter);
                        NtsEcranDynamic("D", aHeader, aData);
                    } else {
                        webix.message("Aucune donnée disponible.");
                    }
                }
          }, function (obj, data, args) {
                webix.message(data);
          },
    ['P'], false);
};

function NtsEtats(myIdUser, myEcran, myPrarams){
    //var mySQL = "Select * From [dbo].[webfn_EtatsListe](:IdUser_, :IdECran_) Order By 2";
    //mySQL = mySQL.replace("%1", myIdUser);
    //mySQL = mySQL.replace("%2", myEcran);   
    var doc = AddAction(null, 1, "PRM", "SELECT", "ACI", "O");
        doc=AddParam(doc,1,0,"IdUser_",myIdUser,"O");
	    doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
        doc=AddParam(doc,1,1,"IdECran_",myEcran,"O");
        
        
    var xml = XML2String(doc);
    ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
               	var delimiter = {rows:String.fromCharCode(3),  cols:String.fromCharCode(2) };
           		var adata  = webix.csv.parse(data, delimiter);
                if (adata.length > 0) {
                    NtsEtatChoix(myIdUser, adata, myPrarams);
                } else {
                    webix.message("Aucun Etat Disponible pour cet ecran.");
                }
          }, function (obj, data, args) {
                webix.message(data);
          },
    [], false);
};

function NtsEtatChoix(myIdUser, myData, myPrarams){
        var idgridetats = "gridetats"+makeId();
        var idradioetat = "radioetat"+makeId();
        var win = webix.ui({
            view:"window",
            move:true,
            modal:true,
            head:"Liste des etats disponibles",
            position: "center",
            height:500,
            resize: true,
            minHeight:400,
            width:500,
            select: true,
            headerRowHeight:20,
            rowHeight:20,
            scrollX:false,

            head:{
                cols:[
                        {template:"<img src='./tools/images/Diam2@4x.png' style='height:80%;vertical-align: middle;padding-right:5px; '><span>Liste des etats disponibles</span>", type:"header", borderless:false},
                        {view:"icon", icon:"wxi-search", tooltip:"Search window", click: function(){
                                appelEcranSearchAuto(win, IdUser_, Ecran_);
                        }},
                        {view:"icon", icon:"mdi mdi-fullscreen", tooltip:"enable fullscreen mode", click: function(){
                                if(win.config.fullscreen){
                                    webix.fullscreen.exit();
                                    this.define({icon:"mdi mdi-fullscreen", tooltip:"Enable fullscreen mode"});
                                } else {
                                    webix.fullscreen.set(win);
                                    this.define({icon:"mdi mdi-fullscreen-exit", tooltip:"Disable fullscreen mode"});
                                }
                                this.refresh();
                        }},
                        {view:"icon", icon:"wxi-close", tooltip:"Close window", click: function(){
                                win.close();
                        }}
                ]
            },
            body:{
                rows: [
                    {
                        label: "Destination",
                        value: "PDF",
                        options: [
                            "PDF",
                            "Ecran"
                        ],
                        view: "radio",
                        id:idradioetat,
                        height: 0
                    },
                    {
                        view:"datatable",
                        id:idgridetats,
                        resizeColumn: true,
                        resizeRow: true,
                        select:"row",
                        navigation:"false",
                        autoheight:false,
                        autowidth:false,
                        scrollX:true,
                        datatype:"jsarray",
                        columns:[
                            { id:"data0",	header:"ID", width:50, hidden:true},
                            { id:"data1",   header:[ "Choisissez votre etat :", { content:"textFilter" }], sort:"string" , fillspace:true},
                            { id:"data2",	header:"NbreParams", width:50, hidden:true},
                            //{ id:"data3",	header:"Direct", template:"{common.rcheckboxON()}", width:100, sort:"string", css:{'text-align':'center'}},
                            { id:"data3",	header:"Direct", width:10,	hidden:true}
                        ],
                        data:myData
                    }
                ]
            },
            on:{
                onAfterRender:webix.once(function(){
                    webix.event(window, "resize", function(){
                            this.define("width", getWidth())
                            this.resize();
                    }, this);
                }),
                onAfterLoad:function(){
                	this.refreshColumns();
                }
        }
    });
    var evt = $$(idgridetats).attachEvent("onItemDblClick", function(id, e, node){
            NtsEtatExec(myIdUser, myPrarams, $$(idradioetat).getValue(), json2array(this.getSelectedItem()));
            this.detachEvent(evt);
            webix.delay(function(){
                win.close();
            });
            return false;
    });
    win.show();
};


function NtsExecEcranDynamic(mySqlHeader,mySqlData){
    var doc = "";
    var typeEcran = "S";
    if (mySqlHeader=="") {
        doc = AddAction("", 1, "HEADER", "HEADER", mySqlData, "O")
        doc = AddAction(doc, 2, "DATA", "SELECT", mySqlData, "O");
        typeEcran = "D";
    } else {
        doc = AddAction("", 1, "HEADER", "SELECT", mySqlHeader, "O");
        doc = AddAction(doc, 2, "DATA", "SELECT", mySqlData, "O");
        typeEcran = "S";
    };
    var xml, delimiter, adataHeader, adataData;
    xml=XML2String(doc);
    adataHeader = "";
    adataData = "";
    delimiter = {rows:String.fromCharCode(3),  cols:String.fromCharCode(2) };
    ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
        var zArr=splitString(data,5);
        data=null;
        for(var i=0; i<zArr.length; i++){
            var doc=splitString(zArr[i],4);
            if(doc[4].length>3){
                webix.message('Error !!!'+doc[4]);
            } else if((doc[2]==="HEADER")&&(doc[5].length>=0)){
                adataHeader  = webix.csv.parse(doc[5], delimiter);
            } else if((doc[2]==="DATA")&&(doc[5].length>=0)){
                adataData  = webix.csv.parse(doc[5], delimiter);
            }
        };
        if ((adataHeader.length > 0) && (adataData.length > 0)) {
           NtsEcranDynamic(typeEcran,adataHeader, adataData)
        }
    }, function (obj, data, args) {
        webix.message(data);
    }, [], false);
};


function NtsEcranDynamic(typeEcran, myHeader, myData){
    var idwinDynamic = "idwinDynamic" + makeId();
    var mycols = [];
    var largeur = 0;
    var obj = { id:"data0",	header:"ID", hidden:true};
    mycols.push(obj);
    for(var i=1; i<myHeader.length; i++){
        myHeader[i][2] = parseInt(myHeader[i][2]);
        if (typeEcran == "D") {
            if (myHeader[i][3] == "S") {
                if (myHeader[i][2] <= 50) {myHeader[i][2] = 50} else
                if (myHeader[i][2] >= 250) {myHeader[i][2] = 250} ;
            } else if (myHeader[i][3] == "D") {
                myHeader[i][2] = 150;
            } else if (myHeader[i][3] == "I") {
                myHeader[i][2] = 100;
            } else if (myHeader[i][3] == "M") {
                myHeader[i][2] = 150;
            } else {
                myHeader[i][2] = 100;
            }
        };
        if (myHeader[i][3] == "S") {
                obj = { id:"data"+i.toString(),  header:[ myHeader[i][1], { content:"textFilter" }],  fillspace:(i==1),  sort:"string", width:myHeader[i][2]};
        } else if (myHeader[i][3] == "D") {
                obj = { id:"data"+i.toString(),  header:myHeader[i][1],    sort:"date", width:myHeader[i][2], css:{'text-align':'center'}}
        } else if (myHeader[i][3] == "I") {
                obj = { id:"data"+i.toString(),  header:myHeader[i][1], sort:"int", css:{'text-align':'right'}, width:myHeader[i][2]}
        } else if (myHeader[i][3] == "C") {
                obj = { id:"data"+i.toString(),  header:myHeader[i][1], template:"{common.rcheckboxON()}", sort:"string", css:{'text-align':'center'}, width:myHeader[i][2]}
        } else if (myHeader[i][3] == "M") {
                obj = { id:"data"+i.toString(),  header:myHeader[i][1], sort:"byNumber", css:{'text-align':'right'}, format:webix.i18n.numberFormat, width:myHeader[i][2]}
        } else {
                obj = { id:"data"+i.toString(),  header:myHeader[i][1], sort:"string", width:myHeader[i][2]}
        };
        largeur += myHeader[i][2];
        mycols.push(obj);
    };
    if ( largeur > 900) { largeur = 900} else
    if ( largeur < 500) { largeur = 500};
    var titre = "";
    if (isAssigned(myHeader) && (myHeader.length >= 1)) {titre = myHeader[0][1]}
    var winDynamic = webix.ui({
      view:"window",
      move:true,
      modal:true,
      head:titre,
      position: "center",
      height:500,
      minwidth:500,
      width:largeur,
      resize: true,
      minHeight:400,
      select:true,
      headerRowHeight:20,
      rowHeight:20,
      scrollX:false,

    head:{
        cols:[
            {template:titre, type:"header", borderless:false},
            {view:"icon", icon:"wxi-download", tooltip:"Print window", click: function(){
                webix.print($$(idwinDynamic));
            }},
            {view:"icon", icon:"mdi mdi-fullscreen", tooltip:"enable fullscreen mode", click: function(){
                if(winDynamic.config.fullscreen){
                  webix.fullscreen.exit();
                  this.define({icon:"mdi mdi-fullscreen", tooltip:"Enable fullscreen mode"});
                } else {
                  webix.fullscreen.set(winDynamic);
                  this.define({icon:"mdi mdi-fullscreen-exit", tooltip:"Disable fullscreen mode"});
                }
                this.refresh();
            }},
            {view:"icon", icon:"wxi-close", tooltip:"Close window", click: function(){
                winDynamic.close();
            }}
        ]
    },
    body:{
            view: "datatable",
            id:idwinDynamic,
            resizeColumn: true,
            navigation:"false",
            autoheight:false,
            autoconfig:(myHeader.length==0),
            //autowidth:true,
            scrollX:true,
            datatype:"jsarray",
            select:"row",
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
            columns:mycols
        },
    on:{
        onAfterRender:webix.once(function(){
            //event should be attached once, not each time during rendering
            webix.event(window, "resize", function(){
                    this.define("width", getWidth())
                    this.resize();
                }, this);
        }),
        onAfterLoad:function(){
        	this.refreshColumns();
        }
        }
    });
    //alert(mycols.length);
    $$(idwinDynamic).parse(myData,"jsarray");
    winDynamic.show();
};

function NtsGetValueFromData(data, value){
  var i = 0; ok = false; res = null;
  while ((!ok) && (i < data.length)) {
      ok = (data[i][0] === value);
      if (!ok) {i++} else {res = data[i][1]};
  };
  return res;
};

var myReelformat=webix.Number.numToStr({
    groupDelimiter:" ",
    groupSize:3,
    decimalDelimiter:".",
    decimalSize:2
});

function CurrencyFormatted(amount) {
    var i = parseFloat(Nts2R(amount));
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
};

function fillCombo(data, arg){
   	var delimiter = {rows:String.fromCharCode(3),  cols:String.fromCharCode(2) };
    var Combo = arg[0];
	var adata  = webix.csv.parse(data, delimiter);
    var list = $$(Combo).getPopup().getList();
    list.clearAll();
    var tmp = convertToArrayOfObjects(adata, ["id","value"]);
    list.parse(tmp);
};

function NtsmajCombo(winPere, Values){
    var list = $$(winPere).getPopup().getList();
    list.clearAll();
    var obj = {};
    obj["id"] = Values[0];
    obj["value"] = Values[1];
    list.parse(obj);
    //
    $$(winPere).setValue(Values[0]);
    // set value of combo Resultat[0]
};

function elapsedstart() {
    tmpstartTime = new Date();
};

function elapsedTime() {
    var tmpendTime = new Date();
    return tmpendTime - tmpstartTime; //in ms
};


function convertToArrayOfObjects(data, keys) {
    var i = 0, k = 0,
        obj = null,
        output = [];
    if ((data.length==1) && (data[0]=="")) {
        return []
    } else {
        for (i = 0; i < data.length; i++) {
            obj = {};
            for (k = 0; k < keys.length; k++) {
                obj[keys[k]] = data[i][k];
            }
            output.push(obj);
        };
        return output;
    }
};

function json2array(json){
    var result = [];
    if (isAssigned(json)) {
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });
    };
    return result;
};

function json2matrice(json){
    var result = [];
    if (isAssigned(json)) {
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push([key,json[key]]);
        });
    };
    return result;
};
function NtsSaveArray(myKey, myArr) {
    sessionStorage.setItem(myKey, utoa(JSON.stringify(myArr)));
}

function NtsLoadArray(myKey) {
    var test = sessionStorage.getItem(myKey);
    if (isAssigned(test)) {
        return JSON.parse(atou(test));
    } else {
        return null;
    }
}

function NtsSaveSession(aName) {
    NtsSaveArray(aName, mySession.getArrData())
}

function NtsLoadSession(aName) {
    var tmp = NtsLoadArray(aName);
    if (isAssigned(tmp)) {
        mySession.setArrData(tmp);
    }
}

function isAssigned(value) {
    return ((typeof (value) != 'undefined') && (value != null) && (value != ""))
}

function AddAction(xmlDoc, aid, aname, atype, asql, aNts) {
    var vSql;
    if (!isAssigned(xmlDoc)) {
        xmlDoc = "<?xml version='1.0' encoding='UTF-8'?><Actions></Actions>";
        xmlDoc = String2XML(xmlDoc);
    }
    var parent = xmlDoc.getElementsByTagName("Actions");
    var xact = xmlDoc.createElement("Action");
    var xprs = xmlDoc.createElement("Params");
    xprs.setAttribute("ID", aid);
    xmlDoc.createTextNode(atype);
    if (aNts === 'O') {
        vSql = utoa(asql);
    } else {
        vSql = asql;
    }
    xact.setAttribute("ID", aid);
    xact.setAttribute("NAME", aname.toUpperCase());
    xact.setAttribute("TYPE", atype.toUpperCase());
    xact.setAttribute("NTS", aNts.toUpperCase());
    xact.setAttribute("VALUE", vSql);
    xact.appendChild(xprs);
    parent[0].appendChild(xact);

    return xmlDoc;
}

function AddParam(xmlDoc, id, prmSrc, prmName, prmVal, prmNts) {
    var act = xmlDoc.getElementsByTagName("Params");
    var param = xmlDoc.createElement(prmName.toUpperCase());
    if (prmVal == null) {
        prmVal = "";
    }
    if (prmNts == 'O') {
        prmVal = utoa(prmVal);
    }
    param.setAttribute("Source", prmSrc);
    param.setAttribute("NTS", prmNts);
    param.setAttribute("Value", prmVal);
    for (var i = 0; i < act.length; i++) {
        if (act[i].getAttribute('ID') == id) {
            act[i].appendChild(param);
        }
    }
    return xmlDoc;
}

function String2XML(xmlString) {
var parser = new DOMParser();
	return parser.parseFromString(xmlString,"text/xml");
}

function XML2String(xmlDoc) {
    var xmlString;
    if (window.ActiveXObject) {
        xmlString = xmlDoc.xml;
    } else {
        xmlString = (new XMLSerializer()).serializeToString(xmlDoc);
    }
    return xmlString;
}

function arrayBufferToString(ab) {
    var chunk = 8192;
    var len = ab.byteLength;
    var u8 = new Uint8Array(ab);
    if (len < chunk) {
        return String.fromCharCode.apply(null, u8);
    } else {
        var k = 0,
            r = "";
        while (k < len) {
            r += String.fromCharCode.apply(null, u8.subarray(k, k + chunk));
            k += chunk;
        }
        return r;
    }
}

function GetXmlHttpObject() {
    var http;
    try {
        http = new XMLHttpRequest;
        GetXmlHttpObject = function () {
            return new XMLHttpRequest;
        };
    } catch (e) {
        var msxml = [
            'MSXML2.XMLHTTP.3.0',
            'MSXML2.XMLHTTP',
            'Microsoft.XMLHTTP'
        ];
        for (var i = 0, len = msxml.length; i < len; ++i) {
            try {
                http = new ActiveXObject(msxml[i]);
                GetXmlHttpObject = function () {
                    return new ActiveXObject(msxml[i]);
                };
                break;
            } catch (e) {
            }
        }
    }
    return http;
}

function waitUntil(boolFn, callback, p1, p2, p3, delay) {
    !boolFn()
        ? callback(p1, p2, p3)
        : window.setTimeout(waitUntil, delay, boolFn, callback, p1, p2, p3, delay);
}

function onErr(eTitle, eType, eText, onFail, reqArgs) {
    onFail && onFail(eTitle, eText, reqArgs);
}


function isString(str){
 return /^[A-Z]+$/.test(str);
}

function isNumber(val){
 return /^\-?\d+$/.test(val);
}

function isSpaceCol(col){
 return (/^\s*$/.test(col));
}

function isAssigned(value){
 return value!==undefined&&value!==null&&value!=="";
}

function isFunction(val){
 return typeof val==='function';
}

function isObject(obj){
 return obj!==null&& typeof obj==='object'
}

function ObjectEmpty(obj){
 if(isObject(obj)){
  return (0===Object.keys(obj).length);
 }
}

function hasClass(element,className){
 return element.className&&new RegExp("(^|\\s)"+className+"(\\s|$)").test(element.className);
}

function arrayBufferToBase64( buffer ) {
	var binary = '';
	var bytes = new Uint8Array( buffer );
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode( bytes[ i ] );
	}
	return window.btoa( binary );
};

function convertToPlain(rtf) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
    return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
};

function base64ToArrayBuffer(base64) {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
};




  
function ExecuteCommand(srvWAN, reqFunc, reqCmde, onSuccess, onFail, reqArgs, reqWait) {
    var bOk = false, reqUrl, bb;
    var keyCodes = reqFunc.split("");
    if (reqWait) {
        mySession.setWait(true);
    }
    if (srvWAN == "P") {
        reqUrl = mySession.getAdrPub() + ':' + mySession.getPortPub() + '/' + reqFunc;
    } else if (srvWAN == "R") {
        reqUrl = mySession.getAdrPri() + ':' + mySession.getPortPri() + '/' + reqFunc;
    } else reqUrl = null;
    !isAssigned(reqUrl) && error("reqUrl is unDef");
    if (isAssigned(reqCmde)) {
        if (keyCodes[2] === 'O') {
            var zip = new JSZip();
            zip.file("Z.ZIP", reqCmde, {type: "blob", base64: false, binary: true, compression: "DEFLATE"});
            bb = zip.generate({type: "blob"});
        } else {
            bb = new Blob([reqCmde], {type: 'image/png'});
        }
    } else {
        bb = null;

    };
    !isAssigned(bb) && error("reqCmde is unDef");
    var r = GetXmlHttpObject();
    if (isAssigned(r) && isAssigned(bb) && isAssigned(reqFunc)) {
        r.onload = function (e) {
            if (r.readyState === 4) {
                if (r.status === 200) {
                    var myBuffer;

                    try {
                        var asbytes = new Uint8Array(this.response, 0, 4);
                        if ((asbytes.byteLength == 4) && (asbytes[0] == 80) && (asbytes[1] == 75) && (asbytes[2] == 3) && (asbytes[3] == 4)) {
                            try {
                                asbytes = null;
                                var zip = new JSZip(this.response, {base64: false});
                                myBuffer = zip.file(json2array(zip.folder().files)[0].name).asBinary();
                            } catch (e) {
                                onErr("NTSOFT", "alert-error", "Error : " + e, onFail, reqArgs);
                                return;
                            }
                        } else {
                            myBuffer = arrayBufferToString(this.response);
                        }
                    } catch (e) {
                        myBuffer = arrayBufferToString(this.response);
                    }

                    
                    if (keyCodes[1] === 'O') myBuffer = atou(myBuffer);

                    
                    if (!isAssigned(myBuffer)) return;

                    if (keyCodes[3] === 'A') {
                        var sArr = myBuffer.split(String.fromCharCode(4));
                        if (sArr.length != 3) {
                            onErr("NTSOFT", "alert-error", "Data server not buffered", onFail, reqArgs);
                            return;
                        }
                        bOk = sArr[0];
                        if (bOk != 0) {
                            sArr[1].length >= 3 && onErr("NTSOFT", "alert-warning", sArr[1], onFail, reqArgs);
                            if (isFunction(onSuccess)) {
                                if (reqWait) {
                                    waitUntil(mySession.getWait, onSuccess, this, sArr[2], reqArgs, 100);
                                } else {
                                        onSuccess(this, sArr[2], reqArgs);
                                }
                            }

                        } else {
                            sArr[1].length >= 3
                                ? onErr("NTSOFT", "alert-warning", sArr[1], onFail, reqArgs)
                                : onErr("NTSOFT", "alert-error", "System Error. Veuillez contacter votre administrateur.", onFail, reqArgs);

                        }

                    } else if (keyCodes[3] === 'Z') {
                        if (isFunction(onSuccess)) {
                            reqWait
                                ? waitUntil(mySession.getWait, onSuccess, this, myBuffer, reqArgs, 100)
                                : onSuccess(this, myBuffer, reqArgs);
                        }
                        
                    }
                    else if (reqFunc == "ATKRF") {
                        if(myBuffer == 'Méthode (ATKRF) Non Autorisée ()'){
                            mySession.setToken('');
                            window.location.href = '../login.html'; 
                           }else{
                            mySession.setToken(myBuffer);
                            NtsSaveSession("NTSBEL");
                           }
                        
                   }
                } else {
                    onErr("NTSOFT", "alert-error", "Data server not present (status)", onFail, reqArgs);
                }
            }
        };

        r.ontimeout = function () {
            onErr("NTSOFT", "alert-error", "System Error : TimeOut", onFail, reqArgs);
        };
        r.open("POST", reqUrl, true);
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // set the token in header
        r.setRequestHeader('Authorization', 'Bearer ' + mySession.getToken());
        // end
        r.timeout = 20000;
        r.responseType = "arraybuffer";
        r.send(bb);
    } else
        error("reqCmde is unDef");
}



function GetValueByID(aIdentifiant, aType )
{
	if (aType == "R") {
	   // Radio
	   var ele = document.getElementsByName(aIdentifiant);
	   for(var i = 0; i < ele.length; i++) {
			if(ele[i].checked) {return ele[i].value};
		}
	} else if (aType == "B") {
		// CheckBox
		var ele = document.getElementById(aIdentifiant);
		if ((isAssigned(ele)) && (ele.checked)) {return "O"} else {return "N"};
	} else if (aType == "C") {
			// Combo
			var ele = document.getElementById(aIdentifiant);
			for(var i = 0; i < ele.length; i++) {
				if(ele[i].selected) {return ele[i].value};
			}
	} else {
		var ele = document.getElementById(aIdentifiant);
		if (isAssigned(ele)) {return ele.value} else {return ""}
	}
}

function SetValueByID(MyId, aValue)
{
	var v = document.getElementById(MyId)
	if (v!=null) { v.value = aValue; };
}




if(typeof Number.prototype.toMoney!='function'){
    Number.prototype.toMoney=function(dp,ts,ds){
     var arr=this.toFixed(dp).split('.');
     arr[0]=arr[0].replace(/\B(?=(\d{3})+(?!\d))/g,ts==null?' ':ts+'');
     return arr.join(ds==null?'.':ds+'');
    };
   }
   
function formatDecimal(val){
    val=((val+'').replace(',','.')*1);
    return !isNaN(val)?parseFloat(val).toMoney(2):val;
}

function animateCounter(speed, counters){
	counters.forEach( counter => {
	const animate = () => {
		const value = +counter.getAttribute('data');
		const data = +counter.innerText;
		
		const time = value / speed;
		if(data < value) {
			counter.innerText = Math.ceil(data + time);
			setTimeout(animate, 1);
			}else{
			counter.innerText = formatDecimal(value);
			}
	}
	animate();
	});
}

webix.DataStore.prototype.sorting.as.ntsSortDecimal=function(a,b){
    if(!a|| !b) return;
    try { a=parseFloat(a.replace(',','.')); } catch(e) {a=parseFloat(a)};
    try { b=parseFloat(b.replace(',','.')); } catch(e) {b=parseFloat(b)};
    return a>b?1:-1;
   };
   webix.DataStore.prototype.sorting.as.ntsDate=function(a,b){
    if(!a|| !b) return;
    a=ntsStrToDate(a);
    b=ntsStrToDate(b);
    return a>b?1:-1;
   };
   
   function ntsStrToDate(str){
    if(!isAssigned(str)) return '';
    var parts=str.split(/[\/ :]/);
    return new Date(parts[2],parts[1]-1,parts[0]);
   }

   function getContratsByPolice(idPolice){
	var doc=AddAction(null,1,"CONTRACTLISTE","SELECT","ACF","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdPolice_",idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["IdProduction","Libelle", "DateActe", "FileExt"]);
		$$("idPoliceDT").clearAll();
		$$("idPoliceDT").parse(tmp);
		$$("idPoliceDT").hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function doDwnContrat(id, fname, fext){
	var doc=AddAction(null,1,'DOWNLOAD_DOC','DOWNLOAD',"ACG",'O');
		doc=AddParam(doc,1,0,'IdDocument_',id,'N');
		doc=AddParam(doc,1,1,'IdSession_',mySession.getGuid(),'O');
		doc=AddParam(doc,1,2,'IdUser_',mySession.getIdUser(),'O'); 
		doc=AddParam(doc,1,3,'FileName_',fname,'O');
		doc=AddParam(doc,1,4,'ZIP_','U','O');
		
	var xml=XML2String(doc);
						   
    ExecuteCommand("P","AOOA",xml,function(a,b,c){
	   
		 if(!isAssigned(b)){
			 
			 webix.alert("Erreur de Chargement du fichier");
			 return;
		 } 
		 var urlFile =mySession.getAdrPub()+":"+mySession.getPortPub()+"/DOWNLOAD?FileName="+encodeURI(b);
		 fext = fext.toLowerCase().trim();
		 if(fext=="pdf"){
			 NtsShowPdf(urlFile,[fname])
		 }else if(fext=="jpg"||fext=="jpeg"||fext=="png"){
			 NtsShowImage(urlFile,[fname])
		 }else{
			 Ntsdownload(urlFile, fname);
		 }
 
		 },
		 function(a,b,c){
	 
			 webix.alert(b);
		 },[],true);
		 mySession.setWait(false);
 };

 function listsContrats(idPolice){
	webix.ui({
		view:"window",
		modal:true,
		height:250,
		width:350,
		position:"center",
		close:true,
		move:true,
		head:"Liste du documents",
		body:{
				view: "scrollview",
				scroll: "y",
				body: {
				  rows:[
					{  
						view:"datatable",
						id:"idPoliceDT",
						css:"bg-main",
						type:"clean",
						select:"row",
						columns:[
						  { id:"rank",	header:"", css:"rank", hidden:true},
						  { id:"Libelle",	header:"Libelle", fillspace: true },
						  { id:"DateActe",	header:"DateActe"},
						],
						autoheight:true,
						scroll: "auto",
						on:{"onItemDblClick":function(id, e, trg){ 
							var SelectedRow = $$("idPoliceDT").getSelectedItem();
                            if (isAssigned(SelectedRow)) {
                                var ext = SelectedRow.FileExt.replace('.', '').trim();
                                doDwnContrat(SelectedRow.IdProduction, 'DOCUMENT.'+ext, ext)
                            }							
						}},
						data: []
					  }
				  ]
				}
		}
	  }).show();
      getContratsByPolice(idPolice);
}


function refreshToken(){
          // Refresh Token
          ExecuteCommand("P", "ATKRF", function (obj, data, args) {  
             
			  return true;
          }, function (obj, data, args) {
           
              webix.message(data);            
              return false;
          },
          [], false);
};
//------------------------  End ntsoft.js -------------------------------------------------------------------------------



//------------------------  Start common.js -------------------------------------------------------------------------------
var minW=320;

var date_format = webix.Date.strToDate("%d/%m/%Y");
var datetime_format = webix.Date.strToDate("%d/%m/%Y %H:%i:%s");

function checkConnexion(){
    var status = false;
    if((mySession.getIdUser()>=0) || (mySession.getIdAssure()>=0) || (mySession.getIdAdherant()>=0)){
        status = true;
    }
    return status
}


var loadingDIV = '<div class="loader"></div>';


function rcheckboxON(a){
    if(a=='N'){a=0;}else if(a=='O'){a=1}return a;
}

var arrSexe = [
{ "id":'M', "value":"Masculin" },
{ "id":'F', "value":"Féminin" }
];

var arrSituation = [
    { "id":'M', "value":"Marié" },
    { "id":'C', "value":"Célibataire" }
];
//------------------------  End common.js -------------------------------------------------------------------------------


//------------------------  Start mesoffres.js -------------------------------------------------------------------------------
var images = [
	{id:1, src:"./perso/cars/img1.jpg", title: "Image 1",},
	{id:2, src:"./perso/cars/img2.jpg", title: "Image 2"},
	{id:3, src:"./perso/cars/img3.jpg", title: "Image 3"},
	{id:4, src:"./perso/cars/img4.jpg", title: "Image 4"},
	{id:5, src:"./perso/cars/img5.jpg", title: "Image 5"},
  ];

var viewsArray = [];
for(var i = 0; i < images.length; i++){
  viewsArray.push({
    id: images[i].id,
    css: "image_carousel",
    template:img,
    data: webix.copy(images[i])
  });
}

function img(obj){
	return '<img src="'+obj.src+'" class="content" ondragstart="return false"/>'
  }
var offresListe = {
	// Content
	css:"bg-main",
	type:"clean",
	id:"OffresListe",
	margin:0,
	padding:3,
	cols:[
		{
			rows:[
				{	minWidth:300,
					height:40,
					cols:[
						{view:"label", template:"", width:30, css:"icon-return"},
						{
							view:"label", template:"<h1>Les offres du moment</h1> ", css:"h1 textUppercase",
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
						}
						///********************* END USER GUIDE */
						
					]
				},
				{
					view:"scrollview", id:"verses", 
					scroll:"y",
					body:{
					  rows:[
						{
							animate:{ type:"flip", subtype:"vertical" },
							view: "carousel",
							id: "carousel",
							height:300,
							cols: viewsArray,
							navigation: {
							  type: "side",
							  items: false
							}
						},
						{view:"iframe", id:"frame-body", src:"./perso/html//mesOffres.html", autoheight:true}
					  ]
					} //end of scrollview body
				  },
			]
		}
	]
};

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
					label:"LES OFFRES DU MOMENT",
					align:"center",
					css:"title1"
				},
				{
					height:20
				},
				{
					borderless: true,
					template:"<body>Cette page est publicitaire.<br><br> Vous y trouverez nos offres et activités (paramétrable par l'intermédiaire en assurance)</body>"
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
//------------------------  End mesoffres.js -------------------------------------------------------------------------------


// ------------------------ Start moncompte.js ------------------------------------------------------------------------------
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
// ------------------------ End moncompte.js ------------------------------------------------------------------------------

// ------------------------ Start policeAuto.js ------------------------------------------------------------------------------
var policesListe = {
    // Content
    id:"policesListe",
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
							{view:"label", template:"", width:20, css:"icon-return"},
							{
								view:"label", template:"<h1>Mes polices automobile</h1> ", css:"h1",
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
							{ view:"button", value:"Toutes les polices", css:"btn_all", width:150, margin: 8,
								click:function(){
									$$("toutesLesPolicesAuto").show();
									renderAllPoliceAuto();
								} 
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
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:"idPoliceDV",
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
									autoheight:true,
									minHeight:500,
									type: {
                                        height:400,
                                        width:210,
                                        css:"policesDV"
                                    },
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#date_effet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#Categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#Branche#</span> </div><span  onclick="listsContrats(#idPolice#)"><u><i class="fa fa-paperclip" aria-hidden="true"></i> Documents</u></span></div>',
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
                                            var item = $$("idPoliceDV").getSelectedItem();
                                            $$('policeVehicules').show();
                                            renderVehiculesPolice(item);
                                        },
                                    },
                                    ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
                                    data:[
									]
								},
								
                            ]
                        },
						
					]
				}
			]
		},
		
	]
    
};



function renderPolicesListe(){

	var doc=AddAction(null,1,"POLICESLISTE","SELECT","ACD","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "date_effet", "Categorie", "Branche"]);
		$$("idPoliceDV").clearAll();
		$$("idPoliceDV").parse(tmp);
		
		$$("idPoliceDV").hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

	
}

function showPolicesListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderPolicesListe();
    }else{
        $$(id).show();
    }
}

///********************* USER GUIDE */
function showHelpMenu(){
	var popupHelpMenu = {	
		view:"popup",
		id:"helppopupMenu",
		width:550,
		css:"helpMD",
		position:"center",
		body:{
			rows:[
				{
					height:30,
					view:"label",
					label:"Mes polices automobile",
					align:"center",
					css:"title1"
				},
				{
					height:20
				},
				{
					height:170,
					borderless: true,
					template:"<body>Ici, vous trouverez la liste de vos contrats en cours. Des documents affiliés sont téléchargeables.<br><br>En double cliquant sur l'un des contrats, vous trouverez la liste des véhicules liée à ce contrat.<br>Le bouton bleu en haut de l'écran permet d'afficher tous les véhicules toutes polices confondues.<br><br>Le principe est le même pour toutes les branches.</body>"
				},
				{
					cols:[
              
						{height:35},
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
// ------------------------ End policeAuto.js ------------------------------------------------------------------------------

// ------------------------ Start toutesLesPolicesAuto.js ------------------------------------------------------------------------------
var myIdPoliceAuto = ["IdHistorique", "Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours","Police"];                 
var idgridPoliceAuto = "gridAutoPDT" + makeId();
let Years_lists = generateArrayOfYears(5);


var toutesLesPolicesAuto = {
	id:"toutesLesPolicesAuto",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes polices automobile</h1> ", css:"h1",
						},
					]
				},
				{
					padding:{
						top:0, bottom:0, left:20, right:30
					},
					cols: [
							{},
							{
								css: 'export_excel_button',
								view: "button", label: "<img src='./tools/images/xls-icon-3379.png' style='height:82%; width:auto; margin-bottom: -3%;'> <sapn>Export Excel</span>", width: 140, click:function(){
									webix.toExcel($$(idgridPoliceAuto), {
									filename: "TOUTES-LES-POLICES-AUTO",
									name: "Films",
										columns:{
											"Marque":{header: "Marque"},
											"Matricule":{header: "Matricule"},
											"Avenant":{header: "Avenant"},
											"Date_effet":{header: "Date_effet"},
											"Date_eche":{header: "Date_eche"},
											"Ptotale":{header: "Prime Totale",template:function(obj){
													return obj.Ptotale;
												}
											},
											"Prorata":{header: "Prorata",template:function(obj){
													return obj.Prorata;
												}
											},
											"SinistreEncours":{header: "Sinistre en cours" ,template:function(obj){
												return obj.SinistreEncours;
											}
										}
									}
									});
								}
							},
					]
				},
				{	
					type:"clean",
					padding:{
						top:5, bottom:0, left:20, right:30
					},
					cols:[
						{
							id:idgridPoliceAuto,
							view:"datatable", 
							css:"styleDT",
							minWidth:200,
							height:500,
							borderless:false,
							rowHeight:40,
							resizeColumn: true,
							resizeRow: false,
							select:"row",
							navigation:"false",
							scrollX:true,
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:false,
							columns:[
								{ id:myIdPoliceAuto[9], header:[ {text:"Police", css:{'text-align':'center'} },{ content:"textFilter" }], width:120, sort:"ntsSortDecimal", css:{'text-align':'left'}},
								{ id:myIdPoliceAuto[1], header:[ {text:"Marque", css:{'text-align':'center'} },{ content:"selectFilter" } ], sort:"string",fillspace:true, css:{'text-align':'center'}},
								{ id:myIdPoliceAuto[2], header:[ {text:"Matricule", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'center'}},
								{ id:myIdPoliceAuto[3], header:[ {text:"Avenant", css:{'text-align':'center'} },{ content:"selectFilter" } ], sort:"string", fillspace:true, css:{'text-align':'left'}},
								
								{ id:myIdPoliceAuto[4], header:[ {text:"Date d'effet", css:{'text-align':'center'}  }, { content:"textFilter" }],sort:'ntsSortDecimal', minWidth:100, sort:'ntsSortDecimal', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true, css:{'text-align':'center'} },
								{ id:myIdPoliceAuto[5], header:[{text:"Date d'écheance", css:{'text-align':'center'} },{ content:"textFilter" }],  sort:'ntsSortDecimal', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdPoliceAuto[6], header:[ {text:"Prime Totale", css:{'text-align':'center'} }, { content:"textFilter" }], sort:'ntsSortDecimal', css:{'text-align':'center'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'center nts_font_13'}},
								{ id:myIdPoliceAuto[7], header:"Prorata", hidden:true, sort:'ntsSortDecimal', css:{'text-align':'right'},fillspace:true },
								{ id:myIdPoliceAuto[8], header:{text:"Sinistre en cours", css:{'text-align':'center'} }, template:"{common.rcheckboxON()}", css:{'text-align':'center'},fillspace:true,sort:"string"},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesPolicesAuto");
									
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridPoliceAuto).scrollTo(1,1);
								},
								onBeforeLoad:function(){
									this.showOverlay(loadingDIV);
								},
								onAfterLoad:function(){
									this.hideOverlay();
								}
							},
							data: []
						},
						
					]
				},
				{
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:0
					},
					cols:[
						{
					height:40,
					view:"label", template:"<h4 id='nbRowsAllPoliceV'> </h4> ", css:"h4",
						}]
				}
			]
		}
	]
};

function renderAllPoliceAuto(){
	var grid = $$(idgridPoliceAuto);
	grid.clearAll();

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABX","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		 document.getElementById("nbRowsAllPoliceV").innerHTML = data.split(String.fromCharCode(3)).length + " ligne trouvés";
	
		if(data.length>0){
			
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdPoliceAuto);
			grid.parse(jdata, "json");
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
// ------------------------ End toutesLesPolicesAuto.js ------------------------------------------------------------------------------

// ------------------------ Start policevehicules.js ------------------------------------------------------------------------------
var myIdHVehiculesP = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridVehiculesP = "gridPDT" + makeId();


var policeVehicules = {
	id:"policeVehicules",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Mes polices automobile</h1> ", css:"h1",
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
						}
						///********************* END USER GUIDE */
						
					]
					
				},
				
				{
					view:"label", template:"<h2>Liste des Véhicules</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"idLabelPolice", name:"idLabelPolice", css:" colorTxt infoNum",height:20, align:"left"},
						{view:"label", label:"",id:"idPoliceV", name:"idPoliceV", hidden:true},
					]
				},
				{	
					type:"clean",
					padding:{
						top:0, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridVehiculesP,
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
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							/*
							header:[
            { content:"{filtername}Filter" },
            "Title"
        ]
							*/
							columns:[
								{ id:myIdHVehiculesP[0], header:"idHistorique", hidden:true},
								{ id:myIdHVehiculesP[2], header:[ {text:"Matricule", css:{'text-align':'center'}},{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true, css:{'text-align':'center'}},
								{ id:myIdHVehiculesP[1], header:[ {text:"Marque", css:{'text-align':'center'} }, { content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true, css:{'text-align':'center'}},
								{ id:myIdHVehiculesP[3], header:[ {text:"Avenant", css:{'text-align':'center'}},{ content:"selectFilter"}, ], minWidth:180, sort:"string", fillspace:true, css:{'text-align':'left'}},
								{ id:myIdPoliceAuto[4], header:[ {text:"D.Effet", css:{'text-align':'center'} }, {  content:"textFilter"}], minWidth:100, sort:'ntsDate', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true, css:{'text-align':'center'} },
								{ id:myIdHVehiculesP[5], header: [ {text:"D.Echéance", css:{'text-align':'center'} }, {  content:"textFilter"}], minWidth:100, sort:'ntsDate', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdHVehiculesP[6], header:[{text:"Prime Totale", css:{'text-align':'center'} }, { content:"textFilter" }], minWidth:80, sort:'ntsSortDecimal', css:{'text-align':'center'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:{'text-align':'center'}}},
								{ id:myIdHVehiculesP[7], header:"Prorata", hidden:true, minWidth:100, sort:'ntsSortDecimal', css:{'text-align':'right'},fillspace:true },
								{ id:myIdHVehiculesP[8], header:{text:"Sinistre en cours", css:{'text-align':'center'} }, template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true, sort:"string"},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "policeVehicules");
									
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridVehiculesP).scrollTo(1,1);
								}
							},
							data: []
						},
					]
				},
				{
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:0
					},
					cols:[
						{
					height:40,
					view:"label", template:"<h4 id='nbRowsAuto'> </h4> ", css:"h4",
						}]
				}
				

			]
		},
		
	]

};


function renderVehiculesPolice(item){

	var grid = $$(idgridVehiculesP);
	grid.clearAll();
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","AAY","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHVehiculesP);
			document.getElementById("nbRowsAuto").innerHTML = data.split(String.fromCharCode(3)).length + " ligne trouvés";
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}

///********************* USER GUIDE */
function showHelpMenu(){
	var popupHelpMenu = {	
		view:"popup",
		id:"helppopupMenu",
		width:550,
		css:"helpMD",
		position:"center",
		body:{
			rows:[
				{
					height:30,
					view:"label",
					label:"Liste des Véhicules",
					align:"center",
					css:"title1"
				},
				{
					height:20
				},
				{
					height:100,
					borderless: true,
					template:"<body>Ce tableau affiche les principales informations par véhicule.<br><br> En cliquant sur la flèche en bout de ligne, vous trouverez le détail lié à ce véhicule</body>"
				},
				{
					cols:[
              
						{height:35},
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
// ------------------------ End policevehicules.js ------------------------------------------------------------------------------


// ------------------------Start fichevehicule.js ------------------------------------------------------------------------------
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
				if(jdata[0].length> 0){
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
// ------------------------ End fichevehicule.js------------------------------------------------------------------------------


// ------------------------ Start maladiePolice.js------------------------------------------------------------------------------
var idPoliceMalDV = "PDVMal" + makeId();

var maladiePolice = {
    // Content
    id:"maladiePolice",
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
						{
							view:"label", template:"<h1>Mes polices maladie</h1> ", css:"h1",
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
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idPoliceMalDV,
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
                                    autoheight:true,
									minHeight:500,
									type: {
                                        height:400,
                                        width:210,
                                        css:"policesDV"
                                    },
                                    template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#dateeffet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#branche#</span> </div><span  onclick="listsContrats(#idPolice#)"><u><i class="fa fa-paperclip" aria-hidden="true"></i> Contrats</u></div>',
                                    on:{
                                        onViewShow: function(id){  
                                        },
                                        "onItemDblClick":function(id, e, trg){ 
                                            var item = $$(idPoliceMalDV).getSelectedItem();
                                            rendermaladieAdherents(item);
                                        },
                                    },
                                    ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
									data:[
									]
								},
                            ]
                        }
					]
				},
			]
		}
	]
};

function renderPolicesMaladieListe(idPoliceMalDV){
	var doc=AddAction(null,1,"POLICESMALADIE","SELECT","AAR","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
    var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "dateeffet", "categorie", "branche"]);
		$$(idPoliceMalDV).clearAll();
		$$(idPoliceMalDV).parse(tmp);
		$$(idPoliceMalDV).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function showPolicesMaladieListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderPolicesMaladieListe(idPoliceMalDV);
    }else{
        $$(id).show();
    }
}
// ------------------------ End maladiePolice.js------------------------------------------------------------------------------


// ------------------------ Start maladieAdherent.js"------------------------------------------------------------------------------


var myIdHMaladieAh = ["IdAdherent", "MATRICULE", "NOM", "PRENOM", "DATEADHESION", "DATESORTIE", "ETAT", "Situation", "Nbre_Personne_a_charge" ];                 
var idgridMaladieAh = "gridMLDAD" + makeId();


var maladieAdherents = {
	id:"maladieAdherents",
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
								showPolicesMaladieListe(false, "maladiePolice");
							}  
						},
						{
							view:"label", template:"<h1>Mes polices : Maladie</h1> ", css:"h1",
						},
						
					]
				},
				{
					view:"label", template:"<h2>Liste des Adhérents</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"idLabelPoliceMal", name:"idLabelPolice", css:" colorTxt infoNum",height:20, align:"left"},
						{view:"label", label:"",id:"idPoliceVMal", name:"idPoliceV", hidden:true},
						
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:0, left:20, right:10
					},
					cols:[
						{	
							id:idgridMaladieAh,
							minWidth:320,
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
							footer:false,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							columns:[
								{ id:myIdHMaladieAh[0], header:"", width:50, hidden:true},
								{ id:myIdHMaladieAh[1], header: [ {text:"Matricule", css:{'text-align':'center'} },{ content:"textFilter" }],  minwWidth:140, sort:"string",fillspace: true, css:{'text-align':'left'}},
								{ id:myIdHMaladieAh[2], header:[ {text:"Nom", css:{'text-align':'center'} },{ content:"textFilter" }],minWidth:140, sort:"string", fillspace:true,  css:{'text-align':'left'}},
								{ id:myIdHMaladieAh[3], header:[ {text:"Prénom", css:{'text-align':'center'} },{ content:"textFilter" }],minWidth:140, sort:"string", fillspace:true, css:{'text-align':'left'}},
								{ id:myIdHMaladieAh[4], header:[ {text:"D.Adhésion", css:{'text-align':'center'} },{ content:"textFilter" }],minwWidth:120, sort:'ntsDate', css:{'text-align':'center'},format: webix.Date.dateToStr("%d/%m/%Y"),fillspace: true},
								{ id:myIdHMaladieAh[5], header:[ {text:"D.Sortie", css:{'text-align':'center'} },{ content:"textFilter" }], minwWidth:120,sort:'ntsDate', css:{'text-align':'center'},format: webix.Date.dateToStr("%d/%m/%Y"),fillspace: true},
								{ id:myIdHMaladieAh[6], header:{text:"Actif", css:{'text-align':'center'} }, css:{'text-align':'center'}, css:{'text-align':'center'}, template:"{common.rcheckboxON()}", width:70, sort:"string",fillspace: true},
								{ id:myIdHMaladieAh[7], header:[ {text:"Situation Familliale", css:{'text-align':'center'} },{ content:"selectFilter" }], css:{'text-align':'left'}, minwWidth:150, sort:"string", options:arrSituation,fillspace: true},
								{ id:myIdHMaladieAh[8], header:[ {text:"Nb personnes", css:{'text-align':'center'} },{ content:"numberFilter" }], minwWidth:160,css:{'text-align':'center'}, sort:'ntsSortDecimal',fillspace: true},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:40}
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheAdherent(item,$$("idPoliceVMal").getValue(), $$("idLabelPoliceMal").getValue());
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridMaladieAh).scrollTo(1,1);
								}
							},
							data: [
							]
						},
					
					]
				},
				{
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:0
					},
					cols:[
						{
					height:40,
					view:"label", template:"<h4 id='nbRowsPoliceMaladie'> </h4> ", css:"h4",
						}]
				}
			]
		}
	]
};
function rendermaladieAdherents(item){
	$$('maladieAdherents').show();
	$$("idLabelPoliceMal").setValue(item.police);
	$$("idPoliceVMal").setValue(item.idPolice);
	var grid = $$(idgridMaladieAh);
    grid.clearAll();
	var doc=AddAction(null,1,"ADHERENTMALADIEPOLICE","SELECT","AAQ","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHMaladieAh);
			document.getElementById("nbRowsPoliceMaladie").innerHTML = data.split(String.fromCharCode(3)).length + " ligne trouvés";
			console.log(jdata);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}
// ------------------------ End maladieAdherent.js"------------------------------------------------------------------------------

// ------------------------ Start ficheAdherent.js"------------------------------------------------------------------------------
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

																				// {
																							
																				// 	rows:[
																				// 		{	
																				// 			height:20,
																				// 			view: "label", label:"RIB", css:"labelFiche grey Bold",
																				// 			align:"left", 
																				// 		},
																				// 		{	
																				// 			height:20,
																				// 			view: "label", label:"12796857438987076958",
																				// 			id:"NumCompteAdh", name:"NumCompteAdh", css:"textUppercase titre3Fiche Bold blue",
																				// 			align:"left",
																				// 		},
																				// 	]
																				// },
																				
								
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
	console.log(item["IdAdherent"]);
	var doc=AddAction(null,1,"ADHERENTFICHE","SELECT","AAD","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",idPolice,"O");
	doc=AddParam(doc,1,3,"IdAdherent_",item["IdAdherent"],"O");

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
				if(jdata.length > 0){
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
				}
				}
				; 
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
// ------------------------ End ficheAdherent.js"------------------------------------------------------------------------------

// ------------------------ Start toutesLesPolicesMaritime.js"------------------------------------------------------------------------------
var myIdPoliceMaritime = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridPoliceMaritime = "gridPDT" + makeId();


var toutesLesPolicesMaritime = {
	id:"toutesLesPolicesMaritime",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes polices : Transport</h1> ", css:"h1 textUppercase",
						}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridPoliceMaritime,
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
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdPoliceMaritime[0], header:"idHistorique", hidden:true},
								{ id:myIdPoliceMaritime[1], header:[ "Marque",{ content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true},
								{ id:myIdPoliceMaritime[2], header:[ "Matricule",{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdPoliceMaritime[3], header:[ "Avenant",{ content:"textFilter" } ], minWidth:180, sort:"string", fillspace:true},
								{ id:myIdPoliceMaritime[4], header:"D.Effet", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdPoliceMaritime[5], header:"D.Echéance", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdPoliceMaritime[6], header:"Prime Totale", minWidth:120, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:myIdPoliceMaritime[7], header:"Prorata", hidden:true, minWidth:100, sort:"int", css:{'text-align':'right'},fillspace:true },
								{ id:myIdPoliceMaritime[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true,},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
							scheme:{
								$init:function(obj){
								  obj.Date_effet = date_format(obj.Date_effet);
								  obj.Date_eche = date_format(obj.Date_eche);
								}
							  },
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesPolicesMaritime");
									
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridPoliceMaritime).scrollTo(1,1);
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


function renderAllPoliceMaritime(item){
	
	var grid = $$(idgridPoliceMaritime);
	grid.clearAll();
		  
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABW","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdPoliceMaritime);
			
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End toutesLesPolicesMaritime.js"------------------------------------------------------------------------------


// ------------------------ Start policeRD.js------------------------------------------------------------------------------
var idPoliceRD = "DVPRD" + makeId();

var policesRD = {
    // Content
    id:"policesRD",
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
						{view:"label", template:"", width:20, css:"icon-return"},
						{
							view:"label", template:"<h1>Mes polices : RD</h1> ", css:"h1",
						},
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:10
					},
					cols:[
						{
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idPoliceRD,
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
                                    autoheight:true,
									minHeight:500,
									type: {
                                        height:400,
                                        width:210,
                                        css:"policesDV"
                                    },
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
                                           var item = $$(idPoliceRD).getSelectedItem();
                                           renderAvenantsRD(item);
                                        }
                                    }, 
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#dateeffet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#branche#</span> <span  onclick="listsContrats(#idPolice#)"><u><i class="fa fa-paperclip" aria-hidden="true"></i> Contrats</u></div></div>',
                                    data:[],
                                    ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
								},
                            ]
                        }
					]
				},
			]
		}
	]
};

function renderPolicesRDListe(idPoliceRD){
	var doc=AddAction(null,1,"POLICESRD","SELECT","AAX","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
    var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "dateeffet", "idCategorie", "categorie", "branche"]);

		$$(idPoliceRD).clearAll();
		$$(idPoliceRD).parse(tmp);
		$$(idPoliceRD).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function showPolicesRDListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderPolicesRDListe(idPoliceRD);
    }else{
        $$(id).show();
    }
}
// ------------------------ End  policeRD.js"------------------------------------------------------------------------------

// ------------------------ Start  toutesLesPolicesRD.js"------------------------------------------------------------------------------
var myIdPoliceRD = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridPoliceRD = "gridPDT" + makeId();


var toutesLesPolicesRD = {
	id:"toutesLesPolicesRD",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes polices : RD</h1> ", css:"h1 textUppercase",
						}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridPoliceRD,
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
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdPoliceRD[0], header:"idHistorique", hidden:true},
								{ id:myIdPoliceRD[1], header:[ "Marque",{ content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true},
								{ id:myIdPoliceRD[2], header:[ "Matricule",{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdPoliceRD[3], header:[ "Avenant",{ content:"textFilter" } ], minWidth:180, sort:"string", fillspace:true},
								{ id:myIdPoliceRD[4], header:"D.Effet", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdPoliceRD[5], header:"D.Echéance", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdPoliceRD[6], header:"Prime Totale", minWidth:120, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:myIdPoliceRD[7], header:"Prorata", hidden:true, minWidth:100, sort:"int", css:{'text-align':'right'},fillspace:true },
								{ id:myIdPoliceRD[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true,},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
							scheme:{
								$init:function(obj){
								  obj.Date_effet = date_format(obj.Date_effet);
								  obj.Date_eche = date_format(obj.Date_eche);
								}
							  },
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesPolicesRD");
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridPoliceRD).scrollTo(1,1);
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


function renderAllPoliceRD(item){
	
	var grid = $$(idgridPoliceRD);
	grid.clearAll();
		  
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABW","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

		if(data.length>0){
			
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdPoliceRD);
			
			grid.parse(jdata, "json");
		}

	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End  toutesLesPolicesRD.js"------------------------------------------------------------------------------


// ------------------------ Start  avenantsRD.js------------------------------------------------------------------------------
var myIdHAvnRD = [ "idpolice", "nature", "DATE_EFFET", "PrimeTotal", "Sinistre_en_cours" ]; 
var avenantsRD = {
	id:"avenantsRD",
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
								showPolicesRDListe(false, "policesRD");
							}  
						},
						{
							view:"label", template:"<h1>Mes polices : RD</h1> ", css:"h1 textUppercase",
						},
					]
				},
				{
					view:"label", template:"<h2>Avenants en Cours</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"idLabelPoliceRD", name:"idLabelPoliceRD", css:" colorTxt infoNum",height:20, align:"left"},
						{view:"label", label:"",id:"idPoliceRD", name:"idPoliceRD", hidden:true},
						
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:30, right:10
					},
					cols:[
						{
							minWidth:320,
                            height:430,
                            id:"idgridAvnRD",
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
							footer:true,
							headerRowHeight:44,
							columns:[
								{ id:myIdHAvnRD[0], header:"", hidden:true},
								{ id:myIdHAvnRD[1], header:[ {text:"Nature", css:{'text-align':'center'} },{ content:"selectFilter" } ], sort:"string", fillspace:1, minWidth:120},
								{ id:myIdHAvnRD[2], header:[ {text:"Date d'Effet", css:{'text-align':'center'} },{ content:"textFilter" } ], fillspace:1, minWidth:120, sort:"date", css:{'text-align':'center'}, format:webix.Date.dateToStr("%d/%m/%Y")},
								{ id:myIdHAvnRD[3], header:[ {text:"Prime Totale", css:{'text-align':'center'} },{ content:"textFilter" } ], fillspace:1, minWidth:120, sort:"int", css:{'text-align':'center'}, format:myReelformat,footer:{content:'totalColumns',css:{'text-align':'center'}}},
								{ id:myIdHAvnRD[4], header:{text:"Sinistre en Cours", css:{'text-align':'center'} }, css:{'text-align':'center'}, template:"{common.rcheckboxON()}", minWidth:120, fillspace:1, sort:"string"},
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
									obj.DATE_EFFET = date_format(obj.DATE_EFFET);
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
				{
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:0
					},
					cols:[
						{
					height:40,
					view:"label", template:"<h4 id='nbRowsAllPoliceRD'> </h4> ", css:"h4",
						}]
				}
			]
		}
	]
};


function renderAvenantsRD(item){
	$$("avenantsRD").show();

	var grid = $$("idgridAvnRD");
    grid.clearAll();
	$$("idLabelPoliceRD").setValue(item.police);
	$$("idPoliceRD").setValue(item.idPolice);
	var doc=AddAction(null,1,"AVENANTSRD","SELECT","AAB","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHAvnRD);
			document.getElementById("nbRowsAllPoliceRD").innerHTML = data.split(String.fromCharCode(3)).length + " ligne trouvés";
			grid.parse(jdata, "json");
		}

	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End  avenantsRD.js------------------------------------------------------------------------------

// ------------------------ Start  policeMaritime.js------------------------------------------------------------------------------
var idPoliceMarDV = "DVPMar" + makeId();

var policesMaritime = {
	id:"policesMaritime",
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
						{view:"label", template:"", width:20, css:"icon-return"},
						{
							view:"label", template:"<h1>Mes polices transport</h1> ", css:"h1",
						},
				]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:10
					},
					cols:[
						{
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idPoliceMarDV,
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
                                    autoheight:true,
									minHeight:500,
									type: {
                                        height:400,
                                        width:210,
                                        css:"policesDV"
                                    },
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
                                           var item = $$(idPoliceMarDV).getSelectedItem();
                                           if(item.idCategorie==57){
												renderFacultesOrdres(item);
                                           }else if(item.idCategorie==54){
												renderProductionCorps(item);
                                           } 
                                        }
                                    }, 
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#dateeffet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#branche#</span> <span  onclick="listsContrats(#idPolice#)"><u><i class="fa fa-paperclip" aria-hidden="true"></i> Contrats</u></div></div>',
									ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
									data:[
									]
								},
								
                            ]
                        }
					]
				},
			]
		}
	]

};




function renderPolicesMaritimeListe(idPoliceMarDV){

	var doc=AddAction(null,1,"POLICESMARITIME","SELECT","AAW","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "dateeffet", "idCategorie", "categorie", "branche"]);
		$$(idPoliceMarDV).clearAll();
		$$(idPoliceMarDV).parse(tmp);
		$$(idPoliceMarDV).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function showPolicesMaritimeListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderPolicesMaritimeListe(idPoliceMarDV);
    }else{
        $$(id).show();
    }
}
// ------------------------ End  policeMaritime.js------------------------------------------------------------------------------


// ------------------------ Start  productionCorps.js------------------------------------------------------------------------------

var myIdHProdCorps = ["Idpolice", "Avenant", "Date_Du", "Date_Au", "PTotale", "Garanties" ];                 
var idgridProdCorps = "gridPrdCor" + makeId();


var productionCorps = {
	id:"productionCorps",
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
							showPolicesMaritimeListe(false, "policesMaritime");
							}  
						},
						{
							view:"label", template:"<h1>Mes polices : Transport</h1> ", css:"h1 textUppercase",
						},
					]
				},
				
				{
					view:"label", template:"<h2>Production Corps</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"idLabelPoliceProdCorps", name:"idLabelPoliceFacMar", css:" colorTxt infoNum",height:20, width:150, align:"left"},
						{view:"label", label:"",id:"idPoliceProdCorps", name:"idPoliceFacMar", hidden:true},
						{}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:30, right:10
					},
					cols:[
						{
							minWidth:350,
                            height:430,
                            id:idgridProdCorps,
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
							headerRowHeight:44,
							footer:true,
							columns:[

                                { id:myIdHProdCorps[0], header:"idPolice", hidden:true},
								{ id:myIdHProdCorps[1], header:"Avenant", fillspace:1, },
								{ id:myIdHProdCorps[2], header:"Date Du", minwWidth:120, sort:"date", css:{'text-align':'center'}, format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdHProdCorps[3], header:"Date Au", minwWidth:120, sort:"date", css:{'text-align':'center'}, format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdHProdCorps[4], header:"Prime Totale", minwWidth:140, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true,footer:{content:'totalColumns',css:'right nts_font_13'}},
                                { id:myIdHProdCorps[5], header:"Garanties", fillspace:1, sort:"string", },
							],
							scheme:{
								$init:function(obj){
									obj.Date_Au = date_format(obj.Date_Au);
									obj.Date_Du = date_format(obj.Date_Du);
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

function renderProductionCorps(item){
	$$("productionCorps").show();
	var grid = $$(idgridProdCorps);
	grid.clearAll();
	$$("idLabelPoliceProdCorps").setValue(item.police);
	$$("idPoliceProdCorps").setValue(item.idPolice);

	var doc=AddAction(null,1,"PRODCORPS","SELECT","AAZ","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHProdCorps);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}


// ------------------------ End  productionCorps.js------------------------------------------------------------------------------


// ------------------------ Start  facultesOrdres.js------------------------------------------------------------------------------
'use strict';
var myIdHFacMar = [ "IdOrdre", "DATE_ORDRE", "CERTIFICAT", "VOYAGE_DE_Lib", "VOYAGE_A_Lib", "Libelle", "VALEUR", "PrimeTotal", "Sinistre_en_cours" ]; 

var facultesOrdres = {
	id:"facultesOrdres",
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
								showPolicesMaritimeListe(false, "policesMaritime");
							}  
						},
						{
							view:"label", template:"<h1>Mes polices : Transport</h1> ", css:"h1 textUppercase",
						},
						
					]
					
				},
				
				{
					view:"label", template:"<h2>Facultés: Liste des Ordres</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"idLabelPoliceFacMar", name:"idLabelPoliceFacMar", css:" colorTxt infoNum",height:20, align:"left"},
						{view:"label", label:"",id:"idPoliceFacMar", name:"idPoliceFacMar", hidden:true},
						
					]
				},

				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:30, right:10
					},
					cols:[
						{
							minWidth:320,
                            height:430,
                            id:"idgridFacMar",
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
							rightSplit:2,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdHFacMar[0], header:[ {text: "N° Ordre"}, { content:"textFilter" }], minWidth:100, sort:"string", css:{"font-weight":"bold"}, fillspace:true},
								{ id:myIdHFacMar[1], header:[{text:"Date Ordre", css:{'text-align':'center'}}, { content:"textFilter" }], minWidth:100, sort:"date", css:{'text-align':'center'}, format:webix.Date.dateToStr("%d/%m/%Y"), fillspace:true},
								{ id:myIdHFacMar[2], header:[{text:"N°Certificat", css:{'text-align':'center'}}, { content:"textFilter" }],css:{'text-align':'center'},  minWidth:100, sort:"string", fillspace:true},
								{ id:myIdHFacMar[3], header:[{text:"Voyage de", css:{'text-align':'center'}}, { content:"textFilter" }],css:{'text-align':'center'},  minWidth:150, sort:"string", fillspace:true  },
                                { id:myIdHFacMar[4], header:[{text:"Voyage à", css:{'text-align':'center'}}, { content:"textFilter" }],  minWidth:150, sort:"string", fillspace:true},
                                { id:myIdHFacMar[5], header:[{text:"Produit", css:{'text-align':'center'}}, { content:"textFilter" }],  minWidth:150, sort:"string", fillspace:true},
                                { id:myIdHFacMar[6], header:[{text:"Valeur", css:{'text-align':'center'}}, { content:"textFilter" }], minWidth:110, sort:"int", css:{'text-align':'center'}, format:myReelformat, fillspace:true,},
                                { id:myIdHFacMar[7], header:[{text:"Prime Totale", css:{'text-align':'center'}}, { content:"textFilter" }], minWidth:110, sort:"int", css:{'text-align':'center'}, format:myReelformat, fillspace:true,footer:{content:'totalColumns',css:{'text-align':'center'}}},
                                { id:myIdHFacMar[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130, fillspace:true},
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
									obj.DATE_ORDRE = date_format(obj.DATE_ORDRE);
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
				{
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:0
					},
					cols:[
						{
					height:40,
					view:"label", template:"<h4 id='nbRowsAPoliceMaritime'> </h4> ", css:"h4",
						}]
				}
				
				

			]
		}
	]

};

function renderFacultesOrdres(item){

	$$("facultesOrdres").show();
	var grid = $$("idgridFacMar");
    grid.clearAll();
	
	$$("idLabelPoliceFacMar").setValue(item.police);
	$$("idPoliceFacMar").setValue(item.idPolice);


	var doc=AddAction(null,1,"FACMAR","SELECT","AAC","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		

		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHFacMar);
			document.getElementById("nbRowsAPoliceMaritime").innerHTML = data.split(String.fromCharCode(3)).length + " ligne trouvés";
			grid.parse(jdata, "json");
		}	

	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End  facultesOrdres.js------------------------------------------------------------------------------


// ------------------------ Start  policeAT.js------------------------------------------------------------------------------
var idPoliceAT = "DVPAT" + makeId();

var policesAT = {
    id:"policesAT",
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
						{view:"label", template:"", width:20, css:"icon-return"},
						{
							view:"label", template:"<h1>Mes polices AT</h1> ", css:"h1",
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
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idPoliceAT,
									css:"dataviewTB",
                                    scroll:"auto",
									select:true,
									autoheight:true,
									minHeight:500,
									type: {
                                        height:400,
                                        width:210,
                                        css:"policesDV"
                                    },
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
                                           var item = $$(idPoliceAT).getSelectedItem();
                                           renderAvenantsAT(item);
                                        }
                                    }, 
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#dateeffet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#branche#</span> <span  onclick="listsContrats(#idPolice#)"><u><i class="fa fa-paperclip" aria-hidden="true"></i> Contrats</u></div></div>',
                                    data:[],
                                    ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
								},
                            ]
                        }
					]
				},
			]
		}
	]
};

function renderPolicesATListe(idPoliceAT){
	var doc=AddAction(null,1,"POLICESAT","SELECT","AAV","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "dateeffet", "idCategorie", "categorie", "branche"]);
		$$(idPoliceAT).clearAll();
		$$(idPoliceAT).parse(tmp);
		$$(idPoliceAT).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}
function showPolicesATListe(loadData, id) {
    if(loadData){    
        $$(id).show();
        renderPolicesATListe(idPoliceAT);
    }else{
        $$(id).show();
    }
}
// ------------------------ End  policeAT.js------------------------------------------------------------------------------


// ------------------------ Start  avenantsAT.js------------------------------------------------------------------------------
var myIdHAvnAT = [ "idpolice", "nature", "DATE_EFFET", "PrimeTotal", "Sinistre_en_cours" ]; 
var avenantsAT = {
	id:"avenantsAT",
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:0,
	cols:[
		{
			rows:[
				{	
					height:40,
					cols:[
						{view:"label", id:"", template:"<span class='mdi mdi-arrow-left'></span>", width:40,
						 css:"icon-return", 
							click:function(){
								showPolicesATListe(false, "policesAT");
							}  
						},
						{
							view:"label", template:"<h1>Mes polices : AT</h1> ", css:"h1",
						},
						
					]
					
				},
				
				{
					view:"label", template:"<h2>Avenants en Cours</h2> ", css:"ml4 colorRose Bold",height:30
				},
				{
					cols:[
						{view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
						{view:"label", label:"",id:"idLabelPoliceAT", name:"idLabelPoliceAT", css:" colorTxt infoNum",height:20, align:"left"},
						{view:"label", label:"",id:"idPoliceAT", name:"idPoliceAT", hidden:true},
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:0, left:30, right:10
					},
					cols:[
						{
							minWidth:320,
                            height:430,
                            id:"idgridAvnAT",
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
							footer:true,
							headerRowHeight:44,
							columns:[
								{ id:myIdHAvnAT[0], header:"", hidden:true},
								{ id:myIdHAvnAT[1], header:[ {text:"Nature", css:{'text-align':'center'} },{ content:"selectFilter" } ], sort:"string", fillspace:1,css:{'text-align':'center'}},
								{ id:myIdHAvnAT[2], header:[ {text:"Date d'Effet", css:{'text-align':'center'} },{ content:"textFilter" } ], fillspace:1, minWidth:120, sort:'ntsDate', css:{'text-align':'center'}, format:webix.Date.dateToStr("%d/%m/%Y")},
								{ id:myIdHAvnAT[3], header:[ {text:"Prime Totale", css:{'text-align':'center'} },{ content:"textFilter" } ], fillspace:1, minWidth:120, sort:'ntsSortDecimal', css:{'text-align':'center'}, format:myReelformat,footer:{content:'totalColumns',css:{'text-align':'center'}}},
								{ id:myIdHAvnAT[4], header:[ {text:"Sinistre en Cours", css:{'text-align':'center'} } ], minWidth:120, css:{'text-align':'center'}, template:"{common.rcheckboxON()}", fillspace:1, sort:"string"},
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
								"onItemDblClick":function(id, e, trg){}
							},
							data: [
								
							]
						},
					]
				},
				{
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:0
					},
					cols:[
						{
					height:40,
					view:"label", template:"<h4 id='nbRowsAllPoliceAT'> </h4> ", css:"h4",
						}]
				}
			]
		}
	]
};
function renderAvenantsAT(item){
	$$("avenantsAT").show();

	var grid = $$("idgridAvnAT");
    grid.clearAll();
	
	$$("idLabelPoliceAT").setValue(item.police);
	$$("idPoliceAT").setValue(item.idPolice);
	var doc=AddAction(null,1,"AVENANTSAT","SELECT","AAA","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHAvnAT);
			document.getElementById("nbRowsAllPoliceAT").innerHTML = data.split(String.fromCharCode(3)).length + " ligne trouvés";
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End  avenantsAT.js------------------------------------------------------------------------------


// ------------------------ Start  toutesLesPolicesAt.js------------------------------------------------------------------------------
var myIdPoliceAt = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridPoliceAt = "gridPDT" + makeId();


var toutesLesPolicesAt = {
	id:"toutesLesPolicesAt",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes polices : At</h1> ", css:"h1 textUppercase",
						}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridPoliceAt,
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
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdPoliceAt[0], header:"idHistorique", hidden:true},
								{ id:myIdPoliceAt[1], header:[ "Marque",{ content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true},
								{ id:myIdPoliceAt[2], header:[ "Matricule",{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdPoliceAt[3], header:[ "Avenant",{ content:"textFilter" } ], minWidth:180, sort:"string", fillspace:true},
								{ id:myIdPoliceAt[4], header:"D.Effet", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdPoliceAt[5], header:"D.Echéance", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdPoliceAt[6], header:"Prime Totale", minWidth:120, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:myIdPoliceAt[7], header:"Prorata", hidden:true, minWidth:100, sort:"int", css:{'text-align':'right'},fillspace:true },
								{ id:myIdPoliceAt[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true,},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
							scheme:{
								$init:function(obj){
								  obj.Date_effet = date_format(obj.Date_effet);
								  obj.Date_eche = date_format(obj.Date_eche);
								}
							  },
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesPolicesAt");
									
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridPoliceAt).scrollTo(1,1);
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


function renderAllPoliceAt(item){
	
	var grid = $$(idgridPoliceAt);
	grid.clearAll();
		  
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);
	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABW","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdPoliceAt);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End  toutesLesPolicesAt.js------------------------------------------------------------------------------

// ------------------------ Start  sinistreAuto.js------------------------------------------------------------------------------
var idSinAutoDV = "SinAutoDV" + makeId();

var sinistresAuto = {
	id:"sinistresAuto",
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
						{
							view:"label", template:"<h1>Mes sinistres automobile</h1> ", css:"h1",
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
						{ view:"button", type:"icon", css:"btn_all", icon:"mdi mdi-chart-pie", label:"Statistiques", width:150, margin: 8,
							click:function(){
								renderAllSinisterByYear();
							} 
						},
					]
				},
				{	
					type:"clean",
					padding:{ bottom:10, left:20, right:10
					},
					cols:[
						{
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idSinAutoDV,
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
                                    autoheight:true,
									minHeight:500,
									type: {
                                        height:315,
                                        width:210,
                                        css:"policesDV"
                                    },
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#date_effet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#Categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#Branche#</span> </div></div>',
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
                                            var item = $$(idSinAutoDV).getSelectedItem();
											$$('sinistresVehicules').show();
											$$('formSinistresV').clear();
                                            renderSinistresVehicules(item.idPolice, item.police,'','');
                                        },
                                    },
                                    ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
                                    data:[]
								},
								
                            ]
                        }
					]
				},
			]
		}
	]
};

function renderSinAutoListe(idSinAutoDV){
	var doc=AddAction(null,1,"SINAUTOLISTE","SELECT","ABC","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "date_effet", "Categorie", "Branche"]);
		$$(idSinAutoDV).clearAll();
		$$(idSinAutoDV).parse(tmp);
		$$(idSinAutoDV).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

	
}

function showSinAutoListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderSinAutoListe(idSinAutoDV);
    }else{
        $$(id).show();
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
					label:"Mes sinistres automobile",
					align:"center",
					css:"title1"
				},
				{
					height:20
				},
				{
					height:200,
					borderless: true,
					template:"<body>Ici, vous trouverez la liste des sinistres automobiles en cours.<br><br>En double cliquant sur l'un des contrats, vous trouverez la liste des sinistres liée à ce contrat. <br><br>Le bouton bleu en haut de l'écran permet d'afficher des statisques (graphiques) sur l'ensemble de vos sinistres automobiles.<br><br></br>Le principe est le même pour toutes les branches.</body>"
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
// ------------------------ End  sinistreAuto.js------------------------------------------------------------------------------


// ------------------------ Start sinistresVehicules.js------------------------------------------------------------------------------

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
						top:0, bottom:0, left:20, right:10
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
								{ id:myIdHSinVeh[3], header:[ {text:"Assuré", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'left'}, tooltip:false,},
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
				{
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:0
					},
					cols:[
						{
					height:40,
					view:"label", template:"<h4 id='nbRowsSinistreAuto'> </h4> ", css:"h4",
						}]
				}
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
			document.getElementById("nbRowsSinistreAuto").innerHTML = data.split(String.fromCharCode(3)).length + " Ligne trouvés";
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
// ------------------------ End  sinistresVehicules.js------------------------------------------------------------------------------


// ------------------------ Start toutesLesSinistreAuto.js------------------------------------------------------------------------------
var myIdSinistreAuto = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridSinistreAuto = "gridPDT" + makeId();


var toutesLesSinistreAuto = {
	id:"toutesLesSinistreAuto",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes Sinistres : Auto</h1> ", css:"h1 textUppercase",
						}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridSinistreAuto,
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
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdSinistreAuto[0], header:"idHistorique", hidden:true},
								{ id:myIdSinistreAuto[1], header:[ "Marque",{ content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true},
								{ id:myIdSinistreAuto[2], header:[ "Matricule",{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdSinistreAuto[3], header:[ "Avenant",{ content:"textFilter" } ], minWidth:180, sort:"string", fillspace:true},
								{ id:myIdSinistreAuto[4], header:"D.Effet", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdSinistreAuto[5], header:"D.Echéance", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdSinistreAuto[6], header:"Prime Totale", minWidth:120, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:myIdSinistreAuto[7], header:"Prorata", hidden:true, minWidth:100, sort:"int", css:{'text-align':'right'},fillspace:true },
								{ id:myIdSinistreAuto[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true,},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
							scheme:{
								$init:function(obj){
								  obj.Date_effet = date_format(obj.Date_effet);
								  obj.Date_eche = date_format(obj.Date_eche);
								}
							  },
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesSinistreAuto");
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridSinistreAuto).scrollTo(1,1);
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

function renderAllSinistreAuto(item){

	var gridSinistreAuto = $$(idgridSinistreAuto);
	gridSinistreAuto.clearAll();
		  
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABW","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

		if(data.length>0){
			
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdSinistreAuto);
			
			gridSinistreAuto.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End toutesLesSinistreAuto.js------------------------------------------------------------------------------

// ------------------------ Start sinistreMaladie.js------------------------------------------------------------------------------
var idSinMalDV = "SinMalDV" + makeId();


var sinistresMaladie = {
	id:"sinistresMaladie",
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
						{view:"label", template:"", width:40, css:"icon-return"},
						{
							view:"label", template:"<h1>Mes sinistres : Maladie</h1> ", css:"h1",
						},
						{ view:"button", type:"icon", css:"btn_all", icon:"mdi mdi-chart-pie", label:"Statistiques", width:150, margin: 8,
							click:function(){
								renderAllSinisterMaladieByYear();
							} 
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
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idSinMalDV,
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
                                    autoheight:true,
									minHeight:500,
									type: {
                                        height:315,
                                        width:210,
                                        css:"policesDV"
                                    },
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#date_effet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#Categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#Branche#</span> </div></div>',
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
                                            var item = $$(idSinMalDV).getSelectedItem();
											$$("sinistresDosMaladie").show();
											$$('formDossiersMal').clear();
                                            renderSinistresDosMaladie(item.idPolice,item.police, '','');
                                        },
                                    },
                                    ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
                                    data:[]
								},
                            ]
                        }
					]
				},
			]
		}
	]
};


function renderSinMaladieListe(idSinMalDV){
	var doc=AddAction(null,1,"SINMALADIELISTE","SELECT","ABD","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "date_effet", "Categorie", "Branche"]);
		$$(idSinMalDV).clearAll();
		$$(idSinMalDV).parse(tmp);
		$$(idSinMalDV).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function showSinMaladieListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderSinMaladieListe(idSinMalDV);
    }else{
        $$(id).show();
    }
}
// ------------------------ End sinistreMaladie.js------------------------------------------------------------------------------


// ------------------------ Start sinistresDosMaladie.js------------------------------------------------------------------------------

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
							view:"button", css:"btn_all", type:"icon", icon:"mdi mdi-plus", label:"Ajouter réclamation", hidden:mySession.getReclamation(), width:180, click:function(){
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
											obj.statutClass="statut_traite_cie";
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
											obj.statutClass="statut_archive";
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
				{
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:0
					},
					cols:[
						{
					height:40,
					view:"label", template:"<h4 id='nbRowsSinistrMaladie'> </h4> ", css:"h4",
						}]
				}
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
			document.getElementById("nbRowsSinistrMaladie").innerHTML = data.split(String.fromCharCode(3)).length + " Ligne trouvés";
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
// ------------------------ End sinistresDosMaladie.js------------------------------------------------------------------------------


// ------------------------ Start ficheDossier.js------------------------------------------------------------------------------
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
																							view: "label", label:"ss",
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
			"DATESAISIEMAL", "StatusMAL", "DateStatusMAL", "DATEREMBMAL", "MTENGAGEMAL",  "MTDeclareMAL", "MTBaseRembMAL", "MTREMBMAL","Etatcab" ];			
		//console.log(jdata[0]);
			var obj = {};
				for(var j = 0; j < jdata[0].length; j++) {
					console.log(jdata[0][j]);
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
							obj[tmp[j]]= jdata[0][26]
							//obj[tmp[j]]= "Saisie Int.";
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

				//console.log(obj);
				$$(idformDosSin).setValues(obj);   
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);


	
	
}



// ------------------------ End ficheDossier.js------------------------------------------------------------------------------

// ------------------------ start toutesLesSinistreAuto.js------------------------------------------------------------------------------
var myIdPoliceMaladie = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridPoliceMaladie = "gridMaladiePDT" + makeId();


var toutesLesPolicesMaladie = {
	id:"toutesLesPolicesMaladie",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes polices : Maladie</h1> ", css:"h1 textUppercase",
						}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridPoliceMaladie,
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
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdPoliceMaladie[0], header:"idHistorique", hidden:true},
								{ id:myIdPoliceMaladie[1], header:[ "Marque",{ content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true},
								{ id:myIdPoliceMaladie[2], header:[ "Matricule",{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdPoliceMaladie[3], header:[ "Avenant",{ content:"textFilter" } ], minWidth:180, sort:"string", fillspace:true},
								{ id:myIdPoliceMaladie[4], header:"D.Effet", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdPoliceMaladie[5], header:"D.Echéance", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdPoliceMaladie[6], header:"Prime Totale", minWidth:120, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:myIdPoliceMaladie[7], header:"Prorata", hidden:true, minWidth:100, sort:"int", css:{'text-align':'right'},fillspace:true },
								{ id:myIdPoliceMaladie[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true,},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
							scheme:{
								$init:function(obj){
								  obj.Date_effet = date_format(obj.Date_effet);
								  obj.Date_eche = date_format(obj.Date_eche);
								}
							  },
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesPolicesMaladie");
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridPoliceMaladie).scrollTo(1,1);
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


function renderAllPoliceMaladie(item){
	
	var grid = $$(idgridPoliceMaladie);
	grid.clearAll();
		  
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICEAUTO","SELECT","ABW","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

		if(data.length>0){
			
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdPoliceMaladie);
			
			grid.parse(jdata, "json");
		}

	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End toutesLesSinistreAuto.js------------------------------------------------------------------------------


// ------------------------ Start toutesLesSinistreMaladie.js------------------------------------------------------------------------------
var myIdSinistreMaladie = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridSinistreMaladie = "gridPDT" + makeId();


var toutesLesSinistreMaladie = {
	id:"toutesLesSinistreMaladie",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes Sinistres : Maladie</h1> ", css:"h1 textUppercase",
						}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridSinistreMaladie,
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
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							/*
							header:[
            { content:"{filtername}Filter" },
            "Title"
        ]
							*/
							columns:[
								{ id:myIdSinistreMaladie[0], header:"idHistorique", hidden:true},
								{ id:myIdSinistreMaladie[1], header:[ "Marque",{ content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true},
								{ id:myIdSinistreMaladie[2], header:[ "Matricule",{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdSinistreMaladie[3], header:[ "Avenant",{ content:"textFilter" } ], minWidth:180, sort:"string", fillspace:true},
								{ id:myIdSinistreMaladie[4], header:"D.Effet", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdSinistreMaladie[5], header:"D.Echéance", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdSinistreMaladie[6], header:"Prime Totale", minWidth:120, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:myIdSinistreMaladie[7], header:"Prorata", hidden:true, minWidth:100, sort:"int", css:{'text-align':'right'},fillspace:true },
								{ id:myIdSinistreMaladie[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true,},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
							
							
							scheme:{
								$init:function(obj){
								  obj.Date_effet = date_format(obj.Date_effet);
								  obj.Date_eche = date_format(obj.Date_eche);
								}
							  },
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesSinistreMaladie");
									
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridSinistreMaladie).scrollTo(1,1);
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


function renderAllSinistreMaladie(item){
	
	var gridSinistreMaladie = $$(idgridSinistreMaladie);
	gridSinistreMaladie.clearAll();
		  
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABW","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

		if(data.length>0){
			
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdSinistreMaladie);
			
			gridSinistreMaladie.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End toutesLesSinistreMaladie.js------------------------------------------------------------------------------


// ------------------------ Start sinistreRD.js------------------------------------------------------------------------------

var idSinRDDV = "SinRDDV" + makeId();


var sinistresRD = {
	id:"sinistresRD",
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
						{
							view:"label", template:"<h1>Mes sinistres risque divers</h1> ", css:"h1",
						},
						{ view:"button", type:"icon", css:"btn_all", icon:"mdi mdi-chart-pie", label:"Statistiques", width:150, margin: 8,
							click:function(){
								renderAllSinisterRD();
							} 
						},
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:10
					},
					cols:[
						{
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idSinRDDV,
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
                                    autoheight:true,
									minHeight:500,
									type: {
                                        height:315,
                                        width:210,
                                        css:"policesDV"
                                    },
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#date_effet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#Categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#Branche#</span> </div></div>',
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
											var item = $$(idSinRDDV).getSelectedItem();
												$$("sinistresRDDosAutres").show();
												renderSinistresDosRD(item.idPolice, item.police,'','');
                                        },
                                    },
                                    ready:function(){
										if (!this.count()){
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
                                    data:[]
								},
								
                            ]
                        }
					]
				},
				

			]
		}
	]

};


function renderSinRDListe(idSinRDDV){
	var doc=AddAction(null,1,"SINRDLISTE","SELECT","ABF","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "date_effet", "idCategorie", "Categorie", "Branche"]);
        
		$$(idSinRDDV).clearAll();
		$$(idSinRDDV).parse(tmp);
		$$(idSinRDDV).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

	
}

function showSinRDListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderSinRDListe(idSinRDDV);
    }else{
        $$(id).show();
    }
}

// ------------------------ End sinistreRD.js------------------------------------------------------------------------------

// ------------------------ Start sinistresDosRD.js------------------------------------------------------------------------------

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
						top:0, bottom:0, left:20, right:10
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
								{ id:myIdHSinDosRD[9], header:[ {text:"ref.sin", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:170, sort:"string",css:{'text-align':'center'},fillspace:true},
								{ id:myIdHSinDosRD[10], header:[ {text:"Statut", css:{'text-align':'center'} } ], css:{'text-align':'center'}, sort:"string", template:"<span class=' #statutClass#'>#statut#</span>", minWidth:100,fillspace:true,},
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
				{
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:0
					},
					cols:[
						{
					height:40,
					view:"label", template:"<h4 id='nbRowsSinistreRD'> </h4> ", css:"h4",
						}]
				}
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
			document.getElementById("nbRowsSinistreRD").innerHTML = data.split(String.fromCharCode(3)).length + " Ligne trouvés";
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
// ------------------------ End sinistresDosRD.js------------------------------------------------------------------------------

// ------------------------ Start toutesLesSinistreRD.js------------------------------------------------------------------------------
var myIdSinistreRD = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridSinistreRD = "gridPDT" + makeId();

var toutesLesSinistreRD = {
	id:"toutesLesSinistreRD",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes Sinistres : RD</h1> ", css:"h1 textUppercase",
						}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridSinistreRD,
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
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdSinistreRD[0], header:"idHistorique", hidden:true},
								{ id:myIdSinistreRD[1], header:[ "Marque",{ content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true},
								{ id:myIdSinistreRD[2], header:[ "Matricule",{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdSinistreRD[3], header:[ "Avenant",{ content:"textFilter" } ], minWidth:180, sort:"string", fillspace:true},
								{ id:myIdSinistreRD[4], header:"D.Effet", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdSinistreRD[5], header:"D.Echéance", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdSinistreRD[6], header:"Prime Totale", minWidth:120, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:myIdSinistreRD[7], header:"Prorata", hidden:true, minWidth:100, sort:"int", css:{'text-align':'right'},fillspace:true },
								{ id:myIdSinistreRD[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true,},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
							scheme:{
								$init:function(obj){
								  obj.Date_effet = date_format(obj.Date_effet);
								  obj.Date_eche = date_format(obj.Date_eche);
								}
							  },
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesSinistreRD");
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridSinistreRD).scrollTo(1,1);
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

function renderAllSinistreRd(item){
	var gridSinistreRd = $$(idgridSinistreRD);
	gridSinistreRd.clearAll();
		  
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABW","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdSinistreRD);
			gridSinistreRd.parse(jdata, "json");
		}

	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End toutesLesSinistreRD.js------------------------------------------------------------------------------


// ------------------------ Start sinistreAT.js------------------------------------------------------------------------------

var idSinATDV = "SinATDV" + makeId();


var sinistresAT = {
	id:"sinistresAT",
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
						{
							view:"label", template:"<h1>Mes sinistres : AT</h1> ", css:"h1",
						},
						{ view:"button", type:"icon", css:"btn_all", icon:"mdi mdi-chart-pie", label:"Statistiques", width:150, margin: 8,
						click:function(){
							renderAllSinisterATByYear();
						} 
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
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idSinATDV,
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
                                    autoheight:true,
									minHeight:500,
									type: {
                                        height:315,
                                        width:210,
                                        css:"policesDV"
                                    },
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#date_effet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#Categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#Branche#</span> </div></div>',
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
											var item = $$(idSinATDV).getSelectedItem();
											$$("sinistresDosAT").show();
											renderSinistresDosAT(item.idPolice, item.police,'','');
                                        },
                                    },
                                    ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
                                    data:[]
								},
								
                            ]
                        }
					]
				},
				

			]
		}
	]

};


function renderSinATListe(idSinATDV){

	var doc=AddAction(null,1,"SINATLISTEAT","SELECT","ABB","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "date_effet", "idCategorie", "Categorie", "Branche"]);
        
		$$(idSinATDV).clearAll();
		$$(idSinATDV).parse(tmp);
		$$(idSinATDV).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

	
}

function showSinATListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderSinATListe(idSinATDV);
    }else{
        $$(id).show();
    }
}

// ------------------------ End sinistreAT.js------------------------------------------------------------------------------


// ------------------------ Start sinistresDosAT.js------------------------------------------------------------------------------
/*****  AT *****/
var myIdHSinDosAT = ["idSinistre", "IdPolice", "police", "DATESIN", "date_dec", "REFCIE", "IdCause", "Cause", "Victime", "certificat", "DateConsultation", "MTREGCIE", "DateRegelement", "Type.Sin", "taux.IPP","Nbr.Jour", "statut"];               
var idgridSinDosAT = "gridSinDosAT" + makeId();
var sinistresDosAT = {
        id:"sinistresDosAT",
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
                            {view:"label", id:"", template:"<span class='mdi mdi-arrow-left'></span>", width:40,
                             css:"icon-return", 
                                click:function(){
                                    $$("sinistresAT").show();
                                }  
                            },
                            {
                                view:"label", template:"<h1>Mes sinistres : AT</h1> ", css:"h1",
                            },
                            { 
                                padding:{
                                    top:20, bottom:50, left:30, right:50
                                },
                                view:"button", css:"btn_all", type:"icon", icon:"mdi mdi-plus", label:"Ajouter réclamation", hidden:mySession.getReclamation(), width:180, click:function(){
                                    SelectedRow = $$(idgridSinDosAT).getSelectedItem();
                                    if(SelectedRow){
                                        webix.ui({
                                            view:"window",
                                            id:"ceate_AT_reclamation_window",
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
                                                                template:"<h1> N° Sinistre : "+SelectedRow.idSinistre+"</h1>"
                                                            },
                                                            {
                                                                borderless: true,
                                                                template:isAssigned(SelectedRow.Victime)?" <h1>Victime : "+SelectedRow.Victime+" <h1>":""
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        view:"form", 
                                                        id:"reclamation_AT_form",
                                                        borderless: true,
                                                        elements:[
                                                                    { view:"textarea", id:"msgATText", name:"message" },
                                                                    {
                                                                        view:"uploader", upload:"//docs.webix.com/samples/server/upload",
                                                                        height:40,
                                                                        css: "button_reclamation_add_file",
                                                                        id:"uploader_AT_reclamation_files", name:"files",
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
                                                                                var Message = $$("msgATText").getValue();
    
                                                                                if(Message){
                                                                                    checkATReclamationForm(-1, IdSinistre, Message, "uploader_AT_reclamation_files", 4);
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
                        view:"label", template:"<h2>A.T : Liste des Dossiers</h2> ", css:"ml4 colorRose Bold",height:30
                    },
                    {
                        cols:[
                            {view:"label", template:"Police N°:", css:"ml5 colorTxt infoNum",height:20, width:80},
                            {view:"label", label:"",id:"libPoliceSinAT", name:"libPoliceSinAT", css:" colorTxt infoNum",height:20,  align:"left"},
                            {view:"label", label:"",id:"idPoliceSinAT", name:"idPoliceSinAT", hidden:true},
                        ]
                    },
                    {
                        view:"form", id:"formDosAT",
                        type:"clean",
                        padding:{
                            top:0, bottom:0, left:20, right:10
                        },
                        css:"noBg noBorder",
                        elements:[
                            {	padding:3,
                                cols:[
                                    {},
                                    { view:"datepicker", label:"DU", id:"duAT", name:"duAT", minWidth:110, maxWidth:170, labelWidth:30, stringResult:true, format:"%d/%m/%Y" },
                                    { view:"datepicker", label:"AU", id:"auAT", name:"auAT", minWidth:110, maxWidth:170, labelWidth:30, stringResult:true, format:"%d/%m/%Y" },
                                    { view:"button", value:"OK", css:"btnSearch", width:50,
                                        click:function(){
                                            var du = $$("formDosAT").getValues().duAT;
                                            var au = $$("formDosAT").getValues().auAT;
                                            renderSinistresDosAT($$("idPoliceSinAT").getValue(), $$("libPoliceSinAT").getValue(), du, au);
                                        } 
                                    },
                                ]
                            },
                            
                        ]
                    },
                    {	
                        type:"clean",
                        padding:{
                            top:0, bottom:0, left:20, right:10
                        },
                        cols:[
                            {
                                
                                id:idgridSinDosAT,
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
                                rightSplit:1,
                                headerRowHeight:44,
								footer:true,
                                columns:[
                                    { id:myIdHSinDosAT[0], header:"IdSinistre", width:50, hidden:true},
                                    { id:myIdHSinDosAT[1], header:"IdPolice", width:50, hidden:true},
                                    { id:myIdHSinDosAT[3], header: [ {text:"D.Sinsitre", css:{'text-align':'center'} },{ content:"textFilter" } ],   minWidth:120, sort:'ntsSortDecimal', css:{'text-align':'center'}, format:webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
                                    { id:myIdHSinDosAT[4], header: [ {text:"D.Déclaration", css:{'text-align':'center'} },{ content:"textFilter" } ], minWidth:150, sort:'ntsSortDecimal', css:{'text-align':'center'}, format:webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
                                    { id:myIdHSinDosAT[5], header:[ {text:"Réf. Sinistre", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string", minWidth:120,fillspace:true, css:{'text-align':'left'}},
                                    { id:myIdHSinDosAT[6], header:[ {text:"IdCause", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string", minWidth:50, hidden:true, css:{'text-align':'left'}},
                                    { id:myIdHSinDosAT[7], header:[ {text:"Cause", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string", minWidth:120,fillspace:true, css:{'text-align':'center'}},
                                    { id:myIdHSinDosAT[8], header: [ {text:"Victime", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string", css:{'text-align':'center'}, width:120,fillspace:true, },
                                    { id:myIdHSinDosAT[13], header: [ {text:"Type.Sin", css:{'text-align':'center'} },{ content:"numberFilter" } ], sort:"string", css:{'text-align':'center'}, width:120,fillspace:true, },
                                    { id:myIdHSinDosAT[14], header: [ {text:"taux.IPP", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string", css:{'text-align':'center'}, width:120,fillspace:true, },
                                    { id:myIdHSinDosAT[15], header: [ {text:"Nbr.Jour", css:{'text-align':'center'} },{ content:"numberFilter" } ], sort:"string", css:{'text-align':'center'}, width:120,fillspace:true, },
                                    { id:myIdHSinDosAT[16], header:"Statut", sort:"string", template:"<span class='#statutClass#'>#statut#</span>", minWidth:100,fillspace:true,},
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
                                        obj.DATESIN = date_format(obj.DATESIN);
                                        obj.date_dec = date_format(obj.date_dec);
                                        obj.DateConsultation = date_format(obj.DateConsultation);
                                        obj.DateRegelement = date_format(obj.DateRegelement);
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
					{
						type:"clean",
						padding:{
							top:0, bottom:0, left:20, right:0
						},
						cols:[
							{
						height:40,
						view:"label", template:"<h4 id='nbRowsSinistreAT'> </h4> ", css:"h4",
							}]
					}
                ]
            }
        ]
    };
    
    function renderSinistresDosAT(idPolice, police, dateDu, dateAu){
        $$("idPoliceSinAT").setValue(idPolice);
        $$("libPoliceSinAT").setValue(police);
        var grid = $$(idgridSinDosAT);
        grid.clearAll();
        var doc=AddAction(null,1,"SINDOSAT","SELECT","ABG","O");
        doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
        doc=AddParam(doc,1,2,"Idpolice_",idPolice,"O");
        doc=AddParam(doc,1,3,"DateSinDU_",dateDu,"O");
        doc=AddParam(doc,1,4,"DateSinAU_",dateAu,"O");
        var xml=XML2String(doc);
        ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
            if(data.length>0){
                var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHSinDosAT);
				document.getElementById("nbRowsSinistreAT").innerHTML = data.split(String.fromCharCode(3)).length + " Ligne trouvés";
                grid.parse(jdata, "json");
            }
        }, function (obj, data, args) {
            webix.message(data);
        }, [], false);
    }
    
    function checkATReclamationForm(IdReclamation, IdSinistre, Message, uploaderId, Idcategorie){
        var obj_files = $$(uploaderId).files;
        var nbre_fics = 0;
        if (isAssigned(obj_files)) { 
            nbre_fics=obj_files.count();
        };
        if (nbre_fics <= 0) {
                webix.confirm("Attention, cette réclamation n'a pas de fichier. Souhaitez-vous continuer", "confirm-warning")
                    .then(function(result){
                        saveATReclamationForm(IdReclamation, IdSinistre, Message, 0, obj_files, Idcategorie);
                        $$("ceate_AT_reclamation_window").close();
                })
                .fail(function(){
                    return;
                });
        } else {
            saveATReclamationForm(IdReclamation, IdSinistre, Message, 1, obj_files, Idcategorie);
            $$("ceate_AT_reclamation_window").close();
        };
    };
    
    function saveATReclamationForm(IdReclamation, IdSinistre, Message, nbre_fics, obj_files, Idcategorie){
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
// ------------------------ End sinistresDosAT.js------------------------------------------------------------------------------



// ------------------------ Start toutesLesSinistreAt.js------------------------------------------------------------------------------
var myIdSinistreAt = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridSinistreAt = "gridPDT" + makeId();
var toutesLesSinistreAt = {
	id:"toutesLesSinistreAt",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes Sinistres : AT</h1> ", css:"h1 textUppercase",
						}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridSinistreAt,
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
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdSinistreAt[0], header:"idHistorique", hidden:true},
								{ id:myIdSinistreAt[1], header:[ "Marque",{ content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true},
								{ id:myIdSinistreAt[2], header:[ "Matricule",{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdSinistreAt[3], header:[ "Avenant",{ content:"textFilter" } ], minWidth:180, sort:"string", fillspace:true},
								{ id:myIdSinistreAt[4], header:"D.Effet", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdSinistreAt[5], header:"D.Echéance", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdSinistreAt[6], header:"Prime Totale", minWidth:120, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:myIdSinistreAt[7], header:"Prorata", hidden:true, minWidth:100, sort:"int", css:{'text-align':'right'},fillspace:true },
								{ id:myIdSinistreAt[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true,},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
							scheme:{
								$init:function(obj){
								  obj.Date_effet = date_format(obj.Date_effet);
								  obj.Date_eche = date_format(obj.Date_eche);
								}
							  },
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesSinistreAt");
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridSinistreAt).scrollTo(1,1);
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

function renderAllSinistreAt(item){
	
	var gridSinistreMaritime = $$(idgridSinistreAt);
	gridSinistreMaritime.clearAll();
		  
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABW","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

		if(data.length>0){
			
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdSinistreAt);
			
			gridSinistreMaritime.parse(jdata, "json");
		}

	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End toutesLesSinistreAt.js------------------------------------------------------------------------------



// ------------------------ Start sinistreMaritime.js------------------------------------------------------------------------------
var idSinMarDV = "SinMarDV" + makeId();


var sinistresMaritime = {
	id:"sinistresMaritime",
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
						{
							view:"label", template:"<h1>Mes sinistres : Transport</h1> ", css:"h1",
						},
						{ view:"button", type:"icon", css:"btn_all", icon:"mdi mdi-chart-pie", label:"Statistiques", width:150, margin: 8,
							click:function(){
								renderAllSinisterMaritimeByYear();
							} 
						},
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:10
					},
					cols:[
						{
                            rows:[
                                {
									gravity:1,
									view:"dataview", 
									id:idSinMarDV,
									css:"dataviewTB",
                                    scroll:"auto",
                                    select:true,
                                    autoheight:true,
									minHeight:500,
									type: {
                                        height:315,
                                        width:210,
                                        css:"policesDV"
                                    },
									template:'<div class="dvPolice"><div class="tbIcon"><img src="./tools/images/Autopolice.png"/></div><div class="tbDet"> <span class="subTitle">Police</span> <span class="valeur">#police#</span> </div><div class="tbDet"> <span class="subTitle">Compagnie</span> <span class="valeur">#compagnie#</span> </div><div class="tbDet"> <span class="subTitle">Date Effet</span> <span class="valeur">#date_effet#</span> </div><div class="tbDet Border"> <span class="subTitle">Catégorie</span> <span class="valeur blue">#Categorie#</span> </div><div class="tbDet"> <span class="subTitle">Branche</span> <span class="valeur blue">#Branche#</span> </div></div>',
                                    on:{
                                        "onItemDblClick":function(id, e, trg){ 
											var item = $$(idSinMarDV).getSelectedItem();
											
											if(item.idCategorie==4){
												$$("sinistresDosMaritimeFac").show();
												renderSinistresDosMaritimeFac(item.idPolice, item.police,'','');
											}else if(item.idCategorie==6){
												$$("sinistresDosMaritimeCor").show();
												renderSinistresDosMaritimCor(item.idPolice, item.police,'','');
												
											}
											
                                        },
                                    },
                                    ready:function(){
										if (!this.count()){ 
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
                                    data:[]
								},
								
                            ]
                        }
					]
				},
				

			]
		}
	]

};



function renderSinMaritimeListe(idSinMarDV){
	var doc=AddAction(null,1,"SINMARITIMELISTE","SELECT","ABE","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
        var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
        var tmp = convertToArrayOfObjects(data, ["idPolice","police", "compagnie", "date_effet", "idCategorie", "Categorie", "Branche"]);
		$$(idSinMarDV).clearAll();
		$$(idSinMarDV).parse(tmp);
		$$(idSinMarDV).hideOverlay();
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function showSinMaritimeListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderSinMaritimeListe(idSinMarDV);
    }else{
        $$(id).show();
    }
}

// ------------------------ End sinistreMaritime.jsssp------------------------------------------------------------------------------



// ------------------------ Start sinistresDosMaritime.js------------------------------------------------------------------------------
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
							view:"label", template:"<h1>Mes sinistres : Transport</h1> ", css:"h1 textUppercase",
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
				{
					type:"clean",
					padding:{
						top:0, bottom:0, left:20, right:0
					},
					cols:[
						{
					height:40,
					view:"label", template:"<h4 id='nbRowsSinistreMaritime'> </h4> ", css:"h4",
						}]
				}
				
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
			document.getElementById("nbRowsSinistreMaritime").innerHTML = data.split(String.fromCharCode(3)).length + " Ligne trouvés";
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
							view:"label", template:"<h1>Mes sinistres : Transport</h1> ", css:"h1 textUppercase",
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


// ------------------------ End sinistresDosMaritime.js------------------------------------------------------------------------------



// ------------------------ Start toutesLesSinistreMaritime.js------------------------------------------------------------------------------
var myIdSinistreMaritime = ["IdHistorique","Marque", "Matricule", "Avenant", "Date_effet", "Date_eche", "Ptotale", "Prorata", "SinistreEncours"];                 
var idgridSinistreMaritime = "gridMaritimePDT" + makeId();

var toutesLesSinistreMaritime = {
	id:"toutesLesSinistreMaritime",
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
								showPolicesListe(false, "policesListe");
							}  
						},
						{
							view:"label", template:"<h1>Toutes Sinistres : Transport</h1> ", css:"h1 textUppercase",
						}
					]
				},
				{	
					type:"clean",
					padding:{
						top:20, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idgridSinistreMaritime,
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
							datatype:"jsarray",
							autofocus:true,
							leftSplit:0,
							rightSplit:1,
							headerRowHeight:44,
							footer:true,
							columns:[
								{ id:myIdSinistreMaritime[0], header:"idHistorique", hidden:true},
								{ id:myIdSinistreMaritime[1], header:[ "Marque",{ content:"selectFilter" } ], minWidth:140, sort:"string",fillspace:true},
								{ id:myIdSinistreMaritime[2], header:[ "Matricule",{ content:"textFilter" } ], minWidth:120, sort:"string",fillspace:true},
								{ id:myIdSinistreMaritime[3], header:[ "Avenant",{ content:"textFilter" } ], minWidth:180, sort:"string", fillspace:true},
								{ id:myIdSinistreMaritime[4], header:"D.Effet", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y"),fillspace:true},
								{ id:myIdSinistreMaritime[5], header:"D.Echéance", minWidth:100, sort:"date", css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true },
								{ id:myIdSinistreMaritime[6], header:"Prime Totale", minWidth:120, sort:"int", css:{'text-align':'right'}, format:myReelformat,fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:myIdSinistreMaritime[7], header:"Prorata", hidden:true, minWidth:100, sort:"int", css:{'text-align':'right'},fillspace:true },
								{ id:myIdSinistreMaritime[8], header:"Sinistre en cours", template:"{common.rcheckboxON()}", css:{'text-align':'center'}, minWidth:130,fillspace:true,},
								{ id:"gobtn",header:"", template:"<span class='mdi mdi-chevron-right Bold icon gobtn'></span>", width:50}
							],
							scheme:{
								$init:function(obj){
								  obj.Date_effet = date_format(obj.Date_effet);
								  obj.Date_eche = date_format(obj.Date_eche);
								}
							  },
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "toutesLesSinistreMaritime");
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idgridSinistreMaritime).scrollTo(1,1);
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

function renderAllSinistreMaritime(item){
	
	var gridSinistreMaritime = $$(idgridSinistreMaritime);
	gridSinistreMaritime.clearAll();
		  
	$$("idLabelPolice").setValue(item.police);
	$$("idPoliceV").setValue(item.idPolice);

	var doc=AddAction(null,1,"VEHICULESPOLICE","SELECT","ABW","O");
	doc=AddParam(doc,1,0,"IdSous_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"Session_",mySession.getGuid(),"O");
	doc=AddParam(doc,1,2,"IdAssure_",mySession.getIdAssure(),"O");
	doc=AddParam(doc,1,3,"IdAdherent_",mySession.getIdAdherant(),"O");
	doc=AddParam(doc,1,4,"Idpolice_",item.idPolice,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdSinistreMaritime);
			gridSinistreMaritime.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}
// ------------------------ End toutesLesSinistreMaritime.js------------------------------------------------------------------------------


// ------------------------ Start impayes.js------------------------------------------------------------------------------
var myIdHImp = [
	"IdFacture" , 
	"Statut", 
	"NFacture" ,
	"DateFacture" ,
	"IDBranche" ,
	"Branche" ,
	"Idclient", 
	"CIN" ,
	"IdPolice" ,
	"NPolice" ,
	"DateEffet" ,
	"Date_Echeance", 
	"PrimeTotale" ,
	"Encaissement",
	"Solde"];                 
var idTBimpayes = "dvTBimpayes" + makeId();
var idgridFactureImp = "gridImp" + makeId();
var idgridFacturePay = "gridPay" + makeId();
var idSoldImp = "soldImp" + makeId();
var mesImpayes = {
	id:"mesImpayes",
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:3,
	cols:[
		{
			padding:{
				top:0, bottom:7, left:15, right:8
			  },
			rows:[
				{
					view:"label", template:"<h3>Mes impayés</h3>", css:{"color":"#0d4487 !important"}, height:50	
				},
				{				
					view:"dataview", 
					id:idTBimpayes,
					css:"dataviewTB3 dvImpaye",
					scroll:"auto",
					autoheight:true,
					minHeight:200,
					padding:0,
					type: {
						height:130,
						width:220,
						css:""
					},
					template:'<div class="tbHome4 #colorNB#"><div class="tbSinistre"><span class="sinistre col">#Categorie#</span><span class="sinistre col"><img src="./tools/images/#imageSTR#" width="auto"></span></div><div class="tbDet4"> <span class="valeur" data=#Solde#>0</span> <span class="subTitle2">Montant impayés</span> </div></div>',
					ready:function(){
						if (!this.count()){ //if no data are available
							webix.extend(this, webix.OverlayBox);
							this.showOverlay(loadingDIV);
						}
					},
					data:[],
					on:{
						"onItemClick":function(id, e, trg){ 
							var item = this.getItem(id);
							renderImpayesListe(item.Idcategorie, item.Categorie, item.Solde,"","", false);
						}
					},
				},
				{
					padding:{
						top:0, bottom:0, left:0, right:0
					},
					cols: [
							{view:"label", template:"<h3 class='red'>Factures impayées</h3>", height:50},
							{
								view:"label",css:{'text-align':'right'}, template:"<h3 class='red'><i class='bage-red' id='"+idSoldImp+"'></i></h3>", height:50	, width:'auto'
							}
					]
				},
				{	
					type:"clean",
					cols:[
						{
							id:idgridFactureImp,
							view:"datatable", 
							css:"styleDT dt_imp",
							height:450,
							borderless:false,
							rowHeight:40,
							resizeRow: false,
							navigation:"false",
							resizeColumn: true,
							scrollX:true,
							datatype:"jsarray",
							autofocus:true,
							headerRowHeight:44,
							select: true,
							footer:false,
							columns:[
								{ id:myIdHImp[1], header:[ {text:"Statut", css:{'text-align':'center'} }], css:{'text-align':'center'}, template: (obj, common) => {
									if(obj.Statut == "N"){
											result = '<i class="fa-sharp fa-solid fa-circle-xmark" style="color: #ff4949;"></i>';
									}else{
										result = '<i class="fa-regular fa-circle-check" style="color: green;"></i>';
									}
										return result;
									}
								},
								{ id:myIdHImp[2], header:[ {text:"N° Facture", css:{'text-align':'center'} },{ content:"textFilter" }], sort:"int",css:{'text-align':'center'}, fillspace:true},
								{ id:myIdHImp[3], header:[ {text:"Date Facture", css:{'text-align':'center'} },{ content:"textFilter" }], sort:'ntsDate', css:{'text-align':'center'}, fillspace:true,  format: webix.Date.dateToStr("%d/%m/%Y")},
								{ id:myIdHImp[5], header:[ {text:"Branche", css:{'text-align':'center'} },{ content:"textFilter" }], sort:"string", css:{'text-align':'left'}, fillspace:true},
								{ id:myIdHImp[9], header:[ {text:"N° Police", css:{'text-align':'center'} },{ content:"textFilter" }], sort:"string", css:{'text-align':'left'}, fillspace:true},
								{ id:myIdHImp[10], header:[ {text:"Date Effet", css:{'text-align':'center'} },{ content:"textFilter" }], format: webix.Date.dateToStr("%d/%m/%Y"), sort:'ntsDate',css:{'text-align':'center'}, fillspace:true},
								{ id:myIdHImp[11], header:[ {text:"Date d'écheance", css:{'text-align':'center'} },{ content:"textFilter" }], sort:'ntsDate',css:{'text-align':'center'}, fillspace:true, format: webix.Date.dateToStr("%d/%m/%Y")},
								{ id:myIdHImp[12], header:[ {text:"Prime totale", css:{'text-align':'center'} },{ content:"textFilter" }], sort:'ntsSortDecimal', css:{'text-align':'center'}, format:formatDecimal, fillspace:true},
								{ id:myIdHImp[13], header:[ {text:"Encaissement", css:{'text-align':'center'} },{ content:"textFilter" }],sort:'ntsSortDecimal', format:formatDecimal, css:{'text-align':'center'}, fillspace:true},
								{ id:myIdHImp[14], header:[ {text:"Solde", css:{'text-align':'center'} },{ content:"textFilter" }], sort:'ntsSortDecimal',css:"cell_solde_imp" , fillspace:true,  template: (obj, common) => {return "<i><b>"+formatDecimal(obj.Solde)+" MAD<b></i>" }},
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "mesImpayes");
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idTBimpayes).scrollTo(1,1);
								}
							},
							data: []
						},
					]
				},
				{
					padding:{
						top:0, bottom:0, left:0, right:0
					},
					cols: [
							{view:"label", template:"<h3 class='green'>Factures Payées</h3>", height:50},
					]
				},
				{	
					type:"clean",
					cols:[
						{
							id:idgridFacturePay,
							view:"datatable", 
							css:"styleDT dt_imp",
							height:450,
							borderless:false,
							rowHeight:40,
							resizeRow: true,
							resizeColumn: true,
							navigation:"false",
							scrollX:true,
							datatype:"jsarray",
							autofocus:true,
							headerRowHeight:44,
							select: true,
							footer:false,
							columns:[
								{ id:myIdHImp[1], header:[ {text:"Statut", css:{'text-align':'center'} }], css:{'text-align':'center'}, template: (obj, common) => {
									if(obj.Statut == "N"){
											result = '<i class="fa-solid fa-circle-exclamation" style="color: #ff4949;"></i>';
									}else{
										result = '<i class="fa-regular fa-circle-check" style="color: green;"></i>';
									}
										return result;
									}
								},
								{ id:myIdHImp[2], header:[ {text:"N° Facture", css:{'text-align':'center'} },{ content:"textFilter" }], sort:"int",css:{'text-align':'center'}, fillspace:true},
								{ id:myIdHImp[3], header:[ {text:"Date Facture", css:{'text-align':'center'} },{ content:"textFilter" }], sort:'ntsDate', css:{'text-align':'center'}, fillspace:true,  format: webix.Date.dateToStr("%d/%m/%Y")},
								{ id:myIdHImp[5], header:[ {text:"Branche", css:{'text-align':'center'} },{ content:"textFilter" }], sort:"string", css:{'text-align':'left'}, fillspace:true},
								{ id:myIdHImp[9], header:[ {text:"N° Police", css:{'text-align':'center'} },{ content:"textFilter" }], sort:"string", css:{'text-align':'left'}, fillspace:true},
								{ id:myIdHImp[10], header:[ {text:"Date Effet", css:{'text-align':'center'} },{ content:"textFilter" }], format: webix.Date.dateToStr("%d/%m/%Y"), sort:'ntsDate',css:{'text-align':'center'}, fillspace:true},
								{ id:myIdHImp[11], header:[ {text:"Date d'écheance", css:{'text-align':'center'} },{ content:"textFilter" }], sort:'ntsDate',css:{'text-align':'center'}, fillspace:true, format: webix.Date.dateToStr("%d/%m/%Y")},
								{ id:myIdHImp[12], header:[ {text:"Prime totale", css:{'text-align':'center'} },{ content:"textFilter" }], sort:'ntsSortDecimal', css:{'text-align':'center'}, format:formatDecimal, fillspace:true},
								{ id:myIdHImp[13], header:[ {text:"Encaissement", css:{'text-align':'center'} },{ content:"textFilter" }],sort:'ntsSortDecimal', css:{'text-align':'center'}, format:formatDecimal, fillspace:true},
								{ id:myIdHImp[14], header:[ {text:"Solde", css:{'text-align':'center'} },{ content:"textFilter" }], sort:'ntsSortDecimal',css:"cell_solde_payee" , fillspace:true,  template: (obj, common) => {return "<i><b>"+formatDecimal(obj.Solde)+" MAD<b></i>" }},
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
							onClick:{
								"gobtn": function(ev, id, trg){
									var item = this.getItem(id);
									showficheVehicule($$("idPoliceV").getValue(), item.IdHistorique, item.Matricule, "mesImpayes");
								}, 
							},
							on:{
								"onViewShow":function(id, e, trg){ 
									$$(idTBimpayes).scrollTo(1,1);
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
function renderImpayesTB(idTBimpayes){
	var doc=AddAction(null,1,"IMPAYESTB","SELECT","AAK","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
    var xml=XML2String(doc);
    ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
			var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
			var tmp = convertToArrayOfObjects(data, ["Idcategorie", "Categorie", "Solde", "colorNB", "imageSTR"]);
			for(var j = 0; j < tmp.length; j++) {
				switch(tmp[j]["Idcategorie"]){
					case "1":
						tmp[j]["colorNB"]="color1";
						tmp[j]["imageSTR"]="Auto-80.png";
						break;
					case "2":
						tmp[j]["colorNB"]="color2";
						tmp[j]["imageSTR"]="Vie-80.png";
						break;
					case "3":
						tmp[j]["colorNB"]="color3";
						tmp[j]["imageSTR"]="RD-80.png";
						break;
					case "4":
						tmp[j]["colorNB"]="color4";
						tmp[j]["imageSTR"]="Maritime-80.png";
						break;
					case "5":
						//AT
						tmp[j]["Categorie"]="AT";
						tmp[j]["colorNB"]="color5";
						tmp[j]["imageSTR"]="AT-80.png";
						break;
				}
				//Solde
				tmp[j]["Solde"]=parseFloat(tmp[j]["Solde"].replace(',', '.')).toFixed(2);
				
			}
			$$(idTBimpayes).clearAll();
			$$(idTBimpayes).parse(tmp);
			$$(idTBimpayes).hideOverlay();
			const counters = document.querySelectorAll('.valeur');
			animateCounter(200, counters);
		}, function (obj, data, args) {
			webix.message(data);
		}, [], false);  
}

function renderFactureImpayes(){
	var grid = $$(idgridFactureImp);
	grid.clearAll();
	var doc=AddAction(null,1,"Esp_Impayes ","SELECT","AAL","O");
	doc=AddParam(doc,1,0,"IdUser",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O"); 
	doc=AddParam(doc,1,2,"Reglee_","non","O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHImp);
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}

function renderFacturePayees(){
var grid = $$(idgridFacturePay);
grid.clearAll();
var doc=AddAction(null,1,"Esp_Impayes ","SELECT","AAL","O");
doc=AddParam(doc,1,0,"IdUser",mySession.getIdUser(),"O");
doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O"); 
doc=AddParam(doc,1,2,"Reglee_","oui","O");
var xml=XML2String(doc);
ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
	if(data.length>0){
		var jdata = csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),myIdHImp);
		grid.parse(jdata, "json");
	}
}, function (obj, data, args) {
	webix.message(data);
}, [], false);
}
function renderSoldeImpayes(){
	//	main filtering method of the grid
	var doc=AddAction(null,1,"Esp_Impayéstotal ","SELECT","AAM","O");
	doc=AddParam(doc,1,0,"IdUser",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O"); 
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
			document.getElementById(idSoldImp).innerHTML = "<i class='fa-solid fa-wallet'></i> Total impayés : "+ formatDecimal(data[0])+ " MAD";
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}
function showImpayesTB(loadData, id) {
    if(loadData){    
        $$(id).show();
        renderImpayesTB(idTBimpayes);
		renderFactureImpayes();
		renderFacturePayees();
		renderSoldeImpayes();
    }else{
        $$(id).show();
    }
} 

// ------------------------ End impayes.js------------------------------------------------------------------------------

// ------------------------ Start reclamationsAuto.js------------------------------------------------------------------------------
var idReclamationsAuto = "reclamationsAuto" + makeId();
var reclamationsCol = ["datecreation", "numreclamation",  "nsinistre", "Statut" , "LastMessage", "client" ,"idcategorie"];                 

var reclamationsAuto = {
    id:"reclamationsAuto",
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
						{view:"label", template:"<h1>Mes réclamations Auto</h1> ", css:"h1"},
						///********************* USER GUIDE */
						{ 
							css:"webix_transparent help_button",
							type:"clean",
							view:"button", 
							type: "image", 
							image:"./tools/images/Help.png", 
							click:showHelpMenu,
							width:50
						}
						///********************* END USER GUIDE */
					]
				},
                {	
					type:"clean",
					padding:{
						top:5, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idReclamationsAuto,
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
								{ id:reclamationsCol[0], header:[ {text:"Date creation", css:{'text-align':'center'} },{ content:"textFilter" }], 
								   minWidth:100, sort:'ntsDate', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true
								},
								{ id:reclamationsCol[1], header:[ {text:"Num reclamation", css:{'text-align':'center'} },{ content:"textFilter" }] , sort:'ntsSortDecimal', css:{'text-align':'center'}, fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:reclamationsCol[2], header:[ {text:"Num sinistre", css:{'text-align':'center'} },{ content:"textFilter" }] , sort:'ntsSortDecimal', css:{'text-align':'center'},fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:reclamationsCol[4], header:[ {text:"Dernier message", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'left'}},
								{ id:reclamationsCol[5], header:[ {text:"Client", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'left'}},
								{ id:reclamationsCol[3], header:[ {text:"Statut", css:{'text-align':'center'} } ], css:{'text-align':'center'}, sort:"string", template:"<span class='statut_#statutClass#'>#statut#</span>",sort:"string", minWidth:100,fillspace:true},
							],
							scheme:{
								$init:function(obj){
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
									if($$("list_reclamations")){
										$$("list_reclamations").close();
									}
									selectedRow = $$(idReclamationsAuto).getSelectedItem();
									webix.ui({
										view:"window",
										id:"list_reclamations",
										css: "list_reclamations",
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
											{ view:"label", width:30, label: '<i style="margin-right: 10px;" class="fa fa-times" aria-hidden="true"></i>',  align: 'right', click:function(){ $$('list_reclamations').close(); }}
											]
										},
										body:{
											borderless: true,
											rows: 
											[
												{
													view:"dataview", 
													id:"ReclamationsAutodataview",       
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
													id:"replay_reclamation_form",
													borderless: true,
													elements:[
														{
															borderless:true,
															height:40,
															cols:
															[
																{ view:"textarea", id:"reply_msg", name:"reply_msg", width:300, borderless:true },
																{
																	width:50,
																	view:"uploader", 
																	id:"uploader_reply_reclamation_file", name:"files",
																	link:"doclist", autosend:false,
																	multiple: false,
																	label:'<i class="fa fa-paperclip" aria-hidden="true"></i>'
																},
																{ 	
																	align:"right",
																	width:50,				
																	view:"button", 
																	label:'<i class="fa fa-paper-plane" aria-hidden="true"></i>',
																	css: "button_reclamation_add_file",
																	id:"button_reclamation_add_file_auto",
																	click:function(){

																		var Message = $$("reply_msg").getValue();
																		SelectedRow = $$(idReclamationsAuto).getSelectedItem();
																		var IdSinistre_reply = SelectedRow.nsinistre;
																		if(Message){
																			check_reclamation_form_reply(mySession.getArrValue('lastMessage').Idreclamation, IdSinistre_reply, Message, "uploader_reply_reclamation_file", 2);
																			var sel = $$(idReclamationsAuto).getSelectedId();
																			var row = $$(idReclamationsAuto).getItem(sel.row);
																			row["LastMessage"] = Message;
																			$$(idReclamationsAuto).updateItem(sel.row, row);
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
																		CloturerReclamtaion(mySession.getArrValue('lastMessage').Idreclamation);
																})
																.fail(function(){
																	return;
																});	
															}   
														}
														] ),
														{ view:"list", scroll:true, id:"doclist", type:"uploader", autoheight:true, borderless:true	 },
														]
												}
											]
										}
									}).show();
								  renderReclamationsAutoListeByNumReclamation(selectedRow.numreclamation);
								  	if(selectedRow.statut == "Cloturée"){
										$$("reply_msg").disable();
										$$("uploader_reply_reclamation_file").disable();
										$$("button_reclamation_add_file_auto").disable();
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
function CloturerReclamtaion(IdReclamation){
	var doc=AddAction(null,1,"RECLAMTIONClOTURE","PROCEDURE","ABZ","O");
	doc=AddParam(doc,1,0,"IdReclamation_",IdReclamation,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
	   webix.alert("Réclamation cloturée avec succés");
	   renderReclamationsAutoListe(2);
	   $$("list_reclamations").close();
	}, function (obj, data, args) {
		webix.alert(data);
	}, [], false);
}
function showReclamationsAutoListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderReclamationsAutoListe(2);
    }else{
        $$(id).show();
    }
}
function renderReclamationsAutoListe(IdCategorie){
		var grid = $$(idReclamationsAuto);
		grid.clearAll();
		var doc=AddAction(null,1,"RECLAMATIONAUTOLIST","SELECT","ABY","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,1,2,"IdCategorie_",IdCategorie,"O");
		var xml=XML2String(doc);
		ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
			if(data.length>0){
				var Adata = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
				var tmp = convertToArrayOfObjects(Adata, reclamationsCol);
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


function renderReclamationsAutoListeByNumReclamation(NumReclamation){
	var grid = $$("ReclamationsAutodataview");
	grid.clearAll();
	var doc=AddAction(null,1,"GetReclamationMSG","SELECT","ACA","O");
	doc=AddParam(doc,1,0,"NumReclamation_",NumReclamation,"O");
	
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			var data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));

			var tmp = convertToArrayOfObjects(data, ["nature", "NumReclamation", "Msg", "Datecreation", "NSinistre", "IdAuteur", "Client", "Idreclamation", "Agent", "NPJ", "FileName", "FileExt"]);
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
			$$('ReclamationsAutodataview').showItem($$('ReclamationsAutodataview').getLastId());
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}


function check_reclamation_form_reply(IdReclamation, IdSinistre, Message, uploaderId, Idcategorie){
	$$("button_reclamation_add_file_auto").disable();
	var obj_files = $$(uploaderId).files;
	var nbre_fics = 0;
	if (isAssigned(obj_files)) { 
	    nbre_fics=obj_files.count();
	};
	if (nbre_fics <= 0) {
		save_reclamation_form_replay(IdReclamation, IdSinistre, Message, 0, obj_files, Idcategorie);
 
	}  else {
		save_reclamation_form_replay(IdReclamation, IdSinistre, Message, 1, obj_files, Idcategorie)
	};
};

function save_reclamation_form_replay(IdReclamation, IdSinistre, Message, nbre_fics, obj_files, Idcategorie){
	if (nbre_fics == 0) {
		var doc=AddAction(null,1,"RECLAMTION","PROCEDURE","ACB","O");
		doc=AddParam(doc,1,0,"IdReclamation_",IdReclamation,"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,1,2,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,3,"Idsinistre_",IdSinistre,"O");
		doc=AddParam(doc,1,4,"Idcategorie_",Idcategorie,"O");
		doc=AddParam(doc,1,4,"filedata","","N");
		doc=AddParam(doc,1,4,"fileName_","","N");
		doc=AddParam(doc,1,4,"fileExt_","PDF","N");
		doc=AddParam(doc,1,4,"message_",Message,"O");
		doc=AddParam(doc,1,4,"Nature_","C","O");
		var xml=XML2String(doc);
		ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		   $$("reply_msg").setValue("");
		   renderReclamationsAutoListeByNumReclamation(selectedRow.numreclamation);
		   $$("button_reclamation_add_file_auto").enable();
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
					$$("reply_msg").setValue("");
		   			renderReclamationsAutoListeByNumReclamation(selectedRow.numreclamation);
					$$("button_reclamation_add_file_auto").enable();
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
					label:"Mes réclamations Auto",
					align:"center",
					css:"title1"
				},
				{
					height:20
				},
				{
					borderless: true,
					template:"<body>Ici, vous pourrez accéder directement à la liste de vos réclamations relatives à vos sinistres automobile.<br><br>En boucle cliquant sur une des lignes, l'échange avec le service concerné s'affichera.</body>"
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
// ------------------------ End reclamationsAuto.js------------------------------------------------------------------------------

// ------------------------ Start reclamationsAT.js------------------------------------------------------------------------------
var idReclamationsAT = "reclamationsAT" + makeId();
var reclamationsColMalritime = ["datecreation", "numreclamation",  "nsinistre", "Statut" , "LastMessage", "client" ,"idcategorie"];                 
var reclamationsAT = {
    // Content
    id:"reclamationsAT",
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
						{view:"label", template:"<h1>Mes réclamations AT</h1> ", css:"h1"},
					]
				},
                {	
					type:"clean",
					padding:{
						top:5, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idReclamationsAT,
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
								{ id:reclamationsColMalritime[0], header:[ {text:"Date creation", css:{'text-align':'center'} },{ content:"textFilter" }], 
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
									if($$("list_AT_reclamations")){
										$$("list_AT_reclamations").close();
									}
									selectedRow = $$(idReclamationsAT).getSelectedItem();
									webix.ui({
										view:"window",
										id:"list_AT_reclamations",
										css: "list_AT_reclamations",
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
											{ view:"label", width:30, label: '<i style="margin-right: 10px;" class="fa fa-times" aria-hidden="true"></i>',  align: 'right', click:function(){ $$('list_AT_reclamations').close(); }}
											]
										},
										body:{
											borderless: true,
											rows: 
											[
												{
													view:"dataview", 
													id:"reclamationsATdataview",       
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
													id:"replay_AT_reclamation_form",
													borderless: true,
													elements:[
														{
															borderless:true,
															height:40,
															cols:
															[
																{ view:"textarea", id:"reply_msg_AT", name:"reply_msg_AT", width:300, borderless:true },
																{
																	width:50,
																	view:"uploader", upload:"//docs.webix.com/samples/server/upload",
																	id:"uploader_reply_AT_reclamation_file", name:"files",
																	link:"doclistAT", autosend:false,
																	multiple: false,
																	label:'<i class="fa fa-paperclip" aria-hidden="true"></i>'
																},
																
																{ 	
																	align:"right",
																	width:50,				
																	view:"button", 
																	label:'<i class="fa fa-paper-plane" aria-hidden="true"></i>',
																	css: "button_reclamation_add_file",
																	id:"uploader_reply_reclamation_file_AT",
																	click:function(){ 
																		var Message = $$("reply_msg_AT").getValue();
																		SelectedRow = $$(idReclamationsAT).getSelectedItem();
																		var IdSinistre_reply = SelectedRow.nsinistre;
																		if(Message){
																			checkReclamationATFormReply(mySession.getArrValue('lastMessage').Idreclamation, IdSinistre_reply, Message, "uploader_reply_AT_reclamation_file", 4);
																			var sel = $$(idReclamationsAT).getSelectedId();
																			var row = $$(idReclamationsAT).getItem(sel.row);
																			row["LastMessage"] = Message;
																			$$(idReclamationsAT).updateItem(sel.row, row);
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
																		CloturerReclamtaionAT(mySession.getArrValue('lastMessage').Idreclamation);
																		
																})
																.fail(function(){
																	return;
																});	
															}   
														}
														])
														,
														{ view:"list", scroll:true, id:"doclistAT", type:"uploader", autoheight:true, borderless:true	 },
														]
												}
											]
										}
									}).show();
								  renderReclamationsATListeByNumReclamation(selectedRow.numreclamation);
								  	if(selectedRow.statut == "Cloturée"){
										$$("reply_msg_AT").disable();
										$$("uploader_reply_reclamation_file_AT").disable();
										$$("uploader_reply_AT_reclamation_file").disable();
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
function CloturerReclamtaionAT(IdReclamation){
	var doc=AddAction(null,1,"RECLAMTIONClOTURE","PROCEDURE","ABZ","O");
	doc=AddParam(doc,1,0,"IdReclamation_",IdReclamation,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
	   webix.alert("Réclamation cloturée avec succés");
	   renderReclamationsATListe(4);
	   $$("list_AT_reclamations").close();
	}, function (obj, data, args) {
		webix.alert(data);
	}, [], false);
}
function showReclamationsATListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderReclamationsATListe(4);
    }else{
        $$(id).show();
    }
}

function renderReclamationsATListe(IdCategorie){
		var grid = $$(idReclamationsAT);
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

function renderReclamationsATListeByNumReclamation(NumReclamation){
	var grid = $$("reclamationsATdataview");
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
			$$('reclamationsATdataview').showItem($$('reclamationsATdataview').getLastId());
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}


function checkReclamationATFormReply(IdReclamation, IdSinistre, Message, uploaderId, Idcategorie){
	var obj_files = $$(uploaderId).files;
	var nbre_fics = 0;
	if (isAssigned(obj_files)) { 
	    nbre_fics=obj_files.count();
	};
	if (nbre_fics <= 0) {
		saveReclamationATFormReplay(IdReclamation, IdSinistre, Message, 0, obj_files, Idcategorie);
 
	}  else {
		saveReclamationATFormReplay(IdReclamation, IdSinistre, Message, 1, obj_files, Idcategorie)
	};
};

function saveReclamationATFormReplay(IdReclamation, IdSinistre, Message, nbre_fics, obj_files, Idcategorie){
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
		   $$("reply_msg_AT").setValue("");
		   renderReclamationsATListeByNumReclamation(selectedRow.numreclamation);
		   
		   

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
					$$("reply_msg_AT").setValue("");
		   			renderReclamationsATListeByNumReclamation(selectedRow.numreclamation);
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
// ------------------------ End reclamationsAT.js------------------------------------------------------------------------------

// ------------------------ Start reclamationsMaritime.js------------------------------------------------------------------------------
var idReclamationsMaritime = "reclamationsMaritime" + makeId();
var reclamationsColMalritime = ["datecreation", "numreclamation",  "nsinistre", "Statut" , "LastMessage", "client" ,"idcategorie"];                 



var reclamationsMaritime = {
    id:"reclamationsMaritime",
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
						{view:"label", template:"<h1>Mes réclamations maritime</h1> ", css:"h1"},
					]
				},
                {	
					type:"clean",
					padding:{
						top:5, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idReclamationsMaritime,
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
									if($$("list_maritime_reclamations")){
										$$("list_maritime_reclamations").close();
									}
									
									selectedRow = $$(idReclamationsMaritime).getSelectedItem();
									
									webix.ui({
										view:"window",
										id:"list_maritime_reclamations",
										css: "list_maritime_reclamations",
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
											{ view:"label", width:30, label: '<i style="margin-right: 10px;" class="fa fa-times" aria-hidden="true"></i>',  align: 'right', click:function(){ $$('list_maritime_reclamations').close(); }}
											]
										},
										body:{
											borderless: true,
											rows: 
											[
												{
													view:"dataview", 
													id:"reclamationsMaritimedataview",       
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
													id:"replay_maritime_reclamation_form",
													borderless: true,
													elements:[
														
														{
															borderless:true,
															height:40,
															cols:
															[
																{ view:"textarea", id:"reply_msg_maritime", name:"reply_msg_maritime", width:300, borderless:true },
																{
																	width:50,
																	view:"uploader", upload:"//docs.webix.com/samples/server/upload",
																	id:"uploader_reply_maritime_reclamation_file", name:"files",
																	link:"doclistmaritime", autosend:false,
																	multiple: false,
																	label:'<i class="fa fa-paperclip" aria-hidden="true"></i>'
																},
																
																{ 	
																	align:"right",
																	width:50,				
																	view:"button", 
																	label:'<i class="fa fa-paper-plane" aria-hidden="true"></i>',
																	css: "button_reclamation_add_file",
																	id: "button_reclamation_add_file_maritime",
																	click:function(){ 
																		var Message = $$("reply_msg_maritime").getValue();
																		SelectedRow = $$(idReclamationsMaritime).getSelectedItem();
																		var IdSinistre_reply = SelectedRow.nsinistre;
																		if(Message){
																			checkReclamationMaritimeFormReply(mySession.getArrValue('lastMessage').Idreclamation.Idreclamation, IdSinistre_reply, Message, "uploader_reply_maritime_reclamation_file", 2);
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
																		CloturerReclamtaionmaritime(mySession.getArrValue('lastMessage').Idreclamation.Idreclamation);
																		
																})
																.fail(function(){
																	return;
																});	
															}   
														}
														])
														,
														{ view:"list", scroll:true, id:"doclistmaritime", type:"uploader", autoheight:true, borderless:true	 },
														]
													
												}
											]
										}
									}).show();
								  renderReclamationsMaritimeListeByNumReclamation(selectedRow.numreclamation);
								  if(selectedRow.statut == "Cloturée"){
									$$("reply_msg_maritime").disable();
									$$("uploader_reply_maritime_reclamation_file").disable();
									$$("button_reclamation_add_file_maritime").disable();
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


function CloturerReclamtaionmaritime(IdReclamation){
	var doc=AddAction(null,1,"RECLAMTIONClOTURE","PROCEDURE","ABZ","O");
	doc=AddParam(doc,1,0,"IdReclamation_",IdReclamation,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
	   webix.alert("Réclamation cloturée avec succés");
	   renderReclamationsMaritimeListe(3);
	}, function (obj, data, args) {
		webix.alert(data);
	}, [], false);
}

function showReclamationsMaritimeListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderReclamationsMaritimeListe(3);
    }else{
        $$(id).show();
    }
}

function renderReclamationsMaritimeListe(IdCategorie){
		var grid = $$(idReclamationsMaritime);
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

function renderReclamationsMaritimeListeByNumReclamation(NumReclamation){
	var grid = $$("reclamationsMaritimedataview");
	grid.clearAll();


	var doc=AddAction(null,1,"GetReclamationMSG","SELECT","ACA","O");
	doc=AddParam(doc,1,0,"NumReclamation_",NumReclamation,"O");
	
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
		if(data.length>0){
			data = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));

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
			$$('reclamationsMaritimedataview').showItem($$('reclamationsMaritimedataview').getLastId());
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}


function checkReclamationMaritimeFormReply(IdReclamation, IdSinistre, Message, uploaderId, Idcategorie){
	var obj_files = $$(uploaderId).files;
	var nbre_fics = 0;
	if (isAssigned(obj_files)) { 
	    nbre_fics=obj_files.count();
	};
	if (nbre_fics <= 0) {
		saveReclamationmaritimeFormReplay(IdReclamation, IdSinistre, Message, 0, obj_files, Idcategorie);
 
	}  else {
		saveReclamationmaritimeFormReplay(IdReclamation, IdSinistre, Message, 1, obj_files, Idcategorie)
	};
};

function saveReclamationmaritimeFormReplay(IdReclamation, IdSinistre, Message, nbre_fics, obj_files, Idcategorie){
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
		   $$("reply_msg_maritime").setValue("");
		   renderReclamationsMaritimeListeByNumReclamation(selectedRow.numreclamation);
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
					$$("reply_msg_maritime").setValue("");
		   			renderReclamationsMaritimeListeByNumReclamation(selectedRow.numreclamation);
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
// ------------------------ End reclamationsMaritime.js------------------------------------------------------------------------------

// ------------------------ Start reclamationsMaladie.js------------------------------------------------------------------------------
var idReclamationsMaladie = "reclamationsMaladie" + makeId();
var reclamationsColMaladie = ["datecreation", "numreclamation",  "nsinistre", "Statut" , "LastMessage", "client" ,"idcategorie"];                 



var reclamationsMaladie = {
    id:"reclamationsMaladie",
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
						{view:"label", template:"<h1>Mes réclamations Maladie</h1> ", css:"h1"},
					]
				},
                {	
					type:"clean",
					padding:{
						top:5, bottom:10, left:20, right:30
					},
					cols:[
						{
							id:idReclamationsMaladie,
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
								{ id:reclamationsColMaladie[0], header:[ {text:"Date creation", css:{'text-align':'center'} },{ content:"textFilter" }], 
								minWidth:100, sort:'ntsDate', css:{'text-align':'center'},  format: webix.Date.dateToStr("%d/%m/%Y") ,fillspace:true
							 	},
								{ id:reclamationsColMaladie[1], header:[ {text:"Num reclamation", css:{'text-align':'center'} },{ content:"textFilter" }] , sort:'ntsSortDecimal', css:{'text-align':'center'}, fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:reclamationsColMaladie[2], header:[ {text:"Num sinistre", css:{'text-align':'center'} },{ content:"textFilter" }] , sort:'ntsSortDecimal', css:{'text-align':'center'},fillspace:true, footer:{content:'totalColumns',css:'right nts_font_13'}},
								{ id:reclamationsColMaladie[4], header:[ {text:"Dernier message", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'left'}},
								{ id:reclamationsColMaladie[5], header:[ {text:"Client", css:{'text-align':'center'} },{ content:"textFilter" } ], sort:"string",fillspace:true, css:{'text-align':'left'}},
								{ id:reclamationsColMaladie[3], header:[ {text:"Statut", css:{'text-align':'center'} } ], css:{'text-align':'center'}, sort:"string", template:"<span class='statut_#statutClass#'>#statut#</span>",sort:"string", minWidth:100,fillspace:true},
							],
							scheme:{
								$init:function(obj){
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
									if($$("list_maladie_reclamations")){
										$$("list_maladie_reclamations").close();
									}
									
									selectedRow = $$(idReclamationsMaladie).getSelectedItem();
				
									webix.ui({
										view:"window",
										id:"list_maladie_reclamations",
										css: "list_maladie_reclamations",
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
											{ view:"label", width:30, label: '<i style="margin-right: 10px;" class="fa fa-times" aria-hidden="true"></i>',  align: 'right', click:function(){ $$('list_maladie_reclamations').close(); }}
											]
										},
										body:{
											borderless: true,
											rows: 
											[
												{
													view:"dataview", 
													id:"reclamationsMaladiedataview",       
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
													id:"replay_maladie_reclamation_form",
													borderless: true,
													elements:[
														{
															borderless:true,
															height:40,
															cols:
															[
																{ view:"textarea", id:"reply_msg_maladie", name:"reply_msg_maladie", width:300, borderless:true },
																{
																	width:50,
																	view:"uploader",
																	id:"uploader_reply_reclamation_file_maladie", name:"files",
																	link:"doclistMaladie", autosend:false,
																	multiple: false,
																	label:'<i class="fa fa-paperclip" aria-hidden="true"></i>'
																},
																{ 	
																	align:"right",
																	width:50,				
																	view:"button", 
																	label:'<i class="fa fa-paper-plane" aria-hidden="true"></i>',
																	css: "button_reclamation_add_file",
																	id:"button_reclamation_add_file_maladie",
																	click:function(){ 
																		var Message = $$("reply_msg_maladie").getValue();
																		SelectedRow = $$(idReclamationsMaladie).getSelectedItem();
																		var IdSinistre_reply = SelectedRow.nsinistre;
																		if(Message){
																			checkReclamationMaladieFormReply(mySession.getArrValue('lastMessage').Idreclamation, IdSinistre_reply, Message, "uploader_reply_reclamation_file_maladie", 1);
																			var sel = $$(idReclamationsMaladie).getSelectedId();
																			var row = $$(idReclamationsMaladie).getItem(sel.row);
																			row["LastMessage"] = Message;
																			$$(idReclamationsMaladie).updateItem(sel.row, row);
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
																		CloturerReclamtaionMaladie(mySession.getArrValue('lastMessage').Idreclamation);
																})
																.fail(function(){
																	return;
																});	
															}   
														},
														]),
														
														{ view:"list", scroll:true, id:"doclistMaladie", type:"uploader", autoheight:true, borderless:true	 },
														]
												}
											]
										}
									}).show();
								  renderReclamationsMaladieListeByNumReclamation(selectedRow.numreclamation);
								  if(selectedRow.statut == "Cloturée"){
									$$("reply_msg_maladie").disable();
									$$("uploader_reply_reclamation_file_maladie").disable();
									$$("button_reclamation_add_file_maladie").disable();
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

function CloturerReclamtaionMaladie(IdReclamation){
	var doc=AddAction(null,1,"RECLAMTIONClOTURE","PROCEDURE","ABZ","O");
	doc=AddParam(doc,1,0,"IdReclamation_",IdReclamation,"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {
	   webix.alert("Réclamation cloturée avec succés");
	   renderReclamationsMaladieListe(1);
	   $$("list_maladie_reclamations").close();
	}, function (obj, data, args) {
		webix.alert(data);
	}, [], false);
}

function showReclamationsMaladieListe(loadData, id) {
    if(loadData){       
        $$(id).show();
        renderReclamationsMaladieListe(1);
    }else{
        $$(id).show();
    }
}

function renderReclamationsMaladieListe(IdCategorie){
		var grid = $$(idReclamationsMaladie);
		grid.clearAll();

		var doc=AddAction(null,1,"RECLAMATIONAUTOLIST","SELECT","ABY","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,1,2,"IdCategorie_",IdCategorie,"O");
		
		var xml=XML2String(doc);
		ExecuteCommand("P", "AOOA", xml, function (obj, data, args) {

			if(data.length>0){
				var Adata = csv2ARRAY(data,String.fromCharCode(3),String.fromCharCode(2));
				var tmp = convertToArrayOfObjects(Adata, reclamationsColMaladie);
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

function renderReclamationsMaladieListeByNumReclamation(NumReclamation){
	var grid = $$("reclamationsMaladiedataview");
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
			$$('reclamationsMaladiedataview').showItem($$('reclamationsMaladiedataview').getLastId());
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}


function checkReclamationMaladieFormReply(IdReclamation, IdSinistre, Message, uploaderId, Idcategorie){
	var obj_files = $$(uploaderId).files;
	var nbre_fics = 0;
	if (isAssigned(obj_files)) { 
	    nbre_fics=obj_files.count();
	};
	if (nbre_fics <= 0) {
		saveReclamationMaladieFormReplay(IdReclamation, IdSinistre, Message, 0, obj_files, Idcategorie);
 
	}  else {
		saveReclamationMaladieFormReplay(IdReclamation, IdSinistre, Message, 1, obj_files, Idcategorie)
	};
};

function saveReclamationMaladieFormReplay(IdReclamation, IdSinistre, Message, nbre_fics, obj_files, Idcategorie){
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
		ExecuteCommand("P", "AOOA", xml, function (obj, data, args, Idcategorie) {
		   $$("reply_msg_maladie").setValue("");
		   renderReclamationsMaladieListeByNumReclamation(selectedRow.numreclamation);
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
		r.onload=function(e, ){
			if((r.readyState===4)&&(r.status===200)){
					var myBuffer=arrayBufferToString(this.response);
					const Obj = JSON.parse(myBuffer);					
					if(isAssigned(Obj.error)){
						webix.alert(Obj.error);
						return;
					};					
					$$("reply_msg_maladie").setValue("");
		   			renderReclamationsMaladieListeByNumReclamation(selectedRow.numreclamation);
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
// ------------------------ End reclamationsMaladie.js------------------------------------------------------------------------------

// ------------------------ Start reclamationsRD.js------------------------------------------------------------------------------
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
// ------------------------ End reclamationsRD.js------------------------------------------------------------------------------

// ------------------------ Start statistiquesSinistreAutoPopup.js------------------------------------------------------------------------------
var StatistiquesSinistresAutoPop = {	
	id:"my_pop_sinistres_auto",
	view:"window",
	css:"bg-main window_popup_statistic",
	type:"space", 
	maxHeight:600,
	maxWidth:1000,
	responsive:true,
	close:true,
	modal:true,
	position:"center",
	move:true,
	resize:true,
	padding:3,
		body:{
		css:"bg-main",
		type:"space", 
		padding:20, 
		rows:[
			{
				css:"bg-main",
				type:"space", 
				borderless: true,
				template: "<h1>Statistiques des sinistres auto </h1>",
				height:50,
			},
			{
				view:"label", template:"<h2>Nombre de sinistres automobile declarés par exercice</h2> ", css:"ml4 colorRose Bold",height:30
			},
			{
				cols:[
					{
						width: 20
				   	},
					{
						css: "tbHome3",
						view:"chart",
						id: "barchart_auto",
						type:"bar",
						value:"#NbrSin#",
						label:"Nbre Sin. #NbrSin#",
						barWidth:35,
						borderless: true,
						radius:0,
						yAxis:{
							title:"Nbre sinistres"
						},
						xAxis:{
							template: "#year#",
							title:"Année"
						},
						data:[]
					}
				]
			},
			{
				view:"label", template:"<h2>Détail par mois</h2> ", css:"ml4 colorRose Bold"
			},
			{
				borderless: true,
				cols:[
					{
						borderless: true,
						padding:0,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
			
							{
								template:"<center><h1>"+Years_lists[2]+"</h1></center>",
								height: 40
							},
							{
								id:"chartPreviousOfPreviousYearAuto",
								borderless: true,
								view:"chart",
								type:"bar",
								label:"#nbre#",
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}
						]
					}, 
					{
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
			
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[1]+"</h1><c/enter>",
								height: 40
							},
							{
								id:"chartPreviousYearAuto", 
								view: "chart",
								view:"chart",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								label:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}
						]
					},
					{
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
			
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[0]+"</h1><c/enter>",
								height: 40
							},
							{
								id:"chartCurrentYearAuto", 
								view: "chart",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								//label:"#Pourcent#%",
								label:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}
						]
					},
					
					
				]
			}
		],
	  
	}
};

function renderAllSinisterByYear(){
	// show the popup
	webix.ui(StatistiquesSinistresAutoPop).show();
		// data for bar chart
	var doc=AddAction(null,1,"EspEvolutionAutoAnn","SELECT","ABO","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
		// data for 3Dchart of year Current
		doc=AddAction(doc,2,"EspEvolutionAutoCurrentYear","SELECT","ABP","O");
		doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,2,2,"Annee_",Years_lists[0],"N");

		// data for 3Dchart of Previous year 
		doc=AddAction(doc,3,"ESPEVOLUTIONAUTOPREVIOUSYEAR","SELECT","ABP","O");
		doc=AddParam(doc,3,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,3,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,3,2,"Annee_",Years_lists[1],"N");

		// data for 3Dchart of Previous of Previous year
		doc=AddAction(doc,4,"EspEvolutionAutoPreviousOfPreviousMonth","SELECT","ABP","O");
		doc=AddParam(doc,4,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,4,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,4,2,"Annee_",Years_lists[2],"N");

	var xml=XML2String(doc);
	let data = [];
	var resultsData = [];
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
	var zArr=splitString(data,5);
	for(var i=0; i<zArr.length; i++){
		var doc=splitString(zArr[i],4);
		if(doc[4].length>3){
			webix.message('Error !!!'+doc[4]);
		// barchart_auto
		} else if((doc[2]==="ESPEVOLUTIONAUTOANN")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("barchart_auto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["NbrSin", "year"]);
			$$("barchart_auto").parse(jdata);

		// paie chart CURRENT YEAR
		}else if ((doc[2]==="ESPEVOLUTIONAUTOCURRENTYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartCurrentYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartCurrentYearAuto").parse(jdata);
		
		// paie chart CURRENT YEAR
		} else if ((doc[2]==="ESPEVOLUTIONAUTOPREVIOUSYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartPreviousYearAuto").parse(jdata);
		
		// data for 3Dchart of Previous of Previous year
		}else if ((doc[2]==="ESPEVOLUTIONAUTOPREVIOUSOFPREVIOUSMONTH")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousOfPreviousYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
		
			$$("chartPreviousOfPreviousYearAuto").parse(jdata);
		}
	}
		
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
	
}	
// ------------------------ End statistiquesSinistreAutoPopup.js------------------------------------------------------------------------------

// ------------------------ Start statistiquesSinistreMaladiePopup.js------------------------------------------------------------------------------
var statistiquesSinistreMaladiePopup = {	
	id:"my_pop_sinistre_maladie",
	view:"window",
	css:"bg-main window_popup_statistic",
	type:"space", 
	maxHeight:600,
	maxWidth:1000,
	resize:true,
	modal:true,
	close:true,
	position:"center",
	move:true,
	margin:0,
	padding:3,
		body:{
		css:"bg-main",
		type:"space", 
		padding:20, 
		rows:[
			{
				css:"bg-main",
				type:"space", 
				borderless: true,
				template: "<h1>Statistiques des sinistres maladie </h1>",
				height:50,
			},
			{
				view:"label", template:"<h2>Nombre de sinistres maladie declarés par exercice</h2> ", css:"ml4 colorRose Bold",height:30
			},
			{
				cols:[
					{
						width: 20
				   	},
					{
						css: "tbHome3",
						view:"chart",
						id: "barchart_maladie",
						type:"bar",
						value:"#NbrSin#",
						label:"Nbre Sin. #NbrSin#",
						barWidth:35,
						borderless: true,
						radius:0,
						yAxis:{
							title:"Nbre sinistres"
						},
						xAxis:{
							template: "#year#",
							title:"Année"
						},
						data:[]
					},
				]
			},
			{
				view:"label", template:"<h2>Détail par mois</h2> ", css:"ml4 colorRose Bold"
			},
			{
				borderless: true,
				cols:[
					{
						borderless: true,
						padding:0,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								template:"<center><h1>"+Years_lists[2]+"</h1></center>",
								height: 40
							},
							{
								id:"chartPreviousOfPreviousYearAuto",
								borderless: true,
								view:"chart",
								type:"bar",
								label:"#nbre#",
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}
						]
					},
					{
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[1]+"</h1></center>",
								height: 40
							},
							{
								id:"chartPreviousYearAuto", 
								view: "chart",
								view:"chart",
								label:"#nbre#",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}
						]
					},
					{
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[0]+"</h1></center>",
								height: 40
							},
							{
								id:"chartCurrentYearAuto", 
								view: "chart",
								view:"chart",
								label:"#nbre#",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}
						]
					}
				]
			}
		],
	}
};

function renderAllSinisterMaladieByYear(){
	console.log(Years_lists[0], Years_lists[1], Years_lists[2]);
	// show the popup
	webix.ui(statistiquesSinistreMaladiePopup).show();
	
	$$("my_pop_sinistre_maladie").show();

		// data for bar chart
	var doc=AddAction(null,1,"EspEvolutionMaladieAnn","SELECT","ABQ","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");

		// data for 3Dchart of year Current EspEvolutionAutoPreviousOfPreviousYear
		doc=AddAction(doc,2,"EspEvolutionAutoPreviousOfPreviousYear","SELECT","ABR","O");
		doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,2,2,"Annee_",Years_lists[2],"O");

		// data for 3Dchart of Previous year 
		doc=AddAction(doc,3,"ESPEVOLUTIONMALADIEPREVIOUSYEAR","SELECT","ABR","O");
		doc=AddParam(doc,3,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,3,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,3,2,"Annee_",Years_lists[1],"O");

		// data for 3Dchart of Previous of Previous year
		doc=AddAction(doc,4,"EspEvolutionMaladieCurrentYear","SELECT","ABR","O");
		doc=AddParam(doc,4,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,4,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,4,2,"Annee_",Years_lists[0],"O");

	var xml=XML2String(doc);
	let data = [];
	var resultsData = [];
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
	var zArr=splitString(data,5);
	for(var i=0; i<zArr.length; i++){
		var doc=splitString(zArr[i],4);
		if(doc[4].length>3){
			webix.message('Error !!!'+doc[4]);
		// barchart_maladie
		} else if((doc[2]==="ESPEVOLUTIONMALADIEANN")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("barchart_maladie").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["NbrSin", "year"]);
			$$("barchart_maladie").parse(jdata);

		// paie chart Previous YEAR
		}else if ((doc[2]==="ESPEVOLUTIONMALADIECURRENTYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartCurrentYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartCurrentYearAuto").parse(jdata);
		
		// paie chart Previous Year
		} else if ((doc[2]==="ESPEVOLUTIONMALADIEPREVIOUSYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartPreviousYearAuto").parse(jdata);
		
		// paie chart Previous of Previous YEAR
		}else if ((doc[2]==="ESPEVOLUTIONAUTOPREVIOUSOFPREVIOUSYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousOfPreviousYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartPreviousOfPreviousYearAuto").parse(jdata);
		}
	}
		
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
	
}	
// ------------------------ End statistiquesSinistreMaladiePopup.js------------------------------------------------------------------------------

// ------------------------ Start statistiquesSinistreMaritimePopup.js------------------------------------------------------------------------------
var statistiquesSinistreMaritimePopup = {	
	id:"my_pop_sinistre_Maritime",
	view:"window",
	css:"bg-main window_popup_statistic",
	type:"space", 
	maxHeight:600,
	maxWidth:1000,
	resize:true,
	close:true,
	position:"center",
	move:true,
	modal:true,
	margin:0,
	padding:3,
		body:{
		css:"bg-main",
		type:"space", 
		padding:20, 
		rows:[
			{
				css:"bg-main",
				type:"space", 
				borderless: true,
				template: "<h1>Statistiques des sinistres Transport </h1>",
				height:50,
			},
			{
				view:"label", template:"<h2>Nombre de sinistres maritime declarés par exercice</h2> ", css:"ml4 colorRose Bold",height:30
			},
			{
				cols:[
					{
						width: 20
				   	},
					{
						css: "tbHome3",
						view:"chart",
						id: "barchart_maritime",
						type:"bar",
						value:"#NbrSin#",
						label:"Nbre Sin. #NbrSin#",
						barWidth:35,
						borderless: true,
						radius:0,
						yAxis:{
							title:"Nbre sinistres"
						},
						xAxis:{
							template: "#year#",
							title:"Année"
						},
						data:[]
					},
				]
			},
			{
				view:"label", template:"<h2>Détail par mois</h2> ", css:"ml4 colorRose Bold"
			},
			{
				borderless: true,
				cols:[
					{
						borderless: true,
						padding:0,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
			
							{
								template:"<center><h1>"+Years_lists[2]+"</h1></center>",
								height: 40
							},
							{
								id:"chartMaritimePreviousOfPreviousYear",
								borderless: true,
								view:"chart",
								type:"bar",
								label:"#nbre#",
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					},
					{
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
			
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[1]+"</h1></center>",
								height: 40
							},
							{
								id:"chartPreviousYearAuto", 
								view: "chart",
								view:"chart",
								label:"#nbre#",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					},
					{
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[0]+"</h1></center>",
								height: 40
							},
							{
								id:"chartMaritimeCurrentYear", 
								view: "chart",
								view:"chart",
								label:"#nbre#",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
						
					},
				]
			}
		],
	  
	}
};

function renderAllSinisterMaritimeByYear(){
	// show the popup
	webix.ui(statistiquesSinistreMaritimePopup).show();

		// data for bar chart
	var doc=AddAction(null,1,"EspEvolutionMaritimeAnn","SELECT","ABS","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");

		// data for chart of Previous of Previous year 
		doc=AddAction(doc,2,"EspEvolutionMaritimePreviousOfPreviousMonth","SELECT","ABT","O");
		doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,2,2,"Annee_",Years_lists[2],"O");
		// data for chart of Previous year
		doc=AddAction(doc,3,"EspEvolutionMaritimePreviousYear","SELECT","ABT","O");
		doc=AddParam(doc,3,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,3,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,3,2,"Annee_",Years_lists[1],"O");
		// data for 3Dchart of year 2022
		doc=AddAction(doc,4,"EspEvolutionMaritimeCurrentYear","SELECT","ABT","O");
		doc=AddParam(doc,4,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,4,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,4,2,"Annee_",Years_lists[0],"O");

	var xml=XML2String(doc);
	let data = [];
	var resultsData = [];
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
	var zArr=splitString(data,5);
	for(var i=0; i<zArr.length; i++){
		var doc=splitString(zArr[i],4);
		if(doc[4].length>3){
			webix.message('Error !!!'+doc[4]);
		// barchart_maritime
		} else if((doc[2]==="ESPEVOLUTIONMARITIMEANN")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("barchart_maritime").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["NbrSin", "year"]);
			$$("barchart_maritime").parse(jdata);

		// data for chart of Previous of Previous year 
		}else if ((doc[2]==="ESPEVOLUTIONMARITIMEPREVIOUSOFPREVIOUSMONTH")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartMaritimePreviousOfPreviousYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartMaritimePreviousOfPreviousYear").parse(jdata);
		
		// data for chart of Previous year 
		} else if ((doc[2]==="ESPEVOLUTIONMARITIMEPREVIOUSYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousYearAuto").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartPreviousYearAuto").parse(jdata);
		
		// data for chart Current year
		}else if ((doc[2]==="ESPEVOLUTIONMARITIMECURRENTYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartMaritimeCurrentYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartMaritimeCurrentYear").parse(jdata);
		}
	}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
	
}	
// ------------------------ End statistiquesSinistreMaritimePopup.js------------------------------------------------------------------------------

// ------------------------ Start statistiquesSinistreATPopup.js------------------------------------------------------------------------------
var statistiquesSinistreATPopup = {	
	id:"my_pop_sinistre_AT",
	view:"window",
	css:"bg-main window_popup_statistic",
	type:"space", 
	maxHeight:600,
	maxWidth:1000,
	resize:true,
	modal:true,
	close:true,
	position:"center",
	move:true,
	margin:0,
	padding:3,
		body:{
		css:"bg-main",
		type:"space", 
		padding:20, 
		rows:[
			{
				css:"bg-main",
				type:"space", 
				borderless: true,
				template: "<h1>Statistiques des sinistres AT </h1>",
				height:50,
			},
			{
				view:"label", template:"<h2>Nombre de sinistres AT declarés par exercice</h2> ", css:"ml4 colorRose Bold",height:30
			},
			{
				cols:[
					{
						width: 20
				   	},
					{
						css: "tbHome3",
						view:"chart",
						id: "barchart_AT",
						type:"bar",
						value:"#NbrSin#",
						label:"Nbre Sin. #NbrSin#",
						barWidth:35,
						borderless: true,
						radius:0,
						yAxis:{
							title:"Nbre sinistres"
						},
						xAxis:{
							template: "#year#",
							title:"Année"
						},
						data:[]
					},
				]
				
			},
			{
				view:"label", template:"<h2>Détail par mois</h2> ", css:"ml4 colorRose Bold"
			},
			{
				borderless: true,
				cols:[

					{
						borderless: true,
						padding:0,
						width: 250,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								template:"<center><h1>"+Years_lists[2]+"</h1></center>",
								height: 40
							},
							{
								id:"chartATPreviousOfPreviousYear",
								borderless: true,
								view:"chart",
								type:"bar",
								label:"#nbre#",
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					},
					{
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
			
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[1]+"</h1></center>",
								height: 40
							},
							{
								id:"chartPreviousYearAT", 
								view: "chart",
								view:"chart",
								label:"#nbre#",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					},
					{
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[0]+"</h1></center>",
								height: 40
							},
							{
								id:"chartAtCurrentYear", 
								view: "chart",
								view:"chart",
								label:"#nbre#",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					},
				]
			}
		],
	}
};

function renderAllSinisterATByYear(){
	// show the popup
	webix.ui(statistiquesSinistreATPopup).show();

		// data for bar chart
	var doc=AddAction(null,1,"EspEvolutionATAnn","SELECT","ABM","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");

		// data for Previous Of Previous of Previous Year
		doc=AddAction(doc,2,"EspEvolutionATPreviousOfPreviousMonth","SELECT","ABN","O");
		doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,2,2,"Annee_",Years_lists[2],"O");

		// data for 3Dchart of year 2021
		doc=AddAction(doc,3,"EspEvolutionATPreviousYear","SELECT","ABN","O");
		doc=AddParam(doc,3,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,3,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,3,2,"Annee_",Years_lists[1],"O");

		// data for chart current year
		doc=AddAction(doc,4,"EspEvolutionATCurrentYear","SELECT","ABN","O");
		doc=AddParam(doc,4,0,"IdUser_",mySession.getIdUser(),"O");
        doc=AddParam(doc,4,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,4,2,"Annee_",Years_lists[0],"O");

	var xml=XML2String(doc);
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
	var zArr=splitString(data,5);
	for(var i=0; i<zArr.length; i++){
		var doc=splitString(zArr[i],4);
		
		if(doc[4].length>3){
			webix.message('Error !!!'+doc[4]);
		// barchart_AT
		} else if((doc[2]==="ESPEVOLUTIONATANN")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("barchart_AT").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["NbrSin", "year"]);
			$$("barchart_AT").parse(jdata);

		// data for chart of Previous of Previous year 
		}else if ((doc[2]==="ESPEVOLUTIONATPREVIOUSOFPREVIOUSMONTH")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartATPreviousOfPreviousYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartATPreviousOfPreviousYear").parse(jdata);
		
		// data for chart of Previous year 
		} else if ((doc[2]==="ESPEVOLUTIONATPREVIOUSYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousYearAT").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartPreviousYearAT").parse(jdata);
		
		// data for chart of year Current
		}else if ((doc[2]==="ESPEVOLUTIONATCURRENTYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartAtCurrentYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartAtCurrentYear").parse(jdata);
		}
	}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
	
}	
// ------------------------ End statistiquesSinistreATPopup.js------------------------------------------------------------------------------

// ------------------------ Start statistiquesSinistreRDPopup.js------------------------------------------------------------------------------
var StatistiquesSinistresRDPop = {	
	id:"my_pop_sinistres_rd",
	view:"window",
	css:"bg-main window_popup_statistic",
	type:"space", 
	maxHeight:600,
	maxWidth:1000,
	responsive:true,
	close:true,
	modal:true,
	position:"center",
	move:true,
	resize:true,
	padding:3,
		body:{
		css:"bg-main",
		type:"space", 
		padding:20, 
		rows:[
			{
				css:"bg-main",
				type:"space", 
				borderless: true,
				template: "<h1>Statistiques des sinistres RD </h1>",
				height:50,
			},
			{
				view:"label", template:"<h2>Nombre de sinistres RD declarés par exercice</h2> ", css:"ml4 colorRose Bold",height:30
			},
			{
				cols:[
					{
						width: 20
				   	},
					{
						css: "tbHome3",
						view:"chart",
						type:"bar",
						id: "barchart_rd",
						type:"bar",
						value:"#NbrSin#",
						label:"Nbre Sin. #NbrSin#",
						barWidth:35,
						borderless: true,
						radius:0,
						yAxis:{
							title:"Nbre sinistres"
						},
						xAxis:{
							template: "#year#",
							title:"Année"
						},
						data:[]
					}
				]
			},
			{
				view:"label", template:"<h2>Détail par mois</h2> ", css:"ml4 colorRose Bold"
			},
			{
				borderless: true,
				cols:[
					{
						borderless: true,
						padding:0,
						width: 250,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								template:"<center><h1>"+Years_lists[2]+"</h1></center>",
								height: 40
							},
							{
								id:"chartRDPreviousOfPreviousYear", 
								borderless: true,
								view:"chart",
								type:"bar",
								label:"#nbre#",
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,
								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					}, 
					{
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[1]+"</h1></center>",
								height: 40
							},
							{
								id:"chartPreviousYearRD", 
								view: "chart",
								view:"chart",
								label:"#nbre#",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,
								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					},
					{
						
						padding:0, 
						borderless: true,
						css:{"border-radius": "16px", "margin-left": "8px !important"},
						rows:[
							{
								borderless: true,
								template:"<center><h1>"+Years_lists[0]+"</h1></center>",
								height: 40
							},
							{
								id:"chartRDCurrentYear", 
								view: "chart",
								view:"chart",
								label:"#nbre#",
								type:"bar",
								borderless: true,
								value:"#nbre#",
								border:true,
								barWidth:20,
								radius:0,

								yAxis:{
									title:"Nbre sinistres"
								},
								xAxis:{
									template: "#mois#",
									title:"mois"
								},
								data:[]
							}

						]
					}
					
				]
			}
		],
	  
	}
};
function renderAllSinisterRD(){
	// show the popup
	webix.ui(StatistiquesSinistresRDPop).show();

		// data for bar chart
	var doc=AddAction(null,1,"EspEvolutionRDAnn","SELECT","ABU","O");
		doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");
		// data for 3Dchart of year Current
		doc=AddAction(doc,2,"EspEvolutionRDCurrentYear","SELECT","ABV","O");
		doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,2,3,"Annee_",Years_lists[0],"O");

		// data for 3Dchart of Previous year 
		doc=AddAction(doc,3,"ESPEVOLUTIONRDPREVIOUSYEAR","SELECT","ABV","O");
		doc=AddParam(doc,3,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,3,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,3,2,"Annee_",Years_lists[1],"O");

		// data for 3Dchart of Previous of Previous year
		doc=AddAction(doc,4,"EspEvolutionRDPreviousOfPreviousMonth","SELECT","ABV","O");
		doc=AddParam(doc,4,0,"IdUser_",mySession.getIdUser(),"O");
		doc=AddParam(doc,4,1,"IdSession_",mySession.getGuid(),"O");
		doc=AddParam(doc,4,2,"Annee_",Years_lists[2],"O");

	var xml=XML2String(doc);
	let data = [];
	var resultsData = [];
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
	var zArr=splitString(data,5);
	
	for(var i=0; i<zArr.length; i++){
		var doc=splitString(zArr[i],4);
		if(doc[4].length>3){
			webix.message('Error !!!'+doc[4]);
		// barchart_rd
		} else if((doc[2]==="ESPEVOLUTIONRDANN")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("barchart_rd").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["NbrSin", "year"]);
			$$("barchart_rd").parse(jdata);

		// paie chart CURRENT YEAR
		}else if ((doc[2]==="ESPEVOLUTIONRDCURRENTYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartRDCurrentYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartRDCurrentYear").parse(jdata);
		
		// paie chart CURRENT YEAR
		} else if ((doc[2]==="ESPEVOLUTIONRDPREVIOUSYEAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartPreviousYearRD").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartPreviousYearRD").parse(jdata);
		
		// data for 3Dchart of Previous of Previous year
		}else if ((doc[2]==="ESPEVOLUTIONRDPREVIOUSOFPREVIOUSMONTH")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
			$$("chartRDPreviousOfPreviousYear").clearAll();
			var jdata = csv2JSON(doc[5],String.fromCharCode(3),String.fromCharCode(2),["mois", "nbre", "Pourcent"]);
			$$("chartRDPreviousOfPreviousYear").parse(jdata);
		}
	}
		
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
	
}	

	
// ------------------------ End statistiquesSinistreRDPopup.js------------------------------------------------------------------------------

// ------------------------ Start index.js------------------------------------------------------------------------------
/** Tableau de bord 2eme design */
var idTablBord3 = "TB3" + makeId();
var idTablBord4 = "TB4" + makeId();
var tableauBord2 = {	
	
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:3,
	id:"tableauBord2",
	cols:[
		{
			css:"tableau-bord",
			rows:[
				{	
					height:40,
					cols:[
						{ width:20, },
						{	
							view:"label", template:"<h1>Tableau de bord</h1>", css:"h1",
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
						}
						///********************* END USER GUIDE */
						
					]
				},
				{	
					height:20,

					cols:[
						{ width:24, },
						{	
							view:"label", template:"<h2>Production</h2>", css:"h2 sm ",
						},
					]
				},
				{	
					type:"clean",
					padding:15,
					margin:0,
					height:230,
					cols:[
						{
							rows:[
								{
									view:"dataview", 
									id:idTablBord3,
									css:"dataviewTB3",
                                    scroll:"auto",
									autoheight:true,
									padding:0,
									type: {
										height:"auto",
                                        width: 280,
                                        css:""
									},
									template:'<div class="tbHome3 #colorNB# statut_#Statut#" > <div class="tbDet1"> <span class="titre statut_#Statut#"> #Title#</span> <span class="valeur statut_#Statut#"" data=#valeur# style="opacity: #opacity#">0</span> <span class="sousTitre" style="opacity: #opacity#">Prime Annuelle à date</span> </div> <div class="tbDet2"> <img #img_center# src="./tools/images/#imageSTR#" width="auto" /> <div class="rowView pR5" style="opacity: #opacity#"> <span class="valeur statut_#Statut#"" data=#MtRegle#>0</span> <span class="titre subTitle2">MONTANT REGLÉ</span> <span class="valeur statut_#Statut#"" data="#Solde#">0</span> <span class="titre">RESTANT DU</span> </div> </div> </div>',
									ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
									data:[],
								}
								
							]
						}
					]
				},			
				{	
					height:20,

					cols:[
						{ width:24, },
						{	
							view:"label", template:"<h2>Sinistres</h2>", css:"h2 sm ",
						},
					]
					
				},			
				{	
					type:"clean",
					padding:15,
					margin:0,
					
					cols:[
						{
							rows:[
								{
									
									view:"dataview", 
									id:idTablBord4,
									css:"dataviewTB4",
									scroll:"auto",
									autoheight:true,
									minHeight:200,
									padding:0,
									type: {
										height:180,
                                        width: 280,
                                        css:""
									},
									template:'<div class="tbHome4 #colorNB# statut_#Statut#"> <div class="tbSinistre"><span class="sinistre statut_#Statut#">#Title#</span></div><div class="tbDet3"> <span class="col"><span class="nbS statut_#Statut#">#nbSinistres# </span><span class="subTitle statut_#Statut#">SINISTRES</span></span> <span class="col"><span class="nbS statut_#Statut#">#nbDossiers# </span><span class="subTitle statut_#Statut#">DOSSIERS<br/>OUVERTS</span></span> </div><div class="tbDet4"> <span class="valeur statut_#Statut#" data=#valeur#>0</span> <span class="subTitle2 statut_#Statut#">MONTANT REMBOURSé</span> </div></div>',
									ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
									data:[]
								},
							]
						}
					]
				},
			]
		}
	]
};
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
					label:"Guide d'utilisation",
					align:"center",
					css:"title1",
				  },
				  {height:20,},
				  {
					height:150,
					view:"label",
					template:"<img src='./tools/images/business-3d-robot.png' style='height:150px; width:auto;'>",
					align:"center",
				  },
				  {height:20},
				  {
					id:"helplist",
					view:"grouplist", 
					css:"helplist",
					scroll:true,
					click:function(id, obj, arg){
						var item = this.getItem(id);
              			

						var data = [
							{ id:0, "top": 500, "left": 400, "width": 100, "height":300, "objID":0, "text": ""},
							{ id:1, "top": 60, "left": 10, "width": 400, "height":200, "objID":1, "text": "<body>Cette page est publicitaire.<br><br> Vous y trouverez nos offres et activités (paramétrable par l'intermédiaire en assurance)</body>"},
							{ id:2, "top": 120, "left": 10, "width": 400, "height":170, "objID":2, "text": "Cette page est la page d'accueil de cet espace. Vous y trouverez vos chiffres clés relatifs à vos contrats et sinistres"},
							{ id:3, "top": 120, "left": 10, "width": 400, "height":220, "objID":3, "text": "<p>Dans ce menu, vous trouverez les principales informations relatives à vos contrats en cours.</p><br>Vous trouverez une explication détaillée pour la branche automobile."},
							{ id:4, "top": 180, "left": 10, "width": 400, "height":200, "objID":4, "text": "Dans ce menu, vous trouverez les principales informations relatives à vos sinistres en cours.<br>Vous trouverez une explication détaillée pour la branche automobile."},
							{ id:5, "top": 215, "left": 10, "width": 400, "height":170, "objID":5, "text": "Cet onglet vous permettra de visualiser vos quittances réglées et non réglées à date"},
							{ id:6, "top": 250, "left": 10, "width": 400, "height":170, "objID":6, "text": "Ce module vous permettra de nous soumettre vos réclamations ou questions relatives à un/des sinistre(s)"},
							
						];
						args = [
							{ id: 1,left: 50, top: 50}
						];
						showHelpWindow(data, item);
						$$('helppopupMenu').hide();
					},
					template:"<span class='listHP'>#title#</span>",
					autoheight:true,
					select:true,
					type:{
						height:30,
					},
					data:[
						{ id:1, title:"Mes Offres"},
        				{ id:2, title:"Tableau De Bord"},
						{ id:3, title:"Mes Polices"},
        				{ id:4, title:"Mes Sinistres"},
						{ id:5, title:"Mes impayés"},
        				{ id:6, title:"Réclamations"}
					],
				  },
				  {height:20,},
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

function showHelpWindow(data, item){
    var iPosition =item.id;

    var arrData;
    if((typeof data)=="string"){
      var arrData = JSON.parse(csv2JSON(data,String.fromCharCode(3),String.fromCharCode(2),["id", "top", "left", "width", "height", "objID", "text"]));
    }else{
      arrData = data;
    }
	var myLeft = Number(arrData[iPosition].left); 
    var myTop = Number(arrData[iPosition].top); 
	
    var objID = arrData[iPosition].objID;
    
    var obj;
	  if (isAssigned(objID)) {
          obj = $$(objID);
    };
    var modalH = webix.ui({
      id:"help_"+iPosition,
      view:"window",
      css:'helpMD ',
      left:myLeft, 
      top:myTop, 
      width:Number(arrData[iPosition].width), 
      height:Number(arrData[iPosition].height), 
      move:false,
      close:true,
      //head:"",
	  head:false,
      body:{
		type:"clean",
        padding:10,
        margin:10,
		rows : [
			{
				height:25,
				view:"label",
				label:item.title,
				align:"center",
				css:"title1",
			  },
			  {height:10,},
			  {
				template:arrData[iPosition].text,
			  },
			  { height:40,
				cols:[
					// (iPosition==0)?{}:{id:"helpprevious",
					// view:"button", 
					// css:"webix_secondary",
					// label:"Precedent",
					// click:function(){
					// 	 $$("help_"+iPosition).close();
					// 	 showHelpWindow(arrData, [iPosition-1, titre] )
					//    } 
					//  }

					{}
   ,
   (iPosition<arrData.length)?{id:"helpnext",
					view:"button", 
					css:"webix_primary",
					width:60,
					//label:(iPosition<arrData.length-1)?"Suivant":"Fin",
					label:(iPosition<arrData.length-1)?"Fin":"Fin",
					click:function(){
						//  $$("help_"+iPosition).close();
						//  if(iPosition < arrData.length-1) {
						//    showHelpWindow(arrData, [iPosition+1, titre])
						//  }

						$$("help_"+iPosition).close();
					} 
				   }:{}
				]
			  }
		]
      },
     
      });

	  if (isAssigned(obj)){
        modalH.show(obj.getNode(),{x:myLeft, y:myTop});
        webix.html.addCss(obj.getNode(), "userguide-hl");
      }else{
        modalH.show();
      }


};
///********************* END USER GUIDE */

function renderHome2 (idTablBord1, idTablBord2, idTopBar){
	var doc=AddAction(null,1,"TABLBORD1","SELECT","AAN","O");
	doc=AddParam(doc,1,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,1,1,"IdSession_",mySession.getGuid(),"O");

	doc=AddAction(doc,2,"TABLBORD2","SELECT","ACC","O");
	doc=AddParam(doc,2,0,"IdUser_",mySession.getIdUser(),"O");
	doc=AddParam(doc,2,1,"IdSession_",mySession.getGuid(),"O");
	var xml=XML2String(doc);
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
		var zArr=splitString(data,5);
		data=null;
		for(var i=0; i<zArr.length; i++){
			var doc=splitString(zArr[i],4);
			if(doc[4].length>3){
				webix.message('Error !!!'+doc[4]);
			} else if((doc[2]==="TABLBORD1")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){

				var data = csv2ARRAY(doc[5],String.fromCharCode(3),String.fromCharCode(2));
				var tmp = convertToArrayOfObjects(data, ["Title", "valeur", "MtRegle", "Solde", "Statut"]);
				
				for(var j = 0; j < tmp.length; j++) {
					tmp[j]["valeur"]= parseFloat(tmp[j]["valeur"].replace(',', '.'));
					tmp[j]["MtRegle"]=parseFloat(tmp[j]["MtRegle"].replace(',', '.'));
					tmp[j]["Solde"]=parseFloat(tmp[j]["Solde"].replace(',', '.')).toFixed(2);
					
					switch(tmp[j]["Title"]){
						case "Auto":
							tmp[j]["Title"]="Automobile";
							tmp[j]["colorNB"]="color1";
							if(tmp[j]["Statut"] == 1 ){
								tmp[j]["imageSTR"]="Auto-80.png";
								tmp[j]["opacity"]= 1;
								tmp[j]["img_center"]= 'style=""';
							}else{
								tmp[j]["imageSTR"]="Auto_inactive.png";
								tmp[j]["opacity"]= 0;
								tmp[j]["img_center"]= 'class="img_center"';
							}

							break;
						case "MLD":
							tmp[j]["Title"]="Maladie";
							tmp[j]["colorNB"]="color2";
							if(tmp[j]["Statut"] == 1 ){
								tmp[j]["imageSTR"]="Vie-80.png";
								tmp[j]["opacity"]= 1;
								tmp[j]["img_center"]= 'style=""';
							}else{
								tmp[j]["imageSTR"]="Vie_inactive.png";
								tmp[j]["opacity"]= 0;
								tmp[j]["img_center"]= 'class="img_center"';
							}
							
							break;
						case "RD":
							tmp[j]["Title"]="Risques divers";
							tmp[j]["colorNB"]="color3";
							if(tmp[j]["Statut"] == 1 ){
								tmp[j]["imageSTR"]="RD-80.png";
								tmp[j]["opacity"]= 1;
								tmp[j]["img_center"]= 'style=""';
							}else{
								tmp[j]["imageSTR"]="RD_inactive.png";
								tmp[j]["opacity"]= 0;
								tmp[j]["img_center"]= 'class="img_center"';
							}
							
							break;
						case "Mar":
							tmp[j]["Title"]="Transport";
							tmp[j]["colorNB"]="color4";

							if(tmp[j]["Statut"] == 1 ){
								tmp[j]["imageSTR"]="Maritime-80.png";
								tmp[j]["opacity"]= 1;
								tmp[j]["img_center"]= 'style=""';
							}else{
								tmp[j]["imageSTR"]="Maritime_inactive.png";
								tmp[j]["opacity"]= 0;
								tmp[j]["img_center"]= 'class="img_center" ';
							}
							break;
						case "AT":
							tmp[j]["Title"]="A.T";
							tmp[j]["colorNB"]="color5";

							if(tmp[j]["Statut"] == 1 ){
								tmp[j]["imageSTR"]="AT-80.png";
								tmp[j]["opacity"]= 1;
								tmp[j]["img_center"]= 'style=""';
								
							}else{
								tmp[j]["imageSTR"]="AT_inactive.png";
								tmp[j]["opacity"]= 0;
								tmp[j]["img_center"]= 'class="img_center"';
							}
							break;
					}
				}
				$$(idTablBord1).clearAll();
				$$(idTablBord1).parse(tmp);
				retrieveGreidClass(tmp.length);
				$$(idTablBord1).hideOverlay();
			
			} else if((doc[2]==="TABLBORD2")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
				var data = csv2ARRAY(doc[5],String.fromCharCode(3),String.fromCharCode(2));
				var tmp = convertToArrayOfObjects(data, ["Title", "nbSinistres", "nbDossiers", "valeur", "Statut"]);
				for(var j = 0; j < tmp.length; j++) {
					tmp[j]["valeur"]= parseFloat(tmp[j]["valeur"].replace(',', '.')).toFixed(2);

					switch(tmp[j]["Title"]){
						case "Auto":
							tmp[j]["Title"]="Automobile";
							tmp[j]["colorNB"]="color1";
							break;
						case "MLD":
							tmp[j]["Title"]="Maladie";
							tmp[j]["colorNB"]="color2";
							break;
						case "RD":
							tmp[j]["Title"]="Risques Divers";
							tmp[j]["colorNB"]="color3";
							break;
						case "Mar":
							tmp[j]["Title"]="Transport";
							tmp[j]["colorNB"]="color4";
							break;
						case "AT":
							tmp[j]["Title"]="A.T";
							tmp[j]["colorNB"]="color5";
							break;
					}
				}
				$$(idTablBord2).clearAll();
				$$(idTablBord2).parse(tmp);
				$$(idTablBord2).hideOverlay();
				$$(idTablBord1).hideOverlay();

			} 
		}
		const counters = document.querySelectorAll('.valeur');
		animateCounter(200, counters);
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}
function retrieveGreidClass(nbrColm){
	switch(nbrColm){
		case 1:
			document.querySelector('.dataviewTB3 .webix_scroll_cont').style.setProperty("grid-template-columns", "auto");
			break;
		case 2:
			document.querySelector('.dataviewTB3 .webix_scroll_cont').style.setProperty("grid-template-columns", "auto auto");	
			break;
		case 3:
			document.querySelector('.dataviewTB3 .webix_scroll_cont').style.setProperty("grid-template-columns", "auto auto auto");
			break;
		case 4:
			document.querySelector('.dataviewTB3 .webix_scroll_cont').style.setProperty("grid-template-columns", "auto auto auto auto");
			break;
		case 5:
			document.querySelector('.dataviewTB3 .webix_scroll_cont').style.setProperty("grid-template-columns", "auto auto auto auto auto");
			break;
		default:
			document.querySelector('.dataviewTB3 .webix_scroll_cont').style.setProperty("grid-template-columns", "auto");
	}
}





/*************VIEWS**********/
var Views = {
	padding:8,
	id:"views",
	css:"views",
	cells:[
		tableauBord2,
		//tableauBord,
		offresListe,
		monCompte,

		//Auto Polices
		policesListe,
		policeVehicules,
		ficheVehicule,
		toutesLesPolicesAuto,
		

		//Maladie Polices
		maladiePolice,
		maladieAdherents,
		ficheAdherent,
		toutesLesPolicesMaladie,
		
		//RD Polices
		policesRD,
		avenantsRD,

		//Maritime Polices
		policesMaritime,
		facultesOrdres,
		productionCorps,
		toutesLesPolicesMaritime,
		

		//RD Polices
		policesAT,
		avenantsAT,
		toutesLesPolicesRD,

		//Sinistres Auto
		sinistresAuto,
		sinistresVehicules,
		toutesLesSinistreAuto,

		//Sinistres Maladie
		sinistresMaladie,
		sinistresDosMaladie,
		ficheDossierSin,
		toutesLesSinistreMaladie,
		
		//Sinistres RD
		sinistresRD,
		sinistresRDDosAutres,
		toutesLesSinistreRD,

		//Sinistres AT
		sinistresAT,
		sinistresDosAT,
		toutesLesPolicesAt,
		toutesLesSinistreAt,
		
		//Sinistres Maritime
		sinistresMaritime,
		sinistresDosMaritimeFac,
		sinistresDosMaritimeCor,
		toutesLesSinistreMaritime,

		//impayes
		mesImpayes,
		//listeImpayes,

		// Reclamations
		reclamationsAuto,
		reclamationsAT,
		reclamationsMaritime,
		reclamationsMaladie,
		reclamationsRD,

	]
  };

webix.ready(function(){
	//webix config
	webix.CustomScroll.init();
	webix.i18n.setLocale("fr-FR");
	webix.i18n.parseFormat="%d/%m/%Y";
	webix.i18n.parseFormatDate="%d/%m/%Y";
	webix.i18n.groupDelimiter = " ";
	webix.i18n.decimalDelimiter = ".";
	webix.i18n.setLocale();
	
	webix.ui.datafilter.totalColumns=webix.extend({
  refresh:function(master,node,value){
   var result=0;
   master.mapCells(null,value.columnId,null,1,function(value){
    var el=0;
    if(!isObject(value)){
     el=(""+value).replace(/\s/g,"").replace(",",".")*1;
     if(isNaN(el)) el=0;
     result+=el;
    }
    return el;//value;
   });
   node.firstChild.innerHTML="<strong>"+(!value.Percent?result.toMoney(2):(result.toMoney(2)+" %"))+"</strong>";
  }
 },webix.ui.datafilter.summColumn);
	NtsLoadSession("NTSBEL");
	if(checkConnexion()){
		webix.ui({
			id:"body",
			rows: [
				{	type:"clean",
					margin:0,
					padding:0,
					autoheight:true,
					cols:[
						sidebar,
						{
							rows:[
								{
									gravity:3,
									view:"scrollview",
									id:"scrollview",
									scroll:"y",
									autoheight:true,
									height:0,
									minWidth:minW,
									css:"bg-logo",
									body:{
										rows:[
											topbar,
											Views,
										]
									}
								},
								footer,
							]
						}
					]
				},
			]
		},
		);
		$$("namePortrait").setValue(mySession.getLibUser());
		$$("refPortrait").setValue(mySession.getMatriculeUser());
		renderHome2(idTablBord3, idTablBord4, idTopBar);
	}else{
		window.open("login.html", '_self');
	}
	webix.event(window, "resize", resizeSidebar);
	
});

// ------------------------ End index.js------------------------------------------------------------------------------

// ------------------------ Start standard.js------------------------------------------------------------------------------
var idTopBar = "TBimg" + makeId(); 
NtsLoadSession("NTSBEL");
var access_permission = mySession.getMenu();
var menu_data = [
	{
		id: "OffresListe",
		icon: "mdi mdi-sale",
		value: "Mes offres",
	},
	{
		id: "tableauBord2",
		icon: "mdi mdi-chart-pie",
		value: "Tableau de bord",
	},
	...(access_permission.includes("A")  || access_permission.includes("B") || access_permission.includes("C")|| access_permission.includes("D") || access_permission.includes("D")  ? 
		[
			{
				id: "",
				icon: "mdi mdi-clipboard-text-outline",
				value: "Mes Polices",
				data: [
					...(access_permission.includes("B") ? 
							[
								{
									id: "policesListe",
									value: "Auto",
								},
							] : 
							[]
						),

						...(access_permission.includes("A") ? 
							[
								{
									id: "maladiePolice",
									value: "Maladie",
								},
							] : 
							[]
						),

						...(access_permission.includes("C") ? 
							[
								{
									id: "policesMaritime",
									value: "Transport",
								},
							] : 
							[]
						),

						...(access_permission.includes("D") ? 
							[
								{
									id: "policesAT",
									value: "AT",
								},
							] : 
							[]
						),

						...(access_permission.includes("E") ? 
							[
								{
									id: "policesRD",
									value: "Risque Divers",
								},
							] : 
							[]
						),
				]
			},
		] : 
		[]
	),
	...(access_permission.includes("A")  || access_permission.includes("B") || access_permission.includes("C") || access_permission.includes("D") || access_permission.includes("E")  ? 
		[
			{
				id: "",
				icon: "mdi mdi-clipboard-plus",
				value: "Mes Sinistres",
				data: [
					...(access_permission.includes("B") ? 
							[
								{
									id: "sinistresAuto",
									value: "Auto",
								},
							] : 
							[]
						),

					...(access_permission.includes("A") ? 
						[
							{
								id: "sinistresMaladie",
								value: "Maladie",
							},
						] : 
						[]
					),

					...(access_permission.includes("C") ? 
						[
							{
								id: "sinistresMaritime",
								value: "Transport",
							},
						] : 
						[]
					),

					...(access_permission.includes("D") ? 
						[
							{
								id: "sinistresAT",
								value: "AT",
							},
						] : 
						[]
					),

					...(access_permission.includes("E") ? 
						[
							{
								id: "sinistresRD",
								value: "Risque Divers",
							},
						] : 
						[]
					),
				]
			},
		] : 
		[]
	),

	{
		id: "mesImpayes",
		icon: "mdi mdi-alert-decagram",
		value: "Mes impayés",
		
	},
	...(mySession.getReclamation() ? 
	[
		{
			id: "",
			icon: "mdi mdi-beaker",
			value: "Réclamations",
			data: [
				{
					id: "reclamationsAuto",
					value: "Auto",
				},
				{
					id: "reclamationsMaladie",
					value: "Maladie",
				},
				{
					id: "reclamationsMaritime",
					value: "Transport",
				},
				{
					id: "reclamationsAT",
					value: "AT",
				},
				{
					id: "reclamationsRD",
					value: "Risque Divers",
				},
			]
		}
	] : 
	[]
),
];



var sidebar = {
	type:"clean",
	css:" sidebar borderRight",
	gravity:1,
	autoheight:true,
	height:0,	
	rows:[
		{
			view: "icon",
			id:"icon-sidebar",
			icon: "mdi mdi-menu",
			width: 35,
			height:30,
			align: "left",
			css: "app_button icon-sidebar",
			click: function () {
				$$("sidebar1").toggle();
				var sbColaps = $$("sidebar1").B.collapsed;
				
				if(sbColaps){
					$$("logo-img").setValue("<img src='./tools/images/logo192.png' style='width:100%'>");
					$$("portrait-bloc").hide();
				}else{
					$$("logo-img").setValue("<img src='./tools/images/logo192.png' style='height:100%; width:auto;'>");
					$$("portrait-bloc").show();
				}
				
			}
		},
		{	
			view: "label",
			id:"logo-img",
			label: "<img src='./tools/images/logo192.png' style='height:100%; width:auto;'>",
			align: "center",
			width: 0,
			height:50,
			href:"index.html",
			click:function(){
				//$$("tableauBord").show();
				//window.open(this.config.href, '_self');
			}  
		},
		{height:5},
		{	
			height:150,
			id:"portrait-bloc",
			css:"portrait-bloc",

			hidden:false,
			cols:[
				{
					rows:[
						{height:5},
						{
							//img
							view: "label",
							id:"portrait-img",
							template: "<img class='rounded' src='./tools/images/portraitmenWhite.png' style='height:4em; width:auto;'>",
							align: "center",
							width: 0,
							height:60,
						},
						{
							//nameAss
							view:"label",
							label:"",
							align:"center",
							css:"nameText",
							id:"nameAss", name:"nameAss",
							height:5,
						},
						{
							//namePortrait
							view:"label",
							label:"",
							align:"center",
							css:"nameText",
							id:"namePortrait", name:"namePortrait",
							height:20,
						},
						{
							//ref
							view:"label",
							label:"",
							align:"center",
							css:"refText",
							id:"refPortrait", name:"refPortrait",
							height:20,
						},
						{
							//link
							cols:[
								{},
								{
									view: "icon",
									id:"icon-setting",
									icon:"mdi mdi-settings",
									width: 30,
									height:40,
									align: "right",
									tooltip:"Mon compte",
									css: "simple icon-setting webix_transparent",
									click: function () {
										$$('sidebar1').unselectAll();
										$$("monCompte").show();
									}
								},
								{	//logout
									view: "icon",
									id:"icon-logout",
									icon:"mdi mdi-logout",
									width: 30,
									height:40,
									align: "right",
									css: "simple",
									tooltip:"Déconnexion",
									href:"login.html",
									click:function(){
										// Se déconnecter

										webix.confirm({
											title:"Déconnexion",
											ok:"Oui", cancel:"Non",
											text:"Voulez-vous vraiment vous déconnecter ?"
										}).then(function(){
											mySession.setIdUser(-1);
											mySession.setIdAssure(-1);
											mySession.setIdAdherant(-1);
											mySession.setLibUser("");
											mySession.setGuid("");
											NtsSaveSession("NTSBEL");
											location.reload();
										});

										
									} 
								},
								{},
							]
						},
					]
				}
			]
		},
		{
			padding:{top:20},
			cols: [
				{   
					view: "sidebar",
					multipleOpen:true,
					id:"sidebar1",
					css: "webix_dark bg-diam",
					width: 200,
					collapsed:false,
					scroll:true,
					data: menu_data,
					autoheight:true,
					height:0,
					on:{
						onAfterSelect: function(id){
							refreshToken();
						// close all open window
						for(var i in webix.ui.views){
							if(webix.ui.views[i].name === "window")
							webix.ui.views[i].close()
						}	
						//onItemClick: function(id){
							switch (id){
								//case "tableauBord1":
								case "tableauBord2":
									$$(id).show();
									break;
								case "OffresListe":
									$$(id).show();
									break;
								case "policesListe":
									showPolicesListe(true, id);
									break;
								case "maladiePolice":
									showPolicesMaladieListe(true, id);
									break;
								case "policesRD":
									showPolicesRDListe(true, id);
									break;
								case "policesMaritime":
									showPolicesMaritimeListe(true, id);
									break;
								case "policesAT":
									showPolicesATListe(true, id);
									break;
								case "sinistresAuto":
									showSinAutoListe(true, id);
									break;
								case "sinistresMaladie":
									showSinMaladieListe(true, id);
									
									break;
								case "sinistresRD":
									showSinRDListe(true, id);
									
									break;
								case "sinistresMaritime":
									showSinMaritimeListe(true, id);
									
									break;
								case "sinistresAT":
									showSinATListe(true, id);
									break;
								case "mesImpayes":
									showImpayesTB(true, id);
									break;
								case "reclamationsAuto":
									showReclamationsAutoListe(true, id);
									break;
								case "reclamationsMaladie":
									showReclamationsMaladieListe(true, id);
									break;
								case "sinistresRD":
									showReclamationsRDListe(true, id);
									break;
								case "reclamationsMaritime":
									showReclamationsMaritimeListe(true, id);
									break;
								case "reclamationsAT":
									showReclamationsATListe(true, id);
									break;
								case "reclamationsRD":
									showReclamationsRDListe(true, id);
									break;
								
								default:
									

							}
						},
					}
				},
				
			]
		},
	]
};

var topbar = {
	view: "toolbar",
	css: "topbar",
	padding: 0,
	height: 105,
	borderless: true,
	elements: [
		{	
			view: "label",
			id:idTopBar,
			css:"banImg",
			label: "<a href='#' target='_blank'><img src='./perso/logos/logo_toolbar.jpg' /></a>",
			align: "center",
			//width: 1400,
			height:300,
		},
	]
};
var footer = {
	css:"bg-main",
	height:45,
	padding:0,
	margin:0,
	rows:[
		{
			css:"",
			view: "label",
			id:"poweredBy-img",
			template: "<a href='https://www.nt-soft.ma/' target='_blank' class='poweredBy-img'><img src='./tools/images/logo-certification.jpg' style='height:40px; width:auto;'>© Copyright 2022 NT-SOFT - Tous Droits réservés  - Mentions légales</a>",
			align: "center",
			width: 0,
		},
	]
}; 

var resizeSidebar = function(e){

	if( ($$("body").$width) < 1024 ){
		
		var sbColaps = $$("sidebar1").B.collapsed;
		if(!sbColaps){
			$$("sidebar1").toggle();
			$$("logo-img").setValue("<img src='./tools/images/logo192.png' style='width:100%' alt=\"diam\">");
			$$("portrait-bloc").show();
		}else{
			$$("portrait-bloc").hide();
		}
	}else{
		var sbColaps = $$("sidebar1").B.collapsed;
		if(sbColaps){
			$$("sidebar1").toggle();
			$$("logo-img").setValue("<img src='./tools/images/logo192.png' style='height:100%; width:auto;' alt=\"Nt-soft\">");
			$$("portrait-bloc").hide();
		}else{
			$$("portrait-bloc").show();
		}
	}
	$$("body").resize();
	
};


// ------------------------ End standard.js------------------------------------------------------------------------------