

  // Multi-Filterable Gallery Script Below
  const multiGallery = document.querySelectorAll('.filterable-gallery-multi')
  
  console.log(gallery)
  
  multiGallery.forEach(section => {
  
  
  const filterButtons = section.querySelectorAll('.filter-buttons')
  
  const gridItems = section.querySelectorAll('.grid-items')
  
  console.log(filterButtons,gridItems)
  
  function multiFilterGallery() {
  
      console.log(this.innerHTML)
    if ( this.innerHTML == 'All' ) {
  
  
  filterButtons.forEach(button => {
  button.classList.remove('active')
  });
  
  
  this.classList.add('active')
  
  let target = this.innerHTML.replace(' ','-')
  
  gridItems.forEach(image => {
      image.classList.remove('hidden')
  })
  } else {
      let someButtonsActive = false
      this.classList.toggle('active')
      for (let i = 1; i < filterButtons.length; i++) {
          if (filterButtons[i].classList.contains('active')){
              someButtonsActive = true
          }
  
      }
      if (someButtonsActive) {
          console.log('some of the button are active')
          filterButtons[0].classList.remove('active')
  // and - any menu item that has all of our active buttons
  
  
  // gridItems.forEach(image => {
  //     image.classList.remove('hidden')
  // })
  
  // filterButtons.forEach(button => {
  //     if (button.classList.contains('active')) {
  //         let currentFilter = button.innerHTML
  //         console.log(currentFilter)
  //  gridItems.forEach(image => {
  //     if(image.classList.contains(currentFilter)) {
  //         console.log(image.classList, currentFilter,image.classList.contains(currentFilter))
  
  //     } else {
  //         image.classList.add('hidden')
  //     }
  
  //     })
  // }});
  
  //  end and
  
  
  // or - if it contains any of the filters, the menu item will appear
  
  gridItems.forEach(image => {
      image.classList.add('hidden')
  })
  
  filterButtons.forEach(button => {
      if (button.classList.contains('active')) {
          let currentFilter = button.innerHTML.replace(' ','-')
          console.log(currentFilter)
   gridItems.forEach(image => {
      if(image.classList.contains(currentFilter)) {
          console.log(image.classList, currentFilter,image.classList.contains(currentFilter))
          
          image.classList.remove('hidden')
      } else {
      }
  
      })
  }});
   
  // end of or
  
  
      } else {
          filterButtons[0].classList.add('active')
          gridItems.forEach(image => {
      image.classList.remove('hidden')
  })
      }
  }
  }
  
  filterButtons.forEach(button => {
  button.addEventListener('click', multiFilterGallery)
  });
  
  });
  