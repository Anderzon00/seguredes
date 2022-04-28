(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"menuprincipal_atlas_1", frames: [[1564,499,244,219],[1564,720,209,52],[1355,0,660,497],[1754,937,96,91],[1754,883,209,52],[1810,499,187,284],[1355,499,207,396],[0,934,1368,768],[1999,499,34,41],[1754,1030,69,61],[0,0,1353,932],[914,1704,912,501],[914,2207,912,501],[0,2413,912,501],[0,1704,912,707],[1370,897,382,153],[1564,785,458,96]]}
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



(lib.Alapato = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.botónirinicio = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.brillopantalla = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.btnflecha = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btniriniciodown = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CaraPato = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cuerpocaperucitaRoja = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Fondo = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ja = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.manocaperucitaRoja = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Pantalla = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.PortadaCuento = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.PortadaCuento2 = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.PortadaCuento3 = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.PortadaCuento4 = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.titulocuento = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.tituloseccion = function() {
	this.initialize(ss["menuprincipal_atlas_1"]);
	this.gotoAndStop(16);
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

	// Capa_1
	this.instance = new lib.PortadaCuento4();
	this.instance.setTransform(2742,0);

	this.instance_1 = new lib.PortadaCuento3();
	this.instance_1.setTransform(1830,0);

	this.instance_2 = new lib.PortadaCuento2();
	this.instance_2.setTransform(918,0);

	this.instance_3 = new lib.PortadaCuento();
	this.instance_3.setTransform(0,0,1.0066,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tarjetas, new cjs.Rectangle(0,0,3654,707), null);


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
	this.instance.setTransform(-41,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FDCE3C").ss(7,1,1).p("Ag2CdIB0ifIh7ia");
	this.shape.setTransform(58.175,25.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:false},0).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-22,108.9,91);


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
	this.instance = new lib.manocaperucitaRoja();
	this.instance.setTransform(12.4,1.25,0.9999,0.9999,15.0444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:-14.9541,x:-7.5,y:4.1},0).wait(12).to({rotation:15.0444,x:12.4,y:1.25},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-13.7,86.6,91.8);


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
	this.instance_1.setTransform(0,0,1.0573,1.0574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.0573,scaleY:1.0574}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,55);


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
	this.instance = new lib.Alapato();
	this.instance.setTransform(-11.1,29.3,1,1,-6.7104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({rotation:8.4948,x:18.9,y:-34.8},0).wait(11).to({rotation:-6.5037,x:-10.75,y:28.35},0).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-34.8,273.59999999999997,281.6);


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
	this.instance = new lib.tarjetas();
	this.instance.setTransform(0,1,1,1,0,0,0,1827,353.5);

	this.instance_1 = new lib.titulocuento();
	this.instance_1.setTransform(-1801,-316.5);

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
p.nominalBounds = new cjs.Rectangle(-1827,-354.5,3654,709);


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
	this.instance = new lib.tarjetas();
	this.instance.setTransform(0,1,1,1,0,0,0,1827,353.5);

	this.instance_1 = new lib.titulocuento();
	this.instance_1.setTransform(-1801,-316.5);

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
p.nominalBounds = new cjs.Rectangle(-1827,-354.5,3654,709);


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
	this.instance.setTransform(49.1,0);

	this.instance_1 = new lib.ala();
	this.instance_1.setTransform(263.7,282.5,1,1,0,0,0,252.6,109.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuerpopato, new cjs.Rectangle(0,0,268,419.8), null);


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
	this.instance.setTransform(34.8,43.5,1.0417,1.0412,180,0,0,25.9,25.9);

	this.instance_1 = new lib.btnflecha();
	this.instance_1.setTransform(102.2,94,1.0439,1.0442,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:25.9,regY:25.9,scaleX:1.0417,scaleY:1.0412,x:34.8,y:43.5}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{regX:25.4,regY:25.6,scaleX:0.8957,scaleY:0.895,x:27.2,y:45.65}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,-1.4,103.8,95.4);


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
	this.instance = new lib.cuerpopato();
	this.instance.setTransform(133.9,209.9,1,1,0,0,0,133.9,209.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0188,scaleY:1.0187,x:136.4,y:213.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273,427.6);


// stage content:
(lib.menuprincipal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,20,40,60];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		 
		
		this.btnAdelate.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(2);
		}
	}
	this.frame_20 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		
		
		 
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.btnAdelate.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(22);
		}
	}
	this.frame_40 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.btnAdelate.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(42);
		}
		
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.btnAtras.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(21);
		}
	}
	this.frame_60 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.btnAdelate.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(20).call(this.frame_40).wait(20).call(this.frame_60).wait(22));

	// botones
	this.btnAdelate = new lib.atras();
	this.btnAdelate.name = "btnAdelate";
	this.btnAdelate.setTransform(1111.2,446,1,1,180);
	new cjs.ButtonHelper(this.btnAdelate, 0, 1, 2);

	this.btnInicio = new lib.btnInicio();
	this.btnInicio.name = "btnInicio";
	this.btnInicio.setTransform(133.5,725,1,1,0,0,0,104.5,26);
	new cjs.ButtonHelper(this.btnInicio, 0, 1, 2);

	this.btnAtras = new lib.atras();
	this.btnAtras.name = "btnAtras";
	this.btnAtras.setTransform(299,400.35,1,1,0,0,0,52.6,46.3);
	new cjs.ButtonHelper(this.btnAtras, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnInicio},{t:this.btnAdelate}]}).to({state:[{t:this.btnInicio},{t:this.btnAdelate},{t:this.btnAtras,p:{regX:52.6,regY:46.3,x:299,y:400.35}}]},20).to({state:[{t:this.btnInicio},{t:this.btnAdelate},{t:this.btnAtras,p:{regX:52.6,regY:46.3,x:299,y:400.35}}]},20).to({state:[{t:this.btnInicio},{t:this.btnAtras,p:{regX:0,regY:0,x:242,y:357}}]},20).wait(22));

	// tablet
	this.instance = new lib.Pantalla();
	this.instance.setTransform(0,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82));

	// cuerpo_caperucitaRoja_png
	this.instance_1 = new lib.cuerpocaperucitaRoja();
	this.instance_1.setTransform(1135,224);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(82));

	// mano
	this.instance_2 = new lib.mano();
	this.instance_2.setTransform(1300.55,509.5,1,1,0,0,0,38.2,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82));

	// pato
	this.instance_3 = new lib.Símbolo1();
	this.instance_3.setTransform(132.9,444.1,0.9524,0.9524,0,0,0,133.9,209.9);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82));

	// titulo_seccion
	this.instance_4 = new lib.tituloseccion();
	this.instance_4.setTransform(431,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82));

	// FONFO
	this.instance_5 = new lib.Fondo();
	this.instance_5.setTransform(-26,1,1.0175,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(82));

	// tarjetas
	this.instance_6 = new lib.Interpolación3("synched",0);
	this.instance_6.setTransform(2044,510.5);

	this.instance_7 = new lib.Interpolación4("synched",0);
	this.instance_7.setTransform(1128.35,510.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:1128.35},20).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},20).to({x:216.7},20).to({x:-700.95,y:512.5},20).wait(22));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1844.9,346,5715.9,548);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#225693",
	opacity: 1.00,
	manifest: [
		{src:"images/menuprincipal_atlas_1.png?1651121588352", id:"menuprincipal_atlas_1"}
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