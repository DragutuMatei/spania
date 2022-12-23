const mare = document.querySelector(".mare");
const mic = document.querySelector(".mic");
const scris_anim = document.querySelector(".scris_anim");
const tit = document.querySelector(".tit");
const misiune_efect = document.querySelector(".misiune_efect");
const rola_text_anim = document.querySelector(".rola_text_anim");
const colab_anim = document.querySelector(".colab_anim");

const parallax = () => {
  let scroll = window.scrollY;
  //   mare.style.top = 80 - scroll / 2 + "px";
  //   mic.style.top = window.innerHeight - 300 - scroll / 1.3 + "px";
  //   tit.style.left = scroll / 1.3 + "px";
  if (window.innerWidth <= 1000) {
    // rola_text_anim.style.right = -500 + scroll / 2 + "px";
    scris_anim.style.left = -600 + scroll / 2 + "px";
    misiune_efect.style.left = -1500 + scroll / 2 + "px";
    // colab_anim.style.left = -500 + scroll / 2 + "px";
  } else {
    // rola_text_anim.style.right = -500 + scroll / 2 + "px";
    // colab_anim.style.left = -500 + scroll / 2 + "px";
    scris_anim.style.left = -300 + scroll / 2 + "px";
    misiune_efect.style.left = -650 + scroll / 2 + "px";
  }
};

gsap.from(".imagine", {
  // scrollTrigger: {
  //   // trigger: ".avan img",
  //   // // toggleActions: "restart pause reverse pause"
  //   // // pin: true, trigger: ".trigger",
  //   // start: "center bottom",
  // },
  scrollTrigger: ".avan",
  duration: 4.4,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "elastic",
  force3D: true,
});

gsap.from(".next_arrow", {
  duration: 2,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "elastic",
  force3D: true,
});

document.querySelector(".arr").childNodes.forEach((child, index) => {
  child.addEventListener("click", () => {
    gsap.from(`.${index == 0 ? "prev_arrow" : "next_arrow"}`, {
      duration: 1.3,
      scale: 0.5,
      opacity: 0,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    });
  });
});
gsap.from(".prev_arrow", {
  duration: 2,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "elastic",
  force3D: true,
});

window.addEventListener("scroll", parallax);
window.addEventListener("load", parallax);

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  var btnTarget = el.currentTarget;
  var country = btnTarget.dataset.country;

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  document.querySelector("#" + country).classList.add("active");

  btnTarget.classList.add("active");
}

const spon = document.querySelector(".sponsors");

// setInterval(() => {
//   spon.scrollLeft += 140;
//   console.log("scrolled");
// }, 1000)

/**
 * Scriitor
 * Istoric
 * Istoric
 * Sculptor
 * Pictor
 */