const observer = new IntersectionObserver(entries => { // Intersection Overserver is a browser API that watched elements and tells when they enter and leave the viewport
  entries.forEach(entry => {
    if (entry.isIntersecting) { // When the element becomes visible
      entry.target.classList.add('visible'); // adds 'visible' class to the img
    }
    else { //when the element is no longer visible
        entry.target.classList.remove('visible');
    }
  });
});


document.querySelectorAll('.fade-on-scroll').forEach(img => { // selects all elements that have the class .fade-on-scroll
  observer.observe(img);
});

// the function for determining the order of the lightbox images

let arr_src = []
let order = [];
let hashmap = {};
let col = [];
let check = [];
function galleryOrder() {
  arr_src = []
  var element = document.getElementsByClassName('grid-item');
  for (const tag of element) {
    const position = tag.getBoundingClientRect();
    arr_src.push([tag.querySelector('img').src, position.x, position.y]);
  }
  order = [];
  hashmap = {};
  col = [];
  check = [];
  for (const [src, x, y] of arr_src) {
    if (!(x in hashmap)) {
      col.push(x);
      hashmap[x] = [[src, y]];
    } else {
      hashmap[x].push([src, y]);
    }
  }
  for (const val of col) {
    check.push(hashmap[val][0]);
  }
  count = [0, 0, 0, 0]
  while (1) {
    let currMin = Infinity
    allFalse = true
    let temp = null
    let src = null
    let y = null
    for (let i = 0; i < check.length; i++) {
      if (!check[i]) {
        continue
      }
      const[localSRC, localY] = check[i]

      if (!localY) {
        continue
      }
      if (localY < currMin) {
        allFalse = false
        temp = [i, check[i]]
        src = localSRC
        y = localY
        currMin = y
      }
    }
    if (allFalse) {
      break
    }
    order.push(src)
    count[temp[0]] += 1
    if (count[temp[0]] >= hashmap[col[temp[0]]].length) {
      check[temp[0]] = false
    } else {
      check[temp[0]] = hashmap[col[temp[0]]][count[temp[0]]]
    }
  }
}

// whenever the document loads or resizes, a new gallery order is created in case x, y changes in the broswer
['load', 'resize'].forEach(event => {
  window.addEventListener(event, galleryOrder);
});

//makes the index-header fade out when the bottom section is reached
window.addEventListener('scroll', () => { 
  const curr_scroll = window.scrollY;
  const vHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const header = document.querySelector(".index-header");
  if (curr_scroll == docHeight - vHeight) {
    header.classList.add('fade-out');
    header.classList.remove('fade-in');
  } else {
    header.classList.remove('fade-out');
    header.classList.add('fade-in');
  }
});

// when the user chooses an image for the lightbox
document.querySelectorAll('.grid-item').forEach(item => {

  item.addEventListener('click', () => {

    const img = item.querySelector('img')
    const src = img.getAttribute('src')
    const lightbox_image_container = document.querySelector('.lightbox-img')
    const lightbox_img = lightbox_image_container.querySelector('img')
    const lightbox = document.querySelector('.lightbox')

    const overlay = document.querySelector('.overlay');

    lightbox_img.src = src

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    lightbox.style.display = 'flex';

    let index = 0;
    for (let [i, val] of order.entries()) { 
      if (val == lightbox_img.src) {
        index = i
        break;
      }
    }
    const right_arrow = document.querySelector('.right-arrow')
    const left_arrow = document.querySelector('.left-arrow')

    right_arrow.addEventListener('click', () => {
      if (index + 1 >= order.length) {
        index = 0
        lightbox_img.src = order[0]
      } else {
        lightbox_img.src = order[index + 1]
        index += 1
      }
    })
    left_arrow.addEventListener('click', () => {
      if (index - 1 < 0) {
        index = order.length - 1
        lightbox_img.src = order[order.length - 1]
      } else {
        lightbox_img.src = order[index - 1]
        index -= 1
      }
    })
    
  })
})

// makes it so the browser behind the lightbox image darkens
document.querySelector('.overlay').addEventListener('click', () => {
    const lightbox = document.querySelector('.lightbox')
    lightbox.style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
    document.body.style.overflow = 'visible'
})

