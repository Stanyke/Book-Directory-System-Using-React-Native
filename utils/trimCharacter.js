const trimCharacter = (string) => {
    var length = 90;
    var trimmedString = string.length > length ? string.substring(0, length - 3) : string;
    return trimmedString
}

export default trimCharacter