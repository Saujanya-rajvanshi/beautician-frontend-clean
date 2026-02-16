document.addEventListener("DOMContentLoaded", () => {

    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            document.getElementById("work").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

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

    const serviceSelect = document.getElementById("service");
    const priceInput = document.getElementById("price");

    if (serviceSelect && priceInput) {
        serviceSelect.addEventListener("change", () => {
            const prices = {
                "Bridal Makeup": "₹20,000",
                "Engagement Makeup": "₹12,000",
                "Party Makeup": "₹8,000",
                "Hair Styling": "₹5,000"
            };

            priceInput.value = prices[serviceSelect.value] || "";
        });
    }

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const service = document.getElementById("service").value;
            const price = document.getElementById("price").value;

            try {
                const response = await fetch("https://beautician-backend.onrender.com/api/bookings/book", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ date, time, service, price })
                });

                if (!response.ok) {
                    throw new Error("Failed to save booking");
                }

                alert("✨ Booking Saved Successfully ✨");
                bookingForm.reset();
                priceInput.value = "";

            } catch (error) {
                alert("❌ Booking Failed. Please try again.");
                console.error(error);
            }
        });
    }

});
