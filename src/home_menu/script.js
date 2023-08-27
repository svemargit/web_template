let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}

function showContent(contentId) {
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(content => {
        content.classList.remove('active');
    });

    const selectedContent = document.getElementById(`${contentId}-content`);
    selectedContent.classList.add('active');
}