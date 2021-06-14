import cipher from './cipher.js';

document.getElementById("cifrarMensagem").addEventListener("click", cipherEncode);
document.getElementById("decifrarMensagem").addEventListener("click", cipherDecode);

function cipherEncode(e){
    let string = document.getElementById("inputCifra").value
    let offset = parseInt(document.getElementById("cifrarOffset").value)
    let result = cipher.encode(offset, string);
    e.preventDefault();

    document.getElementById("outputCifra").innerHTML = result;
}

function cipherDecode(e){
    let string = document.getElementById("inputDecifra").value
    let offset = parseInt(document.getElementById("decifrarOffset").value)
    let result = cipher.decode(offset, string);
    e.preventDefault();

    document.getElementById("outputDecifra").innerHTML = result;
    
}
console.log(cipher)