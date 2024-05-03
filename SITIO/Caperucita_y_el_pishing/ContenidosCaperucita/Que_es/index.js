(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1690,289,206,226],[1690,691,288,85],[1690,778,286,85],[1690,517,223,172],[0,0,1688,1004],[0,1006,604,397],[606,1006,434,339],[1042,1006,368,243],[1412,1006,440,137],[1412,1145,382,25],[1898,289,102,102],[1690,0,273,287]]}
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



(lib.accion = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btnIndiceContenidosHover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btnIndiceContenidos_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.corneta = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Fondodevideo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.formainferiorder = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.formainferiorizq = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.formasuperiorder = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.formasuperiorizq = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.posición = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.SiguienteAtras = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.video = function() {
	this.initialize(ss["index_atlas_1"]);
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
	this.instance = new lib.formainferiorizq();
	this.instance.setTransform(-598,114,0.5,0.5);

	this.instance_1 = new lib.formainferiorder();
	this.instance_1.setTransform(288,85,0.5,0.5);

	this.instance_2 = new lib.formasuperiorder();
	this.instance_2.setTransform(406,-284,0.5,0.5);

	this.instance_3 = new lib.formasuperiorizq();
	this.instance_3.setTransform(-599,-284,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-599,-284,1189,567.5), null);


(lib.btnIndece = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnIndiceContenidos_1();
	this.instance.setTransform(-34,-25,0.5,0.5);

	this.instance_1 = new lib.btnIndiceContenidosHover();
	this.instance_1.setTransform(-35,-25,0.5198,0.5201);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,197,255,0)").ss(1,1,1).p("AkzkzIJnAAIAABaAE0ECIAAAyIgyAA");
	this.shape.setTransform(5.8,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC99").s().p("AgWDuIqZAAIAAnbIKZAAILFAAIAAHbg");
	this.shape_1.setTransform(38.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-32.9,149.7,63.5);


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

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FDCE3C").ss(7,1,1).p("Ag2CdIB0ifIh7ia");
	this.shape.setTransform(108.175,51.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:false},0).wait(13));

	// Capa_1
	this.instance = new lib.SiguienteAtras();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.9,102);


(lib.btnSiguiente = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.SiguienteAtras();

	this.instance_1 = new lib.sobre_siguiente();
	this.instance_1.setTransform(26,26,1,1,0,0,0,26,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AINoMIwZAAIAAQZIQZAAg");
	this.shape.setTransform(53.5,52.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AoMINIAAwZIQZAAIAAQZg");
	this.shape_1.setTransform(53.5,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:0,y:0}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.9038,scaleY:0.9038,x:5,y:4}}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,107,107);


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
		stage.on('drawstart', initStage, this, true);
		function initStage() {
		    stretchToFit();
		}
		
		var root= this;
		var key;
		
		var element = document.createElement('div');
		canvas.parentNode.appendChild(element);
		height = 4*Math.max(window.innerHeight )/16 ; 
		width = 19*(Math.max(window.innerWidth)/32) ;
		topElement= Math.max(window.innerHeight )/16 +'px';
		leftElement = 6.05*Math.max(window.innerWidth)/32 +'px';
		
		poster='poster.jpg' 
		file='video.mp4'
		
		element.innerHTML = "'<video id='video'  width='" +width+  " height='"+height +"' controls poster='" + poster + "'><source src='" + file + "' type='video/mp4'>Your browser does not support the video tag.</video>"
		  
		  function embed (style){				
		        for (key in style)
			    element.style[key] = style[key];		
		}	 
		
		 embed( {position: 'absolute', 	 top: topElement  ,	left: leftElement});
		
		window.addEventListener('resize', () =>{
		topElement=Math.max(window.innerHeight )/16 +'px';
		leftElement = 6.05*Math.max(window.innerWidth)/32 +'px';
		embed( {position: 'absolute', 	 top:topElement   ,	left: leftElement});  
		document.getElementById('video').style.width = '72%'; 
		
		 }
		)
		 
		var _this = this;
		 
		_this.atrasA.on('click', function(){ 
			
			createjs.Sound.play("audioG", { volume: 0.8}).on("complete", function () {
		                    
			
		window.open('../', '_self');
				 
		                    }, this);
		
			
			
		});
		  
		_this.siguienteA.on('click', function(){ 
			
			createjs.Sound.play("audioG", { volume: 0.8}).on("complete", function () {
		                    
			
		window.open('../Como_ocurre', '_self');
				 
		                    }, this);
		
			
			
			
		});
		
		_this.btnindice.on('click', function(){
			createjs.Sound.play("audioG", { volume: 0.8}).on("complete", function () {
		                    
			
		window.open('../', '_self');
				 
		                    }, this);
		
			
			
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// nav
	this.movieClip_9 = new lib.Símbolo1();
	this.movieClip_9.name = "movieClip_9";
	this.movieClip_9.setTransform(597.3,284.05);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_9).wait(1));

	// navegacion
	this.btnindice = new lib.btnIndece();
	this.btnindice.name = "btnindice";
	this.btnindice.setTransform(45.85,608.85);
	new cjs.ButtonHelper(this.btnindice, 0, 1, 2, false, new lib.btnIndece(), 3);

	this.atrasA = new lib.btnSiguiente();
	this.atrasA.name = "atrasA";
	this.atrasA.setTransform(426.1,609.35,0.5,0.5,0,0,180,51,51);
	new cjs.ButtonHelper(this.atrasA, 0, 1, 2, false, new lib.btnSiguiente(), 3);

	this.siguienteA = new lib.btnSiguiente();
	this.siguienteA.name = "siguienteA";
	this.siguienteA.setTransform(734.9,595.85,0.5,0.5,0,0,0,26,26);
	new cjs.ButtonHelper(this.siguienteA, 0, 1, 2, false, new lib.btnSiguiente(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.siguienteA},{t:this.atrasA},{t:this.btnindice}]}).wait(1));

	// fondo
	this.instance = new lib.Fondodevideo();
	this.instance.setTransform(183,-1,0.4691,0.5583);

	this.instance_1 = new lib.video();
	this.instance_1.setTransform(21,202,0.5,0.5);

	this.instance_2 = new lib.video();
	this.instance_2.setTransform(1162.5,202,0.5,0.5,0,0,180);

	this.instance_3 = new lib.corneta();
	this.instance_3.setTransform(1108,501.85,0.5,0.5,0,45,-135);

	this.instance_4 = new lib.accion();
	this.instance_4.setTransform(1108,58,0.5,0.5,0,0,180);

	this.instance_5 = new lib.corneta();
	this.instance_5.setTransform(71,58,0.5,0.5);

	this.instance_6 = new lib.accion();
	this.instance_6.setTransform(80,406,0.5,0.5);

	this.instance_7 = new lib.posición();
	this.instance_7.setTransform(490,547,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(496.5,276.5,772.5,443.5);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1187,
	height: 649,
	fps: 25,
	color: "#0066CC",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_1.png?1713882329519", id:"index_atlas_1"},
		{src:"sounds/audioG.mp3?1713882329547", id:"audioG"},
		{src:"sounds/audioC.mp3?1713882329547", id:"audioC"}
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