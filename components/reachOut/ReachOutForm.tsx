"use client";
import { FormEvent, useRef, useState } from "react";
import clsx from "clsx";
import { lora } from "@/app/fonts";
import { DATA } from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AutoResizingTextarea from "./AutoResizingTextArea";
import { toast } from "sonner";

interface FormRowProps {
  questionNumber: string;
  question: string;
  placeholder: string;
  isShort: boolean;
  name: string;
}

const FormRow = ({
  questionNumber,
  question,
  placeholder,
  isShort,
  name,
}: FormRowProps) => {
  return (
    <div className="w-full flex border-b-[1px] gap-8 pb-4 border-[#d5d5d5]">
      <p className="text-2xl">{questionNumber}</p>
      <div className="flex flex-col w-full gap-4">
        <div className="h-fit">
          <p className="text-2xl">{question}</p>
        </div>
        <div className="col-start-2">
          {isShort ? (
            <input
              type="text"
              required
              className="text-2xl w-full outline-none"
              placeholder={placeholder}
              name={name}
            />
          ) : (
            <AutoResizingTextarea placeholder={placeholder} name={name} />
          )}
        </div>
      </div>
    </div>
  );
};

export default function ReachOutForm() {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.append("access_key", process.env.NEXT_PUBLIC_EMAIL_KEY!);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      form.current?.reset();
      toast.success("Message sent successfully!");
    } else {
      toast.error("Message failed to send or recognized as spam.");
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <form action="" onSubmit={onSubmit} ref={form} className="w-full flex flex-col gap-10">
        {DATA.contact.map((question) => (
          <div key={question.questionNumber} className="w-full">
            <FormRow
              questionNumber={question.questionNumber}
              question={question.question}
              placeholder={question.placeholder}
              isShort={question.short}
              name={question.name}
            />
          </div>
        ))}
      </form>

      <div
        className="flex items-center w-fit relative pb-1 cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <button
          onClick={() => form.current?.requestSubmit()}
          className={clsx(lora.className, "text-4xl font-medium mr-2")}
        >
          SEND
        </button>
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="black" />
        <hr
          style={{
            width: isHovering ? "100%" : "0%",
            transition: "width 0.3s ease-in-out",
          }}
          className="absolute w-full bottom-0 border-[black]"
        />
      </div>
    </div>
  );
}
