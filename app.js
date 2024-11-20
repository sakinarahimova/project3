let footer = document.querySelector("footer");
window.addEventListener('offline', () => {
    footer.style.display = "flex";
    typeOfError = "fail"
            console.log("99");
})
// window.addEventListener('online', () => {
//     footer.style.display = "none";
// })

let menuButton = document.querySelector(".menu-button");
let headerMenuList = document.querySelector(".header-menu-list");
menuButton.addEventListener("click", () => {
    headerMenuList.classList.toggle("header-list");
});

let firstInput = document.querySelector(".first-input");
let secondInput = document.querySelector(".second-input");
let checkInputSource = "";

let firstInfo = document.querySelector(".first-info");
let secondInfo = document.querySelector(".second-info");

let buttons1 = document.querySelectorAll(".buttons1 button");
let buttons2 = document.querySelectorAll(".buttons2 button");

firstInput.value = 5000;
secondInput.value = 49.85500;
let typeOfError

function initialCall(){
    fetch('https://v6.exchangerate-api.com/v6/f83fa04de97a675ff693e12f/latest/RUB')
    .then(res => res.json())
    .then(data => {
        typeOfError = ""
        const exchangeRates = data.conversion_rates;
        let currentRate = exchangeRates.USD;
        secondInput.value = (firstInput.value * currentRate).toFixed(5);

        firstInfo.textContent = `1 RUB = ${currentRate} USD`;
        secondInfo.textContent = `1 USD = ${(1 / currentRate).toFixed(5)} RUB`;
    })
    .catch(error => {
        if (error == "TypeError: Failed to fetch"){
            typeOfError = "fail"
            console.log("99");
            
        }
    });
}
// initialCall()
// document.addEventListener("click" , () =>{
//     initialCall()
// })


function typying(event , i){
    k = event.key;
    if (k === "Backspace" || k === "Delete" || k === "ArrowLeft" || k === "ArrowRight") return;

    let changedInp = k.replace(/[0-9,\.]/, '');
    if (changedInp !== "") event.preventDefault();
    
    if (k !== "0" && !i.value.includes(".")) {
        i.value = i.value.replace(/^0+/, "");

    }
    if ((k == "." || k == ",") && i.value < 1) {
        i.value = "0.";
    }
    if ((k == "." || k == ",") && i.value.includes(".")) {
        event.preventDefault();
    }
    if (k === ",") {
        event.preventDefault();
        let currentValue = i.value;
        if (!i.value.includes(".")) i.value = currentValue + '.';
    }
    if (i.value.includes(".")) {
        let a = i.value.split(".")[1];
        if (a.length >= 5) {
            if (k !== "Backspace" && k !== "Delete" && k !== "ArrowLeft" && k !== "ArrowRight") {
                event.preventDefault();
            }
        }
    }
}

firstInput.addEventListener("keydown", (event) => {
    checkInputSource = "first";
    typying(event , firstInput)
});
secondInput.addEventListener("keydown", (event) => {
    checkInputSource = "second";
    typying(event , secondInput)
});

let m = "RUB";
let n = "USD";
firstInfo.textContent = "1 RUB = 0.0135 USD";
secondInfo.textContent = "1 USD = 73.8896 RUB";

function handleInput(source) {
    if (!navigator.onLine) {
        footer.style.display = "flex";
        return;
    }
    let url = "https://v6.exchangerate-api.com/v6/f83fa04de97a675ff693e12f/latest/";
    fetch(`${url}${m}`)
        .then((res) => res.json())
        .then((data) => {
            secondInput.placeholder = "0";
            firstInput.placeholder = "0";
            const exchangeRates = data.conversion_rates;
            let currentRate;

            if (n === "USD") {
                currentRate = exchangeRates.USD;
            } else if (n === "RUB") {
                currentRate = exchangeRates.RUB;
            } else if (n === "EUR") {
                currentRate = exchangeRates.EUR;
            } else if (n === "GBP") {
                currentRate = exchangeRates.GBP;
            }

            if (source == "first" || source == "") {
                secondInput.value = (firstInput.value * currentRate).toFixed(5);
            } else if (source == "second") {
                firstInput.value = (secondInput.value / currentRate).toFixed(5);
            }
        })
}

firstInput.addEventListener("input", () => {
    checkInputSource = "first";
    handleInput(checkInputSource);
});

secondInput.addEventListener("input", () => {
    checkInputSource = "second";
    handleInput(checkInputSource);
});
                       
        


function pick(a, b, button) {
    button.addEventListener("click", () => {
        a.forEach(btn1 => {
            btn1.classList.remove("chosen-button");
        });
        button.classList.add("chosen-button");

        if (a === buttons1) {
            m = button.textContent;
        } else if (a === buttons2) {
            n = button.textContent;
        }

        if (typeOfError === "fail") {
            footer.style.display = "flex";

            a.forEach(btn => {
                let checkForSameButton = btn.textContent;

                b.forEach(btn2 => {
                    if (btn2.classList.contains("chosen-button")) {
                        let checkForSameButton2 = btn2.textContent;

                        if (checkForSameButton === checkForSameButton2) {
                            if (checkInputSource === "first" || checkInputSource === "") {
                                secondInput.value = firstInput.value;
                            } else {
                                firstInput.value = secondInput.value;
                            }
                        } else {
                            if (checkInputSource === "first" || checkInputSource === "") {
                                secondInput.placeholder = "Error";
                                secondInput.value = "";
                            } else {
                                firstInput.placeholder = "Error";
                                firstInput.value = "";
                            }
                        }
                    }
                });
            });
            return;
        }

        let url = `https://v6.exchangerate-api.com/v6/f83fa04de97a675ff693e12f/latest/${m}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const exchangeRates = data.conversion_rates;
                let currentRate = exchangeRates[n];

                firstInfo.textContent = `1 ${m} = ${currentRate} ${n}`;
                secondInfo.textContent = `1 ${n} = ${(1 / currentRate).toFixed(5)} ${m}`;
                if (checkInputSource === "first" || checkInputSource === "") {
                    secondInput.value = (firstInput.value * currentRate).toFixed(5);
                } else if (checkInputSource === "second") {
                    firstInput.value = (secondInput.value / currentRate).toFixed(5);
                }
            });
    });
}


buttons1.forEach(buttonItem => {
    pick(buttons1, buttons2 , buttonItem);
});

buttons2.forEach(buttonItem => {
    pick(buttons2, buttons1 , buttonItem);
});
