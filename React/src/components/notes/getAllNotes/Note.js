import {useHistory} from "react-router-dom";
import {createArchiveNote, deleteNote} from "../../../axios/API";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";

export default function Note({notes: {_id, name, dateCreate, category, content, dates}}) {

    const history = useHistory();
    const {toggle} = useSelector(store => store.noteReducer);
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

    const noteArchive = async event => {
        event.preventDefault()
        console.log('a')
        await createArchiveNote({name, category, content, dates});
        await deleteNote(_id);
        dispatch({type:'TOGGLE', payload:!toggle});
    }

    const noteDelete = async event => {
        event.preventDefault()
        await deleteNote(_id);
        dispatch({type:'TOGGLE', payload:!toggle});
    }

    return (
        <div className="notesList">
            <div className="notes">
                <div><i className={icon}></i></div>
                <div>{name}</div>
                <div>{moment(dateCreate).format("MMM Do YYYY")}</div>
                <div>{category}</div>
                <div>{content}</div>
                <div>{`${[dates[0]]} ${[dates[1]]}`}</div>
                <div onClick={() => history.push(`/update/${_id}`)}>
                    <i className="fas fa-pencil-alt edit"></i>
                </div>
                <div onClick={(event) => noteArchive(event)}>
                    <i className="fas fa-archive archive"></i>
                </div>
                <div onClick={(event) => noteDelete(event)}>
                    <i className="fas fa-trash delete"></i>
                </div>
            </div>
        </div>
    )
}

