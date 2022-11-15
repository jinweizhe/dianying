console.log(location.search);
let b = formatqueryString(location.search)
console.log(b);
console.log(b.chapterId);
let main = document.querySelector("main")
let shuming = document.querySelector(".shuming")
let shang = document.querySelector(".shang")
let xia = document.querySelector(".xia")
let count = `${b.id}`;
request({
    method: "GET",
    path: "/fictionContent/search/",
    query: `${b.chapterId}`
}, function (data) {
    console.log(data);
    let html = ''
    let c = `当前位置>${b.shuming}`
    html += `<p class="title">${b.title}</p>
    <p class="zuozhe">作者：${b.zuozhe}</p>
    `
    for (let i = 0; i < data.data.length; i++) {
        html += `<p class="xsgky">${data.data[i]}</p>`
    }
    main.innerHTML = html
    shuming.innerHTML = c

    shang.addEventListener("click", function () {
        count--
        xj()
    })
    xia.addEventListener("click", function () {
        count++
        xj()
    })
})


// request({
//     method: "GET",
//     path: "/fictionContent/search/",
//     query: `${b.c}`
// }, function (data) {
//     console.log(data);
// })

function xj() {
    document.documentElement.scrollTop=0
    html = ""
    c = ""
    request({
        method: "GET",
        path: "/fictionChapter/search/",
        query: `${b.fictionid}`
    }, function (data) {
        console.log(data);
        console.log(data.data.chapterList[count]);

        c = `当前位置>${data.data.title}`
        html += `<p class="title">${data.data.chapterList[count].title}</p>
            <p class="zuozhe">作者：${data.data.author}</p>
            `

        // console.log(data.data.chapterList[count].chapterId);
        request({
            method: "GET",
            path: "/fictionContent/search/",
            query: `${data.data.chapterList[count].chapterId}`
        }, function (data) {
            console.log(data);
            for (let i = 0; i < data.data.length; i++) {
                html += `<p class="xsgky">${data.data[i]}</p>`
            }
            main.innerHTML = html
            shuming.innerHTML = c
        })

    })
}