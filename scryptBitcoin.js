// const fetchURL = async (URL) => {
//     const response = await fetch(URL)
//     const json = await response.json()
//     return json
// }
// console.log(fetchURL('https://blockchain.info/ticker'))


    const fetchURL = async (URL) => {
        const response = await fetch(URL)
        const json = await response.json()
        return json
    }
    (fetchURL(`https://blockchain.info/ticker`))
        .then((BRL) => {
            const element = document.getElementById('preco')
            element.innerHTML = (`Preço do Bitcoin Hoje: ${BRL.BRL.buy}`)
        })



