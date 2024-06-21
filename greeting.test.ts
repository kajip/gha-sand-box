import { good_morning } from "./greeting"

test("hogeを渡したらhogeに朝の挨拶", () => {
    const result = good_morning("hoge")
    expect(result).toBe("Good Morning, hoge")
})
