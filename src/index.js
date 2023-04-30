import "./styles.css";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { btnEvent } from "./buttonsEvents";
import { allTasks } from "./task";
import { task } from "./task";
import { allProjects } from "./task";
import { createSection } from "./createElement";

let localTask = JSON.parse(localStorage.getItem("allTasks"));
let localProjects = JSON.parse(localStorage.getItem("allProjects"));
// Creating local tasks
 localTask.forEach((element) => {
  let tmpObject = new task(
    element.date,
    element.done,
    element.description,
    element.project,
    element.nombre
  );
  allTasks.taskArray.push(tmpObject);
}); 

//creating local projects
localProjects.forEach(element => {
  let tmpArray = [];
  element.projectArray.forEach(tarea => {
    let tmpObject = new task(
      tarea.date,
      tarea.done,
      tarea.description,
      tarea.project,
      tarea.nombre
    );
    tmpArray.push(tmpObject);
    //allTasks.taskArray.push(tmpObject);
  });
  allProjects.pushProject(element.name,tmpArray);
}); 

createSection(allTasks.taskArray,'home');




/* 
constructor(date, done, description, project, nombre) {
    this.date = date;
    this.done = done;
    this.description = description;
    this.project = project;
    this.nombre = nombre;
  } ; */


let btndebug = document.getElementById("debug");

btndebug.addEventListener("click", () => {
  /* console.log(allProjects.currentSection);
        console.log(allProjects.currentTbody);
        console.log(allProjects.projectsArray); 
        console.log(allTasks.taskArray);
        console.log(allTasks.taskArray); */
  //localStorage.setItem("allTasks", JSON.stringify(allTasks.taskArray)); 
  console.log(allProjects.projectsArray);
  console.log(allTasks.taskArray);
  localStorage.setItem("allTasks", 2);
  localStorage.setItem("allProjects", 2);
});

let btndebug2 = document.getElementById("debug2");
btndebug2.addEventListener("click", () => {
    localStorage.setItem("allProjects", JSON.stringify(allProjects.projectsArray));
});
