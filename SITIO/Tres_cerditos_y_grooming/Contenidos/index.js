(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1079,0,720,768],[1726,1408,249,259],[1524,1889,472,127],[1210,1180,472,127],[1210,1309,448,125],[1210,1436,448,125],[870,1635,854,125],[870,1762,854,125],[0,1767,760,127],[762,1889,760,127],[1726,1180,303,226],[0,1043,1208,590],[0,0,1077,1041],[0,1635,868,130],[582,1896,148,129],[1792,922,150,106],[1079,922,78,77],[1210,1563,382,25],[0,1896,580,127],[1210,922,580,127],[1210,1051,580,127],[1792,1030,113,122],[762,1767,102,102],[1079,770,765,150]]}
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



(lib.BarraContenidos = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BrazoChica = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ComoEvitarlo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ComoEvitarlo_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ComoOcurre = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.btn_comoOcurre_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ContenidoExtra = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ContenidoExtra_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Btn_Quedebohacer_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Btn_Quedebohacer_Hover_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ChatCHica = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Chica = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Fondo11111111 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Frase = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Inseguridadpngcopia = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Mensaje = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Peligro = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.posición = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Quees = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Queespngcopia = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.QueEsHover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Seguridad = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.SiguienteAtras = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Tituloindicecontenidos = function() {
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
	this.instance = new lib.BrazoChica();
	this.instance.setTransform(-62.25,-64.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-64.7,124.5,129.5);


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
	this.instance = new lib.Peligro();
	this.instance.setTransform(-35.75,-37.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-37.2,39,38.5);


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
	this.instance = new lib.Fondo11111111();
	this.instance.setTransform(-139.25,-178,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.2,-178,538.5,520.5);


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
	this.instance = new lib.Mensaje();
	this.instance.setTransform(-35.75,-37.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-37.2,75,53);


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
	this.instance = new lib.ChatCHica();
	this.instance.setTransform(-93.25,-64,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.2,-64,151.5,113);


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
	this.instance = new lib.Inseguridadpngcopia();
	this.instance.setTransform(34.75,-32.25,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-32.2,74,64.5);


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
	this.instance = new lib.Seguridad();
	this.instance.setTransform(-34.75,-32.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-32.2,56.5,61);


(lib.siMeOcurre = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Btn_Quedebohacer_Hover();
	this.instance.setTransform(-143,-9,0.5,0.5);

	this.instance_1 = new lib.Btn_Quedebohacer_Hover_1();
	this.instance_1.setTransform(-146,-12,0.5437,0.5437);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A/FC+IAAl7MA+LAAAIAAF7g");
	this.shape.setTransform(-144.1,4.05,1.0251,1,0,0,0,-199,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-12,413.2,69.1);


(lib.queES = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Quees();
	this.instance.setTransform(-117,-18,0.5,0.5);

	this.instance_1 = new lib.QueEsHover();
	this.instance_1.setTransform(-118,-21,0.5434,0.5436);

	this.instance_2 = new lib.Queespngcopia();
	this.instance_2.setTransform(-117,-18,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,197,255,0)").ss(1,1,1).p("AgYFUIAAqnIAxAA");
	this.shape.setTransform(-113.525,27.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A6qEOIAAobMA1VAAAIAAIbg");
	this.shape_1.setTransform(60.1,13.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-21,348.9,83.1);


(lib.contenidoExtra = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Btn_ContenidoExtra();
	this.instance.setTransform(-165.5,-9,0.5,0.5);

	this.instance_1 = new lib.Btn_ContenidoExtra_Hover();
	this.instance_1.setTransform(-166,-12,0.5524,0.5524);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgiXAC+IAAl7MBEvAAAIAAF7g");
	this.shape.setTransform(-152.05,19,1.0341,1,0,0,0,-220,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-12,471.8,69.1);


(lib.comoOcurre = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Btn_ComoOcurre();
	this.instance.setTransform(-67,-9,0.5,0.5);

	this.instance_1 = new lib.btn_comoOcurre_Hover();
	this.instance_1.setTransform(-69,-12,0.5522,0.5524);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyWC+IAAl7MAktAAAIAAF7g");
	this.shape.setTransform(-65.95,5.05,1.0298,1,0,0,0,-117.4,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-12,247.4,69.1);


(lib.comoEvitarlo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Btn_ComoEvitarlo();
	this.instance.setTransform(-73.5,-9,0.5,0.5);

	this.instance_1 = new lib.Btn_ComoEvitarlo_Hover();
	this.instance_1.setTransform(-75,-11,0.5437,0.5437);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyRDmIAAnLMAkjAAAIAAHLg");
	this.shape.setTransform(-69.1,0,1.0555,1,0,0,0,-117,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-11,256.7,69.1);


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
	this.shape.graphics.f().s("#FDCE3C").ss(7,1,1).p("Ag2CdIB0ifIh7ia");
	this.shape.setTransform(75.925,51.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:false},0).wait(13));

	// Capa_1
	this.instance = new lib.SiguienteAtras();
	this.instance.setTransform(-34,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,2,119.6,102);


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
	this.instance = new lib.Interpolación10("synched",0);
	this.instance.setTransform(104.45,38.95,1,1,0,0,0,42.2,-25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8.9725},24).to({rotation:0},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-15.8,143.20000000000002,147.4);


(lib.msj2 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(147.85,113.3,1,1,0,0,0,54.6,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:54.7,regY:49.4,scaleX:0.928,scaleY:0.928,x:147.95,y:113.4},24).to({regX:54.6,regY:49.3,scaleX:1,scaleY:1,x:147.85,y:113.3},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.5,113.1);


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
	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(429.5,276.25,1,1,0,0,180,34.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:34.6,regY:0.1,scaleX:1.3784,scaleY:1.3784,x:421.7,y:257.4},49).to({regX:34.8,regY:0,scaleX:1,scaleY:1,x:429.5,y:276.25},50).wait(1));

	// Capa_1
	this.instance_1 = new lib.Interpolación7("synched",0);
	this.instance_1.setTransform(139.25,178);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:135.2,y:163.15},49).to({x:139.25,y:178},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-14.8,542.5,535.3);


(lib.emote = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación8("synched",0);
	this.instance.setTransform(35.75,37.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7385,scaleY:0.7385},35).to({scaleX:1,scaleY:1},39).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,38.5);


