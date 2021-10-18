let topCategoryArray = [
  {
    image: 'Rectangle_102',
    text: 'Artists'
  },
  {
    image: 'image 65',
    text: 'Event Decorators'
  },
  {
    image: 'Niagara1',
    text: 'Caterers'
  },
  {
    image: 'image 51',
    text: 'DJs'
  },
  {
    image: 'image 74',
    text: 'Cakes'
  },
  {
    image: 'image 53',
    text: 'Chefs'
  },
  {
    image: 'image 76',
    text: 'MCs'
  },
  {
    image: 'image 75',
    text: 'Bridals'
  }
]

let topCategorySection = document.getElementById('top-category');
let html = '';


topCategoryArray.forEach(element => {
  html += `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 " >
        <div class="card mx-2 my-3" style="width: 18rem;">
          <img src="./images/${element.image}.png" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bold dark-blue-color">${element.text}</h5>
          </div>
        </div>
      </div>
  `
  topCategorySection.innerHTML = html
});



let topVendorsArray = [
  {
    image: 'Rectangle_102',
    text: 'Cakes'
  },
  {
    image: 'image 69',
    text: 'Glory Event'
  },
  {
    image: 'Mama_emma1',
    text: 'Mama Emma'
  },
  {
    image: 'image 77',
    text: 'Jelos Cakes'
  }
]

let topVendorsSection = document.getElementById('top-vendors');
let output = '';


topVendorsArray.forEach(element => {
  output += `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 " >
        <div class="card mx-2 my-3" style="width: 18rem;">
          <img src="./images/${element.image}.png" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.text}</h5>
          </div>
        </div>
      </div>
  `
  topVendorsSection.innerHTML = output
});