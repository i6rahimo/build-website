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
const cartWrapper = document.querySelector('.cart__wrapper')
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
    
const productCart = (img, mainName, bag, price, count) => {
    return `
            <div class="product__item">
                <div class="product__item-content">
                    <div class="product__item-img">
                        <img src="${img}" alt="">
                    </div>
                    <ul class="product__item-list">
                        <li class=" main-name">${mainName} (${count})</li>
                        <li class="product__item-names">${bag }</li>
                    </ul>
                    <div class="product__item-price">
                        <span class="product__price">${price}</span>
                        <p>AED</p>
                    </div>
                </div>
                <button class="product__item-delete"><svg width="46" height="50" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.3478 16.7425C40.8462 16.7425 41.2985 16.96 41.6559 17.3275C41.989 17.72 42.1568 18.2074 42.1081 18.7224C42.1081 18.8924 40.7757 35.7424 40.0147 42.8349C39.5381 47.1874 36.7323 49.8298 32.5236 49.9023C29.2874 49.9748 26.1241 49.9998 23.0095 49.9998C19.7028 49.9998 16.4691 49.9748 13.3301 49.9023C9.26239 49.8048 6.45413 47.1149 6.00189 42.8349C5.21898 35.7174 3.91088 18.8924 3.88657 18.7224C3.86226 18.2074 4.02759 17.72 4.36312 17.3275C4.69379 16.96 5.17035 16.7425 5.67122 16.7425H40.3478ZM28.1619 -0.000488281C30.372 -0.000488281 32.3463 1.54201 32.9177 3.742L33.3262 5.56699C33.6568 7.05449 34.9455 8.10698 36.4286 8.10698H43.718C44.6905 8.10698 45.5002 8.91448 45.5002 9.94198V10.892C45.5002 11.8945 44.6905 12.727 43.718 12.727H2.28452C1.30953 12.727 0.499878 11.8945 0.499878 10.892V9.94198C0.499878 8.91448 1.30953 8.10698 2.28452 8.10698H9.57385C11.0546 8.10698 12.3432 7.05449 12.6763 5.56949L13.058 3.8645C13.6513 1.54201 15.6037 -0.000488281 17.8382 -0.000488281H28.1619Z" fill="white"/>
                </svg> </button>
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
const flowerBtnPlus = document.querySelector('.cart__plus-flower');
const flowerBtnResult = document.querySelector('.cart__result-flower');
const flowerBtnMinus = document.querySelector('.cart__minus-flower');
const flowerName = document.querySelector('.cart__name-flower').innerHTML;

const teaBtnPlus = document.querySelector('.cart__plus-tea');
const teaBtnResult = document.querySelector('.cart__result-tea');
const teaBtnMinus = document.querySelector('.cart__minus-tea');
const teaName = document.querySelector('.cart__name-tea').innerHTML;

flowerBtnPlus.addEventListener('click', addCountflower)
function addCountflower()  {
        if(localStorage.getItem('count') >= 1) {
        flowerBtnResult.value++
        localStorage.setItem('flower', flowerName)
        itemsCart.innerHTML++
        let currentPrice = document.querySelector('.cart__price-count').innerHTML

        let flowerCount = flowerBtnResult.value;
        
        localStorage.setItem('flowerCount', parseInt(flowerCount))
        flowerBtnMinus.removeAttribute('disabled')
        // priceCart.innerHTML = plusFullPrice(parseInt(currentPrice))
        }
    }

    
flowerBtnMinus.addEventListener('click', (e)=> {
    if(localStorage.getItem('flowerCount') >= 1) {
        flowerBtnResult.value--
        let flowerCount = flowerBtnResult.value;
        localStorage.setItem('flowerCount', parseInt(flowerCount))
        
        let currentPrice = document.querySelector('.cart__price-count').innerHTML
        // priceCart.innerHTML = minusFullPrice(parseInt(currentPrice))
    } else    if(localStorage.getItem('flowerCount') < 1 ) {
        flowerBtnMinus.disabled = false
        // flowerBtnResult.value = 0
    } 
})



teaBtnPlus.addEventListener('click', ()=> {

    if(localStorage.getItem('count') >= 1) {
        teaBtnResult.value++
        localStorage.setItem('tea', teaName)
        itemsCart.innerHTML++
        let currentPrice = document.querySelector('.cart__price-count').innerHTML
        // priceCart.innerHTML = plusFullPrice(parseInt(currentPrice))
        let teaCount = teaBtnResult.value;
        localStorage.setItem('teaCount', parseInt(teaCount))
        teaBtnMinus.removeAttribute('disabled')
    }

})
    
teaBtnMinus.addEventListener('click', ()=> {
    if(localStorage.getItem('teaCount') >= 1) {
        teaBtnResult.value--
        let teaCount = teaBtnResult.value;
        localStorage.setItem('teaCount', parseInt(teaCount))
        
        let currentPrice = document.querySelector('.cart__price-count').innerHTML
        // priceCart.innerHTML = minusFullPrice(parseInt(currentPrice))

    } else    if(localStorage.getItem('teaCount') < 1 ) {
        
        teaBtnMinus.disabled = true
    } 
})







function quantity() {

    result.addEventListener('input', (e)=> {
        let currentValue = parseInt(e.target.value); 
        if(currentValue >= 1) {
            footerItems.classList.add('active')
        } else if (currentValue < 1) {
            footerItems.classList.remove('active')
        }
        itemsCart.innerHTML = currentValue
        // priceCart.innerHTML = plusFullPrice(parseInt(priceContent.innerHTML))
    })

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

        console.log(localStorage.getItem('count') * localStorage.getItem('price'));
        
        priceCart.innerHTML = plusFullPrice(parseInt(priceContent.innerHTML))

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
        
        
        itemsCart.innerHTML++
        
        increasePrice()
        
        
        
        let product = productCart(localStorage.getItem('img'), localStorage.getItem('name'), localStorage.getItem('bag'), currentPrice, localStorage.getItem('count'))
        
        initialStorage(product)
        
        
        addToCartBtn()
        
        if(result.value > 0) {
            footerItems.classList.add('active')
            // addFlower()
            cartWrapper.classList.remove('hidden')
        }

 
    });
    minus.addEventListener('click', () => {
        if(result.value < 2) {
            result.value = 0
            priceCart.innerHTML = 0
            footerItems.classList.remove('active')
            cartWrapper.classList.add('hidden')
        } else {
            result.value--
            itemsCart.innerHTML--
            let resulQuantity = result.value
            localStorage.setItem('count', resulQuantity)
            priceCart.innerHTML = minusFullPrice(parseInt(priceContent.textContent))

        }
            
        addToCartBtn()
    })
}
quantity()









const addToCartBtn = () => {
    
    
    if(itemsCart.innerHTML === '0') {
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
        // priceCart.innerHTML = 0
        
        let productInner = localStorage.getItem('products')
        // btnLinkCartPrice.innerHTML = priceCart.innerHTML
        btnAddToCart.classList.remove('active')
        btnAddToCartSvg.classList.remove('active')
        btnLinkCart.classList.add('active')
        btnLinkCart.classList.remove('disabled')
        btnLinkCartSvg.classList.add('active')
        result.value = 0;
        flowerBtnResult.value = 0;
        teaBtnResult.value = 0;
        itemsCart.innerHTML = 0;
        updateStorage(productInner)
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        
        
        let productItemList = productContent.querySelector('.product__item-list')
        function addFlowerCount() {
            if(localStorage.getItem('flowerCount') < 1) {
                return 0
            } else if (localStorage.getItem('flowerCount') >= 1) {
                productItemList.innerHTML += `<li class="product__item-names">${localStorage.getItem('flower')} (${localStorage.getItem('flowerCount')})</li>`
            }
        }
        addFlowerCount()
        function addTeaCount() {

            if(localStorage.getItem('teaCount') < 1) {
                return 0
            }else if(localStorage.getItem('teaCount') >= 1) {
                productItemList.innerHTML += `<li class="product__item-names">${localStorage.getItem('tea')} (${localStorage.getItem('teaCount')})</li>`
            }
        }
        addTeaCount()
        

        localStorage.setItem('flowerCount', 0)
        localStorage.setItem('teaCount', 0)
        
        
        // let flowerCount = flowerBtnResult.value;
        // localStorage.setItem('flowerCount', parseInt(flowerCount))

    })
}

addToCart()
const footerWrapper = document.querySelector('.footer__wrapper')
const main = document.querySelector('main')
const productFooter = document.querySelector('.product__footer')
const productContent = document.querySelector('.product')


const linkCart = () => {
    btnLinkCart.addEventListener('click', (e)=> {
        const productItemPrice = document.querySelectorAll('.product__price')
        let self = e.currentTarget;
        // fullPriceContent.innerHTML = priceCart.innerHTML
        footerWrapper.classList.add('hiden')
        main.classList.add('hiden')
        productFooter.classList.add('show')
        productContent.classList.add('show')

        const productItemMain = document.querySelectorAll('.product__item');


        
            let sum = 0;
            productItemPrice.forEach(item => {
                let items = parseInt(item.textContent);
                sum += items;
                fullPriceContent.innerHTML = sum

            })
        
        productItemMain.forEach(item => {
            let innerItem = item.querySelector('.product__item-content')
          let innerBtn = item.querySelector('.product__item-delete')
          let productPrice = item.querySelector('.product__price').textContent
          let startX;
          let dist;
          let threshold = innerItem.offsetWidth * 0.3; // Пороговое значение для определения смахивания влево\
          
          innerItem.addEventListener('touchstart', (event) => {
              startX = event.touches[0].clientX;
              dist = 0;
            });
          
            innerItem.addEventListener('touchmove', (event) => {
              let touch = event.touches[0];
              let deltaX = startX - touch.clientX;
              
              
              if (deltaX > 0) {
                  dist = deltaX;
                  innerItem.style.transform = `translateX(${-dist}px)`;
                }
            });
          
          innerItem.addEventListener('touchend', () => {
              if (dist > threshold) {
                  innerBtn.addEventListener('click', ()=> {
                    let minusSum = parseInt(productPrice)
                    fullPriceContent.innerHTML -= minusSum
                    btnLinkCartPrice.textContent = fullPriceContent.textContent 
                    item.remove()
                  })
              } else {
                  innerItem.style.transform = `translateX(0px)`;
                  
                }
            });
        });

        

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
















}
)

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });


