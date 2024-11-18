// let headerMenu = document.querySelector(".header-menu")
// let headerMenuButton = document.querySelector(".menu-button");
// headerMenuButton.addEventListener("click" , () => {
//     if(+headerMenu.style.width < 570){
//         headerMenu.style.display = "flex"
//     }
// })
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

  function input(event) {
    if (event.key === 'e' || event.key === 'E' || event.key === "+" || event.key === "-" || event.key === "π") {
        event.preventDefault();
    }
  }

  firstInput.addEventListener("keydown", input);




  let menuButton = document.querySelector(".menu-button");
  let headerMenuList = document.querySelector(".header-menu-list");
  menuButton.addEventListener("click" , () => {
    headerMenuList.classList.toggle("header-list")
  })
