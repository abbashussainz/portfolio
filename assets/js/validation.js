$(document).ready(function () {
    // Validate Username
    $("#myForm").validate({
        rules: {
            fullname: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }

        }



    })


})
