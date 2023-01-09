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

let filePath = "";
let fileOut = "";
let downloadLink = "";
document.getElementById("fileInput").addEventListener("change", function () {
    var file = this.files[0];
    if (file) {
        portalSpeed();
        upload(file);
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
    const file = e.dataTransfer.files[0];
    if (file) {
        portalSpeed();
        upload(file);
    }
});

function portalSpeed() {
    var portalImg = document.querySelector('.portalimg');
    portalImg.style.animationDuration = '2s';
    playAnimation();
}

function playAnimation() {
    const element = document.getElementById("rocket");
    element.style.opacity = "100%";
    element.style.animation = "rotate 3s linear";
    element.style.animationIterationCount = "1";
    document.querySelector(".text--note").innerText = "";


    element.addEventListener("animationend", function () {
        element.style.opacity = "0%";
        document.querySelector(".text--note").innerText = downloadLink + "\n\n" + "CLICK TO COPY";
    });
}

function generateFileId() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    let fileId = "";
    for (let i = 0; i < 15; i++) {
        fileId += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return fileId;
}
async function uploadFile(file, fileId) {
    const reader = new FileReader();
    reader.onloadend = function() {
        fetch('http://localhost:8080/files/' + fileId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Name': file.name
            },
            body: new Blob([reader.result])
        })
            .then(response => console.log(response))
            .catch(error => console.error(error));
    }
    reader.readAsArrayBuffer(file);
}


async function upload(file) {
    const fileId = generateFileId();
    await uploadFile(file, fileId);
    downloadLink = `http://localhost:8080/files/` + fileId;
    await navigator.clipboard.writeText(downloadLink);
}

