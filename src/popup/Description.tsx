import * as React from 'react'
import { RecordFill } from 'react-bootstrap-icons'
import Timer from './Timer'

interface DescriptionTypes {
    sections: Sections
    settings: Settings
}

export default function Description({ settings, sections }: DescriptionTypes) {
    return (
        <>
            {settings.isOpen
                ? <div style={{display: "flex"}}><p>Recording <RecordFill color="red" /></p><Timer /> </div>
                : <p>Click to Record attendance</p>}
        </>
    )
}