const buttonshare = document.querySelector('button')
const widgetshare = document.querySelector('.wrappershare')

buttonshare.addEventListener('click', shareAppear)

function shareAppear(){
    widgetshare.style.display = 'flex'
}
