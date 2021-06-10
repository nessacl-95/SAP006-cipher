let decifrar = [];
let cifrar = [];

function cipherEncode(string, offset){
  let newMessage = "";
  for(let i=0; i <= string.length; i++){
    let codeString = string.charCodeAt(i);
    let startCapitalLetters = 65;
    let startSmallLetters = 97;
    if((codeString >= 65) && (codeString <= 90)){
      cifrar.push(String.fromCharCode(((codeString - startCapitalLetters + offset)% 26)+ startCapitalLetters));
    } else if((codeString >= 97) && (codeString <= 122)){
      cifrar.push(String.fromCharCode(((codeString - startSmallLetters + offset)% 26)+ startSmallLetters));
    }
  }
  newMessage = (cifrar.join(""));
  return newMessage
}

function cipherDecode(string, offset){
  let newMessage = ""; 
  for(let i=0; i <= string.length; i++){
    let codeString = string.charCodeAt(i);
    let startCapitalLetters = 65;
    let startSmallLetters = 97;
    if((codeString >= 65) && (codeString <= 90)){
      decifrar.push(String.fromCharCode(((codeString - startCapitalLetters - offset)% 26)+ startCapitalLetters));
    } else if((codeString >= 97) && (codeString <= 122)){
      decifrar.push(String.fromCharCode(((codeString - startSmallLetters - offset)% 26)+ startSmallLetters));
    }
  }
  newMessage = (decifrar.join(""));
  return newMessage
}
export default cipherEncode; cipherDecode;