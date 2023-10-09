(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
		const b=document.createElement('button');b.id='BotonPantallacompleta';const i=new Image();
		i.src='BtnCerrar.png';i.style.maxWidth='95%';
		b.appendChild(i);document.body.appendChild(b);
		b.style.cssText=`position:absolute;top:0.1%;left:95%;z-index:3;
		background-color:transparent;border:none`;
		b.addEventListener('click',()=>{b.style.transform='scale(0.7)'});
		b.addEventListener('mouseover',()=>{b.style.transform='scale(1.1)'});
		b.addEventListener('mouseout',()=>{b.style.transform='scale(1.0)'});
		window.addEventListener('resize',()=>{b.style.left='95%';c()});
		b.addEventListener('click',()=>{const f=document.getElementById('i_creditos');
		!document.fullscreenElement?f.requestFullscreen().catch(e=>{
		console.error(`Error al habilitar pantalla completa: ${e.message}`)}):
		document.exitFullscreen()});
		const d=document.getElementById('creditos');
		d&&d.remove();const e=document.createElement('div');e.id='creditos';
		e.style.cssText='position:absolute;';document.body.appendChild(e);
		e.innerHTML=`<iframe src="./SITIO/index.html" id="i_creditos"
		style="border:none;" allow="autoplay"></iframe>`;
		function c(){const d=document.getElementById('creditos');
		const f=document.getElementById('i_creditos');d.style.left='0px';
		d.style.top='0px';f.style.width=`${Math.max(window.innerWidth)}px`;
		f.style.height=`${Math.max(window.innerHeight)}px`}c();
		const f=document.getElementById('i_creditos');f.addEventListener('load',()=>{
		f.contentWindow.focus();
		const u=f.contentWindow.location.href;
		u.endsWith('index1.html')?i.src='NewImage.png':i.src='BtnCerrar.png'});
		window.addEventListener('resize',c);
		
		  
		
		const url = "/SITIO/MenuPrincipal";
		const request = new Request(url);
		
		fetch(request).then((response) => {
		  // La página web se ha precargado
		});
		
		// Precarga los recursos CSS y JavaScript que se necesitan para la página web
		const resources = [
		  {
		    url: "/SITIO/MenuPrincipal/index.html",
		    type: "document",
		  },
		  {
		    url: "/SITIO/MenuPrincipal/index.js",
		    type: "script",
		  },
		];
		
		resources.forEach((resource) => {
		  const request = new Request(resource.url);
		
		  fetch(request).then((response) => {
		    // El recurso se ha precargado
		  });
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#006699",
	opacity: 1.00,
	manifest: [],
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