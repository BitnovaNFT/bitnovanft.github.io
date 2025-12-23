bitnovanft/
│
├── index.html
├── about.html
├── features.html
├── roadmap.html
├── community.html
├── contact.html
├── terms.html
├── privacy.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── assets/
    └── logo.png
<header class="navbar">
  <div class="logo">BitnovaNFT</div>

  <div class="menu-toggle" onclick="toggleMenu()">☰</div>

  <nav id="menu">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="features.html">Features</a>
    <a href="roadmap.html">Roadmap</a>
    <a href="community.html">Community Growth</a>
    <a href="terms.html">Terms</a>
    <a href="privacy.html">Privacy</a>
    <a href="contact.html">Contact</a>
  </nav>
</header>
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
