const database = {
    RiceandNoodle: {
        RiceandNoodle1: { name: "Nasi Goreng", id: "RiceandNoodle1", class: "RiceandNoodle-nasi card-styling", img: "" },
        RiceandNoodle2: { name: "Nasi Padang", id: "RiceandNoodle2", class: "RiceandNoodle-nasi card-styling", img: "" },
        RiceandNoodle3: { name: "Nasi Uduk",   id: "RiceandNoodle3", class: "RiceandNoodle-nasi card-styling", img: "" },
        RiceandNoodle4: { name: "Nasi Kuning", id: "RiceandNoodle4", class: "RiceandNoodle-nasi card-styling", img: "" },
        RiceandNoodle5: { name: "Nasi Liwet",  id: "RiceandNoodle5", class: "RiceandNoodle-nasi card-styling", img: "" },
        RiceandNoodle6: { name: "Mie Goreng",  id: "RiceandNoodle6", class: "RiceandNoodle-mie card-styling",  img: "" },
        RiceandNoodle7: { name: "Mie Ayam",    id: "RiceandNoodle7", class: "RiceandNoodle-mie card-styling",  img: "" },
        RiceandNoodle8: { name: "Mie Aceh",    id: "RiceandNoodle8", class: "RiceandNoodle-mie card-styling",  img: "" },
        RiceandNoodle9: { name: "Mie Jawa",    id: "RiceandNoodle9", class: "RiceandNoodle-mie card-styling",  img: "" },
        RiceandNoodle10: { name: "Mie Bakso",  id: "RiceandNoodle10", class: "RiceandNoodle-nasimie card-styling", img: "" }
    },
    Salads: {
        Salads1: { name: "Gado-Gado",   id: "Salads1", class: "Salads-Indonesian card-styling", img: "" },
        Salads2: { name: "Karedok",     id: "Salads2", class: "Salads-Indonesian card-styling", img: "" },
        Salads3: { name: "Pecel",       id: "Salads3", class: "Salads-Indonesian card-styling", img: "" },
        Salads4: { name: "Gudeg Jogja", id: "Salads4", class: "Salads-Indonesian card-styling", img: "" },
        Salads5: { name: "Gudeg Solo",  id: "Salads5", class: "Salads-Indonesian card-styling", img: "" },
        Salads6: { name: "Caesar Salad",  id: "Salads6", class: "Salads-American card-styling", img: "" },
        Salads7: { name: "Olive Oil Salad",  id: "Salads7", class: "Salads-American card-styling", img: "" },
        Salads8: { name: "Pasta Salad",  id: "Salads8", class: "Salads-American card-styling", img: "" }
    },
    Soups: {
        Soups1: { name: "Soto Ayam",       id: "Soups1", class: "Soups-Soto card-styling", img: "" },
        Soups2: { name: "Soto Betawi",     id: "Soups2", class: "Soups-Soto card-styling", img: "" },
        Soups3: { name: "Soto Medan",      id: "Soups3", class: "Soups-Soto card-styling", img: "" },
        Soups4: { name: "Soto Ambengan",   id: "Soups4", class: "Soups-Soto card-styling", img: "" },
        Soups5: { name: "Soto Banjar",     id: "Soups5", class: "Soups-Soto card-styling", img: "" },
        Soups6: { name: "Sop Ayam",        id: "Soups6", class: "Soups-Eastern card-styling", img: "" },
        Soups7: { name: "Tom Yum",         id: "Soups7", class: "Soups-Eastern card-styling", img: "" },
        Soups8: { name: "Mushroom Soup",   id: "Soups8", class: "Soups-Eastern card-styling", img: "" }
    },
    Grilled: {
        Grilled1: { name: "Satay Ayam",   id: "Grilled1", class: "Grilled-Satay card-styling", img: "" },
        Grilled2: { name: "Satay Kambing",id: "Grilled2", class: "Grilled-Satay card-styling", img: "" },
        Grilled3: { name: "Ayam Bakar",   id: "Grilled3", class: "Grilled-Main card-styling",  img: "" },
        Grilled4: { name: "Ikan Bakar",   id: "Grilled4", class: "Grilled-Main card-styling",  img: "" },
        Grilled5: { name: "Steak",        id: "Grilled5", class: "Grilled-Main card-styling",  img: "" },
        Grilled6: { name: "Satay Lilit",  id: "Grilled6", class: "Grilled-Satay card-styling", img: "" },
        Grilled7: { name: "Satay Padang", id: "Grilled7", class: "Grilled-Satay card-styling", img: "" },
        Grilled8: { name: "Satay Taichan",id: "Grilled8", class: "Grilled-Satay card-styling", img: "" },
        Grilled9: { name: "Satay Kerang", id: "Grilled9", class: "Grilled-Satay card-styling", img: "" }
    },
    Desserts: {
        Desserts1: { name: "Es Teler",     id: "Desserts1", class: "Desserts-Es card-styling",      img: "" },
        Desserts2: { name: "Cendol",       id: "Desserts2", class: "Desserts-Es card-styling",      img: "" },
        Desserts3: { name: "Bubur Sumsum", id: "Desserts3", class: "Desserts-Jajanan card-styling", img: "" },
        Desserts4: { name: "Kue Lapis",    id: "Desserts4", class: "Desserts-Jajanan card-styling", img: "" },
        Desserts5: { name: "Klepon",       id: "Desserts5", class: "Desserts-Jajanan card-styling", img: "" }
    },
    CitizenChoose: {
        CitizenChoose1: { name: "Pempek Palembang",    id: "CitizenChoose1", class: "CitizenChoose-Popular card-styling", img: "" },
        CitizenChoose2: { name: "Pempek Kapal Selam",  id: "CitizenChoose2", class: "CitizenChoose-Popular card-styling", img: "" },
        CitizenChoose3: { name: "Nasi Goreng Kampung", id: "CitizenChoose3", class: "CitizenChoose-Popular card-styling", img: "https://i.ibb.co/y82pdZw/Nasi-goreng-kampung.png" },
        CitizenChoose4: { name: "Nasi Goreng Seafood", id: "CitizenChoose4", class: "CitizenChoose-Popular card-styling", img: "" },
        CitizenChoose5: { name: "Rendang Sapi",        id: "CitizenChoose5", class: "CitizenChoose-Hype card-styling", img: "" },
        CitizenChoose6: { name: "Rendang Ayam",        id: "CitizenChoose6", class: "CitizenChoose-Hype card-styling", img: "" },
        CitizenChoose7: { name: "Martabak Telur",      id: "CitizenChoose7", class: "CitizenChoose-Hype card-styling", img: "https://i.ibb.co/P5F7Mh0/Martabak-Telur.png" }
    }
};

