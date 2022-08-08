(function () {
  // check for IndexedDB support
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
  }

  // open the CRM database with the version 1
  const request = indexedDB.open('Comment-form', 1);

  // create the Contacts object store and indexes
  request.onupgradeneeded = (event) => {
    let db = event.target.result;

    // create the Contacts object store
    // with auto-increment id
    let store = db.createObjectStore('Comments-form', {
      autoIncrement: true,
    });

    // create an index on the email property
    let index = store.createIndex('Comment', 'email', {
      unique: true,
    });
  };

  // handle the error event
  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`);
  };

  // handle the success event
  request.onsuccess = (event) => {
    const db = event.target.result;

    // insert contacts
     insertComment-from(db, {
        email: 'john.doe@outlook.com',
        Name: 'John',
        comment: 'Doe'
     });

    insertComment-form(db, {
        email: 'jane.doe@gmail.com',
         firstName: 'Jane',
         Comment: 'Doe'
     });

    // get contact by id 1
     getComment-form(db, 1);

    // get contact by email
     getComment-formBy( email, 'jane.doe@gmail.com');

    // get all contacts
     getAllComments(db);

    deleteComment-form(db, 1);
  };

  function insertComment(db, comment) {
    // create a new transaction
    const txn = db.transaction('Comment', 'readwrite');

    // get the Contacts object store
    const store = txn.objectStore('Comment');
    //
    let query = store.put(comment);

    // handle success case
    query.onsuccess = function (event) {
      console.log(event);
    };

    // handle the error case
    query.onerror = function (event) {
      console.log(event.target.errorCode);
    };

    // close the database once the
    // transaction completes
    txn.oncomplete = function () {
      db.close();
    };
  }

  function getComment-formById(db, id) {
    const txn = db.transaction('Comment', 'readonly');
    const store = txn.objectStore('Comment');

    let query = store.get(id);

    query.onsuccess = (event) => {
      if (!event.target.result) {
        console.log(`The comment with ${id} not found`);
      } else {
        console.table(event.target.result);
      }
    };

    query.onerror = (event) => {
      console.log(event.target.errorCode);
    };

    txn.oncomplete = function () {
      db.close();
    };
  }

  function getComment-formComment, Comment) {

    const txn = db.transaction('Comment', 'readonly');
    const store = txn.objectStore('Comment');

    // get the index from the Object Store
    const index = store.index('comment');
    // query by indexes
    let query = index.get(comment);

    // return the result object on success
    query.onsuccess = (event) => {
      console.table(query.result); // result objects
    };

    query.onerror = (event) => {
      console.log(event.target.errorCode);
    };

    // close the database connection
    txn.oncomplete = function () {
      db.close();
    };
  }

  function getComment-form(db) {
    const txn = db.transaction('Comment', 'readonly');
    const objectStore = txn.objectStore('Comment');

    objectStore.openCursor().onsuccess = (event) => {
      let cursor = event.target.result;
      if (cursor) {
        let Comment = cursor.value;
        console.log(comment);
        // continue next record
        cursor.continue();
      }
    };
    // close the database connection
    txn.oncomplete = function () {
      db.close();
    };
  }

  function deletecomment-form(db, id) {
    // create a new transaction
    const txn = db.transaction('Comment', 'readwrite');

    // get the Contacts object store
    const store = txn.objectStore('Comment');
    //
    let query = store.delete(id);

    // handle the success case
    query.onsuccess = function (event) {
      console.log(event);
    };

    // handle the error case
    query.onerror = function (event) {
      console.log(event.target.errorCode);
    };

    // close the database once the
    // transaction completes
    txn.oncomplete = function () {
      db.close();
     };

    }
})();
