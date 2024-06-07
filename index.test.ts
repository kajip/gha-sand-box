import { hello } from "./index"

test("hogeを渡したらhogeに挨拶", () => {
    const result = hello("hoge")
    expect(result).toBe("Hello, World!")
})
