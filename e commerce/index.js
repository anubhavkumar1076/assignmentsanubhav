var mensData = [
    {
      image_url:
        "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL320_.jpg",
      name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
      price: "1170",
      strikedoffprice: "2599",
    },
    {
      image_url:
        "https://m.media-amazon.com/images/I/91EWDo4+-XL._AC_UL320_.jpg",
      name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/I/71GYZvQqVLL._AC_UL320_.jpg",
      name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
      price: 945,
      strikedoffprice: 2099,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/I/81EqA--jXFL._AC_UL320_.jpg",
      name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
      price: 399,
      strikedoffprice: 799,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/I/618Wek95laS._AC_UL320_.jpg",
      name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/I/613BLg6lZ8L._AC_UL320_.jpg",
      name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
      price: 1440,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/I/61L61b1uOhL._AC_UL320_.jpg",
      name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: 1999,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/I/619SqQW1NYL._AC_UL320_.jpg",
      name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
      price: 769,
      strikedoffprice: 1099,
    },
  ];
  document.querySelector("#cart").addEventListener("click",function(event){
    window.location.href="cart.html";
  });
  let arr=JSON.parse(localStorage.getItem("data"))||[];
mensData.map(function (el,i){
    let box=document.createElement("div");
    let product_img=document.createElement("img");
    product_img.setAttribute("src",el.image_url);
    let entername=document.createElement("h3");
    entername.innerText=el.name;
    let enterprice=document.createElement("p");
    enterprice.innerText=el.price;
    let btn=document.createElement("button");
    btn.innerText="Add to cart";
    btn.addEventListener("click",function(){
       arr.push(el);
       localStorage.setItem("data",JSON.stringify(arr)); 
    })
    box.append(product_img,entername,enterprice,btn);
    document.querySelector("#container").append(box);
})