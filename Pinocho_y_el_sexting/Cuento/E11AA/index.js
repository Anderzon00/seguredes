(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,0,2374,1136]]},
		{name:"index_atlas_P_2", frames: [[0,1066,2377,80],[0,935,2376,129],[647,0,628,879],[0,0,645,933],[1277,0,646,407]]},
		{name:"index_atlas_P_3", frames: [[0,164,2377,64],[2768,199,80,80],[2685,200,80,80],[0,0,2377,80],[2768,117,81,80],[2379,158,81,80],[0,82,2377,80],[2685,117,81,81],[2462,158,80,81],[818,230,79,79],[2544,221,79,80],[2602,0,159,91],[2625,221,45,92],[2379,0,221,156],[2851,117,19,38],[2685,93,15,21],[2763,0,116,115],[2602,93,81,126],[0,230,816,103],[2872,117,14,28]]}
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



(lib._1_1 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1btnpausa = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2_1 = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2btnplay = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._3btncambioEscenaLeft = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._3btncambioEscenaRight = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._4btncambioAudioLeft = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._4btncambioAudioRight = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._5btnDesmute = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._5btnMute = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.antebrazoDer = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BrazoDer = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BrazoIzq = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Fondo = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fondoGUion = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Geppetoo = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.JaulaFrente = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.lagrima = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Lagrimas = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Mangader = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Phone = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Pinochoyaurora = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Sombrajaula = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.VelaLlamaBlanca = function() {
	this.initialize(ss["index_atlas_P_3"]);
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


(lib.ojos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ojos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACXBeQgFAAgMgFQgRgGgIgIQgGgHgCgIQgCgGAAgMIAAgiQAAgXAFgMQADgGADgFQAGgKAFgEQAFgEAJgDQAKgEAFAAIAQgBQAKAAAEABQANAEAIAQQAFAMAEAFIAIAGQASAPgCAcIgCAPQgCAQgFAKQgHAOgKAGQgIAEgOACIgQADIgQABIgDAAgACMA2IABABIAAABIABgBIAAgCIgBgBIgCAAgAivBGIgQgBIgCAAQgRACgJgGQgIgEgDgIQgDgGAAgKIAAgaQgBgLABgHIAAgEIABgFIAAgGQgBgGABgEQACgIAHgJIALgPIAGgLQABgEAGgGQAFgFAGgCQAJgCAMACIAPAFQASAHACANIABAOQACAFAGAJQACAEAAAIQABAcgEASIAAAIIACAGQAAADgDACIgFAFIgGAJQgGAOgHADIgLABgAjVgIIAAADIABAAIAAgDgAjRgTIgCAGIACgDIABgEIgBABg");
	this.shape.setTransform(23.4267,9.4425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC0BRIgBgCQAUAAAQABIgHAFQgIAEgNACIgLACQAGgFgCgHgACGBaQgRgGgHgIQgHgHgCgIQgBgGAAgMIAAgiQAAgXAFgMQACgGAEgFQAGgKAFgEQAFgEAIgDQAKgEAFAAIAQgBQAKAAAFABQAMAEAJAQQAFAMAEAFIAIAGQAMALADAQIhVgCQgGABgCACIAAAAIgCgBQgHgBgDAIQgCAHAGAFIABAAQgEADAAAFQgBAEAEAEIgBADQgFACAAAFQgBAFAFAEIAAAAIAAADQABAGAEABIACABIABACIAEADQgDADgBAEQgBAEADAEIgHgDgAiuBHIAFAAIAKgDIAIgBQAFgBACgDIADgIIACgDIABgBIAFgBIgCADQgGAOgIADIgKABgAjbBCQgHgEgDgIQgDgGAAgKIgBgaQAAgLABgHIAAgEIABgFIgBgGQAAgGABgEQACgIAHgJIALgPIAFgLQACgEAGgGQAFgFAFgCQAJgCAMACIAPAFQATAHACANIABAOQABAFAHAJQABAEAAAIIAAAZIgFgCIABgGQACgEgBgCQgBgFgFgBIgKAAQgcACgdgBIgIABIgDAAIgDAAIgGACIgJABQgEACgBAEQgBAFADADQACACAHACIAAACQAAAFACACQADAFAMAAIADAAIgBACQgCAEADAFQADADADABQgDABgCADQgDAEADAHIAAADIgBACQgDAFACAEQABADAFAEIAFADIgBAAIgBAAIgJAAQgLAAgHgEgADmAdIgCgBIAGAAIAAAFIgEgEg");
	this.shape_1.setTransform(23.3917,9.3375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACXBeQgFAAgMgFIADAAQAZAAAYABIgQADIgQABIgDAAgABtBLQgGgHgCgIQgCgGAAgMIAAgiQAAgXAFgMQADgGADgFQAGgKAFgEQAFgEAJgDQAKgEAFAAIAQgBQAKAAAEABQANAEAIAQQAFAMAEAFIAIAGQASAPgCAcIgCAPIgEAVQgCgEgDgCIgIgBIgJAAIgHAAIgHgCIgQgBIgWAAIgIABIgCAAQgDAAgDABQgDACgBADIgBAFIgDABQgEAEABAEIAAABIgDABQgDADAAAEQAAADABACQgIgEgFgFgAivBGIgQgBIgCAAQgRACgJgGQgIgEgDgIQgDgGAAgKIAAgaQgBgLABgHIAAgEIABgFIAAgGQgBgGABgEQACgIAHgJIALgPIAGgLQABgEAGgGQAFgFAGgCQAJgCAMACIAPAFQASAHACANIABAOQACAFAGAJQACAEAAAIQABAcgEASIAAAIIACAGIgBADIAAgBQAAgFgGgDIgHgBIgzgBQgIgBgDADQgDACgBADQgEACgBAEQgBAGADACQgDADABAGQACAEAEACQADABAHgBQAQgCAaAEIAGABQgDAEgDABIgLABgAjVgIIAAADIABAAIAAgDgAjRgTIgCAGIACgDIABgEIgBABg");
	this.shape_2.setTransform(23.4267,9.4425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},3).to({state:[{t:this.shape_1}]},41).to({state:[{t:this.shape_2}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,18.9);


(lib.lagrimas4 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AC3FeQgRgEgigDIAAAAIg/gFIgHgIIAAAAIgGgGIAAAAQhugvhWhnIAAAAQgOgRgEgLIAAAAIgBgDIAAAAQgDgIAAgHIAAAAQAAgLAGgJIAAAAQAHgJAMgCIAAAAIACAAIAAAAIgCAAIAAAAQgMACgHAJIAAAAQgGAJAAALIAAAAQAAAHADAIIAAAAIABADIAAAAQgTgGgNgBIAAAAIgJgBIAAAAQgogWgQggIAAAAQgPgeAKgkIAAAAQAJgiAcgTIAAAAQAbgRAqgBIAAAAIgBgDIAAAAIgJgQIAAAAIgNgNIAAAAQgTgTgGgaIAAAAQgGgbAIgZIAAAAQAIgZAVgSIAAAAQARgOAUgGIAAAAQACgYAOgVIAAAAQASgbAhgOIAAAAIAEgBIAAAAQABgLADgKIAAAAIC2AAIAFABIAAAAIACAEIAAAAQAJAXgEAaIAAAAQgDAagQATIAAAAQgHAJgJAHIAAAAQAXBNgDBHIAAAAIgEAxIAAAAIgGAwIAAAAQgCASAFAKIAAAAQADAGAIAFIAAAAIAPAJIAAAAQAiARAUAfIAAAAQAGAJAEAKIAAAAQATAHAOANIAAAAQAQAQAIAWIAAAAQAHAWgDAWIAAAAQgDAWgOAYIAAAAIgCADIAAAAIgHgDIAAAAQgKgEgPAAIAAAAIgaACIAAAAIgOAAIAAAAQgegZhEgrIAAAAQgVgNgLgGIAAAAIgjgOQgngRgZgjIAAAAQgNgTgJgEIAAAAQAJAEANATIAAAAQAZAjAnARIAAAAIAjAOQALAGAVANIAAAAQBEArAeAZIAAAAIAOAAIAAAAIAagCIAAAAQAPAAAKAEIAAAAIAHADIAAAAQAIAFAGAHIAAAAQAJAMgEAMIAAAAQgGARgbAIIAAAAQgUAGgZACIAAAAIAIAFIAAAAQAEADADAEIAAAAgAhzBmIABABIAAAAIAGgHIAAAAIgGAHIAAAAIgBgBIAAAAIAAAAgAh0BlIgCgBIAAAAIACABgAiGBhIACAAIAAAAIgCAAgAiEBhIAAAAIAAAAIAAAAgAhqBfQAIgFAIAAIAAAAQgIAAgIAFgAhZBaIgBAAIAAAAIABAAg");
	mask.setTransform(-594.4165,-150.6875);

	// Capa_1
	this.instance = new lib.lagrima();
	this.instance.setTransform(-595,-170,0.5,0.5);

	this.instance_1 = new lib.lagrima();
	this.instance_1.setTransform(-597,-186,0.5,0.5);

	this.instance_2 = new lib.Lagrimas();
	this.instance_2.setTransform(-606,-177,0.5,0.5);

	this.instance_3 = new lib.lagrima();
	this.instance_3.setTransform(-606,-168,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-186,x:-597}},{t:this.instance,p:{y:-170}}]}).to({state:[{t:this.instance_3,p:{y:-168}},{t:this.instance_1,p:{y:-183,x:-597}},{t:this.instance,p:{y:-157}}]},4).to({state:[{t:this.instance_3,p:{y:-162}},{t:this.instance_1,p:{y:-175,x:-597}},{t:this.instance,p:{y:-155}}]},5).to({state:[{t:this.instance_3,p:{y:-158}},{t:this.instance_1,p:{y:-174,x:-597}},{t:this.instance,p:{y:-141}}]},5).to({state:[{t:this.instance_3,p:{y:-147}},{t:this.instance_1,p:{y:-162,x:-597}},{t:this.instance,p:{y:-123}}]},5).to({state:[{t:this.instance_3,p:{y:-130}},{t:this.instance_1,p:{y:-145.25,x:-596.5}},{t:this.instance,p:{y:-122}}]},5).to({state:[{t:this.instance_3,p:{y:-130}},{t:this.instance_1,p:{y:-122,x:-595}},{t:this.instance,p:{y:-122}}]},5).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-606,-186,20.5,70.8);


(lib.lagrimas3 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AC/FOQgJgEgNgFIAAAAIgXgHIAAAAQgUgGgugYIAAAAQghgRgRgMIAAAAIgXgRIAAAAQgNgLgKgFIAAAAIglgTIAAAAQgWgLgMgMIAAAAIgMgOIAAAAQgHgIgHgEIAAAAIgFgCIAAAAIgOgEIAAAAIgMgGIAAAAIgMgGIAAAAQgSgGgNANIAAAAQgEAEgCAEIAAAAIgGAAIAAAAQgogXgQgfIAAAAQgPgfAKgjIAAAAQAJgjAcgSIAAAAQAbgSAqgBIAAAAIgBgDIAAAAIgJgPIAAAAIgNgOIAAAAQgTgSgGgbIAAAAQgGgbAIgZIAAAAQAIgZAVgRIAAAAQARgPAUgFIAAAAQACgZAOgUIAAAAQASgcAhgNIAAAAIAEgCIAAAAQABgKADgKIAAAAIC2gBIAFABIAAAAIACAEIAAAAQAJAYgEAZIAAAAQgDAagQAUIAAAAQgHAJgJAGIAAAAQAXBOgDBHIAAAAIgEAxIAAAAIgGAwIAAAAQgCASAFAJIAAAAQADAGAIAGIAAAAIAPAIIAAAAQAiASAUAeIAAAAQAGAJAEAKIAAAAQATAHAOAOIAAAAQAQAPAIAWIAAAAQAHAWgDAWIAAAAQgDAXgOAYIAAAAQgPAbgSAMIAAAAQgIAFgHADIAAAAIgCAEIAAAAIgGgEgAhOBtQAJAEANASIAAAAQAZAkAnARIAAAAIAjAOQALAFAVANIAAAAQBMAxAcAZIAAAAQAWAUAAAQIAAAAQAAgQgWgUIAAAAQgcgZhMgxIAAAAQgVgNgLgFIAAAAIgjgOQgngRgZgkIAAAAQgNgSgJgEIAAAAIAAAAgAhsBxQgMAKgBARIAAAAQABgRAMgKIAAAAIAAAAgAhqBvQAIgFAIAAIAAAAQgIAAgIAFgAhZBqIgBAAIAAAAIABAAg");
	mask.setTransform(-594.4165,-152.3124);

	// Capa_1
	this.instance = new lib.lagrima();
	this.instance.setTransform(-595,-170,0.5,0.5);

	this.instance_1 = new lib.lagrima();
	this.instance_1.setTransform(-597,-186,0.5,0.5);

	this.instance_2 = new lib.Lagrimas();
	this.instance_2.setTransform(-606,-177,0.5,0.5);

	this.instance_3 = new lib.lagrima();
	this.instance_3.setTransform(-606,-168,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-186,x:-597}},{t:this.instance,p:{y:-170}}]}).to({state:[{t:this.instance_3,p:{y:-168}},{t:this.instance_1,p:{y:-183,x:-597}},{t:this.instance,p:{y:-157}}]},4).to({state:[{t:this.instance_3,p:{y:-162}},{t:this.instance_1,p:{y:-175,x:-597}},{t:this.instance,p:{y:-155}}]},5).to({state:[{t:this.instance_3,p:{y:-158}},{t:this.instance_1,p:{y:-174,x:-597}},{t:this.instance,p:{y:-141}}]},5).to({state:[{t:this.instance_3,p:{y:-147}},{t:this.instance_1,p:{y:-162,x:-597}},{t:this.instance,p:{y:-123}}]},5).to({state:[{t:this.instance_3,p:{y:-130}},{t:this.instance_1,p:{y:-145.25,x:-596.5}},{t:this.instance,p:{y:-122}}]},5).to({state:[{t:this.instance_3,p:{y:-130}},{t:this.instance_1,p:{y:-122,x:-595}},{t:this.instance,p:{y:-122}}]},5).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-606,-186,20.5,67.5);


