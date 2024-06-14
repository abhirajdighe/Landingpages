gsap.to("#page2 h1",{
    transform:"translateX(-125%)",
    scrollTrigger:{
        trigger:"#page2",
        scrollor:"body",
        marker:true,
        start:"top 0",
        end:"top -100%",
        scrun:3,
        pin:true
    }
})