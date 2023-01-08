// Sections

const welcome = document.querySelector("#welcome");
const qualifications = document.querySelector("#qualifications");
const experience = document.querySelector("#experience");
const certificates = document.querySelector("#certificates");
const projects = document.querySelector("#projects");
const projectsBottomSquares = document.querySelector(
  "#projects .project-squares--bottom"
);
const contact = document.querySelector("#contact");

// Observer

const options = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const initialTl = gsap.timeline();
    initialTl.to(".scroll-to-top", {
      opacity: 1,
      y: 0,
    });

    document.body.style.overflow = "auto";

    if (entry.target.id === "qualifications") {
      const tl = gsap.timeline();

      tl.to(".qualifications__grid .qualifications__years", {
        opacity: 1,
      });
      tl.to(".qualifications__grid .qualifications__technologies .heading", {
        x: 0,
        opacity: 1,
      });
      tl.to(
        ".qualifications__grid .qualifications__technologies .technologies > div",
        {
          y: 0,
          opacity: 1,
          stagger: {
            amount: 1,
          },
        }
      );
      tl.to(".scroll-to-top", {
        opacity: 1,
        y: 0,
      });
    } else if (entry.target.id === "experience") {
      const tl = gsap.timeline();

      tl.to(".experience__heading h2", {
        x: 0,
        opacity: 1,
      });
      tl.to(".experience__grid--list > div:first-child", {
        x: 0,
        opacity: 1,
      });
      tl.to(".experience__grid--list > div:last-child", {
        x: 0,
        opacity: 1,
      });
    } else if (entry.target.id === "certificates") {
      const tl = gsap.timeline();

      tl.to(".certificates__heading h2", { opacity: 1 });

      tl.to("#certificates .left-panel > div", {
        opacity: 1,
        stagger: { amount: 2 },
      });

      tl.to(
        ".certificates__grid--list > div",
        {
          opacity: 1,
          y: 0,
          stagger: {
            amount: 1,
          },
        },
        "-=2"
      );

      document
        .querySelector(".certificates__heading")
        .classList.add("anim-lines");
    } else if (entry.target.id === "projects") {
      const tl = gsap.timeline();

      tl.to(".projects__heading h2", { opacity: 1 });
      tl.to(".projects__grid--list > div", {
        x: 0,
        opacity: 1,
        stagger: {
          amount: 2,
        },
      });

      gsap.to(".project-squares--top div", {
        x: 0,
        opacity: 1,
        stagger: {
          amount: 2,
        },
      });
    } else if (entry.target.classList.contains("project-squares--bottom")) {
      gsap.to(".scroll-to-top", {
        opacity: 1,
        y: 0,
      });
      gsap.to(".project-squares--bottom div", {
        x: 0,
        opacity: 1,
        stagger: {
          amount: 2,
        },
      });
    } else if (entry.target.id === "contact") {
      const tl = gsap.timeline();

      tl.to(".contact__heading h2", {
        opacity: 1,
        y: 0,
        delay: 0.4,
      });

      tl.to(".contact__grid--list-contacts > div", {
        opacity: 1,
        x: 0,
        width: 300,
        stagger: {
          amount: 1,
        },
      });
      tl.to(".contact-image", {
        opacity: 1,
        rotate: 0,
        duration: 1.2,
      });
      tl.to("h2.msg", { opacity: 1 });
    }
  });
}, options);

observer.observe(qualifications);
observer.observe(experience);
observer.observe(certificates);
observer.observe(projects);
observer.observe(projectsBottomSquares);
observer.observe(contact);
