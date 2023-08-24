document.addEventListener('DOMContentLoaded', ()=> {



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
const btnAddToCart = document.querySelector('.footer__add')
const btnAddToCartSvg = document.querySelector('.footer__add-svg')
const btnLinkCart = document.querySelector('.footer__cart')
const btnLinkCartSvg = document.querySelector('.footer__cart-svg')
const btnLinkCartPrice = document.querySelector('.footer__cart-price')
const fullPriceContent = document.querySelector('.product__fullprice')

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

let startPrice = 0;
const plusFullPrice = (currentPrice) => {
	return startPrice += currentPrice;
};
const minusFullPrice = (currentPrice) => {
	return startPrice -= currentPrice;
};

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
            priceCart.textContent = '0'
        } else if (btnIdSize === 'medium') {
            homcontentMedium.classList.add('active')
            priceContent.innerHTML = price.medium
            increasePrice(price.medium)
            priceCart.textContent = '0'

        } else if (btnIdSize === 'small') {
            homcontentSmall.classList.add('active')
            priceContent.innerHTML = price.small
            increasePrice(price.small)
        priceCart.textContent = '0'

        } 

    })
})

document.querySelector('.home__tab').click()
document.querySelector('.small__tab').click()
    
const productCart = (img, mainName, bag, price, count, flower, flowerCount) => {
    return `
            <div class="product__item">
                <div class="product__item-img">
                    <img src="${img}" alt="">
                </div>
                <ul class="product__item-list">
                    <li class=" main-name">${mainName} (${count})</li>
                    <li class="product__item-names">${bag }</li>
                    <li class="product__item-names">${flower} (${flowerCount})</li>
                </ul>
                <div class="product__item-price">
                    <span class="product__price">${price}</span>
                    <p>AED</p>
                </div>
            </div>
        `
    

}

const initialStorage = (product) => {

    localStorage.setItem('products', product);
}

const updateStorage = (productInner) => {
    let parent = document.querySelector('.product__items');

    parent.insertAdjacentHTML('afterbegin', productInner)

    
}




const plus = document.querySelector('.quantity__plus');
const result = document.querySelector('#quantity__result-inner');
const minus = document.querySelector('.quantity__minus');

function quantity() {


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

        priceCart.innerHTML = plusFullPrice(parseInt(priceContent.textContent))
      
        fullPriceContent.innerHTML = priceCart.innerHTML
        const deliveryBag = document.querySelectorAll('.deliver__content-img');
        
        deliveryBag.forEach(bag => {
            if(bag.classList.contains('active')) {
                let bagName = bag.getAttribute('alt')
                localStorage.setItem('bag', bagName);
            }else {
            }
        })

        
        localStorage.setItem('price', priceContent.innerHTML)
        let resulQuantity = result.value
        localStorage.setItem('count', resulQuantity)
        let flowerCount = localStorage.getItem('flowerCount');
        let priceOrder = flowerCount * 90;


        const price = localStorage.getItem('price')
        let currentPrice = price * resulQuantity + priceOrder 

        if(result.value === 0) {
            btnAddToCart.classList.add('disabled')
        }

        
        if(result.value > 0) {
            footerItems.classList.add('active')
        }
        itemsCart.innerHTML++

        increasePrice()
        
        
        
        let product = productCart(localStorage.getItem('img'), localStorage.getItem('name'), localStorage.getItem('bag'), currentPrice, localStorage.getItem('count'), localStorage.getItem('flower'), localStorage.getItem('flowerCount'))
        
        initialStorage(product)

        addToCartBtn()
    });
    minus.addEventListener('click', () => {
        if(result.value <= 0) {
            result.value == 0
            footerItems.classList.remove('active')
            priceCart.innerHTML = '0'
        } else {
            result.value--
            itemsCart.innerHTML--

            
            priceCart.innerHTML = minusFullPrice(parseInt(priceContent.textContent))
            addToCartBtn()
        }
    })
}
quantity()










