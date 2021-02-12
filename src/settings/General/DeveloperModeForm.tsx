import * as React from 'react'
import Checkbox from '../../components/Checkbox'

interface DeveloperModeFormTypes {
    settings: Settings
    setSettings: setStoreDataHandler<Settings>
}

export default function DeveloperModeForm({ settings, setSettings }: DeveloperModeFormTypes) {
    return (
        <>
            <h4>Developer Mode</h4>
            <Checkbox
                label="Developer Mode"
                checked={settings.developerMode}
                setChecked={developerMode => setSettings(os => ({ ...os, developerMode }))}
            />
        </>
    )
}