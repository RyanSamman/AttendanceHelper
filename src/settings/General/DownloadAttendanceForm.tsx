import * as React from 'react'
import Checkbox from '../../components/Checkbox'

interface DownloadAttendanceFormTypes {
    settings: Settings
    setSettings: setStoreDataHandler<Settings>
}

export default function DownloadAttendanceForm({ settings, setSettings }: DownloadAttendanceFormTypes) {
    return (
        <>
            <h4>Download Attendance</h4>
            <Checkbox
                label="Download"
                checked={settings.download}
                setChecked={download => setSettings(os => ({ ...os, download }))}
            />
        </>
    )
}