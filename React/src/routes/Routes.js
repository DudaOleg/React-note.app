import {BrowserRouter, Route, Redirect} from "react-router-dom";
import notes from "../components/notes/getAllNotes/GetAllNotes";
import create from "../components/notes/createNotes/CreateNote";
import update from "../components/notes/updateNotes/UpdateNotes";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path={'/create'} component={create}/>
            <Route path={'/update/:id'} component={update}/>
            <Route path={'/notes'} component={notes}/>
            <Redirect to={'/notes'}/>
        </BrowserRouter>
    )
}
