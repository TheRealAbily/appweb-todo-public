// Get the tags:
const panelDesktop = document.getElementById('container-tasks-desktop');
const panelMobile = document.getElementById('container-tasks-mobile');

// Endpoint:
const url = 'http://127.0.0.1:8000/api/task';

// Function to render tasks:
const renderTasksInit = (tasks, status) => {
    // Clear the tags:
    panelDesktop.innerHTML = '';
    panelMobile.innerHTML = '';

    tasks.forEach(task => {
        if (task.status == status || status == 'all') {
            // Icon:
            switch (task.status) {
                case 'pending': {
                    var icon = 'schedule';
                    break;
                }

                case 'done': {
                    var icon = 'check';
                    break;
                }

                case 'deleted': {
                    var icon = 'close';
                    break;
                }
            }

            // Tasks for desktop version:
            const desktopTaskElement = document.createElement('div');
            desktopTaskElement.classList.add('container__section-section-desktop-div-container__task');
            desktopTaskElement.innerHTML = `
            <!-- Task (${task.status}) -->
            <div class='container__section-section-desktop-div-container__task-task' id='${task.id}'>
                <div class='container__section-section-desktop-div-container__task-task-div__top'>
                    <span class='container__section-section-desktop-div-container__task-task-div__top-span material-symbols-outlined'>sticky_note_2</span>
                    <h1 class='container__section-section-desktop-div-container__task-task-div__top-h1'>${task.title}</h1>
                </div>
                <div class='container__section-section-desktop-div-container__task-task-div__middle'>
                    <p class='container__section-section-desktop-div-container__task-task-div__middle-p'>${task.description}</p>
                </div>
                <div class='container__section-section-desktop-div-container__task-task-div__bottom'>
                    <div class='container__section-section-desktop-div-container__task-task-div__bottom-left__container'>
                        <p class='container__section-section-desktop-div-container__task-task-div__bottom-left__container-p'>Created on: ${task.created_at.slice(0, 10)}</p>
                    </div>
                    <div class='container__section-section-desktop-div-container__task-task-div__bottom-right__container'>
                        <div class='invisible-button' id='invisible-button'>
                            <p class='container__section-section-desktop-div-container__task-task-div__bottom-right__container-p-${task.status}'>${task.status.charAt(0).toUpperCase() + task.status.slice(1).toLowerCase()}</p>
                            <span class='container__section-section-desktop-div-container__task-task-div__bottom-right__container-box-${task.status}'>
                                <span class='container__section-section-desktop-div-container__task-task-div__bottom-right__container-box-${task.status}-span material-symbols-outlined'>${icon}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>`;

            // Add the child:
            panelDesktop.appendChild(desktopTaskElement);

            // Tasks for mobile version:
            const mobileTaskElement = document.createElement('div');
            mobileTaskElement.classList.add('container__section-section-mobile-div-container__task');
            mobileTaskElement.innerHTML = `
            <!-- Task (${task.status}) -->
            <div class='container__section-section-mobile-div-container__task-task' id='${task.id}'>
                <div class='container__section-section-mobile-div-container__task-task-div__top'>
                    <span class='container__section-section-mobile-div-container__task-task-div__top-span material-symbols-outlined'>
                        sticky_note_2
                    </span>
                    <h1 class='container__section-section-mobile-div-container__task-task-div__top-h1'>${task.title}</h1>
                </div>
                <div class='container__section-section-mobile-div-container__task-task-div__middle'>
                    <p class='container__section-section-mobile-div-container__task-task-div__middle-p'>${task.description}</p>
                </div>
                <div class='container__section-section-mobile-div-container__task-task-div__bottom'>
                    <div class='container__section-section-mobile-div-container__task-task-div__bottom-left__container'>
                        <p class='container__section-section-mobile-div-container__task-task-div__bottom-left__container-p'>
                            Created on: ${task.created_at.slice(0, 10)}
                        </p>
                    </div>
                    <div class='container__section-section-mobile-div-container__task-task-div__bottom-right__container'>
                        <p class='container__section-section-mobile-div-container__task-task-div__bottom-right__container-p-${task.status}'>
                            ${task.status.charAt(0).toUpperCase() + task.status.slice(1).toLowerCase()}
                        </p>
                        <span class='container__section-section-mobile-div-container__task-task-div__bottom-right__container-box-${task.status}'>
                            <span class='container__section-section-mobile-div-container__task-task-div__bottom-right__container-box-${task.status}-span material-symbols-outlined'>${icon}</span>
                        </span>
                    </div>
                </div>
            </div>`;

            // Add the child:
            panelMobile.appendChild(mobileTaskElement);
        }
    });

    // Tasks (desktop & mobile version):
    const task = document.querySelectorAll('section section div div div');

    // Add the event (desktop & mobile version):
    task.forEach(task => {
        task.addEventListener('click', () => {
            localStorage.setItem('new-task', false);
            localStorage.setItem('id-task', task.id);
            window.location.href = 'new_task.html';
        });
    });

    document.getElementById('invisible-button').addEventListener('mouseenter', function (event) {
        event.stopPropagation();
    });
};

