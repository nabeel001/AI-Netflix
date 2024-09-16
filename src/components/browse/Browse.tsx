import useBrowse from "../../hooks/useBrowse";
import Header from "../Header";
import AskGPT from "./gpt/AskGPT";
import MainContainer from "./main/MainContainer";
import SecondaryContainer from "./secondary/SecondaryContainer";
import MovieModal from "../MovieModal";
import Footer from "../Footer";

const Browse = () => {
  const { showAskGpt } = useBrowse();
  return (
    <div>
      <Header />
      {showAskGpt ? (
        <AskGPT />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <MovieModal />
      <Footer />
    </div>
  );
};

export default Browse;
