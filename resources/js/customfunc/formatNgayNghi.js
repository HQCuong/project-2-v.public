export default function formatNgayNghi(obj) {
    var arr_ngay_nghi = [];
    for (const each in obj) {
        for (let i = 0; i < obj[each].length; i++) {
            var clone_obj = {
                date: each,
                ...obj[each][i],
                btn:
                    each +
                    obj[each][i].ca[0].ma_ca +
                    Math.floor(Math.random() * 10000)
            };
            arr_ngay_nghi.push(clone_obj);
        }
    }
    return arr_ngay_nghi.reverse();
}
