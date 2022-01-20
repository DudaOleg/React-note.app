const {notesArchiveDB} = require('../dataBase')

module.exports = {
    // getStatsItem: () => notes.length,
    getAllArchiveItems: () => notesArchiveDB.find(),
    deleteArchiveOneItem: (item) => notesArchiveDB.deleteOne(item),
    createArchiveItem: item => notesArchiveDB.create(item),
}
