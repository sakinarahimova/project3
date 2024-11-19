let firstInput = document.querySelector(".first-input");
let secondInput = document.querySelector(".second-input");
let checkInputSource;
firstInput.value = 5000;
secondInput.value = 67.6685;


firstInput.addEventListener("keydown", (event) => {
    checkInputSource = "first"
    let k = event.key;
    let changedInp = k.replace(/[0-9,\.]/, '');
    if (k === "Backspace" || k === "Delete" || k === "ArrowLeft" || k === "ArrowRight") {
        return;
    }
    if(changedInp !== ""){
        event.preventDefault()
    }
    
    if((k == "." || k == "," )&& firstInput.value.includes(".")){
        event.preventDefault()
    }
    if (k === ",") {
        event.preventDefault();
        let currentValue = firstInput.value;
        if(!firstInput.value.includes(".")){
        firstInput.value = currentValue + '.';
        }
    }
    if(firstInput.value.includes(".")){
        console.log(firstInput.value);
        
        let a = firstInput.value.split(".")[1]
        console.log(a);
        
        if(a.length >= 5){
            if (k !== "Backspace" && k !== "Delete" && k !== "ArrowLeft" && k !== "ArrowRight") {
                event.preventDefault();
            }
        }
    }
});
  
secondInput.addEventListener("keydown", (event) => {
    checkInputSource = "second"
    let k = event.key;
    let changedInp = k.replace(/[0-9,\.]/, '');
    // if (secondInput.value[0] == "0" && secondInput.value.length > 1) {
    //     secondInput.value = secondInput.value.replace(/^0+/, "");
    // }
    if (k === "Backspace" || k === "Delete" || k === "ArrowLeft" || k === "ArrowRight") {
        return;
    }
    if(changedInp !== ""){
        event.preventDefault()
    }
    
    if((k == "." || k == "," )&& secondInput.value.includes(".")){
        event.preventDefault()
    }
    if (k === ",") {
        event.preventDefault();
        let currentValue = secondInput.value;
        if(!secondInput.value.includes(".")){
        secondInput.value = currentValue + '.';
        }
    }
    if(secondInput.value.includes(".")){
        console.log(secondInput.value);
        
        let a = secondInput.value.split(".")[1]
        console.log(a);
        
        if(a.length >= 5){
            if (k !== "Backspace" && k !== "Delete" && k !== "ArrowLeft" && k !== "ArrowRight") {
                event.preventDefault();
            }
        }
    }
});
  



let menuButton = document.querySelector(".menu-button");
let headerMenuList = document.querySelector(".header-menu-list");
menuButton.addEventListener("click" , () => {
    headerMenuList.classList.toggle("header-list")
})

let m = "RUB";
let n = "USD";
let firstInfo = document.querySelector(".first-info");
let secondInfo = document.querySelector(".second-info");
firstInfo.textContent = "1 RUB = 0.0135 USD";
secondInfo.textContent = "1 USD = 73.8896 RUB";
let newValue1;
let newValue2;
let firstInputUpdate;
let secondInputUpdate;
let rate;
let buttons1 = document.querySelectorAll(".buttons1 button");
let buttons2 = document.querySelectorAll(".buttons2 button");



firstInput.addEventListener("input" , () => {
    let url = "https://v6.exchangerate-api.com/v6/53d8317136c6b635566c64f4/latest/"
    fetch(`${url}${m}`)
    .then((res) => res.json())
    .then((data) => {
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
            secondInput.value = (firstInput.value * currentRate).toFixed(5);
            firstInfo.textContent = `1 ${m} = ${currentRate} ${n}`;
            secondInfo.textContent = `1 ${n} = ${(1 / currentRate).toFixed(5)} ${m}`;
    })
    .catch((error) => {
        console.error("Error", error);
    }); 
})

secondInput.addEventListener("input" , () => {
    let url = "https://v6.exchangerate-api.com/v6/53d8317136c6b635566c64f4/latest/"
    fetch(`${url}${m}`)
    .then((res) => res.json())
    .then((data) => {
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
            firstInput.value = (secondInput.value / currentRate).toFixed(5);
            firstInfo.textContent = `1 ${m} = ${currentRate} ${n}`;
            secondInfo.textContent = `1 ${n} = ${(1 / currentRate).toFixed(5)} ${m}`;
    })
    .catch((error) => {
        console.error("Error", error);
    }); 
})




buttons1.forEach(button => {
    button.addEventListener("click" , () => {
        buttons1.forEach(btn1 => {
            btn1.style.backgroundColor = "white";
            btn1.style.color = "#C6C6C6"
        })
        button.style.backgroundColor = "#833ae0";
        button.style.color = "white";
        m = button.textContent;
    let url = "https://v6.exchangerate-api.com/v6/53d8317136c6b635566c64f4/latest/"
        fetch(`${url}${m}`)
        .then((res) => res.json())
        .then((data) => {
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

            newValue1 = `1 ${m} = ${currentRate} ${n}`;
            newValue2 = `1 ${n} = ${(1 / currentRate).toFixed(5)} ${m}`;
            firstInfo.textContent = newValue1;
            secondInfo.textContent = newValue2;
            if(checkInputSource = "first" || checkInputSource == ""){
                secondInput.value = (firstInput.value * currentRate).toFixed(5);
            }
        })
        .catch((error) => {
            console.error("Error", error);
        });
    })
})
buttons2.forEach(button => {
    button.addEventListener("click" , () => {
        buttons2.forEach(btn2 => {
            btn2.style.backgroundColor = "white";
            btn2.style.color = "#C6C6C6"
        })
        button.style.backgroundColor = "#833ae0";
        button.style.color = "white";
        n = button.textContent;
        let url = "https://v6.exchangerate-api.com/v6/53d8317136c6b635566c64f4/latest/"
        fetch(`${url}${m}`)
        .then((res) => res.json())
        .then((data) => {
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
                newValue1 = `1 ${m} = ${currentRate} ${n}`;
                newValue2 = `1 ${n} = ${(1 / currentRate).toFixed(5)} ${m}`;
                firstInfo.textContent = newValue1;
                secondInfo.textContent = newValue2;
                if(checkInputSource = "second"){
                    firstInput.value = (secondInput.value * currentRate).toFixed(5);
                }else{
                    secondInput.value = (firstInput.value * currentRate).toFixed(5);
                }
        })
        .catch((error) => {
            console.error("Error", error);
        });
    })
})

