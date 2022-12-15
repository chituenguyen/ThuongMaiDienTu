import { TimePicker } from "antd";
// import $ from 'jquery'
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

// export const T = {
//     url: (url) => url + (url.indexOf('?') === -1 ? '?t=' : '&t=') + new Date().getTime(),


// };
// ['get', 'post', 'put', 'delete'].forEach(method => T[method] = (url, data, success, error) => {
//     if (typeof data === 'function') {
//         error = success;
//         success = data;
//     }
//     $.ajax({
//         url: T.url(url),
//         data,
//         type: method.toUpperCase(),
//         success: response => {
//             if (response.error) {
//                 if (typeof response.error === 'string') response.error = {
//                     message: response.error
//                 };
//                 else if (response.error.constructor === ({}).constructor) {
//                     if (response.error.errorNum) response.error.message = 'Error in Mongoose';
//                 }
//             }
//             success && success(response);
//         },
//         error: (jqXHR, textStatus, errorThrown) => {
//             const data = {
//                 error: {}
//             };
//             if (jqXHR.responseJSON && jqXHR.responseJSON.error) {
//                 if (typeof jqXHR.responseJSON.error === 'string') data.error.message = jqXHR.responseJSON.error;
//                 else if (jqXHR.responseJSON.error.errorNum) data.error.message = 'Error in Mongoose';
//             } else if (jqXHR.responseText) data.error.message = jqXHR.responseText;
//             else if (jqXHR.readyState == 4) {
//                 if (jqXHR.status === 401) data.error.message = 'Không thể truy cập tài nguyên, vui lòng đăng nhập lại.';
//                 if (jqXHR.status === 403) data.error.message = 'Không thể truy cập tài nguyên.';
//                 if (jqXHR.status === 404) data.error.message = 'Không tìm thấy tài nguyên.';
//                 if (jqXHR.status < 500) data.error.message = 'Yêu cầu bị lỗi!';
//                 data.error.message = 'Server gặp lỗi. Hãy liên hệ log người quản trị trang web.';
//             } else if (jqXHR.readyState == 0) data.error.message = 'Mạng có vấn đề, xin hãy kiểm tra lại đường truyền.';
//             else data.error.message = errorThrown;
//             console.error('Ajax (' + method + ' => ' + url + ') has error. Error:', data.error.message || jqXHR);
//             error && error(data);
//         }
//     })
// });

export const subjects = [
    { value: "6384cd6bc3218ac12f6bddea", name: "Toán" },
    { value: "6384da26b876714b22250bc2", name: "Sinh học" },
    { value: "6384da347df393038dc2cc25", name: "Lịch sử" },
    { value: "6384da4510a123657e441b6e", name: "Địa lý" },
    { value: "6384da86d5c4cd042ccbb933", name: "Anh Văn" },
];

export const grades = [
    { value: "637deb268371d38e1eededab", name: "Lớp 1" },
    { value: "637deb2a8371d38e1eededad", name: "Lớp 2" },
    { value: "6384dba84958304d9c54d3e4", name: "Lớp 3" },
    { value: "6384dba84958304d9c54d3e6", name: "Lớp 4" },
    { value: "6384dba84958304d9c54d3e8", name: "Lớp 5" },
    { value: "6384dba84958304d9c54d3ea", name: "Lớp 6" },
    { value: "6384dba84958304d9c54d3ec", name: "Lớp 7" },
    { value: "6384dba84958304d9c54d3ee", name: "Lớp 8" },
    { value: "6384dba84958304d9c54d3f0", name: "Lớp 9" },
    { value: "6384dba84958304d9c54d3f2", name: "Lớp 10" },
    { value: "6384dba84958304d9c54d3f4", name: "Lớp 11" },
    { value: "6384dba84958304d9c54d3f6", name: "Lớp 12" },
];