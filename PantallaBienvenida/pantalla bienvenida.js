(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pantalla bienvenida_atlas_1", frames: [[1968,259,56,55],[1993,427,45,46],[139,770,136,40],[1458,758,137,40],[277,770,136,40],[0,770,137,40],[1968,68,64,58],[1458,631,118,125],[1578,689,71,31],[1715,493,86,286],[1803,493,86,286],[1368,631,88,276],[1891,493,88,277],[1993,475,39,41],[0,0,1366,768],[1993,316,53,49],[1993,367,39,58],[1968,128,57,58],[1968,188,45,69],[1968,0,75,66],[1368,350,623,141],[1368,0,598,348],[1368,493,345,136],[1981,518,47,30],[1578,631,93,56]]}
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



(lib.agregarusuario = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arroba = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.botoncreditos = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.botonvamos = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.botonCreditosClic = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.botonVamosClic = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.celular = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.computador_1 = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Enlace = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.globorojoderecha = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.globorojoizquierda = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.globoverdederecha = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.globoverdeizquierda = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.imagen = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Libroconfondos = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.like = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.llamada = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.mensaje = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Seguro = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.tablet = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.texto = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.tituloBienvenida = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.tituloBienvenida1 = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.visto = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.www = function() {
	this.initialize(ss["pantalla bienvenida_atlas_1"]);
	this.gotoAndStop(24);
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


(lib.zoomtexto = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.texto();
	this.instance.setTransform(-315,40);

	this.instance_1 = new lib.botonvamos();
	this.instance_1.setTransform(10,193);

	this.instance_2 = new lib.botoncreditos();
	this.instance_2.setTransform(-159,194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zoomtexto, new cjs.Rectangle(-315,40,623,194), null);


(lib.zoomseguredes = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.globoverdederecha();
	this.instance.setTransform(139,-229,1,1.1232);

	this.instance_1 = new lib.globoverdeizquierda();
	this.instance_1.setTransform(-251,-220,1,1.0899);

	this.instance_2 = new lib.globorojoderecha();
	this.instance_2.setTransform(90,-266,1,1.1427);

	this.instance_3 = new lib.globorojoizquierda();
	this.instance_3.setTransform(-199,-260,1,1.1427);

	this.instance_4 = new lib.tituloBienvenida1();
	this.instance_4.setTransform(-183,-190,1.0142,1.1186);

	this.instance_5 = new lib.tituloBienvenida();
	this.instance_5.setTransform(-299,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zoomseguredes, new cjs.Rectangle(-299,-266,598,453), null);


(lib.wwwizq = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.www();
	this.instance.setTransform(-46.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2256,scaleY:1.2256,x:-47},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-28,114,68.7);


(lib.telizq = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.llamada();
	this.instance.setTransform(-19.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1788,scaleY:1.3358,x:-23,y:-37},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-37,46,77.5);


(lib.tabletizq = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tablet();
	this.instance.setTransform(-37.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1997,scaleY:1.1997,x:-38},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-33,90,79.2);


(lib.seguredes = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tituloBienvenida();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seguredes, new cjs.Rectangle(0,0,598,348), null);


(lib.perfil = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.agregarusuario();
	this.instance.setTransform(-28,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2321,scaleY:1.2317,y:-27},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-27.5,69,68.3);


(lib.mensaje_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mensaje();
	this.instance.setTransform(-28.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1928,scaleY:1.193,x:-29},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,68,69.2);


(lib.like_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.like();
	this.instance.setTransform(-26.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.3395,scaleY:1.3397,x:-27,y:-25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-25,71,65.7);


(lib.imagen_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.imagen();
	this.instance.setTransform(-19.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.3076,scaleY:1.3073,x:-20,y:-21},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-21,51,53.6);


(lib.globoVerdeIzq = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.globoverdeizquierda();
	this.instance.setTransform(-44,-138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-45,y:-139},0).wait(5).to({x:-46},0).wait(5).to({x:-47},0).wait(5).to({x:-48},0).wait(5).to({x:-49},0).wait(5).to({x:-50},0).wait(5).to({x:-51},0).wait(5).to({x:-52},0).wait(5).to({x:-53},0).wait(5).to({x:-54},0).wait(5).to({x:-53,y:-138},0).wait(5).to({x:-52,y:-137},0).wait(5).to({x:-51,y:-136},0).wait(5).to({x:-50},0).wait(5).to({x:-49},0).wait(5).to({x:-48},0).wait(5).to({x:-47},0).wait(5).to({x:-46},0).wait(5).to({x:-45},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-139,98,280);


(lib.globoVerdeDer = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.globoverdederecha();
	this.instance.setTransform(-44,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-43},0).wait(5).to({x:-42},0).wait(5).to({x:-41},0).wait(5).to({x:-40},0).wait(5).to({x:-39},0).wait(5).to({x:-38},0).wait(5).to({x:-37},0).wait(5).to({x:-36},0).wait(5).to({x:-35},0).wait(5).to({x:-34},0).wait(5).to({x:-35,y:-139},0).wait(5).to({x:-36},0).wait(5).to({x:-37},0).wait(5).to({x:-38},0).wait(5).to({x:-39},0).wait(5).to({x:-40},0).wait(5).to({x:-41},0).wait(5).to({x:-42},0).wait(5).to({x:-43},0).wait(7).to({x:-44,y:-138},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-139,98,277);


(lib.globoRojoIzq = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.globorojoizquierda();
	this.instance.setTransform(-43,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-42,y:-142},0).wait(5).to({x:-43},0).wait(5).to({x:-44},0).wait(5).to({x:-45},0).wait(5).to({x:-46},0).wait(5).to({x:-47},0).wait(5).to({x:-48},0).wait(5).to({x:-49},0).wait(5).to({x:-50},0).wait(5).to({x:-51},0).wait(5).to({x:-52},0).wait(5).to({x:-53},0).wait(5).to({x:-52},0).wait(5).to({x:-51,y:-141},0).wait(5).to({x:-50,y:-140},0).wait(1).to({y:-141},0).wait(4).to({x:-49,y:-140},0).wait(6).to({x:-48,y:-141},0).wait(4).to({x:-47},0).wait(5).to({x:-46,y:-142},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-143,97,289);


(lib.globorojoder = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.globorojoderecha();
	this.instance.setTransform(-43,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-42},0).wait(5).to({x:-41},0).wait(5).to({x:-40,y:-142},0).wait(5).to({x:-39},0).wait(5).to({x:-38},0).wait(5).to({x:-37},0).wait(5).to({x:-36},0).wait(5).to({x:-35},0).wait(5).to({x:-34},0).wait(5).to({x:-33},0).wait(5).to({x:-34,y:-143},0).wait(5).to({x:-35,y:-144},0).wait(5).to({x:-36},0).wait(5).to({x:-37,y:-145},0).wait(5).to({x:-38},0).wait(5).to({x:-39},0).wait(5).to({x:-40},0).wait(7).to({x:-41},0).wait(6).to({y:-144},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-145,96,289);


(lib.enlace = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Enlace();
	this.instance.setTransform(-35.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2392,scaleY:1.2384,x:-35,y:-15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-15.5,88.5,38.9);


(lib.computadorizq = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.computador_1();
	this.instance.setTransform(59,-62,0.9998,0.9999,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.068,scaleY:1.0678,x:67},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-62,126,133.5);


(lib.celularizq = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.celular();
	this.instance.setTransform(-32,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2341,scaleY:1.2341},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-29,79,71.6);


(lib.candadoizq = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Seguro();
	this.instance.setTransform(-22.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.133,scaleY:1.1331,x:-22,y:-35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-35,51.5,78.2);


(lib.btnvamos = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.botonvamos();
	this.instance.setTransform(-68,-20,0.9999,1);

	this.instance_1 = new lib.botonVamosClic();
	this.instance_1.setTransform(-68,-20,1.0291,1.0999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.0291,scaleY:1.0999}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.949,scaleY:1.0135}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-20,141,44);


(lib.btncreditos = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.botoncreditos();
	this.instance.setTransform(-68,-20);

	this.instance_1 = new lib.botonCreditosClic();
	this.instance_1.setTransform(-68,-20,1.0294,1.0999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.0294,scaleY:1.0999}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.9558,scaleY:1.0216}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-20,140,44);


(lib.bien = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.visto();
	this.instance.setTransform(-23.5,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.3615,scaleY:1.3615,x:-23},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-15,64.5,40.9);


(lib.arroba_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.arroba();
	this.instance.setTransform(-22.5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.3478,scaleY:1.2826,x:-30,y:-29},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-29,60.7,59);


// stage content:
(lib.pantallabienvenida = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [82,102];
	// timeline functions:
	this.frame_82 = function() {
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.btnVamos.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.adobe.com", "_self");
		}
	}
	this.frame_102 = function() {
		var _this = this;
		 
		_this.gotoAndPlay(83);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(82).call(this.frame_82).wait(20).call(this.frame_102).wait(1));

	// Capa_3
	this.instance = new lib.texto();
	this.instance.setTransform(375,293);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({_off:false},0).wait(21));

	// botones
	this.instance_1 = new lib.zoomtexto();
	this.instance_1.setTransform(683.05,539.2,0.01,0.01,0,0,180);
	this.instance_1._off = true;

	this.btnVamos = new lib.btnvamos();
	this.btnVamos.name = "btnVamos";
	this.btnVamos.setTransform(766.5,464);
	new cjs.ButtonHelper(this.btnVamos, 0, 1, 2);

	this.instance_2 = new lib.btncreditos();
	this.instance_2.setTransform(598,464);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},65).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.btnVamos}]},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).wait(1).to({regX:-3.5,regY:137,scaleX:0.0528,scaleY:0.0618,skewY:0,x:683.25,y:529.8},0).wait(1).to({scaleX:0.1157,scaleY:0.1236,x:683.45,y:520.5},0).wait(1).to({scaleX:0.1785,scaleY:0.1854,x:683.65,y:511.15},0).wait(1).to({scaleX:0.2414,scaleY:0.2471,x:683.8,y:501.8},0).wait(1).to({scaleX:0.3042,scaleY:0.3089,x:684,y:492.45},0).wait(1).to({scaleX:0.3671,scaleY:0.3707,x:684.15,y:483.1},0).wait(1).to({scaleX:0.4299,scaleY:0.4325,x:684.35,y:473.75},0).wait(1).to({scaleX:0.4928,scaleY:0.4943,x:684.6,y:464.4},0).wait(1).to({scaleX:0.5556,scaleY:0.5561,x:684.75,y:455.1},0).wait(1).to({scaleX:0.6185,scaleY:0.6179,x:684.95,y:445.75},0).wait(1).to({scaleX:0.6813,scaleY:0.6796,x:685.1,y:436.35},0).wait(1).to({scaleX:0.7442,scaleY:0.7414,x:685.3,y:427},0).wait(1).to({scaleX:0.807,scaleY:0.8032,x:685.5,y:417.7},0).wait(1).to({scaleX:0.8699,scaleY:0.865,x:685.65,y:408.35},0).wait(1).to({scaleX:0.9327,scaleY:0.9268,x:685.85,y:399},0).wait(1).to({scaleX:0.9955,scaleY:0.9886,x:686.05,y:389.7},0).to({_off:true},1).wait(21));

	// seguredes
	this.instance_3 = new lib.zoomseguredes();
	this.instance_3.setTransform(691.45,252.6,0.0017,0.0023);

	this.instance_4 = new lib.seguredes();
	this.instance_4.setTransform(691.75,198.4,1.0058,0.8957,0,0,0,299.1,108.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:-39.5,scaleX:0.036,scaleY:0.0327,y:251},0).wait(1).to({scaleX:0.0704,scaleY:0.063,y:249.55},0).wait(1).to({scaleX:0.1047,scaleY:0.0934,y:248.1},0).wait(1).to({scaleX:0.1391,scaleY:0.1238,y:246.65},0).wait(1).to({scaleX:0.1734,scaleY:0.1542,y:245.2},0).wait(1).to({scaleX:0.2078,scaleY:0.1845,y:243.75},0).wait(1).to({scaleX:0.2421,scaleY:0.2149,y:242.3},0).wait(1).to({scaleX:0.2765,scaleY:0.2453,y:240.85},0).wait(1).to({scaleX:0.3108,scaleY:0.2757,y:239.4},0).wait(1).to({scaleX:0.3452,scaleY:0.306,y:237.95},0).wait(1).to({scaleX:0.3795,scaleY:0.3364,y:236.5},0).wait(1).to({scaleX:0.4139,scaleY:0.3668,y:235.05},0).wait(1).to({scaleX:0.4482,scaleY:0.3971,y:233.6},0).wait(1).to({scaleX:0.4826,scaleY:0.4275,y:232.15},0).wait(1).to({scaleX:0.517,scaleY:0.4579,y:230.65},0).wait(1).to({scaleX:0.5513,scaleY:0.4883,y:229.2},0).wait(1).to({scaleX:0.5857,scaleY:0.5186,y:227.75},0).wait(1).to({scaleX:0.62,scaleY:0.549,y:226.3},0).wait(1).to({scaleX:0.6544,scaleY:0.5794,y:224.85},0).wait(1).to({scaleX:0.6887,scaleY:0.6097,y:223.4},0).wait(1).to({scaleX:0.7231,scaleY:0.6401,y:221.95},0).wait(1).to({scaleX:0.7574,scaleY:0.6705,y:220.5},0).wait(1).to({scaleX:0.7918,scaleY:0.7009,y:219.05},0).wait(1).to({scaleX:0.8261,scaleY:0.7312,y:217.6},0).wait(1).to({scaleX:0.8605,scaleY:0.7616,y:216.15},0).wait(1).to({scaleX:0.8948,scaleY:0.792,y:214.7},0).wait(1).to({scaleX:0.9292,scaleY:0.8223,y:213.25},0).wait(1).to({scaleX:0.9635,scaleY:0.8527,y:211.8},0).wait(1).to({scaleX:0.9979,scaleY:0.8831,y:210.35},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).wait(1).to({regX:299,regY:174,scaleX:1.0925,scaleY:1.0684,x:690.6,y:261},0).wait(1).to({scaleX:1.1792,scaleY:1.2411,x:689.5,y:265.25},0).wait(1).to({scaleX:1.2659,scaleY:1.4138,x:688.45,y:269.5},0).wait(1).to({scaleX:1.3102,scaleY:1.4828,x:688.2,y:270},0).wait(1).to({scaleX:1.3545,scaleY:1.5518,x:687.95,y:270.5},0).wait(1).to({scaleX:1.3103,scaleY:1.5102,x:687.75,y:270.4},0).wait(1).to({scaleX:1.2662,scaleY:1.4687,x:687.55,y:270.3},0).wait(1).to({scaleX:1.222,scaleY:1.4272,x:687.35,y:270.25},0).wait(1).to({scaleX:1.1779,scaleY:1.3857,x:687.15,y:270.1},0).wait(1).to({scaleX:1.1337,scaleY:1.3442,x:686.95,y:270.05},0).wait(1).to({scaleX:1.1264,scaleY:1.322,x:687.15,y:271.75},0).wait(1).to({scaleX:1.1192,scaleY:1.2998,x:687.35,y:273.5},0).wait(1).to({scaleX:1.1119,scaleY:1.2776,x:687.55,y:275.3},0).wait(1).to({scaleX:1.1046,scaleY:1.2554,x:687.75,y:277.05},0).wait(1).to({scaleX:1.0973,scaleY:1.2332,x:687.95,y:278.75},0).wait(1).to({scaleX:1.09,scaleY:1.211,x:687.65,y:272.75},0).wait(1).to({scaleX:1.0828,scaleY:1.1888,x:687.45,y:266.7},0).wait(1).to({scaleX:1.0755,scaleY:1.1666,x:687.2,y:260.7},0).wait(1).to({scaleX:1.0682,scaleY:1.1444,x:686.95,y:254.6},0).wait(1).to({scaleX:1.0609,scaleY:1.1222,x:687.15,y:254.95},0).wait(1).to({scaleX:1.0536,scaleY:1.1,x:687.35,y:255.3},0).wait(1).to({scaleX:1.0463,scaleY:1.0778,x:687.55,y:255.6},0).wait(1).to({scaleX:1.0391,scaleY:1.0556,x:687.75,y:255.9},0).wait(1).to({scaleX:1.0318,scaleY:1.0334,x:687.95,y:256.25},0).wait(1).to({scaleX:1.0245,scaleY:1.0112,x:688.9,y:260.45},0).wait(1).to({scaleX:1.0172,scaleY:0.989,x:689.95,y:264.65},0).wait(1).to({scaleX:1.0099,scaleY:0.9668,x:690.95,y:268.8},0).wait(46));

	// globos
	this.instance_5 = new lib.globoVerdeIzq();
	this.instance_5.setTransform(486,188.5);

	this.instance_6 = new lib.globoVerdeDer();
	this.instance_6.setTransform(874,181);

	this.instance_7 = new lib.globorojoder();
	this.instance_7.setTransform(824,153);

	this.instance_8 = new lib.globoRojoIzq();
	this.instance_8.setTransform(536,159);

	this.instance_9 = new lib.tituloBienvenida1();
	this.instance_9.setTransform(510,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},30).wait(73));

	// elementos_inf
	this.instance_10 = new lib.imagen_1();
	this.instance_10.setTransform(1200,730.95);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.instance_11 = new lib.bien();
	this.instance_11.setTransform(1114,737.5);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.instance_12 = new lib.perfil();
	this.instance_12.setTransform(1028,727.95);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 1);

	this.instance_13 = new lib.mensaje_1();
	this.instance_13.setTransform(1337.5,735.95,1,1,0,0,180);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 1);

	this.instance_14 = new lib.like_1();
	this.instance_14.setTransform(1269.5,708.45,1,1,0,0,180);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 1);

	this.instance_15 = new lib.enlace();
	this.instance_15.setTransform(1207.5,675.45,1,1,0,0,180);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 1);

	this.instance_16 = new lib.arroba_1();
	this.instance_16.setTransform(1109.5,676.5);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 1);

	this.instance_17 = new lib.telizq();
	this.instance_17.setTransform(1154.5,610.95,1,1,0,0,180);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 1);

	this.instance_18 = new lib.wwwizq();
	this.instance_18.setTransform(1232.5,619.95);
	new cjs.ButtonHelper(this.instance_18, 0, 1, 1);

	this.instance_19 = new lib.tabletizq();
	this.instance_19.setTransform(1328.5,626.95,1,1,0,0,180);
	new cjs.ButtonHelper(this.instance_19, 0, 1, 1);

	this.instance_20 = new lib.celularizq();
	this.instance_20.setTransform(1258,554.95,1,1,0,0,180);
	new cjs.ButtonHelper(this.instance_20, 0, 1, 1);

	this.instance_21 = new lib.candadoizq();
	this.instance_21.setTransform(1184.5,516.45,1,1,0,0,180);
	new cjs.ButtonHelper(this.instance_21, 0, 1, 1);

	this.instance_22 = new lib.computadorizq();
	this.instance_22.setTransform(1295,486.95,1,1,0,0,180);
	new cjs.ButtonHelper(this.instance_22, 0, 1, 1);

	this.instance_23 = new lib.imagen_1();
	this.instance_23.setTransform(169.5,730.5);
	new cjs.ButtonHelper(this.instance_23, 0, 1, 1);

	this.instance_24 = new lib.bien();
	this.instance_24.setTransform(259.5,736);
	new cjs.ButtonHelper(this.instance_24, 0, 1, 1);

	this.instance_25 = new lib.perfil();
	this.instance_25.setTransform(333,726.5);
	new cjs.ButtonHelper(this.instance_25, 0, 1, 1);

	this.instance_26 = new lib.mensaje_1();
	this.instance_26.setTransform(28.5,739);
	new cjs.ButtonHelper(this.instance_26, 0, 1, 1);

	this.instance_27 = new lib.like_1();
	this.instance_27.setTransform(96.5,711.5);
	new cjs.ButtonHelper(this.instance_27, 0, 1, 1);

	this.instance_28 = new lib.enlace();
	this.instance_28.setTransform(158.5,678.5);
	new cjs.ButtonHelper(this.instance_28, 0, 1, 1);

	this.instance_29 = new lib.arroba_1();
	this.instance_29.setTransform(240.5,678);
	new cjs.ButtonHelper(this.instance_29, 0, 1, 1);

	this.instance_30 = new lib.telizq();
	this.instance_30.setTransform(211.5,614);
	new cjs.ButtonHelper(this.instance_30, 0, 1, 1);

	this.instance_31 = new lib.wwwizq();
	this.instance_31.setTransform(134.5,631);
	new cjs.ButtonHelper(this.instance_31, 0, 1, 1);

	this.instance_32 = new lib.tabletizq();
	this.instance_32.setTransform(37.5,630);
	new cjs.ButtonHelper(this.instance_32, 0, 1, 1);

	this.instance_33 = new lib.celularizq();
	this.instance_33.setTransform(108,558);
	new cjs.ButtonHelper(this.instance_33, 0, 1, 1);

	this.instance_34 = new lib.candadoizq();
	this.instance_34.setTransform(181.5,519.5);
	new cjs.ButtonHelper(this.instance_34, 0, 1, 1);

	this.instance_35 = new lib.computadorizq();
	this.instance_35.setTransform(72,491.5);
	new cjs.ButtonHelper(this.instance_35, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAAFIAAgJ");
	this.shape.setTransform(-191.85,797.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(103));

	// libro
	this.instance_36 = new lib.Libroconfondos();
	this.instance_36.setTransform(0,-6,1,1.0174);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(103));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(490.2,378,876.3,420.9);
// library properties:
lib.properties = {
	id: '7C1B920775F18E4C9C20E78B1DF9DE91',
	width: 1366,
	height: 768,
	fps: 25,
	color: "#FDFDFD",
	opacity: 1.00,
	manifest: [
		{src:"images/pantalla bienvenida_atlas_1.png", id:"pantalla bienvenida_atlas_1"}
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