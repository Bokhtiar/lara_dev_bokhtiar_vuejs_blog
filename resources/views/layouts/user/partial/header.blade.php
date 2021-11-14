<!-- ======= Header ======= -->
<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><router-link to="/">{{ $web->name }}</router-link></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><router-link to="/" class="active">Home</router-link></li>
          <li><router-link to="/blog/list">Blog</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

      <div class="header-social-links d-flex">
        <a href="{{ $web->twitter }}" class="twitter" target=""><i class="bu bi-twitter"></i></a>
        <a href="{{ $web->fb }}" class="facebook" target=""><i class="bu bi-facebook"></i></a>
        <a href="{{ $web->insta }}" class="instagram" target=""><i class="bu bi-instagram"></i></a>
        <a href="{{ $web->linkdin }}" class="linkedin" target=""><i class="bu bi-linkedin"></i></i></a>
      </div>

    </div>
  </header><!-- End Header -->
