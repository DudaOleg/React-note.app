import {useEffect} from "react";
import {getAllNote} from "../../../axios/API";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import Note from "./Note";
import GetAllArchiveNotes from "../getArchiveNotes/GetAllArchiveNotes";

export default function GetAllNotes() {

    const history = useHistory();
    const {allNotes, toggle} = useSelector(store => store.noteReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllNote().then(({data}) => {
            dispatch({type: 'ALL_NOTES', payload: data})
        })
    }, [toggle]);

    return (
        <>
            <div className="table container">

                <div className="table_header">
                    <div>Name</div>
                    <div>Created</div>
                    <div>Category</div>
                    <div>Content</div>
                    <div>Dates</div>
                    <div><i className="fas fa-archive archiveAll"></i></div>
                    <div><i className="fas fa-trash deleteAll"></i></div>
                </div>
                {
                    allNotes.map(note => <Note key={note._id} notes={note}/>)
                }
                <div className={'btn_create'}>
                    <button onClick={() => history.push('/create')}>create note</button>
                </div>
            </div>
            <GetAllArchiveNotes/>
        </>

    )
}
