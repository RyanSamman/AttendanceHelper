import * as React from 'react'
import { Button, FormControl, InputGroup, Alert } from 'react-bootstrap'

interface SetElementIDFormTypes {
    settings: Settings
    setSettings: setStoreDataHandler<Settings>
    elementType: "developerMessagesId" | "messagesId" | "popupId"
}

export default function SetElementIDForm({ settings, setSettings, elementType }: SetElementIDFormTypes) {
    const inputRef = React.useRef<HTMLInputElement>()
    const [error, setError] = React.useState<string>("")

    const handleInput = (input: string | undefined) => {
        if (!input) {
            setError("Please enter a value.")
        } else {
            setSettings(os => ({ ...os, [elementType]: input }))
            setError("")
        }
    }

    return (
        <>
            <h4>Set {elementType} - {settings[elementType]}</h4>
            {error ? <Alert variant="danger">{error}</Alert> : null}
            <InputGroup className="mb-3" >
                <InputGroup.Prepend>
                    <Button
                        onClick={() => {
                            handleInput(inputRef.current?.value)
                            inputRef.current!.value = ""
                        }}
                    >
                        Set Id
                    </Button>
                </InputGroup.Prepend>
                <FormControl placeholder={`${elementType}`} ref={inputRef} />
            </ InputGroup>
        </>
    )
}