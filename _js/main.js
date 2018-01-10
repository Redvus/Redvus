;(function ($) {

    // Animation logo on first page
    var redvus_logo_v_pencil = $('#redvus_logo_v_pencil'),
        redvus_logo_line_v = $('#redvus_logo_line_v'),
        redvus_logo_r = $('#redvus_logo_r'),
        redvus_logo_e_up = $('#redvus_logo_e_up'),
        redvus_logo_e_middle = $('#redvus_logo_e_middle'),
        redvus_logo_e_down = $('#redvus_logo_e_down'),
        redvus_logo_d = $('#redvus_logo_d'),
        redvus_logo_u_end = $('#redvus_logo_u_end'),
        redvus_logo_s_end = $('#redvus_logo_s_end'),
        redvus_logo_studio = $('#redvus_logo_studio');
        redvus_logo = $('#redvus_logo');
        redvus_shutter_left = $('.shutter-left');
        redvus_shutter_right = $('.shutter-right');
        redvus_menu = $('#menu');
        redvus_menu_v = $('#menu_v');
        redvus_menu_left = $('#menu_left_line');
        redvus_menu_right = $('#menu_right_line');
        redvus_menu_up = $('#menu_up_line');
        redvus_menu_down = $('#menu_down_line');
        redvus_menu_cross = $('#menu_cross');

    var slogan_R = $('#slogan_R'),
        slogan_real = $('#slogan_real'),
        slogan_E = $('#slogan_E'),
        slogan_effecive = $('#slogan_effective'),
        slogan_D = $('#slogan_D'),
        slogan_design = $('#slogan_design'),
        slogan_V = $('#slogan_V'),
        slogan_visual = $('#slogan_visual'),
        slogan_U = $('#slogan_U'),
        slogan_unical = $('#slogan_unical'),
        slogan_S = $('#slogan_S'),
        slogan_style = $('#slogan_style'),
        slogan_text = $('.slogan-text'),
        entrance = $('.entrance');

    function redvusLogoStart() {

        var tl = new TimelineMax();

        tl
            .set(redvus_menu_cross, {
                scale: 0,
                transformOrigin: '50% 50%',
                autoAlpha: 0
            })
            .to(redvus_logo, 0.5, {
                autoAlpha: 1,
                ease:Power0.easeIn
            })
            .from(redvus_logo_v_pencil, 1, {
                x: -500,
                ease:Power1.easeOut
            })
            .from(redvus_logo_line_v, 1, {
                x: -500,
                ease:Power1.easeOut
            }, '-=1')
            .from(redvus_logo_d, 0.6, {
                x: -300,
                ease:Bounce.easeOut
            }, '-=0.2')
            .from(redvus_logo_r, 0.5, {
                x: -200,
                ease:Back.easeOut
            })
            .from(redvus_logo_e_down, 0.5, {
                scaleX: '0%',
                ease:Power2.easeOut
            })
            .from(redvus_logo_e_middle, 0.5, {
                y: -200,
                ease:Back.easeOut
            }, '-=0.2')
            .from(redvus_logo_e_up, 0.5, {
                y: -200,
                ease:Back.easeOut
            }, '-=0.2')
            .from(redvus_logo_u_end, 0.5, {
                y: -200,
                ease:Back.easeOut
            })
            .from(redvus_logo_s_end, 0.75, {
                y: -200,
                ease:Back.easeOut
            }, '-=0.2')
            .staggerFrom([redvus_logo_studio_s,redvus_logo_studio_t,redvus_logo_studio_u,redvus_logo_studio_d,redvus_logo_studio_i,redvus_logo_studio_o], 0.3, {
                x: 300,
                ease:Back.easeOut
            }, 0.2)
            .to(redvus_logo, 1, {
                scale: '0.5',
                ease:Power3.easeOut
            })
            .to(redvus_shutter_left, 2, {
                width: '25%',
                ease:Back.easeOut
            }, '-=1')
            .to(redvus_shutter_right, 2, {
                width: '25%',
                ease:Back.easeOut
            }, '-=2')
            .to(redvus_menu, 0.5, {
                autoAlpha: 1,
                ease:Power0.easeIn
            }, '-=1')
            .from(redvus_menu_left, 0.8, {
                y: 100,
                ease:Power1.easeOut
            }, '-=1')
            .from(redvus_menu_right, 0.8, {
                y: 100,
                ease:Power1.easeOut
            }, '-=0.5')
            .from(redvus_menu_v, 0.8, {
                y: -100,
                ease:Back.easeOut
            }, '-=0.3')
        ;

        return tl;
    }

    redvusLogoStart();

    var redvus_slogan_tl = new TimelineMax();

    // redvus_slogan_tl.from(slogan_visual, 2, {opacity: 0, ease:Power1.easeOut})
    //     .from(slogan_design, 2, {opacity: 0, ease:Power1.easeOut}, '-=0.5')
    //     .from(slogan_real, 2, {opacity: 0, ease:Power1.easeOut}, '-=0.5')
    //     .from(slogan_effective, 2, {opacity: 0, ease:Power1.easeOut}, '-=0.5')
    //     .from(slogan_unical, 2, {opacity: 0, ease:Power1.easeOut}, '-=0.5')
    //     .from(slogan_style, 2, {opacity: 0, ase:Power1.easeOut}, '-=0.5')
    //     // .to(slogan_text, 3, {opacity: 0, ease:Power1.easeOut})
    //     .to(slogan_visual, 1, {opacity: 0, ease:Back.easeOut})
    //     .to(slogan_design, 1, {opacity: 0, ease:Back.easeOut})
    //     .to(slogan_real, 1, {opacity: 0, ease:Back.easeOut})
    //     .to(slogan_effective, 1, {opacity: 0, ease:Back.easeOut})
    //     .to(slogan_unical, 1, {opacity: 0, ease:Back.easeOut})
    //     .to(slogan_style, 1, {opacity: 0, ease:Back.easeOut})
    //     .from(entrance, 2, {opacity: 0, ease:Back.easeOut});
        // .to(slogan_R, 1, {opacity: 0, ease:Back.easeOut})
        // .to(slogan_D, 1, {opacity: 0, ease:Back.easeOut})
        // .to(slogan_E, 1, {opacity: 0, ease:Back.easeOut})
        // .to(slogan_U, 1, {opacity: 0, ease:Back.easeOut})
        // .to(slogan_V, 1, {opacity: 0, ease:Back.easeOut})
        // .to(slogan_S, 1, {opacity: 0, ease:Back.easeOut});

    /*============================
    =            Menu            =
    ============================*/

    function redvusMenuOpen() {

        var tl = new TimelineMax({paused:true, reversed:true});

        tl
            .to(redvus_shutter_right, 0.8, {
                width: '50%',
                ease:Back.easeInOut
            })
            .to(redvus_shutter_left, 0.8, {
                width: '20%',
                ease:Power2.easeInOut
            }, '-=0.8')
            .to(redvus_menu, 0.8, {
                x: '-50%',
                left: 0,
                rotation: '-405',
                ease:Power1.easeInOut
            }, '-=0.8')
            .to(redvus_menu_v, 0.6, {
                y: '-100',
                autoAlpha: 0,
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_up, 0.6, {
                autoAlpha: 1,
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_down, 0.6, {
                autoAlpha: 1,
                ease:Power1.easeOut
            }, '-=0.6')
            .to(redvus_menu_cross, 0.6, {
                scale: 1,
                autoAlpha: 1,
                ease:Power1.easeOut
            }, '-=0.6')
        ;

        redvus_menu.on('click', function () {
            tl.reversed() ? tl.restart() : tl.reverse();
        });
    }

    redvusMenuOpen();

    redvus_menu.hover(function () {
        TweenMax.to(this, 0.4, {
            scale: 1.2,
            ease: Elastic.easeOut.config(0.9, 0.3)
        });
    }, function () {
        TweenMax.to(this, 0.2, {
            scale: 1
        });
    });

    /*=====  End of Menu  ======*/


})(jQuery);