let saveData = (data: JSON, fileName: string) => { 
    var a = document.createElement("a"); 
    document.body.appendChild(a); 
    a.setAttribute('style', "display: none"); 
    let json = JSON.stringify(data, null, 2), 
    blob = new Blob([json], {type: "octet/stream"}), 
    url = window.URL.createObjectURL(blob); 
    a.href = url; 
    a.download = fileName; 
    a.click(); 
    window.URL.revokeObjectURL(url); 
    a.remove()
}