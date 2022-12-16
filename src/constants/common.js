// export const API_URL = "http://localhost:8797";
export const API_URL = "https://tmdtgiasu-production.up.railway.app";

export const listToString = (list) => {
  if (!list) return "";
  let str = "";
  list.forEach((item, idx) => {
    if (idx == 0) {
      str += item;
    } else {
      str += ", " + item;
    }
  });
  return str;
};

export const dateConvert = (dateString) => {
  if (!dateString) return ""
  return dateString.substr(0, 10);
};

export const numberWithCommas = (x) => {
  if (!x) return ""
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const subjects = [
  { value: "6384cd6bc3218ac12f6bddea", name: "Toán" },
  { value: "6384da26b876714b22250bc2", name: "Sinh học" },
  { value: "6384da347df393038dc2cc25", name: "Lịch sử" },
  { value: "6384da4510a123657e441b6e", name: "Địa lý" },
  { value: "6384da86d5c4cd042ccbb933", name: "Anh văn" },
  { value: "639b78f76cfff53f3dede20e", name: "Vật lý" },
  { value: "639b78f86cfff53f3dede20f", name: "Hóa học" }

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
