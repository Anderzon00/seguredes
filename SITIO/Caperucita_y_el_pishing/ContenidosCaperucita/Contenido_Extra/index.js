(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1412,0,288,85],[1412,87,286,85],[0,0,604,397],[606,0,434,339],[1042,0,368,243],[1042,245,440,137],[606,341,382,25],[1288,384,102,102],[0,399,1286,152]]}
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



(lib.btnIndiceContenidosHover = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btnIndiceContenidos_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.formainferiorder = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.formainferiorizq = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.formasuperiorder = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.formasuperiorizq = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.posicion = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.SiguienteAtras = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.titulo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
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
	this.instance.setTransform(-597,114,0.5,0.5);

	this.instance_1 = new lib.formainferiorder();
	this.instance_1.setTransform(288,85,0.5,0.5);

	this.instance_2 = new lib.formasuperiorder();
	this.instance_2.setTransform(406,-284,0.5,0.5);

	this.instance_3 = new lib.formasuperiorizq();
	this.instance_3.setTransform(-597,-284,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-597,-284,1187,567.5), null);


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
	this.instance.setTransform(-31,-25,0.5,0.5);

	this.instance_1 = new lib.btnIndiceContenidosHover();
	this.instance_1.setTransform(-29,-25,0.5198,0.5201);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("Ap4DuIAAnbITxAAIAAHbg");
	this.shape.setTransform(-29.95,0.8,1.166,1,0,0,0,-63.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-25,151.7,49.6);


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
	this.shape.graphics.f().s("#FDCE3C").ss(7,1,1).p("AhDgFIBzifABEClIh6ia");
	this.shape.setTransform(58.975,0,1,1,0,0,180);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:false},0).wait(13));

	// Capa_1
	this.instance = new lib.SiguienteAtras();
	this.instance.setTransform(-51,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-51,120.3,102);


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
	this.instance_1.setTransform(77,77,1,1,0,0,0,26,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AJEmaIyHAAIAAM1ISHAAg");
	this.shape.setTransform(48,51.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("ApDGaIAAs0ISHAAIAAM0g");
	this.shape_1.setTransform(48,51.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:0,y:0}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.9038,scaleY:0.9038,x:5,y:4}}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,118,102);


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
		var root = this;
		var key;
		
		var element = document.createElement('div');
		canvas.parentNode.appendChild(element);
		height = 9 * Math.max(window.innerHeight) / 16;
		width = 27.85 * (Math.max(window.innerWidth) / 32);
		topElement = 3.3 * Math.max(window.innerHeight) / 16 + 'px';
		leftElement = 2 * Math.max(window.innerWidth) / 32 + 'px';
		
		element.innerHTML = '<iframe  id="video"  style="border:none "   src="iframe2.html" width="' + width + '" height="' + height + '">';
		
		
		 
		
		
		
		function embed(style) {
			for (key in style)
				element.style[key] = style[key];
		}
		
		embed({
			position: 'absolute',
			top: topElement,
			left: leftElement
		});
		
		window.addEventListener('resize', () => {
			topElement = 4 * Math.max(window.innerHeight) / 16 + 'px';
			leftElement = 3.3 * Math.max(window.innerWidth) / 32 + 'px';
			height = 9* Math.max(window.innerHeight) / 16;
			width = 27.85 * (Math.max(window.innerWidth) / 32);
			embed({
				position: 'absolute',
				top: topElement,
				left: leftElement
			});
			document.getElementById('video').style.width = width + 'px';
			document.getElementById('video').style.height = height + 'px';
		
		})
		
		
		const iframe = document.getElementById('video');
		
		        // Add an event listener to the iframe's load event
		        iframe.addEventListener('load', function() {
		            // Focus on the iframe when it has loaded
		            iframe.contentWindow.focus();
		        });
		if(document.location.href.indexOf('#')>-1){
		this.gotoAndStop(document.location.href.split('#')[1]);
		}
		
		stage.on('drawstart', initStage, this, true);
		function initStage() {
		    stretchToFit();
		}
		
		var iframeJ = window.parent.document.getElementById('mi_iframe');
		iframeJ.src = './Ayuda/Contenidos/Como_evitarlo/index.html';
		
		
		
		this.btnAtras.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		 function fl_ClickToGoToWebPage_19() {
			 createjs.Sound.play("audioG", { volume: 0.8}).on("complete", function () {
		                    
			
			window.open("../Si_me_ocurre/index.html#final", "_self");
				 
		                    }, this);
		
			 
			 
		}	 
		
		this.btnIndice.addEventListener("click", fl_ClickToGoToWebPage_20);
		function fl_ClickToGoToWebPage_20() {
			
			createjs.Sound.play("audioC", { volume: 0.8}).on("complete", function () {
		                    
			
			window.open("../", "_self");
				 
		                    }, this);
		
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// titulo
	this.instance = new lib.posicion();
	this.instance.setTransform(490,547,0.5,0.5);

	this.instance_1 = new lib.titulo();
	this.instance_1.setTransform(272,25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// flechas
	this.btnAtras = new lib.btnSiguiente();
	this.btnAtras.name = "btnAtras";
	this.btnAtras.setTransform(422.5,605.5,0.5,0.5,0,0,180,51,51);
	new cjs.ButtonHelper(this.btnAtras, 0, 1, 2, false, new lib.btnSiguiente(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnAtras).wait(1));

	// btn menu
	this.btnIndice = new lib.btnIndece();
	this.btnIndice.name = "btnIndice";
	this.btnIndice.setTransform(41,606.5);
	new cjs.ButtonHelper(this.btnIndice, 0, 1, 2, false, new lib.btnIndece(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnIndice).wait(1));

	// Capa_2
	this.movieClip_9 = new lib.Símbolo1();
	this.movieClip_9.name = "movieClip_9";
	this.movieClip_9.setTransform(597.5,284.9);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(594,325.4,593.5,305.6);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1187,
	height: 649,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/index_atlas_1.png?1715476463908", id:"index_atlas_1"},
		{src:"sounds/audioG.mp3?1715476463941", id:"audioG"},
		{src:"sounds/audioC.mp3?1715476463941", id:"audioC"}
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