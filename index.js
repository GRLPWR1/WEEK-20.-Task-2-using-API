let artURL = "https://api.artic.edu/api/v1/artworks/24645/manifest.json";
document.addEventListener("DOMContentLoaded", function (e) {
fetch(artURL)    
    .then(response => response.json())
    // .then(data => console.log(data.rendering['@id']))
    .then(data => {
        document.getElementById('title').innerHTML = data.attribution;
        document.getElementById('artwork').src = data.rendering['@id'];
        document.getElementById('caption').innerHTML = data.label;
    })
    .catch((error) => console.log(error));
})