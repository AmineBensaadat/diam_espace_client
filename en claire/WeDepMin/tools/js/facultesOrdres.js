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
							view:"label", template:"<h1>Mes polices : Maritime</h1> ", css:"h1 textUppercase",
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
			grid.parse(jdata, "json");
		}	

	}, function (obj, data, args) {
		webix.message(data);
	}, [], false);

}

