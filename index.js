let taskData = []

function addTask(){
    let task = validateTaskName()
    let date = validateDate()
    let priority = valiatePriority()
    if (task && date && priority){
        let newTask = {
            name: task,
            date: date,
            priority: priority
        };

        taskData.push(newTask);

        console.log(taskData);
        
        clearInput()

        displayTasks()
    }
    
}

function validateTaskName(){
    const regex = /^[^\s].*/;
    let taskName = document.getElementById('task').value

    if(regex.test(taskName)){
        document.getElementById('taskName').setAttribute('hidden', true);
        return taskName
        
    }else {
        document.getElementById('taskName').removeAttribute('hidden')
    }
}

function validateDate() {
    let date = document.getElementById('datepicker-title').value;

    if (date !== "") {

        let today = new Date().toISOString().split('T')[0]; 

        const selectedDate = new Date(date).toISOString().split('T')[0];

        if (selectedDate < today) {
            document.getElementById('taskDate').removeAttribute('hidden');
        } else {
            document.getElementById('taskDate').setAttribute('hidden', true);
            return selectedDate;  // Return valid date
        }
    } else {
        document.getElementById('taskDate').removeAttribute('hidden');
        return ;  
    }
}



function valiatePriority(){
    let select = document.getElementById('priority')
    let option = select.options[select.selectedIndex].value
    if (option != "") {
        if (option == "High"){
            document.getElementById('taskPriority').setAttribute('hidden', true);
            return option
        } else if (option == "Medium"){
            document.getElementById('taskPriority').setAttribute('hidden', true);
            return option
        } else if (option == "Low") {
            document.getElementById('taskPriority').setAttribute('hidden', true);
            return option
        }else if (option === "Selected") {
            document.getElementById('taskPriority').removeAttribute('hidden')
        }
    } 
}

function clearInput(){
    document.getElementById('task').value = ""
    document.getElementById('datepicker-title').value = ""
    document.getElementById('priority').value = "Selected"
}

function displayTasks() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';  


    taskData.forEach(task => {
        let row = document.createElement('tr');
        row.classList.add('bg-white', 'text-gray-500', 'text-center', 'font-medium');


        let taskNameCell = document.createElement('td');
        taskNameCell.classList.add('px-6', 'py-4');
        taskNameCell.textContent = task.name;
        row.appendChild(taskNameCell);


        let taskDateCell = document.createElement('td');
        taskDateCell.classList.add('px-6', 'py-4', 'text-center');
        taskDateCell.textContent = task.date;
        row.appendChild(taskDateCell);


        let priorityCell = document.createElement('td');
        priorityCell.classList.add('px-6', 'py-4', 'text-red-500', 'font-bold');
        priorityCell.textContent = task.priority;
        row.appendChild(priorityCell);


        let statusCell = document.createElement('td');
        statusCell.classList.add('px-6', 'py-4');


        let statusButton = document.createElement('button');
        statusButton.type = 'button';
        statusButton.classList.add('text-gray-50', 'bg-[#da9502]', 'hover:bg-[#F7BE38]/90', 'focus:ring-4', 'focus:outline-none', 'focus:ring-[#F7BE38]/50', 'font-medium', 'rounded-lg', 'text-sm', 'px-8', 'py-2', 'text-center', 'inline-flex', 'items-center', 'dark:focus:ring-[#F7BE38]/50', 'me-2', 'mb-2');
        statusButton.textContent = 'Pending';

        statusButton.addEventListener('click', () => {
            if (statusButton.textContent === 'Pending') {
                statusButton.textContent = 'Complete';
                statusButton.classList.remove('bg-[#da9502]', 'hover:bg-[#F7BE38]/90'); 
                statusButton.classList.add('bg-green-500', 'hover:bg-green-600'); s
            } else {
                statusButton.textContent = 'Pending';
                statusButton.classList.remove('bg-green-500', 'hover:bg-green-600'); 
                statusButton.classList.add('bg-[#da9502]', 'hover:bg-[#F7BE38]/90'); 
            }
        });

        statusCell.appendChild(statusButton); 
        row.appendChild(statusCell); 

        tbody.appendChild(row);
    });
}

