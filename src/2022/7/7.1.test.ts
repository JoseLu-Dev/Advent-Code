import * as path from "path"

import { getSpaceTaken } from "./7.1"

describe('7.1', () => {

    it('example input', async () => {
        expect(await getSpaceTaken(path.join('src', '2022', '7', 'input_example.txt'))).toBe(95437)
    })

    it('input', async () => {
        await getSpaceTaken(path.join('src', '2022', '7', 'input.txt'))
    })
})