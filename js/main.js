// Searchbox
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});

function handleSearch() {
  const keyword = searchInput.value.toLowerCase().trim();

  if (!keyword) return;

  const sections = document.querySelectorAll("section:not(#home)");

  let found = false;

  sections.forEach(section => {
    const text = section.innerText.toLowerCase();

    if (text.includes(keyword) && !found) {
      section.scrollIntoView({ behavior: "smooth" });
      found = true;
    }
  });

  if (!found) {
    alert("Data tidak ditemukan");
  }
}

// Skill
const skillItems = document.querySelectorAll(".skill-item");

skillItems.forEach(item => {
  const btn = item.querySelector(".skill-btn");

  btn.addEventListener("click", () => {

    skillItems.forEach(el => {
      if (el !== item) {
        el.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

// Project
function scrollProjects(direction) {
  const container = document.getElementById('projectsGrid');
  const scrollAmount = 320; // sesuai lebar card

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Resume
document.addEventListener("DOMContentLoaded", function () {
  const viewBtn = document.getElementById("viewBtn");
  const cvFrame = document.getElementById("cvFrame");

  viewBtn.addEventListener("click", function (e) {
    e.preventDefault();

    cvFrame.classList.toggle("active");

    if (cvFrame.classList.contains("active")) {
      viewBtn.innerHTML = "<i class='bx bx-hide'></i> Hide Resume";
    } else {
      viewBtn.innerHTML = "<i class='bx bx-show'></i> View Resume";
    }
  });
});