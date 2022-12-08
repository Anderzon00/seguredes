(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1093,1334,708,106],[1093,1225,707,107],[1749,1642,97,97],[1429,1610,158,62],[1589,1642,158,62],[1429,1738,97,97],[1023,1794,97,97],[1429,1674,158,62],[1277,1610,150,150],[1093,1610,182,182],[1093,1442,314,166],[1409,1442,314,166],[371,1629,315,166],[0,0,2376,1223],[371,1797,122,252],[870,1718,151,151],[688,1718,180,180],[1725,1442,198,198],[495,1797,169,169],[0,1225,707,402],[0,1629,369,430],[709,1225,382,491],[1122,1794,196,44],[1803,1225,186,186]]}
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



(lib.botonaceptar2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Botonaceptar = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.botonrompecabeza = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.btnEntrarClic = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btnentrarNormal = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.btnrompecabezasclic = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.btnRompecabezashover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.btnEntrarhover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.circulotitulorosa = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.circulotitulo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.estrella1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.estrella2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.estrella3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.globo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.icono = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.imgQuiz = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.imgrompecabezas = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.imgsopaLetras = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Mensaje = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.niñaderecha = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.niñoIzquierda = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.titulocontraseña = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Xtitulo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(23);
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


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.circulotitulo();
	this.instance.setTransform(816.95,-9,0.5161,0.5161,0,0,180);

	this.instance_1 = new lib.circulotitulorosa();
	this.instance_1.setTransform(754,6,0.5,0.5,0,0,180);

	this.instance_2 = new lib.circulotitulo();
	this.instance_2.setTransform(808.5,86,0.25,0.25,0,0,180);

	this.instance_3 = new lib.Xtitulo();
	this.instance_3.setTransform(766,63,0.5,0.5,0,0,180);

	this.instance_4 = new lib.circulotitulo();
	this.instance_4.setTransform(-12,-9,0.5161,0.5161);

	this.instance_5 = new lib.circulotitulorosa();
	this.instance_5.setTransform(59,12,0.5,0.5);

	this.instance_6 = new lib.circulotitulo();
	this.instance_6.setTransform(-8,86,0.25,0.25);

	this.instance_7 = new lib.Xtitulo();
	this.instance_7.setTransform(10,63,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-12,-9,829,165), null);


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
p.nominalBounds = new cjs.Rectangle(-35,-34.7,75.5,75.5);


(lib.Interpolación8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.globo();
	this.instance.setTransform(-30.5,-63,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-63,61,126);


(lib.Interpolación7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.niñoIzquierda();
	this.instance.setTransform(-95.5,-122.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-122.7,191,245.5);


(lib.Interpolación6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.estrella3();
	this.instance.setTransform(-78.75,-41.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.7,-41.5,157.5,83);


(lib.Interpolación5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.estrella2();
	this.instance.setTransform(-78.5,-41.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-41.5,157,83);


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
	this.instance = new lib.estrella1();
	this.instance.setTransform(-78.5,-41.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-41.5,157,83);


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
	this.instance = new lib.niñaderecha();
	this.instance.setTransform(-92.25,-107.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.2,-107.5,184.5,215);


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
	this.instance = new lib.imgrompecabezas();
	this.instance.setTransform(-99,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-99,198,198);


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
	this.instance = new lib.imgQuiz();
	this.instance.setTransform(-99,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-99,180,180);


(lib.Interpolación2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.imgsopaLetras();
	this.instance.setTransform(-99,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-99,169,169);


(lib.btnRompecabezas = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.botonrompecabeza();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.btnRompecabezashover();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.btnrompecabezasclic();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,48.5);


(lib.btnEntrar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnEntrarClic();
	this.instance.setTransform(0,0,0.7,0.7);

	this.instance_1 = new lib.btnEntrarhover();
	this.instance_1.setTransform(0,0,0.7,0.7);

	this.instance_2 = new lib.btnentrarNormal();
	this.instance_2.setTransform(0,0,0.6835,0.6838);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.6,43.4);


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
	this.instance = new lib.Interpolación7("synched",0);
	this.instance.setTransform(95.5,180.35,1,1,0,0,0,0,57.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,245.5);


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
	this.instance.setTransform(-6,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8},24).to({y:-1},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-42.7,75.5,82.5);


(lib.niños = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// globo.png
	this.instance = new lib.Interpolación8("synched",0);
	this.instance.setTransform(532.55,-439.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:520.35,y:-320.8},74).to({x:507.15,y:-439.95},79).wait(1));

	// niña-derecha.png
	this.instance_1 = new lib.Interpolación2("synched",0);
	this.instance_1.setTransform(462.85,-365.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:458.6,y:-302.15},74).to({x:462.85,y:-365.25},79).wait(1));

	// niñoIzquierda.png
	this.instance_2 = new lib.Símbolo1();
	this.instance_2.setTransform(-499.95,-165.75,1,1,-10.9459,0,0,65.5,201.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-5.6518,x:-477.95,y:-90.7},74).to({rotation:-10.9459,x:-499.95,y:-165.75},79).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-602.4,-502.9,1165.5,462.5);


