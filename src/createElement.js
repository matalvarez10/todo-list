import { task } from './task';

const createElement = ()=>{
    let inputs = document.querySelectorAll('#modal>input');
    let auxTask= new task(inputs[2].value,
        'no',
        inputs[1].value,
        'none',
        inputs[0].value
        );
    /* allTasks.taskArray.push(auxTask);
    let tmpElement = auxTask.createTask();  */
    return auxTask;
};


const createSection = (arreglo,sect)=>{
    let auxTbody = document.getElementById(sect);
    console.log(auxTbody);
    auxTbody.innerHTML='';
    arreglo.forEach(element => {
        let sectionElement = element.createTask();
        auxTbody.append(sectionElement);
    });
};

export{createElement,createSection};

