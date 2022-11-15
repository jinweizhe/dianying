let host = "https://api.pingcc.cn"
function request(option, cb) {
    let xhr = new XMLHttpRequest()
    let url = host + option.path
    if (option.query) {
        url += option.query
    }
    xhr.open(option.method, url)
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText)
            cb(data)
        }
    }
}