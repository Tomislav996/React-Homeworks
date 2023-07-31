
const camelLetters = (string) => {
    let capsString = ""
    for(let i = 0; i < string.length; i++){
        if(i % 2 === 0){
          capsString +=  string[i].toUpperCase();
        }
           capsString += string[i].toLowerCase();
    }
    return capsString
}



console.log(camelLetters("hello"));