let footer = document.querySelector("footer");
fetch("https://v6.exchangerate-api.com/v6/9e5585c35cd27d91d15a7b53/latest/USD")
.then(() => console.log("Fetch was successful"))
.catch((error) => {
    console.error("Error t", error);
    if (error == "TypeError: Failed to fetch"){
        console.log("tt");
        footer.style.display = "flex"
        
    }
});
let menuButton = document.querySelector(".menu-button");
let headerMenuList = document.querySelector(".header-menu-list");
menuButton.addEventListener("click" , () => {
    headerMenuList.classList.toggle("header-list")
})

let firstInput = document.querySelector(".first-input");
let secondInput = document.querySelector(".second-input");
let checkInputSource = "";

let firstInfo = document.querySelector(".first-info");
let secondInfo = document.querySelector(".second-info");

let buttons1 = document.querySelectorAll(".buttons1 button");
let buttons2 = document.querySelectorAll(".buttons2 button");

firstInput.value = 5000;
secondInput.value = 49.85500;

fetch('https://v6.exchangerate-api.com/v6/9e5585c35cd27d91d15a7b53/latest/RUB')
.then(res => res.json())
.then(data => {    
    const exchangeRates = data.conversion_rates;
    let currentRate = exchangeRates.USD
    secondInput.value = (firstInput.value * currentRate).toFixed(5);
    
    firstInfo.textContent = `1 RUB = ${currentRate} USD`;
    secondInfo.textContent = `1 USD = ${(1 / currentRate).toFixed(5)} RUB`;
})

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
  





let m = "RUB";
let n = "USD";
firstInfo.textContent = "1 RUB = 0.0135 USD";
secondInfo.textContent = "1 USD = 73.8896 RUB";
let firstInputUpdate;
let secondInputUpdate;



firstInput.addEventListener("input" , () => {
    // if (firstInput.value === "") {
    //     firstInput.value = "0";
    // }
    // if(firstInput.value[0] == "0" && firstInput.value.length > 1){
    //     firstInput.value = firstInput.value.replace(/^0+/, "");
    // }
    // if (firstInput.value === "0") {
    //     return;
    // }
    checkInputSource = "first"
    let url = "https://v6.exchangerate-api.com/v6/9e5585c35cd27d91d15a7b53/latest/";
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
    checkInputSource = "second"
    let url = "https://v6.exchangerate-api.com/v6/9e5585c35cd27d91d15a7b53/latest/"
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
            btn1.classList.remove("chosen-button")
        })
        button.classList.add("chosen-button")
        m = button.textContent;
        let url = "https://v6.exchangerate-api.com/v6/9e5585c35cd27d91d15a7b53/latest/"
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

            firstInfo.textContent = `1 ${m} = ${currentRate} ${n}`;
            secondInfo.textContent = `1 ${n} = ${(1 / currentRate).toFixed(5)} ${m}`;
            if(checkInputSource == "first" || checkInputSource == ""){
                secondInput.value = (firstInput.value * currentRate).toFixed(5);
            }else if(checkInputSource == "second"){
                firstInput.value = (secondInput.value * currentRate).toFixed(5);
            }
        })
        .catch((error) => {
            console.error("Error t", error);
            if (error == "TypeError: Failed to fetch"){
                console.log("tt");
                footer.style.display = "flex"
                let checkForSameButton = button.textContent;
                buttons2.forEach(btn => {
                    let checkForSameButton2 = btn.textContent;
                    if(btn.classList.contains("chosen-button")){
                        firstInput.classList.remove("unable-fetch")
                        secondInput.classList.remove("unable-fetch")
                        if(checkForSameButton == checkForSameButton2){
                            if(checkInputSource == "first" || checkInputSource == ""){
                                secondInput.value = firstInput.value
                            }else{
                                firstInput.value = secondInput.value
                            }                                       
                        }else{
                            if(checkInputSource == "first" || checkInputSource == ""){
                                secondInput.value = "Unable to fetch data"
                                secondInput.classList.add("unable-fetch")
                                // secondInput.classList.add("unable-fetch")
                            }else{
                                firstInput.value = "Unable to fetch data";
                                firstInput.classList.add("unable-fetch")
                                // firstInput.classList.add("unable-fetch")
                            } 
                        }
                    }  
                })    
            }
            
        });
    })
})
buttons2.forEach(button => {
    button.addEventListener("click" , () => {

        // let checkForSameButton = button.textContent;
        // buttons1.forEach(btn => {
        //     let checkForSameButton2 = btn.textContent;
        //     if(btn.classList.contains("chosen-button")){
        //         if(checkForSameButton == checkForSameButton2){
        //             if(checkInputSource == "first" || checkInputSource == ""){
        //                 secondInput.value = firstInput.value
        //             }else{
        //                 firstInput.value = secondInput.value
        //             }
        //                 console.log("error");
                                       
        //         } 
        //     }  
        // })



        buttons2.forEach(btn2 => {
            btn2.classList.remove("chosen-button")
        })
        button.classList.add("chosen-button")
        n = button.textContent;
        let url = "https://v6.exchangerate-api.com/v6/9e5585c35cd27d91d15a7b53/latest/"
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
                firstInfo.textContent = `1 ${m} = ${currentRate} ${n}`;
                secondInfo.textContent = `1 ${n} = ${(1 / currentRate).toFixed(5)} ${m}`;
                
                if(checkInputSource == "second"){
                    firstInput.value = (secondInput.value * currentRate).toFixed(5);
                }else if(checkInputSource == "first" || checkInputSource == ""){
                    secondInput.value = (firstInput.value * currentRate).toFixed(5);
                }
        })
        .catch((error) => {
            console.error("Error ttt", error);
            if (error == "TypeError: Failed to fetch"){
                console.log("tt");
                footer.style.display = "flex"
                let checkForSameButton = button.textContent;
                buttons1.forEach(btn => {
                    let checkForSameButton2 = btn.textContent;
                    if(btn.classList.contains("chosen-button")){
                        if(checkForSameButton == checkForSameButton2){
                            firstInput.classList.remove("unable-fetch")
                            secondInput.classList.remove("unable-fetch")
                            if(checkInputSource == "first" || checkInputSource == ""){
                                secondInput.value = firstInput.value
                            }else{
                                firstInput.value = secondInput.value
                            }                                       
                        }else{
                            if(checkInputSource == "first" || checkInputSource == ""){
                                secondInput.value = "Unable to fetch data"
                                secondInput.classList.add("unable-fetch")
                            }else{
                                firstInput.value = "Unable to fetch data";
                                firstInput.classList.add("unable-fetch")
                            } 
                        }
                    }  
                })    
            }
        });
    })
})


