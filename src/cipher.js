const cipher = {
  
  encode: function cifra(offset, string){
    let cifrar = []
    if(typeof offset !== 'number'){
      throw new TypeError('A chave de deslocamento precisa ser numérica!')
    }
    if(typeof string !== 'string'){
      throw new TypeError('Caractere inválido!')
    }
    for(let i=0; i <= string.length; i++){
      let codeString = string.charCodeAt(i)
      let startCapitalLetters = 65
      let startSmallLetters = 97

      if((codeString >= 65) && (codeString <= 90)){
        cifrar.push(String.fromCharCode(((codeString - startCapitalLetters + offset)% 26)+ startCapitalLetters))
      } else if((codeString >= 97) && (codeString <= 122)){
        cifrar.push(String.fromCharCode(((codeString - startSmallLetters + offset)% 26)+ startSmallLetters))
      } else if((codeString >= 32) && (codeString <= 64)){
        cifrar.push(String.fromCharCode(codeString))
      }
    }
    return (cifrar.join(""))
  },
  
  decode: function decifra(offset, string){
    let decifrar = []
    if(typeof offset !== 'number'){
      throw new TypeError('A chave de deslocamento precisa ser numérica!')
    }
    if(typeof string !== 'string'){
      throw new TypeError('Caractere inválido!')
    }
    for(let i=0; i <= string.length; i++){
      let codeString = string.charCodeAt(i)
      let startCapitalLetters = 90
      let startSmallLetters = 122

      if((codeString >= 65) && (codeString <= 90)){
        decifrar.push(String.fromCharCode(((codeString - startCapitalLetters - offset)% 26)+ startCapitalLetters));
      } else if((codeString >= 97) && (codeString <= 122)){
        decifrar.push(String.fromCharCode(((codeString - startSmallLetters - offset)% 26)+ startSmallLetters));
      } else if((codeString >= 32) && (codeString <= 64)){
        decifrar.push(String.fromCharCode(codeString));
      }
    } 
    return (decifrar.join(""))
  }
};
export default cipher

