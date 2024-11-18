
    // if (event.key === 'e' || event.key === 'E' || event.key === "+" || event.key === "-" || event.key === "π") {
    //     event.preventDefault(); // Blocks the key press before it affects the input
    // }
    
// let secondInput = document.querySelector(".second-input");
// let firstInput = document.querySelector(".first-input");
// firstInput.value = 5000;
// secondInput.value = 67.6685;
// function input(event){
//     const inputValue = event.target.value;
//     const checkInput = inputValue.replace(/[^0-9]/g , "")
//     if(inputValue !== checkInput){
//         event.target.value = checkInput
//     }
// }
// firstInput.addEventListener("input" , input)

// let firstInput = document.querySelector(".first-input");
// let secondInput = document.querySelector(".second-input");

// firstInput.value = 5000;
// secondInput.value = 67.6685;

// function checkInput(event) {
//     const inputValue = event.target.value;
//     const checkInput = inputValue.replace(/[^0-9]/g , "")
//     if(inputValue !== checkInput){
//         event.preventDefault()
//     }
// }

// firstInput.addEventListener("keydown", checkInput);



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


  let buttons1 = document.querySelectorAll(".buttons1 button");
  buttons1.forEach(button => {
    button.addEventListener("click" , () => {
        buttons1.forEach(btn1 => {
            btn1.style.backgroundColor = "white";
            btn1.style.color = "#C6C6C6"
        })
        button.style.backgroundColor = "#833ae0";
        button.style.color = "white";
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
    })
  })
