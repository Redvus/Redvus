// Animation logo on first page
const redvus_logo_v_pencil = document.getElementById('redvus_logo_v_pencil'),
    redvus_logo_line_v = document.getElementById('redvus_logo_line_v'),
    redvus_logo_r = document.getElementById('redvus_logo_r'),
    redvus_logo_e_up = document.getElementById('redvus_logo_e_up'),
    redvus_logo_e_middle = document.getElementById('redvus_logo_e_middle'),
    redvus_logo_e_down = document.getElementById('redvus_logo_e_down'),
    redvus_logo_d = document.getElementById('redvus_logo_d'),
    redvus_logo_u_end = document.getElementById('redvus_logo_u_end'),
    redvus_logo_s_end = document.getElementById('redvus_logo_s_end'),
    redvus_logo_studio = document.querySelectorAll('#redvus_logo_studio > path'),
    redvus_logo = document.getElementById('redvus_logo'),
    redvus_shutter_left = document.querySelector('.shutter-left'),
    redvus_shutter_right = document.querySelector('.shutter-right'),
    redvus_menu = document.getElementById('menu'),
    redvus_menu_v = document.getElementById('menu_v'),
    redvus_menu_left = document.getElementById('menu_left_line'),
    redvus_menu_right = document.getElementById('menu_right_line'),
    redvus_menu_up = document.getElementById('menu_up_line'),
    redvus_menu_down = document.getElementById('menu_down_line'),
    redvus_menu_cross = document.getElementById('menu_cross'),
    redvusWrapperContent = document.querySelector('.section-container'),
    redvusMenuLi = document.querySelectorAll('#nav > ul > li'),
    redvusAdressLi = document.querySelectorAll('.shutter-right__adress li'),
    redvusNavSection = document.getElementById('nav')
;

function redvusLogoStart() {

    let tlLogo = new gsap.timeline({
        // delay: 0.3
    });

    tlLogo
        .from(redvus_logo_v_pencil, {
            duration: 0.6,
            x: "-500%",
            autoAlpha: 0,
            ease: "power1.inOut"
        })
        .from(redvus_logo_line_v, {
            duration: 0.6,
            delay: "-0.6",
            x: "-500%",
            autoAlpha: 0,
            ease: "power1.inOut"
        })
        .from(redvus_logo_d, {
            duration: 0.4,
            delay: "-0.3",
            x: "-300%",
            autoAlpha: 0,
            ease: "back.inOut"
        })
        .from(redvus_logo_r, {
            duration: 0.4,
            delay: "-0.3",
            x: "-200%",
            autoAlpha: 0,
            ease: "back.inOut"
        })
        .from(redvus_logo_e_down, {
            duration: 0.3,
            delay: "-0.1",
            scaleX: '0%',
            autoAlpha: 0,
            ease: "power2.inOut"
        })
        .from([redvus_logo_e_middle, redvus_logo_e_up], {
            duration: 0.3,
            delay: "-0.2",
            stagger: 0.1,
            y: "-200%",
            autoAlpha: 0,
            ease: "back.inOut"
        })
        .from([redvus_logo_u_end, redvus_logo_s_end], {
            duration: 0.3,
            delay: "-0.4",
            y: "-200%",
            stagger: 0.1,
            autoAlpha: 0,
            ease: "back.inOut"
        })
        .from(redvus_logo_studio, {
            duration: 0.2,
            delay: "-0.1",
            y: 100,
            stagger: 0.05,
            ease: "back.inOut"
        })
    ;
    return tlLogo;
}

function redvusMenuStart() {
    let tlMenu = new gsap.timeline();

    tlMenu
        .set(redvus_menu_cross, {
            scale: 0,
            transformOrigin: '50% 50%',
            autoAlpha: 0
        })
        .from([redvus_menu_left, redvus_menu_right], {
            duration: 0.8,
            delay: "-0.2",
            autoAlpha: 0,
            y: "100%",
            stagger: 0.2,
            ease: "circ.inOut"
        })
        .from(redvus_menu_v, {
            duration: 0.8,
            delay: "-0.5",
            autoAlpha: 0,
            y: "-100%",
            ease: "back.inOut"
        })
    ;
    return tlMenu;
}

/*============================
=            Menu            =
============================*/

