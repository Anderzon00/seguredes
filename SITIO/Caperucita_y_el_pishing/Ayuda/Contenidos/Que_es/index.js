(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,522,907,286],[909,522,893,256],[1683,107,355,105],[1683,320,355,104],[1683,0,356,105],[1683,214,356,104],[1359,448,63,63],[1424,448,60,60],[1359,323,123,123],[1359,0,322,321],[0,0,1357,520]]}
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



(lib._1_2 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2_1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btnAnterior = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BtnAnteriorHover = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btnSiguiente = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BtnSiguienteHover = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.btnSonidoContenido = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BtnStopSonidoContenido = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.btnX = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.FlechaIndicativa = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.FondoTexto = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.siguiente = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnSiguiente();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.BtnSiguienteHover();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,52.5);


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
	this.instance = new lib.FlechaIndicativa();
	this.instance.setTransform(64.95,-36.25,0.3221,0.3321,104.9991);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-63.8,129.9,127.69999999999999);


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
	this.instance = new lib.FlechaIndicativa();
	this.instance.setTransform(64.95,-36.25,0.3221,0.3321,104.9991);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-63.8,129.9,127.69999999999999);


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
	this.instance = new lib.FlechaIndicativa();
	this.instance.setTransform(64.95,-36.25,0.3221,0.3321,104.9991);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-63.8,129.9,127.69999999999999);


(lib.btnStopSonido = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BtnStopSonidoContenido();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5238,scaleY:0.5238,x:-1},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,31.5,31.5);


(lib.btn_sonido = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnSonidoContenido();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5238,scaleY:0.5238,x:-1},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,33,33);


(lib.cerrar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnX();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5244,scaleY:0.5244,x:-2,y:-2},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,64.5,64.5);


(lib.anterior = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnAnterior();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.BtnAnteriorHover();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.5,52.5);


(lib.flecha = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación2();
	this.instance.setTransform(64.9,63.85);
	this.instance.filters = [new cjs.ColorFilter(0.1, 0.1, 0.1, 1, 229.5, 229.5, 0, 0)];
	this.instance.cache(-67,-66,134,132);

	this.instance_1 = new lib.Interpolación3("synched",0);
	this.instance_1.setTransform(64.9,63.85);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.2, 0.2, 0.2, 1, 204, 204, 0, 0)];
	this.instance_1.cache(-67,-66,134,132);

	this.instance_2 = new lib.Interpolación4("synched",0);
	this.instance_2.setTransform(58.2,56.15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,mode:"synched",startPosition:0},15).wait(15).to({_off:false,mode:"independent"},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},15).to({_off:true,x:58.2,y:56.15},15).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},15).to({_off:true,x:64.9,y:63.85,mode:"independent"},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-7.7,136.6,135.5);


