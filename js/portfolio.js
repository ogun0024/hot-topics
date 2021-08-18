const container = document.querySelector(".content");
let url = "/partials/portfolio.json";

function projects() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let cd of data.catalog) {
                container.innerHTML += ` <div class="col">
                                         <div class="card-shadow-sm">
                                        
                                                <img src="${cd.img}" alt="${cd.alt}" class="card-img-top">
                                                <rect width="100%" height="100%" fill="#55595c"></rect>
                                            </div>
                                            <p class="card-text">${cd.fig}</p>
                                        </div>`;
            }
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

window.onload = projects;

            