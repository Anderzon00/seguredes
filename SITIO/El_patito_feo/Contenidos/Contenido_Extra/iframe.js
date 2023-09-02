(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"iframe_atlas_1", frames: [[0,0,1373,455],[1761,120,63,63],[1826,120,60,60],[1484,1136,499,215],[1375,0,384,384],[1484,762,372,372],[1761,0,271,38],[1761,40,271,38],[1761,80,271,38],[0,1169,1389,291],[0,1462,1402,287],[0,841,1482,326],[0,457,1482,382],[1484,386,374,374]]}
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



(lib.escuelainfluences = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logocyber = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logoicbf = function() {
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



(lib.textescuelainlfluen = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.textunicef = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.textocyber = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.textomismanos = function() {
	this.initialize(ss["iframe_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.unicef = function() {
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
		_this.btnCyber.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://play.google.com/store/apps/details?id=cyber.escudo.com&hl=es-419', '_blank');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnMismanos.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://www.icbf.gov.co/mis-manos-te-ensenan/como-evitar-el-ciberbullying#:~:text=En%20Mis%20Manos%20Te%20Ense%C3%B1an%20hemos%20recopilado%20algunos%20consejos%20y,en%20la%20prevenci%C3%B3n%20del%20ciberbullying%3F', '_blank');
		});
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnunicef.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://www.unicef.org/es/end-violence/ciberacoso-que-es-y-como-detenerlo', '_blank');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnEscuela.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('https://ciberconscientes.com/ciberbullying-2/', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.btnEscuela = new lib.btnMasInformacion();
	this.btnEscuela.name = "btnEscuela";
	this.btnEscuela.setTransform(567.1,988.45);
	new cjs.ButtonHelper(this.btnEscuela, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance = new lib.unicef();
	this.instance.setTransform(794,534,0.5134,0.5134);

	this.instance_1 = new lib.textunicef();
	this.instance_1.setTransform(20,522,0.5,0.5);

	this.instance_2 = new lib.textescuelainlfluen();
	this.instance_2.setTransform(20,816,0.5,0.5);

	this.instance_3 = new lib.bordes();
	this.instance_3.setTransform(-5,791,0.543,0.5);

	this.instance_4 = new lib.escuelainfluences();
	this.instance_4.setTransform(767,911,0.5,0.5);

	this.instance_5 = new lib.logoicbf();
	this.instance_5.setTransform(794,273,0.5161,0.5161);

	this.btnunicef = new lib.btnMasInformacion();
	this.btnunicef.name = "btnunicef";
	this.btnunicef.setTransform(567.1,695.9);
	new cjs.ButtonHelper(this.btnunicef, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_6 = new lib.bordes();
	this.instance_6.setTransform(0,498,0.543,0.5);

	this.btnMismanos = new lib.btnMasInformacion();
	this.btnMismanos.name = "btnMismanos";
	this.btnMismanos.setTransform(567.1,427.35);
	new cjs.ButtonHelper(this.btnMismanos, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_7 = new lib.bordes();
	this.instance_7.setTransform(-5,226,0.543,0.5);

	this.instance_8 = new lib.textomismanos();
	this.instance_8.setTransform(0,249,0.5,0.5);

	this.instance_9 = new lib.logocyber();
	this.instance_9.setTransform(794,34,0.5,0.5);

	this.btnCyber = new lib.btnMasInformacion();
	this.btnCyber.name = "btnCyber";
	this.btnCyber.setTransform(567.1,182.8);
	new cjs.ButtonHelper(this.btnCyber, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_10 = new lib.bordes();
	this.instance_10.setTransform(0,-13,0.543,0.5);

	this.instance_11 = new lib.textocyber();
	this.instance_11.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.btnCyber},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.btnMismanos},{t:this.instance_6},{t:this.btnunicef},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.btnEscuela}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-5,-13,1021.5,1031.5), null);


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

	// anim
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(0.1,165.8,1,1,0,0,0,528,392.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-532.9,-240,1021.5,1031.5), null);


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
		createjs.Sound.stop();
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn_sonido1.on('click', function(){
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

	// imagen_1
	this.btn_sonido1 = new lib.btn_sonido();
	this.btn_sonido1.name = "btn_sonido1";
	this.btn_sonido1.setTransform(645.1,166.55,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido1, 0, 1, 2);

	this.btnStopSonido1 = new lib.btnStopSonido();
	this.btnStopSonido1.name = "btnStopSonido1";
	this.btnStopSonido1.setTransform(629.35,151.65);
	new cjs.ButtonHelper(this.btnStopSonido1, 0, 1, 2);

	this.btn_sonido4 = new lib.btn_sonido();
	this.btn_sonido4.name = "btn_sonido4";
	this.btn_sonido4.setTransform(585.55,972.35,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido4, 0, 1, 2);

	this.btnStopSonido4 = new lib.btnStopSonido();
	this.btnStopSonido4.name = "btnStopSonido4";
	this.btnStopSonido4.setTransform(568.8,957.45);
	new cjs.ButtonHelper(this.btnStopSonido4, 0, 1, 2);

	this.btn_sonido3 = new lib.btn_sonido();
	this.btn_sonido3.name = "btn_sonido3";
	this.btn_sonido3.setTransform(552.55,677.35,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido3, 0, 1, 2);

	this.btnStopSonido3 = new lib.btnStopSonido();
	this.btnStopSonido3.name = "btnStopSonido3";
	this.btnStopSonido3.setTransform(536.8,662.55);
	new cjs.ButtonHelper(this.btnStopSonido3, 0, 1, 2);

	this.btn_sonido2 = new lib.btn_sonido();
	this.btn_sonido2.name = "btn_sonido2";
	this.btn_sonido2.setTransform(675.6,411.35,1,1,0,0,0,15.8,15.8);
	new cjs.ButtonHelper(this.btn_sonido2, 0, 1, 2);

	this.btnStopSonido2 = new lib.btnStopSonido();
	this.btnStopSonido2.name = "btnStopSonido2";
	this.btnStopSonido2.setTransform(659.3,396.55);
	new cjs.ButtonHelper(this.btnStopSonido2, 0, 1, 2);

	this.instance = new lib.Símbolo1();
	this.instance.setTransform(525.05,452.7,1,1,0,0,0,-13.6,196.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btnStopSonido2},{t:this.btn_sonido2},{t:this.btnStopSonido3},{t:this.btn_sonido3},{t:this.btnStopSonido4},{t:this.btn_sonido4},{t:this.btnStopSonido1},{t:this.btn_sonido1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(521.8,545.5,505.5,502.5);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1032,
	height: 1058,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/iframe_atlas_1.png?1692652792068", id:"iframe_atlas_1"},
		{src:"sounds/audio2.mp3?1692652792112", id:"audio2"},
		{src:"sounds/audio4.mp3?1692652792112", id:"audio4"},
		{src:"sounds/audio1.mp3?1692652792112", id:"audio1"},
		{src:"sounds/audio3.mp3?1692652792112", id:"audio3"}
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