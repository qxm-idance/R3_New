  var mainConH3;
  var leftMenu = $(".doc-menu-left");
  var leftMenuInitTop;      
  var href;
  var wScroll; 

  if(leftMenu.length){
    mainConH3 = $(".doc-content>.label-header");
    leftMenuInitTop = leftMenu.offset().top;
  }       
  

  $(window).scroll(function(){   
   leftMenuScroll();
   goTop();
  });

  window.onload = function(){
     $(".doc-code").hide();
  } 

  $(".doc-btn-clipboard").click(function(){
    $(this).siblings(".doc-code").slideToggle();
    var HIDDENCODE = "隐藏源码";
    var SHOWCODE = "显示源码";
    if($(this).text() == HIDDENCODE){
      $(this).text(SHOWCODE);
    }
    else{
      $(this).text(HIDDENCODE);
    }
  })


  //左侧菜单随页面滚动效果
  function leftMenuScroll(){
      
      wScroll = $(document).scrollTop();
     //滚动高度超过leftMenu初始高度时随页面滚动
      if(wScroll>=leftMenuInitTop){
        leftMenu.addClass("doc-menu-left__fixed");
      }
      else{
        leftMenu.removeClass("doc-menu-left__fixed");
      }
      //滚动到对应模块时 给leftMenu对应项增加active类
      if(mainConH3){
        mainConH3.each(function(){
          if(wScroll>=$(this).offset().top){
            href = "#"+$(this).attr("id");
            $(".doc-menu-left li").removeClass("active");
            $(".doc-menu-left a[href="+href+"]").parent("li").addClass("active").parents("li").addClass("active");
          }
      });
     }
  }

 //返回顶部按钮
  function goTop(){
    wScroll = $(document).scrollTop();
    if(wScroll>0){
      $(".doc-gotop").show();
    }
    else{
      $(".doc-gotop").hide();
    }
  }



 

    