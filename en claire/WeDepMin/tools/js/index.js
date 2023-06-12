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
									template:'<div class="tbHome3 #colorNB# statut_#Statut#" > <div class="tbDet1"> <span class="titre statut_#Statut#"> #Title#</span> <span class="valeur statut_#Statut#"" data=#valeur# style="opacity: #opacity#">0</span> <span class="sousTitre" style="opacity: #opacity#">Prime Annuelle</span> </div> <div class="tbDet2"> <img #img_center# src="./tools/images/#imageSTR#" width="auto" /> <div class="rowView pR5" style="opacity: #opacity#"> <span class="valeur statut_#Statut#"" data=#MtRegle#>0</span> <span class="titre subTitle2">MONTANT REGLÉ</span> <span class="valeur statut_#Statut#"" data="#Solde#">0</span> <span class="titre">RESTANT DU</span> </div> </div> </div>',
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
							tmp[j]["Title"]="Maritime";
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
							tmp[j]["Title"]="Maritime";
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
