import * as React from 'react'
import { Container, Row, Button, ButtonGroup, Card } from 'react-bootstrap'
import { Sections } from './../Sections'

function SideBarButton({ name, selectedPage, setSelectedPage }: SideBarButtonProps) {
	return (
		<Button
			variant={selectedPage == name ? "dark" : "primary"}
			onClick={() => setSelectedPage(name)}
		>
			{name}
		</Button>
	)
}

interface SideBarButtonProps {
	name: string,
	selectedPage: string,
	setSelectedPage: (newPage: string) => void
}

export default function SideBar({ selectedPage, setSelectedPage, sections }: SideBarProps) {
	return (
		<div style={{
			backgroundColor: "var(--primary)", minHeight: "80vh", borderColor: "", borderRadius: ".5rem 0px 0px .5rem"
		}}>
			<ButtonGroup vertical>
				<SideBarButton selectedPage={selectedPage} setSelectedPage={setSelectedPage} name="General" />
				<Button disabled >Sections</Button>
				{Object.keys(sections).map(s => (
					<SideBarButton key={s} selectedPage={selectedPage} setSelectedPage={setSelectedPage} name={s} />
				))}
			</ButtonGroup>
		</div >
	)
}

interface SideBarProps {
	selectedPage: "General" | string
	setSelectedPage: React.Dispatch<React.SetStateAction<string>>
	sections: Sections
}