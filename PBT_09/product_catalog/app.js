const products = [
{
id:1,
name:"iPhone 16",
price:25990000,
category:"phone",
image:"https://placehold.co/200",
rating:4.5,
inStock:true
},
{
id:2,
name:"Samsung S24",
price:22990000,
category:"phone",
image:"https://placehold.co/200",
rating:4.4,
inStock:true
},
{
id:3,
name:"Pixel 9",
price:19990000,
category:"phone",
image:"https://placehold.co/200",
rating:4.6,
inStock:true
},
{
id:4,
name:"MacBook Pro",
price:45990000,
category:"laptop",
image:"https://placehold.co/200",
rating:4.9,
inStock:true
},
{
id:5,
name:"Dell XPS",
price:35990000,
category:"laptop",
image:"https://placehold.co/200",
rating:4.7,
inStock:true
},
{
id:6,
name:"ThinkPad X1",
price:32990000,
category:"laptop",
image:"https://placehold.co/200",
rating:4.5,
inStock:true
},
{
id:7,
name:"iPad Air",
price:16990000,
category:"tablet",
image:"https://placehold.co/200",
rating:4.6,
inStock:true
},
{
id:8,
name:"Xiaomi Pad 6",
price:7990000,
category:"tablet",
image:"https://placehold.co/200",
rating:4.2,
inStock:true
},
{
id:9,
name:"Galaxy Tab",
price:10990000,
category:"tablet",
image:"https://placehold.co/200",
rating:4.3,
inStock:true
},
{
id:10,
name:"AirPods Pro",
price:6990000,
category:"accessory",
image:"https://placehold.co/200",
rating:4.5,
inStock:true
},
{
id:11,
name:"Galaxy Buds",
price:3490000,
category:"accessory",
image:"https://placehold.co/200",
rating:4.1,
inStock:true
},
{
id:12,
name:"Magic Mouse",
price:2490000,
category:"accessory",
image:"https://placehold.co/200",
rating:4.0,
inStock:true
}
];

let cartCount = 0;
let currentProducts = [...products];

const app = document.querySelector("#app");

app.innerHTML = `
<div class="container">
<h1>Product Catalog</h1>

<div class="topbar">
<input id="search" placeholder="Search...">

<select id="sort">
<option value="">Sort</option>
<option value="priceAsc">Price ↑</option>
<option value="priceDesc">Price ↓</option>
<option value="name">Name A-Z</option>
<option value="rating">Rating</option>
</select>

<button data-category="all">All</button>
<button data-category="phone">Phone</button>
<button data-category="laptop">Laptop</button>
<button data-category="tablet">Tablet</button>
<button data-category="accessory">Accessory</button>

<button id="themeBtn">
Dark Mode
</button>
</div>

<div class="products"></div>

<div class="badge">0</div>
</div>
`;

const productsContainer =
document.querySelector(".products");

const badge =
document.querySelector(".badge");

function renderProducts(data){

productsContainer.innerHTML="";

data.forEach(product=>{

const card =
document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${product.image}">
<div class="card-body">
<h3>${product.name}</h3>
<p>${product.price.toLocaleString()}đ</p>
<p>⭐ ${product.rating}</p>
<button class="add-cart">
Thêm giỏ
</button>
</div>
`;

card.addEventListener("click",()=>showModal(product));

card.querySelector(".add-cart")
.addEventListener("click",(e)=>{

e.stopPropagation();

cartCount++;

badge.textContent=cartCount;
});

productsContainer.appendChild(card);
});
}

function showModal(product){

const modal =
document.createElement("div");

modal.className="modal";

modal.innerHTML=`
<div class="modal-content">
<h2>${product.name}</h2>
<p>Giá:
${product.price.toLocaleString()}đ</p>
<p>Rating: ${product.rating}</p>
<p>Category: ${product.category}</p>
<button id="closeModal">
Đóng
</button>
</div>
`;

document.body.appendChild(modal);

modal.querySelector("#closeModal")
.addEventListener("click",()=>{
modal.remove();
});
}

renderProducts(products);

document.querySelector("#search")
.addEventListener("input",e=>{

const keyword =
e.target.value.toLowerCase();

currentProducts =
products.filter(product=>
product.name
.toLowerCase()
.includes(keyword)
);

renderProducts(currentProducts);
});

document.querySelector("#sort")
.addEventListener("change",e=>{

const value=e.target.value;

let sorted=[...currentProducts];

if(value==="priceAsc"){
sorted.sort((a,b)=>
a.price-b.price);
}

if(value==="priceDesc"){
sorted.sort((a,b)=>
b.price-a.price);
}

if(value==="name"){
sorted.sort((a,b)=>
a.name.localeCompare(b.name));
}

if(value==="rating"){
sorted.sort((a,b)=>
b.rating-a.rating);
}

renderProducts(sorted);
});

document
.querySelectorAll("[data-category]")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const category =
btn.dataset.category;

if(category==="all"){
currentProducts=[...products];
}
else{
currentProducts=
products.filter(
p=>p.category===category
);
}

renderProducts(currentProducts);
});
});

document.querySelector("#themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle(
"dark-mode"
);
});