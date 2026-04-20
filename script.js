function setTheme(theme) {
  localStorage.setItem("theme", theme);
  window.location.href = "mindset.html";
}

function nextPage() {
  alert("Expect the unexpected.\nAccept the unexpected.");
  window.location.href = "shadow.html";
}

function saveShadow() {
  const word = document.getElementById("shadowWord").value;
  localStorage.setItem("shadow", word);
  window.location.href = "doors1.html";
}

function forcedDoor() {
  alert("Some paths choose you.");
  window.location.href = "doors2.html";
}

function safeDoor() {
  alert("Nothing bad was ever behind this door.\nOnly fear.");
  window.location.href = "final.html";
}

window.onload = function() {
  const shadow = localStorage.getItem("shadow");
  const finalMsg = document.getElementById("finalMessage");

  if(finalMsg && shadow) {
    finalMsg.innerText = `You feared your "${shadow}".\nBut you kept moving.`;
  }
};

function showResult() {
  document.getElementById("result").innerText =
    "Expect the unexpected.\nAccept the unexpected.\nJust start. Don't stay stuck.";
}
