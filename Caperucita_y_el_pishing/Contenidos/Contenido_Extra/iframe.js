(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"iframe_atlas_1", frames: [[0,399,1442,372],[1780,0,63,63],[1845,0,60,60],[1404,0,374,374],[1444,750,499,215],[1437,1184,271,38],[1710,1184,271,38],[1437,1224,271,38],[1444,967,499,215],[0,1147,1435,355],[1444,376,372,372],[0,0,1402,397],[0,1504,1400,291],[0,773,1442,372]]}
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



(lib.borde = function() {
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



(lib.imggoogle = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.imgsecurekids = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.masinformacionDOWN = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.masinformacionUP = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.masinformacion = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.metacomplianceimg = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Metacompliancetext = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.safetyimg = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.safetytext = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.securekidstext = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.textphishingquizgoogle = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(13);
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
		_this.phishingquiz.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://phishingquiz.withgoogle.com/', '_blank');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.securekids.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://securekids.es/etiqueta/que-es-phishing/', '_blank');
		});
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.metacompliance.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://www.metacompliance.com/es/lp/ultimate-guide-phishing', '_blank');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.safety.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://es.safetydetectives.com/blog/que-es-el-phishing-guia-sencilla-con-ejemplos/', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.instance = new lib.borde();
	this.instance.setTransform(-7,802,0.5,0.5);

	this.safety = new lib.btnMasInformacion();
	this.safety.name = "safety";
	this.safety.setTransform(624.1,983.45);
	new cjs.ButtonHelper(this.safety, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_1 = new lib.metacomplianceimg();
	this.instance_1.setTransform(813,598,0.4332,0.5134);

	this.instance_2 = new lib.safetytext();
	this.instance_2.setTransform(9,817,0.5,0.5);

	this.instance_3 = new lib.safetyimg();
	this.instance_3.setTransform(828,834,0.5,0.5);

	this.instance_4 = new lib.imgsecurekids();
	this.instance_4.setTransform(810,345,0.4439,0.5161);

	this.metacompliance = new lib.btnMasInformacion();
	this.metacompliance.name = "metacompliance";
	this.metacompliance.setTransform(624.1,680.5);
	new cjs.ButtonHelper(this.metacompliance, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_5 = new lib.Metacompliancetext();
	this.instance_5.setTransform(9,522,0.5,0.5);

	this.securekids = new lib.btnMasInformacion();
	this.securekids.name = "securekids";
	this.securekids.setTransform(624.1,427.35);
	new cjs.ButtonHelper(this.securekids, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_6 = new lib.borde();
	this.instance_6.setTransform(-7,256,0.5,0.5);

	this.instance_7 = new lib.securekidstext();
	this.instance_7.setTransform(9,268,0.543,0.5);

	this.instance_8 = new lib.imggoogle();
	this.instance_8.setTransform(827,35,0.5,0.5);

	this.phishingquiz = new lib.btnMasInformacion();
	this.phishingquiz.name = "phishingquiz";
	this.phishingquiz.setTransform(624.1,182.8);
	new cjs.ButtonHelper(this.phishingquiz, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_9 = new lib.textphishingquizgoogle();
	this.instance_9.setTransform(-7,35,0.543,0.5);

	this.instance_10 = new lib.borde();
	this.instance_10.setTransform(776,1015,0.5,0.5,180);

	this.instance_11 = new lib.borde();
	this.instance_11.setTransform(776,710,0.5,0.5,180);

	this.instance_12 = new lib.borde();
	this.instance_12.setTransform(-7,509,0.5,0.5);

	this.instance_13 = new lib.borde();
	this.instance_13.setTransform(776,458,0.5,0.5,180);

	this.instance_14 = new lib.borde();
	this.instance_14.setTransform(776,213,0.5,0.5,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.phishingquiz},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.securekids},{t:this.instance_5},{t:this.metacompliance},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.safety},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-7,27,1038.6,993), null);


// stage content:
(lib.iframe = function(mode,startPosition,loop,reversed) {
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
		var _this = this;
		createjs.Sound.stop();
		
		
		this.btn_sonido1.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido1.visible=false;
			_this.btn_sonido2.visible=true;
			_this.btn_sonido3.visible=true;
			_this.btn_sonido4.visible=true;
			createjs.Sound.play("audio1").on("complete", function () {                    
			_this.btn_sonido1.visible=true; 
		                    }, this);; 
		});
		
		_this.btn_sonido2.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido2.visible=false;
			_this.btn_sonido1.visible=true;
			_this.btn_sonido3.visible=true;
			_this.btn_sonido4.visible=true;
			createjs.Sound.play("audio2").on("complete", function () {                    
			_this.btn_sonido2.visible=true; 
		                    }, this);; 
		});
		
		
		_this.btn_sonido3.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido3.visible=false;
			_this.btn_sonido1.visible=true;
			_this.btn_sonido2.visible=true;
			_this.btn_sonido4.visible=true;
			createjs.Sound.play("audio3").on("complete", function () {                    
			_this.btn_sonido3.visible=true; 
		                    }, this);; 
		});
		
		
		_this.btn_sonido4.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido4.visible=false;
			_this.btn_sonido1.visible=true;
			_this.btn_sonido2.visible=true;
			_this.btn_sonido3.visible=true;
			createjs.Sound.play("audio4").on("complete", function () {                    
			_this.btn_sonido4.visible=true; 
		                    }, this);; 
		});
		
		
		 
		_this.btnStopSonido1.on('click', function(){
			_this.btn_sonido1.visible=true;
			createjs.Sound.stop();
		});
		
		_this.btnStopSonido2.on('click', function(){
			_this.btn_sonido2.visible=true;
			createjs.Sound.stop();
		});
		
		_this.btnStopSonido3.on('click', function(){
			_this.btn_sonido3.visible=true;
			createjs.Sound.stop();
		});
		
		_this.btnStopSonido4.on('click', function(){
			_this.btn_sonido4.visible=true;
			createjs.Sound.stop();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// titulo
	this.btn_sonido4 = new lib.btn_sonido();
	this.btn_sonido4.name = "btn_sonido4";
	this.btn_sonido4.setTransform(130,928.45,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido4, 0, 1, 2);

	this.btnStopSonido4 = new lib.btnStopSonido();
	this.btnStopSonido4.name = "btnStopSonido4";
	this.btnStopSonido4.setTransform(114.2,912.65);
	new cjs.ButtonHelper(this.btnStopSonido4, 0, 1, 2);

	this.btn_sonido1 = new lib.btn_sonido();
	this.btn_sonido1.name = "btn_sonido1";
	this.btn_sonido1.setTransform(266.7,151.45,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido1, 0, 1, 2);

	this.btnStopSonido1 = new lib.btnStopSonido();
	this.btnStopSonido1.name = "btnStopSonido1";
	this.btnStopSonido1.setTransform(250.9,136.65);
	new cjs.ButtonHelper(this.btnStopSonido1, 0, 1, 2);

	this.btn_sonido2 = new lib.btn_sonido();
	this.btn_sonido2.name = "btn_sonido2";
	this.btn_sonido2.setTransform(416.95,382.45,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido2, 0, 1, 2);

	this.btnStopSonido2 = new lib.btnStopSonido();
	this.btnStopSonido2.name = "btnStopSonido2";
	this.btnStopSonido2.setTransform(402.65,366.65);
	new cjs.ButtonHelper(this.btnStopSonido2, 0, 1, 2);

	this.btn_sonido3 = new lib.btn_sonido();
	this.btn_sonido3.name = "btn_sonido3";
	this.btn_sonido3.setTransform(540.3,639.5,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido3, 0, 1, 2);

	this.btnStopSonido3 = new lib.btnStopSonido();
	this.btnStopSonido3.name = "btnStopSonido3";
	this.btnStopSonido3.setTransform(524.5,623.7);
	new cjs.ButtonHelper(this.btnStopSonido3, 0, 1, 2);

	this.instance = new lib.Símbolo2();
	this.instance.setTransform(546.1,378.65,1,1,0,0,0,528,392.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btnStopSonido3},{t:this.btn_sonido3},{t:this.btnStopSonido2},{t:this.btn_sonido2},{t:this.btnStopSonido1},{t:this.btn_sonido1},{t:this.btnStopSonido4},{t:this.btn_sonido4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(545.6,525.1,504.1,481);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1069,
	height: 1024,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/iframe_atlas_1.png?1687399803887", id:"iframe_atlas_1"},
		{src:"sounds/audio3.mp3?1687399803930", id:"audio3"},
		{src:"sounds/audio1.mp3?1687399803930", id:"audio1"},
		{src:"sounds/audio4.mp3?1687399803930", id:"audio4"},
		{src:"sounds/audio2.mp3?1687399803930", id:"audio2"}
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