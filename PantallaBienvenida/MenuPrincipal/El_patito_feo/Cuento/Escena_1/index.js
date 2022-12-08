(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[2551,0,80,80],[2633,0,80,80],[2303,0,81,80],[2386,0,81,80],[2220,0,81,81],[2469,0,80,81],[2796,0,79,79],[2715,0,79,80],[1580,0,281,158],[1221,0,357,246],[2111,0,107,101],[0,587,2376,129],[0,0,717,585],[719,0,500,500],[2796,81,69,60],[2303,82,20,42],[2867,81,16,34],[0,718,2376,71],[0,791,2376,71],[1863,0,246,118]]},
		{name:"index_atlas_NP_1", frames: [[0,0,2374,1136]]}
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



(lib.AlaPata = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cuadrodedialogo = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Flor = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.fondoGUion = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mamaPata = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.mano2 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Onda11 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.onda2 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Onda311 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Paisajedefondo = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Text1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Text2 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.textodialogo = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(19);
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

}).prototype = getMCSymbolPrototype(lib.texto2mc, new cjs.Rectangle(-972,26,1188,35.5), null);


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

	// Capa_3
	this.instance = new lib.mano2();
	this.instance.setTransform(4.2,45.9,0.157,0.157,-54.8118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({x:-17.55,y:39.15},0).to({_off:true},20).wait(1));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(6.5,1,1).p("ACtAAQAABIgzAzQgyAyhIAAQhHAAgzgyQgzgzAAhIQAAhGAzg0QAzgyBHAAQBIAAAyAyQAzA0AABGg");
	this.shape.setTransform(20.3,19.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},20).wait(22));

	// Capa_1
	this.instance_1 = new lib._3btncambioEscenaRight();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-25,131.1,116.2);


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
p.nominalBounds = new cjs.Rectangle(-70.2,-39.5,140.5,79);


(lib.Interpolación11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Onda11();
	this.instance.setTransform(-16.5,13.45,0.5,0.4071,180);

	this.instance_1 = new lib.onda2();
	this.instance_1.setTransform(-51,8,0.5,0.3571,180);

	this.instance_2 = new lib.Onda311();
	this.instance_2.setTransform(-60,7,0.5,0.4412,180);

	this.instance_3 = new lib.Onda11();
	this.instance_3.setTransform(17,-12,0.5,0.4247);

	this.instance_4 = new lib.onda2();
	this.instance_4.setTransform(49.5,-9,0.5,0.5);

	this.instance_5 = new lib.Onda311();
	this.instance_5.setTransform(59.5,-7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-12,135.5,25.5);


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
p.nominalBounds = new cjs.Rectangle(-4,-7.8,8,15.7);


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
	this.instance = new lib.textodialogo();
	this.instance.setTransform(-2.75,-3.75,0.0224,0.0638);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-3.7,5.5,7.5);


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
	this.instance = new lib.Flor();
	this.instance.setTransform(-26.75,-25.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-25.2,53.5,50.5);


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
	this.instance = new lib.Flor();
	this.instance.setTransform(-26.75,-25.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-25.2,53.5,50.5);


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
	this.instance = new lib.Flor();
	this.instance.setTransform(-26.75,-25.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-25.2,53.5,50.5);


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
p.nominalBounds = new cjs.Rectangle(-594,-17.7,1188,35.5);


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

}).prototype = getMCSymbolPrototype(lib.texto1mc, new cjs.Rectangle(-775,12,1188,35.5), null);


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
p.nominalBounds = new cjs.Rectangle(-0.3,-18.2,113.89999999999999,109.4);


