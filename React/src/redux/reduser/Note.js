const initialState = {
    allNotes: [],
    allArchiveNotes: [],
    toggle: false
}


export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_NOTES' :
            return {...state, allNotes: action.payload }
        case 'ARCHIVE' :
            return {...state, allArchiveNotes: action.payload }
        case 'TOGGLE' :
            return {...state, toggle: action.payload }
        default: return  state;
    }
}
