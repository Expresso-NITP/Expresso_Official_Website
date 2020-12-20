let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;


if(galleryImages) {
    galleryImages.forEach(function(image,index)
    {
        image.onclick =function(){
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/thumbs/");
            let setNewImgUrl = getImgUrlPos[1].replace('")','');
            
            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class" , "img-window");
            newImgWindow.setAttribute("onclick" , "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "./Img/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img" );
            
            newImg.onload = function() {
                let imgwidth = this.width;
                let calcImgToEdge = ((windowWidth - imgwidth)/2)-80;

            let newPrevBtn =document.createElement("a");
            let btnPrevText =document.createTextNode("<");
            newPrevBtn.appendChild(btnPrevText);
            container.appendChild(newPrevBtn);
            newPrevBtn.setAttribute("class","img-btn-prev");
            newPrevBtn.setAttribute("onclick", "changeImg(0)");
            newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";

            let newNextBtn =document.createElement("a");
            let btnNextText =document.createTextNode(">");
            newNextBtn.appendChild(btnNextText);
            container.appendChild(newNextBtn);
            newNextBtn.setAttribute("class","img-btn-next");
            newNextBtn.setAttribute("onclick", "changeImg(1)");
            newNextBtn.style.cssText = "Right: " + calcImgToEdge + "px;";

            }
    }
     })
}


function closeImg(){
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-prev").remove();
    document.querySelector(".img-btn-next").remove();
}

function changeImg(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg ;
   
    if(changeDir === 0) {
        calcNewImg =getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg=galleryImages.length;
        }
    } 
    else  if(changeDir === 1) {
        calcNewImg =getLatestOpenedImg + 1;
        if(calcNewImg > galleryImages.length) {
            calcNewImg=1;
        }
    }

    newImg.setAttribute("src", "./Img/img" + calcNewImg +".jpg");
    newImg.setAttribute("id", "current-img");
    getLatestOpenedImg = calcNewImg;

    newImg.onload = function(){

        let imgwidth = this.width;
        let calcImgToEdge = ((windowWidth - imgwidth)/2)-80;

        
    }
}