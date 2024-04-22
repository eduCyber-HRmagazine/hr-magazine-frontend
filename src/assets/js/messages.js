function toggleReplyBox(replyBoxId) {
    var replyBox = document.getElementById(replyBoxId);
    if (replyBox.style.display === 'none' || replyBox.style.display === '') {
        replyBox.style.display = 'block';
    } else {
        replyBox.style.display = 'none';
    }
}

