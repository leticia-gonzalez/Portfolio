/**
 * Created by leticia on 28.08.19.
 */
const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
    for(var i = 0; i < imgContent.length; i++) {
        imgContent[i].style.left = e.pageX + 'px';
        imgContent[i].style.top = e.pageY + 'px';
    }
}
