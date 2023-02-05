(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[709,502,466,90],[1636,519,315,90],[1513,184,457,90],[1513,0,466,90],[459,594,315,90],[0,526,457,90],[1513,92,466,90],[776,594,315,90],[1177,519,457,90],[1211,411,708,106],[1211,302,707,107],[1211,0,300,300],[1859,611,140,139],[1349,611,253,89],[1604,611,253,89],[709,0,500,500],[0,0,707,524],[0,618,254,89],[1093,611,254,89]]}
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



(lib._1ActividadesNORMAL = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1AyudaNORMAL = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1ContenidosNORMAL = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._2actividadesSOBRE = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._2ayudaSOBRE = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._2contenidosSOBRE = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._3actividadesDOWN = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._3ayudaDOWN = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._3contenidosDOWN = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2732,1536);


(lib.barraseguredes = function() {
	this.initialize(img.barraseguredes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2373,154);


(lib.botonaceptar2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Botonaceptar = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.botonplay = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.icono = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.inicio1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.inicio2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.mano2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Mensaje = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Portada = function() {
	this.initialize(img.Portada);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2374,1144);


(lib.volver1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.volver2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mano = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mano2();
	this.instance.setTransform(-115.8,-645.7,0.2286,0.2286,46.4684);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-88.8,y:-673.7},9).to({x:-115.8,y:-645.7},10).to({x:-88.8,y:-673.7},9).to({x:-115.8,y:-645.7},11).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.7,-673.7,188.7,189.70000000000005);


(lib.Interpolación12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.icono();
	this.instance.setTransform(-35,-34.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-34.7,70,69.5);


(lib.btnVolver = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.volver1();
	this.instance.setTransform(-63.5,-22.25,0.5,0.5);

	this.instance_1 = new lib.volver2();
	this.instance_1.setTransform(-63.5,-22.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.5,scaleY:0.5,x:-63.5,y:-22.25}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4724,scaleY:0.4725,x:-64,y:-22}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-22.2,127.5,44.5);


(lib.btnPlay = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.botonplay();
	this.instance.setTransform(-75,-75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5201,scaleY:0.5201,x:-78,y:-78},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-69,y:-69},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-78,156,156);


(lib.btnInicio = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.inicio1();
	this.instance.setTransform(-63.25,-22.25,0.5,0.5);

	this.instance_1 = new lib.inicio2();
	this.instance_1.setTransform(-63.25,-22.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.5,scaleY:0.5,x:-63.25,y:-22.25}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4743,scaleY:0.4742,x:-63,y:-22}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.2,-22.2,126.5,44.5);


