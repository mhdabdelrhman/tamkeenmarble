<template>
  <!-- Footer Start-->
  <div class="footer-main">
    <div class="footer-area footer-padding">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4 col-md-4 col-sm-8">
            <div class="single-footer-caption mb-30">
              <!-- logo -->
              <div class="footer-logo">
                <a href="index.html"
                  ><img src="assets/img/logo/logo-footer.png" alt=""
                /></a>
              </div>
              <div class="footer-tittle">
                <div class="footer-pera">
                  <p class="info1">Nature in your hands</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-5">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-7">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4>Contact</h4>
                <div class="footer-pera">
                  <p class="info1">Ind15, Sharjah, UAE</p>
                </div>
                <ul>
                  <li><a href="#">Phone: +971 6 525 1249</a></li>
                  <li><a href="#">Cell: +971 55 956 7286</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-8">
            <div class="single-footer-caption mb-50">
              <!-- Form -->
              <!-- <div class="footer-form">
                                        <div id="mc_embed_signup">
                                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscribe_form relative mail_part" novalidate="true">
                                                <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '">
                                                <div class="form-icon">
                                                    <button type="submit" name="submit" id="newsletter-submit" class="email_icon newsletter-submit button-contactForm">
                                                        SIGN UP
                                                    </button>
                                                </div>
                                                <div class="mt-10 info"></div>
                                            </form>
                                        </div>
                                    </div> -->
              <!-- Map -->
            </div>
          </div>
        </div>
        <!-- Copy-Right -->
        <div class="row align-items-center">
          <div class="col-xl-12">
            <div class="footer-copy-right">
              <p>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;{{ year }}
                All rights reserved | This template is made with
                <i class="fa fa-heart" aria-hidden="true"></i> by
                <a href="https://colorlib.com" target="_blank">Colorlib</a>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End-->
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>