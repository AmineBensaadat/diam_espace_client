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
										value: "Maritime",
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
									value: "Maritime",
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
						value: "Maritime",
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
				template: "<a href='https://www.agma.ma/' target='_blank' class='poweredBy-img'><img src='./tools/images/logo-certification.jpg' style='height:40px; width:auto;'>© Copyright 2022 NT-SOFT - Tous Droits réservés  - Mentions légales</a>",
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
				$$("logo-img").setValue("<img src='./tools/images/logo192.png' style='width:100%' alt=\"agma\">");
				$$("portrait-bloc").show();
			}else{
				$$("portrait-bloc").hide();
			}
		}else{
			var sbColaps = $$("sidebar1").B.collapsed;
			if(sbColaps){
				$$("sidebar1").toggle();
				$$("logo-img").setValue("<img src='./tools/images/logo192.png' style='height:100%; width:auto;' alt=\"agma\">");
				$$("portrait-bloc").hide();
			}else{
				$$("portrait-bloc").show();
			}
		}
		$$("body").resize();
		
    };

