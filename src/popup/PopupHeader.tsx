import * as React from 'react'
import { Card } from 'react-bootstrap'
import { GearFill } from 'react-bootstrap-icons'

export default function PopupHeader() {
    return (
        <Card.Header>
        <div style={{ display: "flex" }}>
            <div style={{ width: "100%" }}>Attendance Recorder</div>
            <div style={{ height: "fit-content" }}>
                <a href="options.html" target="_blank">
                    {<GearFill />}
                </a>
            </div>
        </div>
    </Card.Header>
    )
}