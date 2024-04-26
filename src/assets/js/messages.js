function toggleReplyBox(replyBoxId) {
    var replyBox = document.getElementById(replyBoxId);
    if (replyBox.style.display === 'none' || replyBox.style.display === '') {
        replyBox.style.display = 'block';
    } else {
        replyBox.style.display = 'none';
    }
}

function edit(comment) {
    commentElement = document.getElementById(comment);
    textarea = commentElement.querySelector('textarea');
    buttonWrapper = commentElement.querySelector('.button-wrapper');
    
    if(textarea.disabled) {
        textarea.disabled = false;
        textarea.focus();
        
        buttonWrapper.classList.remove('d-none');
    }

}