(lib.btnAyuda = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._1AyudaNORMAL();
	this.instance.setTransform(-78.75,-22.5,0.5,0.5);

	this.instance_1 = new lib._2ayudaSOBRE();
	this.instance_1.setTransform(-78.75,-22.5,0.5,0.5);

	this.instance_2 = new lib._3ayudaDOWN();
	this.instance_2.setTransform(-78.75,-22.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.7,-22.5,157.5,45);


(lib.btnActividades = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._1ActividadesNORMAL();
	this.instance.setTransform(-116.5,-22.5,0.5,0.5);

	this.instance_1 = new lib._2actividadesSOBRE();
	this.instance_1.setTransform(-116.5,-22.5,0.5,0.5);

	this.instance_2 = new lib._3actividadesDOWN();
	this.instance_2.setTransform(-116.5,-22.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-22.5,233,45);


(lib.btnAceptar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Botonaceptar();
	this.instance.setTransform(-176.75,-26.75,0.5,0.5);

	this.instance_1 = new lib.botonaceptar2();
	this.instance_1.setTransform(-176.75,-26.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.5,scaleY:0.5,x:-176.75,y:-26.75}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4802,scaleY:0.4802,x:-170,y:-26}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.7,-26.7,354,53.5);


(lib.CARTAESTATICA = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación12("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CARTAESTATICA, new cjs.Rectangle(-35,-34.7,70,69.5), null);


(lib.CARTA = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación12("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2.8},5).to({y:5},3).to({y:0},6).to({y:5},9).to({y:0},7).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-34.7,70,74.5);


(lib.btnContenidos = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mano();
	this.instance.setTransform(-125.1,54.3,1,1,0,0,0,-97,-564.9);

	this.instance_1 = new lib._1ContenidosNORMAL();
	this.instance_1.setTransform(-114.25,-22.5,0.5,0.5);

	this.instance_2 = new lib._2contenidosSOBRE();
	this.instance_2.setTransform(-114.25,-22.5,0.5,0.5);

	this.instance_3 = new lib._3contenidosDOWN();
	this.instance_3.setTransform(-114.25,-22.5,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("Ax2jgMAjtAAAIAAHBMgjtAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ax1DhIAAnBMAjrAAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.8,-26.5,342.1,161.7);


(lib.Simbologrupo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CARTAESTATICA();
	this.instance.setTransform(3.25,-108);

	this.instance_1 = new lib.btnAceptar();
	this.instance_1.setTransform(0,135);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_2 = new lib.Mensaje();
	this.instance_2.setTransform(-176.75,-161.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbologrupo, new cjs.Rectangle(-176.7,-161.7,354,323.5), null);


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

	this.actionFrames = [0,12];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		stage.on('drawstart', initStage, this, true);
		function initStage() {
		    stretchToFit();
		} 
		
		this.btnContenidos.addEventListener("click", fl_ClickToGoToWebPage_4); 
		function fl_ClickToGoToWebPage_4() {
			window.open("./Contenidos", "_self");
		}
		  
		this.button_popup.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_2(){
			this.gotoAndPlay(1);
		}
		
		this.btnInicio.addEventListener("click", fl_ClickToGoToWebPage_2);
		function fl_ClickToGoToWebPage_2() {
			window.open("../../../../", "_self");
		}
		
		this.btnVolver.addEventListener("click", fl_ClickToGoToWebPage_3);
		function fl_ClickToGoToWebPage_3() {
			window.open("../", "_self");
		}
		
		
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnActividades.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('./Actividades', '_self');
		});
		
	}
	this.frame_12 = function() {
		this.stop();
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.bntPlay.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('./Cuento', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// mensaje
	this.instance = new lib.CARTA();
	this.instance.setTransform(693,233.75);

	this.button_popup = new lib.btnAceptar();
	this.button_popup.name = "button_popup";
	this.button_popup.setTransform(689.75,476.75);
	new cjs.ButtonHelper(this.button_popup, 0, 1, 2);

	this.instance_1 = new lib.Mensaje();
	this.instance_1.setTransform(513,180,0.5,0.5);

	this.instance_2 = new lib.Simbologrupo();
	this.instance_2.setTransform(689.95,341.75,1,1,0,0,0,0.2,0);
	this.instance_2._off = true;

	this.bntPlay = new lib.btnPlay();
	this.bntPlay.name = "bntPlay";
	this.bntPlay.setTransform(685,345);
	new cjs.ButtonHelper(this.bntPlay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.button_popup},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.bntPlay}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:35.8,regY:32.3,scaleX:0.0028,scaleY:0.0031,x:683.1,y:352.4},10).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:685,y:345},1).wait(1));

	// botones
	this.instance_3 = new lib.btnAyuda();
	this.instance_3.setTransform(1208.75,33.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.btnActividades = new lib.btnActividades();
	this.btnActividades.name = "btnActividades";
	this.btnActividades.setTransform(1013.5,33.5);
	new cjs.ButtonHelper(this.btnActividades, 0, 1, 2);

	this.btnContenidos = new lib.btnContenidos();
	this.btnContenidos.name = "btnContenidos";
	this.btnContenidos.setTransform(784.25,33.5);
	new cjs.ButtonHelper(this.btnContenidos, 0, 1, 2, false, new lib.btnContenidos(), 3);

	this.btnVolver = new lib.btnVolver();
	this.btnVolver.name = "btnVolver";
	this.btnVolver.setTransform(757.5,739.25);
	new cjs.ButtonHelper(this.btnVolver, 0, 1, 2);

	this.btnInicio = new lib.btnInicio();
	this.btnInicio.name = "btnInicio";
	this.btnInicio.setTransform(613.25,740.25);
	new cjs.ButtonHelper(this.btnInicio, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnInicio},{t:this.btnVolver},{t:this.btnContenidos},{t:this.btnActividades},{t:this.instance_3}]}).wait(13));

	// barra
	this.instance_4 = new lib.barraseguredes();
	this.instance_4.setTransform(100,622,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13));

	// tarjeta
	this.instance_5 = new lib.Portada();
	this.instance_5.setTransform(100,52,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13));

	// fondo
	this.instance_6 = new lib.Background();
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(683,384,683,384);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#225693",
	opacity: 0.00,
	manifest: [
		{src:"images/Background.png?1673623920638", id:"Background"},
		{src:"images/barraseguredes.png?1673623920638", id:"barraseguredes"},
		{src:"images/Portada.png?1673623920638", id:"Portada"},
		{src:"images/index_atlas_1.png?1673623920595", id:"index_atlas_1"}
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;