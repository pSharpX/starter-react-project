import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import SearchBox from '../Search/SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import posed, { PoseGroup } from "react-pose";
import { render, ReactDOM } from "react-dom";
import styled from "styled-components";
import { SecureButton } from '../../../core/routing/PrivateRoute';

const AppIconLink = styled(Link)`
    background-color: #f06659;
    width: 32px;
    height: 32px;
`;

// const AnimatedAppIconLink = posed(({ hostRef, to }) => <AppIconLink ref={hostRef} to={to} />)({
//     attention: {
//         scale: 1.3,
//         transition: {
//             type: 'spring',
//             stiffness: 200,
//             damping: 0
//         }
//     }
// });

export default class AppNavbar extends Component {
    componentDidMount = () => {
        $('[data-toggle="offcanvas"]').on('click', function () {
            $('.offcanvas-collapse').toggleClass('open')
        });
    }
    handlerSearch = (event) => {
        event.preventDefault();
        const value = event.target.input.value;
        alert(`Searching ${value}`);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <AppIconLink to="/" className="rounded-circle navbar-brand mr-auto mr-md-2 mr-lg-0">
                    <FontAwesomeIcon icon="shopping-cart" />
                </AppIconLink>
                <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Dashboard <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/notifications" className="nav-link">Notifications</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <Link className="dropdown-item" to="/edit-profile">Edit Profile</Link>
                                <Link className="dropdown-item" to="/logout">Log Out</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <SecureButton />
                        </li>
                    </ul>
                    <SearchBox onSearch={this.handlerSearch} />
                </div>
            </nav>
        );
    }
}