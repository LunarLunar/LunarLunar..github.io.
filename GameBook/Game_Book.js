(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Game_Book_atlas_", frames: [[0,0,327,523],[0,525,126,126],[128,525,82,82]]}
];


// symbols:



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["Game_Book_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖1 = function() {
	this.initialize(ss["Game_Book_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖2 = function() {
	this.initialize(ss["Game_Book_atlas_"]);
	this.gotoAndStop(2);
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


(lib.player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.player, new cjs.Rectangle(0,0,126,126), null);


(lib.coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin, new cjs.Rectangle(0,0,82,82), null);


// stage content:
(lib.Game_Book = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		stage.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		    var p = this.globalToLocal(stage.mouseX, stage.mouseY);
		    this.NameTag.x = p.x;
		    this.NameTag.y = p.y;
			
			
			this.info_Text.text = "AAAA";
		}
		*/
		
		
		
		//m_Coin2 
		
		//m_Player.x = 5;
		
		
		var moveSpeed = 5;
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		
		
		
		var moveRight = false;
		
		
		this.stage.addEventListener("tick", stageMO_Handler.bind(this));
		function stageMO_Handler() {
		
			this.info_Text.text = Math.random() * 920 + 20 + "\n";
			this.info_Text.text += Math.random() * 920 + 20 + "\n";
		
		
			var p = this.globalToLocal(stage.mouseX, stage.mouseY);
		
			this.info_Text.text += p.x + "\n";
			this.info_Text.text += p.y + "\n";
		
			if (p.x >= 360) {
				moveRight = true;
		
			} else {
				moveRight = false;
			}
		
			if (moveRight) {
				this.m_Player.x += moveSpeed;
				if (this.m_Player.x >= 710) {
					this.m_Player.x = 710;
				}
			} else {
				this.m_Player.x -= moveSpeed;
				if (this.m_Player.x <= 10) {
					this.m_Player.x = 10;
				}
			}
		
			//m_Player.x = m_Player.x + (posX - m_Player.x ) / 5;
		
		}
		
		
		this.stage.addEventListener("tick", stageMO_Handler.bind(this));
		
		
		
		
		
		
		/* 按一下以定位物件
		將特定元件實體移動至您指定的 x 座標與 y 座標。
		
		指示:
		1. 以您要放置物件的 x 座標，
		   取代數值 200。
		2. 以您要放置物件的 y 座標，取代數值 100。
		
		
		this.movieClip_1.addEventListener("click", fl_ClickToPosition.bind(this));
		
		function fl_ClickToPosition()
		{
			this.movieClip_1.x = 200;
			this.movieClip_1.y = 100;
		}
		
		*/
		
		
		
		
		
		/*
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		
		this.btn1.addEventListener("mouseover", f2_MouseClickHandler.bind(this));
		function f2_MouseClickHandler()
		{
			num += Math.floor( Math.random() * 1000)
			this.sText.text = num;
			
		}
		
		
		this.btn1.addEventListener("mouseout", f3_MouseClickHandler.bind(this));
		function f3_MouseClickHandler()
		{
			num += Math.floor( Math.random() * 1000)
			this.sText.text = num;
			
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Code
	this.info_Text = new cjs.Text("aasas", "bold 20px 'Noto Sans CJK TC Black'", "#FF6600");
	this.info_Text.name = "info_Text";
	this.info_Text.lineHeight = 32;
	this.info_Text.lineWidth = 413;
	this.info_Text.parent = this;
	this.info_Text.setTransform(47.6,120.85);

	this.m_Coin = new lib.coin();
	this.m_Coin.name = "m_Coin";
	this.m_Coin.parent = this;
	this.m_Coin.setTransform(566.3,326.3,1,1,0,0,0,41,41);

	this.m_Player = new lib.player();
	this.m_Player.name = "m_Player";
	this.m_Player.parent = this;
	this.m_Player.setTransform(430,1047.95,1,1,0,0,0,63,63);

	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(54.35,871.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.m_Player},{t:this.m_Coin},{t:this.info_Text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(405.6,758.9,201.69999999999993,374.1);
// library properties:
lib.properties = {
	id: '121282FEE7402944A30829A8478583F0',
	width: 720,
	height: 1280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Game_Book_atlas_.png?1639895744352", id:"Game_Book_atlas_"}
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
an.compositions['121282FEE7402944A30829A8478583F0'] = {
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