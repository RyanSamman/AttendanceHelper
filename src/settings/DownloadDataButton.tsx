import * as React from 'react'
import { Button } from 'react-bootstrap'
import saveData from '../util/saveData'

interface DownloadDataButtonTypes {
    data: Object
    text: string
    type: "primary" | "warning" | "danger" | "success"
    filename: string
}

export default function DownloadDataButton({data, text, type="warning", filename="data.json"}: DownloadDataButtonTypes) {
    return (
        <Button 
            onClick={() => saveData(data, filename)}
            type={type}>
            {text}
        </Button>
    )
}