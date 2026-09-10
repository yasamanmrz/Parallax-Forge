gsap.registerPlugin(ScrollTrigger);

// ========================================
// HERO ELEMENTS
// ========================================

const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-image");
const heroContent = document.querySelector(".hero-content");
const heroTitle = document.querySelector(".hero-title");
const heroSubtitle = document.querySelector(".hero-subtitle");
const heroOverlay = document.querySelector(".hero-overlay");

// ========================================
// HERO ANIMATION
// ========================================

if ( hero && heroImage && heroContent && heroTitle && heroSubtitle && heroOverlay) {

// ----------------------------------------
// INITIAL STATE
// ----------------------------------------

gsap.set(heroImage, {
scale: 1.12
});

gsap.set(heroTitle, {
y: 100,
opacity: 0
});

gsap.set(heroSubtitle, {
y: 30,
opacity: 0
});

// ----------------------------------------
// PAGE LOAD ANIMATION
// ----------------------------------------

const heroIntro = gsap.timeline({
defaults: {
ease: "power3.out"
}
});

heroIntro
.to(heroImage, {
scale: 1,
duration: 1.8
})

.to(
  heroSubtitle,
  {
    y: 0,
    opacity: 1,
    duration: 0.8
  },
  "-=1"
)

.to(
  heroTitle,
  {
    y: 10,
    opacity: 1,
    duration: 0.9
  },
  "-=0.5"
);

// ----------------------------------------
// SCROLL PARALLAX
// ----------------------------------------

gsap.to(heroImage, {

y: 150,

scale: 1.12,

ease: "none",

scrollTrigger: {
  trigger: hero,

  start: "top top",

  end: "bottom top",

  scrub: 1
}

});

// ----------------------------------------
// CONTENT MOVES FASTER
// ----------------------------------------

gsap.to(heroContent, {

y: -300,

ease: "none",

scrollTrigger: {
  trigger: hero,

  start: "top top",

  end: "bottom top",

  scrub: 1
}

});

// ----------------------------------------
// SUBTITLE FADES FIRST
// ----------------------------------------

gsap.to(heroSubtitle, {

opacity: 0,

y: -100,

ease: "none",

scrollTrigger: {
  trigger: hero,

  start: "top top",

  end: "45% top",

  scrub: 1
}

});

// ----------------------------------------
// TITLE FADES OUT
// ----------------------------------------

gsap.to(heroTitle, {

opacity: 0,

y: -180,

ease: "none",

scrollTrigger: {
  trigger: hero,

  start: "20% top",

  end: "75% top",

  scrub: 1
}

});

// ----------------------------------------
// OVERLAY
// ----------------------------------------

gsap.to(heroOverlay, {

opacity: 0.65,

ease: "none",

scrollTrigger: {
  trigger: hero,

  start: "top top",

  end: "bottom top",

  scrub: 1
}

});

}


gsap.registerPlugin(ScrollTrigger);

// ========================================
// PHILOSOPHY SECTION
// ========================================

const philosophy = document.querySelector(".philosophy-section");
const philosophyLabel = document.querySelector(".philosophy-label");
const philosophyWords = document.querySelectorAll(".philosophy-word");
const philosophyDescription = document.querySelector(".philosophy-description");

if (
philosophy &&
philosophyLabel &&
philosophyWords.length &&
philosophyDescription
) {

// ----------------------------------------
// INITIAL STATE
// ----------------------------------------

gsap.set(philosophyLabel, {
x: -80,
opacity: 0
});

gsap.set(philosophyWords, {
y: 80,
opacity: 0
});

gsap.set(philosophyDescription, {
y: 40,
opacity: 0
});

// ----------------------------------------
// SCROLL ANIMATION
// ----------------------------------------

const philosophyTimeline = gsap.timeline({

scrollTrigger: {
  trigger: philosophy,
  start: "top 75%",
  toggleActions: "play none none reverse"
}

});

philosophyTimeline

// Label
.to(philosophyLabel, {
  x: 0,
  opacity: 1,
  duration: 0.8,
  ease: "power3.out"
})

// Words
.to(
  philosophyWords,
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out"
  },
  "-=0.35"
)

// Description
.to(
  philosophyDescription,
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out"
  },
  "-=0.45"
);

}


gsap.registerPlugin(ScrollTrigger);

