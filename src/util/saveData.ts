export default function saveData(data: Object, fileName: string) { 
    const a = document.createElement("a")
    document.body.appendChild(a)
    a.setAttribute('style', "display: none")
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], {type: "octet/stream"})
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = fileName
    a.click()
    window.URL.revokeObjectURL(url)
    a.remove()
}
