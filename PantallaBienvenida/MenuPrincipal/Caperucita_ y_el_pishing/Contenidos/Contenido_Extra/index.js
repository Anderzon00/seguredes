(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1373,455],[1437,1447,100,100],[1402,1587,374,374],[1437,1230,499,215],[1288,1984,271,38],[1561,1963,271,38],[1561,2003,271,38],[1404,374,499,215],[0,1230,1435,355],[1437,1549,382,25],[1375,0,372,372],[0,457,1402,397],[0,1587,1400,291],[1288,1880,102,102],[0,856,1442,372],[0,1880,1286,152]]}
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
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Iconodecontenidos = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.imggoogle = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.imgsecurekids = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.masinformacionDOWN = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.masinformacionUP = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.masinformacion = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.metacomplianceimg = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Metacompliancetext = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.posicion = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.safetyimg = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.safetytext = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.securekidstext = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.SiguienteAtras = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.textphishingquizgoogle = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.titulo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
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


(lib.scroll_dummy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AAAkrQAVAAAOAOQAPAPAAAVIAAHzQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVIAAnzQAAgVAOgPQAPgOAUAAg");
	this.shape.setTransform(5,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgjEdQgOgPAAgUIAAnzQAAgUAOgPQAQgPATAAQAVAAAOAPQAPAPAAAUIAAHzQAAAUgPAPQgOAPgVAAQgTAAgQgPg");
	this.shape_1.setTransform(5,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scroll_dummy, new cjs.Rectangle(-1,-1,12,62), null);


(lib.Hit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Egx/AgVMAAAhApMBj/AAAMAAABApg");
	this.shape.setTransform(0,-23.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-230,640,413.8);


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
	this.instance = new lib.Iconodecontenidos();
	this.instance.setTransform(-25,-25,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AkzDuIAAnbIJnAAIAAHbg");
	this.shape.setTransform(0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.5,scaleY:0.5}}]}).to({state:[{t:this.instance,p:{scaleX:0.5198,scaleY:0.5201}}]},1).to({state:[{t:this.instance,p:{scaleX:0.5,scaleY:0.5}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-25,61.5,52);


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
	this.safety = new lib.btnMasInformacion();
	this.safety.name = "safety";
	this.safety.setTransform(567.1,988.45);
	new cjs.ButtonHelper(this.safety, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance = new lib.metacomplianceimg();
	this.instance.setTransform(815,615,0.4332,0.5134);

	this.instance_1 = new lib.Metacompliancetext();
	this.instance_1.setTransform(20,522,0.5,0.5);

	this.instance_2 = new lib.safetytext();
	this.instance_2.setTransform(20,816,0.5,0.5);

	this.instance_3 = new lib.bordes();
	this.instance_3.setTransform(-5,791,0.543,0.5);

	this.instance_4 = new lib.safetyimg();
	this.instance_4.setTransform(830,833,0.5,0.5);

	this.instance_5 = new lib.imgsecurekids();
	this.instance_5.setTransform(812,303,0.4439,0.5161);

	this.metacompliance = new lib.btnMasInformacion();
	this.metacompliance.name = "metacompliance";
	this.metacompliance.setTransform(567.1,695.9);
	new cjs.ButtonHelper(this.metacompliance, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_6 = new lib.bordes();
	this.instance_6.setTransform(0,498,0.543,0.5);

	this.securekids = new lib.btnMasInformacion();
	this.securekids.name = "securekids";
	this.securekids.setTransform(567.1,427.35);
	new cjs.ButtonHelper(this.securekids, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_7 = new lib.securekidstext();
	this.instance_7.setTransform(16,268,0.543,0.5);

	this.instance_8 = new lib.imggoogle();
	this.instance_8.setTransform(829,19,0.5,0.5);

	this.phishingquiz = new lib.btnMasInformacion();
	this.phishingquiz.name = "phishingquiz";
	this.phishingquiz.setTransform(567.1,182.8);
	new cjs.ButtonHelper(this.phishingquiz, 0, 1, 2, false, new lib.btnMasInformacion(), 3);

	this.instance_9 = new lib.textphishingquizgoogle();
	this.instance_9.setTransform(11,30,0.543,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.phishingquiz},{t:this.instance_8},{t:this.instance_7},{t:this.securekids},{t:this.instance_6},{t:this.metacompliance},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.safety}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-5,19,1038.6,1000), null);


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

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		root.targetTimeline = this;
		root.targetTimeline.loop = true;
		root.targetTimeline.force = 1;
		root.targetTimeline.friction = 0.8;
		root.targetTimeline.direction = -1; // scroll direction
		root.targetTimeline.minFrame = 0; // set the start range value here
		root.targetTimeline.maxFrame = root.targetTimeline.totalFrames - 1; // set the end range value here
		root.targetTimeline.speed = 0;
		root.targetTimeline.pressed = false;
		
		root.start = function ()
		{
			createjs.Touch.enable(stage);
			root.hit.cursor = "default";
			root.gotoAndStop(root.targetTimeline.minFrame);
			canvas.addEventListener('mousewheel', root.onMouseWheel.bind(root));
			canvas.addEventListener('DOMMouseScroll', root.onMouseWheel.bind(root));
			stage.on("stagemousedown", root.onStageMouseDown.bind(root));
			createjs.Ticker.on("tick", root.tickHandler);
		};
		
		root.onMouseWheel = function (e)
		{
			e.preventDefault();
		
			var evt = window.event || e;
			var delta = Math.max(-1, Math.min(1, evt.wheelDelta || -evt.detail));
		
			root.targetTimeline.speed += delta * root.force * root.direction;
		};
		
		root.onStageMouseDown = function (e)
		{
			root.targetTimeline.pressedX = e.stageX / stage.scaleX;
			root.targetTimeline.pressed = true;
			root.targetTimeline.stageMouseUp = stage.on("stagemouseup", root.onStageMouseUp.bind(root));
		};
		
		root.tickHandler = function (e)
		{
			var clamp = root.targetTimeline.loop ? "loopClamp" : "clamp";
			var mouseX = stage.mouseX / stage.scaleX;
			
			if (root.targetTimeline.pressed && mouseX !== root.targetTimeline.pressedX)
			{
				root.targetTimeline.speed = (mouseX > root.targetTimeline.pressedX ? 1 : -1) * root.direction * root.force;
				root.targetTimeline.pressedX = mouseX;
			}
			
			root.targetTimeline.speed *= root.targetTimeline.friction;
			root.targetTimeline.gotoAndStop(root[clamp](root.targetTimeline.currentFrame + root.targetTimeline.speed, root.targetTimeline.minFrame, root.targetTimeline.maxFrame));
		};
		
		root.onStageMouseUp = function (e)
		{
			root.targetTimeline.pressed = false;
			stage.off("stagemouseup", root.targetTimeline.stageMouseUp);
		};
		
		root.loopClamp = function(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
				
			return value;
		};
		
		root.clamp = function(value, min, max)
		{
			if (value < min)
				return max;
			
			if (value > max)
				return min;
				
			return value;
		};
		
		if (!root.hasStarted)
		{
			root.start();
			root.hasStarted = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(61));

	// mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhXgAcyMAAAg5jMCvBAAAMAAAA5jg");
	mask.setTransform(-0.525,-61.925);

	// scroll_dummy
	this.instance = new lib.scroll_dummy();
	this.instance.setTransform(537,-197,1,1,0,0,0,5,30);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-41.25},60).wait(1));

	// anim
	this.instance_1 = new lib.Símbolo2();
	this.instance_1.setTransform(0.1,165.8,1,1,0,0,0,528,392.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:514.3,regY:519,x:-13.6,y:279.8},0).wait(1).to({y:267.55},0).wait(1).to({y:255.35},0).wait(1).to({y:243.1},0).wait(1).to({y:230.85},0).wait(1).to({y:218.65},0).wait(1).to({y:206.4},0).wait(1).to({y:194.2},0).wait(1).to({y:181.95},0).wait(1).to({y:169.7},0).wait(1).to({y:157.5},0).wait(1).to({y:145.25},0).wait(1).to({y:133.05},0).wait(1).to({y:120.8},0).wait(1).to({y:108.55},0).wait(1).to({y:96.35},0).wait(1).to({y:84.1},0).wait(1).to({y:71.9},0).wait(1).to({y:59.65},0).wait(1).to({y:47.4},0).wait(1).to({y:35.2},0).wait(1).to({y:22.95},0).wait(1).to({y:10.75},0).wait(1).to({y:-1.5},0).wait(1).to({y:-13.75},0).wait(1).to({y:-25.95},0).wait(1).to({y:-38.2},0).wait(1).to({y:-50.4},0).wait(1).to({y:-62.65},0).wait(1).to({y:-74.9},0).wait(1).to({y:-87.1},0).wait(1).to({y:-99.35},0).wait(1).to({y:-111.55},0).wait(1).to({y:-123.8},0).wait(1).to({y:-136.05},0).wait(1).to({y:-148.25},0).wait(1).to({y:-160.5},0).wait(1).to({y:-172.7},0).wait(1).to({y:-184.95},0).wait(1).to({y:-197.2},0).wait(1).to({y:-209.4},0).wait(1).to({y:-221.65},0).wait(1).to({y:-233.85},0).wait(1).to({y:-246.1},0).wait(1).to({y:-258.35},0).wait(1).to({y:-270.55},0).wait(1).to({y:-282.8},0).wait(1).to({y:-295},0).wait(1).to({y:-307.25},0).wait(1).to({y:-319.5},0).wait(1).to({y:-331.7},0).wait(1).to({y:-343.95},0).wait(1).to({y:-356.15},0).wait(1).to({y:-368.4},0).wait(1).to({y:-380.65},0).wait(1).to({y:-392.85},0).wait(1).to({y:-405.1},0).wait(1).to({y:-417.3},0).wait(1).to({y:-429.55},0).wait(1).to({y:-441.8},0).wait(1));

	// rail
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AAA+dQAVAAAOAPQAPAPAAAUMAAAA7XQAAAUgPAPQgOAPgVAAQgUAAgPgPQgOgPAAgUMAAAg7XQAAgUAOgPQAPgPAUAAg");
	this.shape.setTransform(537,-117.629,1,0.5474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgjePQgOgPAAgUMAAAg7XQAAgUAOgPQAQgPATAAQAVAAAOAPQAPAPAAAUMAAAA7XQAAAUgPAPQgOAPgVAAQgTAAgQgPg");
	this.shape_1.setTransform(537,-117.629,1,0.5474);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(61));

	// hit
	this.hit = new lib.Hit();
	this.hit.name = "hit";
	this.hit.setTransform(-566.3,1,1.7587,1,0,0,0,-320.2,0);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.Hit(), 3);

	var maskedShapeInstanceList = [this.hit];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(61));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-560.6,-246.1,1120.2,368.4);


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
		if(document.location.href.indexOf('#')>-1){
		this.gotoAndStop(document.location.href.split('#')[1]);
		}
		
		stage.on('drawstart', initStage, this, true);
		function initStage() {
		    stretchToFit();
		}
		
		
		
		
		
		this.btnAtras.addEventListener("click", fl_ClickToGoToWebPage_19);
		
		 function fl_ClickToGoToWebPage_19() {
			window.open("../Si_me_ocurre/index.html#final", "_self");
		}	 
		
		this.btnIndice.addEventListener("click", fl_ClickToGoToWebPage_20);
		function fl_ClickToGoToWebPage_20() {
			window.open("../", "_self");
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

	// imagen_1
	this.instance_2 = new lib.Símbolo1();
	this.instance_2.setTransform(600.05,558.7,1,1,0,0,0,-13.6,196.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(609.5,349.5,519.3,284);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1187,
	height: 649,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1672156749441", id:"index_atlas_1"}
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