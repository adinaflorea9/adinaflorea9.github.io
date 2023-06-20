function showHome() {
  var page = document.getElementById("home");
  page.style.display = "block";
  hideSkills();
  hideLanguages();
}

function showSkills() {
  var page = document.getElementById("skills");
  page.style.display = "block";
  hideHome();
  hideLanguages();
}

function showLanguages() {
  var page = document.getElementById("languages");
  page.style.display = "block";
  hideHome();
  hideSkills();
}

function hideHome() {
  var page = document.getElementById("home");
  page.style.display = "none";
}

function hideSkills() {
  var page = document.getElementById("skills");
  page.style.display = "none";
}

function hideLanguages() {
  var page = document.getElementById("languages");
  page.style.display = "none";
}

showHome();
