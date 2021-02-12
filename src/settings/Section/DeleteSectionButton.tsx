import * as React from 'react'
import { Button } from 'react-bootstrap'

interface DeleteSectionButtonTypes {
    currentSection: string
    setCurrentSection: (s: string) => void
    setSections: setStoreDataHandler<Sections>
}

export default function DeleteSectionButton({currentSection, setCurrentSection, setSections}: DeleteSectionButtonTypes) {
    const deleteSection = () => {
        if (!confirm(`Are you sure you want to delete the section '${currentSection}'`)) {
            return
        }
		setSections(currentSections => {
			if (currentSections[currentSection]) {
				delete currentSections[currentSection]
			}
			setCurrentSection("General")
			return { ...currentSections }
		})
	}
    return (
        <><Button variant="danger" onClick={deleteSection}>Delete Section</Button></>
    )
}