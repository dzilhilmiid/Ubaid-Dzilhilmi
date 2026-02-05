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

/* ====== SCROLL TO TOP BUTTON ===== */
const aboutScroll = document.getElementById("aboutScroll");

if (aboutScroll) {
  window.addEventListener("scroll", () => {
    aboutScroll.style.display = window.scrollY > 300 ? "block" : "none";
  });

  aboutScroll.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}