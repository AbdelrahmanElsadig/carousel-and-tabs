let img_index = 0;
const image_slider = () => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    console.log(images)
    const btns = carousel.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click',() => {
            let offset = btn.classList.contains('right') ? 1:-1;
            let new_index = img_index + offset;
            if (new_index >= images.length) new_index = 0;
            if (new_index < 0) new_index = images.length -1;
            images[img_index].classList.remove('active');
            images[new_index].classList.add('active');
            img_index = new_index 
        })
    })
   
}

image_slider()


const undo_tab = () => {
    let active_tab = document.querySelector('.tab-title.active');
    active_tab.classList.remove('active');

    let active_content = document.querySelector('.tab-content.active');
    active_content.classList.remove('active')
}

const tab_functionality = () => {
    let tabs = [...document.querySelectorAll('.tab-title')];
    let tab_contents = [...document.querySelectorAll('.tab-content')]
    tabs.forEach((tab,index) => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('active')) return undo_tab();
            undo_tab();
            let content = tab_contents[index];
            tab.classList.add('active');
            content.classList.add('active')
        })
    })
}
tab_functionality()