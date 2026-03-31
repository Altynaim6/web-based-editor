import "./CanvasArea.css";
import TextElement from "../elements/TextElement";
import ImageElement from "../elements/ImageElement";
import { useEditor } from "../../hooks/useEditor";

function CanvasArea() {
  const { presentation, currentSlideIndex } = useEditor();

  const slideset = presentation?.slideset;
  const currentSlide = slideset?.slides?.[currentSlideIndex];
  const master = slideset?.master;

  if (!slideset || !currentSlide) {
    return <div className="canvas-area">No slide selected</div>;
  }

  const slideWidth = master?.["slide-dimensions"]?.width || 1280;
  const slideHeight = master?.["slide-dimensions"]?.height || 720;
  const slideBackground = currentSlide?.contents?.background || "#ffffff";

  const textElements = currentSlide?.contents?.text || [];
  const mediaElements = currentSlide?.contents?.media || [];

  return (
    <div className="canvas-area">
      <div
        className="slide-canvas"
        style={{
          width: `${slideWidth}px`,
          height: `${slideHeight}px`,
          background: slideBackground,
          position: "relative",
        }}
      >
        {textElements.map((element) => (
          <TextElement key={element.id} element={element} />
        ))}

        {mediaElements.map((element) => (
          <ImageElement key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
}

export default CanvasArea;