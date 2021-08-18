const homeContainer = document.querySelector(".home-content");
let homeUrl = "/partials/article.json";

function articles() {
    fetch(homeUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let ca of data.articles) {
                homeContainer.innerHTML += `<hr>
                                        <h3 class="display-6">${ca.title}</h3>
                                        <div class="articles clearfix">
                                            <figure class="figure"> 
                                                <img src="${ca.img}" alt="${ca.alt}" class="figure-img img-fluid rounded" >
                                                <em><figcaption class="figure-caption">${ca.fig}</figcaption></em>
                                            </figure>
                                            <div class="about-article">
                                                <p>${ca.text}</p>
                                            </div>
                                        </div>`;
            }
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

window.onload = articles;