(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"iframe_atlas_1", frames: [[0,0,1325,651],[1145,653,63,63],[1210,653,60,60],[3603,0,456,456],[2409,491,651,275],[3062,491,546,216],[2409,768,271,38],[2682,768,271,38],[3610,458,271,38],[1327,0,1143,484],[2472,0,1129,489],[1145,841,1727,121],[1327,486,1080,353],[0,653,1143,326]]}
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



(lib.bannerweb021 = function() {
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



(lib.LogoADenunciarpngcopia = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logopolicia = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logoteprotejo = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.masinformacionDOWN = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.masinformacionUP = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.masinformacion = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.phishing = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Teprotejo = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Texto1_1 = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Texto5 = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Texto8_1 = function() {
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


(lib._2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// diapositiva2-img1-fondo.png
	this.instance = new lib.bannerweb021();
	this.instance.setTransform(4,-338,0.1914,0.1914);

	this.instance_1 = new lib.logopolicia();
	this.instance_1.setTransform(-23,-35,0.5,0.5);

	this.instance_2 = new lib.logoteprotejo();
	this.instance_2.setTransform(-3,-649,0.5238,0.5238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// diapositiva2-im2-circle.png
	this.instance_3 = new lib.LogoADenunciarpngcopia();
	this.instance_3.setTransform(31,178,0.4781,0.4781);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._2, new cjs.Rectangle(-23,-649,325.5,1045), null);


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
		createjs.Sound.stop();
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn_sonido1.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido1.visible=false;
			_this.btn_sonido2.visible=true;
			_this.btn_sonido3.visible=true;
			_this.btn_sonido4.visible=true;
			_this.btn_sonido6.visible=true;
			createjs.Sound.play("audio1a").on("complete", function () {                    
			_this.btn_sonido1.visible=true; 
		                    }, this);; 
		});
		
		_this.btn_sonido2.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido2.visible=false;
			_this.btn_sonido1.visible=true;
			_this.btn_sonido3.visible=true;
			_this.btn_sonido4.visible=true;
			_this.btn_sonido6.visible=true;
			createjs.Sound.play("audio2a").on("complete", function () {                    
			_this.btn_sonido2.visible=true; 
		                    }, this);; 
		});
		
		
		_this.btn_sonido3.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido3.visible=false;
			_this.btn_sonido1.visible=true;
			_this.btn_sonido2.visible=true;
			_this.btn_sonido4.visible=true;
			_this.btn_sonido6.visible=true;
			createjs.Sound.play("audio3a").on("complete", function () {                    
			_this.btn_sonido3.visible=true; 
		                    }, this);; 
		});
		
		
		_this.btn_sonido4.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido4.visible=false;
			_this.btn_sonido1.visible=true;
			_this.btn_sonido2.visible=true;
			_this.btn_sonido3.visible=true;
			_this.btn_sonido6.visible=true;
			createjs.Sound.play("audio4a").on("complete", function () {                    
			_this.btn_sonido4.visible=true; 
		                    }, this);; 
		});
		
		_this.btn_sonido6.on('click', function(){
			createjs.Sound.stop();
			_this.btn_sonido6.visible=false;
			_this.btn_sonido1.visible=true;
			_this.btn_sonido2.visible=true;
			_this.btn_sonido3.visible=true;
			_this.btn_sonido4.visible=true;
			createjs.Sound.play("audio5a").on("complete", function () {                    
			_this.btn_sonido6.visible=true; 
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
		
		_this.btnStopSonido6.on('click', function(){
			_this.btn_sonido6.visible=true;
			createjs.Sound.stop();
		});
		
		
		
		
		
		
		 
		
		 
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnCAI.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://adenunciar.policia.gov.co/Adenunciar/frm_denuncia_pi.aspx', '_blank');
		});
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnTeProtejo.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://teprotejocolombia.org/categorias-de-reporte/', '_blank');
		});
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnAdenunciar.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://www.policia.gov.co/denuncia-virtual/contenidos-explotacion-sexual-infantil', '_blank');
		});
		
		
		
		
		
		   // Function to scroll vertically
		        function scrollPage(direction) {
		            const scrollSpeed = 10; // Adjust scroll speed as needed
		            window.scrollBy(0, direction * scrollSpeed);
		        }
		
		        // Add event listener for keydown
		        window.addEventListener('keydown', function(event) {
		            switch(event.key) {
		                case 'ArrowUp':
		                    scrollPage(-1); // Scroll up when the 'Up' arrow key is pressed
		                    break;
		                case 'ArrowDown':
		                    scrollPage(1); // Scroll down when the 'Down' arrow key is pressed
		                    break;
		            }
		        });
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// titulo
	this.btn_sonido6 = new lib.btn_sonido();
	this.btn_sonido6.name = "btn_sonido6";
	this.btn_sonido6.setTransform(880.95,71,1,1,0,0,0,15.5,16.5);
	new cjs.ButtonHelper(this.btn_sonido6, 0, 1, 2);

	this.btnStopSonido6 = new lib.btnStopSonido();
	this.btnStopSonido6.name = "btnStopSonido6";
	this.btnStopSonido6.setTransform(864.45,56);
	new cjs.ButtonHelper(this.btnStopSonido6, 0, 1, 2);

	this.instance = new lib.Texto1_1();
	this.instance.setTransform(124,27,0.5,0.5);

	this.btnTeProtejo = new lib.btnMasInformacion();
	this.btnTeProtejo.name = "btnTeProtejo";
	this.btnTeProtejo.setTransform(555.4,372.6);
	new cjs.ButtonHelper(this.btnTeProtejo, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.btnCAI = new lib.btnMasInformacion();
	this.btnCAI.name = "btnCAI";
	this.btnCAI.setTransform(514.7,978.7);
	new cjs.ButtonHelper(this.btnCAI, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.btnAdenunciar = new lib.btnMasInformacion();
	this.btnAdenunciar.name = "btnAdenunciar";
	this.btnAdenunciar.setTransform(514.7,1231.7);
	new cjs.ButtonHelper(this.btnAdenunciar, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.btn_sonido4 = new lib.btn_sonido();
	this.btn_sonido4.name = "btn_sonido4";
	this.btn_sonido4.setTransform(271.3,1138.5,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido4, 0, 1, 2);

	this.btnStopSonido4 = new lib.btnStopSonido();
	this.btnStopSonido4.name = "btnStopSonido4";
	this.btnStopSonido4.setTransform(255.5,1122.7);
	new cjs.ButtonHelper(this.btnStopSonido4, 0, 1, 2);

	this.btn_sonido1 = new lib.btn_sonido();
	this.btn_sonido1.name = "btn_sonido1";
	this.btn_sonido1.setTransform(253.35,532.3,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido1, 0, 1, 2);

	this.btnStopSonido1 = new lib.btnStopSonido();
	this.btnStopSonido1.name = "btnStopSonido1";
	this.btnStopSonido1.setTransform(238,516.5);
	new cjs.ButtonHelper(this.btnStopSonido1, 0, 1, 2);

	this.btn_sonido2 = new lib.btn_sonido();
	this.btn_sonido2.name = "btn_sonido2";
	this.btn_sonido2.setTransform(275.8,191.45,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido2, 0, 1, 2);

	this.btnStopSonido2 = new lib.btnStopSonido();
	this.btnStopSonido2.name = "btnStopSonido2";
	this.btnStopSonido2.setTransform(261.05,177.65);
	new cjs.ButtonHelper(this.btnStopSonido2, 0, 1, 2);

	this.btn_sonido3 = new lib.btn_sonido();
	this.btn_sonido3.name = "btn_sonido3";
	this.btn_sonido3.setTransform(259.35,804.5,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido3, 0, 1, 2);

	this.btnStopSonido3 = new lib.btnStopSonido();
	this.btnStopSonido3.name = "btnStopSonido3";
	this.btnStopSonido3.setTransform(244.55,788.7);
	new cjs.ButtonHelper(this.btnStopSonido3, 0, 1, 2);

	this.instance_1 = new lib._2();
	this.instance_1.setTransform(572.75,877.9,1,1,0,0,0,-178.5,-11);

	this.instance_2 = new lib.phishing();
	this.instance_2.setTransform(89,766,0.5,0.5);

	this.instance_3 = new lib.Texto8_1();
	this.instance_3.setTransform(89,1101,0.5,0.5);

	this.instance_4 = new lib.Teprotejo();
	this.instance_4.setTransform(89,159,0.543,0.5);

	this.instance_5 = new lib.Texto5();
	this.instance_5.setTransform(89,503,0.543,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.btnStopSonido3},{t:this.btn_sonido3},{t:this.btnStopSonido2},{t:this.btn_sonido2},{t:this.btnStopSonido1},{t:this.btn_sonido1},{t:this.btnStopSonido4},{t:this.btn_sonido4},{t:this.btnAdenunciar},{t:this.btnCAI},{t:this.btnTeProtejo},{t:this.instance},{t:this.btnStopSonido6},{t:this.btn_sonido6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(619,695.5,434.79999999999995,589.4000000000001);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1060,
	height: 1337,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/iframe_atlas_1.png?1720064985186", id:"iframe_atlas_1"},
		{src:"sounds/audio5a.mp3?1720064985231", id:"audio5a"},
		{src:"sounds/audio1a.mp3?1720064985231", id:"audio1a"},
		{src:"sounds/audio2a.mp3?1720064985231", id:"audio2a"},
		{src:"sounds/audio3a.mp3?1720064985231", id:"audio3a"},
		{src:"sounds/audio4a.mp3?1720064985231", id:"audio4a"}
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