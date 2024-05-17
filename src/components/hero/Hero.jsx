import "./hero.scss";

const Hero = () => {
  const click = () => console.log("helllo ");
  return (
    <div className="hero">
      <div className="textContainer">
        <h2>RACHMAN SAYED</h2>
        <h1>
          Full-Stack
          <br />
          Web Developer
        </h1>
        <button onClick={click}>Contact Me</button>
      </div>
      <img src="/public/scroll.png" alt="" />
      <div className="imageContainer">
        <img src="/rachman.png" alt="Hero" />
      </div>
      <button onClick={click}>See The Latest Works</button>
    </div>
  );
};

export default Hero;
