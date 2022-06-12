// async function search() {
//     let data = await getData();
//     append(data);
// }

async function getData() {

    let searchBox = document.querySelector('#search-box').value;

    let url = `http://www.omdbapi.com/?t=${searchBox}&apikey=dd431ea6`;

    let response = await fetch(url);

    let data = await response.json();    //To collect chunks (packets) of data

    append(data);
}

function append(data) {

    let container = document.querySelector('#container');

    container.innerHTML = null;

    let p = document.createElement('p');
    p.style.color = "blue";
    p.innerText = 'Title: ' + data.Title;

    let p2 = document.createElement('p');
    p2.style.color = 'blue';
    p2.innerText = 'Release Date: ' + data.Released;

    let p3 = document.createElement('p');
    p3.style.color = 'blue';
    p3.innerText = 'Ratings: ' + data.imdbRating;

    //If rating is greater than 8.5
    if (data.imdbRating > 8.5) {
        let p4 = document.createElement('p');
        p4.style.color = 'pink';
        p4.style.backgroundColor = 'blue';
        p4.style.padding = '8px';
        p4.innerText = 'RECOMMENDED';

        container.append(p4);
    }


    let img = document.createElement('img');
    img.src = data.Poster;

    if (data.Title != null) {
        container.style.backgroundColor = 'grey';

        container.append(p, p2, p3, img);
    }
    else {
        // container.style.backgroundColor = 'black';
        let giffy = document.createElement('img');
        giffy.src = 'https://media0.giphy.com/media/12zV7u6Bh0vHpu/200w.webp?cid=ecf05e47quw128s3snfo2vc9o6wtnulnom8dg9h2s6589n4q&rid=200w.webp&ct=g';
        container.append(giffy);
    }


    //For array of objects data
    // data.forEach(function (el) {

    //     let p = document.createElement('p');
    //     p.style.color = "white";
    //     p.innerText = el.Title;

    //     container.append(p);

    // });

}


    // let id;

    // function debouncing(func, delay) {
    //     if (id) {
    //         clearTimeout(id);
    //     }

    //     id = setTimeout(function () {
    //         func();
    //     }, delay);
    // }