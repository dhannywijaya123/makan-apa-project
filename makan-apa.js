const database = {
    AA: [
        {name: 'ayam1', id: 'AA1', class: 'AA-A card-styling', img: ''},
        {name: 'ayam2', id: 'AA2', class: 'AA-A card-styling', img: ''},
        {name: 'ayam3', id: 'AA3', class: 'AA-B card-styling', img: ''},
        {name: 'ayam4', id: 'AA4', class: 'AA-B card-styling', img: ''},
        {name: 'ayam5', id: 'AA5', class: 'AA-B card-styling', img: ''},
        {name: 'ayam6', id: 'AA6', class: 'AA-C card-styling', img: ''},
        {name: 'ayam7', id: 'AA7', class: 'AA-C card-styling', img: ''}
    ],
    BB: [
        {name: 'bebek1',  id: 'BB1',  class: 'BB-A card-styling', img: ''},
        {name: 'bebek2',  id: 'BB2',  class: 'BB-A card-styling', img: ''},
        {name: 'bebek3',  id: 'BB3',  class: 'BB-B card-styling', img: ''},
        {name: 'bebek4',  id: 'BB4',  class: 'BB-B card-styling', img: ''},
        {name: 'bebek5',  id: 'BB5',  class: 'BB-B card-styling', img: ''},
        {name: 'bebek6',  id: 'BB6',  class: 'BB-B card-styling', img: ''},
        {name: 'bebek7',  id: 'BB7',  class: 'BB-C card-styling', img: ''},
        {name: 'bebek8',  id: 'BB8',  class: 'BB-C card-styling', img: ''},
        {name: 'bebek9',  id: 'BB9',  class: 'BB-D card-styling', img: ''},
        {name: 'bebek10', id: 'BB10', class: 'BB-D card-styling', img: ''}
    ],
    CC: [
        {name: 'cacing1',  id: 'CC1',  class: 'CC-A card-styling', img: ''},
        {name: 'cacing2',  id: 'CC2',  class: 'CC-A card-styling', img: ''},
        {name: 'cacing3',  id: 'CC3',  class: 'CC-A card-styling', img: ''},
        {name: 'cacing4',  id: 'CC4',  class: 'CC-A card-styling', img: ''},
        {name: 'cacing5',  id: 'CC5',  class: 'CC-B card-styling', img: ''},
        {name: 'cacing6',  id: 'CC6',  class: 'CC-B card-styling', img: ''}
    ]
}

//create selectors
const dropdown =  document.querySelector('#dropdown');
const filters = document.querySelector('#filters');
const display = document.querySelector('#display');
const wishlist = new Set();
const randomButton = document.querySelector('#randomize-button');

//do something when dropdown value is changed
dropdown.addEventListener('change', () => {
    const databaseVal = database[dropdown.value];
    const buttons = document.querySelectorAll('#filters button')
    buttons.forEach(element => {
        element.remove();
    });
    //delete the current elements
    const deleteArr = Array.from(display.children);
    deleteArr.forEach(el => el.remove())
    //add the new elements to the display;
    for (let item of databaseVal) {
        const newDiv = document.createElement('div');
        const newP = document.createElement('p');
        newDiv.setAttribute('class', item.class);
        newDiv.setAttribute('id', item.id);
        if (wishlist.has(newDiv.id)) {
            newDiv.classList.add('green');
        }
        newP.innerText = item.name;
        newDiv.append(newP);
        newDiv.addEventListener('click', (e) => {
            // console.log(e.target, 59);
            if (wishlist.has(e.target.id)) {
                wishlist.delete(e.target.id);
                newDiv.classList.remove('green');
            } else {
                wishlist.add(e.target.id);
                newDiv.classList.add('green');
            }
            console.log(wishlist);
        })
        const newChildren = Array.from(newDiv.children);
        newChildren.forEach(el => {
            el.addEventListener('click', (e) => {
                // console.log(e.target, 59);
                e.stopPropagation();
                if (wishlist.has(e.target.closest('div').id)) {
                    wishlist.delete(e.target.closest('div').id);
                    newDiv.classList.remove('green');
                } else {
                    wishlist.add(e.target.closest('div').id);
                    newDiv.classList.add('green');
                }
                console.log(wishlist);
            })          
        })
        display.append(newDiv);
    }
    //find how many class in a 1st key database
    const tempSet = new Set();
    for (let item of databaseVal) {
        tempSet.add(item.class.substring(0, 4)); 
    }
    //make buttons based on how many classes are there
    // let firstTime = true;
    for (let filter2 of tempSet) {
        const newButton = document.createElement('button');
        newButton.setAttribute('id', filter2);
        newButton.setAttribute('class', filter2);
        newButton.innerText = filter2;
        newButton.addEventListener('click', (e) => {
        const childrenArr = Array.from(display.children);
            childrenArr.forEach(el => {
                if (el.className.substring(0, 4) === filter2) {
                    el.classList.remove('display-off');
                } else {
                    el.classList.add('display-off');
                }
            })
        })
        filters.append(newButton);
    }
})



//insert your code here
// conditional if data < minimum length - Modal appears to notice user to choose again
const minimumLength = 2;
const closeModalButton = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")
const dialog = document.querySelector("dialog")

randomButton.addEventListener("click", function(event) {
    let tempArr = Array.from(wishlist)

    if (tempArr.length < minimumLength) {
        modal.showModal()
    }
})
closeModalButton.addEventListener("click", function(event) {
    modal.close()
})
    
dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close()
    }
    })
