import Typography from "@tiptap/extension-typography";
import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";

export function Editor() {
  const editor = useEditor({
    extensions: [
      Document.extend({
        content: "heading block*",
      }),
      StarterKit.configure({
        document: false,
      }), Highlight, Typography, Placeholder.configure({
        placeholder: "Untitled",
        emptyEditorClass: "before:content-[attr(data-placeholder)] before:text-gray-500 before:float-left before:h-0 before:pointer-events-none",
      })],
    content: "<h1>Back-End</h1><p>This is your new editor.</p>",
    autofocus: 'end',
    editorProps: {
      attributes: {
        class:
          "focus:outline-none prose prose-invert prose-headings:mt-0",
      },
    },
  });

  return <EditorContent className="w-[65ch]" editor={editor} />;
}
