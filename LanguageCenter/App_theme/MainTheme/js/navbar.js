$(document).ready(function () {
    navbar();
    function navbar() {
        $('.list-nav > li  ul').addClass('dropdown-container');
    }

    $(".r-collapse").click(function () {

        if ($('.icon-nav', this).hasClass("icon-nav-change")) {
            $('.icon-nav', this).addClass('').removeClass('icon-nav-change');
        }
        else {
            $('.icon-nav').addClass('').removeClass('icon-nav-change');
            $('.icon-nav', this).addClass('icon-nav-change');
        }
    });

    $(".list-nav > li > a").click(function () {

        if ($('.btn-menu', this).hasClass("icon-nav-change")) {
            $('.btn-menu', this).addClass('').removeClass('icon-nav-change');
        }
        else {
            $('.list-nav > li .btn-menu').addClass('').removeClass('icon-nav-change');
            $('.btn-menu', this).addClass('icon-nav-change');
        }
    });

    $('.mask').on('click', function () {
        $('.icon-nav').addClass('').removeClass('icon-nav-change');
        $('.sidenav').removeClass('open-nav').addClass('close-nav');

    }).children().on('click', function (event) {
        event.stopPropagation();
    });

    $("#accordian li")
        .click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
            $(this).addClass('active');
        });
    $("#accordian a")
        .click(function () {
            var link = $(this);
            var closestUl = link.closest("ul");
            var parallelActiveLinks = closestUl.find(".active");
            var closestLi = link.closest("li");
            var linkStatus = closestLi.hasClass("active");
            var count = 0;
            if ($(window).width() >= 750) {


                closestUl.find("ul")
                    .fadeOut(function () {
                        if (++count == closestUl.find("ul").length)
                            parallelActiveLinks.removeClass("active");
                    });

                if (!linkStatus) {
                    closestLi.children("ul").fadeIn();
                    closestLi.addClass("active");
                }
            } else {
                closestUl.find("ul")
                    .slideUp(function () {
                        if (++count == closestUl.find("ul").length)
                            parallelActiveLinks.removeClass("active");
                    });

                if (!linkStatus) {
                    closestLi.children("ul").slideDown();
                    closestLi.addClass("active");
                }
            }
        });





    $('body').click(function (event) {
        if (!$('.r-nav').is(event.target) && $('.r-nav').has(event.target).length === 0) {
            $('.r-nav').removeClass('open-nav');
            $('.r-nav').addClass('close-nav');
            $('.search-box > a').removeClass('open');
            $('.r-collapse .icon-nav').addClass('').removeClass('icon-nav-change');
        }
    });
    $('.r-collapse').click(function (event) {
        event.stopPropagation();
        $('.r-nav').toggleClass('open-nav close-nav');


    });





    $(document).scroll(function () {
        navbar();
    });
});


$(document).ready(function () {

    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
        }

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }

        var accordion = new Accordion($('#accordion-menu'), false);
    });


    (function ($) {

        var tabs = $(".tabs-item li a");

        tabs.click(function () {
            var content = this.hash.replace('/', '');
            tabs.removeClass("active");
            $(this).addClass("active");
            $("#content-tabs").find('p').hide();
            $(content).fadeIn(200);
        });

    })(jQuery);
});
