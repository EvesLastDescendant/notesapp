import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"

export default function Sidebar(prop) {
    const noteElements = prop.notes.map((note, index) => (
        <div key={note.id}>
            <div 
                className={`title ${
                    note.id === prop.currentNote.id ? "selected--note" : ""
                }`}
                onClick={() => prop.setCurrentNoteId(note.id)}
            > 
                <h4 className="text--snippet">{note.body.split("\n")[0]}</h4>
                <button 
                    className="delete--note"
                    onClick={(event) => prop.deleteNote(event, note.id)}
                >
                <FontAwesomeIcon icon={faTrashCan} color="#FFF"/>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new--note" onClick={prop.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