function redvusMenuOpen() {

    let tlMenuOpen = new gsap.timeline({
        reversed: true
    });

    tlMenuOpen
        // .set(redvus_shutter_right, {
        //     backgroundColor: "#201011"
        // })
        .to(redvus_shutter_right, {
            duration: 0.8,
            delay: "-0.2",
            width: '50%',
            backgroundColor: '#071a23',
            ease: "power3.inOut"
        })
        .to(redvus_shutter_left, {
            duration: 0.8,
            delay: "-0.8",
            width: '50%',
            backgroundColor: '#092330',
            ease: "power3.inOut"
        })
        .from(redvusNavSection, {
            duration: 0.4,
            delay: "-0.4",
            autoAlpha: 0,
            ease: "power1.inOut"
        })
        .to(redvusWrapperContent, {
            duration: 0.8,
            delay: "-0.8",
            autoAlpha: 0,
            ease: "power2.inOut"
        })
        .to(redvus_menu, {
            duration: 0.8,
            delay: "-0.8",
            x: '-50%',
            left: 0,
            rotation: '-405',
            ease: "back.inOut"
        })
        .to([redvus_menu_left, redvus_menu_right], {
            duration: 0.6,
            delay: "-0.6",
            ease: "power1.inOut"
        })
        .to(redvus_menu_v, {
            duration: 0.6,
            delay: "-0.6",
            y: '-100',
            autoAlpha: 0,
            ease: "power1.inOut"
        })
        .to(redvus_menu_up, {
            duration: 0.6,
            delay: "-0.6",
            autoAlpha: 1,
            // stroke: '#fff',
            ease: "power1.inOut"
        })
        .to(redvus_menu_down, {
            duration: 0.6,
            delay: "-0.6",
            autoAlpha: 1,
            // stroke: '#fff',
            ease: "power1.inOut"
        })
        .to(redvus_menu_cross, {
            duration: 0.6,
            delay: "-0.6",
            scale: 1,
            autoAlpha: 1,
            // stroke: '#fff',
            ease: "power1.inOut"
        })
        .from(redvusMenuLi, {
            duration: 0.6,
            delay: "-0.4",
            stagger: 0.07,
            x: "30%",
            autoAlpha: 0,
            ease: "back.inOut"
        })
        // .from(redvusAdressLi, {
        //     duration: 0.6,
        //     delay: "-0.4",
        //     stagger: 0.07,
        //     xPercent: "50%",
        //     autoAlpha: 0,
        //     ease: "back.inOut"
        // })
    // .to(redvus_logo, 1.3, {
    //     scale: '0.4',
    //     ease: Back.easeOut
    // }, '-=1.3')
    ;

    /*jshint -W030 */
    redvus_menu.addEventListener("click", () => {
        tlMenuOpen.reversed() ? tlMenuOpen.restart() : tlMenuOpen.reverse();
    });

    return tlMenuOpen;
}

// redvus_menu.onmouseover = function () {
//     gsap.to(this, {
//         duration: 0.4,
//         scale: 1.1,
//         ease: Elastic.easeOut.config(0.9, 0.4)
//     });
// }, redvus_menu.onmouseleave = function () {
//     gsap.to(this, {
//         duration: 0.2,
//         scale: 1
//     });
// };

/*=====  End of Menu  ======*/

/*======================================
=            Load in Mobile            =
======================================*/

