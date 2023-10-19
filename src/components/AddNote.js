import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  // updates text for each keypress
  const handleChange = (event) => {
    if (limiter - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  // number that limits characters
  const limiter = 200;
  // prevents the user from making an empty note
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Write a new note here."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="noteFooter">
        <small>{limiter - noteText.length} Characters remaining</small>
        <button className="saveNote" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