(lib.lago = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Onda311();
	this.instance.setTransform(-37,25,0.111,0.1108);

	this.instance_1 = new lib.Onda311();
	this.instance_1.setTransform(-42.2,28.75,0.111,0.1108,180);

	this.instance_2 = new lib.Onda11();
	this.instance_2.setTransform(-42.8,30.1,0.111,0.1108,180);

	this.instance_3 = new lib.onda2();
	this.instance_3.setTransform(-50.7,29.85,0.111,0.1108,180);

	this.instance_4 = new lib.Onda311();
	this.instance_4.setTransform(-54.2,29.75,0.111,0.1108,180);

	this.instance_5 = new lib.Onda11();
	this.instance_5.setTransform(-35.8,23.85,0.111,0.1108);

	this.instance_6 = new lib.onda2();
	this.instance_6.setTransform(-28.5,25,0.111,0.1108);

	this.instance_7 = new lib.Onda311();
	this.instance_7.setTransform(-26,25,0.111,0.1108);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.439)").s().p("AgCACIgBgBIgBgBIACAAIACgBIADAAIACABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgEABIgCAAg");
	this.shape.setTransform(-39.7556,26.7375);

	this.instance_8 = new lib.Interpolación11("synched",0);
	this.instance_8.setTransform(-39.5,27,0.2344,0.2339);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_7},{t:this.instance_6,p:{scaleX:0.111,scaleY:0.1108,x:-28.5,y:25}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3,p:{scaleX:0.111,scaleY:0.1108,x:-50.7,y:29.85}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.111,scaleY:0.1108,rotation:180,x:-42.2,y:28.75}},{t:this.instance,p:{scaleX:0.111,scaleY:0.1108,rotation:0,x:-37,y:25}}]}).to({state:[{t:this.instance_8}]},7).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.3704,scaleY:0.3698,rotation:0,x:4.7,y:21.7}},{t:this.instance_6,p:{scaleX:0.3704,scaleY:0.3698,x:-2.65,y:20.2}},{t:this.instance,p:{scaleX:0.3704,scaleY:0.3698,rotation:180,x:-83.4,y:34.25}},{t:this.instance_3,p:{scaleX:0.3704,scaleY:0.3698,x:-76.75,y:36.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.3704,scaleY:0.3698,rotation:0,x:4.7,y:21.7}},{t:this.instance_6,p:{scaleX:0.3704,scaleY:0.3698,x:-2.65,y:20.2}},{t:this.instance,p:{scaleX:0.3704,scaleY:0.2904,rotation:180,x:-83.05,y:32.85}},{t:this.instance_3,p:{scaleX:0.3704,scaleY:0.3698,x:-76.75,y:36.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.3704,scaleY:0.3698,rotation:0,x:4.7,y:21.7}},{t:this.instance_6,p:{scaleX:0.3704,scaleY:0.3698,x:-2.65,y:20.2}},{t:this.instance,p:{scaleX:0.3704,scaleY:0.3698,rotation:180,x:-83.4,y:34.25}},{t:this.instance_3,p:{scaleX:0.3704,scaleY:0.3698,x:-76.75,y:36.5}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.3854,scaleY:0.4065,rotation:0,x:9,y:21}},{t:this.instance,p:{scaleX:0.3854,scaleY:0.4065,rotation:180,x:-87.85,y:33.8}}]},3).to({state:[{t:this.instance_1,p:{scaleX:0.3854,scaleY:0.4065,rotation:0,x:10,y:21}},{t:this.instance,p:{scaleX:0.3854,scaleY:0.4065,rotation:180,x:-89.85,y:33.8}}]},3).to({state:[]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).to({scaleX:0.2967,scaleY:0.2956},5).to({regX:-0.2,scaleX:0.3702,scaleY:0.3695,x:-39.55},6).to({regX:-0.1,regY:0.1,scaleX:0.4445,scaleY:0.4438},6).to({scaleX:0.5184,scaleY:0.5182,y:27.05},6).to({scaleX:0.5923,scaleY:0.5916,x:-39.6},6).to({regX:-0.3,regY:0.2,scaleX:0.6667,scaleY:0.6662},6).wait(3).to({scaleX:0.6876},0).wait(2).to({y:26.9},0).to({_off:true},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1052,-348,1366,768);


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

	// Capa_3
	this.instance = new lib.mano2();
	this.instance.setTransform(-224.5,94.4,0.314,0.314,-54.8118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({scaleX:0.3091,scaleY:0.3091,rotation:-54.8115,x:-249.65,y:79.15},0).wait(20));

	// MergedLayer_1
	this.instance_1 = new lib._2btnplay();
	this.instance_1.setTransform(-230,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(11,1,1).p("AFbAAQAACQhmBmQhlBliQAAQiPAAhlhlQhmhmAAiQQAAiPBmhmQBlhlCPAAQCQAABlBlQBmBmAACPg");
	this.shape.setTransform(-190.725,39.6);

	this.instance_2 = new lib.Símbolo6("synched",0);
	this.instance_2.setTransform(-190,40,1,1,0,0,0,40,40);
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-2,-2,84,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.shape}]},21).wait(20));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(21).to(new cjs.ColorFilter(0.74,0.74,0.74,1,36.4,13.78,3.9,0), 0).wait(20));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:21, endFrame:21, x:-2, y:-2, w:84, h:84});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-2, y:-2, w:84, h:84});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.6,-47.1,244,232);


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
	this.instance = new lib.Flor();
	this.instance.setTransform(-76,-93,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({rotation:14.6927,x:-68.7,y:-98.95},0).wait(4).to({rotation:29.3883,x:-60.15,y:-102.9},0).wait(4).to({rotation:44.0825,x:-50.85,y:-104.5},0).wait(4).to({rotation:58.7763,x:-41.5,y:-103.7},0).wait(4).to({rotation:73.4697,x:-32.6,y:-100.6},0).wait(4).to({rotation:88.1637,x:-24.8,y:-95.3},0).wait(4).to({rotation:102.8564,x:-18.65,y:-88.25},0).wait(4).to({rotation:117.5504,x:-14.4,y:-79.8},0).wait(4).to({rotation:132.2455,x:-12.55,y:-70.5},0).wait(4).to({rotation:146.9399,x:-13,y:-61.15},0).wait(4).to({rotation:161.6347,x:-15.85,y:-52.15},0).wait(4).to({rotation:176.329,x:-20.9,y:-44.25},0).wait(1).to({rotation:180,x:-22.5,y:-42.5},0).wait(4).to({rotation:193.1991,x:-29.05,y:-37.1},0).wait(4).to({rotation:206.4008,x:-36.6,y:-33.35},0).wait(4).to({rotation:219.6012,x:-44.75,y:-31.35},0).wait(4).to({rotation:232.8024,x:-53.25},0).wait(4).to({rotation:245.9992,x:-61.6,y:-33.25},0).wait(4).to({rotation:259.2,x:-69.2,y:-37},0).wait(4).to({rotation:272.3997,x:-75.8,y:-42.4},0).wait(4).to({rotation:285.6005,x:-81,y:-49.05},0).wait(4).to({rotation:298.8005,x:-84.5,y:-56.8},0).wait(4).to({rotation:312.0015,x:-86.25,y:-65.1},0).wait(4).to({rotation:325.2012,x:-86,y:-73.6},0).wait(4).to({rotation:338.4028,x:-83.8,y:-81.85},0).wait(2).to({rotation:344.9998,x:-82.05,y:-85.7},0).wait(1));

	// Flor.png
	this.instance_1 = new lib.Interpolación7("synched",0);
	this.instance_1.setTransform(84.75,-4.75);

	this.instance_2 = new lib.Interpolación9("synched",0);
	this.instance_2.setTransform(84.9,-4.65,1,1,-14.999,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_2}]},50).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:180},49).to({_off:true,regX:0.1,regY:0.1,rotation:345.001,x:84.9,y:-4.65},50).wait(1));

	// Flor.png
	this.instance_3 = new lib.Interpolación12("synched",0);
	this.instance_3.setTransform(-82.25,70.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:180},49).to({regX:-0.2,regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:345.0029,x:-82.1,y:70.3},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-104.8,240.7,211.8);


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

	this.instance_1 = new lib.lago();
	this.instance_1.setTransform(878.15,6.9,1.3744,1.8149,1.5181,0,0,-39,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(0,0.2,1188,251.8), null);


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
	this.frame_199 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(199).call(this.frame_199).wait(1));

	// Capa_2
	this.instance = new lib.Interpolación17("synched",0);
	this.instance.setTransform(-131.95,-44.95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).to({scaleX:21.7874,scaleY:9.0334,x:-81.8,y:-111.1},33).to({startPosition:0},99).wait(1));

	// dialogo
	this.instance_1 = new lib.Interpolación18("synched",0);
	this.instance_1.setTransform(-136.45,-44.75,0.343,0.1423,0,0,0,-0.1,-1.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({scaleX:20.8485,scaleY:7.5436,x:-81,y:-110.25},33).to({startPosition:0},99).wait(1));

	// ala
	this.ikNode_1 = new lib.ala("synched",0);
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-263.75,11.5,1,1,0,0,0,60,-10);

	this.ikNode_2 = new lib.ala("synched",0);
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-370.95,36.1,1,1,0,0,0,-47.2,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_2,p:{rotation:0,x:-370.95,y:36.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:0,x:-263.75,y:11.5,regY:-10,regX:60}}]}).to({state:[{t:this.ikNode_2,p:{rotation:0.8594,x:-371.25,y:34.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:0.8594,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:1.7191,x:-371.75,y:32.8,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:1.7191,x:-263.75,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:2.5791,x:-371.9,y:31.2,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:2.5791,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:3.4388,x:-372.15,y:29.4,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:3.4388,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:4.2993,x:-372.45,y:27.85,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:4.2993,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:5.159,x:-372.65,y:26.25,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:5.159,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:6.0191,x:-373,y:24.6,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:6.0191,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:6.8786,x:-373,y:22.95,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:6.8786,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:7.738,x:-373.15,y:21.3,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:7.738,x:-263.65,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.5983,x:-373.3,y:19.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.5983,x:-263.65,y:11.25,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.4579,x:-373.45,y:18,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.4579,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.3178,x:-373.5,y:16.35,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:10.3178,x:-263.5,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:11.1784,x:-373.6,y:14.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:11.1784,x:-263.65,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.038,x:-373.6,y:13.05,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.038,x:-263.5,y:11.25,regY:-10.1,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.8975,x:-373.6,y:11.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.8975,x:-263.5,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.7574,x:-373.6,y:9.8,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:13.7574,x:-263.5,y:11.4,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.6177,x:-373.55,y:8.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.6177,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:15.4776,x:-373.65,y:6.4,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:15.4776,x:-263.7,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.3377,x:-373.4,y:4.75,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.3377,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.1971,x:-373.3,y:3.15,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:17.1971,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.0573,x:-373.2,y:1.45,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:18.0573,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.9166,x:-373.05,y:-0.2,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:18.9166,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.7765,x:-372.8,y:-1.8,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.7765,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:20.6365,x:-372.6,y:-3.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:20.6365,x:-263.65,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:20.1001,x:-372.7,y:-2.55,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:20.1001,x:-263.6,y:11.15,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.5638,x:-372.85,y:-1.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.5638,x:-263.5,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.0274,x:-372.95,y:-0.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.0274,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.4911,x:-373.1,y:0.65,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:18.4911,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.9544,x:-373.15,y:1.65,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:17.9544,x:-263.55,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.4186,x:-373.25,y:2.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:17.4186,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.8824,x:-373.3,y:3.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.8824,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.3458,x:-373.4,y:4.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.3458,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:15.8092,x:-373.45,y:5.75,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:15.8092,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:15.2728,x:-373.6,y:6.8,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:15.2728,x:-263.5,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.7368,x:-373.5,y:7.8,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.7368,x:-263.55,y:11.4,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.1997,x:-373.55,y:8.8,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.1997,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.6637,x:-373.55,y:9.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:13.6637,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.1272,x:-373.55,y:10.8,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:13.1272,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.591,x:-373.6,y:11.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.591,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.0549,x:-373.55,y:13,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.0549,x:-263.55,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:11.5181,x:-373.5,y:14,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:11.5181,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.9816,x:-373.55,y:15.05,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:10.9816,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.4459,x:-373.45,y:16.05,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:10.4459,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.9093,x:-373.4,y:17.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.9093,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.3728,x:-373.35,y:18.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.3728,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.8362,x:-373.3,y:19.15,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.8362,x:-263.6,y:11.2,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.2996,x:-373.2,y:20.15,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.2996,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:7.7636,x:-373.05,y:21.05,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:7.7636,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:7.2275,x:-373,y:22.2,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:7.2275,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:7.7777,x:-373.05,y:21,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:7.7777,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.3279,x:-373.2,y:20.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.3279,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.8779,x:-373.3,y:19,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.8779,x:-263.6,y:11.2,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.4278,x:-373.35,y:17.95,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.4278,x:-263.5,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.9777,x:-373.45,y:16.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.9777,x:-263.45,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.5277,x:-373.4,y:15.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:10.5277,x:-263.45,y:11.25,regY:-10.1,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:11.0778,x:-373.45,y:14.85,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:11.0778,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:11.628,x:-373.65,y:13.7,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:11.628,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.1782,x:-373.55,y:12.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.1782,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.7289,x:-373.5,y:11.65,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.7289,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.279,x:-373.5,y:10.55,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:13.279,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.8284,x:-373.65,y:9.5,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:13.8284,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.3793,x:-373.5,y:8.5,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.3793,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.9288,x:-373.4,y:7.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.9288,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:15.4796,x:-373.5,y:6.3,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:15.4796,x:-263.6,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.0292,x:-373.35,y:5.3,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.0292,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.5792,x:-373.25,y:4.25,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.5792,x:-263.55,y:11.15,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.1293,x:-373.2,y:3.15,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:17.1293,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.6799,x:-373.1,y:2.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:17.6799,x:-263.55,y:11.2,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.2295,x:-373.05,y:0.9,regX:-47.3,regY:14.5}},{t:this.ikNode_1,p:{rotation:18.2295,x:-263.4,y:11.2,regY:-10.1,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.78,x:-372.9,y:0,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:18.78,x:-263.6,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.3302,x:-372.8,y:-1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.3302,x:-263.6,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.8805,x:-372.65,y:-2.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.8805,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:20.4301,x:-372.6,y:-3.05,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:20.4301,x:-263.45,y:11.45,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:20.9804,x:-372.4,y:-4.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:20.9804,x:-263.55,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:20.1186,x:-372.55,y:-2.55,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:20.1186,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.2561,x:-372.75,y:-0.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.2561,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.3943,x:-372.95,y:0.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:18.3943,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.5322,x:-373.05,y:2.3,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:17.5322,x:-263.5,y:11.1,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.6697,x:-373.2,y:4.05,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.6697,x:-263.5,y:11.1,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:15.8081,x:-373.35,y:5.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:15.8081,x:-263.55,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.9451,x:-373.35,y:7.35,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.9451,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.0833,x:-373.55,y:8.95,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.0833,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.2215,x:-373.55,y:10.6,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:13.2215,x:-263.5,y:11.1,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.359,x:-373.4,y:12.3,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.359,x:-263.5,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:11.4968,x:-373.4,y:13.95,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:11.4968,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.6344,x:-373.4,y:15.6,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:10.6344,x:-263.5,y:11.1,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.7728,x:-373.3,y:17.3,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.7728,x:-263.4,y:11.3,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.9105,x:-373.2,y:18.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.9105,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.0479,x:-373.15,y:20.55,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.0479,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:7.1861,x:-372.95,y:22.2,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:7.1861,x:-263.5,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:6.3242,x:-372.7,y:23.85,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:6.3242,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:5.462,x:-372.7,y:25.5,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:5.462,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:4.6001,x:-372.3,y:27.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:4.6001,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:3.7375,x:-372.05,y:28.6,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:3.7375,x:-263.55,y:11.15,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:2.8758,x:-371.95,y:30.45,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:2.8758,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:2.013,x:-371.45,y:32.05,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:2.013,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:1.1515,x:-371.2,y:33.65,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:1.1515,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:0.2894,x:-370.8,y:35.25,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:0.2894,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-0.5727,x:-370.45,y:36.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:-0.5727,x:-263.5,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:0,x:-370.95,y:36.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:0,x:-263.75,y:11.5,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:0.8594,x:-371.25,y:34.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:0.8594,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:1.7191,x:-371.75,y:32.8,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:1.7191,x:-263.75,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:2.5791,x:-371.9,y:31.2,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:2.5791,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:3.4388,x:-372.15,y:29.4,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:3.4388,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:4.2993,x:-372.45,y:27.85,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:4.2993,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:5.159,x:-372.65,y:26.25,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:5.159,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:6.0191,x:-373,y:24.6,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:6.0191,x:-263.7,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:6.8786,x:-373,y:22.95,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:6.8786,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:7.738,x:-373.15,y:21.3,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:7.738,x:-263.65,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.5983,x:-373.3,y:19.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.5983,x:-263.65,y:11.25,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.4579,x:-373.45,y:18,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.4579,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.3178,x:-373.5,y:16.35,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:10.3178,x:-263.5,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:11.1784,x:-373.6,y:14.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:11.1784,x:-263.65,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.038,x:-373.6,y:13.05,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.038,x:-263.5,y:11.25,regY:-10.1,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.8975,x:-373.6,y:11.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.8975,x:-263.5,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.7574,x:-373.6,y:9.8,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:13.7574,x:-263.5,y:11.4,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.6177,x:-373.55,y:8.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.6177,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:15.4776,x:-373.65,y:6.4,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:15.4776,x:-263.7,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.3377,x:-373.4,y:4.75,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.3377,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.1971,x:-373.3,y:3.15,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:17.1971,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.0573,x:-373.2,y:1.45,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:18.0573,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.9166,x:-373.05,y:-0.2,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:18.9166,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.7765,x:-372.8,y:-1.8,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.7765,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:20.6365,x:-372.6,y:-3.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:20.6365,x:-263.65,y:11.4,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:20.1001,x:-372.7,y:-2.55,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:20.1001,x:-263.6,y:11.15,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.5638,x:-372.85,y:-1.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.5638,x:-263.5,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.0274,x:-372.95,y:-0.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.0274,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.4911,x:-373.1,y:0.65,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:18.4911,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.9544,x:-373.15,y:1.65,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:17.9544,x:-263.55,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.4186,x:-373.25,y:2.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:17.4186,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.8824,x:-373.3,y:3.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.8824,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.3458,x:-373.4,y:4.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.3458,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:15.8092,x:-373.45,y:5.75,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:15.8092,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:15.2728,x:-373.6,y:6.8,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:15.2728,x:-263.5,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.7368,x:-373.5,y:7.8,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.7368,x:-263.55,y:11.4,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.1997,x:-373.55,y:8.8,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.1997,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.6637,x:-373.55,y:9.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:13.6637,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.1272,x:-373.55,y:10.8,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:13.1272,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.591,x:-373.6,y:11.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.591,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.0549,x:-373.55,y:13,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.0549,x:-263.55,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:11.5181,x:-373.5,y:14,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:11.5181,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.9816,x:-373.55,y:15.05,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:10.9816,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.4459,x:-373.45,y:16.05,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:10.4459,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.9093,x:-373.4,y:17.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.9093,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.3728,x:-373.35,y:18.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.3728,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.8362,x:-373.3,y:19.15,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.8362,x:-263.6,y:11.2,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.2996,x:-373.2,y:20.15,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.2996,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:7.7636,x:-373.05,y:21.05,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:7.7636,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:7.2275,x:-373,y:22.2,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:7.2275,x:-263.65,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:7.7777,x:-373.05,y:21,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:7.7777,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.3279,x:-373.2,y:20.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.3279,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.8779,x:-373.3,y:19,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.8779,x:-263.6,y:11.2,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.4278,x:-373.35,y:17.95,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.4278,x:-263.5,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.9777,x:-373.45,y:16.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.9777,x:-263.45,y:11.35,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.5277,x:-373.4,y:15.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:10.5277,x:-263.45,y:11.25,regY:-10.1,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:11.0778,x:-373.45,y:14.85,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:11.0778,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:11.628,x:-373.65,y:13.7,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:11.628,x:-263.65,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.1782,x:-373.55,y:12.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.1782,x:-263.6,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.7289,x:-373.5,y:11.65,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.7289,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.279,x:-373.5,y:10.55,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:13.279,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.8284,x:-373.65,y:9.5,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:13.8284,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.3793,x:-373.5,y:8.5,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.3793,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.9288,x:-373.4,y:7.4,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.9288,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:15.4796,x:-373.5,y:6.3,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:15.4796,x:-263.6,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.0292,x:-373.35,y:5.3,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.0292,x:-263.6,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.5792,x:-373.25,y:4.25,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.5792,x:-263.55,y:11.15,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.1293,x:-373.2,y:3.15,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:17.1293,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.6799,x:-373.1,y:2.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:17.6799,x:-263.55,y:11.2,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.2295,x:-373.05,y:0.9,regX:-47.3,regY:14.5}},{t:this.ikNode_1,p:{rotation:18.2295,x:-263.4,y:11.2,regY:-10.1,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.78,x:-372.9,y:0,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:18.78,x:-263.6,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.3302,x:-372.8,y:-1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.3302,x:-263.6,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.8805,x:-372.65,y:-2.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.8805,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:20.4301,x:-372.6,y:-3.05,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:20.4301,x:-263.45,y:11.45,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:20.9804,x:-372.4,y:-4.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:20.9804,x:-263.55,y:11.35,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:20.1186,x:-372.55,y:-2.55,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:20.1186,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:19.2561,x:-372.75,y:-0.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:19.2561,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:18.3943,x:-372.95,y:0.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:18.3943,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:17.5322,x:-373.05,y:2.3,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:17.5322,x:-263.5,y:11.1,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:16.6697,x:-373.2,y:4.05,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:16.6697,x:-263.5,y:11.1,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:15.8081,x:-373.35,y:5.7,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:15.8081,x:-263.55,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.9451,x:-373.35,y:7.35,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.9451,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:14.0833,x:-373.55,y:8.95,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:14.0833,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:13.2215,x:-373.55,y:10.6,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:13.2215,x:-263.5,y:11.1,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:12.359,x:-373.4,y:12.3,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:12.359,x:-263.5,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:11.4968,x:-373.4,y:13.95,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:11.4968,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:10.6344,x:-373.4,y:15.6,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:10.6344,x:-263.5,y:11.1,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:9.7728,x:-373.3,y:17.3,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:9.7728,x:-263.4,y:11.3,regY:-10,regX:60.1}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.9105,x:-373.2,y:18.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.9105,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:8.0479,x:-373.15,y:20.55,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:8.0479,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:7.1861,x:-372.95,y:22.2,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:7.1861,x:-263.5,y:11.3,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:6.3242,x:-372.7,y:23.85,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:6.3242,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:5.462,x:-372.7,y:25.5,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:5.462,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:4.6001,x:-372.3,y:27.1,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:4.6001,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:3.7375,x:-372.05,y:28.6,regX:-47.2,regY:14.5}},{t:this.ikNode_1,p:{rotation:3.7375,x:-263.55,y:11.15,regY:-10.1,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:2.8758,x:-371.95,y:30.45,regX:-47.3,regY:14.6}},{t:this.ikNode_1,p:{rotation:2.8758,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:2.013,x:-371.45,y:32.05,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:2.013,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:1.1515,x:-371.2,y:33.65,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:1.1515,x:-263.5,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:0.2894,x:-370.8,y:35.25,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:0.2894,x:-263.55,y:11.25,regY:-10,regX:60}}]},1).to({state:[{t:this.ikNode_2,p:{rotation:-0.5727,x:-370.45,y:36.9,regX:-47.2,regY:14.6}},{t:this.ikNode_1,p:{rotation:-0.5727,x:-263.5,y:11.3,regY:-10,regX:60}}]},1).wait(1));

	// pata
	this.instance_2 = new lib.mamaPata();
	this.instance_2.setTransform(-493,-121,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200));

	// flores
	this.instance_3 = new lib.Interpolación10("synched",0);
	this.instance_3.setTransform(-585.1,-47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-812,-381,1488.9,827.5);


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
p.nominalBounds = new cjs.Rectangle(-5,-16.9,113.2,109.4);


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

	this.actionFrames = [0,1,2,3,4,5];
	// timeline functions:
	this.frame_0 = function() {
		stage.on('drawstart', initStage, this, true);
		function initStage() {
			stretchToFit();
		}
		
		var root = this;
		root.unmuteMC.visible = false;
		root.playaudio.visible = true;
		
		
		root.playSound = function (linkage, type, stopPrevious, props) {
			if (!props)
				props = {};
		
			if (stopPrevious && root[type])
				root[type].stop();
		
			root[type] = createjs.Sound.play(linkage, props);
		
			if (root.currentFrame < root.totalFrames - 1)
				root[type].on("complete", function () {
					root.gotoAndStop(root.currentFrame + 1);
		
		
				}, this);;
		
		
		
		root.on("click", function (e) {
		
		
		
		
				if (e.target.name === "playaudio") {
		
					root[type].stop();
					root[type] = createjs.Sound.play(linkage, props);
					if (root.currentFrame < root.totalFrames - 1)
						root[type].on("complete", function () {
							root.gotoAndStop(root.currentFrame + 1);
						}, this);;
					root.pause.visible = true;
					root.playaudio.visible = false;
		
				} else if (e.target.name === "pause") {
					root[type].stop();
					root.pause.visible = false;
					root.playaudio.visible = true;
				} else if (e.target.name === "unmuteMC")
		
				{
					createjs.Sound.muted = false;
					root.muteMC.visible = true;
					root.unmuteMC.visible = false;
				} else if (e.target.name === "muteMC") {
					createjs.Sound.muted = true;
					root.muteMC.visible = false;
					root.unmuteMC.visible = true;
				}
				
				
				 
				
		
		
		
			});
			
			
		
		};
		
		
		
			
			
			
		root.on("click", function (e) {
		
		
		
		 
				
				if (e.target.name === "prev")
		
		
		
				if (root.currentFrame === this.totalFrames - 1)
					root.gotoAndStop(root.currentFrame - 2);
				else
		
					root.gotoAndStop(root.currentFrame - 1);
				else if (e.target.name === "next")
				root.gotoAndStop(root.currentFrame + 1);
			else if (e.target.name == "pressToStart")
				root.gotoAndStop(1);
		
			else if (e.target.name == "adelanteEscena")
		
				window.open('../Escena_2', '_self');
		
				
		
		
		
			});
			
			
			
			
			
			
			
		
		
		
		
		if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) // chrome requires a initial user interaction to play audio
			root.stop();
		else
			root.gotoAndStop(0);
	}
	this.frame_1 = function() {
		this.playSound("BGM", "voice", true);  
		  
		this.next.alpha = 1;
		this.next.mouseEnabled = true;
		  
		this.prev.alpha = 0.5;
		this.prev.mouseEnabled = false;
	}
	this.frame_2 = function() {
		this.playSound("Voice0", "voice", true);  
		  
		this.next.alpha = 1;
		this.next.mouseEnabled = true;
		
		this.prev.alpha = 1;
		this.prev.mouseEnabled = true;
	}
	this.frame_3 = function() {
		this.adelanteEscena.visible=true; 
		
		this.playSound("Voice1", "voice", true);  
		
		this.next.alpha = 1;
		this.next.mouseEnabled = true;
		
		this.prev.alpha = 1;
		this.prev.mouseEnabled = true;
		 
		var _this = this;
		
		_this.pata_mc.gotoAndStop(0);
	}
	this.frame_4 = function() {
		this.adelanteEscena.visible=true; 
		 this.playSound("BGM", "voice", true, { volume: 0.2, loop: -1 });
		 
		var _this = this
		
		_this.btnInteraccion.on('click', function(){	
		_this.playSound("Voice2", "voice", true);	
		_this.pata_mc.gotoAndStop(0);
		_this.pata_mc.play();
		 if(_this.currentFrame <this.totalFrames)
		 _this.gotoAndStop(_this.currentFrame + 1);
		});
		
		this.next.alpha = 0.5;
		this.next.mouseEnabled = false;
		  
		this.prev.alpha = 1;
		this.prev.mouseEnabled = true;
	}
	this.frame_5 = function() {
		this.playSound("BGM", "voice", true, { volume: 0.2, loop: -1 });
		
		
		this.adelanteEscena.visible=false; 
		  
		var _this = this;
		 
		_this.nextescene.on('click', function(){
		 
		window.open('../Escena_2', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// lago
	this.instance = new lib.lago();
	this.instance.setTransform(879.15,323.4,1.3744,1.8149,1.5181,0,0,-39,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// Capa_1
	this.btnInteraccion = new lib.btnInteractivo();
	this.btnInteraccion.name = "btnInteraccion";
	this.btnInteraccion.setTransform(709.1,376.95);
	this.btnInteraccion._off = true;
	new cjs.ButtonHelper(this.btnInteraccion, 0, 1, 2, false, new lib.btnInteractivo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnInteraccion).wait(4).to({_off:false},0).wait(2));

	// pata
	this.pata_mc = new lib.pata_mc();
	this.pata_mc.name = "pata_mc";
	this.pata_mc.setTransform(405.25,357.7,1,1,0,0,0,-313.8,25.2);

	this.timeline.addTween(cjs.Tween.get(this.pata_mc).wait(6));

	// btns _escena
	this.atrasEscena = new lib.Símbolo3();
	this.atrasEscena.name = "atrasEscena";
	this.atrasEscena.setTransform(203.65,607.1,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.atrasEscena, 0, 1, 1);

	this.adelanteEscena = new lib.Símbolo2();
	this.adelanteEscena.name = "adelanteEscena";
	this.adelanteEscena.setTransform(251.15,607.1,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.adelanteEscena, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.adelanteEscena},{t:this.atrasEscena}]}).to({state:[{t:this.atrasEscena}]},5).wait(1));

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

	this.instance_1 = new lib.Símbolo3();
	this.instance_1.setTransform(203.65,607.1,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.muteMC,p:{x:308.5}},{t:this.unmuteMC,p:{x:308.5}},{t:this.prev,p:{x:97.3}},{t:this.next,p:{x:143.1}},{t:this.pressToStart}]}).to({state:[{t:this.playaudio,p:{x:38.65}},{t:this.muteMC,p:{x:308.5}},{t:this.unmuteMC,p:{x:308.5}},{t:this.pause,p:{x:31.65}},{t:this.prev,p:{x:97.2}},{t:this.next,p:{x:143}}]},1).to({state:[{t:this.playaudio,p:{x:38.7}},{t:this.instance_1},{t:this.muteMC,p:{x:308.35}},{t:this.unmuteMC,p:{x:308.35}},{t:this.pause,p:{x:31.7}},{t:this.prev,p:{x:97.35}},{t:this.next,p:{x:143.15}},{t:this.nextescene}]},4).wait(1));

	// texto 1
	this.instance_2 = new lib.texto1mc();
	this.instance_2.setTransform(769.15,494.5,0.9703,1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(4));

	// texto 2
	this.instance_3 = new lib.texto2mc();
	this.instance_3.setTransform(616.5,550.3,1,1,0,0,0,-378,43.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(3));

	// lago fondo blanco
	this.instance_4 = new lib.Símbolo9();
	this.instance_4.setTransform(706.5,522.2,1,1,0,0,0,594,151.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:121,x:594,y:440.85,alpha:0.5},0).wait(1).to({y:441,alpha:1},0).wait(4));

	// btns_nav
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("Aw0kDIAAIHAQ1kDIAAIHAARkDIAAIH");
	this.shape.setTransform(172.35,604.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

	// fondo
	this.instance_5 = new lib.Paisajedefondo();
	this.instance_5.setTransform(0,0,0.5008,0.5009);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgNAAIAAgBIABgCIAEgGIADgBQAFgBACAAIAEAAIACABIADAEIACACIAAADQABAEgDAHIgRADQgEgIgDgFg");
	this.shape_1.setTransform(354.8,379.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_5}]}).wait(6));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(494.5,270.5,806,443.5);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1187,
	height: 649,
	fps: 25,
	color: "#235594",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_P_1.png?1668525197889", id:"index_atlas_P_1"},
		{src:"images/index_atlas_NP_1.jpg?1668525197889", id:"index_atlas_NP_1"},
		{src:"sounds/Voice0.mp3?1668525198084", id:"Voice0"},
		{src:"sounds/Voice1.mp3?1668525198084", id:"Voice1"},
		{src:"sounds/BGM.mp3?1668525198084", id:"BGM"},
		{src:"sounds/Voice2.mp3?1668525198084", id:"Voice2"}
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