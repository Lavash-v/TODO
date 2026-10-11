export let state = {
    tasks: [
        {
            id: '1',
            title: 'Купить продукты',
            priority: 'medium',
            assignee: 'Себе',
            completed: false,
            subitems: [
                { id: 's1', title: 'Хлеб', completed: false },
                { id: 's2', title: 'Молоко', completed: false },
                { id: 's3', title: 'Масло', completed: false }
            ]
        },
        {
            id: '2',
            title: 'Купить продукты',
            priority: 'low',
            assignee: 'Себе',
            completed: false,
            subitems: []
        },
        {
            id: '3',
            title: 'Купить продукты',
            priority: 'high',
            assignee: 'Себе',
            completed: false,
            subitems: []
        },
        {
            id: '4',
            title: 'Купить продукты',
            priority: 'medium',
            assignee: 'Себе',
            completed: true,
            subitems: []
        },
        {
            id: '5',
            title: 'Купить продукты',
            priority: 'low',
            assignee: 'Себе',
            completed: true,
            subitems: []
        }
    ],
    selectedTaskId: '1',
    isNewTaskMode: false,
    draftTask: null,
    isPriorityMenuOpen: false,
    draggedIndex: null
};