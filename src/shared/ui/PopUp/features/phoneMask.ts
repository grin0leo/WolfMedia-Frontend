export function formatPhone(input: string): string {
    const value = input.replace(/\D+/g, "");
    const numberLength = 11;

    let result = "";

    const prefixNumber = (str: string) => {
        if (str === "7") return "7 (";
        if (str === "8") return "+7 (";
        if (str === "9") return "7 (9";
        return "7 (";
    };

    if (input.includes("+8") || input.startsWith("8")) {
        result = "";
    } else {
        result = "+";
    }

    for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
            case 0:
                result += prefixNumber(value[i]);
                continue;
            case 4:
                result += ") ";
                break;
            case 7:
                result += "-";
                break;
            case 9:
                result += "-";
                break;
        }
        result += value[i];
    }

    return result;
}
