export const API_URL = "http://localhost:8797"

export const listToString = (list) => {
    return list.map((item, idx) => {
        if (idx == 0) {
            return item;
        }
        return ", " + item;
    });
};

export const dateConvert = (dateString) => {
    return dateString.substr(0, 10);
};