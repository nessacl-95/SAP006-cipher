import cipher from './cipher.js';

document.getElementById("cifrarMensagem").addEventListener("click", cipherEncode);
document.getElementById("decifrarMensagem").addEventListener("click", cipherDecode);

function cipherEncode(e) {
  e.preventDefault();
  const string = document.getElementById("input").value
  const offset = parseInt(document.getElementById("offset").value)
  const result = cipher.encode(offset, string);
  document.getElementById("output").innerHTML = result;
}

function cipherDecode(e) {
  e.preventDefault();
  const string = document.getElementById("input").value
  const offset = parseInt(document.getElementById("offset").value)
  const result = cipher.decode(offset, string);
  document.getElementById("output").innerHTML = result;
}
