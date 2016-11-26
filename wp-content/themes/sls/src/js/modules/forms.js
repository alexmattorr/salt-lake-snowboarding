(function($) {
  /*
    !!!!!PLEASE READ BEFORE DOING FORM STUFF!!!!!!

    This is the way to do our google form integration.

    inputFocus() : This adds the 'Drip Pan focus class
      * There are two different functions inside
        1. all() wich adds the focusing for all inputs that parents have the .input-wrap class.
        2. textarea() which adds focusing just to a textarea, this can be duplicated and changed for other elements
      This is done so if you want to default to invalid, optional fields can still be focused.

    validateKeyPress() : this validates text fields, emails, and phones when the user presses the keyboard. The .check-phone and .check-email classes must be added to the corresponding email and phone fields for them to use the regex validation.

    sendData() : this passes the data to google.

    formSubmit() : handles submissions and VALIDATION
    This function must be passed 3 parameters to work:
      1. The submit button class or ID.
      2. The form class or ID.
      3. The google form post url.
    If any of those are missing, the function will not work.

    The HTML markup must now have the google field value in the name slot, ie: name="entry.1373749609"
    The new formSubmit function serializes the data, which uses the name value (no longer the ID);

    If you want a field to be validated the input must have the class of .input-required

    If you have questions, please contact alex@kurtnoble.com
  */
  var $input = $('.input-required'),
    $phone = $('.check-phone'),
    $email = $('.check-email'),
    $inputWrap = $(
      '.input-wrap input, .input-wrap textarea, .input-wrap select'),
    $textWrap = $('.input-wrap textarea'),
    invalid = 'invalid',
    active = 'is-active';

  function isPhone(phone) {
    var regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return regex.test(phone);
  }

  function isEmail(email) {
    var regex =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function inputFocus() {
    function all() {
      $inputWrap.on('focus', function() {
        $(this).parent().addClass(active);
      });

      $inputWrap.on('blur', function() {
        $(this).parent().removeClass(active);
      });

      $inputWrap.change(function() {
        $(this).parent().removeClass(active);
      });
    }

    function textarea() {
      $inputWrap.on('focus', function() {
        $(this).parent().addClass(active);
      });

      $inputWrap.on('blur', function() {
        $(this).parent().removeClass(active);
      });
    }

    all();
  }

  function textareaFocus() {
    $textWrap.on('focus', function() {
      $(this).parent().addClass(active);
    });

    $textWrap.on('blur', function() {
      $(this).parent().removeClass(active);
    });
  }

  function validateKeyPress() {
    function fields() {
      $input.keyup(function(e) {
        if ($(this).val() === '') {
          $(this).parent().addClass(invalid);
        } else {
          $(this).parent().removeClass(invalid);
        }
      });
    }

    function phone() {
      $phone.keyup(function(e) {
        var value = $(this).val();

        if (isPhone(value) === false) {
          $(this).parent().addClass(invalid);
        } else if (value.length < 7) {
          $(this).parent().addClass(invalid);
        } else {
          $(this).parent().removeClass(invalid);
        }
      });
    }

    function email() {
      $email.keyup(function(e) {
        var value = $(this).val();

        if (isEmail(value) === false) {
          $(this).parent().addClass(invalid);
        } else {
          $(this).parent().removeClass(invalid);
        }
      });
    }

    fields();
    phone();
    email();
  }

  function validate() {
    $input.parent().removeClass(invalid);

    function valFields() {
      $input.each(function() {
        var $self = $(this),
          value = $self.val();

        if (value === '' || value === null) {
          $self.parent().addClass(invalid);
        }
      });
    }

    function valPhone() {
      $phone.each(function() {
        var $self = $(this),
          value = $self.val();

        if (isPhone(value) === false) {
          $self.parent().addClass(invalid);
        } else if (value.length < 7) {
          $self.parent().addClass(invalid);
        }
      });
    }

    function valEmail() {
      $email.each(function() {
        var $self = $(this),
          value = $self.val();

        if (isEmail(value) === false) {
          $self.parent().addClass(invalid);
        }
      });
    }

    valFields();
    valPhone();
    valEmail();
  }

  // FORM FUNCTIONS
  // ==================================================
  function sendData(form, formUrl, thankUrl) {
    var $form = $(form),
      data = $form.serialize(),
      homeURL = location.origin,
      thankURL = homeURL + thankUrl;

    $.ajax({
      url: formUrl,
      data: data,
      dataType: "xml",
      complete: function() {
        window.location = thankURL;
      }
    });
    return false;
  }

  function formSubmit(button, formSelector, googleUrl, thankUrl) {
    var $submit = $(button),
      form = formSelector,
      url = googleUrl;

    $submit.click(function(e) {
      e.preventDefault();
      validate();

      var isValid = true;

      $(form).find('.input-required').each(function() {
        if ($(this).parent().hasClass('invalid')) {
          isValid = false;
        }
      });

      if (isValid === true) {
        sendData(form, url, thankUrl);
      }
      return isValid;
    });
  }

  $(function() {
    // validateKeyPress();
    // formSubmit('#your-form-button', '#your-form-id', 'https://www.docs.google.com/forms/your-googleform-url', '/path-to-your-thank-you-page/');
  });
}(jQuery));
