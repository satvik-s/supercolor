export function generate24BitBackground(
    input: [number, number, number],
): string {
    return generate24BitStyle(input, 'BG');
}

export function generate24BitForeground(
    input: [number, number, number],
): string {
    return generate24BitStyle(input, 'FG');
}

export function generate8BitBackground(input: number): string {
    return generate8BitStyle(input, 'BG');
}

export function generate8BitForeground(input: number): string {
    return generate8BitStyle(input, 'FG');
}

function generate8BitStyle(input: number, styleType: 'BG' | 'FG'): string {
    isValidInput(input);

    if (styleType === 'BG') {
        return '48;5;' + input;
    }
    return '38;5;' + input;
}

function generate24BitStyle(
    input: [number, number, number],
    styleType: 'BG' | 'FG',
): string {
    isValidInput(input[0]);
    isValidInput(input[1]);
    isValidInput(input[2]);

    const calculatedStyle = input[0] + ';' + input[1] + ';' + input[2];

    if (styleType === 'BG') {
        return '48;2;' + calculatedStyle;
    }
    return '38;2;' + calculatedStyle;
}

function isValidInput(input: number): void {
    if (input < 0 || input > 255) {
        throw new Error('incorrect input to generate style');
    }
}
