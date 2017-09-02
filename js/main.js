$(function(){
  $('#go-top, .go-top').on('click',function(e){
    e.preventDefault;
    $('html, body').animate({
      scrollTop: $('#header').offset().top
    },800);
    
  })

  $('#product-item1').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
  $('#Tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  // $(window).scroll(function(){
  //   if($(window).scrollTop() >0){
  //     $('#header').addClass('mini')
  //   } else {
  //     $('#header').removeClass('mini')
  //   };
  // });
})