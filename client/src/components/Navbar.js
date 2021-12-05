import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar-container">
                <ul className ="flex-row nav-bar">
                    <li><a href="#">إحصائيات افلام</a></li>
                    <li><a href="#"> إحصائيات ممثلين</a></li>
                    <li><a href="Home.js">الصفحة الرئيسية</a></li>
                </ul>
            </div>
        )
    }
}
