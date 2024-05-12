const responseList = document.getElementById("input1");
let taskNumber = 1;
const taskNumberSpan = document.getElementById("task-number");

taskNumberSpan.style.display = "none";

function addResponse(text) {
  taskNumberSpan.style.display = "block";
  taskNumberSpan.textContent = `Task ${taskNumber++}`;


  const newListItem = document.createElement("li");

  
  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = text;

  
  const deleteButton = document.createElement("i");
  deleteButton.classList.add("fas", "fa-trash"); 

  
  deleteButton.addEventListener("click", function() {
    responseList.removeChild(newListItem);
  });

  
  newListItem.appendChild(taskText);
  newListItem.appendChild(deleteButton);

  
  responseList.appendChild(newListItem);
}

const userInput = document.getElementById("input");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function() {
  const userText = userInput.value;
  if (userText.trim() !== "") {
    addResponse(userText);
    userInput.value = "";
  }
});
