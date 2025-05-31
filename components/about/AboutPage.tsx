import PageContainer from "../PageContainer";
import About from "./About";
import OutsideOfWork from "./OutsideWork";
import WorkExperience from "./WorkExperience";

export default function AboutPage() {
  return (
    <PageContainer gap="sm:gap-28 gap-6" paddingTop="pt-20">
      <About />
      <WorkExperience />
      <OutsideOfWork />
    </PageContainer>
  );
}
