const yearElement = document.getElementById("currentYear");
const menuButton = document.getElementById("menuButton");
const globalNav = document.getElementById("globalNav");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

if (menuButton && globalNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = globalNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  globalNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      globalNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (form && formMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "お問い合わせありがとうございます。担当者よりご連絡いたします。";
    form.reset();
  });
}
