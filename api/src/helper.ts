function normalize(answer: string): string {
  // Normalize the answer by converting to lowercase and trimming whitespace
  return answer.toLowerCase().trim();
}

function validateAnswer(answer: string, correctAnswer: string): boolean {
  // Validate the answer by comparing it to the correct answer
  return normalize(answer) === normalize(correctAnswer);
}

export { normalize, validateAnswer };