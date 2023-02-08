(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1450,1437,40,59],[1450,1521,284,80],[1736,1521,283,79],[1609,1417,396,102],[1052,1437,396,102],[1828,0,195,195],[1052,1541,98,95],[1828,463,121,97],[1152,1541,98,94],[1828,562,100,100],[1951,463,97,97],[1930,562,100,100],[1088,702,519,733],[1252,1541,86,86],[1492,1437,43,43],[0,0,1086,1033],[1609,702,420,713],[1088,0,738,700],[1828,197,212,131],[1828,330,212,131],[0,1035,1050,539]]}
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



(lib.anzuelo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btningresarclic = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btningresar = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.btnmanualuserclic = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btnManualUsuario = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cuadernomanualusuario = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Emoticon1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Emoticon2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Emoticon3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.EmoticonA = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.EmoticonB = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.EmoticonC = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.fondoizq = function() {
	this.initialize(img.fondoizq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4086,2788);


(lib.hombrepescando = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.imanualusuario = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.información = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.manocelular = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.manoseñalar = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.niños = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.perfilusuario = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.perfilusuariopngcopia9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Títuloyfrase = function() {
	this.initialize(ss["index_atlas_1"]);
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
p.nominalBounds = new cjs.Rectangle(-262.5,-135,1050,539);


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
	this.instance = new lib.hombrepescando();
	this.instance.setTransform(84,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pescador, new cjs.Rectangle(84,2,519,733), null);


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
	this.instance = new lib.manoseñalar();
	this.instance.setTransform(-103,-208,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mano, new cjs.Rectangle(-103,-208,210,356.5), null);


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
	this.instance = new lib.fondoizq();
	this.instance.setTransform(1022,697,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondodDer, new cjs.Rectangle(1022,697,2043,1394), null);


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
	this.instance = new lib.niños();
	this.instance.setTransform(0,-174,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.libro, new cjs.Rectangle(0,-174,369,350), null);


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
	this.instance = new lib.imanualusuario();
	this.instance.setTransform(66,21,0.5,0.5);

	this.instance_1 = new lib.cuadernomanualusuario();
	this.instance_1.setTransform(10,-42,0.5,0.5);

	this.instance_2 = new lib.btnManualUsuario();
	this.instance_2.setTransform(-112,-16,0.5,0.5);

	this.instance_3 = new lib.información();
	this.instance_3.setTransform(66,-8);

	this.instance_4 = new lib.btnmanualuserclic();
	this.instance_4.setTransform(-121,-16,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:0.5,scaleY:0.5,y:-16}},{t:this.instance_1,p:{scaleX:0.5,scaleY:0.5,x:10,y:-42}},{t:this.instance,p:{scaleX:0.5,scaleY:0.5,x:66,y:21}}]}).to({state:[{t:this.instance_4},{t:this.instance_1,p:{scaleX:0.5,scaleY:0.5,x:10,y:-42}},{t:this.instance_3}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.4933,scaleY:0.4905,y:-14}},{t:this.instance_1,p:{scaleX:0.4933,scaleY:0.4905,x:9,y:-40}},{t:this.instance,p:{scaleX:0.4933,scaleY:0.4905,x:63,y:-6}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-42,230,106);


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
	this.instance = new lib.btningresar();
	this.instance.setTransform(1,-9,0.5,0.5);

	this.instance_1 = new lib.btningresarclic();
	this.instance_1.setTransform(0,-13,0.521,0.5748);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:1,y:-9}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{x:0,y:-11}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13,148,46);


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
	this.instance = new lib.anzuelo();
	this.instance.setTransform(-10,-15,0.95,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ancla, new cjs.Rectangle(-10,-15,38,59), null);


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
	this.shape.graphics.f("#000033").s().p("AAMAJQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIACgFQACgDADAAIADABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgBABIgBAAIAAAAIgBAAIgCgBQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAABIgBAEIABADIADABIABgBIACgBIABAAIABABIgCACIgDABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDAJIAAgEIAAgFIAAgEIABgFIABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAFIAAAEIAAAGIAAADQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBgAgTAIQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgEAEgFQADgEAEAAIABAAIABAAIABAAIABABIAAADIAAABIgBAAIgBgBIgBgBIgBAAQgCAAgDADQgDADAAAEIABADIADABIADgBIACgBIABgBIABAAIABABIgBABQgDAEgEAAQgDAAgCgDgAAEAKIAAgBIAAgCIAAgDIAAgDIAAgCIAAgBIABgBIABABIABABIgBACIAAADIAAADIAAACIAAABIgBAAIgBAAgAAFgGIgBgBIABgBIABgBIABABIAAABIAAABIgBAAIgBAAg");
	this.shape.setTransform(-0.475,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AAwAmQgIgHAAgLQAAgMAIgKQAHgMAKAAQAGAAAGACQAIADAAAFQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDAAIgCgCQgDgDgIABQgFAAgFAIQgFAJAAAHQAAAGAFAFQAEADAHAAQADAAAEgCIAGgCIACgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAEgIAEQgHAEgFgBQgLABgHgHgAgPAmIABgUIAAgSIAAgTIABgTQAAgGAFAAQAFAAAAAGIAAATIAAATIgBAZIgBANQAAAGgFgBQgFABAAgGgAhOAiQgHgIAAgMQAAgRAPgSQAMgQANgBIAFABIADAAQACgCADAAQAEAAABAFIABALIgBADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgDAAgCgDIgCgFIgGgBQgIAAgJANQgNAPAAANQAAAIAFAEQAEAGAGAAQAGAAAFgDIAKgGQADgDACAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgOAMgPAAQgLAAgHgIgAAQAoQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgKIAAgJIAAgMIABgMQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAMIgBAMIAAAJIABAKQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAARgbQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(-0.475,0.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("ABJA6QgLgLAAgRQAAgRALgQQAMgUAPAAQAIAAAKAEQAMAFAAAHQAAADgCACQgCACgDAAIgEgBIgDgDQgFgDgLAAQgIAAgIANQgIAOAAAKQAAALAIAGQAHAGAKAAQAFAAAGgDIAJgFIAEgBQADAAACACQACACAAAEQAAAFgNAGQgLAFgHAAQgQAAgMgKgAgYA6IABgeIABgcIABgdIAAgeQAAgIAIAAQAIAAAAAIIAAAeIgBAdIgBAnIgBATQgBAIgHAAQgIAAAAgIgAh4A0QgLgNAAgRQAAgaAXgdQATgYAUAAIAHAAIAGABQADgEAEAAQAGAAABAHIABARQAAADgBACQgCAEgFAAQgFAAgCgHQgDgFgCgBQgBgBgHAAQgMAAgOASQgUAYAAAVQAAALAHAHQAHAIAKAAQAIAAAJgEIAOgKQAFgDACAAQADAAADACQACADAAADQAAAEgDADQgVATgWAAQgRAAgMgNgAAYA9QgCgCAAgEIAAgPIgBgOIABgTIABgSQAAgEACgCQACgCAEAAQADAAADACQACACAAAEIgBASIgBATIABAOIAAAPQAAAEgCACQgDACgDAAQgEAAgCgCgAAbgqQgDgDAAgEQAAgDADgDQADgDAEAAQADAAADADQADADAAADQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_2.setTransform(-0.475,0.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("ABbBIQgOgNgBgWQAAgUAOgVQAPgYATAAQAKAAAMAEQAPAGAAAJQAAAEgCADQgDACgDAAQgDAAgCgBIgFgEQgFgEgOAAQgKAAgKARQgJARAAAMQgBANAJAIQAJAHANAAQAGAAAIgDIALgGIAFgCQADAAADADQADADAAAEQAAAHgQAHQgOAGgJAAQgUAAgOgMgAgeBIIABglIABgjIAAglIABgkQAAgKAKAAQAKAAAAAKIAAAkIgBAlIgCAxIgBAXQgBAKgIAAQgKAAAAgKgAiUBAQgPgPAAgVQAAgiAdgjQAYgeAYAAIAJAAIAHACQADgGAGAAQAHAAACAKQABAIABAMQAAAEgCADQgEAEgEAAQgHAAgDgIQgDgGgDgCQgBgBgJAAQgPAAgRAXQgYAdAAAbQgBANAJAJQAJAKAMAAQAKAAAKgGQAHgDALgJQAGgEADAAQAFAAADADQACAEAAAEQAAAEgDAEQgbAXgbAAQgVAAgOgQgAAeBLQgDgCgBgFIAAgSIAAgSIABgXIABgXQAAgFADgCQADgDAEAAQAEAAADADQACACABAFIgBAXIgBAXIAAASIABASQAAAFgEACQgCADgEAAQgFAAgCgDgAAhg0QgEgDABgFQgBgFAEgEQADgDAFAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_3.setTransform(-0.45,0.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("ABkBPQgQgOAAgYQAAgXAPgXQAQgaAWAAQAKAAANAFQASAHgBAJQABAEgDADQgDADgEAAQgEAAgBgBIgFgEQgHgGgOAAQgMABgLATQgKATAAANQAAAPAKAIQAJAIAPAAQAGAAAIgEIANgGIAEgDQAFAAACAEQADADAAAEQAAAJgQAHQgQAGgJAAQgXAAgPgNgAghBPIACgoIAAgnIABgpIABgnQAAgMAKAAQAMAAAAAMIgBAnIgBApIgBA2IgBAZQgBAMgKAAQgLAAAAgMgAikBHQgOgSAAgXQgBgkAggnQAagiAbABIAJAAIAIABQAEgFAGAAQAIAAABAKQACAJAAANQABAEgDAEQgDAFgGgBQgGABgEgJQgDgHgDgBQgCgCgJAAQgQAAgUAZQgbAgAAAdQAAAPAJAKQAKAKAOAAQALABALgHQAHgCANgKQAGgFADAAQAFAAADAEQADADABAFQgBAEgEAFQgcAZgeAAQgYAAgQgRgAAgBTQgCgDAAgFIgBgUIAAgTIABgaIABgZQAAgFADgEQADgCAFAAQAFAAACACQADAEAAAFIgBAZIgBAaIABATIAAAUQAAAFgCADQgEADgFAAQgEAAgEgDgAAlg5QgFgEAAgGQAAgEAFgFQADgDAGAAQAFAAAEADQADAFABAEQgBAGgDAEQgEAEgFAAQgGAAgDgEg");
	this.shape_4.setTransform(-0.45,0.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000033").s().p("ABqBUQgRgQAAgZQAAgXAQgZQARgcAWAAQAMAAAOAFQASAHAAAKQAAAFgDADQgDADgEAAQgEAAgCgCIgFgDQgHgGgQAAQgLAAgMAUQgLAUAAAOQAAAPALAKQAKAIAPAAQAHAAAIgEIAOgHIAFgCQAEAAADAEQADADAAAFQAAAIgSAIQgQAHgKAAQgYAAgQgOgAgjBUIABgrIACgqIAAgqIABgqQAAgMALAAQAMAAAAAMIgBAqIAAAqIgCA6IgBAbQgBAMgKAAQgMgBAAgLgAitBLQgQgTAAgYQAAgnAhgpQAcgjAcAAIAKAAIAIACQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCADQgEAFgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgVAaQgcAiAAAfQAAAPAKALQAKAMAOAAQAMgBAMgGQAHgDAOgKQAHgGADAAQAFABAEADQADAEAAAFQAAAFgEAEQgfAcggAAQgYAAgRgTgAAiBYQgDgEAAgFIAAgUIgBgWIABgbIACgbQAAgFADgDQADgDAFgBQAFABADADQAEADAAAFIgCAbIgBAbIABAWIAAAUQAAAFgDAEQgDADgFAAQgGAAgDgDgAAmg9QgEgEAAgGQAAgFAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_5.setTransform(-0.475,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// MergedLayer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,197,255,0)").ss(12,1,1).p("AjiCQQgDgTAAgTQAAhnBKhJQBJhJBmAAQBoAABJBJQATATAOAV");
	this.shape_6.setTransform(-9.5625,-18.0875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AivCxQhKhKAAhnQAAgSACgSQALhQA9g8QBIhJBnAAQBLAAA7AmQAXAPAUAUQA7A8AMBQQACASAAASQAABnhJBKQhKBJhnAAQhnAAhIhJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:0,y:0}},{t:this.shape_6,p:{x:-9.5625,y:-18.0875}}]}).to({state:[{t:this.shape_7,p:{x:0.05,y:0.45}},{t:this.shape_6,p:{x:-9.5125,y:-17.6375}}]},5).wait(1));

	// Capa_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(145,147,149,0.639)").ss(2,1,1).p("AlqAIQAAiUBmhnQAsgsAygZQAlgXApgMQAvgPA1AAQBXAABJAnQAuAYAqAqQBnBoAACUQAACThnBoQgrArgyAZQgmAXgoANQgxANgzAAQhZAAhJgmQgugYgpgpQhmhpAAiTg");
	this.shape_8.setTransform(-0.325,0.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(145,147,149,0.71)").ss(2,1,1).p("AleAHQAAiOBjhlQAqgqAxgYQAjgWAogMQAugOAzAAQBUAABGAlQAuAYAoAoQBjBlAACPQAACOhjBlQgqAqgwAYQglAWgnANQgvAMgyAAQhWAAhGgkQgtgYgngnQhjhmAAiPg");
	this.shape_9.setTransform(-0.275,0.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(145,147,149,0.784)").ss(2,1,1).p("AlTAHQAAiKBghhQApgpAvgYQAigVAngLQAsgOAxAAQBSAABEAkQAsAXAnAnQBgBhAACLQAACKhgBiQgpAoguAXQgkAWgmAMQgtAMgwAAQhUAAhEgkQgsgWglgmQhghjAAiKg");
	this.shape_10.setTransform(-0.2,0.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(145,147,149,0.855)").ss(2,1,1).p("AlIAHQAAiGBdhdQAngoAugXQAhgUAlgLQArgOAwAAQBPAABCAkQAqAVAlAmQBeBeAACHQAACEheBfQgmAnguAXQgiAUglAMQgsAMguAAQhRAAhBgjQgrgWgkglQhdheAAiGg");
	this.shape_11.setTransform(-0.15,0.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(145,147,149,0.929)").ss(2,1,1).p("Ak8AHQAAiBBZhbQAmgmAsgWQAggUAkgKQAqgNAtAAQBNAAA/AiQApAVAkAkQBaBbAACCQAACAhaBbQgmAmgrAWQghATgkAMQgqALgtAAQhOAAg/ghQgpgVgjgkQhZhbAAiBg");
	this.shape_12.setTransform(-0.075,0.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#919395").ss(2,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_13.setTransform(-0.0236,0.0181,1.456,1.456);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

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
	this.shape.graphics.f("#000033").s().p("ABqBUQgRgQAAgZQAAgXAQgZQARgcAWAAQAMAAAOAFQASAHAAAKQAAAFgDADQgDADgEAAQgEAAgCgCIgFgDQgHgGgQAAQgLAAgMAUQgLAUAAAOQAAAPALAKQAKAIAPAAQAHAAAIgEIAOgHIAFgCQAEAAADAEQADADAAAFQAAAIgSAIQgQAHgKAAQgYAAgQgOgAgjBUIABgrIACgqIAAgqIABgqQAAgMALAAQAMAAAAAMIgBAqIAAAqIgCA6IgBAbQgBAMgKAAQgMgBAAgLgAitBLQgQgTAAgYQAAgnAhgpQAcgjAcAAIAKAAIAIACQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCADQgEAFgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgVAaQgcAiAAAfQAAAPAKALQAKAMAOAAQAMgBAMgGQAHgDAOgKQAHgGADAAQAFABAEADQADAEAAAFQAAAFgEAEQgfAcggAAQgYAAgRgTgAAiBYQgDgEAAgFIAAgUIgBgWIABgbIACgbQAAgFADgDQADgDAFgBQAFABADADQAEADAAAFIgCAbIgBAbIABAWIAAAUQAAAFgDAEQgDADgFAAQgGAAgDgDgAAmg9QgEgEAAgGQAAgFAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape.setTransform(-0.475,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// MergedLayer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,197,255,0)").ss(12,1,1).p("AjiCQQgDgTAAgTQAAhnBKhJQBJhJBmAAQBoAABJBJQATATAOAV");
	this.shape_1.setTransform(-9.6625,-17.7875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AivCxQhKhKAAhnQAAgSACgSQALhQA9g8QBIhJBnAAQBLAAA7AmQAXAPAUAUQA7A8AMBQQACASAAASQAABnhJBKQhKBJhnAAQhnAAhIhJg");
	this.shape_2.setTransform(-0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Capa_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(57,207,255,0.639)").ss(2,1,1).p("AjRAFQAAhWA7g8QAagZAdgPQAVgNAYgHQAbgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQgzAAgqgWQgbgOgYgXQg7g9AAhVg");
	this.shape_3.setTransform(-0.0287,0.0433,1.2144,1.2144);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

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
	this.shape_2.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AncALQAAjDCGiIQA6g6BCghQAvgeA3gPQA+gUBGAAQBzAABeAzQA+AgA3A3QCHCIAADDQAADBiHCKQg5A4hCAhQgxAeg2ARQg/ARhEAAQh1AAhfgyQg+ggg1g1QiGiJAAjCg");
	this.shape_2.setTransform(-0.15,0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AlbAHQAAiOBhhjQArgrAwgYQAjgVAogMQAtgNAzAAQBUAABFAkQAtAYAoAnQBiBkAACPQAACNhiBlQgpApgxAYQgjAVgnANQgvAMgxAAQhWAAhGgkQgtgXgngnQhhhlAAiOg");
	this.shape_3.setTransform(-0.05,0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AjHAFQAAhSA4g5QAYgYAcgOQAUgMAWgHQAbgIAdAAQAwAAAoAVQAaAOAWAWQA5A6AABRQAABRg5A6QgXAYgcAOQgVAMgWAHQgbAHgcAAQgxAAgogVQgagNgWgWQg4g6AAhRg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AnkAKQAAjFCIiLQA7g7BDghQAxgeA3gQQA/gUBHAAQB1AABhA0QA+AgA3A4QCKCKAADHQAADEiKCMQg5A6hDAhQgyAeg2ARQhBAShFAAQh3AAhhgzQg+ggg3g3QiIiLAAjGg");
	this.shape_5.setTransform(-0.025,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AjRAFQAAhWA7g8QAZgZAdgPQAVgNAYgHQAcgIAeAAQAzAAAqAWQAbAOAYAYQA7A8AABWQAABVg7A9QgZAZgdAOQgWANgXAIQgcAHgeAAQg0AAgqgWQgbgOgXgXQg7g9AAhVg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AnwALQAAjLCMiOQA8g8BFgiQAxgfA5gQQBBgVBJAAQB3AABjA2QBAAhA5A5QCNCOAADLQAADJiNCPQg7A7hFAjQgzAeg3ASQhCAShIAAQh5AAhkg0QhAghg3g4QiMiPAAjKg");
	this.shape_7.setTransform(-0.175,0.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AluAHQAAiVBnhoQAtgtAzgZQAkgXAqgMQAwgPA1AAQBZAABJAnQAvAZAqAqQBoBoAACWQAACVhoBpQgsAsgyAaQgmAWgpANQgxAOg0AAQhaAAhJgnQgwgYgpgpQhnhqAAiWg");
	this.shape_8.setTransform(-0.1,0.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AjcAFQAAhaA+g/QAbgbAegPQAXgOAZgHQAdgJAfAAQA1AAAtAYQAcAOAZAaQA/A/AABaQAABag/A/QgaAagfAQQgWANgZAIQgdAIgfAAQg3AAgsgXQgcgPgZgYQg+hAAAhag");
	this.shape_9.setTransform(-0.025,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(57,207,255,0.639)").ss(2,1,1).p("AhvADQAAguAfgfQAOgOAPgHQALgIANgDQAPgEAQAAQAbAAAWALQAOAIANAMQAgAgAAAuQAAAtggAgQgNANgQAHQgLAIgNAEQgOADgQAAQgbAAgXgLQgOgHgNgNQgfggAAgtg");
	this.shape_10.setTransform(0,0.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("An/ALQAAjRCQiSQA+g+BHgkQAzggA6gRQBEgUBKAAQB7AABnA3QBCAiA6A6QCRCTAADRQAADQiRCUQg9A9hGAjQg1Agg5ASQhFAShJAAQh+AAhmg1QhCgjg5g5QiQiUAAjQg");
	this.shape_11.setTransform(-0.075,0.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AlvAIQAAiWBnhpQAtgtAzgZQAlgXAqgNQAwgOA2AAQBYAABKAnQAvAZAqAqQBoBpAACXQAACVhoBqQgsAsgzAZQglAXgpANQgyANg0AAQhaAAhKgmQgvgZgqgpQhnhqAAiWg");
	this.shape_12.setTransform(-0.075,0.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AjkAFQAAhdBAhBQAcgcAfgQQAXgOAbgHQAegKAgAAQA3AAAvAZQAdAPAaAaQBBBCAABeQAABchBBCQgbAbggAQQgYAOgZAIQgfAIggAAQg4AAgugYQgdgPgagZQhAhCAAheg");
	this.shape_13.setTransform(-0.05,0.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(57,207,255,0.639)").ss(2,1,1).p("Ah3ADQAAgxAigiQAOgPARgIQAMgHANgEQAQgFARAAQAdAAAYANQAQAIANANQAiAjAAAxQAAAwgiAjQgOAOgRAIQgMAIgNAEQgQAEgRAAQgeAAgYgMQgPgIgNgOQgigiAAgxg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AoFALQAAjTCRiUQA/g/BIgkQA0ggA7gRQBEgVBLAAQB9AABnA3QBDAjA7A7QCTCUAADVQAADSiTCVQg9A+hIAjQg1Agg6ATQhFAShKAAQh/AAhog2QhDgig6g6QiRiWAAjTg");
	this.shape_15.setTransform(-0.125,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("Al8AIQAAibBrhtQAuguA1gbQAmgXArgNQAygPA4AAQBcAABLApQAyAZArArQBsBtAACcQAACahsBvQgtAtg1AaQgnAYgrAOQgzANg2AAQhdAAhMgoQgxgZgrgrQhrhuAAibg");
	this.shape_16.setTransform(-0.15,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AjvAFQAAhhBDhFQAdgdAhgRQAYgOAcgJQAfgJAjAAQA6AAAwAaQAfAQAbAbQBEBFAABiQAABhhEBFQgdAdghAQQgYAPgbAJQggAIgiAAQg7AAgwgZQgfgQgbgbQhDhFAAhig");
	this.shape_17.setTransform(-0.025,0.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(57,207,255,0.639)").ss(4,1,1).p("Ah+ADQAAgzAkglQAPgPARgJQANgIAOgDQARgGASAAQAfAAAZAOQARAIAOAOQAkAlAAA0QAAAzgkAkQgPAPgSAJQgNAIgOAFQgRAEgSAAQgfAAgZgNQgQgIgOgPQgkgkAAg0g");
	this.shape_18.setTransform(-0.05,0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AoKALQAAjVCTiVQBAhABIgkQA0ggA8gSQBFgVBMAAQB9AABpA4QBDAjA8A8QCUCVAADWQAADUiUCXQg+A+hIAkQg2Ahg6ASQhGAThLAAQiAAAhpg3QhDgjg7g6QiTiXAAjVg");
	this.shape_19.setTransform(-0.15,0.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AmCAIQAAidBshvQAvgvA2gaQAngYAsgNQAygQA5AAQBdAABNApQAyAaAsAsQBuBvAACfQAACchuBwQgtAug2AbQgoAXgrAOQg0AOg3AAQhfAAhOgoQgxgagsgsQhshvAAieg");
	this.shape_20.setTransform(-0.1,0.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("Aj5AFQAAhlBGhIQAfgeAigRQAZgQAdgIQAhgKAjAAQA9AAAyAbQAgAQAcAdQBHBHAABnQAABlhHBIQgdAegjARQgaAPgcAJQghAJgjAAQg+AAgygaQgggRgcgcQhGhIAAhmg");
	this.shape_21.setTransform(-0.025,0.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(57,207,255,0.639)").ss(4,1,1).p("Ah+ADQAAgzAjglQAQgPARgJQANgIAOgEQARgFASAAQAfAAAZAOQARAIAOAOQAkAlAAA0QAAAzgkAlQgPAPgSAIQgNAIgOAFQgRAEgSAAQgfAAgZgNQgQgIgPgPQgjgkAAg0g");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(145,147,149,0.62)").ss(5,1,1).p("AoVAMQAAjaCWiZQBBhBBJglQA2ghA9gSQBGgVBOAAQCAAABrA5QBFAkA9A9QCXCYAADbQAADZiXCaQhAA/hJAlQg3Ahg8ATQhHAThNAAQiDAAhrg4QhEgjg8g8QiWiaAAjZg");
	this.shape_23.setTransform(-0.075,0.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AmSAIQAAijBxh0QAxgwA4gcQAogZAugOQA1gQA6AAQBhAABRArQA0AbAuAuQByBzAAClQAACjhyB0QgxAwg3AcQgpAZguAPQg1AOg6AAQhiAAhRgqQg0gbgtgtQhxh0AAilg");
	this.shape_24.setTransform(-0.15,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AkCAGQAAhqBJhKQAfgfAkgSQAagQAdgJQAigKAlAAQA/AAA0AbQAhASAeAdQBJBKAABqQAABphJBLQgfAfgkASQgbAQgdAJQgiAJglAAQg/AAg0gbQghgRgdgdQhJhLAAhpg");
	this.shape_25.setTransform(-0.05,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(57,207,255,0.639)").ss(4,1,1).p("AiCADQAAg1AlglQAQgQASgJQANgIAPgEQARgGASAAQAgAAAaAOQARAJAPAPQAlAlAAA2QAAA1glAlQgQAQgSAJQgNAIgPAFQgRAEgSAAQggAAgbgNQgRgJgOgPQglglAAg2g");
	this.shape_26.setTransform(0.025,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(145,147,149,0.62)").ss(5,1,1).p("AoeAMQAAjdCZicQBChCBKglQA3giA+gSQBHgWBPAAQCDAABsA7QBGAkA+A+QCaCbAADeQAADciaCcQhBBBhKAlQg4Aig9ATQhIAUhOAAQiFAAhtg5QhFgkg9g9QiZicAAjdg");
	this.shape_27.setTransform(-0.1,0.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AmbAJQAAioB0h2QAygyA5gcQApgaAvgNQA2gRA8AAQBjAABSAsQA1AcAvAvQB1B2AACoQAACnh1B2QgxAxg5AdQgqAZguAPQg3APg7AAQhlAAhSgsQg1gbguguQh0h3AAing");
	this.shape_28.setTransform(-0.075,0.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AkLAGQAAhtBLhNQAgggAlgTQAbgQAfgJQAjgLAnAAQBAAAA2AdQAjASAeAeQBMBNAABuQAABshMBNQggAgglASQgbARgeAKQgkAJgmAAQhCAAg2gcQgigSgegeQhLhNAAhtg");
	this.shape_29.setTransform(0,0.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(57,207,255,0.639)").ss(5,1,1).p("AiKADQAAg4AngnQARgRATgKQAOgIAQgFQASgGATAAQAiAAAbAPQATAKAQAPQAnAoAAA5QAAA3gnAoQgRARgUAJQgOAJgPAFQgTAFgTAAQgiAAgcgPQgRgJgQgQQgngoAAg4g");
	this.shape_30.setTransform(-0.05,0.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(145,147,149,0.6)").ss(5,1,1).p("AoiAMQAAjfCaidQBChCBMgmQA3ghA+gTQBIgWBPAAQCEAABtA7QBGAkA/A/QCbCcAADgQAADdibCeQhBBBhMAmQg4Ahg9AUQhJAUhOAAQiGAAhtg6QhHgkg9g9QiaieAAjeg");
	this.shape_31.setTransform(-0.125,0.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AmZAJQAAinBzh2QAygxA4gdQApgZAvgNQA2gSA8AAQBiAABSAtQA1AbAvAvQB0B1AACpQAACmh0B2QgxAxg4AcQgqAZguAPQg3APg7AAQhkAAhSgrQg1gcguguQhzh2AAing");
	this.shape_32.setTransform(-0.275,0.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(145,147,149,0.498)").ss(5,1,1).p("AoyAMQAAjlCeiiQBFhEBNgnQA5gjBAgTQBKgWBSAAQCHAABxA8QBIAlBBBBQCfChAADnQAADkifCiQhDBDhOAnQg6Ajg/AUQhLAUhRAAQiKAAhwg7QhJglg/hAQieihAAjmg");
	this.shape_33.setTransform(-0.225,0.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AmqAJQAAiuB4h6QA0g0A7gdQArgbAwgOQA4gRA+AAQBnAABVAuQA3AcAxAxQB5B6AACvQAACth5B7QgzAzg7AdQgsAbgvAPQg5APg9AAQhpAAhVgtQg3gdgwgvQh4h7AAiug");
	this.shape_34.setTransform(-0.125,0.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AkPAGQAAhuBMhOQAhghAmgTQAbgRAfgJQAkgLAnAAQBBAAA3AdQAjASAfAfQBNBOAABwQAABthNBPQggAggmATQgcARgeAKQglAJgmAAQhDAAg2gcQgjgSgfgfQhMhOAAhvg");
	this.shape_35.setTransform(-0.075,0.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(57,207,255,0.639)").ss(5,1,1).p("AiOADQAAg6AogpQARgRAUgKQAOgJARgFQASgFAVAAQAiAAAdAPQASAKARAQQAoApAAA6QAAA6goApQgRARgUAKQgPAJgQAFQgTAFgUAAQgjAAgdgPQgSgJgQgQQgogqAAg6g");
	this.shape_36.setTransform(0,0.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(145,147,149,0.549)").ss(5,1,1).p("AozAMQAAjmCeihQBFhFBOgnQA4gjBBgTQBKgWBSAAQCIAABxA8QBIAmBBBAQCfChAADnQAADlifCjQhEBDhOAnQg5Ajg/AUQhMAUhRAAQiKAAhxg7QhJgmg/g/QieiiAAjmg");
	this.shape_37.setTransform(-0.225,0.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(145,147,149,0.62)").ss(5,1,1).p("AmqAJQAAiuB4h6QA0g0A7gdQArgbAwgOQA4gRA+AAQBnAABVAuQA3AcAxAxQB5B6AACvQAACth5B7QgzAzg7AdQgsAbgvAPQg5APg9AAQhpAAhVgtQg3gdgwgvQh4h7AAiug");
	this.shape_38.setTransform(-0.125,0.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(145,147,149,0.976)").ss(5,1,1).p("AkfAGQAAh1BRhSQAjgjAogUQAcgSAhgKQAmgLAqAAQBFAAA6AfQAlATAhAhQBRBSAAB2QAAB1hRBTQgjAigoAUQgdASggAKQgnAKgpAAQhGAAg6geQglgTggggQhRhUAAh1g");
	this.shape_39.setTransform(-0.125,0.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(145,147,149,0.4)").ss(5,1,1).p("ApCAMQAAjsCiilQBHhHBQgoQA6gjBCgUQBMgXBUAAQCLAAB1A+QBKAnBCBCQCkClAADtQAADrikCnQhFBFhQAoQg7AkhBAUQhNAVhUAAQiOAAhzg9QhLgmhBhBQiiinAAjsg");
	this.shape_40.setTransform(-0.15,0.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AmxAJQAAixB6h8QA0g1A8geQAsgaAxgPQA5gRA/AAQBpAABXAuQA3AdAyAyQB7B8AACyQAACvh7B9Qg0A0g8AeQgsAbgxAQQg6APg+AAQhqAAhXgtQg4gdgwgxQh6h9AAixg");
	this.shape_41.setTransform(-0.125,0.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AkrAGQAAh5BUhWQAlgkApgVQAegSAigKQAngNAsAAQBIAAA8AhQAmAUAjAiQBVBVAAB7QAAB5hVBWQgkAkgqAVQgeASgiALQgoALgqAAQhKAAg8ggQgmgUgighQhUhXAAh6g");
	this.shape_42.setTransform(-0.1,0.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(57,207,255,0.639)").ss(5,1,1).p("AieADQAAhAAtgtQATgTAWgLQAQgKASgFQAVgHAXAAQAmAAAfARQAVALASASQAtAtAABBQAABAgtAuQgTASgWALQgQAKgSAGQgVAGgXAAQgmAAgggRQgVgLgRgRQgtguAAhBg");
	this.shape_43.setTransform(0,0.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(145,147,149,0.298)").ss(5,1,1).p("ApLANQAAjwClioQBIhIBRgoQA7gkBDgUQBNgYBWAAQCNAAB1A/QBMAnBDBEQCnCoAADwQAADvinCpQhGBGhRAoQg8AlhCAVQhOAVhVAAQiQAAh1g+QhMgnhChCQilipAAjvg");
	this.shape_44.setTransform(-0.125,0.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("Am4AKQAAi0B8h+QA1g2A+geQAsgbAygPQA6gSBAAAQBqAABYAwQA4AdAzAyQB9B+AAC1QAACyh9B/Qg1A0g8AfQguAbgxAQQg7AQg/AAQhsAAhYgvQg4gdgygxQh8h/AAizg");
	this.shape_45.setTransform(-0.15,0.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AkpAGQAAh5BThVQAlgkApgVQAegSAigKQAngMArAAQBHAAA8AgQAnAUAhAiQBVBVAAB6QAAB4hVBXQgjAjgpAVQgfASghALQgoAKgqAAQhJAAg8gfQgmgUgigiQhThVAAh6g");
	this.shape_46.setTransform(-0.1,0.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(57,207,255,0.639)").ss(5,1,1).p("AiiAEQAAhCAtgvQAUgUAXgLQAQgKATgFQAVgHAYAAQAnAAAgARQAVALATATQAuAvAABCQAABCguAvQgTATgXALQgRAKgSAGQgWAGgXAAQgoAAgggRQgVgLgTgSQgtgvAAhCg");
	this.shape_47.setTransform(0,0.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(145,147,149,0.2)").ss(5,1,1).p("ApMANQAAjwCmipQBHhHBRgpQA7gkBEgUQBNgYBWAAQCOAAB1A/QBLAoBEBDQCnCoAADyQAADuinCqQhGBGhRAoQg9AlhBAVQhPAVhVAAQiQAAh2g+QhLgnhChCQimipAAjwg");
	this.shape_48.setTransform(-0.15,0.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(145,147,149,0.4)").ss(5,1,1).p("AnDAJQAAi4B/iBQA3g2A+ggQAtgcA0gPQA7gSBCAAQBtAABaAwQA6AfA0AzQCACBAAC5QAAC3iACCQg2A2g/AfQguAcgyAQQg9ARhAAAQhvAAhagwQg6gegzgyQh/iDAAi4g");
	this.shape_49.setTransform(-0.075,0.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("Ak/AHQAAiCBahbQAngnAsgWQAggUAkgLQArgNAuAAQBNAABAAjQApAVAkAkQBbBcAACDQAACBhbBcQgmAmgsAWQghAUgkAMQgqALguAAQhOAAhAghQgpgWgkgkQhahcAAiCg");
	this.shape_50.setTransform(-0.05,0.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(57,207,255,0.639)").ss(5,1,1).p("AiwAEQAAhIAygyQAVgVAZgNQARgKAUgGQAYgIAZAAQArAAAjATQAXAMAUAUQAyAzAABIQAABHgyAzQgVAVgZAMQgSALgUAHQgXAGgZAAQgrAAgkgTQgWgLgUgUQgygzAAhIg");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(145,147,149,0.098)").ss(5,1,1).p("AppANQAAj8CuiwQBLhLBVgrQA+gmBHgVQBRgZBaAAQCUAAB8BCQBPAqBHBGQCvCxAAD9QAAD6ivCyQhKBKhVAqQg/AnhFAWQhTAWhYAAQiYAAh8hBQhPgphFhFQiuiyAAj8g");
	this.shape_52.setTransform(-0.375,0.325);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(145,147,149,0.498)").ss(5,1,1).p("AnOAKQAAi9CCiEQA4g4BAggQAvgdA0gPQA9gTBDAAQBwAABcAxQA8AfA1A1QCDCFAAC9QAAC8iDCFQg3A3hAAgQgwAdgzAQQg+ARhCAAQhyAAhdgwQg7gfg0g0QiCiGAAi8g");
	this.shape_53.setTransform(-0.125,0.075);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("AlIAHQAAiGBdheQAogoAtgWQAhgVAmgLQArgNAvAAQBPAABCAjQAqAWAmAmQBdBeAACGQAACFhdBfQgnAnguAXQghAUglAMQgsAMgvAAQhQAAhCgjQgrgWgkglQhdheAAiGg");
	this.shape_54.setTransform(-0.1,0.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(145,147,149,0.639)").ss(5,1,1).p("Ai4AEQAAhLA0g1QAWgXAagNQASgLAVgGQAZgIAaAAQAtAAAlAUQAYANAVAVQA0A1AABMQAABKg0A2QgWAWgaANQgTALgVAHQgYAHgaAAQguAAglgUQgYgMgUgVQg0g1AAhMg");
	this.shape_55.setTransform(-0.025,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_5}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},2).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_29},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},2).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},2).to({state:[{t:this.shape_36},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},2).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},2).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},2).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},2).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},2).wait(2));

	// Capa_13
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(145,147,149,0.059)").ss(0.1,1,1).p("ACcAAQAABBguAtQgtAuhBAAQhAAAguguQgtgtAAhBQAAhAAtguQAugtBAAAQBBAAAtAtQAuAuAABAg");
	this.shape_56.setTransform(0.0022,-0.0109,3.5845,3.5829);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.059)").s().p("AhuBuQgtgtAAhBQAAhAAtguQAugtBAAAQBBAAAtAtQAuAuAABAQAABBguAtQgtAuhBAAQhAAAgugug");
	this.shape_57.setTransform(0.0022,-0.0109,3.5845,3.5829);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-63.9,128.5,128.5);


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

}).prototype = getMCSymbolPrototype(lib.mano2, new cjs.Rectangle(-103,-208,210,356.5), null);


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
	this.instance = new lib.interactivo();
	this.instance.setTransform(11.9,189.8,0.8901,0.8901,0,0,0,-0.1,-0.2);

	this.instance_1 = new lib.perfilusuario();
	this.instance_1.setTransform(-94,0);

	this.instance_2 = new lib.interactivosobre();
	this.instance_2.setTransform(11.9,188.9,1.2471,1.2465,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.perfilusuariopngcopia9();
	this.instance_3.setTransform(-94,0,1.0001,1.002);

	this.instance_4 = new lib.interactivoclic();
	this.instance_4.setTransform(5.9,183.2,1,1,0,0,0,-6.1,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,0,212,239.8);


(lib.manual = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(-121,-42,230,106);


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
	this.instance = new lib.interactivo();
	this.instance.setTransform(-39.25,-39.1,0.4245,0.4245,0,0,0,-0.6,-0.2);

	this.mano2 = new lib.mano2();
	this.mano2.name = "mano2";
	this.mano2.setTransform(-60,193);

	this.instance_1 = new lib.Emoticon3();
	this.instance_1.setTransform(186,-136,0.5,0.5);

	this.instance_2 = new lib.Emoticon2();
	this.instance_2.setTransform(-166,-217,0.5,0.5);

	this.instance_3 = new lib.Emoticon1();
	this.instance_3.setTransform(-133,-327,0.5,0.5);

	this.instance_4 = new lib.manocelular();
	this.instance_4.setTransform(-273,-346,0.5,0.5);

	this.instance_5 = new lib.interactivosobre();
	this.instance_5.setTransform(-40.05,-34.55,0.5491,0.5488,0,0,0,-0.1,-0.1);

	this.instance_6 = new lib.EmoticonA();
	this.instance_6.setTransform(-136,-323,0.5,0.5);

	this.instance_7 = new lib.EmoticonC();
	this.instance_7.setTransform(186,-131,0.5,0.5);

	this.instance_8 = new lib.EmoticonB();
	this.instance_8.setTransform(-161,-210,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:-273,y:-346}},{t:this.instance_3,p:{y:-327}},{t:this.instance_2,p:{x:-166,y:-217}},{t:this.instance_1,p:{y:-136}},{t:this.mano2,p:{y:193,x:-60}},{t:this.instance}]}).to({state:[{t:this.instance_4,p:{x:-275,y:-339}},{t:this.instance_3,p:{y:-318}},{t:this.instance_1,p:{y:-129}},{t:this.instance_2,p:{x:-167,y:-209}},{t:this.mano2,p:{y:193.55,x:-60}},{t:this.instance_5}]},1).to({state:[{t:this.instance_4,p:{x:-275,y:-340}},{t:this.mano2,p:{y:155.5,x:-49.55}},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-346,545,688.1);


(lib.libro_cte = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.libro();
	this.instance.setTransform(209.7,178.1,1,1,0,0,0,184.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:197,y:175.65},13).to({x:184.5,y:174},13).to({x:189.5,y:183.75},13).to({x:201.2,y:188.85},12).to({x:212.95,y:187.9},13).to({x:209.7,y:178.1},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,397.5,364.9);


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
		
		_this.button_7.on('click', function(){
		_this.gotoAndPlay(2);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Capa_2
	this.button_7 = new lib.pantallamov();
	this.button_7.name = "button_7";
	this.button_7.setTransform(-13.5,58.2,1,1,0,0,0,0,58.2);
	new cjs.ButtonHelper(this.button_7, 0, 1, 2);

	this.instance = new lib.perfilusuario();
	this.instance.setTransform(-102.5,-27.4,1,1,14.9992);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_7}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(5).to({rotation:0,x:-106.05,y:0},0).wait(5).to({rotation:-14.9994,x:-102.5,y:27.25},0).wait(5).to({rotation:0,x:-105.95,y:0},0).wait(5).to({rotation:14.9996,x:-102.45,y:-27.4},0).wait(5).to({rotation:0,x:-105.9,y:0},0).wait(5).to({rotation:-14.9996,x:-102.45,y:27.3},0).wait(5).to({rotation:0,x:-106.3,y:0},0).wait(5).to({scaleX:0.9999,scaleY:0.9999,rotation:14.9984,x:-102.5,y:-27.4},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.4,-27.6,272.6,268.3);


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
	this.instance.setTransform(210.95,284,1,1,0,0,0,10,15);

	this.instance_1 = new lib.tarjeta();
	this.instance_1.setTransform(198.1,408.6,1,1,0,0,0,0,118.6);

	this.instance_2 = new lib.pescador();
	this.instance_2.setTransform(193,183.5,1,1,0,0,0,152,183.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.6,2,553.4,733);


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

	this.actionFrames = [0,40,99];
	// timeline functions:
	this.frame_0 = function() {
		stage.on('drawstart', initStage, this, true);
		function initStage() {
			
			
		    stretchToFit();
		}
	}
	this.frame_40 = function() {
		var _this = this;
		
		_this.btnIngresar.on('click', function(){
		
			 createjs.Sound.play("clic", { volume: 0.1}).on("complete", function () {
		                    
				window.open("PantallaBienvenida", "_self");
				 
		                    }, this);
		});
		
		_this.btnIngresar.on('mouseover', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		
			 createjs.Sound.play("sound") ;
		});
		
		
		
		 
		 
		var _this = this;
		
		_this.manual.on('click', function(){
		
			 createjs.Sound.play("clic", { volume: 0.1}).on("complete", function () {
		                    
				alert("MenuPrincipal");
				 
		                    }, this);
		});
		
		_this.manual.on('mouseover', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		
			 createjs.Sound.play("sound2") ;
		});
	}
	this.frame_99 = function() {
		var _this = this;
		
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(59).call(this.frame_99).wait(1));

	// libro
	this.instance = new lib.libro();
	this.instance.setTransform(972.6,804.5,0.1335,0.1335,0,0,0,184.6,0.8);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance._off = true;

	this.instance_1 = new lib.libro_cte();
	this.instance_1.setTransform(618.55,260.3,1,1,0,0,0,198.7,182.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},40).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({regX:185.9,regY:2.4,scaleX:0.1414,scaleY:0.1414,x:972.75,y:797.8,alpha:0.1428},0).wait(1).to({scaleX:0.1492,scaleY:0.1492,x:972.7,y:790.65,alpha:0.2856},0).wait(1).to({scaleX:0.1571,scaleY:0.1571,x:972.65,y:783.65,alpha:0.4285},0).wait(1).to({scaleX:0.1649,scaleY:0.1649,x:972.6,y:776.65,alpha:0.5713},0).wait(1).to({scaleX:0.1728,scaleY:0.1728,x:972.55,y:769.6,alpha:0.7141},0).wait(1).to({scaleX:0.1806,scaleY:0.1806,x:972.5,y:762.6,alpha:0.8569},0).wait(1).to({scaleX:0.1884,scaleY:0.1884,y:755.55,alpha:0.9998},0).wait(1).to({scaleX:0.1963,scaleY:0.1963,x:972.45,y:748.55},0).wait(1).to({scaleX:0.2041,scaleY:0.2041,x:972.4,y:741.55},0).wait(1).to({scaleX:0.212,scaleY:0.212,x:972.35,y:734.5},0).wait(1).to({scaleX:0.2198,scaleY:0.2198,x:972.3,y:727.55},0).wait(1).to({scaleX:0.2277,scaleY:0.2277,x:972.25,y:720.5},0).wait(1).to({scaleX:0.2355,scaleY:0.2355,y:713.45},0).wait(1).to({scaleX:0.2439,scaleY:0.2457,x:963.7,y:693.25},0).wait(1).to({scaleX:0.2523,scaleY:0.256,x:957.9,y:682.35},0).wait(1).to({scaleX:0.2607,scaleY:0.2662,x:943.85,y:669.25},0).wait(1).to({scaleX:0.2691,scaleY:0.2765,x:927.6,y:658.6},0).wait(1).to({scaleX:0.2775,scaleY:0.2868,x:911.05,y:648.35},0).wait(1).to({scaleX:0.2859,scaleY:0.297,x:894.45,y:638.15},0).wait(1).to({scaleX:0.2943,scaleY:0.3073,x:877.85,y:628.05},0).wait(1).to({scaleX:0.3027,scaleY:0.3175,x:861.2,y:617.9},0).wait(1).to({scaleX:0.3111,scaleY:0.3278,x:844.55,y:608},0).wait(1).to({scaleX:0.3195,scaleY:0.338,x:826.85,y:599.95},0).wait(1).to({scaleX:0.3279,scaleY:0.3483,x:811.85,y:587.65},0).wait(1).to({scaleX:0.3363,scaleY:0.3585,x:802,y:570.95},0).wait(1).to({scaleX:0.3447,scaleY:0.3688,x:798.8,y:560.65,alpha:0.9999},0).wait(1).to({scaleX:0.3531,scaleY:0.379,x:796.05,y:550.2},0).wait(1).to({scaleX:0.3615,scaleY:0.3893,x:793.45,y:539.7},0).wait(1).to({scaleX:0.3699,scaleY:0.3995,x:791.05,y:529.15},0).wait(1).to({scaleX:0.3783,scaleY:0.4098,x:788.85,y:518.55},0).wait(1).to({scaleX:0.3867,scaleY:0.42,x:787,y:507.9},0).wait(1).to({scaleX:0.395,scaleY:0.4303,x:785.55,y:497.2},0).wait(1).to({scaleX:0.4034,scaleY:0.4405,x:784.7,y:486.4},0).wait(1).to({scaleX:0.4118,scaleY:0.4508,x:782.3,y:475.9},0).wait(1).to({scaleX:0.4202,scaleY:0.461,x:779,y:465.55},0).wait(1).to({scaleX:0.4286,scaleY:0.4713,x:775.25,y:455.45},0).wait(1).to({scaleX:0.437,scaleY:0.4815,x:770.95,y:445.5},0).wait(1).to({scaleX:0.4454,scaleY:0.4918,x:766.3,y:435.75},0).wait(1).to({scaleX:0.4731,scaleY:0.5173,x:761.3,y:426.2},0).wait(1).to({scaleX:0.5008,scaleY:0.5428,x:755.9,y:416.85},0).wait(1).to({scaleX:0.5285,scaleY:0.5683,x:750.05,y:407.8},0).wait(1).to({scaleX:0.5562,scaleY:0.5938,x:743.75,y:399.05},0).wait(1).to({scaleX:0.5839,scaleY:0.6193,x:736.9,y:390.75},0).wait(1).to({scaleX:0.6116,scaleY:0.6448,x:729.35,y:383.05},0).wait(1).to({scaleX:0.6394,scaleY:0.6703,x:721,y:376.2},0).wait(1).to({scaleX:0.6671,scaleY:0.6958,x:711.7,y:370.8},0).wait(1).to({scaleX:0.6948,scaleY:0.7213,x:702.55,y:365.25},0).wait(1).to({scaleX:0.7225,scaleY:0.7467,x:695.4,y:356.6,alpha:1},0).wait(1).to({scaleX:0.7502,scaleY:0.772,x:688.8,y:347.5},0).wait(1).to({scaleX:0.7779,scaleY:0.7973,x:682.4,y:338.3},0).wait(1).to({scaleX:0.8056,scaleY:0.8226,x:676.1,y:329},0).wait(1).to({scaleX:0.8333,scaleY:0.8479,x:669.85,y:319.7},0).wait(1).to({scaleX:0.861,scaleY:0.8732,x:663.65,y:310.35},0).wait(1).to({scaleX:0.8887,scaleY:0.8985,x:657.45,y:301},0).wait(1).to({scaleX:0.9164,scaleY:0.9239,x:651.3,y:291.6},0).wait(1).to({scaleX:0.9441,scaleY:0.9492,x:645.15,y:282.2},0).wait(1).to({scaleX:0.9718,scaleY:0.9745,x:639,y:272.8},0).wait(1).to({scaleX:0.9995,scaleY:0.9998,x:632.7,y:263.55},0).to({_off:true},1).wait(1));

	// btnIngresar
	this.instance_2 = new lib.btnIngresar();
	this.instance_2.setTransform(1749.8,480,1,1,0,0,0,71,0);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.btnIngresar = new lib.btnIngresar();
	this.btnIngresar.name = "btnIngresar";
	this.btnIngresar.setTransform(1068,460,1,1,0,0,0,71,0);
	new cjs.ButtonHelper(this.btnIngresar, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},39).to({state:[{t:this.btnIngresar}]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1067.95,y:460.15},39).to({_off:true,x:1068,y:460},1).wait(60));

	// seguredes
	this.instance_3 = new lib.titulo("synched",0);
	this.instance_3.setTransform(1621.5,268,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:939.5,y:255},39).to({startPosition:0},1).wait(60));

	// manual
	this.instance_4 = new lib.manual("synched",0);
	this.instance_4.setTransform(1871.45,706);

	this.manual = new lib.manual("synched",0);
	this.manual.name = "manual";
	this.manual.setTransform(1243,706);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},39).to({state:[{t:this.manual}]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:1243},39).to({_off:true},1).wait(60));

	// hombre
	this.instance_5 = new lib.pescador2();
	this.instance_5.setTransform(-186,475.5,0.5,0.5,0,0,0,210,183.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({x:496.3,y:485.95},26).to({x:496.35,y:486.1},1).wait(60));

	// celular
	this.instance_6 = new lib.MANOMOVIMIENTO();
	this.instance_6.setTransform(-484.75,503);
	this.instance_6._off = true;
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({x:190.5},26).wait(61));

	// der_fondo
	this.instance_7 = new lib.fondodDer();
	this.instance_7.setTransform(-1684.25,-122,1,1,0,0,0,1021.5,697);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:2043.5,regY:1394,x:-636.55,y:575.3},0).wait(1).to({x:-610.85,y:575.6},0).wait(1).to({x:-585.15,y:575.85},0).wait(1).to({x:-559.5,y:576.15},0).wait(1).to({x:-533.8,y:576.45},0).wait(1).to({x:-508.1,y:576.7},0).wait(1).to({x:-482.4,y:577},0).wait(1).to({x:-456.75,y:577.25},0).wait(1).to({x:-431.05,y:577.55},0).wait(1).to({x:-405.35,y:577.85},0).wait(1).to({x:-379.7,y:578.1},0).wait(1).to({x:-354,y:578.4},0).wait(1).to({x:-328.3,y:578.65},0).wait(1).to({x:-302.6,y:578.95},0).wait(1).to({x:-276.95,y:579.25},0).wait(1).to({x:-251.25,y:579.5},0).wait(1).to({x:-225.55,y:579.8},0).wait(1).to({x:-199.9,y:580.1},0).wait(1).to({x:-174.2,y:580.35},0).wait(1).to({x:-148.5,y:580.65},0).wait(1).to({x:-122.8,y:580.9},0).wait(1).to({x:-97.15,y:581.2},0).wait(1).to({x:-71.45,y:581.5},0).wait(1).to({x:-45.75,y:581.75},0).wait(1).to({x:-20.1,y:582.05},0).wait(1).to({x:5.6,y:582.3},0).wait(1).to({x:31.3,y:582.6},0).wait(1).to({x:57,y:582.9},0).wait(1).to({x:82.65,y:583.15},0).wait(1).to({x:108.35,y:583.45},0).wait(1).to({x:134.05,y:583.75},0).wait(1).to({x:159.7,y:584},0).wait(1).to({x:185.4,y:584.3},0).wait(1).to({x:211.1,y:584.55},0).wait(1).to({x:236.8,y:584.85},0).wait(1).to({x:262.45,y:585.15},0).wait(1).to({x:288.15,y:585.4},0).wait(1).to({x:313.85,y:585.7},0).wait(1).to({x:339.5,y:585.95},0).wait(61));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1000.7,262,3016,1021);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/fondoizq.png?1675790962519", id:"fondoizq"},
		{src:"images/index_atlas_1.png?1675790962412", id:"index_atlas_1"},
		{src:"sounds/clic.mp3?1675790962519", id:"clic"},
		{src:"sounds/sound.mp3?1675790962519", id:"sound"},
		{src:"sounds/sound2.mp3?1675790962519", id:"sound2"}
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