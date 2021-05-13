const body = document.querySelector("body");
window.addEventListener('load', () =>{
    body.classList.add('visible');
});

const createNoteInput = document.querySelector(".note")

const urlParams = new URLSearchParams(window.location.search)

const noteId = urlParams.get("noteId")

console.log(noteId)