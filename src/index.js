import cipher from './cipher.js';

document.getElementById("cifrarMensagem").addEventListener("click", cipherEncode);
document.getElementById("decifrarMensagem").addEventListener("click", cipherDecode);

function cipherEncode(e){
    let string = document.getElementById("cifrarString").value
    let offset = parseInt(document.getElementById("cifrarOffset").value)
    let result = cipher.encode(offset, string);
    e.preventDefault();

    document.getElementById("resultCifrar").innerHTML = result;
}

function cipherDecode(e){
    let string = document.getElementById("decifrarString").value
    let offset = parseInt(document.getElementById("decifrarOffset").value)
    let result = cipher.decode(offset, string);
    e.preventDefault();

    document.getElementById("resultDecifrar").innerHTML = result;
    
}
console.log(cipher)