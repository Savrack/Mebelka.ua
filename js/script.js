/*
 *
 *
 * вхід / реєстрація / відновлення паролю
 * 
 *
 */


// модальне вікно
let modalWindow = document.getElementById('modalPanelSection');

// кнопки, які відкривають модальне вікно
let autorizationButton = document.getElementById('autorization');
let registrationButton = document.getElementById('registration');

// елементи модального вікна
let modalWindowControlButtons = Array.from(modalWindow.querySelectorAll('.modal-panel-control__button'));
let modalWindowForms = Array.from(modalWindow.querySelectorAll('.modal-panel-form'));

// активні елементи
let activeModalWindowControlButton = null;
let activeModalWindowForm = null;



// обробник подій
autorizationButton.addEventListener('click', function (){
    setActiveModalWindowControlButton(this.id);
    setActiveModalWindowForm(this.id);   
    openModalWindow();


    closeModalWindow();
});
registrationButton.addEventListener('click', function (){
    setActiveModalWindowControlButton(this.id);
    setActiveModalWindowForm(this.id);
    openModalWindow();

    closeModalWindow();
});
modalWindowControlButtons.forEach(element => {
    element.addEventListener('click', function (){
        setActiveModalWindowControlButton(this.id.replace('ControlButton', ''));
        setActiveModalWindowForm(this.id.replace('ControlButton', ''));
    
        closeModalWindow();
    });
});



// Задаємо активну кнопку
function setActiveModalWindowControlButton(button){  
    removeActiveModalWindowControlButton();
    activeModalWindowControlButton = modalWindowControlButtons.find(element => {
        if(element.id == `${button + 'ControlButton'}`){
            return true;
        }
    });
    activeModalWindowControlButton.classList.add('modal-panel-control__button_active');
}

// Задаємо активну форму
function setActiveModalWindowForm(button){  
    removeActiveModalWindowForm();
    activeModalWindowForm = modalWindowForms.find(element => {
        if(element.id == `${button + 'Form'}`){
            return true;
        }
    });

    activeModalWindowForm.classList.add('modal-panel-form_active');
}

// Відміняємо активну кнопку
function removeActiveModalWindowControlButton(){
    if(activeModalWindowControlButton != null){
        activeModalWindowControlButton.classList.remove('modal-panel-control__button_active');
    }
    
}

// Відміняємо активну форму
function removeActiveModalWindowForm(){
    if(activeModalWindowForm != null){
        activeModalWindowForm.classList.remove('modal-panel-form_active');
    }
}



// Ховаємо модальне вікно
function closeModalWindow(){
    let closeModalWindow = modalWindow.querySelector('.modal-window__close-button');
    closeModalWindow.onclick = function(){
        activeModalWindowControlButton.classList.remove('modal-panel-control__button_active');
        activeModalWindowForm.classList.remove('modal-panel-form_active');

        activeModalWindowControlButton = null;
        activeModalWindowForm = null;
        
        modalWindow.classList.remove('modal-window-section_show');
        modalWindowBG();
    }
}


/*
 *
 *
 * навігація по сайту
 * 
 *
 */

let siteNavSection = document.getElementById('siteNavSection');
let siteNavActiveLink = 0;
let siteNavLinkList = siteNavSection.querySelectorAll('.site-nav-category__link');
let siteNav = document.getElementById('siteNav');
    siteNav.addEventListener('click', function (){
        modalWindowBG();
        siteNavLinkList[0].classList.add('site-nav-category__link_active');
        siteNavSection.classList.add('modal-window-section_show');

        let closeModalWindow = siteNavSection.querySelector('.modal-window__close-button');
        closeModalWindow.onclick = function(){
            siteNavSection.classList.remove('modal-window-section_show');
            modalWindowBG();
        }
    });


    siteNavLinkList.forEach(element => {
        element.addEventListener('mouseover', function(){
            this.classList.remove('site-nav-category__link_active');
        });

        

    });






/*
 *
 *
 * кошик
 * 
 *
 */
let cartSection = document.getElementById('cartSection');
let cart = document.getElementById('bag');
    cart.addEventListener('click', function (){
        modalWindowBG();

        cartSection.classList.add('modal-window-section_show');

        let closeModalWindow = cartSection.querySelector('.modal-window__close-button');
        closeModalWindow.onclick = function(){
            cartSection.classList.remove('modal-window-section_show');
            modalWindowBG();
        }
    });


// добавлємо | ховаємо тінь
function modalWindowBG(){
    document.querySelector('.modal-window-bg').classList.toggle('modal-window-bg_show');
}

// Показуємо модальне вікно
function openModalWindow(){
    modalWindowBG();
    modalWindow.classList.add('modal-window-section_show');
}






/*
 *
 *
 * слайдер
 * 
 *
 */
class Slider{
    _sliderContainer;

    _sliderContentArr;
    _sliderCurrentContentIndex = 0;
    _sliderContentMaxIndex;

    _sliderButtonControl;




    constructor (sliderContainer){
        this._sliderContainer = document.getElementById(sliderContainer);

        this._sliderButtonControl = this._sliderContainer.querySelectorAll('.slider__control');
        this._sliderContentArr = this._sliderContainer.querySelectorAll('.slider__item');
        this._sliderContentMaxIndex = this._sliderContentArr.length - 1;
        

        this._sliderButtonControl[0].onclick = () =>{
            this._sliderContentArr[this._sliderCurrentContentIndex].classList.add('slider__item_next');
            this._sliderContentArr[--this._sliderCurrentContentIndex].classList.remove('slider__item_prev');
        };

        this._sliderButtonControl[1].onclick = () =>{
            this._sliderContentArr[this._sliderCurrentContentIndex].classList.add('slider__item_prev');
            this._sliderContentArr[++this._sliderCurrentContentIndex].classList.remove('slider__item_next');
        };
    }
}

let mainPageSlider = new Slider('mainPageSlider');













