import axios from "axios"

const TOKEN ="cirbq7pr01qt55i7gj2gcirbq7pr01qt55i7gj30"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",params: {token: TOKEN}

})