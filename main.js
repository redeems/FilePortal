var options = {
    particles: {
      number: {
        value: 99,
        density: {
          enable: true,
          value_area: 552.4033491425909
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 3
        },
        image: {
          src: "img/github.svg",
          width: 70,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5782952832645452,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    retina_detect: false
  };
  particlesJS("particle", options);
  
  let filePath;
  document.getElementById("fileInput").addEventListener("change", function () {
    var file = this.files[0];
    filePath = file.path;
  
    if (filePath) {
      var fileName = filePath.split("/").pop();
      document.querySelector(".text--note").innerText = fileName;
    }
  });
  
  document.addEventListener("click", function () {
    document.getElementById("fileInput").click();
  });
  
  document.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  
  document.addEventListener("drop", function (e) {
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    filePath = file.path;
  
    if (filePath) {
      var fileName = filePath.split("/").pop();
      document.querySelector(".text--note").innerHtml = fileName;
    }
  });

  drawPlanetPhase(document.getElementById('moon'), 0.15, true);

  const moon = document.getElementById('moon');

function toggleBobbing() {
  moon.classList.toggle('bobbing');
}

setInterval(toggleBobbing, 1000); // toggle the bobbing class every 1 second