// ========================================
// CRAFTSMANSHIP IMAGE REVEAL
// ========================================

const craftsmanship = document.querySelector(".craftsmanship-section");
const wrapper = document.querySelector(".craftsmanship-wrapper");
const imageOne = document.querySelector(".image-one");
const imageTwo = document.querySelector(".image-two");
const centerText = document.querySelector(".craft-center-text");
const sideTitle = document.querySelector(".craft-side-title");
const sideDescription = document.querySelector(".craft-side-description");
const sideButton = document.querySelector(".craft-side-button");


if (
craftsmanship &&
wrapper &&
imageOne &&
imageTwo &&
centerText &&
sideTitle && sideDescription && sideButton
) {

// ----------------------------------------
// INITIAL STATE
// ----------------------------------------

gsap.set(imageTwo, {
clipPath: "inset(0 100% 0 0)"
});

gsap.set(sideTitle, {
y: 80,
opacity: 0
});

// ----------------------------------------
// PIN + REVEAL
// ----------------------------------------

gsap.set(sideDescription, {
    y: 40,
    opacity: 0
  });
  
  gsap.set(sideButton, {
    y: 30,
    opacity: 0
  });

  const craftTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: craftsmanship,
      start: "top top",
      end: "+=180%",
      scrub: 1,
      pin: wrapper,
      anticipatePin: 1
    }
  });
  
  // ----------------------------------------
  // FIRST TEXT MOVES UP
  // ----------------------------------------
  
  craftTimeline.to(centerText, {
    y: -150,
    opacity: 0,
    duration: 0.25,
    ease: "none"
  });
  
  // ----------------------------------------
  // SECOND IMAGE REVEALS FROM LEFT
  // ----------------------------------------
  
  craftTimeline.to(imageTwo, {
    clipPath: "inset(0 0% 0 0%)",
    duration: 0.7,
    ease: "none"
  });
  
  // ----------------------------------------
  // SECOND TITLE
  // ----------------------------------------
  
  craftTimeline.to(sideTitle, {
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: "power2.out"
  });
  
  // ----------------------------------------
  // DESCRIPTION
  // ----------------------------------------
  
  craftTimeline.to(sideDescription, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out"
  });
  
  // ----------------------------------------
  // BUTTON
  // ----------------------------------------
  
  craftTimeline.to(sideButton, {
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: "power2.out"
  });
}



gsap.registerPlugin(ScrollTrigger);


// ========================================
// APPROACH SLIDER
// ========================================

const approachSection = document.querySelector(".approach-slider");
const approachWrapper = document.querySelector(".approach-wrapper");

const approachSlides = document.querySelectorAll(".approach-slide");

const approachBackgrounds = document.querySelectorAll(".approach-bg");

const approachProgress = document.querySelector(".approach-progress-current");


