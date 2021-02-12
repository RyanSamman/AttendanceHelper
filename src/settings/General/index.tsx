import * as React from 'react'
import { Button } from 'react-bootstrap';
import useStoreState from '../../hooks/useStoreState';
import { defaultSettings } from '../../util/defaultSettings';
import DownloadDataButton from '../DownloadDataButton';
import AddSectionForm from './AddSectionForm'
import DeveloperModeForm from './DeveloperModeForm';
import DownloadAttendanceForm from './DownloadAttendanceForm';
import FailRateForm from './FailRateForm';
import SetElementIDForm from './SetElementIDForm';

export default function General({ sections, setSections }: GeneralProps) {
	const [settings, setSettings] = useStoreState<Settings>("settings", defaultSettings);

	return (
		<>
			<h2>General Settings</h2>
			<AddSectionForm sections={sections} setSections={setSections} />
			<FailRateForm settings={settings} setSettings={setSettings} />
			<DownloadAttendanceForm settings={settings} setSettings={setSettings} />
			<DeveloperModeForm settings={settings} setSettings={setSettings} />
			<SetElementIDForm settings={settings} setSettings={setSettings} elementType="messagesId" />
			<SetElementIDForm settings={settings} setSettings={setSettings} elementType="popupId" />
			<SetElementIDForm settings={settings} setSettings={setSettings} elementType="developerMessagesId" />
			<DownloadDataButton
				data={sections}
				text={"Download All Sections"}
				type="primary"
				filename="sectionData.json"
			/>
			<DownloadDataButton
				data={settings}
				text={"Download Settings"}
				type="primary"
				filename="settingsData.json"
			/>
			<Button variant="danger" onClick={() => setSettings(_ => defaultSettings)}>
				Reset Settings
			</Button>
		</>
	)
}

interface GeneralProps {
	sections: Sections
	setSections: setStoreDataHandler<Sections>
}