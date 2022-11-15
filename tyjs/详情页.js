console.log(location.search);
let div = document.querySelector("div")
let xj = formatqueryString(location.search)
console.log(xj);
let main = document.querySelector("main")
request({
    method: "GET",
    path: "/videoChapter/search/",
    query: `${xj.videoId}`
}, function (data) {
    console.log(data);
    let html = ""

    let c = ""
    html += `
        <ul>
        <li><img src="${data.data.cover}"/></li>
        <li><h2>${data.data.title}</h2></li>
        <li><span>导演：</span>${data.data.actor}</li>
        <li><span>主演：</span>${data.data.director}</li>
        <li><span>分类：</span>${data.data.videoType}</li>
        <li><span>地区：</span>${data.data.region}</li>
        <li><span>简介：</span>${data.data.descs}</li>
        <li><span>上映时间：</span>${data.data.releaseTime}</li>
        <li><span>更新时间：</span>${data.data.updateTime}</li>
        <li></li>
        </ul>
        `
    for (let a = 0; a < data.data.chapterList.length; a++) {
        console.log(a);
        c += `<span class="jishu" data-path="${data.data.chapterList[a].chapterPath}" onclick="hello(this)">${data.data.chapterList[a].title}</span>`
    }

    main.innerHTML += html
    div.innerHTML += c
})

function hello(s){
    console.log(s.dataset.path);
    location.href=`./视频播放页.html?path=${s.dataset.path}`
}