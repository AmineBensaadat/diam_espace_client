var idTablBord1 = "TB1" + makeId();
var idTablBord2 = "TB2" + makeId();

var tableauBord = {	
	css:"bg-main",
	type:"clean",
	margin:0,
	padding:3,
	id:"tableauBord",
	cols:[
		{
			css:"tableau-bord",
			rows:[
				{	
					height:60,
					cols:[
						{ width:20, },
						{	
							view:"label", template:"<h1>Tableau de bord</h1>", css:"h1",
							
						},
						
					]
					
				},
				{	
					type:"clean",
					padding:2,
					margin:0,
					
					cols:[
						{
							rows:[
								{
									
									view:"dataview", 
									id:idTablBord1,
									css:"dataviewTB",
									minWidth:360,
									xCount:2,
									yCount:2,
									scroll:false,
									pager:"pagerA",
									type: {
										height:115,
										width:"auto",
									},
									template:'<div class="tbHome1 #colorNB#"> <div class="tbImage"><img src="./tools/images/#imageSTR#" /></img></div><div class="tbDet1"><span class="titre">Production #Title#</span><span class="valeur">#valeur#</span><span class="sousTitre">Prime Annuelle</span></div><div class="tbDet2"><span class="valeur">#sousValeur1#</span><span class="titre">Montant Reglé</span><span class="valeur">#sousValeur2#</span><span class="titre">Restant Dû</span></div></div>',
									ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
									data:[],
									
								},
								{
									view:"pager", 
									css:"pagerRight",
									id:"pagerA",
									size:4,
									group:4,
									align:"right",
								  },
								
							]
						}
					]
				},
				{	
					type:"clean",
					padding:2,
					margin:0,
					
					cols:[
						{
							rows:[
								{
									
									view:"dataview", 
									id:idTablBord2,
									css:"dataviewTB",
									minWidth:400,
									xCount:2,
									yCount:2,
									scroll:false,
									pager:"pagerB",
									type: {
										height:170,
										width:"auto",
									},
									template:'<div class="tbHome2 #colorNB#"> <div class="tbSinistre"><span class="sinistre">Sinistres #Title#</span></div><div class="tbDet3"> <span class="col"><span class="nbS">#nbSinistres# </span><span class="subTitle">SINISTRES</span></span> <span class="col"><span class="nbS">#nbDossiers# </span><span class="subTitle">DOSSIERS OUVERTS</span></span> </div><div class="tbDet4"> <span class="valeur">#valeur#</span> <span class="subTitle2">MONTANT REMBOURSé</span> </div></div>',
									ready:function(){
										if (!this.count()){ //if no data are available
											webix.extend(this, webix.OverlayBox);
											this.showOverlay(loadingDIV);
										}
									},
									data:[]
								},
								{
									view:"pager", 
									css:"pagerRight",
									id:"pagerB",
									size:4,
									group:4,
									align:"right",
								  },
							]
						}
					]
				},
				
				
				
			]
		}
	]

};



