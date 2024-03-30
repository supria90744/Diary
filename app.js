var overlay=document.querySelector(".over")
var box=document.querySelector(".popupbox")
var addpopup=document.getElementById("addpop")

addpopup.addEventListener("click",function()
{
    overlay.style.display="block"
    box.style.display="block"
})

var cancels=document.getElementById("cancel")
cancels.addEventListener("click",function(event)
{
    event.preventDefault()
    overlay.style.display="none"
    box.style.display="none"
})

var container=document.querySelector(".container")
var addnotes=document.getElementById("type")
var tit=document.getElementById("title")
var d=document.getElementById("days")
var des=document.getElementById("thoughts")

addnotes.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","notescontainer")
    div.innerHTML=`
    <h2>${tit.value}</h2>
            <h5>${d.value}</h5>
            <p>${des.value}
            </p>
            <button onclick="delenotes(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    box.style.display="none"
})

function delenotes(event)
{
    event.target.parentElement.remove()
}