(lib.lagrimas2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ABpGKIgdAAIAAAAQgTABgKgBIAAAAQgvgEgngaIAAAAIgWgRIAAAAQgNgJgKgFIAAAAIgVgLIAAAAQgNgHgFgIIAAAAQgGgMAFgNIAAAAQAEgNAMgFIAAAAQgDgeAGgaIAAAAQgOgJgMgTIAAAAQgHgKgNgYIAAAAQgJgSABgLIAAAAQAAgFADgFIAAAAQAEgKALgMIAAAAQgJgGgFgJIAAAAQgEgHAAgHIAAAAIAAgFIAAAAQACgMANgHIAAAAQgNAHgCAMIAAAAIAAAFIAAAAQAAAHAEAHIAAAAQAFAJAJAGIAAAAQgLAMgEAKIAAAAQgWgHgOgCIAAAAIgJgBIAAAAQgogWgQggIAAAAQgPgeAKgjIAAAAQAJgjAcgSIAAAAQAbgSArgBIAAAAIgCgDIAAAAIgJgPIAAAAIgNgOIAAAAQgTgSgGgbIAAAAQgGgbAIgZIAAAAQAIgZAVgRIAAAAQARgPAVgFIAAAAQABgZAOgUIAAAAQASgcAhgOIAAAAIAFgBIAAAAQAAgLADgJIAAAAIC3gBIAEABIAAAAIACAEIAAAAQAJAYgEAZIAAAAQgDAagQAUIAAAAQgHAIgIAHIAAAAQAXBNgEBIIAAAAIgEAwIAAAAIgGAyIAAAAQgCASAFAJIAAAAQADAFAIAFIAAAAIAPAJIAAAAQAiASAUAeIAAAAQAGAJAFAKIAAAAQATAHANAOIAAAAQAQAPAIAWIAAAAQAHAWgDAWIAAAAQgDAVgMAXIAAAAQgHgGgJgCIAAAAIgBAAIAAAAIABAAIAAAAQAJACAHAGIAAAAIADADIAAAAQAJAIAAAKIAAAAIAAAJIAAAAIABAJIAAAAIAFALIAAAAQAFAMgKANIAAAAQgEAFgQAOIAAAAIgjAnIAAAAQgVAXgTAIIAAAAQgMADgSABIAAAAIgegBgAh2AcQAKABAOAHIAAAAIAYALIAAAAQALAGAUAGIAAAAIAgAMIAAAAQAPAHAnAXIAAAAQAtAaASATIAAAAQAUAZAMALIAAAAIAZARIAAAAQAPAKAFALIAAAAIAWgDIAAAAIgWADIAAAAQgFgLgPgKIAAAAIgZgRIAAAAQgMgLgUgZIAAAAQgSgTgtgaIAAAAQgngXgPgHIAAAAIgggMIAAAAQgUgGgLgGIAAAAIgYgLIAAAAQgOgHgKgBIAAAAIgBgBIAAAAIABABgADTDZIACAAIAAAAIgCAAgADWDZIgBAAIAAAAIABAAgAiPAgQAJgFAKAAIAAAAQgKAAgJAFgAh5AbIAAAAgAh7AbIgBAAIAAAAIABAAg");
	mask.setTransform(-594.2286,-146.6001);

	// Capa_1
	this.instance = new lib.lagrima();
	this.instance.setTransform(-595,-170,0.5,0.5);

	this.instance_1 = new lib.lagrima();
	this.instance_1.setTransform(-597,-186,0.5,0.5);

	this.instance_2 = new lib.Lagrimas();
	this.instance_2.setTransform(-606,-177,0.5,0.5);

	this.instance_3 = new lib.lagrima();
	this.instance_3.setTransform(-606,-168,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-186,x:-597}},{t:this.instance,p:{y:-170}}]}).to({state:[{t:this.instance_3,p:{y:-168}},{t:this.instance_1,p:{y:-183,x:-597}},{t:this.instance,p:{y:-157}}]},4).to({state:[{t:this.instance_3,p:{y:-162}},{t:this.instance_1,p:{y:-175,x:-597}},{t:this.instance,p:{y:-155}}]},5).to({state:[{t:this.instance_3,p:{y:-158}},{t:this.instance_1,p:{y:-174,x:-597}},{t:this.instance,p:{y:-141}}]},5).to({state:[{t:this.instance_3,p:{y:-147}},{t:this.instance_1,p:{y:-162,x:-597}},{t:this.instance,p:{y:-123}}]},5).to({state:[{t:this.instance_3,p:{y:-130}},{t:this.instance_1,p:{y:-145.25,x:-596.5}},{t:this.instance,p:{y:-122}}]},5).to({state:[{t:this.instance_3,p:{y:-130}},{t:this.instance_1,p:{y:-122,x:-595}},{t:this.instance,p:{y:-122}}]},5).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-606,-186,20.5,78.9);


