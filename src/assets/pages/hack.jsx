import React from "react";
import HackSection from "./HackSection";

import img1 from "../hackathon/img1.jpg";
import img2 from "../hackathon/img2.png";
import img3 from "../hackathon/img3.png";
import img4 from "../hackathon/img4.png";
import img5 from "../hackathon/img5.png";
import img6 from "../hackathon/img6.jpg";
import img7 from "../hackathon/img7.jpg";
import img8 from "../hackathon/img8.jpg";
import img9 from "../hackathon/img9.jpg";
import img10 from "../hackathon/img10.jpg";
import img11 from "../hackathon/img11.jpg";
import img12 from "../hackathon/img12.jpg";
import img13 from "../hackathon/img13.jpg";
import img14 from "../hackathon/img14.jpg";
import img15 from "../hackathon/img15.jpg";
import img16 from "../hackathon/img16.jpg";
import img17 from "../hackathon/img17.jpg";
import img18 from "../hackathon/img18.jpg";
import img19 from "../hackathon/img19.jpg";
import img20 from "../hackathon/img20.jpg";
import img21 from "../hackathon/img21.jpg";
import img22 from "../hackathon/img22.jpg";
export default function Hack() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-20 space-y-24">
      
        <HackSection
        title="Vyoma-24Hr National Level Hackthon"
        description="A Hackathon organized by BVRIT on 29th Jul 2025. This is a prototype of an AI-powered learning website that features a dedicated chatbot developed by us. The website contains all the essential resources to learn AI, including projects based on it to help users improve their skills."
        images={[ img6, img7, img8,img9, img10, img11]}
        githubLink="https://github.com/Advaitkasturi/LearnMatrix-vyoma-national-level-hackthon-"
      />

        <HackSection
        title="Code Craft -Web Dev Edition"
        description="Organized and led Web Developement BootCamp - April 2025"
        images={[img12,img15,img13,img16,img14,img17]}
      />

        <HackSection
        title="GenAI Study Jams"
        description="Provided technical support for the BootCamp - February 2025 "
        images={[img18,img19,img20,img22,img21]}
      />

        <HackSection
        title="Smart India Hackthon"
        description="Me and my team developed an AI-powered website that helps alumni of a particular institute to reunite and mentor each other and find job oppourtunities , and stay updated with news ,hackathons , competitions etc"
        images={[img4, img5]}
        githubLink="https://github.com/Advaitkasturi/Alumni-reunion-website-ALUMGUIDE"
      />

      <HackSection
        title="Build Together"
        description="A Hackathon organized by GDSC GNI on 20th Dec 2023. This is a prototype of an entrepreneurial website that aims to simplify things for aspiring entrepreneurs to build their business."
        images={[img1, img2, img3]}
        githubLink="https://github.com/Advaitkasturi/Entrepreneurial-website-Startvista"
      />


    </div>
  );
}
