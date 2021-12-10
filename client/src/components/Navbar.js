import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar-container">
                <ul className ="flex-row nav-bar">
                    <li><Link to="/movie">    إحصائيات افلام</Link></li>
                    <li><Link to="/actor">   إحصائيات ممثلين   </Link></li>
                    <li><Link to="/">   الصفحة الرئيسية </Link></li>
                    
                </ul>
            </div>
        )
    }
}
