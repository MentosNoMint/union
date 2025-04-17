export function RemToPx(rem:number) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}