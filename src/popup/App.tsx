import * as React from 'react'
import { Card, Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import { GearFill, Github, RecordFill } from 'react-bootstrap-icons'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import useStoreState from '../hooks/useStoreState'
import { Sections } from '../Sections'

interface Settings {
	isOpen: boolean
	selectedSection?: string
}

export default function App() {
	const [settings, setSettings] = useStoreState<Settings>("settings", { isOpen: false })
	const [sections, setSections] = useStoreState<Sections>("sections", {})
	const wasOpen = React.useRef<boolean>(false)

	const toggleOn = () => {
		setSettings(s => ({ ...s, isOpen: !s.isOpen }))
	}

	return (
		<Card
			border="primary"
			bg={'dark'}
			text={'light'}
			style={{ width: '300px', height: "500px", borderRadius: 0 }}
			className="mb-2"
		>
			<Card.Header>
				<div style={{ display: "flex" }}>
					<div style={{ width: "100%" }}>Attendance Recorder</div>
					<div style={{ height: "fit-content" }}>
						<a href="options.html" target="_blank">
							{<GearFill />}
						</a>
					</div>
				</div>
			</Card.Header>
			<Card.Body style={{ height: "500px" }}>
				{settings.isOpen
					? <p>Recording <RecordFill color="red" /> </p>
					: <p>Click to Record attendance</p>}

				<DropdownButton
					title="Select a Section"
					onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => console.log(e.target)}
				>
					{Object.keys(sections).map(s => (
						<DropdownItem key={s}>{s}</DropdownItem>
					))}
				</DropdownButton>

				<Button
					style={{ display: "block", width: "100%", marginBottom: "20px" }}
					// disabled={!sections.length}
					variant={settings.isOpen ? "danger" : "primary"}
					onClick={() => toggleOn()}
				>
					{settings.isOpen ? "Stop Recording" : "Start Recording"}
				</Button>
			</Card.Body>
			<Card.Footer style={{ display: "flex" }}>
				<p style={{ width: "100%", marginBottom: 0 }}></p>
				<a target="_blank" href="https://github.com/RyanSamman">
					<Github />
				</a>
			</Card.Footer>
		</Card >
	)
}

// 