if (
  approachSection &&
  approachWrapper &&
  approachSlides.length === 3 &&
  approachBackgrounds.length === 3
) {


  // ======================================
  // INITIAL STATES
  // ======================================

  gsap.set(approachSlides, {
    opacity: 0
  });

  gsap.set(approachSlides[0], {
    opacity: 1
  });


  gsap.set(approachSlides[0].querySelector(".approach-image"), {
    scale: 1
  });


  gsap.set(
    approachSlides[0].querySelector(".approach-content"),
    {
      x: 0,
      opacity: 1
    }
  );


  // ======================================
  // CREATE TIMELINE
  // ======================================

  const approachTimeline = gsap.timeline({

    scrollTrigger: {

      trigger: approachSection,

      start: "top top",

      end: "+=300%",

      scrub: 1,

      pin: approachWrapper,

      anticipatePin: 1

    }

  });


  // ======================================
  // SLIDE 01
  // ======================================

  approachTimeline.to(
    {},
    {
      duration: 1
    }
  );


  // ======================================
  // SLIDE 01 EXIT
  // ======================================

  approachTimeline.to(
    approachSlides[0].querySelector(".approach-content"),
    {
      y: -150,
      opacity: 0,
      duration: 0.7,
      ease: "power2.in"
    }
  );


  approachTimeline.to(
    approachSlides[0].querySelector(".approach-image"),
    {
      scale: 1.08,
      opacity: 0,
      duration: 0.7,
      ease: "power2.inOut"
    },
    "<"
  );


  // ======================================
  // BACKGROUND 01 -> 02
  // ======================================

  approachTimeline.to(
    approachBackgrounds[0],
    {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    },
    "<"
  );


  approachTimeline.to(
    approachBackgrounds[1],
    {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut"
    },
    "<"
  );


  // ======================================
  // SLIDE 02 ENTER
  // ======================================

  gsap.set(
    approachSlides[1].querySelector(".approach-content"),
    {
      y: 150,
      opacity: 0
    }
  );


  gsap.set(
    approachSlides[1].querySelector(".approach-image"),
    {
      scale: 1.08,
      opacity: 0
    }
  );


  approachTimeline.to(
    approachSlides[1],
    {
      opacity: 1,
      duration: 0.01
    }
  );


  approachTimeline.to(
    approachSlides[1].querySelector(".approach-image"),
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }
  );


  approachTimeline.to(
    approachSlides[1].querySelector(".approach-content"),
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    },
    "<0.15"
  );


  // ======================================
  // SLIDE 02 HOLD
  // ======================================

  approachTimeline.to(
    {},
    {
      duration: 1
    }
  );


  // ======================================
  // SLIDE 02 EXIT
  // ======================================

  approachTimeline.to(
    approachSlides[1].querySelector(".approach-content"),
    {
      y: -150,
      opacity: 0,
      duration: 0.7,
      ease: "power2.in"
    }
  );


  approachTimeline.to(
    approachSlides[1].querySelector(".approach-image"),
    {
      scale: 1.08,
      opacity: 0,
      duration: 0.7,
      ease: "power2.inOut"
    },
    "<"
  );


  // ======================================
  // BACKGROUND 02 -> 03
  // ======================================

  approachTimeline.to(
    approachBackgrounds[1],
    {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    },
    "<"
  );


  approachTimeline.to(
    approachBackgrounds[2],
    {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut"
    },
    "<"
  );


  // ======================================
  // SLIDE 03 ENTER
  // ======================================

  gsap.set(
    approachSlides[2].querySelector(".approach-content"),
    {
      y: 150,
      opacity: 0
    }
  );


  gsap.set(
    approachSlides[2].querySelector(".approach-image"),
    {
      scale: 1.08,
      opacity: 0
    }
  );


  approachTimeline.to(
    approachSlides[2],
    {
      opacity: 1,
      duration: 0.01
    }
  );


  approachTimeline.to(
    approachSlides[2].querySelector(".approach-image"),
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }
  );


  approachTimeline.to(
    approachSlides[2].querySelector(".approach-content"),
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    },
    "<0.15"
  );


  // ======================================
  // PROGRESS NUMBER
  // ======================================

  approachTimeline.to(
    approachProgress,
    {
      textContent: "02",
      duration: 0.01
    },
    1.8
  );


  approachTimeline.to(
    approachProgress,
    {
      textContent: "03",
      duration: 0.01
    },
    4
  );

}

gsap.registerPlugin(ScrollTrigger);


// ========================================
// SERVICES SECTION
// ========================================

const servicesSection = document.querySelector(".services-section");
const servicesWords = document.querySelectorAll(".services-word");
const servicesDescription = document.querySelector(".services-description");
const servicesButton = document.querySelector(".services-button");
const servicesImage = document.querySelector(".services-image");


if (
  servicesSection &&
  servicesWords.length &&
  servicesDescription &&
  servicesButton &&
  servicesImage
) {


  // ======================================
  // INITIAL STATE
  // ======================================

  // Words start gray
  gsap.set(servicesWords, {
    color: "rgba(255,255,255,0.28)"
  });


  // Description
  gsap.set(servicesDescription, {
    y: 40,
    opacity: 0
  });


  // Button
  gsap.set(servicesButton, {
    y: 30,
    opacity: 0
  });


  // Image
  gsap.set(servicesImage, {
    scale: 1.15,
    y: 60,
    opacity: 0.6
  });


  // ======================================
  // SCROLL TIMELINE
  // ======================================

  const servicesTimeline = gsap.timeline({

    scrollTrigger: {

      trigger: servicesSection,

      start: "top 70%",

      end: "bottom 40%",

      scrub: 1

    }

  });


  // ======================================
  // WORD BY WORD
  // ======================================

  servicesTimeline.to(
    servicesWords,
    {
      color: "#ffffff",
      stagger: 0.15,
      duration: 0.6,
      ease: "none"
    }
  );


  // ======================================
  // DESCRIPTION
  // ======================================

  servicesTimeline.to(
    servicesDescription,
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    },
    "-=0.35"
  );


  // ======================================
  // BUTTON
  // ======================================

  servicesTimeline.to(
    servicesButton,
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out"
    },
    "-=0.35"
  );


  // ======================================
  // IMAGE
  // ======================================

  servicesTimeline.to(
    servicesImage,
    {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    },
    "-=1"
  );

}


