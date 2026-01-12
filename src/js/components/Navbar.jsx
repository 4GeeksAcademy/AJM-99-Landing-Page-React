import {ThreeBarsIcon} from '@primer/octicons-react';

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <img className="logo" src='src/img/Shelby.png'/>
                <a className="navbar-brand" href="#">Shelby Company Limited</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">My account</a>
                        </li>
                        <li>
                        <a className="dropdown-item text-danger" href="#">Sing out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};