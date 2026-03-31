import { useState } from "react";
import { EditorContext } from "../providers/EditorContext";
import businessPresentation from "../../data/templates/businessPresentation.json";

const EditorProvider = ({ children }) => {
  const [presentation, setPresentation] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");

  const openPresentation = (presentationData) => {
    setPresentation(presentationData);
    setCurrentSlideIndex(0);
    setSelectedElementId(null);
    setCurrentPage("editor");
  };

  const createNewPresentation = () => {
    setPresentation(businessPresentation);
    setCurrentSlideIndex(0);
    setSelectedElementId(null);
    setCurrentPage("editor");
  };

  const goHome = () => {
    setCurrentPage("home");
    setSelectedElementId(null);
  };

  return (
    <EditorContext.Provider
      value={{
        presentation,
        setPresentation,
        currentSlideIndex,
        setCurrentSlideIndex,
        selectedElementId,
        setSelectedElementId,
        currentPage,
        setCurrentPage,
        openPresentation,
        createNewPresentation,
        goHome,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;