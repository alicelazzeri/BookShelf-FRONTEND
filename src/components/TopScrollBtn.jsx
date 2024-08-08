import { useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

const TopScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("fadeInOut");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 150) {
      setIsVisible(true);
      setIsAnimating(true);
      setAnimationDirection("fadeInOut");
    } else {
      setIsVisible(false);
      setIsAnimating(false);
      setAnimationDirection("fadeOutIn");
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <button
      style={{ animation: `${animationDirection} 0.5s ease` }}
      className={`scrollBtn scroll-to-top-button ${isVisible ? "visible" : "hidden"} ${isAnimating ? "animating" : ""}`}
      onClick={handleScrollToTop}
    >
      <BsArrowUpSquareFill />
    </button>
  );
};

export default TopScrollBtn;
