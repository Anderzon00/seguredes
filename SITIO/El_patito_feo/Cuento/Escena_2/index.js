(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,0,2374,1139]]},
		{name:"index_atlas_P_2", frames: [[1089,131,80,80],[1148,295,80,80],[1006,131,81,80],[1066,213,81,80],[983,275,81,81],[1066,295,80,81],[1230,213,79,79],[1149,213,79,80],[801,263,99,153],[688,131,171,130],[1230,366,71,69],[983,358,77,77],[1252,131,71,72],[902,275,79,107],[1171,131,79,80],[1230,294,70,70],[0,0,2376,129],[0,131,686,304],[902,131,102,142],[688,263,111,147],[0,437,2381,72],[0,511,2377,65],[0,578,2377,64]]}
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



(lib._1btnpausa = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2btnplay = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3btncambioEscenaLeft = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._3btncambioEscenaRight = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4btncambioAudioLeft = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._4btncambioAudioRight = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._5btnDesmute = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._5btnMute = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.AlaPata = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cuadrodedialogo = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Emotebesos = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.emotecorazon = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Emotedulsura = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Emoteenamorado = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.emotelike = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Emoteoooh = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.fondoGUion = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.mamaPata = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Paisajedefondo = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pata3 = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.pato1 = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Text1 = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Text2 = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.text3 = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(22);
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


(lib.Símbolo9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fondoGUion();
	this.instance.setTransform(0,187.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(0,187.5,1188,64.5), null);


(lib.texto2mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Text2();
	this.instance.setTransform(-972,26,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto2mc, new cjs.Rectangle(-972,26,1188.5,32.5), null);


(lib.Símbolo69 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mamaPata();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo69, new cjs.Rectangle(0,0,686,304), null);


(lib.Símbolo11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABCAIIAAgBIgIgCIgBgBIgMAAIgHACIgJAGIgRgDIABAAQACgFADgEQAFADAGABIACAAQADgCAFgBIAGAAIAEgBIACABIAEgBIADgBQAGAAAGgBIACAAIABABQAIAFACAKIAAAAIgJABQgDgEgFgDgAgjADIgDgCQgJgKgOABIgFABIgJADIgDADIgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAIgCACIABgBIAAAAIACgFIABgBIACABIAFgEIAJgEIAFgBIAGABQAFAAADABIAGADIABABIAAgBIAHgEIAGAGQAEAHABAFg");
	this.shape.setTransform(8.7875,1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.2,8.2);


(lib.Símbolo9_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA5AYIgmgHIAFgQIACgBIADgCQAHgHALgBQALgBAIAHQAGADACAFQADADABAFQABAIAAAHIgBACQgHgDgOgCgAhHADIgHgBIAAgHQACgJAGgFQAGgGAKgDQAJgBAJADIAGACIAHACQASAEADASQACAEgBAHIgBADg");
	this.shape.setTransform(7.9038,2.9375);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.8,9.8);


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._2btnplay();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Emoteenamorado();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0,0,79,107), null);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._4btncambioAudioRight();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40.5);


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

	// Capa_1
	this.instance = new lib._3btncambioEscenaLeft();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,40);


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
	this.instance = new lib._3btncambioEscenaRight();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,40);


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
	this.instance = new lib._4btncambioAudioLeft();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,40.5);


(lib.siguienteAnimado = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFCC00").ss(6.5,1,1).p("ACtAAQAABIgzAzQgyAyhIAAQhHAAgzgyQgzgzAAhIQAAhGAzg0QAzgyBHAAQBIAAAyAyQAzA0AABGg");
	this.shape.setTransform(20.3,19.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},20).wait(22));

	// Capa_1
	this.instance = new lib._3btncambioEscenaRight();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-1.1,41.199999999999996,41.2);


(lib.ala = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AlaPata();
	this.instance.setTransform(-70.25,-39.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-39.5,49.5,76.5);


(lib.Interpolación18 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cuadrodedialogo();
	this.instance.setTransform(-4,-7.85,0.0224,0.0638);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-7.8,3.9,8.3);


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
	this.instance = new lib.Text1();
	this.instance.setTransform(-594,-17.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-594,-17.7,1190.5,36);


(lib.interactivosobre = function(mode,startPosition,loop,reversed) {
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
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Capa_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AgDAGQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIACgEQACgEACAAIADABQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIgBABIgBAAIAAAAIgBAAIgCgBQgBAAAAAAQAAAAAAAAQAAABgBAAQAAABAAAAIgBADIABADIACABIABAAIACgBIABAAIAAAAIABABIgCACIgDABQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(1.125,0.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AAAAKIgBgBIAAgDIAAgCIAAgDIAAgDIABgBIAAAAIABAAIAAABIAAADIAAADIAAACIAAADIAAABIgBAAIAAAAgAAAgGIAAgBIAAgBIAAgBIABABIABABIgBABIgBAAIAAAAg");
	this.shape_1.setTransform(0.075,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AAAAJIAAgEIAAgFIAAgEIAAgFIAAgBQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAAAIAAAFIAAAEIgBAHIAAACQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_2.setTransform(-0.7,0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AgEAIQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgDADgFQADgEADAAIABAAIABAAIABgBIABACIAAADIAAAAIgBABIgBgBIAAgBIgCAAQgCAAgCACQgCAEAAADIAAADIADABIACAAIADgCIAAgBIABABIABABIgBABQgDADgDABQgDgBgBgCg");
	this.shape_3.setTransform(-1.9,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AgOAXQgIgHAAgLQAAgKAIgLQAHgNAJAAQAGAAAGACQAIADAAAFQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgBgCQgDgDgIAAQgEAAgFAJQgGAJABAGQgBAHAGAEQAEAEAGAAQADAAAEgCIAGgDIACgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAEgIADQgHAEgFAAQgKAAgHgHg");
	this.shape_4.setTransform(5.85,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000033").s().p("AgEAmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgKIAAgJIAAgNIABgMQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAMIgBANIAAAJIABAKQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgDgcQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAg");
	this.shape_5.setTransform(1.625,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000033").s().p("AgFAmIABgTIAAgTIAAgSIABgTQAAgGADAAQAGAAAAAGIgBATIAAASIAAAaIgBAMQgBAGgDAAQgFAAAAgGg");
	this.shape_6.setTransform(-1.45,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000033").s().p("AgVAhQgIgJABgLQgBgRAQgTQAMgQAMAAIAFABIADAAQACgCADAAQAEAAAAAFIABAKIgBAEQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgDAAgCgEIgDgEIgFgBQgIAAgJAMQgMAQAAANQAAAHAFAFQAEAFAGAAQAFAAAFgDIAJgGQADgCADAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgPAMgNAAQgLAAgHgIg");
	this.shape_7.setTransform(-6.15,0.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000033").s().p("AgXAkQgLgLAAgRQAAgQALgRQAMgUAOAAQAIAAAKAEQAMAFAAAHQAAADgCACQgCADgCAAIgFgCIgDgDQgEgDgMAAQgHAAgIAOQgIAOAAAJQAAALAIAGQAHAGAJAAQAFAAAGgDIAJgFIAEgBQADAAACACQACACAAAEQAAAFgNAGQgLAFgHAAQgPAAgMgKg");
	this.shape_8.setTransform(9.2,2.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000033").s().p("AgHA7QgDgCABgEIAAgPIgBgOIABgTIAAgSQABgEACgDQACgBAEAAQACAAADABQACADAAAEIgBASIgBATIABAOIAAAPQAAAEgDACQgCACgCAAQgEAAgCgCgAgFgsQgDgDAAgEQAAgDADgDQAEgDACAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgCAAgEgDg");
	this.shape_9.setTransform(2.75,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000033").s().p("AgIA6IABgdIABgdIAAgcIAAgeQAAgIAHAAQAIAAAAAIIAAAeIAAAcIgCAoIAAATQgBAIgGAAQgIAAAAgJg");
	this.shape_10.setTransform(-2.025,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000033").s().p("AghAyQgLgNAAgRQAAgaAXgdQATgYATAAIAHAAIAFABQADgEAFAAQAGAAABAHIABARQAAADgBACQgCAEgFAAQgFAAgDgHQgCgFgCgBQgCgBgGAAQgMAAgNASQgUAZAAAUQAAALAHAHQAGAIAKAAQAIAAAIgEIAPgKQAEgDACAAQAEAAACACQADADAAADQAAAEgDADQgVATgWAAQgRAAgLgNg");
	this.shape_11.setTransform(-9.15,0.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000033").s().p("AgcAsQgOgNgBgVQAAgUAOgWQAPgYASAAQAKAAAMAFQAPAGAAAIQAAAEgCADQgDADgDAAQgDAAgCgCIgFgDQgFgFgOAAQgJAAgKATQgJAQgBAMQAAANAJAIQAJAHAMAAQAGAAAIgEIALgGIAFgBQADAAADADQADADAAADQAAAIgQAHQgOAGgJAAQgTAAgOgNg");
	this.shape_12.setTransform(11.55,3.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000033").s().p("AgJBJQgDgDAAgEIAAgSIAAgSIAAgYIABgXQAAgFADgCQADgDAEAAQAEAAACADQADACAAAFIgBAXIgBAYIAAASIABASQAAAEgDADQgDADgDAAQgEAAgDgDgAgFg3QgEgDAAgFQAAgFAEgEQADgDAEAAQAFAAADADQADAEABAFQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_13.setTransform(3.5,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000033").s().p("AgKBJIABglIABgkIAAgkIABgkQgBgKAJAAQALAAgBAKIAAAkIgBAkIgBAyIgBAXQgBAKgHAAQgKAAAAgKg");
	this.shape_14.setTransform(-2.4,0.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000033").s().p("AgpA+QgOgQAAgUQAAgiAcgkQAZgdAWAAIAJAAIAHACQAEgGAFAAQAIAAABAJQACAJAAAMQAAADgCADQgDAFgFAAQgHAAgDgIQgDgGgCgCQgCgBgJAAQgOAAgQAWQgZAfAAAaQAAANAIAIQAJAKAMAAQAKABAKgGQAGgDAMgJQAGgEADAAQAEAAADADQADAEAAADQAAAFgEADQgaAYgbAAQgVAAgOgQg");
	this.shape_15.setTransform(-11.2,0.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000033").s().p("AgfAxQgQgPAAgXQAAgWAPgYQARgaAUAAQAKAAAOAFQARAGAAAKQAAAEgDADQgDADgEAAQgDAAgCgBIgFgEQgHgGgOAAQgLAAgLAVQgKASAAANQAAAOAKAJQAKAHANAAQAHAAAHgDIANgHIAFgCQAEAAADAEQADADAAAEQAAAIgRAIQgPAGgKAAQgWAAgPgNg");
	this.shape_16.setTransform(12.725,3.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000033").s().p("AgKBQQgDgDAAgFIgBgUIAAgTIABgaIABgZQAAgFADgEQADgCAFAAQAEAAADACQADAEAAAFIgBAZIgBAaIAAATIAAAUQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg8QgEgEAAgGQAAgEAEgFQADgDAFAAQAFAAAEADQAEAFAAAEQAAAGgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_17.setTransform(3.925,0.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000033").s().p("AgMBQIACgoIABgoIAAgoIABgnQAAgMAKAAQALAAAAAMIgBAnIAAAoIgCA3IgBAZQgBAMgJAAQgLAAAAgMg");
	this.shape_18.setTransform(-2.575,0.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000033").s().p("AguBEQgOgRAAgXQgBglAggnQAaghAaAAIAJAAIAIACQAEgFAGgBQAIAAABAKQACAKAAANQABAEgDADQgDAFgGAAQgGAAgEgJQgDgHgDgBQgCgBgJAAQgQAAgTAZQgbAgAAAdQAAAOAJAKQAKALAOAAQAKAAALgGQAHgDANgKQAGgEADAAQAFAAADADQADADABAFQgBAFgEAEQgcAagdgBQgYAAgQgRg");
	this.shape_19.setTransform(-12.25,0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000033").s().p("AghA0QgQgQAAgZQAAgWAPgaQARgcAVAAQAMAAAPAFQARAHABAKQAAAFgDADQgDAEgFgBQgEAAgCgCIgEgDQgIgGgQAAQgKAAgMAVQgLAUAAANQAAAPALAKQAKAIAOAAQAHAAAJgEIANgHIAFgCQAEAAAEAEQACADAAAFQAAAIgSAIQgPAHgLAAQgXAAgQgOg");
	this.shape_20.setTransform(13.5,3.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000033").s().p("AgLBVQgDgEAAgFIAAgUIgBgWIABgbIACgbQAAgFADgDQADgDAFgBQAEABADADQAEADAAAFIgCAbIgBAbIABAWIAAAUQAAAFgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_21.setTransform(4.125,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000033").s().p("AgMBVIABgrIABgqIABgqIAAgqQAAgMALAAQALAAAAAMIAAAqIgBAqIgBA6IgBAbQgCAMgJAAQgLAAAAgMg");
	this.shape_22.setTransform(-2.725,0.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000033").s().p("AgwBIQgQgSAAgZQAAgmAhgqQAcgjAbAAIAKABIAIABQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCAEQgEAEgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgUAaQgcAjAAAeQAAAPAKALQAKAMAOAAQALAAAMgHQAHgDAOgKQAHgFADAAQAFAAAEADQADAEAAAFQAAAFgEAEQgfAcgfAAQgYAAgRgTg");
	this.shape_23.setTransform(-12.975,0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).wait(1));

	// MergedLayer_1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,197,255,0)").ss(12,1,1).p("AjiCQQgDgTAAgTQAAhnBKhJQBJhJBmAAQBoAABJBJQATATAOAV");
	this.shape_24.setTransform(-9.5625,-18.0875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AivCxQhKhKAAhnQAAgSACgSQALhQA9g8QBIhJBnAAQBLAAA7AmQAXAPAUAUQA7A8AMBQQACASAAASQAABnhJBKQhKBJhnAAQhnAAhIhJg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,197,255,0)").ss(12,1,1).p("AjjCQQgCgTAAgTQAAhnBJhJQBJhJBnAAQBoAABJBJQATATAOAV");
	this.shape_26.setTransform(-9.5,-17.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiwCxQhJhKAAhnQAAgSADgSQAKhQA8g8QBKhJBmAAQBLAAA8AmQAWAPAUAUQA8A8ALBQQACASAAASQAABnhJBKQhKBJhnAAQhmAAhKhJg");
	this.shape_27.setTransform(0.05,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24}]}).to({state:[{t:this.shape_27},{t:this.shape_26}]},5).wait(1));

	// Capa_2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(145,147,149,0.639)").ss(2,1,1).p("AlqAIQAAiUBmhnQAsgsAygZQAlgXApgMQAvgPA1AAQBXAABJAnQAuAYAqAqQBnBoAACUQAACThnBoQgrArgyAZQgmAXgoANQgxANgzAAQhZAAhJgmQgugYgpgpQhmhpAAiTg");
	this.shape_28.setTransform(-0.325,0.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(145,147,149,0.71)").ss(2,1,1).p("AleAHQAAiOBjhlQAqgqAxgYQAjgWAogMQAugOAzAAQBUAABGAlQAuAYAoAoQBjBlAACPQAACOhjBlQgqAqgwAYQglAWgnANQgvAMgyAAQhWAAhGgkQgtgYgngnQhjhmAAiPg");
	this.shape_29.setTransform(-0.275,0.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(145,147,149,0.784)").ss(2,1,1).p("AlTAHQAAiKBghhQApgpAvgYQAigVAngLQAsgOAxAAQBSAABEAkQAsAXAnAnQBgBhAACLQAACKhgBiQgpAoguAXQgkAWgmAMQgtAMgwAAQhUAAhEgkQgsgWglgmQhghjAAiKg");
	this.shape_30.setTransform(-0.2,0.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(145,147,149,0.855)").ss(2,1,1).p("AlIAHQAAiGBdhdQAngoAugXQAhgUAlgLQArgOAwAAQBPAABCAkQAqAVAlAmQBeBeAACHQAACEheBfQgmAnguAXQgiAUglAMQgsAMguAAQhRAAhBgjQgrgWgkglQhdheAAiGg");
	this.shape_31.setTransform(-0.15,0.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(145,147,149,0.929)").ss(2,1,1).p("Ak8AHQAAiBBZhbQAmgmAsgWQAggUAkgKQAqgNAtAAQBNAAA/AiQApAVAkAkQBaBbAACCQAACAhaBbQgmAmgrAWQghATgkAMQgqALgtAAQhOAAg/ghQgpgVgjgkQhZhbAAiBg");
	this.shape_32.setTransform(-0.075,0.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#919395").ss(2,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_33.setTransform(-0.0236,0.0181,1.456,1.456);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-38.4,75.5,76);


(lib.interactivoclic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,197,255,0)").ss(12,1,1).p("AjiCQQgDgTAAgTQAAhnBKhJQBJhJBmAAQBoAABJBJQATATAOAV");
	this.shape.setTransform(-9.6625,-17.7875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AivCxQhKhKAAhnQAAgSACgSQALhQA9g8QBIhJBnAAQBLAAA7AmQAXAPAUAUQA7A8AMBQQACASAAASQAABnhJBKQhKBJhnAAQhnAAhIhJg");
	this.shape_1.setTransform(-0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(57,207,255,0.639)").ss(2,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_2.setTransform(-0.0287,0.0433,1.2144,1.2144);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.interactivoclic, new cjs.Rectangle(-38.6,-38.1,65.1,64.7), null);


(lib.interactivo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("ACcAAQAABBguAtQgtAuhBAAQhAAAguguQgtgtAAhBQAAhAAtguQAugtBAAAQBBAAAtAtQAuAuAABAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuBuQgtgtAAhBQAAhAAtguQAugtBAAAQBBAAAtAtQAuAuAABAQAABBguAtQgtAuhBAAQhAAAgugug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(30));

	// Capa_9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_2.setTransform(-0.1615,0.1575,2.2692,2.2692);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_3.setTransform(-0.0457,0.0286,1.6595,1.6595);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_4.setTransform(-0.0214,0.0072,0.9524,0.9524);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AluAHQAAiVBnhoQAtgtAzgZQAkgXAqgMQAwgPA1AAQBZAABJAnQAvAZAqAqQBoBoAACWQAACVhoBpQgsAsgyAaQgmAWgpANQgxAOg0AAQhaAAhJgnQgwgYgpgpQhnhqAAiWg");
	this.shape_5.setTransform(-0.1,0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(57,207,255,0.639)").ss(2,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_6.setTransform(-0.0186,0.0428,0.5309,0.5309);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(57,207,255,0.639)").ss(4,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_7.setTransform(-0.0628,0.064,0.6047,0.6047);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("Aj5AFQAAhlBGhIQAfgeAigRQAZgQAdgIQAhgKAjAAQA9AAAyAbQAgAQAcAdQBHBHAABnQAABlhHBIQgdAegjARQgaAPgcAJQghAJgjAAQg+AAgygaQgggRgcgcQhGhIAAhmg");
	this.shape_8.setTransform(-0.025,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(145,147,149,0.62)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_9.setTransform(-0.0766,0.0828,2.5443,2.5443);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(57,207,255,0.639)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_10.setTransform(-0.046,0.0798,0.6599,0.6599);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(145,147,149,0.6)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_11.setTransform(-0.1119,0.1096,2.6032,2.6032);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(145,147,149,0.498)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_12.setTransform(-0.2091,0.1956,2.6819,2.6819);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(145,147,149,0.549)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_13.setTransform(-0.2125,0.2123,2.6874,2.6874);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(145,147,149,0.976)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_14.setTransform(-0.1237,0.2187,1.3729,1.3729);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(145,147,149,0.4)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_15.setTransform(-0.1545,0.2223,2.7574,2.7574);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(145,147,149,0.298)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_16.setTransform(-0.1287,0.0436,2.7979,2.7979);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(145,147,149,0.2)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_17.setTransform(-0.1316,0.158,2.8027,2.8027);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(145,147,149,0.098)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_18.setTransform(-0.3648,0.3242,2.9414,2.9414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:0.9524,scaleY:0.9524,x:-0.0214,y:0.0072}},{t:this.shape_3,p:{scaleX:1.6595,scaleY:1.6595,x:-0.0457,y:0.0286}},{t:this.shape_2,p:{scaleX:2.2692,scaleY:2.2692,x:-0.1615,y:0.1575}}]}).to({state:[{t:this.shape_4,p:{scaleX:1,scaleY:1,x:0,y:0}},{t:this.shape_3,p:{scaleX:1.6595,scaleY:1.6595,x:-0.0457,y:0.0286}},{t:this.shape_2,p:{scaleX:2.3085,scaleY:2.3085,x:-0.0351,y:0.0256}}]},2).to({state:[{t:this.shape_3,p:{scaleX:1.0515,scaleY:1.0515,x:-0.0309,y:0.0045}},{t:this.shape_5},{t:this.shape_2,p:{scaleX:2.3655,scaleY:2.3655,x:-0.1693,y:0.0966}}]},2).to({state:[{t:this.shape_4,p:{scaleX:1.0904,scaleY:1.0904,x:-0.0543,y:0.0713}},{t:this.shape_3,p:{scaleX:1.7537,scaleY:1.7537,x:-0.0522,y:0.061}},{t:this.shape_2,p:{scaleX:2.4394,scaleY:2.4394,x:-0.0636,y:0.0682}},{t:this.shape_6,p:{scaleX:0.5309,scaleY:0.5309,x:-0.0186,y:0.0428}}]},2).to({state:[{t:this.shape_4,p:{scaleX:1.1443,scaleY:1.1443,x:-0.0366,y:0.033}},{t:this.shape_3,p:{scaleX:1.8142,scaleY:1.8142,x:-0.1385,y:0.0926}},{t:this.shape_2,p:{scaleX:2.4674,scaleY:2.4674,x:-0.1304,y:0.1022}},{t:this.shape_6,p:{scaleX:0.5714,scaleY:0.5714,x:0.0072,y:0.0141}}]},2).to({state:[{t:this.shape_8},{t:this.shape_3,p:{scaleX:1.8432,scaleY:1.8432,x:-0.1059,y:0.1296}},{t:this.shape_2,p:{scaleX:2.4902,scaleY:2.4902,x:-0.1441,y:0.1207}},{t:this.shape_7,p:{x:-0.0628,y:0.064,scaleX:0.6047,scaleY:0.6047}}]},2).to({state:[{t:this.shape_3,p:{scaleX:1.234,scaleY:1.234,x:-0.0404,y:0.002}},{t:this.shape_2,p:{scaleX:1.9173,scaleY:1.9173,x:-0.1504,y:0.102}},{t:this.shape_9,p:{scaleX:2.5443,scaleY:2.5443,x:-0.0766,y:0.0828}},{t:this.shape_7,p:{x:-0.0128,y:0.014,scaleX:0.6047,scaleY:0.6047}}]},2).to({state:[{t:this.shape_3,p:{scaleX:1.2766,scaleY:1.2766,x:-0.016,y:0.0298}},{t:this.shape_2,p:{scaleX:1.9597,scaleY:1.9597,x:-0.0758,y:0.1291}},{t:this.shape_9,p:{scaleX:2.5836,scaleY:2.5836,x:-0.1002,y:0.0508}},{t:this.shape_7,p:{x:0.0258,y:0.1212,scaleX:0.6237,scaleY:0.6237}}]},2).to({state:[{t:this.shape_3,p:{scaleX:1.2766,scaleY:1.2766,x:-0.016,y:0.0298}},{t:this.shape_2,p:{scaleX:1.9542,scaleY:1.9542,x:-0.2725,y:0.3627}},{t:this.shape_11},{t:this.shape_10,p:{scaleX:0.6599,scaleY:0.6599,x:-0.046,y:0.0798}}]},2).to({state:[{t:this.shape_10,p:{scaleX:0.6808,scaleY:0.6808,x:-0.0085,y:0.0425}},{t:this.shape_3,p:{scaleX:1.2959,scaleY:1.2959,x:-0.0775,y:0.1376}},{t:this.shape_2,p:{scaleX:2.0325,scaleY:2.0325,x:-0.1195,y:0.1974}},{t:this.shape_12,p:{scaleX:2.6819,scaleY:2.6819,x:-0.2091,y:0.1956}}]},2).to({state:[{t:this.shape_10,p:{scaleX:0.6808,scaleY:0.6808,x:-0.0085,y:0.0425}},{t:this.shape_14},{t:this.shape_9,p:{scaleX:2.0325,scaleY:2.0325,x:-0.1195,y:0.1974}},{t:this.shape_13}]},2).to({state:[{t:this.shape_10,p:{scaleX:0.7553,scaleY:0.7553,x:-0.0032,y:0.0159}},{t:this.shape_3,p:{scaleX:1.4265,scaleY:1.4265,x:-0.1059,y:0.0795}},{t:this.shape_2,p:{scaleX:2.0679,scaleY:2.0679,x:-0.1407,y:0.1536}},{t:this.shape_15,p:{scaleX:2.7574,scaleY:2.7574,x:-0.1545,y:0.2223}}]},2).to({state:[{t:this.shape_10,p:{scaleX:0.7766,scaleY:0.7766,x:-0.016,y:0.0298}},{t:this.shape_3,p:{scaleX:1.4194,scaleY:1.4194,x:-0.1017,y:0.0583}},{t:this.shape_2,p:{scaleX:2.0973,scaleY:2.0973,x:-0.1584,y:0.0919}},{t:this.shape_16}]},2).to({state:[{t:this.shape_10,p:{scaleX:0.8404,scaleY:0.8404,x:-0.0043,y:0.0213}},{t:this.shape_2,p:{scaleX:1.5219,scaleY:1.5219,x:-0.0631,y:0.0656}},{t:this.shape_15,p:{scaleX:2.1513,scaleY:2.1513,x:-0.0908,y:0.154}},{t:this.shape_17}]},2).to({state:[{t:this.shape_3,p:{scaleX:0.883,scaleY:0.883,x:-0.0298,y:0.0489}},{t:this.shape_2,p:{scaleX:1.5642,scaleY:1.5642,x:-0.0885,y:0.0926}},{t:this.shape_12,p:{scaleX:2.2054,scaleY:2.2054,x:-0.1232,y:0.0661}},{t:this.shape_18}]},2).wait(2));

	// Capa_13
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(145,147,149,0.059)").ss(0.1,1,1).p("ACcAAQAABBguAtQgtAuhBAAQhAAAguguQgtgtAAhBQAAhAAtguQAugtBAAAQBBAAAtAtQAuAuAABAg");
	this.shape_19.setTransform(0.0022,-0.0109,3.5845,3.5829);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.059)").s().p("AhuBuQgtgtAAhBQAAhAAtguQAugtBAAAQBBAAAtAtQAuAuAABAQAABBguAtQgtAuhBAAQhAAAgugug");
	this.shape_20.setTransform(0.0022,-0.0109,3.5845,3.5829);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-63.9,128.5,128.5);


(lib.btnSound = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._5btnDesmute();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


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
	this.instance = new lib._2btnplay();
	this.instance.setTransform(-7,4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,4,40,40);


(lib.btnPause = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._1btnpausa();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.btnMute = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._5btnMute();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,40);


(lib.Símbolo7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Emoteoooh();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(0,0,70,70), null);


(lib.Símbolo6_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.emotelike();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6_1, new cjs.Rectangle(0,0,79,80), null);


(lib.Símbolo4_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.Emotedulsura();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4_1, new cjs.Rectangle(0,0,71,72), null);


(lib.Símbolo3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.emotecorazon();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3_1, new cjs.Rectangle(0,0,77,77), null);


(lib.Símbolo2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.Emotebesos();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2_1, new cjs.Rectangle(0,0,71,69), null);


(lib.texto1mc = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-181,29.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto1mc, new cjs.Rectangle(-775,12,1190.5,36), null);


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Símbolo 11
	this.instance = new lib.Símbolo11("synched",0);
	this.instance.setTransform(30.3,28.4,1,1,0,0,0,8.6,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib.pata3();
	this.instance_1.setTransform(8.7,0,0.4999,0.4999,7.0224);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.3,76.7);


(lib.Símbolo7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Símbolo 9
	this.instance_1 = new lib.Símbolo9_1("synched",0);
	this.instance_1.setTransform(34.15,31.35,1,1,0,0,0,7.9,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Capa_1
	this.instance_2 = new lib.pato1();
	this.instance_2.setTransform(11,0,0.4995,0.4995,8.6197);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.8,80.9);


(lib.pata_mccopia = function(mode,startPosition,loop,reversed) {
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
	this.frame_116 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(116).call(this.frame_116).wait(1));

	// Esqueleto_39
	this.ikNode_15 = new lib.Símbolo69();
	this.ikNode_15.name = "ikNode_15";
	this.ikNode_15.setTransform(-529.25,141.55,0.4996,0.4996,0,0,0,231,222.4);

	this.ikNode_16 = new lib.Símbolo7_1("synched",0);
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(-540.3,89.05,0.9955,0.9955,-9.4411,0,0,24.8,73);

	this.ikNode_18 = new lib.ala("synched",0);
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(-484.5,84.45,0.9975,0.9975,0,0,0,-47.9,39.2);

	this.ikNode_20 = new lib.Símbolo8("synched",0);
	this.ikNode_20.name = "ikNode_20";
	this.ikNode_20.setTransform(-376.4,83.7,0.9972,0.9972,-6.8564,0,0,24.4,78.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8564,x:-376.4,y:83.7}},{t:this.ikNode_18,p:{regX:-47.9,scaleX:0.9975,scaleY:0.9975,x:-484.5,y:84.45}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4411,y:89.05,x:-540.3,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4996,scaleY:0.4996,x:-529.25,y:141.55}}]}).to({state:[{t:this.ikNode_20,p:{regX:24.3,regY:78.3,rotation:-6.8524,x:-376.6,y:84.15}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.6,y:85}},{t:this.ikNode_16,p:{scaleX:0.9954,scaleY:0.9954,rotation:-9.4375,y:89.1,x:-540.3,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8471,x:-376.5,y:84.6}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.65,y:85.2}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4339,y:88.9,x:-540.25,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8427,x:-376.5,y:85}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.65,y:85.4}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4303,y:88.75,x:-540.2,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8374,x:-376.55,y:85.4}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.7,y:85.6}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4268,y:88.6,x:-540.15,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.832,x:-376.55,y:85.85}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.7,y:85.8}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4232,y:88.35,x:-540.1,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8268,x:-376.55,y:86.25}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.75,y:86}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4197,y:88.2,x:-540.05,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8216,x:-376.65,y:86.7}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.75,y:86.2}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4161,y:88.05,x:-539.95,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.3,regY:78.4,rotation:-6.8179,x:-376.7,y:87.2}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.8,y:86.4}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4125,y:87.9,x:-539.85,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.3,regY:78.4,rotation:-6.8127,x:-376.8,y:87.7}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.8,y:86.6}},{t:this.ikNode_16,p:{scaleX:0.9954,scaleY:0.9954,rotation:-9.4092,y:87.65,x:-539.85,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8075,x:-376.7,y:88.05}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.85,y:86.8}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4054,y:87.45,x:-539.8,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.802,x:-376.7,y:88.55}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.85,y:87}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4018,y:87.35,x:-539.7,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7976,x:-376.75,y:88.95}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.9,y:87.15}},{t:this.ikNode_16,p:{scaleX:0.9954,scaleY:0.9954,rotation:-9.3985,y:87.1,x:-539.65,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7925,x:-376.75,y:89.4}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.9,y:87.35}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3956,y:86.95,x:-539.6,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.787,x:-376.8,y:89.8}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-484.95,y:87.55}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.392,y:86.8,x:-539.55,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7817,x:-376.8,y:90.3}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-485,y:87.8}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3885,y:86.55,x:-539.5,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7835,x:-376.75,y:90.45}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-485.05,y:87.15}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3894,y:87.3,x:-539.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7844,x:-376.7,y:90.6}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-485.15,y:86.55}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3894,y:88,x:-539.2,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7854,x:-376.65,y:90.8}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-485.25,y:85.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3903,y:88.7,x:-539.1,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.787,x:-376.55,y:90.9}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-485.35,y:85.3}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3903,y:89.4,x:-538.95,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7879,x:-376.5,y:91.05}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-485.45,y:84.7}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3903,y:90.15,x:-538.85,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7888,x:-376.45,y:91.2}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-485.55,y:84.15}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3911,y:90.85,x:-538.7,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7906,x:-376.4,y:91.4}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-485.65,y:83.5}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3911,y:91.55,x:-538.55,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7915,x:-376.35,y:91.55}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-485.75,y:82.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3911,y:92.3,x:-538.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7925,x:-376.3,y:91.7}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-485.85,y:82.3}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.392,y:93.05,x:-538.3,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7941,x:-376.25,y:91.9}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486,y:81.7}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.392,y:93.8,x:-538.2,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.795,x:-376.15,y:92.05}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.1,y:81.1}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.392,y:94.5,x:-538.05,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7958,x:-376.1,y:92.2}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.2,y:80.5}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3929,y:95.25,x:-537.95,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7976,x:-376.05,y:92.4}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.3,y:79.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3929,y:95.95,x:-537.8,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7986,x:-376,y:92.55}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.4,y:79.35}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3929,y:96.65,x:-537.65,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7995,x:-375.9,y:92.65}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.55,y:78.75}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3937,y:97.35,x:-537.55,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8012,x:-375.85,y:92.9}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:78.15}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3937,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8004,x:-375.85,y:92.15}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:78.95}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3937,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8004,x:-375.85,y:91.45}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:79.8}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3937,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8004,x:-375.85,y:90.8}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:80.65}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3937,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8004,x:-375.85,y:90.1}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:81.45}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3929,y:98.1,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8004,x:-375.85,y:89.45}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:82.3}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3929,y:98.1,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7995,x:-375.85,y:88.75}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:83.15}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3929,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7995,x:-375.85,y:88.05}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:84}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3929,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7994,x:-375.85,y:87.45}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:84.8}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3929,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7994,x:-375.85,y:86.75}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.75,y:85.65}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.392,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7994,x:-375.85,y:86.1}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.75,y:86.5}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.392,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7986,x:-375.85,y:85.4}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.75,y:87.35}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.392,y:98.05,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7986,x:-375.9,y:84.75}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.8,y:88.2}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.392,y:98.05,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7986,x:-375.9,y:84.05}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.8,y:89.05}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.392,y:98.05,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7986,x:-375.9,y:83.4}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.85,y:89.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3911,y:97.95,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7986,x:-375.95,y:82.75}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.85,y:90.8}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3911,y:97.95,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7986,x:-375.95,y:82.1}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:91.65}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3911,y:97.95,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8029,x:-375.95,y:82.7}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:91.45}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3768,y:97.45,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8075,x:-375.95,y:83.25}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:91.3}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3627,y:96.8,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.3,regY:78.4,rotation:-6.8127,x:-376,y:83.9}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:91.1}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3484,y:96.1,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.3,regY:78.4,rotation:-6.817,x:-375.95,y:84.45}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:90.95}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3351,y:95.5,x:-537.5,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8216,x:-375.9,y:85}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:90.75}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3208,y:94.85,x:-537.6,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8259,x:-375.85,y:85.6}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:90.6}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3065,y:94.25,x:-537.6,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8312,x:-375.85,y:86.2}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:90.4}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2924,y:93.65,x:-537.65,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8357,x:-375.85,y:86.85}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:90.25}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2781,y:93,x:-537.7,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8409,x:-375.85,y:87.45}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:90.05}},{t:this.ikNode_16,p:{scaleX:0.9954,scaleY:0.9954,rotation:-9.2639,y:92.35,x:-537.7,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8453,x:-375.85,y:88.1}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:89.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2505,y:91.75,x:-537.7,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8507,x:-375.9,y:88.8}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:89.7}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2362,y:91.15,x:-537.75,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.855,x:-375.8,y:89.45}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:89.55}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2221,y:90.55,x:-537.75,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8595,x:-375.85,y:90.05}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-487,y:89.35}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2078,y:89.95,x:-537.75,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8639,x:-375.85,y:90.7}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-487,y:89.2}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1945,y:89.25,x:-537.85,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8691,x:-375.9,y:91.3}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-487,y:89}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1802,y:88.65,x:-537.9,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:91.95}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-487,y:88.85}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:88,x:-537.85,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-487,y:88.35}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:88.45,x:-537.85,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:87.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:88.9,x:-537.85,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.05}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:87.4}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:89.3,x:-537.8,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.1}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:86.95}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:89.75,x:-537.8,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.15}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:86.45}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:90.2,x:-537.75,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.2}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:86}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:90.65,x:-537.75,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.25}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.85,y:85.55}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:91.05,x:-537.75,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.25}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.85,y:85.05}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:91.5,x:-537.7,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.3}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.85,y:84.6}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:91.95,x:-537.7,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.35}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.8,y:84.15}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:92.4,x:-537.65,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.4}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.8,y:83.7}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:92.8,x:-537.65,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.45}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.8,y:83.25}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:93.25,x:-537.6,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.45}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.75,y:82.75}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:93.7,x:-537.6,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.5}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.75,y:82.3}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:94.15,x:-537.6,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.55}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.75,y:81.85}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:94.55,x:-537.55,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.6}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.75,y:81.4}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:95,x:-537.55,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.65}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:80.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:95.45,x:-537.5,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.7}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:80.45}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:95.9,x:-537.5,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.7}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:80}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:96.3,x:-537.5,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.75}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:79.55}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:96.75,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.8}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:79.05}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:97.2,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.85}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:78.6}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:97.65,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8745,x:-375.9,y:92.9}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:78.15}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1669,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8691,x:-375.9,y:92.25}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:78.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1793,y:98.05,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8639,x:-375.85,y:91.6}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:79.7}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.1926,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8595,x:-375.85,y:90.95}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:80.45}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2052,y:98.05,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.855,x:-375.8,y:90.3}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.65,y:81.25}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2185,y:98.05,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8507,x:-375.9,y:89.65}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:82}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.231,y:98,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8453,x:-375.8,y:88.9}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:82.8}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2443,y:97.95,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8409,x:-375.8,y:88.25}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:83.6}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2576,y:98,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8357,x:-375.8,y:87.6}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:84.35}},{t:this.ikNode_16,p:{scaleX:0.9954,scaleY:0.9954,rotation:-9.2703,y:97.85,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8312,x:-375.8,y:86.95}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.7,y:85.1}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.2834,y:97.9,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8268,x:-375.8,y:86.3}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.75,y:85.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.296,y:97.85,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8216,x:-375.85,y:85.65}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.75,y:86.7}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3101,y:97.85,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.3,regY:78.4,rotation:-6.8179,x:-375.9,y:85.1}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.75,y:87.5}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3226,y:97.85,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.3,regY:78.4,rotation:-6.8127,x:-375.95,y:84.5}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.8,y:88.25}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.336,y:97.8,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8082,x:-375.9,y:83.8}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.8,y:89.05}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3493,y:97.8,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8029,x:-375.9,y:83.25}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.85,y:89.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3627,y:97.85,x:-537.4,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7986,x:-375.9,y:82.65}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.85,y:90.7}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3751,y:97.75,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.7941,x:-375.9,y:82}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:91.5}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.3884,y:97.7,x:-537.35,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8004,x:-375.9,y:82.1}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:90.7}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4161,y:97.1,x:-537.45,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8065,x:-375.85,y:82.3}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:89.95}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4446,y:96.4,x:-537.55,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.5}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.3,regY:78.4,rotation:-6.8127,x:-375.95,y:82.5}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:89.2}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.4729,y:95.7,x:-537.6,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.55}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8188,x:-375.8,y:82.65}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.85,y:88.45}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.5023,y:94.95,x:-537.6,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.55}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.825,x:-375.75,y:82.75}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:87.65}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.5309,y:94.35,x:-537.55,regX:24.9}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.6}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8303,x:-375.75,y:82.9}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:86.9}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.5602,y:93.65,x:-537.75,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.65}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8365,x:-375.7,y:83.1}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:86.15}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.5887,y:92.95,x:-537.85,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.65}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8427,x:-375.7,y:83.25}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:85.4}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.6171,y:92.3,x:-537.8,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.7}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.3,rotation:-6.8489,x:-375.7,y:83.4}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:84.65}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.6457,y:91.55,x:-537.8,regX:24.9}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.75}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.855,x:-375.6,y:83.65}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:83.95}},{t:this.ikNode_16,p:{scaleX:0.9954,scaleY:0.9954,rotation:-9.6743,y:90.95,x:-537.95,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.75}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8603,x:-375.6,y:83.85}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.9,y:83.25}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.7036,y:90.3,x:-538.05,regX:24.8}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.8}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8674,x:-375.6,y:84}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:82.5}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.7322,y:89.5,x:-537.95,regX:24.9}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{regX:24.4,regY:78.4,rotation:-6.8674,x:-375.6,y:84}},{t:this.ikNode_18,p:{regX:-48,scaleX:0.9974,scaleY:0.9974,x:-486.95,y:82.5}},{t:this.ikNode_16,p:{scaleX:0.9955,scaleY:0.9955,rotation:-9.7322,y:89.5,x:-537.95,regX:24.9}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-644.6,-0.3,342.70000000000005,182.60000000000002);


