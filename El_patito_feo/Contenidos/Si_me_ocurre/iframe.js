(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"iframe_atlas_1", frames: [[0,616,1373,455],[1957,0,63,63],[1957,65,60,60],[0,1073,1381,431],[1383,893,372,372],[1375,616,651,275],[1383,1267,546,216],[1684,0,271,38],[1684,40,271,38],[1684,80,271,38],[0,1506,1381,352],[0,0,1682,614]]}
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



(lib.bordes = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btnSonidoContenido = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BtnStopSonidoContenido = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cai = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logoicbf = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logopolicia = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logoteprotejo = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.masinformacionDOWN = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.masinformacionUP = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.masinformacion = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.texto = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.texto_1 = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(11);
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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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


(lib.btnMasInformacion = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.masinformacion();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.masinformacionUP();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.masinformacionDOWN();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArWCnIAAlOIWtAAIAAFOg");
	this.shape.setTransform(67.825,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-11.9,145.5,33.5);


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
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnCAI.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://caivirtual.policia.gov.co/', '_blank');
		});
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnTeProtejo.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://teprotejocolombia.org/categorias-de-reporte/ciberacoso/', '_blank');
		});
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn141.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://www.icbf.gov.co/mis-manos-te-ensenan/recomendaciones-ninos-y-ninas-para-llamar-la-linea-141', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.instance = new lib.logoicbf();
	this.instance.setTransform(789,589,0.5,0.4422);

	this.instance_1 = new lib.logopolicia();
	this.instance_1.setTransform(737,419,0.4214,0.4214);

	this.btn141 = new lib.btnMasInformacion();
	this.btn141.name = "btn141";
	this.btn141.setTransform(531.9,734.5);
	new cjs.ButtonHelper(this.btn141, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_2 = new lib.cai();
	this.instance_2.setTransform(-1,307,0.5,0.5);

	this.btnCAI = new lib.btnMasInformacion();
	this.btnCAI.name = "btnCAI";
	this.btnCAI.setTransform(531.9,507.25);
	new cjs.ButtonHelper(this.btnCAI, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_3 = new lib.bordes();
	this.instance_3.setTransform(0,535,0.5,0.5);

	this.instance_4 = new lib.texto();
	this.instance_4.setTransform(0,550,0.5,0.5);

	this.instance_5 = new lib.bordes();
	this.instance_5.setTransform(0,307,0.5,0.5);

	this.instance_6 = new lib.logoteprotejo();
	this.instance_6.setTransform(737,199,0.5,0.5);

	this.btnTeProtejo = new lib.btnMasInformacion();
	this.btnTeProtejo.name = "btnTeProtejo";
	this.btnTeProtejo.setTransform(531.9,278.05);
	new cjs.ButtonHelper(this.btnTeProtejo, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_7 = new lib.texto_1();
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.instance_8 = new lib.Interpolación3("synched",0);
	this.instance_8.setTransform(545.15,465.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.btnTeProtejo},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.btnCAI},{t:this.instance_2},{t:this.btn141},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-1,0,1012.4,762.5), null);


// stage content:
(lib.iframe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"final":0};
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
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn_sonido3.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido3.visible=false;
			_this.btn_sonido4.visible=true;
			_this.btn_sonido5.visible=true;
			createjs.Sound.play("audio1").on("complete", function () {                    
			_this.btn_sonido3.visible=true; 
		                    }, this);; 
		});
		
		_this.btn_sonido4.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido4.visible=false;
			_this.btn_sonido3.visible=true;
			_this.btn_sonido5.visible=true;
			createjs.Sound.play("audio2").on("complete", function () {                    
			_this.btn_sonido4.visible=true; 
		                    }, this);; 
		});
		
		
		_this.btn_sonido5.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido5.visible=false;
			_this.btn_sonido3.visible=true;
			_this.btn_sonido4.visible=true;
			createjs.Sound.play("audio3").on("complete", function () {                    
			_this.btn_sonido5.visible=true; 
		                    }, this);; 
		});
		
		 
		_this.btnStopSonido3.on('click', function(){
			_this.btn_sonido3.visible=true;
			createjs.Sound.stop();
		});
		
		_this.btnStopSonido4.on('click', function(){
			_this.btn_sonido4.visible=true;
			createjs.Sound.stop();
		});
		
		_this.btnStopSonido5.on('click', function(){
			_this.btn_sonido5.visible=true;
			createjs.Sound.stop();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.btn_sonido5 = new lib.btn_sonido();
	this.btn_sonido5.name = "btn_sonido5";
	this.btn_sonido5.setTransform(578.25,657.45,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido5, 0, 1, 2);

	this.btnStopSonido5 = new lib.btnStopSonido();
	this.btnStopSonido5.name = "btnStopSonido5";
	this.btnStopSonido5.setTransform(562.45,641.65);
	new cjs.ButtonHelper(this.btnStopSonido5, 0, 1, 2);

	this.btn_sonido4 = new lib.btn_sonido();
	this.btn_sonido4.name = "btn_sonido4";
	this.btn_sonido4.setTransform(178.3,497.5,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido4, 0, 1, 2);

	this.btnStopSonido4 = new lib.btnStopSonido();
	this.btnStopSonido4.name = "btnStopSonido4";
	this.btnStopSonido4.setTransform(162.5,481.7);
	new cjs.ButtonHelper(this.btnStopSonido4, 0, 1, 2);

	this.btn_sonido3 = new lib.btn_sonido();
	this.btn_sonido3.name = "btn_sonido3";
	this.btn_sonido3.setTransform(604.25,226.55,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido3, 0, 1, 2);

	this.btnStopSonido3 = new lib.btnStopSonido();
	this.btnStopSonido3.name = "btnStopSonido3";
	this.btnStopSonido3.setTransform(587.45,210.75);
	new cjs.ButtonHelper(this.btnStopSonido3, 0, 1, 2);

	this.instance = new lib.Símbolo2();
	this.instance.setTransform(531.35,393.05,1,1,0,0,0,528,392.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btnStopSonido3},{t:this.btn_sonido3},{t:this.btnStopSonido4},{t:this.btn_sonido4},{t:this.btnStopSonido5},{t:this.btn_sonido5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(508.9,415.3,505.80000000000007,347.49999999999994);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1013,
	height: 830,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/iframe_atlas_1.png?1686856354047", id:"iframe_atlas_1"},
		{src:"sounds/audio1.mp3?1686856354079", id:"audio1"},
		{src:"sounds/audio2.mp3?1686856354079", id:"audio2"},
		{src:"sounds/audio3.mp3?1686856354079", id:"audio3"}
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