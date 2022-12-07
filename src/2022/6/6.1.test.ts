import * as path from "path"

import { findMarkerPosition } from "./6.1"

describe('6.2', () => {

    it('example input', async () => {
        expect(await findMarkerPosition(path.join('src', '2022', '6', 'input_example.txt'))).toBe(7)
    })

    it('input', async () => {
        await findMarkerPosition(path.join('src', '2022', '6', 'input.txt'))
    })
})