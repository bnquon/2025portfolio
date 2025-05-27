import { DATA } from "../../data/data";

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
        <input type="text" className="text-2xl w-full" placeholder={placeholder} />
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
    </div>
  );
}