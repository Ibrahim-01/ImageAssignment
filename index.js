const body = document.body;
const div = document.createElement("div");
div.classList.add("container")
body.append(div)
const div2 = document.createElement("div")
div2.classList.add("XandO")
div.append(div2)
const div3 = document.createElement("div")
const div4 = document.createElement("div")
const div5 = document.createElement("div")
div3.classList.add("1stRow")
div4.classList.add("2ndRow")
div5.classList.add("3rdRow")
div2.append( div3, div4, div5)
const img1 = document.createElement("img")
const img2 = document.createElement("img")
const img3 = document.createElement("img")
const img4 = document.createElement("img")
const img5 = document.createElement("img")
const img6 = document.createElement("img")
const img7 = document.createElement("img")
const img8 = document.createElement("img")
const img9 = document.createElement("img")
div3.append(img1, img2, img3 )
div4.append(img4, img5, img6 )
div5.append(img7, img8, img9 )
img1.setAttribute("src", "../images/croacker.jpg")
img2.setAttribute("src", "../images/football.jpg")
img3.setAttribute("src", "../images/moon.jpg")
img4.setAttribute("src", "../images/newLogo.jpg")
img5.setAttribute("src", "../images/shawa.jpg")
img6.setAttribute("src", "../images/star.jpg")
img7.setAttribute("src", "../images/sun.jpg")
img8.setAttribute("src", "../images/tilapia.jpg")
img9.setAttribute("src", "../images/titus.jpg")
div3, div4, div5.classList.add("imagess")
















const img = document.createElement("img")
img.setAttribute("src", "HOME-JERSEY.jpg")

