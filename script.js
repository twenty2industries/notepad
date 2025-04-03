let notes = ["banana", "Rasenmäher"];
let undoNote = '';

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = " "; //Inhalt wird geleert um bei mehrfachem auslösen der Fuction nicht jede Ausführung reinzurendern

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += getNoteTemplate(note);
  }
}

function getNoteTemplate (note) {
  return `<p>${note}</p>`
}


// notizen hinuzufügen
function addNote () {
  notes.push('sius');
  renderNotes();
}

function deleteNote(){
  undoNote = notes.pop()
  console.log(undoNote);
  
  renderNotes()
}

function undo (){
  notes.push(undoNote)
  renderNotes();
  undoNote = '';
}

// notizen löschen
// notizen archieveren