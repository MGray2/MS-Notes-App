import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleRemoveNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="noteFooter">
        <small>{date}</small>
        <MdDeleteForever
          className="deleteIcon"
          size="1.3em"
          onClick={() => handleRemoveNote(id)}
        />
      </div>
    </div>
  );
};
export default Note;
