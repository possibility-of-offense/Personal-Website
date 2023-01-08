// Helpers
import { doScrolling } from "./helpers.js";
import "./observer.js";

// Selectors
const body = document.querySelector("body");
const menuIcon = document.querySelector(".navigation-menu");
const menu = document.querySelector(".menu");
const scrollToTop = document.querySelector(".scroll-to-top");
const scrollToSecondView = document.querySelector(".scroll-to-second-view");
const modal = document.querySelector(".modal");

// State
let timer;

// Disable links on icons in the Qualifications section
document.querySelectorAll("#qualifications a").forEach((link) => {
  link.addEventListener("click", (e) => e.preventDefault());
});

// end Disable links on icons in the Qualifications section

// Menu toggling
menuIcon.addEventListener("click", (e) => {
  const menuTl = gsap.timeline();

  menuTl.to(menu, {
    x: 0,
  });

  menuTl.to(
    ".menu li",
    {
      opacity: 1,
      x: 0,
      stagger: {
        amount: 1,
      },
    },
    "-=.4"
  );

  menu.classList.add("showed-menu");
});

document.body.addEventListener("click", (e) => {
  if (menu.classList.contains("showed-menu")) {
    const menuTl = gsap.timeline();

    if (
      !e.target.classList.contains("menu") &&
      !e.target.classList.contains("navigation-menu") &&
      !e.target.classList.contains("navigation__icon") &&
      !e.target.classList.contains("menu-list") &&
      !e.target.classList.contains("menu-list__item") &&
      !e.target.classList.contains("close-menu")
    ) {
      menuTl.to(menu, {
        x: "100%",
      });

      menuTl.to(".menu li", {
        opacity: 0,
        x: "100%",
      });
    }
  }
});

// end Menu Toggling

// Menu Item Click
menu.addEventListener("click", (e) => {
  clearTimeout(timer);
  const { target } = e;
  const menuTl = gsap.timeline();

  if (target.nodeName === "LI") {
    const getId = target.dataset.id;

    doScrolling(getId, 1500);
    timer = setTimeout(() => {
      menuTl.to(menu, {
        x: "100%",
      });

      menuTl.to(".menu li", {
        opacity: 0,
        x: "100%",
      });
    }, 150);
  } else if (target.classList.contains("close-menu")) {
    menuTl.to(menu, {
      x: "100%",
    });

    menuTl.to(".menu li", {
      opacity: 0,
      x: "100%",
    });
  }
});
// end Menu Item Click

// Scroll to Top
scrollToTop.addEventListener("click", (e) => {
  doScrolling("welcome", 1200);
});

// end Scroll to Top

let tl = gsap.timeline();

// Initial Loading
tl.to("#welcome h3", {
  opacity: 1,
  y: 0,
  duration: 1.4,
  delay: 0.4,
  ease: "power2.out",
});

tl.to(
  "#welcome h1 span:first-of-type",
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power1.out",
  },
  "-=.5"
);

tl.to(
  "#welcome h1 span:nth-of-type(2)",
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power1.out",
  },
  "-=.5"
);

tl.to(
  ".top-to-bottom-lines div",
  {
    opacity: 1,
    height: "100%",
    ease: "power3.out",
    stagger: {
      amount: 1,
    },
  },
  "-=.4"
);

tl.to(
  "#welcome img",
  {
    borderRadius: "10%",
    opacity: 1,
    duration: 1.2,
  },
  "-=.4"
);

tl.to(
  ".scroll-to-second-view",
  {
    x: 0,
  },
  "-=.8"
);

tl.to(".navigation-menu", {
  opacity: 1,
});

gsap.to(".box", 1, {
  scale: 0.1,
  y: 60,
  yoyo: true,
  ease: "power1.inOut",
  delay: 1,
  stagger: {
    amount: 1.5,
    grid: "auto",
    from: "center",
  },
});

// end Initial Loading

// Hover on qualifications divs
document
  .querySelectorAll(
    ".qualifications__grid .qualifications__technologies .technologies div"
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      const tl = gsap.timeline();

      tl.to(el.querySelectorAll("li"), {
        opacity: 1,
        x: 0,
        stagger: {
          amount: 1,
        },
      });
    });
  });

// end Hover on qualifications divs

// Hover/Leave on certificates divs
document.querySelectorAll(".certificates__grid--list > div").forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    gsap.to(el.querySelector(".banner"), {
      opacity: 1,
      x: 0,
    });
  });
});
document.querySelectorAll(".certificates__grid--list > div").forEach((el) => {
  el.addEventListener("mouseleave", (e) => {
    gsap.to(el.querySelector(".banner"), {
      opacity: 0,
      x: "-100%",
    });
  });
});

// end Hover on certificates divs

// Click on open button
document.querySelectorAll(".banner button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    gsap.to(".modal", {
      opacity: 1,
      pointerEvents: "all",
    });

    const parent = e.target.closest(".banner").parentElement;
    const image = parent.querySelector(".image img");

    modal.querySelector(
      ".modal-content"
    ).innerHTML = `<img src="${image.src}" />`;
  });
});

// end Click on open button

// Click on overlay
document.querySelector(".modal").addEventListener("click", (e) => {
  const { target } = e;

  if (
    target.classList.contains("overlay") ||
    target.classList.contains("modal")
  ) {
    modal.style.opacity = 0;
    modal.style.pointerEvents = "none";

    modal.querySelector(".modal-content").innerHTML = "";
  }
});

// end Click on overlay

// Scroll to second view functionality
scrollToSecondView.addEventListener("click", (e) => {
  body.style.overflowY = "scroll";

  doScrolling("qualifications", 1300);
});

// Hover over the projects div
document.querySelectorAll(".projects__grid--list > div").forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    const { target } = e;

    gsap.to(target.querySelector("div"), {
      height: 200,
      opacity: 1,
      zIndex: 10,
    });
  });
});

// Mouse leave on the project div
document.querySelectorAll(".projects__grid--list > div").forEach((el) => {
  el.addEventListener("mouseleave", (e) => {
    const { target } = e;

    gsap.to(target.querySelector("div"), {
      height: "auto",
      opacity: 0,
      zIndex: 0,
    });
  });
});
