"use strict";

// Elements
let result = document.getElementById("result");
let nums = document.querySelectorAll("li");

// Selecting each elements
for (let i = 0; i < nums.length; i++) {
  // respone of each element
  nums[i].addEventListener("click", function () {
    // the result value
    let getresult = document.getElementById("result").value;

    // condition in which the evaluation happens
    if (nums[i].innerHTML == "=") {
      // returning the evaluation
      result.value = eval(result.value);
    } else {
      // C CE clear condition
      if (nums[i].innerHTML == "C" || nums[i].innerHTML == "CE") {
        result.value = "";
      } else {
        result.value += nums[i].innerHTML;
      }

      // Del Condition
      if (nums[i].innerHTML == "Del") {
        result.value = getresult.slice(0, -1);
      }
    }
  });
}
