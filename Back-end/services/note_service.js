const {notesDB} = require('../dataBase')

module.exports = {
    getAllItems: () => notesDB.find(),
    getOneItem: item => notesDB.findOne(item),
    deleteOneItem: (item) => notesDB.deleteOne(item),
    createItem: item => notesDB.create(item),
    updateItem: (item, data) => notesDB.findByIdAndUpdate(item, data)
}