(lib.ayuda = function(mode,startPosition,loop,reversed) {
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
		stage.on('drawstart', initStage, this, true);
		function initStage() {
			stretchToFit();
		}
		
		
		
		this.stop();
		createjs.Sound.stop();
		
		 var _this = this;
		_this.btn_sonido1.visible=true;	
		
		this.btn_sonido1.on('click', function(){
			createjs.Sound.stop();
			
			_this.btn_sonido1.visible=false;
			
			createjs.Sound.play("ayuda1").on("complete", function () {                    
			_this.btn_sonido1.visible=true; 
		                    }, this);; 
		});
		 
		_this.btnStopSonido1.on('click', function(){
			_this.btn_sonido1.visible=true;
			createjs.Sound.stop();
		});
		
		_this.btnSiguiente1.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndStop(1);
		});
		
		_this.btnCerrar.on('click', function(){
		createjs.Sound.stop();
		_this.parent.ayuda.gotoAndStop(0);
			_this.btn_sonido1.visible=true;	
			window.parent.ocultaAyuda();
		});
	}
	this.frame_1 = function() {
		var _this = this;
		
		_this.btn_sonido1.visible=true;
			
		
		this.btn_sonido1.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido1.visible=false;
			
			createjs.Sound.play("ayuda2").on("complete", function () {                    
			_this.btn_sonido1.visible=true; 
		                    }, this);; 
		});
		 
		_this.btnStopSonido1.on('click', function(){
			_this.btn_sonido1.visible=true;
			createjs.Sound.stop();
		});
		_this.btnAnterior2.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndStop(0);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// navegacion
	this.instance = new lib.flecha();
	this.instance.setTransform(327.1,264.3,1,1,0,-94.7003,85.2997,65,63.9);

	this.btnSiguiente1 = new lib.siguiente();
	this.btnSiguiente1.name = "btnSiguiente1";
	this.btnSiguiente1.setTransform(718.25,384.2,1,1,0,0,0,89,26.2);
	new cjs.ButtonHelper(this.btnSiguiente1, 0, 1, 2);

	this.btn_sonido1 = new lib.btn_sonido();
	this.btn_sonido1.name = "btn_sonido1";
	this.btn_sonido1.setTransform(718.25,168.25,1.8208,1.8208,0,0,0,15.8,15.7);
	new cjs.ButtonHelper(this.btn_sonido1, 0, 1, 2);

	this.btnStopSonido1 = new lib.btnStopSonido();
	this.btnStopSonido1.name = "btnStopSonido1";
	this.btnStopSonido1.setTransform(719.6,168.25,1.8208,1.8208,0,0,0,15.8,15.7);
	new cjs.ButtonHelper(this.btnStopSonido1, 0, 1, 2);

	this.btnAnterior2 = new lib.anterior();
	this.btnAnterior2.name = "btnAnterior2";
	this.btnAnterior2.setTransform(501.3,276.2,1,1,0,0,0,88.8,26.2);
	new cjs.ButtonHelper(this.btnAnterior2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnStopSonido1,p:{x:719.6,y:168.25}},{t:this.btn_sonido1,p:{x:718.25,y:168.25}},{t:this.btnSiguiente1},{t:this.instance,p:{regX:65,regY:63.9,skewX:-94.7003,skewY:85.2997,x:327.1,y:264.3}}]}).to({state:[{t:this.btnStopSonido1,p:{x:503.1,y:95.85}},{t:this.btn_sonido1,p:{x:501.75,y:95.85}},{t:this.instance,p:{regX:93,regY:121.2,skewX:-158.0458,skewY:21.9542,x:270.85,y:286.75}},{t:this.btnAnterior2}]},1).wait(1));

	// cerrar
	this.btnCerrar = new lib.cerrar();
	this.btnCerrar.name = "btnCerrar";
	this.btnCerrar.setTransform(1042.15,173.2,1,1,0,0,0,30.8,30.8);
	new cjs.ButtonHelper(this.btnCerrar, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnCerrar).wait(1).to({x:825.65,y:105.8},0).wait(1));

	// texto
	this.instance_1 = new lib._1_2();
	this.instance_1.setTransform(506,211,0.5,0.5);

	this.instance_2 = new lib._2_1();
	this.instance_2.setTransform(278,136,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// cuadro
	this.instance_3 = new lib.FondoTexto();
	this.instance_3.setTransform(379,161,0.5,0.5184);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleY:0.4571,x:162,y:89},0).wait(1));

	// transparencia_copia_copia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEgnLAryQABgNABgOQgBgPgBgMgEg5iguwQhdBeAACEMAAABF+QAACEBdBeQBeBdCEAAMBtBAAAQCEAABehdQBehegBiEMAAAhF+QABiEheheQhehdiEAAMhtBAAAQiEAAheBdg");
	this.shape.setTransform(575.45,106.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/gEhZNAnTQheBeAACFQAACFBeBdQBeBeCEAAIQkAAQCEAABeheQBdhdAAiFQAAiFhdheQhehdiEAAIwkAAQiEAAheBdgEgnLAryQABgNABgOQgBgPgBgMg");
	this.shape_1.setTransform(575.45,106.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-277.2,1366,768);


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

	// Capa_2
	this.ayuda = new lib.ayuda();
	this.ayuda.name = "ayuda";
	this.ayuda.setTransform(107.9,277.9);

	this.timeline.addTween(cjs.Tween.get(this.ayuda).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(683,384,683.4000000000001,384.70000000000005);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#33FF33",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_P_1.png?1722461982421", id:"index_atlas_P_1"},
		{src:"sounds/ayuda1.mp3?1722461982469", id:"ayuda1"},
		{src:"sounds/ayuda2.mp3?1722461982469", id:"ayuda2"}
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