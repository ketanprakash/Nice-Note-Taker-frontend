const body = document.querySelector("body");
window.addEventListener('load', () =>{
    body.classList.add('visible');
});

const carddata = [
    {heading: "lorem", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam commodi eius. Labore ut hic molestiae aliquid perferendis eveniet molestias ipsum cupiditate, libero, possimus corrupti dolorem blanditiis vero porro ad facere dicta omnis! Sint error quasi at, quaerat dolorem accusantium explicabo. Fugit nisi officia possimus ipsam fugiat cupiditate eum dignissimos.", id: 1},
    {heading: "ipsum", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 2},
    {heading: "dolor", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 3},
    {heading: "sit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 4},
    {heading: "amet", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam commodi eius. Labore ut hic molestiae aliquid perferendis eveniet molestias ipsum cupiditate, libero, possimus corrupti dolorem blanditiis vero porro ad facere dicta omnis! Sint error quasi at, quaerat dolorem accusantium explicabo. Fugit nisi officia possimus ipsam fugiat cupiditate eum dignissimos.", id: 5},
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 6}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 7}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 8}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 9}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 10}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 11}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 12}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 13}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 14}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 15}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 16}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 17}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 18}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 19}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 19}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 20}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 21}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 22}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 23}, 
    {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 24}, 
]

const cardContainer = document.querySelector(".card-container")

const createNotes = (array) => {
    array.forEach(element => {
        const newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.id = element.id
        const insideHtml = `<div class="card-header">
        <div class="card-heading">${element.heading}<a href="../UpdateNotes/notes.html?noteId=${newCard.id}" target="_blank"></div>
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