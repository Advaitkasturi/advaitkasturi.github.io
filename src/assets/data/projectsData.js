// Example: src/assets/data/projectsData.js
import ieeePreview from "../projects/ieee.png";
import spotifyPreview from "../projects/spotify.png";
import amazonPreview from "../projects/amazon.png";

export default [
  {
    name: "IEEE-GNI (College`s Official Website)",
    description: "Official College IEEE Website",
    liveLink: "https://ieeegnitc.org/",
    repoLink: "",
    image: ieeePreview,  
    tags: ["React", "Tailwind", "Full stack"]
  },
  {
    name: "Spotify Clone",
    description: "A clone of Spotify!",
    liveLink: "",
    repoLink: "https://github.com/Advaitkasturi/Spotify-clone",
    image: spotifyPreview,
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Amazon Clone",
    description: "A clone website of Amazon.com",
    liveLink: "",
    repoLink: "https://github.com/Advaitkasturi/Amazon-clone",
    image: amazonPreview,
    tags: ["React", "Redux", "Firebase"]
  }
];
