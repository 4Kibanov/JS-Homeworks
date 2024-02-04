export function containsJavascript(inputString) {
    const regex = /javascript/i;
    return regex.test(inputString);
}