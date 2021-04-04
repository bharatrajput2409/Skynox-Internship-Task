var all_img=document.querySelectorAll('.image-list img')
var counter=0;
var curr_img= document.querySelector('.image-preview img')
console.log(curr_img.src)
setBorder(all_img[counter])
function removeBorder(temp){
    temp.style.border='0px'
    temp.style.opacity = '1'
}
function setBorder(temp){
    temp.style.border='2px solid #878787';
    temp.style.opacity = '.5'
}
function increaseCounter(){
    removeBorder(all_img[counter])
    counter=(counter+1)%4;
    setBorder(all_img[counter]);
    curr_img.src='/media/image-'+(counter+1)+'.jpg'
}
function decreaseCounter(){
    removeBorder(all_img[counter])
    counter=(counter-1+4)%4;
    setBorder(all_img[counter]);
}