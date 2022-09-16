let park1 = document.querySelector(".park1");
let park2 = document.querySelector(".park2");
let park3 = document.querySelector(".park3");
let park4 = document.querySelector(".park4");
let park5 = document.querySelector(".park5");
let park6 = document.querySelector(".park6");
let park7 = document.querySelector(".park7");
let park8 = document.querySelector(".park8");
let park9 = document.querySelector(".park9");
let park10 = document.querySelector(".park10");
let park11= document.querySelector(".park11");
let park12 = document.querySelector(".park12");
let truckpark1 = document.querySelector(".Truck1");
let truckpark2 = document.querySelector(".Truck2");
let truckpark3 = document.querySelector(".Truck3");
let truckpark4 = document.querySelector(".Truck4");
let truckpark5 = document.querySelector(".Truck5");
let truckpark6 = document.querySelector(".Truck6");
let truckpark7 = document.querySelector(".Truck7");
let truckpark8 = document.querySelector(".Truck8");
let container = document.querySelector(".container");
let book = document.querySelector(".book");





let buttons = Array.from(document.querySelectorAll('button'));
buttons.push(book);

buttons.map( buttons => {
        buttons.addEventListener('click', (e) => {
         switch (e.target.innerText) {
            case "Book slot 1 here":
                park1.classList.add('presscolor');
                alert('Your seletion has been booked');
                park1.innerText = "Booked"
                break;
             case "Book slot 2 here":
                    park2.classList.add('presscolor');
                    alert('Your seletion has been booked');
                    park2.innerText = "Booked"
                    break;
            case "Book slot 3 here":
                park3.classList.add('presscolor');
                alert('Your seletion has been booked');
                park3.innerText = "Booked"
                break;
            case "Book slot 4 here":
                park4.classList.add('presscolor');
                alert('Your seletion has been booked');
                park4.innerText = "Booked"
                break;
            case "Book slot 5 here":
                park5.classList.add('presscolor');
                alert('Your seletion has been booked');
                park5.innerText = "Booked"
                break;
            case "Book slot 6 here":
                park6.classList.add('presscolor');
                alert('Your seletion has been booked');
                park6.innerText = "Booked"
                break;
            case "Book slot 7 here":
                park7.classList.add('presscolor');
                alert('Your seletion has been booked');
                park7.innerText = "Booked"
                break;
            case "Book slot 8 here":
                park8.classList.add('presscolor');
                alert('Your seletion has been booked');
                park8.innerText = "Booked"
                break;
            case "Book slot 9 here":
                park9.classList.add('presscolor');
                alert('Your seletion has been booked');
                park9.innerText = "Booked"
                break;
            case "Book slot 10 here":
                park10.classList.add('presscolor');
                alert('Your seletion has been booked');
                park10.innerText = "Booked"
                break;
            case "Book slot 11 here":
                park11.classList.add('presscolor');
                alert('Your seletion has been booked');
                park11.innerText = "Booked"
                break;
            case "Book slot 12 here":
                park12.classList.add('presscolor');
                alert('Your seletion has been booked');
                park12.innerText = "Booked"
                break;
            case "Book Truck slot 1":
                truckpark1.classList.add('presscolor');
                    alert('Your seletion has been booked');
                    truckpark1.innerText = "Booked"
                    break;
            case "Book Truck slot 2":
                    truckpark2.classList.add('presscolor');
                    alert('Your seletion has been booked');
                    truckpark2.innerText = "Booked"
                    break;
            case "Book Truck slot 3":
                truckpark3.classList.add('presscolor');
                    alert('Your seletion has been booked');
                    truckpark3.innerText = "Booked"
                    break;        
            case "Book Truck slot 4":
                truckpark4.classList.add('presscolor');
                    alert('Your seletion has been booked');
                    truckpark4.innerText = "Booked"
                    break;
            case "Book Truck slot 5":
                    truckpark5.classList.add('presscolor');
                    alert('Your seletion has been booked');
                    truckpark5.innerText = "Booked"
                    break;
            case "Book Truck slot 6":
                     truckpark6.classList.add('presscolor');
                     alert('Your seletion has been booked');
                     truckpark6.innerText = "Booked"
                    break;
            case "Book Truck slot 7":
                    truckpark7.classList.add('presscolor');
                    alert('Your seletion has been booked');
                    truckpark7.innerText = "Booked"
                    break;
            case "Book Truck slot 8":
                    truckpark8.classList.add('presscolor');
                    alert('Your seletion has been booked');
                    truckpark8.innerText = "Booked"
                    break;
            case "BOOK A SLOT":
                    container.style.display = "block"
            default:
                break;
         }

        });  

});