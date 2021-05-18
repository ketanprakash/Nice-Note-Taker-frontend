const body = document.querySelector("body");
const logout = document.querySelector(".logout");
const createNote = document.querySelector(".new-note")
;
const apiUrl = "http://localhost:8000";
const token = localStorage.getItem("jwt");
logout.addEventListener("click", () => {
    localStorage.removeItem("jwt");
    location.href = "/";
})

createNote.addEventListener("click", () => {
    location.href = "/pages/CreateNotes/notes.html";
})
window.addEventListener('load', () =>{
    body.classList.add('visible');
});
if (token){
    fetch(`${apiUrl}/notes/getallnotes`,{
        method: "GET",
        headers: {
            "authorization": `${token}`
        },
    }).then((res) => res.json()).then((data) => {
        const carddata = data;
        console.log(carddata);
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
    }).catch((err) => {
        alert("Error Signing In!!");
        console.log(err);
    })
}
else{
    alert("Signin again!!!");
}

// const carddata = [
//     {heading: "lorem", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam commodi eius. Labore ut hic molestiae aliquid perferendis eveniet molestias ipsum cupiditate, libero, possimus corrupti dolorem blanditiis vero porro ad facere dicta omnis! Sint error quasi at, quaerat dolorem accusantium explicabo. Fugit nisi officia possimus ipsam fugiat cupiditate eum dignissimos.", id: 1},
//     {heading: "ipsum", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 2},
//     {heading: "dolor", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 3},
//     {heading: "sit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 4},
//     {heading: "amet", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam commodi eius. Labore ut hic molestiae aliquid perferendis eveniet molestias ipsum cupiditate, libero, possimus corrupti dolorem blanditiis vero porro ad facere dicta omnis! Sint error quasi at, quaerat dolorem accusantium explicabo. Fugit nisi officia possimus ipsam fugiat cupiditate eum dignissimos.", id: 5},
//     {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 6}, 
//     {heading: "elit", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquam.", id: 7}
// ]

