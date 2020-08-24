export default function formatNgayNghi(obj) {
    console.log(obj);
    var arr_ngay_nghi = [];
    for (const each in obj) {
        for (let i = 0; i < obj[each].length; i++) {
            var clone_obj = {
                date: each,
                ...obj[each][i]
            };
            arr_ngay_nghi.push(clone_obj);
        }
    }
    return arr_ngay_nghi;
}
