import * as React from 'react';
import DynText  from './components/DynText';
import { PAGES } from '../../constants/pages.js'
import { Link } from "react-router-dom";

export default function UpdatesCard(props) {
    const aliases = ["Clayton Fernalo", "sansmomento", "one and only", "unysolo", "sans"];

    const navbar_list = PAGES

    return (
        <nav className="navbar navbar-expand-lg mb-3 fixed-top">
            <div className="container-fluid">
                    <a className="navbar-brand text-navbar m-0" style={{width: "12.5rem"}} id="navbar-brand">
                        <p className="fw-bold fs-6 m-0">Sanstzu's Crib</p> 
                        <div className="fs-6 fw-lighter text-navbar">
                            <span>a.k.a. </span>                    
                            <DynText aliases={aliases} duration='5000' offset_time='2000' animation_time='250' />
                        </div>
                    </a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav flex">
                    {navbar_list.map((element) => (
                        <li className="nav-item mx-3" key={element.text}>
                            <Link className="nav-link active text-navbar" to={element.href}>
                                {element.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            
        </nav>
        
    );
}
