(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Game_Coin_atlas_", frames: [[0,236,197,106],[199,236,208,67],[0,0,605,234],[409,236,35,34]]}
];


// symbols:



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["Game_Coin_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_32 = function() {
	this.initialize(ss["Game_Coin_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.背景素材點陣圖35 = function() {
	this.initialize(ss["Game_Coin_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖1 = function() {
	this.initialize(ss["Game_Coin_atlas_"]);
	this.gotoAndStop(3);
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


(lib.背景素材11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 點陣圖
	this.instance = new lib.背景素材點陣圖35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.背景素材11, new cjs.Rectangle(0,0,605,234), null);


(lib.moneyType1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖1();
	this.instance.parent = this;
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.moneyType1, new cjs.Rectangle(-16,-16,35,34), null);


// stage content:
(lib.Game_Coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//text_CoinNum  m_Coin2
		
		
		let coinNum = 0;
		
		
		
		
		
		
		
		this.m_Coin1.addEventListener("click", fl_MouseClickHandler.bind(this));
		this.m_Coin2.addEventListener("click", f2_MouseClickHandler.bind(this));
		this.m_Coin3.addEventListener("click", f3_MouseClickHandler.bind(this));
		this.m_Coin4.addEventListener("click", f4_MouseClickHandler.bind(this));
		this.m_Coin5.addEventListener("click", f5_MouseClickHandler.bind(this));
		
		
		function ccc()
		{
			
			//this.text_CoinNum.text = "AAA";
			//this.text_CoinNum.text = coinNum;
			this.text_CoinNum.text = coinNum;
			
		}
		
		
		
		function fl_MouseClickHandler()
		{
			
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
			//alert("已按下滑鼠"+a);
			// 結束您的自訂程式碼
			
			
			this.m_Coin1.x = Math.random() * 500 + 20;
			this.m_Coin1.y = Math.random() * 920 + 20 ;
			
		
			coinNum += 1
			this.text_CoinNum.text = coinNum;
		}
		
		
		function fl_MouseClickHandler()
		{
			
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
			//alert("已按下滑鼠"+a);
			// 結束您的自訂程式碼
			
			
			this.m_Coin1.x = Math.random() * 500 + 20;
			this.m_Coin1.y = Math.random() * 920 + 20 ;
			
		
			coinNum += 1
			this.text_CoinNum.text = coinNum;
		}
		
		
		function f2_MouseClickHandler()
		{
			
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
			//alert("已按下滑鼠"+a);
			// 結束您的自訂程式碼
			
			
			this.m_Coin2.x = Math.random() * 500 + 20;
			this.m_Coin2.y = Math.random() * 920 + 20 ;
			
		
			coinNum += 1
			this.text_CoinNum.text = coinNum;
		}
		
		
		function f3_MouseClickHandler()
		{
			
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
			//alert("已按下滑鼠"+a);
			// 結束您的自訂程式碼
			
			
			this.m_Coin3.x = Math.random() * 500 + 20;
			this.m_Coin3.y = Math.random() * 920 + 20 ;
			
		
			coinNum += 1
			this.text_CoinNum.text = coinNum;
		}
		
		
		function f4_MouseClickHandler()
		{
			
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
			//alert("已按下滑鼠"+a);
			// 結束您的自訂程式碼
			
			
			this.m_Coin4.x = Math.random() * 500 + 20;
			this.m_Coin4.y = Math.random() * 920 + 20 ;
			
		
			coinNum += 1
			this.text_CoinNum.text = coinNum;
		}
		
		
		function f5_MouseClickHandler()
		{
			
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
			//alert("已按下滑鼠"+a);
			// 結束您的自訂程式碼
			
			
			this.m_Coin5.x = Math.random() * 500 + 20;
			this.m_Coin5.y = Math.random() * 920 + 20 ;
			
		
			coinNum += 1
			this.text_CoinNum.text = coinNum;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.instance = new lib.CachedTexturedBitmap_32();
	this.instance.parent = this;
	this.instance.setTransform(427.75,16.75,0.5,0.5);

	this.m_Coin1 = new lib.moneyType1();
	this.m_Coin1.name = "m_Coin1";
	this.m_Coin1.parent = this;
	this.m_Coin1.setTransform(266.9,148.15,2.3542,2.3542,0,0,0,0.8,-11.3);

	this.m_Coin5 = new lib.moneyType1();
	this.m_Coin5.name = "m_Coin5";
	this.m_Coin5.parent = this;
	this.m_Coin5.setTransform(384.9,574.1,2.3542,2.3542,0,0,0,0.8,-11.3);

	this.m_Coin3 = new lib.moneyType1();
	this.m_Coin3.name = "m_Coin3";
	this.m_Coin3.parent = this;
	this.m_Coin3.setTransform(319.9,341.15,2.3542,2.3542,0,0,0,0.8,-11.3);

	this.m_Coin4 = new lib.moneyType1();
	this.m_Coin4.name = "m_Coin4";
	this.m_Coin4.parent = this;
	this.m_Coin4.setTransform(165.9,512.15,2.3542,2.3542,0,0,0,0.8,-11.3);

	this.text_CoinNum = new cjs.Text("0000", "bold 33px 'Noto Sans CJK TC Black'");
	this.text_CoinNum.name = "text_CoinNum";
	this.text_CoinNum.lineHeight = 51;
	this.text_CoinNum.parent = this;
	this.text_CoinNum.setTransform(126.15,28.75);

	this.instance_1 = new lib.CachedTexturedBitmap_15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.6,16.75,0.5,0.5);

	this.m_Coin2 = new lib.moneyType1();
	this.m_Coin2.name = "m_Coin2";
	this.m_Coin2.parent = this;
	this.m_Coin2.setTransform(97.95,138.2,2.3542,2.3542,0,0,0,0.8,-11.3);

	this.instance_2 = new lib.背景素材11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.8926,4.1026);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.m_Coin2},{t:this.instance_1},{t:this.text_CoinNum},{t:this.m_Coin4},{t:this.m_Coin3},{t:this.m_Coin5},{t:this.m_Coin1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,480,270,480);
// library properties:
lib.properties = {
	id: '1BD6BF542DF2164C9FE465738C69C631',
	width: 540,
	height: 960,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Game_Coin_atlas_.png?1639715484508", id:"Game_Coin_atlas_"}
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
an.compositions['1BD6BF542DF2164C9FE465738C69C631'] = {
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