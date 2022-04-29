const { map, filter, reduce, someFunction, log } = require("./index")

test("map returns a transformed array of items when given an array of multiple items", () => {
    const array = [1, 2, 3]
    const transform = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(6)

    const transformedArray = map(array, transform)

    expect(transformedArray).toEqual([2, 4, 6])
})