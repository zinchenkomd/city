import React from 'react';
import Authority from '../Authority/index';
import './index.css';

function Sidebar(props) {
    const className = props.isOpen ? "visible" : "hidden";

    if (!props.district) {
        return (
            <div className={className}>
                <div className="wrapper">
                    Loading
                </div>
            </div>
        )
    }

    return (
        <div className={className}>
            <div className="wrapper">
                <div className="close-link" onClick={() => props.onClose()}>Close</div>
                <h2>{props.district.title}</h2>
                <h3>Ответственные:</h3>
                {props.district.authorities.map((a) => <Authority key={a.id} data={a}/>)}
            </div>
        </div>

    )
}


export default Sidebar;
