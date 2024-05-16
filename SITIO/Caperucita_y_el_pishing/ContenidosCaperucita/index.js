(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1922,0,114,449],[802,770,594,496],[906,0,720,768],[762,1676,580,127],[1344,1676,580,127],[0,1694,472,127],[474,1805,472,127],[948,1805,448,125],[1398,1805,448,125],[1137,1420,854,125],[0,1438,854,125],[856,1547,760,127],[0,1565,760,127],[0,760,800,465],[0,0,904,758],[0,1268,1135,168],[1806,451,152,148],[1628,0,292,230],[1806,601,152,112],[1628,232,264,208],[1628,442,176,194],[2012,451,14,471],[1398,770,512,432],[1628,742,382,25],[1628,638,102,102],[1137,1268,765,150]]}
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



(lib.anzuelo1mensaje = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.anzuelo2mensaje = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BarraContenidos = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bnt_quees = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bnt_queesHover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ComoEvitarlo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ComoEvitarlo_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ComoOcurre = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.btn_comoOcurre_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ContenidoExtra = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ContenidoExtra_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Btn_Quedebohacer_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Btn_Quedebohacer_Hover_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.computador = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.FrasePhishing = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.iconalert = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.iconfacebook = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.iconmensaje = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.iconpirata = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.iconseguridad = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.impostorcable = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.impostorpersonaje = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.posición = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.SiguienteAtras = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Tituloindicecontenidos = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(25);
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
	this.instance = new lib.anzuelo1mensaje();
	this.instance.setTransform(-28.5,-112.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-112.2,57,224.5);


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
	this.instance = new lib.anzuelo2mensaje();
	this.instance.setTransform(-148.5,-124,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.5,-124,297,248);


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
	this.instance = new lib.iconseguridad();
	this.instance.setTransform(-44,-48.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-48.5,88,97);


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
	this.instance = new lib.iconpirata();
	this.instance.setTransform(-66,-52,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-52,132,104);


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
	this.instance = new lib.iconmensaje();
	this.instance.setTransform(-38,-28,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-28,76,56);


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
	this.instance = new lib.iconfacebook();
	this.instance.setTransform(-73,-57.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-57.5,146,115);


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
	this.instance = new lib.iconalert();
	this.instance.setTransform(-38,-37,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-37,76,74);


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
	this.instance = new lib.impostorcable();
	this.instance.setTransform(-18,-165,0.5,0.5);

	this.instance_1 = new lib.impostorpersonaje();
	this.instance_1.setTransform(-128,-51,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-165,256,330);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25,p:{x:0,y:0}},{t:this.shape_24,p:{x:-9.5625,y:-18.0875}}]}).to({state:[{t:this.shape_25,p:{x:0.05,y:0.45}},{t:this.shape_24,p:{x:-9.5125,y:-17.6375}}]},5).wait(1));

	// Capa_2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(145,147,149,0.639)").ss(2,1,1).p("AlqAIQAAiUBmhnQAsgsAygZQAlgXApgMQAvgPA1AAQBXAABJAnQAuAYAqAqQBnBoAACUQAACThnBoQgrArgyAZQgmAXgoANQgxANgzAAQhZAAhJgmQgugYgpgpQhmhpAAiTg");
	this.shape_26.setTransform(-0.325,0.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(145,147,149,0.71)").ss(2,1,1).p("AleAHQAAiOBjhlQAqgqAxgYQAjgWAogMQAugOAzAAQBUAABGAlQAuAYAoAoQBjBlAACPQAACOhjBlQgqAqgwAYQglAWgnANQgvAMgyAAQhWAAhGgkQgtgYgngnQhjhmAAiPg");
	this.shape_27.setTransform(-0.275,0.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(145,147,149,0.784)").ss(2,1,1).p("AlTAHQAAiKBghhQApgpAvgYQAigVAngLQAsgOAxAAQBSAABEAkQAsAXAnAnQBgBhAACLQAACKhgBiQgpAoguAXQgkAWgmAMQgtAMgwAAQhUAAhEgkQgsgWglgmQhghjAAiKg");
	this.shape_28.setTransform(-0.2,0.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(145,147,149,0.855)").ss(2,1,1).p("AlIAHQAAiGBdhdQAngoAugXQAhgUAlgLQArgOAwAAQBPAABCAkQAqAVAlAmQBeBeAACHQAACEheBfQgmAnguAXQgiAUglAMQgsAMguAAQhRAAhBgjQgrgWgkglQhdheAAiGg");
	this.shape_29.setTransform(-0.15,0.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(145,147,149,0.929)").ss(2,1,1).p("Ak8AHQAAiBBZhbQAmgmAsgWQAggUAkgKQAqgNAtAAQBNAAA/AiQApAVAkAkQBaBbAACCQAACAhaBbQgmAmgrAWQghATgkAMQgqALgtAAQhOAAg/ghQgpgVgjgkQhZhbAAiBg");
	this.shape_30.setTransform(-0.075,0.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#919395").ss(2,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_31.setTransform(-0.0236,0.0181,1.456,1.456);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(1));

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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AghA0QgQgQAAgZQAAgWAPgaQARgcAVAAQAMAAAPAFQARAHABAKQAAAFgDADQgDAEgFgBQgEAAgCgCIgEgDQgIgGgQAAQgKAAgMAVQgLAUAAANQAAAPALAKQAKAIAOAAQAHAAAJgEIANgHIAFgCQAEAAAEAEQACADAAAFQAAAIgSAIQgPAHgLAAQgXAAgQgOg");
	this.shape.setTransform(13.5,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AgLBVQgDgEAAgFIAAgUIgBgWIABgbIACgbQAAgFADgDQADgDAFgBQAEABADADQAEADAAAFIgCAbIgBAbIABAWIAAAUQAAAFgDAEQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(4.125,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AgMBVIABgrIABgqIABgqIAAgqQAAgMALAAQALAAAAAMIAAAqIgBAqIgBA6IgBAbQgCAMgJAAQgLAAAAgMg");
	this.shape_2.setTransform(-2.725,0.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AgwBIQgQgSAAgZQAAgmAhgqQAcgjAbAAIAKABIAIABQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCAEQgEAEgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgUAaQgcAjAAAeQAAAPAKALQAKAMAOAAQALAAAMgHQAHgDAOgKQAHgFADAAQAFAAAEADQADAEAAAFQAAAFgEAEQgfAcgfAAQgYAAgRgTg");
	this.shape_3.setTransform(-12.975,0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// MergedLayer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,197,255,0)").ss(12,1,1).p("AjiCQQgDgTAAgTQAAhnBKhJQBJhJBmAAQBoAABJBJQATATAOAV");
	this.shape_4.setTransform(-9.6625,-17.7875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AivCxQhKhKAAhnQAAgSACgSQALhQA9g8QBIhJBnAAQBLAAA7AmQAXAPAUAUQA7A8AMBQQACASAAASQAABnhJBKQhKBJhnAAQhnAAhIhJg");
	this.shape_5.setTransform(-0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Capa_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(57,207,255,0.639)").ss(2,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_6.setTransform(-0.0287,0.0433,1.2144,1.2144);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

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
	this.shape_3.setTransform(-0.0457,0.0287,1.6596,1.6596);

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
	this.shape_15.setTransform(-0.1545,0.2224,2.7575,2.7575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(145,147,149,0.298)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_16.setTransform(-0.1287,0.0436,2.7979,2.7979);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(145,147,149,0.2)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_17.setTransform(-0.1316,0.158,2.8027,2.8027);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(145,147,149,0.098)").ss(5,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_18.setTransform(-0.3648,0.3242,2.9414,2.9414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:0.9524,scaleY:0.9524,x:-0.0214,y:0.0072}},{t:this.shape_3,p:{scaleX:1.6596,scaleY:1.6596,x:-0.0457,y:0.0287}},{t:this.shape_2,p:{scaleX:2.2692,scaleY:2.2692,x:-0.1615,y:0.1575}}]}).to({state:[{t:this.shape_4,p:{scaleX:1,scaleY:1,x:0,y:0}},{t:this.shape_3,p:{scaleX:1.6596,scaleY:1.6596,x:-0.0457,y:0.0287}},{t:this.shape_2,p:{scaleX:2.3085,scaleY:2.3085,x:-0.0351,y:0.0256}}]},2).to({state:[{t:this.shape_3,p:{scaleX:1.0515,scaleY:1.0515,x:-0.0309,y:0.0046}},{t:this.shape_5},{t:this.shape_2,p:{scaleX:2.3655,scaleY:2.3655,x:-0.1693,y:0.0966}}]},2).to({state:[{t:this.shape_4,p:{scaleX:1.0904,scaleY:1.0904,x:-0.0543,y:0.0713}},{t:this.shape_3,p:{scaleX:1.7537,scaleY:1.7537,x:-0.0522,y:0.061}},{t:this.shape_2,p:{scaleX:2.4394,scaleY:2.4394,x:-0.0636,y:0.0682}},{t:this.shape_6,p:{scaleX:0.5309,scaleY:0.5309,x:-0.0186,y:0.0428}}]},2).to({state:[{t:this.shape_4,p:{scaleX:1.1443,scaleY:1.1443,x:-0.0366,y:0.033}},{t:this.shape_3,p:{scaleX:1.8142,scaleY:1.8142,x:-0.1385,y:0.0927}},{t:this.shape_2,p:{scaleX:2.4674,scaleY:2.4674,x:-0.1305,y:0.1023}},{t:this.shape_6,p:{scaleX:0.5714,scaleY:0.5714,x:0.0072,y:0.0141}}]},2).to({state:[{t:this.shape_8},{t:this.shape_3,p:{scaleX:1.8432,scaleY:1.8432,x:-0.1059,y:0.1296}},{t:this.shape_2,p:{scaleX:2.4902,scaleY:2.4902,x:-0.1441,y:0.1207}},{t:this.shape_7,p:{x:-0.0628,y:0.064,scaleX:0.6047,scaleY:0.6047}}]},2).to({state:[{t:this.shape_3,p:{scaleX:1.234,scaleY:1.234,x:-0.0404,y:0.0021}},{t:this.shape_2,p:{scaleX:1.9173,scaleY:1.9173,x:-0.1504,y:0.102}},{t:this.shape_9,p:{scaleX:2.5443,scaleY:2.5443,x:-0.0766,y:0.0828}},{t:this.shape_7,p:{x:-0.0128,y:0.014,scaleX:0.6047,scaleY:0.6047}}]},2).to({state:[{t:this.shape_3,p:{scaleX:1.2766,scaleY:1.2766,x:-0.016,y:0.0298}},{t:this.shape_2,p:{scaleX:1.9597,scaleY:1.9597,x:-0.0758,y:0.1291}},{t:this.shape_9,p:{scaleX:2.5836,scaleY:2.5836,x:-0.1002,y:0.0508}},{t:this.shape_7,p:{x:0.0258,y:0.1212,scaleX:0.6237,scaleY:0.6237}}]},2).to({state:[{t:this.shape_3,p:{scaleX:1.2766,scaleY:1.2766,x:-0.016,y:0.0298}},{t:this.shape_2,p:{scaleX:1.9542,scaleY:1.9542,x:-0.2725,y:0.3627}},{t:this.shape_11},{t:this.shape_10,p:{scaleX:0.6599,scaleY:0.6599,x:-0.046,y:0.0798}}]},2).to({state:[{t:this.shape_10,p:{scaleX:0.6808,scaleY:0.6808,x:-0.0085,y:0.0425}},{t:this.shape_3,p:{scaleX:1.2959,scaleY:1.2959,x:-0.0775,y:0.1376}},{t:this.shape_2,p:{scaleX:2.0325,scaleY:2.0325,x:-0.1195,y:0.1974}},{t:this.shape_12,p:{scaleX:2.6819,scaleY:2.6819,x:-0.2091,y:0.1956}}]},2).to({state:[{t:this.shape_10,p:{scaleX:0.6808,scaleY:0.6808,x:-0.0085,y:0.0425}},{t:this.shape_14},{t:this.shape_9,p:{scaleX:2.0325,scaleY:2.0325,x:-0.1195,y:0.1974}},{t:this.shape_13}]},2).to({state:[{t:this.shape_10,p:{scaleX:0.7553,scaleY:0.7553,x:-0.0032,y:0.0159}},{t:this.shape_3,p:{scaleX:1.4265,scaleY:1.4265,x:-0.1059,y:0.0795}},{t:this.shape_2,p:{scaleX:2.0679,scaleY:2.0679,x:-0.1407,y:0.1536}},{t:this.shape_15,p:{scaleX:2.7575,scaleY:2.7575,x:-0.1545,y:0.2224}}]},2).to({state:[{t:this.shape_10,p:{scaleX:0.7766,scaleY:0.7766,x:-0.016,y:0.0298}},{t:this.shape_3,p:{scaleX:1.4194,scaleY:1.4194,x:-0.1017,y:0.0583}},{t:this.shape_2,p:{scaleX:2.0973,scaleY:2.0973,x:-0.1584,y:0.0919}},{t:this.shape_16}]},2).to({state:[{t:this.shape_10,p:{scaleX:0.8404,scaleY:0.8404,x:-0.0043,y:0.0213}},{t:this.shape_2,p:{scaleX:1.5219,scaleY:1.5219,x:-0.0631,y:0.0656}},{t:this.shape_15,p:{scaleX:2.1513,scaleY:2.1513,x:-0.0908,y:0.154}},{t:this.shape_17}]},2).to({state:[{t:this.shape_3,p:{scaleX:0.883,scaleY:0.883,x:-0.0298,y:0.0489}},{t:this.shape_2,p:{scaleX:1.5642,scaleY:1.5642,x:-0.0885,y:0.0926}},{t:this.shape_12,p:{scaleX:2.2054,scaleY:2.2054,x:-0.1232,y:0.0661}},{t:this.shape_18}]},2).wait(2));

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
	this.instance = new lib.Bnt_quees();
	this.instance.setTransform(-117,-18,0.5,0.5);

	this.instance_1 = new lib.Bnt_queesHover();
	this.instance_1.setTransform(-118,-21,0.5434,0.5436);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,197,255,0)").ss(1,1,1).p("AgYFUIAAqnIAxAA");
	this.shape.setTransform(-113.525,27.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A6qEOIAAobMA1VAAAIAAIbg");
	this.shape_1.setTransform(60.1,13.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

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


(lib.computador_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.computador();
	this.instance.setTransform(46,79,0.5,0.5);

	this.instance_1 = new lib.fondo();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.computador_1, new cjs.Rectangle(0,0,452,379), null);


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

	// timeline functions:
	this.frame_2 = function() {
		playSound("CLOCKTick_Stopwatch2_ID2138_BSB");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Capa_1
	this.instance = new lib.interactivo();
	this.instance.setTransform(11.9,189.8,0.8901,0.8901,0,0,0,-0.1,-0.2);

	this.instance_1 = new lib.interactivosobre();
	this.instance_1.setTransform(11.9,188.9,1.2471,1.2465,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.interactivoclic();
	this.instance_2.setTransform(5.9,183.2,1,1,0,0,0,-6.1,-5.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,197,255,0)").ss(1,1,1).p("AFAmPIBQAAIAAMeIsfAAIAAhQ");
	this.shape.setTransform(19.35,196.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ak/GPIhQAAIAAseIMeAAIAABQIAALOg");
	this.shape_1.setTransform(11.35,188.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,140.2,99.6,99.60000000000002);


(lib.hombre = function(mode,startPosition,loop,reversed) {
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
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(140));

	// Capa_1
	this.hombre = new lib.Interpolación2("synched",0);
	this.hombre.name = "hombre";
	this.hombre.setTransform(115,5.85,1,1,5.4567,0,0,-13,-159.1);

	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(115,5.95,1,1,-14.4597,0,0,-13,-159);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hombre).to({_off:true,regY:-159,rotation:-14.4597,y:5.95},39).wait(70).to({_off:false,regY:-159.1,rotation:5.4567,y:5.85},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},39).to({rotation:5.4567,x:114.95},41).to({rotation:-7.2444,x:115.05,y:5.9},29).to({_off:true,regY:-159.1,rotation:5.4567,x:115,y:5.85},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-0.5,362.8,348.9);


(lib.emotes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon-alert.png
	this.instance = new lib.Interpolación4("synched",0);
	this.instance.setTransform(437,333);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1579,scaleY:1.2162},27).to({scaleX:1,scaleY:1},24).wait(1));

	// icon-facebook.png
	this.instance_1 = new lib.Interpolación5("synched",0);
	this.instance_1.setTransform(442,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.2,regY:0.1,scaleX:0.9316,scaleY:0.9316,x:442.25,y:57.6},27).to({regX:0,regY:0,scaleX:1,scaleY:1,x:442,y:57.5},24).wait(1));

	// icon-mensaje.png
	this.instance_2 = new lib.Interpolación6("synched",0);
	this.instance_2.setTransform(487,208);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:204},27).to({y:208},24).wait(1));

	// icon-pirata.png
	this.instance_3 = new lib.Interpolación7("synched",0);
	this.instance_3.setTransform(66,333);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:329},27).to({y:333},24).wait(1));

	// icon-seguridad.png
	this.instance_4 = new lib.Interpolación8("synched",0);
	this.instance_4.setTransform(102,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.9284,scaleY:0.7937,y:48.5},27).to({scaleX:1,scaleY:1,y:52.5},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,525,385);


(lib.carta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EA1/AoyMhlFAAAIruAAMAAAhRjILuAAMBlFAAAIE2AAMAAABRjg");
	mask.setTransform(82.5,141.025);

	// Capa_1
	this.instance = new lib.Interpolación9("synched",0);
	this.instance.setTransform(113.5,45,1,1,0,0,0,-35,-79);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.188,x:112.45,y:42.4},37).to({rotation:0,x:113.5,y:45},34).wait(1));

	// Capa_2
	this.instance_1 = new lib.Interpolación10("synched",0);
	this.instance_1.setTransform(134.5,-73.75,1,1,-6.4588);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:-0.1,rotation:-2.2694,x:142.15,y:-74.5},37).to({regX:0,regY:0,rotation:-6.4588,x:134.5,y:-73.75},34).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-119.9,314.3,378.20000000000005);


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
		_this.interaccion.on('click', function(){
		/*
		Reproducción de un clip de película/vídeo o una línea de tiempo actual.
		Reproduce el clip de película especificado o el vídeo.
		*/
		_this.hombre.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hombre
	this.hombre = new lib.hombre();
	this.hombre.name = "hombre";
	this.hombre.setTransform(-60,-37,1,1,0,0,0,128,165);

	this.timeline.addTween(cjs.Tween.get(this.hombre).wait(1));

	// carta
	this.instance = new lib.carta();
	this.instance.setTransform(222.5,62,1,1,0,0,0,148.5,124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// emotes
	this.instance_1 = new lib.emotes();
	this.instance_1.setTransform(184.5,100.5,1,1,0,0,0,262.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// computador
	this.interaccion = new lib.pantallamov();
	this.interaccion.name = "interaccion";
	this.interaccion.setTransform(92.75,172.5,0.5,0.5,0,0,0,12,190);
	new cjs.ButtonHelper(this.interaccion, 0, 1, 2, false, new lib.pantallamov(), 3);

	this.instance_2 = new lib.computador_1();
	this.instance_2.setTransform(205.75,110.5,1,1,0,0,0,226,189.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.interaccion}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.imagen, new cjs.Rectangle(-777,-250.5,1366,800.5), null);


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
		
		
		window.parent.document.getElementById('mi_iframe').src = './Ayuda/Contenidos/index.html';
		
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.siguiente = new lib.btnSiguiente();
	this.siguiente.name = "siguiente";
	this.siguiente.setTransform(723,578.2,0.5,0.5,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.siguiente, 0, 1, 2, false, new lib.btnSiguiente(), 3);

	this.timeline.addTween(cjs.Tween.get(this.siguiente).wait(1));

	// numeracion
	this.btnContenidoExtra = new lib.contenidoExtra();
	this.btnContenidoExtra.name = "btnContenidoExtra";
	this.btnContenidoExtra.setTransform(237.65,447.45);
	new cjs.ButtonHelper(this.btnContenidoExtra, 0, 1, 2, false, new lib.contenidoExtra(), 3);

	this.btnSiMeOcurre = new lib.siMeOcurre();
	this.btnSiMeOcurre.name = "btnSiMeOcurre";
	this.btnSiMeOcurre.setTransform(215.15,378.2);
	new cjs.ButtonHelper(this.btnSiMeOcurre, 0, 1, 2, false, new lib.siMeOcurre(), 3);

	this.btnComoEvitarlo = new lib.comoEvitarlo();
	this.btnComoEvitarlo.name = "btnComoEvitarlo";
	this.btnComoEvitarlo.setTransform(145.65,306);
	new cjs.ButtonHelper(this.btnComoEvitarlo, 0, 1, 2, false, new lib.comoEvitarlo(), 3);

	this.btnComoOcurre = new lib.comoOcurre();
	this.btnComoOcurre.name = "btnComoOcurre";
	this.btnComoOcurre.setTransform(139.15,234.05);
	new cjs.ButtonHelper(this.btnComoOcurre, 0, 1, 2, false, new lib.comoOcurre(), 3);

	this.btnQueEs = new lib.queES();
	this.btnQueEs.name = "btnQueEs";
	this.btnQueEs.setTransform(189.15,167.75);
	new cjs.ButtonHelper(this.btnQueEs, 0, 1, 2, false, new lib.queES(), 3);

	this.instance = new lib.Tituloindicecontenidos();
	this.instance.setTransform(79,39,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btnQueEs},{t:this.btnComoOcurre},{t:this.btnComoEvitarlo},{t:this.btnSiMeOcurre},{t:this.btnContenidoExtra}]}).wait(1));

	// enumeracion contenidos.png
	this.instance_1 = new lib.BarraContenidos();
	this.instance_1.setTransform(136,133,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// imagen
	this.instance_2 = new lib.FrasePhishing();
	this.instance_2.setTransform(547,421,0.5,0.5);

	this.instance_3 = new lib.imagen();
	this.instance_3.setTransform(600.8,274.7,0.8178,0.8178,0,0,0,-94,154);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Capa_1
	this.instance_4 = new lib.posición();
	this.instance_4.setTransform(492,547,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(663.7,264.9,450.79999999999995,364.30000000000007);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1189,
	height: 642,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_1.png?1715836336010", id:"index_atlas_1"},
		{src:"sounds/CLOCKTick_Stopwatch2_ID2138_BSB.mp3?1715836336120", id:"CLOCKTick_Stopwatch2_ID2138_BSB"},
		{src:"sounds/sound.mp3?1715836336120", id:"sound"}
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