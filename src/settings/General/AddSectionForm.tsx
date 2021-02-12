import * as React from 'react'
import { Button, FormControl, InputGroup, Alert } from 'react-bootstrap'

interface AddSectionFormTypes {
    sections: Sections
    setSections: setStoreDataHandler<Sections>
}

export default function AddSectionForm({ sections, setSections }: AddSectionFormTypes) {

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
        <>
            <h4>Add a Section</h4>
            {error ? <Alert variant="danger">{error}</Alert> : null}
            <InputGroup className="mb-3" >
                <InputGroup.Prepend>
                    <Button
                        onClick={() => {
                            addSection(groupInput.current?.value)
                            groupInput.current!.value = ""
                        }}
                    >
                        Add Section
                    </Button>
                </InputGroup.Prepend>
                <FormControl placeholder="Add a section" ref={groupInput} />
            </ InputGroup>
        </>
    )
}