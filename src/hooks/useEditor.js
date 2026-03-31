import { useContext } from "react";
import { EditorContext } from "../app/providers/EditorContext";

export function useEditor() {
  return useContext(EditorContext);
}