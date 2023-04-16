import { modalDom } from './modal';
import { createElement } from './createElement';
import { allTasks } from './task';
import { hideDom } from './modal';
import { createSection } from './createElement';
import { allProjects } from './task';




const btnEvent = (()=>{
    let btnModal = document.getElementById('modal-trigger');
    let btnClose = document.getElementById('btnCancel');
    let btnAdd = document.getElementById('btnAdd');
    let tbody = document.getElementById('home');
    let sections = document.querySelectorAll(".icon");
    let daySection = document.getElementById('1');
    let weekSection = document.getElementById('2');
    let btnProject = document.getElementById('add-project');
    let homeSection = document.getElementById('0');

    btnClose.addEventListener('click',modalDom.modalClose);

    btnModal.addEventListener('click',modalDom.modalDisplay);

    btnAdd.addEventListener('click',()=>{
        let tempTask = createElement();
        console.log(tempTask);
        allTasks.taskArray.push(tempTask);
        tbody.append(tempTask.createTask());
        allProjects.checkProject(tempTask);
        modalDom.modalClose();

        console.log(allTasks.taskArray);
    });


    for (let index = 0; index < sections.length; index++) {
        sections[index].addEventListener('click',hideDom);  
    }

    homeSection.addEventListener('click',()=>{
        createSection(allTasks.taskArray,'home');
    });

    daySection.addEventListener('click',()=>{
        allTasks.filterDay();
        createSection(allTasks.dayTasks,'today');
    });

    weekSection.addEventListener('click',()=>{
        allTasks.filterWeek();
        createSection(allTasks.weekTasks,'weekid');
    });

    btnProject.addEventListener('click',()=>{
        let inputText = document.getElementById('project-input').value;
        let arrayProject = [];
        allProjects.pushProject(inputText,arrayProject);
    });

    

})();

export{btnEvent};