function redvusLogoStartMobile() {

    var tl = new TimelineMax({
        onComplete: redvusFirstSlogan()
    });

    tl
        .set(redvus_menu_cross, {
            scale: 0,
            transformOrigin: '50% 50%',
            autoAlpha: 0
        })
        .to(redvus_logo, 0.3, {
            autoAlpha: 1,
            ease: Power0.easeIn
        }, '-=0.6')
        .from(redvus_logo_v_pencil, 0.6, {
            x: -500,
            ease: Power1.easeOut
        })
        .from(redvus_logo_line_v, 0.6, {
            x: -500,
            ease: Power1.easeOut
        }, '-=0.6')
        .from(redvus_logo_d, 0.4, {
            x: -300,
            ease: Circ.easeOut
        }, '-=0.2')
        .from(redvus_logo_r, 0.4, {
            x: -200,
            ease: Back.easeOut
        })
        .from(redvus_logo_e_down, 0.3, {
            scaleX: '0%',
            ease: Power2.easeOut
        })
        .from(redvus_logo_e_middle, 0.3, {
            y: -200,
            ease: Back.easeOut
        }, '-=0.2')
        .from(redvus_logo_e_up, 0.3, {
            y: -200,
            ease: Back.easeOut
        }, '-=0.2')
        .from(redvus_logo_u_end, 0.3, {
            y: -200,
            ease: Back.easeOut
        })
        .from(redvus_logo_s_end, 0.45, {
            y: -200,
            ease: Back.easeOut
        }, '-=0.2')
        .staggerFrom([redvus_logo_studio_s, redvus_logo_studio_t, redvus_logo_studio_u, redvus_logo_studio_d, redvus_logo_studio_i, redvus_logo_studio_o], 0.2, {
            y: 100,
            ease: Back.easeOut
        }, 0.1)
        .to(redvus_logo, 1, {
            scale: '0.4',
            ease: Power3.easeOut
        })
        .to(redvus_shutter_left, 2, {
            height: '60px',
            // backgroundColor: "transparent",
            ease: Power3.easeOut
        }, '-=1')
        .to(redvus_shutter_right, 2, {
            height: '60px',
            // backgroundColor: "transparent",
            ease: Power3.easeOut
        }, '-=2')
        .to(redvus_menu, 0.5, {
            autoAlpha: 1,
            ease: Power0.easeIn
        }, '-=1')
        .from(redvus_menu_left, 0.8, {
            y: 100,
            ease: Power1.easeOut
        }, '-=1')
        .from(redvus_menu_right, 0.8, {
            y: 100,
            ease: Power1.easeOut
        }, '-=0.5')
        .from(redvus_menu_v, 0.8, {
            y: -100,
            ease: Back.easeOut
        }, '-=0.7')
    // .set([redvus_shutter_left, redvus_shutter_right], {
    //     backgroundColor: "transparent"
    // })
    ;

    return tl;
}

function redvusMenuOpenMobile() {

    var redvusMenuLi = document.querySelectorAll('.cd-navigation li'),
        redvusAdressLi = document.querySelectorAll('.shutter-right__adress li');

    var tl = new TimelineMax({
        paused: true,
        reversed: true
    });

    tl
        // .set(redvus_shutter_right, {
        //     backgroundColor: "#201011"
        // })
        .to(redvus_shutter_right, 0.8, {
            height: '70%',
            backgroundColor: '#201011',
            ease: Power3.easeInOut
        })
        .to(redvus_shutter_left, 0.8, {
            height: '30%',
            ease: Power3.easeInOut
        }, '-=0.8')
        .to(redvusWrapperContent, 0.8, {
            bottom: '25%',
            autoAlpha: 0,
            ease: Power2.easeInOut
        }, '-=0.8')
        .to(redvus_menu, 0.8, {
            y: '-50%',
            top: 0,
            rotation: '-405',
            ease: Back.easeInOut
        }, '-=0.8')
        .to([redvus_menu_left, redvus_menu_right], 0.6, {
            // stroke: '#fff',
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_v, 0.6, {
            y: '-100',
            autoAlpha: 0,
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_up, 0.6, {
            autoAlpha: 1,
            // stroke: '#fff',
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_down, 0.6, {
            autoAlpha: 1,
            // stroke: '#fff',
            ease: Power1.easeOut
        }, '-=0.6')
        .to(redvus_menu_cross, 0.6, {
            scale: 1,
            autoAlpha: 1,
            // stroke: '#fff',
            ease: Power1.easeOut
        }, '-=0.6')
        .staggerFrom(redvusMenuLi, 0.6, {
            yPercent: "50%",
            autoAlpha: 0,
            ease: Back.easeOut
        }, "0.1")
        .staggerFrom(redvusAdressLi, 0.6, {
            yPercent: "50%",
            autoAlpha: 0,
            ease: Back.easeOut
        }, "0.1", "-=0.4")
    // .to(redvus_logo, 1.3, {
    //     scale: '0.4',
    //     ease: Back.easeOut
    // }, '-=1.3')
    ;

    redvus_menu.onclick = function () {
        tl.reversed() ? tl.restart() : tl.reverse(-0.3);
    };

    return tl;
}

/*=====  End of Menu Mobile  ======*/