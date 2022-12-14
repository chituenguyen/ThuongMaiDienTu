import { TimePicker } from "antd";

export const API_URL = "http://localhost:8797"

export const listToString = (list) => {
    let str = ""
    list.forEach((item, idx) => {
        if (idx == 0) {
            str += item;
        } else {
            str += ", " + item
        }
    });
    return str
};

export const dateConvert = (dateString) => {
    return dateString.substr(0, 10);
};

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}