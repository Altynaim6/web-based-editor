import "./SlidesPanel.css";
import { useEditor } from "../../hooks/useEditor";

function SlidesPanel() {
  const {
    presentation,
    currentSlideIndex,
    setCurrentSlideIndex,
  } = useEditor();

  const slides = presentation?.slideset?.slides || [];

  return (
    <aside className="slides-panel">
      <h2 className="slides-panel__title">Slides</h2>

      <div className="slides-panel__list">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`slides-panel__item ${
              currentSlideIndex === index ? "slides-panel__item--active" : ""
            }`}
            onClick={() => setCurrentSlideIndex(index)}
          >
            <span className="slides-panel__number">{index + 1}</span>
            <span className="slides-panel__name">
              {slide.title?.content || `Slide ${index + 1}`}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default SlidesPanel;