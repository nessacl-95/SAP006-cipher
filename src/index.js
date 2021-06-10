import cipherEncode from './cipher.js';
import cipherDecode from './cipher.js';

document.getElementById("cifrarMensagem").addEventListener("click", encode);
document.getElementById("decifrarMensagem").addEventListener("click", decode);

function encode(){
    let string = document.getElementById("cifrarString").value
    let offset = parseInt(document.getElementById("cifrarOffset").value)
    let result = cipherEncode(string, offset);

    document.getElementById("resultCifrar").innerHTML = result;
}

function decode(){
    let string = document.getElementById("decifrarString").value
    let offset = -(parseInt(document.getElementById("decifrarOffset")).value)
    let result = cipherDecode (string, offset);

    document.getElementById("resultDecifrar").innerHTML = result;
}