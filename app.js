let nextId = 1;

const comments = [];

const commentForm = document.querySelector('[data-id="comment-form"]');
const commentInput = commentForm.querySelector('[data-input="comment"]');
const button = commentForm.querySelector('[data-action="add"]');
const commentList = document.querySelector('[data-id="comment-list"]');
button.addEventListener('click', () => {
  const object = {};
  if (commentInput.value != '') {
    comments.push({ id: nextId++, text: commentInput.value });
  }
  createElement(commentInput.value);
  commentInput.value = '';
});

function createElement(ci) {
  const newComment = document.createElement('li');
  newComment.setAttribute('data-comment-id', comments.id);
  newComment.textContent = ci;
  commentList.appendChild(newComment);
}
