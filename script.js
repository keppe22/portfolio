console.log("Boot screen loaded.");

setTimeout(() => {
  document.getElementById("bootScreen").style.display = "none";
  document.getElementById("desktop").style.display = "block";
}, 4000); // 4-second boot screen

console.log("Switching to desktop view.");
