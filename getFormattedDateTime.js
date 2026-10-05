function getFormattedDateTime() {
  const now = new Date();

  const date = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return `${date} | ${time}`;
}

console.log(getFormattedDateTime());

setInterval(() => {
  console.clear();
  console.log(getFormattedDateTime());
}, 1000);