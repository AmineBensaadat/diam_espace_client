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

