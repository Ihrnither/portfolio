import Particles from "react-particles-js";
import particlesConfig from "../particlesConfig";

const ParticlesBackground = () => {
  return (
    <Particles
      params={particlesConfig}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100%",
      }}
    />
  );
};

export default ParticlesBackground;
