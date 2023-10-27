

let input = "   JavaScript   ";



const trim = (string) => {
   return string.trim()
}


const toLowerCase = (string ) => {
    return string.toLowerCase()
}

const wrap = (type, string) => {
    return `<${type}>${string}</${type}>`
}






const trimmedString = trim(input);

const lowerCase = toLowerCase(trimmedString)

const wrappedString = wrap("div", lowerCase);


const result = wrap("div", toLowerCase(trim(input)));


const numbers = [1,2,3];

const index = numbers.indexOf(2);

const addedNumbers = [...numbers.slice(0,index), 4, ...numbers.slice(index)];



const updatedNumbers = numbers.map((number) =>{
    if(number === 2 ){
      return  number = 20
    }
    return number 
})


const updatedNumbersTwo = numbers.map(number => number === 2 ? number = 20 : number);

