$(document).ready(function (e) {
    //ANIMATION
    if(window.innerWidth > 1200) { 
        $('.btn').addClass('hoverPulse');
        $('.btn').addClass('animated');
        $('.header_holder').addClass('hoverPulse');
        $('.header_holder').addClass('animated');
        $('#page_10 img').addClass('hoverPulse');
        $('#page_10 img').addClass('animated');

        $('.hoverPulse').hover(
            function() { $(this).addClass('pulse'); },
            function() { $(this).removeClass('pulse'); }
        );
        
        function animate(id, effect, offsetValue) {
            $(id).addClass('animated');
            $(id).css('opacity', 0);
            
            $(id).waypoint(function(direction) {
                if (direction === 'down') {
                    $(id).addClass(effect);
                    $(id).css('opacity', 100);
                }}, { offset: offsetValue });

            $(id).waypoint(function(direction) {
                if (direction === 'up') {
                    $(id).removeClass(effect);
                    $(id).css('opacity', 0);
                }}, {offset: '100%'});
        }  
        
        animate('#page_5 > .container > h1', "zoomIn", '75%');
        animate('#page_4 > .container > h1', "zoomIn", '75%');
        animate('#page_3 > .container > h1', "zoomIn", '75%');
        animate('#page_6 > .container > h1', "zoomIn", '75%');
        animate('#page_11 > .container > .row > h1', "zoomIn", '75%');
        
        animate('#page_2 .visible-lg-block', "fadeInUp", '75%');
        animate('#page_6 .visible-lg-block', "fadeInUp", '75%');
        animate('#page_8 .visible-lg-block', "fadeInUp", '75%');
        
        animate('#page_8_2 .visible-lg-block .entry6', "fadeInRight", '55%');
        animate('#page_8_2 .visible-lg-block .entry5', "fadeInRight", '60%');
        animate('#page_8_2 .visible-lg-block .entry4', "fadeInRight", '65%');
        animate('#page_8_2 .visible-lg-block .entry3', "fadeInRight", '70%');
        animate('#page_8_2 .visible-lg-block .entry2', "fadeInRight", '75%');
        animate('#page_8_2 .visible-lg-block .entry1', "fadeInRight", '80%');

    }
    $.post("blog",
        {},
        function (data) {
            $('#blog').html(data);
        }
    );
    //  menu scroll
    $('a[href^="#pg"]').click(function (event) {
        event.preventDefault();
        var offset = 52;
        elementClick = $(this).attr("href");
        $('html,body').stop().animate({scrollTop: $(elementClick).offset().top - offset}, 1000);
    });

    $('.carousel').carousel({
        interval: false
    });
});

function formSubmit() {
    name = $('#mailForm').find('input[name="name"]').val();
    phone = $('#mailForm').find('input[name="phone"]').val();
    $.post("email",
        {
            name: name,
            phone: phone
        },
        function () {
            $('#myModal').modal();
        }
    );
    return false;
}

$('body').scrollspy({target: '#navbar-example'});

function switchContent(id) {
    $('#content_holder1').hide();
    $('#content_holder2').hide();
    $('#content_holder3').hide();
    $('#content_holder4').hide();
    $('#content_holder5').hide();
    $('#content_holder6').hide();
    $(id).fadeIn("slow");
}

function showMailForm() {
    alert("mail form");
}
