import { useEffect, useRef } from "react";
import autosize from "autosize";

interface AutoResizingTextareaProps {
  placeholder: string;
  name: string;
}

export default function AutoResizingTextarea({ placeholder, name }: AutoResizingTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (textareaRef.current) {
      autosize(textareaRef.current);
      if (isMobile) {
        textareaRef.current.rows = 2;
      } else {
        textareaRef.current.rows = 1;
      }
    }
  }, []);

  return (
    <textarea
      ref={textareaRef}
      className="w-full 2xl:text-2xl sm:text-xl outline-none"
      placeholder={placeholder}
      name={name}
      required
    />
  );
}

