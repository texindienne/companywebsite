/* ============================================================
   TISSOMI — SHARED NAVBAR
   ============================================================
   This file is the SINGLE SOURCE OF TRUTH for the navbar.

   How it works:
   1. Every page has an empty placeholder in its <body>:
        <div id="site-navbar"></div>
   2. On page load, the HTML below (NAVBAR_HTML) is injected
      into that placeholder.
   3. The mobile menu / scroll behaviour is then wired up.

   TO EDIT THE NAVBAR (logo, menu items, links, social icons):
   ---------------------------------------------------------
   Just edit the NAVBAR_HTML template below. The change will
   automatically appear on EVERY page that includes this file
   and has the <div id="site-navbar"></div> placeholder.
   ============================================================ */

const NAVBAR_HTML = `
    <header class="header">
        <div class="nav-container">
            <div class="nav-main">

                <!-- Logo (links back to home) -->
                <a href="./" class="nav-logo">TISSOMI</a>

                <!-- Hamburger icon (mobile only) -->
                <div class="nav-open-menu">
                    <span></span>
                </div>

                <!-- Dark overlay shown behind the mobile menu -->
                <div class="menu-overlay"></div>

                <!-- Main navigation menu -->
                <nav class="nav-menu">

                    <!-- Close icon (mobile only) -->
                    <div class="close-nav-menu">
                        <i class="fa-solid fa-x"></i>
                    </div>

                    <ul class="menu">

                        <!-- ABOUT US (dropdown) -->
                        <li class="menu-item menu-item-has-children">
                            <a data-toggle="sub-menu">ABOUT US<i class="plus"></i></a>
                            <ul class="sub-menu">
                                <li class="menu-item"><a href="./Strategy">OUR STRATEGY</a></li>
                                <li class="menu-item"><a href="./Values">OUR VALUES</a></li>
                            </ul>
                        </li>

                        <!-- COLLECTION -->
                        <li class="menu-item">
                            <a href="./Collection">COLLECTION</a>
                        </li>

                        <!-- CAREERS (dropdown) -->
                        <li class="menu-item menu-item-has-children">
                            <a data-toggle="sub-menu">CAREERS<i class="plus"></i></a>
                            <ul class="sub-menu">
                                <li class="menu-item"><a href="./Careers">LIFE AT TISSOMI</a></li>
                                <li class="menu-item">
                                    <a href="https://www.linkedin.com/company/texindienne" target="_blank">
                                        JOIN US
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <!-- DISTRIBUTION -->
                        <li class="menu-item">
                            <a href="./Distribution">DISTRIBUTION</a>
                        </li>

                        <!-- CONNECT -->
                        <li class="menu-item">
                            <a href="./Connect">CONNECT</a>
                        </li>
                    </ul>

                    <!-- Social icons shown only inside the mobile menu -->
                    <div class="nav-icons-mobile">
                        <a href="https://wa.me/+918591392454" target="_blank">
                            <img class="nav-social-img" src="./Images/Footer/whatsappWhite.png" alt="WhatsApp" />
                        </a>
                        <a href="https://www.instagram.com/tissomibyti/" target="_blank">
                            <img class="nav-social-img" src="./Images/Footer/instagramWhite.png" alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/texindienne" target="_blank">
                            <img class="nav-social-img" src="./Images/Footer/linkedlnWhite.png" alt="LinkedIn" />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </header>
`;


/* ------------------------------------------------------------
   PAGE LOADER
   Hides the full-screen logo loader once the page has loaded.
   ------------------------------------------------------------ */
window.addEventListener("load", () => {
    document.body.style.overflow = 'hidden';
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    if (document.body.contains(loader)) {
        document.body.removeChild(loader);
        document.body.style.overflow = '';
    }
});


/* ------------------------------------------------------------
   NAVBAR INJECTION + MOBILE MENU / SCROLL BEHAVIOUR
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {

    // Step 1: Inject the shared navbar HTML into the placeholder
    const navbarPlaceholder = document.getElementById("site-navbar");
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = NAVBAR_HTML;
    }

    // Step 2: Grab references to the now-injected nav elements
    const openNavMenu = document.querySelector(".nav-open-menu"),
        closeNavMenu = document.querySelector(".close-nav-menu"),
        navMenu = document.querySelector(".nav-menu"),
        menuOverlay = document.querySelector(".menu-overlay"),
        navbar = document.querySelector(".header"),
        mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);

    // Close the mobile menu by clicking the dark overlay
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");

        if (navMenu.classList.contains("open")) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    // Handle expanding/collapsing dropdown items on mobile
    navMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") &&
            window.innerWidth <= mediaSize) {

            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;

            if (menuItemHasChildren.classList.contains("active")) {
                collapseSubMenu();
            } else {
                // Collapse any other open dropdown first
                if (navMenu.querySelector(".menu-item-has-children.active")) {
                    collapseSubMenu();
                }
                // Expand this dropdown
                menuItemHasChildren.classList.add("active");
                const subMenu = menuItemHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    });

    // Reset mobile menu state if the window is resized back to desktop
    window.addEventListener("resize", function () {
        if (this.innerWidth > mediaSize) {
            resizeFix();
        }
    });

    // Add/remove the "scrolled" style on the navbar
    window.addEventListener("scroll", handleScroll);

    function collapseSubMenu() {
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
            .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
            .classList.remove("active");
    }

    function resizeFix() {
        if (navMenu.classList.contains("open")) {
            toggleNav();
        }
        if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
        }
    }

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const topThreshold = 50;

        if (scrollPosition > topThreshold) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});
