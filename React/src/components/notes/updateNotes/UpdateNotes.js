import {useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {updateNote} from "../../../axios/API";
import {useDispatch, useSelector} from "react-redux";


export default function CreateNote() {

    const {id} = useParams();
    const history = useHistory();
    const {allNotes, toggle} = useSelector(store => store.noteReducer);
    const dispatch = useDispatch();

    const note = allNotes.find(value => value._id === id);

    const [content, setContent] = useState(note.content);

    const onForm = async (event) => {
        event.preventDefault()
        try {

            await updateNote(id, {content});

            history.push('/notes');
            dispatch({type: 'TOGGLE', payload: !toggle});
        } catch (err) {

        }

    }

    return (
        <div className={'wrapperForm'}>
            <form className={'form'} onSubmit={onForm} action={'/'} method='post'>
                <input
                    type={'text'}
                    defaultValue={note.content}
                    onChange={({target: {value}}) => setContent(value)}
                />
                <button className={'button green'} type="submit">update</button>
            </form>
        </div>

    )
}
