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
