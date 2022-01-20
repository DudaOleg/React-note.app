import {useEffect} from "react";
import {getAllArchiveNote} from "../../../axios/API";
import {useDispatch, useSelector} from "react-redux";
import ArchiveNote from "./ArchiveNote";

export default function GetAllArchiveNotes() {

    const {allArchiveNotes, toggle} = useSelector(store => store.noteReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllArchiveNote().then(({data}) => {
            dispatch({type: 'ARCHIVE', payload: data})
        })
    }, [toggle]);

    return (
        <div className="container">

            <div className="table_archive">
                <div className="archive_header">
                    <div>Note Category</div>
                    <div>Active</div>
                    <div>Archived</div>
                </div>
                {
                    allArchiveNotes.map(note => <ArchiveNote key={note._id} notes={note}/>)
                }
            </div>

        </div>
    )
}
