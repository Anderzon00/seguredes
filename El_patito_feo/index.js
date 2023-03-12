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


(lib.barraseguredes = function() {
	this.initialize(img.barraseguredes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2373,154);


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
	this.instance = new lib.botonplay();
	this.instance.setTransform(-75,-75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5201,scaleY:0.5201,x:-78,y:-78},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-69,y:-69},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-78,156,156);


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
	props.labels = {Cuento:13,Contenidos:14,Actividades:15,Ayuda:16};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,12,13,14,15];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); 
		
		stage.on('drawstart', initStage, this, true);
		function initStage() {
			stretchToFit();
		}
		
		
		const elementdiv = document.getElementById('cuento');
		elementdiv?.remove();
		
		
		const elementdiv1 = document.getElementById('contenidos');
		elementdiv1?.remove();
		
		
		  
		const elementdiv2 = document.getElementById('actividades');
		elementdiv2?.remove();
		
		
		
		 
		
		var _this = this;
		
		_this.btnInicio.on('click', function () {
			createjs.Sound.play("sound2", {	volume: 0.5
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
		
		
		_this.btnContenidos.on('click', function () {		
				_this.gotoAndStop("Contenidos");
				 
		});
		
		
		_this.btnActividades.on('click', function () {	 	
				_this.gotoAndStop("Actividades");
				 		 
		});
		
		this.btnAyuda.on('click', function () {		 
		alert("ayuda");	 
		});
		
		
		_this.button_popup.on('click', function () {
			_this.gotoAndPlay(1);
		});
	}
	this.frame_12 = function() {
		this.stop();
		
		
		var _this = this;
		 
		 
		_this.bntPlay.on('click', function(){
		 
		createjs.Sound.play("SoundPlay", {	volume: 0.8
			}).on("complete", function () {
				_this.gotoAndStop("Cuento");
			}, this);
			
		});
	}
	this.frame_13 = function() {
		const elementdiv = document.getElementById('cuento');
		elementdiv?.remove();
		
		const elementdiv1 = document.getElementById('contenidos');
		elementdiv1?.remove();
		  
		const elementdiv2 = document.getElementById('actividades');
		elementdiv2?.remove();  
		  
		var root = this;
		var key;
		var element = document.createElement('div');
		element.setAttribute('id', 'cuento');
		document.body.appendChild(element);
		element.style.position = "absolute"; 
		 
		element.innerHTML = '<iframe  src= "./Cuento/Escena_1/index.html" id="i_cuento"   style="border:none" allow="autoplay"  >';
		
		function embed() {	
		document.getElementById('cuento').style.left =  2.360 * Math.max(window.innerWidth) / 32 + 'px';
		document.getElementById('cuento').style.top =   1.059* Math.max(window.innerHeight) / 16 + 'px';
		document.getElementById('i_cuento').style.width = 27.93 * (Math.max(window.innerWidth) / 32)+'px';
		document.getElementById('i_cuento').style.height = 13.6 * Math.max(window.innerHeight) / 16 + 'px';
		}
		
		embed();
		
		window.addEventListener('resize', () => {	
		embed();
		})
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnVolverAcuento.on('click', function(){
		createjs.Sound.play("sound2", {	volume: 0.8
			}).on("complete", function () {
				_this.gotoAndStop(0);
			}, this);
		
		});
	}
	this.frame_14 = function() {
		const elementdiv = document.getElementById('cuento');
		elementdiv?.remove();
		
		const elementdiv1 = document.getElementById('contenidos');
		elementdiv1?.remove();
		  
		const elementdiv2 = document.getElementById('actividades');
		elementdiv2?.remove();
		
		var root = this;
		var key;
		var element = document.createElement('div');
		element.setAttribute('id', 'contenidos');
		document.body.appendChild(element);
		element.style.position = "absolute"; 
		 
		element.innerHTML = '<iframe  src= "./Contenidos/index.html"  id="i_contenidos"   style="border:none" allow="autoplay"  >';
		
		var _this = this;
		
		_this.btnContenidos.on('click', function () {
		
			var iframe = document.getElementById('i_contenidos');
		iframe.src = iframe.src;	
				 
		});
		
		function embed() {	
		document.getElementById('contenidos').style.left =  2.360 * Math.max(window.innerWidth) / 32 + 'px';
		document.getElementById('contenidos').style.top =   1.059* Math.max(window.innerHeight) / 16 + 'px';
		document.getElementById('i_contenidos').style.width = 27.93 * (Math.max(window.innerWidth) / 32)+'px';
		document.getElementById('i_contenidos').style.height = 13.6 * Math.max(window.innerHeight) / 16 + 'px';
		}
		
		embed();
		
		window.addEventListener('resize', () => {	
		embed();
		})
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnVolverAcuento.on('click', function(){
		createjs.Sound.play("sound2", {	volume: 0.8
			}).on("complete", function () {
				_this.gotoAndStop(0);
			}, this);
		});
	}
	this.frame_15 = function() {
		const elementdiv = document.getElementById('cuento');
		elementdiv?.remove();
		
		const elementdiv1 = document.getElementById('contenidos');
		elementdiv1?.remove();
		  
		const elementdiv2 = document.getElementById('actividades');
		elementdiv2?.remove();
		    
		var root = this;
		var key;
		var element = document.createElement('div');
		element.setAttribute('id', 'actividades');
		document.body.appendChild(element);
		element.style.position = "absolute"; 
		 
		element.innerHTML = '<iframe  src= "./Actividades/Menu/index.html" id="i_actividades"   style="border:none" allow="autoplay"  >';
		
		var _this = this;
		
		
		
		_this.btnActividades.on('click', function () {
		
			var iframe = document.getElementById('i_actividades');
		iframe.src = iframe.src;
			
				 
		});
		
		
		
		function embed() {	
		document.getElementById('actividades').style.left =  2.360 * Math.max(window.innerWidth) / 32 + 'px';
		document.getElementById('actividades').style.top =   1.059* Math.max(window.innerHeight) / 16 + 'px';
		document.getElementById('i_actividades').style.width = 27.93 * (Math.max(window.innerWidth) / 32)+'px';
		document.getElementById('i_actividades').style.height = 13.6 * Math.max(window.innerHeight) / 16 + 'px';
		}
		
		embed();
		
		window.addEventListener('resize', () => {	
		embed();
		})
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnVolverAcuento.on('click', function(){
		createjs.Sound.play("sound2", {	volume: 0.8
			}).on("complete", function () {
				_this.gotoAndStop(0);
			}, this);
		_this.gotoAndPlay(0);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(2));

	// mensaje
	this.instance = new lib.CARTA();
	this.instance.setTransform(693,233.75);

	this.button_popup = new lib.btnAceptar();
	this.button_popup.name = "button_popup";
	this.button_popup.setTransform(689.75,476.75);
	new cjs.ButtonHelper(this.button_popup, 0, 1, 2);

	this.instance_1 = new lib.Mensaje();
	this.instance_1.setTransform(513,180,0.5,0.5);

	this.instance_2 = new lib.Simbologrupo();
	this.instance_2.setTransform(689.95,341.75,1,1,0,0,0,0.2,0);
	this.instance_2._off = true;

	this.bntPlay = new lib.btnPlay();
	this.bntPlay.name = "bntPlay";
	this.bntPlay.setTransform(685,345);
	this.bntPlay._off = true;
	new cjs.ButtonHelper(this.bntPlay, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehc7AsYMAAAhYvMC53AAAMAAABYvg");
	this.shape.setTransform(696.6084,335.15,1.0019,1);

	this.instance_3 = new lib.fondopapel1();
	this.instance_3.setTransform(101,52,0.6535,0.5726);

	this.instance_4 = new lib.fondoMorado();
	this.instance_4.setTransform(101,53,0.5016,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.button_popup},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.bntPlay}]},1).to({state:[{t:this.bntPlay},{t:this.shape}]},1).to({state:[{t:this.bntPlay},{t:this.instance_3}]},1).to({state:[{t:this.bntPlay},{t:this.instance_4}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:35.8,regY:32.3,scaleX:0.0028,scaleY:0.0031,x:683.1,y:352.4},10).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:685,y:345},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.bntPlay).wait(11).to({_off:false},1).wait(2).to({scaleX:1.0011,x:685.6},0).wait(1).to({scaleX:1,x:685},0).to({_off:true},1).wait(1));

	// Capa_3
	this.btnInicio = new lib.btnInicio();
	this.btnInicio.name = "btnInicio";
	this.btnInicio.setTransform(113.15,741.25,1,1,0,0,0,-511.5,0.8);
	new cjs.ButtonHelper(this.btnInicio, 0, 1, 2);

	this.instance_5 = new lib.mano();
	this.instance_5.setTransform(666.85,93,1,1,0,0,0,-97,-564.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.btnInicio}]}).to({state:[]},13).wait(4));

	// botones
	this.btnAyuda = new lib.btnAyuda();
	this.btnAyuda.name = "btnAyuda";
	this.btnAyuda.setTransform(1214.85,32.5);
	new cjs.ButtonHelper(this.btnAyuda, 0, 1, 2);

	this.btnActividades = new lib.btnActividades();
	this.btnActividades.name = "btnActividades";
	this.btnActividades.setTransform(1019.5,32.5);
	new cjs.ButtonHelper(this.btnActividades, 0, 1, 2);

	this.btnContenidos = new lib.btnContenidos();
	this.btnContenidos.name = "btnContenidos";
	this.btnContenidos.setTransform(790.25,32.5);
	new cjs.ButtonHelper(this.btnContenidos, 0, 1, 2, false, new lib.btnContenidos(), 3);

	this.btnVolver = new lib.btnVolver();
	this.btnVolver.name = "btnVolver";
	this.btnVolver.setTransform(1205.7,741.45,1,1,0,0,0,460.2,1.5);
	new cjs.ButtonHelper(this.btnVolver, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnVolver},{t:this.btnContenidos},{t:this.btnActividades},{t:this.btnAyuda}]}).to({state:[{t:this.btnVolver},{t:this.btnContenidos},{t:this.btnActividades},{t:this.btnAyuda}]},13).to({state:[{t:this.btnVolver},{t:this.btnContenidos},{t:this.btnActividades},{t:this.btnAyuda}]},1).to({state:[{t:this.btnVolver},{t:this.btnContenidos},{t:this.btnActividades},{t:this.btnAyuda}]},1).wait(2));

	// barra
	this.instance_6 = new lib.barraseguredes();
	this.instance_6.setTransform(101,622,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17));

	// tarjeta
	this.instance_7 = new lib.Portada();
	this.instance_7.setTransform(101,50,0.5021,0.5009);

	this.btnVolverAcuento = new lib.btnVolverAcuento();
	this.btnVolverAcuento.name = "btnVolverAcuento";
	this.btnVolverAcuento.setTransform(149.8,741.45,1,1,0,0,0,460.2,1.5);
	new cjs.ButtonHelper(this.btnVolverAcuento, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.btnVolverAcuento}]},13).wait(4));

	// fondo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ehc8AsYMAAAhYvMC54AAAMAAABYvg");
	this.shape_1.setTransform(696.9086,337,1.0019,1);

	this.instance_8 = new lib.bannernegro1();
	this.instance_8.setTransform(101,621,0.5025,0.5);

	this.instance_9 = new lib.fondo11();
	this.instance_9.setTransform(-37,-37,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.shape_1}]}).wait(17));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(646,347,761,456);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#235594",
	opacity: 1.00,
	manifest: [
		{src:"images/bannernegro1.png?1678606212889", id:"bannernegro1"},
		{src:"images/barraseguredes.png?1678606212889", id:"barraseguredes"},
		{src:"images/fondo11.png?1678606212889", id:"fondo11"},
		{src:"images/fondoMorado.png?1678606212889", id:"fondoMorado"},
		{src:"images/Portada.png?1678606212889", id:"Portada"},
		{src:"images/index_atlas_1.png?1678606212790", id:"index_atlas_1"},
		{src:"sounds/sound2.mp3?1678606212889", id:"sound2"},
		{src:"sounds/SoundPlay.mp3?1678606212889", id:"SoundPlay"},
		{src:"sounds/sound1.mp3?1678606212889", id:"sound1"}
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