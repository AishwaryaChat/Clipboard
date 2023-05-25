const { deterministicPartitionKey } = require("./refactoredDpk");
const crypto = require("crypto");

describe("Refactored deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns custom partition key when provided", () => {
    const mockData = {
      partitionKey: "partitionKey",
    };
    const result = deterministicPartitionKey(mockData);
    expect(result).toBe(mockData.partitionKey);
  });
  it("Returns the a hashed value, when partitionKey is not provided", () => {
    const mockData = {};
    const hash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(mockData))
      .digest("hex");
    const result = deterministicPartitionKey(mockData);
    expect(result).toBe(hash);
  });
  it("Returns the hashed value, when value provided is greater than Maximum allowed length", () => {
    const mockData = "partition".repeat(50)
    const hash = crypto.createHash("sha3-512")
    .update(JSON.stringify(mockData))
    .digest("hex");
    const result = deterministicPartitionKey(mockData)
    expect(result).toBe(hash)
  })
  it("Returns the literal '0', if a falsy input value is provided", () => {
    const result = deterministicPartitionKey(null)
    expect(result).toBe("0")
  })
});
