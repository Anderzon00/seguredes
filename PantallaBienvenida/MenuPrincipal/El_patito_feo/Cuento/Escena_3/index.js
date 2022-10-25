(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,0,2364,1133]]},
		{name:"index_atlas_P_2", frames: [[1365,0,1198,776],[0,0,1363,1143]]},
		{name:"index_atlas_P_3", frames: [[254,422,80,80],[336,422,80,80],[2745,354,81,80],[2745,436,81,80],[2797,271,81,81],[172,422,80,81],[580,422,79,79],[418,422,79,80],[2379,0,449,160],[2379,162,416,153],[2379,317,364,138],[0,422,170,125],[885,422,71,69],[661,422,77,77],[740,422,71,72],[2797,162,79,107],[499,422,79,80],[813,422,70,70],[0,0,2376,129],[0,208,2377,72],[0,131,2377,75],[0,282,2377,71],[0,355,2377,65]]}
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
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2btnplay = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3btncambioEscenaLeft = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._3btncambioEscenaRight = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4btncambioAudioLeft = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._4btncambioAudioRight = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._5btnDesmute = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._5btnMute = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.comentario1 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.comentario2 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.comentario3 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dialogospatos = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Emotebesos = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.emotecorazon = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Emotedulsura = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Emoteenamorado = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.emotelike = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Emoteoooh = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.fondo1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fondoGUion = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.manoderecha = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.manoizquierdaCelular = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ModEs3Linea4 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.text3 = function() {
	this.initialize(ss["index_atlas_P_3"]);
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


(lib.Símbolo105 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.manoderecha();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo105, new cjs.Rectangle(0,0,1198,776), null);


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
	this.instance = new lib.comentario3();
	this.instance.setTransform(28,103,0.5,0.5);

	this.instance_1 = new lib.comentario2();
	this.instance_1.setTransform(13,49,0.5,0.5);

	this.instance_2 = new lib.comentario1();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,224.5,172), null);


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
	this.instance = new lib.dialogospatos();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,170,125), null);


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
	this.instance_3 = new lib._3btncambioEscenaRight();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,40);


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

	// Capa_1
	this.instance_1 = new lib._4btncambioAudioLeft();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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


(lib.Símbolo2_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance_4 = new lib.Emotebesos();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2_2, new cjs.Rectangle(0,0,71,69), null);


(lib.Símbolo106 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(97.85,63.65,1,1,0,0,0,85,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:96.2,y:61.5},0).wait(1).to({x:94.55,y:59.3},0).wait(1).to({x:92.9,y:57.15},0).wait(1).to({x:91.25,y:54.95},0).wait(1).to({x:89.6,y:52.8},0).wait(1).to({x:87.95,y:50.6},0).wait(1).to({x:86.3,y:48.4},0).wait(1).to({x:84.65,y:46.25},0).wait(1).to({x:83,y:44.05},0).wait(1).to({x:81.35,y:41.9},0).wait(1).to({x:79.7,y:39.7},0).wait(1).to({x:78.05,y:37.55},0).wait(1).to({x:76.4,y:35.35},0).wait(1).to({x:74.75,y:33.15},0).wait(1).to({x:76.3,y:35.2},0).wait(1).to({x:77.85,y:37.25},0).wait(1).to({x:79.4,y:39.25},0).wait(1).to({x:80.95,y:41.3},0).wait(1).to({x:82.45,y:43.35},0).wait(1).to({x:84,y:45.35},0).wait(1).to({x:85.5,y:47.4},0).wait(1).to({x:87.05,y:49.45},0).wait(1).to({x:88.6,y:51.45},0).wait(1).to({x:90.15,y:53.5},0).wait(1).to({x:91.65,y:55.55},0).wait(1).to({x:93.2,y:57.55},0).wait(1).to({x:94.75,y:59.6},0).wait(1).to({x:96.3,y:61.65},0).wait(1).to({x:97.85,y:63.65},0).wait(1).to({x:96.3,y:61.65},0).wait(1).to({x:94.75,y:59.6},0).wait(1).to({x:93.2,y:57.55},0).wait(1).to({x:91.65,y:55.55},0).wait(1).to({x:90.15,y:53.5},0).wait(1).to({x:88.6,y:51.45},0).wait(1).to({x:87.05,y:49.45},0).wait(1).to({x:85.5,y:47.4},0).wait(1).to({x:84,y:45.35},0).wait(1).to({x:82.45,y:43.35},0).wait(1).to({x:80.95,y:41.3},0).wait(1).to({x:79.4,y:39.25},0).wait(1).to({x:77.85,y:37.25},0).wait(1).to({x:76.3,y:35.2},0).wait(1).to({x:74.75,y:33.15},0).wait(1).to({x:76.3,y:35.2},0).wait(1).to({x:77.85,y:37.25},0).wait(1).to({x:79.4,y:39.25},0).wait(1).to({x:80.95,y:41.3},0).wait(1).to({x:82.45,y:43.35},0).wait(1).to({x:84,y:45.35},0).wait(1).to({x:85.5,y:47.4},0).wait(1).to({x:87.05,y:49.45},0).wait(1).to({x:88.6,y:51.45},0).wait(1).to({x:90.15,y:53.5},0).wait(1).to({x:91.65,y:55.55},0).wait(1).to({x:93.2,y:57.55},0).wait(1).to({x:94.75,y:59.6},0).wait(1).to({x:96.3,y:61.65},0).wait(1).to({x:97.85,y:63.65},0).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-29.3,193.1,155.5);


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


