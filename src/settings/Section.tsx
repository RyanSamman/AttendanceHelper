import * as React from 'react'
import { Button } from 'react-bootstrap'
import { Sections } from '../Sections'

export default function Section({ currentSection, setCurrentSection, sections, setSections }: SectionProps) {
	const sectionData = sections[currentSection]

	const deleteSection = () => {
		setSections(currentSections => {
			if (currentSections[currentSection]) {
				delete currentSections[currentSection]
			}

			setCurrentSection("General")
			return { ...currentSections }
		})
	}

	return (
		<>
			<h2>Section <b>{currentSection}</b></h2>
			<Button variant="danger" onClick={deleteSection}>Delete Section</Button>
		</>
	)
}

interface SectionProps {
	currentSection: string
	setCurrentSection: (s: string) => void
	sections: Sections
	setSections: (callback: (currentData: Sections) => Sections) => void
}