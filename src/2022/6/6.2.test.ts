import * as path from "path"

import { findMarkerPositionSecondPart } from "./6.2"

describe('should return sum of priorities of repeated items', () => {

    it('example input', async () => {
        expect(await findMarkerPositionSecondPart(path.join('src', '2022', '6', 'input_example.2.txt'))).toBe(29)
    })

    it('input', async () => {
        await findMarkerPositionSecondPart(path.join('src', '2022', '6', 'input.txt'))
    })
})

