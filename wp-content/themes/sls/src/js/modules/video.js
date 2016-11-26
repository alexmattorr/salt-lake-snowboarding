(function($) {

  /*
    !!!!! HTML MARKUP FOR VIDEO (this works for multiple videos, use IDs)!!!!!!

    <div class="video-wrap" data-timelapse="1">
    
      <video id="video-1" class="video">
        <source src="" type="video/mp4">
        <source src="" type="video/ogg">
      </video>

      <div class="video-buttons-wrapper">

        <div class="video-controls">
          <button class="video-back" data="1">back</button>
          <button type="button" data-video="1" class="play-pause is-paused">
            <span class="play-icon">play</span>
            <span class="pause-icon">pause</span>
          </button>
          <button class="video-forward" data="1">forward</button>
        </div>

      </div>
    </div>
  */

  function timelapseControls() {
    var $vidToggleBtn = $('.play-pause'),
      $back = $('.video-back'),
      $forward = $('.video-forward'),
      videoTime;

    function toggleVid(button, video) {
      var paused = 'is-paused',
        vid = video.get(0),
        duration = vid.duration;

      if (button.hasClass(paused)) {
        vid.play();
        button.removeClass(paused);
      } else {
        vid.pause();
        button.addClass(paused);
      }

      vid.addEventListener("timeupdate", function(e) {
        videoTime = vid.currentTime;
        if (vid.currentTime >= duration) {
          button.addClass(paused);
        }
      });
    }

    function toggleAllOff() {
      var $videos = $('.video'),
        $buttons = $('.play-pause'),
        paused = 'is-paused';

      $videos.each(function() {
        $(this).get(0).pause();
      });

      $buttons.each(function() {
        $(this).addClass(paused);
      });
    }

    // play-pause click
    $vidToggleBtn.on('click', function() {
      var $self = $(this),
        data = $self.data('video'),
        $video = $('#video-' + data);

      toggleVid($self, $video);
    });

    // rewind 5 seconds
    $back.on('click', function() {
      var $self = $(this),
        data = $self.attr('data'),
        $video = $('#video-' + data);

      $video.get(0).currentTime -= 5;
    });

    // forward 5 seconds
    $forward.on('click', function() {
      var $self = $(this),
        data = $self.attr('data'),
        $video = $('#video-' + data);

      $video.get(0).currentTime += 5;
    });
  }

  // timelapseControls();
}(jQuery));
