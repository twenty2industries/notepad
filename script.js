let notes = ["banana", "Rasenmäher"];
let undoNote = "";
let input = document.getElementById('input_area'); 
let contentRef = document.getElementById("content");


function renderNotes() {

  contentRef.innerHTML = " "; //Inhalt wird geleert um bei mehrfachem auslösen der Fuction nicht jede Ausführung reinzurendern

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += getNoteTemplate(note);
  }
}

function getNoteTemplate(note) {
  return `<p>${note}</p>`;
}

// notizen hinuzufügen
function addNote() {
  contentRef.innerHTML += `<p>${input.value}</p>`;
  notes.push(input.value)
  input.value = '';
  console.log(notes);
  
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

// notizen löschen
// notizen archieveren
