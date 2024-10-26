$(window).on("load", function() {

    // Preload
    $("#preload").fadeOut(500);
});


jQuery(document).ready(function() {

    // Magnific Popup About Us
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Carousel Testimonials
    $('.owl-testimonials').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Scroll Top Button
    $('#scrolltop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
    $('#scrolltop').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#scrolltop').fadeIn();
        } else {
            $('#scrolltop').fadeOut();
        }
    });

    // Scroll Menu
    $(".menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    $("#logo, .btn-header").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    // Scroll Fixed Menu
    $(window).scroll(function() {
        var headerTop = $('#top-contacts').height();
        if ($(this).scrollTop() >= headerTop) {
            $('#header').addClass('fixedmenu');
        } else {
            $('#header').removeClass('fixedmenu');
        }
    });

    // Mobile Menu
    $("#openmenu").click(function(e) {
        e.preventDefault();
        $("#nav").animate({
            'left': 0
        }, 500);
    });
    $("#closemenu").click(function(e) {
        e.preventDefault();
        $("#nav").animate({
            'left': '-320px'
        }, 500);
    });
    $(".menu li a, #logo, .btn-header").on("click", function() {
        $("#nav").animate({
            'left': '-320px'
        }, 500);
    });

    // Ajax Free Consultation
    $('#sendform').click(function(e){
       e.preventDefault();
       var name = $('input[name="name"]').val();
       var phone =  $('input[name="phone"]').val();
       var email =  $('input[name="email"]').val();
       var subject =  $('input[name="subject"]').val();
       var description = $('textarea[name="description"]').val();

       if(name == '' || phone == '' || email == '' || subject == '' || description == '') {
         
        $('.res').fadeIn().html('<span class="error">All fields must be filled.</span>');
        $('input, textarea').focus(function() {
            $('.res').fadeOut();
        });

       }
       else {
          $.ajax({
             url: '../consultation.php',
             type: 'POST',
             data: {
                 name: name,
                 phone: phone,
                 email: email,
                 subject: subject,
                 description: description
             },
             dataType: 'html',
             success: function(data) {
                  if(data == 'Send') {
                       $('.res').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');
                        $('input[name="name"]').val('');
                        $('input[name="phone"]').val('');
                        $('input[name="email"]').val('');
                        $('input[name="subject"]').val('');
                        $('textarea[name="description"]').val('');
                  }
             }
         }); //ajax
       }
    }); 

}); // ready


$(document).ready(function() {
    // Filter items on button click
    $('.filter').on('click', function() {
        var filterValue = $(this).attr('data-filter');

        if (filterValue == 'all') {
            $('.gallery-item').show();
        } else {
            $('.gallery-item').hide();
            $('.' + filterValue).show();
        }
    });

    // Initialize Magnific Popup for lightbox effect
    $('.filterable-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Show all items on load
    $('.gallery-item').show();
});
