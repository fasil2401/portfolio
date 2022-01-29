$(document).ready(function () {
    $("#reach-me").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                maxlength: 10

            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Enter a valid name",
            },
            email: {
                required: 'Please Enter Email id',
                email: 'Enter Valid Email id'
            },
            subject: {
                required: 'Please mention Subject'
            },
            message: {
                required: 'Please leave some message'
            }
        }

    });

})
document.querySelector('#name').onkeypress = validate;

function validate(e) {
    e = e
    return /[a-z]/i.test(
        String.fromCharCode(e.charCode || e.keyCode)
    ) || !e.charCode && e.keyCode < 48;
}
document.querySelector('#phone').onkeypress = validates;

function validates(e) {
    e = e
    return /[0-9]/i.test(
        String.fromCharCode(e.charCode || e.keyCode)
    ) || !e.charCode && e.keyCode < 48;
}

