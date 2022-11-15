console.log(location.search);
let b = formatqueryString(location.search)
console.log(b);
let sc = document.getElementById("source")
sc.src = `${b.path}`

let dir=document.querySelector("[dir=ltr]")