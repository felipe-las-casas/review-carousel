
const reviews = [
    {
        name: "João Silva",
        image: 'img/img1.png',
        job: "Designer",
        review: "Duis odio ex, vestibulum nec libero sit amet, suscipit imperdiet nunc. Sed pharetra quam nunc, eu vulputate turpis commodo tempor. Aliquam egestas lacus in lectus."
    },
    {
        name: "Gabriela Pereira",
        image: 'img/img4.png',
        job: "Publicitária",
        review: "Mauris id sem cursus, scelerisque libero vitae, tempus metus. Quisque mauris mi, ullamcorper eget maximus quis, gravida et lectus. Phasellus faucibus vestibulum suscipit. Sed vitae."
    },
    {
        name: "Pedro Sousa",
        image: 'img/img2.png',
        job: "Estagiário",
        review: "Maecenas congue dui id nisi fermentum fermentum. Morbi erat est, elementum eu auctor eget, elementum vel felis. Aliquam pharetra volutpat urna non porta. Etiam sollicitudin."
    },
    {
        name: "Paulo Mendes",
        image: 'img/img3.png',
        job: "Desenvolvedor Mobile",
        review: "Fusce dapibus ipsum sit amet libero facilisis, eu vestibulum nisl malesuada. Nunc dictum sagittis placerat. Curabitur aliquet orci et ultrices scelerisque. Integer sed augue accumsan."
    },
    {
        name: "Marina Oliveira",
        image: 'img/img5.png',
        job: "Desenvolvedora Web",
        review: "Maecenas at facilisis dui, at ultrices magna. Maecenas vel orci ultrices, eleifend mi at, rutrum leo. Curabitur viverra erat ac iaculis mollis. Pellentesque magna nisl."
    }
]

let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let current = 0
let image = document.createElement('img')
document.querySelector('.img').appendChild(image)
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let p = document.querySelector('p')


const elements = () => {
    h2.innerText = reviews[current].name
    h3.innerText = reviews[current].job
    p.innerText = reviews[current].review
    image.src = reviews[current].image
}

window.onload = () => {
    elements()
}

next.addEventListener('click', nextPerson = () => {
    if (current < reviews.length - 1) {
        current = current + 1
    }
    else {
        current = 0
    }
    img = 'img3.png'
    elements()
    
})

prev.addEventListener('click',prevPerson = () => {
    if (current == 0) {
        current = reviews.length - 1
    }
    else {
        current = current - 1
        console.log(reviews.length)
    }
    elements()
    
})

setInterval(() => nextPerson(), 12000);