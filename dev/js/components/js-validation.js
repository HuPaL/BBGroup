$(document).ready(function () {

    $("#form").validate({
        rules: {
            "user-name": {
                required: true,
                minlength: 5
            },
            "user-phone": {
                required: true,
                minlength: 12
            },
            "user-email": {
                required: true,
                email: true
            }
        },
        messages: {
            "user-name": {
                required: "Ім’я має мати довжину від 6 до 30 символів"
            },
            "user-phone": {
                required: "Не правильний формат"
            },
            "user-email": {
                required: "Не правильний формат",
                email: "Не правильний формат"
            }
        },
        submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: $(form).serialize()
                }).done(function(data) {
                    $('#form').find('.success').addClass('active').hide().fadeIn();
                    setTimeout(function() {
                        // Done Functions
                        $('#form').trigger("reset");
                    }, 1000);
                });
            return false; 
        }
    });

});