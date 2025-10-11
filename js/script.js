// Import quiz data
import quizData from "./data.js";

// Variables
// let index = 0
let prop = 0;


let options = [];

const getOption = (index) => {
  const QuestionDisplay = document.querySelector(".question-section");
  const OptionsDisplay = document.querySelector(".options-section");
  QuestionDisplay.textContent = quizData[index].question.toUpperCase();
  prop = 0;

  options = quizData[index];
  options = Object.values(options);

  options[1].forEach((option) => {
    const opt = document.createElement("div");
    const label = document.createElement("label");

    opt.className = "option";
    label.htmlFor = "option";

    label.innerText = option;

    opt.addEventListener("click", () => {
      HandleOptionClick(option, quizData[index].correct);
      opt.style.backgroundColor = "red";
    });
    opt.append(label);
    OptionsDisplay.append(opt);
  });
};

const HandleOptionClick = (selected, correct) => {
  console.log("Selected:", selected);
  console.log("Correct:", correct);
  const optionsDivs = document.querySelectorAll(".option");
  optionsDivs.forEach((div) => {
    div.style.pointerEvents = "none";
    if (div.textContent === correct) {
      div.style.backgroundColor = "green";
    } else {
      div.style.backgroundColor = "red";
    }
  });
};

const getNextOption = (newindex) => {
    console.log(newindex);
    
    const QuestionDisplay = document.querySelector(".question-section");
    const OptionsDisplay = document.querySelector(".options-section");
    QuestionDisplay.innerText = quizData[newindex].question.toUpperCase();

    const newOptionsDisplay = document.createElement("div");
    newOptionsDisplay.className = "options-section";

    options = quizData[newindex];
    options = Object.values(options);

    options[1].forEach((option) => {
        const opt = document.createElement("div");
        const label = document.createElement("label");

        opt.className = "option";
        label.htmlFor = "option";

        label.innerText = option;

        opt.addEventListener("click", () => {
            HandleOptionClick(option, quizData[newindex].correct);
            opt.style.backgroundColor = "red";
        });
        opt.append(label);
        newOptionsDisplay.append(opt);
    });
    OptionsDisplay.replaceWith(newOptionsDisplay);
};

// increment the index -> load next question [prop]
const Next = () => {
    prop++;
    if(prop >= quizData.length - 1) {
        alert("Quiz Over");
        return;
    } else {
        getNextOption(prop);
    }
}


getOption(prop);
 
document.getElementById('next').addEventListener('click', Next)