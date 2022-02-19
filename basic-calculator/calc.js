const n1 = document.getElementById('n1');
const opr = document.getElementById('opr');
const n2 = document.getElementById('n2');
const btn = document.querySelector('.button');

const spanNum1 = document.querySelector('.span-num1');
const spanNum2 = document.querySelector('.span-num2');
const spanOpr = document.querySelector('.span-opr');
const spanEnd = document.querySelector('.span-end');

btn.addEventListener('click',comput)

function comput() {
    value1 = n1.value;
    value2 = n2.value;

    switch (opr.value) {
        case '+':
            spanNum1.innerHTML = value1
            spanNum2.innerHTML = value2
            spanEnd.innerHTML = value1 + value2;
            spanOpr.innerHTML = '+'
            break;
        case '-':
            spanNum1.innerHTML = value1
            spanNum2.innerHTML = value2
            spanEnd.innerHTML = value1 - value2;
            spanOpr.innerHTML = '-'
            break;
        case '*':
            spanNum1.innerHTML = value1
            spanNum2.innerHTML = value2
            spanEnd.innerHTML = value1 * value2;
            spanOpr.innerHTML = '*'
            break;
        case '/':
            spanNum1.innerHTML = value1
            spanNum2.innerHTML = value2
            spanEnd.innerHTML = value1 / value2;
            spanOpr.innerHTML = '/'
            break;
    
        default:
            alert('please make a valid selection')
            break;
    }
}
