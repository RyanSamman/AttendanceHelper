import * as React from 'react'

interface CheckboxTypes {
    label: string
    checked: boolean,
    setChecked: (download: boolean) => void
}

export default function Checkbox({ label, checked, setChecked }: CheckboxTypes) {
    const checkboxID = "checkbox_" + label
    return (
        <div>
            <label
                style={{ paddingRight: "7px" }}
                htmlFor={checkboxID}
            >
                {label}
            </label>
            <input type="checkbox"
                id={checkboxID}
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
        </div>
    )
}
