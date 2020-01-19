init();

function init(){
    var chatHtml = '<div class="chatbox chatbox--tray chatbox--empty">'+
        '    <div class="chatbox__title">'+
        '        <h5><a style="color: white" href="#">BRACU Bot</a></h5>'+
        '        <button class="chatbox__title__tray">'+
        '            <span></span>'+
        '        </button>'+
        '    </div>'+
        '    <div class="chatbox__body">'+
        '        <div class="chatbox__body__message chatbox__body__message--left pb-3">'+
        '            <img style="border: 1px solid" src="http://iamsadik.com/bracu_bot_logo.jpg" alt="Picture">'+
        '            <p>Hi! What\'s your Query?</p>'+
        '        </div>'+
        '    </div>'+
        '    <input id="chatMessage" class="chatbox__message" name="userMessage" placeholder="Your query here">'+'';
    $('.ui-layout-north').append(chatHtml);

    $(document).ready(function() {
        var $chatbox = $('.chatbox'),
            $chatboxTitle = $('.chatbox__title'),
            $chatboxTitleClose = $('.chatbox__title__close');
        $chatbox.removeClass('chatbox--empty');
        $chatboxTitle.on('click', function() {
            $chatbox.toggleClass('chatbox--tray');
        });
        $chatboxTitleClose.on('click', function(e) {
            e.stopPropagation();
            $chatbox.addClass('chatbox--closed');
        });
        $chatbox.on('transitionend', function() {
            if ($chatbox.hasClass('chatbox--closed')) $chatbox.remove();
        });
    });
    $('#chatMessage').on('keyup', function (e) {
        if (e.keyCode === 13) {
            userMessageShow(this.value);
            var msg = this.value;
            this.value = "";
            sendMessage(msg);
        }
    });
}

function sendMessage(message) {
    $.ajax({
        url: 'https://bracu-bot.appspot.com/test',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({"message": message}),
        success: function (result) {
            botMessageShow(result);
        },
        error: function (xhr, textStatus, error) {
            console.log("error: " + error);
        }
    });
}

function userMessageShow(message){
    var msg = '<div class="chatbox__body__message chatbox__body__message--right pb-3">'+
        '            <img style="border: 1px solid" src="http://iamsadik.com/usis_profile.png" alt="Picture">'+
        '            <p>'+message+'</p>'+
        '        </div>';
    $('.chatbox__body').append(msg);
}

function botMessageShow(message){
    var msg = '<div class="chatbox__body__message chatbox__body__message--left pb-3">'+
        '            <img style="border: 1px solid" src="http://iamsadik.com/bracu_bot_logo.jpg" alt="Picture">'+
        '            <p>'+message+'</p>'+
        '        </div>';
    $('.chatbox__body').append(msg);
}