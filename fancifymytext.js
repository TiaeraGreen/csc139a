function makeBigger() {
  let textArea = document.getElementById("textArea");
  textArea.style.fontSize = "24pt";
}

function applyStyles() {
  let textArea = document.getElementById("textArea");
  let fancyShmancy = document.getElementById("fancyShmancy");

  if (fancyShmancy.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";

    textArea.style.textDecoration = "none";
  }
}

function makeMoo() {
  let textArea = document.getElementById("textArea");
  let text = textArea.value.toUpperCase();
  let sentences = text.split(".");
  text = sentences
    .map((sentence) => sentence.trim() + (sentence ? "-Moo" : ""))
    .join(". ");
  textArea.value = text;
}
