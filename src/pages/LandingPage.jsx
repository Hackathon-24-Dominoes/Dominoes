// import { useNavigate } from "react-router-dom";
// import "./LandingPage.css";

// function LandingPage() {
//   const navigate = useNavigate();

//   const goToStoryPage = () => {
//     navigate("/story");
//   };

//   return (
//     <div className="landing-page" onClick={goToStoryPage}>
//       {/* No need for an img tag since we're using a background image */}
//     </div>
//   );
// }

// export default LandingPage;

import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const goToStoryPage = () => {
    navigate("/story");
  };

  return (
    <div className="landing-page" onClick={goToStoryPage}>
      <div className="story-image"></div> {/* Background StoryBG3.png */}
      <div className="dominoes-image"></div> {/* Overlay Dominoes2.png */}
    </div>
  );
}

export default LandingPage;
