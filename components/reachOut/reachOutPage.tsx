import PageContainer from "../PageContainer";
import ReachOutForm from "./ReachOutForm";

export default function ReachOutPage() {
  return (
    <PageContainer>
      <div className="sm:flex w-full relative" id="reach-out">
        <div className="sm:w-1/2 sm:mb-0 mb-6">
          <span className="2xl:text-4xl sm:text-3xl text-2xl">(Reach Out)</span>
        </div>
        <div className="sm:w-1/2">
          <ReachOutForm />
        </div>
      </div>
    </PageContainer>
  );
}
