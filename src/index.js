import cipherEncode from './cipher.js';
import {cipherDecode} from './cipher.js';


document.getElementById("cifrarMensagem").addEventListener("click", encode);
document.getElementById("decifrarMensagem").addEventListener("click", decode);

function encode(e){
    let string = document.getElementById("cifrarString").value
    let offset = parseInt(document.getElementById("cifrarOffset").value)
    let result = cipherEncode(string, offset);
    e.preventDefault();

    document.getElementById("resultCifrar").innerHTML = result;
}

function decode(e){
    let string = document.getElementById("decifrarString").value
    let offset = parseInt(document.getElementById("decifrarOffset").value)
    let result = cipherDecode(string, offset);
    e.preventDefault();

    document.getElementById("resultDecifrar").innerHTML = result;
    
}