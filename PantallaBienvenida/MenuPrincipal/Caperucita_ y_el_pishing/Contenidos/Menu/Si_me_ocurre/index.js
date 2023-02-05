(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,1272,465,343],[1009,1272,151,260],[1587,554,323,218],[1290,815,441,440],[0,839,1251,248],[640,304,1225,248],[0,1617,1011,56],[1290,1257,406,406],[0,304,638,533],[1733,774,237,236],[1698,1257,263,443],[796,1272,211,211],[1733,1012,230,228],[1162,1420,72,72],[1162,1272,73,72],[1162,1346,73,72],[1013,1534,213,137],[467,1272,327,326],[0,1089,1288,181],[0,0,1283,302],[900,1485,100,100],[1013,1673,382,25],[796,1485,102,102],[640,554,945,259]]}
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



(lib.Diapositivaimg1fondo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva1img1lupa = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva1img1Pagina = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva1img2fondo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva1texto1_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Diapositiva1texto2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Diapositiva1textoCentral = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2im2circle = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2img1fondo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2img1mensaje = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2img1phone = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2img1reloj = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2img1telefono = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2img2emoji1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2img2emoji2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2img2emoji3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2img2notificacion = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2img2police = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2text2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.diapositiva2texto1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Iconodecontenidos = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.posicion = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.SiguienteAtras = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.titulo = function() {
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


(lib.Interpolación10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.diapositiva2img2police();
	this.instance.setTransform(-81.75,-81.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-81.5,163.5,163);


(lib.Interpolación9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.diapositiva2img1telefono();
	this.instance.setTransform(-57.5,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-57,115,114);


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
	this.instance = new lib.diapositiva2img1mensaje();
	this.instance.setTransform(-59.25,-59,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,-59,118.5,118);


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
	this.instance = new lib.diapositiva2img1phone();
	this.instance.setTransform(-65.75,-110.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-110.7,131.5,221.5);


(lib.scroll_dummy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AAAkrQAVAAAOAOQAPAPAAAVIAAHzQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVIAAnzQAAgVAOgPQAPgOAUAAg");
	this.shape.setTransform(5,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgjEdQgOgPAAgUIAAnzQAAgUAOgPQAQgPATAAQAVAAAOAPQAPAPAAAUIAAHzQAAAUgPAPQgOAPgVAAQgTAAgQgPg");
	this.shape_1.setTransform(5,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scroll_dummy, new cjs.Rectangle(-1,-1,12,62), null);


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
	this.instance = new lib.Diapositivaimg1fondo();
	this.instance.setTransform(-116.25,-85.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.2,-85.7,232.5,171.5);


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
	this.instance = new lib.diapositiva1img2fondo();
	this.instance.setTransform(-110.25,-110,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.2,-110,220.5,220);


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
	this.instance = new lib.diapositiva1img1lupa();
	this.instance.setTransform(-37.75,-65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-65,75.5,130);


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
	this.instance = new lib.diapositiva1img1Pagina();
	this.instance.setTransform(-80.75,-54.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-54.5,161.5,109);


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
	this.instance = new lib.diapositiva2img2notificacion();
	this.instance.setTransform(-53.25,-34.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-34.2,106.5,68.5);


(lib.Hit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Egx/AgVMAAAhApMBj/AAAMAAABApg");
	this.shape.setTransform(0,-23.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-230,640,413.8);


(lib.btnIndece = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Iconodecontenidos();
	this.instance.setTransform(-25,-25,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AkzDuIAAnbIJnAAIAAHbg");
	this.shape.setTransform(0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.5,scaleY:0.5}}]}).to({state:[{t:this.instance,p:{scaleX:0.5198,scaleY:0.5201}}]},1).to({state:[{t:this.instance,p:{scaleX:0.5,scaleY:0.5}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-25,61.5,52);


(lib.sobre_siguiente = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FDCE3C").ss(7,1,1).p("AhDgFIBzifABEClIh6ia");
	this.shape.setTransform(58.975,0,1,1,0,0,180);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:false},0).wait(13));

	// Capa_1
	this.instance = new lib.SiguienteAtras();
	this.instance.setTransform(-51,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-51,120.3,102);


(lib.btnSiguiente = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.SiguienteAtras();

	this.instance_1 = new lib.sobre_siguiente();
	this.instance_1.setTransform(77,77,1,1,0,0,0,26,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AI6mkIxzAAIAANJIRzAAg");
	this.shape.setTransform(45,50.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("Ao5GkIAAtHIRzAAIAANHg");
	this.shape_1.setTransform(45,50.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:0,y:0}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.9038,scaleY:0.9038,x:5,y:4}}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,0,116,102);


(lib._2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_17
	this.instance = new lib.Interpolación8("synched",0);
	this.instance.setTransform(81.25,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-58.3},35).to({y:-55},39).wait(1));

	// Capa_16
	this.instance_1 = new lib.Interpolación7("synched",0);
	this.instance_1.setTransform(194.75,-100.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:14.9992},35).to({rotation:0},39).wait(1));

	// Capa_1
	this.instance_2 = new lib.diapositiva2img1reloj();
	this.instance_2.setTransform(61,-220,0.5,0.5);

	this.instance_3 = new lib.diapositiva2img2emoji1();
	this.instance_3.setTransform(-614,0,0.5,0.5);

	this.instance_4 = new lib.diapositiva2img2emoji2();
	this.instance_4.setTransform(-568,0,0.5,0.5);

	this.instance_5 = new lib.diapositiva2img2emoji3();
	this.instance_5.setTransform(-522,4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{scaleX:0.5,scaleY:0.5,x:-522,y:4}},{t:this.instance_4,p:{scaleX:0.5,scaleY:0.5,x:-568,y:0}},{t:this.instance_3,p:{scaleX:0.5,scaleY:0.5,x:-614,y:0}},{t:this.instance_2}]}).to({state:[{t:this.instance_5,p:{scaleX:0.4602,scaleY:0.4602,x:-520,y:6}},{t:this.instance_4,p:{scaleX:0.472,scaleY:0.472,x:-567,y:1}},{t:this.instance_3,p:{scaleX:0.4538,scaleY:0.4538,x:-612,y:2}},{t:this.instance_2}]},35).to({state:[{t:this.instance_5,p:{scaleX:0.5,scaleY:0.5,x:-522,y:4}},{t:this.instance_4,p:{scaleX:0.5,scaleY:0.5,x:-568,y:0}},{t:this.instance_3,p:{scaleX:0.5,scaleY:0.5,x:-614,y:0}},{t:this.instance_2}]},39).wait(1));

	// Capa_19
	this.instance_6 = new lib.Interpolación10("synched",0);
	this.instance_6.setTransform(-548.25,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:116.55},35).to({y:121.5},39).wait(1));

	// Capa_18
	this.instance_7 = new lib.Interpolación9("synched",0);
	this.instance_7.setTransform(75.5,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-14.9992},35).to({rotation:0},39).wait(1));

	// diapositiva2-img1-fondo.png
	this.instance_8 = new lib.diapositiva2img1fondo();
	this.instance_8.setTransform(-25,-240,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(75));

	// diapositiva2-im2-circle.png
	this.instance_9 = new lib.diapositiva2im2circle();
	this.instance_9.setTransform(-651,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-651,-240,945,458);


