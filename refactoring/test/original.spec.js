const { deterministicPartitionKey } = require("../src/refactored");

describe("Refactored tests", () => {
  test("event object not, result should be 0 ", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });

  test("event object passed without partition key ,", () => {
    const result = deterministicPartitionKey({});
    expect(result).toBe(
      "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
    );
  });

  test("event object passed with partition key string 123, result should be '123',", () => {
    const result = deterministicPartitionKey({ partitionKey: 123 });
    expect(result).toBe("123");
  });

  test("event object passed with partition key 123(integer), result should be `123`(string value)", () => {
    const result = deterministicPartitionKey({ partitionKey: 123 });
    expect(result).toBe("123");
  });
});