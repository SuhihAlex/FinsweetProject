const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
            overflow: hidden;
            top: -$(scrollController.scrollPosition)px;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        `;
  },
  enabledScroll() {
    document.body.style.cssText = "";
    window.scroll({top: scrollController.scrollPosition})
  },
};

const modalController = ({ modal, btnOpen, btnClose }) => {
  const btnElem = document.querySelector(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms easy-in-out;
`;

  const modalClose = (e) => {
    const target = e.target;

    if (target === modalElem || target.closest(btnClose)) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = "hidden";
        scrollController.enabledScroll();
      }, 300);
    }
  };

  const modalOpen = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    scrollController.disabledScroll();
  };

  btnElem.addEventListener("click", modalOpen);
  modalElem.addEventListener("click", modalClose);
};
modalController({
  modal: ".modal",
  btnOpen: ".header__btn",
  btnClose: ".modal__close",
});

let inputBorder = document.querySelector('.footer__form-btn');
let footerBtn = document.querySelector('.footer__btn');

footerBtn.addEventListener('click', function() {
    if (inputBorder.length != '@') {
        document.input.style.cssInput = `border-color: red;`
    }
});