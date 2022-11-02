import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
const TextEditor = () => {
  const { quill, quillRef } = useQuill();
  const { textData, setTextData } = useState();
  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setTextData(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  return (
    <div>
      <div style={{ width: "100%" }}>
        <div ref={quillRef} />
      </div>
    </div>
  );
};

export default TextEditor;
