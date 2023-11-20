let Handlekurv = []
let KjøpKnapp = document.querySelector('.KjøpKnapp')

KjøpKnapp.addEventListener('click', () => {
    console.log('test')
    let ProduktNavn = KjøpKnapp.parentElement.querySelector('h1').innerHTML
    let ProduktFunnet = Handlekurv.find(item => item === ProduktNavn)
console.log(ProduktNavn)
    if(ProduktFunnet === undefined) {
        Handlekurv.push(ProduktNavn)
    }
})