$('.booking').click(function () {
    $('body').css("overflow", "hidden");

    $.ajax({
        url: "https://api-karens-house.000webhostapp.com/read-room-type.php",
        dataType: "json",
        type: "get",
        success: function (response) {
            if (response.status_code == 200) {
                let data = [
                    ["booking.com", "https://www.booking.com/hotel/id/karen-house-ubud.id.html"],
                    ["tiket.com", "https://www.tiket.com/hotel/indonesia/karen-house-ubud-310001603224194661"],
                    ["Chambers-Hotes.fr", "https://www.chambres-hotes.fr/chambres-hotes_karen-house-ubud_ubud_h4439009_en.htm"],
                    [""]
                ];

                // $.each(response.data, function (i, item) {
                //     data.push([item.room_type, item.title]);
                // });

                // console.log(data)

                customAlertBooking("Book Via", data);
            }
        }
    });
});