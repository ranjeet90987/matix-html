$(document).ready(function(){
 $('.sub-navopen').hover(function() {
       var id = $(this).attr('data');
        
       $(".navimg").hide();
       $(".subnv"+id).show();
});
 $('.sub-navopen2').hover(function() {
       var id = $(this).attr('data');
        
       $(".navimg2").hide();
       $(".subnv"+id).show();
});
$('.sub-navopen3').hover(function() {
       var id = $(this).attr('data');
        
       $(".navimg3").hide();
       $(".subnv"+id).show();
});
$('.new-navopen').click(function() {
       var st = "hidden";
       var id = $(this).attr('data');
       $(".newnavv").hide();
       $(".nv"+id).show();
       $("body").css("overflow", st);

});
$(".newnavv .cross-btn1").click(function(){
    $(".newnavv").hide();
    var st = "unset";
    $("body").css("overflow", st);
});
  
  collectMapSvg();
  var cn = 0;
  var win = $(this);
  $('.ham-icon').click(function(){
    if(cn == 0){
      var st = "hidden";
      cn = 1;
      $('#header').addClass('bluebg');
      $('.cross-btn2').show();
    }else{
      var st = "unset";
      cn = 0;
      $('#header').removeClass('bluebg');
      $('.cross-btn2').hide();
    }
    $("body").css("overflow", st);
    $(".my-sidenav1").slideToggle("slow");
  });
  $(".my-sidenav").accordion();
});

$(".menu_bg_1").click(function(){
  $(".listActive1 img").slideToggle();
  $(".listActive2 img").hide();
  $(".listActive3 img").hide();
});
$(".menu_bg_2").click(function(){
  $(".listActive2 img").slideToggle();
  $(".listActive3 img").hide();
  $(".listActive1 img").hide();
});
$(".menu_bg_3").click(function(){
  $(".listActive3 img").slideToggle();
  $(".listActive1 img").hide();
  $(".listActive2 img").hide();
});




$('.ham-icon1').click(function(){
  $('.my-sidenav').css('max-width', '100%');
});

$('.cross-btn1').click(function(){
  $('.my-sidenav').css('max-width', '0');
}); 


$('#tab_selector').on('change', function (e) {
  $('.tabsnew li a').eq($(this).val()).tab('show');
});

$('#tab_selector_1').on('change', function (e) {
  $('.tabsnewA li a').eq($(this).val()).tab('show');
});


$(window).on("scroll", function() {
  if($(this).scrollTop() > 60) {
   $('#header').addClass("sticky"); 
 } 
 else {
   $('#header').removeClass("sticky");
 } 
});

$(".reachingsldr.owl-carousel").owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  dots:true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  center: true,
  navText: "",
  touchDrag: true,
  mouseDrag: false,
  responsive:{
    0:{
      items:1,
      stagePadding: 0,
      center: false,
    },
    600:{
      items:1,
      stagePadding: 0,
      center: false,
    },
    1000:{
      items:1
    }
  }
});

$(".farmerSlider.owl-carousel").owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  autoplay:false,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  center: true,
  navText: "",
  touchDrag: true,
  mouseDrag: false,
  stagePadding: 30,
  responsive:{
    0:{
      items:1,
      stagePadding: 0,
      center: false,
    },
    600:{
      items:1,
      stagePadding: 0,
      center: false,
    },
    1000:{
      items:3
    }
  }
});

$(document).ready(function() {
  $('.elevatingSlider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter1a').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    touchDrag: true,
    mouseDrag: false,
    autoplayHoverPause:true,
    smartSpeed:1000,
    navText: "",
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });

});
$(document).ready(function() {
  $('.elevatingSlider2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter1anew').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoHeight: true,
    autoplay:true,
    autoplayTimeout:3000,
    touchDrag: true,
    mouseDrag: false,
    autoplayHoverPause:true,
    smartSpeed:1000,
    navText: "",
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });

});

$(document).ready(function() {
  $('.highlightSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    touchDrag: true,
    mouseDrag: false,
    smartSpeed:1000,
    navText: "",
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:3
      }
    }
  });

});

