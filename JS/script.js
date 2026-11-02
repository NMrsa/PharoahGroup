/* ===========================================================
   script.js — Pharoah Group website
   Part 3: JavaScript Enhancements, Form Functionality & SEO support

   This single file is shared by every page (loaded with `defer`
   on all 5 HTML pages). Each section below checks for the
   elements it needs before running, so nothing breaks on a page
   that doesn't have a particular feature (e.g. the Leaflet map
   only initialises on Contact us.html, because only that page has
   a #leaflet-map element).

   Sections in this file:
     1. Mobile nav toggle
     2. Scroll-reveal animations (IntersectionObserver)
     3. Image lightbox gallery
     4. FAQ accordion
     5. Vehicle search / filter / sort (Services.html)
     6. Enquiry form validation + dynamic cost/availability response
     7. Contact form validation + mailto email compilation
     8. Leaflet interactive map (Contact us.html)
     9. Newsletter sign-up (Home.html) — lightweight async-style demo
    10. Showroom video — always muted, play/pause button only
   =========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ===========================================================
       1. MOBILE NAV TOGGLE
       =========================================================== */
    (function initNavToggle() {
        var toggle = document.querySelector(".nav-toggle");
        var nav = document.getElementById("site-nav");
        if (!toggle || !nav) return;

        toggle.addEventListener("click", function () {
            var isOpen = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        // Close the menu automatically once a nav link is clicked
        // (useful on mobile, where the menu covers page content).
        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    })();


    /* ===========================================================
       2. SCROLL-REVEAL ANIMATIONS
       Advanced DOM manipulation: every direct <section> inside
       <main> gets a `.reveal` class added dynamically, then an
       IntersectionObserver adds `.is-visible` the first time each
       one scrolls into view (CSS handles the actual fade/slide
       transition — see CSS/style.css section 7).
       =========================================================== */
    (function initScrollReveal() {
        var sections = document.querySelectorAll("main > section");
        if (!sections.length) return;

        sections.forEach(function (section) {
            section.classList.add("reveal");
        });

        if (!("IntersectionObserver" in window)) {
            // Fallback for very old browsers: just show everything.
            sections.forEach(function (s) { s.classList.add("is-visible"); });
            return;
        }

        var observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    })();


    /* ===========================================================
       3. IMAGE LIGHTBOX GALLERY
       Any <img data-lightbox="gallery"> on the page opens in the
       lightbox overlay (markup is injected into every page, just
       before </body>). Clicking an image collects every other
       data-lightbox image on the SAME page into a gallery array,
       so Prev/Next cycle through them.
       =========================================================== */
    (function initLightbox() {
        var overlay = document.getElementById("lightbox");
        if (!overlay) return;

        var images = Array.prototype.slice.call(
            document.querySelectorAll('img[data-lightbox="gallery"]')
        );
        if (!images.length) return;

        var imgEl = document.getElementById("lightbox-img");
        var captionEl = document.getElementById("lightbox-caption");
        var closeBtn = document.getElementById("lightbox-close");
        var prevBtn = document.getElementById("lightbox-prev");
        var nextBtn = document.getElementById("lightbox-next");
        var currentIndex = 0;

        function show(index) {
            currentIndex = (index + images.length) % images.length;
            var target = images[currentIndex];
            // Prefer the full-size src already on the page; the
            // lightbox simply displays it larger, per the brief's
            // "display images in a larger view when clicked".
            imgEl.src = target.currentSrc || target.src;
            imgEl.alt = target.alt || "";
            captionEl.textContent = target.dataset.caption || target.alt || "";
        }

        function open(index) {
            show(index);
            overlay.classList.add("is-open");
            document.body.style.overflow = "hidden";
            closeBtn.focus();
        }

        function close() {
            overlay.classList.remove("is-open");
            document.body.style.overflow = "";
        }

        images.forEach(function (img, index) {
            img.addEventListener("click", function () { open(index); });
            img.setAttribute("tabindex", "0");
            img.setAttribute("role", "button");
            img.setAttribute("aria-label", "View larger image: " + (img.dataset.caption || img.alt || "photo"));
            img.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    open(index);
                }
            });
        });

        closeBtn.addEventListener("click", close);
        prevBtn.addEventListener("click", function () { show(currentIndex - 1); });
        nextBtn.addEventListener("click", function () { show(currentIndex + 1); });

        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) close();
        });

        document.addEventListener("keydown", function (e) {
            if (!overlay.classList.contains("is-open")) return;
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") show(currentIndex - 1);
            if (e.key === "ArrowRight") show(currentIndex + 1);
        });
    })();


    /* ===========================================================
       4. FAQ ACCORDION
       =========================================================== */
    (function initAccordion() {
        var triggers = document.querySelectorAll(".accordion-trigger");
        if (!triggers.length) return;

        triggers.forEach(function (trigger) {
            var panel = trigger.nextElementSibling;
            if (!panel) return;

            trigger.addEventListener("click", function () {
                var isOpen = trigger.getAttribute("aria-expanded") === "true";

                // Close any other open panel in the same accordion group
                // so only one answer shows at a time.
                var group = trigger.closest(".accordion");
                if (group) {
                    group.querySelectorAll(".accordion-trigger").forEach(function (other) {
                        if (other !== trigger) {
                            other.setAttribute("aria-expanded", "false");
                            other.nextElementSibling.style.maxHeight = null;
                        }
                    });
                }

                trigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
                panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
            });
        });
    })();


    /* ===========================================================
       5. VEHICLE SEARCH / FILTER / SORT (Services.html)
       =========================================================== */
    (function initVehicleFilters() {
        var searchInput = document.getElementById("vehicle-search");
        var makeSelect = document.getElementById("vehicle-make");
        var typeSelect = document.getElementById("vehicle-type");
        var sortSelect = document.getElementById("vehicle-sort");
        var countEl = document.getElementById("inventory-count");
        var noResultsEl = document.getElementById("no-results");

        if (!searchInput || !makeSelect || !typeSelect || !sortSelect) return;

        var cards = Array.prototype.slice.call(document.querySelectorAll(".vehicle-card"));

        function applyFilters() {
            var query = searchInput.value.trim().toLowerCase();
            var make = makeSelect.value;
            var type = typeSelect.value;
            var visibleCount = 0;

            cards.forEach(function (card) {
                var name = (card.dataset.name || "").toLowerCase();
                var cardMake = card.dataset.make || "";
                var cardType = card.dataset.type || "";

                var matchesQuery = !query || name.indexOf(query) !== -1 || cardMake.toLowerCase().indexOf(query) !== -1;
                var matchesMake = make === "all" || cardMake === make;
                var matchesType = type === "all" || cardType === type;
                var isMatch = matchesQuery && matchesMake && matchesType;

                card.classList.toggle("is-hidden", !isMatch);
                if (isMatch) visibleCount++;
            });

            if (countEl) {
                countEl.textContent = visibleCount + (visibleCount === 1 ? " vehicle found" : " vehicles found");
            }
            if (noResultsEl) {
                noResultsEl.classList.toggle("is-visible", visibleCount === 0);
            }
        }

        function applySort() {
            var sortBy = sortSelect.value;
            if (sortBy === "default") {
                applyFilters();
                return;
            }

            // Sort within each grid independently (Auto Investments /
            // ORIGINS), so the two tiers stay visually separate.
            document.querySelectorAll(".vehicle-grid").forEach(function (grid) {
                var gridCards = Array.prototype.slice.call(grid.querySelectorAll(".vehicle-card"));

                gridCards.sort(function (a, b) {
                    if (sortBy === "price-asc") {
                        return Number(a.dataset.price) - Number(b.dataset.price);
                    }
                    if (sortBy === "price-desc") {
                        return Number(b.dataset.price) - Number(a.dataset.price);
                    }
                    if (sortBy === "name-asc") {
                        return (a.dataset.name || "").localeCompare(b.dataset.name || "");
                    }
                    return 0;
                });

                gridCards.forEach(function (card) { grid.appendChild(card); });
            });

            applyFilters();
        }

        searchInput.addEventListener("input", applyFilters);
        makeSelect.addEventListener("change", applyFilters);
        typeSelect.addEventListener("change", applyFilters);
        sortSelect.addEventListener("change", applySort);

        applyFilters();
    })();


    /* ===========================================================
       6. ENQUIRY FORM — validation + dynamic cost/availability response
       =========================================================== */
    (function initEnquiryForm() {
        var form = document.getElementById("enquiry-form");
        if (!form) return;

        var spinner = document.getElementById("enquiry-spinner");
        var responseBox = document.getElementById("enquiry-response");

        // A small lookup table standing in for a real inventory/pricing
        // backend. In production this data would come from a server;
        // here it lets the enquiry response be genuinely dynamic based
        // on what the visitor selected, as the brief requires ("present
        // the user with a response related to the cost, availability,
        // or another relevant aspect").
        var enquiryInfo = {
            sales: {
                label: "Sales Enquiry",
                detail: "Our sales team typically responds within 1 business day with current pricing and availability for the vehicle(s) you're interested in."
            },
            sell: {
                label: "Sell My Car / Trade-In Valuation",
                detail: "We'll contact you to arrange a free, no-obligation valuation. Most valuations are completed within 24-48 hours of inspection."
            },
            finance: {
                label: "Finance Application",
                detail: "A finance consultant will reach out with indicative monthly repayment options from our banking partners, based on the vehicle and deposit you specify."
            },
            "6ixpck": {
                label: "6IXPCK Customs Enquiry",
                detail: "Our custom builds team will follow up with a quote once they understand the scope of work (wrap, body kit, or full custom build)."
            },
            rental: {
                label: "Black Velvet Rental Enquiry",
                detail: "Black Velvet Rentals will confirm vehicle availability for your requested dates and send through a rental quote."
            },
            other: {
                label: "Other",
                detail: "A member of our team will review your message and get back to you with the most relevant information."
            }
        };

        var vehiclePricing = {
            "lamborghini aventador": "from R 5,890,000",
            "porsche 911 turbo s": "from R 3,780,000",
            "ferrari roma": "from R 6,450,000",
            "range rover sv": "from R 3,150,000",
            "bmw m4 competition": "from R 980,000",
            "mercedes-amg c63": "from R 950,000",
            "audi rs q8": "from R 995,000",
            "volkswagen golf 7 gti": "from R 750,000"
        };

        function validate() {
            var valid = true;

            valid = validateField("full-name", function (v) { return v.trim().length >= 2; }) && valid;
            valid = validateField("email", function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }) && valid;
            valid = validateField("phone", function (v) { return /^(\+27|0)[0-9\s]{9,12}$/.test(v.trim()); }) && valid;
            valid = validateField("enquiry-type", function (v) { return v !== ""; }) && valid;
            valid = validateField("message", function (v) { return v.trim().length >= 10; }) && valid;

            return valid;
        }

        function validateField(id, testFn) {
            var field = document.getElementById(id);
            var errorEl = document.getElementById(id + "-error");
            var isValid = testFn(field.value);

            field.classList.toggle("is-invalid", !isValid);
            field.classList.toggle("is-valid", isValid);
            if (errorEl) errorEl.classList.toggle("is-visible", !isValid);

            return isValid;
        }

        // Clear a field's error state as soon as the visitor fixes it.
        form.querySelectorAll("input, select, textarea").forEach(function (field) {
            field.addEventListener("input", function () {
                field.classList.remove("is-invalid");
                var errorEl = document.getElementById(field.id + "-error");
                if (errorEl) errorEl.classList.remove("is-visible");
            });
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            if (!validate()) {
                responseBox.className = "form-response is-visible error";
                responseBox.innerHTML = "<h3>Please check the highlighted fields</h3><p>A few details need fixing before we can process your enquiry.</p>";
                return;
            }

            var typeKey = document.getElementById("enquiry-type").value;
            var vehicle = document.getElementById("vehicle-interest").value.trim();
            var info = enquiryInfo[typeKey];

            // Simulated AJAX: this is a static coursework site with no
            // live backend, so we simulate the async request/response
            // cycle with a short delay instead of a real fetch() call.
            // See README.md "Part 3 Details" for this design decision.
            spinner.classList.add("is-visible");
            responseBox.className = "form-response";
            form.querySelector("button[type=submit]").disabled = true;

            window.setTimeout(function () {
                spinner.classList.remove("is-visible");
                form.querySelector("button[type=submit]").disabled = false;

                var priceLine = "";
                var vehicleKey = vehicle.toLowerCase();
                if (vehicle && vehiclePricing[vehicleKey]) {
                    priceLine = "<dt>Indicative Price</dt><dd>" + vehiclePricing[vehicleKey] + "</dd>";
                } else if (vehicle) {
                    priceLine = "<dt>Vehicle of Interest</dt><dd>" + escapeHtml(vehicle) + " &mdash; our team will confirm exact pricing and availability.</dd>";
                }

                responseBox.className = "form-response is-visible success";
                responseBox.innerHTML =
                    "<h3>Thank you, " + escapeHtml(document.getElementById("full-name").value.trim()) + "!</h3>" +
                    "<p>Your " + info.label.toLowerCase() + " has been received. " + info.detail + "</p>" +
                    "<dl>" + priceLine + "<dt>Availability</dt><dd>Typically confirmed within 1-2 business days.</dd></dl>";

                form.reset();
                form.querySelectorAll(".is-valid").forEach(function (f) { f.classList.remove("is-valid"); });
                responseBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 900);
        });
    })();


    /* ===========================================================
       7. CONTACT FORM — validation + mailto email compilation
       =========================================================== */
    (function initContactForm() {
        var form = document.getElementById("contact-form");
        if (!form) return;

        var spinner = document.getElementById("contact-spinner");
        var responseBox = document.getElementById("contact-response");
        var RECIPIENT = "info@pharoahgroup.com"; // recipient stated in code, per the brief

        function validate() {
            var valid = true;
            valid = validateField("contact-name", function (v) { return v.trim().length >= 2; }) && valid;
            valid = validateField("contact-email", function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }) && valid;

            // Phone is optional on this form, but if the visitor does
            // enter one, it must still match the expected format.
            var phoneField = document.getElementById("contact-phone");
            if (phoneField.value.trim() !== "") {
                valid = validateField("contact-phone", function (v) { return /^(\+27|0)[0-9\s]{9,12}$/.test(v.trim()); }) && valid;
            }

            valid = validateField("contact-type", function (v) { return v !== ""; }) && valid;
            valid = validateField("contact-message", function (v) { return v.trim().length >= 10; }) && valid;
            return valid;
        }

        function validateField(id, testFn) {
            var field = document.getElementById(id);
            var errorEl = document.getElementById(id + "-error");
            var isValid = testFn(field.value);

            field.classList.toggle("is-invalid", !isValid);
            field.classList.toggle("is-valid", isValid);
            if (errorEl) errorEl.classList.toggle("is-visible", !isValid);

            return isValid;
        }

        form.querySelectorAll("input, select, textarea").forEach(function (field) {
            field.addEventListener("input", function () {
                field.classList.remove("is-invalid");
                var errorEl = document.getElementById(field.id + "-error");
                if (errorEl) errorEl.classList.remove("is-visible");
            });
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            if (!validate()) {
                responseBox.className = "form-response is-visible error";
                responseBox.innerHTML = "<h3>Please check the highlighted fields</h3><p>A few details need fixing before your message can be sent.</p>";
                return;
            }

            var name = document.getElementById("contact-name").value.trim();
            var email = document.getElementById("contact-email").value.trim();
            var phone = document.getElementById("contact-phone").value.trim();
            var type = document.getElementById("contact-type").value;
            var message = document.getElementById("contact-message").value.trim();

            spinner.classList.add("is-visible");
            responseBox.className = "form-response";

            window.setTimeout(function () {
                spinner.classList.remove("is-visible");

                // Compile the validated input into an email and open the
                // visitor's own email client with it pre-filled, ready to
                // send to the recipient stated in the code above. There is
                // no backend on this static site to send mail server-side,
                // so a mailto: link is the practical equivalent — this is
                // documented in README.md.
                var subject = "Pharoah Group Website Enquiry: " + type;
                var bodyLines = [
                    "Name: " + name,
                    "Email: " + email,
                    phone ? "Phone: " + phone : null,
                    "Message Type: " + type,
                    "",
                    message
                ].filter(Boolean);

                var mailtoLink = "mailto:" + RECIPIENT +
                    "?subject=" + encodeURIComponent(subject) +
                    "&body=" + encodeURIComponent(bodyLines.join("\n"));

                responseBox.className = "form-response is-visible success";
                responseBox.innerHTML =
                    "<h3>Thanks, " + escapeHtml(name) + " &mdash; your message is ready to send</h3>" +
                    "<p>We've compiled your message. Click below to open it in your email app and send it to <strong>" + RECIPIENT + "</strong>.</p>" +
                    '<p><a class="cta-button" href="' + mailtoLink + '">Open &amp; Send Email</a></p>' +
                    "<dl><dt>Type</dt><dd>" + escapeHtml(type) + "</dd></dl>";

                // Also attempt to open the mail client automatically.
                window.location.href = mailtoLink;

                form.reset();
                form.querySelectorAll(".is-valid").forEach(function (f) { f.classList.remove("is-valid"); });
                responseBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 700);
        });
    })();


    /* ===========================================================
       8. LEAFLET INTERACTIVE MAP (Contact us.html)
       =========================================================== */
    (function initLeafletMap() {
        var mapEl = document.getElementById("leaflet-map");
        if (!mapEl || typeof L === "undefined") return;

        var bryanston = [
            parseFloat(mapEl.dataset.bryanstonLat),
            parseFloat(mapEl.dataset.bryanstonLng)
        ];
        var sandton = [
            parseFloat(mapEl.dataset.sandtonLat),
            parseFloat(mapEl.dataset.sandtonLng)
        ];

        var map = L.map(mapEl, { scrollWheelZoom: false }).setView(bryanston, 12);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        L.marker(bryanston).addTo(map)
            .bindPopup("<strong>Bryanston Showroom</strong><br>3 Winnie Mandela Dr, Bryanston, Sandton<br>011 444 9460")
            .openPopup();

        L.marker(sandton).addTo(map)
            .bindPopup("<strong>Sandton City Concierge Desk</strong><br>By appointment only");

        var bounds = L.latLngBounds([bryanston, sandton]);
        map.fitBounds(bounds, { padding: [40, 40] });

        // Re-enable scroll-zoom only once the visitor clicks into the
        // map, so normal page scrolling isn't hijacked by the map.
        map.on("click", function () { map.scrollWheelZoom.enable(); });
    })();


    /* ===========================================================
       9. NEWSLETTER SIGN-UP (Home.html) — lightweight async demo
       =========================================================== */
    (function initNewsletter() {
        var form = document.querySelector(".newsletter form");
        if (!form) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var emailField = document.getElementById("newsletter-email");
            if (!emailField.checkValidity()) {
                emailField.reportValidity();
                return;
            }

            var button = form.querySelector("button[type=submit]");
            var originalText = button.textContent;
            button.textContent = "Subscribing...";
            button.disabled = true;

            window.setTimeout(function () {
                button.textContent = "Subscribed!";
                emailField.value = "";
                window.setTimeout(function () {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 2000);
            }, 600);
        });
    })();


    /* ===========================================================
       10. SHOWROOM VIDEO — always muted, play/pause button only
       Runs only on pages that have #showroom-video and
       #video-toggle; otherwise it does nothing.
       =========================================================== */
    (function initShowroomVideo() {
        var tour = document.getElementById("showroom-video");
        var tourBtn = document.getElementById("video-toggle");
        if (!tour || !tourBtn) return;

        tour.muted = true;                       // always silent
        tour.volume = 0;

        // If anything ever un-mutes it, mute it again
        tour.addEventListener("volumechange", function () {
            if (!tour.muted || tour.volume > 0) {
                tour.muted = true;
                tour.volume = 0;
            }
        });

        // Block the right-click menu (which has Save video as, Loop, Picture-in-picture, etc.)
        tour.addEventListener("contextmenu", function (e) { e.preventDefault(); });

        function updateButton() {
            var playing = !tour.paused;
            tourBtn.setAttribute("aria-label", playing ? "Pause video" : "Play video");
            tourBtn.innerHTML = playing
                ? '<span aria-hidden="true">&#10074;&#10074;</span>'   // pause icon
                : '<span aria-hidden="true">&#9654;</span>';           // play icon
        }

        tourBtn.addEventListener("click", function () {
            if (tour.paused) { tour.play(); } else { tour.pause(); }
        });

        tour.addEventListener("play", updateButton);
        tour.addEventListener("pause", updateButton);
        updateButton();
    })();


    /* ===========================================================
       Shared helper
       =========================================================== */
    function escapeHtml(str) {
        var div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

});

<!-- References
 JavaScript Course for Biginners by Programmingwithmosh
  link= https://youtu.be/W6NZfCO5SIk?si=WjMMjS89znedg1vo -->