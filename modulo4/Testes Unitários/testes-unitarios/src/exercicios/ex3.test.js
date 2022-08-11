import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("checar itens duplicados", () => {
        const checar = checaItensDuplicados([1,2,1])
        expect(checar).toEqual(true)
    })
    test("checar itens duplicados", () => {
        const checar = checaItensDuplicados(["a", "p", "a"])
        expect(checar).toEqual(false)
    })
    test("checar itens duplicados", () => {
        const checar = checaItensDuplicados([5,5,3,6,5])
        expect(checar).toEqual(true)
    })
    test("checar itens duplicados", () => {
        const checar = checaItensDuplicados([1,2,1])
        expect(checar).toEqual(true)
    })
});
