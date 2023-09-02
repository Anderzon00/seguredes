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
		const newElement = document.createElement('button');
		newElement.setAttribute('id', 'miBoton');
		 
		const image = new Image();
		            image.src = 'BtnCerrar.png';  
		            image.style.maxWidth = '95%';   
		         
		
		newElement.appendChild(image);
		document.body.appendChild(newElement);
		
		
		const boton = document.getElementById('miBoton');
		
		function embed1() {	
		 boton.style.position = 'absolute';
		boton.style.top = '0.1%'; // Ajusta la posición vertical según tus necesidades
		boton.style.left = '95%'; // Ajusta la posición horizontal según tus necesidades
		boton.style.zIndex = '3'	
		boton.style.backgroundColor = 'transparent'
		boton.style.border = 'none'
		 
		// Agregar un manejador de evento para el evento "click"
		  boton.addEventListener("click", function() {
		    // Cambiar el tamaño del botón cuando se hace clic
		    boton.style.transform = "scale(0.7)"; // Puedes ajustar el valor (0.7) según tus necesidades
		  });
		
		  // Agregar manejadores de eventos para hover
		  boton.addEventListener("mouseover", function() {
		    boton.style.transform = "scale(1.1)"; // Ajusta el tamaño cuando el cursor está sobre el botón
		  });
		
		  boton.addEventListener("mouseout", function() {
		    boton.style.transform = "scale(1.0)"; // Vuelve al tamaño original cuando el cursor se va
		  });
			
			
			
		  
			
		}
		
		embed1();
		
		window.addEventListener('resize', () => {	
		embed1();
		}) 
				
		
		
		
		
		
		
		
		
		var _this= this;
		
		 
		boton.addEventListener('click', function() {
		    if (!document.fullscreenElement) {
		                iframe.requestFullscreen().catch(err => {
		                    console.error(`Error attempting to enable fullscreen: ${err.message}`);
		                });
		            } else {
		                document.exitFullscreen();
		            }
		});
		
		
		
		const elementdiv1 = document.getElementById('creditos');
		elementdiv1?.remove();
				 
		var element = document.createElement('div');
		element.setAttribute('id', 'creditos');
		document.body.appendChild(element);
		element.style.position = "absolute"; 
		
		
		
		
		 
		element.innerHTML = '<iframe  src= "./SITIO/index.html" id="i_creditos"   style="border:none" allow="autoplay"  >';
		
		function embed() {	
		document.getElementById('creditos').style.left =  0 +'px';
		document.getElementById('creditos').style.top =   0 + 'px';
		document.getElementById('i_creditos').style.width =  Math.max(window.innerWidth)+'px';
		document.getElementById('i_creditos').style.height = Math.max(window.innerHeight)+ 'px';
		}
		
		embed();
		
		window.addEventListener('resize', () => {	
		embed();
		}) 
				 
				 
		
		const iframe = document.getElementById('i_creditos');
		
		        // Add an event listener to the iframe's load event
		        iframe.addEventListener('load', function() {
		            // Focus on the iframe when it has loaded
		            iframe.contentWindow.focus();
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