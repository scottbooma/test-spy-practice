const { map, filter, reduce, log, someFunction, } = require("./index")

test("map returns a transformed array of items when given an array of multiple items", () => {
    const array = [1, 2, 3]
    const transform = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(6)

    const transformedArray = map(array, transform)

    expect(transformedArray).toEqual([2, 4, 6])
})

test("filter returns an array of matching values when given an array of multiple items", () => {
    const array = [1, 2, 2, 3]
    const predicate = jest.fn()
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)

    const filteredArray = filter(array, predicate)

    expect(filteredArray).toEqual([2, 2])
})

test("reduce returns a single value when given an array of multiple items", () => {
    const array = [1, 2, 3]
    const reducer = jest.fn(() => 6)
    const initial = 0

    const reducedValue = reduce(array, reducer, initial)

    expect(reducedValue).toEqual(6)
})

test("log calls a function when given a string", () => {
    const mockConsole = jest.spyOn(console, "log")

    log("message")

    expect(mockConsole).toHaveBeenCalledWith("LOG: message")
})

test("someFunction returns a key/value pair when given a string and promise", async () => {
    const someString = "id"
    const somePromise = jest.fn().mockResolvedValue(28)

    const returnValue = someFunction(someString, somePromise)

    await expect(returnValue).resolves.toBe("id: 28")
})