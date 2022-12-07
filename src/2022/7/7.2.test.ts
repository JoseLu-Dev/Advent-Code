import * as path from "path"

import { getSpaceOfSmallestFolderToDelete } from "./7.2"

describe('7.2', () => {

    it('example input', async () => {
        expect(await getSpaceOfSmallestFolderToDelete(path.join('src', '2022', '7', 'input_example.txt'), 70000000, 30000000)).toBe(24933642)
    })

    it('input', async () => {
        await getSpaceOfSmallestFolderToDelete(path.join('src', '2022', '7', 'input.txt'), 70000000, 30000000)
    })
})