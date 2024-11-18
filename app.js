  let firstInput = document.querySelector(".first-input");
  let secondInput = document.querySelector(".second-input");

  firstInput.value = 5000;
  secondInput.value = 67.6685;


firstInput.addEventListener("keydown", (event) => {
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
    let k = event.key;
    let changedInp = k.replace(/[0-9,\.]/, '');
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
let rate
  let buttons1 = document.querySelectorAll(".buttons1 button");
  buttons1.forEach(button => {
    button.addEventListener("click" , () => {
        buttons1.forEach(btn1 => {
            btn1.style.backgroundColor = "white";
            btn1.style.color = "#C6C6C6"
        })
        button.style.backgroundColor = "#833ae0";
        button.style.color = "white";
        m = button.textContent;
        exchangeCurrency(m , n)
    })
  })
  let buttons2 = document.querySelectorAll(".buttons2 button");
  buttons2.forEach(button => {
    button.addEventListener("click" , () => {
        buttons2.forEach(btn2 => {
            btn2.style.backgroundColor = "white";
            btn2.style.color = "#C6C6C6"
        })
        button.style.backgroundColor = "#833ae0";
        button.style.color = "white";
        n = button.textContent;
        exchangeCurrency(m, n);
    })
  })


  let obj = {}
  function exchangeCurrency(firstCurrency , secondCurrency){
    let url = "https://v6.exchangerate-api.com/v6/53d8317136c6b635566c64f4/latest/"
    fetch(`${url}${firstCurrency}`)
    .then(res => res.json())
    .then(data => {
        exchangeRate = data.conversion_rates;
        if(secondCurrency == "USD"){
            rate = exchangeRate.USD;
            newValue1 = `1 ${firstCurrency} = ${rate} ${secondCurrency}`
            newValue2 = `1 ${secondCurrency} = ${(1 / rate).toFixed(5)} ${firstCurrency}`;
            secondInputUpdate = firstInput.value * rate
            firstInputUpdate = secondInput.value * rate
            console.log(`1 ${firstCurrency} = ${rate} ${secondCurrency}`);
        }else if(secondCurrency == "RUB"){
            rate = exchangeRate.RUB;
            newValue1 = `1 ${firstCurrency} = ${rate} ${secondCurrency}`
            newValue2 = `1 ${secondCurrency} = ${(1 / rate).toFixed(5)} ${firstCurrency}`;
            secondInputUpdate = firstInput.value * rate
            firstInputUpdate = secondInput.value * rate
            console.log(`1 ${firstCurrency} = ${rate} ${secondCurrency}`);       
        }else if(secondCurrency == "EUR"){
            rate = exchangeRate.EUR;
            newValue1 = `1 ${firstCurrency} = ${rate} ${secondCurrency}`
            newValue2 = `1 ${secondCurrency} = ${(1 / rate).toFixed(5)} ${firstCurrency}`;
            secondInputUpdate = firstInput.value * rate
            firstInputUpdate = secondInput.value * rate
            console.log(`1 ${firstCurrency} = ${rate} ${secondCurrency}`);           
        }else if(secondCurrency == "GBP"){
            rate = exchangeRate.GBP;
            newValue1 = `1 ${firstCurrency} = ${rate} ${secondCurrency}`
            newValue2 = `1 ${secondCurrency} = ${(1 / rate).toFixed(5)} ${firstCurrency}`;
            secondInputUpdate = firstInput.value * rate
            firstInputUpdate = secondInput.value * rate
            console.log(`1 ${firstCurrency} = ${rate} ${secondCurrency}`);           
        }
        firstInfo.textContent = newValue1;
        secondInfo.textContent = newValue2;
        // secondInput.value = secondInputUpdate;
        // firstInput.value = firstInputUpdate
    })
  }

 