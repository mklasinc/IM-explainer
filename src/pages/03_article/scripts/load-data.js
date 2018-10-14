import $ from 'jquery';

export default function (filepath) {

    return $.ajax({
        url      : filepath,
        type     : 'GET',
        dataType : 'json'
    });
};


// error    : function (err) {
//     console.log("something went wrong");
// },
// success : function (data) {
//     console.log(data);
//     // g_chapters = data.all_chapters;
//     return JSON.parse(data);
// }
