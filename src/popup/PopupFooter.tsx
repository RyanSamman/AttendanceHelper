import * as React from 'react'
import { Card } from 'react-bootstrap'
import { Github } from 'react-bootstrap-icons'

export default function PopupFooter() {
    return (
        <Card.Footer style={{ display: "flex" }}>
            <p style={{ width: "100%", marginBottom: 0 }}></p>
            <a target="_blank" href="https://github.com/RyanSamman">
                <Github />
            </a>
        </Card.Footer>
    )
}