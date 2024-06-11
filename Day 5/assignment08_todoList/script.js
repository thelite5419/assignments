

function addTolist(){
  let inputTask = document.getElementById("userTask");
  let inputdata = inputTask.value;
  if(inputdata){
    let getArray = getDataFromArray(); 
    getArray.push(inputdata);
    localStorage.setItem('tasks', JSON.stringify(getArray));
    inputTask.value = '';
    showTheData();
  }
}

function getDataFromArray(){
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function removeFromList(index){
  let getArray = getDataFromArray();
  getArray.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(getArray));
  showTheData();
}

function showTheData(){
    const taskList = document.getElementById('taskslist');
    let tasks = getDataFromArray();
    taskslist.innerHTML = '';
    tasks.forEach((task, index) => {
      taskslist.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${task}
          <button type="button" class="btn btn-danger" aria-label="Close" onclick="removeFromList(${index})">Delete</button>
        </li>
      `;
    });
}

function loadData(){
  showTheData();
}