(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,522,1225,292],[1140,816,893,360],[0,1110,1004,292],[1227,522,782,220],[0,816,1138,292],[1683,107,355,105],[1683,320,355,104],[1683,0,356,105],[1683,214,356,104],[1227,744,63,63],[1292,744,60,60],[1006,1110,123,123],[1359,0,322,321],[0,0,1357,520]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1_1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2_1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3_1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4_1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5_1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.btnAnterior = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BtnAnteriorHover = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.btnSiguiente = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BtnSiguienteHover = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.btnSonidoContenido = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BtnStopSonidoContenido = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.btnX = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.FlechaIndicativa = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.FondoTexto = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.siguiente = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btnSiguiente();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.BtnSiguienteHover();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,52.5);


(lib.Interpolación4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.FlechaIndicativa();
	this.instance.setTransform(64.95,-36.25,0.3221,0.3321,104.9991);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-63.8,129.9,127.69999999999999);


(lib.Interpolación3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.FlechaIndicativa();
	this.instance.setTransform(64.95,-36.25,0.3221,0.3321,104.9991);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-63.8,129.9,127.69999999999999);


(lib.Interpolación2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.FlechaIndicativa();
	this.instance.setTransform(64.95,-36.25,0.3221,0.3321,104.9991);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-63.8,129.9,127.69999999999999);


(lib.btnStopSonido = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.BtnStopSonidoContenido();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5238,scaleY:0.5238,x:-1},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,31.5,31.5);


(lib.btn_sonido = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btnSonidoContenido();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5238,scaleY:0.5238,x:-1},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,33,33);


(lib.cerrar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btnX();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5244,scaleY:0.5244,x:-2,y:-2},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,64.5,64.5);


(lib.anterior = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.btnAnterior();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.BtnAnteriorHover();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.5,52.5);


(lib.flecha = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación2();
	this.instance.setTransform(64.9,63.85);
	this.instance.filters = [new cjs.ColorFilter(0.1, 0.1, 0.1, 1, 229.5, 229.5, 0, 0)];
	this.instance.cache(-67,-66,134,132);

	this.instance_1 = new lib.Interpolación3("synched",0);
	this.instance_1.setTransform(64.9,63.85);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.2, 0.2, 0.2, 1, 204, 204, 0, 0)];
	this.instance_1.cache(-67,-66,134,132);

	this.instance_2 = new lib.Interpolación4("synched",0);
	this.instance_2.setTransform(58.2,56.15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,mode:"synched",startPosition:0},15).wait(15).to({_off:false,mode:"independent"},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},15).to({_off:true,x:58.2,y:56.15},15).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},15).to({_off:true,x:64.9,y:63.85,mode:"independent"},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-7.7,136.6,135.5);