(lib.lagrimas1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ACbF2QgHgDgIgIIAAAAIgOgMIAAAAQgGgFgLgFIAAAAIgRgJIAAAAQgNgIgRgSIAAAAIgcgcIAAAAIgLgKIAAAAIgKgKIAAAAIgJgPIAAAAQgEgGgKgGIAAAAIgTgKIAAAAQgOgIgOgSIAAAAIgYggIAAAAIgUgWIAAAAIgGgHIAAAAQgOgRAAgSIAAAAQABgRAMgKIAAAAQgMAKgBARIAAAAQAAASAOARIAAAAIAGAHIAAAAIgsgPIAAAAQgcgKgRgCIAAAAIgJAAIAAAAQgogWgQggIAAAAQgPgfAKgiIAAAAQAJgkAcgSIAAAAQAbgSAqgBIAAAAIgBgDIAAAAIgJgPIAAAAIgNgOIAAAAQgTgSgGgbIAAAAQgGgbAIgZIAAAAQAIgZAVgRIAAAAQARgPAUgFIAAAAQACgZAOgUIAAAAQASgcAhgNIAAAAIAEgCIAAAAQABgKADgKIAAAAIC2gBIAFABIAAAAIACAEIAAAAQAJAYgEAZIAAAAQgDAagQAUIAAAAQgHAJgJAHIAAAAIABADIAAAAQgsACgqAKIAAAAIgQAFIAAAAQgKABgNAEIAAAAQgTAGgKAGIAAAAIgOAKIgSALIAAAAQgLAGgFAGIAAAAQgIAJAAALIAAAAIAAACIAAAAQAAAMALAIIAAAAIADADIAAAAIAAABIAAAAIgBAEIAAAAQgFAIAAAHIAAAAIAAACIAAAAQAAAJAEAHIAAAAQAFAJAJAEIAAAAIABAAIAAAAIgBAAIAAAAQgJgEgFgJIAAAAQgEgHAAgJIAAAAIAAgCIAAAAQAAgHAFgIIAAAAIABgEIAAAAIAAgBIAAAAIgDgDIAAAAQgLgIAAgMIAAAAIAAgCIAAAAQAAgLAIgJIAAAAQAFgGALgGIAAAAIASgLIAAAAIAOgKQAKgGATgGIAAAAQANgEAKgBIAAAAIAQgFIAAAAQAqgKAsgCIAAAAIARgBIAAAAQAMgBAHADIAAAAQAIACAGAIIAAAAQAFAHABAIIAAAAQAAAJgEAIIAAAAQgFAIgHADIAAAAQgIAEgRABIAAAAQgiABgkAGIAAAAQgFAHgNAFIAAAAQgLAEgJAAIAAAAIgIAHIAAAAQgFAFgHACIAAAAIgcAtIgIANIAAAAIgCACIAAAAQgCALABAOIAAAAQABAsAFAWIAAAAQAEAMAJAYIAAAAIAQAhIAAAAQAGAQAGAKIAAAAQAIAQARAQIAAAAQAKANAKAIIAAAAQAIAHAWAOIAAAAIAYARIAAAAQASAMAaALIAAAAIATAIIAAAAIAbAJIAAAAQAkAKAOgNIAAAAQAJgJgBgNIAAAAQAAgIgEgFIAAAAQAHgBAGgEIAAAAQAGgEADgGIAAAAQAGATgDATIAAAAQgDAXgOAYIAAAAQgPAbgSAMIAAAAQgIAGgHACIAAAAIABgDIAAAAIABgFIAAAAQAAgQgWgUIAAAAQgcgZhMgxIAAAAQgVgNgLgFIAAAAIgjgOQgngRgZgkIAAAAQgNgSgJgEIAAAAQAJAEANASIAAAAQAZAkAnARIAAAAIAjAOQALAFAVANIAAAAQBMAxAcAZIAAAAQAWAUAAAQIAAAAIgBAFIAAAAIgBADIAAAAQgEAMgTALIAAAAQAKAAAIAGIAAAAQAIAGACAKIAAAAQADAJgEAKIAAAAQgEAJgIAGIAAAAQgJAHgKAAIAAAAQgJAAgIgFgAhqBGQAIgFAIAAIAAAAQgIAAgIAFgAhZBBIgBAAIAAAAIABAAgAhIheIgBAAIAAAAIABAAgAhIheIAHgBIAAAAIgHABgADABPIgEgDIAAAAIABgDIAAAAIAEAFIAAAAIACADIAAAAIgDgCgABzhwIADgBIAAAAIACAAIAAAAIAAAGIAAAAIgFgFg");
	mask.setTransform(-594.416,-148.2401);

	// Capa_1
	this.instance = new lib.lagrima();
	this.instance.setTransform(-595,-170,0.5,0.5);

	this.instance_1 = new lib.lagrima();
	this.instance_1.setTransform(-597,-186,0.5,0.5);

	this.instance_2 = new lib.Lagrimas();
	this.instance_2.setTransform(-606,-177,0.5,0.5);

	this.instance_3 = new lib.lagrima();
	this.instance_3.setTransform(-606,-168,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-186,x:-597}},{t:this.instance,p:{y:-170}}]}).to({state:[{t:this.instance_3,p:{y:-168}},{t:this.instance_1,p:{y:-183,x:-597}},{t:this.instance,p:{y:-157}}]},4).to({state:[{t:this.instance_3,p:{y:-162}},{t:this.instance_1,p:{y:-175,x:-597}},{t:this.instance,p:{y:-155}}]},5).to({state:[{t:this.instance_3,p:{y:-158}},{t:this.instance_1,p:{y:-174,x:-597}},{t:this.instance,p:{y:-141}}]},5).to({state:[{t:this.instance_3,p:{y:-147}},{t:this.instance_1,p:{y:-162,x:-597}},{t:this.instance,p:{y:-123}}]},5).to({state:[{t:this.instance_3,p:{y:-130}},{t:this.instance_1,p:{y:-145.25,x:-596.5}},{t:this.instance,p:{y:-122}}]},5).to({state:[{t:this.instance_3,p:{y:-130}},{t:this.instance_1,p:{y:-122,x:-595}},{t:this.instance,p:{y:-122}}]},5).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-606,-186,20.5,75.6);


(lib.Interpolación13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BrazoIzq();
	this.instance.setTransform(-55.25,-39,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.2,-39,110.5,78);


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
	this.instance = new lib.Geppetoo();
	this.instance.setTransform(-157,-219.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-219.7,314,439.5);


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
	this.instance = new lib.Mangader();
	this.instance.setTransform(-29,-28.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-28.7,58,57.5);


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
	this.instance = new lib.BrazoDer();
	this.instance.setTransform(-11.25,-28.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-28.5,22.5,46);


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
	this.instance = new lib.Phone();
	this.instance.setTransform(-20.25,-31.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-31.5,40.5,63);


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
	this.instance = new lib.antebrazoDer();
	this.instance.setTransform(-39.75,-22.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-22.7,79.5,45.5);


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


(lib.jaula = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// niños
	this.instance = new lib.JaulaFrente();
	this.instance.setTransform(735,42,0.5,0.5);

	this.instance_1 = new lib.lagrimas4();
	this.instance_1.setTransform(974.6,351.35,0.3352,0.3352,0,0,180,-594.3,-152.5);

	this.instance_2 = new lib.lagrimas3();
	this.instance_2.setTransform(957.1,350.85,0.3352,0.3352,0,0,0,-594.3,-152.5);

	this.instance_3 = new lib.lagrimas1();
	this.instance_3.setTransform(806.35,343.7,0.3352,0.3352,0,0,0,-594.3,-152.3);

	this.instance_4 = new lib.lagrimas2();
	this.instance_4.setTransform(1023.15,396.15,0.3352,0.3352);

	this.instance_5 = new lib.Sombrajaula();
	this.instance_5.setTransform(691,533,0.5,0.5);

	this.instance_6 = new lib.Pinochoyaurora();
	this.instance_6.setTransform(734,284,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jaula, new cjs.Rectangle(691,42,408,542.5), null);


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


(lib.brazo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BrazoIzq.png
	this.instance = new lib.Interpolación13("synched",0);
	this.instance.setTransform(0.15,11.05,1,1,0,0,0,-55.2,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.7079,x:0.1},25).to({rotation:0,x:0.15},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.8,89.1);


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

	// Capa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egr1Ar2MAAAhXrMBXrAAAMAAABXrg");
	mask.setTransform(916.475,305.975);

	// jaula
	this.instance = new lib.jaula();
	this.instance.setTransform(895,44,1,1,4.9958,0,0,895,42);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:42.1,rotation:-4.4545,x:895.05},39).to({regY:42,rotation:4.9958,x:895,y:44.05},40).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(644.5,30.1,496.0999999999999,556.5);


