(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[1316,522,1267,286],[0,741,1267,363],[1269,810,1183,286],[1316,0,1357,520],[0,0,1314,739]]},
		{name:"index_atlas_P_2", frames: [[0,246,927,242],[0,0,945,244],[324,597,355,105],[324,810,355,104],[324,490,356,105],[324,704,356,104],[125,813,63,63],[125,878,60,60],[0,813,123,123],[0,490,322,321]]}
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



(lib._1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btnAnterior = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BtnAnteriorHover = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btnSiguiente = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BtnSiguienteHover = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.btnSonidoContenido = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BtnStopSonidoContenido = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.btnX = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.FlechaIndicativa = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.FondoTexto = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._img = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(4);
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
		
		_this.btnCerrar.on('click', function(){
		createjs.Sound.stop();
		_this.parent.ayuda.gotoAndStop(0);	
			window.parent.ocultaAyuda();
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
		
		_this.btnCerrar.on('click', function(){
		createjs.Sound.stop();
		_this.parent.ayuda.gotoAndStop(0);	
			window.parent.ocultaAyuda();
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
		
		_this.btnCerrar.on('click', function(){
		createjs.Sound.stop();
		_this.parent.ayuda.gotoAndStop(0);	
			window.parent.ocultaAyuda();
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
		
		_this.btnCerrar.on('click', function(){
		createjs.Sound.stop();
		_this.parent.ayuda.gotoAndStop(0);	
			window.parent.ocultaAyuda();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// navegacion
	this.instance = new lib.flecha();
	this.instance.setTransform(963.3,-154.55,1,1,0,0,0,64.9,63.9);

	this.btnSiguiente = new lib.siguiente();
	this.btnSiguiente.name = "btnSiguiente";
	this.btnSiguiente.setTransform(939.25,98.1,1,1,0,0,0,89,26.2);
	new cjs.ButtonHelper(this.btnSiguiente, 0, 1, 2);

	this.btn_sonido1 = new lib.btn_sonido();
	this.btn_sonido1.name = "btn_sonido1";
	this.btn_sonido1.setTransform(835.35,-116.1,1.8208,1.8208,0,0,0,15.8,15.7);
	new cjs.ButtonHelper(this.btn_sonido1, 0, 1, 2);

	this.btnStopSonido1 = new lib.btnStopSonido();
	this.btnStopSonido1.name = "btnStopSonido1";
	this.btnStopSonido1.setTransform(836.7,-116.1,1.8208,1.8208,0,0,0,15.8,15.7);
	new cjs.ButtonHelper(this.btnStopSonido1, 0, 1, 2);

	this.btnAnterior = new lib.anterior();
	this.btnAnterior.name = "btnAnterior";
	this.btnAnterior.setTransform(729.9,152.75,1,1,0,0,0,88.8,26.2);
	new cjs.ButtonHelper(this.btnAnterior, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnStopSonido1,p:{x:836.7,y:-116.1}},{t:this.btn_sonido1,p:{x:835.35,y:-116.1}},{t:this.btnSiguiente,p:{y:98.1,x:939.25}},{t:this.instance,p:{skewY:0,x:963.3,y:-154.55,skewX:0,rotation:0}}]}).to({state:[{t:this.btnStopSonido1,p:{x:836.7,y:-116.1}},{t:this.btn_sonido1,p:{x:835.35,y:-116.1}},{t:this.btnSiguiente,p:{y:152.75,x:939.25}},{t:this.instance,p:{skewY:180,x:1011.25,y:-153.9,skewX:0,rotation:0}},{t:this.btnAnterior,p:{x:729.9,y:152.75}}]},1).to({state:[{t:this.btnStopSonido1,p:{x:862,y:168.45}},{t:this.btn_sonido1,p:{x:860.65,y:168.45}},{t:this.btnSiguiente,p:{y:388.7,x:964.55}},{t:this.instance,p:{skewY:0,x:737.95,y:130.65,skewX:0,rotation:0}},{t:this.btnAnterior,p:{x:755.2,y:388.7}}]},1).to({state:[{t:this.btnStopSonido1,p:{x:394.05,y:150.05}},{t:this.btn_sonido1,p:{x:392.7,y:150.05}},{t:this.btnSiguiente,p:{y:336.55,x:496.6}},{t:this.instance,p:{skewY:19.7336,x:166,y:416,skewX:-160.2664,rotation:0}},{t:this.btnAnterior,p:{x:287.25,y:336.55}}]},1).to({state:[{t:this.btnStopSonido1,p:{x:748.65,y:150.05}},{t:this.btn_sonido1,p:{x:747.3,y:150.05}},{t:this.instance,p:{skewY:0,x:889.85,y:416,skewX:0,rotation:160.2664}},{t:this.btnAnterior,p:{x:641.85,y:343.3}}]},1).wait(1));

	// cerrar
	this.btnCerrar = new lib.cerrar();
	this.btnCerrar.name = "btnCerrar";
	this.btnCerrar.setTransform(1159.25,-111.15,1,1,0,0,0,30.8,30.8);
	new cjs.ButtonHelper(this.btnCerrar, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnCerrar).wait(2).to({x:1184.8,y:173.85},0).wait(1).to({x:715.45,y:152.25},0).wait(1).to({x:1063.45,y:160.3},0).wait(1));

	// texto
	this.instance_1 = new lib._1();
	this.instance_1.setTransform(519,-77,0.5,0.5);

	this.instance_2 = new lib._2();
	this.instance_2.setTransform(519,-62,0.5,0.5);

	this.instance_3 = new lib._3();
	this.instance_3.setTransform(579,206,0.5,0.5);

	this.instance_4 = new lib._4();
	this.instance_4.setTransform(178,192,0.5,0.5);

	this.instance_5 = new lib._5();
	this.instance_5.setTransform(512,195,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// cuadro
	this.instance_6 = new lib.FondoTexto();
	this.instance_6.setTransform(496,-123,0.5,0.5237);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleY:0.6276,y:-124},0).wait(1).to({scaleY:0.5357,x:524,y:160},0).wait(1).to({scaleY:0.4752,x:56,y:141},0).wait(1).to({scaleY:0.4936,x:407},0).wait(1));

	// transparencia_copia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEAicgzxMAkYAAAIAAmjMgkYAAAg");
	this.shape.setTransform(575.1,106.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEBG5gzuIYcAAIAAmsI4cAAg");
	this.shape_1.setTransform(575.1,106.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gAmJyxQkFEGAAFxQAAFyEFEEQEGEGFxAAQFxAAEGkGQEFkEAAlyQAAlxkFkGQkGkFlxAAQlxAAkGEFg");
	this.shape_2.setTransform(575.1,106.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEhmNA0+QhEBBAABeQAABdBEBBQBEBDBgAAIVbAAQBgAABEhDQBEhBAAhdQAAhehEhBQhEhChgAAI1bAAQhgAAhEBCg");
	this.shape_3.setTransform(575.1,106.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEA9IA1IQg+BCAABeQAABdA+BBQA+BCBYAAMAkaAAAQBXAAA9hCQA/hBAAhdQAAheg/hCQg9hBhXAAMgkaAAAQhYAAg+BBg");
	this.shape_4.setTransform(575.1,106.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.9,-277.9,1366,776);


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

	// Capa_3
	this.instance = new lib._img();
	this.instance.setTransform(0,0,1.0396,1.0392);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(683,384,683,384);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#006699",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_P_1.png?1713232990153", id:"index_atlas_P_1"},
		{src:"images/index_atlas_P_2.png?1713232990153", id:"index_atlas_P_2"},
		{src:"sounds/ayuda1.mp3?1713232990214", id:"ayuda1"},
		{src:"sounds/ayuda2.mp3?1713232990214", id:"ayuda2"},
		{src:"sounds/ayuda3.mp3?1713232990214", id:"ayuda3"},
		{src:"sounds/ayuda4.mp3?1713232990214", id:"ayuda4"},
		{src:"sounds/ayuda5.mp3?1713232990214", id:"ayuda5"}
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