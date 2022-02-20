//sorting

$(document).on("click", ".header_cities_dropdown_main_svg_title_wrapper", function(){
    $(".header_cities_dropdown_wrapper").toggleClass("active");
 })
 
 $(document).on("click", ".header_cities_hidden_text", function(){
   let atribute = $(this).data('name');
   // let value = $(this).data('value');
   $(this).closest(".header_cities_dropdown_wrapper").find(".header_cities_dropdown_main_svg_title_wrapper").find(".header_cities_dropdown_svg_title").html(atribute);
 
   $(this).addClass("active");
  $(this).closest(".header_cities_dropdown_wrapper").removeClass("open");
 
 
 })
 
 $(document).on("click", ".catalog_title_svg_wrapper", function(){
  $(".catalog_wrapper").toggleClass("active");
})

$(document).on("click", ".catalog_calculator_title_svg_wrapper", function(){
  $(".catalog_calculator_wrapper").toggleClass("active");
})


$(document).on("click", ".why_us_child_img", function(){
  var imageSource = $(this).attr("src");
 $(this).closest(".why_to_choose_us_wrapper").find(".why_to_choose_us_items_wrapper").find(".why_to_choose_us_item_img").find("#why_to_choose_parent_img").attr('src',imageSource);

})


$(document).on("click", ".hamburger-menu", function(){
    
  $('.mobile_version').fadeToggle();



});

$(document).on("click", ".mobile-close ", function(){
    
  $('.mobile_version').fadeToggle();



});


$(document).on("change", "#back_call_check_input", function(){
  console.log('6555')
$(this).parent(".back_call_form_check_input_field").toggleClass("active");


});
