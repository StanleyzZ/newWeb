window.onload = function (){

//设置导航透明度
	$('.banner-bg ul li:first').show();
	$('.nav li:first').addClass('current').html($('.nav li:first').attr('myName'));
	$('.pic01').css({'opacity':'0'}).animate({'top':'260','opacity':'1'},800);
	$('.pic02').css({'opacity':'0'}).animate({'top':'260','opacity':'1'},800);
	//alert($('.Cases').height());
	
//设置导航鼠标滑过事件
	var myLi;
	$('.nav li').hover(function(e) {
		 myLi = $(this).html();
		$(this).html($(this).attr('myName'));
    },function(){
		 $(this).html(myLi);
	});

//设置鼠标滑过技能图标事件
	$('.Skill-in ul li dl').hover(function(e) {
        $(this).children('img').stop().animate({'top':''+-12+'px'},300);	
    },function(){
		 $(this).children('img').stop().animate({'top':'0'},300);	
	});

//设置导航鼠标点击事件
	$('.nav li').click(function(e) {
		myLi = $(this).html();
        var jump = $('.louceng').eq($(this).index()).offset().top;
		var myJump = jump - 80;
		$('body,html').stop().animate({'scrollTop':''+myJump+'px'},800);
		$(this).html(myLi);
    });
	
//设置滚动条控制导航变化事件
	function myFn(par1){
		var aLi = ['HOME','SKILL','CASES','ABOUT','CONTACT']
		$('.nav li').each(function(index, element) {
            $(element).html(aLi[index]);
        });
       	$('.nav li').removeClass('current');
		$('.nav li').eq(par1).html($('.nav li').eq(par1).attr('myName'));
		$('.nav li').eq(par1).addClass('current');
		
		
		
	}
	$(window).scroll(function(e) {
        var sT = $(window).scrollTop() + 80;
		if(sT >= $('.louceng').eq(4).offset().top){
			myFn(4);
		}else if(sT >= $('.louceng').eq(3).offset().top){
			myFn(3);
		}else if(sT >= $('.louceng').eq(2).offset().top){
			myFn(2);
		}else if(sT >= $('.louceng').eq(1).offset().top){
			myFn(1);
		}else if(sT >=$('.louceng').eq(0).offset().top){
			myFn(0);	
		}
    });
	
//设置Banner定时器	
	var timer01 = null;
	var num = 0;

	var myTimer = function(){
		$('.banner-bg ul li').eq(num).fadeOut();
		num++;
		if(num > 2){
			num = 0;	
		}
		$('.banner-bg ul li').eq(num).fadeIn();
	};
	timer01 = setInterval(myTimer,3000)
	
	$('.banner-bg').hover(function(e) {
    	$('.leftBtn,.rightBtn').stop().fadeIn();
		clearInterval(timer01);    
    },function(){
		$('.leftBtn,.rightBtn').stop().fadeOut();
		clearInterval(timer01);
		timer01 = setInterval(myTimer,3000)   
	});

//Banner图轮播左右按钮点击事件	
	$('.rightBtn').click(function(e) {
        $('.banner-bg ul li').eq(num).fadeOut();
		num++;
		if(num > 2){
			num = 0;	
		}
		$('.banner-bg ul li').eq(num).fadeIn();
    });
	$('.leftBtn').click(function(e) {
        $('.banner-bg ul li').eq(num).fadeOut();
		num--;
		if(num < 0 ){
			num = 2;	
		}
		$('.banner-bg ul li').eq(num).fadeIn();
    });

//案例展示爆炸效果
	var nowimg = 0;
	$(".baozha").prepend("<div class='maoni'></div>");
	for(var i = 0 ; i <= 24 ; i++){
		$(".maoni").append("<p></p>");
		$(".maoni p").eq(i).css("top",parseInt(i / 5) * 82);
		$(".maoni p").eq(i).css("left",i % 5 * 194);
		$(".maoni p").eq(i).css("background-position", (i % 5 * -194) + "px " + parseInt(i / 5) * -82 +  "px");
	}
	
	$("input").click(
				function(){
					
					if(nowimg < 6){
						nowimg++;
					}else{
						nowimg = 0;
					}
					$(".zhentu").attr("src","images/" +nowimg + ".jpg");

					$(".maoni p").css("transition","all 1s ease 0s");
					$(".baozha").addClass("fei");

//添加飞的方向：
		$(".maoni p").each(function(){
			$(this).css("-webkit-transform","rotateX(" + -parseInt(Math.random() * 90)+ "deg) rotateY(" + parseInt(Math.random() *  100) + "deg) translateZ(500px)")
		});
				 
		setTimeout(function(){
			$(".baozha").removeClass("fei");
			$(".maoni p").css("transition","none");
			$(".maoni p").css("background-image","url(images/" + nowimg + ".jpg)");
			$(".maoni p").css("-webkit-transform","none");
			},1000);
		}
	);
	$(".stage ul li").clone().appendTo(".stage ul");
			dongyici(10000);	//调用函数

			function dongyici(shijian){
				//开跑
				$(".stage ul").animate({"left":-1312},shijian,"easieLinear", function(){
					$(this).css("left",0);
					dongyici(10000);	//迭代。自己调用自己。
				});
			}

			$(".stage").mouseenter(function(){
				$(".stage ul").stop();
			});

			$(".stage").mouseleave(function(){
				//我现在鼠标离开之后，到底要为剩余的动画分配多少时间？
				//按比例来！
				//如果现在还没有走的路程，比较短；那么就分配剩余的时间少一些。
				//如果现在还没有走的路程，比较长；那么就分配剩余的时间长一些。
				//已经走过的路程。取绝对值。
				// Math.abs 绝对值
				// parseFloat 去掉px单位
				var x = Math.abs(parseFloat($(".stage ul").css("left")));	
				var t = (1312 - x) / 1312 * 10000;	//剩余应该分配的时间
				dongyici(t);
			});
			
			$('.stage ul li').fadeTo(300,0.5);
			$('.stage ul li').mouseenter(function(e) {
            $(this).fadeTo(300,1).siblings().stop().fadeTo(300,0.5);
       			 }).mouseleave(function(e) {
            $(this).stop().fadeTo(300,0.5);
       		 })
	new ZoomPic("jswbox");	
}
