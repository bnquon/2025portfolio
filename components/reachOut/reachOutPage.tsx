import PageContainer from "../PageContainer";
import ReachOutForm from "./ReachOutForm";

export default function ReachOutPage() {
  return (
    <PageContainer>
      <div className="flex w-full relative">
        <div className="w-1/2">
          <span className="2xl:text-4xl text-3xl">(Reach Out)</span>
        </div>
        <div className="w-1/2">
          <ReachOutForm />
        </div>
      </div>
    </PageContainer>
  );
}
