let messages;

const log = document.getElementById('log');
const entry = document.getElementById('entryText');

fetch('vis.json').then(response => {
  return response.json();
}).then(result => {
  messages = result;
  entry.innerHTML = messages[1].message;
})

document.getElementById('send').onclick = (evt) => {
  if (!messages) {
    return;
  }
  let message = messages.shift();
  if (message.dateChange) {
    const dateNode = document.createElement('div');
    dateNode.classList.add('date');
    const dateText = document.createTextNode(message.dateChange);
    dateNode.appendChild(dateText);
    log.appendChild(dateNode);
    message = messages.shift();
  }
  const msgTextNode = document.createElement('div');
  msgTextNode.classList.add('msgText')
  const msgText = document.createTextNode(message.message);
  msgTextNode.appendChild(msgText);
  const timeNode = document.createElement('div');
  timeNode.classList.add('msgTime')
  const timeText = document.createTextNode(message.time);
  timeNode.appendChild(timeText)
  const msgNode = document.createElement('div');
  msgNode.classList.add('msg')
  msgNode.appendChild(msgTextNode);
  msgNode.appendChild(timeNode);
  log.appendChild(msgNode);
  let next = messages[0];
  if (next.dateChange) {
    next = messages[1];
  }
  entry.innerHTML = next.message;
  log.scrollTo(0, log.scrollHeight);
};
