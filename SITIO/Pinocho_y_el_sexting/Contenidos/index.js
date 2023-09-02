(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1554,512,151,71],[1887,151,147,95],[691,0,720,768],[1413,0,472,127],[1413,129,472,127],[1413,258,448,125],[1413,385,448,125],[0,1484,854,125],[856,1484,854,125],[1250,922,760,127],[1250,1051,760,127],[0,1264,534,125],[1250,1180,534,125],[1250,1307,534,125],[1413,512,139,129],[536,1264,143,149],[1887,0,143,149],[1554,585,103,93],[1413,643,90,88],[1863,258,133,259],[691,770,557,712],[0,0,689,979],[375,981,296,281],[0,981,373,256],[1659,616,382,25],[1707,512,102,102],[1250,770,765,150]]}
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



(lib.AvionAmarillo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AvionAzul = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BarraContenidos = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ComoEvitarlo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ComoEvitarlo_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ComoOcurre = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.btn_comoOcurre_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ContenidoExtra = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Btn_ContenidoExtra_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Btn_Quedebohacer_Hover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Btn_Quedebohacer_Hover_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BtnHoverQueEsSexting = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.btnQueesSextin = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.btnQueesSextinpngcopia = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.EmojiCorazon = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.EmojiDiablo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.EmojiPicardia = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.IconAdvertencia = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.IconPeligro = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.LineasPunteadas = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.ManoDer = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.ManoIzq_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Mensaje1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Mensaje2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.posición = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.SiguienteAtras = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Tituloindicecontenidos = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(26);
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


(lib.lineas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ACbLoQgNgEgOgNIgGgGQAVAHASgFQAVgFALgWQAMgVgGgVQgFgQgPgOQgKgKgUgOQg8gpgigfQgxgrgcgsQgMgSgNgbIgXgtIgPgfQgJgSgEgOQgHgaAAgtQgBgzACguQALBmApBtQAwB+BDA9QATASAmAaQApAdAQAOQAgAbALAaQAHARAAARQgBASgJAOQgKAPgSAFQgJADgIAAQgJAAgIgDgAjhBjQgJi4BNiWIAZguIAZguQAag0AMg5QgCArgNAnQgKAcgVAoIgjBBQgrBVgRB0QgJBAgDBaIgDgjgAAumvQAAhBgRhTQgOhLgogPQgUgHgWAJQgVAKgJAVQgCAGgBAIQgQgKgdgPQgngUgKgXQgFgMABgOQABAJAFAJQALAUAaAMQAYAMAWgEQAOgCAMgJQAMgJAFgNQAGgOgCgPQgBgOgIgMQBFAhAeA1QAXAoAEA6QADAngHBBIgGAtIABgSg");
	var mask_graphics_4 = new cjs.Graphics().p("ACbL0QgNgFgOgMIgGgHQAVAHASgFQAVgFALgWQAMgVgGgVQgFgQgPgOQgKgKgUgNQg8gqgigeQgxgrgcgtQgMgSgNgbIgXgtIgPgfQgJgSgEgOQgHgaAAgtQgBgzACgtQALBmApBtQAwB9BDA+QATARAmAbQApAcAQAOQAgAcALAZQAHARAAARQgBATgJANQgKAPgSAGQgJADgIAAQgJAAgIgDgAjhBuQgJi4BNiWIAZgtIAZguQAag0AMg5QgCAqgNAoQgKAcgVAnIgjBBQgrBWgRBzQgJBAgDBbIgDgkgAAumkQAAhBgRhTQgOhLgogOQgUgIgWAKQgVAJgJAVQgCAHgBAIQgQgLgdgPQgngUgKgXQgKgXANgZQAOgaAZgEQAUgDAgAMQBcAkAkBAQAXAoAEA5QADAogHBAIgGAtIABgSg");
	var mask_graphics_9 = new cjs.Graphics().p("ACRL0QgMgFgOgMIgXgXIgSgSIANAIQAWANAOAFQAUAIASgDQAWgEAOgWQAMgSgEgUIACAEQAHARgBARQAAATgKANQgKAPgSAGQgIADgJAAQgIAAgJgDgAA+IoQg8gigeghQgVgVgTghQgMgTgVgoQgdg8gPgpIABACQAPAMAZACQANAAAKgCQAJAdALAdQAwB9BCA+QATARAmAbIAoAcIhYgygAiEAwIADgHIAPgiQgCAYgBAZQgHgFgIgDgAimjgIAZgtIAFgKIgTAwIg5CCIgFAMQAShHAhhAgAAJlCQAXhRgggfQgNgLgSgCQgTgCgPAIQgHAFgGAGQAHggACghQAEhIgfggQgMgNgvgYQgmgUgKgXQgLgXAOgZQAOgaAZgEQAUgDAfAMQBcAkAlBAQAXAoAEA5QACAogGBAQgIBFgKAgQgJAigXAvIARg5g");
	var mask_graphics_14 = new cjs.Graphics().p("Ah+EcQgDAhgFApIgGArQACg8AMg5gAAwCWQADgUgFgRQgGgUgOgLQgPgLgSABQgTAAgQALIgEADIAYgtQAohTAGhgQAEhIgeggQgMgNgugXQgngUgKgXQgKgXANgaQAOgZAZgEQAUgEAgANQBbAjAlBAQAXAoAEA6QADAngHBBQgIBFgJAfQgNAtgmBFIgZAuQAEgLABgKgAhOCRIACgEIAAAEIgBAAIgBAAg");
	var mask_graphics_19 = new cjs.Graphics().p("ADSLGQgHgjgUgWIgSgRQgMgLgFgIIgGgJIAeAXQAgAbALAaQAHARAAARQgBAPgGALQgCgUgDgOgAiFDmQgFgcABgkIAChAQABgiAHgSIAMgXIAGgLQgGA0AEA5QAFA/AQBCQgIgDgKAAQgKAAgKAFIgFgagAhtglQgMgVgUgGQgWgIgZAMQgUAJgNARQARhdAqhSIAZguIAZguQAphUAGhgQAEhIgfggQgMgNgugXQgngUgKgXQgKgXANgaQAOgZAZgEQAUgEAgANQBcAjAkBAQAXAoAEA6QADAngHBBQgIBFgJAgQgNAtglBFQgtBTgMAdQgRApgIAsQgCgJgEgIg");
	var mask_graphics_24 = new cjs.Graphics().p("ACbL0QgIgDgJgGQAPgEANgNQAUgTgCgZQgDgagbgXQgJgHgPgKIgZgQQgggXgfgnQgQgVgZgnIAFgLIABgHQAaAnAeAbQATARAmAbQApAcAQAOQAgAcALAZQAHARAAARQgBATgJANQgKAPgSAGQgJADgIAAQgJAAgIgDgAiADEIgFgWQgDgNgFgIQgJgPgQgIQgRgHgRACQgMACgLAHIgCgYQgJi4BNiWIAZgtIAZguQAphUAGhgQAEhIgfggQgMgNgugYQgngUgKgXQgKgXANgZQAOgaAZgEQAUgDAgAMQBcAkAkBAQAXAoAEA5QADAogHBAQgIBFgJAgQgNAuglBFQgtBSgMAeQgqBnAJB/QAIBrArB0QgJgBgJACIgHACQgjhLgNhCg");
	var mask_graphics_29 = new cjs.Graphics().p("AgeJeIAbAXIgHAKIgUghgAgTHJQgTgTgJgHQgQgMgQgCQgOgCgNAGQgdhhgEhfQgKi4BOiVIAZguIAYguQAphUAGhgQAEhIgeggQgMgNgvgXQgmgUgKgXQgLgXAOgaQAOgZAZgEQAUgEAfANQBbAjAmBAQAXAoAEA6QACAngGBBQgIBFgKAgQgNAtgmBFQgtBTgMAdQgoBnAJB/QAIBwAtB4QAOAmAQAgQg1gtgdgeg");
	var mask_graphics_34 = new cjs.Graphics().p("ACbL0QgJgDgKgIIAKAAQAOgBAMgIQANgJAGgMQAHgNAAgPQgBgPgHgMQgIgNgVgOQgbgSgGgFQgOgQgIgHIgQgOIgNgUQgHgJgOgKIgYgRIgagZQgPgOgOgEQgTgFgTAIQgUAKgJAWIgEANQgXgkgVgsQhPipgIijQgJi4BNiWIAZgtIAZguQAphUAGhgQAEhIgfggQgMgNgugYQgngUgKgXQgKgXANgZQAOgaAZgEQAUgDAgAMQBcAkAkBAQAXAoAEA5QADAogHBAQgIBFgJAgQgNAuglBFQgtBSgMAeQgqBnAJB/QAIBvAuB5QAwB9BDA+QATARAmAbQApAcAQAOQAgAcALAZQAHARAAARQgBATgJANQgKAPgSAGQgJADgIAAQgJAAgIgDg");
	var mask_graphics_39 = new cjs.Graphics().p("ACbL0QgJgDgKgIIAKAAQAOgBAMgIQANgJAGgMQAHgNAAgPQgBgPgHgMQgIgNgVgOQgbgSgGgFQgOgQgIgHIgQgOIgNgUQgHgJgOgKIgYgRIgagZQgPgOgOgEQgLgDgMACQAXACAOAOIAKANQAHAJATALQATAMAIAIQAMANADASQAEASgGAQQgGAQgPALQgPALgRABQgSABgQgKQgFgDgSgPQgPgOgXgOIgSgOQgLgKgFgPQgFgPACgOQACgNAIgLQgQgbgOgeQhPipgIijQgJi4BNiWIAZgtIAZguQAphUAGhgQAEhIgfggQgMgNgugYQgngUgKgXQgKgXANgZQAOgaAZgEQAUgDAgAMQBcAkAkBAQAXAoAEA5QADAogHBAQgIBFgJAgQgNAuglBFQgtBSgMAeQgqBnAJB/QAIBvAuB5QAwB9BDA+QATARAmAbQApAcAQAOQAgAcALAZQAHARAAARQgBATgJANQgKAPgSAGQgJADgIAAQgJAAgIgDg");
	var mask_graphics_44 = new cjs.Graphics().p("ACbL0QgJgDgKgIIAKAAQAOgBAMgIQANgJAGgMQAHgNAAgPQgBgOgGgLIAAAJQgCATgLANQgOARgZAEQgUAEgYgIQgWgHgdgTQgogagjgdQgngggOgZQgKgSgCgUQgBgVAJgQQAHgMALgIQAMgIANgCQAOgCANAFQAOAFAIAKIAPAUQAIAIAOAIIAnAbIgDgFQgHgJgOgKIgYgRIgagZQgPgOgOgEQgTgFgTAIQgUAKgJAWIgEANQgXgkgVgsQhPipgIijQgJi4BNiWIAZgtIAZguQAphUAGhgQAEhIgfggQgMgNgugYQgngUgKgXQgKgXANgZQAOgaAZgEQAUgDAgAMQBcAkAkBAQAXAoAEA5QADAogHBAQgIBFgJAgQgNAuglBFQgtBSgMAeQgqBnAJB/QAIBvAuB5QAwB9BDA+QATARAmAbQApAcAQAOQAgAcALAZQAHARAAARQgBATgJANQgKAPgSAGQgJADgIAAQgJAAgIgDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:50.2748,y:73.9}).wait(4).to({graphics:mask_graphics_4,x:50.2748,y:72.7742}).wait(5).to({graphics:mask_graphics_9,x:51.2017,y:72.7742}).wait(5).to({graphics:mask_graphics_14,x:41.7597,y:37.0492}).wait(5).to({graphics:mask_graphics_19,x:50.7767,y:71.3492}).wait(5).to({graphics:mask_graphics_24,x:50.2748,y:72.7742}).wait(5).to({graphics:mask_graphics_29,x:41.7329,y:60.8242}).wait(5).to({graphics:mask_graphics_34,x:50.2748,y:72.7742}).wait(5).to({graphics:mask_graphics_39,x:50.2748,y:72.7742}).wait(5).to({graphics:mask_graphics_44,x:50.2748,y:72.7742}).wait(6));

	// Capa_1
	this.instance = new lib.LineasPunteadas();
	this.instance.setTransform(97.75,17.2,0.5,0.5,0,14.9985,-165.0014);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.6,0,45.4,142.3);


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
	this.instance = new lib.EmojiDiablo();
	this.instance.setTransform(-35.75,-37.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-37.2,71.5,74.5);


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
	this.instance = new lib.ManoDer();
	this.instance.setTransform(-139.25,-178,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.2,-178,278.5,356);


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
	this.instance = new lib.EmojiPicardia();
	this.instance.setTransform(-35.75,-37.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-37.2,71.5,74.5);


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
	this.instance = new lib.IconPeligro();
	this.instance.setTransform(-22.5,-22,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-22,45,44);


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
	this.instance = new lib.IconAdvertencia();
	this.instance.setTransform(-25.75,-23.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-23.2,51.5,46.5);


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
	this.instance = new lib.Mensaje2();
	this.instance.setTransform(-93.25,-64,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.2,-64,186.5,128);


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
	this.instance = new lib.EmojiCorazon();
	this.instance.setTransform(34.75,-32.25,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-32.2,69.5,64.5);


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
	this.instance = new lib.EmojiCorazon();
	this.instance.setTransform(-34.75,-32.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-32.2,69.5,64.5);


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
	this.instance = new lib.btnQueesSextin();
	this.instance.setTransform(-117,-18,0.5,0.5);

	this.instance_1 = new lib.BtnHoverQueEsSexting();
	this.instance_1.setTransform(-118,-21,0.5434,0.5436);

	this.instance_2 = new lib.btnQueesSextinpngcopia();
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


(lib.peligro = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación5("synched",0);
	this.instance.setTransform(22.5,22.05,0.6444,0.6444,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:1,scaleY:1,y:22},24).to({regY:0.1,scaleX:0.6444,scaleY:0.6444,y:22.05},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,44);


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
p.nominalBounds = new cjs.Rectangle(0,0,186.5,128);


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
	this.instance = new lib.Interpolación7("synched",0);
	this.instance.setTransform(139.25,178);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:121.7,y:163.15},49).to({x:139.25,y:178},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-14.8,296,370.8);


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
p.nominalBounds = new cjs.Rectangle(0,0,71.5,74.5);


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
	this.instance.setTransform(35.75,37.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29.15},19).to({y:37.25},10).to({y:33.2},10).to({y:37.25},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.1,71.5,82.6);


