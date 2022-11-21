let body = document.querySelector('body')
body.style.fontFamily = "Arial, sans-serif"

let nickname = document.querySelector('body ul li span#nickname')
nickname.innerHTML = "WY"

let favorites = document.querySelector('body ul li span#favorites')
favorites.innerHTML = "Listen to the music"

let hometown = document.querySelector('body ul li span#hometown')
hometown.innerHTML = "Ipoh"

let list = document.querySelectorAll("body ul li")
for (var i=0; i<list.length; i++) {
    list[i].setAttribute('class', 'list-item')
}

let listitem = document.querySelectorAll(".list-item")
for (var i=0; i<listitem.length; i++) {
    listitem[i].style.color = 'red'
}

let img = document.createElement('img')
img.src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
body.appendChild(img)