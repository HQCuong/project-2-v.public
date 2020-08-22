import { forIn } from "lodash";

export default function formatNgayNghi(obj) {
    var arr_ngay_nghi = [];
    for (const each in obj) {
        var clone_obj = {
            mode: "span",
            label: each,
            html: false
        };
        // console.log(obj[each]);
        clone_obj.children = obj[each];
        arr_ngay_nghi.push(clone_obj);
    }
    return arr_ngay_nghi;
}