// Internet error:
function showMessageInternetError() {
    // Clear the tags:
    panelDesktop.innerHTML = '';
    panelMobile.innerHTML = '';

    // Tasks for desktop version:
    const desktopTaskElement = document.createElement('div');
    desktopTaskElement.classList.add('container__section-section-desktop-div-container__error');
    desktopTaskElement.innerHTML = `<div class='container__section-section-desktop-div-container__error-error'>
                        <div class='container__section-section-desktop-div-container__error-error-top'>
                            <img class='container__section-section-desktop-div-container__error-error-top-img'
                                alt='logo' src='../resources/images/wifi_off.png'>
                        </div>
                        <div class='container__section-section-desktop-div-container__error-error-middle'>
                            <p class='container__section-section-desktop-div-container__error-error-middle-p'>No
                                internet connection</p>
                        </div>
                        <div class='container__section-section-desktop-div-container__error-error-bottom'>
                            <p class='container__section-section-desktop-div-container__error-error-bottom-p'>Please
                                connect to the internet to access the task cloud</p>
                        </div>
                    </div>`;

    // Add the child:
    panelDesktop.appendChild(desktopTaskElement);

    // Tasks for mobile version:
    const mobileTaskElement = document.createElement('div');
    mobileTaskElement.classList.add('container__section-section-mobile-div-container__error');
    mobileTaskElement.innerHTML = `<div class='container__section-section-mobile-div-container__error-error'>
                        <div class='container__section-section-mobile-div-container__error-error-top'>
                            <img class='container__section-section-mobile-div-container__error-error-top-img' alt='logo'
                                src='../resources/images/wifi_off.png'>
                        </div>
                        <div class='container__section-section-mobile-div-container__error-error-middle'>
                            <p class='container__section-section-mobile-div-container__error-error-middle-p'>No
                                internet connection</p>
                        </div>
                        <div class='container__section-section-mobile-div-container__error-error-bottom'>
                            <p class='container__section-section-mobile-div-container__error-error-bottom-p'>Please
                                connect to the internet to access the task cloud</p>
                        </div>
                    </div>`;

    // Add the child:
    panelMobile.appendChild(mobileTaskElement);
}

// Get the tasks:
fetch(url)
    .then(response => {
        if (!response.ok) {
            // Error:
            throw new Error('Server status: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        var taskToShow = sessionStorage.getItem('panel-selected') || 'dashboard';

        switch (taskToShow) {
            case 'dashboard': {
                taskToShow = 'pending';
                break;
            }

            case 'completed-tasks': {
                taskToShow = 'done';
                break;
            }

            case 'tasks-history': {
                taskToShow = 'all';
                break;
            }

            case 'deleted-tasks': {
                taskToShow = 'deleted';
                break;
            }

            case 'log-out': {
                taskToShow = 'pending';
                break;
            }
        }

        // Render tasks to UI:
        renderTasksInit(data, taskToShow);
        console.log('Server status: ' + response.statusText);
    })
    .catch(error => {
        console.error('Error:', error);
        showMessageInternetError();
    });
