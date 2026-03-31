import "./EditorLayout.css";
import SlidesPanel from "./SlidesPanel";
import Toolbar from "./Toolbar";
import CanvasArea from "./CanvasArea";

function EditorLayout() {
  return (
    <div className="editor-layout">
      <SlidesPanel />

      <div className="editor-layout__main">
        <Toolbar />
        <CanvasArea />
      </div>
    </div>
  );
}

export default EditorLayout;