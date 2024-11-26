let products = [

  {

      name: "Waffle with Berrie's",

      category:' Waffle',

      price: '6.50',

      icon:'assets/img/waffle.png',
      image:'assets/img/cart-plus.png'

  },

  
  {

    name: 'Vanilla Bean Crème Brûlée',

    category: 'Crème Brûlée',

    price: '7.00',

     icon:'assets/img/brulee.png',
     image:'assets/img/cart-plus.png'

},



{

  name: 'Macaron Mix of Five',

  category: 'Macaron',

  price: '8.00',

   icon:'assets/img/macaron.png',
   image:'assets/img/cart-plus.png'

},

{

  name: 'Classic Tiramisu',

  category: 'Tiramisu',

  price: '5.50',

   icon:'assets/img/tiramisu.png',
   image:'assets/img/cart-plus.png'

},


{

  name: 'Pistachio Baklava',

  category: 'Baklava',

  price: '4.00',

   icon:'assets/img/baklava.png',
   image:'assets/img/cart-plus.png'

},

{

  name: 'Lemon Meringue Pie',

  category: 'Pie',

  price: '5.00',

   icon:'assets/img/pie.png',
   image:'assets/img/cart-plus.png'

},


{

  name: 'Red Velvet Cake',

  category: 'Cake',

  price: '4.50',
   icon:'assets/img/cake.png',
   image:'assets/img/cart-plus.png'

},

{

  name: 'Salted Caramel Brownie',

  category: 'Brownie',

  price: '5.50',

   icon:'assets/img/brownie.png',
   image:'assets/img/cart-plus.png'

},

{

  name: 'Vanilla Panna Cotta',

  category: 'Panna Cotta',

  price: '6.50',
  
   icon:'assets/img/panna.png',
   image:'assets/img/cart-plus.png'
},
];

const cakeList = document.querySelector('.cake-list');




function render() {

cakeList.innerHTML = '';

  for (product of products) {

    cakeList.innerHTML += `<div><img src="${product.icon}"/> </div>
    <div>${product.category}</div>
    <div>${product.name}</div>
    <div>${product.price}</div>
    <div class="cartBtn"><img src="${product.image}"/>Add to Cart</div>
  
    `
  
  }
  sec();
}




function sec() {
  


  
   const cartBtn = document.querySelectorAll('.cartBtn');

  for(let i =0; i<cartBtn.length; i++) {
   cartBtn[i].addEventListener('click', () => {

    cartBtn[i].innerHTML = `  <div class="btn">
          <span class="minus">-</span>
          <span class="num">01</span>
          <span class="plus">+</span>
        </div>`
  });

say (cartBtn[i]);
}

}

 function ekle() {
  const cart = document.querySelector('.cart');
  const product = products[productIndex];

  const cardItem =  cakeList.innerHTML += `<div><img src="${product.icon}"/> </div>
  <div>${product.category}</div>
  <div>${product.name}</div>
  <div>${product.price}</div>
  

  `
  cart.innerHTML += cardItem;

 }








function say() {

  const plus =document.querySelector('.plus');
  const minus = document.querySelector('.minus');
  const number = document.querySelector('.num');

    let x=1;
    
    plus.addEventListener('click', () =>  {
    
     x++;
     x=(x<10) ? "0" + x: x;
     number.innerText=x;
    
    });
    
    minus.addEventListener('click', () =>  {
    if(x>1) {
    
     x--;
     x=(x<10) ? "0" + x: x;
     number.innerText=x;
    
    }
   
    
    });
  
    render();
}

    
 
  
 
render();
  
 