//create selectors
const dropdown =  document.querySelector('#dropdown');
const filters = document.querySelector('#filters');
const display = document.querySelector('#display');
const wishlist = new Set();
const randomButton = document.querySelector('#randomize-button');

//create option buttons according to the database
for (let key in database) {
    const option = document.createElement('option');
    option.setAttribute('value', key);
    option.innerText = key;
    dropdown.append(option);
}

//do something when dropdown value is changed
dropdown.addEventListener('change', () => {
    const databaseVal = database[dropdown.value];
    //delete the current buttons
    const buttons = document.querySelectorAll('#filters button')
    buttons.forEach(element => {
        element.remove();
    });
    //delete the current elements
    const deleteArr = Array.from(display.children);
    deleteArr.forEach(el => el.remove())
    //add the new elements to the display;
    for (let item in databaseVal) {
        const newDiv = document.createElement('div');
        const newP = document.createElement('p');
        newDiv.setAttribute('class', databaseVal[item].class);
        newDiv.setAttribute('id', databaseVal[item].id);
        if (wishlist.has(newDiv.id)) {
            newDiv.classList.add('green');
        }
        newP.innerText = databaseVal[item].name;
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
    for (let item in databaseVal) {
        const tempArrClass = databaseVal[item].class.split(' ');
        const tempArrClass2 = tempArrClass[0].split('-');
        tempSet.add(tempArrClass2[1]); 
    }
    //make buttons based on how many classes are there
    for (let filter2 of tempSet) {
        const newButton = document.createElement('button');
        newButton.setAttribute('id', filter2);
        newButton.setAttribute('class', filter2);
        newButton.innerText = filter2;
        newButton.addEventListener('click', () => {
        const childrenArr = Array.from(display.children);
            childrenArr.forEach(el => {
                const tempArrClass = el.className.split(' ');
                const tempArrClass2 = tempArrClass[0].split('-');
                // tempSet.add(tempArrClass2[1]);        
                // console.log(el.className, 144);
                // console.log(filter2, 145);
                if (tempArrClass2[1] === filter2) {
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
