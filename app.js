const parentElement = document.getElementById("parentElement");
const showMessage = document.getElementById("showMessage");

function propose() {
    parentElement.style.display = "none";
    showMessage.style.display = "block";
    document.body.style.background = "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";

    // Confetti Animation 🎉
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    // Google Sheets API Call (Data Save + Email Notification)
    fetch("https://script.google.com/macros/s/AKfycbzxRqUNbldhR3FTdmryWFJs3iCpvdXAp6XSStLYCrha0KL6b82X_6PasH042JhCK6GAeA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "My Crush", response: "Yes! ❤️" })
    });
}
