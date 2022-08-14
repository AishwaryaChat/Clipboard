const crypto = require("crypto");

const getHashedValue = (data) =>
  crypto.createHash("sha3-512").update(data).digest("hex");

const deterministicPartitionKey = (event) => {
  const DEFAULT_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = DEFAULT_PARTITION_KEY;

  if (event) {
    if (event.partitionKey) {
      candidate = JSON.stringify(event.partitionKey);
    } else {
      const data = JSON.stringify(event);
      candidate = getHashedValue(data);
    }
  }

  candidate =
    candidate.length > MAX_PARTITION_KEY_LENGTH
      ? getHashedValue(candidate)
      : candidate;

  return candidate;
};

module.exports = { deterministicPartitionKey };

// Explicityly defining module.exports = { deterministicPartitionKey }, to make this assignment more evident, at first go I didnt see we are not defining this method rather exporting it directly
// Changing variable name from TRIVIAL_PARTITION_KEY to DEFAULT_PARTITION_KEY as default makes more sense
// Assigning defaul value to candidate variable to DEFAULT_PARTITION_KEY
// removing if condition for candidate variable presence, since we have given it a default value
// removing if (typeof candidate !== "string"), and directly stringifying it if present
// creating getHashedValue function, since we are using it multiple times

// Why my refactored solution is more readable?
// Mentioning below some points
// I have renamed TRIVIAL_PARTITION_KEY to DEFAULT_PARTITION_KEY
// I have given default value to candidate variable, there are no further if conditions for it
// Now we have only 2 main conditions
// 1. if event is present
// 2. if length of candidate is greater than 256, hash it
// Also converted 26 lines of code for deterministicPartitionKey to 13 lines
// Did seperation of concerns, as now the deterministicPartitionKey function is determining the artition key and not creating any hash value on it's own
