(function($) {

  /*
    MODAL.JS

    The .modal-bg should be a seperate fixed element, with nothing inside of it!
    This way we can re-use it for every modal on the website, and will get toggled with open() and close().
    For individual modals, use a specific click that will call open()/close() and then call whatever modal element you need.
  */

  // prevents default
  function preventDefault(e) {
    e.preventDefault();
  }

  // enables / disables scroll on true or false; (this is for mobile)
  function disableScroll() {
    document.addEventListener('touchmove', preventDefault, false);
  }

  function enableScroll() {
    document.removeEventListener('touchmove', preventDefault, false);
  }

  function modals() {
    var $body = $('body'),
      $modalBg = $('.modal-bg'),
      $vidModal = $('.modal-video'),
      $closeBtn = $('.modal-close'),
      $vidBtn = $('.modal-vid-btn'),
      $calendarBtn = $('.calendar-btn'),
      $tourBtn = $('.3d-tour-btn'),
      $tour = $('.threed-tour'),
      $navTour = $('#nav-tour'),
      active = 'is-active';

    // closes modal and anything that is happening in it
    // add individual closes here (videos, 3dtours, etc).
    function close() {
      enableScroll();
      $body.css('overflow', 'auto');
      $modalBg.fadeOut();
    }

    // opens modal
    function open() {
      disableScroll();
      $body.css('overflow', 'hidden');
      $modalBg.fadeIn();
    }

    // closes modal on esc
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        close();
      }
    });

    // closes modal on close button
    $closeBtn.click(function() {
      close();
    });

    // closes modal on modal-bg click
    $modalBg.click(function() {
      close();
    });

    // opens youtube video modal and automatically plays
    // use data attributes and ids to find video
    $vidBtn.click(function() {
      var $self = $(this),
        data = $self.data('video'),
        $vid = $('#video-' + data),
        $iFrame = $vid.find('iframe'),
        olink = $iFrame.attr('src'),
        nlink = olink + '?&autoplay=1';

      open();
      $vid.show();
      $closeBtn.show();

      $iFrame.attr('src', nlink);


      function pause() {
        $iFrame.attr('src', '');
        $iFrame.attr('src', olink);
      }

      // closes modal
      $(document).keyup(function(e) {
        if (e.keyCode === 27) {
          close();
          pause();
        }
      });

      $closeBtn.click(function() {
        close();
        pause();
      });

      $modalBg.click(function() {
        close();
        pause();
      });

      return false;
    });
  }


  $(function() {
    // modals();
  });
}(jQuery));
