import React, { Component } from 'react'
import Connect from './Connect/Connect'
import Landing_page from './Landing_page/Landing_page'
import Recent from './Recent/Recent'

export default class Final extends Component {
    render() {
        return (
            <div>
                <Landing_page></Landing_page>
                <Recent></Recent>
                <Connect></Connect>
            </div>
        )
    }
}
