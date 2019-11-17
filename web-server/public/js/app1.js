console.log('This is client side java script.')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener( 'submit', (e) => {

e.preventDefault();
const location= search.value
const url='/weather?address='+location+'&unit=1'
        fetch('/weather?address=' + location).then((response) => {
                response.json().then((data) => {
                    console.log(data)
                    if (data.error) {
                        message1.textContent = data.error
                    } else {
                        message1.textContent = data.location
                        message2.textContent = data.forecast
                    }
                })
            })
    }
)