const body = document.querySelector("body");
const logout = document.querySelector(".logout");
const createNote = document.querySelector(".new-note")
;
const apiUrl = "https://webmonth-final.herokuapp.com";
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
                <div class="card-heading">${element.heading}</div>
                <div class="card-options">
                    <a href="../UpdateNotes/notes.html?noteId=${newCard.id}" target="_blank"><div class="edit-note"><img src="./edit-note.svg"/></div></a>
                    <div class="delete-note"><img src="./delete-note.svg"/></div></a>
                </div>
            </div>
            <div class="card-content">${element.content}</div>`
                newCard.innerHTML = insideHtml
                cardContainer.appendChild(newCard)
                const deleteButton = newCard.querySelector(".delete-note");
                deleteButton.addEventListener("click", () => {
                    console.log(newCard.id);
                    newCard.classList.add("invisible");
                    if (token){
                        fetch(`${apiUrl}/notes/delete/${newCard.id}`,{
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                                "authorization": token
                            }
                        }).then((res) => res.json()).then((data) => {
                            console.log(data);   
                            alert(data.message);
                        }).catch((err) => {
                            alert("Error Deleting Note!!");
                            console.log(err);
                        })
                    }
                })
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

