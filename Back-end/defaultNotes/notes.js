const {notesArchiveDB, notesDB} = require('../dataBase');

module.exports = (async () => {
console.log('Hi')
    try {
        const notes = [
            {name: 'test1', category: 'Task', content: 'test content', dates: ['12/21/2020']},
            {name: 'test2', category: 'Idea', content: 'test content', dates: ['12/21/2020']},
            {name: 'test3', category: 'Random Thought', content: 'test content', dates: ['12/21/2020']},
            {name: 'test4', category: 'Quote', content: 'test content', dates: ['12/21/2020']},
            {name: 'test5', category: 'Idea', content: 'test content', dates: ['12/21/2020']},
            {name: 'test6', category: 'Quote', content: 'test content', dates: ['12/21/2020']},
            {name: 'test7', category: 'Task', content: 'test content', dates: ['12/21/2020']}
        ];
        let archiveNotes = [
            {name: 'test1', category: 'Task', content: 'test content', dates: ['12/21/2020']},
            {name: 'test2', category: 'Idea', content: 'test content', dates: ['12/21/2020']},
            {name: 'test3', category: 'Random Thought', content: 'test content', dates: ['12/21/2020']},
            {name: 'test4', category: 'Quote', content: 'test content', dates: ['12/21/2020']},
            {name: 'test5', category: 'Idea', content: 'test content', dates: ['12/21/2020']},
            {name: 'test6', category: 'Quote', content: 'test content', dates: ['12/21/2020']},
            {name: 'test7', category: 'Task', content: 'test content', dates: ['12/21/2020']}
        ];

        await (function () {
            notes.forEach(value => {
                notesDB.create(value)
            })
            archiveNotes.forEach(value => {
                notesArchiveDB.create(value)
            })

        })()
    } catch (e) {

    }


})();
