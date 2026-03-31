import "./TextElement.css";

function TextElement({ element }) {
  if (!element) return null;

  return (
    <div
      className="text-element"
      style={{
        position: "absolute",
        left: `${element.position?.x || 0}px`,
        top: `${element.position?.y || 0}px`,
        width: `${element.width || 200}px`,
        height: `${element.height || "auto"}`,
        transform: `rotate(${element.rotation || 0}deg)`,
        zIndex: element["z-index"] || 1,
        background: element.background || "transparent",
        overflow:
          element.overflow === "overflow-visible" ? "visible" : "hidden",
      }}
    >
      {element.paragraphs?.map((paragraph) => {
        const formatting = paragraph.formatting || {};

        return (
          <p
            key={paragraph.id}
            className="text-element__paragraph"
            style={{
              fontFamily: formatting.font || "Arial, sans-serif",
              fontSize: formatting.size || "16px",
              color: formatting.color || "#000000",
              fontWeight: formatting.weight || "normal",
              fontStyle: formatting.italics ? "italic" : "normal",
              textDecoration: formatting["text-decoration"] || "none",
              textAlign: formatting.align || "left",
              lineHeight: formatting["line-spacing"] || "1.4",
              margin: formatting.margin || "0 0 8px 0",
            }}
          >
            {paragraph.runs?.map((run, index) => {
              const runFormatting = run.formatting || {};

              return (
                <span
                  key={index}
                  style={{
                    fontFamily: runFormatting.font || formatting.font,
                    fontSize: runFormatting.size || formatting.size,
                    color: runFormatting.color || formatting.color,
                    fontWeight: runFormatting.weight || formatting.weight,
                    fontStyle:
                      runFormatting.italics !== undefined
                        ? runFormatting.italics
                          ? "italic"
                          : "normal"
                        : formatting.italics
                        ? "italic"
                        : "normal",
                    textDecoration:
                      runFormatting["text-decoration"] ||
                      formatting["text-decoration"] ||
                      "none",
                    verticalAlign:
                      run["super-sub-script"] === "super"
                        ? "super"
                        : run["super-sub-script"] === "sub"
                        ? "sub"
                        : "baseline",
                  }}
                >
                  {run.link ? (
                    <a
                      href={run.link.href}
                      target={run.link.target || "_blank"}
                      rel="noreferrer"
                    >
                      {run.text}
                    </a>
                  ) : (
                    run.text
                  )}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default TextElement;