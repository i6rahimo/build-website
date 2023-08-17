const btnMix = document.querySelectorAll('.home__tab');
const homeContentImg = document.querySelectorAll('.home__content-img');
const sizeBtns = document.querySelectorAll('.small__tab');
const homcontentBig = document.querySelector('.home__content-big');
const homcontentMedium = document.querySelector('.home__content-medium');
const homcontentSmall = document.querySelector('.home__content-small');

const priceContent = document.querySelector('.home__price')
const price = {
    big: 3
}
btnMix.forEach(el => {
    el.addEventListener('click', (e) => {
        
        let self = e.currentTarget;
        const btnId = e.currentTarget.getAttribute('data-btn');
        
        
        homeContentImg.forEach(el => {
            const imgId = el.getAttribute('id')
            el.classList.remove('active');
            if(btnId === "#mix" && imgId === 'mix') {
                el.classList.add('active')
            } else if (btnId === "#nuts" && imgId === 'nuts') {
                el.classList.add('active')
            } else if (btnId === "#dates" && imgId === 'dates') {
                el.classList.add('active')
            }
        })
        if(! self.classList.contains('active')) {
            btnMix.forEach(item => {
                item.classList.remove('active')
            })
        }
        
        self.classList.add('active')
    })
})
sizeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const currentBtn = btn;
        const btnIdSize = e.currentTarget.getAttribute('data-size');
        if(! currentBtn.classList.contains('active')) {
            sizeBtns.forEach(item => {
                item.classList.remove('active')
            })
        }
        currentBtn.classList.add('active')
        
        homcontentBig.classList.remove('active'); homcontentMedium.classList.remove('active'); homcontentSmall.classList.remove('active')
        if(btnIdSize === 'big') {
            homcontentBig.classList.add('active')
        } else if (btnIdSize === 'medium') {
            homcontentMedium.classList.add('active')
        } else if (btnIdSize === 'small') {
            homcontentSmall.classList.add('active')
        } 




    })
})
document.querySelector('.home__tab').click()
document.querySelector('.small__tab').click()
    





































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