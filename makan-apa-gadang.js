const database = {
    "Rice&Noodle" : {
        "Rice&Noodle-1": { name: "Nasi Goreng", id: "Rice&Noodle-1", class: "Rice&Noodle-Nasi card-styling",  img: "https://i.ibb.co/9nPTNM5/Nasi-Goreng.png" },
        "Rice&Noodle-2": { name: "Nasi Padang", id: "Rice&Noodle-2", class: "Rice&Noodle-Nasi card-styling",  img: "https://i.ibb.co/fS5yMwv/Nasi-Padang.png" },
        "Rice&Noodle-3": { name: "Nasi Uduk",   id: "Rice&Noodle-3", class: "Rice&Noodle-Nasi card-styling",  img: "https://i.ibb.co/SRJWH8f/Nasi-Uduk.png" },
        "Rice&Noodle-4": { name: "Nasi Kuning", id: "Rice&Noodle-4", class: "Rice&Noodle-Nasi card-styling",  img: "https://i.ibb.co/WpZ1ypR/Nasi-Kuning.png" },
        "Rice&Noodle-5": { name: "Nasi Liwet",  id: "Rice&Noodle-5", class: "Rice&Noodle-Nasi card-styling",  img: "https://i.ibb.co/ZYzNyjS/Nasi-Liwet.png" },
        "Rice&Noodle-6": { name: "Mie Goreng",  id: "Rice&Noodle-6", class: "Rice&Noodle-Mie card-styling",   img: "https://i.ibb.co/kmrzbrC/Mie-Goreng.png" },
        "Rice&Noodle-7": { name: "Mie Ayam",    id: "Rice&Noodle-7", class: "Rice&Noodle-Mie card-styling",   img: "https://i.ibb.co/sH3WCJ5/Mie-Ayam.png" },
        "Rice&Noodle-8": { name: "Mie Aceh",    id: "Rice&Noodle-8", class: "Rice&Noodle-Kuah card-styling",  img: "https://i.ibb.co/HnX0jBY/Mie-Aceh.png" },
        "Rice&Noodle-9": { name: "Mie Jawa",    id: "Rice&Noodle-9", class: "Rice&Noodle-Mie card-styling",   img: "https://i.ibb.co/fN8rSjr/Mie-Jawa.png" },
        "Rice&Noodle-10": { name: "Mie Bakso",  id: "Rice&Noodle-10", class: "Rice&Noodle-Kuah card-styling", img: "https://i.ibb.co/bNftSJF/Mie-Bakso.png" }
    },
    Salads: {
        "Salads-1": { name: "Gado-Gado",    id: "Salads-1", class: "Salads-Indonesian card-styling",  img: "https://i.ibb.co/q5910kb/Gado-gado.png" },
        "Salads-2": { name: "Karedok",      id: "Salads-2", class: "Salads-Indonesian card-styling",  img: "https://i.ibb.co/pJph6nR/Karedok.png" },
        "Salads-3": { name: "Pecel",        id: "Salads-3", class: "Salads-Indonesian card-styling",  img: "https://i.ibb.co/wrMYzWx/Pecel.png" },
        "Salads-4": { name: "Gudeg Jogja",  id: "Salads-4", class: "Salads-Traditional card-styling", img: "https://i.ibb.co/sFkx8Bm/Gudeg-Jogja.png" },
        "Salads-5": { name: "Gudeg Solo",   id: "Salads-5", class: "Salads-Traditional card-styling", img: "https://i.ibb.co/FBQ8ZJJ/Gudeg-Solo.png" },
        "Salads-6": { name: "Caesar Salad", id: "Salads-6", class: "Salads-American card-styling",    img: "https://i.ibb.co/S6gdwkD/image.png" },
        "Salads-7": { name: "Green Salad",  id: "Salads-7", class: "Salads-American card-styling",    img: "https://i.ibb.co/NLMgv6m/image.png" },
        "Salads-8": { name: "Pasta Salad",  id: "Salads-8", class: "Salads-American card-styling",    img: "https://i.ibb.co/bK5732v/image.png" }
    },
    Soups: {
        "Soups-1": { name: "Soto Ayam",     id: "Soups-1", class: "Soups-Fresh card-styling",   img: "https://i.ibb.co/2h7SGSw/Soto-Ayam.png" },
        "Soups-2": { name: "Soto Betawi",   id: "Soups-2", class: "Soups-Fresh card-styling",   img: "https://i.ibb.co/PC0F9Bs/Soto-Betawi.png" },
        "Soups-3": { name: "Soto Medan",    id: "Soups-3", class: "Soups-Soto card-styling",    img: "https://i.ibb.co/1ryMP5h/Soto-Medan.png" },
        "Soups-4": { name: "Soto Ambengan", id: "Soups-4", class: "Soups-Soto card-styling",    img: "https://i.ibb.co/s2hs7RF/Soto-Ambengan.png" },
        "Soups-5": { name: "Soto Banjar",   id: "Soups-5", class: "Soups-Soto card-styling",    img: "https://i.ibb.co/hZ2jZRK/Soto-Banjar.png" },
        "Soups-6": { name: "Sop Ayam",      id: "Soups-6", class: "Soups-Eastern card-styling", img: "https://i.ibb.co/BNzqJq0/Sop-Ayam.png" },
        "Soups-7": { name: "Tom Yum",       id: "Soups-7", class: "Soups-Eastern card-styling", img: "https://i.ibb.co/gJGQLHj/Tomyum.png" },
        "Soups-8": { name: "Mushroom Soup", id: "Soups-8", class: "Soups-Eastern card-styling", img: "https://i.ibb.co/TLC6npH/Mushroom-Soup.png" }
    },
    Grilled: {
        "Grilled-1": { name: "Satay Ayam",    id: "Grilled-1", class: "Grilled-Satay card-styling", img: "https://i.ibb.co/YPCcH7W/Sate-Ayam.png" },
        "Grilled-2": { name: "Satay Kambing", id: "Grilled-2", class: "Grilled-Satay card-styling", img: "https://i.ibb.co/19N9dXJ/Sate-Kambing.png" },
        "Grilled-3": { name: "Ayam Bakar",    id: "Grilled-3", class: "Grilled-Main card-styling",  img: "https://i.ibb.co/gdNzXNd/Ayam-Bakar.png" },
        "Grilled-4": { name: "Ikan Bakar",    id: "Grilled-4", class: "Grilled-Main card-styling",  img: "https://i.ibb.co/ChXkTc4/Ikan-Bakar.png" },
        "Grilled-5": { name: "Steak",         id: "Grilled-5", class: "Grilled-Main card-styling",  img: "https://i.ibb.co/Z8BnYwM/Steak.png" },
        "Grilled-6": { name: "Satay Lilit",   id: "Grilled-6", class: "Grilled-Hits card-styling",  img: "https://i.ibb.co/TmXQn6Y/Sate-Lilit.png" },
        "Grilled-7": { name: "Satay Padang",  id: "Grilled-7", class: "Grilled-Satay card-styling", img: "https://i.ibb.co/3k9zjs2/Sate-Padang.png" },
        "Grilled-8": { name: "Satay Taichan", id: "Grilled-8", class: "Grilled-Hits card-styling",  img: "https://i.ibb.co/KzdNFGK/Sate-Taichan.png" },
        "Grilled-9": { name: "Satay Kerang",  id: "Grilled-9", class: "Grilled-Hits card-styling",  img: "https://i.ibb.co/3R9M8KS/Sate-Kerang.png" }
    },
    Desserts: {
        "Desserts-1": { name: "Es Teler",       id: "Desserts-1", class: "Desserts-Es card-styling",      img: "https://i.ibb.co/6s7MktR/es-teler.png" },
        "Desserts-2": { name: "Cendol",         id: "Desserts-2", class: "Desserts-Es card-styling",      img: "https://i.ibb.co/kBBSYmG/cendol.png" },
        "Desserts-3": { name: "Bubur Sumsum",   id: "Desserts-3", class: "Desserts-Jajanan card-styling", img: "https://i.ibb.co/y4s1d4M/bubur-sumsum.png" },
        "Desserts-4": { name: "Kue Lapis",      id: "Desserts-4", class: "Desserts-Jajanan card-styling", img: "https://i.ibb.co/PZfzXTG/kue-lapis.png" },
        "Desserts-5": { name: "Klepon",         id: "Desserts-5", class: "Desserts-Jajanan card-styling", img: "https://i.ibb.co/4gXN528/klepon.png" },
        "Desserts-6": { name: "Churros",        id: "Desserts-6", class: "Desserts-Jajanan card-styling", img: "https://i.ibb.co/whNcpLg/image.png" },
        "Desserts-7": { name: "Loukemedes",     id: "Desserts-7", class: "Desserts-Jajanan card-styling", img: "https://i.ibb.co/0Yp5XnJ/image.png" },
        "Desserts-8": { name: "Ice Cream Boba", id: "Desserts-8", class: "Desserts-Jajanan card-styling", img: "https://i.ibb.co/hYvQpr9/image.png" }
    },
    CitizenChoose: {
        "CitizenChoose-1": { name: "Pempek Palembang",    id: "CitizenChoose-1", class: "CitizenChoose-Spicy card-styling", img: "https://i.ibb.co/QYL0XBc/Pempek-Palembang.png" },
        "CitizenChoose-2": { name: "Pempek Kapal Selam",  id: "CitizenChoose-2", class: "CitizenChoose-Spicy card-styling", img: "https://i.ibb.co/r6qRvZP/Pempek-Kapal-Selam.png" },
        "CitizenChoose-3": { name: "Nasi Goreng Kampung", id: "CitizenChoose-3", class: "CitizenChoose-Popular card-styling", img: "https://i.ibb.co/y82pdZw/Nasi-goreng-kampung.png" },
        "CitizenChoose-4": { name: "Nasi Goreng Seafood", id: "CitizenChoose-4", class: "CitizenChoose-Popular card-styling", img: "https://i.ibb.co/0C1xvBK/Nasi-Goreng-Seafood.png" },
        "CitizenChoose-5": { name: "Rendang Sapi",        id: "CitizenChoose-5", class: "CitizenChoose-Hype card-styling", img: "https://i.ibb.co/3swRRh8/Rendang-Sapi.png" },
        "CitizenChoose-6": { name: "Rendang Ayam",        id: "CitizenChoose-6", class: "CitizenChoose-Hype card-styling", img: "https://i.ibb.co/9tx7dM9/Rendang-Ayam.png" },
        "CitizenChoose-7": { name: "Martabak Telur",      id: "CitizenChoose-7", class: "CitizenChoose-Hype card-styling", img: "https://i.ibb.co/P5F7Mh0/Martabak-Telur.png" }
    }
};

