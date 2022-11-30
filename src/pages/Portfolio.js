import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const websiteProjects = [
    {
      img: require("../assets/images/contact-cards.JPG"),
      name: "Contact Cards",
      link: "not supported",
      githubLink: "https://github.com/SarahStelljes/contact-card",
    },
    {
      img: require("../assets/images/mechtech-blog.JPG"),
      name: "MechTech Blog",
      link: "not supported",
      githubLink: "https://github.com/SarahStelljes/MechTech",
    },
    {
      img: require("../assets/images/pizza-hunt.JPG"),
      name: "Pizza Hunt",
      link: "not supported",
      githubLink: "https://github.com/SarahStelljes/pizza-hunt",
    },
    {
      img: require("../assets/images/satori-notes.JPG"),
      name: "SatoriNotes",
      link: "not supported",
      githubLink: "https://github.com/SarahStelljes/SatoriNotes",
    },
    {
      img: require("../assets/images/TextEdor-JATE.JPG"),
      name: "TextEdor",
      link: "not supported",
      githubLink: "https://github.com/SarahStelljes/TextEdor",
    },
    {
      img: require("../assets/images/zookeepr.JPG"),
      name: "Zookeepr",
      link: "not supported",
      githubLink: "https://github.com/SarahStelljes/zookeepr",
    },
  ];

  return (
    <>
      <h1>My Portfolio</h1>
      <div className="portfolio-div">
        <h2>Websites</h2>
        <p>
          Normally I would only put working links, but I did create these
          websites, so I put all of them up. However, due to heroku (a service
          that usesd to host and run your front end and back end for free)
          taking away their free "Dynos", there is a chance that some of them
          may not work / be visible. I will also post links to their
          corrosponding GitHub repo so you can at least SEE that I did the work.
        </p>
        <div className="projects-div">
          <div className="project main-proj"></div>
          <div className="web-projects">
            {websiteProjects.map((webProject) => (
              <div className="project website-proj">
                <img
                  src={webProject.img}
                  className={`projet-img ${webProject.name}`}
                  alt={webProject.name}
                />
                <div className="web-link-dev">
                  {() => {
                    if (webProject.name === "not supported") {
                      return (
                        <Link to="/sorry">
                          <p>{webProject.name}</p>
                        </Link>
                      );
                    }
                  }}
                  <a href={webProject.githubLink}>
                    <p>GitHub Repo</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2>Prototype Barn Owl</h2>
        <p>
          I made this barn owl in a 3D program called Blender. It is only a
          prototype barn owl, as I had planned to make a better one at a later
          date. I was going to make a video game involving owls, and I was using
          Unreal Engine.
        </p>
        <div className="owl-div">
          <img
            src={require("../assets/images/gifs/Animation-FlyUpAndForward.gif")}
            alt="Animated 3D barn owl flying up and forward."
          />
          <img
            src={require("../assets/images/gifs/Animation-WalkingForward.gif")}
            alt="Animated 3D barn owl walking forward."
          />
          <img
            src={require("../assets/images/gifs/Animation-WalkStrafeRight.gif")}
            alt="Animated 3D barn owl strafing right, basically walking right while facing forward."
          />
        </div>
        <h2>Jazz Band CD</h2>
        <p>
          I was a part of my highschool jazz band and we got to make a CD, and I
          made it's cover! Even though my name is on it as a band member, I
          didn't get to actually record with my band memebers as I had a family
          emergency to attend to, but I'm glad I was still able to contribute to
          it in some way!
        </p>
        <img
          src={require("../assets/images/jazzband.jpg")}
          alt="Christmas Edition of my High School's Jazzband, whose cover was made by me."
        />
      </div>
    </>
  );
}
