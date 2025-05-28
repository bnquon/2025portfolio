import { useEffect, useRef } from "react";
import autosize from "autosize";

interface AutoResizingTextareaProps {
  placeholder: string;
  name: string;
}

export default function AutoResizingTextarea({ placeholder, name }: AutoResizingTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  return (
    <textarea
      ref={textareaRef}
      className="w-full text-2xl outline-none"
      placeholder={placeholder}
      name={name}
      required
      rows={1}
    />
  );
}