(lib.Símbolo1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_15
	this.instance_2 = new lib.Símbolo2_2();
	this.instance_2.setTransform(160.7,-281.9,0.8398,0.9083,0,0,0,35.6,34.2);
	this.instance_2.alpha = 0.2695;

	this.instance_3 = new lib.Símbolo4_1();
	this.instance_3.setTransform(250.05,-282.05,0.8398,0.9083,0,0,0,35.6,35.9);
	this.instance_3.alpha = 0.2695;

	this.instance_4 = new lib.Símbolo3_1();
	this.instance_4.setTransform(276.2,-214.4,0.8398,0.9083,0,0,0,38.5,38.6);
	this.instance_4.alpha = 0.2695;

	this.instance_5 = new lib.Símbolo5();
	this.instance_5.setTransform(338.15,-330.4,0.8492,0.8547,0,0,0,39.1,53.5);
	this.instance_5.alpha = 0.2695;

	this.instance_6 = new lib.Símbolo6_1();
	this.instance_6.setTransform(85.35,-247.05,0.8398,0.9083,0,0,0,39.6,40);
	this.instance_6.alpha = 0.2695;

	this.instance_7 = new lib.Símbolo7();
	this.instance_7.setTransform(183.6,-233.05,0.8398,0.9083,0,0,0,35.1,35);
	this.instance_7.alpha = 0.2695;

	this.instance_8 = new lib.Símbolo2_2();
	this.instance_8.setTransform(163.75,-212.85,0.7523,0.8583,0,0,0,35.6,34.2);
	this.instance_8.alpha = 0.7305;

	this.instance_9 = new lib.Símbolo4_1();
	this.instance_9.setTransform(247.7,-212.4,0.7523,0.8583,0,0,0,35.7,35.9);
	this.instance_9.alpha = 0.7305;

	this.instance_10 = new lib.Símbolo3_1();
	this.instance_10.setTransform(271.05,-148.5,0.7523,0.8583,0,0,0,38.5,38.6);
	this.instance_10.alpha = 0.7305;

	this.instance_11 = new lib.Símbolo5();
	this.instance_11.setTransform(332.55,-273.9,0.7601,0.7907,0,0,0,39.1,53.5);
	this.instance_11.alpha = 0.7305;

	this.instance_12 = new lib.Símbolo6_1();
	this.instance_12.setTransform(101.15,-182.2,0.7523,0.8583,0,0,0,39.6,40);
	this.instance_12.alpha = 0.7305;

	this.instance_13 = new lib.Símbolo7();
	this.instance_13.setTransform(188.8,-163.4,0.7523,0.8583,0,0,0,35.1,35);
	this.instance_13.alpha = 0.7305;

	this.instance_14 = new lib.Símbolo2_2();
	this.instance_14.setTransform(167.3,-132.3,0.6504,0.8,0,0,0,35.5,34.1);
	this.instance_14.alpha = 0.8008;

	this.instance_15 = new lib.Símbolo4_1();
	this.instance_15.setTransform(244.85,-131.2,0.6504,0.8,0,0,0,35.6,35.9);
	this.instance_15.alpha = 0.8008;

	this.instance_16 = new lib.Símbolo3_1();
	this.instance_16.setTransform(265.2,-71.7,0.6504,0.8,0,0,0,38.5,38.6);
	this.instance_16.alpha = 0.8008;

	this.instance_17 = new lib.Símbolo5();
	this.instance_17.setTransform(308.3,-150.55,0.6561,0.7162,0,0,0,39.1,53.4);
	this.instance_17.alpha = 0.8008;

	this.instance_18 = new lib.Símbolo6_1();
	this.instance_18.setTransform(121.9,-95.45,0.6504,0.8,0,0,0,39.6,40);
	this.instance_18.alpha = 0.8008;

	this.instance_19 = new lib.Símbolo7();
	this.instance_19.setTransform(194.8,-82.2,0.6504,0.8,0,0,0,35.1,35);
	this.instance_19.alpha = 0.8008;

	this.instance_20 = new lib.Símbolo4_1();
	this.instance_20.setTransform(239.7,-44.3,0.5484,0.7416,0,0,0,35.8,35.9);
	this.instance_20.alpha = 0.8711;

	this.instance_21 = new lib.Símbolo3_1();
	this.instance_21.setTransform(259.2,5.1,0.5484,0.7416,0,0,0,38.5,38.6);
	this.instance_21.alpha = 0.8711;

	this.instance_22 = new lib.Símbolo5();
	this.instance_22.setTransform(290.85,-42.5,0.5522,0.6416,0,0,0,39.2,53.4);
	this.instance_22.alpha = 0.8711;

	this.instance_23 = new lib.Símbolo6_1();
	this.instance_23.setTransform(142.1,-11.35,0.5484,0.7416,0,0,0,39.6,40);
	this.instance_23.alpha = 0.8711;

	this.instance_24 = new lib.Símbolo2_2();
	this.instance_24.setTransform(173.95,-42.85,0.5484,0.7416,0,0,0,35.6,34.2);
	this.instance_24.alpha = 0.8711;

	this.instance_25 = new lib.Símbolo7();
	this.instance_25.setTransform(202.6,-1,0.5484,0.7416,0,0,0,35.1,35);
	this.instance_25.alpha = 0.8711;

	this.instance_26 = new lib.Símbolo2_2();
	this.instance_26.setTransform(182.95,53.2,0.4465,0.6833,0,0,0,35.6,34.2);
	this.instance_26.alpha = 0.9414;

	this.instance_27 = new lib.Símbolo4_1();
	this.instance_27.setTransform(232.5,46.85,0.4465,0.6833,0,0,0,35.8,36);
	this.instance_27.alpha = 0.9414;

	this.instance_28 = new lib.Símbolo3_1();
	this.instance_28.setTransform(253.25,81.8,0.4465,0.6833,0,0,0,38.4,38.6);
	this.instance_28.alpha = 0.9414;

	this.instance_29 = new lib.Símbolo5();
	this.instance_29.setTransform(278.45,54,0.4482,0.567,0,0,0,39.2,53.6);
	this.instance_29.alpha = 0.9414;

	this.instance_30 = new lib.Símbolo6_1();
	this.instance_30.setTransform(161.45,70.3,0.4465,0.6833,0,0,0,39.6,40.1);
	this.instance_30.alpha = 0.9414;

	this.instance_31 = new lib.Símbolo7();
	this.instance_31.setTransform(211.65,80.3,0.4465,0.6833,0,0,0,35.1,35.1);
	this.instance_31.alpha = 0.9414;

	this.instance_32 = new lib.Símbolo2_2();
	this.instance_32.setTransform(190.55,135.5,0.3591,0.6333,0,0,0,35.5,34.2);

	this.instance_33 = new lib.Símbolo4_1();
	this.instance_33.setTransform(226.3,124.8,0.3591,0.6333,0,0,0,35.6,35.9);

	this.instance_34 = new lib.Símbolo3_1();
	this.instance_34.setTransform(248.2,147.65,0.3591,0.6333,0,0,0,38.5,38.6);

	this.instance_35 = new lib.Símbolo5();
	this.instance_35.setTransform(267.85,136.65,0.3591,0.5031,0,0,0,39.1,53.5);

	this.instance_36 = new lib.Símbolo6_1();
	this.instance_36.setTransform(183.15,140.4,0.3591,0.6333,0,0,0,39.6,40.1);

	this.instance_37 = new lib.Símbolo7();
	this.instance_37.setTransform(219.4,149.85,0.3591,0.6333,0,0,0,35.1,35);

	this.instance_38 = new lib.Símbolo2_2();
	this.instance_38.setTransform(190.55,135.5,0.3591,0.6333,0,0,0,35.5,34.2);

	this.instance_39 = new lib.Símbolo4_1();
	this.instance_39.setTransform(226.3,124.8,0.3591,0.6333,0,0,0,35.6,35.9);

	this.instance_40 = new lib.Símbolo3_1();
	this.instance_40.setTransform(248.2,147.65,0.3591,0.6333,0,0,0,38.5,38.6);

	this.instance_41 = new lib.Símbolo5();
	this.instance_41.setTransform(267.85,136.65,0.3591,0.5031,0,0,0,39.1,53.5);

	this.instance_42 = new lib.Símbolo6_1();
	this.instance_42.setTransform(183.15,140.4,0.3591,0.6333,0,0,0,39.6,40.1);

	this.instance_43 = new lib.Símbolo7();
	this.instance_43.setTransform(219.4,149.85,0.3591,0.6333,0,0,0,35.1,35);

	this.instance_44 = new lib.Símbolo5();
	this.instance_44.setTransform(283.8,12.7,0.4927,0.599,0,0,0,39.2,53.5);
	this.instance_44.alpha = 0.7617;

	this.instance_45 = new lib.Símbolo2_2();
	this.instance_45.setTransform(189.35,121.85,0.3736,0.6416,0,0,0,35.6,34.3);
	this.instance_45.alpha = 0.9883;

	this.instance_46 = new lib.Símbolo4_1();
	this.instance_46.setTransform(227.4,111.85,0.3736,0.6416,0,0,0,35.8,36);
	this.instance_46.alpha = 0.9883;

	this.instance_47 = new lib.Símbolo5();
	this.instance_47.setTransform(269.65,123,0.3739,0.5137,0,0,0,39.2,53.6);
	this.instance_47.alpha = 0.9883;

	this.instance_48 = new lib.Símbolo6_1();
	this.instance_48.setTransform(179.6,128.8,0.3736,0.6416,0,0,0,39.6,40.1);
	this.instance_48.alpha = 0.9883;

	this.instance_49 = new lib.Símbolo7();
	this.instance_49.setTransform(218.2,138.25,0.3736,0.6416,0,0,0,35.2,35);
	this.instance_49.alpha = 0.9883;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31,p:{regY:35.1,scaleX:0.4465,scaleY:0.6833,x:211.65,y:80.3,alpha:0.9414,regX:35.1}},{t:this.instance_30,p:{scaleX:0.4465,scaleY:0.6833,x:161.45,y:70.3,alpha:0.9414,regY:40.1,regX:39.6}},{t:this.instance_29,p:{regY:53.6,scaleX:0.4482,scaleY:0.567,x:278.45,y:54,alpha:0.9414,regX:39.2}},{t:this.instance_28,p:{regX:38.4,regY:38.6,scaleX:0.4465,scaleY:0.6833,x:253.25,y:81.8,alpha:0.9414}},{t:this.instance_27,p:{regX:35.8,scaleX:0.4465,scaleY:0.6833,x:232.5,y:46.85,alpha:0.9414,regY:36}},{t:this.instance_26,p:{scaleX:0.4465,scaleY:0.6833,x:182.95,y:53.2,alpha:0.9414,regX:35.6,regY:34.2}},{t:this.instance_25,p:{scaleX:0.5484,scaleY:0.7416,x:202.6,y:-1,alpha:0.8711,regY:35}},{t:this.instance_24,p:{regX:35.6,regY:34.2,scaleX:0.5484,scaleY:0.7416,x:173.95,y:-42.85,alpha:0.8711}},{t:this.instance_23,p:{regX:39.6,scaleX:0.5484,scaleY:0.7416,x:142.1,y:-11.35,alpha:0.8711,regY:40}},{t:this.instance_22,p:{regY:53.4,scaleX:0.5522,scaleY:0.6416,x:290.85,y:-42.5,alpha:0.8711,regX:39.2}},{t:this.instance_21,p:{scaleX:0.5484,scaleY:0.7416,x:259.2,y:5.1,alpha:0.8711,regX:38.5}},{t:this.instance_20,p:{regX:35.8,regY:35.9,scaleX:0.5484,scaleY:0.7416,x:239.7,y:-44.3,alpha:0.8711}},{t:this.instance_19,p:{scaleX:0.6504,scaleY:0.8,x:194.8,y:-82.2,alpha:0.8008,regY:35}},{t:this.instance_18,p:{scaleX:0.6504,scaleY:0.8,x:121.9,y:-95.45,alpha:0.8008,regY:40}},{t:this.instance_17,p:{regX:39.1,scaleX:0.6561,scaleY:0.7162,x:308.3,y:-150.55,alpha:0.8008,regY:53.4}},{t:this.instance_16,p:{scaleX:0.6504,scaleY:0.8,x:265.2,y:-71.7,alpha:0.8008}},{t:this.instance_15,p:{regX:35.6,regY:35.9,scaleX:0.6504,scaleY:0.8,x:244.85,y:-131.2,alpha:0.8008}},{t:this.instance_14,p:{regX:35.5,scaleX:0.6504,scaleY:0.8,x:167.3,y:-132.3,alpha:0.8008,regY:34.1}},{t:this.instance_13,p:{scaleX:0.7523,scaleY:0.8583,x:188.8,y:-163.4,alpha:0.7305,regY:35}},{t:this.instance_12,p:{scaleX:0.7523,scaleY:0.8583,x:101.15,y:-182.2,alpha:0.7305,regY:40}},{t:this.instance_11,p:{scaleX:0.7601,scaleY:0.7907,x:332.55,y:-273.9,alpha:0.7305,regX:39.1,regY:53.5}},{t:this.instance_10,p:{scaleX:0.7523,scaleY:0.8583,x:271.05,y:-148.5,alpha:0.7305}},{t:this.instance_9,p:{regX:35.7,regY:35.9,scaleX:0.7523,scaleY:0.8583,x:247.7,y:-212.4,alpha:0.7305}},{t:this.instance_8,p:{regY:34.2,scaleX:0.7523,scaleY:0.8583,x:163.75,y:-212.85,alpha:0.7305,regX:35.6}},{t:this.instance_7,p:{scaleX:0.8398,scaleY:0.9083,x:183.6,y:-233.05,alpha:0.2695,regY:35}},{t:this.instance_6,p:{regY:40,scaleX:0.8398,scaleY:0.9083,x:85.35,y:-247.05,alpha:0.2695}},{t:this.instance_5,p:{scaleX:0.8492,scaleY:0.8547,x:338.15,y:-330.4,alpha:0.2695,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.8398,scaleY:0.9083,x:276.2,y:-214.4,alpha:0.2695}},{t:this.instance_3,p:{regX:35.6,scaleX:0.8398,scaleY:0.9083,x:250.05,y:-282.05,alpha:0.2695}},{t:this.instance_2,p:{regY:34.2,scaleX:0.8398,scaleY:0.9083,x:160.7,y:-281.9,alpha:0.2695,regX:35.6}}]}).to({state:[{t:this.instance_31,p:{regY:35,scaleX:0.461,scaleY:0.6916,x:210.4,y:68.65,alpha:0.9297,regX:35.1}},{t:this.instance_30,p:{scaleX:0.461,scaleY:0.6916,x:157.75,y:58.6,alpha:0.9297,regY:40.1,regX:39.6}},{t:this.instance_29,p:{regY:53.5,scaleX:0.463,scaleY:0.5776,x:280.25,y:40.25,alpha:0.9297,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.7,scaleX:0.461,scaleY:0.6916,x:254.15,y:70.85,alpha:0.9297}},{t:this.instance_27,p:{regX:35.7,scaleX:0.461,scaleY:0.6916,x:233.45,y:33.8,alpha:0.9297,regY:36}},{t:this.instance_26,p:{scaleX:0.461,scaleY:0.6916,x:181.65,y:39.45,alpha:0.9297,regX:35.6,regY:34.2}},{t:this.instance_25,p:{scaleX:0.563,scaleY:0.75,x:201.3,y:-12.55,alpha:0.8594,regY:35}},{t:this.instance_24,p:{regX:35.5,regY:34.1,scaleX:0.563,scaleY:0.75,x:172.7,y:-56.65,alpha:0.8594}},{t:this.instance_23,p:{regX:39.5,scaleX:0.563,scaleY:0.75,x:138.75,y:-23.25,alpha:0.8594,regY:40}},{t:this.instance_22,p:{regY:53.5,scaleX:0.567,scaleY:0.6522,x:292.7,y:-56.25,alpha:0.8594,regX:39.2}},{t:this.instance_21,p:{scaleX:0.563,scaleY:0.75,x:260.05,y:-5.95,alpha:0.8594,regX:38.5}},{t:this.instance_20,p:{regX:35.7,regY:36,scaleX:0.563,scaleY:0.75,x:240.65,y:-57.25,alpha:0.8594}},{t:this.instance_19,p:{scaleX:0.6649,scaleY:0.8083,x:193.95,y:-93.8,alpha:0.7891,regY:35}},{t:this.instance_18,p:{scaleX:0.6649,scaleY:0.8083,x:119.5,y:-107.85,alpha:0.7891,regY:40}},{t:this.instance_17,p:{regX:39.2,scaleX:0.671,scaleY:0.7268,x:311.85,y:-168.2,alpha:0.7891,regY:53.4}},{t:this.instance_16,p:{scaleX:0.6649,scaleY:0.8083,x:266,y:-82.75,alpha:0.7891}},{t:this.instance_15,p:{regX:35.7,regY:36,scaleX:0.6649,scaleY:0.8083,x:245.35,y:-142.75,alpha:0.7891}},{t:this.instance_14,p:{regX:35.6,scaleX:0.6649,scaleY:0.8083,x:166.85,y:-143.85,alpha:0.7891,regY:34.1}},{t:this.instance_13,p:{scaleX:0.7669,scaleY:0.8666,x:187.9,y:-175.05,alpha:0.7188,regY:35}},{t:this.instance_12,p:{scaleX:0.7669,scaleY:0.8666,x:99.55,y:-194.6,alpha:0.7188,regY:40}},{t:this.instance_11,p:{scaleX:0.775,scaleY:0.8014,x:336,y:-291.6,alpha:0.7188,regX:39.1,regY:53.5}},{t:this.instance_10,p:{scaleX:0.7669,scaleY:0.8666,x:272,y:-159.55,alpha:0.7188}},{t:this.instance_9,p:{regX:35.6,regY:36,scaleX:0.7669,scaleY:0.8666,x:248.05,y:-224,alpha:0.7188}},{t:this.instance_8,p:{regY:34.1,scaleX:0.7669,scaleY:0.8666,x:163.25,y:-224.45,alpha:0.7188,regX:35.6}},{t:this.instance_7,p:{scaleX:0.8543,scaleY:0.9166,x:182.75,y:-244.6,alpha:0.25,regY:35}},{t:this.instance_6,p:{regY:40.1,scaleX:0.8543,scaleY:0.9166,x:82.15,y:-262.45,alpha:0.25}},{t:this.instance_5,p:{scaleX:0.8641,scaleY:0.8653,x:338.6,y:-338.1,alpha:0.25,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.8543,scaleY:0.9166,x:277,y:-225.3,alpha:0.25}},{t:this.instance_3,p:{regX:35.7,scaleX:0.8543,scaleY:0.9166,x:250.55,y:-293.65,alpha:0.25}},{t:this.instance_2,p:{regY:34.1,scaleX:0.8543,scaleY:0.9166,x:160.2,y:-293.5,alpha:0.25,regX:35.6}}]},3).to({state:[{t:this.instance_37,p:{regX:35.1,regY:35,scaleX:0.3591,scaleY:0.6333,x:219.4,y:149.85,alpha:1}},{t:this.instance_36,p:{scaleX:0.3591,scaleY:0.6333,x:183.15,y:140.4,alpha:1,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.1,regY:53.5,scaleX:0.3591,scaleY:0.5031,x:267.85,y:136.65,alpha:1}},{t:this.instance_34,p:{scaleX:0.3591,scaleY:0.6333,x:248.2,y:147.65,alpha:1,regY:38.6,regX:38.5}},{t:this.instance_33,p:{regY:35.9,scaleX:0.3591,scaleY:0.6333,x:226.3,y:124.8,alpha:1,regX:35.6}},{t:this.instance_32,p:{regX:35.5,regY:34.2,scaleX:0.3591,scaleY:0.6333,x:190.55,y:135.5,alpha:1}},{t:this.instance_31,p:{regY:35,scaleX:0.4756,scaleY:0.7,x:209.1,y:57,alpha:0.9219,regX:35.1}},{t:this.instance_30,p:{scaleX:0.4756,scaleY:0.7,x:156.15,y:46.85,alpha:0.9219,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.5,scaleX:0.4779,scaleY:0.5883,x:282.05,y:26.45,alpha:0.9219,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.6,scaleX:0.4756,scaleY:0.7,x:254.95,y:59.85,alpha:0.9219}},{t:this.instance_27,p:{regX:35.8,scaleX:0.4756,scaleY:0.7,x:234.55,y:20.8,alpha:0.9219,regY:36}},{t:this.instance_26,p:{scaleX:0.4756,scaleY:0.7,x:180.4,y:25.75,alpha:0.9219,regX:35.6,regY:34.2}},{t:this.instance_25,p:{scaleX:0.5776,scaleY:0.7583,x:199.95,y:-24.2,alpha:0.8516,regY:35}},{t:this.instance_24,p:{regX:35.6,regY:34.1,scaleX:0.5776,scaleY:0.7583,x:171.4,y:-70.35,alpha:0.8516}},{t:this.instance_23,p:{regX:39.6,scaleX:0.5776,scaleY:0.7583,x:136.85,y:-34.7,alpha:0.8516,regY:40}},{t:this.instance_22,p:{regY:53.4,scaleX:0.5819,scaleY:0.6629,x:294.4,y:-70.05,alpha:0.8516,regX:39.2}},{t:this.instance_21,p:{scaleX:0.5776,scaleY:0.7583,x:260.95,y:-16.9,alpha:0.8516,regX:38.5}},{t:this.instance_20,p:{regX:35.6,regY:36,scaleX:0.5776,scaleY:0.7583,x:241.6,y:-70.3,alpha:0.8516}},{t:this.instance_19,p:{scaleX:0.6795,scaleY:0.8166,x:193.1,y:-105.4,alpha:0.7813,regY:35}},{t:this.instance_18,p:{scaleX:0.6795,scaleY:0.8166,x:115.35,y:-123.25,alpha:0.7813,regY:40.1}},{t:this.instance_17,p:{regX:39.1,scaleX:0.6859,scaleY:0.7375,x:315.25,y:-185.8,alpha:0.7813,regY:53.5}},{t:this.instance_16,p:{scaleX:0.6795,scaleY:0.8166,x:266.8,y:-93.7,alpha:0.7813}},{t:this.instance_15,p:{regX:35.7,regY:35.9,scaleX:0.6795,scaleY:0.8166,x:245.7,y:-154.45,alpha:0.7813}},{t:this.instance_14,p:{regX:35.6,scaleX:0.6795,scaleY:0.8167,x:166.35,y:-155.35,alpha:0.7813,regY:34.1}},{t:this.instance_13,p:{scaleX:0.7815,scaleY:0.875,x:187.05,y:-186.65,alpha:0.7109,regY:35}},{t:this.instance_12,p:{scaleX:0.7815,scaleY:0.875,x:96.05,y:-205.9,alpha:0.7109,regY:40}},{t:this.instance_11,p:{scaleX:0.7898,scaleY:0.8121,x:336.55,y:-299.4,alpha:0.7109,regX:39.2,regY:53.4}},{t:this.instance_10,p:{scaleX:0.7815,scaleY:0.875,x:272.8,y:-170.5,alpha:0.7109}},{t:this.instance_9,p:{regX:35.7,regY:35.9,scaleX:0.7815,scaleY:0.875,x:248.55,y:-235.7,alpha:0.7109}},{t:this.instance_8,p:{regY:34.1,scaleX:0.7815,scaleY:0.875,x:162.7,y:-235.95,alpha:0.7109,regX:35.5}},{t:this.instance_7,p:{scaleX:0.8689,scaleY:0.925,x:181.9,y:-256.3,alpha:0.2188,regY:34.9}},{t:this.instance_6,p:{regY:40,scaleX:0.8689,scaleY:0.925,x:79.75,y:-273.8,alpha:0.2188}},{t:this.instance_5,p:{scaleX:0.879,scaleY:0.876,x:339,y:-345.9,alpha:0.2188,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.8689,scaleY:0.925,x:277.9,y:-236.35,alpha:0.2188}},{t:this.instance_3,p:{regX:35.7,scaleX:0.8689,scaleY:0.925,x:250.9,y:-305.3,alpha:0.2188}},{t:this.instance_2,p:{regY:34.1,scaleX:0.8689,scaleY:0.925,x:159.7,y:-305,alpha:0.2188,regX:35.6}}]},4).to({state:[{t:this.instance_37,p:{regX:35.2,regY:35.1,scaleX:0.3764,scaleY:0.6432,x:218.2,y:138.35,alpha:0.9688}},{t:this.instance_36,p:{scaleX:0.3764,scaleY:0.6432,x:179.6,y:128.75,alpha:0.9688,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.2,regY:53.6,scaleX:0.3739,scaleY:0.5137,x:269.65,y:123,alpha:0.9688}},{t:this.instance_34,p:{scaleX:0.3764,scaleY:0.6432,x:249.25,y:134.65,alpha:0.9688,regY:38.6,regX:38.5}},{t:this.instance_33,p:{regY:36,scaleX:0.3764,scaleY:0.6432,x:227.3,y:111.85,alpha:0.9688,regX:35.6}},{t:this.instance_32,p:{regX:35.6,regY:34.3,scaleX:0.3736,scaleY:0.6416,x:189.35,y:121.85,alpha:0.9688}},{t:this.instance_31,p:{regY:35,scaleX:0.4902,scaleY:0.7083,x:207.8,y:45.45,alpha:0.9102,regX:35.1}},{t:this.instance_30,p:{scaleX:0.4902,scaleY:0.7083,x:153.3,y:35.15,alpha:0.9102,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.5,scaleX:0.4927,scaleY:0.599,x:283.8,y:12.7,alpha:0.9102,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.7,scaleX:0.4902,scaleY:0.7083,x:255.8,y:49,alpha:0.9102}},{t:this.instance_27,p:{regX:35.6,scaleX:0.4902,scaleY:0.7083,x:235.5,y:7.8,alpha:0.9102,regY:36}},{t:this.instance_26,p:{scaleX:0.4902,scaleY:0.7083,x:179.05,y:12,alpha:0.9102,regX:35.5,regY:34.1}},{t:this.instance_25,p:{scaleX:0.5921,scaleY:0.7666,x:198.7,y:-35.8,alpha:0.8398,regY:35}},{t:this.instance_24,p:{regX:35.6,regY:34.1,scaleX:0.5921,scaleY:0.7666,x:170.2,y:-84.05,alpha:0.8398}},{t:this.instance_23,p:{regX:39.6,scaleX:0.5921,scaleY:0.7666,x:134.9,y:-48.4,alpha:0.8398,regY:40}},{t:this.instance_22,p:{regY:53.5,scaleX:0.5967,scaleY:0.6735,x:296.25,y:-83.75,alpha:0.8398,regX:39.2}},{t:this.instance_21,p:{scaleX:0.5921,scaleY:0.7666,x:261.75,y:-27.8,alpha:0.8398,regX:38.5}},{t:this.instance_20,p:{regX:35.7,regY:36,scaleX:0.5921,scaleY:0.7666,x:242.7,y:-83.3,alpha:0.8398}},{t:this.instance_19,p:{scaleX:0.6941,scaleY:0.825,x:192.25,y:-117.05,alpha:0.7695,regY:35}},{t:this.instance_18,p:{scaleX:0.6941,scaleY:0.825,x:113.7,y:-132.65,alpha:0.7695,regY:40}},{t:this.instance_17,p:{regX:39.2,scaleX:0.7007,scaleY:0.7481,x:318.8,y:-203.4,alpha:0.7695,regY:53.4}},{t:this.instance_16,p:{scaleX:0.6941,scaleY:0.825,x:267.65,y:-104.6,alpha:0.7695}},{t:this.instance_15,p:{regX:35.6,regY:35.9,scaleX:0.6941,scaleY:0.825,x:246.05,y:-166.05,alpha:0.7695}},{t:this.instance_14,p:{regX:35.6,scaleX:0.6941,scaleY:0.825,x:165.75,y:-166.85,alpha:0.7695,regY:34.1}},{t:this.instance_13,p:{scaleX:0.7961,scaleY:0.8833,x:186.2,y:-198.2,alpha:0.6992,regY:35}},{t:this.instance_12,p:{scaleX:0.7961,scaleY:0.8833,x:93.7,y:-217.2,alpha:0.6992,regY:40}},{t:this.instance_11,p:{scaleX:0.8047,scaleY:0.8227,x:336.85,y:-307.15,alpha:0.6992,regX:39.1,regY:53.4}},{t:this.instance_10,p:{scaleX:0.7961,scaleY:0.8833,x:273.65,y:-181.4,alpha:0.6992}},{t:this.instance_9,p:{regX:35.7,regY:35.9,scaleX:0.7961,scaleY:0.8833,x:248.9,y:-247.3,alpha:0.6992}},{t:this.instance_8,p:{regY:34.2,scaleX:0.7961,scaleY:0.8833,x:162.25,y:-247.35,alpha:0.6992,regX:35.6}},{t:this.instance_7,p:{scaleX:0.8835,scaleY:0.9333,x:181,y:-267.85,alpha:0.1992,regY:35}},{t:this.instance_6,p:{regY:40,scaleX:0.8835,scaleY:0.9333,x:77.6,y:-285.15,alpha:0.1992}},{t:this.instance_5,p:{scaleX:0.8938,scaleY:0.8866,x:339.4,y:-353.65,alpha:0.1992,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.8835,scaleY:0.9333,x:278.75,y:-247.3,alpha:0.1992}},{t:this.instance_3,p:{regX:35.6,scaleX:0.8835,scaleY:0.9333,x:251.25,y:-316.95,alpha:0.1992}},{t:this.instance_2,p:{regY:34.2,scaleX:0.8835,scaleY:0.9333,x:159.15,y:-316.4,alpha:0.1992,regX:35.6}}]},4).to({state:[{t:this.instance_37,p:{regX:35.1,regY:35.1,scaleX:0.3937,scaleY:0.6531,x:216.85,y:126.7,alpha:0.9414}},{t:this.instance_36,p:{scaleX:0.3937,scaleY:0.6531,x:175.9,y:117.05,alpha:0.9414,regX:39.5,regY:40.1}},{t:this.instance_35,p:{regX:39.2,regY:53.6,scaleX:0.3888,scaleY:0.5244,x:271.35,y:109.15,alpha:0.9414}},{t:this.instance_34,p:{scaleX:0.3937,scaleY:0.6531,x:250.2,y:121.6,alpha:0.9414,regY:38.6,regX:38.5}},{t:this.instance_33,p:{regY:36,scaleX:0.3937,scaleY:0.6531,x:228.35,y:98.8,alpha:0.9414,regX:35.7}},{t:this.instance_32,p:{regX:35.6,regY:34.2,scaleX:0.3882,scaleY:0.65,x:188,y:108.1,alpha:0.9414}},{t:this.instance_31,p:{regY:35,scaleX:0.5047,scaleY:0.7166,x:206.45,y:33.8,alpha:0.8984,regX:35.1}},{t:this.instance_30,p:{scaleX:0.5047,scaleY:0.7166,x:151.3,y:23.5,alpha:0.8984,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.5,scaleX:0.5076,scaleY:0.6096,x:285.55,y:-1.1,alpha:0.8984,regX:39.2}},{t:this.instance_28,p:{regX:38.6,regY:38.6,scaleX:0.5047,scaleY:0.7166,x:256.7,y:37.95,alpha:0.8984}},{t:this.instance_27,p:{regX:35.6,scaleX:0.5047,scaleY:0.7166,x:236.45,y:-5.25,alpha:0.8984,regY:35.9}},{t:this.instance_26,p:{scaleX:0.5047,scaleY:0.7166,x:177.8,y:-1.65,alpha:0.8984,regX:35.6,regY:34.2}},{t:this.instance_25,p:{scaleX:0.6067,scaleY:0.775,x:197.4,y:-47.5,alpha:0.8281,regY:34.9}},{t:this.instance_24,p:{regX:35.5,regY:34.1,scaleX:0.6067,scaleY:0.775,x:168.85,y:-97.8,alpha:0.8281}},{t:this.instance_23,p:{regX:39.6,scaleX:0.6067,scaleY:0.775,x:131,y:-57.15,alpha:0.8281,regY:40}},{t:this.instance_22,p:{regY:53.4,scaleX:0.6116,scaleY:0.6842,x:297.95,y:-97.6,alpha:0.8281,regX:39.2}},{t:this.instance_21,p:{scaleX:0.6067,scaleY:0.775,x:262.6,y:-38.8,alpha:0.8281,regX:38.4}},{t:this.instance_20,p:{regX:35.7,regY:35.9,scaleX:0.6067,scaleY:0.775,x:243.7,y:-96.4,alpha:0.8281}},{t:this.instance_19,p:{scaleX:0.7086,scaleY:0.8333,x:191.3,y:-128.7,alpha:0.7617,regY:34.9}},{t:this.instance_18,p:{scaleX:0.7086,scaleY:0.8333,x:110.3,y:-145.3,alpha:0.7617,regY:40}},{t:this.instance_17,p:{regX:39.2,scaleX:0.7156,scaleY:0.7588,x:322.25,y:-221,alpha:0.7617,regY:53.5}},{t:this.instance_16,p:{scaleX:0.7086,scaleY:0.8333,x:268.55,y:-115.6,alpha:0.7617}},{t:this.instance_15,p:{regX:35.7,regY:35.9,scaleX:0.7086,scaleY:0.8333,x:246.55,y:-177.65,alpha:0.7617}},{t:this.instance_14,p:{regX:35.5,scaleX:0.7086,scaleY:0.8333,x:165.25,y:-178.35,alpha:0.7617,regY:34.1}},{t:this.instance_13,p:{scaleX:0.8106,scaleY:0.8916,x:185.3,y:-209.85,alpha:0.6914,regY:35}},{t:this.instance_12,p:{scaleX:0.8106,scaleY:0.8916,x:90.9,y:-228.55,alpha:0.6914,regY:40}},{t:this.instance_11,p:{scaleX:0.8195,scaleY:0.8334,x:337.35,y:-314.8,alpha:0.6914,regX:39.1,regY:53.5}},{t:this.instance_10,p:{scaleX:0.8106,scaleY:0.8916,x:274.45,y:-192.4,alpha:0.6914}},{t:this.instance_9,p:{regX:35.7,regY:35.9,scaleX:0.8106,scaleY:0.8916,x:249.3,y:-258.9,alpha:0.6914}},{t:this.instance_8,p:{regY:34.1,scaleX:0.8106,scaleY:0.8916,x:161.75,y:-258.95,alpha:0.6914,regX:35.6}},{t:this.instance_7,p:{scaleX:0.898,scaleY:0.9417,x:180.15,y:-279.4,alpha:0.1797,regY:35}},{t:this.instance_6,p:{regY:40.1,scaleX:0.898,scaleY:0.9417,x:175.8,y:-296.4,alpha:0.1797}},{t:this.instance_5,p:{scaleX:0.9087,scaleY:0.8973,x:339.95,y:-361.45,alpha:0.1797,regX:39.2,regY:53.5}},{t:this.instance_4,p:{scaleX:0.898,scaleY:0.9417,x:279.55,y:-258.2,alpha:0.1797}},{t:this.instance_3,p:{regX:35.6,scaleX:0.898,scaleY:0.9417,x:251.65,y:-328.55,alpha:0.1797}},{t:this.instance_2,p:{regY:34.1,scaleX:0.898,scaleY:0.9417,x:158.6,y:-328,alpha:0.1797,regX:35.5}}]},4).to({state:[{t:this.instance_37,p:{regX:35.1,regY:35.1,scaleX:0.411,scaleY:0.663,x:215.6,y:115.1,alpha:0.9219}},{t:this.instance_36,p:{scaleX:0.411,scaleY:0.663,x:172.35,y:105.35,alpha:0.9219,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.1,regY:53.6,scaleX:0.4036,scaleY:0.535,x:273.2,y:95.4,alpha:0.9219}},{t:this.instance_34,p:{scaleX:0.411,scaleY:0.663,x:251.2,y:108.6,alpha:0.9219,regY:38.7,regX:38.5}},{t:this.instance_33,p:{regY:36,scaleX:0.411,scaleY:0.663,x:229.35,y:85.8,alpha:0.9219,regX:35.8}},{t:this.instance_32,p:{regX:35.6,regY:34.2,scaleX:0.4028,scaleY:0.6583,x:186.75,y:94.35,alpha:0.9219}},{t:this.instance_31,p:{regY:35,scaleX:0.5193,scaleY:0.725,x:205.2,y:22.2,alpha:0.8906,regX:35.1}},{t:this.instance_30,p:{scaleX:0.5193,scaleY:0.725,x:148,y:11.8,alpha:0.8906,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.5,scaleX:0.5225,scaleY:0.6203,x:287.35,y:-14.85,alpha:0.8906,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.6,scaleX:0.5193,scaleY:0.725,x:257.5,y:27.05,alpha:0.8906}},{t:this.instance_27,p:{regX:35.7,scaleX:0.5193,scaleY:0.725,x:237.6,y:-18.3,alpha:0.8906,regY:35.9}},{t:this.instance_26,p:{scaleX:0.5193,scaleY:0.725,x:176.55,y:-15.5,alpha:0.8906,regX:35.6,regY:34.1}},{t:this.instance_25,p:{scaleX:0.6213,scaleY:0.7833,x:196.5,y:-59.05,alpha:0.8203,regY:35}},{t:this.instance_24,p:{regX:35.6,regY:34.1,scaleX:0.6213,scaleY:0.7833,x:168.35,y:-109.3,alpha:0.8203}},{t:this.instance_23,p:{regX:39.6,scaleX:0.6213,scaleY:0.7833,x:127.45,y:-71.5,alpha:0.8203,regY:40}},{t:this.instance_22,p:{regY:53.5,scaleX:0.6264,scaleY:0.6949,x:301.4,y:-115.25,alpha:0.8203,regX:39.2}},{t:this.instance_21,p:{scaleX:0.6213,scaleY:0.7833,x:263.45,y:-49.75,alpha:0.8203,regX:38.5}},{t:this.instance_20,p:{regX:35.6,regY:35.9,scaleX:0.6213,scaleY:0.7833,x:244.05,y:-108,alpha:0.8203}},{t:this.instance_19,p:{scaleX:0.7232,scaleY:0.8416,x:190.5,y:-140.2,alpha:0.75,regY:35}},{t:this.instance_18,p:{scaleX:0.7232,scaleY:0.8416,x:107.25,y:-157.45,alpha:0.75,regY:40}},{t:this.instance_17,p:{regX:39.1,scaleX:0.7304,scaleY:0.7694,x:325.65,y:-238.7,alpha:0.75,regY:53.4}},{t:this.instance_16,p:{scaleX:0.7232,scaleY:0.8416,x:269.4,y:-126.55,alpha:0.75}},{t:this.instance_15,p:{regX:35.6,regY:35.9,scaleX:0.7232,scaleY:0.8416,x:246.85,y:-189.2,alpha:0.75}},{t:this.instance_14,p:{regX:35.6,scaleX:0.7232,scaleY:0.8416,x:164.8,y:-189.85,alpha:0.75,regY:34.1}},{t:this.instance_13,p:{scaleX:0.8252,scaleY:0.9,x:184.45,y:-221.4,alpha:0.6797,regY:35}},{t:this.instance_12,p:{scaleX:0.8252,scaleY:0.9,x:88.15,y:-239.85,alpha:0.6797,regY:40}},{t:this.instance_11,p:{scaleX:0.8344,scaleY:0.844,x:337.8,y:-322.6,alpha:0.6797,regX:39.2,regY:53.5}},{t:this.instance_10,p:{scaleX:0.8252,scaleY:0.9,x:275.3,y:-203.35,alpha:0.6797}},{t:this.instance_9,p:{regX:35.6,regY:35.9,scaleX:0.8252,scaleY:0.9,x:249.7,y:-270.45,alpha:0.6797}},{t:this.instance_8,p:{regY:34.1,scaleX:0.8252,scaleY:0.9,x:161.15,y:-270.45,alpha:0.6797,regX:35.5}},{t:this.instance_7,p:{scaleX:0.9126,scaleY:0.95,x:179.3,y:-291,alpha:0.1602,regY:35}},{t:this.instance_6,p:{regY:40,scaleX:0.9126,scaleY:0.95,x:173.4,y:-307.8,alpha:0.1602}},{t:this.instance_5,p:{scaleX:0.9235,scaleY:0.9079,x:340.25,y:-369.25,alpha:0.1602,regX:39.1,regY:53.4}},{t:this.instance_4,p:{scaleX:0.9126,scaleY:0.95,x:280.45,y:-269.2,alpha:0.1602}},{t:this.instance_3,p:{regX:35.6,scaleX:0.9126,scaleY:0.95,x:252.05,y:-340.1,alpha:0.1602}},{t:this.instance_2,p:{regY:34.1,scaleX:0.9126,scaleY:0.95,x:158.15,y:-339.5,alpha:0.1602,regX:35.6}}]},4).to({state:[{t:this.instance_37,p:{regX:35.1,regY:35.1,scaleX:0.4283,scaleY:0.6729,x:214.3,y:103.5,alpha:0.8906}},{t:this.instance_36,p:{scaleX:0.4283,scaleY:0.6729,x:168.7,y:93.65,alpha:0.8906,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.2,regY:53.5,scaleX:0.4185,scaleY:0.5457,x:274.9,y:81.55,alpha:0.8906}},{t:this.instance_34,p:{scaleX:0.4283,scaleY:0.6729,x:252.2,y:95.5,alpha:0.8906,regY:38.6,regX:38.5}},{t:this.instance_33,p:{regY:36,scaleX:0.4283,scaleY:0.6729,x:230.35,y:72.8,alpha:0.8906,regX:35.7}},{t:this.instance_32,p:{regX:35.5,regY:34.3,scaleX:0.4173,scaleY:0.6666,x:185.45,y:80.7,alpha:0.8906}},{t:this.instance_31,p:{regY:34.9,scaleX:0.5339,scaleY:0.7333,x:203.9,y:10.55,alpha:0.8789,regX:35.1}},{t:this.instance_30,p:{scaleX:0.5339,scaleY:0.7333,x:145.8,y:0.15,alpha:0.8789,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.5,scaleX:0.5373,scaleY:0.6309,x:289.1,y:-28.7,alpha:0.8789,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.5,scaleX:0.5339,scaleY:0.7333,x:258.4,y:16,alpha:0.8789}},{t:this.instance_27,p:{regX:35.7,scaleX:0.5339,scaleY:0.7333,x:238.55,y:-31.3,alpha:0.8789,regY:35.9}},{t:this.instance_26,p:{scaleX:0.5339,scaleY:0.7333,x:175.25,y:-29.15,alpha:0.8789,regX:35.5,regY:34.1}},{t:this.instance_25,p:{scaleX:0.6358,scaleY:0.7916,x:195.65,y:-70.65,alpha:0.8086,regY:35}},{t:this.instance_24,p:{regX:35.6,regY:34.1,scaleX:0.6358,scaleY:0.7916,x:167.85,y:-120.8,alpha:0.8086}},{t:this.instance_23,p:{regX:39.6,scaleX:0.6358,scaleY:0.7916,x:124.65,y:-83,alpha:0.8086,regY:40.1}},{t:this.instance_22,p:{regY:53.5,scaleX:0.6413,scaleY:0.7055,x:304.95,y:-132.8,alpha:0.8086,regX:39.2}},{t:this.instance_21,p:{scaleX:0.6358,scaleY:0.7916,x:264.35,y:-60.8,alpha:0.8086,regX:38.5}},{t:this.instance_20,p:{regX:35.6,regY:35.9,scaleX:0.6358,scaleY:0.7916,x:244.5,y:-119.55,alpha:0.8086}},{t:this.instance_19,p:{scaleX:0.7378,scaleY:0.85,x:189.65,y:-151.85,alpha:0.7383,regY:35}},{t:this.instance_18,p:{scaleX:0.7378,scaleY:0.85,x:104.7,y:-169.85,alpha:0.7383,regY:40}},{t:this.instance_17,p:{regX:39.2,scaleX:0.7453,scaleY:0.7801,x:329.2,y:-256.25,alpha:0.7383,regY:53.5}},{t:this.instance_16,p:{scaleX:0.7378,scaleY:0.85,x:270.25,y:-137.6,alpha:0.7383}},{t:this.instance_15,p:{regX:35.7,regY:35.9,scaleX:0.7378,scaleY:0.85,x:247.35,y:-200.8,alpha:0.7383}},{t:this.instance_14,p:{regX:35.6,scaleX:0.7378,scaleY:0.85,x:164.3,y:-201.35,alpha:0.7383,regY:34.1}},{t:this.instance_13,p:{scaleX:0.8398,scaleY:0.9083,x:183.6,y:-233.05,alpha:0.6719,regY:35}},{t:this.instance_12,p:{scaleX:0.8398,scaleY:0.9083,x:85.35,y:-248.3,alpha:0.6719,regY:40}},{t:this.instance_11,p:{scaleX:0.8492,scaleY:0.8547,x:338.15,y:-330.4,alpha:0.6719,regX:39.1,regY:53.5}},{t:this.instance_10,p:{scaleX:0.8398,scaleY:0.9083,x:276.2,y:-214.4,alpha:0.6719}},{t:this.instance_9,p:{regX:35.6,regY:35.9,scaleX:0.8398,scaleY:0.9083,x:250.05,y:-282.05,alpha:0.6719}},{t:this.instance_8,p:{regY:34.2,scaleX:0.8398,scaleY:0.9083,x:160.7,y:-281.9,alpha:0.6719,regX:35.6}},{t:this.instance_7,p:{scaleX:0.9271,scaleY:0.9583,x:178.45,y:-302.6,alpha:0.1406,regY:35}},{t:this.instance_6,p:{regY:40,scaleX:0.9271,scaleY:0.9583,x:159.1,y:-319.1,alpha:0.1406}},{t:this.instance_5,p:{scaleX:0.9384,scaleY:0.9186,x:340.75,y:-376.9,alpha:0.1406,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.9271,scaleY:0.9583,x:281.3,y:-280.15,alpha:0.1406}},{t:this.instance_3,p:{regX:35.7,scaleX:0.9271,scaleY:0.9583,x:252.55,y:-351.7,alpha:0.1406}},{t:this.instance_2,p:{regY:34.1,scaleX:0.9271,scaleY:0.9583,x:157.65,y:-351,alpha:0.1406,regX:35.6}}]},4).to({state:[{t:this.instance_37,p:{regX:35.2,regY:35.1,scaleX:0.4457,scaleY:0.6829,x:213,y:87.95,alpha:0.8594}},{t:this.instance_36,p:{scaleX:0.4457,scaleY:0.6829,x:165.05,y:78.1,alpha:0.8594,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.1,regY:53.5,scaleX:0.4333,scaleY:0.5563,x:276.7,y:63.85,alpha:0.8594}},{t:this.instance_34,p:{scaleX:0.4457,scaleY:0.6829,x:253.25,y:78.5,alpha:0.8594,regY:38.6,regX:38.6}},{t:this.instance_33,p:{regY:36,scaleX:0.4457,scaleY:0.6829,x:231.45,y:55.9,alpha:0.8594,regX:35.7}},{t:this.instance_32,p:{regX:35.6,regY:34.2,scaleX:0.4319,scaleY:0.675,x:184.25,y:63,alpha:0.8594}},{t:this.instance_31,p:{regY:35,scaleX:0.5484,scaleY:0.7416,x:202.6,y:-4.9,alpha:0.8711,regX:35.1}},{t:this.instance_30,p:{scaleX:0.5484,scaleY:0.7416,x:142.35,y:-15.25,alpha:0.8711,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.4,scaleX:0.5522,scaleY:0.6416,x:290.85,y:-46.4,alpha:0.8711,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.6,scaleX:0.5484,scaleY:0.7416,x:259.2,y:1.2,alpha:0.8711}},{t:this.instance_27,p:{regX:35.8,scaleX:0.5484,scaleY:0.7416,x:239.7,y:-48.2,alpha:0.8711,regY:35.9}},{t:this.instance_26,p:{scaleX:0.5484,scaleY:0.7416,x:173.95,y:-46.75,alpha:0.8711,regX:35.6,regY:34.2}},{t:this.instance_25,p:{scaleX:0.6504,scaleY:0.8,x:194.8,y:-86.1,alpha:0.8008,regY:35}},{t:this.instance_24,p:{regX:35.5,regY:34.1,scaleX:0.6504,scaleY:0.8,x:167.3,y:-136.2,alpha:0.8008}},{t:this.instance_23,p:{regX:39.6,scaleX:0.6504,scaleY:0.8,x:123.1,y:-99.35,alpha:0.8008,regY:40}},{t:this.instance_22,p:{regY:53.4,scaleX:0.6561,scaleY:0.7162,x:308.3,y:-154.45,alpha:0.8008,regX:39.1}},{t:this.instance_21,p:{scaleX:0.6504,scaleY:0.8,x:265.2,y:-75.6,alpha:0.8008,regX:38.5}},{t:this.instance_20,p:{regX:35.6,regY:35.9,scaleX:0.6504,scaleY:0.8,x:244.85,y:-135.1,alpha:0.8008}},{t:this.instance_19,p:{scaleX:0.7523,scaleY:0.8583,x:188.8,y:-167.3,alpha:0.7305,regY:35}},{t:this.instance_18,p:{scaleX:0.7523,scaleY:0.8583,x:101.7,y:-186.1,alpha:0.7305,regY:40}},{t:this.instance_17,p:{regX:39.1,scaleX:0.7601,scaleY:0.7907,x:332.55,y:-277.8,alpha:0.7305,regY:53.5}},{t:this.instance_16,p:{scaleX:0.7523,scaleY:0.8583,x:271.05,y:-152.4,alpha:0.7305}},{t:this.instance_15,p:{regX:35.7,regY:35.9,scaleX:0.7523,scaleY:0.8583,x:247.7,y:-216.3,alpha:0.7305}},{t:this.instance_14,p:{regX:35.6,scaleX:0.7523,scaleY:0.8583,x:163.75,y:-216.75,alpha:0.7305,regY:34.2}},{t:this.instance_13,p:{scaleX:0.8543,scaleY:0.9166,x:182.75,y:-248.5,alpha:0.6602,regY:35}},{t:this.instance_12,p:{scaleX:0.8543,scaleY:0.9166,x:80.6,y:-266.85,alpha:0.6602,regY:40.1}},{t:this.instance_11,p:{scaleX:0.8641,scaleY:0.8653,x:338.6,y:-342,alpha:0.6602,regX:39.1,regY:53.5}},{t:this.instance_10,p:{scaleX:0.8543,scaleY:0.9166,x:277,y:-229.2,alpha:0.6602}},{t:this.instance_9,p:{regX:35.7,regY:35.9,scaleX:0.8543,scaleY:0.9166,x:250.55,y:-297.55,alpha:0.6602}},{t:this.instance_8,p:{regY:34.1,scaleX:0.8543,scaleY:0.9166,x:160.2,y:-297.4,alpha:0.6602,regX:35.6}},{t:this.instance_7,p:{scaleX:0.9417,scaleY:0.9666,x:177.55,y:-318.2,alpha:0.1094,regY:34.9}},{t:this.instance_6,p:{regY:40,scaleX:0.9417,scaleY:0.9666,x:49.2,y:-334.4,alpha:0.1094}},{t:this.instance_5,p:{scaleX:0.9532,scaleY:0.9292,x:341.1,y:-388.6,alpha:0.1094,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.9417,scaleY:0.9666,x:282.15,y:-295.1,alpha:0.1094}},{t:this.instance_3,p:{regX:35.7,scaleX:0.9417,scaleY:0.9666,x:252.9,y:-367.2,alpha:0.1094}},{t:this.instance_2,p:{regY:34.1,scaleX:0.9417,scaleY:0.9666,x:157.05,y:-366.45,alpha:0.1094,regX:35.5}}]},4).to({state:[{t:this.instance_37,p:{regX:35.1,regY:35,scaleX:0.463,scaleY:0.6927,x:211.65,y:80.2,alpha:0.8398}},{t:this.instance_36,p:{scaleX:0.463,scaleY:0.6927,x:161.45,y:70.3,alpha:0.8398,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.2,regY:53.6,scaleX:0.4482,scaleY:0.567,x:278.45,y:54,alpha:0.8398}},{t:this.instance_34,p:{scaleX:0.463,scaleY:0.6927,x:254.25,y:69.4,alpha:0.8398,regY:38.6,regX:38.5}},{t:this.instance_33,p:{regY:36,scaleX:0.463,scaleY:0.6927,x:232.4,y:46.8,alpha:0.8398,regX:35.6}},{t:this.instance_32,p:{regX:35.6,regY:34.2,scaleX:0.4465,scaleY:0.6833,x:182.95,y:53.2,alpha:0.8398}},{t:this.instance_31,p:{regY:35,scaleX:0.563,scaleY:0.75,x:201.3,y:-12.55,alpha:0.8594,regX:35.1}},{t:this.instance_30,p:{scaleX:0.563,scaleY:0.75,x:138.75,y:-23.25,alpha:0.8594,regY:40,regX:39.5}},{t:this.instance_29,p:{regY:53.5,scaleX:0.567,scaleY:0.6522,x:292.7,y:-56.25,alpha:0.8594,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.6,scaleX:0.563,scaleY:0.75,x:260.05,y:-5.95,alpha:0.8594}},{t:this.instance_27,p:{regX:35.7,scaleX:0.563,scaleY:0.75,x:240.65,y:-57.25,alpha:0.8594,regY:36}},{t:this.instance_26,p:{scaleX:0.563,scaleY:0.75,x:172.7,y:-56.65,alpha:0.8594,regX:35.5,regY:34.1}},{t:this.instance_25,p:{scaleX:0.6649,scaleY:0.8083,x:193.95,y:-93.8,alpha:0.7891,regY:35}},{t:this.instance_24,p:{regX:35.6,regY:34.1,scaleX:0.6649,scaleY:0.8083,x:166.85,y:-143.85,alpha:0.7891}},{t:this.instance_23,p:{regX:39.6,scaleX:0.6649,scaleY:0.8083,x:119.55,y:-107.85,alpha:0.7891,regY:40}},{t:this.instance_22,p:{regY:53.4,scaleX:0.671,scaleY:0.7268,x:311.85,y:-168.2,alpha:0.7891,regX:39.2}},{t:this.instance_21,p:{scaleX:0.6649,scaleY:0.8083,x:266,y:-82.75,alpha:0.7891,regX:38.5}},{t:this.instance_20,p:{regX:35.7,regY:36,scaleX:0.6649,scaleY:0.8083,x:245.35,y:-142.75,alpha:0.7891}},{t:this.instance_19,p:{scaleX:0.7669,scaleY:0.8666,x:187.9,y:-175.05,alpha:0.7188,regY:35}},{t:this.instance_18,p:{scaleX:0.7669,scaleY:0.8666,x:98.5,y:-194.6,alpha:0.7188,regY:40}},{t:this.instance_17,p:{regX:39.1,scaleX:0.775,scaleY:0.8014,x:336,y:-291.6,alpha:0.7188,regY:53.5}},{t:this.instance_16,p:{scaleX:0.7669,scaleY:0.8666,x:272,y:-159.55,alpha:0.7188}},{t:this.instance_15,p:{regX:35.6,regY:36,scaleX:0.7669,scaleY:0.8666,x:248.05,y:-224,alpha:0.7188}},{t:this.instance_14,p:{regX:35.6,scaleX:0.7669,scaleY:0.8666,x:163.25,y:-224.45,alpha:0.7188,regY:34.1}},{t:this.instance_13,p:{scaleX:0.8689,scaleY:0.925,x:181.9,y:-256.3,alpha:0.6484,regY:34.9}},{t:this.instance_12,p:{scaleX:0.8689,scaleY:0.925,x:80.15,y:-273.8,alpha:0.6484,regY:40}},{t:this.instance_11,p:{scaleX:0.879,scaleY:0.876,x:339,y:-345.9,alpha:0.6484,regX:39.1,regY:53.5}},{t:this.instance_10,p:{scaleX:0.8689,scaleY:0.925,x:277.9,y:-236.35,alpha:0.6484}},{t:this.instance_9,p:{regX:35.7,regY:35.9,scaleX:0.8689,scaleY:0.925,x:250.9,y:-305.3,alpha:0.6484}},{t:this.instance_8,p:{regY:34.1,scaleX:0.8689,scaleY:0.925,x:159.7,y:-305,alpha:0.6484,regX:35.6}},{t:this.instance_7,p:{scaleX:0.9563,scaleY:0.975,x:176.7,y:-325.85,alpha:0.0898,regY:35}},{t:this.instance_6,p:{regY:40,scaleX:0.9563,scaleY:0.975,x:46.75,y:-341.8,alpha:0.0898}},{t:this.instance_5,p:{scaleX:0.9681,scaleY:0.9399,x:341.6,y:-392.45,alpha:0.0898,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.9563,scaleY:0.975,x:283,y:-302.1,alpha:0.0898}},{t:this.instance_3,p:{regX:35.6,scaleX:0.9563,scaleY:0.975,x:253.25,y:-374.9,alpha:0.0898}},{t:this.instance_2,p:{regY:34.1,scaleX:0.9563,scaleY:0.975,x:156.6,y:-374,alpha:0.0898,regX:35.6}}]},4).to({state:[{t:this.instance_37,p:{regX:35.2,regY:35,scaleX:0.4803,scaleY:0.7027,x:210.4,y:68.6,alpha:0.8086}},{t:this.instance_36,p:{scaleX:0.4803,scaleY:0.7027,x:157.8,y:58.6,alpha:0.8086,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.2,regY:53.5,scaleX:0.463,scaleY:0.5776,x:280.25,y:40.25,alpha:0.8086}},{t:this.instance_34,p:{scaleX:0.4803,scaleY:0.7027,x:255.25,y:56.3,alpha:0.8086,regY:38.6,regX:38.4}},{t:this.instance_33,p:{regY:36,scaleX:0.4803,scaleY:0.7027,x:233.45,y:33.8,alpha:0.8086,regX:35.6}},{t:this.instance_32,p:{regX:35.6,regY:34.2,scaleX:0.461,scaleY:0.6916,x:181.65,y:39.45,alpha:0.8086}},{t:this.instance_31,p:{regY:35,scaleX:0.5776,scaleY:0.7583,x:199.95,y:-24.2,alpha:0.8516,regX:35.1}},{t:this.instance_30,p:{scaleX:0.5776,scaleY:0.7583,x:136.8,y:-34.9,alpha:0.8516,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.4,scaleX:0.5819,scaleY:0.6629,x:294.4,y:-70.05,alpha:0.8516,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.6,scaleX:0.5776,scaleY:0.7583,x:260.95,y:-16.9,alpha:0.8516}},{t:this.instance_27,p:{regX:35.6,scaleX:0.5776,scaleY:0.7583,x:241.6,y:-70.3,alpha:0.8516,regY:36}},{t:this.instance_26,p:{scaleX:0.5776,scaleY:0.7583,x:171.4,y:-70.35,alpha:0.8516,regX:35.6,regY:34.1}},{t:this.instance_25,p:{scaleX:0.6795,scaleY:0.8166,x:193.1,y:-105.4,alpha:0.7813,regY:35}},{t:this.instance_24,p:{regX:35.6,regY:34.1,scaleX:0.6795,scaleY:0.8167,x:166.35,y:-155.35,alpha:0.7813}},{t:this.instance_23,p:{regX:39.6,scaleX:0.6795,scaleY:0.8166,x:116.75,y:-120.2,alpha:0.7813,regY:40.1}},{t:this.instance_22,p:{regY:53.5,scaleX:0.6859,scaleY:0.7375,x:315.25,y:-185.8,alpha:0.7813,regX:39.1}},{t:this.instance_21,p:{scaleX:0.6795,scaleY:0.8166,x:266.8,y:-93.7,alpha:0.7813,regX:38.5}},{t:this.instance_20,p:{regX:35.7,regY:35.9,scaleX:0.6795,scaleY:0.8166,x:245.7,y:-154.45,alpha:0.7813}},{t:this.instance_19,p:{scaleX:0.7815,scaleY:0.875,x:187.05,y:-186.65,alpha:0.7109,regY:35}},{t:this.instance_18,p:{scaleX:0.7815,scaleY:0.875,x:95.65,y:-205.9,alpha:0.7109,regY:40}},{t:this.instance_17,p:{regX:39.2,scaleX:0.7898,scaleY:0.8121,x:336.55,y:-299.4,alpha:0.7109,regY:53.4}},{t:this.instance_16,p:{scaleX:0.7815,scaleY:0.875,x:272.8,y:-170.5,alpha:0.7109}},{t:this.instance_15,p:{regX:35.7,regY:35.9,scaleX:0.7815,scaleY:0.875,x:248.55,y:-235.7,alpha:0.7109}},{t:this.instance_14,p:{regX:35.5,scaleX:0.7815,scaleY:0.875,x:162.7,y:-235.95,alpha:0.7109,regY:34.1}},{t:this.instance_13,p:{scaleX:0.8835,scaleY:0.9333,x:181,y:-267.85,alpha:0.6406,regY:35}},{t:this.instance_12,p:{scaleX:0.8835,scaleY:0.9333,x:77.6,y:-285.15,alpha:0.6406,regY:40}},{t:this.instance_11,p:{scaleX:0.8938,scaleY:0.8866,x:339.45,y:-353.65,alpha:0.6406,regX:39.1,regY:53.5}},{t:this.instance_10,p:{scaleX:0.8835,scaleY:0.9333,x:278.75,y:-247.3,alpha:0.6406}},{t:this.instance_9,p:{regX:35.6,regY:35.9,scaleX:0.8835,scaleY:0.9333,x:251.25,y:-316.9,alpha:0.6406}},{t:this.instance_8,p:{regY:34.2,scaleX:0.8835,scaleY:0.9333,x:159.15,y:-316.4,alpha:0.6406,regX:35.6}},{t:this.instance_7,p:{scaleX:0.9708,scaleY:0.9833,x:175.85,y:-337.45,alpha:0.0703,regY:35}},{t:this.instance_6,p:{regY:40,scaleX:0.9708,scaleY:0.9833,x:44.45,y:-353.1,alpha:0.0703}},{t:this.instance_5,p:{scaleX:0.9829,scaleY:0.9506,x:342,y:-400.2,alpha:0.0703,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.9708,scaleY:0.9833,x:283.85,y:-313.15,alpha:0.0703}},{t:this.instance_3,p:{regX:35.6,scaleX:0.9708,scaleY:0.9833,x:253.65,y:-386.55,alpha:0.0703}},{t:this.instance_2,p:{regY:34.1,scaleX:0.9708,scaleY:0.9833,x:156.1,y:-385.5,alpha:0.0703,regX:35.6}}]},4).to({state:[{t:this.instance_43,p:{scaleX:0.3591,scaleY:0.6333,x:219.4,y:149.85,alpha:1}},{t:this.instance_42,p:{regX:39.6,scaleX:0.3591,scaleY:0.6333,x:183.15,y:140.4,alpha:1}},{t:this.instance_41,p:{regX:39.1,regY:53.5,scaleX:0.3591,scaleY:0.5031,x:267.85,y:136.65,alpha:1}},{t:this.instance_40,p:{regX:38.5,scaleX:0.3591,scaleY:0.6333,x:248.2,y:147.65,alpha:1}},{t:this.instance_39,p:{regX:35.6,scaleX:0.3591,scaleY:0.6333,x:226.3,y:124.8,alpha:1}},{t:this.instance_38,p:{regY:34.2,scaleX:0.3591,scaleY:0.6333,x:190.55,y:135.5,alpha:1}},{t:this.instance_37,p:{regX:35.1,regY:35,scaleX:0.4976,scaleY:0.7126,x:209.05,y:57,alpha:0.7891}},{t:this.instance_36,p:{scaleX:0.4976,scaleY:0.7126,x:155.75,y:46.85,alpha:0.7891,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.2,regY:53.5,scaleX:0.4779,scaleY:0.5883,x:282.05,y:26.45,alpha:0.7891}},{t:this.instance_34,p:{scaleX:0.4976,scaleY:0.7126,x:256.25,y:43.3,alpha:0.7891,regY:38.6,regX:38.5}},{t:this.instance_33,p:{regY:35.9,scaleX:0.4976,scaleY:0.7126,x:234.5,y:20.75,alpha:0.7891,regX:35.8}},{t:this.instance_32,p:{regX:35.6,regY:34.2,scaleX:0.4756,scaleY:0.7,x:180.4,y:25.75,alpha:0.7891}},{t:this.instance_31,p:{regY:35,scaleX:0.5921,scaleY:0.7666,x:198.7,y:-35.8,alpha:0.8398,regX:35.1}},{t:this.instance_30,p:{scaleX:0.5921,scaleY:0.7666,x:133.85,y:-46.6,alpha:0.8398,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.5,scaleX:0.5967,scaleY:0.6735,x:296.25,y:-83.75,alpha:0.8398,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.6,scaleX:0.5921,scaleY:0.7666,x:261.75,y:-27.8,alpha:0.8398}},{t:this.instance_27,p:{regX:35.7,scaleX:0.5921,scaleY:0.7666,x:242.7,y:-83.3,alpha:0.8398,regY:36}},{t:this.instance_26,p:{scaleX:0.5921,scaleY:0.7666,x:170.2,y:-84.05,alpha:0.8398,regX:35.6,regY:34.1}},{t:this.instance_25,p:{scaleX:0.6941,scaleY:0.825,x:192.25,y:-117.05,alpha:0.7695,regY:35}},{t:this.instance_24,p:{regX:35.6,regY:34.1,scaleX:0.6941,scaleY:0.825,x:165.75,y:-166.85,alpha:0.7695}},{t:this.instance_23,p:{regX:39.6,scaleX:0.6941,scaleY:0.825,x:113.7,y:-132.65,alpha:0.7695,regY:40}},{t:this.instance_22,p:{regY:53.4,scaleX:0.7007,scaleY:0.7481,x:318.8,y:-203.4,alpha:0.7695,regX:39.2}},{t:this.instance_21,p:{scaleX:0.6941,scaleY:0.825,x:267.65,y:-104.6,alpha:0.7695,regX:38.5}},{t:this.instance_20,p:{regX:35.6,regY:35.9,scaleX:0.6941,scaleY:0.825,x:246.05,y:-166.05,alpha:0.7695}},{t:this.instance_19,p:{scaleX:0.7961,scaleY:0.8833,x:186.2,y:-198.2,alpha:0.6992,regY:35}},{t:this.instance_18,p:{scaleX:0.7961,scaleY:0.8833,x:93.65,y:-217.2,alpha:0.6992,regY:40}},{t:this.instance_17,p:{regX:39.1,scaleX:0.8047,scaleY:0.8227,x:336.85,y:-307.15,alpha:0.6992,regY:53.4}},{t:this.instance_16,p:{scaleX:0.7961,scaleY:0.8833,x:273.65,y:-181.4,alpha:0.6992}},{t:this.instance_15,p:{regX:35.7,regY:35.9,scaleX:0.7961,scaleY:0.8833,x:248.9,y:-247.3,alpha:0.6992}},{t:this.instance_14,p:{regX:35.6,scaleX:0.7961,scaleY:0.8833,x:162.25,y:-247.35,alpha:0.6992,regY:34.2}},{t:this.instance_13,p:{scaleX:0.898,scaleY:0.9417,x:180.15,y:-279.4,alpha:0.6406,regY:35}},{t:this.instance_12,p:{scaleX:0.898,scaleY:0.9417,x:75,y:-296.4,alpha:0.6406,regY:40.1}},{t:this.instance_11,p:{scaleX:0.9087,scaleY:0.8973,x:339.95,y:-361.45,alpha:0.6406,regX:39.2,regY:53.5}},{t:this.instance_10,p:{scaleX:0.898,scaleY:0.9417,x:279.55,y:-258.2,alpha:0.6406}},{t:this.instance_9,p:{regX:35.6,regY:35.9,scaleX:0.898,scaleY:0.9417,x:251.65,y:-328.55,alpha:0.6406}},{t:this.instance_8,p:{regY:34.1,scaleX:0.898,scaleY:0.9417,x:158.6,y:-328,alpha:0.6406,regX:35.5}},{t:this.instance_7,p:{scaleX:0.9854,scaleY:0.9917,x:175,y:-349,alpha:0.0508,regY:35}},{t:this.instance_6,p:{regY:40,scaleX:0.9854,scaleY:0.9917,x:42,y:-364.45,alpha:0.0508}},{t:this.instance_5,p:{scaleX:0.9978,scaleY:0.9612,x:342.4,y:-408,alpha:0.0508,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.9854,scaleY:0.9917,x:284.7,y:-324.05,alpha:0.0508}},{t:this.instance_3,p:{regX:35.6,scaleX:0.9854,scaleY:0.9917,x:254.05,y:-398.15,alpha:0.0508}},{t:this.instance_2,p:{regY:34.1,scaleX:0.9854,scaleY:0.9917,x:155.55,y:-397.05,alpha:0.0508,regX:35.5}}]},4).to({state:[{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_40,p:{regX:38.4,scaleX:0.3736,scaleY:0.6416,x:249,y:136.65,alpha:0.9883}},{t:this.instance_46},{t:this.instance_45},{t:this.instance_43,p:{scaleX:0.515,scaleY:0.7225,x:207.75,y:45.45,alpha:0.7617}},{t:this.instance_42,p:{regX:39.5,scaleX:0.515,scaleY:0.7225,x:153.25,y:35.15,alpha:0.7617}},{t:this.instance_44},{t:this.instance_34,p:{scaleX:0.515,scaleY:0.7225,x:257.3,y:30.25,alpha:0.7617,regY:38.6,regX:38.5}},{t:this.instance_39,p:{regX:35.8,scaleX:0.515,scaleY:0.7225,x:235.55,y:7.75,alpha:0.7617}},{t:this.instance_38,p:{regY:34.1,scaleX:0.4902,scaleY:0.7083,x:179.05,y:12,alpha:0.7617}},{t:this.instance_37,p:{regX:35.1,regY:34.9,scaleX:0.6067,scaleY:0.775,x:197.4,y:-47.5,alpha:0.8281}},{t:this.instance_36,p:{scaleX:0.6067,scaleY:0.775,x:130.6,y:-58.3,alpha:0.8281,regX:39.6,regY:40}},{t:this.instance_41,p:{regX:39.2,regY:53.4,scaleX:0.6116,scaleY:0.6842,x:297.95,y:-97.6,alpha:0.8281}},{t:this.instance_28,p:{regX:38.4,regY:38.6,scaleX:0.6067,scaleY:0.775,x:262.6,y:-38.8,alpha:0.8281}},{t:this.instance_33,p:{regY:35.9,scaleX:0.6067,scaleY:0.775,x:243.7,y:-96.4,alpha:0.8281,regX:35.7}},{t:this.instance_32,p:{regX:35.5,regY:34.1,scaleX:0.6067,scaleY:0.775,x:168.85,y:-97.8,alpha:0.8281}},{t:this.instance_31,p:{regY:34.9,scaleX:0.7086,scaleY:0.8333,x:191.3,y:-128.7,alpha:0.7617,regX:35.1}},{t:this.instance_26,p:{scaleX:0.7086,scaleY:0.8333,x:165.25,y:-178.35,alpha:0.7617,regX:35.5,regY:34.1}},{t:this.instance_30,p:{scaleX:0.7086,scaleY:0.8333,x:111,y:-145.3,alpha:0.7617,regY:40,regX:39.6}},{t:this.instance_35,p:{regX:39.2,regY:53.5,scaleX:0.7156,scaleY:0.7588,x:322.25,y:-221,alpha:0.7617}},{t:this.instance_21,p:{scaleX:0.7086,scaleY:0.8333,x:268.55,y:-115.6,alpha:0.7617,regX:38.5}},{t:this.instance_27,p:{regX:35.7,scaleX:0.7086,scaleY:0.8333,x:246.55,y:-177.65,alpha:0.7617,regY:35.9}},{t:this.instance_25,p:{scaleX:0.8106,scaleY:0.8916,x:185.3,y:-209.85,alpha:0.6914,regY:35}},{t:this.instance_23,p:{regX:39.6,scaleX:0.8106,scaleY:0.8916,x:90.9,y:-228.55,alpha:0.6914,regY:40}},{t:this.instance_29,p:{regY:53.5,scaleX:0.8195,scaleY:0.8334,x:337.35,y:-314.8,alpha:0.6914,regX:39.1}},{t:this.instance_16,p:{scaleX:0.8106,scaleY:0.8916,x:274.45,y:-192.4,alpha:0.6914}},{t:this.instance_20,p:{regX:35.7,regY:35.9,scaleX:0.8106,scaleY:0.8916,x:249.3,y:-258.9,alpha:0.6914}},{t:this.instance_24,p:{regX:35.6,regY:34.1,scaleX:0.8106,scaleY:0.8916,x:161.75,y:-258.95,alpha:0.6914}},{t:this.instance_19,p:{scaleX:0.9126,scaleY:0.95,x:179.3,y:-291,alpha:0.5508,regY:35}},{t:this.instance_18,p:{scaleX:0.9126,scaleY:0.95,x:75,y:-304.4,alpha:0.5508,regY:40}},{t:this.instance_22,p:{regY:53.4,scaleX:0.9235,scaleY:0.9079,x:340.25,y:-369.25,alpha:0.5508,regX:39.1}},{t:this.instance_10,p:{scaleX:0.9126,scaleY:0.95,x:280.45,y:-269.2,alpha:0.5508}},{t:this.instance_15,p:{regX:35.6,regY:35.9,scaleX:0.9126,scaleY:0.95,x:252.05,y:-340.1,alpha:0.5508}},{t:this.instance_14,p:{regX:35.6,scaleX:0.9126,scaleY:0.95,x:158.15,y:-339.5,alpha:0.5508,regY:34.1}},{t:this.instance_13,p:{scaleX:1,scaleY:1,x:174.05,y:-360.7,alpha:0.0313,regY:35}},{t:this.instance_12,p:{scaleX:1,scaleY:1,x:39.6,y:-375.8,alpha:0.0313,regY:40}},{t:this.instance_17,p:{regX:39.1,scaleX:1.0126,scaleY:0.9719,x:342.9,y:-415.75,alpha:0.0313,regY:53.5}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:285.5,y:-335.1,alpha:0.0313}},{t:this.instance_9,p:{regX:35.7,regY:35.9,scaleX:1,scaleY:1,x:254.55,y:-409.8,alpha:0.0313}},{t:this.instance_8,p:{regY:34.1,scaleX:1,scaleY:1,x:155.05,y:-408.6,alpha:0.0313,regX:35.6}},{t:this.instance_11,p:{scaleX:0.8938,scaleY:0.8866,x:339.45,y:-353.65,alpha:0.6406,regX:39.1,regY:53.5}},{t:this.instance_7,p:{scaleX:0.9854,scaleY:0.9917,x:175,y:-349,alpha:0.1094,regY:35}},{t:this.instance_6,p:{regY:40,scaleX:0.9854,scaleY:0.9917,x:62.35,y:-364.45,alpha:0.1094}},{t:this.instance_5,p:{scaleX:0.9978,scaleY:0.9612,x:342.4,y:-408,alpha:0.1094,regX:39.1,regY:53.5}},{t:this.instance_3,p:{regX:35.6,scaleX:0.9854,scaleY:0.9917,x:254.05,y:-398.15,alpha:0.1094}},{t:this.instance_2,p:{regY:34.1,scaleX:0.9854,scaleY:0.9917,x:155.55,y:-397.05,alpha:0.1094,regX:35.5}}]},4).to({state:[{t:this.instance_37,p:{regX:35.1,regY:35,scaleX:0.3882,scaleY:0.65,x:216.85,y:126.7,alpha:0.9805}},{t:this.instance_36,p:{scaleX:0.3882,scaleY:0.65,x:175.9,y:117.05,alpha:0.9805,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.2,regY:53.6,scaleX:0.3888,scaleY:0.5244,x:271.35,y:109.15,alpha:0.9805}},{t:this.instance_34,p:{scaleX:0.3882,scaleY:0.65,x:249.85,y:125.8,alpha:0.9805,regY:38.7,regX:38.5}},{t:this.instance_33,p:{regY:36,scaleX:0.3882,scaleY:0.65,x:228.3,y:98.85,alpha:0.9805,regX:35.7}},{t:this.instance_32,p:{regX:35.6,regY:34.2,scaleX:0.3882,scaleY:0.65,x:188,y:108.1,alpha:0.9805}},{t:this.instance_31,p:{regY:35,scaleX:0.5323,scaleY:0.7324,x:206.5,y:33.8,alpha:0.7305,regX:35.1}},{t:this.instance_30,p:{scaleX:0.5323,scaleY:0.7324,x:149.7,y:23.5,alpha:0.7305,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.5,scaleX:0.5076,scaleY:0.6096,x:285.55,y:-1.1,alpha:0.7305,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.6,scaleX:0.5323,scaleY:0.7324,x:258.25,y:17.2,alpha:0.7305}},{t:this.instance_27,p:{regX:35.7,scaleX:0.5323,scaleY:0.7324,x:236.55,y:-5.25,alpha:0.7305,regY:35.9}},{t:this.instance_26,p:{scaleX:0.5047,scaleY:0.7166,x:177.8,y:-1.65,alpha:0.7305,regX:35.6,regY:34.2}},{t:this.instance_25,p:{scaleX:0.6213,scaleY:0.7833,x:196.5,y:-59.05,alpha:0.8203,regY:35}},{t:this.instance_23,p:{regX:39.6,scaleX:0.6213,scaleY:0.7833,x:127.85,y:-70.7,alpha:0.8203,regY:40}},{t:this.instance_22,p:{regY:53.5,scaleX:0.6264,scaleY:0.6949,x:301.4,y:-115.25,alpha:0.8203,regX:39.2}},{t:this.instance_21,p:{scaleX:0.6213,scaleY:0.7833,x:263.45,y:-49.75,alpha:0.8203,regX:38.5}},{t:this.instance_20,p:{regX:35.6,regY:35.9,scaleX:0.6213,scaleY:0.7833,x:244.05,y:-108,alpha:0.8203}},{t:this.instance_24,p:{regX:35.6,regY:34.1,scaleX:0.6213,scaleY:0.7833,x:168.35,y:-109.3,alpha:0.8203}},{t:this.instance_19,p:{scaleX:0.7232,scaleY:0.8416,x:190.5,y:-140.2,alpha:0.75,regY:35}},{t:this.instance_14,p:{regX:35.6,scaleX:0.7232,scaleY:0.8416,x:164.8,y:-189.85,alpha:0.75,regY:34.1}},{t:this.instance_18,p:{scaleX:0.7232,scaleY:0.8416,x:107.2,y:-157.45,alpha:0.75,regY:40}},{t:this.instance_17,p:{regX:39.1,scaleX:0.7304,scaleY:0.7694,x:325.65,y:-238.7,alpha:0.75,regY:53.4}},{t:this.instance_16,p:{scaleX:0.7232,scaleY:0.8416,x:269.4,y:-126.55,alpha:0.75}},{t:this.instance_15,p:{regX:35.6,regY:35.9,scaleX:0.7232,scaleY:0.8416,x:246.85,y:-189.2,alpha:0.75}},{t:this.instance_13,p:{scaleX:0.8252,scaleY:0.9,x:184.45,y:-221.4,alpha:0.6797,regY:35}},{t:this.instance_12,p:{scaleX:0.8252,scaleY:0.9,x:88.55,y:-236.7,alpha:0.6797,regY:40}},{t:this.instance_11,p:{scaleX:0.8344,scaleY:0.844,x:337.8,y:-322.6,alpha:0.6797,regX:39.2,regY:53.5}},{t:this.instance_10,p:{scaleX:0.8252,scaleY:0.9,x:275.3,y:-203.35,alpha:0.6797}},{t:this.instance_9,p:{regX:35.6,regY:35.9,scaleX:0.8252,scaleY:0.9,x:249.7,y:-270.45,alpha:0.6797}},{t:this.instance_8,p:{regY:34.1,scaleX:0.8252,scaleY:0.9,x:161.15,y:-270.45,alpha:0.6797,regX:35.5}},{t:this.instance_7,p:{scaleX:0.9271,scaleY:0.9583,x:178.45,y:-302.6,alpha:0.4609,regY:35}},{t:this.instance_6,p:{regY:40,scaleX:0.9271,scaleY:0.9583,x:73,y:-314.15,alpha:0.4609}},{t:this.instance_5,p:{scaleX:0.9384,scaleY:0.9186,x:340.75,y:-376.9,alpha:0.4609,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.9271,scaleY:0.9583,x:281.3,y:-280.15,alpha:0.4609}},{t:this.instance_3,p:{regX:35.7,scaleX:0.9271,scaleY:0.9583,x:252.55,y:-351.7,alpha:0.4609}},{t:this.instance_2,p:{regY:34.1,scaleX:0.9271,scaleY:0.9583,x:157.65,y:-351,alpha:0.4609,regX:35.6}}]},4).to({state:[{t:this.instance_37,p:{regX:35.1,regY:35,scaleX:0.4028,scaleY:0.6583,x:215.6,y:115.05,alpha:0.9688}},{t:this.instance_36,p:{scaleX:0.4028,scaleY:0.6583,x:172.35,y:105.35,alpha:0.9688,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.1,regY:53.6,scaleX:0.4036,scaleY:0.535,x:273.2,y:95.4,alpha:0.9688}},{t:this.instance_34,p:{scaleX:0.4028,scaleY:0.6583,x:250.7,y:114.75,alpha:0.9688,regY:38.6,regX:38.5}},{t:this.instance_33,p:{regY:36,scaleX:0.4028,scaleY:0.6583,x:229.4,y:85.85,alpha:0.9688,regX:35.8}},{t:this.instance_32,p:{regX:35.6,regY:34.2,scaleX:0.4028,scaleY:0.6583,x:186.75,y:94.35,alpha:0.9688}},{t:this.instance_31,p:{regY:35,scaleX:0.5496,scaleY:0.7423,x:205.2,y:22.25,alpha:0.7109,regX:35.2}},{t:this.instance_30,p:{scaleX:0.5496,scaleY:0.7423,x:147.1,y:11.8,alpha:0.7109,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.5,scaleX:0.5225,scaleY:0.6203,x:287.35,y:-14.85,alpha:0.7109,regX:39.2}},{t:this.instance_28,p:{regX:38.5,regY:38.6,scaleX:0.5496,scaleY:0.7423,x:259.25,y:4.2,alpha:0.7109}},{t:this.instance_27,p:{regX:35.8,scaleX:0.5496,scaleY:0.7423,x:237.65,y:-18.3,alpha:0.7109,regY:35.9}},{t:this.instance_26,p:{scaleX:0.5193,scaleY:0.725,x:176.55,y:-15.5,alpha:0.7109,regX:35.6,regY:34.1}},{t:this.instance_25,p:{scaleX:0.6358,scaleY:0.7916,x:195.65,y:-70.65,alpha:0.8086,regY:35}},{t:this.instance_23,p:{regX:39.6,scaleX:0.6358,scaleY:0.7916,x:125.05,y:-83,alpha:0.8086,regY:40.1}},{t:this.instance_22,p:{regY:53.5,scaleX:0.6413,scaleY:0.7055,x:304.95,y:-132.8,alpha:0.8086,regX:39.2}},{t:this.instance_21,p:{scaleX:0.6358,scaleY:0.7916,x:264.35,y:-60.8,alpha:0.8086,regX:38.5}},{t:this.instance_20,p:{regX:35.6,regY:35.9,scaleX:0.6358,scaleY:0.7916,x:244.5,y:-119.55,alpha:0.8086}},{t:this.instance_24,p:{regX:35.6,regY:34.1,scaleX:0.6358,scaleY:0.7916,x:179.8,y:-120.8,alpha:0.8086}},{t:this.instance_19,p:{scaleX:0.7378,scaleY:0.85,x:189.65,y:-151.85,alpha:0.7383,regY:35}},{t:this.instance_14,p:{regX:35.6,scaleX:0.7378,scaleY:0.85,x:164.3,y:-201.35,alpha:0.7383,regY:34.1}},{t:this.instance_18,p:{scaleX:0.7378,scaleY:0.85,x:104.9,y:-169.85,alpha:0.7383,regY:40}},{t:this.instance_17,p:{regX:39.2,scaleX:0.7453,scaleY:0.7801,x:329.2,y:-256.25,alpha:0.7383,regY:53.5}},{t:this.instance_16,p:{scaleX:0.7378,scaleY:0.85,x:270.25,y:-137.6,alpha:0.7383}},{t:this.instance_15,p:{regX:35.7,regY:35.9,scaleX:0.7378,scaleY:0.85,x:247.35,y:-200.8,alpha:0.7383}},{t:this.instance_13,p:{scaleX:0.8398,scaleY:0.9083,x:183.6,y:-233.05,alpha:0.6719,regY:35}},{t:this.instance_12,p:{scaleX:0.8398,scaleY:0.9083,x:83.4,y:-262.85,alpha:0.6719,regY:40}},{t:this.instance_11,p:{scaleX:0.8492,scaleY:0.8547,x:338.15,y:-330.4,alpha:0.6719,regX:39.1,regY:53.5}},{t:this.instance_10,p:{scaleX:0.8398,scaleY:0.9083,x:276.2,y:-214.4,alpha:0.6719}},{t:this.instance_9,p:{regX:35.6,regY:35.9,scaleX:0.8398,scaleY:0.9083,x:250.05,y:-282.05,alpha:0.6719}},{t:this.instance_8,p:{regY:34.2,scaleX:0.8398,scaleY:0.9083,x:160.7,y:-281.9,alpha:0.6719,regX:35.6}},{t:this.instance_7,p:{scaleX:0.9417,scaleY:0.9666,x:177.55,y:-314.3,alpha:0.3711,regY:34.9}},{t:this.instance_6,p:{regY:40,scaleX:0.9417,scaleY:0.9666,x:62.75,y:-330.5,alpha:0.3711}},{t:this.instance_5,p:{scaleX:0.9532,scaleY:0.9292,x:341.1,y:-384.7,alpha:0.3711,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.9417,scaleY:0.9666,x:282.15,y:-291.2,alpha:0.3711}},{t:this.instance_3,p:{regX:35.7,scaleX:0.9417,scaleY:0.9666,x:252.9,y:-363.3,alpha:0.3711}},{t:this.instance_2,p:{regY:34.1,scaleX:0.9417,scaleY:0.9666,x:157.05,y:-362.55,alpha:0.3711,regX:35.5}}]},4).to({state:[{t:this.instance_37,p:{regX:35.1,regY:35.1,scaleX:0.4173,scaleY:0.6666,x:214.3,y:103.55,alpha:0.9609}},{t:this.instance_36,p:{scaleX:0.4173,scaleY:0.6666,x:168.7,y:93.7,alpha:0.9609,regX:39.6,regY:40.1}},{t:this.instance_35,p:{regX:39.2,regY:53.5,scaleX:0.4185,scaleY:0.5457,x:274.9,y:81.55,alpha:0.9609}},{t:this.instance_34,p:{scaleX:0.4173,scaleY:0.6666,x:251.6,y:103.8,alpha:0.9609,regY:38.6,regX:38.6}},{t:this.instance_33,p:{regY:36,scaleX:0.4173,scaleY:0.6666,x:230.35,y:72.8,alpha:0.9609,regX:35.7}},{t:this.instance_32,p:{regX:35.5,regY:34.3,scaleX:0.4173,scaleY:0.6666,x:185.45,y:80.7,alpha:0.9609}},{t:this.instance_31,p:{regY:35,scaleX:0.5669,scaleY:0.7522,x:203.85,y:10.65,alpha:0.6797,regX:35.1}},{t:this.instance_30,p:{scaleX:0.5669,scaleY:0.7522,x:142.85,y:0.15,alpha:0.6797,regY:40,regX:39.6}},{t:this.instance_29,p:{regY:53.5,scaleX:0.5373,scaleY:0.6309,x:289.1,y:-28.7,alpha:0.6797,regX:39.2}},{t:this.instance_28,p:{regX:38.6,regY:38.6,scaleX:0.5669,scaleY:0.7522,x:260.35,y:-8.85,alpha:0.6797}},{t:this.instance_27,p:{regX:35.7,scaleX:0.5669,scaleY:0.7522,x:238.55,y:-31.3,alpha:0.6797,regY:35.9}},{t:this.instance_26,p:{scaleX:0.5339,scaleY:0.7333,x:175.25,y:-29.15,alpha:0.6797,regX:35.5,regY:34.1}},{t:this.instance_25,p:{scaleX:0.6504,scaleY:0.8,x:194.8,y:-82.2,alpha:0.8008,regY:35}},{t:this.instance_23,p:{regX:39.6,scaleX:0.6504,scaleY:0.8,x:122.3,y:-94.45,alpha:0.8008,regY:40}},{t:this.instance_22,p:{regY:53.4,scaleX:0.6561,scaleY:0.7162,x:308.3,y:-150.55,alpha:0.8008,regX:39.1}},{t:this.instance_21,p:{scaleX:0.6504,scaleY:0.8,x:265.2,y:-71.7,alpha:0.8008,regX:38.5}},{t:this.instance_20,p:{regX:35.6,regY:35.9,scaleX:0.6504,scaleY:0.8,x:244.85,y:-131.2,alpha:0.8008}},{t:this.instance_24,p:{regX:35.5,regY:34.1,scaleX:0.6504,scaleY:0.8,x:167.3,y:-132.3,alpha:0.8008}},{t:this.instance_19,p:{scaleX:0.7523,scaleY:0.8583,x:188.8,y:-163.4,alpha:0.7305,regY:35}},{t:this.instance_14,p:{regX:35.6,scaleX:0.7523,scaleY:0.8583,x:163.75,y:-212.85,alpha:0.7305,regY:34.2}},{t:this.instance_18,p:{scaleX:0.7523,scaleY:0.8583,x:101.95,y:-182.2,alpha:0.7305,regY:40}},{t:this.instance_17,p:{regX:39.1,scaleX:0.7601,scaleY:0.7907,x:332.55,y:-273.9,alpha:0.7305,regY:53.5}},{t:this.instance_16,p:{scaleX:0.7523,scaleY:0.8583,x:271.05,y:-148.5,alpha:0.7305}},{t:this.instance_15,p:{regX:35.7,regY:35.9,scaleX:0.7523,scaleY:0.8583,x:247.7,y:-212.4,alpha:0.7305}},{t:this.instance_13,p:{scaleX:0.8543,scaleY:0.9166,x:182.75,y:-244.6,alpha:0.6602,regY:35}},{t:this.instance_11,p:{scaleX:0.8641,scaleY:0.8653,x:338.6,y:-338.1,alpha:0.6602,regX:39.1,regY:53.5}},{t:this.instance_10,p:{scaleX:0.8543,scaleY:0.9166,x:277,y:-225.3,alpha:0.6602}},{t:this.instance_9,p:{regX:35.7,regY:35.9,scaleX:0.8543,scaleY:0.9166,x:250.55,y:-293.65,alpha:0.6602}},{t:this.instance_8,p:{regY:34.1,scaleX:0.8543,scaleY:0.9166,x:160.2,y:-293.5,alpha:0.6602,regX:35.6}},{t:this.instance_7,p:{scaleX:0.9563,scaleY:0.975,x:176.7,y:-325.85,alpha:0.2891,regY:35}},{t:this.instance_12,p:{scaleX:0.9563,scaleY:0.975,x:65.4,y:-341.8,alpha:0.2891,regY:40}},{t:this.instance_5,p:{scaleX:0.9681,scaleY:0.9399,x:341.6,y:-392.45,alpha:0.2891,regX:39.1,regY:53.5}},{t:this.instance_4,p:{scaleX:0.9563,scaleY:0.975,x:283,y:-302.1,alpha:0.2891}},{t:this.instance_3,p:{regX:35.6,scaleX:0.9563,scaleY:0.975,x:253.25,y:-374.9,alpha:0.2891}},{t:this.instance_2,p:{regY:34.1,scaleX:0.9563,scaleY:0.975,x:156.6,y:-374,alpha:0.2891,regX:35.6}},{t:this.instance_6,p:{regY:40,scaleX:0.8398,scaleY:0.9083,x:81.05,y:-271.55,alpha:0.6719}}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-467.7,383.3,639.8);


(lib.Símbolo108 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguZgiVQCfgCBmgaQAngKA+gVIBkgiQBFgVBdgTQA3gLBugTQFIg8HaiIIH2iSICfgVQB/gRBFgLQCSgYCogpQCEggCwg0ICxgzIJjhpIBFAnQAvAZBGAeIB3AyQBhApBRAuIAdAjQBJBfAeBaIAWBIQAPApAUAYQAjApBEAPQAsAKBQABQApAAARAMQANAKAHATQAFAMAFAYQAPBFAeBSQASAxApBhIBYDTQAQAmALAUQARAfAUAUQAVATAfANIAzDJIDBMYMAIeAhlIi0ABQAHBXgpBMIgoBAQgYAlgJAdQgHAZgGALQgLATgQgCQAGAwgSAwQgSAvglAfQABAggtApQgwAtgFAcQgCAIABAWQABATgDAKQgCAHgFAHQjDgIjDAnQhTARiDAlQipAvgsALQh2AeinAdIkeAvQinAdjQAsQh+Aaj2A3Qs5C5wJDpIh5Adg");
	mask.setTransform(1075.0375,334.6375);

	// Capa_3
	this.instance = new lib.Símbolo1_2();
	this.instance.setTransform(1236.1,613.4,0.7289,1.2801,-14.9974,0,0,225.8,137.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.ikNode_61 = new lib.Símbolo106();
	this.ikNode_61.name = "ikNode_61";
	this.ikNode_61.setTransform(492,324.1,0.5,0.5);

	this.instance_1 = new lib.manoizquierdaCelular();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.ikNode_61}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo108, new cjs.Rectangle(0,0,1363,1143), null);


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
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(169).call(this.frame_169).wait(1));

	// mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A48iJMAqsgKOIHNOhMgqrAKOg");
	var mask_graphics_64 = new cjs.Graphics().p("A49h6MAqmgKoIHWOeMgqmAKmg");
	var mask_graphics_121 = new cjs.Graphics().p("A34jdMAqkgJiIFNQeMgqjAJhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:264.325,y:275.975}).wait(64).to({graphics:mask_graphics_64,x:264.3,y:277}).wait(57).to({graphics:mask_graphics_121,x:264.25,y:285.7}).wait(49));

	// Capa_5
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(252.95,344.95,1,1,0,0,0,112.2,83.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:278.9,y:343.85},27).to({x:265.05,y:294.5},37).to({y:294.2},31).to({x:254.7,y:253.5},26).wait(49));

	// Esqueleto_87
	this.ikNode_57 = new lib.Símbolo105();
	this.ikNode_57.name = "ikNode_57";
	this.ikNode_57.setTransform(865.2,556.05,0.4969,0.4969,0.7724,0,0,915.8,713.4);

	this.ikNode_64 = new lib.Símbolo108();
	this.ikNode_64.name = "ikNode_64";
	this.ikNode_64.setTransform(85,492.5,0.4994,0.4994,0.7879,0,0,168.8,998.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4994,scaleY:0.4994,rotation:0.7879,x:85,y:492.5,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.7724,x:865.2,y:556.05}}]}).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.7827,x:85.85,y:492.3,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.5,rotation:0.7549,x:864.9,y:558.65}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.7792,x:86.8,y:492.25,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.725,x:863.85,y:560.5}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.7774,x:87.7,y:492.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.695,x:862.8,y:562.45}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7739,x:88.65,y:492.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.5,rotation:0.6651,x:861.85,y:564.5}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7722,x:89.6,y:492.25,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.637,x:860.75,y:566.45}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7687,x:90.45,y:492.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.6071,x:859.7,y:568.4}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7669,x:91.4,y:492.15,regX:168.9}},{t:this.ikNode_57,p:{regX:915.9,regY:713.5,rotation:0.5771,x:858.75,y:570.4}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7634,x:92.25,y:492,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5472,x:857.65,y:572.4}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7617,x:93.2,y:491.95,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5173,x:856.55,y:574.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7582,x:94.1,y:491.85,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4874,x:855.5,y:576.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7564,x:95,y:491.8,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.4575,x:854.4,y:578.4}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7529,x:95.95,y:491.75,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.4276,x:853.35,y:580.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7512,x:96.9,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.3994,x:852.3,y:582.25}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7477,x:97.75,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.3695,x:851.15,y:584.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7459,x:98.7,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.3396,x:850.1,y:586.25}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7424,x:99.6,y:491.6,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.3097,x:849,y:588.15}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7406,x:100.5,y:491.55,regX:168.8}},{t:this.ikNode_57,p:{regX:915.7,regY:713.5,rotation:0.2798,x:847.8,y:590.15}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7371,x:101.45,y:491.5,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.2499,x:846.75,y:592.1}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7354,x:102.35,y:491.45,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.2199,x:845.65,y:594.05}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7319,x:103.3,y:491.3,regX:168.9}},{t:this.ikNode_57,p:{regX:915.7,regY:713.5,rotation:0.19,x:844.45,y:596.05}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7301,x:104.15,y:491.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.1601,x:843.35,y:597.95}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7266,x:105.15,y:491.15,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.132,x:842.25,y:599.95}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7249,x:106,y:491.1,regX:168.8}},{t:this.ikNode_57,p:{regX:915.7,regY:713.5,rotation:0.1021,x:841,y:601.95}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7214,x:106.95,y:491.05,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.0721,x:839.9,y:603.9}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7196,x:107.85,y:491,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.0422,x:838.75,y:605.8}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.7179,x:108.75,y:490.95,regX:168.8}},{t:this.ikNode_57,p:{regX:915.7,regY:713.5,rotation:0.0123,x:837.55,y:607.85}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7144,x:109.65,y:490.95,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.6,rotation:-0.0088,x:836.35,y:609.85}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7091,x:109.7,y:490.95,regX:168.9}},{t:this.ikNode_57,p:{regX:915.9,regY:713.5,rotation:0,x:836.25,y:608.65}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.7039,x:109.7,y:491,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.0106,x:835.9,y:607.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.6986,x:109.6,y:491,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.0246,x:835.65,y:606.55}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.6934,x:109.65,y:490.95,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.0387,x:835.35,y:605.45}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.6881,x:109.65,y:491,regX:168.8}},{t:this.ikNode_57,p:{regX:915.7,regY:713.5,rotation:0.0528,x:835.05,y:604.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.6846,x:109.6,y:491.05,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.0669,x:834.85,y:603.25}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.6794,x:109.6,y:491.1,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.0809,x:834.55,y:602.2}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.6741,x:109.6,y:491.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.095,x:834.3,y:601.1}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.6689,x:109.65,y:491.15,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.1091,x:834.05,y:600}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.6636,x:109.65,y:491.15,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.6,rotation:0.1232,x:833.75,y:598.95}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.6584,x:109.6,y:491.1,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.1372,x:833.45,y:597.8}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.6531,x:109.55,y:491.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.1513,x:833.25,y:596.7}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.6496,x:109.55,y:491.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.1654,x:833,y:595.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.6444,x:109.55,y:491.25,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.6,rotation:0.1795,x:832.65,y:594.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.6391,x:109.55,y:491.25,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.1936,x:832.35,y:593.45}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.6339,x:109.55,y:491.3,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.2076,x:832.05,y:592.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.6286,x:109.55,y:491.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.2217,x:831.8,y:591.25}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.6233,x:109.6,y:491.2,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.2358,x:831.5,y:590.15}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.6181,x:109.55,y:491.25,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.2499,x:831.2,y:589.1}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.6128,x:109.5,y:491.3,regX:168.8}},{t:this.ikNode_57,p:{regX:915.7,regY:713.5,rotation:0.2639,x:830.85,y:588}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.6076,x:109.5,y:491.3,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.278,x:830.65,y:586.9}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.6023,x:109.5,y:491.4,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.2921,x:830.35,y:585.85}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5971,x:109.5,y:491.4,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.3062,x:830.05,y:584.8}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5918,x:109.5,y:491.3,regX:168.8}},{t:this.ikNode_57,p:{regX:915.7,regY:713.5,rotation:0.3202,x:829.7,y:583.7}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5866,x:109.5,y:491.4,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.3343,x:829.5,y:582.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5831,x:109.55,y:491.4,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.3484,x:829.15,y:581.5}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5778,x:109.5,y:491.45,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.6,rotation:0.3625,x:828.9,y:580.45}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5726,x:109.5,y:491.45,regX:168.8}},{t:this.ikNode_57,p:{regX:915.7,regY:713.5,rotation:0.3765,x:828.6,y:579.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5673,x:109.45,y:491.55,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.3906,x:828.3,y:578.2}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.562,x:109.5,y:491.5,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.4047,x:827.95,y:577.1}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5568,x:109.45,y:491.45,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.6,rotation:0.4188,x:827.65,y:576.05}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5515,x:109.45,y:491.5,regX:168.8}},{t:this.ikNode_57,p:{regX:915.7,regY:713.5,rotation:0.4329,x:827.3,y:574.9}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5463,x:109.4,y:491.55,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4469,x:827.05,y:573.8}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.541,x:109.4,y:491.55,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.461,x:826.75,y:572.7}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5358,x:109.4,y:491.6,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4751,x:826.4,y:571.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5305,x:109.4,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.4892,x:826.15,y:570.55}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5253,x:109.45,y:491.55,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5032,x:825.8,y:569.45}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.527,x:109.4,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.4,rotation:0.505,x:825.6,y:570.95}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5288,x:109.4,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5068,x:825.25,y:572.5}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5305,x:109.4,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5085,x:825,y:574}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5305,x:109.4,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5103,x:824.65,y:575.5}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5323,x:109.4,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.512,x:824.4,y:577}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.534,x:109.4,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5138,x:824.05,y:578.65}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.534,x:109.4,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5156,x:823.8,y:580.05}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5358,x:109.4,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5173,x:823.5,y:581.55}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5375,x:109.35,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5191,x:823.2,y:583.05}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5393,x:109.35,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5226,x:822.9,y:584.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5393,x:109.4,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5244,x:822.6,y:586.1}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.541,x:109.4,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5261,x:822.3,y:587.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5428,x:109.45,y:491.65,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5279,x:821.95,y:589.2}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5428,x:109.45,y:491.65,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5296,x:821.6,y:590.65}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5445,x:109.4,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5314,x:821.3,y:592.15}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5463,x:109.35,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5332,x:820.95,y:593.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.548,x:109.4,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5349,x:820.65,y:595.25}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.548,x:109.4,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.4,rotation:0.5367,x:820.4,y:596.7}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5498,x:109.35,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5384,x:819.95,y:598.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5515,x:109.35,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5402,x:819.7,y:599.85}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5515,x:109.35,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.542,x:819.3,y:601.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5533,x:109.4,y:491.6,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5437,x:818.95,y:602.7}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.555,x:109.35,y:491.6,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.5,rotation:0.5455,x:818.7,y:604.25}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.555,x:109.35,y:491.6,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5472,x:818.3,y:605.8}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5568,x:109.35,y:491.6,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.549,x:817.9,y:607.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5585,x:109.35,y:491.6,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5508,x:817.55,y:608.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5603,x:109.45,y:491.6,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5525,x:817.2,y:610.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5603,x:109.45,y:491.6,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5543,x:816.85,y:611.8}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.562,x:109.4,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.556,x:816.45,y:613.25}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5638,x:109.35,y:491.75,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5578,x:816.1,y:614.85}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5638,x:109.35,y:491.75,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5595,x:815.75,y:616.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.562,x:109.4,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5578,x:815.5,y:614.65}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5603,x:109.4,y:491.65,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5543,x:815.35,y:612.95}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5585,x:109.3,y:491.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5508,x:815.1,y:611.2}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5568,x:109.25,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5472,x:814.9,y:609.55}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.555,x:109.25,y:491.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5437,x:814.7,y:607.8}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5533,x:109.25,y:491.75,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5402,x:814.5,y:606.2}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5515,x:109.2,y:491.8,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.4,rotation:0.5367,x:814.3,y:604.4}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5498,x:109.2,y:491.85,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5349,x:814,y:602.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.548,x:109.2,y:491.85,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5314,x:813.75,y:601}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5463,x:109.15,y:491.9,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5279,x:813.55,y:599.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5445,x:109.15,y:491.9,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5244,x:813.35,y:597.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.541,x:109.15,y:491.95,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.5,rotation:0.5208,x:813.1,y:595.95}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5393,x:109.1,y:491.95,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5173,x:812.8,y:594.15}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5375,x:109.05,y:492,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5138,x:812.55,y:592.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5358,x:109.05,y:492,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.512,x:812.3,y:590.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.534,x:109.05,y:492.1,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5085,x:812.05,y:589.1}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5323,x:109.05,y:492.1,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.4,rotation:0.505,x:811.85,y:587.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5305,x:109,y:492.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5015,x:811.5,y:585.65}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5288,x:108.95,y:492.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.498,x:811.2,y:583.95}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.527,x:108.95,y:492.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.4944,x:811,y:582.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5253,x:109,y:492,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4909,x:810.65,y:580.55}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5235,x:108.9,y:492.05,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.4892,x:810.4,y:578.85}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5218,x:108.9,y:492.05,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4857,x:810.1,y:577.15}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.52,x:108.95,y:492.1,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.4821,x:809.8,y:575.5}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5165,x:108.85,y:492.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4786,x:809.6,y:573.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5148,x:108.85,y:492.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4751,x:809.2,y:571.95}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5183,x:108.85,y:492.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4786,x:809.85,y:572.05}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.52,x:108.9,y:492.1,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4839,x:810.3,y:572.05}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5218,x:108.85,y:492.1,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4874,x:810.85,y:572.05}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5253,x:108.9,y:492.1,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4909,x:811.35,y:572.1}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.527,x:108.85,y:492.25,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.4944,x:812,y:572.2}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5288,x:108.85,y:492.25,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.4997,x:812.45,y:572.2}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5323,x:108.9,y:492.25,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5032,x:813,y:572.2}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.534,x:108.85,y:492.25,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5068,x:813.6,y:572.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5358,x:108.85,y:492.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5103,x:814.1,y:572.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5375,x:108.85,y:492.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5156,x:814.6,y:572.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.541,x:108.85,y:492.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5191,x:815.2,y:572.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5428,x:108.95,y:492.2,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5226,x:815.75,y:572.4}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5445,x:108.9,y:492.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5261,x:816.3,y:572.55}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.548,x:108.9,y:492.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5314,x:816.75,y:572.45}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5498,x:108.85,y:492.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5349,x:817.35,y:572.55}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5515,x:108.9,y:492.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5384,x:817.85,y:572.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.555,x:108.85,y:492.1,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.542,x:818.4,y:572.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5568,x:108.85,y:492.1,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5472,x:819,y:572.65}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5585,x:108.9,y:492.1,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5508,x:819.5,y:572.6}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5603,x:108.95,y:492.1,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5543,x:820.05,y:572.7}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5638,x:108.9,y:492.25,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5578,x:820.6,y:572.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5656,x:108.95,y:492.25,regX:168.9}},{t:this.ikNode_57,p:{regX:915.9,regY:713.4,rotation:0.5613,x:821.2,y:572.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5673,x:108.9,y:492.25,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5648,x:821.65,y:572.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5708,x:108.9,y:492.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5701,x:822.15,y:572.85}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5691,x:109,y:492.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5683,x:824.15,y:572.1}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5691,x:109.05,y:492.15,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5683,x:826.05,y:571.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5673,x:109.15,y:492.05,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5683,x:827.95,y:570.65}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5673,x:109.25,y:492,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5666,x:829.85,y:569.95}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5656,x:109.4,y:491.95,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5666,x:831.75,y:569.25}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5656,x:109.5,y:491.85,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5666,x:833.65,y:568.5}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5638,x:109.5,y:491.8,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5648,x:835.55,y:567.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.5638,x:109.6,y:491.75,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5648,x:837.45,y:567.05}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.562,x:109.75,y:491.6,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5648,x:839.35,y:566.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.4,scaleX:0.4993,scaleY:0.4993,rotation:0.562,x:109.8,y:491.55,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5631,x:841.3,y:565.55}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5603,x:109.95,y:491.4,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5631,x:843.2,y:564.85}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5603,x:110,y:491.3,regX:168.9}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5631,x:845.1,y:564.1}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5603,x:110.1,y:491.25,regX:168.9}},{t:this.ikNode_57,p:{regX:915.9,regY:713.4,rotation:0.5613,x:847.05,y:563.45}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5585,x:110.15,y:491.2,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.4,rotation:0.5613,x:848.95,y:562.75}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5585,x:110.2,y:491.1,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.4,rotation:0.5613,x:850.8,y:562}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5568,x:110.3,y:491.05,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.4,rotation:0.5613,x:852.7,y:561.3}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5568,x:110.35,y:491,regX:168.8}},{t:this.ikNode_57,p:{regX:915.9,regY:713.4,rotation:0.5613,x:854.6,y:560.55}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.555,x:110.45,y:490.9,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5595,x:856.45,y:559.8}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.555,x:110.5,y:490.85,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5595,x:858.35,y:559.1}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5533,x:110.65,y:490.8,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.5595,x:860.2,y:558.35}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.2,scaleX:0.4993,scaleY:0.4993,rotation:0.5533,x:110.75,y:490.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5578,x:862.1,y:557.7}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5515,x:110.8,y:490.7,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5578,x:864,y:557}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5515,x:110.9,y:490.65,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.5,rotation:0.5578,x:865.9,y:556.25}}]},1).to({state:[{t:this.ikNode_64,p:{regY:998.3,scaleX:0.4993,scaleY:0.4993,rotation:0.5498,x:110.95,y:490.55,regX:168.8}},{t:this.ikNode_57,p:{regX:915.8,regY:713.4,rotation:0.556,x:867.7,y:555.45}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-23.5,1010.5,612.5);


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

	this.actionFrames = [0,1,2,3,4,5,6,7];
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
		window.open('../Escena_2', '_self');
		});
		
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.nextEscena.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('../Escena_4', '_self');
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
		 
		 
		this.next.alpha = 1;
		this.next.mouseEnabled = true;
		
		this.prev.alpha = 1;
		this.prev.mouseEnabled = true;
		    	
		
		var _this = this;
		_this.pata_mc.gotoAndStop(0);
	}
	this.frame_6 = function() {
		this.playSound("BGM", "voice", true, {
			volume: 0.2,
			loop: -1
		});
		
		var _this = this
		_this.pata_mc.gotoAndStop(0);
		
		_this.btnInteraccion.on('click', function () {
			_this.pata_mc.gotoAndStop(0);
			_this.pata_mc.play();
			_this.playSound("Voice4", "voice", true);
		
		 
		
		});
		
		
		this.next.alpha = 0.5;
		this.next.mouseEnabled = false;
	}
	this.frame_7 = function() {
		this.playSound("BGM", "voice", true, { volume: 0.2, loop: -1 });
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.nextEscenaFinal.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('../Escena_4', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// interacción
	this.btnInteraccion = new lib.btnInteractivo();
	this.btnInteraccion.name = "btnInteraccion";
	this.btnInteraccion.setTransform(800.6,346.15,1,1,0,0,0,-21.1,7.5);
	new cjs.ButtonHelper(this.btnInteraccion, 0, 1, 2, false, new lib.btnInteractivo(), 3);

	this.nextEscenaFinal = new lib.nextscene();
	this.nextEscenaFinal.name = "nextEscenaFinal";
	this.nextEscenaFinal.setTransform(235.1,589.6);
	new cjs.ButtonHelper(this.nextEscenaFinal, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnInteraccion,p:{x:800.6,y:346.15}}]},6).to({state:[{t:this.btnInteraccion,p:{x:801.6,y:347.15}},{t:this.nextEscenaFinal}]},1).wait(1));

	// textos copia
	this.instance = new lib.text1();
	this.instance.setTransform(2,506,0.5,0.5);

	this.instance_1 = new lib.text3();
	this.instance_1.setTransform(2,506,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).wait(4));

	// textos
	this.instance_2 = new lib.text2();
	this.instance_2.setTransform(2,533,0.5,0.5);

	this.instance_3 = new lib.ModEs3Linea4();
	this.instance_3.setTransform(2,533,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},3).to({state:[]},1).to({state:[{t:this.instance_3}]},1).wait(3));

	// Capa_1
	this.prevEscena = new lib.Símbolo3();
	this.prevEscena.name = "prevEscena";
	this.prevEscena.setTransform(209.8,609.6,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.prevEscena, 0, 1, 1);

	this.nextEscena = new lib.Símbolo2_1();
	this.nextEscena.name = "nextEscena";
	this.nextEscena.setTransform(255.3,609.6,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.nextEscena, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AwgkDIAAIHAAbkDIAAIHAQhkDIAAIH");
	this.shape.setTransform(176.35,604.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(2,1,1).p("AAbkDIAAIHAQhkDIAAIHAwgkDIAAIH");
	this.shape_1.setTransform(176.35,604.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.nextEscena},{t:this.prevEscena}]}).to({state:[{t:this.shape_1},{t:this.prevEscena}]},7).wait(1));

	// btns_media
	this.next = new lib.Símbolo4();
	this.next.name = "next";
	this.next.setTransform(149.1,609.2,1,1,0,0,0,20,20.2);
	new cjs.ButtonHelper(this.next, 0, 1, 1);

	this.prev = new lib.Símbolo1_1();
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pressToStart},{t:this.muteMC,p:{x:312.5}},{t:this.unmuteMC,p:{x:312.5}},{t:this.prev,p:{x:102.3}},{t:this.next,p:{x:149.1}}]}).to({state:[{t:this.playaudio},{t:this.muteMC,p:{x:312.35}},{t:this.unmuteMC,p:{x:312.35}},{t:this.pause},{t:this.prev,p:{x:102.15}},{t:this.next,p:{x:148.95}}]},1).to({state:[{t:this.playaudio},{t:this.muteMC,p:{x:312.35}},{t:this.unmuteMC,p:{x:312.35}},{t:this.pause},{t:this.prev,p:{x:102.15}},{t:this.next,p:{x:148.95}}]},6).wait(1));

	// ondo blanco
	this.instance_4 = new lib.mc_fondotexto();
	this.instance_4.setTransform(708.15,521.7,1,1,0,0,0,594,151.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:219.8,scaleX:1.0034,x:596,y:535.75,alpha:0.4299},0).wait(1).to({regY:151.2,x:596.05,y:467.2,alpha:1},0).wait(1).to({regY:219.8,x:596,y:535.8},0).wait(5));

	// mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhcnAsTMAAAhYSMC5OAAAMAAABYSg");
	mask.setTransform(592.75,283.5203);

	// patos
	this.pata_mc = new lib.pata_mc();
	this.pata_mc.name = "pata_mc";
	this.pata_mc.setTransform(515.05,295.8,1,1,0,0,0,340.8,285.8);

	var maskedShapeInstanceList = [this.pata_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.pata_mc).wait(8));

	// fondo
	this.instance_5 = new lib.fondo1();
	this.instance_5.setTransform(0,0,0.505,0.5013);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(596,324.5,706.2,307.20000000000005);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1192,
	height: 649,
	fps: 25,
	color: "#235594",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_P_1.png?1666762622987", id:"index_atlas_P_1"},
		{src:"images/index_atlas_P_2.png?1666762622987", id:"index_atlas_P_2"},
		{src:"images/index_atlas_P_3.png?1666762622988", id:"index_atlas_P_3"},
		{src:"sounds/Voice0.mp3?1666762623272", id:"Voice0"},
		{src:"sounds/Voice1.mp3?1666762623272", id:"Voice1"},
		{src:"sounds/Voice2.mp3?1666762623272", id:"Voice2"},
		{src:"sounds/Voice3.mp3?1666762623272", id:"Voice3"},
		{src:"sounds/Voice4.mp3?1666762623272", id:"Voice4"},
		{src:"sounds/BGM.mp3?1666762623272", id:"BGM"}
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