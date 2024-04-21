function toggleReplyBox() {
    var replyBox = document.getElementById('replyBox');
    if (replyBox.style.display === 'none') {
        replyBox.style.display = 'block';
    } else {
        replyBox.style.display = 'none';
    }
}
function addComment() {
    const commentsarea = document.getElementById('commentBox');
    commentsarea.innerHTML += '<p>' + document.getElementById("commentinput").value + '</p>'; 
}
