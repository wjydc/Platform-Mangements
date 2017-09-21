
(function(){
    // 首页
var page={
    index: function(){
    //    导航对应的iframe切换
//     var srcs=['./firstPage/firstpage.html','./novalMessage/novalList.html','./promoteLink/promotelink.html','./Bill/dayBill.html',
// './Bill/monthBill.html','./Bill/userState.html','./Bill/channelState.html','./publicConfigure/publicNumList.html','./publicConfigure/publicNumMenu.html',
// '','',
// './CashRegister/cashRegister.html','./CashRegister/collectionInformation.html']
//         $('.MESSAGE').each(function(index,item){
//             var i=index;
//             $(this).click(function(){
//                 var iframesrc=srcs[i];
//                 $('iframe').attr('src',iframesrc);
//             })
//         })
        $('.MESSAGE').each(function (index, item) {
                $(this).hover(function(){
                    $('.MESSAGE').addClass('normalColor').removeClass('hoverColor');
                    $('.MESSAGE').eq(index).removeClass('normalColor').addClass('hoverColor');
                },function(){
                    $('.MESSAGE').eq(index).removeClass('hoverColor').addClass('normalColor');
                })
                $(this).click(function () {
                    $('.MESSAGE').addClass('normalColor').removeClass('clickColor');
                    $('.MESSAGE').find('i').removeClass('iColor');
                    $('.MESSAGE').eq(index).removeClass('normalColor').addClass('clickColor');
                    $('.MESSAGE').eq(index).find('i').addClass('iColor');
                    var src = $(this).attr('data-src');
                    $('#mainFrame').attr('src', src);
                })
            })

        $('.accordion li').each(function(index, item){
            $(this).hover(function(){
                $('.accordion li').addClass('normalColor').removeClass('hoverColor');
                $('.accordion li').eq(index).removeClass('normalColor').addClass('hoverColor');
            },function(){
                $('.accordion li').eq(index).removeClass('hoverColor').addClass('normalColor');
            })
        })



    },
    // 线条
    line: function(){
         var height1=parseInt(($(window).height()))+parseInt(($(window).scrollTop()));
     
        $('.Division').css('height',height1)
        $(window).resize(function(){
           height1=parseInt(($(window).height()))+parseInt(($(window).scrollTop()));
            $('.Division').css('height',height1)
        })
    }
}
page.index();
// page.line();

// 小说列表/ 小说章节-生成文案
var noval={
  
 
}






// 推广链接
var promotelink={
    // 复制提示弹窗
    out: function(element){
        var timer;
        var _body=$(window.parent.document.body);
        var copyTip='<div class="copySE"><p><i class="glyphicon glyphicon-ok-sign"></i>复制成功</p></div>';
        function hide(){
            _body.find('.copySE').remove()
        }

        function show(){
            _body.append(copyTip)
        }

        function add(element,callback){
           $(element).each(function(){
                $(this).click(function(){
                 show();
                 callback();
                })
            })
        }
        add(element,function(){
            timer=setTimeout(hide,1500);
        })
        
    },
    // 删除按钮
    dele: function(){
        $('.promoteDelet').each(function(index,item){
            var i=index;
            $(this).click(function(){
                console.log(i)
                var td=$(this).parent().parent().parent().parent();
                td.parent().hide();
            })
        })
    },

    // 删除弹窗
    deleTip: function(callback){
        var _body=$(window.parent.document.body);
        var Tips= function(){
            var _htmls="<div class='confirm'></div><div class='confimcontent'><p>是否确认删除？</p><p><span class='cancle'>取消</span><span class='sure'>确认</span></p></div>"
            _body.append(_htmls)  
        }
        
        $('.promoteDelet').each(function(index,item){
            var i=index;
            $(this).click(function(){
               Tips()
            })
        })
        // 取消
        var btnNo=function(){
            $(document).on('click','.confimcontent .cancle',function(){
                $('.confirm,.confimcontent').hide();
               
            })
        }
        btnNo()
        // 确认删除
        var btnYes =function(callback){
          $(document).on('click','.confimcontent .sure',function(){
            $('.confirm,.confimcontent').hide();
            if(typeof(callback)=='function'){
                callback()
            }
          })
        }
        btnYes(function(){
            console.log('123')
        })
         
    }
}
// promotelink.out('.address');
// promotelink.out('button[data-clipboard-action=copy]');

// promotelink.deleTip();




// 数据统计
var data={
    // 倒计时
    timedown: function(obj){
    //     $('.calendar .search').click(function(){
    //     var that=$('.timedown');
    //     settime(that)
    // })
    var that=$(obj);
    settime(that);
    var countdown=60; 
    var timer;
    function settime(obj) { 
        if (countdown==0) { 
            obj.html(60); 
            countdown = 60; 
            return;
        } else { 
            var txt=countdown; 
            obj.html(txt);
            countdown--; 
        } 
     window.clearTimeout(timer)  
    timer=window.setInterval(function() { 
        settime(obj) }
        ,1000) 
    }
 },

//  渠道成本
cost: function(){
    $('.cost input').focus(function(){
        $(this).css({
            'border':'1px solid #8bc5e9'
        })
    })
},

// 公众号列表-添加公众号.修改弹窗
addPublicNum: function(){

 },

// 公众号列表弹窗AppSecret, Token 为空
publicListNull: function(){
     $(document).on("click",".publicSave",function(){
       var AppSecret=$('#PublicmyModal .AppSecret').val();
       var Token=$('#PublicmyModal .Token').val();
        if(AppSecret==''){
            $('#PublicmyModal .AppSecret').css({ 'border':'1px solid #f76260'})
            $('#PublicmyModal .AppSecret').siblings().children('.warning').show()
        }else{
            $('#PublicmyModal .AppSecret').css({'border':'1px solid #e8e9eb'})
            $('#PublicmyModal .AppSecret').siblings().children('.warning').hide()
        }
        if(Token==''){
            $('#PublicmyModal .Token').css({ 'border':'1px solid #f76260'})
            $('#PublicmyModal .Token').siblings().children('.warning').show()
        }else{
            $('#PublicmyModal .Token').css({'border':'1px solid #e8e9eb'})
            $('#PublicmyModal .Token').siblings().children('.warning').hide()
        }
    })
},

}
// data.timedown('.timedown');
data.cost();
data.addPublicNum();
data.publicListNull();

// 财务
// 财务  收款信息
var finance={
    tab: function(){
    $('.ways').each(function(index,item){
        var i=index;
        $(this).click(function(){
            $('.ways').removeClass('active');
             $(this).addClass('active');
            $('.ways').children('label').removeClass('checked');        
            $('.ways').eq(i).children('label').addClass('checked');
            $('.payWays').removeClass('show');
            $('.payWays').eq(i).addClass('show');
        })
    })
  }
}


finance.tab()


// 站点设置 - 重置保存按钮

var siteSet={
    reset:function(){
        $('.reset').click(function(){
            $('.siteSeting input').val('')
            $('.siteSeting input').siblings('label').hide()
        })
    },
    save: function(obj){
        $('.save').click(function(){
           obj.each(function(index,item){
                var i=index;
                var val= $(this).val();
                if(val==''){
                    $(this).siblings('label').show()
                }else{
                    $(this).siblings('label').hide()
                }
            })
        })
    }
}
siteSet.reset()
siteSet.save($('.siteSeting input'))
siteSet.save($('.publicConfigure input'))
})()




var data_time = {
    // 倒计时
    timedown: function (obj, callback) {
        var that = $(obj);
        settime(that);
        var countdown = 60;
        var timer;
        function settime(obj) {
            if (countdown == 0) {
                // callback();
                obj.html(60);
                countdown = 60;
                return;
            } else {
                var txt = countdown;
                obj.html(txt);
                countdown--;
            }
            window.clearTimeout(timer)
            timer = window.setInterval(function () {
                settime(obj)
            }, 1000)

        }
    }
}
data_time.timedown('.timedown','')