const addToCartBtn = () => {
    
    
    if(itemsCart.innerHTML === '') {
        btnAddToCart.classList.remove('active')
        btnAddToCartSvg.classList.remove('active')
        
    } else if (itemsCart.textContent > 0) {
        btnAddToCart.classList.add('active')
        btnAddToCartSvg.classList.add('active')
        btnAddToCart.disabled = false;
        btnAddToCart.classList.remove('disabled')
    } 
 
}

const addToCart = () => {
    btnAddToCart.addEventListener('click', ()=> {
        let productInner = localStorage.getItem('products')
        btnLinkCartPrice.innerHTML = priceCart.innerHTML
        
        btnLinkCart.classList.add('active')
        btnLinkCart.classList.remove('disabled')
        btnLinkCartSvg.classList.add('active')
        priceCart.innerHTML = 0;
        result.value = 0;
        itemsCart.innerHTML = 0;
        updateStorage(productInner)
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        

    })
}

addToCart()
const footerWrapper = document.querySelector('.footer__wrapper')
const main = document.querySelector('main')
const productFooter = document.querySelector('.product__footer')
const productContent = document.querySelector('.product')

let itemList = document.querySelector('.product__item-list');
const addOrders = () => {
    if(  productContent.classList.contains('show')) {
        // itemList.insertAdjacentHTML('afterbegin',  `<li class="product__item-names">qwee</li>`
        // )
    }
}


const linkCart = () => {
    btnLinkCart.addEventListener('click', (e)=> {
        let self = e.currentTarget;
        footerWrapper.classList.add('hiden')
        main.classList.add('hiden')
        productFooter.classList.add('show')
        productContent.classList.add('show')
        addOrders()
    })
}
linkCart()


const btnClose = document.querySelector('.product__close');
const closeContent = () => {
    btnClose.addEventListener('click', ()=> {
        productContent.classList.remove('show')
        main.classList.remove('hiden')
        productFooter.classList.remove('show')
        footerWrapper.classList.remove('hiden')
    })
}

closeContent();





const flowerBtnPlus = document.querySelector('.cart__plus-flower');
const flowerBtnResult = document.querySelector('.cart__result-flower');
const flowerBtnMinus = document.querySelector('.cart__minus-flower');
const flowerName = document.querySelector('.cart__name-flower').innerHTML;
const addFlower = () => {   
    if(result.value === '0') {
        flowerBtnPlus.addEventListener('click', ()=> {
            flowerBtnResult.value = 0
        })
    } else if(result.value >= '1') {

        flowerBtnPlus.addEventListener('click', ()=> {
            flowerBtnResult.value++
            localStorage.setItem('flower', flowerName)
            itemsCart.innerHTML++
            let currentPrice = document.querySelector('.cart__price-count').innerHTML
            priceCart.innerHTML = plusFullPrice(parseInt(currentPrice))
            let flowerCount = flowerBtnResult.value;
            
            localStorage.setItem('flowerCount', flowerCount)
        })
    }
    flowerBtnMinus.addEventListener('click', ()=> {
        if(flowerBtnResult.value <= 0) {
            flowerBtnResult.value = 0
        } else 
        flowerBtnResult.value--
        itemsCart.innerHTML--

    })
}
addFlower()




// function order() {
//     const cart  = document.querySelectorAll('.cart');
//     cart.forEach(item=> {

//         const plus = item.querySelector('.cart__plus');
//         const result = item.querySelector('#cart__result-inner');
//         const minus = item.querySelector('.cart__minus');
        

//         let currentName = item.querySelector('.cart__name').innerHTML    
//         let currentPrice = item.querySelector('.cart__price-count')
//         plus.addEventListener('click', () => {

//             result.value++
//             if(result.value > 0) {
//                 footerItems.classList.add('active')
//             }
//             itemsCart.innerHTML++
//             priceCart.innerHTML = plusFullPrice(parseInt(currentPrice.textContent))
            
//         });
//         minus.addEventListener('click', (btn) => {
//             if(result.value <= 0) {

//             } else {
//                 result.value--
//                 itemsCart.innerHTML--
//             }
//             priceCart.innerHTML = minusFullPrice(parseInt(currentPrice.textContent))

//         })
//     })

// }
// order()



}
)

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });