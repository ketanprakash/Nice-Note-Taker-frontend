const urlParams = new URLSearchParams(window.location.search);
const body = document.querySelector("body");
window.addEventListener('load', () =>{
    body.classList.add('visible');
});
const apiUrl = "http://localhost:8000";
const token = localStorage.getItem("jwt");
const createNoteInput = document.querySelector(".note");
const headingInput = document.querySelector(".note-heading");
const updateNote = document.querySelector(".create")
const noteId = urlParams.get("noteId")

if (token){
    fetch(`${apiUrl}/notes/getallnotes`,{
        method: "GET",
        headers: {
            "authorization": `${token}`
        },
    }).then((res) => res.json()).then((data) => {
        const carddata = data;
        console.log(carddata);
        carddata.forEach((element) => {
            console.log(element.id);
            if (element.id == noteId){
                console.log(element.id);
                headingInput.value = element.heading; 
                createNoteInput.value =  element.content;
            }
        })
    }).catch((err) => {
        alert("Error loading note!");
        console.log(err);
    })
}

updateNote.addEventListener("click", () => {
    if (token){
        fetch(`${apiUrl}/notes/update/${noteId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            },
            body: JSON.stringify({heading: headingInput.value, content: createNoteInput.value})}).then((res) => res.json()).then((data) => {
                console.log(data);   
                alert(data.message);
            }).catch((err) => {
            alert("Error Updating Note!!");
            console.log(err);
        })
    }
})

console.log(noteId)