// JavaScript Document
//index.js
$('document').ready(function(){
	//console.log('导航背景图片位置初始化');
	//导航背景图片位置初始化
	//动态改变图片位置函数
	function changePosition(obj,a1,a2,a3,a4){
		//a1/a2初始变化的x,y坐标,a3/a4累加变化的x/y坐标
		obj.each(function(index,element){
			var m=a1+index*a3+'px';
			var n=a2+index*a4+'px';
			var str= (m+' '+n);
			$(element).css('background-position',str)
			
			})
			
		}
	//导航图标初始化
	changePosition($('.nav-class-list-icon'),-374,-104,-46,0);
	//侧边栏区域样式初始化
	changePosition($('.aside-list li'),0,0,-68,0);
	//底部免费栏图标变化
	changePosition($('.free-list-icon'),0,0,0,-60);
	function changePositionTwo(obj,a1,a2,a3,a4,a5,a6){
		//a1/a2初始变化的x,y坐标,a3/a4累加变化的x/y坐标,a5/a6鼠标移入后背景图改变的值
		obj.each(function(index,element){
			$(element).hover(function(){
				var m=(a1+a5+(a3*index))+'px'
				var n=(a2+a6+(a4*index))+'px'
				var str=(m+' '+n)
				$(element).css('background-position',str)
				},function(){
				  changePosition(obj,a1,a2,a3,a4)
					})
			})
		}
	//导航图标区域鼠标移入移出样式
	changePositionTwo($('.nav-class-list-icon'),-374,-104,-46,0,0,-36)
	
	changePositionTwo($('.header-nav-class-list'),$('.nav-class-list-icon'),-374,-104,-46,0,0,-36)
	//鼠标移入父元素子元素跟随变化
	function changePositionTwo(obj,obj2,a1,a2,a3,a4,a5,a6){
		//a1/a2初始变化的x,y坐标,a3/a4累加变化的x/y坐标,a5/a6鼠标移入后背景图改变的值
		obj.each(function(index,element){
			$(element).hover(function(){
				var m=(a1+a5+(a3*index))+'px'
				var n=(a2+a6+(a4*index))+'px'
				var str=(m+' '+n)
				obj2.eq(index).css('background-position',str)
				},function(){
				  changePosition(obj2,a1,a2,a3,a4)
				  //changePosition($('.nav-class-list-icon'),-374,-104,-46,0);
					})
			})
		}
	
	
	//侧边栏区域鼠标移入移出样式
	changePositionTwo($('.aside-list li'),$('.aside-list li'),0,0,-68,0,0,-80)
	//初始化导航定义列表位置
	function changeNav(obj,a){
		//obj改变的对象，a改变的位置变量
		obj.each(function(index, element) {
            var b=$(element).css('margin-top');
			var str=parseFloat(b)+(index*a)+'px'
			$(element).css('margin-top',str)
        	});
		}
	changeNav($('.nav-class-detail'),-90)
	changeNav($('.link-content'),-26)
	//鼠标移入移出控制子元素类名称,一个元素控制另一个元素
	function tapClass(obj,obj2,name,name2){
		//obj父元素，obj2子元素，name增删子元素class,name2增删父元素class
		obj.each(function(index,element){
			
			$(element).hover(function(){
				for(var i=0;i<obj.length;i++){
					obj.eq(i).removeClass(name2)
					
					}
				//首先去掉所有父元素上的class
				obj.eq(index).addClass(name2)
				//alert($(element).css('className'))
				//给当前父元素添加class
				obj2.each(function(index,element){
					$(element).removeClass(name)
					})
				obj2.eq(index).addClass(name);
					})
				})
		}
	//单元素自身鼠标移入移出改变样式
	function tapClassOne(obj,name){
		//obj要改变的元素，name增删元素class
		obj.each(function(index,element){
			$(element).hover(function(){
				obj.removeClass(name).eq(index).addClass(name);
				//首先去掉所有元素上的class,给当前元素添加class
				
				//alert($(element).css('className'))
				//给当前父元素添加class
				
				},function(){
					obj.removeClass(name);
					})
			
			
		})
		
		}
	
	//控制推荐区域tap切换
	tapClass($('#suggest .title'),$('.suggest-tap-content'),'active','activeT');
	//控制底部链接鼠标显示隐藏
	tapClass($('.bottom-link-tap li'),$('.link-content'),'active','active-li');
	//控制推荐区域推荐列表鼠标移入移出
	tapClassOne($('.suggest-list li'),'active');
	
	//控制百变定制区域房间列表选择
	
	//点击控制元素控制另一组元素的变化（图片,字符串切换）
	function tapAttr(obj,obj2,name,arr,str,changeAttr){
		//obj控制元素，obj2被控制元素，name增删控制元素class,arr改变属性的数组，changeAttr要改变的属性
		obj.each(function(index,element){
			$(element).click(function(){
				obj.removeClass(name).eq(index).addClass(name)
				var a1=index
				obj2.each(function(index,element){
					$(element).attr(changeAttr,str+arr[a1][index]);
					})
					})
				})
		}
	var arrChange=[['清新园.jpg','典雅园.jpg','趣味园.jpg','知识园.jpg'],['简约系.jpg','贵族系.jpg','乐活系.jpg','怀旧系.jpg'],['童梦船.jpg','童话国.jpg','童趣屋.jpg','童乐窝.jpg'],['低奢风.jpg','清爽风.jpg','自然风.jpg','古色风.jpg']]
	var strChange='img/fl/fl4/';
	tapAttr($('.fl-section-content-left-list img'),$('.content-right-big img'),'active',arrChange,strChange,"src");
	//点击控制元素控制多组元素的变化（图片,字符串切换）
	var Json={
		'img':[['img/fl/fl8/1-1.jpg','img/fl/fl8/1-2.jpg','img/fl/fl8/1-3.jpg'],
		['img/fl/fl8/2-1.jpg','img/fl/fl8/2-2.jpg','img/fl/fl8/2-3.jpg'],
		['img/fl/fl8/3-1.jpg','img/fl/fl8/3-2.jpg','img/fl/fl8/3-3.jpg'],
		['img/fl/fl8/4-1.jpg','img/fl/fl8/4-2.jpg','img/fl/fl8/4-3.jpg'],],
		
		'str':['李工给了我很多方案参考，整个装修过程也给了我很多建议。这次一站式搞定全屋家具很省事，包括窗帘、沙发我都是在尚品宅配选的。',
		'对于我来说，一个好看的家，除了选择合适的定制家具以外，更要用心搭配空间每处细节的装饰。',
		'跑过不少家具卖场，发现在卖场很难选择适合的风格，也很难进行整体搭配，最终选择了尚品宅配的整体家居定制，而且上门安装也很省事儿。	',
		'我和先生刚结婚，这套精装修的三房两厅，算是我们的婚房。全屋定制家具花费12万元左右。我最满意的是儿童房，色调明亮活泼，而且全部使用环保材料，让我很放心。'],
		'people':['杨小姐','苗小姐','梁小姐','汤小姐'],
		'likeNum':[3930,3683,3251,3214]
		}
	
	function tapAttrMore(){
		//obj控制元素，obj2被控制元素，name增删控制元素class,arr改变属性的数组，changeAttr要改变的属性
		var a=$('#tap-card-top li');
		var b=$('.bottom-img');
		var c=$('#tap-card-bottom .number');
		var d=$('#tap-card-bottom .say-detail');
		var e=$('#bottom-sayer');
		a.each(function(index,element){
			$(element).click(function(){
				
				a.removeClass('active').eq(index).addClass('active');
				var a1=index;
				
				b.each(function(index,element){
					
					$(element).attr('src',Json.img[a1][index]);
					})
				$('#tap-card-bottom .love').removeClass('love-red');
				
				c.text(Json.likeNum[index])
				d.text(Json.str[index])
				e.text(Json.people[index])
				var onOff=true;
				var num=$('#tap-card-bottom .number').text();
				$('#tap-card-bottom').click(function(){
					if(onOff){
						num++;
						$('#tap-card-bottom .love').addClass('love-red');
						$('#tap-card-bottom .number').text(num);
						onOff=false;
						}
					})
					})
				})
		}
	tapAttrMore()
	//控制底部区域轮播列表
	function tapBottomList(a,b,c,d,e){
		var m=b.length
		var index=$('.activity-tap-list .active').index();
		function tap(n){
			var r=parseInt(a.css('marginLeft'));
			//var rNew=r;
			r -= 223;
			
			if(r<=-1115){
				b.removeClass('active');
				a.css('marginLeft','0')
				index=2;
				b.eq(index).addClass('active');
				}
			
			if(r<=-1115){
				b.removeClass('active');
				a.css('marginLeft','0')
				index=2;
				b.eq(index).addClass('active');
				}
			if(r>-1115){
				a.animate({'marginLeft':r+'px'},300)
				b.removeClass('active').eq(n).addClass('active');
				}
			}
		
		function tapRight(){
			index++;
			index%=12;
			tap(index);
			}
		function tapLeft(){
			index--;
			b.removeClass('active').eq(index).addClass('active');
			var r=parseInt(a.css('marginLeft'));
			r+=223;
			if(r>=0){
				b.removeClass('active')
				a.css('marginLeft','-1115px')
				index=7;
				b.eq(index).addClass('active');
			}else{
				a.animate({'marginLeft':r+'px'},300)
				}
			}
		
		c.click(function(){
			tapLeft();
			})
		d.click(function(){
			tapRight();
			})
		var tapTime=[]
		var tapTimer=function(){
			clearTimeout(tapTime);
			tapTime=setTimeout(function(){
				tapLeft()
				tapTimer()
				},3000)
			}
		tapTimer()
		e.hover(function(){
			clearTimeout(tapTime)
			},function(){
				tapTimer()
				})
		b.each(function(index,element){
			$(element).hover(function(){
				b.removeClass('active').eq(index).addClass('active');
				})
					})
	
	}
	tapBottomList($('.activity-tap-list'),$('.activity-tap-list li'),$('#activity .left'),$('#activity .right'),$('#activity .fl-section-content'));
	//百变定制区域底部控制按钮
	$('.change-make-detail-button span').click(function(){
		
		$('.change-make-detail-button span').toggleClass('active');
		
		$('.change-make-list li').toggleClass('hidden');
		
		})
	//鼠标移入移出显示隐藏函数
	//obj父元素，obj2子元素
	function tapshow(obj,obj2){
		obj.hover(
		function(){
			//obj2.fadeIn(200);
			obj2.css('display','block');
			obj2.slideDown(100);
			//obj2.css('backgroundColor','red')
		},function(){
			var timer=setTimeout(function(){
				//obj2.fadeOut(300)},100)
				obj2.slideUp(100)},100)
			obj2.hover(
			function(){
				//obj2.finish();
				clearTimeout(timer);
				//obj2.css('display','block');
				obj2.finish();
				},
			function(){
				//obj2.fadeOut(100);
				obj2.slideUp(100);
					})
			})
		}
	//鼠标移入淡入淡出
	function tapshowInOut(obj,obj2){
		obj.hover(
		function(){
			//obj2.fadeIn(200);
			obj2.css('display','block');
			
			
			
		},function(){
			var timer=setTimeout(function(){
				obj2.css('display','none');
				//obj2.fadeOut(300)
				},100)
				
			obj2.hover(
			function(){
				clearTimeout(timer);
				obj2.css('display','block');
				},
			function(){
				//obj2.fadeOut(100);
				obj2.css('display','none');
					})
			})
		}
	tapshow($('#help'),$('#help-list'));
	tapshow($('#onfouse'),$('#focus-block'));
	tapshowInOut($('#drop-down'),$('#drop-down-list'));
	
	
	//搜索栏点击内部元素消失，失去焦点时若内部为空则元素显示
	$('#header-search-input').click(
		//搜索框点击时关闭定时器，搜索框清空，预设搜索框消失
		
		function(){
		
		clearInterval(timerSearch);
		
		$('#header-search-input').val('');
		
		$('#header-search-scroll').css('display','none');
		$('#header-search-scroll p').css('display','none');
		//alert($('#header-search-scroll').css('display'));
		}
	);
	$('#header-search-scroll').click(
	//预设框点击时关闭定时器，搜索框清空，预设搜索框消失，并使得搜索框获得焦点
		function(){
		clearInterval(timerSearch);
		
		$('#header-search-input').val('');
		$('#header-search-scroll').css('display','none');
		$('#header-search-scroll p').css('display','none');
		$('#header-search-input').focus();
		}
	);
	$('#header-search-input').blur(
		//搜索框失去焦点时检查搜索框内的值是否为空，为空时开启定时器，预设框显示
		function(){
			if($('#header-search-input').val()){return};
			$('#header-search-scroll').css('display','block');
			tapSearch();
		}
	);
	//搜索栏内元素循环显示
	var timerSearch=null;
	
	function tapSearch(){
		var i=0;
		timerSearch=setInterval(function(){
			//alert(i)
			i++;
			//所有p元素消失
			$('#header-search-scroll p').css('display','none');
			//当前p元素显示，搜索框的值为p的值
			$('#header-search-scroll p').eq(i%3).slideDown(500);
			
			$('#header-search-input').text($('#header-search-scroll p').eq(i%3).text());
			
			},4000)
		
	}
	//页面加载后执行tapSearch函数
	tapSearch();
	//setInterval(function(){alert(1)},2000)
	//轮播图区域；
	
	function tapP(a,b,c,d,e,element){
		//var index=0;
		var index=0;
		var m=a.length
		clearTimeout(tapTime);
		function tap(n){
			a.css('display','none').eq(n).fadeIn();
			//a.css('display','none').eq(n).css('display','block');
			b.removeClass('show').eq(n).addClass('show');
			}
		b.hover(function(){
			index=$(this).index()
			//tap(index)
			a.css('display','none').eq(index).css('display','block');
			b.removeClass('show').eq(index).addClass('show');
			},function(){
				a.eq(index).addClass('active');
				})
		
		d.click(function(){
			tapLeft();
			})
		e.click(function(){
			tapRight();
			})
		function tapLeft(){
			index--
			if(index<0){index=m-1}
			tap(index)
			}
		function tapRight(){
			index++
			index%=m
			tap(index)
			}
		var tapTime=[]
		var tapTimer=function(){
			clearTimeout(tapTime);
			tapTime=setTimeout(function(){
				tapRight()
				tapTimer()
				},8000)
			}
		tapTimer()
		element.hover(function(){
			c.css('display','block');
			clearTimeout(tapTime)
			},function(){
				c.css('display','none');
				tapTimer()
				})
	
	}
	function  tapImg(){
		$('.tap').each(function(index, element) {
			//a为滚动的背景图，b为下方圆点（缩略图），c为控制显示下一个的按钮，d上一个按钮，e下一个按钮
			var a=$(element).find('.tap-content-a');
			var b=$(element).find('.tap-list-li');
			var c=$(element).find('.tap-span');
			var d=$(element).find('.tap-left');
			var e=$(element).find('.tap-right');
			tapP(a,b,c,d,e,$(element));
		});
	}
	tapImg()
	//顶部轮播图最后一个原点点击后，回到第一个开始循环
	$('.tap-to-first').click(function(){
		//$('.tap-content-a .active').removeClass('active');
		$('.tap-content-a').css('display','none');
		$('.tap-content-a:first').css('display','block');
		$('.tap-list-li').removeClass('show').eq(0).addClass('show');
		})
	
	
	//表单点击提交时验证,如不符合则阻止默认事件
	$('#navSubmit').click(function(){
		//获取函数正则检验函数的返回值
		var a=testValue();
		if(!a){
		$("form").submit(function(e){
			e.preventDefault();
			//alert("表单阻止提交了");
		  });
		}else{
			//如果正常提交则错误提示隐藏
			$('.error').css('display','none');
			}
		})
	//表单正则检验
	function testValue(){
		var strName=$('#name').val();
		var phoneNumber=$('#phone').val();
		//检验汉字
		var re=/[\u4e00-\u9fa5]/;
		//检验手机号码
		var re1=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
		//手机座机同时验证
		var re2=/(^(\d{3,4}-)?\d{7,8})$|(13[0-9]{9})/
		//如果姓名为空改变p中的提示,并显示
		if(strName.length==0){
			$('.error').css('display','block').text('姓名不能为空')
			return false;
			}
		
		//如果输入的不是汉字，会给出相应提示
		if(!re.test(strName)){
			$('.error').css('display','block').text('姓名请输入汉字')
			return false;
			}
		//如果输入的号码有误，会给出相应提示
		if(!re2.test(phoneNumber)){
			$('.error').css('display','block').text('请输入正确的电话号码');
			return false;
			}
		return true;
	}
	//控制预约区域滚动
	function scrollTop(){
		var timerScroll=null;
		timerScroll=setInterval(function(){
			$('.scroll-content').eq(0).animate({'marginTop':'-40px'},2000,function(){
				$(this).insertAfter($('.scroll-content').eq(2));
				$(this).css('marginTop','0px');
				})
			//鼠标移入后停止动画，关闭定时器，移出后恢复动画
			},3000)
			$('.scroll').hover(function(){
				clearInterval(timerScroll);
				},function(){
					scrollTop();
					})
			
		}
	scrollTop()
	
	//页面滚动时显示或隐藏回到顶部按钮
	$(window).scroll(function(){
	//获取窗口的滚动条的垂直位置
		var s = $(window).scrollTop();
		var min_height=500;
		var gotoTop=$(".aside-list li:nth-child(4)")
	//当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
		
		
		if( s > min_height){
			gotoTop.fadeIn(100);
		}else{
			gotoTop.fadeOut(200);
		}
		//如果当前元素位于可视区内，则更改其src
		//alert($('.scroll-display-img').length)
		$('.scroll-display-img').each(function(index,element){
			var itemTop=$(this).offset().top;
			var src=$(this).attr('data-img-src');
			if(s<=itemTop)
			$(this).attr('src',src);
			//console(src)
			})
		
	})
	//点击回到顶部按钮函数
	$('.aside-list li:nth-child(4)').on('click',function(){
		$('html,body').animate({scrollTop:"0"},700)
		})
	
})