//create selectors
const dropdown = document.querySelector('.dropdown');
const filters = document.querySelector('#filters');
const display = document.querySelector('#display');
const wishlist = new Set();
const randomButton = document.querySelector('#randomize-button');
const menu = dropdown.querySelector('.menu');

// create option buttons according to the database
for (let key in database) {
    const list = document.createElement('li');
    list.setAttribute('value', key);
    list.innerText = key;
    menu.append(list);
}

//dropdown section
const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('i');
const options = dropdown.querySelectorAll('.menu li');
const selected = dropdown.querySelector('.selected');
select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('iRotate');
    menu.classList.toggle('menu-open');
})
options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        dropdown.setAttribute('value', option.innerText);
        select.classList.remove('select-clicked');
        caret.classList.remove('iRotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
        })
        option.classList.add('active');
    })
})


//do something when dropdown value is changed
options.forEach(option => option.addEventListener('click', (e) => {
    const databaseVal = database[dropdown.getAttribute('value')];
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
        newDiv.setAttribute('class', databaseVal[item].class);
        newDiv.setAttribute('id', databaseVal[item].id);
        if (wishlist.has(newDiv.id)) {
            newDiv.classList.add('green');
        }
        const newImg = document.createElement('img');
        newImg.setAttribute('src', databaseVal[item].img);
        const newDivChildren = document.createElement('div');
        newDivChildren.setAttribute('class', 'card-info');
        const newP = document.createElement('p');
        newP.innerText = databaseVal[item].name;
        const newIcon = document.createElement('i');
        newIcon.setAttribute('class', 'fa-solid fa-circle-check');
        newIcon.setAttribute('style', 'color: #ffffff;');
        newDivChildren.append(newP);
        newDivChildren.append(newIcon);
        newDiv.append(newImg);
        newDiv.append(newDivChildren);
        newDiv.addEventListener('click', (e) => {
            if (wishlist.has(newDiv.id)) {
                wishlist.delete(newDiv.id);
                newDiv.classList.remove('green');
            } else {
                const counterWishlist = Array.from(wishlist);
                if (counterWishlist.length === 5) {
                    const modal = document.querySelector("#max")
                    modal.showModal()
                    const closebutton = document.querySelector("#closemax")
                    closebutton.addEventListener("click", function(event) {
                        modal.close()
                    })
                    const dialog = document.querySelector("#max")
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
                    } else {  
                        wishlist.add(newDiv.id);
                        newDiv.classList.add('green');
                    }
                }
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
        console.log(tempSet);
        
        let firstTime = true;
        //make buttons based on how many classes are there
        for (let filter2 of tempSet) {
            const newButton = document.createElement('button');
            newButton.setAttribute('id', filter2);
            newButton.setAttribute('class', filter2);
            newButton.innerText = filter2;
            newButton.addEventListener('click', (e) => {
                if (firstTime) {
                    firstTime = false
                    e.target.classList.add("selectedButton")
                } else {
                    let arrayButton = document.querySelectorAll("#filters button")
                    for (let i = 0; i < arrayButton.length; i++) {
                        if (arrayButton[i].id === e.target.id) {
                            arrayButton[i].classList.add("selectedButton")
                        } else {
                            arrayButton[i].classList.remove("selectedButton")
                        }
                    }
                }
                const childrenArr = Array.from(display.children);
                childrenArr.forEach(el => {
                    const tempArrClass = el.className.split(' ');
                    const tempArrClass2 = tempArrClass[0].split('-');
                    if (tempArrClass2[1] === filter2) {
                        el.classList.remove('display-off');
                    } else {
                        el.classList.add('display-off');
                    }
                })
            })
            filters.append(newButton);
        }
}))

//insert your code here
// conditional if data < minimum length - Modal appears to notice user to choose again
const minimumLength = 2;
const closeModalButton = document.querySelector("[data-close-modal]")
const modal = document.querySelector("#min")
const dialog = document.querySelector("dialog")
    
randomButton.addEventListener("click", function(event) {
    let tempArr = Array.from(wishlist)
    
    if (tempArr.length < minimumLength) {
        modal.showModal()
    } else {
        //remove all element/data in display section
        display.setAttribute('class', 'randomizeActivated');
        display.removeAttribute("id")
        const arrFilter = Array.from(filters.children);
        const arrDisplay = Array.from(display.children);
        dropdown.remove();
        console.log(arrDisplay);
        arrFilter.forEach(el => el.remove());
        arrDisplay.forEach(el => el.remove());
        randomButton.remove();

        //display element from wishlist
        for (let id of wishlist) {
        const tempArr3 = id.split('-');
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', database[tempArr3[0]][id].class);
        newDiv.setAttribute('id', database[tempArr3[0]][id].id);
        const newImg = document.createElement('img');
        newImg.setAttribute('src', database[tempArr3[0]][id].img);
        const newDivChildren = document.createElement('div');
        newDivChildren.setAttribute('class', 'card-info');
        const newP = document.createElement('p');
        newP.innerText = database[tempArr3[0]][id].name;
        const newIcon = document.createElement('i');
        newIcon.setAttribute('class', 'fa-solid fa-circle-check');
        newIcon.setAttribute('style', 'color: #ffffff;');
        newDivChildren.append(newP);
        newDivChildren.append(newIcon);
        newDiv.append(newImg);
        newDiv.append(newDivChildren);
        display.append(newDiv);
        }

        setTimeout(() => {
            const contents = document.querySelectorAll('.card-styling');
            console.log(contents);
            
            let delay = 1000;
            let timerCounter = 0;
            let previousNum;

            (function loop () {
                let randomNum;
                while (true) {
                    randomNum = Math.floor(Math.random()*contents.length);
                    if (randomNum !== previousNum) {break}
                }
                contents[randomNum].style.border = "1px solid #333";
                if (previousNum !== undefined) {
                    contents[previousNum].style.border = "none";
                }
                previousNum = randomNum;
                if (delay >= 400) {
                    delay -= 135;
                } else if (delay >= 100) {
                    delay -= 30;
                }
                timerCounter += delay;
                console.log(randomNum);
                if (timerCounter >= 5999) {
                    return
                }
                setTimeout(loop, delay)
            })();
        }, 1000)
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