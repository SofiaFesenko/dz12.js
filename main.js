let inp = document.querySelector('.inp')
let week = document.querySelector('.dt')
let month = document.querySelector('.pr')
let day = document.querySelector('.kd')
let color = document.querySelector('.k')

let equals = document.querySelector('.e')
let category = document.querySelector('.category')
let numbers = document.querySelectorAll('.numb')

week.addEventListener('click', () => {
    switch (inp.value.toLowerCase()) {
        case "понеділок":         
            alert('робочий день')
            break;
        case "вівторок" :
            alert('робочий день')
            break;
        case "середа" :
            alert('робочий день')
            break;
        case "четвер" :
            alert('робочий день')
            break;
        case "п'ятниця" :
            alert('робочий день')
            break;
        case "субота" :
            alert('вихідний')
            break;
        case "неділя" :
            alert('вихідний')
            break;
        default:
            alert('не існує')
            break;
    }
})

month.addEventListener('click', () => {
    switch (inp.value) {
        case '1':
        case '2':
        case '12':       
            alert('зима')
            break;
        case '3':
        case '4':
        case '5':
            alert('весна')
            break;
        case '6':
        case '7':
        case '8':    
            alert('літо')
            break;
        case '9':
        case '10':
        case '11':    
            alert('осінь')
            break;
        default:
            alert('не існує')
            break;
    }
})

day.addEventListener('click', () => {
    switch (inp.value) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':      
            alert('31 день')
            break;
        case '4':
        case '6':
        case '9':
        case '11':     
            alert('30 днів')
            break;
        case '2':    
            alert('28/29')
            break;
        default:
            alert('не існує')
            break;
    }
})

color.addEventListener('click', () => {
    switch (inp.value.toLowerCase()) {
        case 'червоний':      
            alert('стоп')
            break;
        case 'зелений':     
            alert('йти')
            break;
        case 'жовтий':    
            alert('чекати')
            break;
        default:
            alert('інше')
            break;
    }
})

equals.addEventListener('click', () => {
    switch (category.value) {
        case '+':
            alert(Number(numbers[0].value) + Number(numbers[1].value))
            break;
        case '-':
            alert(Number(numbers[0].value) - Number(numbers[1].value))
            break;
        case '*':
            alert(Number(numbers[0].value) * Number(numbers[1].value))
            break;
        case '/':
            if (Number(numbers[1].value) !== 0) {
                alert(Number(numbers[0].value) / Number(numbers[1].value))
            }
            else {
                alert('ділення на 0')
            }
            break;
        default:
            break;
    }
})