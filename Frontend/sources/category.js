console.log('sahi hai abhi tak')
document.querySelector('*').style.visibility = 'hidden'
document.getElementById('loder').style.visibility = 'visible'
document.getElementById('loder').classList = 'loder'
document.getElementById('spin').classList = 'spin'


const setPostions = () => {
  console.log('hello brothers')
  let filter = document.getElementById('all_filters')
  let mainDiv = document.getElementById('data')
  filter.onmouseenter = () => {
    filter.style.position = 'static'
    // mainDiv.style.margin = '0px'
    mainDiv.style.position = 'fixed'
  }

  filter.onmouseleave = () => {
    filter.style.position = 'fixed',
      mainDiv.style.position = 'static'
  }
}

const doFilter = () => {
  let People_type = ["Men", "Women", "Boys", "Girls"];
  People_type.forEach((el, i) => {
    let prnt = document.getElementById("people_type");
    let person = document.createElement("div");
    person.addEventListener("click", (el1) => {
      Click_unclick_0(el1, i);
      // console.log(el.target.parentElement.childNodes[0].checked);
    });

    let input = document.createElement("input");
    input.type = "radio";
    input.id = `pType${i}`;
    let label = document.createElement('label')
    let span = document.createElement('span')
    label.classList = 'container'
    span.classList = 'checkmark'
    let pType = document.createElement("span");
    pType.textContent = el;

    label.append(input, span, pType)


    person.append(label);
    prnt.append(person);
  });



  let price_filter = ["500-2000", "2000-6000", "6000-10000"]
  price_filter.forEach((el, i) => {
    let prnt = document.getElementById("price");
    let person = document.createElement("div");
    person.addEventListener("click", (el1) => {
      Click_unclick_001(el1, i);
      // console.log(el.target.parentElement.childNodes[0].checked);
    });

    let input = document.createElement("input");
    input.type = "radio";
    input.id = `prcType${i}`;
    let label = document.createElement('label')
    let span = document.createElement('span')
    label.classList = 'container'
    span.classList = 'checkmark'
    let pType = document.createElement("span");
    pType.textContent = el;

    label.append(input, span, pType)


    person.append(label);
    prnt.append(person);
  });


  function Click_unclick_0(el, i) {
    console.log(el, i);
    el.target.parentElement.childNodes[0].checked = true;
    People_type.forEach((el2, ind) => {
      if (ind != i) {
        document.getElementById(`pType${ind}`).checked = false;
      }
    });
  }


  function Click_unclick_001(el, i) {
    console.log(el, i);
    el.target.parentElement.childNodes[0].checked = true;
    People_type.forEach((el2, ind) => {
      if (ind != i) {
        document.getElementById(`prcType${ind}`).checked = false;
      }
    });
  }

  let concepts = [
    { code: "BASICS", count: 10 },
    { code: "H&M MAN", count: 23 },
    { code: "H&M Move", count: 1 },
    { code: "MODERN CLASSIC", count: 50 },
  ];
  concepts = concepts.sort((a, b) => b.count - a.count);
  concepts.forEach((el, i) => {
    let prnt = document.getElementById("brand");
    let brd = document.createElement("div");
    brd.addEventListener("click", (el1) => {
      Click_unclick_1(el1, i);
      // console.log(el.target.parentElement.childNodes[0].checked);
    });
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = `brand${i}`;
    let brdName = document.createElement("span");
    brdName.textContent = el.code;
    let brdCount = document.createElement("span");
    brdCount.textContent = ` (${el.count})`;

    let label = document.createElement('label')
    let span = document.createElement('span')
    label.classList = 'container'
    span.classList = 'checkmark'

    label.append(input, brdName, brdCount, span)

    brd.append(label);
    prnt.append(brd);
  });
  function Click_unclick_1(el, i) {
    // console.log(el,i);
    // el.target.parentElement.childNodes[0].checked = false;
    let checkBox = el.target.parentElement.childNodes[0]
    if (checkBox.checked) {
      checkBox.checked = false
    } else {
      checkBox.checked = true
    }
  }

  let colorWithNames = [
    { code: 'red_ff45vn', count: 28 },
    { code: 'yellow_ff45vn', count: 38 },
    { code: 'green_ff45vn', count: 18 },
    { code: 'pink_ff45vn', count: 15 },
    { code: 'blue_ff45vn', count: 20 },
    { code: 'green_ff45vn', count: 38 },
    { code: 'white_ff45vn', count: 8 },
    { code: 'purple_ff45vn', count: 23 },
    { code: 'green_ff45vn', count: 18 },
    { code: 'turquoise_ff45vn', count: 25 },
    { code: 'orange_ff45vn', count: 10 },
  ];
  colorWithNames = colorWithNames.sort((a, b) => b.count - a.count);
  colorWithNames.forEach((el, i) => {

    let realCode = el.code.split('_')[0]
    let prnt = document.getElementById("colors");
    let clr = document.createElement("div");
    clr.addEventListener("click", (el1) => {
      Click_unclick_2(el1, i);
      // console.log(el.target.parentElement.childNodes[0].checked);
    });
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = `color${i}`;
    input.style.accentColor = realCode;
    let clrName = document.createElement("span");
    clrName.textContent = realCode;
    let clrCount = document.createElement("span");
    clrCount.textContent = ` (${el.count}) `;


    let label = document.createElement('label')
    let span = document.createElement('span')
    label.classList = 'container'
    span.classList = 'checkmark'

    let circle = document.createElement('span')
    // circle.style.display = 'inlineBlock'
    circle.classList = 'circle'
    circle.style.backgroundColor = realCode
    label.append(input, circle, clrName, clrCount, span)

    clr.append(label);
    prnt.append(clr);
  });

  function Click_unclick_2(el, i) {
    console.log(el, i);

    console.log('hellodsdasf')
    let checkBox = el.target.parentElement.childNodes[0]
    // checkBox.checked = true
    if (checkBox.checked) {
      checkBox.checked = false
      console.log('hello')
    } else {
      checkBox.checked = true
      console.log('by')
    }
  }

}


