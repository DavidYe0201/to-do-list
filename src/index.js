import './style.css';

/***
 * All the adding project stuff.
 */

//Creates the sidebar. 
const sidebar = document.getElementById("sidenav");
const sideProject = document.getElementById("projects")

//Initial Delete Button.
const DeleteButton = document.createElement("button");
DeleteButton.innerHTML = "X";
function DeleteTask() {
    //this.parentNode.remove()
    let localStorageArray = JSON.parse(localStorage.getItem(this.id));
    for (let x = 0; x < localStorageArray.length; x++) {
        console.log("this" + this.parentNode.id);
        console.log("Array[x] " + localStorageArray[x]);
        if (localStorageArray[x] === this.parentNode.id) {
            localStorageArray.splice(x, 1);
            console.log("splicing: " + localStorageArray.splice(x, 1));
            console.log(localStorageArray);
        }
    }
    localStorage.setItem(this.id, JSON.stringify(localStorageArray));
    console.log("parent node: " + this.parentNode.id);
    console.log("child node: " + this.id);
    console.log("local storage " + localStorage.getItem(this.id));
}
//Adding a new task.
function newTask(projectID) {
    let newTask = prompt("Enter your new task", "");
    if (newTask == null || newTask == "") {
        return;
    }
    let taskOnProject = JSON.parse(localStorage.getItem(projectID));
    taskOnProject.push(newTask);
    localStorage.setItem(projectID, JSON.stringify(taskOnProject));
    let addingNewTask = document.createElement("div");
    addingNewTask.id = newTask;
    //let newTaskIdea = document.getElementById('task');
    let newDeleteButton = document.createElement("button");
    let br = document.createElement("br");
    newDeleteButton.id = projectID;
    newDeleteButton.innerHTML = "X";
    newDeleteButton.addEventListener("click", DeleteTask);
    //newTaskIdea.classList.add('task');

    //newTaskIdea.textContent = newTask;
    //newTaskIdea.id = newTask;
    console.log("apple");
    addingNewTask.append(br);
    addingNewTask.append(newTask);
    addingNewTask.append(newDeleteButton);
    document.getElementById("task").append(addingNewTask);
}   

//Sets the view empty after clearing it.
function clearingView () {
    const theTasks = document.getElementById("tasks");
    theTasks.innerHTML = "";
}

//Button to delete project.
function DeleteProject() {
    this.parentNode.remove()
    localStorage.removeItem(this.id);
    event.stopPropagation();
    clearingView();
}

//To change between Projects.
function taskView() {

    let taskArray = JSON.parse(localStorage.getItem(this.id));

    const theTasks = document.getElementById("tasks");
    let newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Task";
    newTaskButton.id = this.id;
    newTaskButton.addEventListener("click", function() {
        newTask(this.id);
    });

    let projectTitle = JSON.parse(localStorage.getItem(this.id));
    theTasks.innerHTML = projectTitle[0];
    theTasks.style.fontFamily = 'Roboto';
    theTasks.style.fontSize = '36px';
    
    theTasks.appendChild(newTaskButton);
    const TaskInProject = document.createElement("div");
    TaskInProject.id = "task";
    for (let x = 1; x < taskArray.length; x++) { 
        TaskInProject.innerHTML += "<br>" + taskArray[x];
        TaskInProject.style.fontSize = '18px';
    }
    theTasks.append(TaskInProject);
}
//Used when page is reloaded.
function reloadingPage() { 
    let x = 0;
    Object.keys(localStorage).forEach(function(key){
        if (key > x) {
            x = key;
        }
    });
    for (let i = 0; i < x+1; i++) {
        if (localStorage.getItem(i) != null) {
            console.log(localStorage.getItem(i));  
            let newProjectItem = document.createElement('div');
            let newDeleteButton = document.createElement("button");
            newDeleteButton.id = i;
            newDeleteButton.innerHTML = "X";
            newDeleteButton.style.cssFloat  = "right";
            newDeleteButton.addEventListener("click", DeleteProject);
            newProjectItem.addEventListener("click", taskView);
            newProjectItem.classList.add('project');

            let projectSide = JSON.parse(localStorage[i]);
            newProjectItem.innerHTML = projectSide[0];
            newProjectItem.id = i;
            console.log('ID: '+ i);
            sidebar.appendChild(newProjectItem);
            newProjectItem.appendChild(newDeleteButton);
        }
    }
}

//Adds new project to end.
function callingProjects(x) {
    let newProjectItem = document.createElement('div');
    let newDeleteButton = document.createElement("button");
    newDeleteButton.id = x;
    newDeleteButton.innerHTML = "X";
    newDeleteButton.style.cssFloat  = "right";
    newDeleteButton.addEventListener("click", DeleteProject);
    newProjectItem.addEventListener("click", taskView);
    newProjectItem.classList.add('project');
    newProjectItem.innerHTML = JSON.parse(localStorage.getItem(x));
    newProjectItem.id = x;
    console.log('ID'+ localStorage.getItem(x));
    sidebar.appendChild(newProjectItem);
    newProjectItem.appendChild(newDeleteButton);
}

//Adds a new project.
function AddProject(){
    let x = 0;
    let newProject = prompt("Enter your new project", "");
    if (newProject == null || newProject == "") {
        return;
    }
    let newArray = [];
    newArray.push(newProject);
    Object.keys(localStorage).forEach(function(key){
        if (key > x) {
            x = key;
        }
    });
    x++;
    localStorage.setItem(x, JSON.stringify(newArray));
    callingProjects(x)
}


//Adding new projects.
sidebar.innerHTML =`<button id="newProject">Add a new project</button><br>`;
document.getElementById("newProject").addEventListener("click", AddProject);

//Whenever the page is refreshed
reloadingPage();

//Called when page is first initalized
if (localStorage.length === 0) {
    let newArray = [];
    let firstProject = document.createElement('div');
    firstProject.classList.add('project');
    firstProject.id = "Project";
    newArray.push("Project");
    localStorage.setItem(1, JSON.stringify(newArray));
    DeleteButton.id = 1;
    DeleteButton.textContent = "X";
    DeleteButton.style.cssFloat  = "right";
    firstProject.innerHTML = JSON.parse(localStorage.getItem(1));
    firstProject.addEventListener("click", taskView);
    sidebar.appendChild(firstProject);
    firstProject.append(DeleteButton);
    document.getElementById("1").addEventListener("click", DeleteProject);
}