$(".forms").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    var form_data = $(this).serialize();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: href,
        data: form_data,
        success: function (response) {
            if(response.status == "success"){
            alert("Успешно!");
            } else{
                alert ("Не успешно: " + response.message);
            }
        },
        error: function () {
            alert("Такое сообщение от вас уже существует. Создайте нечто новое)");
        }
    });
});

$("body").on("submit", "#form-popup", function(e){
    e.preventDefault();
    $.ajax({
        url: $(this).attr("action"),
        type: "POST",
        dataType: "json",
        data: $(this).serialize(),
        success: function (response) {
            if(response.status == "success"){
                alert("Успешно!");
                return false;
            } else{
                alert ("Не успешно: " + response.message);
                return false;
            }
        },
        error: function () {
            alert("Такое сообщение от вас уже существует. Создайте нечто новое)");
            return false;
        }
    });
});