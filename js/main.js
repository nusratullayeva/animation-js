gsap.fromTo('.logo', {
    x: -5400,
    duratation: 1,
    autoAlpha: 0
}, {
    duratation: 1,
    x: 0,
    autoAlpha: 1,
    scale: 1
})

gsap.fromTo('.nav_li', {
    y: -100,
    duratation: 0.6,
    stagger: .2,
    opacity: 0
}, {
    duratation: 0.6,
    delay: 1,
    stagger: .2,
    y: 0,
    opacity: 1
})
gsap.fromTo('h1', {
    duratation: 3,
    scale: 1.4,
    stagger: .2,
    opacity: 0
}, {
    duratation: 3,
    delay: 1.6,
    scale: 1,
    opacity: 1
})
gsap.fromTo('.hero_p', {
    y: 25,
    duratation: 0.3,
    opacity: 0,
    stagger: .1,
}, {
    duratation: 0.2,
    delay: 3.5,
    y: 0,
    opacity: 1,
    stagger: .05,
})


gsap.fromTo('.hero_image', {
    duratation: 1.5,
    opacity: 0,
    scale: 0
}, {
    duratation: 2.5,
    delay: 4,
    opacity: 1,
    scale: 1
})