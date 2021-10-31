const START_CAPITAL_LETTERS = "A".charCodeAt();
const START_SMALL_LETTERS = "a".charCodeAt();

function errorsMessage(offset, string) {
  if (offset !== offset) {
    console.log('Insira uma chave numérica')
  } else if (string === "") {
    console.log("Insira um texto")
  }
}

const cipher = {

  encode: function (offset, string) {
    errorsMessage(offset, string);
    const newText = [];

    for (let i = 0; i < string.length; i++) {
      let codeString = string.charCodeAt(i);
      if ((codeString >= START_CAPITAL_LETTERS) && (codeString <= 90)) {
        newText.push(String.fromCharCode(((codeString - START_CAPITAL_LETTERS + offset) % 26) + START_CAPITAL_LETTERS))
      } else if ((codeString >= 97) && (codeString <= 122)) {
        newText.push(String.fromCharCode(((codeString - START_SMALL_LETTERS + offset) % 26) + START_SMALL_LETTERS))
      } else {
        newText.push(String.fromCharCode(codeString))
      }
    }
    return newText.join("");
  },


  decode: function (offset, string) {
    return cipher.encode(-offset, string);
  }
};
export default cipher

