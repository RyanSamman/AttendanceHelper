import * as React from 'react'
import { DropdownButton } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

interface SectionsDropdownTypes {
    settings: Settings
    setSettings: setStoreDataHandler<Settings>
    sections: Sections
}

export default function SectionsDropdown({ settings, setSettings, sections }: SectionsDropdownTypes) {
    const areSectionsEmpty: boolean = !Object.keys(sections).length
    let title = "Select a Section"

    React.useEffect(() => {
        if (!Object.keys(sections).find(k => k === settings.selectedSection)) {
            setSettings(os => ({ ...os, selectedSection: undefined }))
        }
    }, [settings.selectedSection, sections])

    if (areSectionsEmpty) {
        title = "No Sections"
    } else if (settings.selectedSection) {
        title = settings.selectedSection
    }

    return (
        <DropdownButton
            disabled={areSectionsEmpty}
            title={title}
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => console.log(e.target)}
        >
            {Object.keys(sections).map(s => (
                <DropdownItem
                    active={s === settings.selectedSection}
                    key={s}
                    onClick={() => setSettings(os => ({ ...os, selectedSection: s }))}
                >
                    {s}
                </DropdownItem>
            ))
            }
        </DropdownButton >)
}

// xFFFCXSC