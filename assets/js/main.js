document.addEventListener('DOMContentLoaded', ()=>{

    const imgMix = {
        id: '1',
        
    }

    function homeContent() {

        const btns = document.querySelectorAll('.home__tab');
        const btnSize = document.querySelectorAll('.home__tabs-size');
        const bigImg = 'big';
        let price = {
            big: 399,
            medium: 285,
            small: 140,
        }
        const size = '';
        const images = 
        {
                imgMix: `assets/img/Mix ${size}.webp`,
                imgNuts: `assets/img/only nuts.webp`,
                imgDates: `assets/img/Dates big.webp`,
            };
            
            console.log(size);
            
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
                    document.querySelector('.home__content-img').src = images.imgMix
                } else if (btnId === "#nuts") {
                    document.querySelector('.home__content-img').src = images.imgNuts
                } else if (btnId === "#dates") {
                    document.querySelector('.home__content-img').src = images.imgDates 
                }
                
                btnSize.forEach(e => {
                    e.addEventListener('click', ()=> {
                        const homePrice = document.querySelector('.home__price');
                        const currentBtnSize = e;
                        const currentBtnSizeId = currentBtnSize.getAttribute("data-size");
                        const currentImgSize = document.querySelector(currentBtnSizeId)
                        
                        if(! currentBtnSize.classList.contains('active')) {
                            btnSize.forEach(item => {
                                item.classList.remove('active')
                            })
                        }

                        if(currentBtnSizeId === "#big") {
                            homePrice.innerHTML = price.big;
                        } else if (currentBtnSizeId === "#medium") {
                            homePrice.innerHTML = price.medium;
                        } else if (currentBtnSizeId === "#small") {
                            homePrice.innerHTML = price.small;
                        }
                        
    
                        // if(item.classList.contains('active')) {
                            
                        //     if(btnId === "#mix" && currentBtnSizeId === "#big") {
                        //         document.querySelector('.home__content-img').src = images.size.big
                        //     } else if (btnId === "#mix" && currentBtnSizeId === "#medium") {
                            //         document.querySelector('.home__content-img').src = images.size.medium
                            //     } else if (btnId === "#mix" && currentBtnSizeId === "#small") {                                                             
                        //         document.querySelector('.home__content-img').src = images.size.small
                        //     }
                        // }
                        
                        if(item.classList.contains('active')) {

                            if(btnId === "#nuts" && currentBtnSizeId === "#big") {
                                size = 'big',
                                document.querySelector('.home__content-img').src = size;
                                console.log(size);
                            } else if (btnId === "#nuts" && currentBtnSizeId === "#medium") {
                                size = 'medium',
                                document.querySelector('.home__content-img').src = size

                            } else if (btnId === "#nuts" && currentBtnSizeId === "#small") {
                                innerImgSize = size.small;                                                             
                                // document.querySelector('.home__content-img').src = images.size.small
                            }
                        }


                        // if(item.classList.contains('active')) {

                        //     if(btnId === "#dates" && currentBtnSizeId === "#big") {
                        //         document.querySelector('.home__content-img').src = images.size.big
                        //     } else if (btnId === "#dates" && currentBtnSizeId === "#medium") {
                        //         document.querySelector('.home__content-img').src = images.size.medium
                        //     } else if (btnId === "#dates" && currentBtnSizeId === "#small") {                                                             
                        //         document.querySelector('.home__content-img').src = images.size.small
                        //     }
                        // }

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
    
            const plus = item.querySelector('.cart__plus');
            const result = item.querySelector('.cart__result-inner');
            const minus = item.querySelector('.cart__minus');
            
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