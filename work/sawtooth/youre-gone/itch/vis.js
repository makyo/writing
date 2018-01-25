(() => {
  // Array to contain our messages.
  let messages, loaded = false;

  // Elements we'll be referring to.
  const log = document.getElementById('log');
  const entry = document.getElementById('entryText');

  // Fetch the data.
  fetch('vis.json').then(response => {
    return response.json();
  }).then(result => {
    messages = result;
    entry.innerHTML = messages[1].message;
    entry.scrollTo(0, entry.scrollHeight);
    loaded = true;
  })

  // Event forr clicking Send
  document.getElementById('send').onclick = (evt) => {
    // Bail if we don't have messages (before we start, after we end)
    if (!messages) {
      return;
    }

    // Make the credits visible and bail, removing the event, once we're done.
    if (loaded && messages.length === 0) {
      document.getElementById('credits').classList.add('visible');
      document.getElementById('send').onclick = null;
      return;
    }

    // Get the most recent message.
    let message = messages.shift();

    // If it's a date, add the date node, then get the followinug message.
    if (message.dateChange) {
      // Create a date div.
      const dateNode = document.createElement('div');
      dateNode.classList.add('date');
      const dateText = document.createTextNode(message.dateChange);
      dateNode.appendChild(dateText);
      log.appendChild(dateNode);
      message = messages.shift();
    }

    if (message.file) {
      // Create the div for the message text.
      const msgTextNode = document.createElement('div');
      msgTextNode.classList.add('msgText')
      const msgText = document.createTextNode(`Lee ♥ sent you: ${message.file}`);
      msgTextNode.appendChild(msgText);

      // Create the div for the message time.
      const timeNode = document.createElement('div');
      timeNode.classList.add('msgTime')
      const timeText = document.createTextNode(message.time);
      timeNode.appendChild(timeText)

      // Create the div for the full message and append to the log.
      const msgNode = document.createElement('div');
      msgNode.classList.add('msg')
      msgNode.classList.add('file')
      msgNode.appendChild(msgTextNode);
      msgNode.appendChild(timeNode);
      log.appendChild(msgNode);
      return;
    }

    // Create the div for the message text.
    const msgTextNode = document.createElement('div');
    msgTextNode.classList.add('msgText')
    const msgText = document.createTextNode(message.message);
    msgTextNode.appendChild(msgText);

    // Create the div for the message time.
    const timeNode = document.createElement('div');
    timeNode.classList.add('msgTime')
    const timeText = document.createTextNode(message.time);
    timeNode.appendChild(timeText)

    // Create the div for the full message and append to the log.
    const msgNode = document.createElement('div');
    msgNode.classList.add('msg')
    msgNode.appendChild(msgTextNode);
    msgNode.appendChild(timeNode);
    log.appendChild(msgNode);

    // If we stil have messages, attempt to get the next one to display in the
    // entry box.
    if (messages.length > 1) {
      let next = messages[0];
      if (next.dateChange) {
        next = messages[1];
      }
      if (next.file) {
        next = messages[2];
      }
      entry.innerHTML = next.message;
      entry.scrollTo(0, entry.scrollHeight);
    } else {
      entry.innerHTML = '';
    }

    // Scroll the log to the bottom.
    log.scrollTo(0, log.scrollHeight);
  };
})();
