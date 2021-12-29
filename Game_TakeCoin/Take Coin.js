(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Take Coin_atlas_", frames: [[0,0,1080,1920]]},
		{name:"Take Coin_atlas_2", frames: [[1082,0,300,500],[0,402,861,116],[0,0,1080,400],[513,520,208,90],[130,573,342,42],[1009,402,46,46],[863,402,144,216],[130,520,381,51],[0,520,128,216]]}
];


// symbols:



(lib._50c553eba83e1fc827ab49e442a84680 = function() {
	this.initialize(ss["Take Coin_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_66 = function() {
	this.initialize(ss["Take Coin_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_69 = function() {
	this.initialize(ss["Take Coin_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_70 = function() {
	this.initialize(ss["Take Coin_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_79 = function() {
	this.initialize(ss["Take Coin_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_80 = function() {
	this.initialize(ss["Take Coin_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Coin = function() {
	this.initialize(ss["Take Coin_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dada_f = function() {
	this.initialize(ss["Take Coin_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.DADA_GAMELOGO = function() {
	this.initialize(ss["Take Coin_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dada_W = function() {
	this.initialize(ss["Take Coin_atlas_2"]);
	this.gotoAndStop(8);
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


(lib.titleWord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.CachedTexturedBitmap_66();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.titleWord, new cjs.Rectangle(0,0,430.5,58), null);


(lib.PopText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Run:0});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// 圖層_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvwJNIAAyZIfhAAIAASZg");
	var mask_graphics_8 = new cjs.Graphics().p("AvwJNIAAyZIfhAAIAASZg");
	var mask_graphics_9 = new cjs.Graphics().p("AvwHhIAAvBIfhAAIAAPBg");
	var mask_graphics_10 = new cjs.Graphics().p("AvwF1IAArqIfhAAIAALqg");
	var mask_graphics_11 = new cjs.Graphics().p("AvwEKIAAoTIfhAAIAAITg");
	var mask_graphics_12 = new cjs.Graphics().p("AvwCeIAAk7IfhAAIAAE7g");
	var mask_graphics_13 = new cjs.Graphics().p("AvwidIAAhkIfhAAIAABkg");
	var mask_graphics_14 = new cjs.Graphics().p("AvwAyIAAhjIfhAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:11.9,y:-46.675}).wait(8).to({graphics:mask_graphics_8,x:11.9,y:-46.675}).wait(1).to({graphics:mask_graphics_9,x:11.9,y:-46.675}).wait(1).to({graphics:mask_graphics_10,x:11.9,y:-46.7}).wait(1).to({graphics:mask_graphics_11,x:11.9,y:-46.675}).wait(1).to({graphics:mask_graphics_12,x:11.9,y:-46.7}).wait(1).to({graphics:mask_graphics_13,x:11.9,y:-25.85}).wait(1).to({graphics:mask_graphics_14,x:11.9,y:-110.65}).wait(1));

	// 圖層_1
	this.scoreNumber_Text = new cjs.Text("+50", "96px 'Minecraft'", "#FEDF98");
	this.scoreNumber_Text.name = "scoreNumber_Text";
	this.scoreNumber_Text.lineHeight = 98;
	this.scoreNumber_Text.lineWidth = 190;
	this.scoreNumber_Text.parent = this;
	this.scoreNumber_Text.setTransform(-79,-85.75);

	var maskedShapeInstanceList = [this.scoreNumber_Text];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.scoreNumber_Text).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-87.7,193.8,100);


(lib.DADA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{DADA_F:0,DADA_L:9,DADA_R:19});

	// timeline functions:
	this.frame_8 = function() {
		this.gotoAndPlay("DADA_F");
	}
	this.frame_18 = function() {
		this.gotoAndPlay("DADA_L");
	}
	this.frame_28 = function() {
		this.gotoAndPlay("DADA_R");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(10).call(this.frame_18).wait(10).call(this.frame_28).wait(1));

	// 圖層_1
	this.instance = new lib.dada_f();
	this.instance.parent = this;
	this.instance.setTransform(-14,-110);

	this.instance_1 = new lib.dada_W();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{skewY:0,x:-6}}]},9).to({state:[{t:this.instance_1,p:{skewY:180,x:122}}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-110,144,216);


(lib.COIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.Coin();
	this.instance.parent = this;
	this.instance.setTransform(-39,-42,1.7087,1.7087);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.COIN, new cjs.Rectangle(-39,-42,78.6,78.6), null);


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.titleWord();
	this.instance.parent = this;
	this.instance.setTransform(279.2,580.3,1,1,0,0,0,215.3,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.3,scaleY:0.3,x:279.25},14).to({scaleX:1,scaleY:1,x:279.2},15).wait(1));

	// 圖層_1
	this.instance_1 = new lib.DADA_GAMELOGO();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26,427,1.2955,1.2955);

	this.instance_2 = new lib.CachedTexturedBitmap_69();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540,960);


// stage content:
(lib.TakeCoin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:1,Game:24});

	// timeline functions:
	this.frame_0 = function() {
		//==== GM Mode ======
		this.gotoAndStop("Game");
		
		this.stop();
		
		
		
		this.title_mc.addEventListener("click", TitleHandler.bind(this));
		
		function TitleHandler()
		{
		
			this.gotoAndPlay("Start");
		}
	}
	this.frame_24 = function() {
		this.stop();
		
		
		//參數 腳色相關
		var moveSpeed = 5;    
		
		//參數 效能相關
		var frequency = 30;   
		stage.enableMouseOver(frequency);
		
		//var moveRight = false;
		//var spawnTime = 500;
		
		
		//參數 遊戲
		var touchPt = this.globalToLocal(this.DADA_mc.x, this.DADA_mc.y);  //觸發位置
		//var spawnTime = 10;
		//var count_SpawnTime = 0;
		
		var GAME_START = true;
		var myScore = 0;
		
		var coinArray = [this.coin1,this.coin2,this.coin3,this.coin4,this.coin5];
		
		this.coin1.speed = Math.random() * 5 +10;
		this.coin2.speed = Math.random() * 15 +10;
		this.coin3.speed = Math.random() * 20 +10;
		this.coin4.speed = Math.random() * 20 +10;
		this.coin5.speed = Math.random() * 20 +10;
		
		
		
		
		this.stage.addEventListener("tick", stageMO_Handler.bind(this));
		function stageMO_Handler() {
			
			
			if(GAME_START == false)
			{
				return;
			}
			
			for( i = 0 ; i < coinArray.length ; i++){
				coinArray[i].y += coinArray[i].speed;
				
				
				var dx = coinArray[i].x - this.DADA_mc.x;
				var dy = coinArray[i].y - this.DADA_mc.y;
				var dis = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));			
				
				if(coinArray[i].y >= 1000)
				{
					coinArray[i].y = 0;
					coinArray[i].x = Math.random() * 460 + 50;
					coinArray[i].speed = Math.random() * 20 +10;
				}
				
				
				if(dis <= 120)
				{
					//獲得分數參數
					var reward = 2 + Math.floor(coinArray[i].speed /3);
					myScore += reward;
					
					this.pop_Text.x = this.DADA_mc.x;
					this.pop_Text.gotoAndPlay("Run");
					this.pop_Text.scoreNumber_Text.text = "+"+reward;
					
					coinArray[i].y = Math.random() * -500;
					coinArray[i].x = Math.random() * 460 + 50;
					coinArray[i].speed = Math.random() * 20 +10;
				}
				
			}
			
			//==== GM 測試用 ===============
			var xx = this.DADA_mc.currentFrame;
			this.GM_Text1.text = xx;
			
			
			
			//==== UI ===============
			this.Score_Text.text = myScore;
			
			
		
			//==== DADA Move ============
			touchPt = this.globalToLocal(stage.mouseX, stage.mouseY);
			this.DADA_mc.x += ( touchPt.x - this.DADA_mc.x) / 15;
			
			//==== DADA Animation =======	
			var dadaFrameNumber = this.DADA_mc.currentFrame;
		
				
			//1-9   F
			//10-19 L
			//20-29 R
			var touchPt_Dis = Math.abs( touchPt.x - this.DADA_mc.x);
			
			if( touchPt_Dis <= 30)
			{
				if(dadaFrameNumber >= 10)
				{
					this.DADA_mc.gotoAndPlay("DADA_F");
				}
			}
			else
			{
				var direct = touchPt.x - this.DADA_mc.x;
				if(direct > 0)
				{
					if( dadaFrameNumber < 20)
					{
						this.DADA_mc.gotoAndPlay("DADA_R");
					}
				}
				else
				{
					if(dadaFrameNumber < 10  || dadaFrameNumber >= 20)
					{
						this.DADA_mc.gotoAndPlay("DADA_L");
					}
					
				}
			}
		
			
			
			
			//==== GAME Logic ============
			if( myScore >= 1000)
			{
				GAME_START = false;
			}
			
			
			
			
			
			//=== Spawn Coin ===================
			//this.SpawnCoin();
			
			/*
			if (p.x >= this.DADA_mc.x) {
				moveRight = true;
		
			} else {
				moveRight = false;
			}
		
		
			if (moveRight) {
				this.DADA_mc.x += moveSpeed;
				if (this.m_Player.x >= 710) {
					this.m_Player.x = 710;
				}
			} else {
				this.DADA_mc.x -= moveSpeed;
				if (this.m_Player.x <= 10) {
					this.m_Player.x = 10;
				}
			}
			
			spawnTime -= 1;
			this.info_A.text = spawnTime;
			if( spawnTime <= 0)
			{
				spawnTime = Math.floor( Math.random() * 300 + 200 );
			}
			*/
		}
		
		
		
		//-- function 寫法 -----
		
		this.SpawnCoin = function () {
			
			
			count_SpawnTime+=1;
			if( count_SpawnTime >= spawnTime)
			{
				count_SpawnTime = 0;
				
				var cc = new lib.COIN();
				this.addChild(cc);
				
				cc.x = Math.floor( Math.random() * 500 + 20 );
				cc.y = Math.floor( Math.random() * 100 + 20 );
				
				//this.cc.addEventListener("tick", CoinHandler.bind(this));
				
				//cc.speed = Math.random() * 5 + 1;
			}	
			
		}
		
		
		function CoinHandler(e) {
			
			
		}
		
		
		//#index_count_Distance
		
		this.count_Distance = function (ax, ay , bx , by)
		{
			var dx = ax - bx;
			var dy = ay - by;
			var dis = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
			return dis;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(13));

	// Actions
	this.pop_Text = new lib.PopText();
	this.pop_Text.name = "pop_Text";
	this.pop_Text.parent = this;
	this.pop_Text.setTransform(640.45,496.25,1,1,0,0,0,0,-50);

	this.DADA_mc = new lib.DADA();
	this.DADA_mc.name = "DADA_mc";
	this.DADA_mc.parent = this;
	this.DADA_mc.setTransform(285.25,760,1,1,0,0,0,72,108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.DADA_mc},{t:this.pop_Text}]},24).wait(13));

	// UI
	this.instance = new lib.CachedTexturedBitmap_79();
	this.instance.parent = this;
	this.instance.setTransform(7.55,50.45,0.5,0.5);

	this.Score_Text = new cjs.Text("12564", "70px 'Minecraft'", "#170104");
	this.Score_Text.name = "Score_Text";
	this.Score_Text.lineHeight = 72;
	this.Score_Text.lineWidth = 206;
	this.Score_Text.parent = this;
	this.Score_Text.setTransform(121.75,37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Score_Text},{t:this.instance}]},24).wait(13));

	// GM_Text
	this.instance_1 = new lib.CachedTexturedBitmap_80();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.85,236.1,0.5,0.5);

	this.GM_Text1 = new cjs.Text("GM_Mode ", "41px 'Minecraft'", "#170104");
	this.GM_Text1.name = "GM_Text1";
	this.GM_Text1.lineHeight = 43;
	this.GM_Text1.lineWidth = 427;
	this.GM_Text1.parent = this;
	this.GM_Text1.setTransform(15.1,259.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.GM_Text1},{t:this.instance_1}]},24).wait(13));

	// 圖層_1
	this.title_mc = new lib.Title();
	this.title_mc.name = "title_mc";
	this.title_mc.parent = this;
	this.title_mc.setTransform(270,480,1,1,0,0,0,270,480);

	this.coin4 = new lib.COIN();
	this.coin4.name = "coin4";
	this.coin4.parent = this;
	this.coin4.setTransform(273.35,-25.65,1,1,0,0,0,39.3,39.3);

	this.coin5 = new lib.COIN();
	this.coin5.name = "coin5";
	this.coin5.parent = this;
	this.coin5.setTransform(510.25,-5.25,1,1,0,0,0,39.3,39.3);

	this.coin1 = new lib.COIN();
	this.coin1.name = "coin1";
	this.coin1.parent = this;
	this.coin1.setTransform(85.85,2.7,1,1,0,0,0,39.3,39.3);

	this.coin3 = new lib.COIN();
	this.coin3.name = "coin3";
	this.coin3.parent = this;
	this.coin3.setTransform(388.65,65.05,1,1,0,0,0,39.3,39.3);

	this.coin2 = new lib.COIN();
	this.coin2.name = "coin2";
	this.coin2.parent = this;
	this.coin2.setTransform(221.35,73.35,1,1,0,0,0,39.3,39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title_mc}]}).to({state:[{t:this.title_mc}]},1).to({state:[{t:this.title_mc},{t:this.coin2},{t:this.coin3},{t:this.coin1},{t:this.coin5},{t:this.coin4}]},22).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(1).to({alpha:0},22).wait(14));

	// 圖層_3
	this.instance_2 = new lib._50c553eba83e1fc827ab49e442a84680();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.8,1.8);

	this.instance_3 = new lib.CachedTexturedBitmap_70();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,760,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,373.1,483.29999999999995,586.9);
// library properties:
lib.properties = {
	id: 'E683D3A18C7AD046B29D5487E4F74074',
	width: 540,
	height: 960,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Take Coin_atlas_.png?1640806014634", id:"Take Coin_atlas_"},
		{src:"images/Take Coin_atlas_2.png?1640806014634", id:"Take Coin_atlas_2"}
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
an.compositions['E683D3A18C7AD046B29D5487E4F74074'] = {
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