$('.panel-collapse').on('shown.bs.collapse', function (e) {
 var $panel = $(this).closest('.panel');
 $('html,body').animate({
   scrollTop: $panel.offset().top-80
 }, 500); 
});


     /*
 * Replace all SVG images with inline SVG
 */
function collectMapSvg() {
  $('img.mapsvg').each(function(){
  //$('.'+cls).css({ fill: "#ff0000" });
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
        // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

        // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

        // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
}

$(document).ready(function() {
  $('.comprehensiveSlider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    autoplay: true,
    items: 1,
    loop: false,
    slideSpeed: 300,
    paginationSpeed: 3000,
    autoplaySpeed: 5000,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    nav: true,
    touchDrag: true,
    mouseDrag: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    transitionStyle: "fade",
    dots: false
  });
  var owl = $('.comprehensiveSlider.owl-carousel');
  $('.cursorright').click(function() {
    owl.trigger('prev.owl.carousel');
  });
  $('.cursorleft').click(function() {
    owl.trigger('next.owl.carousel');
  });

  $('.comprehensiveSlider.owl-carousel').on('changed.owl.carousel', function(event) {
    var current = event.item.index;
    var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
    $('.' + hash).addClass('active');
  });

  $('.comprehensiveSlider.owl-carousel').on('change.owl.carousel', function(event) {
    var current = event.item.index;
    var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
    $('.' + hash).removeClass('active');
  });

});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



function link_text1()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img1.webp');
  $(".imgHead").html("About Matix Fertilizers and Chemical limited");
  $(".imgPara").html("Specialising in providing high-quality crop nutrient products and farm advisory services, we play an integral role in India’s agricultural landscape.");
}

function link_text_rmv_1()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img1.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

function link_text1b()
{
  $(".rightMax img").attr('src', 'images/menu/our-competencies/our-c-img1.webp');
  $(".imgHead").html("Product Portfolio -Elevating farm productivity with a superior portfolio");
  $(".imgPara").html("We offer a comprehensive range of crop nutrition and protection solutions.");
}

