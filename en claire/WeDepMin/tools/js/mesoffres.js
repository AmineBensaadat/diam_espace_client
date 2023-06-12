
var images = [
	{id:1, src:"./perso/cars/img1.jpg", title: "Image 1",},
	{id:2, src:"./perso/cars/img2.jpg", title: "Image 2"},
	{id:3, src:"./perso/cars/img3.jpg", title: "Image 3"},
	{id:4, src:"./perso/cars/img4.jpg", title: "Image 4"},
	{id:5, src:"./perso/cars/img5.jpg", title: "Image 5"},
  ];

var viewsArray = [];
for(var i = 0; i < images.length; i++){
  viewsArray.push({
    id: images[i].id,
    css: "image_carousel",
    template:img,
    data: webix.copy(images[i])
  });
}

function img(obj){
	return '<img src="'+obj.src+'" class="content" ondragstart="return false"/>'
  }
var offresListe = {
	// Content
	css:"bg-main",
	type:"clean",
	id:"OffresListe",
	margin:0,
	padding:3,
	cols:[
		{
			rows:[
				{	minWidth:300,
					height:40,
					cols:[
						{view:"label", template:"", width:30, css:"icon-return"},
						{
							view:"label", template:"<h1>Les offres du moment</h1> ", css:"h1 textUppercase",
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
					view:"scrollview", id:"verses", 
					scroll:"y",
					body:{
					  rows:[
						{
							animate:{ type:"flip", subtype:"vertical" },
							view: "carousel",
							id: "carousel",
							height:300,
							cols: viewsArray,
							navigation: {
							  type: "side",
							  items: false
							}
						},
						{view:"iframe", id:"frame-body", src:"./perso/html//mesOffres.html", autoheight:true}
					  ]
					} //end of scrollview body
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
					label:"LES OFFRES DU MOMENT",
					align:"center",
					css:"title1"
				},
				{
					height:20
				},
				{
					borderless: true,
					template:"<body>Cette page est publicitaire.<br><br> Vous y trouverez nos offres et activités (paramétrable par l'intermédiaire en assurance)</body>"
				},
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
///********************* END USER GUIDE */




