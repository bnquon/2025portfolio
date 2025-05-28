"use client";
import { useState } from "react";
import clsx from "clsx";
import { lora } from "@/app/fonts";
import { DATA } from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AutoResizingTextarea from "./AutoResizingTextArea";

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

  return (
    <div className="flex flex-col gap-10">
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

      <div
        className="flex items-center w-fit relative pb-1 cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <button
          type="submit"
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
