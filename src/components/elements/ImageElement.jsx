import "./ImageElement.css";

function ImageElement({ element }) {
  if (!element || element["media-type"] !== "image") return null;

  const scale = element.scale || 1;
  const rotation = element.rotation || 0;

  return (
    <div
      className="image-element"
      style={{
        position: "absolute",
        left: `${element.position?.x || 0}px`,
        top: `${element.position?.y || 0}px`,
        width: `${element.width || 200}px`,
        height: `${element.height || 150}px`,
        zIndex: element["z-index"] || 1,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: "center",
      }}
    >
      <img
        src={element["file-link"]}
        alt=""
        className="image-element__img"
      />
    </div>
  );
}

export default ImageElement;