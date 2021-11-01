import cipher from './cipher.js';
import errors from './errors.js';

const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");
const message = document.getElementById("message");
const copyButton = document.getElementById("copy-area");
const copyMessage = document.getElementById("copy-message");
const encode = document.getElementById("encode");
const decode = document.getElementById("decode");

encode.addEventListener("click", (e) => {
  e.preventDefault();
  const string = document.getElementById("input").value;
  const offset = parseInt(document.getElementById("offset").value);
  const result = cipher.encode(offset, string);
  document.getElementById("output").innerHTML = result;
});

decode.addEventListener("click", (e) => {
  e.preventDefault();
  const string = document.getElementById("input").value;
  const offset = parseInt(document.getElementById("offset").value);
  const result = cipher.decode(offset, string);
  document.getElementById("output").innerHTML = result;
})

closeButton.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

copyButton.addEventListener("click", () => {
  const output = document.getElementById("output");
  output.select();
  if (!output.value) {
    modal.style.display = "block";
    message.innerHTML = errors.text;
  } else {
    navigator.clipboard.writeText(output.value)
      .then(() => copyMessage.innerHTML = errors.copied);
  }

  window.onclick = (event) => {
    if (event.target != output || event.target != copyButton) {
      copyMessage.innerHTML = errors.copy;
    }
  }
});

export const errorsMessage = (offset, string) => {
  if (offset !== offset) {
    modal.style.display = "block";
    message.innerHTML = errors.key;
  } else if (!string) {
    modal.style.display = "block";
    message.innerHTML = errors.text;
  }
}
