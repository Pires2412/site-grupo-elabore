const form = document.querySelector('.form-contact')

form.addEventListener('submit', e => {
    e.preventDefault()

    let nome = form.name.value
    const celular = '5522988730115'

    let texto = `Olá, me chamo ${nome} e gostaria de saber mais sobre os serviços da Elabore.`
    texto = encodeURIComponent(texto)

    const url = `https://wa.me/${celular}?text=${texto}`

    window.open(url, "_blank")

})

const btnConsultoria = document.querySelector('.consultoria')

btnConsultoria.addEventListener('click', (e) => {
    let texto = `Olá, gostaria de mais informações sobre a consultoria da Elabore.`
    const celular = '5522988730115'

    texto = encodeURIComponent(texto)

    const url = `https://wa.me/${celular}?text=${texto}`

    window.open(url, "_blank")
})