(lib.neon2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(418.4,71.5,1,1,0,0,0,418.4,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.neon2, new cjs.Rectangle(-12,-9,829,165), null);


(lib.neon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.neon2();
	this.instance.setTransform(418.4,71.5,1,1,0,0,0,418.4,71.5);
	var instanceFilter_1 = new cjs.ColorFilter(0.86,0.86,0.86,1,9.8,35.7,35.7,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-14,-11,833,169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).to(new cjs.ColorFilter(0.61,0.61,0.61,1,74.1,23.79,99.45,0), 24).to(new cjs.ColorFilter(0.86,0.86,0.86,1,9.8,35.7,35.7,0), 25).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:24, x:-14, y:-11, w:833, h:169});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-14, y:-11, w:833, h:169});
	this.filterCacheList.push({instance: this.instance, startFrame:25, endFrame:49, x:-14, y:-11, w:833, h:169});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-9,829,165);


(lib.img_act3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación3("synched",0);
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},24).to({y:0},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-109,180,190);


(lib.img_act2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación2_1("synched",0);
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},24).to({y:0},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-109,169,179);


(lib.img_act1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},24).to({y:0},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-109,198,208);


(lib.Estrellas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// estrella-1.png
	this.instance = new lib.Interpolación4("synched",0);
	this.instance.setTransform(-484.5,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-102.5},24).to({y:-94.5},25).wait(1));

	// estrella-2.png
	this.instance_1 = new lib.Interpolación5("synched",0);
	this.instance_1.setTransform(-251.5,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-102.5},24).to({y:-93.5},25).wait(1));

	// estrella-3.png
	this.instance_2 = new lib.Interpolación6("synched",0);
	this.instance_2.setTransform(-13.25,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-102.5},24).to({y:-94.5},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-563,-144,628.5,92);


