'use strict';
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
    arrData['PORTPRI_'] = 9098;//8098;//8088
    arrData['HOSTPUB_'] = "www.nt-soft.ma"//"192.168.100.99";//"196.12.235.242" 192.168.100.99
    arrData['PORTPUB_'] = 9098;//8098;//8088
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
		head:"Liste des contrats",
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
