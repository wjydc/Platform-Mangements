// 复制提示弹窗
function msg(isSuccess,message){
    var timer;
    var _body=$(window.parent.document.body);
    if (isSuccess) {
        var copyTip='<div class="copySE"><p><i class="glyphicon glyphicon-ok-sign"></i>'+message+'</p></div>';
    } else{
        var copyTip='<div class="copySE"><p><i class="glyphicon glyphicon-exclamation-sign"></i>'+message+'</p></div>';
    }
    
    function hide(){
        _body.find('.copySE').remove()
    }

    function show(){
        _body.append(copyTip)
    }

    function add(callback){
        show();
        callback();
    }
    add(function(){
        timer=setTimeout(hide,1500);
    })
}


// 删除确认提示

function confirm(successCallback,failCallback){
    var _body=$(window.parent.document.body);
    var Tips= function(){
        var _htmls="<div class='confirm'></div><div class='confimcontent'><p>是否确认删除？</p><p><span class='cancle'>取消</span><span class='sure'>确认</span></p></div>"
        _body.append(_htmls)  
    }
    Tips();
    // $('.promoteDelet').each(function(index,item){
    //     var i=index;
    //     $(this).click(function(){
    //        Tips()
    //     })
    // })
    // 取消
    var btnNo=function(){
        _body.on('click','.confimcontent .cancle',function(){
            _body.find('.confirm,.confimcontent').hide();
            if(typeof failCallback ==='function'){
                failCallback()
            }
        })
    }
    btnNo()
    // 确认删除
    var btnYes =function(){
        _body.on('click','.confimcontent .sure',function(){
            _body.find('.confirm,.confimcontent').hide();
            if(typeof successCallback =='function'){
                successCallback()
            }
        })
    }
    btnYes()
}
















