import HomePage from "./pages/HomePage";
import EditorLayout from "./components/layout/EditorLayout";
import { useEditor } from "./hooks/useEditor";

function App() {
  const { currentPage } = useEditor();

  return currentPage === "home" ? <HomePage /> : <EditorLayout />;
}

export default App;