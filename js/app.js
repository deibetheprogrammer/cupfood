// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'auto',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'AppBase',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/Desayunos/',
    	url: 'desayunos.html',
    	name: 'Desayunos',
  		},
		{
		path: '/Cupffles/',
    	url: 'cupffles.html',
    	name: 'Cupffles',
  		},
		{
		path: '/Almuerzos/',
    	url: 'almuerzos.html',
    	name: 'Almuerzos',
  		},
		{
		path: '/Cupsta/',
    	url: 'cupsta.html',
    	name: 'Cupsta',
  		},
		{
		path: '/Cenas/',
    	url: 'cenas.html',
    	name: 'Cenas',
  		},
		{
		path: '/Cupsoup/',
    	url: 'Cupsoup.html',
    	name: 'Cupsoup',
  		},
		{
		path: '/Gaseosas/',
    	url: 'gaseosas.html',
    	name: 'Gaseosas',
  		},
		{
		path: '/Coca-cola/',
    	url: 'coca-cola.html',
    	name: 'Coca-cola',
  		},
		{
		path: '/Delivery/',
    	url: 'delivery.html',
    	name: 'Delivery',
  		},
		{
		path: '/Pickup/',
    	url: 'pickup.html',
    	name: 'Pickup',
  		},
		{
		path: '/Nosotros/',
    	url: 'nosotros.html',
    	name: 'Nosotros',
  		},
		{
		path: '/shopbagpago/',
    	url: 'shopbagpago.html',
    	name: 'shopbagpago',
  		},
		{
		path: '/shopbagentrega/',
    	url: 'shopbagentrega.html',
    	name: 'shopbagentrega',
  		},
		{
		path: '/shopbagthx/',
    	url: 'shopbagthx.html',
    	name: 'shopbagthx',
  		},
		{
		path: '/shopbagtarjeta/',
    	url: 'shopbagtarjeta.html',
    	name: 'shopbagtarjeta',
  		},
		{
		path: '/shopbaglisto/',
    	url: 'shopbaglisto.html',
    	name: 'shopbaglisto',
  		},
		
	],
	dialog: {
		title: 'AppBase',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('!Welcome to AppBase !');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





