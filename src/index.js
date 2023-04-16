import "./styles.css";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { format, differenceInDays, parse } from "date-fns";
import { btnEvent } from "./buttonsEvents";
import { allTasks } from "./task";
import { task } from "./task";
import { allProjects } from "./task";

let asd = JSON.parse(localStorage.getItem("allTasks"));
let asd2 = JSON.parse(localStorage.getItem("allProjects"));
asd.forEach((element) => {
  let tmpObject = new task(
    element.date,
    element.done,
    element.description,
    element.project,
    element.nombre
  );
  allTasks.taskArray.push(tmpObject);
});
console.log(asd2);

console.log(allTasks.taskArray);


/*
constructor(date, done, description, project, nombre) {
    this.date = date;
    this.done = done;
    this.description = description;
    this.project = project;
    this.nombre = nombre;
  } 
 */

let btndebug = document.getElementById("debug");
console.log(asd);

btndebug.addEventListener("click", () => {
  /* console.log(allProjects.currentSection);
        console.log(allProjects.currentTbody);
        console.log(allProjects.projectsArray); 
        console.log(allTasks.taskArray);
        console.log(allTasks.taskArray); */
  localStorage.setItem("allTasks", JSON.stringify(allTasks.taskArray));
});

let btndebug2 = document.getElementById("debug2");
btndebug2.addEventListener("click", () => {
    localStorage.setItem("allProjects", JSON.stringify(allProjects.projectsArray));
});
