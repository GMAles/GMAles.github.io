document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("toggle-papers");
const fullList = document.getElementById("papers-full");
if (toggle && fullList) {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    fullList.open = true;
    fullList.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
