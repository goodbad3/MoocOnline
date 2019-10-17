//顶部搜索栏搜索方法
function search_click(){
    var keywords = $('#search_keywords').val(),
        request_url = '';
    if(keywords == ""){
        return
    }
    request_url = "/course/list?keywords="+keywords
    window.location.href = request_url
}

var swiper = new Swiper('.banner-img', {
    pagination: '.swiper-pagination',
    paginationClickable: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'fade',
    loop:true,
    autoplay:true
});

$('.search-input').focusin(function(){
	$(".search-area").addClass('search-area-focus');
	$('.search-btn').addClass('hover');
}).focusout(function(){
	$('.search-area').removeClass('search-area-focus');
	$('.search-btn').removeClass('hover');
})
$('.download').hover(function(){
	$(this).find('span').toggleClass('hover')
	$('.download-detail').toggleClass('hide');
})
$(".shop-cart").hover(function(){
	$('.shop-cart>i,.shop-cart>span').toggleClass('hover');
	$(this).toggleClass('shop-cart-hover');
	$('.shop-cart-detail').toggleClass('hide');
})
$('.banner-menu-item').hover(function(){
	var $this = $(this);
	$this.find('a').toggleClass('white');
	var index = $this.index();
	$('.banner-menu').children().eq(index+1).toggleClass('hide');
})
$('.teachers a').hover(function(){
	var index = $(this).index();
	$(this).find('img').toggleClass('touxiang-hover');
	$(this).find('p.nickname,p.job').toggleClass('hide');
	$(this).find('p.teacher-info').toggleClass('teacher-info-hover');
})

 $('#jsSearchBtn').on('click',function(){
        search_click()
    });
    //搜索表单键盘事件
    $("#search_keywords").keydown(function(event){
        if(event.keyCode == 13){
             $('#jsSearchBtn').trigger('click');
        }
    });