(lib.fondo2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.titulocontraseña();
	this.instance.setTransform(759,460,0.5308,0.5308);

	this.instance_1 = new lib.titulocontraseña();
	this.instance_1.setTransform(523,460,0.5308,0.5308);

	this.instance_2 = new lib.Estrellas();
	this.instance_2.setTransform(596.35,163.2,1.0256,1.0617,0,0,0,-233.7,-94.9);

	this.instance_3 = new lib.neon();
	this.instance_3.setTransform(614.75,120.1,1.0617,1.0617,0,0,0,418.6,71.7);

	this.instance_4 = new lib.Símbolo3();
	this.instance_4.setTransform(575.65,491.4,0.9954,0.9954,0,0,0,50.6,11.2);

	this.instance_5 = new lib.niños();
	this.instance_5.setTransform(614.1,619.7,1.0046,1.0046,0,0,0,-0.4,-0.5);

	this.btnEntrar2 = new lib.btnEntrar();
	this.btnEntrar2.name = "btnEntrar2";
	this.btnEntrar2.setTransform(815.35,524.2,1.0617,1.0617,0,0,0,55.4,21.8);
	new cjs.ButtonHelper(this.btnEntrar2, 0, 1, 2);

	this.btnEntrar1 = new lib.btnEntrar();
	this.btnEntrar1.name = "btnEntrar1";
	this.btnEntrar1.setTransform(578.8,524.2,1.0617,1.0617,0,0,0,55.4,21.8);
	new cjs.ButtonHelper(this.btnEntrar1, 0, 1, 2);

	this.btnRompecabezas = new lib.btnRompecabezas();
	this.btnRompecabezas.name = "btnRompecabezas";
	this.btnRompecabezas.setTransform(340,509.85,1.0617,1.0617,0,0,0,24.4,24.4);
	new cjs.ButtonHelper(this.btnRompecabezas, 0, 1, 2);

	this.instance_6 = new lib.img_act3();
	this.instance_6.setTransform(807.85,267.75,0.5308,0.5308,0,0,0,-9.8,-8.8);

	this.instance_7 = new lib.img_act2();
	this.instance_7.setTransform(572.6,268.75,0.5308,0.5308,0,0,0,-15.2,-14.3);

	this.instance_8 = new lib.img_act1();
	this.instance_8.setTransform(334.2,263.25,0.5308,0.5308,0,0,0,-0.8,0.1);

	this.instance_9 = new lib.fondo();
	this.instance_9.setTransform(0,0,0.5032,0.4887);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.btnRompecabezas},{t:this.btnEntrar1},{t:this.btnEntrar2},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.instance_3.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondo2, new cjs.Rectangle(0,0,1195.6,597.7), null);


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

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		var _this = this;
		 
		
		 
		_this.btnRompecabezas.on('click', function(){
			
			
		 var rnd= Math.floor(Math.random() * 3);	
			console.log(rnd);
			
			
			 
		switch (rnd) {
		  case 0:
		    window.open('../Rompecabezas/1', '_self');
		    break;    
		  case 1:
		    window.open('../Rompecabezas/2', '_self');
		    // expected output: "Mangoes and papayas are $2.79 a pound."
		    break;
		  default:
		    window.open('../Rompecabezas/3', '_self');
		} 
			
		}); 
		 
		_this.btnEntrar1.on('click', function(){	
			
		if ($("#imput1").val()=="Respeto") 
			window.open('../Sopa', '_self'); 
			else  		
		_this.gotoAndStop(1);	
			
		});
			 
		 
		_this.btnEntrar2.on('click', function(){ 
				
		if ($("#imput2").val()=="Confianza") 
			
			window.open('../quiz', '_self'); 
			else 		 
		_this.gotoAndStop(1); 
		 
		});
	}
	this.frame_1 = function() {
		var _this = this;
		 
		
		_this.btnAceptar.on('click', function(){
		
		_this.gotoAndStop(0);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Estrellas
	this.instance = new lib.titulocontraseña();
	this.instance.setTransform(756,439,0.5054,0.5308);

	this.instance_1 = new lib.titulocontraseña();
	this.instance_1.setTransform(521,439,0.5091,0.5308);

	this.instance_2 = new lib.Estrellas();
	this.instance_2.setTransform(593.65,142.65,1.0256,1.0617,0,0,0,-233.7,-94.9);

	this.instance_3 = new lib.CARTAESTATICA();
	this.instance_3.setTransform(575.2,197);

	this.btnAceptar = new lib.btnAceptar();
	this.btnAceptar.name = "btnAceptar";
	this.btnAceptar.setTransform(571.95,376);
	new cjs.ButtonHelper(this.btnAceptar, 0, 1, 2);

	this.instance_4 = new lib.Mensaje();
	this.instance_4.setTransform(395,143,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.btnAceptar},{t:this.instance_3}]},1).wait(1));

	// Capa_3
	this.instance_5 = new lib.neon();
	this.instance_5.setTransform(612.05,99.55,1.0617,1.0617,0,0,0,418.6,71.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(1));
	this.instance_5.addEventListener("tick", AdobeAn.handleFilterCache);

	// niños
	this.imput1 = new lib.an_TextInput({'id': 'imput1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.imput1.name = "imput1";
	this.imput1.setTransform(571.45,469.4,1.0092,1.0092,0,0,0,50,11.1);

	this.text1 = new lib.Símbolo3();
	this.text1.name = "text1";
	this.text1.setTransform(523.75,470.85,0.9765,0.9954,0,0,0,1.2,11.2);

	this.imput2 = new lib.an_TextInput({'id': 'imput2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.imput2.name = "imput2";
	this.imput2.setTransform(756.8,470.85,0.9786,1.0046,0,0,0,-0.5,11.1);

	this.instance_6 = new lib.niños();
	this.instance_6.setTransform(611.4,599.15,1.0046,1.0046,0,0,0,-0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.imput2},{t:this.text1},{t:this.imput1}]}).to({state:[]},1).wait(1));

	// btn
	this.btnEntrar2 = new lib.btnEntrar();
	this.btnEntrar2.name = "btnEntrar2";
	this.btnEntrar2.setTransform(810.85,503.65,1.0617,1.0617,0,0,0,55.4,21.8);
	new cjs.ButtonHelper(this.btnEntrar2, 0, 1, 2);

	this.btnEntrar1 = new lib.btnEntrar();
	this.btnEntrar1.name = "btnEntrar1";
	this.btnEntrar1.setTransform(576.7,503.65,1.0617,1.0617,0,0,0,55.4,21.8);
	new cjs.ButtonHelper(this.btnEntrar1, 0, 1, 2);

	this.btnRompecabezas = new lib.btnRompecabezas();
	this.btnRompecabezas.name = "btnRompecabezas";
	this.btnRompecabezas.setTransform(337.3,489.3,1.0617,1.0617,0,0,0,24.4,24.4);
	new cjs.ButtonHelper(this.btnRompecabezas, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnRompecabezas},{t:this.btnEntrar1},{t:this.btnEntrar2}]}).to({state:[]},1).wait(1));

	// imagenes
	this.instance_7 = new lib.img_act3();
	this.instance_7.setTransform(805.15,247.2,0.5308,0.5308,0,0,0,-9.8,-8.8);

	this.instance_8 = new lib.img_act2();
	this.instance_8.setTransform(569.9,248.2,0.5308,0.5308,0,0,0,-15.2,-14.3);

	this.instance_9 = new lib.img_act1();
	this.instance_9.setTransform(331.5,242.7,0.5308,0.5308,0,0,0,-0.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).to({state:[]},1).wait(1));

	// FONDO
	this.instance_10 = new lib.fondo();
	this.instance_10.setTransform(-3,-21,0.5032,0.4887);

	this.instance_11 = new lib.fondo2();
	this.instance_11.setTransform(579.8,221.7,1,1,0,0,0,597.8,309.7);
	this.instance_11.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance_11.cache(-2,-2,1200,602);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(565.5,225.5,627.0999999999999,351.20000000000005);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1189,
	height: 649,
	fps: 25,
	color: "#235594",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_1.png?1670455741251", id:"index_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1670455741318", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1670455741318", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1670455741318", id:"an.TextInput"}
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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