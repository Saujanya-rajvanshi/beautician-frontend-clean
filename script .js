/* ================= EXPLORE BUTTON ================= */
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
    document.getElementById("work").scrollIntoView({
        behavior: "smooth"
    });
});


/* ================= NAVBAR SCROLL EFFECT ================= */
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = "translateY(-100%)";
    } else {
        navbar.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
});


/* ================= BOOKING PRICE AUTO UPDATE ================= */
const serviceSelect = document.getElementById("service");
const priceInput = document.getElementById("price");

serviceSelect.addEventListener("change", () => {
    const prices = {
        "Bridal Makeup": "₹20,000",
        "Engagement Makeup": "₹12,000",
        "Party Makeup": "₹8,000",
        "Hair Styling": "₹5,000"
    };

    priceInput.value = prices[serviceSelect.value] || "";
});


/* ================= BOOKING FORM CONNECTED TO BACKEND ================= */
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const service = document.getElementById("service").value;
    const price = document.getElementById("price").value;

    try {
        const response = await fetch("https://beautician-backend.onrender.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date,
                time,
                service,
                price
            })
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
