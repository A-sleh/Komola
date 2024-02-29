// nav for mobil phone 
const btn = document.querySelector('#burger__menu') ;
const burgerMenu = document.querySelector('#burger__menu').children ;
const list = document.querySelector('#nav__list') ;


btn.onclick = () => {
    list.classList.toggle('open');
    list.classList.toggle('close');
    
    btn.classList.toggle('justify-around');
    btn.classList.toggle('justify-center');

    burgerMenu[1].classList.toggle('hidden') ;
    burgerMenu[0].classList.toggle('-rotate-45') ;
    burgerMenu[0].classList.toggle('translate-y-[3px]') ;
    burgerMenu[2].classList.toggle('rotate-45') ;

}
// end nav 

// -------------------------------------------------------------------------------------------------

// our projects 

let projectsList = document.querySelector('#projects-list').children ;
let projectsImges = document.querySelector('#projects-imges').children ;

for(let index = 0 ; index < projectsList.length ; ++ index ) {
    projectsList[index].onclick = () => { 
        removeClassActiveAll() ;
        projectsList[index].classList.add('active') ;
        const tuypOfProject = projectsList[index].dataset.type ;
        for(let index = 0 ; index < projectsImges.length ; ++ index ) {
            if(projectsImges[index].dataset.type === tuypOfProject || tuypOfProject === 'All' ) {
                projectsImges[index].classList.toggle('hidden') ;
            }
        }
    }
}

function removeClassActiveAll() {
    for(let index = 0 ; index < projectsList.length ; ++ index ) {
        if(projectsList[index].classList.contains('active') ) {
            projectsList[index].classList.remove('active') ;
        }
    }
    for(let index = 0 ; index < projectsImges.length ; ++ index ) {
        projectsImges[index].classList.add('hidden') ;
    }
}
// end our projects

// -------------------------------------------------------------------------------------------------

// slider

const slides = document.querySelector('#slider').children ;
const politsContainer = document.querySelector('#polits') ;
const classComponentPloit = 'w-[10px] h-[10px] border border-sky-300 rounded-full transition-all duration-300' ;

// add ploits to container
for(let i = 0 ; i < slides.length ; ++ i ) {
    let div = document.createElement('div') ;
    div.setAttribute('class',classComponentPloit);
    if( !i ) {
        div.classList.add('pol-active') ;
    }
    politsContainer.appendChild(div) ;
    slides[i].classList.add('translate-x-['+(100*i)+'%]') ;
}

// set active pol 
const pol = politsContainer.children ;
for(let i = 0 ; i < pol.length ; ++ i ) {
    pol[i].onclick = () => {
        removeActive() ;
        pol[i].classList.add('pol-active') ;
        
        setSlidePosition(i) ;
    }
}

// function to set slide position 
function setSlidePosition(curr) {

    for(let i = curr - 1 ; i >= 0 ; -- i ) {
        let val = -100;
        const oldPostion = findDis(i) ;
        slides[i].classList.remove(`translate-x-[${oldPostion}%]`) ;
        slides[i].classList.add(`translate-x-[${val}%]`) ;
        val = val - 100 ;
    }

    const oldPostion = findDis(curr) ;
    slides[curr].classList.remove(`translate-x-[${oldPostion}%]`) ;
    slides[curr].classList.add(`translate-x-[${0}%]`) ;

    for(let i = curr + 1 ; i < slides.length ; ++ i ) {
        let val = 100;
        const oldPostion = findDis(i) ;
        slides[i].classList.remove(`translate-x-[${oldPostion}%]`) ;
        slides[i].classList.add(`translate-x-[${val}%]`) ;
        val += 100 ;
    }
}

// function find value of translate
function findDis(i) {
    let val = 0 ;
    while( true ) {
        if(slides[i].classList.contains(`translate-x-[${val}%]`) ) {
            return val ;
        }else if (slides[i].classList.contains(`translate-x-[${-val}%]`)){
            return -val ;
        }
        val += 100 ;
    }
}

// function remove active class
function removeActive() {
    for(let i = 0 ; i < pol.length ; ++ i ) {
        if( pol[i].classList.contains('pol-active') ) {
            pol[i].classList.remove('pol-active') ;
            return ;
        }
    }
}

// wase made by Asleh developer 
// end slider



// test case 
const CardsContainer = document.querySelector('#cardCont').children ;
let n = CardsContainer.length ; 
const middelCard = document.querySelector('.mid') ;
let PX , clicked = false , curr = n / 2 ;

middelCard.onmousedown = (e) => { 
    clicked = true ;
    PX = e.clientX;
};

middelCard.mousemove = (e) => {
    if( clicked ) {
        let NPX = e.clientX ;
        if( NPX > PX ) {
            curr = ( curr + 1 ) % n ;

        }else {
            curr = ( curr - 1  + n ) % n ;

        }
        clicked = false ;
    }
}

