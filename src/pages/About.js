import React from "react";

export default function About() {
  return (
    <>
      <h1>About Me</h1>
      <div className="container">
        <img
          src={require("../assets/images/Sarah_picture.jpg")}
          className="profile-img img"
          alt="Sarah E. Stelljes"
        />
        <div className="about-me-div">
          <p>
            Ever since I was young, I wanted to try as many things as I could.
            As a result, I found myself looking for jobs in which I would be a
            part of a huge project, but as the leader of the project. Some of
            these jobs were Film Director or a Lead Game Developer (or something
            of the sort). Of course, there were more immediate things I wanted
            to do as well, such as become an author and/or a web developer. I'm
            also an entrepreneur, as I am trying to start up my own business
            called DirewolfConnect.
          </p>
          <p>
            In my childhood, I did many things such as soccer, a.k.a football as
            most countries know it, karate, and dance. Of course, these are not
            the only things I did. I also went to a IT Summer Camp for Girls. I
            also joined Theater when I was in highschool, as well as concert
            band and jazz band. I loved theater the most though; it was really
            fun. The thing I love the most though, aside from reading good
            stories, is coming up with ideas, though most of them are story
            ideas. I've come up with so many story ideas that I've lost count.
          </p>
        </div>
      </div>
    </>
  );
}
