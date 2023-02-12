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



(lib.amarillo = function() {
	this.initialize(img.amarillo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,121);


(lib.botonvamos = function() {
	this.initialize(img.botonvamos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,274,80);


(lib.botonVamosClic = function() {
	this.initialize(img.botonVamosClic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,274,80);


(lib.BtnCreditos = function() {
	this.initialize(img.BtnCreditos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,98);


(lib.btnCreditosHover = function() {
	this.initialize(img.btnCreditosHover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,98);


(lib.btnInicio = function() {
	this.initialize(img.btnInicio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,98);


(lib.btnInicioHover = function() {
	this.initialize(img.btnInicioHover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,98);


(lib.Fondo_1 = function() {
	this.initialize(img.Fondo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2888,1680);


(lib.globorojoderecha = function() {
	this.initialize(img.globorojoderecha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,286);


(lib.globorojoizquierda = function() {
	this.initialize(img.globorojoizquierda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,286);


(lib.globoverdederecha = function() {
	this.initialize(img.globoverdederecha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,276);


(lib.globoverdeizquierda = function() {
	this.initialize(img.globoverdeizquierda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,277);


(lib.Seguredes = function() {
	this.initialize(img.Seguredes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1035,395);


(lib.texto = function() {
	this.initialize(img.texto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1196,224);


(lib.tituloBienvenida = function() {
	this.initialize(img.tituloBienvenida);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,173);// helper functions:

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
	this.instance = new lib.amarillo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,93,60.5), null);


(lib.zoomseguredes = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Seguredes();
	this.instance.setTransform(-259,-93,0.5,0.5);

	this.instance_1 = new lib.globoverdederecha();
	this.instance_1.setTransform(144,-230,1,1.1232);

	this.instance_2 = new lib.globorojoderecha();
	this.instance_2.setTransform(97,-268,1,1.1427);

	this.instance_3 = new lib.globoverdeizquierda();
	this.instance_3.setTransform(-252,-221,1,1.0899);

	this.instance_4 = new lib.globorojoizquierda();
	this.instance_4.setTransform(-192,-260,0.9767,1.116);

	this.instance_5 = new lib.tituloBienvenida();
	this.instance_5.setTransform(-150,-163,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zoomseguredes, new cjs.Rectangle(-259,-268,517.5,372.5), null);


(lib.seguredes = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Seguredes();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seguredes, new cjs.Rectangle(0,0,1035,395), null);


(lib.globoVerdeIzq = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.globoverdeizquierda();
	this.instance.setTransform(-44,-138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-45,y:-139},0).wait(5).to({x:-46},0).wait(5).to({x:-47},0).wait(5).to({x:-48},0).wait(5).to({x:-49},0).wait(5).to({x:-50},0).wait(5).to({x:-51},0).wait(5).to({x:-52},0).wait(5).to({x:-53},0).wait(5).to({x:-54},0).wait(5).to({x:-53,y:-138},0).wait(5).to({x:-52,y:-137},0).wait(5).to({x:-51,y:-136},0).wait(5).to({x:-50},0).wait(5).to({x:-49},0).wait(5).to({x:-48},0).wait(5).to({x:-47},0).wait(5).to({x:-46},0).wait(5).to({x:-45},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-139,98,280);


(lib.globoVerdeDer = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.globoverdederecha();
	this.instance.setTransform(-44,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-43},0).wait(5).to({x:-42},0).wait(5).to({x:-41},0).wait(5).to({x:-40},0).wait(5).to({x:-39},0).wait(5).to({x:-38},0).wait(5).to({x:-37},0).wait(5).to({x:-36},0).wait(5).to({x:-35},0).wait(5).to({x:-34},0).wait(5).to({x:-35,y:-139},0).wait(5).to({x:-36},0).wait(5).to({x:-37},0).wait(5).to({x:-38},0).wait(5).to({x:-39},0).wait(5).to({x:-40},0).wait(5).to({x:-41},0).wait(5).to({x:-42},0).wait(5).to({x:-43},0).wait(7).to({x:-44,y:-138},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-139,98,277);


(lib.globoRojoIzq = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.globorojoizquierda();
	this.instance.setTransform(-43,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-42,y:-142},0).wait(5).to({x:-43},0).wait(5).to({x:-44},0).wait(5).to({x:-45},0).wait(5).to({x:-46},0).wait(5).to({x:-47},0).wait(5).to({x:-48},0).wait(5).to({x:-49},0).wait(5).to({x:-50},0).wait(5).to({x:-51},0).wait(5).to({x:-52},0).wait(5).to({x:-53},0).wait(5).to({x:-52},0).wait(5).to({x:-51,y:-141},0).wait(5).to({x:-50,y:-140},0).wait(1).to({y:-141},0).wait(4).to({x:-49,y:-140},0).wait(6).to({x:-48,y:-141},0).wait(4).to({x:-47},0).wait(5).to({x:-46,y:-142},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-143,97,289);


(lib.globorojoder = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.globorojoderecha();
	this.instance.setTransform(-43,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-42},0).wait(5).to({x:-41},0).wait(5).to({x:-40,y:-142},0).wait(5).to({x:-39},0).wait(5).to({x:-38},0).wait(5).to({x:-37},0).wait(5).to({x:-36},0).wait(5).to({x:-35},0).wait(5).to({x:-34},0).wait(5).to({x:-33},0).wait(5).to({x:-34,y:-143},0).wait(5).to({x:-35,y:-144},0).wait(5).to({x:-36},0).wait(5).to({x:-37,y:-145},0).wait(5).to({x:-38},0).wait(5).to({x:-39},0).wait(5).to({x:-40},0).wait(7).to({x:-41},0).wait(6).to({y:-144},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-145,96,289);


(lib.inicio = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnInicio();
	this.instance.setTransform(-59,-26,0.5695,0.5724);

	this.instance_1 = new lib.btnInicioHover();
	this.instance_1.setTransform(-59,-26,0.5946,0.5946);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-26,130.8,58.3);


(lib.btnVamos = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.botonvamos();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.botonVamosClic();
	this.instance_1.setTransform(-2,0,0.5109,0.5112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,140,40.9);


(lib.btnCreditos = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BtnCreditos();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.btnCreditosHover();
	this.instance_1.setTransform(-2,0,0.5166,0.5169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,142.6,50.7);


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
		
		_this.btnVamos.on('click', function(){
		
			 createjs.Sound.play("sound", { volume: 0.5}).on("complete", function () {
		                    
				 window.open("MenuPrincipal", "_self");
				 
		                    }, this);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.btnVamos = new lib.btnVamos();
	this.btnVamos.name = "btnVamos";
	this.btnVamos.setTransform(0,56.45,1.2197,1.2197,0,0,0,68.5,20.1);
	new cjs.ButtonHelper(this.btnVamos, 0, 1, 2);

	this.instance = new lib.texto();
	this.instance.setTransform(-299,-80.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btnVamos}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-299,-80.7,598,162.60000000000002), null);


(lib.zoomtexto = function(mode,startPosition,loop,reversed) {
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
	this.movieClip_8 = new lib.Símbolo2();
	this.movieClip_8.name = "movieClip_8";
	this.movieClip_8.setTransform(0,156.3,1,1,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zoomtexto, new cjs.Rectangle(-299,75,598,161.5), null);


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

	this.actionFrames = [0,102];
	// timeline functions:
	this.frame_0 = function() {
		stage.on('drawstart', initStage, this, true);
		function initStage() {
		    stretchToFit();
		}
	}
	this.frame_102 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
		
		
		
		
		
		
		var _this = this;
		
		_this.btnCreditos.on('click', function(){
		
			 createjs.Sound.play("sound", { volume: 0.5}).on("complete", function () {
		                    
				alert("creditos" );
				 
		                    }, this);
		});
		
		
		_this.btnInicio.on('click', function(){
		
			 createjs.Sound.play("sound", { volume: 0.5}).on("complete", function () {
		                    
					 window.open("../", "_self");
		
				 
		                    }, this);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(102).call(this.frame_102).wait(1));

	// botonesYtexto
	this.instance = new lib.zoomtexto();
	this.instance.setTransform(683,538.35,0.01,0.01,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).wait(1).to({regY:156.3,scaleX:0.0528,scaleY:0.0618,skewY:0,y:530.4},0).wait(1).to({scaleX:0.1157,scaleY:0.1236,y:522.45},0).wait(1).to({scaleX:0.1785,scaleY:0.1854,y:514.5},0).wait(1).to({scaleX:0.2414,scaleY:0.2471,y:506.6},0).wait(1).to({scaleX:0.3042,scaleY:0.3089,y:498.65},0).wait(1).to({scaleX:0.3671,scaleY:0.3707,y:490.7},0).wait(1).to({scaleX:0.4299,scaleY:0.4325,y:482.75},0).wait(1).to({scaleX:0.4928,scaleY:0.4943,y:474.8},0).wait(1).to({scaleX:0.5556,scaleY:0.5561,y:466.85},0).wait(1).to({scaleX:0.6185,scaleY:0.6179,y:458.9},0).wait(1).to({scaleX:0.6813,scaleY:0.6796,y:451},0).wait(1).to({scaleX:0.7442,scaleY:0.7414,y:443.05},0).wait(1).to({scaleX:0.807,scaleY:0.8032,y:435.1},0).wait(1).to({scaleX:0.8699,scaleY:0.865,y:427.15},0).wait(1).to({scaleX:0.9327,scaleY:0.9268,y:419.2},0).wait(1).to({scaleX:0.9955,scaleY:0.9886,x:683.05,y:411.3},0).wait(22));

	// aamarillo
	this.instance_1 = new lib.Símbolo1();
	this.instance_1.setTransform(628.4,235.2,0.0107,0.0165,0,0,0,46.7,36.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:46.5,regY:30.2,scaleX:0.0398,scaleY:0.0394,x:655.7,y:236.6},0).wait(1).to({scaleX:0.0689,scaleY:0.0624,x:683,y:238.1},0).wait(1).to({scaleX:0.1165,scaleY:0.1022,x:683.25,y:230.45},0).wait(1).to({scaleX:0.1642,scaleY:0.1419,x:683.55,y:222.8},0).wait(1).to({scaleX:0.2119,scaleY:0.1817,x:683.8,y:215.1},0).wait(1).to({scaleX:0.2595,scaleY:0.2215,x:684.05,y:207.45},0).wait(1).to({scaleX:0.3072,scaleY:0.2613,x:684.35,y:199.75},0).wait(1).to({scaleX:0.3548,scaleY:0.301,x:684.6,y:192.1},0).wait(1).to({scaleX:0.3828,scaleY:0.338,x:684.75,y:184.9},0).wait(1).to({scaleX:0.4107,scaleY:0.375,x:684.95,y:177.75},0).wait(1).to({scaleX:0.4387,scaleY:0.412,x:685.1,y:170.55},0).wait(1).to({scaleX:0.4667,scaleY:0.449,x:685.25,y:163.35},0).wait(1).to({scaleX:0.4946,scaleY:0.486,x:685.45,y:156.2},0).wait(1).to({scaleX:0.5226,scaleY:0.523,x:685.6,y:149},0).wait(1).to({scaleX:0.5505,scaleY:0.56,x:685.75,y:141.8},0).wait(1).to({scaleX:0.5785,scaleY:0.597,x:685.9,y:134.65},0).wait(1).to({scaleX:0.6065,scaleY:0.6341,x:686.1,y:127.45},0).wait(1).to({scaleX:0.6344,scaleY:0.6711,x:686.25,y:120.25},0).wait(1).to({scaleX:0.6649,scaleY:0.6985,x:686.4,y:114.8},0).wait(1).to({scaleX:0.6953,scaleY:0.7259,x:686.65,y:109.3},0).wait(1).to({scaleX:0.7258,scaleY:0.7533,x:686.8,y:103.85},0).wait(1).to({scaleX:0.7563,scaleY:0.7807,x:686.95,y:98.45},0).wait(1).to({scaleX:0.7867,scaleY:0.8081,x:687.15,y:92.95},0).wait(1).to({scaleX:0.8172,scaleY:0.8355,x:687.35,y:87.5},0).wait(1).to({scaleX:0.8477,scaleY:0.8629,x:687.5,y:82},0).wait(1).to({scaleX:0.8781,scaleY:0.8904,x:687.7,y:76.55},0).wait(1).to({scaleX:0.9086,scaleY:0.9178,x:687.9,y:71.05},0).wait(1).to({scaleX:0.9391,scaleY:0.9452,x:688.05,y:65.6},0).wait(1).to({scaleX:0.9695,scaleY:0.9726,x:688.25,y:60.1},0).wait(1).to({scaleX:1,scaleY:1,x:688.45,y:59.2},0).wait(73));

	// seguredes
	this.instance_2 = new lib.zoomseguredes();
	this.instance_2.setTransform(683,252.6,0.0017,0.0023);

	this.instance_3 = new lib.seguredes();
	this.instance_3.setTransform(573.1,209.8,0.5029,0.4478,0,0,0,298.9,108.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.2,regY:-81.8,scaleX:0.036,scaleY:0.0327,y:249.65},0).wait(1).to({scaleX:0.0704,scaleY:0.063,y:246.9},0).wait(1).to({scaleX:0.1047,scaleY:0.0934,y:244.15},0).wait(1).to({scaleX:0.1391,scaleY:0.1238,x:682.95,y:241.4},0).wait(1).to({scaleX:0.1734,scaleY:0.1542,y:238.7},0).wait(1).to({scaleX:0.2078,scaleY:0.1845,y:235.95},0).wait(1).to({scaleX:0.2421,scaleY:0.2149,y:233.2},0).wait(1).to({scaleX:0.2765,scaleY:0.2453,x:683,y:230.5},0).wait(1).to({scaleX:0.3108,scaleY:0.2757,y:227.75},0).wait(1).to({scaleX:0.3452,scaleY:0.306,y:225},0).wait(1).to({scaleX:0.3795,scaleY:0.3364,x:682.95,y:222.3},0).wait(1).to({scaleX:0.4139,scaleY:0.3668,y:219.55},0).wait(1).to({scaleX:0.4482,scaleY:0.3971,y:216.8},0).wait(1).to({scaleX:0.4826,scaleY:0.4275,y:214.1},0).wait(1).to({scaleX:0.517,scaleY:0.4579,x:683,y:211.3},0).wait(1).to({scaleX:0.5513,scaleY:0.4883,y:208.55},0).wait(1).to({scaleX:0.5857,scaleY:0.5186,y:205.85},0).wait(1).to({scaleX:0.62,scaleY:0.549,y:203.1},0).wait(1).to({scaleX:0.6544,scaleY:0.5794,x:682.95,y:200.35},0).wait(1).to({scaleX:0.6887,scaleY:0.6097,y:197.6},0).wait(1).to({scaleX:0.7231,scaleY:0.6401,y:194.9},0).wait(1).to({scaleX:0.7574,scaleY:0.6705,x:683,y:192.15},0).wait(1).to({scaleX:0.7918,scaleY:0.7009,y:189.4},0).wait(1).to({scaleX:0.8261,scaleY:0.7312,y:186.7},0).wait(1).to({scaleX:0.8605,scaleY:0.7616,y:183.95},0).wait(1).to({scaleX:0.8948,scaleY:0.792,x:682.95,y:181.2},0).wait(1).to({scaleX:0.9292,scaleY:0.8223,y:178.5},0).wait(1).to({scaleX:0.9635,scaleY:0.8527,y:175.75},0).wait(1).to({scaleX:0.9979,scaleY:0.8831,x:683,y:173},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).wait(1).to({regX:517.5,regY:197.5,scaleX:0.5462,scaleY:0.5342,x:683,y:246.35},0).wait(1).to({scaleX:0.5896,scaleY:0.6205,y:243.2},0).wait(1).to({scaleX:0.6329,scaleY:0.7069,y:240.05},0).wait(1).to({scaleX:0.6551,scaleY:0.7414,y:239.1},0).wait(1).to({scaleX:0.6772,scaleY:0.7759,y:238.2},0).wait(1).to({scaleX:0.6552,scaleY:0.7551,x:683.05,y:238.95},0).wait(1).to({scaleX:0.6331,scaleY:0.7343,x:683,y:239.75},0).wait(1).to({scaleX:0.611,scaleY:0.7136,x:683.05,y:240.5},0).wait(1).to({scaleX:0.5889,scaleY:0.6928,x:683,y:241.25},0).wait(1).to({scaleX:0.5668,scaleY:0.6721,x:683.05,y:242.05},0).wait(1).to({scaleX:0.5629,scaleY:0.6607,x:683,y:244.25},0).wait(1).to({scaleX:0.559,scaleY:0.6493,y:246.4},0).wait(1).to({scaleX:0.5551,scaleY:0.6379,y:248.6},0).wait(1).to({scaleX:0.5511,scaleY:0.6265,x:682.95,y:250.8},0).wait(1).to({scaleX:0.5472,scaleY:0.6152,y:253},0).wait(1).to({scaleX:0.5433,scaleY:0.6038,x:683,y:247.4},0).wait(1).to({scaleX:0.5393,scaleY:0.5924,y:241.8},0).wait(1).to({scaleX:0.5354,scaleY:0.581,y:236.2},0).wait(1).to({scaleX:0.5315,scaleY:0.5696,y:230.6},0).wait(1).to({scaleX:0.5275,scaleY:0.5582,y:233.25},0).wait(1).to({scaleX:0.5236,scaleY:0.5469,y:235.9},0).wait(1).to({scaleX:0.5197,scaleY:0.5355,x:682.95,y:238.5},0).wait(1).to({scaleX:0.5157,scaleY:0.5241,x:683,y:241.15},0).wait(1).to({scaleX:0.5118,scaleY:0.5127,x:682.95,y:243.8},0).wait(1).to({scaleX:0.5079,scaleY:0.5013,y:247.55},0).wait(1).to({scaleX:0.5039,scaleY:0.49,x:683,y:251.25},0).wait(1).to({scaleX:0.5,scaleY:0.4786,y:255},0).wait(46));

	// Capa_1
	this.btnInicio = new lib.inicio();
	this.btnInicio.name = "btnInicio";
	this.btnInicio.setTransform(599.75,733.35,1.048,0.9286,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.btnInicio, 0, 1, 2);

	this.btnCreditos = new lib.btnCreditos();
	this.btnCreditos.name = "btnCreditos";
	this.btnCreditos.setTransform(756.3,730.55,0.9177,1.0643,0,0,0,67.9,20.2);
	new cjs.ButtonHelper(this.btnCreditos, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,197,255,0)").ss(1,1,1).p("AjinlIHFAAIAAPLInFAAg");
	this.shape.setTransform(682.025,701.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.btnCreditos},{t:this.btnInicio}]},81).wait(22));

	// globos
	this.instance_4 = new lib.globoVerdeIzq();
	this.instance_4.setTransform(476.35,188.5);

	this.instance_5 = new lib.globoVerdeDer();
	this.instance_5.setTransform(870.65,181);

	this.instance_6 = new lib.globorojoder();
	this.instance_6.setTransform(824.65,153);

	this.instance_7 = new lib.globoRojoIzq();
	this.instance_7.setTransform(532.7,159);

	this.instance_8 = new lib.tituloBienvenida();
	this.instance_8.setTransform(534,102,0.5,0.4347);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},30).wait(73));

	// libro
	this.instance_9 = new lib.Fondo_1();
	this.instance_9.setTransform(-39,-50,0.5,0.5087);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(103));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(644,334,761,470.70000000000005);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#235594",
	opacity: 1.00,
	manifest: [
		{src:"images/amarillo.png?1676214456472", id:"amarillo"},
		{src:"images/botonvamos.png?1676214456472", id:"botonvamos"},
		{src:"images/botonVamosClic.png?1676214456472", id:"botonVamosClic"},
		{src:"images/BtnCreditos.png?1676214456472", id:"BtnCreditos"},
		{src:"images/btnCreditosHover.png?1676214456472", id:"btnCreditosHover"},
		{src:"images/btnInicio.png?1676214456472", id:"btnInicio"},
		{src:"images/btnInicioHover.png?1676214456472", id:"btnInicioHover"},
		{src:"images/Fondo_1.png?1676214456472", id:"Fondo_1"},
		{src:"images/globorojoderecha.png?1676214456472", id:"globorojoderecha"},
		{src:"images/globorojoizquierda.png?1676214456472", id:"globorojoizquierda"},
		{src:"images/globoverdederecha.png?1676214456472", id:"globoverdederecha"},
		{src:"images/globoverdeizquierda.png?1676214456472", id:"globoverdeizquierda"},
		{src:"images/Seguredes.png?1676214456472", id:"Seguredes"},
		{src:"images/texto.png?1676214456472", id:"texto"},
		{src:"images/tituloBienvenida.png?1676214456472", id:"tituloBienvenida"},
		{src:"sounds/sound.mp3?1676214456472", id:"sound"}
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