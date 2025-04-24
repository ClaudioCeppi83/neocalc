export function utilsFunctions() {
    /**
     * Sanitizes the input to allow only numbers, operators, parentheses, and the dot.
     * @param {string} input - The input string to sanitize.
     * @returns {string} The sanitized input.
     */
    export function sanitizeInput(input) {
        const allowed = /^[0-9+\-*/().]+$/;
        let sanitizedInput = '';

        for (let char of input) {
            if (allowed.test(char)) {
                sanitizedInput += char;
            }
        }

        return sanitizedInput;
    }
}