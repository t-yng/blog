---
to: src/usecases/<%= Name %>/<%= Name %>Impl.ts
---
import { <%= Name %> } from './<%= Name %>';

export class <%= Name %>Impl implements <%= Name %> {
    constructor() {}

    invoke() {
        throw new Error('Method not implemented.')
    }
}
