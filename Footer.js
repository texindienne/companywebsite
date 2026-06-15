/* ============================================================
   TISSOMI — SHARED FOOTER
   ============================================================
   This file is the SINGLE SOURCE OF TRUTH for the footer.

   How it works:
   1. Every page has an empty placeholder just before </body>:
        <div id="site-footer"></div>
   2. On page load, the HTML below (FOOTER_HTML) is injected
      into that placeholder.

   TO EDIT THE FOOTER (logo, hours, address, links, columns):
   ----------------------------------------------------------
   Just edit the FOOTER_HTML template below. The change will
   automatically appear on EVERY page that includes this file
   and has the <div id="site-footer"></div> placeholder.
   ============================================================ */

const FOOTER_HTML = `
    <footer>
        <div class="footer-container">
            <div class="footer">

                <!-- Logo -->
                <div class="footer-head">
                    <div class="footer-logo">TISSOMI&reg;</div>
                </div>

                <div class="footer-info-container">

                    <!-- Hours column (hidden on mobile) -->
                    <div class="footer-heading-col hours-col">
                        <div class="footer-heading">Hours</div>
                        <div class="hours">
                            <div class="days">
                                <div class="day">Monday<br/>Tuesday<br/>Wednesday<br/>Thursday<br/>Friday<br/>Saturday</div>
                                <div class="time">10 am - 9 pm<br/>10 am - 9 pm<br/>10 am - 9 pm<br/>10 am - 9 pm<br/>10 am - 9 pm<br/>10 am - 9 pm</div>
                            </div>
                            <div class="days">
                                <div class="day">Sunday</div>
                                <div class="time">Closed</div>
                            </div>
                        </div>
                    </div>

                    <!-- Collections column (hidden on mobile) -->
                    <div class="footer-heading-col collection-col">
                        <div class="footer-heading">Collections</div>
                        <a href="./Collection" class="footer-collection">Tissomi</a>
                    </div>

                    <!-- Address column -->
                    <div class="footer-heading-col">
                        <div class="footer-heading">Marketed by</div>
                        <div class="footer-marketed">
                            TexIndienne <br/>
                            27CBNPJ8017L1Z5
                        </div>
                        <a href="https://maps.app.goo.gl/is2dXug5mt72gvUo8"
                            target="_blank" class="address">
                            306, Kalbadevi Road,<br/>
                            Mumbai 400002,<br/>
                            MH, India
                        </a>
                    </div>

                    <!-- Call us + social icons (mobile only) -->
                    <div class="footer-heading-col reach-us-mob">
                        <div class="footer-heading">Call us at</div>
                        <a href="tel:+918591392454" class="phone">+91 8591392454</a>
                        <div class="social-icons-mobile">
                            <a href="https://wa.me/+918591392454" target="_blank">
                                <img class="footer-social-img" src="./Images/Footer/whatsapp.png" alt="WhatsApp" />
                            </a>
                            <a href="https://www.instagram.com/tissomibyti/" target="_blank">
                                <img class="footer-social-img" src="./Images/Footer/instagram.png" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/company/texindienne" target="_blank">
                                <img class="footer-social-img" src="./Images/Footer/linkedln.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <!-- Social icons (desktop only) -->
                    <div class="footer-heading-col reach-us">
                        <div class="footer-heading">Reach us at</div>
                        <div class="social-icons">
                            <a href="https://wa.me/+918591392454" target="_blank">
                                <img class="footer-social-img" src="./Images/Footer/whatsapp.png" alt="WhatsApp" />
                            </a>
                            <a href="https://www.instagram.com/tissomibyti/" target="_blank">
                                <img class="footer-social-img" src="./Images/Footer/instagram.png" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/company/texindienne" target="_blank">
                                <img class="footer-social-img" src="./Images/Footer/linkedln.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </footer>
`;


/* ------------------------------------------------------------
   FOOTER INJECTION
   Injects FOOTER_HTML into the <div id="site-footer">
   placeholder on every page.
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
    const footerPlaceholder = document.getElementById("site-footer");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = FOOTER_HTML;
    }
});