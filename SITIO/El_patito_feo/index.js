(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1513,994,466,90],[1194,1697,315,90],[1108,1605,457,90],[1513,1086,466,90],[1511,1697,315,90],[1567,1605,457,90],[1513,1178,466,90],[0,1704,315,90],[0,1612,457,90],[1211,1405,708,106],[1211,1296,707,107],[1211,994,300,300],[0,1520,552,90],[827,1697,365,91],[554,1605,552,90],[459,1697,366,91],[709,1513,553,90],[1264,1513,553,90],[0,0,1824,992],[1826,0,140,139],[709,994,500,500],[0,994,707,524]]}
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



(lib._1ActividadesNORMAL = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1AyudaNORMAL = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1ContenidosNORMAL = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._2actividadesSOBRE = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._2ayudaSOBRE = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._2contenidosSOBRE = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._3actividadesDOWN = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._3ayudaDOWN = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._3contenidosDOWN = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bannernegro1 = function() {
	this.initialize(img.bannernegro1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2372,153);


(lib.botonaceptar2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Botonaceptar = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.botonplay = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BtnInicioCuentoHover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.btnIrInicio = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.btnIrInicioCuento = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.btnIrInicioHover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.btnMenuCuentos = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.btnMenuCuentosHover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.fondopapel1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.fondo11 = function() {
	this.initialize(img.fondo11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2888,1680);


(lib.fondoMorado = function() {
	this.initialize(img.fondoMorado);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2376,1136);


(lib.icono = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.mano2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Mensaje = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Portada = function() {
	this.initialize(img.Portada);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2374,1144);// helper functions:

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
	this.instance = new lib.mano2();
	this.instance.setTransform(-115.8,-645.7,0.2286,0.2286,46.4684);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-88.8,y:-673.7},9).to({x:-115.8,y:-645.7},10).to({x:-88.8,y:-673.7},9).to({x:-115.8,y:-645.7},11).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.7,-673.7,188.7,189.70000000000005);


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
	this.instance = new lib.icono();
	this.instance.setTransform(-35,-34.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-34.7,70,69.5);


(lib.btn_amarillo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#F8D338").ss(15,1,1).p("AIDAAQAADViXCXQiWCXjWAAQjUAAiYiXQiWiXAAjVQAAjVCWiXQCYiWDUAAQDWAACWCWQCXCXAADVg");
	this.shape.setTransform(-2.025,-1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},24).wait(24));

	// Capa_1
	this.instance = new lib.botonplay();
	this.instance.setTransform(-75,-75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-75,150,150);


(lib.btnVolverAcuento = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnIrInicioCuento();
	this.instance.setTransform(322,-21,0.5,0.5);

	this.instance_1 = new lib.BtnInicioCuentoHover();
	this.instance_1.setTransform(322,-21,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322,-21,276,45);


(lib.btnVolver = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnMenuCuentos();
	this.instance.setTransform(322,-21,0.5,0.5);

	this.instance_1 = new lib.btnMenuCuentosHover();
	this.instance_1.setTransform(322,-21,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322,-21,276.5,45);


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
	this.instance = new lib.btnIrInicio();
	this.instance.setTransform(-603,-22,0.5,0.5);

	this.instance_1 = new lib.btnIrInicioHover();
	this.instance_1.setTransform(-603,-22,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-603,-22,183,45.5);


(lib.btnContenidos = function(mode,startPosition,loop,reversed) {
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
		playSound("sound1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Capa_1
	this.instance = new lib._1ContenidosNORMAL();
	this.instance.setTransform(-114.25,-22.5,0.5,0.5);

	this.instance_1 = new lib._2contenidosSOBRE();
	this.instance_1.setTransform(-114.25,-22.5,0.5,0.5);

	this.instance_2 = new lib._3contenidosDOWN();
	this.instance_2.setTransform(-114.25,-22.5,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("Ax2jgMAjtAAAIAAHBMgjtAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ax1DhIAAnBMAjrAAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.2,-23.5,230.5,47);


(lib.btnAyuda = function(mode,startPosition,loop,reversed) {
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
		playSound("sound1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib._1AyudaNORMAL();
	this.instance.setTransform(-78.75,-22.5,0.5,0.5);

	this.instance_1 = new lib._2ayudaSOBRE();
	this.instance_1.setTransform(-78.75,-22.5,0.5,0.5);

	this.instance_2 = new lib._3ayudaDOWN();
	this.instance_2.setTransform(-78.75,-22.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.7,-22.5,157.5,45);


(lib.btnActividades = function(mode,startPosition,loop,reversed) {
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
		playSound("sound1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib._1ActividadesNORMAL();
	this.instance.setTransform(-116.5,-22.5,0.5,0.5);

	this.instance_1 = new lib._2actividadesSOBRE();
	this.instance_1.setTransform(-116.5,-22.5,0.5,0.5);

	this.instance_2 = new lib._3actividadesDOWN();
	this.instance_2.setTransform(-116.5,-22.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-22.5,233,45);


(lib.btnAceptar = function(mode,startPosition,loop,reversed) {
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
		playSound("sound2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Botonaceptar();
	this.instance.setTransform(-176.75,-26.75,0.5,0.5);

	this.instance_1 = new lib.botonaceptar2();
	this.instance_1.setTransform(-176.75,-26.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.5,scaleY:0.5,x:-176.75,y:-26.75}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4802,scaleY:0.4802,x:-170,y:-26}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.7,-26.7,354,53.5);


(lib.CARTAESTATICA = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación12("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CARTAESTATICA, new cjs.Rectangle(-35,-34.7,70,69.5), null);


(lib.CARTA = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación12("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2.8},5).to({y:5},3).to({y:0},6).to({y:5},9).to({y:0},7).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-34.7,70,74.5);


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
	this.instance = new lib.btn_amarillo();

	this.instance_1 = new lib.botonplay();
	this.instance_1.setTransform(-78,-78,0.5201,0.5201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:0.5201,scaleY:0.5201,x:-78,y:-78}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.46,scaleY:0.46,x:-69,y:-69}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-78,156,156);


(lib.Simbologrupo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CARTAESTATICA();
	this.instance.setTransform(3.25,-108);

	this.instance_1 = new lib.btnAceptar();
	this.instance_1.setTransform(0,135);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_2 = new lib.Mensaje();
	this.instance_2.setTransform(-176.75,-161.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbologrupo, new cjs.Rectangle(-176.7,-161.7,354,323.5), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {play:12,Cuento:13,Contenidos:14,Actividades:15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,12,13,14,15];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var iframe = document.createElement('iframe');
		iframe.id = 'mi_iframe';
		iframe.style.position = 'absolute';
		iframe.style.border = 'none';
		iframe.style.zIndex = '2'; 
		iframe.allow = 'autoplay';
		document.body.appendChild(iframe);
		iframe.src = './Ayuda/index.html'
		document.getElementById('mi_iframe').style.display = 'none';
		
		function ajustarIframe() {	 
			document.getElementById('mi_iframe').style.width =  window.innerWidth  + 'px';
			document.getElementById('mi_iframe').style.height = window.innerHeight  + 'px';
		}
		
		ajustarIframe();
		window.addEventListener('resize', ajustarIframe);
		this.stop();
		
		var iframec = document.createElement('iframe');
		iframec.id = 'contenidos';
		iframec.style.position = 'absolute';
		iframec.style.border = 'none';
		iframec.style.zIndex = '1'; 
		iframec.allow = 'autoplay';
		document.body.appendChild(iframec);
		iframec.src = '';
		
		function ajustarIframe2() {		
			iframec.style.left = 2.360 * Math.max(window.innerWidth) / 32 + 'px';
			iframec.style.top = 1.059 * Math.max(window.innerHeight) / 16 + 'px';	
			iframec.style.width =  27.9250 * (Math.max(window.innerWidth) / 32) + 'px';   
			iframec.style.height = 13.6 * Math.max(window.innerHeight) / 16 + 'px';'px';
		}
		
		ajustarIframe2();
		
		window.addEventListener('resize', ajustarIframe2);
		
		document.getElementById('contenidos').style.display = 'none';
		
		var _this = this;
		
		_this.btnAyuda.on('click', function () {
		_this.gotoAndStop("play");
		    document.getElementById('mi_iframe').style.display = 'block';	
		});
		
		_this.btnContenidos.on('click', function () {
			document.getElementById('contenidos').src = "./Contenidos/index.html";
			_this.gotoAndStop("Contenidos");
			document.getElementById('contenidos').style.display = 'block';		  
		});
		
		_this.btnActividades.on('click', function () {
			document.getElementById('contenidos').src = "./Actividades/Menu/index.html"	
			_this.gotoAndStop("Actividades");
			document.getElementById('contenidos').style.display = 'block';
		});
		stage.on('drawstart', initStage, this, true);
		function initStage() {
			stretchToFit();
		}
		
		var _this = this;
		
		_this.btnVolverAcuento.on('click', function () {
			createjs.Sound.play("sound2", {
				volume: 0.8
			}).on("complete", function () {
				irCuento()
			}, this);
		});
		
		_this.btnInicio.on('click', function () {
			createjs.Sound.play("sound2", {
				volume: 0.8
			}).on("complete", function () {
				window.open("../../", "_self");
			}, this);
		});
		
		_this.btnVolver.on('click', function () {
			createjs.Sound.play("sound2", {
				volume: 0.8
			}).on("complete", function () {
				window.open("../MenuPrincipal", "_self");
			}, this);
		});
		
		_this.button_popup.on('click', function () {
			_this.gotoAndPlay(1);
		});
	}
	this.frame_12 = function() {
		this.stop();
		document.getElementById('contenidos').src =  "";
		
		var _this= this;
		var iframe = document.getElementById('mi_iframe');
		iframe.src = './Ayuda/index.html'; 
		
		document.getElementById('contenidos').style.display = 'none';
		
		_this.bntPlay.on('click', function(){	
		document.getElementById('contenidos').src =  "./Cuento/Escena_1/index.html";	
		createjs.Sound.play("SoundPlay", {	volume: 0.8
			}).on("complete", function () {
				_this.gotoAndStop("Cuento");
			}, this);	
		});
	}
	this.frame_13 = function() {
		document.getElementById('contenidos').style.display = 'block';
		
		var _this = this;
		var iframe = document.getElementById('mi_iframe');
		iframe.src = './Ayuda/Cuento/index.html'; 
		
		_this.btnAyudaCuento.on('click', function () {
		document.getElementById('mi_iframe').style.display = 'block';
			createjs.Sound.stop();
			var root = document.getElementById('contenidos').contentWindow; 
			root.exportRoot.pause.visible = false;
			root.exportRoot.playaudio.visible = true;
			root.createjs.Sound.stop();
			
		/*	
		if (typeof root.playSound === 'function') {
		  root.playSound(null, "voice", true, {});
		}	 
		
		*/
		
		});
	}
	this.frame_14 = function() {
		var btnAyudaC = this.btnAyudaCotenidos;
		
		var iframeContenidos = document.getElementById('contenidos');
		
		
		var iframeC = window.parent.document.getElementById('mi_iframe');
		
		
		
		
		btnAyudaC.on('click', function () {
			if (iframeContenidos && iframeContenidos.contentWindow && iframeContenidos.contentWindow.createjs) {
				iframeContenidos.contentWindow.createjs.Sound.stop();
			}
			// Verificar si el iframe 'video' existe y si createjs está definido para él
			var iframeVideo = iframeContenidos.contentWindow.document.getElementById('video');
			if (iframeVideo && iframeVideo.contentWindow && iframeVideo.contentWindow.createjs) {
				iframeVideo.contentWindow.createjs.Sound.stop();
			}
			iframeC.style.display = 'block';
		});
	}
	this.frame_15 = function() {
		var iframe = document.getElementById('mi_iframe');
		
		var iframeContenidos = document.getElementById('contenidos');
		
		btnAyuda = this.btnAyudaActividades;
		
		btnAyuda.on('click', function () {
		iframeContenidos.contentWindow.createjs.Sound.muted = true;
		iframe.style.display = 'block';
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1));

	// Capa_3
	this.instance = new lib.mano();
	this.instance.setTransform(666.85,93,1,1,0,0,0,-97,-564.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(15));

	// mensaje
	this.instance_1 = new lib.CARTA();
	this.instance_1.setTransform(693,233.75);

	this.button_popup = new lib.btnAceptar();
	this.button_popup.name = "button_popup";
	this.button_popup.setTransform(689.75,476.75);
	new cjs.ButtonHelper(this.button_popup, 0, 1, 2);

	this.instance_2 = new lib.Mensaje();
	this.instance_2.setTransform(513,180,0.5,0.5);

	this.instance_3 = new lib.Simbologrupo();
	this.instance_3.setTransform(689.95,341.75,1,1,0,0,0,0.2,0);
	this.instance_3._off = true;

	this.bntPlay = new lib.btnPlay();
	this.bntPlay.name = "bntPlay";
	this.bntPlay.setTransform(711.7,332.2,1.4666,1.4665,0,0,0,1.6,1.9);
	this.bntPlay._off = true;
	new cjs.ButtonHelper(this.bntPlay, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehc7AsYMAAAhYvMC53AAAMAAABYvg");
	this.shape.setTransform(696.6084,335.15,1.0019,1);

	this.instance_4 = new lib.fondopapel1();
	this.instance_4.setTransform(101,52,0.6535,0.5726);

	this.instance_5 = new lib.fondoMorado();
	this.instance_5.setTransform(101,53,0.5016,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.button_popup},{t:this.instance_1}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.bntPlay}]},1).to({state:[{t:this.bntPlay},{t:this.shape}]},1).to({state:[{t:this.bntPlay},{t:this.instance_4}]},1).to({state:[{t:this.bntPlay},{t:this.instance_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:35.8,regY:32.3,scaleX:0.0028,scaleY:0.0031,x:683.1,y:352.4},10).to({_off:true,regX:1.6,regY:1.9,scaleX:1.4666,scaleY:1.4665,x:711.7,y:332.2},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.bntPlay).wait(11).to({_off:false},1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:685,y:345},1).wait(1).to({scaleX:1.0011,x:685.6},0).wait(1).to({scaleX:1,x:685},0).wait(1));

	// btnAyuda
	this.btnActividades = new lib.btnActividades();
	this.btnActividades.name = "btnActividades";
	this.btnActividades.setTransform(1019.5,32.95);
	new cjs.ButtonHelper(this.btnActividades, 0, 1, 2);

	this.btnContenidos = new lib.btnContenidos();
	this.btnContenidos.name = "btnContenidos";
	this.btnContenidos.setTransform(790.25,33.1);
	new cjs.ButtonHelper(this.btnContenidos, 0, 1, 2, false, new lib.btnContenidos(), 3);

	this.btnVolver = new lib.btnVolver();
	this.btnVolver.name = "btnVolver";
	this.btnVolver.setTransform(1205.7,738.75,1,1,0,0,0,460.2,1.5);
	new cjs.ButtonHelper(this.btnVolver, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnVolver},{t:this.btnContenidos},{t:this.btnActividades}]}).wait(16));

	// btnInicio
	this.btnInicio = new lib.btnInicio();
	this.btnInicio.name = "btnInicio";
	this.btnInicio.setTransform(113.15,738.55,1,1,0,0,0,-511.5,0.8);
	new cjs.ButtonHelper(this.btnInicio, 0, 1, 2);

	this.btnVolverAcuento = new lib.btnVolverAcuento();
	this.btnVolverAcuento.name = "btnVolverAcuento";
	this.btnVolverAcuento.setTransform(156.55,737.4,1,1,0,0,0,460.2,1.5);
	new cjs.ButtonHelper(this.btnVolverAcuento, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnInicio}]}).to({state:[{t:this.btnVolverAcuento}]},13).wait(3));

	// btnAyuda
	this.btnAyuda = new lib.btnAyuda();
	this.btnAyuda.name = "btnAyuda";
	this.btnAyuda.setTransform(1214.85,32.95);
	new cjs.ButtonHelper(this.btnAyuda, 0, 1, 2);

	this.btnAyudaCuento = new lib.btnAyuda();
	this.btnAyudaCuento.name = "btnAyudaCuento";
	this.btnAyudaCuento.setTransform(1214.85,32.95);
	new cjs.ButtonHelper(this.btnAyudaCuento, 0, 1, 2);

	this.btnAyudaCotenidos = new lib.btnAyuda();
	this.btnAyudaCotenidos.name = "btnAyudaCotenidos";
	this.btnAyudaCotenidos.setTransform(1214.85,32.95);
	new cjs.ButtonHelper(this.btnAyudaCotenidos, 0, 1, 2);

	this.btnAyudaActividades = new lib.btnAyuda();
	this.btnAyudaActividades.name = "btnAyudaActividades";
	this.btnAyudaActividades.setTransform(1214.85,32.95);
	new cjs.ButtonHelper(this.btnAyudaActividades, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnAyuda}]}).to({state:[{t:this.btnAyudaCuento}]},13).to({state:[{t:this.btnAyudaCotenidos}]},1).to({state:[{t:this.btnAyudaActividades}]},1).wait(1));

	// botones
	this.instance_6 = new lib.Portada();
	this.instance_6.setTransform(100,50,0.5021,0.5009);

	this.btnActividades_1 = new lib.btnActividades();
	this.btnActividades_1.name = "btnActividades_1";
	this.btnActividades_1.setTransform(1019.5,32.95);
	new cjs.ButtonHelper(this.btnActividades_1, 0, 1, 2);

	this.btnContenidos_1 = new lib.btnContenidos();
	this.btnContenidos_1.name = "btnContenidos_1";
	this.btnContenidos_1.setTransform(790.25,33.1);
	new cjs.ButtonHelper(this.btnContenidos_1, 0, 1, 2, false, new lib.btnContenidos(), 3);

	this.btnVolver_1 = new lib.btnVolver();
	this.btnVolver_1.name = "btnVolver_1";
	this.btnVolver_1.setTransform(1205.7,738.75,1,1,0,0,0,460.2,1.5);
	new cjs.ButtonHelper(this.btnVolver_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.btnVolver_1},{t:this.btnContenidos_1},{t:this.btnActividades_1}]},13).wait(3));

	// fondo
	this.instance_7 = new lib.bannernegro1();
	this.instance_7.setTransform(100,621,0.5025,0.5);

	this.instance_8 = new lib.fondo11();
	this.instance_8.setTransform(-38,-37,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(16));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(645,347,761,456);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#235594",
	opacity: 0.00,
	manifest: [
		{src:"images/bannernegro1.png?1715148489459", id:"bannernegro1"},
		{src:"images/fondo11.png?1715148489459", id:"fondo11"},
		{src:"images/fondoMorado.png?1715148489459", id:"fondoMorado"},
		{src:"images/Portada.png?1715148489459", id:"Portada"},
		{src:"images/index_atlas_1.png?1715148489399", id:"index_atlas_1"},
		{src:"sounds/sound2.mp3?1715148489459", id:"sound2"},
		{src:"sounds/SoundPlay.mp3?1715148489460", id:"SoundPlay"},
		{src:"sounds/sound1.mp3?1715148489460", id:"sound1"}
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