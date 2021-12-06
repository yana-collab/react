import React, { Fragment } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";


export const ToDoList = () => {
 const notes = [
     {id: 1,
     title: 'Раз заметка'},
     {id: 2,
        title: 'Два заметка'},
        {id: 3,
            title: 'Три заметка'}
 ]

    return  (
        <Fragment>
            <Form />
            <Notes notes= { notes } />

        </Fragment>
    )
}
 