function link_text_rmv_1b()
{
  $(".rightMax img").attr('src', 'images/menu/our-competencies/our-c-img1.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

function link_text1c()
{
  $(".rightMax img").attr('src', 'images/menu/our-competencies/our-c-img2.webp');
  $(".imgHead").html("Advantage Matix -Cornerstones of our enduring success");
  $(".imgPara").html("We have strategically carved a distinctive edge in the industry encompassing all aspects of business right from operations to distribution network and brand presence to a focus on sustainability.");
}

function link_text_rmv_1c()
{
  $(".rightMax img").attr('src', 'images/menu/our-competencies/our-c-img2.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}
function link_text1d()
{
  $(".rightMax img").attr('src', 'images/menu/our-competencies/our-c-img3.webp');
  $(".imgHead").html("Manufacturing Competencies -World-class manufacturing for exceptional quality and efficiencies");
  $(".imgPara").html("High-quality and cost-effective crop nutrient products are critical to drive agricultural productivity.");
}

function link_text_rmv_1d()
{
  $(".rightMax img").attr('src', 'images/menu/our-competencies/our-c-img3.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

// 
function link_text2()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img2.webp');
  $(".imgHead").html("Message from the Chairman");
  $(".imgPara").html("It is with immense pleasure that I present to you our FY 2022-23 annual report, as we complete our first full year of operations.");
}

function link_text_rmv_2()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img2.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

function link_text2b()
{
  $(".rightMax img").attr('src', 'images/menu/our-commitment/our-commitment-img1.webp');
  $(".imgHead").html("Farmer relations and services -Cultivating connections, empowering farmers");
  $(".imgPara").html("We are committed to enhancing agricultural outcomes and improving the lives of the farmers.");
}

function link_text_rmv_2b()
{
  $(".rightMax img").attr('src', 'images/menu/our-commitment/our-commitment-img1.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

function link_text2c()
{
  $(".rightMax img").attr('src', 'images/menu/our-commitment/our-commitment-img2.webp');
  $(".imgHead").html("Revolutionising Soil Testing with Mobile Soil Testing Van (MSTV)");
  $(".imgPara").html("Soil testing is crucial for farmers as it assesses soil health, aids in crop and fertiliser selection, and pH level management.");
}

function link_text_rmv_2c()
{
  $(".rightMax img").attr('src', 'images/menu/our-commitment/our-commitment-img2.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

function link_text2d()
{
  $(".rightMax img").attr('src', 'images/menu/our-commitment/our-commitment-img3.webp');
  $(".imgHead").html("People initiatives-Committed to workplace excellence and employee enrichment");
  $(".imgPara").html("As we aspire to transform into an innovative fertiliser manufacturing enterprise and expand into new segments of the agribusiness market, we place the highest value on our employees’ capabilities.");
}

function link_text_rmv_2d()
{
  $(".rightMax img").attr('src', 'images/menu/our-commitment/our-commitment-img3.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

function link_text2e()
{
  $(".rightMax img").attr('src', 'images/menu/our-commitment/our-commitment-img4.webp');
  $(".imgHead").html("Business responsibility -Leading the way for a greener, planet-positive future");
  $(".imgPara").html("Advancement of the agri-food ecosystem is at the heart of our business. We firmly believe that this objective is intricately linked to our responsibility towards the planet and communities.");
}

function link_text_rmv_2e()
{
  $(".rightMax img").attr('src', 'images/menu/our-commitment/our-commitment-img4.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

function link_text2f()
{
  $(".rightMax img").attr('src', 'images/menu/our-commitment/our-commitment-img5.webp');
  $(".imgHead").html("At the forefront of enriching communities");
  $(".imgPara").html("We are committed to community development, as evident in our proactive initiatives even before commencing operations.");
}

function link_text_rmv_2f()
{
  $(".rightMax img").attr('src', 'images/menu/our-commitment/our-commitment-img5.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

// 
function link_text3()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img3.webp');
  $(".imgHead").html("Letter from the MD");
  $(".imgPara").html("In the past year, the Indian economy displayed resilience and thrived despite global challenges.");
}

function link_text_rmv_3()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img3.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}




// 
function link_text4()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img4.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

function link_text_rmv_4()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img4.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}


// 
function link_text5()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img5.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

function link_text_rmv_5()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img5.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

// 

function link_text6()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img6.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

function link_text_rmv_6()
{
  $(".rightMax img").attr('src', 'images/menu/corporate-overview/corporate-o-img6.webp');
  $(".imgHead").html("");
  $(".imgPara").html("");
}

// 





$(function() {
  $('.lineBarFix ul li a').click( function() {
    $(this).parent().siblings().children().removeClass('active');
    $(this).addClass('active');
  });
});


function imageZoom(imgID, resultID) {
  		var img, lens, result, cx, cy;
  		img = document.getElementById(imgID);
  		result = document.getElementById(resultID);
  /*create lens:*/
  		lens = document.createElement("DIV");
  		lens.setAttribute("class", "img-zoom-lens");
  /*insert lens:*/
  		img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  		cx = result.offsetWidth / lens.offsetWidth;
  		cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  		result.style.backgroundImage = "url('" + img.src + "')";
  		result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  		lens.addEventListener("mousemove", moveLens);
  		img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  		lens.addEventListener("touchmove", moveLens);
  		img.addEventListener("touchmove", moveLens);
  		function moveLens(e) {
  			var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
  			e.preventDefault();
    /*get the cursor's x and y positions:*/
  			pos = getCursorPos(e);
    /*calculate the position of the lens:*/
  			x = pos.x - (lens.offsetWidth / 2);
  			y = pos.y - (lens.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
  			if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
  			if (x < 0) {x = 0;}
  			if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
  			if (y < 0) {y = 0;}
    /*set the position of the lens:*/
  			lens.style.left = x + "px";
  			lens.style.top = y + "px";
    /*display what the lens "sees":*/
  			result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  		}
  		function getCursorPos(e) {
  			var a, x = 0, y = 0;
  			e = e || window.event;
    /*get the x and y positions of the image:*/
  			a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
  			x = e.pageX - a.left;
  			y = e.pageY - a.top;
    /*consider any page scrolling:*/
  			x = x - window.pageXOffset;
  			y = y - window.pageYOffset;
  			return {x : x, y : y};
  		}
  	}

  $(document).ready(function(){
 	imageZoom("myimage", "myresult");
   });
