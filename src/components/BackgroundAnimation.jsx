import Particles from "@tsparticles/react";

function BackgroundAnimation() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
      }}
      style={{
        width: "100%",
        backgroundColor: "#000000",
        position: "fixed",
        zIndex: -1,
        left: 0,
        top: 0,
        bottom: 0,
      }}
    />
  );
}

export default BackgroundAnimation;
