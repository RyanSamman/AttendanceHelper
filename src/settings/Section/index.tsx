import * as React from 'react'
import DownloadDataButton from '../DownloadDataButton'
import DeleteSectionButton from './DeleteSectionButton'
import Recordings from './Recordings'
import Students from './Students'

export default function Section({ currentSection, setCurrentSection, sections, setSections }: SectionProps) {
	const section = sections[currentSection]
	const setSection: setStoreDataHandler<Section> = callback => {
		setSections(os => ({ ...os, [currentSection]: callback(os[currentSection]) }))
	}

	return (
		<>
			<h2>Section <b>{currentSection}</b></h2>
			<Recordings sectionName={currentSection} section={section} setSection={setSection} />
			<DownloadDataButton
				data={section}
				text={"Download Section Data"}
				type="primary"
				filename={`Section-${currentSection}.json`}
			/>
			<DeleteSectionButton
				{...{ currentSection, setCurrentSection, setSections }} />
		</>
	)
}

interface SectionProps {
	currentSection: string
	setCurrentSection: (s: string) => void
	sections: Sections
	setSections: (callback: (currentData: Sections) => Sections) => void
}