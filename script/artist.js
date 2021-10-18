let artistArray = [
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
    image: 'image 47',
    text: 'Julia More '
  },
  {
    image: 'image 52',
    text: 'Anderson Peter'
  },
  {
    image: 'image 50',
    text: 'Eric Emma.'
  },
  {
    image: 'image 49',
    text: 'Brit Sylas.'
  },
  {
    image: 'image 78',
    text: 'Eugene James.'
  },
  {
    image: 'image 79',
    text: 'Julia Jane.'
  }
]

let artistSection = document.getElementById('artists');
let result = '';


artistArray.forEach(element => {
  result += `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 " >
        <div class="card mx-2 my-3" style="width: 18rem;">
          <img src="./images/${element.image}.png" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bold dark-blue-color">${element.text}</h5>
          </div>
        </div>
      </div>
  `
  artistSection.innerHTML = result
});