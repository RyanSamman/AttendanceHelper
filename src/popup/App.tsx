import * as React from 'react'
import { Card } from 'react-bootstrap'
import useStoreState from '../hooks/useStoreState'
import Checkbox from '../components/Checkbox'
import Description from './Description'
import PopupFooter from './PopupFooter'
import PopupHeader from './PopupHeader'
import RecordButton from './RecordButton'
import SectionsDropdown from './SectionsDropDown'
import { defaultSettings } from './../util/defaultSettings';

export default function App() {
	const [settings, setSettings] = useStoreState<Settings>("settings", defaultSettings)
	const [sections, setSections] = useStoreState<Sections>("sections", {})
	const cardStyle: React.CSSProperties = { width: '300px', borderRadius: 0 };
	return (
		<Card border="primary" bg={'dark'} text={'light'} style={cardStyle} >
			<PopupHeader />
			<Card.Body>
				<Description settings={settings} sections={sections} />
				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
					<SectionsDropdown
						settings={settings}
						setSettings={setSettings}
						sections={sections}
					/>
					<Checkbox
						label="Download"
						checked={settings.download}
						setChecked={download => setSettings(settings => ({ ...settings, download }))}
					/>
				</div>
				<RecordButton
					sections={sections}
					settings={settings}
					setSettings={setSettings}
					setSections={setSections}
				/>
			</Card.Body>
			<PopupFooter />
		</Card >
	)
}
