const form = document.getElementById("thought-form");
const thoughtInput = document.getElementById("thought");
const thoughtsList = document.getElementById("thoughts-list");
const timerDisplay = document.getElementById("timer");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if thought text contains the word "suicide"
  const thoughtText = thoughtInput.value.trim();
  const containsSuicide = thoughtText.toLowerCase().includes("suicide");

  // Create a new thought item and add it to the list
  if (thoughtText !== "") {
    const thoughtItem = document.createElement("li");
    thoughtItem.innerText = thoughtText;

    // Add the thought item to the list
    thoughtsList.appendChild(thoughtItem);

    // Clear the input field
    thoughtInput.value = "";

    // Set a timer to remove the thought item after 5 seconds
    let remainingTime = 5;
    timerDisplay.innerText = remainingTime;

    const countdownTimer = setInterval(() => {
      remainingTime--;
      timerDisplay.innerText = remainingTime;
      if (remainingTime === 0) {
        clearInterval(countdownTimer);
        thoughtItem.remove();
        timerDisplay.innerText = "";
      }
    }, 1000);

    // Display suicide prevention links if the thought contains the word "suicide"
    if (containsSuicide) {
      const suicideLinks = document.createElement("div");
      suicideLinks.innerHTML = `
        <p>If you feel like you're in a crisis, please talk to someone immediately:</p>
        <ul>
          <li><a href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/suicidal-feelings/useful-contacts/" target="_blank">Mind</a></li>
          <li><a href="https://giveusashout.org/" target="_blank">GiveUsashout</a></li>
          <li><a href="https://www.samaritans.org/how-we-can-help/contact-samaritan/" target="_blank">Samaritans</a></li>
        </ul>
      `;
      thoughtsList.appendChild(suicideLinks);
    }
  }
});






