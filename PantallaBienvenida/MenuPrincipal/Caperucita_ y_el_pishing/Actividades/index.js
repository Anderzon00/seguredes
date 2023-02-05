(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[2375,2820,466,90],[2378,1958,315,90],[2378,1866,457,90],[2378,1682,466,90],[2695,1958,315,90],[2837,1866,457,90],[2378,1774,466,90],[2378,2050,315,90],[2846,1682,457,90],[0,2820,2373,154],[0,1682,2376,1136],[0,0,2888,1680],[2378,2142,253,89],[2633,2232,253,89],[2846,1774,611,64],[2695,2050,254,89],[2695,2141,254,89]]}
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



(lib.bannernegro = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.fondopapel = function() {
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



(lib.tituloPhishingcontenido = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.volver2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Volver = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



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
		
		this.stop(); 
		
		
		
		this.btnInicio.addEventListener("click", fl_ClickToGoToWebPage_10);
		function fl_ClickToGoToWebPage_10() {
			window.open("../../../../", "_self");
		}
		
		this.btnVolver.addEventListener("click", fl_ClickToGoToWebPage_11);
		function fl_ClickToGoToWebPage_11() {
			window.open("../", "_self");
		}  
		
		
		
		
		
		
		var key;
		
		var element = document.createElement('div');
		canvas.parentNode.appendChild(element);
		height = 13.5*Math.max(window.innerHeight )/16 ; 
		width = 27.85*(Math.max(window.innerWidth)/32) ;
		topElement= 1.2*Math.max(window.innerHeight )/16 +'px';
		leftElement = 2.325*Math.max(window.innerWidth)/32 +'px';
		
		element.innerHTML = '<iframe  id="video"  style="border:none "   src="./Menu" width="'+ width+ '" height="'+height+'">';	 
		
		function embed (style){				
		        for (key in style)
			    element.style[key] = style[key];		
		}	 
		
		 embed( {position: 'absolute', 	 top: topElement  ,	left: leftElement});
		
		window.addEventListener('resize', () =>{
		height = 13.5*Math.max(window.innerHeight )/16 ; 
		width = 27.85*(Math.max(window.innerWidth)/32) ;
		topElement= 1.2*Math.max(window.innerHeight )/16 +'px';
		leftElement = 2.325*Math.max(window.innerWidth)/32 +'px';
		embed( {position: 'absolute', 	 top:topElement   ,	left: leftElement});  
		document.getElementById('video').style.width = width +'px'; 
		document.getElementById('video').style.height = height +'px'; 
		 }
		)
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnContenidos.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('../Contenidos', '_self');
		});
		
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btnActividades.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('index.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

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
	this.btnAyuda.setTransform(1197.75,32.8,0.5176,0.5092,0,0,0,0.7,0.3);
	new cjs.ButtonHelper(this.btnAyuda, 0, 1, 2);

	this.btnActividades = new lib.btnActividades();
	this.btnActividades.name = "btnActividades";
	this.btnActividades.setTransform(1009.1,34.2,1,1.0086,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.btnActividades, 0, 1, 2);

	this.btnContenidos = new lib.btncontenidos();
	this.btnContenidos.name = "btnContenidos";
	this.btnContenidos.setTransform(780.6,34.3);
	new cjs.ButtonHelper(this.btnContenidos, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnContenidos},{t:this.btnActividades},{t:this.btnAyuda}]}).wait(1));

	// fondo
	this.instance = new lib.tituloPhishingcontenido();
	this.instance.setTransform(227,18,0.5,0.5);

	this.instance_1 = new lib.bannernegro();
	this.instance_1.setTransform(101,622,0.5002,0.4991);

	this.instance_2 = new lib.fondopapel();
	this.instance_2.setTransform(101,55,0.4996,0.5);

	this.instance_3 = new lib.fondo11();
	this.instance_3.setTransform(-38,-37,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(645,347,761,456);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#235594",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1675568797641", id:"index_atlas_1"}
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