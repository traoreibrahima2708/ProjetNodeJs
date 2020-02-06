angular.module("webmail", [ "ngSanitize"])
.controller("webmailCtrl", function($scope){
	
	$scope.dossiers=[
		{ value:'RECEPTION', label: 'Boite de réception', emails:[
			{id:1, from:"Albator", to:"Rudy", Subject:"Je reviens", date:"20/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuH GVYDUCBzeub nnchduscndjjduhcujdhjd"}
			{id:2, from:"Capitaine Flam", to:"Rudy", Subject:"Bisous de l'espace", date:"18/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuH uhdchuhudcn cudduBC"}
			{id:3, from:"Pickachu", to:"Rudy", Subject:"pika pika !", date:"15/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuHuhn hbccU GCUGCBCBJD vgvgvvypejjbc"}
			{id:4, from:"Barbara", to:"Rudy", Subject:" Hgcbjhbc bjdcb", date:"13/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuHg hsgbhjbqsgcjgb  bhbjbkjcen ncj"}
			
		] }
		{ value:"ARCHIVE", label: "Archives", emails:[
			{id:5, from:"Candy", to:"Rudy", Subject:"Bon anniveraire", date:"20/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuH GVYDUCBzeub nnchduscndjjduhcujdhjd"}
			{id:6, from:"Hiro Nakuma", to:"Rudy", Subject:"Konicha", date:"18/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuH uhdchuhudcn cudduBC"}
			{id:7, from:"Asuka Langlay Sory", to:"Rudy", Subject:"ça va Chier!", date:"15/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuHuhn hbccU GCUGCBCBJD vgvgvvypejjbc"}
			
		] }

		{ value:"ENVOYES", label: "Envoyés", emails:[
			{id:8, from:"Rudy", to:"Albator", Subject:"Envie d'un nouveau frigo ?", date:"20/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuH GVYDUCBzeub nnchduscndjjduhcujdhjd"}
			{id:9, from:"Rudy" to:"Capitaine", Subject:"Besoin d'argent", date:"18/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuH uhdchuhudcn cudduBC"}
			
		]   }
		
		{ value:"SPAM", label: "courrier indesirable", emails:[
			{id:10, from:"Rue du discount", to:"Rudy", Subject:"Envie d'un nouveau frigo ?", date:"20/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuH GVYDUCBzeub nnchduscndjjduhcujdhjd"}
			{id:11, from:"Sofivgff" to:"Rudy", Subject:"Besoin d'argent", date:"18/03:2014", content:"Lorem ipsum dolar eygyeg, duchhuhdchuhdsi-dcuH uhdchuhudcn cudduBC"}
		] }

	];
	 $scope.dossierCourant=null;
	 $scope.emailSelectionne=null;

	$scope.selectionDossier=function(dossier){

		$scope.dossierCourant=dossier;
	}

	$scope.emailSelectionne=function(email){

		$scope.emailSelectionne=email;
	}
 // tri 

});

