
homes = $(".homes");

$(".open-overlay").click(function () {
  $(".open-overlay").css("pointer-events", "none");
  var overlay_navigation = $(".overlay-navigation"),
    top_bar = $(".bar-top"),
    middle_bar = $(".bar-middle"),
    bottom_bar = $(".bar-bottom");

  overlay_navigation.toggleClass("overlay-active");
  if (overlay_navigation.hasClass("overlay-active")) {
    top_bar.removeClass("animate-out-top-bar").addClass("animate-top-bar");
    middle_bar
      .removeClass("animate-out-middle-bar")
      .addClass("animate-middle-bar");
    bottom_bar
      .removeClass("animate-out-bottom-bar")
      .addClass("animate-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-up")
      .addClass("overlay-slide-down");
    homes.removeClass("height").addClass("no_height");
    overlay_navigation.velocity("transition.slideLeftIn", {
      duration: 300,
      delay: 0,
      begin: function () {
        $("nav ul li").velocity("transition.perspectiveLeftIn", {
          stagger: 150,
          delay: 0,
          complete: function () {
            $("nav ul li a").velocity(
              {
                opacity: [1, 0],
              },
              {
                delay: 10,
                duration: 140,
              }
            );
            $(".open-overlay").css("pointer-events", "auto");
          },
        });
      },
    });
  } else {
    $(".open-overlay").css("pointer-events", "none");
    top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
    middle_bar
      .removeClass("animate-middle-bar")
      .addClass("animate-out-middle-bar");
    bottom_bar
      .removeClass("animate-bottom-bar")
      .addClass("animate-out-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-down")
      .addClass("overlay-slide-up");
    homes.removeClass("no_height").addClass("height");
    $("nav ul li").velocity("transition.perspectiveRightOut", {
      stagger: 150,
      delay: 0,
      complete: function () {
        overlay_navigation.velocity("transition.fadeOut", {
          delay: 0,
          duration: 300,
          complete: function () {
            $("nav ul li a").velocity(
              {
                opacity: [0, 1],
              },
              {
                delay: 0,
                duration: 50,
              }
            );
            $(".open-overlay").css("pointer-events", "auto");
          },
        });
      },
    });
  }
});
document
  .querySelector("#home")
  .setAttribute("href", new Global().getSiteHomePath());

  document
  .querySelector(".homes a")
  .setAttribute("href", new Global().getSiteHomePath());

  // window.addEventListener("scroll", () => {
//   homes.css({
//     // backgroundColor: "rgba(7, 113, 135, "+scrollY / 100+")",
//     // backgroundColor: `rgba(red, ${scrollY / 10000})`,
//   });
// });
