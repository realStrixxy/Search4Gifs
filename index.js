const api_key = "FH1LeO4KqHV6NHQT47JfkqeZC5u5TDF9";

function Search() {
    let search = document.getElementById('Search').value.trim();
    let url = 'https://api.giphy.com/v1/gifs/search?api_key=FH1LeO4KqHV6NHQT47JfkqeZC5u5TDF9&q=';
    url = url.concat(search);
    url = url.concat("&limit=15");
    console.log(url);
    fetch(url)
    .then(response => response.json() )
    .then(content => {
        console.log(content.data);
        console.log('META', content.meta);
        for(let gif in content.data) {
            let fig = document.createElement('figure');
            let img = document.createElement('img');
            let fc = document.createElement('figcaption');
            img.src = content.data[gif].images.downsized.url;
            img.alt = content.data[gif].title;
            fc.textContent = content.data[gif].title;
            fig.appendChild(img);
            fig.appendChild(fc);
            let out = document.querySelector('.out');
            out.insertAdjacentElement('afterbegin', fig);
        }
    })
    .catch(err => {
        console.error(err);
    });
    document.getElementById('Search').value = "";
}