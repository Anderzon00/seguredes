(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pantalla principal_atlas_1", frames: [[1968,1668,53,29],[545,1721,142,40],[689,1721,142,40],[545,1668,198,51],[745,1668,198,51],[1969,1617,49,49],[1917,1667,49,48],[1917,1564,61,49],[945,1668,49,47],[1917,1615,50,50],[1980,1564,50,51],[0,0,2043,1394],[2017,1396,20,30],[1443,1396,260,367],[996,1668,43,43],[1705,1396,210,357],[0,1396,543,517],[1917,1396,98,98],[1072,1396,369,350],[1917,1496,106,66],[545,1396,525,270]]}
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



(lib.AnimacionImpact = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.botónIngresarClic = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.botóningresar1 = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.botónManualUsuarioClic = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.botónManualUsuario = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.EmoticonCorazon = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.EmoticonHappy = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.emoticonLike = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.EmoticonMuerto = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.EmoticonSacaLengua = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.EmoticonSmile = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Formacieloazuloscuro8 = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.GarfieldCarnada = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.HombreCarnada = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.información = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.manoDerechaAnimar = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ManoIzquierdaTelefono = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Manual = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Niñosencimadellibro = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.PerfilFacebookCarnada = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Títuloyfrase = function() {
	this.initialize(ss["pantalla principal_atlas_1"]);
	this.gotoAndStop(20);
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


(lib.titulo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Títuloyfrase();
	this.instance.setTransform(-262.5,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.5,-135,525,270);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Niñosencimadellibro();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,369,350), null);


(lib.pescador = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.HombreCarnada();
	this.instance.setTransform(84,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pescador, new cjs.Rectangle(84,0,260,367), null);


(lib.mano3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.manoDerechaAnimar();
	this.instance.setTransform(-93,-179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mano3, new cjs.Rectangle(-93,-179,210,357), null);


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
	this.instance = new lib.manoDerechaAnimar();
	this.instance.setTransform(-105,-178.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mano, new cjs.Rectangle(-105,-178.5,210,357), null);


(lib.libro = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Niñosencimadellibro();
	this.instance.setTransform(-8,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.libro, new cjs.Rectangle(-8,-178,369,350), null);


(lib.fondodDer = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Formacieloazuloscuro8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondodDer, new cjs.Rectangle(0,0,2043,1394), null);


(lib.pantallamov = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PerfilFacebookCarnada();
	this.instance.setTransform(-53,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-33,106,66);


(lib.btnManual = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.información();
	this.instance.setTransform(68.5,8);

	this.instance_1 = new lib.Manual();
	this.instance_1.setTransform(7,-51);

	this.instance_2 = new lib.botónManualUsuario();
	this.instance_2.setTransform(-111.5,-29);

	this.instance_3 = new lib.botónManualUsuarioClic();
	this.instance_3.setTransform(-127,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:-111.5,y:-29}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:7}},{t:this.instance,p:{x:68.5,y:8,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_3},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:7}},{t:this.instance,p:{x:66,y:-8,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.8848,scaleY:0.881,x:-108,y:-26}},{t:this.instance_1,p:{scaleX:0.9591,scaleY:0.9793,x:6}},{t:this.instance,p:{x:64,y:-7,scaleX:0.9534,scaleY:0.9535}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-51,238.5,102);


(lib.btnIngresar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.botóningresar1();
	this.instance.setTransform(0,-20);

	this.instance_1 = new lib.botónIngresarClic();
	this.instance_1.setTransform(0,-20,1.0421,1.1496);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20,148,46);


(lib.ancla = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.GarfieldCarnada();
	this.instance.setTransform(-10,0,0.95,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ancla, new cjs.Rectangle(-10,0,19,30), null);


(lib.tarjeta = function(mode,startPosition,loop,reversed) {
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
		this.stop();
		
		
		 
		 
		var _this = this;
		 
		stage.enableMouseOver(3);
		_this.button_7.on('mouseover', function(){
		 
		_this.gotoAndPlay(2);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Capa_1
	this.button_7 = new lib.pantallamov();
	this.button_7.name = "button_7";
	this.button_7.setTransform(-1,-23.1,1,1,0,0,0,0,-23.1);
	new cjs.ButtonHelper(this.button_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_7).wait(4).to({rotation:14.9992,x:-0.9},0).wait(5).to({rotation:0,x:-0.95},0).wait(5).to({regX:0.1,regY:-23,rotation:-14.9994,x:-0.9,y:-23.05},0).wait(5).to({regY:-23.1,rotation:0,x:-0.85,y:-23.15},0).wait(5).to({rotation:14.9996,x:-0.8,y:-23.1},0).wait(5).to({regY:-23.2,rotation:0,y:-23.25},0).wait(5).to({scaleX:0.9999,scaleY:0.9999,rotation:-15.0001,x:-0.85,y:-23.3},0).wait(5).to({scaleX:1,scaleY:1,rotation:0,x:-0.75,y:-23.2},0).wait(5).to({scaleX:0.9999,scaleY:0.9999,rotation:14.9984,x:-0.7,y:-23.15},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-46.4,131.5,91.3);


(lib.pantalla = function(mode,startPosition,loop,reversed) {
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
	this.movieClip_6 = new lib.tarjeta();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.setTransform(137,33);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pantalla, new cjs.Rectangle(83,0,106,66), null);


(lib.mano2 = function(mode,startPosition,loop,reversed) {
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
	this.movieClip_3 = new lib.mano();
	this.movieClip_3.name = "movieClip_3";

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mano2, new cjs.Rectangle(-105,-178.5,210,357), null);


(lib.celular = function(mode,startPosition,loop,reversed) {
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
	this.movieClip_1 = new lib.mano3();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(214,516.5);

	this.instance = new lib.EmoticonMuerto();
	this.instance.setTransform(463,205);

	this.instance_1 = new lib.EmoticonHappy();
	this.instance_1.setTransform(147,21);

	this.instance_2 = new lib.emoticonLike();
	this.instance_2.setTransform(109,128);

	this.instance_3 = new lib.ManoIzquierdaTelefono();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.movieClip_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.celular, new cjs.Rectangle(0,0,543,694.5), null);


(lib.Interpolación1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnManual();
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-51,238.5,102);


(lib.pescador2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ancla();
	this.instance.setTransform(178.95,143,1,1,0,0,0,10,15);

	this.instance_1 = new lib.pantalla();
	this.instance_1.setTransform(81,176,1,1,0,0,0,53,33);

	this.instance_2 = new lib.pescador();
	this.instance_2.setTransform(193,183.5,1,1,0,0,0,152,183.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111,0,274,367);


(lib.MANOMOVIMIENTO = function(mode,startPosition,loop,reversed) {
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
	this.mano2 = new lib.mano2();
	this.mano2.name = "mano2";
	this.mano2.setTransform(-46,166.5);

	this.instance = new lib.EmoticonMuerto();
	this.instance.setTransform(189.5,-140);

	this.instance_1 = new lib.emoticonLike();
	this.instance_1.setTransform(-164,-220);

	this.instance_2 = new lib.EmoticonHappy();
	this.instance_2.setTransform(-126.5,-326);

	this.instance_3 = new lib.ManoIzquierdaTelefono();
	this.instance_3.setTransform(-271.5,-348);

	this.instance_4 = new lib.AnimacionImpact();
	this.instance_4.setTransform(-52,-78);

	this.instance_5 = new lib.EmoticonSmile();
	this.instance_5.setTransform(188,-129);

	this.instance_6 = new lib.EmoticonSacaLengua();
	this.instance_6.setTransform(-131,-318);

	this.instance_7 = new lib.EmoticonCorazon();
	this.instance_7.setTransform(-163,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{x:-271.5,y:-348}},{t:this.instance_2,p:{x:-126.5,y:-326}},{t:this.instance_1,p:{x:-164,y:-220}},{t:this.instance,p:{x:189.5,y:-140}},{t:this.mano2,p:{x:-46,y:166.5}}]}).to({state:[{t:this.instance_3,p:{x:-272,y:-336}},{t:this.mano2,p:{x:-41.55,y:138.5}},{t:this.instance_2,p:{x:-129,y:-316}},{t:this.instance_1,p:{x:-166,y:-210}},{t:this.instance,p:{x:187,y:-127}}]},1).to({state:[{t:this.instance_3,p:{x:-272,y:-336}},{t:this.mano2,p:{x:-41.55,y:123.5}},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272,-348,543.5,693);


// stage content:
(lib.pantallaprincipal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [33,155];
	// timeline functions:
	this.frame_33 = function() {
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.btnIngresar.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("./PantallaBienvenida", "_self");
		}
	}
	this.frame_155 = function() {
		var _this = this;
		 
		_this.gotoAndPlay(98);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(122).call(this.frame_155).wait(2));

	// Capa_2
	this.instance = new lib.libro();
	this.instance.setTransform(644.5,323,1,1,0,0,0,184.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).to({x:611.3,y:309.2},10).to({x:593.3,y:309.75},14).to({x:619.3,y:323},12).to({x:630.7},11).to({x:644.5},11).to({_off:true},1).wait(1));

	// libro
	this.instance_1 = new lib.Símbolo1();
	this.instance_1.setTransform(973.35,771.1,0.1335,0.1335,0,0,0,189.5,174.8);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(1).to({regX:185.9,regY:176.4,scaleX:0.1414,scaleY:0.1414,x:972.8,y:769.55,alpha:0.1428},0).wait(1).to({scaleX:0.1492,scaleY:0.1492,x:972.7,y:767.7,alpha:0.2856},0).wait(1).to({scaleX:0.1571,scaleY:0.1571,x:972.6,y:765.9,alpha:0.4285},0).wait(1).to({scaleX:0.1649,scaleY:0.1649,x:972.55,y:764.15,alpha:0.5713},0).wait(1).to({scaleX:0.1728,scaleY:0.1728,x:972.45,y:762.3,alpha:0.7141},0).wait(1).to({scaleX:0.1806,scaleY:0.1806,x:972.35,y:760.55,alpha:0.8569},0).wait(1).to({scaleX:0.1884,scaleY:0.1884,x:972.3,y:758.8,alpha:0.9998},0).wait(1).to({scaleX:0.1963,scaleY:0.1963,x:972.25,y:756.95},0).wait(1).to({scaleX:0.2041,scaleY:0.2041,x:972.15,y:755.2},0).wait(1).to({scaleX:0.212,scaleY:0.212,x:972.05,y:753.4},0).wait(1).to({scaleX:0.2198,scaleY:0.2198,x:972,y:751.6},0).wait(1).to({scaleX:0.2277,scaleY:0.2277,x:971.9,y:749.8},0).wait(1).to({scaleX:0.2355,scaleY:0.2355,x:971.85,y:748.05},0).wait(1).to({scaleX:0.2439,scaleY:0.2457,x:963.25,y:727.8},0).wait(1).to({scaleX:0.2523,scaleY:0.256,x:957.45,y:716.9},0).wait(1).to({scaleX:0.2607,scaleY:0.2662,x:943.35,y:703.8},0).wait(1).to({scaleX:0.2691,scaleY:0.2765,x:927,y:693.15},0).wait(1).to({scaleX:0.2775,scaleY:0.2868,x:910.45,y:682.95},0).wait(1).to({scaleX:0.2859,scaleY:0.297,x:893.8,y:672.75},0).wait(1).to({scaleX:0.2943,scaleY:0.3073,x:877.15,y:662.6},0).wait(1).to({scaleX:0.3027,scaleY:0.3175,x:860.5,y:652.45},0).wait(1).to({scaleX:0.3111,scaleY:0.3278,x:843.75,y:642.55},0).wait(1).to({scaleX:0.3195,scaleY:0.338,x:826.05,y:634.5},0).wait(1).to({scaleX:0.3279,scaleY:0.3483,x:811,y:622.2},0).wait(1).to({scaleX:0.3363,scaleY:0.3585,x:801.1,y:605.55},0).wait(1).to({scaleX:0.3447,scaleY:0.3688,x:798.05,y:595.75,alpha:0.9999},0).wait(1).to({scaleX:0.3531,scaleY:0.379,x:795.35,y:585.9},0).wait(1).to({scaleX:0.3615,scaleY:0.3893,x:792.85,y:575.95},0).wait(1).to({scaleX:0.3699,scaleY:0.3995,x:790.5,y:565.95},0).wait(1).to({scaleX:0.3783,scaleY:0.4098,x:788.35,y:556},0).wait(1).to({scaleX:0.3867,scaleY:0.42,x:786.45,y:545.95},0).wait(1).to({scaleX:0.395,scaleY:0.4303,x:784.85,y:535.8},0).wait(1).to({scaleX:0.4034,scaleY:0.4405,x:784,y:525.65},0).wait(1).to({scaleX:0.4118,scaleY:0.4508,x:782.35,y:515.5},0).wait(1).to({scaleX:0.4202,scaleY:0.461,x:779.6,y:505.65},0).wait(1).to({scaleX:0.4286,scaleY:0.4713,x:776.25,y:496},0).wait(1).to({scaleX:0.437,scaleY:0.4815,x:772.4,y:486.5},0).wait(1).to({scaleX:0.4454,scaleY:0.4918,x:768.2,y:477.15},0).wait(1).to({scaleX:0.4762,scaleY:0.5173,x:763.65,y:468},0).wait(1).to({scaleX:0.507,scaleY:0.5428,x:758.65,y:459},0).wait(1).to({scaleX:0.5378,scaleY:0.5683,x:753.3,y:450.2},0).wait(1).to({scaleX:0.5686,scaleY:0.5938,x:747.65,y:441.65},0).wait(1).to({scaleX:0.5993,scaleY:0.6193,x:741.45,y:433.45},0).wait(1).to({scaleX:0.6301,scaleY:0.6448,x:734.85,y:425.55},0).wait(1).to({scaleX:0.6609,scaleY:0.6703,x:727.6,y:418.25},0).wait(1).to({scaleX:0.6917,scaleY:0.6958,x:719.7,y:411.7,alpha:1},0).wait(1).to({scaleX:0.7225,scaleY:0.7213,x:710.9,y:406.3},0).wait(1).to({scaleX:0.7532,scaleY:0.7523,x:702.25,y:401},0).wait(1).to({scaleX:0.784,scaleY:0.7832,x:695.2,y:393.45},0).wait(1).to({scaleX:0.8148,scaleY:0.8142,x:688.4,y:385.7},0).wait(1).to({scaleX:0.8456,scaleY:0.8451,x:681.65,y:377.95},0).wait(1).to({scaleX:0.8764,scaleY:0.876,x:674.85,y:370.25},0).wait(1).to({scaleX:0.9071,scaleY:0.907,x:668.05,y:362.6},0).wait(1).to({scaleX:0.9379,scaleY:0.9379,x:661.1,y:355},0).wait(1).to({scaleX:0.9687,scaleY:0.9689,x:653.9,y:347.6},0).wait(1).to({scaleX:0.9995,scaleY:0.9998,x:645.75,y:341.3},0).to({_off:true},1).wait(60));

	// btnIngresar
	this.instance_2 = new lib.btnIngresar();
	this.instance_2.setTransform(1625.8,480,1,1,0,0,0,71,0);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.btnIngresar = new lib.btnIngresar();
	this.btnIngresar.name = "btnIngresar";
	this.btnIngresar.setTransform(1068,475,1,1,0,0,0,71,0);
	new cjs.ButtonHelper(this.btnIngresar, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.btnIngresar}]},40).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:1068,y:475},40).wait(117));

	// seguredes
	this.instance_3 = new lib.titulo("synched",0);
	this.instance_3.setTransform(1621.5,315);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:1069.7,y:320},40).wait(117));

	// manual
	this.instance_4 = new lib.Interpolación1("synched",0);
	this.instance_4.setTransform(1871.45,706);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:1243},39).to({startPosition:0},1).wait(117));

	// hombre
	this.instance_5 = new lib.pescador2();
	this.instance_5.setTransform(-186,584.5,1,1,0,0,0,210,183.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({x:522.05},26).to({x:525.8},1).wait(117));

	// celular
	this.instance_6 = new lib.celular();
	this.instance_6.setTransform(-534.15,439.5,1,1,0,0,0,271.5,318.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.MANOMOVIMIENTO();
	this.instance_7.setTransform(188.5,469);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},13).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).wait(1).to({regY:347.2,x:-506.35,y:468.2},0).wait(1).to({x:-478.55},0).wait(1).to({x:-450.75},0).wait(1).to({x:-422.95},0).wait(1).to({x:-395.15},0).wait(1).to({x:-367.35},0).wait(1).to({x:-339.55},0).wait(1).to({x:-311.75},0).wait(1).to({x:-283.95},0).wait(1).to({x:-256.2},0).wait(1).to({x:-228.4},0).wait(1).to({x:-200.6},0).wait(1).to({x:-172.8},0).wait(1).to({x:-145},0).wait(1).to({x:-117.2},0).wait(1).to({x:-89.4},0).wait(1).to({x:-61.6},0).wait(1).to({x:-33.8},0).wait(1).to({x:-6.05},0).wait(1).to({x:21.75},0).wait(1).to({x:49.55},0).wait(1).to({x:77.35},0).wait(1).to({x:105.15},0).wait(1).to({x:132.95},0).wait(1).to({x:160.75},0).wait(1).to({x:188.55},0).to({_off:true},1).wait(117));

	// der_fondo
	this.instance_8 = new lib.fondodDer();
	this.instance_8.setTransform(-640.45,585,1,1,0,0,0,1021.5,697);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:-615.45,y:585.05},0).wait(1).to({x:-590.5},0).wait(1).to({x:-565.55},0).wait(1).to({x:-540.6},0).wait(1).to({x:-515.6},0).wait(1).to({x:-490.65},0).wait(1).to({x:-465.7},0).wait(1).to({x:-440.75},0).wait(1).to({x:-415.8},0).wait(1).to({x:-390.8},0).wait(1).to({x:-365.85},0).wait(1).to({x:-340.9},0).wait(1).to({x:-315.95},0).wait(1).to({x:-291},0).wait(1).to({x:-266},0).wait(1).to({x:-241.05},0).wait(1).to({x:-216.1},0).wait(1).to({x:-191.15},0).wait(1).to({x:-166.2},0).wait(1).to({x:-141.2},0).wait(1).to({x:-116.25},0).wait(1).to({x:-91.3},0).wait(1).to({x:-66.35},0).wait(1).to({x:-41.4},0).wait(1).to({x:-16.4},0).wait(1).to({x:8.55},0).wait(1).to({x:33.5},0).wait(1).to({x:58.45},0).wait(1).to({x:83.4},0).wait(1).to({x:108.4},0).wait(1).to({x:133.35},0).wait(1).to({x:158.3},0).wait(1).to({x:183.25},0).wait(1).to({x:208.25},0).wait(1).to({x:233.2},0).wait(1).to({x:258.15},0).wait(1).to({x:283.1},0).wait(1).to({x:308.05},0).wait(1).to({x:333.05},0).wait(1).to({x:333},0).wait(117));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-978.9,272,2961.9,1010.0999999999999);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#225693",
	opacity: 1.00,
	manifest: [
		{src:"images/pantalla principal_atlas_1.png", id:"pantalla principal_atlas_1"}
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