// ========================================
// SERVICES SHOWCASE - VERTICAL SLIDES
// ========================================

gsap.registerPlugin(ScrollTrigger);

const servicesShowcase =
  document.querySelector(".services-showcase");

const servicesWrapper =
  document.querySelector(".services-showcase-wrapper");

const serviceInfoSlides =
  document.querySelectorAll(".service-info-slide");

const serviceImageSlides =
  document.querySelectorAll(".service-image-slide");

const servicesCurrent =
  document.querySelector(".services-current");


if (
  servicesShowcase &&
  servicesWrapper &&
  serviceInfoSlides.length === 6 &&
  serviceImageSlides.length === 6
) {


  // ======================================
  // INITIAL STATE - TEXT
  // ======================================

  // همه متن‌ها مخفی
  gsap.set(serviceInfoSlides, {
    yPercent: 0,
    opacity: 0
  });


  // اسلاید اول متن
  gsap.set(serviceInfoSlides[0], {
    yPercent: 0,
    opacity: 1
  });


  // ======================================
  // INITIAL STATE - IMAGES
  // ======================================

  // همه عکس‌ها پایین صفحه
  gsap.set(serviceImageSlides, {
    yPercent: 100
  });


  // عکس اول
  gsap.set(serviceImageSlides[0], {
    yPercent: 0
  });


  // ======================================
  // MAIN TIMELINE
  // ======================================

  const servicesTimeline = gsap.timeline({

    scrollTrigger: {

      trigger: servicesShowcase,

      start: "top top",

      // مقدار زیادتر = حرکت آرام‌تر
      end: "+=600%",

      scrub: 1.5,

      pin: servicesWrapper,

      anticipatePin: 1,

      invalidateOnRefresh: true
    }

  });


  // ======================================
  // SLIDE 01 → 02
  // ======================================

  servicesTimeline.to({}, {
    duration: 0.7
  });


  // TEXT 01 → OUT
  servicesTimeline.to(
    serviceInfoSlides[0],
    {
      yPercent: -35,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }
  );


  // TEXT 02 → IN
  servicesTimeline.fromTo(
    serviceInfoSlides[1],
    {
      yPercent: 35,
      opacity: 0
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    },
    "<"
  );


  // IMAGE 02 → FROM BOTTOM
  servicesTimeline.to(
    serviceImageSlides[1],
    {
      yPercent: 0,
      duration: 1.5,
      ease: "none"
    },
    "<"
  );


  // مخفی کردن عکس قبلی
  servicesTimeline.set(
    serviceImageSlides[0],
    {
      visibility: "hidden"
    }
  );


  // ======================================
  // SLIDE 02 → 03
  // ======================================

  servicesTimeline.to({}, {
    duration: 0.7
  });


  // TEXT 02 → OUT
  servicesTimeline.to(
    serviceInfoSlides[1],
    {
      yPercent: -35,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }
  );


  // TEXT 03 → IN
  servicesTimeline.fromTo(
    serviceInfoSlides[2],
    {
      yPercent: 35,
      opacity: 0
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    },
    "<"
  );


  // IMAGE 03 → FROM BOTTOM
  servicesTimeline.to(
    serviceImageSlides[2],
    {
      yPercent: 0,
      duration: 1.5,
      ease: "none"
    },
    "<"
  );


  servicesTimeline.set(
    serviceImageSlides[1],
    {
      visibility: "hidden"
    }
  );


  // ======================================
  // SLIDE 03 → 04
  // ======================================

  servicesTimeline.to({}, {
    duration: 0.7
  });


  // TEXT 03 → OUT
  servicesTimeline.to(
    serviceInfoSlides[2],
    {
      yPercent: -35,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }
  );


  // TEXT 04 → IN
  servicesTimeline.fromTo(
    serviceInfoSlides[3],
    {
      yPercent: 35,
      opacity: 0
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    },
    "<"
  );


  // IMAGE 04 → FROM BOTTOM
  servicesTimeline.to(
    serviceImageSlides[3],
    {
      yPercent: 0,
      duration: 1.5,
      ease: "none"
    },
    "<"
  );


  servicesTimeline.set(
    serviceImageSlides[2],
    {
      visibility: "hidden"
    }
  );


  // ======================================
  // SLIDE 04 → 05
  // ======================================

  servicesTimeline.to({}, {
    duration: 0.7
  });


  // TEXT 04 → OUT
  servicesTimeline.to(
    serviceInfoSlides[3],
    {
      yPercent: -35,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }
  );


  // TEXT 05 → IN
  servicesTimeline.fromTo(
    serviceInfoSlides[4],
    {
      yPercent: 35,
      opacity: 0
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    },
    "<"
  );


  // IMAGE 05 → FROM BOTTOM
  servicesTimeline.to(
    serviceImageSlides[4],
    {
      yPercent: 0,
      duration: 1.5,
      ease: "none"
    },
    "<"
  );


  servicesTimeline.set(
    serviceImageSlides[3],
    {
      visibility: "hidden"
    }
  );


  // ======================================
  // SLIDE 05 → 06
  // ======================================

  servicesTimeline.to({}, {
    duration: 0.7
  });


  // TEXT 05 → OUT
  servicesTimeline.to(
    serviceInfoSlides[4],
    {
      yPercent: -35,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }
  );


  // TEXT 06 → IN
  servicesTimeline.fromTo(
    serviceInfoSlides[5],
    {
      yPercent: 35,
      opacity: 0
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    },
    "<"
  );


  // IMAGE 06 → FROM BOTTOM
  servicesTimeline.to(
    serviceImageSlides[5],
    {
      yPercent: 0,
      duration: 1.5,
      ease: "none"
    },
    "<"
  );


  servicesTimeline.set(
    serviceImageSlides[4],
    {
      visibility: "hidden"
    }
  );


  // ======================================
  // NUMBER
  // ======================================

  servicesTimeline.to(
    servicesCurrent,
    {
      textContent: "02",
      duration: 0.01
    },
    1.5
  );


  servicesTimeline.to(
    servicesCurrent,
    {
      textContent: "03",
      duration: 0.01
    },
    4
  );


  servicesTimeline.to(
    servicesCurrent,
    {
      textContent: "04",
      duration: 0.01
    },
    6.5
  );


  servicesTimeline.to(
    servicesCurrent,
    {
      textContent: "05",
      duration: 0.01
    },
    9
  );


  servicesTimeline.to(
    servicesCurrent,
    {
      textContent: "06",
      duration: 0.01
    },
    11.5
  );

}


