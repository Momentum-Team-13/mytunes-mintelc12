console.log("connected")
// const userInput = document.querySelector("#search-input")

// Variables defined below:
const searchBox = document.querySelector("#searchBox")
const search = document.querySelector("#search")
const searchResults = document.querySelector("#search-results")

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
    
    for (let song of data.results) {
        let songDiv = document.createElement("div")
        songDiv.classList.add("song-info")

    // Song Name
        let songElement = document.createElement("song")
        // songElement.classList.add("songresult")
        songElement.innerText = `"${song.trackName}"`
        songDiv.appendChild(songElement)

    // Artist Name
        let artistElement = document.createElement("artist")
        // artistElement.classList.add("songresult")
        artistElement.innerText = song.artistName
        songDiv.appendChild(artistElement)

    // Release Date
        let releaseDateElement = document.createElement("release")
        let releaseDateFormat = moment(song.releaseDate).format("MMM Do, YYYY")
        // releaseDateElement.classList.add("songresult")
        releaseDateElement.innerText = releaseDateFormat
        songDiv.appendChild(releaseDateElement)

    // Album Art...let's see if this works
        let albumArtElement = document.createElement("img")
        // albumArtElement.classList.add("songresult")
        albumArtElement.src = song.artworkUrl100
        songDiv.appendChild(albumArtElement)
        
    searchResults.appendChild(songDiv)    

    }

})
})