(lib.pata_mc = function(mode,startPosition,loop,reversed) {
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
		var _this = this;
		
		_this.stop();
	}
	this.frame_210 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(210).call(this.frame_210).wait(1));

	// dialogo
	this.instance = new lib.Interpolación18("synched",0);
	this.instance.setTransform(-399,19.85,0.125,0.0637,0,0,0,0,-0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regY:0,scaleX:21.7029,scaleY:7.8519,x:-371.25,y:27.2},16).wait(166));

	// dialogo copia
	this.instance_1 = new lib.Interpolación18("synched",0);
	this.instance_1.setTransform(-498.5,10.85,0.125,0.0637,0,0,0,0,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:21.6975,scaleY:7.8514,x:-459.55,y:11.65},15).wait(182));

	// dialogo copia copia
	this.instance_2 = new lib.Interpolación18("synched",0);
	this.instance_2.setTransform(-557,26.85,0.125,0.0637,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:0,scaleX:21.7029,scaleY:7.8519,x:-544.75,y:27.25},14).wait(197));

	// Esqueleto_39
	this.ikNode_15 = new lib.Símbolo69();
	this.ikNode_15.name = "ikNode_15";
	this.ikNode_15.setTransform(-529.25,141.95,0.4996,0.4996,0,0,0,231,222.4);

	this.ikNode_16 = new lib.Símbolo7_1("synched",0);
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(-538.2,89.8,0.9995,0.9995,-9.464,0,0,26.7,74.5);

	this.ikNode_18 = new lib.ala("synched",0);
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(-482.75,82.6,0.9997,0.9997,0,0,0,-46.1,37.5);

	this.ikNode_20 = new lib.Símbolo8("synched",0);
	this.ikNode_20.name = "ikNode_20";
	this.ikNode_20.setTransform(-375.85,84.3,0.9996,0.9996,-6.8744,0,0,25.4,79.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_20,p:{scaleX:0.9996,scaleY:0.9996,rotation:-6.8744,y:84.3,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:0,x:-482.75,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.464,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4996,scaleY:0.4996,x:-529.25,y:141.95}}]}).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.286,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.6927,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.8658,x:-538.25,y:89.85,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.6967,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.3881,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.2692,x:-538.35,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.108,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.0837,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.6721,x:-538.4,y:89.7,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.5181,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.7796,x:-482.75,y:82.55,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.0756,x:-538.45,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.9296,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-3.4742,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.4779,x:-538.5,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.3406,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.1692,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.88,x:-538.7,y:89.65,regY:74.4,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.7511,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.865,x:-482.6,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.2834,x:-538.65,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.161,y:84.15,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.5605,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.6874,x:-538.7,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.5729,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.256,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.0904,x:-538.75,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.985,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.9516,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.4923,x:-538.85,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.3945,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.6472,x:-482.6,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.8956,x:-539,y:89.8,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.1889,y:84.2,x:-375.75,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.3422,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.2995,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.7785,y:84.2,x:-375.75,regX:25.4}},{t:this.ikNode_18,p:{rotation:-9.0367,x:-482.6,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.7033,x:-539.1,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.3682,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-9.7326,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-15.1043,x:-539.1,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.8179,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.8543,x:-482.75,y:82.55,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.1958,x:-539.05,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.2685,y:84.15,x:-375.75,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.9774,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.2845,x:-539,y:89.7,regY:74.5,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.2764,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.0995,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.3765,x:-539,y:89.8,regY:74.5,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.8275,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.2217,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.4664,x:-538.85,y:89.7,regY:74.4,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.3778,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.3453,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.5556,x:-538.8,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.9273,y:84.2,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:-4.4666,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.6467,x:-538.8,y:89.8,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.4762,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:-3.5889,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.7374,x:-538.7,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.0269,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.7121,x:-482.85,y:82.55,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.8278,x:-538.6,y:89.6,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.5763,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.8342,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.9176,x:-538.55,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.1251,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.9559,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.0073,x:-538.55,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.6752,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.0778,x:-482.75,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.0985,x:-538.45,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.2248,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:0.7933,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-4.1876,x:-538.35,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.7749,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.6715,x:-482.75,y:82.45,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.2785,x:-538.3,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.3239,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.5493,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.3677,x:-538.4,y:89.75,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:3.4268,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-1.4583,x:-538.15,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.0801,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.2727,x:-482.75,y:82.45,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.7021,x:-538.3,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.2872,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.1186,x:-482.8,y:82.55,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.9455,x:-538.45,y:89.75,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.4918,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.0297,x:-482.85,y:82.55,regX:-46.2,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.1898,x:-538.35,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.6982,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.1843,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.434,x:-538.5,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.9044,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.3384,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.6768,x:-538.5,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.1085,y:84.2,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:-3.4925,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.9216,x:-538.55,y:89.6,regY:74.4,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.3148,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.6464,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.1643,x:-538.6,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.5205,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.8004,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.4075,x:-538.7,y:89.75,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.2685,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.955,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.6524,x:-538.7,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.0619,y:84.2,x:-375.75,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.109,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.8947,x:-538.85,y:89.8,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.8564,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-9.2628,x:-482.7,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-15.1397,x:-538.85,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.6513,y:84.1,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-10.4175,x:-482.6,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-16.3829,x:-538.95,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.4458,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-11.5713,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-17.6269,x:-538.95,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.2383,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-12.7255,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-18.8698,x:-539.05,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.0334,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-13.8803,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-20.1151,x:-539.1,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.2383,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-12.7246,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-18.8872,x:-539.05,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.4458,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-11.5696,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-17.6612,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.6513,y:84.1,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-10.4158,x:-482.6,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-16.4343,x:-538.9,y:89.6,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.8564,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-9.2609,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-15.2076,x:-538.8,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.0619,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.1064,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.9821,x:-538.75,y:89.75,regY:74.5,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.2685,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.9516,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.7547,x:-538.7,y:89.65,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.5205,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.796,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.5288,x:-538.6,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.3148,y:84.15,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.6421,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.3012,x:-538.6,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.1085,y:84.2,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:-3.4872,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.0774,x:-538.55,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.9044,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.3331,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.8499,x:-538.5,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.6982,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.1781,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.6224,x:-538.45,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.4918,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.0227,x:-482.85,y:82.55,regX:-46.2,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.3972,x:-538.4,y:89.85,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.2872,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.1256,x:-482.8,y:82.65,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-4.17,x:-538.35,y:89.7,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.0801,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.2806,x:-482.75,y:82.45,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.9439,x:-538.25,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:3.4347,x:-482.8,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-1.7173,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.3387,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.5572,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.5953,x:-538.4,y:89.8,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.8049,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.6785,x:-482.75,y:82.45,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.4739,x:-538.3,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.2705,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:0.7994,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-4.3525,x:-538.4,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.7349,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.0735,x:-482.75,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.2312,x:-538.45,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.2006,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.9524,x:-482.85,y:82.6,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.1093,x:-538.5,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.6658,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.8307,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.9881,x:-538.55,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.1312,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.7095,x:-482.85,y:82.55,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.8659,x:-538.65,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.5952,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-3.5881,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.7454,x:-538.7,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.0604,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.4666,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.6225,x:-538.75,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.5265,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.3453,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.5012,x:-538.8,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.992,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.2234,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.3808,x:-538.85,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.4566,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.1022,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.2592,x:-538.95,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.0726,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.9809,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.1379,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.6088,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.8589,x:-482.8,y:82.55,regX:-46.2,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.0155,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.1424,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-9.7379,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.8951,x:-539.1,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.6088,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.8589,x:-482.8,y:82.55,regX:-46.2,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.0155,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.0726,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.9809,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.1379,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.4566,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.1022,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.2592,x:-538.95,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.992,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.2234,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.3808,x:-538.85,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.5265,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.3453,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.5012,x:-538.8,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.0604,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.4666,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.6225,x:-538.75,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.5952,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-3.5881,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.7454,x:-538.7,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.1312,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.7095,x:-482.85,y:82.55,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.8659,x:-538.65,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.6658,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.8307,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.9881,x:-538.55,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.2006,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.9524,x:-482.85,y:82.6,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.1093,x:-538.5,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.7349,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.0735,x:-482.75,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.2312,x:-538.45,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.2705,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:0.7994,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-4.3525,x:-538.4,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.8049,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.6785,x:-482.75,y:82.45,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.4739,x:-538.3,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.3387,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.5572,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.5953,x:-538.4,y:89.8,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:3.4347,x:-482.8,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-1.7173,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.0721,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.2894,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.9395,x:-538.25,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.2705,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.1431,x:-482.7,y:82.65,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-4.1621,x:-538.3,y:89.65,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.4672,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:0,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.3848,x:-538.35,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.6658,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.1431,x:-482.65,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.6057,x:-538.45,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.8641,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.2894,x:-482.65,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.8288,x:-538.5,y:89.6,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.0604,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:-3.4347,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.0509,x:-538.6,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.2588,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.5814,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.2727,x:-538.7,y:89.75,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.4566,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.7275,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.494,x:-538.7,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.3411,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.874,x:-482.6,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.718,x:-538.7,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.1424,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.0198,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.9406,x:-538.75,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.9448,y:84.2,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:-9.1653,x:-482.8,y:82.5,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-15.1614,x:-538.9,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.7467,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-10.3108,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-16.384,x:-538.95,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.5492,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-11.4571,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-17.607,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.3506,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-12.6026,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-18.8283,x:-539.1,y:89.7,regY:74.5,regX:26.6,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.1537,y:84.2,x:-375.75,regX:25.4}},{t:this.ikNode_18,p:{rotation:-13.7497,x:-482.6,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-20.0528,x:-539.25,y:89.65,regY:74.4,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.3506,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-12.6026,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-18.8283,x:-539.1,y:89.7,regY:74.5,regX:26.6,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.5492,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-11.4571,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-17.607,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.7467,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-10.3108,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-16.384,x:-538.95,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.9448,y:84.2,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:-9.1653,x:-482.8,y:82.5,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-15.1614,x:-538.9,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.1424,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.0198,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.9406,x:-538.75,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.3411,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.874,x:-482.6,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.718,x:-538.7,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.4566,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.7275,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.494,x:-538.7,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.2588,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.5814,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.2727,x:-538.7,y:89.75,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.0604,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:-3.4347,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.0509,x:-538.6,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.8641,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.2894,x:-482.65,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.8288,x:-538.5,y:89.6,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.6658,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.1431,x:-482.65,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.6057,x:-538.45,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.4672,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:0,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.3848,x:-538.35,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.2705,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.1431,x:-482.7,y:82.65,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-4.1621,x:-538.3,y:89.65,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.0721,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.2894,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.9395,x:-538.25,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:3.4347,x:-482.8,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-1.7173,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.3387,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.5572,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.5953,x:-538.4,y:89.8,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.8049,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.6785,x:-482.75,y:82.45,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.4739,x:-538.3,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.2705,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:0.7994,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-4.3525,x:-538.4,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.7349,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.0735,x:-482.75,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.2312,x:-538.45,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.2006,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.9524,x:-482.85,y:82.6,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.1093,x:-538.5,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.6658,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.8307,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.9881,x:-538.55,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.1312,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.7095,x:-482.85,y:82.55,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.8659,x:-538.65,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.5952,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-3.5881,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.7454,x:-538.7,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.0604,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.4666,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.6225,x:-538.75,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.5265,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.3453,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.5012,x:-538.8,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.992,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.2234,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.3808,x:-538.85,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.4566,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.1022,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.2592,x:-538.95,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.0726,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.9809,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.1379,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.6088,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.8589,x:-482.8,y:82.55,regX:-46.2,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.0155,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.1424,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-9.7379,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.8951,x:-539.1,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.7208,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-9.0439,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.2022,x:-539.2,y:89.8,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.2974,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.3511,x:-482.6,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.5075,x:-539.05,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.1181,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.6578,x:-482.6,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.8146,x:-539.15,y:89.75,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.5406,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.9638,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.1197,x:-538.85,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.964,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.2701,x:-482.6,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.4271,x:-538.9,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.3866,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.5772,x:-482.6,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.7337,x:-538.95,y:89.75,regY:74.5,regX:26.6,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.8083,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.8834,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.0399,x:-538.75,y:89.65,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.2293,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.1894,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.3468,x:-538.65,y:89.6,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.6522,y:84.2,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:-3.4952,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.6534,x:-538.65,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.0752,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.8024,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.9585,x:-538.65,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.4975,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.1082,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.2657,x:-538.7,y:89.75,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.9191,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.4143,x:-482.6,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-6.5722,x:-538.55,y:89.6,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.3409,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.7207,x:-482.8,y:82.65,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-5.878,x:-538.5,y:89.6,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.763,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.028,x:-482.85,y:82.6,regX:-46.2,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.1855,x:-538.45,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.1853,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:0.6603,x:-482.9,y:82.55,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-4.491,x:-538.35,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.6079,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.3548,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.7965,x:-538.3,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.0299,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.0477,x:-482.75,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.1051,x:-538.25,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.4515,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.742,x:-482.85,y:82.55,regX:-46.2,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.4106,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:3.4347,x:-482.8,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-1.7173,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.4021,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.6605,x:-482.9,y:82.5,regX:-46.2,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.492,x:-538.25,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.9305,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.885,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.268,x:-538.3,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.4585,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:1.1099,x:-482.85,y:82.5,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-4.0429,x:-538.35,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9869,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:0.3341,x:-482.7,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-4.8175,x:-538.45,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.5156,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-0.4355,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.5923,x:-538.5,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.0436,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.2105,x:-482.6,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.3689,x:-538.65,y:89.75,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.5719,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.9865,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.1431,x:-538.55,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.0996,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.7612,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.9188,x:-538.65,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.6268,y:84.25,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-3.5363,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.6932,x:-538.65,y:89.6,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.1549,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.3113,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.4682,x:-538.75,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.684,y:84.25,x:-375.75,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.0871,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.2435,x:-538.8,y:89.6,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.2115,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.8619,x:-482.6,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.0193,x:-538.8,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.74,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.6371,x:-482.65,y:82.65,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-11.7934,x:-539,y:89.75,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.2677,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.4126,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.5701,x:-538.9,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.1986,y:84.2,x:-375.75,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.1876,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.344,x:-539.1,y:89.75,regY:74.5,regX:26.6,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.6718,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.9624,x:-482.65,y:82.65,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.6}},{t:this.ikNode_16,p:{rotation:-14.1192,x:-539.05,y:89.75,regY:74.5,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.1424,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-9.7379,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.8951,x:-539.1,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.7409,y:84.2,x:-375.75,regX:25.4}},{t:this.ikNode_18,p:{rotation:-9.0793,x:-482.65,y:82.45,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-14.2365,x:-539.05,y:89.65,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.3411,y:84.2,x:-375.75,regX:25.4}},{t:this.ikNode_18,p:{rotation:-8.4209,x:-482.7,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-13.5776,x:-538.95,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.056,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.761,x:-482.6,y:82.65,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-12.919,x:-539,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.85}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.4566,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-7.1022,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-12.2592,x:-538.95,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.8581,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-6.4434,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-11.6004,x:-538.85,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.2588,y:84.15,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.7837,x:-482.65,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.9411,x:-538.8,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.6613,y:84.2,x:-375.8,regX:25.4}},{t:this.ikNode_18,p:{rotation:-5.1257,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-10.2825,x:-538.8,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.0604,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:-4.4666,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.6225,x:-538.75,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.4622,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-3.8072,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.9658,x:-538.7,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.8641,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-3.1483,x:-482.65,y:82.65,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-8.3058,x:-538.65,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.2653,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:-2.4897,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.6478,x:-538.6,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.6658,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:-1.8307,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-6.9881,x:-538.55,y:89.7,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.0673,y:84.15,x:-376,regX:25.3}},{t:this.ikNode_18,p:{rotation:-1.172,x:-482.7,y:82.65,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-6.3284,x:-538.55,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.4672,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:-0.5125,x:-482.7,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.6696,x:-538.5,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.8692,y:84.2,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:0.1399,x:-482.75,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-5.0124,x:-538.4,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.2705,y:84.25,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:0.7994,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-4.3525,x:-538.4,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.672,y:84.25,x:-376,regX:25.3}},{t:this.ikNode_18,p:{rotation:1.458,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.6948,x:-538.3,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.0721,y:84.2,x:-375.9,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.1178,x:-482.8,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.0341,x:-538.3,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.4725,y:84.25,x:-375.85,regX:25.4}},{t:this.ikNode_18,p:{rotation:2.7769,x:-482.8,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.3747,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:3.4347,x:-482.8,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-1.7173,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:3.2542,x:-482.75,y:82.65,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-2.1392,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:3.073,x:-482.75,y:82.65,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-2.5611,x:-538.15,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:2.8917,x:-482.9,y:82.55,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-2.9841,x:-538.15,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:2.7121,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.4064,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:2.531,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-3.8272,x:-538.2,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:2.3498,x:-482.8,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-4.2507,x:-538.3,y:89.8,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:2.1686,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-4.6718,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:1.9883,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.095,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:1.8071,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.5175,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:1.626,x:-482.65,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-5.9378,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:1.4449,x:-482.7,y:82.6,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-6.3618,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:1.2639,x:-482.75,y:82.7,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-6.7827,x:-538.25,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:1.0828,x:-482.75,y:82.65,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.6}},{t:this.ikNode_16,p:{rotation:-7.2056,x:-538.15,y:89.65,regY:74.4,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:0.9017,x:-482.8,y:82.5,regX:-46.2,scaleX:0.9996,scaleY:0.9996,regY:37.5}},{t:this.ikNode_16,p:{rotation:-7.6275,x:-538.15,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:0.7207,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.0496,x:-538.3,y:89.8,regY:74.5,regX:26.6,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:0.5396,x:-482.7,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.472,x:-538.2,y:89.8,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:0.3586,x:-482.85,y:82.55,regX:-46.2,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-8.8941,x:-538.2,y:89.75,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:0.1775,x:-482.75,y:82.5,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.3158,x:-538.2,y:89.85,regY:74.5,regX:26.7,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:0,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.7371,x:-538.2,y:89.9,regY:74.5,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).to({state:[{t:this.ikNode_20,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8732,y:84.25,x:-375.95,regX:25.3}},{t:this.ikNode_18,p:{rotation:0,x:-482.7,y:82.55,regX:-46.1,scaleX:0.9997,scaleY:0.9997,regY:37.5}},{t:this.ikNode_16,p:{rotation:-9.7371,x:-538.2,y:89.9,regY:74.5,regX:26.7,scaleX:0.9994,scaleY:0.9994}},{t:this.ikNode_15,p:{scaleX:0.4995,scaleY:0.4995,x:-529.2,y:141.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-644.6,-50.7,342.70000000000005,233.39999999999998);


(lib.nextscene = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.siguienteAnimado();
	this.instance.setTransform(20.2,20,1,1,0,0,0,20.2,20);

	this.instance_1 = new lib._3btncambioEscenaRight();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-1.1,41.199999999999996,41.2);


(lib.btnInteractivo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.interactivo();
	this.instance.setTransform(-21,7,0.4204,0.4204);

	this.instance_1 = new lib.interactivosobre();
	this.instance_1.setTransform(-21.1,7.5,0.6478,0.6478,0,0,0,-0.8,-0.5);

	this.instance_2 = new lib.interactivoclic();
	this.instance_2.setTransform(-19.4,7.35,0.5824,0.5821,0,0,0,-0.1,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjlDzIAAnmIHLAAIAAHmg");
	this.shape.setTransform(-19.125,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-18.3,49.4,50.5);


(lib.Símbolo1_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_143 = function() {
		var _this = this;
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay(121);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(143).call(this.frame_143).wait(1));

	// MergedLayer_15
	this.instance_1 = new lib.Símbolo2_1();
	this.instance_1.setTransform(190.55,136.55,0.3591,0.2262,0,0,0,35.5,34.5);

	this.instance_2 = new lib.Símbolo4_1();
	this.instance_2.setTransform(226.3,132.7,0.3591,0.2262,0,0,0,35.6,36.1);

	this.instance_3 = new lib.Símbolo3_1();
	this.instance_3.setTransform(248.2,140.85,0.3591,0.2262,0,0,0,38.5,38.7);

	this.instance_4 = new lib.Símbolo5();
	this.instance_4.setTransform(267.85,136.95,0.3591,0.1797,0,0,0,39.1,53.7);

	this.instance_5 = new lib.Símbolo6_1();
	this.instance_5.setTransform(183.15,138.25,0.3591,0.2262,0,0,0,39.6,40.2);

	this.instance_6 = new lib.Símbolo7();
	this.instance_6.setTransform(219.4,141.65,0.3591,0.2262,0,0,0,35.1,35.1);

	this.instance_7 = new lib.Símbolo2_1();
	this.instance_7.setTransform(190.55,135.5,0.3591,0.6333,0,0,0,35.5,34.2);

	this.instance_8 = new lib.Símbolo4_1();
	this.instance_8.setTransform(226.3,124.8,0.3591,0.6333,0,0,0,35.6,35.9);

	this.instance_9 = new lib.Símbolo3_1();
	this.instance_9.setTransform(248.2,147.65,0.3591,0.6333,0,0,0,38.5,38.6);

	this.instance_10 = new lib.Símbolo5();
	this.instance_10.setTransform(267.85,136.65,0.3591,0.5031,0,0,0,39.1,53.5);

	this.instance_11 = new lib.Símbolo6_1();
	this.instance_11.setTransform(183.15,140.4,0.3591,0.6333,0,0,0,39.6,40.1);

	this.instance_12 = new lib.Símbolo7();
	this.instance_12.setTransform(219.4,149.85,0.3591,0.6333,0,0,0,35.1,35);

	this.instance_13 = new lib.Símbolo2_1();
	this.instance_13.setTransform(190.55,135.5,0.3591,0.6333,0,0,0,35.5,34.2);

	this.instance_14 = new lib.Símbolo4_1();
	this.instance_14.setTransform(226.3,124.8,0.3591,0.6333,0,0,0,35.6,35.9);

	this.instance_15 = new lib.Símbolo3_1();
	this.instance_15.setTransform(248.2,147.65,0.3591,0.6333,0,0,0,38.5,38.6);

	this.instance_16 = new lib.Símbolo5();
	this.instance_16.setTransform(267.85,136.65,0.3591,0.5031,0,0,0,39.1,53.5);

	this.instance_17 = new lib.Símbolo6_1();
	this.instance_17.setTransform(183.15,140.4,0.3591,0.6333,0,0,0,39.6,40.1);

	this.instance_18 = new lib.Símbolo7();
	this.instance_18.setTransform(219.4,149.85,0.3591,0.6333,0,0,0,35.1,35);

	this.instance_19 = new lib.Símbolo4_1();
	this.instance_19.setTransform(226.3,124.8,0.3591,0.6333,0,0,0,35.6,35.9);

	this.instance_20 = new lib.Símbolo3_1();
	this.instance_20.setTransform(248.2,147.65,0.3591,0.6333,0,0,0,38.5,38.6);

	this.instance_21 = new lib.Símbolo5();
	this.instance_21.setTransform(267.85,136.65,0.3591,0.5031,0,0,0,39.1,53.5);

	this.instance_22 = new lib.Símbolo6_1();
	this.instance_22.setTransform(183.15,140.4,0.3591,0.6333,0,0,0,39.6,40.1);

	this.instance_23 = new lib.Símbolo2_1();
	this.instance_23.setTransform(190.55,135.5,0.3591,0.6333,0,0,0,35.5,34.2);

	this.instance_24 = new lib.Símbolo7();
	this.instance_24.setTransform(219.4,149.85,0.3591,0.6333,0,0,0,35.1,35);

	this.instance_25 = new lib.Símbolo2_1();
	this.instance_25.setTransform(190.55,135.5,0.3591,0.6333,0,0,0,35.5,34.2);

	this.instance_26 = new lib.Símbolo4_1();
	this.instance_26.setTransform(226.3,124.8,0.3591,0.6333,0,0,0,35.6,35.9);

	this.instance_27 = new lib.Símbolo3_1();
	this.instance_27.setTransform(248.2,147.65,0.3591,0.6333,0,0,0,38.5,38.6);

	this.instance_28 = new lib.Símbolo5();
	this.instance_28.setTransform(267.85,136.65,0.3591,0.5031,0,0,0,39.1,53.5);

	this.instance_29 = new lib.Símbolo6_1();
	this.instance_29.setTransform(183.15,140.4,0.3591,0.6333,0,0,0,39.6,40.1);

	this.instance_30 = new lib.Símbolo7();
	this.instance_30.setTransform(219.4,149.85,0.3591,0.6333,0,0,0,35.1,35);

	this.instance_31 = new lib.Símbolo2_1();
	this.instance_31.setTransform(190.55,135.5,0.3591,0.6333,0,0,0,35.5,34.2);

	this.instance_32 = new lib.Símbolo4_1();
	this.instance_32.setTransform(226.3,124.8,0.3591,0.6333,0,0,0,35.6,35.9);

	this.instance_33 = new lib.Símbolo3_1();
	this.instance_33.setTransform(248.2,147.65,0.3591,0.6333,0,0,0,38.5,38.6);

	this.instance_34 = new lib.Símbolo5();
	this.instance_34.setTransform(267.85,136.65,0.3591,0.5031,0,0,0,39.1,53.5);

	this.instance_35 = new lib.Símbolo6_1();
	this.instance_35.setTransform(183.15,140.4,0.3591,0.6333,0,0,0,39.6,40.1);

	this.instance_36 = new lib.Símbolo7();
	this.instance_36.setTransform(219.4,149.85,0.3591,0.6333,0,0,0,35.1,35);

	this.instance_37 = new lib.Símbolo2_1();
	this.instance_37.setTransform(190.55,135.5,0.3591,0.6333,0,0,0,35.5,34.2);

	this.instance_38 = new lib.Símbolo4_1();
	this.instance_38.setTransform(226.3,124.8,0.3591,0.6333,0,0,0,35.6,35.9);

	this.instance_39 = new lib.Símbolo3_1();
	this.instance_39.setTransform(248.2,147.65,0.3591,0.6333,0,0,0,38.5,38.6);

	this.instance_40 = new lib.Símbolo5();
	this.instance_40.setTransform(267.85,136.65,0.3591,0.5031,0,0,0,39.1,53.5);

	this.instance_41 = new lib.Símbolo6_1();
	this.instance_41.setTransform(183.15,140.4,0.3591,0.6333,0,0,0,39.6,40.1);

	this.instance_42 = new lib.Símbolo7();
	this.instance_42.setTransform(219.4,149.85,0.3591,0.6333,0,0,0,35.1,35);

	this.instance_43 = new lib.Símbolo5();
	this.instance_43.setTransform(283.8,12.7,0.4927,0.599,0,0,0,39.2,53.5);
	this.instance_43.alpha = 0.7617;

	this.instance_44 = new lib.Símbolo2_1();
	this.instance_44.setTransform(189.35,121.85,0.3736,0.6416,0,0,0,35.6,34.3);
	this.instance_44.alpha = 0.9883;

	this.instance_45 = new lib.Símbolo4_1();
	this.instance_45.setTransform(227.4,111.85,0.3736,0.6416,0,0,0,35.8,36);
	this.instance_45.alpha = 0.9883;

	this.instance_46 = new lib.Símbolo5();
	this.instance_46.setTransform(269.65,123,0.3739,0.5137,0,0,0,39.2,53.6);
	this.instance_46.alpha = 0.9883;

	this.instance_47 = new lib.Símbolo6_1();
	this.instance_47.setTransform(179.6,128.8,0.3736,0.6416,0,0,0,39.6,40.1);
	this.instance_47.alpha = 0.9883;

	this.instance_48 = new lib.Símbolo7();
	this.instance_48.setTransform(218.2,138.25,0.3736,0.6416,0,0,0,35.2,35);
	this.instance_48.alpha = 0.9883;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{regX:35.1,regY:35.1,scaleX:0.3591,scaleY:0.2262,x:219.4,y:141.65,alpha:1}},{t:this.instance_5,p:{regY:40.2,scaleX:0.3591,scaleY:0.2262,x:183.15,y:138.25,alpha:1,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.7,scaleX:0.3591,scaleY:0.1797,x:267.85,y:136.95,alpha:1}},{t:this.instance_3,p:{regX:38.5,regY:38.7,scaleX:0.3591,scaleY:0.2262,x:248.2,y:140.85,alpha:1}},{t:this.instance_2,p:{regX:35.6,regY:36.1,scaleX:0.3591,scaleY:0.2262,x:226.3,y:132.7,alpha:1}},{t:this.instance_1,p:{regX:35.5,regY:34.5,scaleX:0.3591,scaleY:0.2262,x:190.55,y:136.55,alpha:1}}]}).to({state:[{t:this.instance_6,p:{regX:35.2,regY:35,scaleX:0.3736,scaleY:0.6416,x:218.2,y:138.25,alpha:0.9688}},{t:this.instance_5,p:{regY:40.1,scaleX:0.3736,scaleY:0.6416,x:179.6,y:128.8,alpha:0.9688,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.6,scaleX:0.3739,scaleY:0.5137,x:269.65,y:123,alpha:0.9688}},{t:this.instance_3,p:{regX:38.4,regY:38.6,scaleX:0.3736,scaleY:0.6416,x:249,y:136.65,alpha:0.9688}},{t:this.instance_2,p:{regX:35.8,regY:36,scaleX:0.3736,scaleY:0.6416,x:227.4,y:111.85,alpha:0.9688}},{t:this.instance_1,p:{regX:35.6,regY:34.3,scaleX:0.3736,scaleY:0.6416,x:189.35,y:121.85,alpha:0.9688}}]},3).to({state:[{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.3882,scaleY:0.65,x:216.85,y:126.7,alpha:0.9492}},{t:this.instance_5,p:{regY:40.1,scaleX:0.3882,scaleY:0.65,x:175.9,y:117.05,alpha:0.9492,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.6,scaleX:0.3888,scaleY:0.5244,x:271.35,y:109.15,alpha:0.9492}},{t:this.instance_3,p:{regX:38.5,regY:38.7,scaleX:0.3882,scaleY:0.65,x:249.85,y:125.8,alpha:0.9492}},{t:this.instance_2,p:{regX:35.7,regY:36,scaleX:0.3882,scaleY:0.65,x:228.3,y:98.85,alpha:0.9492}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.3882,scaleY:0.65,x:188,y:108.1,alpha:0.9492}}]},3).to({state:[{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.4028,scaleY:0.6583,x:215.6,y:115.05,alpha:0.9297}},{t:this.instance_5,p:{regY:40.1,scaleX:0.4028,scaleY:0.6583,x:172.35,y:105.35,alpha:0.9297,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.6,scaleX:0.4036,scaleY:0.535,x:273.2,y:95.4,alpha:0.9297}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.4028,scaleY:0.6583,x:250.7,y:114.75,alpha:0.9297}},{t:this.instance_2,p:{regX:35.8,regY:36,scaleX:0.4028,scaleY:0.6583,x:229.4,y:85.85,alpha:0.9297}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.4028,scaleY:0.6583,x:186.75,y:94.35,alpha:0.9297}}]},3).to({state:[{t:this.instance_6,p:{regX:35.1,regY:35.1,scaleX:0.4173,scaleY:0.6666,x:214.3,y:103.55,alpha:0.9102}},{t:this.instance_5,p:{regY:40.1,scaleX:0.4173,scaleY:0.6666,x:168.7,y:93.7,alpha:0.9102,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.4185,scaleY:0.5457,x:274.9,y:81.55,alpha:0.9102}},{t:this.instance_3,p:{regX:38.6,regY:38.6,scaleX:0.4173,scaleY:0.6666,x:251.6,y:103.8,alpha:0.9102}},{t:this.instance_2,p:{regX:35.7,regY:36,scaleX:0.4173,scaleY:0.6666,x:230.35,y:72.8,alpha:0.9102}},{t:this.instance_1,p:{regX:35.5,regY:34.3,scaleX:0.4173,scaleY:0.6666,x:185.45,y:80.7,alpha:0.9102}}]},3).to({state:[{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.4319,scaleY:0.675,x:212.95,y:91.8,alpha:0.8789}},{t:this.instance_5,p:{regY:40.1,scaleX:0.4319,scaleY:0.675,x:165.05,y:82,alpha:0.8789,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.4333,scaleY:0.5563,x:276.7,y:67.75,alpha:0.8789}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.4319,scaleY:0.675,x:252.45,y:92.8,alpha:0.8789}},{t:this.instance_2,p:{regX:35.6,regY:36,scaleX:0.4319,scaleY:0.675,x:231.4,y:59.8,alpha:0.8789}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.4319,scaleY:0.675,x:184.25,y:66.9,alpha:0.8789}}]},3).to({state:[{t:this.instance_12,p:{regX:35.1,scaleX:0.3591,scaleY:0.6333,x:219.4,y:149.85,alpha:1,regY:35}},{t:this.instance_11,p:{scaleX:0.3591,scaleY:0.6333,x:183.15,y:140.4,alpha:1,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.3591,scaleY:0.5031,x:267.85,y:136.65,alpha:1}},{t:this.instance_9,p:{regX:38.5,scaleX:0.3591,scaleY:0.6333,x:248.2,y:147.65,alpha:1,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.3591,scaleY:0.6333,x:226.3,y:124.8,alpha:1}},{t:this.instance_7,p:{regX:35.5,regY:34.2,scaleX:0.3591,scaleY:0.6333,x:190.55,y:135.5,alpha:1}},{t:this.instance_6,p:{regX:35.1,regY:35.1,scaleX:0.4465,scaleY:0.6833,x:211.65,y:80.3,alpha:0.8594}},{t:this.instance_5,p:{regY:40.1,scaleX:0.4465,scaleY:0.6833,x:161.45,y:70.3,alpha:0.8594,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.6,scaleX:0.4482,scaleY:0.567,x:278.45,y:54,alpha:0.8594}},{t:this.instance_3,p:{regX:38.4,regY:38.6,scaleX:0.4465,scaleY:0.6833,x:253.25,y:81.8,alpha:0.8594}},{t:this.instance_2,p:{regX:35.8,regY:36,scaleX:0.4465,scaleY:0.6833,x:232.5,y:46.85,alpha:0.8594}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.4465,scaleY:0.6833,x:182.95,y:53.2,alpha:0.8594}}]},3).to({state:[{t:this.instance_12,p:{regX:35.2,scaleX:0.3736,scaleY:0.6416,x:218.2,y:138.25,alpha:0.9883,regY:35}},{t:this.instance_11,p:{scaleX:0.3736,scaleY:0.6416,x:179.6,y:128.8,alpha:0.9883,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.6,scaleX:0.3739,scaleY:0.5137,x:269.65,y:123,alpha:0.9883}},{t:this.instance_9,p:{regX:38.4,scaleX:0.3736,scaleY:0.6416,x:249,y:136.65,alpha:0.9883,regY:38.6}},{t:this.instance_8,p:{regX:35.8,regY:36,scaleX:0.3736,scaleY:0.6416,x:227.4,y:111.85,alpha:0.9883}},{t:this.instance_7,p:{regX:35.6,regY:34.3,scaleX:0.3736,scaleY:0.6416,x:189.35,y:121.85,alpha:0.9883}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.461,scaleY:0.6916,x:210.4,y:68.65,alpha:0.8398}},{t:this.instance_5,p:{regY:40.1,scaleX:0.461,scaleY:0.6916,x:157.75,y:58.6,alpha:0.8398,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.463,scaleY:0.5776,x:280.25,y:40.25,alpha:0.8398}},{t:this.instance_3,p:{regX:38.5,regY:38.7,scaleX:0.461,scaleY:0.6916,x:254.15,y:70.85,alpha:0.8398}},{t:this.instance_2,p:{regX:35.7,regY:36,scaleX:0.461,scaleY:0.6916,x:233.45,y:33.8,alpha:0.8398}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.461,scaleY:0.6916,x:181.65,y:39.45,alpha:0.8398}}]},3).to({state:[{t:this.instance_12,p:{regX:35.1,scaleX:0.3882,scaleY:0.65,x:216.85,y:126.7,alpha:0.9805,regY:35}},{t:this.instance_11,p:{scaleX:0.3882,scaleY:0.65,x:175.9,y:117.05,alpha:0.9805,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.6,scaleX:0.3888,scaleY:0.5244,x:271.35,y:109.15,alpha:0.9805}},{t:this.instance_9,p:{regX:38.5,scaleX:0.3882,scaleY:0.65,x:249.85,y:125.8,alpha:0.9805,regY:38.7}},{t:this.instance_8,p:{regX:35.7,regY:36,scaleX:0.3882,scaleY:0.65,x:228.3,y:98.85,alpha:0.9805}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.3882,scaleY:0.65,x:188,y:108.1,alpha:0.9805}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.4756,scaleY:0.7,x:209.1,y:57,alpha:0.8203}},{t:this.instance_5,p:{regY:40,scaleX:0.4756,scaleY:0.7,x:155.5,y:47.45,alpha:0.8203,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.4779,scaleY:0.5883,x:282.05,y:26.45,alpha:0.8203}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.4756,scaleY:0.7,x:254.95,y:59.85,alpha:0.8203}},{t:this.instance_2,p:{regX:35.8,regY:36,scaleX:0.4756,scaleY:0.7,x:234.55,y:20.8,alpha:0.8203}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.4756,scaleY:0.7,x:180.4,y:25.75,alpha:0.8203}}]},3).to({state:[{t:this.instance_12,p:{regX:35.1,scaleX:0.4028,scaleY:0.6583,x:215.6,y:115.05,alpha:0.9688,regY:35}},{t:this.instance_11,p:{scaleX:0.4028,scaleY:0.6583,x:172.35,y:105.35,alpha:0.9688,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.6,scaleX:0.4036,scaleY:0.535,x:273.2,y:95.4,alpha:0.9688}},{t:this.instance_9,p:{regX:38.5,scaleX:0.4028,scaleY:0.6583,x:250.7,y:114.75,alpha:0.9688,regY:38.6}},{t:this.instance_8,p:{regX:35.8,regY:36,scaleX:0.4028,scaleY:0.6583,x:229.4,y:85.85,alpha:0.9688}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.4028,scaleY:0.6583,x:186.75,y:94.35,alpha:0.9688}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.4902,scaleY:0.7083,x:207.8,y:45.45,alpha:0.8008}},{t:this.instance_5,p:{regY:40,scaleX:0.4902,scaleY:0.7083,x:153.1,y:35.15,alpha:0.8008,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.4927,scaleY:0.599,x:283.8,y:12.7,alpha:0.8008}},{t:this.instance_3,p:{regX:38.5,regY:38.7,scaleX:0.4902,scaleY:0.7083,x:255.8,y:49,alpha:0.8008}},{t:this.instance_2,p:{regX:35.6,regY:36,scaleX:0.4902,scaleY:0.7083,x:235.5,y:7.8,alpha:0.8008}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.4902,scaleY:0.7083,x:179.05,y:12,alpha:0.8008}}]},3).to({state:[{t:this.instance_12,p:{regX:35.1,scaleX:0.4173,scaleY:0.6666,x:214.3,y:103.55,alpha:0.9609,regY:35.1}},{t:this.instance_11,p:{scaleX:0.4173,scaleY:0.6666,x:168.7,y:93.7,alpha:0.9609,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.4185,scaleY:0.5457,x:274.9,y:81.55,alpha:0.9609}},{t:this.instance_9,p:{regX:38.6,scaleX:0.4173,scaleY:0.6666,x:251.6,y:103.8,alpha:0.9609,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:36,scaleX:0.4173,scaleY:0.6666,x:230.35,y:72.8,alpha:0.9609}},{t:this.instance_7,p:{regX:35.5,regY:34.3,scaleX:0.4173,scaleY:0.6666,x:185.45,y:80.7,alpha:0.9609}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.5047,scaleY:0.7166,x:206.45,y:33.8,alpha:0.7695}},{t:this.instance_5,p:{regY:40,scaleX:0.5047,scaleY:0.7166,x:150.8,y:23.65,alpha:0.7695,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.5076,scaleY:0.6096,x:285.55,y:-1.1,alpha:0.7695}},{t:this.instance_3,p:{regX:38.6,regY:38.6,scaleX:0.5047,scaleY:0.7166,x:256.7,y:37.95,alpha:0.7695}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.5047,scaleY:0.7166,x:236.45,y:-5.25,alpha:0.7695}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.5047,scaleY:0.7166,x:177.8,y:-1.65,alpha:0.7695}}]},3).to({state:[{t:this.instance_12,p:{regX:35.1,scaleX:0.4319,scaleY:0.675,x:212.95,y:91.8,alpha:0.9492,regY:35}},{t:this.instance_11,p:{scaleX:0.4319,scaleY:0.675,x:165.05,y:82,alpha:0.9492,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.4333,scaleY:0.5563,x:276.7,y:67.75,alpha:0.9492}},{t:this.instance_9,p:{regX:38.5,scaleX:0.4319,scaleY:0.675,x:252.45,y:92.8,alpha:0.9492,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:36,scaleX:0.4319,scaleY:0.675,x:231.4,y:59.8,alpha:0.9492}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.4319,scaleY:0.675,x:184.25,y:66.9,alpha:0.9492}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.5193,scaleY:0.725,x:205.2,y:22.2,alpha:0.75}},{t:this.instance_5,p:{regY:40,scaleX:0.5193,scaleY:0.725,x:147.2,y:11.8,alpha:0.75,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.5225,scaleY:0.6203,x:287.35,y:-14.85,alpha:0.75}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.5193,scaleY:0.725,x:257.5,y:27.05,alpha:0.75}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.5193,scaleY:0.725,x:237.6,y:-18.3,alpha:0.75}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.5193,scaleY:0.725,x:176.55,y:-15.5,alpha:0.75}}]},3).to({state:[{t:this.instance_12,p:{regX:35.1,scaleX:0.4465,scaleY:0.6833,x:211.65,y:80.3,alpha:0.9414,regY:35.1}},{t:this.instance_11,p:{scaleX:0.4465,scaleY:0.6833,x:161.45,y:70.3,alpha:0.9414,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.6,scaleX:0.4482,scaleY:0.567,x:278.45,y:54,alpha:0.9414}},{t:this.instance_9,p:{regX:38.4,scaleX:0.4465,scaleY:0.6833,x:253.25,y:81.8,alpha:0.9414,regY:38.6}},{t:this.instance_8,p:{regX:35.8,regY:36,scaleX:0.4465,scaleY:0.6833,x:232.5,y:46.85,alpha:0.9414}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.4465,scaleY:0.6833,x:182.95,y:53.2,alpha:0.9414}},{t:this.instance_6,p:{regX:35.1,regY:34.9,scaleX:0.5339,scaleY:0.7333,x:203.9,y:10.55,alpha:0.7305}},{t:this.instance_5,p:{regY:40,scaleX:0.5339,scaleY:0.7333,x:144.85,y:0.55,alpha:0.7305,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.5373,scaleY:0.6309,x:289.1,y:-28.7,alpha:0.7305}},{t:this.instance_3,p:{regX:38.5,regY:38.5,scaleX:0.5339,scaleY:0.7333,x:258.4,y:16,alpha:0.7305}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.5339,scaleY:0.7333,x:238.55,y:-31.3,alpha:0.7305}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.5339,scaleY:0.7333,x:175.25,y:-29.15,alpha:0.7305}}]},3).to({state:[{t:this.instance_18,p:{regX:35.1,scaleX:0.3591,scaleY:0.6333,x:219.4,y:149.85,alpha:1,regY:35}},{t:this.instance_17,p:{scaleX:0.3591,scaleY:0.6333,x:183.15,y:140.4,alpha:1,regY:40.1,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.5,scaleX:0.3591,scaleY:0.5031,x:267.85,y:136.65,alpha:1}},{t:this.instance_15,p:{regX:38.5,scaleX:0.3591,scaleY:0.6333,x:248.2,y:147.65,alpha:1,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:35.9,scaleX:0.3591,scaleY:0.6333,x:226.3,y:124.8,alpha:1}},{t:this.instance_13,p:{regX:35.5,regY:34.2,scaleX:0.3591,scaleY:0.6333,x:190.55,y:135.5,alpha:1}},{t:this.instance_12,p:{regX:35.1,scaleX:0.461,scaleY:0.6916,x:210.4,y:68.65,alpha:0.9297,regY:35}},{t:this.instance_11,p:{scaleX:0.461,scaleY:0.6916,x:157.75,y:58.6,alpha:0.9297,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.463,scaleY:0.5776,x:280.25,y:40.25,alpha:0.9297}},{t:this.instance_9,p:{regX:38.5,scaleX:0.461,scaleY:0.6916,x:254.15,y:70.85,alpha:0.9297,regY:38.7}},{t:this.instance_8,p:{regX:35.7,regY:36,scaleX:0.461,scaleY:0.6916,x:233.45,y:33.8,alpha:0.9297}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.461,scaleY:0.6916,x:181.65,y:39.45,alpha:0.9297}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.5484,scaleY:0.7416,x:202.6,y:-1,alpha:0.7109}},{t:this.instance_5,p:{regY:40,scaleX:0.5484,scaleY:0.7416,x:142.05,y:-13.9,alpha:0.7109,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.4,scaleX:0.5522,scaleY:0.6416,x:290.85,y:-42.5,alpha:0.7109}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.5484,scaleY:0.7416,x:259.2,y:5.1,alpha:0.7109}},{t:this.instance_2,p:{regX:35.8,regY:35.9,scaleX:0.5484,scaleY:0.7416,x:239.7,y:-44.3,alpha:0.7109}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.5484,scaleY:0.7416,x:173.95,y:-42.85,alpha:0.7109}}]},3).to({state:[{t:this.instance_18,p:{regX:35.2,scaleX:0.3736,scaleY:0.6416,x:218.2,y:138.25,alpha:0.9883,regY:35}},{t:this.instance_17,p:{scaleX:0.3736,scaleY:0.6416,x:179.6,y:128.8,alpha:0.9883,regY:40.1,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.6,scaleX:0.3739,scaleY:0.5137,x:269.65,y:123,alpha:0.9883}},{t:this.instance_15,p:{regX:38.4,scaleX:0.3736,scaleY:0.6416,x:249,y:136.65,alpha:0.9883,regY:38.6}},{t:this.instance_14,p:{regX:35.8,regY:36,scaleX:0.3736,scaleY:0.6416,x:227.4,y:111.85,alpha:0.9883}},{t:this.instance_13,p:{regX:35.6,regY:34.3,scaleX:0.3736,scaleY:0.6416,x:189.35,y:121.85,alpha:0.9883}},{t:this.instance_12,p:{regX:35.1,scaleX:0.4756,scaleY:0.7,x:209.1,y:57,alpha:0.9219,regY:35}},{t:this.instance_11,p:{scaleX:0.4756,scaleY:0.7,x:154.15,y:46.85,alpha:0.9219,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.4779,scaleY:0.5883,x:282.05,y:26.45,alpha:0.9219}},{t:this.instance_9,p:{regX:38.5,scaleX:0.4756,scaleY:0.7,x:254.95,y:59.85,alpha:0.9219,regY:38.6}},{t:this.instance_8,p:{regX:35.8,regY:36,scaleX:0.4756,scaleY:0.7,x:234.55,y:20.8,alpha:0.9219}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.4756,scaleY:0.7,x:180.4,y:25.75,alpha:0.9219}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.563,scaleY:0.75,x:201.3,y:-12.55,alpha:0.6914}},{t:this.instance_5,p:{regY:40,scaleX:0.563,scaleY:0.75,x:139.2,y:-23.25,alpha:0.6914,regX:39.5}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.567,scaleY:0.6522,x:292.7,y:-56.25,alpha:0.6914}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.563,scaleY:0.75,x:260.05,y:-5.95,alpha:0.6914}},{t:this.instance_2,p:{regX:35.7,regY:36,scaleX:0.563,scaleY:0.75,x:240.65,y:-57.25,alpha:0.6914}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.563,scaleY:0.75,x:172.7,y:-56.65,alpha:0.6914}}]},3).to({state:[{t:this.instance_18,p:{regX:35.1,scaleX:0.3882,scaleY:0.65,x:216.85,y:126.7,alpha:0.9805,regY:35}},{t:this.instance_17,p:{scaleX:0.3882,scaleY:0.65,x:175.9,y:117.05,alpha:0.9805,regY:40.1,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.6,scaleX:0.3888,scaleY:0.5244,x:271.35,y:109.15,alpha:0.9805}},{t:this.instance_15,p:{regX:38.5,scaleX:0.3882,scaleY:0.65,x:249.85,y:125.8,alpha:0.9805,regY:38.7}},{t:this.instance_14,p:{regX:35.7,regY:36,scaleX:0.3882,scaleY:0.65,x:228.3,y:98.85,alpha:0.9805}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.3882,scaleY:0.65,x:188,y:108.1,alpha:0.9805}},{t:this.instance_12,p:{regX:35.1,scaleX:0.4902,scaleY:0.7083,x:207.8,y:45.45,alpha:0.9102,regY:35}},{t:this.instance_11,p:{scaleX:0.4902,scaleY:0.7083,x:153.3,y:35.15,alpha:0.9102,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.4927,scaleY:0.599,x:283.8,y:12.7,alpha:0.9102}},{t:this.instance_9,p:{regX:38.5,scaleX:0.4902,scaleY:0.7083,x:255.8,y:49,alpha:0.9102,regY:38.7}},{t:this.instance_8,p:{regX:35.6,regY:36,scaleX:0.4902,scaleY:0.7083,x:235.5,y:7.8,alpha:0.9102}},{t:this.instance_7,p:{regX:35.5,regY:34.1,scaleX:0.4902,scaleY:0.7083,x:179.05,y:12,alpha:0.9102}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.5776,scaleY:0.7583,x:199.95,y:-24.2,alpha:0.6602}},{t:this.instance_5,p:{regY:40,scaleX:0.5776,scaleY:0.7583,x:136.45,y:-34.9,alpha:0.6602,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.4,scaleX:0.5819,scaleY:0.6629,x:294.4,y:-70.05,alpha:0.6602}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.5776,scaleY:0.7583,x:260.95,y:-16.9,alpha:0.6602}},{t:this.instance_2,p:{regX:35.6,regY:36,scaleX:0.5776,scaleY:0.7583,x:241.6,y:-70.3,alpha:0.6602}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.5776,scaleY:0.7583,x:171.4,y:-70.35,alpha:0.6602}}]},3).to({state:[{t:this.instance_18,p:{regX:35.1,scaleX:0.4028,scaleY:0.6583,x:215.6,y:115.05,alpha:0.9688,regY:35}},{t:this.instance_17,p:{scaleX:0.4028,scaleY:0.6583,x:172.35,y:105.35,alpha:0.9688,regY:40.1,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.6,scaleX:0.4036,scaleY:0.535,x:273.2,y:95.4,alpha:0.9688}},{t:this.instance_15,p:{regX:38.5,scaleX:0.4028,scaleY:0.6583,x:250.7,y:114.75,alpha:0.9688,regY:38.6}},{t:this.instance_14,p:{regX:35.8,regY:36,scaleX:0.4028,scaleY:0.6583,x:229.4,y:85.85,alpha:0.9688}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.4028,scaleY:0.6583,x:186.75,y:94.35,alpha:0.9688}},{t:this.instance_12,p:{regX:35.1,scaleX:0.5047,scaleY:0.7166,x:206.45,y:33.8,alpha:0.8984,regY:35}},{t:this.instance_11,p:{scaleX:0.5047,scaleY:0.7166,x:150.1,y:23.5,alpha:0.8984,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.5076,scaleY:0.6096,x:285.55,y:-1.1,alpha:0.8984}},{t:this.instance_9,p:{regX:38.6,scaleX:0.5047,scaleY:0.7166,x:256.7,y:37.95,alpha:0.8984,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.5047,scaleY:0.7166,x:236.45,y:-5.25,alpha:0.8984}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.5047,scaleY:0.7166,x:177.8,y:-1.65,alpha:0.8984}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.5921,scaleY:0.7666,x:198.7,y:-35.8,alpha:0.6406}},{t:this.instance_5,p:{regY:40,scaleX:0.5921,scaleY:0.7666,x:133.05,y:-46.6,alpha:0.6406,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.5967,scaleY:0.6735,x:296.25,y:-83.75,alpha:0.6406}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.5921,scaleY:0.7666,x:261.75,y:-27.8,alpha:0.6406}},{t:this.instance_2,p:{regX:35.7,regY:36,scaleX:0.5921,scaleY:0.7666,x:242.7,y:-83.3,alpha:0.6406}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.5921,scaleY:0.7666,x:170.2,y:-84.05,alpha:0.6406}}]},3).to({state:[{t:this.instance_18,p:{regX:35.1,scaleX:0.4173,scaleY:0.6666,x:214.3,y:103.55,alpha:0.9609,regY:35.1}},{t:this.instance_17,p:{scaleX:0.4173,scaleY:0.6666,x:168.7,y:93.7,alpha:0.9609,regY:40.1,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.4185,scaleY:0.5457,x:274.9,y:81.55,alpha:0.9609}},{t:this.instance_15,p:{regX:38.6,scaleX:0.4173,scaleY:0.6666,x:251.6,y:103.8,alpha:0.9609,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:36,scaleX:0.4173,scaleY:0.6666,x:230.35,y:72.8,alpha:0.9609}},{t:this.instance_13,p:{regX:35.5,regY:34.3,scaleX:0.4173,scaleY:0.6666,x:185.45,y:80.7,alpha:0.9609}},{t:this.instance_12,p:{regX:35.1,scaleX:0.5193,scaleY:0.725,x:205.2,y:22.2,alpha:0.8906,regY:35}},{t:this.instance_11,p:{scaleX:0.5193,scaleY:0.725,x:146.8,y:11.8,alpha:0.8906,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.5225,scaleY:0.6203,x:287.35,y:-14.85,alpha:0.8906}},{t:this.instance_9,p:{regX:38.5,scaleX:0.5193,scaleY:0.725,x:257.5,y:27.05,alpha:0.8906,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.5193,scaleY:0.725,x:237.6,y:-18.3,alpha:0.8906}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.5193,scaleY:0.725,x:176.55,y:-15.5,alpha:0.8906}},{t:this.instance_6,p:{regX:35.1,regY:34.9,scaleX:0.6067,scaleY:0.775,x:197.4,y:-47.5,alpha:0.6211}},{t:this.instance_5,p:{regY:40,scaleX:0.6067,scaleY:0.775,x:131.3,y:-58.3,alpha:0.6211,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.4,scaleX:0.6116,scaleY:0.6842,x:297.95,y:-97.6,alpha:0.6211}},{t:this.instance_3,p:{regX:38.4,regY:38.6,scaleX:0.6067,scaleY:0.775,x:262.6,y:-38.8,alpha:0.6211}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.6067,scaleY:0.775,x:243.7,y:-96.4,alpha:0.6211}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.6067,scaleY:0.775,x:168.85,y:-97.8,alpha:0.6211}}]},3).to({state:[{t:this.instance_18,p:{regX:35.1,scaleX:0.4319,scaleY:0.675,x:212.95,y:91.8,alpha:0.9492,regY:35}},{t:this.instance_17,p:{scaleX:0.4319,scaleY:0.675,x:165.05,y:82,alpha:0.9492,regY:40.1,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.5,scaleX:0.4333,scaleY:0.5563,x:276.7,y:67.75,alpha:0.9492}},{t:this.instance_15,p:{regX:38.5,scaleX:0.4319,scaleY:0.675,x:252.45,y:92.8,alpha:0.9492,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:36,scaleX:0.4319,scaleY:0.675,x:231.4,y:59.8,alpha:0.9492}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.4319,scaleY:0.675,x:166.8,y:85.5,alpha:0.9492}},{t:this.instance_12,p:{regX:35.1,scaleX:0.5339,scaleY:0.7333,x:203.9,y:10.55,alpha:0.8789,regY:34.9}},{t:this.instance_11,p:{scaleX:0.5339,scaleY:0.7333,x:144.65,y:0.15,alpha:0.8789,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.5373,scaleY:0.6309,x:289.1,y:-28.7,alpha:0.8789}},{t:this.instance_9,p:{regX:38.5,scaleX:0.5339,scaleY:0.7333,x:258.4,y:16,alpha:0.8789,regY:38.5}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.5339,scaleY:0.7333,x:238.55,y:-31.3,alpha:0.8789}},{t:this.instance_7,p:{regX:35.5,regY:34.1,scaleX:0.5339,scaleY:0.7333,x:175.25,y:-29.15,alpha:0.8789}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.6213,scaleY:0.7833,x:196.5,y:-59.05,alpha:0.6016}},{t:this.instance_5,p:{regY:40,scaleX:0.6213,scaleY:0.7833,x:128.2,y:-70.7,alpha:0.6016,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.6264,scaleY:0.6949,x:301.4,y:-115.25,alpha:0.6016}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.6213,scaleY:0.7833,x:263.45,y:-49.75,alpha:0.6016}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.6213,scaleY:0.7833,x:244.05,y:-108,alpha:0.6016}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.6213,scaleY:0.7833,x:168.35,y:-109.3,alpha:0.6016}}]},3).to({state:[{t:this.instance_18,p:{regX:35.1,scaleX:0.4465,scaleY:0.6833,x:211.65,y:80.3,alpha:0.9414,regY:35.1}},{t:this.instance_17,p:{scaleX:0.4465,scaleY:0.6833,x:161.45,y:70.3,alpha:0.9414,regY:40.1,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.6,scaleX:0.4482,scaleY:0.567,x:278.45,y:54,alpha:0.9414}},{t:this.instance_15,p:{regX:38.4,scaleX:0.4465,scaleY:0.6833,x:253.25,y:81.8,alpha:0.9414,regY:38.6}},{t:this.instance_14,p:{regX:35.8,regY:36,scaleX:0.4465,scaleY:0.6833,x:232.5,y:46.85,alpha:0.9414}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.4465,scaleY:0.6833,x:182.95,y:53.2,alpha:0.9414}},{t:this.instance_12,p:{regX:35.1,scaleX:0.5484,scaleY:0.7416,x:202.6,y:-1,alpha:0.8711,regY:35}},{t:this.instance_11,p:{scaleX:0.5484,scaleY:0.7416,x:141.65,y:-11.6,alpha:0.8711,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.4,scaleX:0.5522,scaleY:0.6416,x:290.85,y:-42.5,alpha:0.8711}},{t:this.instance_9,p:{regX:38.5,scaleX:0.5484,scaleY:0.7416,x:259.2,y:5.1,alpha:0.8711,regY:38.6}},{t:this.instance_8,p:{regX:35.8,regY:35.9,scaleX:0.5484,scaleY:0.7416,x:239.7,y:-44.3,alpha:0.8711}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.5484,scaleY:0.7416,x:173.95,y:-42.85,alpha:0.8711}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.6358,scaleY:0.7916,x:195.65,y:-70.65,alpha:0.5781}},{t:this.instance_5,p:{regY:40.1,scaleX:0.6358,scaleY:0.7916,x:123.5,y:-93.15,alpha:0.5781,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.6413,scaleY:0.7055,x:304.95,y:-132.8,alpha:0.5781}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.6358,scaleY:0.7916,x:264.35,y:-60.8,alpha:0.5781}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.6358,scaleY:0.7916,x:244.5,y:-119.55,alpha:0.5781}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.6358,scaleY:0.7916,x:167.85,y:-120.8,alpha:0.5781}}]},3).to({state:[{t:this.instance_24,p:{regX:35.1,scaleX:0.3591,scaleY:0.6333,x:219.4,y:149.85,alpha:1,regY:35}},{t:this.instance_23,p:{regX:35.5,regY:34.2,scaleX:0.3591,scaleY:0.6333,x:190.55,y:135.5,alpha:1}},{t:this.instance_22,p:{scaleX:0.3591,scaleY:0.6333,x:183.15,y:140.4,alpha:1,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.1,regY:53.5,scaleX:0.3591,scaleY:0.5031,x:267.85,y:136.65,alpha:1}},{t:this.instance_20,p:{regX:38.5,scaleX:0.3591,scaleY:0.6333,x:248.2,y:147.65,alpha:1,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:35.9,scaleX:0.3591,scaleY:0.6333,x:226.3,y:124.8,alpha:1}},{t:this.instance_18,p:{regX:35.1,scaleX:0.461,scaleY:0.6916,x:210.4,y:68.65,alpha:0.9297,regY:35}},{t:this.instance_17,p:{scaleX:0.461,scaleY:0.6916,x:157.75,y:58.6,alpha:0.9297,regY:40.1,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.463,scaleY:0.5776,x:280.25,y:40.25,alpha:0.9297}},{t:this.instance_15,p:{regX:38.5,scaleX:0.461,scaleY:0.6916,x:254.15,y:70.85,alpha:0.9297,regY:38.7}},{t:this.instance_14,p:{regX:35.7,regY:36,scaleX:0.461,scaleY:0.6916,x:233.45,y:33.8,alpha:0.9297}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.461,scaleY:0.6916,x:181.65,y:39.45,alpha:0.9297}},{t:this.instance_12,p:{regX:35.1,scaleX:0.563,scaleY:0.75,x:201.3,y:-12.55,alpha:0.8594,regY:35}},{t:this.instance_11,p:{scaleX:0.563,scaleY:0.75,x:138.7,y:-24.2,alpha:0.8594,regY:40,regX:39.5}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.567,scaleY:0.6522,x:292.7,y:-56.25,alpha:0.8594}},{t:this.instance_9,p:{regX:38.5,scaleX:0.563,scaleY:0.75,x:260.05,y:-5.95,alpha:0.8594,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:36,scaleX:0.563,scaleY:0.75,x:240.65,y:-57.25,alpha:0.8594}},{t:this.instance_7,p:{regX:35.5,regY:34.1,scaleX:0.563,scaleY:0.75,x:172.7,y:-56.65,alpha:0.8594}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.6504,scaleY:0.8,x:194.8,y:-82.2,alpha:0.5508}},{t:this.instance_5,p:{regY:40,scaleX:0.6504,scaleY:0.8,x:122.55,y:-95.45,alpha:0.5508,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.4,scaleX:0.6561,scaleY:0.7162,x:308.3,y:-150.55,alpha:0.5508}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.6504,scaleY:0.8,x:265.2,y:-71.7,alpha:0.5508}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.6504,scaleY:0.8,x:244.85,y:-131.2,alpha:0.5508}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.6504,scaleY:0.8,x:167.3,y:-132.3,alpha:0.5508}}]},3).to({state:[{t:this.instance_24,p:{regX:35.2,scaleX:0.3736,scaleY:0.6416,x:218.2,y:138.25,alpha:0.9883,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.3,scaleX:0.3736,scaleY:0.6416,x:189.35,y:121.85,alpha:0.9883}},{t:this.instance_22,p:{scaleX:0.3736,scaleY:0.6416,x:179.6,y:128.8,alpha:0.9883,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.6,scaleX:0.3739,scaleY:0.5137,x:269.65,y:123,alpha:0.9883}},{t:this.instance_20,p:{regX:38.4,scaleX:0.3736,scaleY:0.6416,x:249,y:136.65,alpha:0.9883,regY:38.6}},{t:this.instance_19,p:{regX:35.8,regY:36,scaleX:0.3736,scaleY:0.6416,x:227.4,y:111.85,alpha:0.9883}},{t:this.instance_18,p:{regX:35.1,scaleX:0.4756,scaleY:0.7,x:209.1,y:57,alpha:0.9219,regY:35}},{t:this.instance_17,p:{scaleX:0.4756,scaleY:0.7,x:154.15,y:46.85,alpha:0.9219,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.4779,scaleY:0.5883,x:282.05,y:26.45,alpha:0.9219}},{t:this.instance_15,p:{regX:38.5,scaleX:0.4756,scaleY:0.7,x:254.95,y:59.85,alpha:0.9219,regY:38.6}},{t:this.instance_14,p:{regX:35.8,regY:36,scaleX:0.4756,scaleY:0.7,x:234.55,y:20.8,alpha:0.9219}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.4756,scaleY:0.7,x:180.4,y:25.75,alpha:0.9219}},{t:this.instance_12,p:{regX:35.1,scaleX:0.5776,scaleY:0.7583,x:199.95,y:-24.2,alpha:0.8516,regY:35}},{t:this.instance_11,p:{scaleX:0.5776,scaleY:0.7583,x:136.65,y:-34.7,alpha:0.8516,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.4,scaleX:0.5819,scaleY:0.6629,x:294.4,y:-70.05,alpha:0.8516}},{t:this.instance_9,p:{regX:38.5,scaleX:0.5776,scaleY:0.7583,x:260.95,y:-16.9,alpha:0.8516,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:36,scaleX:0.5776,scaleY:0.7583,x:241.6,y:-70.3,alpha:0.8516}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.5776,scaleY:0.7583,x:171.4,y:-70.35,alpha:0.8516}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.6649,scaleY:0.8083,x:193.95,y:-93.8,alpha:0.5313}},{t:this.instance_5,p:{regY:40,scaleX:0.6649,scaleY:0.8083,x:118.55,y:-107.85,alpha:0.5313,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.4,scaleX:0.671,scaleY:0.7268,x:311.85,y:-168.2,alpha:0.5313}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.6649,scaleY:0.8083,x:266,y:-82.75,alpha:0.5313}},{t:this.instance_2,p:{regX:35.7,regY:36,scaleX:0.6649,scaleY:0.8083,x:245.35,y:-142.75,alpha:0.5313}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.6649,scaleY:0.8083,x:166.85,y:-143.85,alpha:0.5313}}]},3).to({state:[{t:this.instance_24,p:{regX:35.1,scaleX:0.3882,scaleY:0.65,x:216.85,y:126.7,alpha:0.9805,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.2,scaleX:0.3882,scaleY:0.65,x:188,y:108.1,alpha:0.9805}},{t:this.instance_22,p:{scaleX:0.3882,scaleY:0.65,x:175.9,y:117.05,alpha:0.9805,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.6,scaleX:0.3888,scaleY:0.5244,x:271.35,y:109.15,alpha:0.9805}},{t:this.instance_20,p:{regX:38.5,scaleX:0.3882,scaleY:0.65,x:249.85,y:125.8,alpha:0.9805,regY:38.7}},{t:this.instance_19,p:{regX:35.7,regY:36,scaleX:0.3882,scaleY:0.65,x:228.3,y:98.85,alpha:0.9805}},{t:this.instance_18,p:{regX:35.1,scaleX:0.4902,scaleY:0.7083,x:207.8,y:45.45,alpha:0.9102,regY:35}},{t:this.instance_17,p:{scaleX:0.4902,scaleY:0.7083,x:153.1,y:30,alpha:0.9102,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.4927,scaleY:0.599,x:283.8,y:12.7,alpha:0.9102}},{t:this.instance_15,p:{regX:38.5,scaleX:0.4902,scaleY:0.7083,x:255.8,y:49,alpha:0.9102,regY:38.7}},{t:this.instance_14,p:{regX:35.6,regY:36,scaleX:0.4902,scaleY:0.7083,x:235.5,y:7.8,alpha:0.9102}},{t:this.instance_13,p:{regX:35.5,regY:34.1,scaleX:0.4902,scaleY:0.7083,x:179.05,y:12,alpha:0.9102}},{t:this.instance_12,p:{regX:35.1,scaleX:0.5921,scaleY:0.7666,x:198.7,y:-35.8,alpha:0.8398,regY:35}},{t:this.instance_11,p:{scaleX:0.5921,scaleY:0.7666,x:133.95,y:-46.2,alpha:0.8398,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.5967,scaleY:0.6735,x:296.25,y:-83.75,alpha:0.8398}},{t:this.instance_9,p:{regX:38.5,scaleX:0.5921,scaleY:0.7666,x:261.75,y:-27.8,alpha:0.8398,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:36,scaleX:0.5921,scaleY:0.7666,x:242.7,y:-83.3,alpha:0.8398}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.5921,scaleY:0.7666,x:170.2,y:-84.05,alpha:0.8398}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.6795,scaleY:0.8166,x:193.1,y:-105.4,alpha:0.5117}},{t:this.instance_5,p:{regY:40.1,scaleX:0.6795,scaleY:0.8166,x:116.95,y:-120.2,alpha:0.5117,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.6859,scaleY:0.7375,x:315.25,y:-185.8,alpha:0.5117}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.6795,scaleY:0.8166,x:266.85,y:-93.7,alpha:0.5117}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.6795,scaleY:0.8166,x:245.7,y:-154.45,alpha:0.5117}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.6795,scaleY:0.8167,x:166.35,y:-155.35,alpha:0.5117}}]},3).to({state:[{t:this.instance_24,p:{regX:35.1,scaleX:0.4028,scaleY:0.6583,x:215.6,y:115.05,alpha:0.9688,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.2,scaleX:0.4028,scaleY:0.6583,x:186.75,y:94.35,alpha:0.9688}},{t:this.instance_22,p:{scaleX:0.4028,scaleY:0.6583,x:172.35,y:105.35,alpha:0.9688,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.1,regY:53.6,scaleX:0.4036,scaleY:0.535,x:273.2,y:95.4,alpha:0.9688}},{t:this.instance_20,p:{regX:38.5,scaleX:0.4028,scaleY:0.6583,x:250.7,y:114.75,alpha:0.9688,regY:38.6}},{t:this.instance_19,p:{regX:35.8,regY:36,scaleX:0.4028,scaleY:0.6583,x:229.4,y:85.85,alpha:0.9688}},{t:this.instance_18,p:{regX:35.1,scaleX:0.5047,scaleY:0.7166,x:206.45,y:33.8,alpha:0.8984,regY:35}},{t:this.instance_17,p:{scaleX:0.5047,scaleY:0.7166,x:150.5,y:23.5,alpha:0.8984,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.5076,scaleY:0.6096,x:285.55,y:-1.1,alpha:0.8984}},{t:this.instance_15,p:{regX:38.6,scaleX:0.5047,scaleY:0.7166,x:256.7,y:37.95,alpha:0.8984,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:35.9,scaleX:0.5047,scaleY:0.7166,x:236.45,y:-5.25,alpha:0.8984}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.5047,scaleY:0.7166,x:181.1,y:-1.65,alpha:0.8984}},{t:this.instance_12,p:{regX:35.1,scaleX:0.6067,scaleY:0.775,x:197.4,y:-47.5,alpha:0.8281,regY:34.9}},{t:this.instance_11,p:{scaleX:0.6067,scaleY:0.775,x:130.9,y:-57.15,alpha:0.8281,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.4,scaleX:0.6116,scaleY:0.6842,x:297.95,y:-97.6,alpha:0.8281}},{t:this.instance_9,p:{regX:38.4,scaleX:0.6067,scaleY:0.775,x:262.6,y:-38.8,alpha:0.8281,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.6067,scaleY:0.775,x:243.7,y:-96.4,alpha:0.8281}},{t:this.instance_7,p:{regX:35.5,regY:34.1,scaleX:0.6067,scaleY:0.775,x:168.85,y:-97.8,alpha:0.8281}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.6941,scaleY:0.825,x:192.25,y:-117.05,alpha:0.4883}},{t:this.instance_5,p:{regY:40,scaleX:0.6941,scaleY:0.825,x:113.7,y:-130.3,alpha:0.4883,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.4,scaleX:0.7007,scaleY:0.7481,x:318.8,y:-203.4,alpha:0.4883}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.6941,scaleY:0.825,x:267.65,y:-104.6,alpha:0.4883}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.6941,scaleY:0.825,x:246.05,y:-166.05,alpha:0.4883}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.6941,scaleY:0.825,x:165.75,y:-166.85,alpha:0.4883}}]},3).to({state:[{t:this.instance_24,p:{regX:35.1,scaleX:0.4173,scaleY:0.6666,x:214.3,y:103.55,alpha:0.9609,regY:35.1}},{t:this.instance_23,p:{regX:35.5,regY:34.3,scaleX:0.4173,scaleY:0.6666,x:185.45,y:80.7,alpha:0.9609}},{t:this.instance_22,p:{scaleX:0.4173,scaleY:0.6666,x:168.7,y:93.7,alpha:0.9609,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.4185,scaleY:0.5457,x:274.9,y:81.55,alpha:0.9609}},{t:this.instance_20,p:{regX:38.6,scaleX:0.4173,scaleY:0.6666,x:251.6,y:103.8,alpha:0.9609,regY:38.6}},{t:this.instance_19,p:{regX:35.7,regY:36,scaleX:0.4173,scaleY:0.6666,x:230.35,y:72.8,alpha:0.9609}},{t:this.instance_18,p:{regX:35.1,scaleX:0.5193,scaleY:0.725,x:205.2,y:22.2,alpha:0.8906,regY:35}},{t:this.instance_17,p:{scaleX:0.5193,scaleY:0.725,x:148.35,y:11.8,alpha:0.8906,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.5225,scaleY:0.6203,x:287.35,y:-14.85,alpha:0.8906}},{t:this.instance_15,p:{regX:38.5,scaleX:0.5193,scaleY:0.725,x:257.5,y:27.05,alpha:0.8906,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.5193,scaleY:0.725,x:237.6,y:-18.3,alpha:0.8906}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.5193,scaleY:0.725,x:178.55,y:-15.5,alpha:0.8906}},{t:this.instance_12,p:{regX:35.1,scaleX:0.6213,scaleY:0.7833,x:196.5,y:-59.05,alpha:0.8203,regY:35}},{t:this.instance_11,p:{scaleX:0.6213,scaleY:0.7833,x:127.6,y:-71.5,alpha:0.8203,regY:40,regX:39.5}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.6264,scaleY:0.6949,x:301.4,y:-115.25,alpha:0.8203}},{t:this.instance_9,p:{regX:38.5,scaleX:0.6213,scaleY:0.7833,x:263.45,y:-49.75,alpha:0.8203,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.6213,scaleY:0.7833,x:244.05,y:-108,alpha:0.8203}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.6213,scaleY:0.7833,x:168.35,y:-109.3,alpha:0.8203}},{t:this.instance_6,p:{regX:35.1,regY:34.9,scaleX:0.7086,scaleY:0.8333,x:191.3,y:-128.7,alpha:0.4688}},{t:this.instance_5,p:{regY:40,scaleX:0.7086,scaleY:0.8333,x:110.25,y:-147.05,alpha:0.4688,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.7156,scaleY:0.7588,x:322.25,y:-221,alpha:0.4688}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.7086,scaleY:0.8333,x:268.55,y:-115.6,alpha:0.4688}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.7086,scaleY:0.8333,x:246.55,y:-177.65,alpha:0.4688}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.7086,scaleY:0.8333,x:165.25,y:-178.35,alpha:0.4688}}]},3).to({state:[{t:this.instance_24,p:{regX:35.1,scaleX:0.4319,scaleY:0.675,x:212.95,y:91.8,alpha:0.9492,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.2,scaleX:0.4319,scaleY:0.675,x:184.25,y:66.9,alpha:0.9492}},{t:this.instance_22,p:{scaleX:0.4319,scaleY:0.675,x:165.05,y:82,alpha:0.9492,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.1,regY:53.5,scaleX:0.4333,scaleY:0.5563,x:276.7,y:67.75,alpha:0.9492}},{t:this.instance_20,p:{regX:38.5,scaleX:0.4319,scaleY:0.675,x:252.45,y:92.8,alpha:0.9492,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:36,scaleX:0.4319,scaleY:0.675,x:231.4,y:59.8,alpha:0.9492}},{t:this.instance_18,p:{regX:35.1,scaleX:0.5339,scaleY:0.7333,x:203.9,y:10.55,alpha:0.8789,regY:34.9}},{t:this.instance_17,p:{scaleX:0.5339,scaleY:0.7333,x:144.1,y:0.15,alpha:0.8789,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.5373,scaleY:0.6309,x:289.1,y:-28.7,alpha:0.8789}},{t:this.instance_15,p:{regX:38.5,scaleX:0.5339,scaleY:0.7333,x:258.4,y:16,alpha:0.8789,regY:38.5}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.5339,scaleY:0.7333,x:238.55,y:-31.3,alpha:0.8789}},{t:this.instance_13,p:{regX:35.5,regY:34.1,scaleX:0.5339,scaleY:0.7333,x:175.25,y:-29.15,alpha:0.8789}},{t:this.instance_12,p:{regX:35.1,scaleX:0.6358,scaleY:0.7916,x:195.65,y:-70.65,alpha:0.8086,regY:35}},{t:this.instance_11,p:{scaleX:0.6358,scaleY:0.7916,x:125.3,y:-83,alpha:0.8086,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.6413,scaleY:0.7055,x:304.95,y:-132.8,alpha:0.8086}},{t:this.instance_9,p:{regX:38.5,scaleX:0.6358,scaleY:0.7916,x:264.35,y:-60.8,alpha:0.8086,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.6358,scaleY:0.7916,x:244.5,y:-119.55,alpha:0.8086}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.6358,scaleY:0.7916,x:167.85,y:-120.8,alpha:0.8086}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.7232,scaleY:0.8416,x:190.5,y:-140.2,alpha:0.4414}},{t:this.instance_5,p:{regY:40,scaleX:0.7232,scaleY:0.8416,x:108.25,y:-157.45,alpha:0.4414,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.4,scaleX:0.7304,scaleY:0.7694,x:325.65,y:-238.7,alpha:0.4414}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.7232,scaleY:0.8416,x:269.4,y:-126.55,alpha:0.4414}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.7232,scaleY:0.8416,x:246.85,y:-189.2,alpha:0.4414}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.7232,scaleY:0.8416,x:164.8,y:-189.85,alpha:0.4414}}]},3).to({state:[{t:this.instance_24,p:{regX:35.1,scaleX:0.4465,scaleY:0.6833,x:211.65,y:80.3,alpha:0.9414,regY:35.1}},{t:this.instance_23,p:{regX:35.6,regY:34.2,scaleX:0.4465,scaleY:0.6833,x:182.95,y:53.2,alpha:0.9414}},{t:this.instance_22,p:{scaleX:0.4465,scaleY:0.6833,x:161.45,y:70.3,alpha:0.9414,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.6,scaleX:0.4482,scaleY:0.567,x:278.45,y:54,alpha:0.9414}},{t:this.instance_20,p:{regX:38.4,scaleX:0.4465,scaleY:0.6833,x:253.25,y:81.8,alpha:0.9414,regY:38.6}},{t:this.instance_19,p:{regX:35.8,regY:36,scaleX:0.4465,scaleY:0.6833,x:232.5,y:46.85,alpha:0.9414}},{t:this.instance_18,p:{regX:35.1,scaleX:0.5484,scaleY:0.7416,x:202.6,y:-1,alpha:0.8711,regY:35}},{t:this.instance_17,p:{scaleX:0.5484,scaleY:0.7416,x:142.15,y:-11.35,alpha:0.8711,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.4,scaleX:0.5522,scaleY:0.6416,x:290.85,y:-42.5,alpha:0.8711}},{t:this.instance_15,p:{regX:38.5,scaleX:0.5484,scaleY:0.7416,x:259.2,y:5.1,alpha:0.8711,regY:38.6}},{t:this.instance_14,p:{regX:35.8,regY:35.9,scaleX:0.5484,scaleY:0.7416,x:239.7,y:-44.3,alpha:0.8711}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.5484,scaleY:0.7416,x:173.95,y:-42.85,alpha:0.8711}},{t:this.instance_12,p:{regX:35.1,scaleX:0.6504,scaleY:0.8,x:194.8,y:-82.2,alpha:0.8008,regY:35}},{t:this.instance_11,p:{scaleX:0.6504,scaleY:0.8,x:122.2,y:-95.45,alpha:0.8008,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.4,scaleX:0.6561,scaleY:0.7162,x:308.3,y:-150.55,alpha:0.8008}},{t:this.instance_9,p:{regX:38.5,scaleX:0.6504,scaleY:0.8,x:265.2,y:-71.7,alpha:0.8008,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.6504,scaleY:0.8,x:244.85,y:-131.2,alpha:0.8008}},{t:this.instance_7,p:{regX:35.5,regY:34.1,scaleX:0.6504,scaleY:0.8,x:161.45,y:-132.3,alpha:0.8008}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.7378,scaleY:0.85,x:189.65,y:-151.85,alpha:0.4219}},{t:this.instance_5,p:{regY:40,scaleX:0.7378,scaleY:0.85,x:104.6,y:-169.85,alpha:0.4219,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.7453,scaleY:0.7801,x:329.2,y:-256.25,alpha:0.4219}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.7378,scaleY:0.85,x:270.25,y:-137.6,alpha:0.4219}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.7378,scaleY:0.85,x:247.35,y:-200.8,alpha:0.4219}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.7378,scaleY:0.85,x:164.3,y:-201.35,alpha:0.4219}}]},3).to({state:[{t:this.instance_30,p:{regX:35.1,scaleX:0.3591,scaleY:0.6333,x:219.4,y:149.85,alpha:1,regY:35}},{t:this.instance_29,p:{scaleX:0.3591,scaleY:0.6333,x:183.15,y:140.4,alpha:1,regY:40.1,regX:39.6}},{t:this.instance_28,p:{regX:39.1,regY:53.5,scaleX:0.3591,scaleY:0.5031,x:267.85,y:136.65,alpha:1}},{t:this.instance_27,p:{regX:38.5,scaleX:0.3591,scaleY:0.6333,x:248.2,y:147.65,alpha:1,regY:38.6}},{t:this.instance_26,p:{regX:35.6,regY:35.9,scaleX:0.3591,scaleY:0.6333,x:226.3,y:124.8,alpha:1}},{t:this.instance_25,p:{regX:35.5,regY:34.2,scaleX:0.3591,scaleY:0.6333,x:190.55,y:135.5,alpha:1}},{t:this.instance_24,p:{regX:35.1,scaleX:0.461,scaleY:0.6916,x:210.4,y:68.65,alpha:0.9297,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.2,scaleX:0.461,scaleY:0.6916,x:181.65,y:39.45,alpha:0.9297}},{t:this.instance_22,p:{scaleX:0.461,scaleY:0.6916,x:157.75,y:58.6,alpha:0.9297,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.463,scaleY:0.5776,x:280.25,y:40.25,alpha:0.9297}},{t:this.instance_20,p:{regX:38.5,scaleX:0.461,scaleY:0.6916,x:254.15,y:70.85,alpha:0.9297,regY:38.7}},{t:this.instance_19,p:{regX:35.7,regY:36,scaleX:0.461,scaleY:0.6916,x:233.45,y:33.8,alpha:0.9297}},{t:this.instance_18,p:{regX:35.1,scaleX:0.563,scaleY:0.75,x:201.3,y:-12.55,alpha:0.8594,regY:35}},{t:this.instance_17,p:{scaleX:0.563,scaleY:0.75,x:138.45,y:-23.75,alpha:0.8594,regY:40,regX:39.5}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.567,scaleY:0.6522,x:292.7,y:-56.25,alpha:0.8594}},{t:this.instance_15,p:{regX:38.5,scaleX:0.563,scaleY:0.75,x:260.05,y:-5.95,alpha:0.8594,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:36,scaleX:0.563,scaleY:0.75,x:240.65,y:-57.25,alpha:0.8594}},{t:this.instance_13,p:{regX:35.5,regY:34.1,scaleX:0.563,scaleY:0.75,x:172.7,y:-56.65,alpha:0.8594}},{t:this.instance_12,p:{regX:35.1,scaleX:0.6649,scaleY:0.8083,x:193.95,y:-93.8,alpha:0.7891,regY:35}},{t:this.instance_11,p:{scaleX:0.6649,scaleY:0.8083,x:119.3,y:-107.85,alpha:0.7891,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.4,scaleX:0.671,scaleY:0.7268,x:311.85,y:-168.2,alpha:0.7891}},{t:this.instance_9,p:{regX:38.5,scaleX:0.6649,scaleY:0.8083,x:266,y:-82.75,alpha:0.7891,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:36,scaleX:0.6649,scaleY:0.8083,x:245.35,y:-142.75,alpha:0.7891}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.6649,scaleY:0.8083,x:166.85,y:-143.85,alpha:0.7891}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.7523,scaleY:0.8583,x:188.8,y:-163.4,alpha:0.3984}},{t:this.instance_5,p:{regY:40,scaleX:0.7523,scaleY:0.8583,x:102.05,y:-179,alpha:0.3984,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.7601,scaleY:0.7907,x:332.55,y:-273.9,alpha:0.3984}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.7523,scaleY:0.8583,x:271.05,y:-148.5,alpha:0.3984}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.7523,scaleY:0.8583,x:247.7,y:-212.4,alpha:0.3984}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.7523,scaleY:0.8583,x:163.75,y:-212.85,alpha:0.3984}}]},3).to({state:[{t:this.instance_30,p:{regX:35.2,scaleX:0.3736,scaleY:0.6416,x:218.2,y:138.25,alpha:0.9883,regY:35}},{t:this.instance_29,p:{scaleX:0.3736,scaleY:0.6416,x:179.6,y:128.8,alpha:0.9883,regY:40.1,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.6,scaleX:0.3739,scaleY:0.5137,x:269.65,y:123,alpha:0.9883}},{t:this.instance_27,p:{regX:38.4,scaleX:0.3736,scaleY:0.6416,x:249,y:136.65,alpha:0.9883,regY:38.6}},{t:this.instance_26,p:{regX:35.8,regY:36,scaleX:0.3736,scaleY:0.6416,x:227.4,y:111.85,alpha:0.9883}},{t:this.instance_25,p:{regX:35.6,regY:34.3,scaleX:0.3736,scaleY:0.6416,x:189.35,y:121.85,alpha:0.9883}},{t:this.instance_24,p:{regX:35.1,scaleX:0.4756,scaleY:0.7,x:209.1,y:57,alpha:0.9219,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.2,scaleX:0.4756,scaleY:0.7,x:180.4,y:25.75,alpha:0.9219}},{t:this.instance_22,p:{scaleX:0.4756,scaleY:0.7,x:156.15,y:46.85,alpha:0.9219,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.4779,scaleY:0.5883,x:282.05,y:26.45,alpha:0.9219}},{t:this.instance_20,p:{regX:38.5,scaleX:0.4756,scaleY:0.7,x:254.95,y:59.85,alpha:0.9219,regY:38.6}},{t:this.instance_19,p:{regX:35.8,regY:36,scaleX:0.4756,scaleY:0.7,x:234.55,y:20.8,alpha:0.9219}},{t:this.instance_18,p:{regX:35.1,scaleX:0.5776,scaleY:0.7583,x:199.95,y:-24.2,alpha:0.8516,regY:35}},{t:this.instance_17,p:{scaleX:0.5776,scaleY:0.7583,x:136.7,y:-34.7,alpha:0.8516,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.4,scaleX:0.5819,scaleY:0.6629,x:294.4,y:-70.05,alpha:0.8516}},{t:this.instance_15,p:{regX:38.5,scaleX:0.5776,scaleY:0.7583,x:260.95,y:-16.9,alpha:0.8516,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:36,scaleX:0.5776,scaleY:0.7583,x:241.6,y:-70.3,alpha:0.8516}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.5776,scaleY:0.7583,x:171.4,y:-70.35,alpha:0.8516}},{t:this.instance_12,p:{regX:35.1,scaleX:0.6795,scaleY:0.8166,x:193.1,y:-105.4,alpha:0.7813,regY:35}},{t:this.instance_11,p:{scaleX:0.6795,scaleY:0.8166,x:116.55,y:-120.2,alpha:0.7813,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.6859,scaleY:0.7375,x:315.25,y:-185.8,alpha:0.7813}},{t:this.instance_9,p:{regX:38.5,scaleX:0.6795,scaleY:0.8166,x:266.8,y:-93.7,alpha:0.7813,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.6795,scaleY:0.8166,x:245.7,y:-154.45,alpha:0.7813}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.6795,scaleY:0.8167,x:166.35,y:-155.35,alpha:0.7813}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.7669,scaleY:0.8666,x:187.9,y:-175.05,alpha:0.3789}},{t:this.instance_5,p:{regY:40,scaleX:0.7669,scaleY:0.8666,x:99,y:-194.6,alpha:0.3789,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.775,scaleY:0.8014,x:336,y:-291.6,alpha:0.3789}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.7669,scaleY:0.8666,x:272,y:-159.55,alpha:0.3789}},{t:this.instance_2,p:{regX:35.6,regY:36,scaleX:0.7669,scaleY:0.8666,x:248.05,y:-224,alpha:0.3789}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.7669,scaleY:0.8666,x:163.25,y:-224.45,alpha:0.3789}}]},3).to({state:[{t:this.instance_30,p:{regX:35.1,scaleX:0.3882,scaleY:0.65,x:216.85,y:126.7,alpha:0.9805,regY:35}},{t:this.instance_29,p:{scaleX:0.3882,scaleY:0.65,x:175.9,y:117.05,alpha:0.9805,regY:40.1,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.6,scaleX:0.3888,scaleY:0.5244,x:271.35,y:109.15,alpha:0.9805}},{t:this.instance_27,p:{regX:38.5,scaleX:0.3882,scaleY:0.65,x:249.85,y:125.8,alpha:0.9805,regY:38.7}},{t:this.instance_26,p:{regX:35.7,regY:36,scaleX:0.3882,scaleY:0.65,x:228.3,y:98.85,alpha:0.9805}},{t:this.instance_25,p:{regX:35.6,regY:34.2,scaleX:0.3882,scaleY:0.65,x:188,y:108.1,alpha:0.9805}},{t:this.instance_24,p:{regX:35.1,scaleX:0.4902,scaleY:0.7083,x:207.8,y:45.45,alpha:0.9102,regY:35}},{t:this.instance_23,p:{regX:35.5,regY:34.1,scaleX:0.4902,scaleY:0.7083,x:179.05,y:12,alpha:0.9102}},{t:this.instance_22,p:{scaleX:0.4902,scaleY:0.7083,x:154.35,y:35.15,alpha:0.9102,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.4927,scaleY:0.599,x:283.8,y:12.7,alpha:0.9102}},{t:this.instance_20,p:{regX:38.5,scaleX:0.4902,scaleY:0.7083,x:255.8,y:49,alpha:0.9102,regY:38.7}},{t:this.instance_19,p:{regX:35.6,regY:36,scaleX:0.4902,scaleY:0.7083,x:235.5,y:7.8,alpha:0.9102}},{t:this.instance_18,p:{regX:35.1,scaleX:0.5921,scaleY:0.7666,x:198.7,y:-35.8,alpha:0.8398,regY:35}},{t:this.instance_17,p:{scaleX:0.5921,scaleY:0.7666,x:134.15,y:-46.6,alpha:0.8398,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.5967,scaleY:0.6735,x:296.25,y:-83.75,alpha:0.8398}},{t:this.instance_15,p:{regX:38.5,scaleX:0.5921,scaleY:0.7666,x:261.75,y:-27.8,alpha:0.8398,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:36,scaleX:0.5921,scaleY:0.7666,x:242.7,y:-83.3,alpha:0.8398}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.5921,scaleY:0.7666,x:170.2,y:-84.05,alpha:0.8398}},{t:this.instance_12,p:{regX:35.1,scaleX:0.6941,scaleY:0.825,x:192.25,y:-117.05,alpha:0.7695,regY:35}},{t:this.instance_11,p:{scaleX:0.6941,scaleY:0.825,x:113.7,y:-132.65,alpha:0.7695,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.4,scaleX:0.7007,scaleY:0.7481,x:318.8,y:-203.4,alpha:0.7695}},{t:this.instance_9,p:{regX:38.5,scaleX:0.6941,scaleY:0.825,x:267.65,y:-104.6,alpha:0.7695,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.6941,scaleY:0.825,x:246.05,y:-166.05,alpha:0.7695}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.6941,scaleY:0.825,x:165.75,y:-166.85,alpha:0.7695}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.7815,scaleY:0.875,x:187.05,y:-186.65,alpha:0.3594}},{t:this.instance_5,p:{regY:40,scaleX:0.7815,scaleY:0.875,x:95.95,y:-205.9,alpha:0.3594,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.4,scaleX:0.7898,scaleY:0.8121,x:336.55,y:-299.4,alpha:0.3594}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.7815,scaleY:0.875,x:272.8,y:-170.5,alpha:0.3594}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.7815,scaleY:0.875,x:248.55,y:-235.7,alpha:0.3594}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.7815,scaleY:0.875,x:162.7,y:-235.95,alpha:0.3594}}]},3).to({state:[{t:this.instance_30,p:{regX:35.1,scaleX:0.4028,scaleY:0.6583,x:215.6,y:115.05,alpha:0.9688,regY:35}},{t:this.instance_29,p:{scaleX:0.4028,scaleY:0.6583,x:172.35,y:105.35,alpha:0.9688,regY:40.1,regX:39.6}},{t:this.instance_28,p:{regX:39.1,regY:53.6,scaleX:0.4036,scaleY:0.535,x:273.2,y:95.4,alpha:0.9688}},{t:this.instance_27,p:{regX:38.5,scaleX:0.4028,scaleY:0.6583,x:250.7,y:114.75,alpha:0.9688,regY:38.6}},{t:this.instance_26,p:{regX:35.8,regY:36,scaleX:0.4028,scaleY:0.6583,x:229.4,y:85.85,alpha:0.9688}},{t:this.instance_25,p:{regX:35.6,regY:34.2,scaleX:0.4028,scaleY:0.6583,x:186.75,y:94.35,alpha:0.9688}},{t:this.instance_24,p:{regX:35.1,scaleX:0.5047,scaleY:0.7166,x:206.45,y:33.8,alpha:0.8984,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.2,scaleX:0.5047,scaleY:0.7166,x:177.8,y:-1.65,alpha:0.8984}},{t:this.instance_22,p:{scaleX:0.5047,scaleY:0.7166,x:150.8,y:23.5,alpha:0.8984,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.5076,scaleY:0.6096,x:285.55,y:-1.1,alpha:0.8984}},{t:this.instance_20,p:{regX:38.6,scaleX:0.5047,scaleY:0.7166,x:256.7,y:37.95,alpha:0.8984,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:35.9,scaleX:0.5047,scaleY:0.7166,x:236.45,y:-5.25,alpha:0.8984}},{t:this.instance_18,p:{regX:35.1,scaleX:0.6067,scaleY:0.775,x:197.4,y:-47.5,alpha:0.8281,regY:34.9}},{t:this.instance_17,p:{scaleX:0.6067,scaleY:0.775,x:130.75,y:-57.15,alpha:0.8281,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.4,scaleX:0.6116,scaleY:0.6842,x:297.95,y:-97.6,alpha:0.8281}},{t:this.instance_15,p:{regX:38.4,scaleX:0.6067,scaleY:0.775,x:262.6,y:-38.8,alpha:0.8281,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.6067,scaleY:0.775,x:243.7,y:-96.4,alpha:0.8281}},{t:this.instance_13,p:{regX:35.5,regY:34.1,scaleX:0.6067,scaleY:0.775,x:168.85,y:-97.8,alpha:0.8281}},{t:this.instance_12,p:{regX:35.1,scaleX:0.7086,scaleY:0.8333,x:191.3,y:-128.7,alpha:0.7617,regY:34.9}},{t:this.instance_11,p:{scaleX:0.7086,scaleY:0.8333,x:110.55,y:-145,alpha:0.7617,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.7156,scaleY:0.7588,x:322.25,y:-221,alpha:0.7617}},{t:this.instance_9,p:{regX:38.5,scaleX:0.7086,scaleY:0.8333,x:268.55,y:-115.6,alpha:0.7617,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.7086,scaleY:0.8333,x:246.55,y:-177.65,alpha:0.7617}},{t:this.instance_7,p:{regX:35.5,regY:34.1,scaleX:0.7086,scaleY:0.8333,x:165.25,y:-178.35,alpha:0.7617}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.7961,scaleY:0.8833,x:186.2,y:-198.2,alpha:0.3281}},{t:this.instance_5,p:{regY:40,scaleX:0.7961,scaleY:0.8833,x:94.6,y:-213.65,alpha:0.3281,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.4,scaleX:0.8047,scaleY:0.8227,x:336.85,y:-307.15,alpha:0.3281}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.7961,scaleY:0.8833,x:273.65,y:-181.4,alpha:0.3281}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.7961,scaleY:0.8833,x:248.9,y:-247.3,alpha:0.3281}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.7961,scaleY:0.8833,x:162.25,y:-247.35,alpha:0.3281}}]},3).to({state:[{t:this.instance_30,p:{regX:35.1,scaleX:0.4173,scaleY:0.6666,x:214.3,y:103.55,alpha:0.9609,regY:35.1}},{t:this.instance_29,p:{scaleX:0.4173,scaleY:0.6666,x:168.7,y:93.7,alpha:0.9609,regY:40.1,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.4185,scaleY:0.5457,x:274.9,y:81.55,alpha:0.9609}},{t:this.instance_27,p:{regX:38.6,scaleX:0.4173,scaleY:0.6666,x:251.6,y:103.8,alpha:0.9609,regY:38.6}},{t:this.instance_26,p:{regX:35.7,regY:36,scaleX:0.4173,scaleY:0.6666,x:230.35,y:72.8,alpha:0.9609}},{t:this.instance_25,p:{regX:35.5,regY:34.3,scaleX:0.4173,scaleY:0.6666,x:185.45,y:80.7,alpha:0.9609}},{t:this.instance_24,p:{regX:35.1,scaleX:0.5193,scaleY:0.725,x:205.2,y:22.2,alpha:0.8906,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.5193,scaleY:0.725,x:176.55,y:-15.5,alpha:0.8906}},{t:this.instance_22,p:{scaleX:0.5193,scaleY:0.725,x:146.55,y:11.8,alpha:0.8906,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.5225,scaleY:0.6203,x:287.35,y:-14.85,alpha:0.8906}},{t:this.instance_20,p:{regX:38.5,scaleX:0.5193,scaleY:0.725,x:257.5,y:27.05,alpha:0.8906,regY:38.6}},{t:this.instance_19,p:{regX:35.7,regY:35.9,scaleX:0.5193,scaleY:0.725,x:237.6,y:-18.3,alpha:0.8906}},{t:this.instance_18,p:{regX:35.1,scaleX:0.6213,scaleY:0.7833,x:196.5,y:-59.05,alpha:0.8203,regY:35}},{t:this.instance_17,p:{scaleX:0.6213,scaleY:0.7833,x:127.65,y:-71.5,alpha:0.8203,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.6264,scaleY:0.6949,x:301.4,y:-115.25,alpha:0.8203}},{t:this.instance_15,p:{regX:38.5,scaleX:0.6213,scaleY:0.7833,x:263.45,y:-49.75,alpha:0.8203,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:35.9,scaleX:0.6213,scaleY:0.7833,x:244.05,y:-108,alpha:0.8203}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.6213,scaleY:0.7833,x:168.35,y:-109.3,alpha:0.8203}},{t:this.instance_12,p:{regX:35.1,scaleX:0.7232,scaleY:0.8416,x:190.5,y:-140.2,alpha:0.75,regY:35}},{t:this.instance_11,p:{scaleX:0.7232,scaleY:0.8416,x:107.85,y:-157.45,alpha:0.75,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.4,scaleX:0.7304,scaleY:0.7694,x:325.65,y:-238.7,alpha:0.75}},{t:this.instance_9,p:{regX:38.5,scaleX:0.7232,scaleY:0.8416,x:269.4,y:-126.55,alpha:0.75,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.7232,scaleY:0.8416,x:246.85,y:-189.2,alpha:0.75}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.7232,scaleY:0.8416,x:164.8,y:-189.85,alpha:0.75}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.8106,scaleY:0.8916,x:185.3,y:-209.85,alpha:0.3086}},{t:this.instance_5,p:{regY:40,scaleX:0.8106,scaleY:0.8916,x:91.15,y:-222,alpha:0.3086,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.8195,scaleY:0.8334,x:337.35,y:-314.8,alpha:0.3086}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.8106,scaleY:0.8916,x:274.45,y:-192.4,alpha:0.3086}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.8106,scaleY:0.8916,x:249.3,y:-258.9,alpha:0.3086}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.8106,scaleY:0.8916,x:161.75,y:-258.95,alpha:0.3086}}]},3).to({state:[{t:this.instance_30,p:{regX:35.1,scaleX:0.4319,scaleY:0.675,x:212.95,y:91.8,alpha:0.9492,regY:35}},{t:this.instance_29,p:{scaleX:0.4319,scaleY:0.675,x:165.05,y:82,alpha:0.9492,regY:40.1,regX:39.6}},{t:this.instance_28,p:{regX:39.1,regY:53.5,scaleX:0.4333,scaleY:0.5563,x:276.7,y:67.75,alpha:0.9492}},{t:this.instance_27,p:{regX:38.5,scaleX:0.4319,scaleY:0.675,x:252.45,y:92.8,alpha:0.9492,regY:38.6}},{t:this.instance_26,p:{regX:35.6,regY:36,scaleX:0.4319,scaleY:0.675,x:231.4,y:59.8,alpha:0.9492}},{t:this.instance_25,p:{regX:35.6,regY:34.2,scaleX:0.4319,scaleY:0.675,x:184.25,y:66.9,alpha:0.9492}},{t:this.instance_24,p:{regX:35.1,scaleX:0.5339,scaleY:0.7333,x:203.9,y:10.55,alpha:0.8789,regY:34.9}},{t:this.instance_23,p:{regX:35.5,regY:34.1,scaleX:0.5339,scaleY:0.7333,x:175.25,y:-29.15,alpha:0.8789}},{t:this.instance_22,p:{scaleX:0.5339,scaleY:0.7333,x:144.75,y:0.15,alpha:0.8789,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.5373,scaleY:0.6309,x:289.1,y:-28.7,alpha:0.8789}},{t:this.instance_20,p:{regX:38.5,scaleX:0.5339,scaleY:0.7333,x:258.4,y:16,alpha:0.8789,regY:38.5}},{t:this.instance_19,p:{regX:35.7,regY:35.9,scaleX:0.5339,scaleY:0.7333,x:238.55,y:-31.3,alpha:0.8789}},{t:this.instance_18,p:{regX:35.1,scaleX:0.6358,scaleY:0.7916,x:195.65,y:-70.65,alpha:0.8086,regY:35}},{t:this.instance_17,p:{scaleX:0.6358,scaleY:0.7916,x:125.1,y:-83,alpha:0.8086,regY:40.1,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.6413,scaleY:0.7055,x:304.95,y:-132.8,alpha:0.8086}},{t:this.instance_15,p:{regX:38.5,scaleX:0.6358,scaleY:0.7916,x:264.35,y:-60.8,alpha:0.8086,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:35.9,scaleX:0.6358,scaleY:0.7916,x:244.5,y:-119.55,alpha:0.8086}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.6358,scaleY:0.7916,x:167.85,y:-120.8,alpha:0.8086}},{t:this.instance_12,p:{regX:35.1,scaleX:0.7378,scaleY:0.85,x:189.65,y:-151.85,alpha:0.7383,regY:35}},{t:this.instance_11,p:{scaleX:0.7378,scaleY:0.85,x:104.8,y:-169.85,alpha:0.7383,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.7453,scaleY:0.7801,x:329.2,y:-256.25,alpha:0.7383}},{t:this.instance_9,p:{regX:38.5,scaleX:0.7378,scaleY:0.85,x:270.25,y:-137.6,alpha:0.7383,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.7378,scaleY:0.85,x:247.35,y:-200.8,alpha:0.7383}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.7378,scaleY:0.85,x:164.3,y:-201.35,alpha:0.7383}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.8252,scaleY:0.9,x:184.45,y:-221.4,alpha:0.2891}},{t:this.instance_5,p:{regY:40,scaleX:0.8252,scaleY:0.9,x:88.55,y:-236.45,alpha:0.2891,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.8344,scaleY:0.844,x:337.8,y:-322.6,alpha:0.2891}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.8252,scaleY:0.9,x:275.3,y:-203.35,alpha:0.2891}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.8252,scaleY:0.9,x:249.7,y:-270.45,alpha:0.2891}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.8252,scaleY:0.9,x:161.15,y:-270.45,alpha:0.2891}}]},3).to({state:[{t:this.instance_30,p:{regX:35.1,scaleX:0.4465,scaleY:0.6833,x:211.65,y:80.3,alpha:0.9414,regY:35.1}},{t:this.instance_29,p:{scaleX:0.4465,scaleY:0.6833,x:161.45,y:70.3,alpha:0.9414,regY:40.1,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.6,scaleX:0.4482,scaleY:0.567,x:278.45,y:54,alpha:0.9414}},{t:this.instance_27,p:{regX:38.4,scaleX:0.4465,scaleY:0.6833,x:253.25,y:81.8,alpha:0.9414,regY:38.6}},{t:this.instance_26,p:{regX:35.8,regY:36,scaleX:0.4465,scaleY:0.6833,x:232.5,y:46.85,alpha:0.9414}},{t:this.instance_25,p:{regX:35.6,regY:34.2,scaleX:0.4465,scaleY:0.6833,x:182.95,y:53.2,alpha:0.9414}},{t:this.instance_24,p:{regX:35.1,scaleX:0.5484,scaleY:0.7416,x:202.6,y:-1,alpha:0.8711,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.2,scaleX:0.5484,scaleY:0.7416,x:173.95,y:-42.85,alpha:0.8711}},{t:this.instance_22,p:{scaleX:0.5484,scaleY:0.7416,x:142.1,y:-11.35,alpha:0.8711,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.4,scaleX:0.5522,scaleY:0.6416,x:290.85,y:-42.5,alpha:0.8711}},{t:this.instance_20,p:{regX:38.5,scaleX:0.5484,scaleY:0.7416,x:259.2,y:5.1,alpha:0.8711,regY:38.6}},{t:this.instance_19,p:{regX:35.8,regY:35.9,scaleX:0.5484,scaleY:0.7416,x:239.7,y:-44.3,alpha:0.8711}},{t:this.instance_18,p:{regX:35.1,scaleX:0.6504,scaleY:0.8,x:194.8,y:-82.2,alpha:0.8008,regY:35}},{t:this.instance_17,p:{scaleX:0.6504,scaleY:0.8,x:121.9,y:-95.45,alpha:0.8008,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.4,scaleX:0.6561,scaleY:0.7162,x:308.3,y:-150.55,alpha:0.8008}},{t:this.instance_15,p:{regX:38.5,scaleX:0.6504,scaleY:0.8,x:265.2,y:-71.7,alpha:0.8008,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:35.9,scaleX:0.6504,scaleY:0.8,x:244.85,y:-131.2,alpha:0.8008}},{t:this.instance_13,p:{regX:35.5,regY:34.1,scaleX:0.6504,scaleY:0.8,x:167.3,y:-132.3,alpha:0.8008}},{t:this.instance_12,p:{regX:35.1,scaleX:0.7523,scaleY:0.8583,x:188.8,y:-163.4,alpha:0.7305,regY:35}},{t:this.instance_11,p:{scaleX:0.7523,scaleY:0.8583,x:101.15,y:-182.2,alpha:0.7305,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.7601,scaleY:0.7907,x:332.55,y:-273.9,alpha:0.7305}},{t:this.instance_9,p:{regX:38.5,scaleX:0.7523,scaleY:0.8583,x:271.05,y:-148.5,alpha:0.7305,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.7523,scaleY:0.8583,x:247.7,y:-212.4,alpha:0.7305}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.7523,scaleY:0.8583,x:163.75,y:-212.85,alpha:0.7305}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.8398,scaleY:0.9083,x:183.6,y:-233.05,alpha:0.2695}},{t:this.instance_5,p:{regY:40,scaleX:0.8398,scaleY:0.9083,x:85.35,y:-247.05,alpha:0.2695,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.8492,scaleY:0.8547,x:338.15,y:-330.4,alpha:0.2695}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.8398,scaleY:0.9083,x:276.2,y:-214.4,alpha:0.2695}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.8398,scaleY:0.9083,x:250.05,y:-282.05,alpha:0.2695}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.8398,scaleY:0.9083,x:160.7,y:-281.9,alpha:0.2695}}]},3).to({state:[{t:this.instance_30,p:{regX:35.1,scaleX:0.461,scaleY:0.6916,x:210.4,y:68.65,alpha:0.9297,regY:35}},{t:this.instance_29,p:{scaleX:0.461,scaleY:0.6916,x:157.75,y:58.6,alpha:0.9297,regY:40.1,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.463,scaleY:0.5776,x:280.25,y:40.25,alpha:0.9297}},{t:this.instance_27,p:{regX:38.5,scaleX:0.461,scaleY:0.6916,x:254.15,y:70.85,alpha:0.9297,regY:38.7}},{t:this.instance_26,p:{regX:35.7,regY:36,scaleX:0.461,scaleY:0.6916,x:233.45,y:33.8,alpha:0.9297}},{t:this.instance_25,p:{regX:35.6,regY:34.2,scaleX:0.461,scaleY:0.6916,x:181.65,y:39.45,alpha:0.9297}},{t:this.instance_24,p:{regX:35.1,scaleX:0.563,scaleY:0.75,x:201.3,y:-12.55,alpha:0.8594,regY:35}},{t:this.instance_23,p:{regX:35.5,regY:34.1,scaleX:0.563,scaleY:0.75,x:172.7,y:-56.65,alpha:0.8594}},{t:this.instance_22,p:{scaleX:0.563,scaleY:0.75,x:138.75,y:-23.25,alpha:0.8594,regY:40,regX:39.5}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.567,scaleY:0.6522,x:292.7,y:-56.25,alpha:0.8594}},{t:this.instance_20,p:{regX:38.5,scaleX:0.563,scaleY:0.75,x:260.05,y:-5.95,alpha:0.8594,regY:38.6}},{t:this.instance_19,p:{regX:35.7,regY:36,scaleX:0.563,scaleY:0.75,x:240.65,y:-57.25,alpha:0.8594}},{t:this.instance_18,p:{regX:35.1,scaleX:0.6649,scaleY:0.8083,x:193.95,y:-93.8,alpha:0.7891,regY:35}},{t:this.instance_17,p:{scaleX:0.6649,scaleY:0.8083,x:119.5,y:-107.85,alpha:0.7891,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.4,scaleX:0.671,scaleY:0.7268,x:311.85,y:-168.2,alpha:0.7891}},{t:this.instance_15,p:{regX:38.5,scaleX:0.6649,scaleY:0.8083,x:266,y:-82.75,alpha:0.7891,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:36,scaleX:0.6649,scaleY:0.8083,x:245.35,y:-142.75,alpha:0.7891}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.6649,scaleY:0.8083,x:166.85,y:-143.85,alpha:0.7891}},{t:this.instance_12,p:{regX:35.1,scaleX:0.7669,scaleY:0.8666,x:187.9,y:-175.05,alpha:0.7188,regY:35}},{t:this.instance_11,p:{scaleX:0.7669,scaleY:0.8666,x:99.55,y:-194.6,alpha:0.7188,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.775,scaleY:0.8014,x:336,y:-291.6,alpha:0.7188}},{t:this.instance_9,p:{regX:38.5,scaleX:0.7669,scaleY:0.8666,x:272,y:-159.55,alpha:0.7188,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:36,scaleX:0.7669,scaleY:0.8666,x:248.05,y:-224,alpha:0.7188}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.7669,scaleY:0.8666,x:163.25,y:-224.45,alpha:0.7188}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.8543,scaleY:0.9166,x:182.75,y:-244.6,alpha:0.25}},{t:this.instance_5,p:{regY:40.1,scaleX:0.8543,scaleY:0.9166,x:82.15,y:-262.45,alpha:0.25,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.8641,scaleY:0.8653,x:338.6,y:-338.1,alpha:0.25}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.8543,scaleY:0.9166,x:277,y:-225.3,alpha:0.25}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.8543,scaleY:0.9166,x:250.55,y:-293.65,alpha:0.25}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.8543,scaleY:0.9166,x:160.2,y:-293.5,alpha:0.25}}]},3).to({state:[{t:this.instance_36,p:{regX:35.1,regY:35,scaleX:0.3591,scaleY:0.6333,x:219.4,y:149.85,alpha:1}},{t:this.instance_35,p:{scaleX:0.3591,scaleY:0.6333,x:183.15,y:140.4,alpha:1,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.1,regY:53.5,scaleX:0.3591,scaleY:0.5031,x:267.85,y:136.65,alpha:1}},{t:this.instance_33,p:{scaleX:0.3591,scaleY:0.6333,x:248.2,y:147.65,alpha:1,regY:38.6,regX:38.5}},{t:this.instance_32,p:{regY:35.9,scaleX:0.3591,scaleY:0.6333,x:226.3,y:124.8,alpha:1,regX:35.6}},{t:this.instance_31,p:{regX:35.5,regY:34.2,scaleX:0.3591,scaleY:0.6333,x:190.55,y:135.5,alpha:1}},{t:this.instance_30,p:{regX:35.1,scaleX:0.4756,scaleY:0.7,x:209.1,y:57,alpha:0.9219,regY:35}},{t:this.instance_29,p:{scaleX:0.4756,scaleY:0.7,x:156.15,y:46.85,alpha:0.9219,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.4779,scaleY:0.5883,x:282.05,y:26.45,alpha:0.9219}},{t:this.instance_27,p:{regX:38.5,scaleX:0.4756,scaleY:0.7,x:254.95,y:59.85,alpha:0.9219,regY:38.6}},{t:this.instance_26,p:{regX:35.8,regY:36,scaleX:0.4756,scaleY:0.7,x:234.55,y:20.8,alpha:0.9219}},{t:this.instance_25,p:{regX:35.6,regY:34.2,scaleX:0.4756,scaleY:0.7,x:180.4,y:25.75,alpha:0.9219}},{t:this.instance_24,p:{regX:35.1,scaleX:0.5776,scaleY:0.7583,x:199.95,y:-24.2,alpha:0.8516,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.5776,scaleY:0.7583,x:171.4,y:-70.35,alpha:0.8516}},{t:this.instance_22,p:{scaleX:0.5776,scaleY:0.7583,x:136.85,y:-34.7,alpha:0.8516,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.4,scaleX:0.5819,scaleY:0.6629,x:294.4,y:-70.05,alpha:0.8516}},{t:this.instance_20,p:{regX:38.5,scaleX:0.5776,scaleY:0.7583,x:260.95,y:-16.9,alpha:0.8516,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:36,scaleX:0.5776,scaleY:0.7583,x:241.6,y:-70.3,alpha:0.8516}},{t:this.instance_18,p:{regX:35.1,scaleX:0.6795,scaleY:0.8166,x:193.1,y:-105.4,alpha:0.7813,regY:35}},{t:this.instance_17,p:{scaleX:0.6795,scaleY:0.8166,x:115.35,y:-123.25,alpha:0.7813,regY:40.1,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.5,scaleX:0.6859,scaleY:0.7375,x:315.25,y:-185.8,alpha:0.7813}},{t:this.instance_15,p:{regX:38.5,scaleX:0.6795,scaleY:0.8166,x:266.8,y:-93.7,alpha:0.7813,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.6795,scaleY:0.8166,x:245.7,y:-154.45,alpha:0.7813}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.6795,scaleY:0.8167,x:166.35,y:-155.35,alpha:0.7813}},{t:this.instance_12,p:{regX:35.1,scaleX:0.7815,scaleY:0.875,x:187.05,y:-186.65,alpha:0.7109,regY:35}},{t:this.instance_11,p:{scaleX:0.7815,scaleY:0.875,x:96.05,y:-205.9,alpha:0.7109,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.4,scaleX:0.7898,scaleY:0.8121,x:336.55,y:-299.4,alpha:0.7109}},{t:this.instance_9,p:{regX:38.5,scaleX:0.7815,scaleY:0.875,x:272.8,y:-170.5,alpha:0.7109,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.7815,scaleY:0.875,x:248.55,y:-235.7,alpha:0.7109}},{t:this.instance_7,p:{regX:35.5,regY:34.1,scaleX:0.7815,scaleY:0.875,x:162.7,y:-235.95,alpha:0.7109}},{t:this.instance_6,p:{regX:35.1,regY:34.9,scaleX:0.8689,scaleY:0.925,x:181.9,y:-256.3,alpha:0.2188}},{t:this.instance_5,p:{regY:40,scaleX:0.8689,scaleY:0.925,x:79.75,y:-273.8,alpha:0.2188,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.879,scaleY:0.876,x:339,y:-345.9,alpha:0.2188}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.8689,scaleY:0.925,x:277.9,y:-236.35,alpha:0.2188}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.8689,scaleY:0.925,x:250.9,y:-305.3,alpha:0.2188}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.8689,scaleY:0.925,x:159.7,y:-305,alpha:0.2188}}]},3).to({state:[{t:this.instance_36,p:{regX:35.2,regY:35.1,scaleX:0.3764,scaleY:0.6432,x:218.2,y:138.35,alpha:0.9688}},{t:this.instance_35,p:{scaleX:0.3764,scaleY:0.6432,x:179.6,y:128.75,alpha:0.9688,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.2,regY:53.6,scaleX:0.3739,scaleY:0.5137,x:269.65,y:123,alpha:0.9688}},{t:this.instance_33,p:{scaleX:0.3764,scaleY:0.6432,x:249.25,y:134.65,alpha:0.9688,regY:38.6,regX:38.5}},{t:this.instance_32,p:{regY:36,scaleX:0.3764,scaleY:0.6432,x:227.3,y:111.85,alpha:0.9688,regX:35.6}},{t:this.instance_31,p:{regX:35.6,regY:34.3,scaleX:0.3736,scaleY:0.6416,x:189.35,y:121.85,alpha:0.9688}},{t:this.instance_30,p:{regX:35.1,scaleX:0.4902,scaleY:0.7083,x:207.8,y:45.45,alpha:0.9102,regY:35}},{t:this.instance_29,p:{scaleX:0.4902,scaleY:0.7083,x:153.3,y:35.15,alpha:0.9102,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.4927,scaleY:0.599,x:283.8,y:12.7,alpha:0.9102}},{t:this.instance_27,p:{regX:38.5,scaleX:0.4902,scaleY:0.7083,x:255.8,y:49,alpha:0.9102,regY:38.7}},{t:this.instance_26,p:{regX:35.6,regY:36,scaleX:0.4902,scaleY:0.7083,x:235.5,y:7.8,alpha:0.9102}},{t:this.instance_25,p:{regX:35.5,regY:34.1,scaleX:0.4902,scaleY:0.7083,x:179.05,y:12,alpha:0.9102}},{t:this.instance_24,p:{regX:35.1,scaleX:0.5921,scaleY:0.7666,x:198.7,y:-35.8,alpha:0.8398,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.5921,scaleY:0.7666,x:170.2,y:-84.05,alpha:0.8398}},{t:this.instance_22,p:{scaleX:0.5921,scaleY:0.7666,x:134.9,y:-48.4,alpha:0.8398,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.5967,scaleY:0.6735,x:296.25,y:-83.75,alpha:0.8398}},{t:this.instance_20,p:{regX:38.5,scaleX:0.5921,scaleY:0.7666,x:261.75,y:-27.8,alpha:0.8398,regY:38.6}},{t:this.instance_19,p:{regX:35.7,regY:36,scaleX:0.5921,scaleY:0.7666,x:242.7,y:-83.3,alpha:0.8398}},{t:this.instance_18,p:{regX:35.1,scaleX:0.6941,scaleY:0.825,x:192.25,y:-117.05,alpha:0.7695,regY:35}},{t:this.instance_17,p:{scaleX:0.6941,scaleY:0.825,x:113.7,y:-132.65,alpha:0.7695,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.4,scaleX:0.7007,scaleY:0.7481,x:318.8,y:-203.4,alpha:0.7695}},{t:this.instance_15,p:{regX:38.5,scaleX:0.6941,scaleY:0.825,x:267.65,y:-104.6,alpha:0.7695,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:35.9,scaleX:0.6941,scaleY:0.825,x:246.05,y:-166.05,alpha:0.7695}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.6941,scaleY:0.825,x:165.75,y:-166.85,alpha:0.7695}},{t:this.instance_12,p:{regX:35.1,scaleX:0.7961,scaleY:0.8833,x:186.2,y:-198.2,alpha:0.6992,regY:35}},{t:this.instance_11,p:{scaleX:0.7961,scaleY:0.8833,x:93.7,y:-217.2,alpha:0.6992,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.4,scaleX:0.8047,scaleY:0.8227,x:336.85,y:-307.15,alpha:0.6992}},{t:this.instance_9,p:{regX:38.5,scaleX:0.7961,scaleY:0.8833,x:273.65,y:-181.4,alpha:0.6992,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.7961,scaleY:0.8833,x:248.9,y:-247.3,alpha:0.6992}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.7961,scaleY:0.8833,x:162.25,y:-247.35,alpha:0.6992}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.8835,scaleY:0.9333,x:181,y:-267.85,alpha:0.1992}},{t:this.instance_5,p:{regY:40,scaleX:0.8835,scaleY:0.9333,x:77.6,y:-285.15,alpha:0.1992,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.8938,scaleY:0.8866,x:339.4,y:-353.65,alpha:0.1992}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.8835,scaleY:0.9333,x:278.75,y:-247.3,alpha:0.1992}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.8835,scaleY:0.9333,x:251.25,y:-316.95,alpha:0.1992}},{t:this.instance_1,p:{regX:35.6,regY:34.2,scaleX:0.8835,scaleY:0.9333,x:159.15,y:-316.4,alpha:0.1992}}]},3).to({state:[{t:this.instance_36,p:{regX:35.1,regY:35.1,scaleX:0.3937,scaleY:0.6531,x:216.85,y:126.7,alpha:0.9414}},{t:this.instance_35,p:{scaleX:0.3937,scaleY:0.6531,x:175.9,y:117.05,alpha:0.9414,regX:39.5,regY:40.1}},{t:this.instance_34,p:{regX:39.2,regY:53.6,scaleX:0.3888,scaleY:0.5244,x:271.35,y:109.15,alpha:0.9414}},{t:this.instance_33,p:{scaleX:0.3937,scaleY:0.6531,x:250.2,y:121.6,alpha:0.9414,regY:38.6,regX:38.5}},{t:this.instance_32,p:{regY:36,scaleX:0.3937,scaleY:0.6531,x:228.35,y:98.8,alpha:0.9414,regX:35.7}},{t:this.instance_31,p:{regX:35.6,regY:34.2,scaleX:0.3882,scaleY:0.65,x:188,y:108.1,alpha:0.9414}},{t:this.instance_30,p:{regX:35.1,scaleX:0.5047,scaleY:0.7166,x:206.45,y:33.8,alpha:0.8984,regY:35}},{t:this.instance_29,p:{scaleX:0.5047,scaleY:0.7166,x:151.3,y:23.5,alpha:0.8984,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.5076,scaleY:0.6096,x:285.55,y:-1.1,alpha:0.8984}},{t:this.instance_27,p:{regX:38.6,scaleX:0.5047,scaleY:0.7166,x:256.7,y:37.95,alpha:0.8984,regY:38.6}},{t:this.instance_26,p:{regX:35.6,regY:35.9,scaleX:0.5047,scaleY:0.7166,x:236.45,y:-5.25,alpha:0.8984}},{t:this.instance_25,p:{regX:35.6,regY:34.2,scaleX:0.5047,scaleY:0.7166,x:177.8,y:-1.65,alpha:0.8984}},{t:this.instance_24,p:{regX:35.1,scaleX:0.6067,scaleY:0.775,x:197.4,y:-47.5,alpha:0.8281,regY:34.9}},{t:this.instance_23,p:{regX:35.5,regY:34.1,scaleX:0.6067,scaleY:0.775,x:168.85,y:-97.8,alpha:0.8281}},{t:this.instance_22,p:{scaleX:0.6067,scaleY:0.775,x:131,y:-57.15,alpha:0.8281,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.4,scaleX:0.6116,scaleY:0.6842,x:297.95,y:-97.6,alpha:0.8281}},{t:this.instance_20,p:{regX:38.4,scaleX:0.6067,scaleY:0.775,x:262.6,y:-38.8,alpha:0.8281,regY:38.6}},{t:this.instance_19,p:{regX:35.7,regY:35.9,scaleX:0.6067,scaleY:0.775,x:243.7,y:-96.4,alpha:0.8281}},{t:this.instance_18,p:{regX:35.1,scaleX:0.7086,scaleY:0.8333,x:191.3,y:-128.7,alpha:0.7617,regY:34.9}},{t:this.instance_17,p:{scaleX:0.7086,scaleY:0.8333,x:110.3,y:-145.3,alpha:0.7617,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.7156,scaleY:0.7588,x:322.25,y:-221,alpha:0.7617}},{t:this.instance_15,p:{regX:38.5,scaleX:0.7086,scaleY:0.8333,x:268.55,y:-115.6,alpha:0.7617,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.7086,scaleY:0.8333,x:246.55,y:-177.65,alpha:0.7617}},{t:this.instance_13,p:{regX:35.5,regY:34.1,scaleX:0.7086,scaleY:0.8333,x:165.25,y:-178.35,alpha:0.7617}},{t:this.instance_12,p:{regX:35.1,scaleX:0.8106,scaleY:0.8916,x:185.3,y:-209.85,alpha:0.6914,regY:35}},{t:this.instance_11,p:{scaleX:0.8106,scaleY:0.8916,x:90.9,y:-228.55,alpha:0.6914,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.8195,scaleY:0.8334,x:337.35,y:-314.8,alpha:0.6914}},{t:this.instance_9,p:{regX:38.5,scaleX:0.8106,scaleY:0.8916,x:274.45,y:-192.4,alpha:0.6914,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.8106,scaleY:0.8916,x:249.3,y:-258.9,alpha:0.6914}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.8106,scaleY:0.8916,x:161.75,y:-258.95,alpha:0.6914}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.898,scaleY:0.9417,x:180.15,y:-279.4,alpha:0.1797}},{t:this.instance_5,p:{regY:40.1,scaleX:0.898,scaleY:0.9417,x:175.8,y:-296.4,alpha:0.1797,regX:39.6}},{t:this.instance_4,p:{regX:39.2,regY:53.5,scaleX:0.9087,scaleY:0.8973,x:339.95,y:-361.45,alpha:0.1797}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.898,scaleY:0.9417,x:279.55,y:-258.2,alpha:0.1797}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.898,scaleY:0.9417,x:251.65,y:-328.55,alpha:0.1797}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.898,scaleY:0.9417,x:158.6,y:-328,alpha:0.1797}}]},3).to({state:[{t:this.instance_36,p:{regX:35.1,regY:35.1,scaleX:0.411,scaleY:0.663,x:215.6,y:115.1,alpha:0.9219}},{t:this.instance_35,p:{scaleX:0.411,scaleY:0.663,x:172.35,y:105.35,alpha:0.9219,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.1,regY:53.6,scaleX:0.4036,scaleY:0.535,x:273.2,y:95.4,alpha:0.9219}},{t:this.instance_33,p:{scaleX:0.411,scaleY:0.663,x:251.2,y:108.6,alpha:0.9219,regY:38.7,regX:38.5}},{t:this.instance_32,p:{regY:36,scaleX:0.411,scaleY:0.663,x:229.35,y:85.8,alpha:0.9219,regX:35.8}},{t:this.instance_31,p:{regX:35.6,regY:34.2,scaleX:0.4028,scaleY:0.6583,x:186.75,y:94.35,alpha:0.9219}},{t:this.instance_30,p:{regX:35.1,scaleX:0.5193,scaleY:0.725,x:205.2,y:22.2,alpha:0.8906,regY:35}},{t:this.instance_29,p:{scaleX:0.5193,scaleY:0.725,x:148,y:11.8,alpha:0.8906,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.5225,scaleY:0.6203,x:287.35,y:-14.85,alpha:0.8906}},{t:this.instance_27,p:{regX:38.5,scaleX:0.5193,scaleY:0.725,x:257.5,y:27.05,alpha:0.8906,regY:38.6}},{t:this.instance_26,p:{regX:35.7,regY:35.9,scaleX:0.5193,scaleY:0.725,x:237.6,y:-18.3,alpha:0.8906}},{t:this.instance_25,p:{regX:35.6,regY:34.1,scaleX:0.5193,scaleY:0.725,x:176.55,y:-15.5,alpha:0.8906}},{t:this.instance_24,p:{regX:35.1,scaleX:0.6213,scaleY:0.7833,x:196.5,y:-59.05,alpha:0.8203,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.6213,scaleY:0.7833,x:168.35,y:-109.3,alpha:0.8203}},{t:this.instance_22,p:{scaleX:0.6213,scaleY:0.7833,x:127.45,y:-71.5,alpha:0.8203,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.6264,scaleY:0.6949,x:301.4,y:-115.25,alpha:0.8203}},{t:this.instance_20,p:{regX:38.5,scaleX:0.6213,scaleY:0.7833,x:263.45,y:-49.75,alpha:0.8203,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:35.9,scaleX:0.6213,scaleY:0.7833,x:244.05,y:-108,alpha:0.8203}},{t:this.instance_18,p:{regX:35.1,scaleX:0.7232,scaleY:0.8416,x:190.5,y:-140.2,alpha:0.75,regY:35}},{t:this.instance_17,p:{scaleX:0.7232,scaleY:0.8416,x:107.25,y:-157.45,alpha:0.75,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.4,scaleX:0.7304,scaleY:0.7694,x:325.65,y:-238.7,alpha:0.75}},{t:this.instance_15,p:{regX:38.5,scaleX:0.7232,scaleY:0.8416,x:269.4,y:-126.55,alpha:0.75,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:35.9,scaleX:0.7232,scaleY:0.8416,x:246.85,y:-189.2,alpha:0.75}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.7232,scaleY:0.8416,x:164.8,y:-189.85,alpha:0.75}},{t:this.instance_12,p:{regX:35.1,scaleX:0.8252,scaleY:0.9,x:184.45,y:-221.4,alpha:0.6797,regY:35}},{t:this.instance_11,p:{scaleX:0.8252,scaleY:0.9,x:88.15,y:-239.85,alpha:0.6797,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.8344,scaleY:0.844,x:337.8,y:-322.6,alpha:0.6797}},{t:this.instance_9,p:{regX:38.5,scaleX:0.8252,scaleY:0.9,x:275.3,y:-203.35,alpha:0.6797,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.8252,scaleY:0.9,x:249.7,y:-270.45,alpha:0.6797}},{t:this.instance_7,p:{regX:35.5,regY:34.1,scaleX:0.8252,scaleY:0.9,x:161.15,y:-270.45,alpha:0.6797}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.9126,scaleY:0.95,x:179.3,y:-291,alpha:0.1602}},{t:this.instance_5,p:{regY:40,scaleX:0.9126,scaleY:0.95,x:173.4,y:-307.8,alpha:0.1602,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.4,scaleX:0.9235,scaleY:0.9079,x:340.25,y:-369.25,alpha:0.1602}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.9126,scaleY:0.95,x:280.45,y:-269.2,alpha:0.1602}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.9126,scaleY:0.95,x:252.05,y:-340.1,alpha:0.1602}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.9126,scaleY:0.95,x:158.15,y:-339.5,alpha:0.1602}}]},3).to({state:[{t:this.instance_36,p:{regX:35.1,regY:35.1,scaleX:0.4283,scaleY:0.6729,x:214.3,y:103.5,alpha:0.8906}},{t:this.instance_35,p:{scaleX:0.4283,scaleY:0.6729,x:168.7,y:93.65,alpha:0.8906,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.2,regY:53.5,scaleX:0.4185,scaleY:0.5457,x:274.9,y:81.55,alpha:0.8906}},{t:this.instance_33,p:{scaleX:0.4283,scaleY:0.6729,x:252.2,y:95.5,alpha:0.8906,regY:38.6,regX:38.5}},{t:this.instance_32,p:{regY:36,scaleX:0.4283,scaleY:0.6729,x:230.35,y:72.8,alpha:0.8906,regX:35.7}},{t:this.instance_31,p:{regX:35.5,regY:34.3,scaleX:0.4173,scaleY:0.6666,x:185.45,y:80.7,alpha:0.8906}},{t:this.instance_30,p:{regX:35.1,scaleX:0.5339,scaleY:0.7333,x:203.9,y:10.55,alpha:0.8789,regY:34.9}},{t:this.instance_29,p:{scaleX:0.5339,scaleY:0.7333,x:145.8,y:0.15,alpha:0.8789,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.5373,scaleY:0.6309,x:289.1,y:-28.7,alpha:0.8789}},{t:this.instance_27,p:{regX:38.5,scaleX:0.5339,scaleY:0.7333,x:258.4,y:16,alpha:0.8789,regY:38.5}},{t:this.instance_26,p:{regX:35.7,regY:35.9,scaleX:0.5339,scaleY:0.7333,x:238.55,y:-31.3,alpha:0.8789}},{t:this.instance_25,p:{regX:35.5,regY:34.1,scaleX:0.5339,scaleY:0.7333,x:175.25,y:-29.15,alpha:0.8789}},{t:this.instance_24,p:{regX:35.1,scaleX:0.6358,scaleY:0.7916,x:195.65,y:-70.65,alpha:0.8086,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.6358,scaleY:0.7916,x:167.85,y:-120.8,alpha:0.8086}},{t:this.instance_22,p:{scaleX:0.6358,scaleY:0.7916,x:124.65,y:-83,alpha:0.8086,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.6413,scaleY:0.7055,x:304.95,y:-132.8,alpha:0.8086}},{t:this.instance_20,p:{regX:38.5,scaleX:0.6358,scaleY:0.7916,x:264.35,y:-60.8,alpha:0.8086,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:35.9,scaleX:0.6358,scaleY:0.7916,x:244.5,y:-119.55,alpha:0.8086}},{t:this.instance_18,p:{regX:35.1,scaleX:0.7378,scaleY:0.85,x:189.65,y:-151.85,alpha:0.7383,regY:35}},{t:this.instance_17,p:{scaleX:0.7378,scaleY:0.85,x:104.7,y:-169.85,alpha:0.7383,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.7453,scaleY:0.7801,x:329.2,y:-256.25,alpha:0.7383}},{t:this.instance_15,p:{regX:38.5,scaleX:0.7378,scaleY:0.85,x:270.25,y:-137.6,alpha:0.7383,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.7378,scaleY:0.85,x:247.35,y:-200.8,alpha:0.7383}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.7378,scaleY:0.85,x:164.3,y:-201.35,alpha:0.7383}},{t:this.instance_12,p:{regX:35.1,scaleX:0.8398,scaleY:0.9083,x:183.6,y:-233.05,alpha:0.6719,regY:35}},{t:this.instance_11,p:{scaleX:0.8398,scaleY:0.9083,x:85.35,y:-248.3,alpha:0.6719,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.8492,scaleY:0.8547,x:338.15,y:-330.4,alpha:0.6719}},{t:this.instance_9,p:{regX:38.5,scaleX:0.8398,scaleY:0.9083,x:276.2,y:-214.4,alpha:0.6719,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.8398,scaleY:0.9083,x:250.05,y:-282.05,alpha:0.6719}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.8398,scaleY:0.9083,x:160.7,y:-281.9,alpha:0.6719}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.9271,scaleY:0.9583,x:178.45,y:-302.6,alpha:0.1406}},{t:this.instance_5,p:{regY:40,scaleX:0.9271,scaleY:0.9583,x:159.1,y:-319.1,alpha:0.1406,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.9384,scaleY:0.9186,x:340.75,y:-376.9,alpha:0.1406}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.9271,scaleY:0.9583,x:281.3,y:-280.15,alpha:0.1406}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.9271,scaleY:0.9583,x:252.55,y:-351.7,alpha:0.1406}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.9271,scaleY:0.9583,x:157.65,y:-351,alpha:0.1406}}]},3).to({state:[{t:this.instance_36,p:{regX:35.2,regY:35.1,scaleX:0.4457,scaleY:0.6829,x:213,y:87.95,alpha:0.8594}},{t:this.instance_35,p:{scaleX:0.4457,scaleY:0.6829,x:165.05,y:78.1,alpha:0.8594,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.1,regY:53.5,scaleX:0.4333,scaleY:0.5563,x:276.7,y:63.85,alpha:0.8594}},{t:this.instance_33,p:{scaleX:0.4457,scaleY:0.6829,x:253.25,y:78.5,alpha:0.8594,regY:38.6,regX:38.6}},{t:this.instance_32,p:{regY:36,scaleX:0.4457,scaleY:0.6829,x:231.45,y:55.9,alpha:0.8594,regX:35.7}},{t:this.instance_31,p:{regX:35.6,regY:34.2,scaleX:0.4319,scaleY:0.675,x:184.25,y:63,alpha:0.8594}},{t:this.instance_30,p:{regX:35.1,scaleX:0.5484,scaleY:0.7416,x:202.6,y:-4.9,alpha:0.8711,regY:35}},{t:this.instance_29,p:{scaleX:0.5484,scaleY:0.7416,x:142.35,y:-15.25,alpha:0.8711,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.4,scaleX:0.5522,scaleY:0.6416,x:290.85,y:-46.4,alpha:0.8711}},{t:this.instance_27,p:{regX:38.5,scaleX:0.5484,scaleY:0.7416,x:259.2,y:1.2,alpha:0.8711,regY:38.6}},{t:this.instance_26,p:{regX:35.8,regY:35.9,scaleX:0.5484,scaleY:0.7416,x:239.7,y:-48.2,alpha:0.8711}},{t:this.instance_25,p:{regX:35.6,regY:34.2,scaleX:0.5484,scaleY:0.7416,x:173.95,y:-46.75,alpha:0.8711}},{t:this.instance_24,p:{regX:35.1,scaleX:0.6504,scaleY:0.8,x:194.8,y:-86.1,alpha:0.8008,regY:35}},{t:this.instance_23,p:{regX:35.5,regY:34.1,scaleX:0.6504,scaleY:0.8,x:167.3,y:-136.2,alpha:0.8008}},{t:this.instance_22,p:{scaleX:0.6504,scaleY:0.8,x:123.1,y:-99.35,alpha:0.8008,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.1,regY:53.4,scaleX:0.6561,scaleY:0.7162,x:308.3,y:-154.45,alpha:0.8008}},{t:this.instance_20,p:{regX:38.5,scaleX:0.6504,scaleY:0.8,x:265.2,y:-75.6,alpha:0.8008,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:35.9,scaleX:0.6504,scaleY:0.8,x:244.85,y:-135.1,alpha:0.8008}},{t:this.instance_18,p:{regX:35.1,scaleX:0.7523,scaleY:0.8583,x:188.8,y:-167.3,alpha:0.7305,regY:35}},{t:this.instance_17,p:{scaleX:0.7523,scaleY:0.8583,x:101.7,y:-186.1,alpha:0.7305,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.5,scaleX:0.7601,scaleY:0.7907,x:332.55,y:-277.8,alpha:0.7305}},{t:this.instance_15,p:{regX:38.5,scaleX:0.7523,scaleY:0.8583,x:271.05,y:-152.4,alpha:0.7305,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.7523,scaleY:0.8583,x:247.7,y:-216.3,alpha:0.7305}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.7523,scaleY:0.8583,x:163.75,y:-216.75,alpha:0.7305}},{t:this.instance_12,p:{regX:35.1,scaleX:0.8543,scaleY:0.9166,x:182.75,y:-248.5,alpha:0.6602,regY:35}},{t:this.instance_11,p:{scaleX:0.8543,scaleY:0.9166,x:80.6,y:-266.85,alpha:0.6602,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.8641,scaleY:0.8653,x:338.6,y:-342,alpha:0.6602}},{t:this.instance_9,p:{regX:38.5,scaleX:0.8543,scaleY:0.9166,x:277,y:-229.2,alpha:0.6602,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.8543,scaleY:0.9166,x:250.55,y:-297.55,alpha:0.6602}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.8543,scaleY:0.9166,x:160.2,y:-297.4,alpha:0.6602}},{t:this.instance_6,p:{regX:35.1,regY:34.9,scaleX:0.9417,scaleY:0.9666,x:177.55,y:-318.2,alpha:0.1094}},{t:this.instance_5,p:{regY:40,scaleX:0.9417,scaleY:0.9666,x:49.2,y:-334.4,alpha:0.1094,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.9532,scaleY:0.9292,x:341.1,y:-388.6,alpha:0.1094}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.9417,scaleY:0.9666,x:282.15,y:-295.1,alpha:0.1094}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.9417,scaleY:0.9666,x:252.9,y:-367.2,alpha:0.1094}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.9417,scaleY:0.9666,x:157.05,y:-366.45,alpha:0.1094}}]},3).to({state:[{t:this.instance_36,p:{regX:35.1,regY:35,scaleX:0.463,scaleY:0.6927,x:211.65,y:80.2,alpha:0.8398}},{t:this.instance_35,p:{scaleX:0.463,scaleY:0.6927,x:161.45,y:70.3,alpha:0.8398,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.2,regY:53.6,scaleX:0.4482,scaleY:0.567,x:278.45,y:54,alpha:0.8398}},{t:this.instance_33,p:{scaleX:0.463,scaleY:0.6927,x:254.25,y:69.4,alpha:0.8398,regY:38.6,regX:38.5}},{t:this.instance_32,p:{regY:36,scaleX:0.463,scaleY:0.6927,x:232.4,y:46.8,alpha:0.8398,regX:35.6}},{t:this.instance_31,p:{regX:35.6,regY:34.2,scaleX:0.4465,scaleY:0.6833,x:182.95,y:53.2,alpha:0.8398}},{t:this.instance_30,p:{regX:35.1,scaleX:0.563,scaleY:0.75,x:201.3,y:-12.55,alpha:0.8594,regY:35}},{t:this.instance_29,p:{scaleX:0.563,scaleY:0.75,x:138.75,y:-23.25,alpha:0.8594,regY:40,regX:39.5}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.567,scaleY:0.6522,x:292.7,y:-56.25,alpha:0.8594}},{t:this.instance_27,p:{regX:38.5,scaleX:0.563,scaleY:0.75,x:260.05,y:-5.95,alpha:0.8594,regY:38.6}},{t:this.instance_26,p:{regX:35.7,regY:36,scaleX:0.563,scaleY:0.75,x:240.65,y:-57.25,alpha:0.8594}},{t:this.instance_25,p:{regX:35.5,regY:34.1,scaleX:0.563,scaleY:0.75,x:172.7,y:-56.65,alpha:0.8594}},{t:this.instance_24,p:{regX:35.1,scaleX:0.6649,scaleY:0.8083,x:193.95,y:-93.8,alpha:0.7891,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.6649,scaleY:0.8083,x:166.85,y:-143.85,alpha:0.7891}},{t:this.instance_22,p:{scaleX:0.6649,scaleY:0.8083,x:119.55,y:-107.85,alpha:0.7891,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.4,scaleX:0.671,scaleY:0.7268,x:311.85,y:-168.2,alpha:0.7891}},{t:this.instance_20,p:{regX:38.5,scaleX:0.6649,scaleY:0.8083,x:266,y:-82.75,alpha:0.7891,regY:38.6}},{t:this.instance_19,p:{regX:35.7,regY:36,scaleX:0.6649,scaleY:0.8083,x:245.35,y:-142.75,alpha:0.7891}},{t:this.instance_18,p:{regX:35.1,scaleX:0.7669,scaleY:0.8666,x:187.9,y:-175.05,alpha:0.7188,regY:35}},{t:this.instance_17,p:{scaleX:0.7669,scaleY:0.8666,x:98.5,y:-194.6,alpha:0.7188,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.5,scaleX:0.775,scaleY:0.8014,x:336,y:-291.6,alpha:0.7188}},{t:this.instance_15,p:{regX:38.5,scaleX:0.7669,scaleY:0.8666,x:272,y:-159.55,alpha:0.7188,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:36,scaleX:0.7669,scaleY:0.8666,x:248.05,y:-224,alpha:0.7188}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.7669,scaleY:0.8666,x:163.25,y:-224.45,alpha:0.7188}},{t:this.instance_12,p:{regX:35.1,scaleX:0.8689,scaleY:0.925,x:181.9,y:-256.3,alpha:0.6484,regY:34.9}},{t:this.instance_11,p:{scaleX:0.8689,scaleY:0.925,x:80.15,y:-273.8,alpha:0.6484,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.879,scaleY:0.876,x:339,y:-345.9,alpha:0.6484}},{t:this.instance_9,p:{regX:38.5,scaleX:0.8689,scaleY:0.925,x:277.9,y:-236.35,alpha:0.6484,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.8689,scaleY:0.925,x:250.9,y:-305.3,alpha:0.6484}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.8689,scaleY:0.925,x:159.7,y:-305,alpha:0.6484}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.9563,scaleY:0.975,x:176.7,y:-325.85,alpha:0.0898}},{t:this.instance_5,p:{regY:40,scaleX:0.9563,scaleY:0.975,x:46.75,y:-341.8,alpha:0.0898,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.9681,scaleY:0.9399,x:341.6,y:-392.45,alpha:0.0898}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.9563,scaleY:0.975,x:283,y:-302.1,alpha:0.0898}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.9563,scaleY:0.975,x:253.25,y:-374.9,alpha:0.0898}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.9563,scaleY:0.975,x:156.6,y:-374,alpha:0.0898}}]},3).to({state:[{t:this.instance_36,p:{regX:35.2,regY:35,scaleX:0.4803,scaleY:0.7027,x:210.4,y:68.6,alpha:0.8086}},{t:this.instance_35,p:{scaleX:0.4803,scaleY:0.7027,x:157.8,y:58.6,alpha:0.8086,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.2,regY:53.5,scaleX:0.463,scaleY:0.5776,x:280.25,y:40.25,alpha:0.8086}},{t:this.instance_33,p:{scaleX:0.4803,scaleY:0.7027,x:255.25,y:56.3,alpha:0.8086,regY:38.6,regX:38.4}},{t:this.instance_32,p:{regY:36,scaleX:0.4803,scaleY:0.7027,x:233.45,y:33.8,alpha:0.8086,regX:35.6}},{t:this.instance_31,p:{regX:35.6,regY:34.2,scaleX:0.461,scaleY:0.6916,x:181.65,y:39.45,alpha:0.8086}},{t:this.instance_30,p:{regX:35.1,scaleX:0.5776,scaleY:0.7583,x:199.95,y:-24.2,alpha:0.8516,regY:35}},{t:this.instance_29,p:{scaleX:0.5776,scaleY:0.7583,x:136.8,y:-34.9,alpha:0.8516,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.4,scaleX:0.5819,scaleY:0.6629,x:294.4,y:-70.05,alpha:0.8516}},{t:this.instance_27,p:{regX:38.5,scaleX:0.5776,scaleY:0.7583,x:260.95,y:-16.9,alpha:0.8516,regY:38.6}},{t:this.instance_26,p:{regX:35.6,regY:36,scaleX:0.5776,scaleY:0.7583,x:241.6,y:-70.3,alpha:0.8516}},{t:this.instance_25,p:{regX:35.6,regY:34.1,scaleX:0.5776,scaleY:0.7583,x:171.4,y:-70.35,alpha:0.8516}},{t:this.instance_24,p:{regX:35.1,scaleX:0.6795,scaleY:0.8166,x:193.1,y:-105.4,alpha:0.7813,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.6795,scaleY:0.8167,x:166.35,y:-155.35,alpha:0.7813}},{t:this.instance_22,p:{scaleX:0.6795,scaleY:0.8166,x:116.75,y:-120.2,alpha:0.7813,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.1,regY:53.5,scaleX:0.6859,scaleY:0.7375,x:315.25,y:-185.8,alpha:0.7813}},{t:this.instance_20,p:{regX:38.5,scaleX:0.6795,scaleY:0.8166,x:266.8,y:-93.7,alpha:0.7813,regY:38.6}},{t:this.instance_19,p:{regX:35.7,regY:35.9,scaleX:0.6795,scaleY:0.8166,x:245.7,y:-154.45,alpha:0.7813}},{t:this.instance_18,p:{regX:35.1,scaleX:0.7815,scaleY:0.875,x:187.05,y:-186.65,alpha:0.7109,regY:35}},{t:this.instance_17,p:{scaleX:0.7815,scaleY:0.875,x:95.65,y:-205.9,alpha:0.7109,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.4,scaleX:0.7898,scaleY:0.8121,x:336.55,y:-299.4,alpha:0.7109}},{t:this.instance_15,p:{regX:38.5,scaleX:0.7815,scaleY:0.875,x:272.8,y:-170.5,alpha:0.7109,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.7815,scaleY:0.875,x:248.55,y:-235.7,alpha:0.7109}},{t:this.instance_13,p:{regX:35.5,regY:34.1,scaleX:0.7815,scaleY:0.875,x:162.7,y:-235.95,alpha:0.7109}},{t:this.instance_12,p:{regX:35.1,scaleX:0.8835,scaleY:0.9333,x:181,y:-267.85,alpha:0.6406,regY:35}},{t:this.instance_11,p:{scaleX:0.8835,scaleY:0.9333,x:77.6,y:-285.15,alpha:0.6406,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.8938,scaleY:0.8866,x:339.45,y:-353.65,alpha:0.6406}},{t:this.instance_9,p:{regX:38.5,scaleX:0.8835,scaleY:0.9333,x:278.75,y:-247.3,alpha:0.6406,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.8835,scaleY:0.9333,x:251.25,y:-316.9,alpha:0.6406}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.8835,scaleY:0.9333,x:159.15,y:-316.4,alpha:0.6406}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.9708,scaleY:0.9833,x:175.85,y:-337.45,alpha:0.0703}},{t:this.instance_5,p:{regY:40,scaleX:0.9708,scaleY:0.9833,x:44.45,y:-353.1,alpha:0.0703,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.9829,scaleY:0.9506,x:342,y:-400.2,alpha:0.0703}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.9708,scaleY:0.9833,x:283.85,y:-313.15,alpha:0.0703}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.9708,scaleY:0.9833,x:253.65,y:-386.55,alpha:0.0703}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.9708,scaleY:0.9833,x:156.1,y:-385.5,alpha:0.0703}}]},3).to({state:[{t:this.instance_42,p:{scaleX:0.3591,scaleY:0.6333,x:219.4,y:149.85,alpha:1}},{t:this.instance_41,p:{regX:39.6,scaleX:0.3591,scaleY:0.6333,x:183.15,y:140.4,alpha:1}},{t:this.instance_40,p:{regX:39.1,regY:53.5,scaleX:0.3591,scaleY:0.5031,x:267.85,y:136.65,alpha:1}},{t:this.instance_39,p:{regX:38.5,scaleX:0.3591,scaleY:0.6333,x:248.2,y:147.65,alpha:1}},{t:this.instance_38,p:{regX:35.6,scaleX:0.3591,scaleY:0.6333,x:226.3,y:124.8,alpha:1}},{t:this.instance_37,p:{regY:34.2,scaleX:0.3591,scaleY:0.6333,x:190.55,y:135.5,alpha:1}},{t:this.instance_36,p:{regX:35.1,regY:35,scaleX:0.4976,scaleY:0.7126,x:209.05,y:57,alpha:0.7891}},{t:this.instance_35,p:{scaleX:0.4976,scaleY:0.7126,x:155.75,y:46.85,alpha:0.7891,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.2,regY:53.5,scaleX:0.4779,scaleY:0.5883,x:282.05,y:26.45,alpha:0.7891}},{t:this.instance_33,p:{scaleX:0.4976,scaleY:0.7126,x:256.25,y:43.3,alpha:0.7891,regY:38.6,regX:38.5}},{t:this.instance_32,p:{regY:35.9,scaleX:0.4976,scaleY:0.7126,x:234.5,y:20.75,alpha:0.7891,regX:35.8}},{t:this.instance_31,p:{regX:35.6,regY:34.2,scaleX:0.4756,scaleY:0.7,x:180.4,y:25.75,alpha:0.7891}},{t:this.instance_30,p:{regX:35.1,scaleX:0.5921,scaleY:0.7666,x:198.7,y:-35.8,alpha:0.8398,regY:35}},{t:this.instance_29,p:{scaleX:0.5921,scaleY:0.7666,x:133.85,y:-46.6,alpha:0.8398,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.5967,scaleY:0.6735,x:296.25,y:-83.75,alpha:0.8398}},{t:this.instance_27,p:{regX:38.5,scaleX:0.5921,scaleY:0.7666,x:261.75,y:-27.8,alpha:0.8398,regY:38.6}},{t:this.instance_26,p:{regX:35.7,regY:36,scaleX:0.5921,scaleY:0.7666,x:242.7,y:-83.3,alpha:0.8398}},{t:this.instance_25,p:{regX:35.6,regY:34.1,scaleX:0.5921,scaleY:0.7666,x:170.2,y:-84.05,alpha:0.8398}},{t:this.instance_24,p:{regX:35.1,scaleX:0.6941,scaleY:0.825,x:192.25,y:-117.05,alpha:0.7695,regY:35}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.6941,scaleY:0.825,x:165.75,y:-166.85,alpha:0.7695}},{t:this.instance_22,p:{scaleX:0.6941,scaleY:0.825,x:113.7,y:-132.65,alpha:0.7695,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.4,scaleX:0.7007,scaleY:0.7481,x:318.8,y:-203.4,alpha:0.7695}},{t:this.instance_20,p:{regX:38.5,scaleX:0.6941,scaleY:0.825,x:267.65,y:-104.6,alpha:0.7695,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:35.9,scaleX:0.6941,scaleY:0.825,x:246.05,y:-166.05,alpha:0.7695}},{t:this.instance_18,p:{regX:35.1,scaleX:0.7961,scaleY:0.8833,x:186.2,y:-198.2,alpha:0.6992,regY:35}},{t:this.instance_17,p:{scaleX:0.7961,scaleY:0.8833,x:93.65,y:-217.2,alpha:0.6992,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.4,scaleX:0.8047,scaleY:0.8227,x:336.85,y:-307.15,alpha:0.6992}},{t:this.instance_15,p:{regX:38.5,scaleX:0.7961,scaleY:0.8833,x:273.65,y:-181.4,alpha:0.6992,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.7961,scaleY:0.8833,x:248.9,y:-247.3,alpha:0.6992}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.7961,scaleY:0.8833,x:162.25,y:-247.35,alpha:0.6992}},{t:this.instance_12,p:{regX:35.1,scaleX:0.898,scaleY:0.9417,x:180.15,y:-279.4,alpha:0.6406,regY:35}},{t:this.instance_11,p:{scaleX:0.898,scaleY:0.9417,x:75,y:-296.4,alpha:0.6406,regY:40.1,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.9087,scaleY:0.8973,x:339.95,y:-361.45,alpha:0.6406}},{t:this.instance_9,p:{regX:38.5,scaleX:0.898,scaleY:0.9417,x:279.55,y:-258.2,alpha:0.6406,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.898,scaleY:0.9417,x:251.65,y:-328.55,alpha:0.6406}},{t:this.instance_7,p:{regX:35.5,regY:34.1,scaleX:0.898,scaleY:0.9417,x:158.6,y:-328,alpha:0.6406}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.9854,scaleY:0.9917,x:175,y:-349,alpha:0.0508}},{t:this.instance_5,p:{regY:40,scaleX:0.9854,scaleY:0.9917,x:42,y:-364.45,alpha:0.0508,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.9978,scaleY:0.9612,x:342.4,y:-408,alpha:0.0508}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.9854,scaleY:0.9917,x:284.7,y:-324.05,alpha:0.0508}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.9854,scaleY:0.9917,x:254.05,y:-398.15,alpha:0.0508}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.9854,scaleY:0.9917,x:155.55,y:-397.05,alpha:0.0508}}]},3).to({state:[{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_39,p:{regX:38.4,scaleX:0.3736,scaleY:0.6416,x:249,y:136.65,alpha:0.9883}},{t:this.instance_45},{t:this.instance_44},{t:this.instance_42,p:{scaleX:0.515,scaleY:0.7225,x:207.75,y:45.45,alpha:0.7617}},{t:this.instance_41,p:{regX:39.5,scaleX:0.515,scaleY:0.7225,x:153.25,y:35.15,alpha:0.7617}},{t:this.instance_43},{t:this.instance_33,p:{scaleX:0.515,scaleY:0.7225,x:257.3,y:30.25,alpha:0.7617,regY:38.6,regX:38.5}},{t:this.instance_38,p:{regX:35.8,scaleX:0.515,scaleY:0.7225,x:235.55,y:7.75,alpha:0.7617}},{t:this.instance_37,p:{regY:34.1,scaleX:0.4902,scaleY:0.7083,x:179.05,y:12,alpha:0.7617}},{t:this.instance_36,p:{regX:35.1,regY:34.9,scaleX:0.6067,scaleY:0.775,x:197.4,y:-47.5,alpha:0.8281}},{t:this.instance_35,p:{scaleX:0.6067,scaleY:0.775,x:130.6,y:-58.3,alpha:0.8281,regX:39.6,regY:40}},{t:this.instance_40,p:{regX:39.2,regY:53.4,scaleX:0.6116,scaleY:0.6842,x:297.95,y:-97.6,alpha:0.8281}},{t:this.instance_27,p:{regX:38.4,scaleX:0.6067,scaleY:0.775,x:262.6,y:-38.8,alpha:0.8281,regY:38.6}},{t:this.instance_32,p:{regY:35.9,scaleX:0.6067,scaleY:0.775,x:243.7,y:-96.4,alpha:0.8281,regX:35.7}},{t:this.instance_31,p:{regX:35.5,regY:34.1,scaleX:0.6067,scaleY:0.775,x:168.85,y:-97.8,alpha:0.8281}},{t:this.instance_30,p:{regX:35.1,scaleX:0.7086,scaleY:0.8333,x:191.3,y:-128.7,alpha:0.7617,regY:34.9}},{t:this.instance_25,p:{regX:35.5,regY:34.1,scaleX:0.7086,scaleY:0.8333,x:165.25,y:-178.35,alpha:0.7617}},{t:this.instance_29,p:{scaleX:0.7086,scaleY:0.8333,x:111,y:-145.3,alpha:0.7617,regY:40,regX:39.6}},{t:this.instance_34,p:{regX:39.2,regY:53.5,scaleX:0.7156,scaleY:0.7588,x:322.25,y:-221,alpha:0.7617}},{t:this.instance_20,p:{regX:38.5,scaleX:0.7086,scaleY:0.8333,x:268.55,y:-115.6,alpha:0.7617,regY:38.6}},{t:this.instance_26,p:{regX:35.7,regY:35.9,scaleX:0.7086,scaleY:0.8333,x:246.55,y:-177.65,alpha:0.7617}},{t:this.instance_24,p:{regX:35.1,scaleX:0.8106,scaleY:0.8916,x:185.3,y:-209.85,alpha:0.6914,regY:35}},{t:this.instance_22,p:{scaleX:0.8106,scaleY:0.8916,x:90.9,y:-228.55,alpha:0.6914,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.1,regY:53.5,scaleX:0.8195,scaleY:0.8334,x:337.35,y:-314.8,alpha:0.6914}},{t:this.instance_15,p:{regX:38.5,scaleX:0.8106,scaleY:0.8916,x:274.45,y:-192.4,alpha:0.6914,regY:38.6}},{t:this.instance_19,p:{regX:35.7,regY:35.9,scaleX:0.8106,scaleY:0.8916,x:249.3,y:-258.9,alpha:0.6914}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.8106,scaleY:0.8916,x:161.75,y:-258.95,alpha:0.6914}},{t:this.instance_18,p:{regX:35.1,scaleX:0.9126,scaleY:0.95,x:179.3,y:-291,alpha:0.5508,regY:35}},{t:this.instance_17,p:{scaleX:0.9126,scaleY:0.95,x:75,y:-304.4,alpha:0.5508,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.1,regY:53.4,scaleX:0.9235,scaleY:0.9079,x:340.25,y:-369.25,alpha:0.5508}},{t:this.instance_9,p:{regX:38.5,scaleX:0.9126,scaleY:0.95,x:280.45,y:-269.2,alpha:0.5508,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:35.9,scaleX:0.9126,scaleY:0.95,x:252.05,y:-340.1,alpha:0.5508}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.9126,scaleY:0.95,x:158.15,y:-339.5,alpha:0.5508}},{t:this.instance_12,p:{regX:35.1,scaleX:1,scaleY:1,x:174.05,y:-360.7,alpha:0.0313,regY:35}},{t:this.instance_11,p:{scaleX:1,scaleY:1,x:39.6,y:-375.8,alpha:0.0313,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.5,scaleX:1.0126,scaleY:0.9719,x:342.9,y:-415.75,alpha:0.0313}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:1,scaleY:1,x:285.5,y:-335.1,alpha:0.0313}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:1,scaleY:1,x:254.55,y:-409.8,alpha:0.0313}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:1,scaleY:1,x:155.05,y:-408.6,alpha:0.0313}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.8938,scaleY:0.8866,x:339.45,y:-353.65,alpha:0.6406}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.9854,scaleY:0.9917,x:175,y:-349,alpha:0.1094}},{t:this.instance_5,p:{regY:40,scaleX:0.9854,scaleY:0.9917,x:62.35,y:-364.45,alpha:0.1094,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.9978,scaleY:0.9612,x:342.4,y:-408,alpha:0.1094}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.9854,scaleY:0.9917,x:254.05,y:-398.15,alpha:0.1094}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.9854,scaleY:0.9917,x:155.55,y:-397.05,alpha:0.1094}}]},3).to({state:[{t:this.instance_36,p:{regX:35.1,regY:35,scaleX:0.3882,scaleY:0.65,x:216.85,y:126.7,alpha:0.9805}},{t:this.instance_35,p:{scaleX:0.3882,scaleY:0.65,x:175.9,y:117.05,alpha:0.9805,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.2,regY:53.6,scaleX:0.3888,scaleY:0.5244,x:271.35,y:109.15,alpha:0.9805}},{t:this.instance_33,p:{scaleX:0.3882,scaleY:0.65,x:249.85,y:125.8,alpha:0.9805,regY:38.7,regX:38.5}},{t:this.instance_32,p:{regY:36,scaleX:0.3882,scaleY:0.65,x:228.3,y:98.85,alpha:0.9805,regX:35.7}},{t:this.instance_31,p:{regX:35.6,regY:34.2,scaleX:0.3882,scaleY:0.65,x:188,y:108.1,alpha:0.9805}},{t:this.instance_30,p:{regX:35.1,scaleX:0.5323,scaleY:0.7324,x:206.5,y:33.8,alpha:0.7305,regY:35}},{t:this.instance_29,p:{scaleX:0.5323,scaleY:0.7324,x:149.7,y:23.5,alpha:0.7305,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.5076,scaleY:0.6096,x:285.55,y:-1.1,alpha:0.7305}},{t:this.instance_27,p:{regX:38.5,scaleX:0.5323,scaleY:0.7324,x:258.25,y:17.2,alpha:0.7305,regY:38.6}},{t:this.instance_26,p:{regX:35.7,regY:35.9,scaleX:0.5323,scaleY:0.7324,x:236.55,y:-5.25,alpha:0.7305}},{t:this.instance_25,p:{regX:35.6,regY:34.2,scaleX:0.5047,scaleY:0.7166,x:177.8,y:-1.65,alpha:0.7305}},{t:this.instance_24,p:{regX:35.1,scaleX:0.6213,scaleY:0.7833,x:196.5,y:-59.05,alpha:0.8203,regY:35}},{t:this.instance_22,p:{scaleX:0.6213,scaleY:0.7833,x:127.85,y:-70.7,alpha:0.8203,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.6264,scaleY:0.6949,x:301.4,y:-115.25,alpha:0.8203}},{t:this.instance_20,p:{regX:38.5,scaleX:0.6213,scaleY:0.7833,x:263.45,y:-49.75,alpha:0.8203,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:35.9,scaleX:0.6213,scaleY:0.7833,x:244.05,y:-108,alpha:0.8203}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.6213,scaleY:0.7833,x:168.35,y:-109.3,alpha:0.8203}},{t:this.instance_18,p:{regX:35.1,scaleX:0.7232,scaleY:0.8416,x:190.5,y:-140.2,alpha:0.75,regY:35}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.7232,scaleY:0.8416,x:164.8,y:-189.85,alpha:0.75}},{t:this.instance_17,p:{scaleX:0.7232,scaleY:0.8416,x:107.2,y:-157.45,alpha:0.75,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.4,scaleX:0.7304,scaleY:0.7694,x:325.65,y:-238.7,alpha:0.75}},{t:this.instance_15,p:{regX:38.5,scaleX:0.7232,scaleY:0.8416,x:269.4,y:-126.55,alpha:0.75,regY:38.6}},{t:this.instance_14,p:{regX:35.6,regY:35.9,scaleX:0.7232,scaleY:0.8416,x:246.85,y:-189.2,alpha:0.75}},{t:this.instance_12,p:{regX:35.1,scaleX:0.8252,scaleY:0.9,x:184.45,y:-221.4,alpha:0.6797,regY:35}},{t:this.instance_11,p:{scaleX:0.8252,scaleY:0.9,x:88.55,y:-236.7,alpha:0.6797,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.2,regY:53.5,scaleX:0.8344,scaleY:0.844,x:337.8,y:-322.6,alpha:0.6797}},{t:this.instance_9,p:{regX:38.5,scaleX:0.8252,scaleY:0.9,x:275.3,y:-203.35,alpha:0.6797,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.8252,scaleY:0.9,x:249.7,y:-270.45,alpha:0.6797}},{t:this.instance_7,p:{regX:35.5,regY:34.1,scaleX:0.8252,scaleY:0.9,x:161.15,y:-270.45,alpha:0.6797}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.9271,scaleY:0.9583,x:178.45,y:-302.6,alpha:0.4609}},{t:this.instance_5,p:{regY:40,scaleX:0.9271,scaleY:0.9583,x:73,y:-314.15,alpha:0.4609,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.9384,scaleY:0.9186,x:340.75,y:-376.9,alpha:0.4609}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.9271,scaleY:0.9583,x:281.3,y:-280.15,alpha:0.4609}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.9271,scaleY:0.9583,x:252.55,y:-351.7,alpha:0.4609}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.9271,scaleY:0.9583,x:157.65,y:-351,alpha:0.4609}}]},3).to({state:[{t:this.instance_36,p:{regX:35.1,regY:35,scaleX:0.4028,scaleY:0.6583,x:215.6,y:115.05,alpha:0.9688}},{t:this.instance_35,p:{scaleX:0.4028,scaleY:0.6583,x:172.35,y:105.35,alpha:0.9688,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.1,regY:53.6,scaleX:0.4036,scaleY:0.535,x:273.2,y:95.4,alpha:0.9688}},{t:this.instance_33,p:{scaleX:0.4028,scaleY:0.6583,x:250.7,y:114.75,alpha:0.9688,regY:38.6,regX:38.5}},{t:this.instance_32,p:{regY:36,scaleX:0.4028,scaleY:0.6583,x:229.4,y:85.85,alpha:0.9688,regX:35.8}},{t:this.instance_31,p:{regX:35.6,regY:34.2,scaleX:0.4028,scaleY:0.6583,x:186.75,y:94.35,alpha:0.9688}},{t:this.instance_30,p:{regX:35.2,scaleX:0.5496,scaleY:0.7423,x:205.2,y:22.25,alpha:0.7109,regY:35}},{t:this.instance_29,p:{scaleX:0.5496,scaleY:0.7423,x:147.1,y:11.8,alpha:0.7109,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.5225,scaleY:0.6203,x:287.35,y:-14.85,alpha:0.7109}},{t:this.instance_27,p:{regX:38.5,scaleX:0.5496,scaleY:0.7423,x:259.25,y:4.2,alpha:0.7109,regY:38.6}},{t:this.instance_26,p:{regX:35.8,regY:35.9,scaleX:0.5496,scaleY:0.7423,x:237.65,y:-18.3,alpha:0.7109}},{t:this.instance_25,p:{regX:35.6,regY:34.1,scaleX:0.5193,scaleY:0.725,x:176.55,y:-15.5,alpha:0.7109}},{t:this.instance_24,p:{regX:35.1,scaleX:0.6358,scaleY:0.7916,x:195.65,y:-70.65,alpha:0.8086,regY:35}},{t:this.instance_22,p:{scaleX:0.6358,scaleY:0.7916,x:125.05,y:-83,alpha:0.8086,regY:40.1,regX:39.6}},{t:this.instance_21,p:{regX:39.2,regY:53.5,scaleX:0.6413,scaleY:0.7055,x:304.95,y:-132.8,alpha:0.8086}},{t:this.instance_20,p:{regX:38.5,scaleX:0.6358,scaleY:0.7916,x:264.35,y:-60.8,alpha:0.8086,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:35.9,scaleX:0.6358,scaleY:0.7916,x:244.5,y:-119.55,alpha:0.8086}},{t:this.instance_23,p:{regX:35.6,regY:34.1,scaleX:0.6358,scaleY:0.7916,x:179.8,y:-120.8,alpha:0.8086}},{t:this.instance_18,p:{regX:35.1,scaleX:0.7378,scaleY:0.85,x:189.65,y:-151.85,alpha:0.7383,regY:35}},{t:this.instance_13,p:{regX:35.6,regY:34.1,scaleX:0.7378,scaleY:0.85,x:164.3,y:-201.35,alpha:0.7383}},{t:this.instance_17,p:{scaleX:0.7378,scaleY:0.85,x:104.9,y:-169.85,alpha:0.7383,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.2,regY:53.5,scaleX:0.7453,scaleY:0.7801,x:329.2,y:-256.25,alpha:0.7383}},{t:this.instance_15,p:{regX:38.5,scaleX:0.7378,scaleY:0.85,x:270.25,y:-137.6,alpha:0.7383,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.7378,scaleY:0.85,x:247.35,y:-200.8,alpha:0.7383}},{t:this.instance_12,p:{regX:35.1,scaleX:0.8398,scaleY:0.9083,x:183.6,y:-233.05,alpha:0.6719,regY:35}},{t:this.instance_11,p:{scaleX:0.8398,scaleY:0.9083,x:83.4,y:-262.85,alpha:0.6719,regY:40,regX:39.6}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.8492,scaleY:0.8547,x:338.15,y:-330.4,alpha:0.6719}},{t:this.instance_9,p:{regX:38.5,scaleX:0.8398,scaleY:0.9083,x:276.2,y:-214.4,alpha:0.6719,regY:38.6}},{t:this.instance_8,p:{regX:35.6,regY:35.9,scaleX:0.8398,scaleY:0.9083,x:250.05,y:-282.05,alpha:0.6719}},{t:this.instance_7,p:{regX:35.6,regY:34.2,scaleX:0.8398,scaleY:0.9083,x:160.7,y:-281.9,alpha:0.6719}},{t:this.instance_6,p:{regX:35.1,regY:34.9,scaleX:0.9417,scaleY:0.9666,x:177.55,y:-314.3,alpha:0.3711}},{t:this.instance_5,p:{regY:40,scaleX:0.9417,scaleY:0.9666,x:62.75,y:-330.5,alpha:0.3711,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.9532,scaleY:0.9292,x:341.1,y:-384.7,alpha:0.3711}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.9417,scaleY:0.9666,x:282.15,y:-291.2,alpha:0.3711}},{t:this.instance_2,p:{regX:35.7,regY:35.9,scaleX:0.9417,scaleY:0.9666,x:252.9,y:-363.3,alpha:0.3711}},{t:this.instance_1,p:{regX:35.5,regY:34.1,scaleX:0.9417,scaleY:0.9666,x:157.05,y:-362.55,alpha:0.3711}}]},3).to({state:[{t:this.instance_36,p:{regX:35.1,regY:35.1,scaleX:0.4173,scaleY:0.6666,x:214.3,y:103.55,alpha:0.9609}},{t:this.instance_35,p:{scaleX:0.4173,scaleY:0.6666,x:168.7,y:93.7,alpha:0.9609,regX:39.6,regY:40.1}},{t:this.instance_34,p:{regX:39.2,regY:53.5,scaleX:0.4185,scaleY:0.5457,x:274.9,y:81.55,alpha:0.9609}},{t:this.instance_33,p:{scaleX:0.4173,scaleY:0.6666,x:251.6,y:103.8,alpha:0.9609,regY:38.6,regX:38.6}},{t:this.instance_32,p:{regY:36,scaleX:0.4173,scaleY:0.6666,x:230.35,y:72.8,alpha:0.9609,regX:35.7}},{t:this.instance_31,p:{regX:35.5,regY:34.3,scaleX:0.4173,scaleY:0.6666,x:185.45,y:80.7,alpha:0.9609}},{t:this.instance_30,p:{regX:35.1,scaleX:0.5669,scaleY:0.7522,x:203.85,y:10.65,alpha:0.6797,regY:35}},{t:this.instance_29,p:{scaleX:0.5669,scaleY:0.7522,x:142.85,y:0.15,alpha:0.6797,regY:40,regX:39.6}},{t:this.instance_28,p:{regX:39.2,regY:53.5,scaleX:0.5373,scaleY:0.6309,x:289.1,y:-28.7,alpha:0.6797}},{t:this.instance_27,p:{regX:38.6,scaleX:0.5669,scaleY:0.7522,x:260.35,y:-8.85,alpha:0.6797,regY:38.6}},{t:this.instance_26,p:{regX:35.7,regY:35.9,scaleX:0.5669,scaleY:0.7522,x:238.55,y:-31.3,alpha:0.6797}},{t:this.instance_25,p:{regX:35.5,regY:34.1,scaleX:0.5339,scaleY:0.7333,x:175.25,y:-29.15,alpha:0.6797}},{t:this.instance_24,p:{regX:35.1,scaleX:0.6504,scaleY:0.8,x:194.8,y:-82.2,alpha:0.8008,regY:35}},{t:this.instance_22,p:{scaleX:0.6504,scaleY:0.8,x:122.3,y:-94.45,alpha:0.8008,regY:40,regX:39.6}},{t:this.instance_21,p:{regX:39.1,regY:53.4,scaleX:0.6561,scaleY:0.7162,x:308.3,y:-150.55,alpha:0.8008}},{t:this.instance_20,p:{regX:38.5,scaleX:0.6504,scaleY:0.8,x:265.2,y:-71.7,alpha:0.8008,regY:38.6}},{t:this.instance_19,p:{regX:35.6,regY:35.9,scaleX:0.6504,scaleY:0.8,x:244.85,y:-131.2,alpha:0.8008}},{t:this.instance_23,p:{regX:35.5,regY:34.1,scaleX:0.6504,scaleY:0.8,x:167.3,y:-132.3,alpha:0.8008}},{t:this.instance_18,p:{regX:35.1,scaleX:0.7523,scaleY:0.8583,x:188.8,y:-163.4,alpha:0.7305,regY:35}},{t:this.instance_13,p:{regX:35.6,regY:34.2,scaleX:0.7523,scaleY:0.8583,x:163.75,y:-212.85,alpha:0.7305}},{t:this.instance_17,p:{scaleX:0.7523,scaleY:0.8583,x:101.95,y:-182.2,alpha:0.7305,regY:40,regX:39.6}},{t:this.instance_16,p:{regX:39.1,regY:53.5,scaleX:0.7601,scaleY:0.7907,x:332.55,y:-273.9,alpha:0.7305}},{t:this.instance_15,p:{regX:38.5,scaleX:0.7523,scaleY:0.8583,x:271.05,y:-148.5,alpha:0.7305,regY:38.6}},{t:this.instance_14,p:{regX:35.7,regY:35.9,scaleX:0.7523,scaleY:0.8583,x:247.7,y:-212.4,alpha:0.7305}},{t:this.instance_12,p:{regX:35.1,scaleX:0.8543,scaleY:0.9166,x:182.75,y:-244.6,alpha:0.6602,regY:35}},{t:this.instance_10,p:{regX:39.1,regY:53.5,scaleX:0.8641,scaleY:0.8653,x:338.6,y:-338.1,alpha:0.6602}},{t:this.instance_9,p:{regX:38.5,scaleX:0.8543,scaleY:0.9166,x:277,y:-225.3,alpha:0.6602,regY:38.6}},{t:this.instance_8,p:{regX:35.7,regY:35.9,scaleX:0.8543,scaleY:0.9166,x:250.55,y:-293.65,alpha:0.6602}},{t:this.instance_7,p:{regX:35.6,regY:34.1,scaleX:0.8543,scaleY:0.9166,x:160.2,y:-293.5,alpha:0.6602}},{t:this.instance_6,p:{regX:35.1,regY:35,scaleX:0.9563,scaleY:0.975,x:176.7,y:-325.85,alpha:0.2891}},{t:this.instance_11,p:{scaleX:0.9563,scaleY:0.975,x:65.4,y:-341.8,alpha:0.2891,regY:40,regX:39.6}},{t:this.instance_4,p:{regX:39.1,regY:53.5,scaleX:0.9681,scaleY:0.9399,x:341.6,y:-392.45,alpha:0.2891}},{t:this.instance_3,p:{regX:38.5,regY:38.6,scaleX:0.9563,scaleY:0.975,x:283,y:-302.1,alpha:0.2891}},{t:this.instance_2,p:{regX:35.6,regY:35.9,scaleX:0.9563,scaleY:0.975,x:253.25,y:-374.9,alpha:0.2891}},{t:this.instance_1,p:{regX:35.6,regY:34.1,scaleX:0.9563,scaleY:0.975,x:156.6,y:-374,alpha:0.2891}},{t:this.instance_5,p:{regY:40,scaleX:0.8398,scaleY:0.9083,x:81.05,y:-271.55,alpha:0.6719,regX:39.6}}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-467.7,383.3,639.8);


(lib.playintermitente = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_1
	this.instance = new lib._2btnplay();
	this.instance.setTransform(-230,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(11,1,1).p("AFbAAQAACQhmBmQhlBliQAAQiPAAhlhlQhmhmAAiQQAAiPBmhmQBlhlCPAAQCQAABlBlQBmBmAACPg");
	this.shape.setTransform(-190.725,39.6);

	this.instance_1 = new lib.Símbolo6("synched",0);
	this.instance_1.setTransform(-190,40,1,1,0,0,0,40,40);
	this.instance_1.filters = [new cjs.ColorFilter(0.74, 0.74, 0.74, 1, 36.4, 13.78, 3.9, 0)];
	this.instance_1.cache(-2,-2,84,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},21).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.9,-0.6,80.9,80.6);


(lib.btnPlayanimado = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.playintermitente();
	this.instance.setTransform(16.05,20.05,0.5,0.5,0,0,0,-189.9,40.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(5,1,1).p("AFbAAQAACQhmBmQhlBliQAAQiPAAhlhlQhmhmAAiQQAAiPBmhmQBlhlCPAAQCQAABlBlQBmBmAACPg");
	this.shape.setTransform(15.6934,19.5936,0.5023,0.5023);

	this.instance_1 = new lib._2btnplay();
	this.instance_1.setTransform(-4,0,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#99CC00").ss(1,1,1).p("AjHjHIGPAAIAAGPImPAAg");
	this.shape_1.setTransform(16,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape_2.setTransform(16,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-1,42,42);


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

	this.actionFrames = [0,1,2,3,4,5,6];
	// timeline functions:
	this.frame_0 = function() {
		stage.on('drawstart', initStage, this, true);
		function initStage(){stretchToFit();}
		
		var root = this; 
		root.unmuteMC.visible = false;
		 root.playaudio.visible = true;
		
		
		root.playSound = function(linkage, type, stopPrevious, props)
		{	
			if (!props)
				props = {};
				
			if (stopPrevious && root[type])
				root[type].stop();
				
			root[type] = createjs.Sound.play(linkage, props);
			
			if(root.currentFrame < root.totalFrames-1)	
			root[type].on("complete", function () {
		                       root.gotoAndStop(root.currentFrame + 1);
				
				
		                    }, this);;
			
			
			
			root.on("click", function(e)
		    {
			if (e.target.name === "unmuteMC")
				
				 {		
				 createjs.Sound.volume = 1;
		         root.muteMC.visible = true;
			     root.unmuteMC.visible = false;	
				 }
			
			else if (e.target.name === "muteMC")
				 {
		         createjs.Sound.volume = 0;
		         root.muteMC.visible = false;
		         root.unmuteMC.visible = true;
		         }
				 
				 else if (e.target.name === "pause")
				 {
		          root[type].stop();
				  root.pause.visible = false;
		          root.playaudio.visible = true;
		         }
				 
				  else if (e.target.name === "playaudio")
				 {
		         
			     root[type].stop();
				 root[type] = createjs.Sound.play(linkage, props);
					 
					 	if (root.currentFrame < root.totalFrames - 1)
							
						root[type].on("complete", function () {
							
							root.gotoAndStop(root.currentFrame + 1);
						}, this);;
					 
		         root.pause.visible = true;
		         root.playaudio.visible = false;
		         }
				 
		    });
			
		};
		
		root.on("click", function(e)
		{
			if (e.target.name === "prev")
				
			
				
			if(root.currentFrame=== this.totalFrames-1)
				root.gotoAndStop(root.currentFrame - 2);
			else
			
				root.gotoAndStop(root.currentFrame - 1);
			else if (e.target.name === "next")
				root.gotoAndStop(root.currentFrame + 1);
			else if (e.target.name == "pressToStart")
				root.gotoAndStop(1);
			
			 else if (e.target.name == "adelanteEscena")
				
		 	window.open('../Escena_3', '_self');
			 
			  else if (e.target.name == "atrasEscena")
				
		 	window.open('../Escena_1', '_self');
			 
			
			
		});
		
		if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) // chrome requires a initial user interaction to play audio
			root.stop();
		else
			root.gotoAndStop(0);
	}
	this.frame_1 = function() {
		this.playSound("intro", "voice", true);
	}
	this.frame_2 = function() {
		this.playSound("Voice0", "voice", true);  
		 
		 
		
		
		this.next.alpha = 1;
		this.next.mouseEnabled = true;
		 
		
		this.prev.alpha = 0.5;
		this.prev.mouseEnabled = false;
	}
	this.frame_3 = function() {
		this.playSound("Voice1", "voice", true);  
		 
		 
		this.next.alpha = 1;
		this.next.mouseEnabled = true;
		
		this.prev.alpha = 1;
		this.prev.mouseEnabled = true;
		    
		
		var _this = this;
		_this.pata_mc.gotoAndStop(0);
	}
	this.frame_4 = function() {
		this.playSound("Voice2", "voice", true);  
		 
		 
		this.next.alpha = 1;
		this.next.mouseEnabled = true;
		
		this.prev.alpha = 1;
		this.prev.mouseEnabled = true;
		    	
		
		var _this = this;
		_this.pata_mc.gotoAndStop(0);
		_this.pata_mc.play();
	}
	this.frame_5 = function() {
		this.playSound("BGM", "voice", true, { volume: 0.2, loop: -1 });
		
		var _this = this
		_this.pata_mc.gotoAndStop(0);
		
		_this.btnInteraccion.on('click', function(){
			_this.pata_mc.gotoAndStop(0);
			_this.pata_mc.play();
			
		_this.playSound("Voice3", "voice", true);	
		 if(_this.currentFrame <this.totalFrames)
		 _this.gotoAndStop(_this.currentFrame + 1);
		
		   
		});
		
		
		this.next.alpha = 0.5;
		this.next.mouseEnabled = false;
	}
	this.frame_6 = function() {
		this.playSound("BGM", "voice", true, { volume: 0.2, loop: -1 });
		 
		 
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.nextescene.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('../Escena_3', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// interacción
	this.btnInteraccion = new lib.btnInteractivo();
	this.btnInteraccion.name = "btnInteraccion";
	this.btnInteraccion.setTransform(372.7,443.15,1,1,0,0,0,-21.1,7.5);
	this.btnInteraccion._off = true;
	new cjs.ButtonHelper(this.btnInteraccion, 0, 1, 2, false, new lib.btnInteractivo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnInteraccion).wait(5).to({_off:false},0).wait(2));

	// btns _escena
	this.atrasEscena = new lib.Símbolo3();
	this.atrasEscena.name = "atrasEscena";
	this.atrasEscena.setTransform(203.65,607.1,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.atrasEscena, 0, 1, 1);

	this.adelanteEscena = new lib.Símbolo2();
	this.adelanteEscena.name = "adelanteEscena";
	this.adelanteEscena.setTransform(251.15,607.1,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.adelanteEscena, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.adelanteEscena},{t:this.atrasEscena}]}).to({state:[{t:this.atrasEscena}]},6).wait(1));

	// btns_media
	this.pressToStart = new lib.btnPlayanimado();
	this.pressToStart.name = "pressToStart";
	this.pressToStart.setTransform(31.5,607.1,1,1,0,0,0,16,20);
	new cjs.ButtonHelper(this.pressToStart, 0, 1, 2, false, new lib.btnPlayanimado(), 3);

	this.next = new lib.Símbolo4();
	this.next.name = "next";
	this.next.setTransform(143.1,606.8,1,1,0,0,0,20,20.2);
	new cjs.ButtonHelper(this.next, 0, 1, 1);

	this.prev = new lib.Símbolo1();
	this.prev.name = "prev";
	this.prev.setTransform(97.3,606.8,1,1,0,0,0,20.2,20.2);
	new cjs.ButtonHelper(this.prev, 0, 1, 1);

	this.unmuteMC = new lib.btnMute();
	this.unmuteMC.name = "unmuteMC";
	this.unmuteMC.setTransform(308.5,607.4,1.0127,1,0,0,0,19.8,20.3);
	new cjs.ButtonHelper(this.unmuteMC, 0, 1, 1);

	this.muteMC = new lib.btnSound();
	this.muteMC.name = "muteMC";
	this.muteMC.setTransform(308.5,606.55,1.0127,1.0127,0,0,0,19.8,19.8);
	new cjs.ButtonHelper(this.muteMC, 0, 1, 1);

	this.pause = new lib.btnPause();
	this.pause.name = "pause";
	this.pause.setTransform(31.65,607.1,1,1,0,0,0,20,20);
	new cjs.ButtonHelper(this.pause, 0, 1, 1);

	this.playaudio = new lib.btnPlay();
	this.playaudio.name = "playaudio";
	this.playaudio.setTransform(38.65,603.1,1,1,0,0,0,20,20);
	new cjs.ButtonHelper(this.playaudio, 0, 1, 1);

	this.nextescene = new lib.nextscene();
	this.nextescene.name = "nextescene";
	this.nextescene.setTransform(230.95,587.1);
	new cjs.ButtonHelper(this.nextescene, 0, 1, 1);

	this.instance = new lib.Símbolo3();
	this.instance.setTransform(203.65,607.1,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.muteMC,p:{x:308.5}},{t:this.unmuteMC,p:{x:308.5}},{t:this.prev,p:{x:97.3}},{t:this.next,p:{x:143.1}},{t:this.pressToStart}]}).to({state:[{t:this.playaudio,p:{x:38.65}},{t:this.muteMC,p:{x:308.5}},{t:this.unmuteMC,p:{x:308.5}},{t:this.pause,p:{x:31.65}},{t:this.prev,p:{x:97.2}},{t:this.next,p:{x:143}}]},1).to({state:[{t:this.playaudio,p:{x:38.7}},{t:this.instance},{t:this.muteMC,p:{x:308.35}},{t:this.unmuteMC,p:{x:308.35}},{t:this.pause,p:{x:31.7}},{t:this.prev,p:{x:97.35}},{t:this.next,p:{x:143.15}},{t:this.nextescene}]},5).wait(1));

	// textos
	this.instance_1 = new lib.texto1mc();
	this.instance_1.setTransform(773.25,495);

	this.instance_2 = new lib.texto2mc();
	this.instance_2.setTransform(593.25,550.8,1,1,0,0,0,-378,43.8);

	this.instance_3 = new lib.text3();
	this.instance_3.setTransform(-1,506,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{x:773.25}}]},2).to({state:[{t:this.instance_1,p:{x:773}},{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(3));

	// lago fondo blanco
	this.instance_4 = new lib.Símbolo9();
	this.instance_4.setTransform(694,521.7,1,1,0,0,0,594,151.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:219.8,x:594,y:537.65,alpha:0.5},0).wait(1).to({y:537.8,alpha:1},0).wait(5));

	// patos
	this.pata_mc = new lib.pata_mc();
	this.pata_mc.name = "pata_mc";
	this.pata_mc.setTransform(408.2,334.2,1,1,0,0,0,-313.8,25.2);

	this.instance_5 = new lib.pata_mccopia();
	this.instance_5.setTransform(248.7,401.7,1,1,0,0,0,-473.3,92.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pata_mc}]}).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.pata_mc}]},1).wait(2));

	// fondo
	this.instance_6 = new lib.Emoteoooh();
	this.instance_6.setTransform(718,208,0.16,0.1594);

	this.instance_7 = new lib.emotecorazon();
	this.instance_7.setTransform(702,207,0.16,0.1594);

	this.instance_8 = new lib.emotelike();
	this.instance_8.setTransform(686,206,0.16,0.1594);

	this.instance_9 = new lib.Símbolo1_1();
	this.instance_9.setTransform(711.85,184.45,0.1254,0.204);

	this.instance_10 = new lib.Paisajedefondo();
	this.instance_10.setTransform(0,-6,0.5008,0.5057);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AQwkEIAAIHAAMkCIAAIHAwvkEIAAIH");
	this.shape.setTransform(171.85,605.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgNAAIAAgCIABgBIAEgGIADgBQAFgCACAAIAEABIACABIADAEIACACIAAADQABAFgDAGIgRADQgEgIgDgFg");
	this.shape_1.setTransform(354.8,362.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(7));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(591.5,318.5,696.5,314.6);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1187,
	height: 649,
	fps: 25,
	color: "#235594",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_P_1.png?1699140117953", id:"index_atlas_P_1"},
		{src:"images/index_atlas_P_2.png?1699140117954", id:"index_atlas_P_2"},
		{src:"sounds/Voice0.mp3?1699140118445", id:"Voice0"},
		{src:"sounds/Voice1.mp3?1699140118445", id:"Voice1"},
		{src:"sounds/Voice2.mp3?1699140118445", id:"Voice2"},
		{src:"sounds/Voice3.mp3?1699140118445", id:"Voice3"},
		{src:"sounds/intro.mp3?1699140118445", id:"intro"},
		{src:"sounds/BGM.mp3?1699140118445", id:"BGM"}
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