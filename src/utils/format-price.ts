export function FormatCents(valueInCents: number){
    const formatedValue = valueInCents / 100
    return formatedValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}