(lib.geppetto = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(247));

	// Capa_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6BEC4").s().p("AACBeIgsgKIgLgEQgJgJgFgDIgJgDIgIgBQgMgEACgJQABgDAFgEQAFgFABgDQAAgDgBgGQgCgGACgDQABgEAHgCIAFgCIAKgRIAEAAIBkgEQAEAAADgBQAFgDgDgEIhrgCQAGgPAFgSIACgGIADgIIACgEIADgEQgCgIAGgGQAIgHAJAFIAGAGIAIAJIAJALIAIAKQAEADAJAEQAaAMALAIIAFAEIAKAFQAGADADAFQADAFgBAFQgBADgEAFIgHAIQABAHgEAFQgFAGgGAAIgBAAQAEAHgDAIIgBABIAAABIAAAIIAAADIgBAEIgBAAIAAABIgBAAIAAACIgBABIgCABIgEACIgEABQgFAAgFgEIgCgCIgBAAIAAgBIgBgBIgDgEIgDgBIAAABQgDAEAAACIABAGIADAFQACAFgEAFQgDAFgFACQgEABgGAAIgNgBg");
	this.shape.setTransform(240.4638,116.7337);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEA6AA").s().p("AJrE4IADgGIgDAIIgBAHQAAgGABgDgApkg5IgJgEQAghmBThDQABAGAGAEIADABQhNBCggBjIgHgDgAo3hDQgEgCgDAAQAag+AvgwIAJAHIAEADQguAwgaA/QgCgGgFgDgAm4lAIAAAAIABABIgBgBg");
	this.shape_1.setTransform(174.3,79.1875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBAAQACgFAEgDIARABIBrACQADADgFACQgDACgEAAIhkADIgEABQgLABgFACQgCgFABgEg");
	this.shape_2.setTransform(239.2281,115.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},79).to({state:[]},6).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},5).to({state:[]},6).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},6).to({state:[]},10).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},9).to({state:[]},8).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},10).to({state:[]},5).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},5).to({state:[]},5).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},3).to({state:[]},5).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},3).to({state:[]},4).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_2}]},3).to({state:[]},6).to({state:[]},55).wait(14));

	// Capa_12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7B6QgEgCgDAAQAag+AugwIAJAHIAEADQgtAwgaA/QgCgGgFgDgABDiCIAAAAIAAABIAAgBg");
	this.shape_3.setTransform(123.525,60.1875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6BEC4").s().p("AACBeIgsgKIgLgEQgJgJgFgDIgJgDIgIgBQgMgEACgJQABgDAFgEQAFgFABgDQAAgDgBgGQgCgGACgDQABgEAHgCIAFgCIAKgRIAEAAIBkgEQAEAAADgBQAFgDgDgEIhrgCQAGgPAFgSIACgGIADgIIACgEIADgEQgCgIAGgGQAIgHAJAFIAGAGIAIAJIAJALIAIAKQAEADAJAEQAaAMALAIIAFAEIAKAFQAGADADAFQADAFgBAFQgBADgEAFIgHAIQABAHgEAFQgFAGgGAAIgBAAQAEAHgDAIIgBABIAAABIAAAIIAAADIgBAEIgBAAIAAABIgBAAIAAACIgBABIgCABIgEACIgEABQgFAAgFgEIgCgCIgBAAIAAgBIgBgBIgDgEIgDgBIAAABQgDAEAAACIABAGIADAFQACAFgEAFQgDAFgFACQgEABgGAAIgNgBg");
	this.shape_4.setTransform(240.4638,116.7337);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AEA6AA").s().p("AJrE4IADgGIgDAIIgBAHQAAgGABgDgApkg5IgJgEQAghmBThDQABAGAGAEIADABQhNBCggBjIgHgDgAo3hDQgEgCgDAAQAag+AvgwIAJAHIAEADQguAwgaA/QgCgGgFgDgAm4lAIAAAAIABABIgBgBg");
	this.shape_5.setTransform(174.3,79.1875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhBAAQACgFAEgDIARABIBrACQADADgFACQgDACgEAAIhkADIgEABQgLABgFACQgCgFABgEg");
	this.shape_6.setTransform(239.2281,115.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhrCRIgGAAQAdirCPhbIADAGIACAIQiBBXggCjQgDgCgHAAgAg6B0IgJgEQAghmBShCQABAGAFAEIADABQhLBBghBjIgGgDgAgNBqQgEgCgDAAQAZg+AvgvIAJAGIAEADQguAwgZA/QgCgGgFgDgABxiSIAAAAIABABIgBgBg");
	this.shape_7.setTransform(118.9125,61.7875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiHCmQASjrDVhiIACAMQi0BagiDJIgFAggAhUCNIgGAAQAcirCQhbIACAGIADAIQiCBXgfCjQgEgCgGAAgAgjBwIgKgEQAhhmBRhCQABAGAGAEIADABQhMBBggBjIgGgDgAAIBmQgDgCgEAAQAbg+AvgvIAJAGIADADQgtAwgaA/QgCgGgGgDgACHiWIABAAIAAABIgBgBg");
	this.shape_8.setTransform(116.6625,62.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhQCCIgKgEQAhhmBRhCQABAGAGAEIADABQhMBBggBjIgGgDgAgkB4QgDgCgEAAQAbg+AugwIAJAHIADADQgsAwgbA/QgBgGgGgDgABaiEIABAAIAAABIgBgBg");
	this.shape_9.setTransform(121.175,60.3875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},49).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).to({state:[]},10).to({state:[{t:this.shape_3}]},7).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).to({state:[]},10).to({state:[{t:this.shape_3}]},7).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},11).wait(73));

	// ojos
	this.instance = new lib.ojos();
	this.instance.setTransform(243.4,72.6,1,1,0,0,0,23.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(247));

	// Esqueleto_73
	this.ikNode_82 = new lib.Interpolación2("synched",0);
	this.ikNode_82.name = "ikNode_82";
	this.ikNode_82.setTransform(201.65,208.7,0.9881,0.9881,40.2514,0,0,-38.9,-3.6);

	this.ikNode_84 = new lib.Interpolación5("synched",0);
	this.ikNode_84.name = "ikNode_84";
	this.ikNode_84.setTransform(249.25,250.25,0.9979,0.9979,66.4234,0,0,2.8,17);

	this.ikNode_79 = new lib.Interpolación9("synched",0);
	this.ikNode_79.name = "ikNode_79";
	this.ikNode_79.setTransform(165.7,128.7,0.9978,0.9978,0,-9.487,-9.2303,-6.7,-22.8);

	this.ikNode_80 = new lib.Interpolación7("synched",0);
	this.ikNode_80.name = "ikNode_80";
	this.ikNode_80.setTransform(175.8,169.45,0.998,0.998,-11.846,0,0,-11.1,-26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_80,p:{scaleX:0.998,scaleY:0.998,rotation:-11.846,x:175.8,y:169.45,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9978,scaleY:0.9978,skewX:-9.487,skewY:-9.2303,x:165.7,y:128.7,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:66.4234,x:249.25,y:250.25,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.9881,scaleY:0.9881,rotation:40.2514,x:201.65,y:208.7,regX:-38.9}}]}).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.8443,x:175.75,y:169.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-9.7561,skewY:-9.4965,x:165.6,y:128.7,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:62.9953,x:251.75,y:247.05,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:36.8189,x:202.15,y:209.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.8443,x:175.75,y:169.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-9.8004,skewY:-9.541,x:165.8,y:128.6,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:59.5556,x:253.9,y:244.05,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:33.3796,x:202.35,y:209.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.8452,x:175.85,y:169.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-9.836,skewY:-9.5773,x:165.9,y:128.6,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:56.1202,x:255.9,y:240.9,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:29.9427,x:202.5,y:209.55,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.8479,x:175.95,y:169.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-9.8707,skewY:-9.612,x:165.8,y:128.55,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:52.6841,x:257.8,y:237.6,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:26.5069,x:202.45,y:210.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.8507,x:176.05,y:169.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-9.9044,skewY:-9.6466,x:166.05,y:128.45,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:49.2471,x:259.45,y:234.1,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:23.0704,x:202.45,y:209.85,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.8532,x:176.1,y:169.45,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-9.9383,skewY:-9.6804,x:166.15,y:128.45,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:45.811,x:261.1,y:230.5,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:19.6341,x:202.4,y:209.65,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.856,x:176.2,y:169.45,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-9.9721,skewY:-9.7133,x:166.25,y:128.45,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:42.3754,x:262.3,y:227,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:16.1991,x:202.35,y:209.55,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.8586,x:176.25,y:169.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.0058,skewY:-9.748,x:166.15,y:128.35,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:38.9389,x:263.55,y:223.1,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:12.7639,x:202.2,y:209.3,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.8613,x:176.3,y:169.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.0388,skewY:-9.7818,x:166.35,y:128.3,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:35.5037,x:264.5,y:219.2,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:9.3264,x:202.3,y:209,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.6673,x:176.3,y:169.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.1492,skewY:-9.8912,x:166.35,y:128.35,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:30.6628,x:264.9,y:215.1,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:5.5526,x:202.2,y:209.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.473,x:176.35,y:169.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9977,scaleY:0.9977,skewX:-10.2588,skewY:-10.0007,x:166.15,y:128.25,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:25.8217,x:265,y:210.9,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:1.7772,x:202.1,y:209.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.2781,x:176.4,y:169.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9977,scaleY:0.9977,skewX:-10.3692,skewY:-10.1102,x:166.15,y:128.25,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:20.9789,x:264.95,y:206.85,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-1.9923,x:202,y:209.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.0852,x:176.6,y:169.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.4795,skewY:-10.2214,x:166.25,y:128.35,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:16.1392,x:264.6,y:202.7,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-5.7669,x:201.9,y:209.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.889,x:176.45,y:169.45,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.5883,skewY:-10.33,x:166.15,y:128.3,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:11.2984,x:263.85,y:198.6,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-9.5419,x:201.8,y:209.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.6962,x:176.45,y:169.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.699,skewY:-10.4405,x:166.2,y:128.25,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:6.4587,x:262.95,y:194.55,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-13.317,x:201.7,y:209.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.5001,x:176.5,y:169.2,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.809,skewY:-10.5502,x:166.15,y:128.25,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:1.6176,x:261.6,y:190.55,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-17.0913,x:201.6,y:209.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.3059,x:176.55,y:169.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.9185,skewY:-10.6598,x:166.1,y:128.3,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-3.2189,x:260.1,y:186.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-20.866,x:201.55,y:209.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.1119,x:176.6,y:169.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-11.0276,skewY:-10.7686,x:166.05,y:128.3,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-8.0591,x:258.4,y:182.8,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-24.6406,x:201.35,y:209.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-9.9163,x:176.7,y:169.15,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-11.1383,skewY:-10.8801,x:166,y:128.3,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-12.9006,x:256.4,y:179.3,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-28.4147,x:201.3,y:209.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-12.0002,x:177.4,y:168.8,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-12.0666,skewY:-11.8088,x:166.05,y:128.1,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-14.0951,x:256.45,y:174,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-32.1817,x:203.6,y:207.8,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-14.083,x:178.25,y:168.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-12.995,skewY:-12.7359,x:166.1,y:127.85,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-15.2901,x:256.3,y:168.85,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-35.9481,x:206.05,y:206.6,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-16.1659,x:179.15,y:167.85,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9978,scaleY:0.9977,skewX:-13.9236,skewY:-13.6656,x:166.2,y:127.65,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-16.4852,x:255.8,y:164.05,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-39.7157,x:208.4,y:205.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-18.2499,x:179.95,y:167.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-14.853,skewY:-14.5937,x:166.3,y:127.55,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-17.6805,x:255.05,y:159.3,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-43.4812,x:210.5,y:203.8,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-20.3331,x:180.75,y:167,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-15.7803,skewY:-15.522,x:166.35,y:127.3,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-18.8744,x:254,y:154.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.9879,scaleY:0.9879,rotation:-47.2488,x:212.7,y:202.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-22.4161,x:181.5,y:166.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-16.7089,skewY:-16.4511,x:166.4,y:127.15,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-20.0696,x:252.7,y:150.25,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-51.0143,x:214.9,y:200.55,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-24.5001,x:182.3,y:165.85,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-17.6388,skewY:-17.3797,x:166.4,y:126.95,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-21.2655,x:251.15,y:145.95,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-54.7819,x:217.15,y:198.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-26.5831,x:183.15,y:165.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9978,skewX:-18.5677,skewY:-18.3091,x:166.5,y:126.7,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-22.4595,x:249.4,y:142,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-58.5483,x:219.2,y:197.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-28.666,x:183.95,y:164.95,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-19.4949,skewY:-19.2366,x:166.55,y:126.55,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-23.6541,x:247.4,y:138.1,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-62.3153,x:221.25,y:195.4,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-30.7502,x:184.75,y:164.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-20.4235,skewY:-20.1649,x:166.65,y:126.4,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-24.8486,x:245.3,y:134.55,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-66.0818,x:223.15,y:193.6,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-32.8337,x:185.45,y:163.65,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-21.3533,skewY:-21.095,x:166.65,y:126.1,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-26.0447,x:242.95,y:131.05,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-69.8491,x:225.15,y:191.7,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-33.5338,x:187.1,y:162.7,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-24.0389,skewY:-23.78,x:166.65,y:126.1,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-26.3292,x:241.55,y:128.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-72.9671,x:227.05,y:190.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-34.2354,x:188.9,y:161.7,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-26.7242,skewY:-26.4667,x:166.55,y:126.1,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-26.6148,x:240.25,y:126.45,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-76.0885,x:228.9,y:188.5,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-34.9365,x:190.45,y:160.7,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-29.4101,skewY:-29.152,x:166.6,y:126.05,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-26.9008,x:238.8,y:124.4,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-79.2085,x:230.75,y:186.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-35.6378,x:192.05,y:159.5,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-32.0965,skewY:-31.8371,x:166.5,y:126.1,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-27.1857,x:237.3,y:122.25,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-82.3289,x:232.45,y:185.3,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-36.3391,x:193.5,y:158.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-34.7828,skewY:-34.5235,x:166.6,y:126.05,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-27.4702,x:235.7,y:120.25,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-85.4487,x:234.2,y:183.35,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-37.0404,x:194.95,y:156.95,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-37.4686,skewY:-37.2097,x:166.55,y:126.05,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-27.7567,x:233.95,y:118.45,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-88.569,x:235.85,y:181.45,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-37.741,x:196.25,y:155.65,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-40.1544,skewY:-39.8962,x:166.45,y:126.1,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-28.0416,x:232.2,y:116.7,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-91.6851,x:237.4,y:179.5,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-38.4424,x:197.6,y:154.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-42.8401,skewY:-42.5816,x:166.55,y:126,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-28.327,x:230.4,y:115.1,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-94.8054,x:238.8,y:177.5,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-39.1435,x:198.95,y:152.75,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-45.5261,skewY:-45.2677,x:166.5,y:126,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-28.612,x:228.6,y:113.6,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-97.9249,x:240.4,y:175.45,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-39.8449,x:200.1,y:151.3,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9977,scaleY:0.9977,skewX:-48.2126,skewY:-47.9538,x:166.4,y:125.9,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-28.8971,x:226.7,y:112.2,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-101.0455,x:241.65,y:173.3,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-40.5455,x:201.15,y:149.6,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9977,scaleY:0.9977,skewX:-50.8979,skewY:-50.6395,x:166.35,y:125.85,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-29.1834,x:224.75,y:110.9,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-104.1654,x:242.95,y:171.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-41.2468,x:202.15,y:147.9,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9977,scaleY:0.9977,skewX:-53.584,skewY:-53.326,x:166.35,y:125.9,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-29.4686,x:222.9,y:109.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-107.2859,x:243.95,y:168.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-41.9481,x:203.2,y:146.25,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9977,scaleY:0.9977,skewX:-56.2703,skewY:-56.0115,x:166.35,y:125.85,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-29.7538,x:220.95,y:108.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-110.407,x:245.25,y:166.65,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-42.6502,x:204,y:144.55,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-58.9563,skewY:-58.698,x:166.4,y:125.85,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-30.0396,x:218.9,y:107.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-113.5259,x:246.3,y:164.45,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-43.3513,x:204.85,y:142.75,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-61.641,skewY:-61.3838,x:166.35,y:125.9,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-30.3247,x:216.9,y:106.9,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-116.6462,x:247.15,y:161.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-44.0515,x:205.55,y:140.95,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-64.3277,skewY:-64.0694,x:166.4,y:125.9,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-30.61,x:214.9,y:106.15,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-119.7667,x:248.05,y:159.5,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-44.7528,x:206.2,y:139.15,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-67.0136,skewY:-66.7561,x:166.3,y:125.85,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-30.8954,x:212.9,y:105.55,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-122.886,x:248.75,y:157.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-45.4541,x:206.75,y:137.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-69.7007,skewY:-69.4428,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.1815,x:211,y:105,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-126.0071,x:249.4,y:154.75,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1555,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3853,skewY:-72.1267,x:166.25,y:125.85,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.4665,x:208.95,y:104.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.1272,x:249.9,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1561,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3861,skewY:-72.1276,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.4704,x:208.9,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.9879,scaleY:0.9879,rotation:-129.1304,x:249.95,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1592,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3861,skewY:-72.1276,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.476,x:208.95,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.1329,x:249.9,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1617,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.387,skewY:-72.1287,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.4807,x:208.9,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.1361,x:249.85,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1623,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.387,skewY:-72.1287,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.485,x:208.95,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1392,x:249.8,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1654,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3878,skewY:-72.1295,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.4897,x:208.9,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1424,x:249.85,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1672,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3886,skewY:-72.1303,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.4948,x:208.95,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1442,x:249.8,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1685,x:207.3,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3886,skewY:-72.1303,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.4991,x:208.9,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1474,x:249.8,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1704,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9978,scaleY:0.9977,skewX:-72.39,skewY:-72.1325,x:166.25,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.5047,x:208.95,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1493,x:249.85,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1734,x:207.3,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9978,scaleY:0.9977,skewX:-72.39,skewY:-72.1325,x:166.25,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.5098,x:208.9,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1519,x:249.85,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1753,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3908,skewY:-72.1331,x:166.25,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5145,x:208.95,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1543,x:249.8,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1765,x:207.3,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3908,skewY:-72.1331,x:166.25,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.5193,x:208.9,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1575,x:249.8,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.179,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3917,skewY:-72.1339,x:166.25,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.5239,x:208.95,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.16,x:249.85,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1809,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3922,skewY:-72.1348,x:166.2,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5286,x:208.9,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.9879,scaleY:0.9879,rotation:-129.1637,x:249.85,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1827,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3925,skewY:-72.1351,x:166.25,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5329,x:208.9,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1651,x:249.8,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1846,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3933,skewY:-72.1359,x:166.2,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5381,x:208.9,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1681,x:249.8,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1871,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3933,skewY:-72.1359,x:166.2,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5436,x:208.95,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.1713,x:249.95,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1883,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3942,skewY:-72.1367,x:166.2,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5475,x:209.05,y:104.75,regY:17.1,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.9879,scaleY:0.9879,rotation:-129.1738,x:249.95,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1902,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3942,skewY:-72.1367,x:166.2,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.5531,x:209.1,y:104.75,regY:17.1,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.177,x:249.9,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1933,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3955,skewY:-72.1378,x:166.2,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.5577,x:209,y:104.75,regY:17.1,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.1795,x:249.9,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1945,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3964,skewY:-72.1387,x:166.2,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.5626,x:209.05,y:104.75,regY:17.1,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.1826,x:249.95,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1957,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3964,skewY:-72.1387,x:166.2,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5675,x:209,y:104.75,regY:17.1,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.1846,x:249.9,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.1988,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3972,skewY:-72.1395,x:166.2,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5719,x:209,y:104.75,regY:17.1,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.189,x:249.9,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2007,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3972,skewY:-72.1395,x:166.2,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5762,x:209,y:104.75,regY:17.1,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.1908,x:249.9,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.202,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3978,skewY:-72.1403,x:166.2,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5813,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.194,x:249.95,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.205,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3983,skewY:-72.1398,x:166.2,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.5869,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1964,x:249.85,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2069,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3989,skewY:-72.1406,x:166.2,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.5908,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.1996,x:249.85,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2075,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3997,skewY:-72.1414,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.5964,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.9879,scaleY:0.9879,rotation:-129.2027,x:249.9,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.21,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.3997,skewY:-72.1414,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.601,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2065,x:249.85,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2125,x:207.2,y:135.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4008,skewY:-72.1423,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.6054,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.209,x:249.85,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2143,x:207.2,y:135.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4011,skewY:-72.1434,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.6108,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2115,x:249.85,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2156,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4027,skewY:-72.1442,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.6151,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.9879,scaleY:0.9879,rotation:-129.214,x:249.9,y:152.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2187,x:207.2,y:135.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4027,skewY:-72.1442,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.6195,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2172,x:249.85,y:152.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2205,x:207.2,y:135.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4036,skewY:-72.145,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.6246,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2197,x:249.9,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2218,x:207.2,y:135.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4036,skewY:-72.145,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.6297,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2228,x:249.95,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2249,x:207.2,y:135.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4038,skewY:-72.1461,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.6341,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.226,x:249.95,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2267,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4044,skewY:-72.147,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.6387,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2285,x:249.9,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.228,x:207.25,y:135.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4044,skewY:-72.147,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.6443,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.231,x:249.9,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2304,x:207.25,y:135.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4053,skewY:-72.1478,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.6487,x:208.9,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2342,x:249.95,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2323,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4053,skewY:-72.1478,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.6538,x:208.9,y:104.75,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2367,x:249.95,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2336,x:207.25,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4064,skewY:-72.1486,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.6584,x:208.9,y:104.75,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2398,x:249.9,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2366,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4066,skewY:-72.1489,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.6628,x:208.95,y:104.75,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2423,x:249.85,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2385,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4075,skewY:-72.15,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.6679,x:208.9,y:104.75,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2455,x:249.9,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2397,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4083,skewY:-72.1506,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.673,x:208.9,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2473,x:249.9,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2428,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4083,skewY:-72.1506,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.6774,x:208.9,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2505,x:249.85,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2441,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4091,skewY:-72.1514,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.682,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.9879,scaleY:0.9879,rotation:-129.253,x:249.85,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2459,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9978,skewX:-72.4094,skewY:-72.1517,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.6876,x:208.9,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2562,x:249.9,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2465,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.41,skewY:-72.1525,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.6919,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.9879,scaleY:0.9879,rotation:-129.2586,x:249.85,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2503,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.41,skewY:-72.1525,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.697,x:208.9,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2618,x:249.85,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2521,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4108,skewY:-72.1533,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7017,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2638,x:249.85,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2534,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4116,skewY:-72.1542,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7061,x:208.9,y:104.75,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.2669,x:249.9,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2565,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4116,skewY:-72.1542,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7109,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2694,x:249.95,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2583,x:207.3,y:135.35,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.413,skewY:-72.1544,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7155,x:208.9,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2719,x:249.95,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2602,x:207.3,y:135.35,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.413,skewY:-72.1544,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7199,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2751,x:250,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.262,x:207.3,y:135.4,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4138,skewY:-72.1553,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7245,x:208.9,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2776,x:250,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2645,x:207.3,y:135.4,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4138,skewY:-72.1553,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7296,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2808,x:249.95,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2658,x:207.3,y:135.4,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4147,skewY:-72.1561,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.734,x:208.85,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2832,x:249.95,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2676,x:207.3,y:135.4,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4155,skewY:-72.1572,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7391,x:208.95,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2864,x:250,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2701,x:207.3,y:135.35,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4155,skewY:-72.1572,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7442,x:208.9,y:104.8,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2896,x:249.95,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.272,x:207.25,y:135.4,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4163,skewY:-72.1581,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7486,x:208.95,y:104.65,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2915,x:249.95,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2738,x:207.25,y:135.4,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4163,skewY:-72.1581,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7542,x:208.9,y:104.65,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2946,x:249.95,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2757,x:207.25,y:135.4,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4172,skewY:-72.1589,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7588,x:208.95,y:104.65,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.2983,x:249.95,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2782,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4172,skewY:-72.1589,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7627,x:208.9,y:104.65,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.3008,x:249.85,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2794,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4185,skewY:-72.1608,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7678,x:208.95,y:104.65,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.304,x:249.85,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2819,x:207.3,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9978,scaleY:0.9977,skewX:-72.4194,skewY:-72.1619,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7729,x:208.9,y:104.65,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.3072,x:249.9,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2843,x:207.3,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9978,scaleY:0.9977,skewX:-72.4194,skewY:-72.1619,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7773,x:208.95,y:104.65,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.3091,x:249.9,y:152.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.285,x:207.3,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4202,skewY:-72.1625,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7824,x:208.9,y:104.65,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.3121,x:249.85,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2875,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4202,skewY:-72.1625,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7875,x:208.85,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.3153,x:249.85,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2899,x:207.3,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.421,skewY:-72.1636,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7919,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.3178,x:249.9,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2918,x:207.25,y:135.25,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.421,skewY:-72.1636,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.7974,x:208.85,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-129.321,x:249.85,y:152.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.293,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4219,skewY:-72.1644,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8021,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3235,x:250,y:152.1,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2961,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4227,skewY:-72.1653,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.806,x:208.85,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3266,x:250,y:152.1,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2974,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4227,skewY:-72.1653,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8111,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3286,x:250.05,y:152.15,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.2992,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4238,skewY:-72.1661,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.8162,x:208.85,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.333,x:250,y:152.15,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3023,x:207.25,y:135.25,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4241,skewY:-72.1664,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8206,x:208.8,y:104.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3355,x:250,y:152.15,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3036,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9978,scaleY:0.9977,skewX:-72.4249,skewY:-72.1675,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8257,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.338,x:250,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3054,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9978,scaleY:0.9977,skewX:-72.4249,skewY:-72.1675,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8308,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3405,x:250,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3067,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4257,skewY:-72.168,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8351,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3423,x:249.95,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3098,x:207.25,y:135.3,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4257,skewY:-72.168,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8403,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3461,x:249.95,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.311,x:207.25,y:135.25,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4268,skewY:-72.1683,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8458,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3486,x:249.95,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3129,x:207.25,y:135.2,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4274,skewY:-72.1691,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8493,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3511,x:250,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3159,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4274,skewY:-72.1691,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8548,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3536,x:249.95,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3172,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4283,skewY:-72.17,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.8595,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3568,x:249.95,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3191,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4283,skewY:-72.17,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.8638,x:208.8,y:104.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3593,x:250,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3215,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4294,skewY:-72.1708,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.869,x:208.7,y:104.55,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3624,x:249.95,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.324,x:207.2,y:135.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4296,skewY:-72.1711,x:166.25,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8741,x:208.75,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3656,x:250.05,y:152.15,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3246,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4305,skewY:-72.1719,x:166.25,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8784,x:208.7,y:104.55,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3681,x:250.05,y:152.15,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3277,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4321,skewY:-72.1727,x:166.25,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8835,x:208.75,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3706,x:250.1,y:152.1,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.329,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4321,skewY:-72.1727,x:166.25,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8891,x:208.7,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3732,x:250.05,y:152.1,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3308,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.433,skewY:-72.1736,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8935,x:208.75,y:104.55,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3763,x:250.05,y:152.15,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3339,x:207.2,y:135.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4332,skewY:-72.1747,x:166.25,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.8981,x:208.7,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3794,x:250.05,y:152.15,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3352,x:207.2,y:135.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.433,skewY:-72.1755,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.9028,x:208.75,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3814,x:250.05,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.337,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.433,skewY:-72.1755,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9071,x:208.7,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3851,x:250.05,y:152.15,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3395,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4338,skewY:-72.1763,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9122,x:208.75,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3876,x:250.05,y:152.1,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3414,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4349,skewY:-72.1772,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9173,x:208.65,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3915,x:250.05,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3426,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4349,skewY:-72.1772,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9217,x:208.7,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3927,x:250.05,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3451,x:207.25,y:135.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.436,skewY:-72.1783,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9268,x:208.65,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3964,x:250,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3469,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.436,skewY:-72.1783,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9312,x:208.7,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.3989,x:250,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3494,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4368,skewY:-72.1794,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9367,x:208.65,y:104.55,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4021,x:250.05,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3507,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4368,skewY:-72.1794,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9419,x:208.7,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4046,x:250,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3531,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4377,skewY:-72.1799,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9458,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4078,x:250,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3556,x:207.25,y:135.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4385,skewY:-72.1811,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9509,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4109,x:250,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3562,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4385,skewY:-72.1811,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9555,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4127,x:250.05,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3587,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4393,skewY:-72.1819,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9606,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4159,x:250,y:152.05,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3612,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4393,skewY:-72.1819,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.965,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4184,x:250,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.363,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4404,skewY:-72.1827,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9701,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4216,x:250.05,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3643,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4404,skewY:-72.1827,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9745,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4241,x:250.05,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3674,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4415,skewY:-72.183,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.98,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4273,x:250,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3692,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4424,skewY:-72.1841,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9851,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4297,x:250,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3705,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4424,skewY:-72.1841,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9883,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4336,x:250.05,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.373,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4432,skewY:-72.1847,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9941,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4361,x:250,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3748,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4432,skewY:-72.1847,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.9988,x:208.8,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4379,x:250,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3761,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.444,skewY:-72.1858,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0039,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4404,x:250,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3779,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.444,skewY:-72.1858,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0083,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4436,x:250.05,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3804,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4449,skewY:-72.1866,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0134,x:208.7,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4461,x:250.05,y:152,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3817,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4449,skewY:-72.1866,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0177,x:208.7,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4492,x:250,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3835,x:207.2,y:135.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4457,skewY:-72.1874,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0233,x:208.7,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4517,x:250,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3866,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4479,skewY:-72.1894,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0284,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4556,x:250.05,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9978,scaleY:0.9978,rotation:-46.3879,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4479,skewY:-72.1894,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0323,x:208.7,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.9879,scaleY:0.9879,rotation:-129.458,x:250,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3897,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4479,skewY:-72.1902,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0379,x:208.75,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4611,x:250,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3922,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4479,skewY:-72.1902,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0423,x:208.7,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4643,x:250,y:151.9,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3934,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4487,skewY:-72.1913,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0469,x:208.7,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4662,x:250.05,y:151.9,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9978,scaleY:0.9978,rotation:-46.3953,x:207.2,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4487,skewY:-72.1913,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0515,x:208.7,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4693,x:250,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.3984,x:207.2,y:135.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4493,skewY:-72.1919,x:166.3,y:125.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0559,x:208.7,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.9879,scaleY:0.9879,rotation:-129.4718,x:250,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.4002,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4502,skewY:-72.1927,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.061,x:208.7,y:104.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.475,x:250.05,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.4015,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4502,skewY:-72.1927,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0666,x:208.7,y:104.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.9879,scaleY:0.9879,rotation:-129.4774,x:250.05,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.4046,x:207.25,y:135.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.451,skewY:-72.1935,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0705,x:208.65,y:104.6,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4806,x:250,y:151.9,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.4058,x:207.3,y:135.35,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.451,skewY:-72.1935,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0756,x:208.65,y:104.65,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4838,x:250,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.4077,x:207.3,y:135.3,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4524,skewY:-72.1946,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0812,x:208.65,y:104.65,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4863,x:250.05,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-46.4102,x:207.3,y:135.35,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-72.4524,skewY:-72.1946,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-32.0855,x:208.65,y:104.65,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-129.4888,x:250,y:151.95,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-45.6468,x:206.7,y:137.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-69.6197,skewY:-69.3621,x:166.3,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7659,x:210.9,y:105.05,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-126.1775,x:249.4,y:154.6,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-44.8811,x:206.1,y:139.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-66.7878,skewY:-66.5292,x:166.35,y:125.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-31.448,x:213,y:105.6,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-122.8669,x:248.7,y:157.3,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-44.1184,x:205.45,y:141.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-63.9538,skewY:-63.6952,x:166.35,y:125.9,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.1307,x:214.95,y:106.2,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-119.5574,x:247.95,y:159.8,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-43.3544,x:204.75,y:143.1,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-61.1206,skewY:-60.8629,x:166.35,y:125.9,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-30.8117,x:217.2,y:106.9,regY:16.9,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-116.2461,x:247,y:162.35,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-42.5906,x:203.9,y:144.95,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-58.2881,skewY:-58.0299,x:166.4,y:125.9,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-30.4934,x:219.2,y:107.95,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.9879,scaleY:0.9879,rotation:-112.9352,x:246.05,y:164.85,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-41.8258,x:202.9,y:146.9,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-55.4544,skewY:-55.1963,x:166.45,y:125.95,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-30.175,x:221.35,y:108.95,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-109.6249,x:244.95,y:167.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-41.0617,x:201.85,y:148.55,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-52.621,skewY:-52.3635,x:166.4,y:125.95,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-29.8563,x:223.35,y:110,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-106.3136,x:243.8,y:169.7,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-40.2988,x:200.7,y:150.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-49.7872,skewY:-49.5285,x:166.4,y:126.05,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-29.5388,x:225.45,y:111.4,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-103.0034,x:242.45,y:172.15,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-39.5344,x:199.45,y:151.95,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-46.9546,skewY:-46.6967,x:166.45,y:125.95,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-29.2206,x:227.5,y:112.85,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-99.6925,x:241.1,y:174.45,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-38.7697,x:198.2,y:153.55,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-44.122,skewY:-43.8636,x:166.5,y:126,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-28.9006,x:229.45,y:114.35,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-96.3827,x:239.5,y:176.6,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-38.0056,x:196.8,y:155.05,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-41.2896,skewY:-41.0307,x:166.45,y:126.1,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-28.583,x:231.4,y:116,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-93.0721,x:238,y:178.85,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-37.2417,x:195.45,y:156.55,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-38.4556,skewY:-38.1972,x:166.55,y:126.1,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-28.2654,x:233.3,y:118,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-89.7664,x:236.45,y:180.95,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-36.4783,x:193.95,y:157.9,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-35.623,skewY:-35.3653,x:166.55,y:126.1,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-27.9468,x:235.05,y:119.8,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-86.4555,x:234.65,y:182.85,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-35.7139,x:192.35,y:159.2,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-32.7891,skewY:-32.5312,x:166.6,y:126.05,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-27.6289,x:236.8,y:121.85,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-83.1451,x:232.8,y:184.75,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-34.9503,x:190.7,y:160.45,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-29.9568,skewY:-29.6977,x:166.65,y:126.15,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-27.3107,x:238.55,y:123.9,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-79.834,x:231.05,y:186.8,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-34.1855,x:189.1,y:161.7,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-27.1247,skewY:-26.8648,x:166.65,y:126.1,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-26.9918,x:240,y:126.25,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-76.5237,x:229.15,y:188.4,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-33.422,x:187.35,y:162.65,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-24.29,skewY:-24.0307,x:166.65,y:126.05,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-26.6732,x:241.45,y:128.6,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-73.2129,x:227.15,y:190.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-32.6583,x:185.5,y:163.65,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9977,scaleY:0.9977,skewX:-21.4564,skewY:-21.1979,x:166.65,y:126.1,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-26.3554,x:242.9,y:131.1,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-69.9021,x:225.1,y:191.7,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-31.7416,x:185.25,y:163.95,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9977,scaleY:0.9977,skewX:-21.0447,skewY:-20.7868,x:166.6,y:126.05,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-25.8049,x:243.9,y:132.55,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-68.2287,x:224.3,y:192.55,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-30.8237,x:184.85,y:164.15,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-20.632,skewY:-20.3731,x:166.65,y:126.3,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-25.2547,x:245.05,y:134.05,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-66.5561,x:223.45,y:193.35,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-29.9083,x:184.55,y:164.45,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-20.2198,skewY:-19.9614,x:166.45,y:126.4,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-24.7043,x:245.95,y:135.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-64.8823,x:222.5,y:194.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-28.9919,x:184.15,y:164.6,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-19.8064,skewY:-19.5487,x:166.6,y:126.5,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-24.1546,x:246.95,y:137.25,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-63.2098,x:221.7,y:195.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-28.0737,x:183.85,y:164.85,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-19.3943,skewY:-19.1363,x:166.55,y:126.6,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-23.6047,x:247.85,y:138.9,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-61.5358,x:220.75,y:195.85,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-27.1571,x:183.5,y:165.1,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-18.982,skewY:-18.7234,x:166.55,y:126.65,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-23.0556,x:248.7,y:140.55,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-59.8634,x:219.85,y:196.65,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-26.241,x:183.15,y:165.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-18.5699,skewY:-18.3114,x:166.5,y:126.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-22.5051,x:249.55,y:142.3,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-58.1908,x:218.95,y:197.5,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-25.3237,x:182.75,y:165.6,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-18.157,skewY:-17.899,x:166.5,y:126.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-21.9556,x:250.35,y:144.1,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-56.5171,x:218,y:198.2,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-24.4072,x:182.45,y:165.85,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-17.7444,skewY:-17.4861,x:166.45,y:126.95,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-21.4056,x:251.2,y:146.05,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-54.8441,x:217,y:198.85,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-23.4902,x:182.1,y:166.05,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-17.3318,skewY:-17.0726,x:166.4,y:127.05,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-20.8553,x:251.8,y:147.75,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-53.1703,x:216.2,y:199.7,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-22.5736,x:181.7,y:166.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-16.9193,skewY:-16.661,x:166.4,y:127.1,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-20.3046,x:252.5,y:149.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-51.4983,x:215.15,y:200.55,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-21.6563,x:181.35,y:166.5,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-16.5068,skewY:-16.2484,x:166.4,y:127.2,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-19.7544,x:253.2,y:151.55,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:-49.8238,x:214.2,y:201.1,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-20.7401,x:181,y:166.75,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-16.0942,skewY:-15.8362,x:166.15,y:127.25,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-19.2047,x:253.85,y:153.55,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-48.1522,x:213.3,y:201.9,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-19.8228,x:180.65,y:167,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-15.6812,skewY:-15.4229,x:166.35,y:127.4,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-18.6552,x:254.4,y:155.55,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-46.48,x:212.4,y:202.55,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-18.9062,x:180.25,y:167.2,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-15.2688,skewY:-15.0099,x:166.3,y:127.4,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-18.105,x:254.65,y:157.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-44.8067,x:211.45,y:203.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-17.9892,x:179.9,y:167.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-14.8564,skewY:-14.5984,x:166.3,y:127.55,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-17.5544,x:255.15,y:159.65,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.9879,scaleY:0.9879,rotation:-43.1331,x:210.4,y:204,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-17.0731,x:179.6,y:167.65,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-14.4445,skewY:-14.1856,x:166.2,y:127.6,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-17.0043,x:255.45,y:161.8,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-41.4592,x:209.4,y:204.55,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-16.1559,x:179.2,y:167.75,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-14.0311,skewY:-13.7721,x:166.2,y:127.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-16.455,x:255.85,y:163.95,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-39.7862,x:208.4,y:205.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-15.2386,x:178.85,y:167.95,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-13.6186,skewY:-13.3604,x:166.15,y:127.8,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-15.9048,x:256.1,y:166.1,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-38.1129,x:207.35,y:205.85,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-14.3216,x:178.45,y:168.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-13.2063,skewY:-12.947,x:166.2,y:127.9,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-15.3545,x:256.35,y:168.3,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-36.4402,x:206.4,y:206.4,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-13.4049,x:178.15,y:168.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-12.7944,skewY:-12.5348,x:166.15,y:127.9,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-14.8047,x:256.45,y:170.5,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-34.7668,x:205.4,y:207,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-12.4896,x:177.7,y:168.75,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-12.3813,skewY:-12.123,x:166.05,y:128.05,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-14.2543,x:256.55,y:172.75,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-33.0932,x:204.35,y:207.65,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.5742,x:177.3,y:168.8,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-11.968,skewY:-11.7095,x:166.1,y:128.1,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-13.7045,x:256.55,y:175,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.9879,scaleY:0.9879,rotation:-31.4212,x:203.35,y:208.15,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.6561,x:176.95,y:169,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-11.5565,skewY:-11.2974,x:166,y:128.15,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-13.1539,x:256.5,y:177.1,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-29.7473,x:202.3,y:208.7,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-9.7402,x:176.6,y:169.2,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-11.1434,skewY:-10.8855,x:166.05,y:128.25,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-12.6039,x:256.45,y:179.55,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-28.0742,x:201.2,y:209.25,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-9.8309,x:176.65,y:169.2,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-11.098,skewY:-10.8391,x:166,y:128.3,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-9.441,x:257.8,y:182.35,regY:17.1,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-25.3476,x:201.2,y:209.3,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-9.9215,x:176.65,y:169.2,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-11.0506,skewY:-10.7927,x:166.05,y:128.25,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:-6.2797,x:259.05,y:185,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-22.6199,x:201.2,y:209.25,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.0131,x:176.55,y:169.2,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-11.0042,skewY:-10.7463,x:166.05,y:128.35,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:-3.1153,x:260.2,y:187.9,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-19.8928,x:201.2,y:209.35,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.1054,x:176.5,y:169.2,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.9595,skewY:-10.7007,x:166,y:128.4,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:0.0429,x:261.2,y:190.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-17.1638,x:201.45,y:209.3,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.1973,x:176.5,y:169.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.9138,skewY:-10.6553,x:166,y:128.4,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:3.2057,x:262.05,y:193.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-14.4365,x:201.5,y:209.35,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.2889,x:176.45,y:169.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.8678,skewY:-10.6089,x:166.05,y:128.45,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:6.3686,x:262.75,y:196.6,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-11.7093,x:201.45,y:209.35,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.38,x:176.4,y:169.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.8212,skewY:-10.5625,x:165.95,y:128.45,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:9.5328,x:263.3,y:199.6,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-8.9822,x:201.55,y:209.35,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.4716,x:176.4,y:169.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.7748,skewY:-10.5163,x:166,y:128.4,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:12.6955,x:263.7,y:202.55,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-6.2546,x:201.55,y:209.35,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.5642,x:176.4,y:169.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.7286,skewY:-10.4699,x:166,y:128.4,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:15.8583,x:264.05,y:205.5,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-3.5268,x:201.65,y:209.4,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.6544,x:176.35,y:169.25,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.6828,skewY:-10.4244,x:166,y:128.45,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:19.0218,x:264.1,y:208.6,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:-0.8,x:201.65,y:209.5,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.7463,x:176.3,y:169.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.6366,skewY:-10.3781,x:165.85,y:128.5,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:22.1852,x:264.15,y:211.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:1.9242,x:201.7,y:209.45,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.8372,x:176.35,y:169.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.5902,skewY:-10.3317,x:165.95,y:128.5,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:25.3472,x:264.05,y:214.75,regY:17,regX:2.9}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:4.6508,x:201.8,y:209.5,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-10.929,x:176.25,y:169.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.5438,skewY:-10.2855,x:165.8,y:128.6,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:28.5105,x:263.65,y:217.65,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:7.3792,x:201.85,y:209.35,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.0209,x:176.35,y:169.25,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.4984,skewY:-10.2401,x:165.8,y:128.6,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:31.6737,x:263.25,y:220.6,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:10.1058,x:201.85,y:209.5,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.1129,x:176.4,y:169.25,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.4522,skewY:-10.1937,x:165.85,y:128.65,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:34.8359,x:262.65,y:223.55,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:12.833,x:201.9,y:209.5,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.2041,x:176.25,y:169.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.4067,skewY:-10.1483,x:165.8,y:128.55,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:37.9993,x:261.9,y:226.45,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:15.5607,x:202,y:209.55,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.296,x:176.2,y:169.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9977,scaleY:0.9977,skewX:-10.3603,skewY:-10.1021,x:165.85,y:128.45,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:41.1622,x:261.1,y:229.3,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:18.2878,x:201.95,y:209.6,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.3873,x:176.15,y:169.5,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9978,scaleY:0.9977,skewX:-10.314,skewY:-10.0557,x:165.85,y:128.5,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:44.3259,x:260.1,y:232.15,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:21.0156,x:202,y:209.5,regX:-39}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.4783,x:176.15,y:169.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.8,scaleX:0.9977,scaleY:0.9978,skewX:-10.2675,skewY:-10.0095,x:165.85,y:128.5,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:47.4888,x:259,y:234.85,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:23.7434,x:202.1,y:209.65,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.5704,x:176.2,y:169.35,regX:-11,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.2214,skewY:-9.9623,x:165.9,y:128.7,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:50.6518,x:257.7,y:237.6,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.6,scaleX:0.988,scaleY:0.988,rotation:26.4713,x:202.2,y:209.5,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.6608,x:176.05,y:169.4,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.1751,skewY:-9.9161,x:165.85,y:128.7,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:53.8147,x:256.3,y:240.25,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:29.1985,x:202.2,y:209.65,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.7531,x:176.1,y:169.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.1287,skewY:-9.8699,x:165.75,y:128.75,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:56.9777,x:254.8,y:242.85,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:31.9261,x:202.3,y:209.65,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.8443,x:176.05,y:169.35,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.0835,skewY:-9.8255,x:165.8,y:128.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:60.1403,x:253.3,y:245.25,regY:16.9,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:34.6519,x:202.25,y:209.65,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-11.9355,x:176,y:169.45,regX:-11.1,regY:-26.8}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-10.0373,skewY:-9.7791,x:165.85,y:128.75,regX:-6.7}},{t:this.ikNode_84,p:{scaleX:0.9979,scaleY:0.9979,rotation:63.3041,x:251.45,y:247.7,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.988,scaleY:0.988,rotation:37.3812,x:202.35,y:209.65,regX:-38.9}}]},1).to({state:[{t:this.ikNode_80,p:{scaleX:0.9979,scaleY:0.9979,rotation:-12.0278,x:176,y:169.3,regX:-11.1,regY:-26.9}},{t:this.ikNode_79,p:{regY:-22.7,scaleX:0.9977,scaleY:0.9977,skewX:-9.9916,skewY:-9.7329,x:165.7,y:128.75,regX:-6.8}},{t:this.ikNode_84,p:{scaleX:0.9978,scaleY:0.9978,rotation:66.4656,x:249.5,y:250.05,regY:17,regX:2.8}},{t:this.ikNode_82,p:{regY:-3.5,scaleX:0.9879,scaleY:0.9879,rotation:40.1076,x:202.35,y:209.7,regX:-38.9}}]},1).wait(1));

	// Geppetoo.png
	this.instance_1 = new lib.Interpolación11("synched",0);
	this.instance_1.setTransform(157,219.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(247));

	// brazo
	this.instance_2 = new lib.brazo();
	this.instance_2.setTransform(290.8,162.45,1,1,0,0,0,58.9,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(247));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,342.5,439.5);


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
			
			 else if (e.target.name == "adelanteEscena")
				
		 	window.open('../E12AA', '_self');
			 
			  else if (e.target.name == "atrasEscena")
				
		 	window.open('../E10AA', '_self');
			 
			
			
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
	}
	this.frame_4 = function() {
		this.playSound("Voice2", "voice", true);
	}
	this.frame_5 = function() {
		this.playSound("Voice3", "voice", true);  
		 
		 
		this.next.alpha = 1;
		this.next.mouseEnabled = true;
		
		this.prev.alpha = 1;
		this.prev.mouseEnabled = true;
	}
	this.frame_6 = function() {
		this.playSound("BGM", "voice", true, { volume: 0.2, loop: -1 });
		
		var _this = this
		
		
		_this.btnInteraccion.on('click', function(){
			
			  
		 _this.geppetto.gotoAndPlay(1);
			
			 
		_this.playSound("interaccion", "voice", true);	
		 if(_this.currentFrame <this.totalFrames)
		 _this.gotoAndStop(_this.currentFrame + 1);
		
		   
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
		_this.nextescene.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('../E12AA', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// interacción
	this.btnInteraccion = new lib.btnInteractivo();
	this.btnInteraccion.name = "btnInteraccion";
	this.btnInteraccion.setTransform(338.6,414.1,1,1,0,0,0,-21.1,7.5);
	this.btnInteraccion._off = true;
	new cjs.ButtonHelper(this.btnInteraccion, 0, 1, 2, false, new lib.btnInteractivo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnInteraccion).wait(6).to({_off:false},0).wait(2));

	// btns _escena
	this.atrasEscena = new lib.Símbolo3();
	this.atrasEscena.name = "atrasEscena";
	this.atrasEscena.setTransform(203.65,607.1,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.atrasEscena, 0, 1, 1);

	this.adelanteEscena = new lib.Símbolo2();
	this.adelanteEscena.name = "adelanteEscena";
	this.adelanteEscena.setTransform(251.15,607.1,1,1,0,0,0,20.2,20);
	new cjs.ButtonHelper(this.adelanteEscena, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.adelanteEscena},{t:this.atrasEscena}]}).to({state:[{t:this.atrasEscena}]},7).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.muteMC,p:{x:308.5}},{t:this.unmuteMC,p:{x:308.5}},{t:this.prev,p:{x:97.3}},{t:this.next,p:{x:143.1}},{t:this.pressToStart}]}).to({state:[{t:this.playaudio,p:{x:38.65}},{t:this.muteMC,p:{x:308.5}},{t:this.unmuteMC,p:{x:308.5}},{t:this.pause,p:{x:31.65}},{t:this.prev,p:{x:97.2}},{t:this.next,p:{x:143}}]},1).to({state:[{t:this.playaudio,p:{x:38.7}},{t:this.instance},{t:this.muteMC,p:{x:308.35}},{t:this.unmuteMC,p:{x:308.35}},{t:this.pause,p:{x:31.7}},{t:this.prev,p:{x:97.35}},{t:this.next,p:{x:143.15}},{t:this.nextescene}]},6).wait(1));

	// Capa_2
	this.instance_1 = new lib._1_1();
	this.instance_1.setTransform(-1,507,0.5,0.5);

	this.instance_2 = new lib._3();
	this.instance_2.setTransform(-1,507,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(4));

	// textos
	this.instance_3 = new lib._2_1();
	this.instance_3.setTransform(-1,534,0.5,0.5);

	this.instance_4 = new lib._4();
	this.instance_4.setTransform(-1,533,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},3).to({state:[]},1).to({state:[{t:this.instance_4}]},1).wait(3));

	// lago fondo blanco
	this.instance_5 = new lib.Símbolo9();
	this.instance_5.setTransform(694,521.7,1,1,0,0,0,594,151.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:219.8,x:594,y:537.65,alpha:0.5},0).wait(1).to({y:537.8,alpha:1},0).wait(6));

	// niños
	this.instance_6 = new lib.niños();
	this.instance_6.setTransform(361.6,230.2,1,1,0,0,0,528.8,254.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F3D880").ss(4,1,1).p("AAAClQgPAAgMgxQgLgwAAhEQAAhEALgwQAEgMADgJQAJgbALAAQAQAAAMAwQALAwAABEQAABEgLAwQgHAfgKALQgFAHgGAAg");
	this.shape.setTransform(729.65,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6}]}).wait(8));

	// geppetto
	this.geppetto = new lib.geppetto();
	this.geppetto.name = "geppetto";
	this.geppetto.setTransform(180.2,346.8,1,1,0,0,0,171.2,219.8);

	this.timeline.addTween(cjs.Tween.get(this.geppetto).wait(8));

	// fondo
	this.instance_7 = new lib.VelaLlamaBlanca();
	this.instance_7.setTransform(402,35,0.5,0.5);

	this.instance_8 = new lib.Fondo();
	this.instance_8.setTransform(0,-2,0.5008,0.5053);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(2,1,1).p("AQwkEIAAIHAAMkCIAAIHAwvkEIAAIH");
	this.shape_1.setTransform(171.85,605.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgNAAIAAgBIABgCIAEgGIADgBQAFgBACAAIAEAAIACABIADAEIACACIAAADQABAEgDAHIgRADQgEgIgDgFg");
	this.shape_2.setTransform(354.8,377.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_8},{t:this.instance_7}]}).wait(8));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(495.5,268.5,792.5,443.5);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1187,
	height: 649,
	fps: 25,
	color: "#235594",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_P_1.png?1692143446856", id:"index_atlas_P_1"},
		{src:"images/index_atlas_P_2.png?1692143446857", id:"index_atlas_P_2"},
		{src:"images/index_atlas_P_3.png?1692143446857", id:"index_atlas_P_3"},
		{src:"sounds/Voice0.mp3?1692143447159", id:"Voice0"},
		{src:"sounds/Voice1.mp3?1692143447159", id:"Voice1"},
		{src:"sounds/Voice2.mp3?1692143447159", id:"Voice2"},
		{src:"sounds/Voice3.mp3?1692143447159", id:"Voice3"},
		{src:"sounds/interaccion.mp3?1692143447159", id:"interaccion"},
		{src:"sounds/intro.mp3?1692143447159", id:"intro"},
		{src:"sounds/BGM.mp3?1692143447159", id:"BGM"}
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