import Typography from "@tiptap/extension-typography";
import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: "<p>Hello World!</p>",
    autofocus: 'end',
    editorProps: {
      attributes: {
        class:
          "focus:outline-none",
      },
    },
  });

  return <EditorContent className="w-[65ch]" editor={editor} />;
}
