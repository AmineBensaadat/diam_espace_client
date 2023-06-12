
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
							view:"label", template:"<h1>Mes polices : Maritime</h1> ", css:"h1 textUppercase",
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

