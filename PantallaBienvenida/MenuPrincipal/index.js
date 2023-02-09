(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.Alapato = function() {
	this.initialize(img.Alapato);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,487,437);


(lib.botónirinicio = function() {
	this.initialize(img.botónirinicio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,103);


(lib.brillopantalla = function() {
	this.initialize(img.brillopantalla);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,497);


(lib.btnflecha = function() {
	this.initialize(img.btnflecha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,173);


(lib.btniriniciodown = function() {
	this.initialize(img.btniriniciodown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,103);


(lib.CaraPato = function() {
	this.initialize(img.CaraPato);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,566);


(lib.cuerpocaperucitaRoja = function() {
	this.initialize(img.cuerpocaperucitaRoja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,413,791);


(lib.Fondo = function() {
	this.initialize(img.Fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2732,1536);


(lib.ja = function() {
	this.initialize(img.ja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,41);


(lib.manocaperucitaRoja = function() {
	this.initialize(img.manocaperucitaRoja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,121);


(lib.manoclic = function() {
	this.initialize(img.manoclic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.manopress = function() {
	this.initialize(img.manopress);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Pantalla = function() {
	this.initialize(img.Pantalla);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1932,1101);


(lib.PortadaCuento = function() {
	this.initialize(img.PortadaCuento);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1824,1001);


(lib.PortadaCuento2 = function() {
	this.initialize(img.PortadaCuento2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,912,501);


(lib.PortadaCuento3 = function() {
	this.initialize(img.PortadaCuento3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,912,501);


(lib.PortadaCuento4 = function() {
	this.initialize(img.PortadaCuento4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,912,501);


(lib.titulocuento = function() {
	this.initialize(img.titulocuento);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,763,306);


(lib.tituloseccion = function() {
	this.initialize(img.tituloseccion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,916,192);// helper functions:

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

	// Capa_1
	this.instance = new lib.btnflecha();
	this.instance.setTransform(89,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FDCE3C").ss(7,1,1).p("AA+C8IiDi/ICLi4");
	this.shape.setTransform(79.775,18.75);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(13).to({_off:false},0).to({_off:true},13).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.3,-62,210.7,173);


(lib.risa = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ja();
	this.instance.setTransform(48,-38);

	this.instance_1 = new lib.ja();
	this.instance_1.setTransform(30,-11,0.6765,0.6768);

	this.instance_2 = new lib.ja();
	this.instance_2.setTransform(22,-22,1.0586,1.0582);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:48,y:-38}}]},39).to({state:[{t:this.instance,p:{scaleX:1.5293,scaleY:1.5291,x:34,y:-54}}]},6).to({state:[{t:this.instance_1,p:{scaleX:0.6765,scaleY:0.6768,x:30,y:-11}},{t:this.instance,p:{scaleX:1.0588,scaleY:1.0585,x:48,y:-38}}]},6).to({state:[{t:this.instance_1,p:{scaleX:1.0586,scaleY:1.0582,x:16,y:-22}},{t:this.instance,p:{scaleX:1.0588,scaleY:1.0585,x:46,y:-38}}]},6).to({state:[{t:this.instance_2,p:{x:22,y:-22}},{t:this.instance_1,p:{scaleX:1.0588,scaleY:1.0585,x:48,y:-38}},{t:this.instance,p:{scaleX:0.8231,scaleY:0.8227,x:61,y:-7}}]},6).to({state:[{t:this.instance_2,p:{x:49,y:-16}},{t:this.instance_1,p:{scaleX:1.0588,scaleY:1.0585,x:49,y:-44}},{t:this.instance,p:{scaleX:1.1987,scaleY:1.2433,x:16,y:-26}}]},6).wait(8));

	// Capa_1
	this.instance_3 = new lib.ja();
	this.instance_3.setTransform(-67,-38);

	this.instance_4 = new lib.ja();
	this.instance_4.setTransform(-56,-4,0.6765,0.6768);

	this.instance_5 = new lib.ja();
	this.instance_5.setTransform(-67,-19,1.0586,1.0582);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{scaleX:1,scaleY:1,x:-67,y:-38}}]}).to({state:[{t:this.instance_3,p:{scaleX:1.5293,scaleY:1.5291,x:-67,y:-38}}]},5).to({state:[{t:this.instance_4,p:{scaleX:0.6765,scaleY:0.6768,x:-56,y:-4}},{t:this.instance_3,p:{scaleX:1.0588,scaleY:1.0585,x:-67,y:-38}}]},6).to({state:[{t:this.instance_4,p:{scaleX:1.0586,scaleY:1.0582,x:-63,y:-17}},{t:this.instance_3,p:{scaleX:1.0588,scaleY:1.0585,x:-63,y:-38}}]},6).to({state:[{t:this.instance_5,p:{x:-67,y:-19}},{t:this.instance_4,p:{scaleX:1.0588,scaleY:1.0585,x:-49,y:-42}},{t:this.instance_3,p:{scaleX:0.8231,scaleY:0.8227,x:-35,y:-12}}]},6).to({state:[{t:this.instance_5,p:{x:-71,y:-21}},{t:this.instance_4,p:{scaleX:1.0588,scaleY:1.0585,x:-54,y:-43}},{t:this.instance_3,p:{scaleX:1.1987,scaleY:1.2433,x:-43,y:-25}}]},6).to({state:[]},7).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-54,160,81.4);


(lib.manoClic = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.manopress();
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.manoClic, new cjs.Rectangle(-250,-250,500,500), null);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mano1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.manoclic();
	this.instance.setTransform(-71.35,-71.35,0.2854,0.2854);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-71.3,142.7,142.7);


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
	this.instance = new lib.Alapato();
	this.instance.setTransform(-133.95,-94.5,1,1,-6.7104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.9,-151.4,534.7,490.9);


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
	this.instance = new lib.cuerpocaperucitaRoja();
	this.instance.setTransform(-37,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-53,206.5,395.5);


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
	this.instance = new lib.manocaperucitaRoja();
	this.instance.setTransform(-24.95,-38,0.5,0.5,15.0648);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,-38,81.30000000000001,76.1);


(lib.cuento4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PortadaCuento4();
	this.instance.setTransform(-415,-251,1.0202,1.0121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.024,scaleY:1.024,x:-461,y:-254},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-461,-254,976.4,513);


(lib.cuento3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PortadaCuento3();
	this.instance.setTransform(-468,-260,1.0263,1.0399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.0302,scaleY:1.0438,x:-470,y:-261},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470,-261,939.6,523);


(lib.cuento2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PortadaCuento2();
	this.instance.setTransform(-471,-243,1.0438,1.0055);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.037,scaleY:1.012,x:-467,y:-250},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471,-250,952,510.8);


(lib.cuento1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.titulocuento();
	this.instance.setTransform(-813,-193,0.5,0.5);

	this.instance_1 = new lib.brillopantalla();
	this.instance_1.setTransform(-905,-260,0.6663,0.9064);

	this.instance_2 = new lib.PortadaCuento();
	this.instance_2.setTransform(-905,-260,0.5033,0.5049);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:0.5033,scaleY:0.5049,x:-905,y:-260}},{t:this.instance_1,p:{scaleX:0.6663,scaleY:0.9064,x:-905,y:-260}},{t:this.instance,p:{scaleX:0.5,scaleY:0.5,x:-813,y:-193}}]}).to({state:[{t:this.instance_2,p:{scaleX:0.5151,scaleY:0.516,x:-913,y:-268}},{t:this.instance_1,p:{scaleX:0.596,scaleY:0.7664,x:-913,y:-197}},{t:this.instance,p:{scaleX:0.5105,scaleY:0.5104,x:-811,y:-208}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-913,-268,939.6,516.6);


(lib.btnInicio = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.botónirinicio();

	this.instance_1 = new lib.btniriniciodown();
	this.instance_1.setTransform(-12,0,1.0573,1.0574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.0573,scaleY:1.0574,x:-12}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,0,440.9,108.9);


(lib.tarjetas = function(mode,startPosition,loop,reversed) {
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
		this.btnCuento1.addEventListener("click", fl );
		
		function fl() {
				window.open("./El_patito_feo", "_self");
		}
		
		
		this.btnCuento2.addEventListener("click", f2);
		
		function f2() {
				window.open("./Caperucita_ y_el_pishing", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tarjetas
	this.instance = new lib.cuento1();
	this.instance.setTransform(4659,250.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.btnCuento1 = new lib.cuento1();
	this.btnCuento1.name = "btnCuento1";
	this.btnCuento1.setTransform(902.7,252.5);
	new cjs.ButtonHelper(this.btnCuento1, 0, 1, 2);

	this.instance_1 = new lib.cuento3();
	this.instance_1.setTransform(2353.15,251,1.0104,1,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_2 = new lib.cuento4();
	this.instance_2.setTransform(3239.7,245.2,0.9979,1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.btnCuento2 = new lib.cuento2();
	this.btnCuento2.name = "btnCuento2";
	this.btnCuento2.setTransform(1397.55,237.3,1.0038,1,0,0,0,0.4,0.1);
	new cjs.ButtonHelper(this.btnCuento2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnCuento2},{t:this.instance_2},{t:this.instance_1},{t:this.btnCuento1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tarjetas, new cjs.Rectangle(-10.3,-17.1,4695.900000000001,530), null);


(lib.caperucita = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-57,91,1,1,0,0,0,28,96);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.2352,x:-54.95,y:91.9},19).to({regX:28.1,rotation:0.2981,x:-54.4,y:92.15},5).to({regX:28,rotation:0,x:-57,y:91},25).wait(1));

	// Capa_2
	this.instance_1 = new lib.Interpolación1("synched",0);
	this.instance_1.setTransform(22.3,232.55,1,1,0,0,0,-15.2,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-6.4509,x:23.1,y:232.05},9).to({rotation:-14.1567,x:23.8,y:232.75},10).to({regY:7.9,rotation:-8.9151,y:232.35},10).to({rotation:-3.1981,x:22.25,y:232.6},10).to({regY:7.8,rotation:0,x:22.3,y:232.55},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-58,209.8,397.4);


(lib.mano_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mano1("synched",0);
	this.instance.setTransform(0,0,0.9811,0.9811);

	this.instance_1 = new lib.manoClic("synched",0);
	this.instance_1.setTransform(0,0,0.256,0.256);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8969,scaleY:0.8969},7).to({_off:true,scaleX:0.256,scaleY:0.256},1).wait(5).to({_off:false,scaleX:0.9599,scaleY:0.9599},1).to({scaleX:0.9811,scaleY:0.9811},4).to({scaleX:0.8969,scaleY:0.8969},6).to({_off:true,scaleX:0.256,scaleY:0.256},1).wait(4).to({_off:false,scaleX:0.9179,scaleY:0.9179},1).to({scaleX:0.9809,scaleY:0.9809},4).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},1).to({startPosition:0},5).to({_off:true,scaleX:0.9599,scaleY:0.9599},1).wait(10).to({_off:false,scaleX:0.256,scaleY:0.256},1).to({startPosition:0},4).to({_off:true,scaleX:0.9179,scaleY:0.9179},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.9,-69.9,140,140);


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
	this.instance = new lib.risa();
	this.instance.setTransform(-1551.9,-101);

	this.instance_1 = new lib.tarjetas();
	this.instance_1.setTransform(-59.8,-4.2,1,1,0,0,0,1827,353.5);

	this.instance_2 = new lib.ja();
	this.instance_2.setTransform(-1552,-118.5);

	this.instance_3 = new lib.brillopantalla();
	this.instance_3.setTransform(-1827,-354.5);

	this.instance_4 = new lib.ja();
	this.instance_4.setTransform(-1558,-148.5);

	this.instance_5 = new lib.ja();
	this.instance_5.setTransform(-1647,-154.5);

	this.instance_6 = new lib.ja();
	this.instance_6.setTransform(-1617,-148.5);

	this.instance_7 = new lib.ja();
	this.instance_7.setTransform(-1635,-126.5);

	this.instance_8 = new lib.ja();
	this.instance_8.setTransform(-1535,-138.5);

	this.instance_9 = new lib.ja();
	this.instance_9.setTransform(-1646,-156.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1889.1,-366.8,4674.299999999999,521);


(lib.atras = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(61.3,3.65,0.5179,0.5133,0,-179.2914,0.6972,175.1,17.2);

	this.instance_1 = new lib.btnflecha();
	this.instance_1.setTransform(13.9,43.75,0.5182,0.513,0,-179.3182,0.7305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:175.1,regY:17.2,scaleX:0.5179,scaleY:0.5133,skewX:-179.2914,skewY:0.6972,x:61.3,y:3.65}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{regX:184.8,regY:21,scaleX:0.4014,scaleY:0.4475,skewX:180,skewY:0,x:60.15,y:1.55}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.9,-45,102.3,90);


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
	this.instance = new lib.Interpolación9("synched",0);
	this.instance.setTransform(523.6,327.8,1,1,3.9539,0,0,377.7,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:377.8,regY:161.8,rotation:-4.7448,x:523.7,y:327.9},21).to({rotation:3.7437,y:327.85},17).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,13.5,564.1,529.6);


(lib.cuerpopato = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CaraPato();
	this.instance.setTransform(-35,-197);

	this.instance_1 = new lib.ala();
	this.instance_1.setTransform(124.5,347.45,1,1,0,0,0,281.4,229.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuerpopato, new cjs.Rectangle(-156,-197,567.3,822.2), null);


(lib.btnPato = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cuerpopato();
	this.instance.setTransform(140.25,209.9,0.5,0.5,0,0,0,134,209.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:210.1,scaleX:0.4743,scaleY:0.4742,x:143.8,y:214},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,6.5,283.59999999999997,411);


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

	this.actionFrames = [0,19,39,59,79,99,119,139];
	// timeline functions:
	this.frame_0 = function() {
		stage.on('drawstart', initStage, this, true);
		function initStage() {
		    stretchToFit();
		}
		
		
		this.stop();
		
		
		this.btnAdelante.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		 
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(1);
		}
		
		
		this.btnAtras.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_25.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_25()
		{
			this.gotoAndPlay(81);
		}
		
		
		
		
		
		var _this = this;
		
		_this.btnInicio.on('click', function(){
		
			 createjs.Sound.play("sound", { volume: 0.5}).on("complete", function () {
		                    
				window.open("../../", "_self");
				 
		                    }, this);
		});
	}
	this.frame_19 = function() {
		this.stop();
		
		
		this.btnAdelante.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_10(){
			this.gotoAndPlay(21);
		}
		
		this.btnAtras.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_30.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_30(){
			this.gotoAndPlay(141);
		}
	}
	this.frame_39 = function() {
		this.stop();
		
		
		this.btnAdelante.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_11(){
			this.gotoAndPlay(41);
		}
		
		
		
		this.btnAtras.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_29.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_29()
		{
			this.gotoAndPlay(121);
		}
	}
	this.frame_59 = function() {
		this.stop();
		
		this.btnAdelante.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_23.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_23(){
			this.gotoAndPlay(61);
		}
		
		
		this.btnAtras.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_27.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_27(){
			this.gotoAndPlay(101);
		}
	}
	this.frame_79 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_99 = function() {
		this.gotoAndStop(59);
	}
	this.frame_119 = function() {
		this.gotoAndStop(39);
	}
	this.frame_139 = function() {
		this.gotoAndPlay(19);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(20).call(this.frame_79).wait(20).call(this.frame_99).wait(20).call(this.frame_119).wait(20).call(this.frame_139).wait(21));

	// mano
	this.instance = new lib.mano_1();
	this.instance.setTransform(766.25,651.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// botones
	this.btnAdelante = new lib.atras();
	this.btnAdelante.name = "btnAdelante";
	this.btnAdelante.setTransform(1079.55,425.75,1,1,180,0,0,63.6,-25.7);
	new cjs.ButtonHelper(this.btnAdelante, 0, 1, 2);

	this.btnAtras = new lib.atras();
	this.btnAtras.name = "btnAtras";
	this.btnAtras.setTransform(223.1,400.05,1,1,0,180,0);
	new cjs.ButtonHelper(this.btnAtras, 0, 1, 2);

	this.btnInicio = new lib.btnInicio();
	this.btnInicio.name = "btnInicio";
	this.btnInicio.setTransform(131.8,728,0.5,0.5,0,0,0,204.6,56);
	new cjs.ButtonHelper(this.btnInicio, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnInicio},{t:this.btnAtras},{t:this.btnAdelante}]}).wait(160));

	// tablet
	this.instance_1 = new lib.Pantalla();
	this.instance_1.setTransform(199,122,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// patoYcaperucita
	this.instance_2 = new lib.btnPato();
	this.instance_2.setTransform(143.9,419.75,0.9524,0.9524,0,0,0,133.9,209.9);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib.caperucita();
	this.instance_3.setTransform(1253.95,284);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(160));

	// mano
	this.instance_4 = new lib.mano();
	this.instance_4.setTransform(1269.15,513.35,0.5,0.5,0,0,0,7.9,85.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160));

	// FONFO
	this.instance_5 = new lib.tituloseccion();
	this.instance_5.setTransform(454,18,0.5,0.5);

	this.instance_6 = new lib.Fondo();
	this.instance_6.setTransform(-12,0,0.5088,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(160));

	// tarjetas
	this.instance_7 = new lib.Interpolación3("synched",0);
	this.instance_7.setTransform(2135.1,506.85,1.0208,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,x:1165.65,y:510.6},19).to({x:225.3,y:510.5},20).to({scaleX:1.0009,x:-732,y:512.4},20).to({scaleX:1.0175,x:-1670.75,y:516.3},20).to({scaleX:1,x:-719.05,y:514.25},20).to({x:219,y:510.5},20).to({x:1149.2,y:508.6},20).to({x:2108.85,y:506.7},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2917.8,384,7909.7,384);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#235594",
	opacity: 1.00,
	manifest: [
		{src:"images/Alapato.png?1675876576492", id:"Alapato"},
		{src:"images/botónirinicio.png?1675876576492", id:"botónirinicio"},
		{src:"images/brillopantalla.png?1675876576492", id:"brillopantalla"},
		{src:"images/btnflecha.png?1675876576492", id:"btnflecha"},
		{src:"images/btniriniciodown.png?1675876576492", id:"btniriniciodown"},
		{src:"images/CaraPato.png?1675876576492", id:"CaraPato"},
		{src:"images/cuerpocaperucitaRoja.png?1675876576492", id:"cuerpocaperucitaRoja"},
		{src:"images/Fondo.png?1675876576492", id:"Fondo"},
		{src:"images/ja.png?1675876576492", id:"ja"},
		{src:"images/manocaperucitaRoja.png?1675876576492", id:"manocaperucitaRoja"},
		{src:"images/manoclic.png?1675876576492", id:"manoclic"},
		{src:"images/manopress.png?1675876576492", id:"manopress"},
		{src:"images/Pantalla.png?1675876576492", id:"Pantalla"},
		{src:"images/PortadaCuento.png?1675876576492", id:"PortadaCuento"},
		{src:"images/PortadaCuento2.png?1675876576492", id:"PortadaCuento2"},
		{src:"images/PortadaCuento3.png?1675876576492", id:"PortadaCuento3"},
		{src:"images/PortadaCuento4.png?1675876576492", id:"PortadaCuento4"},
		{src:"images/titulocuento.png?1675876576492", id:"titulocuento"},
		{src:"images/tituloseccion.png?1675876576492", id:"tituloseccion"},
		{src:"sounds/sound.mp3?1675876576492", id:"sound"}
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