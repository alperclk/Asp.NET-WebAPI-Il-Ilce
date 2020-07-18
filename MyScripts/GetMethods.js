$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/api/IlIlce/GetIl',
        content: "application/json",
        dataType: "json",
        success: function (data) {
            var formOption = "<option selected>İl Seçiniz</option>";
            $.each(data, function (i, item) {
                formOption += "<option value='" + item.sehir_key + "'>" + item.sehir_title + "</option>";
            });
            $("#citySelect").html(formOption);
        }

    });
    
});


function GetCity() {
    var selectedId = $("#citySelect").val();

    $.ajax({
        url: '/api/IlIlce/GetIlce',
        content: "application/json;",
        type: 'GET',
        data: { id: selectedId },
        success: function (data) {

            var formOption = "<option selected>İlçe Seçiniz</option>";
            $.each(data, function (i, item) {
                formOption += "<option value='" + item.ilce_key + "'>" + item.ilce_title + "</option>";
            });
            $("#tShipSelect").html(formOption);
        }
    });


}