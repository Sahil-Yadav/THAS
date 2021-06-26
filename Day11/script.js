const option = document.querySelectorAll(".opBtn");
const opName = document.querySelectorAll(".optionN");
const cOpt = document.querySelector(".option2-btn");

const optionArray = ["1", "2", "3", "4"];

option.forEach((opBtn) => {
  opBtn.addEventListener(`click`, () => {
    opBtn.classList.toggle("ques1");

    opName.forEach((oNm) => {
      oNm.classList.toggle("ques1");

      var j = 0;

      while (j < optionArray.length) {
        j++;
        if (oNm.classList.contains("ques1")) {
          optionArray.forEach((i, l) => {
            oNm.innerText = i + j++;
          });
        } else {
          oNm.innerText = "George Washington";
        }
      }
    });
  });
});

cOpt.addEventListener(`click`, () => {
  cOpt.classList.toggle("correct");

  if (cOpt.classList.contains("correct")) {
    cOpt.innerText = "Correct";
  } else {
    cOpt.innerText = "Select Answer";
  }
});
