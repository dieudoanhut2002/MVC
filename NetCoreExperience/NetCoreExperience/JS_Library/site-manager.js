/**
 * Tự chuyển trang khi thay đổi giá trị số lượng phần tử trên một trang
 */
$('#PageSize').on('change', function () {
    location = this.value;
});

$(document).ready(function () {
    //Set theme select2 cho tất cả các thẻ select có thuộc tính multiple
    $("select").each(function () {
        $(this).select2({
            theme: 'bootstrap-5'
        });
    });

    $("#sidebarToggle").click(function (event) {
        event.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', $('body').hasClass('sb-sidenav-toggled'));
    });
});