(lib.ayuda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		stage.on('drawstart', initStage, this, true);
		function initStage() {
			stretchToFit();
		}
		
		
		
		this.stop();
		createjs.Sound.stop();
		
		 var _this = this;
		_this.btn_sonido1.visible=true;	
		
		this.btn_sonido1.on('click', function(){
			createjs.Sound.stop();
			
			_this.btn_sonido1.visible=false;
			
			createjs.Sound.play("ayuda1").on("complete", function () {                    
			_this.btn_sonido1.visible=true; 
		                    }, this);; 
		});
		 
		_this.btnStopSonido1.on('click', function(){
			_this.btn_sonido1.visible=true;
			createjs.Sound.stop();
		});
		
		_this.btnSiguiente.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndStop(1);
		});
		
		_this.btnCerrar.on('click', function(){
		createjs.Sound.stop();
		_this.parent.ayuda.gotoAndStop(0);	
			window.parent.ocultaAyuda();
		});
	}
	this.frame_1 = function() {
		var _this = this;
		
		_this.btn_sonido1.visible=true;
			
		
		this.btn_sonido1.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido1.visible=false;
			
			createjs.Sound.play("ayuda2").on("complete", function () {                    
			_this.btn_sonido1.visible=true; 
		                    }, this);; 
		});
		 
		_this.btnStopSonido1.on('click', function(){
			_this.btn_sonido1.visible=true;
			createjs.Sound.stop();
		});
		
		
		_this.btnSiguiente.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndStop(2);
		});
		
		
		_this.btnAnterior.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndStop(0);
		});
	}
	this.frame_2 = function() {
		var _this = this;
		
		_this.btn_sonido1.visible=true;
			
		
		this.btn_sonido1.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido1.visible=false;
			
			createjs.Sound.play("ayuda3").on("complete", function () {                    
			_this.btn_sonido1.visible=true; 
		                    }, this);; 
		});
		 
		_this.btnStopSonido1.on('click', function(){
			_this.btn_sonido1.visible=true;
			createjs.Sound.stop();
		});
		
		_this.btnSiguiente.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndStop(3);
		});
		
		
		_this.btnAnterior.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndStop(1);
		});
	}
	this.frame_3 = function() {
		var _this = this;
		
		_this.btn_sonido1.visible=true;
			
		
		this.btn_sonido1.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido1.visible=false;
			
			createjs.Sound.play("ayuda4").on("complete", function () {                    
			_this.btn_sonido1.visible=true; 
		                    }, this);; 
		});
		 
		_this.btnStopSonido1.on('click', function(){
			_this.btn_sonido1.visible=true;
			createjs.Sound.stop();
		});
		
		_this.btnSiguiente.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndStop(4);
		});
		
		
		_this.btnAnterior.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndStop(2);
		});
	}
	this.frame_4 = function() {
		var _this = this;
		
		_this.btn_sonido1.visible=true;
			
		
		this.btn_sonido1.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido1.visible=false;
			
			createjs.Sound.play("ayuda5").on("complete", function () {                    
			_this.btn_sonido1.visible=true; 
		                    }, this);; 
		});
		 
		_this.btnStopSonido1.on('click', function(){
			_this.btn_sonido1.visible=true;
			createjs.Sound.stop();
		});
		
		
		
		
		
		_this.btnAnterior.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndStop(3);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// navegacion
	this.instance = new lib.flecha();
	this.instance.setTransform(104.45,324,1,1,0,-169.7014,10.2986,64.9,63.9);

	this.btnSiguiente = new lib.siguiente();
	this.btnSiguiente.name = "btnSiguiente";
	this.btnSiguiente.setTransform(512.3,254.1,1,1,0,0,0,89,26.2);
	new cjs.ButtonHelper(this.btnSiguiente, 0, 1, 2);

	this.btn_sonido1 = new lib.btn_sonido();
	this.btn_sonido1.name = "btn_sonido1";
	this.btn_sonido1.setTransform(408.4,31.9,1.8208,1.8208,0,0,0,15.8,15.7);
	new cjs.ButtonHelper(this.btn_sonido1, 0, 1, 2);

	this.btnStopSonido1 = new lib.btnStopSonido();
	this.btnStopSonido1.name = "btnStopSonido1";
	this.btnStopSonido1.setTransform(409.75,31.9,1.8208,1.8208,0,0,0,15.8,15.7);
	new cjs.ButtonHelper(this.btnStopSonido1, 0, 1, 2);

	this.btnAnterior = new lib.anterior();
	this.btnAnterior.name = "btnAnterior";
	this.btnAnterior.setTransform(302.95,256.75,1,1,0,0,0,88.8,26.2);
	new cjs.ButtonHelper(this.btnAnterior, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnStopSonido1,p:{y:31.9,x:409.75}},{t:this.btn_sonido1,p:{y:31.9,x:408.4}},{t:this.btnSiguiente,p:{y:254.1,x:512.3}},{t:this.instance,p:{regX:64.9,regY:63.9,skewX:-169.7014,skewY:10.2986,x:104.45,y:324,rotation:0}}]}).to({state:[{t:this.btnStopSonido1,p:{y:-12.1,x:409.75}},{t:this.btn_sonido1,p:{y:-12.1,x:408.4}},{t:this.btnSiguiente,p:{y:256.75,x:512.3}},{t:this.instance,p:{regX:93,regY:121.2,skewX:-158.0458,skewY:21.9542,x:272.35,y:285.9,rotation:0}},{t:this.btnAnterior,p:{x:302.95,y:256.75}}]},1).to({state:[{t:this.btnStopSonido1,p:{y:51.15,x:655.4}},{t:this.btn_sonido1,p:{y:51.15,x:654.05}},{t:this.btnSiguiente,p:{y:281.4,x:757.95}},{t:this.btnAnterior,p:{x:548.6,y:281.4}},{t:this.instance,p:{regX:93,regY:121.2,skewX:-158.0458,skewY:21.9542,x:387,y:304.55,rotation:0}}]},1).to({state:[{t:this.btnStopSonido1,p:{y:70.05,x:618.7}},{t:this.btn_sonido1,p:{y:70.05,x:617.35}},{t:this.btnSiguiente,p:{y:263.55,x:721.25}},{t:this.instance,p:{regX:64.9,regY:63.9,skewX:-160.2664,skewY:19.7336,x:390.65,y:336,rotation:0}},{t:this.btnAnterior,p:{x:511.9,y:263.55}}]},1).to({state:[{t:this.btnStopSonido1,p:{y:-235.2,x:747.3}},{t:this.btn_sonido1,p:{y:-235.2,x:745.95}},{t:this.instance,p:{regX:64.8,regY:63.9,skewX:0,skewY:0,x:1136.5,y:-180.65,rotation:100.2665}},{t:this.btnAnterior,p:{x:640.5,y:-10.9}}]},1).wait(1));

	// cerrar
	this.btnCerrar = new lib.cerrar();
	this.btnCerrar.name = "btnCerrar";
	this.btnCerrar.setTransform(732.3,36.85,1,1,0,0,0,30.8,30.8);
	new cjs.ButtonHelper(this.btnCerrar, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnCerrar).wait(1).to({y:-2.15},0).wait(1).to({x:978.2,y:56.55},0).wait(1).to({x:940.1,y:72.25},0).wait(1).to({x:1062.1,y:-224.95},0).wait(1));

	// texto
	this.instance_1 = new lib._1_1();
	this.instance_1.setTransform(92,79,0.5,0.5);

	this.instance_2 = new lib._2_1();
	this.instance_2.setTransform(184,42,0.5,0.5);

	this.instance_3 = new lib._3_1();
	this.instance_3.setTransform(405,99,0.5,0.5);

	this.instance_4 = new lib._4_1();
	this.instance_4.setTransform(425,119,0.5,0.5);

	this.instance_5 = new lib._5_1();
	this.instance_5.setTransform(461,-190,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// cuadro
	this.instance_6 = new lib.FondoTexto();
	this.instance_6.setTransform(69,25,0.5,0.5395);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleY:0.6276,x:68,y:-20},0).wait(1).to({scaleY:0.5645,x:317,y:43},0).wait(1).to({scaleY:0.4936,x:281,y:61},0).wait(1).to({scaleY:0.5596,x:406,y:-245},0).wait(1));

	// transparencia_copia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEhYbAo7QhABBAABbQAABaBABAQBBBABaAAQBaAABAhAQBBhAAAhaQAAhbhBhBQhAg/hagBQhaABhBA/g");
	this.shape.setTransform(575.1,106.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEhG4Ao7QhABBAABbQAABaBABAQBABABbAAQBbAABAhAQBAhAAAhaQAAhbhAhBQhAg/hbgBQhbABhAA/gEhOKAo7QhBBBAABbQAABaBBBAQBABABbAAQBaAABAhAQBAhAAAhaQAAhbhAhBQhAg/hagBQhbABhAA/g");
	this.shape_1.setTransform(575.1,106.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEg16Ao7QhABBAABbQAABaBABAQBBBABaAAQBbAABAhAQBBhAAAhaQAAhbhBhBQhAg/hbgBQhaABhBA/gEg9dAo7Qg/BBgBBbQABBaA/BAQBBBABbAAQBaAABAhAQBAhAAAhaQAAhbhAhBQhAg/hagBQhbABhBA/g");
	this.shape_2.setTransform(575.1,106.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEgtAAo7Qg/BBgBBbQABBaA/BAQBBBABbAAQBaAABAhAQBAhAAAhaQAAhbhAhBQhAg/hagBQhbABhBA/g");
	this.shape_3.setTransform(575.1,106.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEBh9g5hQhVBVABB4QgBB3BVBVQBVBVB4AAQB4AABUhVQBVhVAAh3QAAh4hVhVQhUhUh4AAQh4AAhVBUg");
	this.shape_4.setTransform(575.1,106.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.9,-277.9,1366,768);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.ayuda = new lib.ayuda();
	this.ayuda.name = "ayuda";
	this.ayuda.setTransform(107.9,277.9);

	this.timeline.addTween(cjs.Tween.get(this.ayuda).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(683,384,683,384);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#33FF33",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_P_1.png?1713231306054", id:"index_atlas_P_1"},
		{src:"sounds/ayuda1.mp3?1713231306103", id:"ayuda1"},
		{src:"sounds/ayuda2.mp3?1713231306103", id:"ayuda2"},
		{src:"sounds/ayuda3.mp3?1713231306103", id:"ayuda3"},
		{src:"sounds/ayuda4.mp3?1713231306103", id:"ayuda4"},
		{src:"sounds/ayuda5.mp3?1713231306103", id:"ayuda5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7C1B920775F18E4C9C20E78B1DF9DE91'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;