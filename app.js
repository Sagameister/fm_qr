let tl = gsap.timeline({ delay: 1 });
tl.from(".card-wrapper", { opacity: 0, duration: 1.5, y: 50 });
tl.from("h1", { y: 30, opacity: 0 }, "<50%");
tl.from("p", { y: 30, opacity: 0 }, "<50%");
