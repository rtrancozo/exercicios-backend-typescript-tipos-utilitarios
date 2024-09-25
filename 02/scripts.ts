type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string
    rua: string
    bairro: string
    cidade: string
    estado: string

}

// type NovoCarrinho = {
//     item: Item,
//     qtd: number,
//     desconto: number,
//     frete: number,
//     endereco: {
//         cep:string
//         rua:string
//         bairro:string
//         cidade:string
//         estado:string
//     },
//     tipoTransacao: Lowercase<'credito' | 'Debito'>,
//     cartao: Cartao
// }

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
    endereco: Endereco,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
}


