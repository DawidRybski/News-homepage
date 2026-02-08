function openMobileMenu(){
    $("body").addClass("menu-open");
    $(".menu").appendTo(".nav-drawer");
}

function closeMobileMenu(){
    $("body").removeClass("menu-open");
    $(".menu").appendTo("header");
}


$(".open-menu").on("click", function(){
    openMobileMenu();
});

$(".close-menu").on("click", function(){
    closeMobileMenu();
});

$(window).on("resize", function () {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
});