(lib.corazon2 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(34.75,32.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.4,y:40.35},35).to({x:34.75,y:32.25},39).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,70.8,72.6);


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
p.nominalBounds = new cjs.Rectangle(-2.7,2.7,73.60000000000001,76.39999999999999);


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


(lib.advertencia = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación4("synched",0);
	this.instance.setTransform(25.75,23.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.5},23).to({y:23.25},26).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.7,51.5,53.2);


(lib.msj1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// IconAdvertencia.png
	this.instance = new lib.advertencia();
	this.instance.setTransform(44.8,92.2,1,1,0,0,0,25.8,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// IconPeligro.png
	this.instance_1 = new lib.peligro();
	this.instance_1.setTransform(83,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Mensaje1.png
	this.instance_2 = new lib.Mensaje1();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.msj1, new cjs.Rectangle(0,0,148,140.5), null);


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

	// LineasPunteadas.png
	this.instance = new lib.lineas();
	this.instance.setTransform(196.6,-39.5,1,1,0,0,180,48.9,71.2);

	this.instance_1 = new lib.lineas();
	this.instance_1.setTransform(-140.7,113.8,1,1,0,0,0,48.9,71.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Mensaje1.png
	this.instance_2 = new lib.msj1();
	this.instance_2.setTransform(74,-76.8,1,1,0,0,0,74,70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// EmojiPicardia.png
	this.instance_3 = new lib.emojirisa();
	this.instance_3.setTransform(304.8,80.2,1,1,0,0,0,35.8,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// ManoDer.png
	this.instance_4 = new lib.mano();
	this.instance_4.setTransform(206.2,172,1,1,0,0,0,139.2,178);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Mensaje2.png
	this.instance_5 = new lib.msj2();
	this.instance_5.setTransform(7.2,83,1,1,0,0,0,93.2,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// ManoIzq_1.png
	this.instance_6 = new lib.ManoIzq_1();
	this.instance_6.setTransform(-165,-162,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// EmojiDiablo.png
	this.instance_7 = new lib.emote();
	this.instance_7.setTransform(-50.2,-159.8,1,1,0,0,0,35.8,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// EmojiCorazon.png
	this.instance_8 = new lib.corazon1();
	this.instance_8.setTransform(-121.2,-54.8,1,1,0,0,0,34.8,32.2);

	this.instance_9 = new lib.AvionAmarillo();
	this.instance_9.setTransform(204,-148,0.5,0.5);

	this.instance_10 = new lib.AvionAzul();
	this.instance_10.setTransform(-212,2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// EmojiCorazon.png
	this.instance_11 = new lib.corazon2();
	this.instance_11.setTransform(246.8,10.2,1,1,0,0,0,34.8,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.imagen, new cjs.Rectangle(-212,-197,557.5,547), null);


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

	// DIBUJO
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.659)").ss(1,1,1,3,true).p("EgosACkQBrh8KChcQMDhvRCAAQRCAAMDBvQJiBXCAB1");
	this.shape.setTransform(832.225,486.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9JEMQqjhghUiFIACAAIATABQACgFAGgEIAJgIQAKgKABgNQADgOgHgLQgLgUgYgFQBrh9KChdQMEhvRCAAQRCAAMDBvQJhBYCBB1QgOAAgMALQgMAMgDATQgBAJACAHQACAFAJAIQALALAFADQAIADALAAIAVACIACgEQgzCPrMBmQsDBwxCAAQxCAAsEhwg");
	this.shape_1.setTransform(833.2,508.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

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
p.nominalBounds = new cjs.Rectangle(679.7,360,416,258.9);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1189,
	height: 642,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1692823979590", id:"index_atlas_1"},
		{src:"sounds/sound.mp3?1692823979652", id:"sound"}
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