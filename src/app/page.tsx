import PageContainer from "../../components/PageContainer";
import NavBar from "../../components/homepage/NavBar";
import NameTitle from "../../components/homepage/NameTitle";
import IntroAndSocials from "../../components/homepage/IntroAndSocials";
import AboutPage from "../../components/about/AboutPage";

export default function Home() {
  return (
    <>
      {/* Home Page */}
      <PageContainer height="100vh">
        <NavBar />
        <NameTitle />

        {/* Line and titles text */}
        <hr
          style={{
            marginTop: "-32px",
            color: "#d5d5d5",
          }}
        />
        <div className="flex justify-between mt-10 text-4xl">
          <p>Software Engineer</p>
          <p>SFU CS Student</p>
        </div>

        <IntroAndSocials />
      </PageContainer>
      
      <AboutPage />
    </>
  );
}
