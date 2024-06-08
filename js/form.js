$(document).ready(function(){
    $("#submitFromBtn").on("click", function(event){
        event.preventDefault();

        $.ajax({
            url: "send_email.php",
            type: "POST",
            data: {
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                numberForm: $("#numberForm").val(),
                emailForm: $("#emailForm").val(),
                message: $("#formMsg").val()
            },
            success: function(response) {
                alert(response);
            },
            error: function() {
                alert("There was an error sending your message. Please try again.");
            }
        });
    });
});
