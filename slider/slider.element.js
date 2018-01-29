//Dummy Element
class SebSlider extends HTMLElement {
    constructor() {
        super();
        //Build array of slides
        const slides = Array.from(this.children);
        //Empty slider from original elements
        this.innerHTML = "";

        //Settings
        const slider_width = this.getAttribute('slider-width');
        const slides_to_show = parseInt(this.getAttribute('slides-to-show'));
        const slides_to_slide = parseInt(this.getAttribute('slides-to-slide'));
        const min_slide = 0;
        const max_slide = slides.length - 1;
        const initial_slide = parseInt(this.getAttribute('initial-slide')) - 1;
        const track_width = 100 / slides_to_show * slides.length;
        const slide_width = 100 / slides.length;
        var current_slide = initial_slide;

        //Styling
        const style = document.createElement('style');
        style.innerHTML = `
            .seb-slider {
                position: relative;
                width: ${slider_width};
                overflow: hidden;
            }
            .seb-arrow {
                position: absolute;
                top: 50%;
                width: 20px;
                height: 20px;
                background-color: black;
                z-index: 1;
                transform: translateY(-50%);
            }
            .seb-arrow_left {
                left: 0;
            }
            .seb-arrow_right {
                right: 0;
            }
            .seb-dots {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                background-color: black;
                width: 40px;
                height: 20px;
            }
            .seb-track {
                width: ${track_width}%;
                transition: transform 0.5s ease;
            }
            .seb-slide {
                width: ${slide_width}%;
                float: left;
                background-color: #F1F1F1;
                font-size: 0;
            }
        `;
        //Container
        const container = document.createElement('div');
        appendClassName(container, 'seb-slider');
        //Track
        const track = document.createElement('div');
        appendClassName(track, 'seb-track');
        //Dots
        const dots = document.createElement('div');
        appendClassName(dots, 'seb-dots');
        //Arrows
        //Left
        const arrow_left = document.createElement('div');
        appendClassName(arrow_left, 'seb-arrow seb-arrow_left');
        addClickEvent(arrow_left, decrementCurrentSlide);
        //Right
        const arrow_right = document.createElement('div');
        appendClassName(arrow_right, 'seb-arrow seb-arrow_right');
        addClickEvent(arrow_right, incrementCurrentSlide);

        //Markup
        appendTo(this, style, container);
        appendTo(container, arrow_left, track, arrow_right, dots);
        slides.forEach(function(slide){
            appendClassName(slide, 'seb-slide');
            appendTo(track, slide);
        });

        //Slider specific functions
        function moveTrack() { track.setAttribute('style', `transform: translateX(${-(current_slide * slide_width) + '%'})`);}
        function decrementCurrentSlide() {
            
            moveTrack();
        }
        function incrementCurrentSlide() {
            var overflowSlides = (current_slide + slides_to_show + slides_to_slide) % slides.length;
            if(overflowSlides == 0){
                
            }
            moveTrack();
        }
        function goToPage(pagenumber){
            //Logic to calculate slidenumber
            current_slide = slideNumber;
            moveTrack();
        }
        //DOTS
        //const paginationPage = Math.floor((this.page > 0 ? this.page - 1 : 0) / this.pagesPerRow);

        //Helper functions
        function appendTo(parent, ...children){
            children.forEach((child)=>{
                parent.appendChild(child);
            });
        }
        function appendClassName(element, classname){
            element.className += (element.className.length > 0 ? ' ' : '') + classname;
        }
        function addClickEvent(element, func){
            element.addEventListener('click', func);
        }
    }
}

customElements.define("seb-slider", SebSlider);