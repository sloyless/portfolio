class Carousel

  default_slide_interval = 6000

  constructor: (@housing, @strip, @slides) ->
    @autoplay_interval = null
    @autoplay_started = false
    @autoplay_stopped = false
    @initial_number_of_slides = @slides.length

    if @initial_number_of_slides > 1 and @initial_number_of_slides < 6
      @slides.clone().appendTo @strip
      @slides = $ '.slide', @housing
    
    @max_index = @slides.length - 1
    @current_index = 0
    @slideInterval = @housing.attr('data-slide-interval') or default_slide_interval

    @previousButton = $ '[data-button-type="previous"]', @housing
    @nextButton = $ '[data-button-type="next"]', @housing
    @dotButton = $ '[data-button-type="dot"]', @housing

    if @max_index > 1
      @slides.first().attr(class:'slide active').next().addClass 'slideRight'
      @slides.last().addClass 'slideLeft'
      $('.controls').find('[data-slide-number]').first().addClass 'active'

      do @build_controls
      
      if @slideInterval != '0000'
        do @auto_advance 
        do @listen_for_interaction
    else
      @slides.first().addClass 'active'
      @housing.addClass 'singleSlide'

  build_controls: ->
    @previousButton.on "click.carousel", @rewind
    @nextButton.on "click.carousel", @advance

  auto_advance: =>
    if @autoplay_stopped != true and @autoplay_started != true
      @autoplay_interval = setInterval @advance, @slideInterval
      @autoplay_started = true

  stop_advance: =>
    if @autoplay_interval
      clearInterval @autoplay_interval
      @autoplay_interval = null
      @autoplay_started = false

  listen_for_interaction: =>
    @slides.bind
      mouseenter: @stop_advance
      mouseleave: @auto_advance
      focusin: @stop_advance
      focusout: @auto_advance
    @previousButton.bind
      mouseenter: @stop_advance
      mouseleave: @auto_advance
      focusin: @stop_advance
      focusout: @auto_advance
    @nextButton.bind
      mouseenter: @stop_advance
      mouseleave: @auto_advance
      focusin: @stop_advance
      focusout: @auto_advance

  rewind: =>
    @current_index = @max_index if --@current_index < 0
    @makeActiveSlide 'right'

  advance: =>
    @current_index = 0 if ++@current_index > @max_index
    @makeActiveSlide 'left'

  repositionSlide: (direction) =>
    @currentSlide = @slides.eq @current_index
    @slideNum = @currentSlide.attr('id')

    if direction is 'left'
      @currentSlide.attr(class:'slide slideLeft')
    else
      @currentSlide.attr(class:'slide slideRight')
    $('.controls').find('[data-slide-number="'+ @slideNum + '"]').removeClass 'active'
  
  makeActiveSlide: (direction) =>
    @slides.attr('class', 'slide')
    @currentSlide = @slides.eq @current_index
    @currentSlide.attr(class:'slide active')
    @slideNum = @currentSlide.attr('id')
    
    $('.controls').find('[data-slide-number="'+ @slideNum + '"]').addClass 'active'

    if @current_index > 0 and @current_index < @max_index
      @currentSlide.next().addClass 'slideRight'
      @currentSlide.prev().addClass 'slideLeft'
    else if @current_index is 0
      @currentSlide.next().addClass 'slideRight'
      if direction is 'left'
        @slides.eq(@max_index).addClass 'slideLeft'
      else
        @slides.last().addClass 'slideLeft'
    else
      @slides.first().addClass 'slideRight'
      @currentSlide.prev().addClass 'slideLeft'

$.fn.carouselize = ->
  $(this).data
    carousel: new Carousel this, $('.strip', this), $('.slide', this)
  this