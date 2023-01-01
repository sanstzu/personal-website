import * as React from 'react';
import DynText  from './components/DynText';

export default function UpdatesCard(props) {
    const aliases = ["Clayton Fernalo", "sansmomento", "one and only"];
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div>
                    <a className="navbar-brand fw-bold fs-3">Sanstzu's Crib</a> 
                    <br/>
                    <span className="fs-6 fw-lighter">a.k.a. </span>                    
                    <DynText className="fs-6 fw-lighter" aliases={aliases} duration={5000} offset_time={2000} animation_time={250} />
                </div>
                
            </div>
            <button type="button" class="btn btn-success">Success</button>
        </nav>
        
    );
}