console.log('sahi aj jaj')
//.............DATA Fetching..........
const fetching = async (value) => {

  let res = await fetch(
    `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=${value}&pagesize=20&currentpage=1&`,
    {
      params: {
        country: "in",
        lang: "en",
      },
      headers: {
        'X-RapidAPI-Key': '682a7ad57emsh9e7018ffbddc7e4p172c38jsnf2c8439c28a3',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    }
  );

  let data = await res.json();
  console.log(data);
  localStorage.setItem("tempData", JSON.stringify(data.results));
  doFilter(data)
  append(data.results);
  document.querySelector('body').style.visibility = 'visible'
  document.getElementById('loder').classList.remove('loder')
  document.getElementById('spin').classList.remove('spin')


  setPostions()

};
// let tempo_data = JSON.parse(localStorage.getItem("tempData")) || [];
// append(tempo_data);
function append(Rdata) {
  //   let Pdata = [
  //     {
  //       image: Rdata[0].images[0].url,

  //       title: Rdata[0].name,
  //       MRP: Math.floor(Rdata[0].price.value * 80.97),
  //       discount: 10,
  //       actual_price: 150,
  //     },
  //     {
  //       image: Rdata[1].images[0].url,

  //       title: Rdata[1].name,
  //       MRP: Math.floor(Rdata[1].price.value * 80.97),
  //       discount: 10,
  //       actual_price: 150,
  //     },
  //     {
  //       image: Rdata[2].images[0].url,

  //       title: Rdata[2].name,
  //       MRP: Math.floor(Rdata[2].price.value * 80.97),
  //       discount: 10,
  //       actual_price: 1503
  //     },
  //   ];

  Rdata.forEach((el, i) => {
    let discnt = Math.floor(Math.random() * 10) + 10;
    let parent = document.getElementById("data");

    let card = document.createElement("div");
    card.className = "card";
    card.addEventListener("click", () => {
      console.log(`working${i}`);
      localStorage.setItem("pro_key", JSON.stringify(el.articleCodes[0]));
      localStorage.setItem("pro_images", JSON.stringify(el.galleryImages));
      let prices = [Math.floor(mrp - mrp / discnt), mrp, discnt];
      localStorage.setItem("prices", JSON.stringify(prices));
      localStorage.setItem("brand", JSON.stringify(el.brandName))

      window.location.href = "product.html";
    });
    let image = document.createElement("img");
    image.src = el.images[0].url;

    let title = document.createElement("h3");
    title.textContent = el.name;

    let prices = document.createElement("div");
    prices.className = "prices";
    let MRP = document.createElement("p");
    let mrp = Math.floor(el.price.value * 80.97);
    MRP.textContent = "Rs." + mrp + " ";
    MRP.style.textDecoration = "line-through";
    let discount = document.createElement("p");
    discount.textContent = discnt + "% OFF";
    discount.style.color = "red";
    let actual_price = document.createElement("h4");
    actual_price.textContent = "Rs:" + Math.floor(mrp - mrp / discnt) + "  ";
    prices.append(actual_price, MRP, discount);

    card.append(image, title, prices);
    parent.append(card);
  });
}


console.log('helflo')
let fetchCategory = localStorage.getItem('category')
console.log('hello')
fetching(fetchCategory);
