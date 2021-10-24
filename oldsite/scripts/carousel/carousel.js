var Carousel,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Carousel = (function() {
  var default_slide_interval;

  default_slide_interval = 6000;

  function Carousel(housing, strip, slides) {
    this.housing = housing;
    this.strip = strip;
    this.slides = slides;
    this.makeActiveSlide = bind(this.makeActiveSlide, this);
    this.repositionSlide = bind(this.repositionSlide, this);
    this.advance = bind(this.advance, this);
    this.rewind = bind(this.rewind, this);
    this.listen_for_interaction = bind(this.listen_for_interaction, this);
    this.stop_advance = bind(this.stop_advance, this);
    this.auto_advance = bind(this.auto_advance, this);
    this.autoplay_interval = null;
    this.autoplay_started = false;
    this.autoplay_stopped = true;
    this.initial_number_of_slides = this.slides.length;
    if (this.initial_number_of_slides > 1 && this.initial_number_of_slides < 6) {
      this.slides.clone().appendTo(this.strip);
      this.slides = $('.slide', this.housing);
    }
    this.max_index = this.slides.length - 1;
    this.current_index = 0;
    this.slideInterval = this.housing.attr('data-slide-interval') || default_slide_interval;
    this.previousButton = $('[data-button-type="previous"]', this.housing);
    this.nextButton = $('[data-button-type="next"]', this.housing);
    this.dotButton = $('[data-button-type="dot"]', this.housing);
    if (this.max_index > 1) {
      this.slides.first().attr({
        "class": 'slide active'
      }).next().addClass('slideRight');
      this.slides.last().addClass('slideLeft');
      $('.controls').find('[data-slide-number]').first().addClass('active');
      this.build_controls();
      if (this.slideInterval !== '0000') {
        this.auto_advance();
        this.listen_for_interaction();
      }
    } else {
      this.slides.first().addClass('active');
      this.housing.addClass('singleSlide');
    }
  }

  Carousel.prototype.build_controls = function() {
    this.previousButton.on("click.carousel", this.rewind);
    return this.nextButton.on("click.carousel", this.advance);
  };

  Carousel.prototype.auto_advance = function() {
    if (this.autoplay_stopped !== true && this.autoplay_started !== true) {
      this.autoplay_interval = setInterval(this.advance, this.slideInterval);
      return this.autoplay_started = true;
    }
  };

  Carousel.prototype.stop_advance = function() {
    if (this.autoplay_interval) {
      clearInterval(this.autoplay_interval);
      this.autoplay_interval = null;
      return this.autoplay_started = false;
    }
  };

  Carousel.prototype.listen_for_interaction = function() {
    this.slides.bind({
      mouseenter: this.stop_advance,
      mouseleave: this.auto_advance,
      focusin: this.stop_advance,
      focusout: this.auto_advance
    });
    this.previousButton.bind({
      mouseenter: this.stop_advance,
      mouseleave: this.auto_advance,
      focusin: this.stop_advance,
      focusout: this.auto_advance
    });
    return this.nextButton.bind({
      mouseenter: this.stop_advance,
      mouseleave: this.auto_advance,
      focusin: this.stop_advance,
      focusout: this.auto_advance
    });
  };

  Carousel.prototype.rewind = function() {
    if (--this.current_index < 0) {
      this.current_index = this.max_index;
    }
    return this.makeActiveSlide('right');
  };

  Carousel.prototype.advance = function() {
    if (++this.current_index > this.max_index) {
      this.current_index = 0;
    }
    return this.makeActiveSlide('left');
  };

  Carousel.prototype.repositionSlide = function(direction) {
    this.currentSlide = this.slides.eq(this.current_index);
    this.slideNum = this.currentSlide.attr('id');
    if (direction === 'left') {
      this.currentSlide.attr({
        "class": 'slide slideLeft'
      });
    } else {
      this.currentSlide.attr({
        "class": 'slide slideRight'
      });
    }
    return $('.controls').find('[data-slide-number="' + this.slideNum + '"]').removeClass('active');
  };

  Carousel.prototype.makeActiveSlide = function(direction) {
    this.slides.attr('class', 'slide');
    this.currentSlide = this.slides.eq(this.current_index);
    this.currentSlide.attr({
      "class": 'slide active'
    });
    this.slideNum = this.currentSlide.attr('id');
    $('.controls').find('[data-slide-number="' + this.slideNum + '"]').addClass('active');
    if (this.current_index > 0 && this.current_index < this.max_index) {
      this.currentSlide.next().addClass('slideRight');
      return this.currentSlide.prev().addClass('slideLeft');
    } else if (this.current_index === 0) {
      this.currentSlide.next().addClass('slideRight');
      if (direction === 'left') {
        return this.slides.eq(this.max_index).addClass('slideLeft');
      } else {
        return this.slides.last().addClass('slideLeft');
      }
    } else {
      this.slides.first().addClass('slideRight');
      return this.currentSlide.prev().addClass('slideLeft');
    }
  };

  return Carousel;

})();

$.fn.carouselize = function() {
  $(this).data({
    carousel: new Carousel(this, $('.strip', this), $('.slide', this))
  });
  return this;
};

//# sourceMappingURL=carousel.js.map
