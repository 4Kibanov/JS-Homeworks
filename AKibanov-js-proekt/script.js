document.addEventListener('DOMContentLoaded', function () {
    loadNotes();
});

function addNote() {
    var noteText = document.getElementById('noteInput').value;
    if (noteText.trim() !== '') {
        var notes = JSON.parse(localStorage.getItem('notes')) || [];
        var note = {
            id: Date.now(),
            text: noteText
        };
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        document.getElementById('noteInput').value = '';
        loadNotes();
    }
}

function editNote(id) {
    var notes = JSON.parse(localStorage.getItem('notes'));
    var updatedText = prompt('Введите новый текст заметки');
    if (updatedText.trim() !== '') {
        var noteIndex = notes.findIndex(function (note) {
            return note.id == id;
        });
        notes[noteIndex].text = updatedText;
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
    }
}

function deleteNote(id) {
    var notes = JSON.parse(localStorage.getItem('notes'));
    var updatedNotes = notes.filter(function (note) {
        return note.id != id;
    });
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    var noteDiv = document.getElementById(`note-${id}`);
    noteDiv.classList.add('fade-out');
    setTimeout(function() {
        loadNotes();
    }, 500);
}

function loadNotes() {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    var notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';
    notes.forEach(function (note) {
        var noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.setAttribute('id', `note-${note.id}`);
        noteDiv.innerHTML = `
            <p>${note.text}</p>
            <div class="note-buttons">
                <button onclick="editNote(${note.id})">Редактировать</button>
                <button onclick="deleteNote(${note.id})">Удалить</button>
            </div>
        `;
        notesContainer.appendChild(noteDiv);
    });
}