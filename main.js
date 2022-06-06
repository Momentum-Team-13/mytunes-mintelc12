console.log("connected")
// const userInput = document.querySelector("#search-input")

const searchBox = document.querySelector("#searchBox")
const search = document.querySelector("#search")


function buildPage(itunesData) {
    for (let term of itunesData)
    console.log(term)
}

search.addEventListener ("click", (event) => {
    console.log(searchBox.value)
    console.log(event)
    const userInput = searchBox.value
    let itunesUrl = `https://itunes.apple.com/search?term=${userInput}`
    fetch(itunesUrl, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
    .then(function(response) {
        return response.json()
    })
    .then(function (data){
        console.log("Response from iTunes API: ", data)
    })

} 
)