(lib._1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// diapositiva2-img2-notificacion.png
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(-400.75,69.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.2,regY:0.2,scaleX:1.4847,scaleY:1.3077,x:-400.95,y:32.05},79).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-400.75,y:69.25},120).wait(1));

	// diapositiva1-img1-lupa.png
	this.instance_1 = new lib.Interpolación4("synched",0);
	this.instance_1.setTransform(145.5,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[145.6,-77.7,151.8,-82.6,160,-82.6,169.4,-82.6,176.1,-76.2]}},40).to({guide:{path:[176.1,-76.2,176.3,-76,176.5,-75.9,183.3,-69.1,183.3,-59.4,183.3,-49.8,176.5,-43,169.7,-36.3,160,-36.3,158.8,-36.3,157.7,-36.4]}},40).to({guide:{path:[157.6,-36.2,149.5,-37,143.5,-42.9,143.2,-43.3,142.9,-43.6]}},44).to({guide:{path:[142.9,-43.6,139.1,-47.6,137.7,-52.6]}},35).to({guide:{path:[137.7,-52.6,136.8,-55.8,136.8,-59.4,136.8,-69.1,143.6,-75.9,144.6,-76.9,145.7,-77.8]}},40).wait(1));

	// diapositiva1-img1-Pagina.png
	this.instance_2 = new lib.Interpolación2("synched",0);
	this.instance_2.setTransform(203.85,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},79).to({startPosition:0},120).wait(1));

	// diapositiva1-img2-fondo.png
	this.instance_3 = new lib.Interpolación5("synched",0);
	this.instance_3.setTransform(-457.75,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},79).to({startPosition:0},120).wait(1));

	// Diapositiva-img1-fondo.png
	this.instance_4 = new lib.Interpolación6("synched",0);
	this.instance_4.setTransform(215.25,-80.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},79).to({startPosition:0},120).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-817,-386,1366,768);


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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.phishingquiz.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://phishingquiz.withgoogle.com/', '_blank');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.securekids.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://securekids.es/etiqueta/que-es-phishing/', '_blank');
		});
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.metacompliance.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://www.metacompliance.com/es/lp/ultimate-guide-phishing', '_blank');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.safety.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://es.safetydetectives.com/blog/que-es-el-phishing-guia-sencilla-con-ejemplos/', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.instance = new lib._2();
	this.instance.setTransform(532.65,695.9,1,1,0,0,0,-178.5,-11);

	this.instance_1 = new lib.Diapositiva1textoCentral();
	this.instance_1.setTransform(237,-37,0.5,0.5);

	this.instance_2 = new lib._1();
	this.instance_2.setTransform(509.95,221,1,1,0,0,0,-118.2,20.5);

	this.instance_3 = new lib.diapositiva2texto1();
	this.instance_3.setTransform(11,498,0.5,0.5);

	this.instance_4 = new lib.diapositiva2text2();
	this.instance_4.setTransform(333,783,0.5,0.5);

	this.instance_5 = new lib.Diapositiva1texto2();
	this.instance_5.setTransform(312,250,0.543,0.5);

	this.instance_6 = new lib.diapositiva1texto1_1();
	this.instance_6.setTransform(11,30,0.543,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(11,-37,994.2,961.9), null);


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

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		root.targetTimeline = this;
		root.targetTimeline.loop = true;
		root.targetTimeline.force = 1;
		root.targetTimeline.friction = 0.8;
		root.targetTimeline.direction = -1; // scroll direction
		root.targetTimeline.minFrame = 0; // set the start range value here
		root.targetTimeline.maxFrame = root.targetTimeline.totalFrames - 1; // set the end range value here
		root.targetTimeline.speed = 0;
		root.targetTimeline.pressed = false;
		
		root.start = function ()
		{
			createjs.Touch.enable(stage);
			root.hit.cursor = "default";
			root.gotoAndStop(root.targetTimeline.minFrame);
			canvas.addEventListener('mousewheel', root.onMouseWheel.bind(root));
			canvas.addEventListener('DOMMouseScroll', root.onMouseWheel.bind(root));
			stage.on("stagemousedown", root.onStageMouseDown.bind(root));
			createjs.Ticker.on("tick", root.tickHandler);
		};
		
		root.onMouseWheel = function (e)
		{
			e.preventDefault();
		
			var evt = window.event || e;
			var delta = Math.max(-1, Math.min(1, evt.wheelDelta || -evt.detail));
		
			root.targetTimeline.speed += delta * root.force * root.direction;
		};
		
		root.onStageMouseDown = function (e)
		{
			root.targetTimeline.pressedX = e.stageX / stage.scaleX;
			root.targetTimeline.pressed = true;
			root.targetTimeline.stageMouseUp = stage.on("stagemouseup", root.onStageMouseUp.bind(root));
		};
		
		root.tickHandler = function (e)
		{
			var clamp = root.targetTimeline.loop ? "loopClamp" : "clamp";
			var mouseX = stage.mouseX / stage.scaleX;
			
			if (root.targetTimeline.pressed && mouseX !== root.targetTimeline.pressedX)
			{
				root.targetTimeline.speed = (mouseX > root.targetTimeline.pressedX ? 1 : -1) * root.direction * root.force;
				root.targetTimeline.pressedX = mouseX;
			}
			
			root.targetTimeline.speed *= root.targetTimeline.friction;
			root.targetTimeline.gotoAndStop(root[clamp](root.targetTimeline.currentFrame + root.targetTimeline.speed, root.targetTimeline.minFrame, root.targetTimeline.maxFrame));
		};
		
		root.onStageMouseUp = function (e)
		{
			root.targetTimeline.pressed = false;
			stage.off("stagemouseup", root.targetTimeline.stageMouseUp);
		};
		
		root.loopClamp = function(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
				
			return value;
		};
		
		root.clamp = function(value, min, max)
		{
			if (value < min)
				return max;
			
			if (value > max)
				return min;
				
			return value;
		};
		
		if (!root.hasStarted)
		{
			root.start();
			root.hasStarted = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(61));

	// mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhXgAfiMAAAg/DMCvBAAAMAAAA/Dg");
	mask.setTransform(-0.525,-62.2);

	// scroll_dummy
	this.instance = new lib.scroll_dummy();
	this.instance.setTransform(537,-197,1,1,0,0,0,5,30);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-41.25},60).wait(1));

	// anim
	this.instance_1 = new lib.Símbolo2();
	this.instance_1.setTransform(0.1,165.8,1,1,0,0,0,528,392.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:508.1,regY:444,x:-19.65,y:204.8},0).wait(1).to({x:-19.5,y:192.55},0).wait(1).to({x:-19.4,y:180.35},0).wait(1).to({x:-19.25,y:168.1},0).wait(1).to({x:-19.1,y:155.85},0).wait(1).to({x:-19,y:143.65},0).wait(1).to({x:-18.85,y:131.4},0).wait(1).to({x:-18.7,y:119.2},0).wait(1).to({x:-18.6,y:106.95},0).wait(1).to({x:-18.45,y:94.7},0).wait(1).to({x:-18.3,y:82.5},0).wait(1).to({x:-18.2,y:70.25},0).wait(1).to({x:-18.05,y:58.05},0).wait(1).to({x:-17.9,y:45.8},0).wait(1).to({x:-17.8,y:33.55},0).wait(1).to({x:-17.65,y:21.35},0).wait(1).to({x:-17.5,y:9.1},0).wait(1).to({x:-17.4,y:-3.1},0).wait(1).to({x:-17.25,y:-15.35},0).wait(1).to({x:-17.1,y:-27.6},0).wait(1).to({x:-17,y:-39.8},0).wait(1).to({x:-16.85,y:-52.05},0).wait(1).to({x:-16.7,y:-64.25},0).wait(1).to({x:-16.6,y:-76.5},0).wait(1).to({x:-16.45,y:-88.75},0).wait(1).to({x:-16.3,y:-100.95},0).wait(1).to({x:-16.2,y:-113.2},0).wait(1).to({x:-16.05,y:-125.4},0).wait(1).to({x:-15.9,y:-137.65},0).wait(1).to({x:-15.8,y:-149.9},0).wait(1).to({x:-15.65,y:-162.1},0).wait(1).to({x:-15.5,y:-174.35},0).wait(1).to({x:-15.4,y:-186.55},0).wait(1).to({x:-15.25,y:-198.8},0).wait(1).to({x:-15.1,y:-211.05},0).wait(1).to({x:-15,y:-223.25},0).wait(1).to({x:-14.85,y:-235.5},0).wait(1).to({x:-14.7,y:-247.7},0).wait(1).to({x:-14.6,y:-259.95},0).wait(1).to({x:-14.45,y:-272.2},0).wait(1).to({x:-14.3,y:-284.4},0).wait(1).to({x:-14.2,y:-296.65},0).wait(1).to({x:-14.05,y:-308.85},0).wait(1).to({x:-13.9,y:-321.1},0).wait(1).to({x:-13.8,y:-333.35},0).wait(1).to({x:-13.65,y:-345.55},0).wait(1).to({x:-13.5,y:-357.8},0).wait(1).to({x:-13.4,y:-370},0).wait(1).to({x:-13.25,y:-382.25},0).wait(1).to({x:-13.1,y:-394.5},0).wait(1).to({x:-13,y:-406.7},0).wait(1).to({x:-12.85,y:-418.95},0).wait(1).to({x:-12.7,y:-431.15},0).wait(1).to({x:-12.6,y:-443.4},0).wait(1).to({x:-12.45,y:-455.65},0).wait(1).to({x:-12.3,y:-467.85},0).wait(1).to({x:-12.2,y:-480.1},0).wait(1).to({x:-12.05,y:-492.3},0).wait(1).to({x:-11.9,y:-504.55},0).wait(1).to({x:-11.8,y:-516.8},0).wait(1));

	// rail
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AAA+dQAVAAAOAPQAPAPAAAUMAAAA7XQAAAUgPAPQgOAPgVAAQgUAAgPgPQgOgPAAgUMAAAg7XQAAgUAOgPQAPgPAUAAg");
	this.shape.setTransform(537,-117.629,1,0.5474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgjePQgOgPAAgUMAAAg7XQAAgUAOgPQAQgPATAAQAVAAAOAPQAPAPAAAUMAAAA7XQAAAUgPAPQgOAPgVAAQgTAAgQgPg");
	this.shape_1.setTransform(537,-117.629,1,0.5474);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(61));

	// hit
	this.hit = new lib.Hit();
	this.hit.name = "hit";
	this.hit.setTransform(-566.45,-34.1,1.7587,1.0868,0,0,0,-320.3,-0.1);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.Hit(), 3);

	var maskedShapeInstanceList = [this.hit];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(61));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-560.6,-264,1120.2,403.6);


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

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		if(document.location.href.indexOf('#')>-1){
		this.gotoAndStop(document.location.href.split('#')[1]);
		}
		
		stage.on('drawstart', initStage, this, true);
		function initStage() {
		    stretchToFit();
		}
		
		
		
		
		
		this.btnAtras.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		 function fl_ClickToGoToWebPage_19() {
			window.open("../Como_evitarlo/index.html#final", "_self");
		}	 
		
		
		
		this.btnIndice.addEventListener("click", fl_ClickToGoToWebPage_20);
		function fl_ClickToGoToWebPage_20() {
			window.open("../", "_self");
		}
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnAdelabnte.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('../Contenido_Extra', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// flechas
	this.btnAdelabnte = new lib.btnSiguiente();
	this.btnAdelabnte.name = "btnAdelabnte";
	this.btnAdelabnte.setTransform(745.5,605.5,0.5,0.5,0,0,0,51,51);
	new cjs.ButtonHelper(this.btnAdelabnte, 0, 1, 2, false, new lib.btnSiguiente(), 3);

	this.btnAtras = new lib.btnSiguiente();
	this.btnAtras.name = "btnAtras";
	this.btnAtras.setTransform(422.5,605.5,0.5,0.5,0,0,180,51,51);
	new cjs.ButtonHelper(this.btnAtras, 0, 1, 2, false, new lib.btnSiguiente(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnAtras},{t:this.btnAdelabnte}]}).wait(1));

	// titulo
	this.instance = new lib.posicion();
	this.instance.setTransform(490,547,0.5,0.5);

	this.instance_1 = new lib.titulo();
	this.instance_1.setTransform(358,-5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// imagen_1
	this.instance_2 = new lib.Símbolo1();
	this.instance_2.setTransform(592.8,597.4,1,1.0452,0,0,0,-13.6,196.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// btn menu
	this.btnIndice = new lib.btnIndece();
	this.btnIndice.name = "btnIndice";
	this.btnIndice.setTransform(41,606.5);
	new cjs.ButtonHelper(this.btnIndice, 0, 1, 2, false, new lib.btnIndece(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnIndice).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(609.5,319.5,519.3,314);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1187,
	height: 649,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1669424809727", id:"index_atlas_1"}
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