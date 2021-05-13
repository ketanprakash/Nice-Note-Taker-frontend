const body = document.querySelector("body");
window.addEventListener('load', () =>{
    body.classList.add('visible');
});

const carddata = [
    {heading: "heading1", content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quas sequi natus eligendi repudiandae dolorum itaque totam aliquid, illo ipsam. Reiciendis eum ut eos, facilis voluptatibus minima sit repellendus hic et dolores a odio voluptatum facere accusamus provident temporibus unde quae nesciunt impedit voluptates dolorum maiores! Ea eos non ipsam architecto autem, aut eius ex quos nesciunt delectus, aperiam, magni sequi illo impedit. Blanditiis voluptatum esse repellendus rerum facilis sequi fugiat ea eos nostrum earum, expedita atque similique at animi officiis, quidem ipsam delectus modi nobis voluptate iste quam! Corrupti sapiente, hic beatae exercitationem impedit a? Veritatis repellendus commodi alias eligendi corrupti reprehenderit debitis. Obcaecati illo mollitia, illum, enim perferendis molestiae nemo atque nisi sed quas architecto necessitatibus perspiciatis. Explicabo asperiores amet quo reiciendis debitis alias qui eligendi! Quidem modi iste quis iure fugiat quae exercitationem amet. Repellendus doloremque, laborum a voluptate sint est dicta saepe magnam dolores quibusdam dolor ut modi consequuntur ducimus necessitatibus perspiciatis minus cupiditate blanditiis amet quos accusantium et! Sapiente laboriosam tempore aspernatur officia placeat sit corporis, laudantium explicabo! Possimus minus facere adipisci illo totam reiciendis cumque consequuntur neque ipsa, ut, quasi ratione! Labore impedit officia, blanditiis itaque aliquid voluptate aperiam dolorem hic nobis nihil iste quibusdam a unde magnam molestias quia repellendus numquam inventore similique dolore fuga sint quaerat neque incidunt! Quo porro consequatur accusamus fugit voluptatum. At voluptate eveniet earum vel excepturi voluptatum quibusdam possimus, sequi corporis ex architecto quas consectetur dicta pariatur nobis rem hic dignissimos dolore aspernatur optio alias expedita assumenda provident ullam. Earum nihil natus maiores dicta accusamus reiciendis, quis magnam ratione tempora, delectus sit voluptatibus consequuntur, ut in enim officia quod obcaecati? Quas repellendus obcaecati quod quia, fugit natus ipsum odit cumque in libero porro aut tempora reprehenderit, doloremque ex recusandae optio voluptatibus labore pariatur veritatis soluta. Dolores error consectetur laudantium magni sunt laborum praesentium vitae facere iusto possimus est neque voluptate nostrum aperiam nisi, exercitationem expedita ducimus voluptates eum veniam sapiente et perspiciatis quisquam! Veniam quia ipsum unde accusantium veritatis cum odit, mollitia aliquam. Totam a vel numquam, excepturi incidunt repudiandae tempora molestiae possimus voluptatibus pariatur esse corporis temporibus architecto error quas neque molestias similique aliquid quos. Libero dolores vero laborum fuga id. Animi repudiandae quaerat nobis rerum? Quam blanditiis incidunt consectetur neque minus quasi rem voluptatibus sunt, aspernatur veritatis numquam tenetur dolorum ducimus magnam ipsum voluptate cumque! Minus, ex, expedita, id soluta modi quidem ipsum repellendus magni iste nam quod itaque reiciendis harum quas rerum porro eum libero nisi quis voluptas quasi aspernatur delectus debitis. Officia hic corrupti quisquam adipisci soluta sunt deleniti reiciendis rem distinctio blanditiis amet, ab quas quaerat totam praesentium vero est dolorem quos? Eius ducimus nam itaque perspiciatis quae distinctio ipsum, voluptas asperiores, in doloremque expedita nemo quibusdam at, quaerat nisi iure tempore veniam corporis fugit aspernatur. Saepe molestias libero necessitatibus rerum dignissimos tempore, sunt vero temporibus qui quisquam, laudantium cum itaque repudiandae ut ratione obcaecati, unde harum ipsam! Velit magnam vero impedit odit sint vitae earum odio maxime commodi repudiandae, at ducimus quisquam.`, id: 1},
    {heading: "heading2", content: "dkashddfhasdhfakdshfkahshd", id: 2},
    {heading: "heading3", content: "dkashddfhasdhfakdshfkahshd", id: 3},
    {heading: "heading4", content: "dkashddfhasdhfakdshfkahshd", id: 4},
    {heading: "heading5", content: "dkashddfhasdhfakdshfkahshd", id: 5},
    {heading: "heading6", content: "dkashddfhasdhfakdshfkahshd", id: 6}, 
]

const cardContainer = document.querySelector(".card-container")

const createNotes = (array) => {
    array.forEach(element => {
        const newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.id = element.id
        const insideHtml = `<div class="card-header">
        <div class="card-heading">${element.heading}<a href="../UpdateNotes/notes.html" target="_blank"></div>
        <div class="edit-note"><img src="./edit-note.svg"/></div></a>
        </div>
        <div class="card-content">${element.content}
        </div>
        </div>`
        newCard.innerHTML = insideHtml
        cardContainer.appendChild(newCard)
    });
}
createNotes(carddata)