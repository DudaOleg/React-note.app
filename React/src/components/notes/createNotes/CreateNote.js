import {useReducer} from "react";
import {useHistory} from "react-router-dom";
import {createNote} from "../../../axios/API";

function reducer(state, action) {
    switch (action.type) {
        case 'NAME':
            return {...state, name: action.value};
        case 'CONTENT':
            return {...state, content: action.value};
        case 'CATEGORY':
            return {...state, category: action.value};
        case 'RESPONSE':
            return {...state, resp: action.payload};
        default:
            return state;
    }
}

export default function CreateNote() {

    const history = useHistory();

    const [{name, content, resp, category}, dispatch] = useReducer(reducer,
        {name: '', content: '', resp: '', category: ''})

    const onForm = async (event) => {
        event.preventDefault()
        try {

            await createNote({name, content, category});

            history.push('/notes');

        } catch (err) {
            dispatch({type: 'RESPONSE', payload: err.message});
        }

    }

    return (
        <div className={'wrapperForm'}>
            <form className={'form'} onSubmit={onForm} action={'/'} method='post'>
                <input placeholder={'name'}
                       type={'text'}
                       value={name}
                       onChange={({target: {value}}) => dispatch({type: 'NAME', value})}
                />
                <select onChange={({taget: {value}}) => dispatch({type: 'CATEGOTY', value})}>
                    <options value="Task">Task</options>
                    <options value="Random Thought">Random Thought</options>
                    <options value="Idea">Idea</options>
                    <options value="Quote">Quote</options>
                </select>
                <input placeholder={'content'}
                       type={'text'}
                       value={content}
                       onChange={({target: {value}}) => dispatch({type: 'CONTENT', value})}
                />
                <button className={'button green'} type="submit">add note</button>
            </form>
            {
                resp && <div>{resp}</div>
            }
        </div>

    )
}
