const typed = new Typed(".typing", {
  strings: ["I am a Coder", " I code in Python", "Discord Bot Creator", "Web Developer", "Student", "Human"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 40,
});
const typed2 = new Typed(".codetyping", {
  strings: ["Python", "HTML", "CSS", "JavaScript"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 40,
});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
