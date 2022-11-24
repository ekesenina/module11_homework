import { getMonth } from "./index.js";
describe('get month name', ()=>{
    it("should define january", () => {
        expect(getMonth(1)).toBe(`Январь`);
    }),
    it("should define june", () => {
        expect(getMonth(6)).toBe(`Июнь`);
    }),
    it("should define june", () => {
        expect(getMonth(9)).toBe(`Сентябрь`);
    }),
    it("should define december", () => {
        expect(getMonth(12)).toBe(`Декабрь`);
    })
})