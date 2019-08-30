    let texto = true
    console.log(texto)

    console.log('Elementos Verdadeiros:')
    console.log(!!'a')
    console.log(!!' ')
    console.log(!!3)
    console.log(!![])
    console.log(!!{})

    console.log('Elementos Falsos:')
    console.log(!!'')
    console.log(!!'0')
    console.log(!!NaN)
    console.log(!!null)
    console.log(!!undefined)

    // Diferença entre Null e Undefined
    let teste
    console.log(teste)
    let teste1 = null
    console.log(teste1)

    console.log('testando ou (or)')
    console.log(!!('' || null || true))