const drawerTogglers = document.querySelectorAll('.drawer-toggler')
const drawer = document.querySelector('.drawer');
const drawerOverlay = document.querySelector('.drawer-overlay');
const dropdowns = document.querySelectorAll('.dropdown');
const subDropdowns = document.querySelectorAll('.sub-dropdown');
const modalButton = document.querySelectorAll('.modal-button');
const modal = document.querySelector('.pop-up-modal');

modalButton.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        modal.classList.toggle('modal-open');
        document.body.classList.toggle('no-scroll');

    })
})

function toggleDrawer(toggler){

    const isExpanded = toggler.getAttribute('aria-expanded') === 'true';
      
    document.body.classList.toggle('no-scroll', !isExpanded);

    drawer.classList.toggle('show', !isExpanded);
    drawerTogglers.forEach((toggler) => {
        toggler.setAttribute('aria-expanded', String(!isExpanded));
    })
}

drawerTogglers.forEach(function(toggler){
    toggler.addEventListener('click', (e)=>{
        toggleDrawer(toggler);
    });
})

drawerOverlay.addEventListener('click',(e)=>{
    toggleDrawer(drawerTogglers[0])
})

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
            if(!dropdown.classList.contains('modal-dropdown')){
                dropdown.classList.remove('active')
            }
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


document.addEventListener('click',(e)=>{
    const target = e.target;
    const dropdowns = document.querySelectorAll('.modal-dropdown.dropdown');

    dropdowns.forEach((dropdown) => {
        const dropdownButton = dropdown.querySelector('.dropdown-button');
        const dropdownContent = dropdown.querySelector('.dropdown-menu');

        if(!dropdownButton.contains(target) && !dropdownContent.contains(target) && dropdown.classList.contains('active')){
            dropdown.classList.remove('active');
        }
    })
    
})
