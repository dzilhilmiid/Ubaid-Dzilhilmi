/* ==== CONTACT FORM VALIDATION =====*/
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ⬅️ STOP redirect

    const status = form.querySelector(".form-status");
    const btn = form.querySelector(".btn-send");

    const data = new FormData(form);

    btn.disabled = true;
    btn.innerText = "Sending...";

    fetch("https://formspree.io/f/xojwjwqy", {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        status.style.display = "block";
        status.style.color = "white";
        status.innerText = "Message sent successfully. Thank you!";
        form.reset();
      } else {
        throw new Error("Form failed to submit");
      }
    })
    .catch(() => {
      status.style.display = "block";
      status.style.color = "red";
      status.innerText = "Oops! Something went wrong. Try again.";
    })
    .finally(() => {
      btn.disabled = false;
      btn.innerText = "Send Message";
    });
  });
}

const toggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar-full');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

function scrollMenu(amount) {
  const menu = document.querySelector(".story-menu");
  menu.scrollBy({
    left: amount,
    behavior: "smooth"
  });
}

const skillBtns = document.querySelectorAll(".skill-btn");

skillBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;

    parent.classList.toggle("active");
  });
});