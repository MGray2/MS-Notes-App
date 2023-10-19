import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  // uses previously saved data from local storage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedData) {
      setNotes(savedData);
    }
  }, []);

  // function to create new notes
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

    // records created notes into local storage

    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  };

  // function to remove notes
  const removeNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  };

  return (
    <div className="container">
      <div className="topBar">
        <h1 className="brand">MicahSoft Notes</h1>
      </div>
      <div className="sBar">
        <SearchBar handleSearchNote={setSearchText} />
      </div>
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleRemoveNote={removeNote}
      />
    </div>
  );
}

export default App;
