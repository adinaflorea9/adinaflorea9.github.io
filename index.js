function showHome() {
  var page = document.getElementById("home");
  page.style.display = "block";
  hideSkills();
  hideLanguages();
  hideProjects();
}

function showSkills() {
  var page = document.getElementById("skills");
  page.style.display = "block";
  hideHome();
  hideLanguages();
  hideProjects();
}

function showLanguages() {
  var page = document.getElementById("languages");
  page.style.display = "block";
  hideHome();
  hideSkills();
  hideProjects();
}

function showProjects() {
  var page = document.getElementById("projects");
  page.style.display = "block";
  hideHome();
  hideSkills();
  hideLanguages();
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

function hideProjects() {
  var page = document.getElementById("projects");
  page.style.display = "none";
}

showHome();
