
export class NotImplementError extends Error {
    constructor() {
        super("Not implement.")

        Object.setPrototypeOf(this.message, NotImplementError.prototype)
    }
}

export let TODO = "Not implement."