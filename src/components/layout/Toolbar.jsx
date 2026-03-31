import "./Toolbar.css";
import { useEditor } from "../../hooks/useEditor";

function Toolbar() {
  const { goHome } = useEditor();

  return (
    <div className="toolbar">
      <button className="toolbar__button" onClick={goHome}>
        Back
      </button>
      <button className="toolbar__button">Add Text</button>
      <button className="toolbar__button">Add Image</button>
      <button className="toolbar__button">Delete Slide</button>
    </div>
  );
}

export default Toolbar;