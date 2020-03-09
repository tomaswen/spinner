for (let i = 1; i < 3; i++) {
  setTimeout(() => {process.stdout.write('\r|   ');}, 100*i);
  setTimeout(() => {process.stdout.write('\r/   ');}, 300*i);
  setTimeout(() => {process.stdout.write('\r-   ');}, 500*i);
  setTimeout(() => {process.stdout.write('\r\\   ');}, 700*i);
  setTimeout(() => {
    if (i === 2) {
      process.stdout.write('\r|   \n');
    } else {
      process.stdout.write('\r|   ');
    }
  }, 900*i);

}
