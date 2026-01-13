// Get form and list elements
const rcaForm = document.getElementById("rcaForm");
const rcaList = document.getElementById("rcaList");

// Load existing RCA data from localStorage
let rcaData = JSON.parse(localStorage.getItem("rcaData")) || [];

// Display RCA on page load
displayRCA();

// Form submit event
rcaForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("issueTitle").value;
  const desc = document.getElementById("issueDesc").value;
  const rootCause = document.getElementById("rootCause").value;
  const resolution = document.getElementById("resolution").value;

  const rca = {
    title,
    desc,
    rootCause,
    resolution,
    date: new Date().toLocaleString(),
  };

  rcaData.push(rca);
  localStorage.setItem("rcaData", JSON.stringify(rcaData));

  rcaForm.reset();
  displayRCA();
});

// Function to display RCA
function displayRCA() {
  rcaList.innerHTML = "";

  rcaData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "rca-card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Description:</strong> ${item.desc}</p>
      <p><strong>Root Cause:</strong> ${item.rootCause}</p>
      <p><strong>Resolution:</strong> ${item.resolution}</p>
      <p><small>Saved on: ${item.date}</small></p>
    `;

    rcaList.appendChild(card);
  });
}
