const hb = document.querySelector('#hamburgerBtn')
const pw = document.querySelector('#pageWrapper')

hb.addEventListener('click', () =>{
  pw.classList.toggle('moveOver')
});

import {hotels} from "./hoteldata.js";
console.log(hotels)

const cards =document.querySelector('#cards')

hotels.forEach(hotel =>{
  const mySection = document.createElement('section')

  const theImage = document.createElement("img")
  theImage.src = `images/${hotel.photo}`
  theImage.alt = hotel.name

  const theName = document.createElement("h2")
  theName.textContent = hotel.name

  const theAddress = document.createElement("address")
  theAddress.textContent = hotel.address

  const thePhone = document.createElement("a")
  thePhone.textContent = hotel.phone
  thePhone.href = `tel:${hotel.phone}`

  mySection.appendChild(theImage)
  mySection.appendChild(theName)
  mySection.appendChild(theAddress)
  mySection.appendChild(thePhone)
  cards.appendChild(mySection)

})

