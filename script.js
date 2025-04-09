let notesTitles = [];
let notes = [];
let trashNotesTitles = [];
let trashNotes = [];


function init(){
  getFromLocalStorage();
  renderNotes();
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

function getNoteTemplate(indexNote) {
  return `<p>+ <b>${notesTitles}</b> ${notes[indexNote]}<button onclick="transferNoteToTrash(${indexNote})">X</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<p> <b>${notesTitles}</b> ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
}

function addNote() {
  const noteInputRef = document.getElementById("note_input");
  const noteTitleInputRef = document.getElementById("title_input");

  let noteInput = noteInputRef.value;

  if (noteTitleInputRef.value == '') {
    alert('keine angaben in Titel')
  } else{
  notes.push(noteInput);
  renderNotes();
  saveToLocalStorage()
  addTitle();
  noteInputRef.value = " ";
  }
}

function addTitle() {
  const noteTitleInputRef = document.getElementById("title_input");
  let noteTitleInput = noteTitleInputRef.value;
  notesTitles.push(noteTitleInput);
  console.log(noteTitleInput);
  
  renderNotes();
  saveToLocalStorage()
}

function transferNoteToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);
  let trashNoteTitle = notesTitles.splice(indexNote, 1);
  trashNotesTitles.push(trashNoteTitle[0]);
  renderNotes();
  renderTrashNotes();
}

function deleteNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  renderTrashNotes();
}

//localStorage wird benötigt 
  //addnote muss die daten ebenfalls in die localstorage speichern 
  //eine addlocalstorage function die in addnote ausgeführt wird 
function saveToLocalStorage(){
  localStorage.setItem("notes", JSON.stringify(notes));
}

//Items in den Local storage bekommen 
//items aus dem Local storage abrufen 
function getFromLocalStorage(){
  const storageRef = localStorage.getItem("notes");
  if (storageRef !== null) {
    let parsedStorageRef = JSON.parse(storageRef);
    notes = parsedStorageRef;
  }
}
