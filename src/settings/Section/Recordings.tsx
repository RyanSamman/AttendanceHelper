import * as React from 'react'
import { Button } from 'react-bootstrap'
import formatDate from '../../util/formatDate'
import DownloadDataButton from '../DownloadDataButton'

interface RecordingsTypes {
    sectionName: string
    section: Section
    setSection: setStoreDataHandler<Section>
}

const recordingStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

export default function Recordings({ sectionName, section, setSection }: RecordingsTypes) {
    const deleteRecording = (recordingDate: string) => {
        setSection(os => {
            delete os[recordingDate]
            return { ...os }
        })
    }

    return (
        <>
            <h4>Attendance Recordings</h4>
            {Object.keys(section).map(rdate => (
                <div key={rdate} style={recordingStyle}>
                    <p>{new Date(rdate).toUTCString()}</p>
                    <div>
                        <DownloadDataButton
                            data={section[rdate]}
                            text="Download"
                            type="primary"
                            filename={`${sectionName}-${formatDate(new Date(rdate))}.json`}
                        />
                        <Button
                            variant="danger"
                            onClick={() => confirm("Do you want to delete this recording?") && deleteRecording(rdate)}
                        >
                            Delete
                    </Button>
                    </div>
                </div>
            ))}
        </>
    )
}