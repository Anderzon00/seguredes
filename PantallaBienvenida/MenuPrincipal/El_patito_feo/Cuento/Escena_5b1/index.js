(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[2376,333,80,80],[2458,333,80,80],[2797,83,81,80],[2701,284,81,80],[2797,0,81,81],[2784,284,80,81],[2621,366,79,79],[2540,333,79,80],[2378,0,417,115],[2378,117,356,108],[2376,227,323,104],[2701,227,170,55],[2736,117,58,43],[0,0,2376,129],[0,399,2374,64],[2702,366,65,43],[0,131,2374,65],[0,465,2374,64],[0,198,2374,65],[0,531,2374,64],[0,265,2374,65],[0,597,2374,64],[0,663,2374,64],[0,729,2374,64],[0,332,2374,65]]}
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
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2btnplay = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3btncambioEscenaLeft = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._3btncambioEscenaRight = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4btncambioAudioLeft = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._4btncambioAudioRight = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._5btnDesmute = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._5btnMute = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.comentario = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.comentario2 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.comentario3 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.comentarios = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Dislikes = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.fondo1 = function() {
	this.initialize(img.fondo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2375,1320);


(lib.fondoGUion = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.manocelular = function() {
	this.initialize(img.manocelular);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1243,1186);


(lib.ModEsc5b1Linea1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.reacciones = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.text3 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.texto10 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.texto4 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.texto5 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.texto6 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.texto7 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.texto8 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.texto9 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(24);
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


(lib.mc_fondotexto = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.mc_fondotexto, new cjs.Rectangle(0,187.5,1188,64.5), null);


(lib.Interpolación23 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.manocelular();
	this.instance.setTransform(-310.75,-296.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310.7,-296.5,621.5,593);


(lib.Interpolación20 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.comentario();
	this.instance.setTransform(-104.25,-28.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,-28.7,208.5,57.5);


(lib.Interpolación17 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.comentario2();
	this.instance.setTransform(-89,-27,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-27,178,54);


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
	this.instance = new lib.comentario3();
	this.instance.setTransform(-80.75,-26,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-26,161.5,52);


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
	this.instance = new lib.comentarios();
	this.instance.setTransform(-42.5,-13.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-13.7,85,27.5);


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
	this.instance = new lib.Dislikes();
	this.instance.setTransform(-14.5,-10.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-10.7,29,21.5);


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
	this.instance = new lib.reacciones();
	this.instance.setTransform(-16.25,-10.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-10.7,32.5,21.5);


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
	this.frame_64 = function() {
		var _this = this;
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(109));

	// reacciones.png
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(-7.75,17.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.4817,x:-5.05,y:19.05},24).to({rotation:0,x:-7.75,y:17.75},25).to({startPosition:0},15).to({y:16.15},10).to({y:18},11).to({y:16.35},10).to({y:18.2},9).to({y:16.5},10).to({y:18.55},10).to({y:16.5},10).to({y:17.75},38).wait(1));

	// Dislikes.png
	this.instance_1 = new lib.Interpolación2("synched",0);
	this.instance_1.setTransform(-54.5,10.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.4817,x:-52.1,y:14.9},24).to({rotation:0,x:-54.5,y:10.75},25).to({startPosition:0},15).to({y:12.35},10).to({y:10.5},11).to({y:12.15},10).to({y:10.3},9).to({y:12},10).to({y:9.95},10).to({y:10.75},48).wait(1));

	// comentarios.png
	this.instance_2 = new lib.Interpolación5("synched",0);
	this.instance_2.setTransform(76.5,26.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.4817,x:79.55,y:22.95},24).to({rotation:0,x:76.5,y:26.75},25).to({startPosition:0},15).to({startPosition:0},108).wait(1));

	// comentario3.png
	this.instance_3 = new lib.Interpolación8("synched",0);
	this.instance_3.setTransform(-10.25,146);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.4817,x:0.2,y:147.25},24).to({rotation:0,x:-10.25,y:146},25).to({startPosition:0},15).to({scaleX:0.8192,scaleY:0.8192},14).to({scaleX:1,scaleY:1},15).to({scaleX:0.8192,scaleY:0.8192},14).to({scaleX:1,scaleY:1},13).to({scaleX:0.8192,scaleY:0.8192},14).to({scaleX:1,scaleY:1},14).to({startPosition:0},24).wait(1));

	// comentario2.png
	this.instance_4 = new lib.Interpolación17("synched",0);
	this.instance_4.setTransform(1,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-3.4817,x:8.45,y:97.65},24).to({rotation:0,x:1,y:97},25).to({startPosition:0},15).to({regX:0.1,regY:0.1,scaleX:1.0445,scaleY:1.0445,x:1.2,y:97.15},15).to({regX:0,regY:0,scaleX:0.9118,scaleY:0.9118,x:1,y:97},16).to({scaleX:1.0268,scaleY:1.0268,x:1.05},15).to({scaleX:0.8938,scaleY:0.8938,x:1},14).to({scaleX:1.0268,scaleY:1.0268,x:1.05},15).to({scaleX:1,scaleY:1,x:1},33).wait(1));

	// comentario.png
	this.instance_5 = new lib.Interpolación20("synched",0);
	this.instance_5.setTransform(25.25,56.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-3.4817,x:30.2,y:56},24).to({rotation:0,x:25.25,y:56.75},25).to({startPosition:0},15).to({startPosition:0},108).wait(1));

	// celular
	this.instance_6 = new lib.Interpolación23("synched",0);
	this.instance_6.setTransform(15.75,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-3.4817},24).to({rotation:0},25).to({startPosition:0},15).to({startPosition:0},108).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-663,-366,1280,719);


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
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,84,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},21).wait(20));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(21).to(new cjs.ColorFilter(0.74,0.74,0.74,1,36.4,13.78,3.9,0), 0).wait(20));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:21, endFrame:21, x:-2, y:-2, w:84, h:84});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-2, y:-2, w:84, h:84});
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
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-1,42,42);


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

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
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
					 
				if(root.currentFrame < root.totalFrames-1)
			
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
		});
		
		if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) // chrome requires a initial user interaction to play audio
			root.stop();
		else
			root.gotoAndStop(0);
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.prevEscena.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('../Escena_4', '_self');
		});
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.nextEscena.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('../Escena_6_1', '_self');
		});
	}
	this.frame_1 = function() {
		this.playSound("BGM", "voice", true);
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
	}
	this.frame_4 = function() {
		this.playSound("Voice2", "voice", true);  
		 
		 
		this.next.alpha = 1;
		this.next.mouseEnabled = true;
		
		this.prev.alpha = 1;
		this.prev.mouseEnabled = true;
	}
	this.frame_5 = function() {
		this.playSound("Voice3", "voice", true);
	}
	this.frame_6 = function() {
		this.playSound("Voice4", "voice", true);
	}
	this.frame_7 = function() {
		this.playSound("Voice5", "voice", true);
	}
	this.frame_8 = function() {
		this.playSound("Voice6", "voice", true);
	}
	this.frame_9 = function() {
		this.playSound("Voice7", "voice", true);
	}
	this.frame_10 = function() {
		this.playSound("Voice8", "voice", true);
	}
	this.frame_11 = function() {
		this.playSound("Voice9", "voice", true); 
			
			this.next.alpha = 1;
		this.next.mouseEnabled = true;
	}
	this.frame_12 = function() {
		this.playSound("BGM", "voice", true, {
			volume: 0.2,
			loop: -1
		});
		
		var _this = this
		 
		 
		
		
		this.next.alpha = 0.5;
		this.next.mouseEnabled = false;
		
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnInteraccion.on('click', function(){
		 
				_this.playSound("Voice10", "voice", true);
			
			_this.pata_mc.gotoAndPlay(65);
			
		});
	}
	this.frame_13 = function() {
		this.playSound("BGM", "voice", true, { volume: 0.2, loop: -1 });
		 
		 
		 
		 
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.nextEscenaFinal.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('../Escena_6_1', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1));

	// interacción
	this.btnInteraccion = new lib.btnInteractivo();
	this.btnInteraccion.name = "btnInteraccion";
	this.btnInteraccion.setTransform(663.6,477.9,1,1,0,0,0,-21.1,7.5);
	this.btnInteraccion._off = true;
	new cjs.ButtonHelper(this.btnInteraccion, 0, 1, 2, false, new lib.btnInteractivo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnInteraccion).wait(12).to({_off:false},0).wait(2));

	// btnNextEscena
	this.btnNextEscena = new lib.siguienteAnimado();
	this.btnNextEscena.name = "btnNextEscena";
	this.btnNextEscena.setTransform(255.6,609.8,1,1,0,0,0,20.2,20);
	this.btnNextEscena._off = true;
	new cjs.ButtonHelper(this.btnNextEscena, 0, 1, 2, false, new lib.siguienteAnimado(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnNextEscena).wait(13).to({_off:false},0).wait(1));

	// textos copia
	this.instance = new lib.ModEsc5b1Linea1();
	this.instance.setTransform(3,510,0.5,0.5);

	this.instance_1 = new lib.text3();
	this.instance_1.setTransform(3,510,0.5,0.5);

	this.instance_2 = new lib.texto5();
	this.instance_2.setTransform(3,510,0.5,0.5);

	this.instance_3 = new lib.texto7();
	this.instance_3.setTransform(3,510,0.5,0.5);

	this.instance_4 = new lib.texto9();
	this.instance_4.setTransform(3,510,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).wait(4));

	// textos
	this.instance_5 = new lib.text2();
	this.instance_5.setTransform(3,536,0.5,0.5);

	this.instance_6 = new lib.texto4();
	this.instance_6.setTransform(3,536,0.5,0.5);

	this.instance_7 = new lib.texto6();
	this.instance_7.setTransform(3,538,0.5,0.5);

	this.instance_8 = new lib.texto8();
	this.instance_8.setTransform(3,538,0.5,0.5);

	this.instance_9 = new lib.texto10();
	this.instance_9.setTransform(3,538,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(143,198,250,0.996)").s().p("AgbBZQgggKgSgbQgLgRgDgVQgEgUAHgUQAJgfAcgTQAcgTAeADQAgACAZAYQAYAXAFAfQAFAegRAdQgSAegdALQgQAGgQAAQgOAAgPgFg");
	this.shape.setTransform(81.9956,204.936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},3).to({state:[]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.shape},{t:this.instance_9}]},1).wait(3));

	// Capa_1
	this.prevEscena = new lib.Símbolo3();
	this.prevEscena.name = "prevEscena";
	this.prevEscena.setTransform(209.8,609.6,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.prevEscena, 0, 1, 1);

	this.nextEscena = new lib.Símbolo2();
	this.nextEscena.name = "nextEscena";
	this.nextEscena.setTransform(255.3,609.6,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.nextEscena, 0, 1, 1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(2,1,1).p("AAbkNIAAIHAQhkNIAAIHAwgkNIAAIb");
	this.shape_1.setTransform(176.35,605.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.nextEscena},{t:this.prevEscena}]}).wait(14));

	// btns_media
	this.next = new lib.Símbolo4();
	this.next.name = "next";
	this.next.setTransform(149.1,609.2,1,1,0,0,0,20,20.2);
	new cjs.ButtonHelper(this.next, 0, 1, 1);

	this.prev = new lib.Símbolo1();
	this.prev.name = "prev";
	this.prev.setTransform(102.3,609.8,1,1,0,0,0,20.2,20.2);
	new cjs.ButtonHelper(this.prev, 0, 1, 1);

	this.unmuteMC = new lib.btnMute();
	this.unmuteMC.name = "unmuteMC";
	this.unmuteMC.setTransform(312.5,609.8,1.0127,1,0,0,0,19.8,20.3);
	new cjs.ButtonHelper(this.unmuteMC, 0, 1, 1);

	this.muteMC = new lib.btnSound();
	this.muteMC.name = "muteMC";
	this.muteMC.setTransform(312.5,609.55,1.0127,1.0127,0,0,0,19.8,19.8);
	new cjs.ButtonHelper(this.muteMC, 0, 1, 1);

	this.pressToStart = new lib.btnPlayanimado();
	this.pressToStart.name = "pressToStart";
	this.pressToStart.setTransform(36,609,1,1,0,0,0,16,20);
	new cjs.ButtonHelper(this.pressToStart, 0, 1, 2, false, new lib.btnPlayanimado(), 3);

	this.pause = new lib.btnPause();
	this.pause.name = "pause";
	this.pause.setTransform(36,609,1,1,0,0,0,20,20);
	new cjs.ButtonHelper(this.pause, 0, 1, 1);

	this.playaudio = new lib.btnPlay();
	this.playaudio.name = "playaudio";
	this.playaudio.setTransform(43,605,1,1,0,0,0,20,20);
	new cjs.ButtonHelper(this.playaudio, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pressToStart},{t:this.muteMC,p:{x:312.5}},{t:this.unmuteMC,p:{x:312.5}},{t:this.prev,p:{x:102.3}},{t:this.next,p:{x:149.1}}]}).to({state:[{t:this.playaudio},{t:this.muteMC,p:{x:312.35}},{t:this.unmuteMC,p:{x:312.35}},{t:this.pause},{t:this.prev,p:{x:102.15}},{t:this.next,p:{x:148.95}}]},1).to({state:[{t:this.playaudio},{t:this.muteMC,p:{x:312.35}},{t:this.unmuteMC,p:{x:312.35}},{t:this.pause},{t:this.prev,p:{x:102.15}},{t:this.next,p:{x:148.95}}]},12).wait(1));

	// ondo blanco
	this.instance_10 = new lib.mc_fondotexto();
	this.instance_10.setTransform(708.15,521.7,1,1,0,0,0,594,151.2);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regY:219.8,scaleX:1.0034,x:596,y:542.65,alpha:0.4299},0).wait(1).to({regY:151.3,x:596.05,y:474.05,alpha:1},0).wait(1).to({regY:219.8,x:596,y:542.55},0).wait(11));

	// mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg4/AslMAAAhZKMBx/AAAMAAABZKg");
	mask.setTransform(581.8,290.15);

	// pato
	this.pata_mc = new lib.pata_mc();
	this.pata_mc.name = "pata_mc";
	this.pata_mc.setTransform(215.1,401.45,1,1,0,0,0,-350,76);

	var maskedShapeInstanceList = [this.pata_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.pata_mc).wait(14));

	// fondo
	this.instance_11 = new lib.fondo1();
	this.instance_11.setTransform(-4,-71,0.5042,0.5119);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(503,253.5,799.2,456.5);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1192,
	height: 649,
	fps: 25,
	color: "#235594",
	opacity: 0.00,
	manifest: [
		{src:"images/fondo1.png?1666548809148", id:"fondo1"},
		{src:"images/manocelular.png?1666548809148", id:"manocelular"},
		{src:"images/index_atlas_P_1.png?1666548809000", id:"index_atlas_P_1"},
		{src:"sounds/Voice10.mp3?1666548809148", id:"Voice10"},
		{src:"sounds/BGM.mp3?1666548809148", id:"BGM"},
		{src:"sounds/Voice0.mp3?1666548809148", id:"Voice0"},
		{src:"sounds/Voice9.mp3?1666548809148", id:"Voice9"},
		{src:"sounds/Voice1.mp3?1666548809148", id:"Voice1"},
		{src:"sounds/Voice2.mp3?1666548809148", id:"Voice2"},
		{src:"sounds/Voice3.mp3?1666548809148", id:"Voice3"},
		{src:"sounds/Voice4.mp3?1666548809148", id:"Voice4"},
		{src:"sounds/Voice5.mp3?1666548809148", id:"Voice5"},
		{src:"sounds/Voice6.mp3?1666548809148", id:"Voice6"},
		{src:"sounds/Voice7.mp3?1666548809148", id:"Voice7"},
		{src:"sounds/Voice8.mp3?1666548809148", id:"Voice8"}
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