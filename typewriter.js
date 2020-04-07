const sentencePrinter = (sentence) => {

  sentence.split("").forEach((char, index) => {
    setTimeout(() => {
      process.stdout.write(char)
      }, 50 * index);
  });
  setTimeout(() => {process.stdout.write('\n')}, sentence.length * 50);
}

const testSentence = "hello there from lighthouse labs";
sentencePrinter(testSentence);