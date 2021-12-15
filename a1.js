(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(img.CachedTexturedBitmap_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2426,960);// helper functions:

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


(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.0928,0.0928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a, new cjs.Rectangle(0,0,225.2,89.1), null);


// stage content:
(lib.a1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 滑鼠按鍵事件
		您可將函數增加至您自訂的程式碼，按一下特定元件實體，就會執行該函數。
		
		指示:
		1. 在下方含有「// 啟動您的自訂程式碼」的程式碼之後，將自訂的程式碼加入新行。
		按下元件實體時，就會執行程式碼。
		*/
		
		var a = 5;
		this.text_A.text = "123123";
		
		var phase = 0;
		
		this.btn_A.addEventListener("click", fl_MouseClickHandler.bind(this));
		this.btn_B.addEventListener("click", f2_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
			alert("已按下滑鼠"+a);
			// 結束您的自訂程式碼
			
			this.text_A.text = "ASDAS"+5;
		}
		
		function f2_MouseClickHandler()
		{
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
			//alert("已按下滑鼠"+a);
			// 結束您的自訂程式碼
			
			this.text_A.text = "2222"+5;
			
			alert('This might conflict with other code in the page.');
		}
		
		
		
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		window.handleClick=function() {
		  alert('This might conflict with other code in the page.');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.text_A = new cjs.Text("asdasdadasads", "55px 'Times New Roman'", "#0066CC");
	this.text_A.name = "text_A";
	this.text_A.lineHeight = 63;
	this.text_A.parent = this;
	this.text_A.setTransform(470.4,564.35);

	this.timeline.addTween(cjs.Tween.get(this.text_A).wait(1));

	// 圖層_1
	this.btn_B = new lib.a();
	this.btn_B.name = "btn_B";
	this.btn_B.parent = this;
	this.btn_B.setTransform(918.1,291.25,1.76,5.3868,0,0,0,112.8,44.3);

	this.btn_A = new lib.a();
	this.btn_A.name = "btn_A";
	this.btn_A.parent = this;
	this.btn_A.setTransform(406.25,286.95,1.6379,5.2465,0,0,0,112.5,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_A},{t:this.btn_B}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(862,412.6,253.9000000000001,214.69999999999993);
// library properties:
lib.properties = {
	id: '7BA08BE64E0B0C468ACEC850F6E37740',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_1.png?1639581221749", id:"CachedTexturedBitmap_1"}
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
an.compositions['7BA08BE64E0B0C468ACEC850F6E37740'] = {
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