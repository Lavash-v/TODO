import { state } from './stateNstore.js';


export function renderTasks() {
    const container = document.getElementById('tasks-container');
    const editorWrapper = document.getElementById('editor-panel');

    container.innerHTML = '';

    if (state.tasks.length === 0 && !state.isNewTaskMode) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.721 8.32722C32.4597 8.06502 32.1492 7.85698 31.8073 7.71502C31.4655 7.57307 31.0989 7.5 30.7288 7.5C30.3586 7.5 29.9921 7.57307 29.6502 7.71502C29.3084 7.85698 28.9979 8.06502 28.7366 8.32722L13.8116 23.1655L8.49128 17.9811C8.22999 17.7189 7.91951 17.5109 7.57764 17.3689C7.23578 17.227 6.86926 17.1539 6.49909 17.1539C6.12893 17.1539 5.7624 17.227 5.42054 17.3689C5.07868 17.5109 4.7682 17.7189 4.50691 17.9811L0.827218 21.6655C0.565018 21.9268 0.356977 22.2373 0.215024 22.5791C0.0730715 22.921 0 23.2875 0 23.6577C0 24.0279 0.0730715 24.3944 0.215024 24.7362C0.356977 25.0781 0.565018 25.3886 0.827218 25.6499L11.9811 36.7592C12.5379 37.2885 13.2767 37.5836 14.0448 37.5836C14.8129 37.5836 15.5517 37.2885 16.1085 36.7592L19.7624 33.0983L36.6842 16.1788C37.2115 15.6511 37.5094 14.9368 37.5134 14.1909C37.5173 13.445 37.227 12.7276 36.7053 12.1944L32.721 8.32722ZM32.721 45.6374C32.4597 45.3752 32.1492 45.1671 31.8073 45.0252C31.4655 44.8832 31.0989 44.8102 30.7288 44.8102C30.3586 44.8102 29.9921 44.8832 29.6502 45.0252C29.3084 45.1671 28.9979 45.3752 28.7366 45.6374L13.8116 60.5718L8.49128 55.3921C8.22999 55.1299 7.91951 54.9218 7.57764 54.7799C7.23578 54.6379 6.86926 54.5648 6.49909 54.5648C6.12893 54.5648 5.7624 54.6379 5.42054 54.7799C5.07868 54.9218 4.7682 55.1299 4.50691 55.3921L0.827218 59.0694C0.565018 59.3307 0.356977 59.6412 0.215024 59.983C0.0730715 60.3249 0 60.6914 0 61.0616C0 61.4318 0.0730715 61.7983 0.215024 62.1401C0.356977 62.482 0.565018 62.7925 0.827218 63.0538L11.953 74.1866C12.5094 74.7157 13.2477 75.0107 14.0155 75.0107C14.7833 75.0107 15.5216 74.7157 16.078 74.1866L19.7577 70.5092L36.6796 53.5827C37.2048 53.0587 37.5017 52.3484 37.5057 51.6066C37.5096 50.8647 37.2203 50.1513 36.7007 49.6217L32.721 45.6374ZM14.9999 86.2569C8.79128 86.2569 3.61159 91.296 3.61159 97.5069C3.61159 103.718 8.79597 108.757 14.9999 108.757C17.9836 108.757 20.845 107.572 22.9548 105.462C25.0646 103.352 26.2499 100.491 26.2499 97.5069C26.2499 94.5232 25.0646 91.6617 22.9548 89.5519C20.845 87.4422 17.9836 86.2569 14.9999 86.2569ZM116.25 90.0069H48.7499C47.7553 90.0069 46.8015 90.402 46.0982 91.1052C45.395 91.8085 44.9999 92.7623 44.9999 93.7569V101.257C44.9999 102.251 45.395 103.205 46.0982 103.909C46.8015 104.612 47.7553 105.007 48.7499 105.007H116.25C117.244 105.007 118.198 104.612 118.902 103.909C119.605 103.205 120 102.251 120 101.257V93.7569C120 92.7623 119.605 91.8085 118.902 91.1052C118.198 90.402 117.244 90.0069 116.25 90.0069ZM116.25 15.0069H48.7499C47.7553 15.0069 46.8015 15.402 46.0982 16.1053C45.395 16.8085 44.9999 17.7623 44.9999 18.7569V26.2569C44.9999 27.2515 45.395 28.2053 46.0982 28.9086C46.8015 29.6118 47.7553 30.0069 48.7499 30.0069H116.25C117.244 30.0069 118.198 29.6118 118.902 28.9086C119.605 28.2053 120 27.2515 120 26.2569V18.7569C120 17.7623 119.605 16.8085 118.902 16.1053C118.198 15.402 117.244 15.0069 116.25 15.0069ZM116.25 52.5069H48.7499C47.7553 52.5069 46.8015 52.902 46.0982 53.6053C45.395 54.3085 44.9999 55.2623 44.9999 56.2569V63.7569C44.9999 64.7515 45.395 65.7053 46.0982 66.4086C46.8015 67.1118 47.7553 67.5069 48.7499 67.5069H116.25C117.244 67.5069 118.198 67.1118 118.902 66.4086C119.605 65.7053 120 64.7515 120 63.7569V56.2569C120 55.2623 119.605 54.3085 118.902 53.6053C118.198 52.902 117.244 52.5069 116.25 52.5069Z" fill="#777777"/>
                </svg>
                <div class="empty-state-text">Пока нет задач</div>
            </div>
        `;
        editorWrapper.classList.add('hidden');
        return;
    } else {
        editorWrapper.classList.remove('hidden');
    }

    state.tasks.forEach(task => {
        const isSelected = !state.isNewTaskMode && task.id === state.selectedTaskId;

        let badgeClass = 'badge-yellow';
        let badgeText = 'Средний приоритет';
        if (task.priority === 'high') {
            badgeClass = 'badge-red';
            badgeText = 'Высокий приоритет';
        } else if (task.priority === 'low') {
            badgeClass = 'badge-green';
            badgeText = 'Низкий приоритет';
        }

        const card = document.createElement('div');
        card.className = `task-card ${isSelected ? 'selected' : ''} ${task.completed ? 'completed' : ''}`;

        card.addEventListener('click', (e) => {
            if (!e.target.closest('.custom-checkbox')) {
                selectTask(task.id);
            }
        });

        card.innerHTML = `
            <div class="task-info">
                <div class="custom-checkbox" data-id="${task.id}">
                    ${task.completed ?
                    `<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.485 5.2915L0 2.8065L0.357 2.45L2.485 4.578L7.063 0L7.4195 0.357L2.485 5.2915Z" fill="#777777"/>
                    </svg>` : ''}
                </div>
                <div>
                    <div class="task-title">${task.title}</div>
                    <span class="priority-badge ${badgeClass}">${badgeText}</span>
                </div>
            </div>
            <div class="task-assignee">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.23091 8.75666C7.74369 8.26888 7.50008 7.67916 7.50008 6.98749C7.50008 6.29582 7.74369 5.7061 8.23091 5.21832C8.71814 4.73054 9.30786 4.48693 10.0001 4.48749C10.6923 4.48804 11.282 4.73166 11.7692 5.21832C12.2565 5.70499 12.5001 6.29471 12.5001 6.98749C12.5001 7.68027 12.2565 8.26999 11.7692 8.75666C11.282 9.24332 10.6923 9.48693 10.0001 9.48749C9.30786 9.48804 8.71814 9.24443 8.23091 8.75666ZM4.16675 14.6475V14.1408C4.16675 13.7969 4.26675 13.4753 4.46675 13.1758C4.6673 12.8758 4.93675 12.643 5.27508 12.4775C6.06175 12.1003 6.84897 11.8175 7.63675 11.6292C8.42397 11.4403 9.21175 11.3458 10.0001 11.3458C10.7884 11.3458 11.5765 11.4403 12.3642 11.6292C13.152 11.818 13.9387 12.1008 14.7242 12.4775C15.0631 12.643 15.3326 12.8758 15.5326 13.1758C15.7331 13.4753 15.8334 13.7969 15.8334 14.1408V14.6475C15.8334 14.8919 15.7504 15.0975 15.5842 15.2642C15.4181 15.4297 15.2126 15.5125 14.9676 15.5125H5.03341C4.78841 15.5125 4.58286 15.4294 4.41675 15.2633C4.25064 15.0972 4.1673 14.8919 4.16675 14.6475Z" fill="white"/>
                </svg> ${task.assignee}
            </div>
        `;

        const checkbox = card.querySelector('.custom-checkbox');
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleTaskCompletion(task.id);
        });

        container.appendChild(card);
    });
}

export function renderEditor() {
    if (state.tasks.length === 0 && !state.isNewTaskMode) return;

    const activeObj = state.isNewTaskMode ? state.draftTask : state.tasks.find(t => t.id === state.selectedTaskId);
    if (!activeObj) return;

    document.getElementById('editor-title').value = activeObj.title;

    const pLabel = document.getElementById('selected-priority-label');
    if (activeObj.priority === 'high') {
        pLabel.innerHTML = '<span class="dot dot-red"></span> Высокий';
    } else if (activeObj.priority === 'low') {
        pLabel.innerHTML = '<span class="dot dot-green"></span> Низкий';
    } else {
        pLabel.innerHTML = '<span class="dot dot-yellow"></span> Средний';
    }

    const subContainer = document.getElementById('subitems-list');
    subContainer.innerHTML = '';

    activeObj.subitems.forEach((sub, index) => {
        const row = document.createElement('div');
        row.className = 'subitem-row';
        row.draggable = true;
        row.dataset.index = index;

        row.addEventListener('dragstart', handleDragStart);
        row.addEventListener('dragover', handleDragOver);
        row.addEventListener('drop', handleDrop);
        row.addEventListener('dragend', handleDragEnd);

        row.innerHTML = `
            <div class="subitem-left">
                <div class="drag-handle">
                    <div class="drag-dot-row"><div class="drag-dot"></div><div class="drag-dot"></div></div>
                    <div class="drag-dot-row"><div class="drag-dot"></div><div class="drag-dot"></div></div>
                    <div class="drag-dot-row"><div class="drag-dot"></div><div class="drag-dot"></div></div>
                </div>
                <div class="custom-checkbox subitem-checkbox" style="width: 16px; height: 16px;">
                    ${sub.completed ?
                    `<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.485 5.2915L0 2.8065L0.357 2.45L2.485 4.578L7.063 0L7.4195 0.357L2.485 5.2915Z" fill="#777777"/>
                    </svg>` : ''}
                </div>
                <span class="subitem-title ${sub.completed ? 'completed' : ''}">${sub.title}</span>
            </div>
            <button class="subitem-remove">✕</button>
        `;

        // Чекбокс подпункта
        row.querySelector('.subitem-checkbox').addEventListener('click', () => {
            toggleSubitem(sub.id);
        });

        // Кнопка удаления подпункта
        row.querySelector('.subitem-remove').addEventListener('click', () => {
            confirmDeleteSubitem(sub.id);
        });

        subContainer.appendChild(row);
    });
}


export function createNewTask() {
    state.isNewTaskMode = true;
    state.draftTask = {
        id: 't_' + Date.now(),
        title: 'Новая задача',
        priority: 'medium',
        assignee: 'Себе',
        completed: false,
        subitems: []
    };
    closePriorityMenu();
    renderTasks();
    renderEditor();
    document.getElementById('editor-content-wrapper').classList.remove('hidden');
    focusTitle();
}

export function saveTask() {
    const titleVal = document.getElementById('editor-title').value.trim();
    if (!titleVal) return;

    if (state.isNewTaskMode && state.draftTask) {
        state.draftTask.title = titleVal;
        state.tasks.unshift(state.draftTask);
        state.selectedTaskId = state.draftTask.id;
        state.isNewTaskMode = false;
        state.draftTask = null;
    } else {
        const task = state.tasks.find(t => t.id === state.selectedTaskId);
        if (task) {
            task.title = titleVal;
        }
    }
    renderTasks();
    renderEditor();
}

export function cancelEdits() {
    if (state.isNewTaskMode) {
        state.isNewTaskMode = false;
        state.draftTask = null;
        if (state.tasks.length > 0) {
            selectTask(state.tasks[0].id);
        } else {
            document.getElementById('editor-content-wrapper').classList.add('hidden');
        }
    } else {
        document.getElementById('editor-content-wrapper').classList.add('hidden');
        state.selectedTaskId = null;
    }
    renderTasks();
}

export function toggleSubitem(subId) {
    const activeObj = state.isNewTaskMode ? state.draftTask : state.tasks.find(t => t.id === state.selectedTaskId);
    if (activeObj) {
        const sub = activeObj.subitems.find(s => s.id === subId);
        if (sub) {
            sub.completed = !sub.completed;
            renderEditor();
        }
    }
}

export function addSubitem(e) {
    e.preventDefault();
    const input = document.getElementById('new-subitem-input');
    const val = input.value.trim();
    if (val) {
        const activeObj = state.isNewTaskMode ? state.draftTask : state.tasks.find(t => t.id === state.selectedTaskId);
        if (activeObj) {
            activeObj.subitems.push({
                id: 'sub_' + Date.now(),
                title: val,
                completed: false
            });
            input.value = '';
            renderEditor();
        }
    }
    document.getElementById('add-subitem-trigger-btn').classList.remove('hidden');
    document.getElementById('add-subitem-form').classList.remove('show');
}

export function removeSubitem(subId) {
    const activeObj = state.isNewTaskMode ? state.draftTask : state.tasks.find(t => t.id === state.selectedTaskId);
    if (activeObj) {
        activeObj.subitems = activeObj.subitems.filter(s => s.id !== subId);
        renderEditor();
    }
}

export function deleteCurrentTask() {
    state.tasks = state.tasks.filter(t => t.id !== state.selectedTaskId);
    if (state.tasks.length > 0) {
        state.selectedTaskId = state.tasks[0].id;
        renderEditor();
    }
    renderTasks();
    if (state.tasks.length === 0) {
        cancelEdits();
    }
}

export function toggleTaskCompletion(id) {
    const task = state.tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}


export function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

export function handleDrop(e) {
    e.preventDefault();
    const targetIndex = parseInt(this.dataset.index);
    if (state.draggedIndex === null || state.draggedIndex === targetIndex) return;

    const activeObj = state.isNewTaskMode ? state.draftTask : state.tasks.find(t => t.id === state.selectedTaskId);
    if (!activeObj) return;

    const [movedItem] = activeObj.subitems.splice(state.draggedIndex, 1);
    activeObj.subitems.splice(targetIndex, 0, movedItem);

    renderEditor();
}

export function handleDragEnd(e) {
    this.style.opacity = '1';
    state.draggedIndex = null;
}

export function handleDragStart(e) {
    state.draggedIndex = parseInt(this.dataset.index);
    e.dataTransfer.effectAllowed = 'move';
    this.style.opacity = '0.4';
}

export function selectTask(id) {
    state.isNewTaskMode = false;
    state.selectedTaskId = id;
    closePriorityMenu();
    renderTasks();
    renderEditor();
    document.getElementById('editor-content-wrapper').classList.remove('hidden');
}

export function confirmDeleteTask() {
    if (state.isNewTaskMode) {
        cancelEdits();
        return;
    }
    document.getElementById('modal-title').textContent = 'Удалить задачу?';
    document.getElementById('modal-confirm-btn').onclick = function () {
        deleteCurrentTask();
        closeModal();
    };
    document.getElementById('modal-overlay').classList.add('show');
}

export function confirmDeleteSubitem(subId) {
    document.getElementById('modal-title').textContent = 'Удалить подпункт?';
    document.getElementById('modal-confirm-btn').onclick = function () {
        removeSubitem(subId);
        closeModal();
    };
    document.getElementById('modal-overlay').classList.add('show');
}

export function closeModal() {
    document.getElementById('modal-overlay').classList.remove('show');
}

export function focusTitle() {
    const input = document.getElementById('editor-title');
    input.focus();
    input.select();
}

export function togglePriorityMenu() {
    state.isPriorityMenuOpen = !state.isPriorityMenuOpen;
    const menu = document.getElementById('priority-menu');
    const arrow = document.getElementById('priority-arrow');
    if (state.isPriorityMenuOpen) {
        menu.classList.add('show');
        arrow.classList.add('rotate');
    } else {
        menu.classList.remove('show');
        arrow.classList.remove('rotate');
    }
}

export function closePriorityMenu() {
    state.isPriorityMenuOpen = false;
    const menu = document.getElementById('priority-menu');
    const arrow = document.getElementById('priority-arrow');
    if (menu) menu.classList.remove('show');
    if (arrow) arrow.classList.remove('rotate');
}

export function selectPriority(priority) {
    const activeObj = state.isNewTaskMode ? state.draftTask : state.tasks.find(t => t.id === state.selectedTaskId);
    if (activeObj) {
        activeObj.priority = priority;
        if (!state.isNewTaskMode) renderTasks();
        renderEditor();
    }
    closePriorityMenu();
}

export function showSubitemInput() {
    document.getElementById('add-subitem-trigger-btn').classList.add('hidden');
    const form = document.getElementById('add-subitem-form');
    form.classList.add('show');
    document.getElementById('new-subitem-input').focus();
}


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btn-new-task')?.addEventListener('click', createNewTask);
    document.getElementById('editor-title').addEventListener('input', (e) => {
        const activeObj = state.isNewTaskMode ? state.draftTask : state.tasks.find(t => t.id === state.selectedTaskId);
        if (activeObj) {
            activeObj.title = e.target.value;
            if (!state.isNewTaskMode) renderTasks();
        }
    });

    document.getElementById('add-subitem-form').addEventListener('submit', addSubitem);

    window.addEventListener('click', (e) => {
        if (!e.target.closest('#priority-dropdown-btn') && !e.target.closest('#priority-menu')) {
            closePriorityMenu();
        }
    });

    renderTasks();
    if (state.tasks.length > 0) {
        renderEditor();
    }
});

window.createNewTask = createNewTask;
window.saveTask = saveTask;
window.cancelEdits = cancelEdits;
window.toggleSubitem = toggleSubitem;
window.addSubitem = addSubitem;
window.removeSubitem = removeSubitem;
window.deleteCurrentTask = deleteCurrentTask;
window.toggleTaskCompletion = toggleTaskCompletion;
window.selectTask = selectTask;
window.confirmDeleteTask = confirmDeleteTask;
window.confirmDeleteSubitem = confirmDeleteSubitem;
window.closeModal = closeModal;
window.focusTitle = focusTitle;
window.togglePriorityMenu = togglePriorityMenu;
window.closePriorityMenu = closePriorityMenu;
window.selectPriority = selectPriority;
window.showSubitemInput = showSubitemInput;