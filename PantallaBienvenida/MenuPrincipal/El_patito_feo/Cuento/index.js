(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[2053,1682,466,90],[2053,2234,315,90],[2053,1958,457,90],[2053,1774,466,90],[2370,2234,315,90],[2053,2050,457,90],[2053,1866,466,90],[2521,1682,315,90],[2053,2142,457,90],[0,3735,2372,153],[0,1682,2051,2051],[0,0,2888,1680],[2521,1956,253,89],[2512,2047,253,89],[2521,1774,254,89],[2521,1865,254,89]]}
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
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Basic_Elements_273Convertido01 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.fondo11 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.inicio2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Inicio = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.volver2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Volver = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.fullscreen = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Basic_Elements_273Convertido01();
	this.instance.setTransform(22,5,0.0168,0.0168);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijCkIAAlHIFHAAIAAFHg");
	this.shape.setTransform(36.6,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.0168,scaleY:0.0168,x:22,y:5}}]}).to({state:[{t:this.instance,p:{scaleX:0.0179,scaleY:0.0179,x:21,y:4}}]},1).to({state:[{t:this.instance,p:{scaleX:0.0146,scaleY:0.0146,x:24,y:7}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.2,4,37.5,36.7);


(lib.btncontenidos = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._1ContenidosNORMAL();
	this.instance.setTransform(-116,-23,0.5,0.5);

	this.instance_1 = new lib._2contenidosSOBRE();
	this.instance_1.setTransform(-116,-23,0.5,0.5);

	this.instance_2 = new lib._3contenidosDOWN();
	this.instance_2.setTransform(-116,-23,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-23,228.5,45);


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

	// Capa_1
	this.instance = new lib._1AyudaNORMAL();
	this.instance.setTransform(-140,-43);

	this.instance_1 = new lib._2ayudaSOBRE();
	this.instance_1.setTransform(-140,-43);

	this.instance_2 = new lib._3ayudaDOWN();
	this.instance_2.setTransform(-140,-43,1.0001,0.9998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-43,315,90);


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

	// Capa_1
	this.instance = new lib._1ActividadesNORMAL();
	this.instance.setTransform(-116,-23,0.5,0.5);

	this.instance_1 = new lib._2actividadesSOBRE();
	this.instance_1.setTransform(-116,-23,0.5,0.5);

	this.instance_2 = new lib._3actividadesDOWN();
	this.instance_2.setTransform(-116,-23,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-23,233,45);


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
	this.instance = new lib.Volver();

	this.instance_1 = new lib.volver2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.9843,scaleY:0.9843}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254,89);


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
	this.instance = new lib.Inicio();

	this.instance_1 = new lib.inicio2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.9881,scaleY:0.9882}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,253,89);


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
		
		
		var _this = this;
		
		_this.btnInicio.on('click', function () {
		
			createjs.Sound.play("sound2", {
				volume: 0.5
			}).on("complete", function () {
		
				window.open("../../../../", "_self");
		
			}, this);
		});
		
		
		_this.btnVolver.on('click', function () {
		
			createjs.Sound.play("sound2", {
				volume: 0.5
			}).on("complete", function () {
		
				window.open("../", "_self");
		
			}, this);
		});
		
		
		_this.btnContenidos.on('click', function () {
		
			createjs.Sound.play("sound1", {
				volume: 0.5
			}).on("complete", function () {
		
				window.open('../Contenidos', '_self');
		
			}, this);
		});
		
		
		_this.btnActividades.on('click', function () {
		
			createjs.Sound.play("sound1", {
				volume: 0.5
			}).on("complete", function () {
				window.open('../Actividades', '_self');
		
			}, this);
		
		
		});
		
		
		
		
		this.btnAyuda.on('click', function () {
		
			createjs.Sound.play("sound1", {
				volume: 0.5
			}).on("complete", function () {
				alert("ayuda");
		
			}, this);
		
		});
		this.stop();
		var root = this;
		var key;
		var element = document.createElement('div');
		canvas.parentNode.appendChild(element);
		height = 13.5 * Math.max(window.innerHeight) / 16;
		width = 27.93 * (Math.max(window.innerWidth) / 32);
		topElement = 1.1 * Math.max(window.innerHeight) / 16 + 'px';
		leftElement = 2.22 * Math.max(window.innerWidth) / 32 + 'px';
		
		
		
		element.innerHTML = '<iframe  id="video"  style="border:none "   src="./Escena_1" width="' + width + '" height="' + height + '">';
		var x = document.getElementById("video");
		x.muted = true;
		
		
		//var btn = document.createElement("button");
		// document.body.appendChild(btn);
		// btn.style.position = "absolute";
		
		
		// btn.style.left = 29 + "px";
		// btn.style.top = 29 + "px";
		// btn.innerHTML = '<button  >Click me</button>';   
		// btn.onclick = function() {alert("hola"); };  
		
		
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
			topElement = 1.1 * Math.max(window.innerHeight) / 16 + 'px';
			leftElement = 2.22 * Math.max(window.innerWidth) / 32 + 'px';
			height = 13.5 * Math.max(window.innerHeight) / 16;
			width = 27.93 * (Math.max(window.innerWidth) / 32);
			embed({
				position: 'absolute',
				top: topElement,
				left: leftElement
			});
			document.getElementById('video').style.width = width + 'px';
			document.getElementById('video').style.height = height + 'px';
		
		})
		
		
		var elem = document.getElementById("video");
		
		
		
		_this.fullscreen.on('click', function () {
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) { /* Safari */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) { /* IE11 */
				elem.msRequestFullscreen();
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.fullscreen = new lib.fullscreen();
	this.fullscreen.name = "fullscreen";
	this.fullscreen.setTransform(118.3,33,1,1,0,0,0,23.3,23.4);
	new cjs.ButtonHelper(this.fullscreen, 0, 1, 2, false, new lib.fullscreen(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fullscreen).wait(1));

	// btns_nav
	this.btnVolver = new lib.btnVolver();
	this.btnVolver.name = "btnVolver";
	this.btnVolver.setTransform(755.55,737.25,0.5,0.5,0,0,0,127,44.5);
	new cjs.ButtonHelper(this.btnVolver, 0, 1, 2);

	this.btnInicio = new lib.btnInicio();
	this.btnInicio.name = "btnInicio";
	this.btnInicio.setTransform(612,737.25,0.5,0.5,0,0,0,126.5,44.5);
	new cjs.ButtonHelper(this.btnInicio, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnInicio},{t:this.btnVolver}]}).wait(1));

	// btns_menu
	this.btnAyuda = new lib.btnAyuda();
	this.btnAyuda.name = "btnAyuda";
	this.btnAyuda.setTransform(1196.65,33.1,0.5176,0.5092,0,0,0,0.7,0.3);
	new cjs.ButtonHelper(this.btnAyuda, 0, 1, 2);

	this.btnActividades = new lib.btnActividades();
	this.btnActividades.name = "btnActividades";
	this.btnActividades.setTransform(1009.1,34.5,1,1.0086,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.btnActividades, 0, 1, 2);

	this.btnContenidos = new lib.btncontenidos();
	this.btnContenidos.name = "btnContenidos";
	this.btnContenidos.setTransform(780.6,34.3);
	new cjs.ButtonHelper(this.btnContenidos, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnContenidos},{t:this.btnActividades},{t:this.btnAyuda}]}).wait(1));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehc8AsYMAAAhYvMC54AAAMAAABYvg");
	this.shape.setTransform(690.9086,337,1.0019,1);

	this.instance = new lib.bannernegro1();
	this.instance.setTransform(95,621,0.5025,0.5);

	this.instance_1 = new lib.fondo11();
	this.instance_1.setTransform(-43,-37,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,347,761,456);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1676302615094", id:"index_atlas_1"},
		{src:"sounds/sound2.mp3?1676302615129", id:"sound2"},
		{src:"sounds/sound1.mp3?1676302615129", id:"sound1"}
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