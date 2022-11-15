console.log(location.search);
let div = document.querySelector("div")
let xj = formatqueryString(location.search)
console.log(xj);
let main = document.querySelector("main")
request({
    method: "GET",
    path: "/fictionChapter/search/",
    query: `${xj.fictionId}`
}, function (data) {
    console.log(data);
    let html = ""

    let c = ""
    html += `
        <ul>
        <li><img src="${data.data.cover}"/></li>
        <li><h2>${data.data.title}</h2></li>
        <li><span>作者：</span>${data.data.author}</li>
        <li><span>分类：</span>${data.data.descs}</li>
        <li><span>更新时间：</span>${data.data.updateTime}</li>
        </ul>
        `
    for (let a = 0; a < data.data.chapterList.length; a++) {
        // console.log(a);
        c += `<span class="jishu" data-chapterid="${data.data.chapterList[a].chapterId}"  data-title="${data.data.chapterList[a].title}"  data-shuming="${data.data.title}" data-zuozhe="${data.data.author}" data-fictionid="${xj.fictionId}" data-id="${a}" onclick="hello(this)">${data.data.chapterList[a].title}</span>`
    }

    main.innerHTML += html
    div.innerHTML += c

})

function hello(s) {
    // console.log(s.dataset.chapterId);
    // console.log(s.dataset.chapterid);
    // console.log(s.dataset.title);
    // console.log(s.dataset.shuming);
    // console.log(s.dataset.zuozhe);
    console.log(s.dataset.fictionid);
    location.href = `./小说观看页.html?chapterId=${s.dataset.chapterid}&title=${s.dataset.title}&shuming=${s.dataset.shuming}&zuozhe=${s.dataset.zuozhe}&id=${s.dataset.id}&fictionid=${s.dataset.fictionid}`
}
