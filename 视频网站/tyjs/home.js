let main1 = document.querySelector(".main1")
let sousuo = document.querySelector(".sousuo")
let xj1 = document.querySelector(".xj1")
let select = document.querySelector("select")
let option = document.querySelectorAll("option")


xj1.addEventListener("click", function () {
    // console.log(select.value);
    // console.log(sousuo.value);
    request({
        method: "GET",
        path: "/video/search/",
        query: `${select.value}/${sousuo.value}`
    }, function (data) {
        console.log(data);
        if (data.data == null) {
            alert("查无此视频")
        } else {
            let html = ""
            for (let i = 0; i < data.data.length; i++) {
                console.log(data.data[i]);
                console.log(data.data[i].cover);
                html += `
                <div data-id="${data.data[i].videoId}" data-select="${select.value}" data-value="${sousuo.value}" onclick="showDetail(this)">
                <img src="${data.data[i].cover}" alt="">
                <p class="biaoti">
                <span class="biaoti1">${data.data[i].title}</span>
                <span class="biaoti2">${data.data[i].descs}</span>
                </p>
                </div>
                `
            }
            main1.innerHTML = html
        }
    })


})

function showDetail(currentEle) {
    console.log(currentEle.dataset.value);
    location.href = `./pages/详情页.html?videoId=${currentEle.dataset.id}&select=${currentEle.dataset.select}&value=${currentEle.dataset.value}`
}

window.addEventListener("keyup", function (e) {
    // console.log(e.key);
    if (e.key == "Enter") {
        xj1.click()
    }
})