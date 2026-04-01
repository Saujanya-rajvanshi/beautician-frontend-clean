document.addEventListener("DOMContentLoaded", () => {

    /* ================= EXPLORE BUTTON ================= */
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            document.getElementById("work").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    /* ================= NAVBAR SCROLL ================= */
    const navbar = document.getElementById("navbar");
    let lastScroll = 0;

    if (navbar) {
        window.addEventListener("scroll", () => {
            let currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = "translateY(-100%)";
            } else {
                navbar.style.transform = "translateY(0)";
            }
            lastScroll = currentScroll;
        });
    }

    /* ================= WHATSAPP BOOKING ================= */
    const whatsappBtn = document.getElementById("whatsappBtn");

    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", () => {

            const name = document.getElementById("name").value.trim();
            const service = document.getElementById("service").value;
            const date = document.getElementById("date").value;

            // Validation
            if (!name || !service || !date) {
                alert("⚠️ Please fill all details");
                return;
            }

            // Format date nicely
            const formattedDate = new Date(date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });

            // Message
            const message = 
`Hello, I want to book an appointment:

Name: ${name}
Service: ${service}
Date: ${formattedDate}

Please confirm availability.`;

            // Encode message
            const encodedMessage = encodeURIComponent(message);

            // ⚠️ Replace with your sister's WhatsApp number
            const phoneNumber = "919555843965";

            // Open WhatsApp
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, "_blank");

        });
    }
});