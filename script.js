let notes = ["banana", "Rasenmäher"];
let undoNote = "";
let input = document.getElementById("input_area");
let contentRef = document.getElementById("content");

function renderNotes() {
  contentRef.innerHTML = " ";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += getNoteTemplate(note);
  }
}

function getNoteTemplate(note) {
  return `<p>${note}</p>`;
}

function addNote() {
  if (input.value) {
    notes.push(input.value);
    contentRef.innerHTML += `<p>${input.value}</p>`;
  }
  input.value = "";
}

function deleteNote() {
  for (let index = 0; index < notes.length; index++) {
    contentRef.innerHTML = notes.pop();
  }
}

function undo() {
  notes.push(undoNote);
  renderNotes();
  undoNote = "";
}


function handleKeyPress(event){
  if (event.key === "Enter") {
    addNote();
  }
}

document.getElementById('input_area').addEventListener('keydown', addNote);


// notizen löschen
// notizen archieveren
