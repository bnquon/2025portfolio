import { useEffect, useRef, useState } from "react";
import autosize from "autosize";

interface AutoResizingTextareaProps {
  placeholder: string;
  name: string;
}

export default function AutoResizingTextarea({
  placeholder,
  name,
}: AutoResizingTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [initialRows, setInitialRows] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 768;
    setInitialRows(isMobile ? 2 : 1);

    const timer = setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.rows = isMobile ? 2 : 1;

        autosize(textareaRef.current);
        autosize.update(textareaRef.current);
      }
    }, 10);

    return () => {
      clearTimeout(timer);
      if (textareaRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        autosize.destroy(textareaRef.current);
      }
    };
  }, []);

  return (
    <textarea
      ref={textareaRef}
      className="w-full 2xl:text-2xl sm:text-xl text-lg outline-none"
      placeholder={placeholder}
      name={name}
      rows={initialRows}
      required
    />
  );
}
