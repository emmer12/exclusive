<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{asset('css/plugin/font-awesome.min.css')}}">
    
    <link href="{{ asset('css/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('css/semantic.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/nivo-slider.css') }}" rel="stylesheet">
    

</head>
<!-- ADD THE CLASS fixed TO GET A FIXED HEADER AND SIDEBAR LAYOUT -->
<!-- the fixed layout is not compatible with sidebar-mini -->
<body>
    <!-- Site wrapper -->
    <div class="wrapper" id="app">
    
      <div class="content-wrapper">
            @yield('content')
       </div>

   
</div>


<script src="{{asset('js/plugin/jquery.min.js')}}"></script>
<script src="{{asset('js/plugin/jquery.nivo.slider.js')}}"></script>
<script src="{{asset('js/plugin/semantic.min.js')}}"></script>
<script src="{{asset('js/plugin/wow.min.js')}}"></script>
  

<script src="{{asset('js/plugin/slick.js')}}"></script>


<script src="{{asset('js/main.js')}}"></script>
    @auth
       <script defer>
           window.loggedUser=@json(auth()->user());
       </script>
    @endauth
<script type="text/javascript">
    new WOW().init()
    $('#nivoslider').nivoSlider({
            effect: 'random', // Specify sets like: 'sliceDownLeft sliceUp sliceUpLeft sliceUpDown sliceUpDownLeft fold fade random slideInRight slideInLeft boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse'
            slices: 15, // For slice animations
            boxCols: 8, // For box animations
            boxRows: 4, // For box animations
            animSpeed: 1000, // Slide transition speed
            pauseTime: 5000, // How long each slide will show
            startSlide: 0, // Set starting Slide (0 index)
            directionNav: true, // Next & Prev navigation
            controlNav: true, // 1,2,3... navigation
            controlNavThumbs: false, // Use thumbnails for Control Nav
            pauseOnHover: false, // Stop animation while hovering
            manualAdvance: false, // Force manual transitions
            prevText: 'Prev', // Prev directionNav text
            nextText: 'Next', // Next directionNav text
            randomStart: false, // Start on a random slide
            beforeChange: function() {}, // Triggers before a slide transition
            afterChange: function() {}, // Triggers after a slide transition
            slideshowEnd: function() {}, // Triggers after all slides have been shown
            lastSlide: function() {}, // Triggers when last slide is shown
            afterLoad: function() {} // Triggers when slider has loaded

            /*effect: 'fade',

            slices: 15,

            boxCols: 8,

            boxRows: 4,

            animSpeed: 500,

            pauseTime: 5000,

            startSlide: 0,

            directionNav: true,

            controlNavThumbs: true,

            pauseOnHover: true,

            manualAdvance: false*/

});

  </script>



</body>
</html>
