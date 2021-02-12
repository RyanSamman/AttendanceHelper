import * as React from 'react'
import { Card } from 'react-bootstrap'
import Section from './Section'
import General from './General'


export default function Content({ selectedPage, setSelectedPage, sections, setSections }: ContentProps) {
	return (
		<Card bg="dark" text="light" style={{ width: "500px" }}>
			<Card.Body>
				{selectedPage === "General"
					? <General sections={sections} setSections={setSections} />
					: <Section
						currentSection={selectedPage}
						setCurrentSection={setSelectedPage}
						sections={sections}
						setSections={setSections}
					/>
				}
			</Card.Body>
		</Card>
	)
}

interface ContentProps {
	selectedPage: "General" | string
	setSelectedPage: (p: string) => void
	sections: Sections
	setSections: setStoreDataHandler<Sections>
}