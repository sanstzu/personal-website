import * as React from 'react';
import DynText  from './components/DynText';

export default function UpdatesCard(props) {
    const aliases = ["Clayton Fernalo", "sansmomento", "one and only"];
    return (
        <nav className="navbar navbar-expand-lg mb-3">
            <div className="container-fluid">
                <a className="navbar-brand m-0" id="navbar-brand">
                    <p className="fw-bold fs-6 text-primary m-0">Sanstzu's Crib</p> 
                    <div className="fs-6 fw-lighter text-primary">
                        <span>a.k.a. </span>                    
                        <DynText aliases={aliases} duration={5000} offset_time={2000} animation_time={250} />
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav flex">
                    <li class="nav-item mx-3">
                        <a class="nav-link active text-primary" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link active text-primary" aria-current="page" href="#">About Me</a>
                    </li>
                </ul>
            </div>
            </div>
            
        </nav>
        
    );
}
