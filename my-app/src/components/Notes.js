import React from "react";


export const Notes = ({notes}) => {
    return (
        <ul class="list-group">
            {notes.map(note => (
                 <li 
                 className="list-group-item notes"
                 key={note.id}
                 >
                     <strong>{note.title}</strong>
                     <span>{ new Date().toLocaleDateString()}</span>
                 <button type="button" 
                 className="btn  btn-sm">
                     &#128204;</button>
                 </li>
            ))}
</ul>
    )
}