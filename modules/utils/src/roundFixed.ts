export function roundFixed(num: number, after: number): number {
    return Number.parseFloat(num.toFixed(after))
}