function renderHome (idTablBord1, idTablBord2, idTopBar){

	var sql = "AAN";
		sql = sql.replace("%1", mySession.getIdUser());
		sql = sql.replace("%2", mySession.getIdAssure());
		sql = sql.replace("%3", mySession.getIdAdherant());
		sql = sql.replace("%4", mySession.getGuid());
		var doc = AddAction(doc, 1, "TABLBORD1", "SELECT", sql, "O");
  
		
	sql = "Select Titre, Nbr_Sin, Nbr_Sin_ouvert, Mt_remb FROM Esp_TablBordS(%1,%2,%3,'%4')";
		sql = sql.replace("%1", mySession.getIdUser());
		sql = sql.replace("%2", mySession.getIdAssure());
		sql = sql.replace("%3", mySession.getIdAdherant());
		sql = sql.replace("%4", mySession.getGuid());
		doc = AddAction(doc, 2, "TABLBORD2", "SELECT", sql, "O");

	sql = "AAO";
		sql = sql.replace("%1", mySession.getIdUser());
		sql = sql.replace("%2", mySession.getIdAssure());
		sql = sql.replace("%3", mySession.getIdAdherant());
		sql = sql.replace("%4", mySession.getGuid());
		doc = AddAction(doc, 3, "IMGTOPBAR", "SELECT", sql, "O");
  
	var xml;
	xml=XML2String(doc);
  
	ExecuteCommand("P", "ZOOZ", xml, function (obj, data, args) {
		var zArr=splitString(data,5);
		data=null;
		for(var i=0; i<zArr.length; i++){
			var doc=splitString(zArr[i],4);
			if(doc[4].length>3){
				webix.message('Error !!!'+doc[4]);
			} else if((doc[2]==="TABLBORD1")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
				
				var data = csv2ARRAY(doc[5],String.fromCharCode(3),String.fromCharCode(2));
				var tmp = convertToArrayOfObjects(data, ["Title", "valeur", "sousValeur1", "sousValeur2", "colorNB", "imageSTR"]);
				
	
				for(var j = 0; j < tmp.length; j++) {

					tmp[j]["valeur"]=formatDecimal(tmp[j]["valeur"]);
					tmp[j]["sousValeur1"]=formatDecimal(tmp[j]["sousValeur1"]);
					tmp[j]["sousValeur2"]=formatDecimal(tmp[j]["sousValeur2"]);
					
					switch(tmp[j]["Title"]){
						case "Auto":
							tmp[j]["colorNB"]="color1";
							tmp[j]["imageSTR"]="auto.png";
							break;
						case "MLD":
							tmp[j]["Title"]="Maladie";
							tmp[j]["colorNB"]="color2";
							tmp[j]["imageSTR"]="maladie.png";
							break;
						case "RD":
							tmp[j]["Title"]="Risques Divers";
							tmp[j]["colorNB"]="color3";
							tmp[j]["imageSTR"]="RD.png";
							break;
						case "Mar":
							tmp[j]["Title"]="Maritime";
							tmp[j]["colorNB"]="color4";
							tmp[j]["imageSTR"]="maritime.png";
							break;
						
					}
				}
				$$(idTablBord1).clearAll();
				$$(idTablBord1).parse(tmp);
				$$(idTablBord1).hideOverlay();
			
			} else if((doc[2]==="TABLBORD2")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
				
				var data = csv2ARRAY(doc[5],String.fromCharCode(3),String.fromCharCode(2));
				var tmp = convertToArrayOfObjects(data, ["Title", "nbSinistres", "nbDossiers", "valeur", "colorNB"]);
				for(var j = 0; j < tmp.length; j++) {

					tmp[j]["valeur"]=formatDecimal(tmp[j]["valeur"]);

					switch(tmp[j]["Title"]){
						case "Auto":
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

			} else if((doc[2]==="IMGTOPBAR")&&(doc[3]==="SELECT")&&(doc[5].length>=0)){
				var data = csv2ARRAY(doc[5],String.fromCharCode(3),String.fromCharCode(2));
				
				var tmp = convertToArrayOfObjects(data, ["SourceBanniere", "DirectionBanniere"]);
				
				var imgSrc="";
				for(var j = 0; j < tmp.length; j++) {
					
					imgSrc="<a href='"+tmp[j]["DirectionBanniere"]+"' target='_blank'><img src='"+tmp[j]["SourceBanniere"]+"' /></a>";
				}
				
				$$(idTopBar).setValue(imgSrc);   
			}
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

	
	
	
}







/*************VIEWS**********/
var Views = {
	padding:8,
	id:"views",
	cells:[
		tableauBord2,
		//tableauBord,
		offresListe,
		monCompte,

		//Auto Polices
		policesListe,
		policeVehicules,
		ficheVehicule,

		//Maladie Polices
		maladiePolice,
		maladieAdherents,
		ficheAdherent,
		
		//RD Polices
		policesRD,
		avenantsRD,

		//Maritime Polices
		policesMaritime,
		facultesOrdres,
		productionCorps,

		//RD Polices
		policesAT,
		avenantsAT,

		//Sinistres Auto
		sinistresAuto,
		sinistresVehicules,

		//Sinistres Maladie
		sinistresMaladie,
		sinistresDosMaladie,
		ficheDossierSin,

		//Sinistres RD
		sinistresRD,
		sinistresRDDosAutres,

		//Sinistres AT
		sinistresAT,
		sinistresDosAT,
		
		//Sinistres Maritime
		sinistresMaritime,
		sinistresDosMaritimeFac,
		sinistresDosMaritimeCor,

		//impayes
		mesImpayes,
		listeImpayes,
	]
  };

webix.ready(function(){
	//webix config
	webix.i18n.setLocale("fr-FR");
	webix.i18n.parseFormat="%d/%m/%Y";
	webix.i18n.parseFormatDate="%d/%m/%Y";
	webix.i18n.groupDelimiter = " ";
	webix.i18n.decimalDelimiter = ".";
	webix.i18n.setLocale();

	// check user Connexion
	NtsLoadSession("NTSBEL");
	
	if(checkConnexion()){
		
		webix.ui({
			id:"body",
			minWidth:minW,
			rows: [
				{	type:"clean",
					margin:0,
					padding:0,
					autoheight:true,
					cols:[
						sidebar,
						{
							gravity:3,
							view:"scrollview", 
							id:"scrollview", 
							scroll:"y",
							autoheight:true,
							height:0,
							minWidth:360,
							body:{
								rows:[
									topbar, 
									Views,
									footer,
								]
							}
						}
					]
				},
			]
		});


		$$("namePortrait").setValue(mySession.getLibUser());
		$$("refPortrait").setValue(mySession.getMatriculeUser());

		renderHome2(idTablBord3, idTablBord4, idTopBar);

	}else{
		window.open("login.html", '_self');
	}

	webix.event(window, "resize", resizeSidebar);
	
});






