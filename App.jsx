import React, { useRef } from "react";
function App() {
      const aboutMeRef = useRef(null);
         const servicesRef = useRef(null);
    const showcaseRef = useRef(null);
      const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return(
    <>
      <h1>Hey, I'm Asko!</h1>
      <p>Full-Stack Developer & Software Engineer</p>
      <pre id="pre1">
        <a onClick={() => scrollToSection(aboutMeRef)}>About Me   </a>
        <a onClick={() => scrollToSection(servicesRef)}>Services   </a>
        <a onClick={() => scrollToSection(showcaseRef)}>Showcase   </a>
        <a onClick={() => scrollToSection(contactRef)}>Contact   </a>
      </pre>
      <div className="bg">
          <h1 className="header" ref={aboutMeRef}>About Me</h1>
          <pre className="abm">
            Hey, I'm Asko! I am a full-stack developer and software engineer. I specialize in web, mobile application,
            software and AI development. I have been programming for about 2 years now and know multiple programming languages, such as JavaScript, C++, C#, Dart, Java, Python, etc. I also work with frameworks and languages such as HTML, CSS, React.JS, React Native, .NET and more. In my free time, I develop and play video games.
          </pre>
          <h1 className="header" id="srv" ref={servicesRef}>Services</h1>
          <pre className="srvc">
            I can develop you a custom website, a personal or professional mobile or even desktop application. I set prices depending on the type of software/web I am about to develop. Websites: 20-200€, Mobile Applications: 25-500€, Desktop Applications: 70-2K€. I calculate the prices based of the difficulty, size, features and more factors of the application/web type. These prices are NOT debatable and cannot be affected. Handling of orders: First, you need to contact me through my discord or email, make sure to include alot of details. After that, we can debate if you want to pay before or after I finish your project. Then, I calculate and set the price of the product. After a successful payment and finishing the project, I will send you all the files and instructions. NOTE: I do not accept any kind of refunds, please acknowledge this before purchasing my products. Trying to scam me will not end up good for you either.
          </pre>
          <h1 className="header" id="scs" ref={showcaseRef}>Showcase</h1>
          <h1 className="header" id="cnch" ref={contactRef}>Contact</h1>
          <pre className="cnc">
            You may contact me via my discord (asko4660) or my email (email), I will most likely respond within 2 to 48 hours after being sent the message. Please make sure to include as much details about the application as possible, such as name, functions and features, purpose, etc.
          </pre>
              <h1 className="ai" id="ai">Additional Info</h1>
           <pre className="aip">My working hours: Monday-Friday: 16:00-2:00,
            Saturday-Sunday: 13:00-23:00
           </pre>
           <h1 className="ai" id="acc">My Accounts</h1>
           <pre className="aip">GitHub: Asko7779, Discord: asko4660
           </pre>
      </div>
      <footer><h2>CREDITS</h2></footer>
      <footer id="f1">Designed and programmed by Asko</footer>
      <footer id="f2">Created with HTML, CSS, React.JS (JavaScript XML)</footer>
      <footer id="f3">Special Mention: selkiedraw (Instagram Acc.)</footer>
      <footer id="f4">Go check her out, she's a good artist :)</footer>
    </>
  );
}

export default App;
