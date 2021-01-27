import * as React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { Sections } from '../Sections'

function AddSectionForm({ setSections }: GeneralProps) {
	const groupInput = React.useRef<HTMLInputElement>()
	const [error, setError] = React.useState<string>("")

	const addSection = (newSectionName: string | undefined) => {
		if (!newSectionName) {
			setError("Please enter a section")
			return
		}

		setSections((currentSections) => {
			if (currentSections[newSectionName]) {
				setError("Section already exists.")
				return { ...currentSections }
			}
			setError("")
			return { ...currentSections, [newSectionName]: {} }
		})
	}

	return (
		<InputGroup className="mb-3" >
			<InputGroup.Prepend>
				<Button onClick={() => addSection(groupInput.current?.value)}>Add Section</Button>
			</InputGroup.Prepend>
			<FormControl ref={groupInput} />
		</ InputGroup>
	)
}

export default function General({ sections, setSections }: GeneralProps) {

	return (
		<>
			<h2>General Settings</h2>

			<AddSectionForm sections={sections} setSections={setSections} />

			{Object.keys(sections).map(s => (
				<div>{s}</div>
			))}
		</>
	)
}

interface GeneralProps {
	sections: Sections
	setSections: (callback: (currentData: Sections) => Sections) => void
}