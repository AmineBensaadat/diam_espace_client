

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
						top:20, bottom:10, left:20, right:10
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
			grid.parse(jdata, "json");
		}
	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);
}