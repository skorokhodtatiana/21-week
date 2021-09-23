
function getGifs() {
    let valInput = document.getElementById('searchGif').value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=7wJgSFYwhi8JAM6vE1UxJ7gaTTomMPmR&q=" + valInput + "&limit=1&offset=0&rating=g&lang=en")
        .then(response => response.blob())
        .then(responseImg => {
            console.log(responseImg);
            const imgResponse = URL.createObjectURL(responseImg);
            console.log(imgResponse);
            document.getElementById("images").src = imgResponse;
        })
        .catch(error => console.log(error));
}