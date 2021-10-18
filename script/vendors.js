
let allVendorsArray = [
  {
    image: 'Rectangle_229 1',
    text: 'Nathaniel Tetteh.'
  },
  {
    image: 'Rectangle_101',
    text: 'Sam Kiefte.'
  },
  {
    image: 'Rectangle_102 1',
    text: 'Dave Mock.'
  },
  {
    image: 'image 51 1',
    text: 'Cottonbro'
  },
  {
    image: 'image 52',
    text: 'Anderson Peter'
  },
  {
    image: 'image 53 1',
    text: 'Dave Mock'
  },
  {
    image: 'image 47',
    text: 'Julia More.'
  },
  {
    image: 'image 49',
    text: 'Brit Sylas.'
  },
  {
    image: 'image 50',
    text: 'Eric Emma.'
  },
  {
    image: 'Niagara',
    text: 'Niagara.'
  },
  {
    image: 'Mama_Emma',
    text: 'Mama Emma.'
  },
  {
    image: 'Toa',
    text: 'Toa Heftiba.'
  },
  {
    image: 'image 54',
    text: 'Chef John'
  },
  {
    image: 'image 55',
    text: 'Chef Esther'
  },
  {
    image: 'image 56',
    text: 'Chef Chima'
  },
  {
    image: 'image 72',
    text: 'Soso Bakery'
  },
  {
    image: 'image 71',
    text: 'Enis Bakery'
  },
  {
    image: 'image 70',
    text: 'Ema Bakery'
  },
  {
    image: 'image 57',
    text: 'Gaby Tender DJ'
  },
  {
    image: 'image 58',
    text: 'Keegan Cheeks DJ'
  },
  {
    image: 'image 59',
    text: 'Moris DJ'
  },
  {
    image: 'image 62',
    text: 'Emy DJ'
  },
  {
    image: 'image 61',
    text: 'Mama Emma Chef'
  },
  {
    image: 'image 60',
    text: 'Freezy DJ'
  },
  {
    image: 'image 64',
    text: 'Emys Place '
  },
  {
    image: 'image 65 1',
    text: 'Eggsotic Events'
  },
  {
    image: 'image 66',
    text: 'Garden Events Decorations'
  },
  {
    image: 'image 67',
    text: 'KC Events'
  },
  {
    image: 'image 64',
    text: 'CFT Events'
  },
  {
    image: 'image 69 1',
    text: 'Glory Events'
  }
]

let allVendorsSection = document.getElementById('all-vendors');
let outputs = '';


allVendorsArray.forEach(element => {
  outputs += `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 " >
        <div class="card mx-2 my-3" style="width: 18rem;">
          <img src="./images/${element.image}.png" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bold dark-blue-color">${element.text}</h5>
          </div>
        </div>
      </div>
  `
  allVendorsSection.innerHTML = outputs
});