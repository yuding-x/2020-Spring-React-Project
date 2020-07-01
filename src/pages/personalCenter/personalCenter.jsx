import React, { Component } from 'react'
import AlreadyLoginHead from '../../components/headerfooter/already_login_header.jsx'

import './personalCenter.less'

export class PersonalCenter extends Component {
    render() {
        return (
            <div id="personal-bg">
                <AlreadyLoginHead current="personalCenter"/>
            </div>
        )
    }
}

export default PersonalCenter
