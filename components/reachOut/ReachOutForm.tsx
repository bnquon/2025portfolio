import clsx from "clsx";
import { lora } from "@/app/fonts";
import { DATA } from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface FormRowProps {
  questionNumber: string;
  question: string;
  placeholder: string;
}

const FormRow = ({ questionNumber, question, placeholder }: FormRowProps) => {
  return (
    <div className="w-full grid grid-rows-2 grid-cols-[1fr_7fr] gap-y-4 border-b-[1px] pb-4 border-[#d5d5d5]">
      <p className="text-2xl">{questionNumber}</p>
      <p className="text-2xl">{question}</p>
      <div className="col-start-2">
        <input type="text" className="text-2xl w-full outline-none" placeholder={placeholder} />
      </div>
    </div>
  );
}

export default function ReachOutForm() {
  return (
    <div className="flex flex-col gap-10">
      {DATA.contact.map((question) => (
        <FormRow
          key={question.questionNumber}
          questionNumber={question.questionNumber}
          question={question.question}
          placeholder={question.placeholder}
        />
      ))}
      <div className="flex justify-start items-center">
        <p className={clsx(lora.className, "text-4xl font-medium cursor-pointer mr-2")}>SEND</p>
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="black" />
      </div>
    </div>
  );
}