(lib.emojirisa = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación6("synched",0);
	this.instance.setTransform(35.75,42.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:25.35},24).to({y:42.65},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.9,75,70.3);


(lib.corazon1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(32.05,34.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:36.1,y:46.85},34).to({x:32.05,y:34.95},40).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,2.7,60.6,72.89999999999999);


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
	this.instance = new lib.sobre_siguiente();
	this.instance.setTransform(60,24,1,1,0,0,0,26,26);

	this.instance_1 = new lib.SiguienteAtras();

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,197,255,0)").ss(1,1,1).p("AGVGVIspAAIAAspIDvAA");
	this.shape.setTransform(20.6,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AmUGVIAAsBIAAgoIMpAAIAAMpg");
	this.shape_1.setTransform(44.5,56.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:0,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.9038,scaleY:0.9038,x:5,y:4}}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,0,122.9,102.1);


(lib.imagen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mensaje2.png
	this.instance = new lib.msj2();
	this.instance.setTransform(-70.65,61.15,1,1,0,0,0,93.2,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// EmojiDiablo.png
	this.instance_1 = new lib.emote();
	this.instance_1.setTransform(157.15,0.7,1,1,0,0,0,35.8,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ManoIzq_1.png
	this.instance_2 = new lib.Chica();
	this.instance_2.setTransform(-227,-16,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// EmojiPicardia.png
	this.instance_3 = new lib.Símbolo1();
	this.instance_3.setTransform(-33.8,182.8,1,1,0,0,0,62.2,64.8);

	this.instance_4 = new lib.emojirisa();
	this.instance_4.setTransform(340.85,240.35,1,1,0,0,0,35.8,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// EmojiCorazon.png
	this.instance_5 = new lib.corazon1();
	this.instance_5.setTransform(117.95,53.65,1,1,0,0,0,34.8,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// fondo
	this.instance_6 = new lib.Frase();
	this.instance_6.setTransform(-124,286,0.5,0.5);

	this.instance_7 = new lib.mano();
	this.instance_7.setTransform(-19.25,30.3,1,1,0,0,0,139.2,178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.imagen, new cjs.Rectangle(-847,-220,1366,768), null);


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
		stage.on('drawstart', initStage, this, true);
		function initStage() {
		
		    stretchToFit();
		}
		 
		
		
		
		this.siguiente.addEventListener("click", fl_ClickToGoToWebPage_12);
		function fl_ClickToGoToWebPage_12() {
			createjs.Sound.play("sound", { volume: 0.5}).on("complete", function () {
		     		window.open("Que_es", "_self");		 
		                    }, this);
			
		}
		
		this.btnQueEs.addEventListener("click", fl_ClickToGoToWebPage_13);
		function fl_ClickToGoToWebPage_13() {
			createjs.Sound.play("sound", { volume: 0.5}).on("complete", function () {                  
			window.open("Que_es", "_self");		 
		                    }, this);	
		}
		
		this.btnComoOcurre.addEventListener("click", fl_ClickToGoToWebPage_14);
		function fl_ClickToGoToWebPage_14() {
		createjs.Sound.play("sound", { volume: 0.5}).on("complete", function () {                   
		window.open("Como_ocurre", "_self");		 
		                    }, this);	
		}
		
		this.btnComoEvitarlo.addEventListener("click", fl_ClickToGoToWebPage_15);
		function fl_ClickToGoToWebPage_15() {
			createjs.Sound.play("sound", { volume: 0.5}).on("complete", function () {                  
			window.open("Como_evitarlo/index.html", "_self");		 
		                    }, this);	
		}
		
		this.btnSiMeOcurre.addEventListener("click", fl_ClickToGoToWebPage_16);
		function fl_ClickToGoToWebPage_16() {
			createjs.Sound.play("sound", { volume: 0.5}).on("complete", function () {                    
		window.open("Si_me_ocurre", "_self");		 
		                    }, this);
			
		}
		
		
		this.btnContenidoExtra.addEventListener("click", fl_ClickToGoToWebPage_17);
		function fl_ClickToGoToWebPage_17() {
			createjs.Sound.play("sound", { volume: 0.5}).on("complete", function () {                  
			window.open("Contenido_Extra", "_self");		 
		                    }, this);
		
		}
		
		function carga (){
		    window.parent.funcionInvisible();
		};
		
		carga();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.siguiente = new lib.btnSiguiente();
	this.siguiente.name = "siguiente";
	this.siguiente.setTransform(723,567.95,0.5,0.5,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.siguiente, 0, 1, 2, false, new lib.btnSiguiente(), 3);

	this.timeline.addTween(cjs.Tween.get(this.siguiente).wait(1));

	// numeracion
	this.btnContenidoExtra = new lib.contenidoExtra();
	this.btnContenidoExtra.name = "btnContenidoExtra";
	this.btnContenidoExtra.setTransform(253.65,447.45);
	new cjs.ButtonHelper(this.btnContenidoExtra, 0, 1, 2, false, new lib.contenidoExtra(), 3);

	this.btnSiMeOcurre = new lib.siMeOcurre();
	this.btnSiMeOcurre.name = "btnSiMeOcurre";
	this.btnSiMeOcurre.setTransform(231.15,378.2);
	new cjs.ButtonHelper(this.btnSiMeOcurre, 0, 1, 2, false, new lib.siMeOcurre(), 3);

	this.btnComoEvitarlo = new lib.comoEvitarlo();
	this.btnComoEvitarlo.name = "btnComoEvitarlo";
	this.btnComoEvitarlo.setTransform(161.65,306);
	new cjs.ButtonHelper(this.btnComoEvitarlo, 0, 1, 2, false, new lib.comoEvitarlo(), 3);

	this.btnComoOcurre = new lib.comoOcurre();
	this.btnComoOcurre.name = "btnComoOcurre";
	this.btnComoOcurre.setTransform(155.15,234.05);
	new cjs.ButtonHelper(this.btnComoOcurre, 0, 1, 2, false, new lib.comoOcurre(), 3);

	this.btnQueEs = new lib.queES();
	this.btnQueEs.name = "btnQueEs";
	this.btnQueEs.setTransform(205.15,167.75);
	new cjs.ButtonHelper(this.btnQueEs, 0, 1, 2, false, new lib.queES(), 3);

	this.instance = new lib.Tituloindicecontenidos();
	this.instance.setTransform(95,39,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btnQueEs},{t:this.btnComoOcurre},{t:this.btnComoEvitarlo},{t:this.btnSiMeOcurre},{t:this.btnContenidoExtra}]}).wait(1));

	// enumeracion contenidos.png
	this.instance_1 = new lib.BarraContenidos();
	this.instance_1.setTransform(152,133,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// imagen
	this.instance_2 = new lib.imagen();
	this.instance_2.setTransform(689.4,351.45,0.853,0.853,0,0,0,-94,154.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Capa_1
	this.instance_3 = new lib.posición();
	this.instance_3.setTransform(492,547,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(679.7,360,414,258.9);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1189,
	height: 642,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1693671415384", id:"index_atlas_1"},
		{src:"sounds/sound.mp3?1693671415448", id:"sound"}
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