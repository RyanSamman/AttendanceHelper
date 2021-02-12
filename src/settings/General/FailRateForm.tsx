import * as React from 'react'
import { Button, FormControl, InputGroup, Alert } from 'react-bootstrap'

interface FailRateFormTypes {
    settings: Settings
    setSettings: setStoreDataHandler<Settings>
}

const rateRegex = /^(1|0|0?\.\d{1,})$/

export default function FailRateForm({ settings, setSettings }: FailRateFormTypes) {
    const input = React.useRef<HTMLInputElement>()
    const [error, setError] = React.useState<string>("")

    const setFailRate = (userInput: string | undefined) => {
        if (!userInput) {
            setError("Please enter a value.")
        } else if (!userInput.match(rateRegex)) {
            setError("Please enter a number from 0 to 1.")
        } else {
            try {
                const failPercent = parseFloat(userInput)
                setSettings(os => ({ ...os, failPercent }))
                setError("")
            } catch (e: any) {
                setError(e)
            }
        }
    }

    return (
        <>
            <h4>Fail Rate - {settings.failPercent}</h4>
            {error ? <Alert variant="danger">{error}</Alert> : null}
            <InputGroup className="mb-3" >
                <InputGroup.Prepend>
                    <Button
                        onClick={() => {
                            setFailRate(input.current?.value)
                            input.current!.value = ""
                        }}
                    >
                        Set Fail Rate
                    </Button>
                </InputGroup.Prepend>
                <FormControl placeholder={`Enter Fail rate eg ${settings.failPercent}`} ref={input} />
            </ InputGroup>
        </>
    )
}