(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Resolution_PerformanceTEST_atlas_", frames: [[321,1314,108,108],[211,1314,108,108],[0,1382,108,108],[431,1314,108,108],[211,1256,236,56],[211,1172,180,82],[449,1265,428,17],[449,1172,91,91],[0,0,872,1170],[0,1172,209,208]]}
];


// symbols:



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["Resolution_PerformanceTEST_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["Resolution_PerformanceTEST_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["Resolution_PerformanceTEST_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["Resolution_PerformanceTEST_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["Resolution_PerformanceTEST_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["Resolution_PerformanceTEST_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["Resolution_PerformanceTEST_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_19 = function() {
	this.initialize(ss["Resolution_PerformanceTEST_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_20 = function() {
	this.initialize(ss["Resolution_PerformanceTEST_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖1 = function() {
	this.initialize(ss["Resolution_PerformanceTEST_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.asdw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.CachedTexturedBitmap_19();
	this.instance.parent = this;
	this.instance.setTransform(-22.75,-45.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.asdw, new cjs.Rectangle(-22.7,-45.5,45.5,45.5), null);


// stage content:
(lib.Resolution_PerformanceTEST = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var count = 0;
		
		
		
		
		
		
		this.stage.addEventListener("tick", StageEF.bind(this));
		function StageEF() {
		
			count += 1;
			this.infoA_Text.text = "Gap(F-C) : " + Math.abs(this.currentFrame - (count - 1)) + "\n";
			this.infoA_Text.text += "Count% : " + Math.floor(count * 100 / 30) + "%";
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// 圖層_2
	this.instance = new lib.asdw();
	this.instance.parent = this;
	this.instance.setTransform(38.75,169.75,1,1,0,0,0,0,-22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:237.6},14).to({x:38.75},15).wait(1));

	// 圖層_1
	this.infoA_Text = new cjs.Text("1255432", "24px 'Minecraft'", "#5C5B69");
	this.infoA_Text.name = "infoA_Text";
	this.infoA_Text.lineHeight = 26;
	this.infoA_Text.parent = this;
	this.infoA_Text.setTransform(40.75,231.55);

	this.instance_1 = new lib.CachedTexturedBitmap_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.5,165.55,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(170.55,311,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(137.05,283,0.5,0.5);

	this.instance_4 = new lib.點陣圖1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-330,181);

	this.instance_5 = new lib.CachedTexturedBitmap_15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(216,377,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,377,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(216,0,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.instance_9 = new lib.CachedTexturedBitmap_20();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-83,-83.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.infoA_Text}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,131.1,548,370);
// library properties:
lib.properties = {
	id: 'C7DE3290A2E33840BD8E893E9A7D6F5A',
	width: 270,
	height: 430,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Resolution_PerformanceTEST_atlas_.png?1640938611816", id:"Resolution_PerformanceTEST_atlas_"}
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
an.compositions['C7DE3290A2E33840BD8E893E9A7D6F5A'] = {
	getStage: function() { return exportRoot.getStage(); },
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;