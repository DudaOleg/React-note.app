import {useDispatch, useSelector} from "react-redux";
import {createNote, deleteArchiveNote} from "../../../axios/API";

export default function ArchiveNote({notes: {_id, name, category, content, dates}}) {

    const {allNotes, allArchiveNotes, toggle} = useSelector(store => store.noteReducer);
    const dispatch = useDispatch();

    let icon = '';
    switch (category) {
        case 'Task':
            icon = 'fas fa-shopping-cart'
            break;
        case 'Random Thought':
            icon = 'fas fa-user-circle'
            break;
        case 'Idea':
            icon = 'far fa-lightbulb'
            break;
        case 'Quote':
            icon = 'fas fa-quote-right'
            break;
    }

    const unZip = async (event) => {
        event.preventDefault();
        await createNote({name, category, content, dates});
        await deleteArchiveNote(_id);
        dispatch({type:'TOGGLE', payload:!toggle});
    }


    return (
    <div className="archiveList">
        <div className="notes_archive">
            <div><i className={icon} ></i></div>
            <div>{name}</div>
            <div>{allNotes.length}</div>
            <div>{allArchiveNotes.length}</div>
            <div onClick={event => unZip(event)} ><i className="fas fa-clipboard unzip"></i></div>
        </div>
    </div>
      )
}
