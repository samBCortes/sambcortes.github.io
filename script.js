document.addEventListener("DOMContentLoaded", () => {
    const name = document.querySelector("#name");
    const button = document.querySelector("#profile-button");

    button.addEventListener("click", () => {
        if (name.textContent === "Sam") {
            name.textContent = "Sammy";
        } else {
            name.textContent = "Sam";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const infosolitude1 = document.querySelector("#info-solitude1");
    const infosolitude2 = document.querySelector("#info-solitude2");
    const check1 = document.querySelector("#check1");
    const check2 = document.querySelector("#check2");
    const x1 = document.querySelector("#x1");
    const x2 = document.querySelector("#x2");
    const numbers = document.querySelector("#numbers");

    if (check1) {
        check1.addEventListener("click", () => {
            if (infosolitude1 && infosolitude1.style.display !== "none") {
                infosolitude1.style.display = "none";
                let number = parseInt(numbers.textContent.match(/\d+/)) || 0;
                number++;
                numbers.textContent = `Tus Conexiones (${number})`;
            }
        });
    }
    if (check2) {
        check2.addEventListener("click", () => {
            if (infosolitude2 && infosolitude2.style.display !== "none") {
                infosolitude2.style.display = "none";
                let number = parseInt(numbers.textContent.match(/\d+/)) || 0;
                number++;
                numbers.textContent = `Tus Conexiones (${number})`;
            }
        });
    }
    if (x1) {
        x1.addEventListener("click", () => {
            if (infosolitude1) {
                infosolitude1.style.display = "none";
            }
        });
    }
    if (x2) {
        x2.addEventListener("click", () => {
            if (infosolitude2) {
                infosolitude2.style.display = "none";
            }
        });
    }
});
