const submitForm = document.querySelector("form"),
  firstNum = document.getElementById("exampleFormControlInput1"),
  secondNum = document.getElementById("exampleFormControlInput2"),
  sign = document.getElementById("exampleFormControlSelect1"),
  result = document.querySelector(".results span");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  result.innerText = Math.floor(
    math(sign.value, firstNum.value, secondNum.value)
  );
});

const math = function (sign, firstNum, secondNum) {
  switch (sign) {
    case "+":
      return +firstNum + +secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
};
