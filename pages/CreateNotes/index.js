const body = document.querySelector("body");
const token = localStorage.getItem("jwt");
const apiUrl = "http://localhost:8000"
window.addEventListener('load', () =>{
    body.classList.add('visible');
});

const createNoteButton = document.querySelector(".create");

createNoteButton.addEventListener("click", () => {
    if (token){
        const createNoteInput = document.querySelector(".note").value;
        const createNoteHeading = document.querySelector(".note-heading").value;
        fetch(`${apiUrl}/notes/add`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            },
            body: JSON.stringify({heading: createNoteHeading, content: createNoteInput})}).then((res) => res.json()).then((data) => {
                console.log(data);   
            }).catch((err) => {
            alert("Error Creating Note!!");
            console.log(err);
        })
    }
})