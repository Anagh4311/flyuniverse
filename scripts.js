//Talk to us//

$(document).ready(function() {
    $('#contact-us-btn').on('click', function() {
        $('#contactFormModal').modal('show');
    });

    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        var email = $('#workEmail').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var consent = $('#consent').is(':checked');

        if (email && firstName && lastName && consent) {
            $.ajax({
                url: "https://getform.io/f/your-getform-endpoint", 
                method: "POST",
                data: {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    consent: consent
                },
                success: function() {
                    alert('Form submitted successfully!');
                    $('#contactFormModal').modal('hide');
                },
                error: function() {
                    alert('There was an error submitting the form.');
                }
            });
        } else {
            alert('Please fill in all required fields and agree to the terms and conditions.');
        }
    });
});


//WHAT WE DO//
$(document).ready(function() {
    // When a carousel indicator is clicked
    $('.carousel-indicators li').on('click', function() {
        // Remove hover class from all images
        $('.carousel-item img').removeClass('hover');
        
        // Get the index of the clicked indicator
        var index = $(this).data('slide-to');
        
        // Add hover class to images in the active carousel item
        $('.carousel-item').eq(index).find('img').addClass('hover');
    });

    // Optional: Add hover effect to the first carousel item on load
    $('.carousel-item.active img').addClass('hover');
});



//OUR PROJECT//

$(document).ready(function() {
    $('.project-item').on('click', function() {
        $('.project-item').removeClass('active');
        $(this).addClass('active');
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
    });
});




