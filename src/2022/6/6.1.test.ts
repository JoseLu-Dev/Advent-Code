import * as path from "path"

import { findMarkerPosition } from "./6.1"

describe('should return sum of priorities of repeated items', () => {

    it('example input', async () => {
        expect(await findMarkerPosition(path.join('src', '2022', '6', 'input_example.txt'))).toBe(7)
    })

    it('input', async () => {
        await findMarkerPosition(path.join('src', '2022', '6', 'input.txt'))
    })
})