import { errorsMessage } from "./index.js";

const START_CAPITAL_LETTERS = "A".charCodeAt();
const START_SMALL_LETTERS = "a".charCodeAt();
const END_CAPITAL_LETTERS = "Z".charCodeAt();
const END_SMALL_LETTERS = "z".charCodeAt();

const cipher = {

  encode: function (offset, string) {
    errorsMessage(offset, string);
    const newText = [];

    for (let i = 0; i < string.length; i++) {
      let codeString = string.charCodeAt(i);
      if ((codeString >= 65) && (codeString <= 90)) {
        newText.push(String.fromCharCode(((codeString - START_CAPITAL_LETTERS + offset) % 26) + START_CAPITAL_LETTERS))
      } else if ((codeString >= 97) && (codeString <= 122)) {
        newText.push(String.fromCharCode(((codeString - START_SMALL_LETTERS + offset) % 26) + START_SMALL_LETTERS))
      } else {
        newText.push(string.charAt(i))
      }
    }
    return newText.join("");
  },

  decode: function (offset, string) {
    errorsMessage(offset, string);
    const newText = [];
   
    
    for (let i = 0; i < string.length; i++) {
      let codeString = string.charCodeAt(i);
      if (codeString >= START_CAPITAL_LETTERS && codeString <= END_CAPITAL_LETTERS) {
        newText.push(String.fromCharCode(END_CAPITAL_LETTERS - ((END_CAPITAL_LETTERS - codeString + offset) % 26)));
      } else if (codeString >= END_CAPITAL_LETTERS && codeString <= END_SMALL_LETTERS) {
        newText.push(String.fromCharCode(END_SMALL_LETTERS - ((END_SMALL_LETTERS - codeString + offset) % 26)))
      } else {
        newText.push(string.charAt(i))
      }
    }
    return newText.join("");
  },
};
export default cipher;
