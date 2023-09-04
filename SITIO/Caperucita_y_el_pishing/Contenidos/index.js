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

	// Capa_1
	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(114.95,5.95,1,1,5.4567,0,0,-13,-159);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.4597,x:115},39).to({rotation:5.4567,x:114.95},41).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-0.4,362.8,348.79999999999995);


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

	// hombre
	this.instance = new lib.hombre();
	this.instance.setTransform(-60,-37,1,1,0,0,0,128,165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// carta
	this.instance_1 = new lib.carta();
	this.instance_1.setTransform(222.5,62,1,1,0,0,0,148.5,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// emotes
	this.instance_2 = new lib.emotes();
	this.instance_2.setTransform(184.5,100.5,1,1,0,0,0,262.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// computador
	this.instance_3 = new lib.computador_1();
	this.instance_3.setTransform(205.75,110.5,1,1,0,0,0,226,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

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
	this.siguiente.setTransform(723,567.95,0.5,0.5,0,0,0,0,0.1);
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
p.nominalBounds = new cjs.Rectangle(663.7,264.9,450.79999999999995,354);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1189,
	height: 642,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_1.png?1693793908407", id:"index_atlas_1"},
		{src:"sounds/sound.mp3?1693793908465", id:"sound"}
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