// ========================================
// FINAL SECTION TEST
// ========================================

gsap.registerPlugin(ScrollTrigger);

const finalSection = document.querySelector(".final-section");
const finalWrapper = document.querySelector(".final-wrapper");

const leftCar = document.querySelector(".final-image-left");
const centerCar = document.querySelector(".final-image-center");
const rightCar = document.querySelector(".final-image-right");

if (
  finalSection &&
  finalWrapper &&
  leftCar &&
  centerCar &&
  rightCar
) {

  // ماشین‌ها پایین صفحه شروع می‌شوند
  gsap.set(leftCar, {
    yPercent: 110
  });

  gsap.set(centerCar, {
    yPercent: 110
  });

  gsap.set(rightCar, {
    yPercent: 110
  });


  const testTimeline = gsap.timeline({

    scrollTrigger: {

      trigger: finalSection,

      start: "top top",

      end: "+=500%",

      scrub: 1,

      pin: finalWrapper,

      anticipatePin: 1

    }

  });


  // ماشین چپ
  testTimeline.to(leftCar, {
    yPercent: -150,
    duration: 2,
    ease: "none"
  });


  // ماشین راست
  testTimeline.to(
    rightCar,
    {
      yPercent: -150,
      duration: 2,
      ease: "none"
    },
    "<"
  );


  // ماشین وسط
  testTimeline.to(
    centerCar,
    {
      yPercent: -150,
      duration: 2.5,
      ease: "none"
    },
    "<0.1"
  );

}