import * as React from 'react'
import { Button } from 'react-bootstrap'
import getMessages from './getMessages'
import saveData from './../util/saveData';
import formatDate from './../util/formatDate';
import { Alert } from 'react-bootstrap';

interface RecordButtonTypes {
    settings: Settings
    sections: Sections
    setSettings: setStoreDataHandler<Settings>
    setSections: setStoreDataHandler<Sections>
}

export default function RecordButton({ settings, sections, setSettings, setSections }: RecordButtonTypes) {
    const [error, setError] = React.useState<string>("")
    const areSectionsEmpty: boolean = !Object.keys(sections).length

    const messagesId = settings.developerMode
        ? settings.developerMessagesId
        : settings.messagesId

    const toggleOn = () => {
        setSettings(s => ({ ...s, isOpen: !s.isOpen }))
    }

    React.useEffect(() => {
        if (settings.isOpen && !(settings.messagesIndex !== undefined)) {
            getMessages(messagesId, settings.popupId, result => {
                result.error ? setError(result.error) : setError("")
                const messagesIndex = result.messages.length
                setSettings(os => ({ ...os, messagesIndex }))
            })

        } else if (!settings.isOpen && settings.messagesIndex !== undefined) {
            getMessages(messagesId, settings.popupId, result => {
                result.error ? setError(result.error) : setError("")
                const messages = settings.developerMode
                    // In Development mode, all messages will be saved
                    ? result.messages
                    // Else, take only the new messages
                    : result.messages.slice(settings.messagesIndex! + 1)

                const currentDate = new Date()
                setSections(sections => {
                    const selectedSection = settings.selectedSection
                    if (!selectedSection) {
                        return sections
                    }
                    const messageData = { ...sections[selectedSection], [currentDate.toString()]: messages }
                    return { ...sections, [selectedSection]: messageData };
                })

                if (settings.download) {
                    saveData(messages, `${settings.selectedSection}-${formatDate(currentDate)}.json`);
                }

                setSettings(os => ({ ...os, messagesIndex: undefined }))
            })
        }
    }, [settings.isOpen, settings.messagesIndex])

    return (
        <>
            {error ? <Alert variant="danger">{error}</Alert> : null}
            <Button
                disabled={areSectionsEmpty || !settings.selectedSection}
                style={{ width: "100%" }}
                variant={settings.isOpen ? "danger" : "primary"}
                onClick={() => toggleOn()}
            >
                {settings.isOpen ? "Stop Recording" : "Start Recording"}
            </Button>
        </>
    )
}