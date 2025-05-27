import PageContainer from "../PageContainer";
import ReachOutForm from "./ReachOutForm";

export default function ReachOutPage() {
  return (
    <PageContainer>
      <p className="text-4xl">(Reach Out)</p>
      <div className="flex">
        <div className="w-1/2">placeholder</div>
        <div className="relative w-1/2">
          <ReachOutForm />
        </div>
      </div>
    </PageContainer>
  );
}
