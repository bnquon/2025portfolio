import PageContainer from "../PageContainer";
import About from "./About";
import OutsideOfWork from "./OutsideWork";
import WorkExperience from "./WorkExperience";

export default function AboutPage() {
  return (
    <PageContainer>
      <About />
      <WorkExperience />
      <OutsideOfWork />
    </PageContainer>
  );
}
