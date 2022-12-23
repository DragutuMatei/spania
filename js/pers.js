      const rola_text_anim = document.querySelector(".rola_text_anim");
      const rola_text_anim2 = document.querySelector(".rola_text_anim2");
      const nume = document.querySelector(".nume");

      const parallax = () => {
        let scroll = window.scrollY;

        if (window.innerWidth <= 830) {
          rola_text_anim2.style.right = scroll / 8 + "px";
          rola_text_anim.style.left = scroll / 2 + "px";
          nume.style.left = -50 + scroll / 10 + "px";
        } else {
          nume.style.left = scroll / 2 + "px";
          rola_text_anim2.style.right = 400+ scroll / 8 + "px";
          rola_text_anim.style.left = -400 +scroll / 2.2 + "px";
        }
      };
      window.addEventListener("scroll", parallax);
      window.addEventListener("load", parallax);

      (function () {
        "use strict";

        // define variables
        var items = document.querySelectorAll(".timeline li");

        function isElementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
              (window.innerWidth || document.documentElement.clientWidth)
          );
        }

        function callbackFunc() {
          for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
              items[i].classList.add("in-view");
            }
          }
        }

        gsap.from(".svg", {
          scrollTrigger: ".avan",
          duration: 4.4,
          scale: 0.5,
          opacity: 0,
          delay: 0.5,
          stagger: 0.2,
          ease: "elastic",
          force3D: true,
        });

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
      })();