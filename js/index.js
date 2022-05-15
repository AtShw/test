// 获取图片
var pic = $('.banner .pic li')
// 获取小圆点
var tab = $('.banner .tab li')
// 获取箭头
var btn = $('.mian .main-contain .banner .btn li')
console.log(pic)
console.log(tab)
console.log(btn)

// 获取图片长度
var len = pic.length

// 默认图片
var first = 0

// // 初始化
tab.eq(0).addClass('on')
pic.hide().eq(0).show()

// 圆点方法
tab.click(function (){
    var x = $(this).index()
    if(x != first){
        change(x)
    }
})

// 箭头
btn.click(function (){
    var x = first
    if($(this).index()){
        x++
        if(x>len){
            x = 0   // 向右化：如果图片序号超过图片总个数时时再从第一张图片开始展示
        }
    }else{
        x--    // 向左划
        if(x <0){
            x = len-1  // 展示第四张图片
        }
    }
    change(x)
})

// 定时器
auto()
function auto(){
    timer = setInterval(function (){
        var x = first
        x++
        // 在四张图片中循环
        x %= len    // 让其结果始终为0，1，2，3
        change(x)
    }, 2000)
}

// 清除定时器 鼠标划入
$('.banner').hover(function (){
    clearInterval(timer)
}, auto)

// 变化函数
function change(n){
    // 点击之后，如果是之前的图片，就去掉样式，进行隐藏
    tab.eq(first).removeClass('on');
    pic.eq(first).fadeOut(1000)
    first = n
    // 如果是新图片
    tab.eq(first).addClass('on')
    pic.eq(first).fadeIn(1000)
}


// 大列表
$(function(){
    var $menuLi = $('.header .header-contain .menu li');
    var $containLi = $('.main .contain>li');
    var $banner = $('.main .main-contain .banner');
    var first = 0;
    console.log($menuLi)
    console.log($containLi)

    $menuLi.click(function () {
        var x = $(this).index()
        $menuLi.eq(first).removeClass('active')
        $containLi.eq(first).removeClass('show')
        $banner.eq(first).addClass('un-show')


        //新样式
        first = x
        $menuLi.eq(first).addClass('active')
        $containLi.eq(first).addClass('show')
        if(first==0){
            $banner.eq(first).removeClass('un-show')
        }
    })
})


