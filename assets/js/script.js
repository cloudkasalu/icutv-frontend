const drawerTogglers = document.querySelectorAll('.drawer-toggler')
const drawer = document.querySelector('.drawer');
const dropdowns = document.querySelectorAll('.dropdown');
const subDropdowns = document.querySelectorAll('.sub-dropdown');
// const dropdownMenu = document.querySelectorAll('.dropdown-menu');



drawerTogglers.forEach(function(toggler){

    toggler.addEventListener('click', (e) => {
        console.log("Hello")
        const isExpanded = toggler.getAttribute('aria-expanded') === 'true';
      
        document.body.classList.toggle('no-scroll', !isExpanded);
    
        drawer.classList.toggle('show', !isExpanded);
        drawerTogglers.forEach((toggler) => {
            toggler.setAttribute('aria-expanded', String(!isExpanded));
        })
      });
})



// dropdownButton.addEventListener('click', () => {
//   const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';
//   dropdownButton.setAttribute('aria-expanded', !isExpanded);
//   dropdownMenu.classList.toggle('show-menu');
// });


// document.addEventListener('click', (event) => {
//   if (!dropdownButton.contains(event.target)) {
//     dropdownButton.setAttribute('aria-expanded', 'false');
//     dropdownMenu.classList.remove('show-menu');
//   }
// });

dropdowns.forEach((dropdown)=>{
    let button = dropdown.querySelector('.dropdown-button');

    button.addEventListener('click', (e)=>{
        if(dropdown.classList.contains('sub-dropdown')){
            return
        }

        if(dropdown.querySelector('.sub-dropdown .active')){
            dropdown.querySelector('.sub-dropdown .active').classList.remove('active')
            return
        }

        if(dropdown.classList.contains('active')){
            dropdown.classList.remove('active')
            return
        }

        dropdowns.forEach((dropdown)=>{
            dropdown.classList.remove('active')
        })
        
        dropdown.classList.add('active')
    })
})

subDropdowns.forEach((dropdown)=>{
    let button = dropdown.querySelector('.dropdown-button');

    button.addEventListener('click', (e)=>{

        if(dropdown.classList.contains('active')){
            dropdown.classList.remove('active')
            return
        }

        subDropdowns.forEach((dropdown)=>{
            dropdown.classList.remove('active')
        })
        
        dropdown.classList.add('active')
    })
})

