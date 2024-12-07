document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  // Add task function
  const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
  alert("Task cannot be empty!");
  return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;
  // Toggle completion on click
  li.addEventListener("click", () => {
  li.classList.toggle("completed");
  });
  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => {
  taskList.removeChild(li);
  });
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  // Clear input
  taskInput.value = "";
  };
  // Add task button click event
  addTaskBtn.addEventListener("click", addTask);
  // Add task on pressing "Enter"
  taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
  addTask();
  }
  });
  });
  