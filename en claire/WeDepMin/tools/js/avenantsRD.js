'use strict';
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
			grid.parse(jdata, "json");
		}

	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}

