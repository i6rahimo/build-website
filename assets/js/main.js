const btnMix = document.querySelectorAll('.home__tab');
const homeContentImg = document.querySelectorAll('.home__content-img');
const sizeBtns = document.querySelectorAll('.small__tab');
const homcontentBig = document.querySelector('.home__content-big');
const homcontentMedium = document.querySelector('.home__content-medium');
const homcontentSmall = document.querySelector('.home__content-small');
const priceContent = document.querySelector('.home__price');
const itemsCart = document.querySelector('.footer__items-item');
const priceCart = document.querySelector('.footer__items-price')
const footerItems = document.querySelector('.footer__items')
const productItems = document.querySelector('.product__items')


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
const increaseItems = (item) => {
    itemsCart.innerHTML = item;
}
const increasePrice = () => {
    price.innerHTML = priceContent.innerHTML
}
const price = {
    big: 399,
    medium: 285,
    small: 140
}


btnMix.forEach(el => {
    el.addEventListener('click', (e) => {
        
        let self = e.currentTarget;
        const btnId = e.currentTarget.getAttribute('data-btn');
        
        
        homeContentImg.forEach(el => {
            const imgId = el.getAttribute('id')
            el.classList.remove('active')
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
            priceContent.innerHTML = price.big
            increasePrice(price.big)
        } else if (btnIdSize === 'medium') {
            homcontentMedium.classList.add('active')
            priceContent.innerHTML = price.medium
            increasePrice(price.medium)
        } else if (btnIdSize === 'small') {
            homcontentSmall.classList.add('active')
            priceContent.innerHTML = price.small
            increasePrice(price.small)
        } 

    })
})

document.querySelector('.home__tab').click()
document.querySelector('.small__tab').click()
    
const productCart = (img, mainName, bag, flower = '', tea = '', price = 0) => {
    productItems.insertAdjacentHTML("afterbegin", 
        `
            <div class="product__item">
                <div class="product__item-img">
                    <img src="${img}" alt="">
                </div>
                <ul class="product__item-list">
                    <li class=" main-name">${mainName }</li>
                    <li class="product__item-names">${bag }</li>
                    <li class="product__item-names">${flower }</li>
                    <li class="product__item-names">${tea }</li>
                </ul>
                <div class="product__item-price">
                    <span class="product__price">${price}</span>
                    <p>AED</p>
                </div>
            </div>
        `
    )

}



function quantity() {
    const plus = document.querySelector('.quantity__plus');
    const result = document.querySelector('#quantity__result-inner');
    const minus = document.querySelector('.quantity__minus');


    plus.addEventListener('click', () => {
        result.value++
        const imgActive = document.querySelectorAll('.home__content-inner')
        imgActive.forEach((e, index) => {
            if(e.classList.contains('active')) {
                const currentImg = e.querySelectorAll('.home__content-img')
                currentImg.forEach(item => {
                    if(item.classList.contains('active')) {
                        const imgSrc = item.getAttribute('src')
                        const mainNames = item.getAttribute('alt')
                        localStorage.setItem('img', imgSrc)
                        localStorage.setItem('name', mainNames);
                        localStorage.setItem('bag', mainNames);
                    }
                })
            }
        })
        
        const deliveryBag = document.querySelectorAll('.deliver__content-img');

        deliveryBag.forEach(bag => {
            if(bag.classList.contains('active')) {
                let bagName = bag.getAttribute('alt')
                localStorage.setItem('bag', bagName);
            }else {
            }
        })

        
        localStorage.setItem('price', priceContent.innerHTML)
        const price = localStorage.getItem('price')
        if(result.value > 0) {
            footerItems.classList.add('active')
        }
        increaseItems(result.value)
        increasePrice()
        
        let priceProduct = parseInt(document.querySelector('.product__price').textContent);
        const fullPrice = (productPrice) => {
            const fullPriceInner = document.querySelector('.product__fullprice');
            fullPriceInner.innerHTML = productPrice + productPrice 
        }
        fullPrice(priceProduct)
        console.log(priceProduct);

        
        productCart(localStorage.getItem('img'), localStorage.getItem('name'), localStorage.getItem('bag'),'flower', 'azer tea', price)

    });
    minus.addEventListener('click', () => {
        if(result.value <= 0) {
            result.value == 0
            footerItems.classList.remove('active')
        } else {
            result.value--
            increaseItems(result.value)
            
        }
    })
}
quantity()






function order() {
    const cart  = document.querySelectorAll('.cart');
    cart.forEach(item=> {

        const plus = item.querySelector('.cart__plus');
        const result = item.querySelector('#cart__result-inner');
        const minus = item.querySelector('.cart__minus');
    
        plus.addEventListener('click', () => {

            result.value++
            if(result.value > 0) {
                footerItems.classList.add('active')
            }
            increaseItems(result.value)
        


        });
        minus.addEventListener('click', () => {
            if(result.value <= 0) {
                result.value == 0
                footerItems.classList.remove('active')

            } else {
                result.value--
            increaseItems(result.value)

            }
        })
    })

}
order()



