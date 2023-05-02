import { allProjects, allTasks, task } from './task';

const createElement = ()=>{
    let inputs = document.querySelectorAll('#modal>input');
    let auxProjectText="none";
    if(allProjects.currentSection == "project-container"){
        auxProjectText= allProjects.currentTbody;
    }
    let auxTask= new task(inputs[2].value,
        'no',
        inputs[1].value,
        auxProjectText,
        inputs[0].value
        );
    /* allTasks.taskArray.push(auxTask);
    let tmpElement = auxTask.createTask();  */
    inputs[0].value ="";
    inputs[1].value ="";
    inputs[2].value ="";
    return auxTask;
};


const createSection = (arreglo,sect)=>{
    let auxTbody = document.getElementById(sect);
    auxTbody.innerHTML='';
    arreglo.forEach(element => {
        let sectionElement = element.createTask();
        auxTbody.append(sectionElement);
    });
};

export{createElement,createSection};

