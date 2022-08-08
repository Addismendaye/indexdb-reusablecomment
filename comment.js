let nextId = 1;

const comments = [];

const commentForm = document.querySelector('[data-id="comment-form"]');

const nameInput = commentForm.querySelector('[data-input="name"]');

const emailInput = commentForm.querySelector('[data-input="email"]');

const commentInput = commentForm.querySelector('[data-input="comment"]');

const button = commentForm.querySelector('[data-action="add"]');

const commentList = document.querySelector('[data-id="comment-list"]');

button.addEventListener('click', () => {
  var output =
    'Welcome  ' +
    '  ' +
    nameInput.value +
    '\n' +
    ' ,  # Email Address  : ' +
    '  ' +
    emailInput.value +
    '      ' +
    ' , # Submitted Comment  :   ' +
    commentInput.value +
    '          ' +
    ' ,# Date  : ' +
    Date();

  const object = {};

  if (commentInput.value != '') {
    //comments.push({ id: nextId++, text: commentInput.value });
    comments.push({ id: nextId++, text: output });
    createElement(output);
  } else {
    alert('Please fill the value..');
  }

  //createElement(commentInput.value);

  commentInput.value = '';
});

function createElement(ci) {
  const newComment = document.createElement('li');
  newComment.setAttribute('data-comment-id', comments.id);
  newComment.textContent = ci;
  commentList.appendChild(newComment);
}

document
  .getElementById('imageUpload')
  .addEventListener('change', readURL, true);
function readURL() {
  const file = document.getElementById('imageUpload').files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById('clock').style.backgroundImage =
      'url(' + reader.result + ')';
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }
}

function terms_changed(termsCheckBox) {
  //If the checkbox has been checked
  if (termsCheckBox.checked) {
    //Set the disabled property to FALSE and enable the button.

    commentForm.querySelector('[data-action="add"]').disabled = false;
  } else {
    //Otherwise, disable the submit button.
    commentForm.querySelector('[data-action="add"]').disabled = true;
  }
}
