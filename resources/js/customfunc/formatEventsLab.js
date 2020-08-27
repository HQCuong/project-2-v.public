export default function formatEventsLab(arr) {
    var result_arr = [];
    for (const each in arr) {
        for (let i = 0; i < arr[each].length; i++) {
            var clone_obj = {};
            clone_obj.start =
                arr[each][i].ngay + `T${arr[each][i].gio_bat_dau}`;
            clone_obj.end = arr[each][i].ngay + `T${arr[each][i].gio_ket_thuc}`;
            clone_obj.title = !arr[each][i].ma_lop
                ? `${arr[each][i].hoat_dong}`
                : `${arr[each][i].ma_lop} - ${arr[each][i].ma_mon_hoc}`;
            result_arr.push(clone_obj);
        }
    }
    return result_arr;
}
