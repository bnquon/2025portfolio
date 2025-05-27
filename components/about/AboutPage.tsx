import PageContainer from "../PageContainer";
import About from "./About";
import OutsideOfWork from "./OutsideWork";
import WorkExperience from "./WorkExperience";

export default function AboutPage() {
  return (
    <PageContainer gap="gap-28" paddingTop="pt-20">
      <About />
      <WorkExperience />
      <OutsideOfWork />
    </PageContainer>
  );
}
