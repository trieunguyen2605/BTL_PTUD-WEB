// 1 header - Triệu
const loginTitle = document.querySelector(".hd__login");
const registerTitle = document.querySelector(".hd__register");
const loginElement = document.querySelector(".modal__wrap-login");
const registerElement = document.querySelector(".modal__wrap-register");
const accountElement = document.querySelector("#hd__account");
const modalOverlay = document.querySelector(".modal-overlay");
const modalElement = document.querySelector(".modal");
console.log(modalElement)

//---------- Đăng kí đăng nhập--------------- 
accountElement.addEventListener("click",()=>{
  modalOverlay.style.display = "flex";
})

modalOverlay.addEventListener("click",()=>{
  modalOverlay.style.display = "none";
})

modalElement.addEventListener("click",(e)=>{
  e.stopPropagation(); // tránh hiệu ứng nổi bọt , khi ấn vào con mà cha bị tác dụng 
})

// ấn vô đăng kí 
registerTitle.addEventListener("click",()=>{
  // thanh màu xanh dưới chân 
  registerTitle.classList.add("active");
  loginTitle.classList.remove("active");
  loginTitle.classList.add("hidden");
  // di chuyển đến đăng kí 
  registerElement.style.transform = "translateX(-50%)";
  loginElement.style.transform = "translateX(-100%)"
})

// Ấn vô dăng nhập 
loginTitle.addEventListener("click",()=>{
  // thanh màu xanh dưới chân 
  loginTitle.classList.add("active");
  loginTitle.classList.remove("hidden");
  registerTitle.classList.remove("active");
  //  di chuyển đến phần đăng nhập 
  registerElement.style.transform = "translateX(100%)";
  loginElement.style.transform = "translateX(50%)"
})


























// 2 top 10 địa điểm hot - Nga 

// 3 du lịch theo miền - Vân 

// 4 du lịch theo mùa - Lệ 

// 5 footer -Ly
