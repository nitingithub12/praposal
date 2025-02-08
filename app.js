const scriptURL = "https://script.google.com/macros/s/AKfycbxw9TewmvRqq8wEBQBCu9uOMJ1DR0FLJr8t3azHHJ-S/dev";

const parentElement = document.getElementById("parentElement");
const showMessage = document.getElementById("showMessage");
const changeColor = document.body.style;

propose = () => {
  // Send response to Google Sheets & trigger email
  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Your Crush", response: "Yes" }),
  })
    .then(response => response.text())
    .then(data => console.log("Response Saved & Email Sent:", data))
    .catch(error => console.error("Error:", error));

  // Hide proposal section and show confirmation
  parentElement.style.display = "none";
  showMessage.style.display = "block";
  changeColor.background =
    "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";
};

// Animate Text with Anim JS
var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
