function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    } else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    }
}

function setCaretToPos(input, pos) {
    setSelectionRange(input[0], pos, pos);
}
$(document).ready(function () {
    $('input[type="tel"]').mask('+7(9##) ###-##-##', {
        translation: {
            '#': { pattern: /[0-9]/, optional: true },
            '9': false,
        }
    }).on('click', function () {
        if ($(this).val() === '+7(___) ___-__-__') {
            setCaretToPos($(this), 3);
        }
    });
    $.validator.methods.tel = function (value, element) {
        return this.optional(element) || /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value);
    };

    $('#popup__form').validate({
        rules: {
            email: {
                email: true,
                required: true
            },
            tel: {
                tel: true,
                required: true
            },
        },
        messages: {
            email: {
                email: "Пожалуйста, введите корректную почту",
                required: "Пожалуйста, введите почту"
            },
            tel: {
                tel: "Пожалуйста, введите корректный номер телефона",
                required: "Пожалуйста, введите номер телефона"
            },
        },
        submitHandler: function (form) {
            form.submit();
            form.reset();
            return false;
        }
    });

    $('#popup__form input').change(checkValidate);

    function checkValidate(e) {
        var form = $(e.target.form);
        var button = $(form).find('button[type="submit"]');

        var correct = true;
        $(form).find('input.validate').each(function () {
            if (this.value === "" ||
                this.value === '+7(9__) ___-__-__' ||
                $(this).hasClass('error')) {
                correct = false;
            }
        });

        var checkbox = $(form).find('input[type="checkbox"]');
        if (checkbox.length !== 0 && !checkbox.is(':checked'))
            correct = false;
        button.attr("disabled", !correct);
    }
});