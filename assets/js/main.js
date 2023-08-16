document.addEventListener('DOMContentLoaded', ()=>{


    function homeContent() {

        const btns = document.querySelectorAll('.home__tab');
        const imgContent = document.querySelectorAll('.home__content-img');
        const btnSize = document.querySelectorAll('.home__tabs-size');
        
        const images = 
            {
                imgMix: {
                    default: 'assets/img/Mix big.png',
                    price: 399,
                    size: {
                        big: 'assets/img/Mix big.png',
                        medium: 'assets/img/Mix medium.png',
                        small: 'assets/img/Mix small.png',
                    },
                },
                imgNuts: {
                    default: 'assets/img/only nuts big.png',
                    price: 399,
                    size: {
                        big: 'assets/img/only nuts big.png',
                        medium: 'assets/img/only nuts medium.png',
                        small: 'assets/img/only nuts small.png',
                    },
                },
                imgDates: {
                    default: 'assets/img/Dates big.png',
                    price: 399,
                    size: {
                        big: 'assets/img/Dates big.png',
                        medium: 'assets/img/Dates medium.png',
                        small: 'assets/img/Dates small.png',
                    },
                }
            };

        document.querySelector('.home__content-img').src = images.imgMix.default


        btns.forEach(item => {


            item.addEventListener('click', ()=> {
                
                const currentBtn = item;
                const btnId = currentBtn.getAttribute("data-btn");
                
                if(! currentBtn.classList.contains('active')) {
                    btns.forEach(item => {
                        item.classList.remove('active')
                    })
                }       
                currentBtn.classList.add('active')
                if(btnId === "#mix") {
                    document.querySelector('.home__content-img').src = images.imgMix.default
                } else if (btnId === "#nuts") {
                    document.querySelector('.home__content-img').src = images.imgNuts.default
                } else if (btnId === "#dates") {
                    document.querySelector('.home__content-img').src = images.imgDates.default  
                }

                btnSize.forEach(e => {
                    e.addEventListener('click', ()=> {
        
                        const currentBtnSize = e;
                        const currentBtnSizeId = currentBtnSize.getAttribute("data-size");
                        const currentImgSize = document.querySelector(currentBtnSizeId)
    
                        if(! currentBtnSize.classList.contains('active')) {
                            btnSize.forEach(item => {
                                item.classList.remove('active')
                            })
                        }

    
                        if(item.classList.contains('active')) {

                            if(btnId === "#mix" && currentBtnSizeId === "#big") {
                                document.querySelector('.home__content-img').src = images.imgMix.size.big
                            } else if (btnId === "#mix" && currentBtnSizeId === "#medium") {
                                document.querySelector('.home__content-img').src = images.imgMix.size.medium
                            } else if (btnId === "#mix" && currentBtnSizeId === "#small") {                                                             
                                document.querySelector('.home__content-img').src = images.imgMix.size.small
                            }
                        }

                        if(item.classList.contains('active')) {

                            if(btnId === "#nuts" && currentBtnSizeId === "#big") {
                                document.querySelector('.home__content-img').src = images.imgNuts.size.big
                            } else if (btnId === "#nuts" && currentBtnSizeId === "#medium") {
                                document.querySelector('.home__content-img').src = images.imgNuts.size.medium
                            } else if (btnId === "#nuts" && currentBtnSizeId === "#small") {                                                             
                                document.querySelector('.home__content-img').src = images.imgNuts.size.small
                            }
                        }


                        if(item.classList.contains('active')) {

                            if(btnId === "#dates" && currentBtnSizeId === "#big") {
                                document.querySelector('.home__content-img').src = images.imgDates.size.big
                            } else if (btnId === "#dates" && currentBtnSizeId === "#medium") {
                                document.querySelector('.home__content-img').src = images.imgDates.size.medium
                            } else if (btnId === "#dates" && currentBtnSizeId === "#small") {                                                             
                                document.querySelector('.home__content-img').src = images.imgDates.size.small
                            }
                        }

                        currentBtnSize.classList.add('active')
                    })
                })

            })





        })


    }
    homeContent()
    document.querySelector('.home__tab').click();
    document.querySelector('.home__tabs-size').click();



    function deliveryBag() {
        const btns = document.querySelectorAll('.deliver__tab');
        const img = document.querySelectorAll('.deliver__content-img');

        btns.forEach(item => {
            item.addEventListener('click', () => {
                const currentBtn = item;
                const currentBtnId = currentBtn.getAttribute('data-del');
                const currentImg = document.querySelector(currentBtnId)    

                    if(! currentBtn.classList.contains('active')) {
                        btns.forEach(item => {
                            item.classList.remove('active')
                        })
                        img.forEach(item => {
                            item.classList.remove('active')
                        })
                        
                        currentBtn.classList.add('active')
                        currentImg.classList.add('active')
                    }
                })
            })
    }
    deliveryBag()
    document.querySelector('.deliver__tab').click();





    function quantity() {
        const plus = document.querySelector('.quantity__plus');
        const result = document.querySelector('.quantity__numbre');
        const minus = document.querySelector('.quantity__minus');

        plus.addEventListener('click', () => {
            result.value++
        });
        minus.addEventListener('click', () => {
            if(result.value <= 0) {
                result.value == 0
            } else {
                result.value--
            }
        })
    }
    quantity()


    function order() {
        const cart  = document.querySelectorAll('.cart');
        cart.forEach(item => {
            console.log(item);
            const plus = item.querySelector('.cart__plus');
            const result = item.querySelector('.cart__result-inner');
            const minus = item.querySelector('.cart__minus');
            console.log(plus);
            
            plus.addEventListener('click', () => {
                result.value++
            });
            minus.addEventListener('click', () => {
                if(result.value <= 0) {
                    result.value == 0
                } else {
                    result.value--
                }
            })
        })

    }
    order()

})