console.log("connected")
// const userInput = document.querySelector("#search-input")

// Variables defined below:
const searchBox = document.querySelector("#searchBox")
const search = document.querySelector("#search")
const searchResults = document.querySelector("#search-results")
const nowPlaying = document.querySelector("#now-playing")

function buildPage(itunesData) {
    for (let term of itunesData)
    console.log(term)
}

// Event listener applied to search button:
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

    
    
        searchResults.innerHTML = ""

        if (data.results < 1) {
            let emptyElement = document.createElement("no-results")
            emptyElement.innerText = "No results found!"
            searchResults.appendChild(emptyElement)
            
        }

    for (let song of data.results) {
        let songDiv = document.createElement("div")
        songDiv.classList.add("song-info")
    

    // Song Name
        let songElement = document.createElement("div", "song")
        songElement.classList.add("song")
        songElement.innerText = `"${song.trackName}"`
        songDiv.appendChild(songElement)

    // Hidden Element
        let hiddenElement = document.createElement("div")
        hiddenElement.classList.add("hidden")
        hiddenElement.innerText = song.previewUrl
        songDiv.appendChild(hiddenElement)

    // Artist Name
        let artistElement = document.createElement("artist")
        // artistElement.classList.add("songresult")
        artistElement.innerText = song.artistName
        songDiv.appendChild(artistElement)

    // Release Date
        let releaseDateElement = document.createElement("release")
        let releaseDateFormat = moment(song.releaseDate).format("MMM Do, YYYY")
        // releaseDateElement.classList.add("songresult")
        releaseDateElement.innerText = `Release Date: ${releaseDateFormat}`
        songDiv.appendChild(releaseDateElement)

    // Album Art
        let albumArtElement = document.createElement("img")
        // albumArtElement.classList.add("songresult")
        albumArtElement.src = song.artworkUrl100
        songDiv.appendChild(albumArtElement)
        

    searchResults.appendChild(songDiv)    
    
    }

})     .catch (err => {
    window.alert("Error detected")
})
})

let songSource = document.createElement("source")
searchResults.addEventListener("click", function(event) {
    let target = event.target
    console.log(target)
    if (event.target.classList.contains("song")) {
        console.log(`target: ${target}`)
        nowPlaying.src = target.nextElementSibling.innerText
        console.log(nowPlaying.src)
    }
})


// function nowPlaying(data) {
//     console.log(data)
// }
//   function EnableDisable(txtPassportNumber) {
//         if (txtPassportNumber.value.trim() != "") {
//         search.disabled = false;
//     } else {
//         search.disabled = true;
//     }}