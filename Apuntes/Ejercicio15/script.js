const area = document.getElementById("area");
const inc = document.getElementById("inc"), dec = document.getElementById("dec"), upper = document.getElementById("upper");
const color = document.getElementById("color");
const chars = document.getElementById("chars"), words = document.getElementById("words");
let fontSize = 16;
area.style.fontSize = fontSize + "px";

inc.addEventListener("click", ()=> { fontSize += 2; area.style.fontSize = fontSize + "px"; });
dec.addEventListener("click", ()=> { fontSize = Math.max(8,fontSize-2); area.style.fontSize = fontSize + "px"; });
upper.addEventListener("click", ()=> { area.value = area.value.toUpperCase(); updateCounts(); });
color.addEventListener("input", ()=> { area.style.color = color.value; });

function updateCounts() {
  const v = area.value;
  chars.textContent = v.length;
  words.textContent = v.trim() ? v.trim().split(/\s+/).length : 0;
}
area.addEventListener("input", updateCounts);
