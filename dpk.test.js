const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey if it is present", () => {
    const event = { partitionKey: "partitionKey" };
    expect(deterministicPartitionKey(event)).toBe("partitionKey");
  });

  it("Returns the hash of the event data if the partitionKey does not exist", () => {
    const event = { data: "test" };
    const hash = require("crypto")
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hash);
  });

  it("returns a hash of length <= 256 characters", () => {
    const event = { data: "a".repeat(300) };
    const hash = deterministicPartitionKey(event);
    expect(hash.length).toBeLessThanOrEqual(256);
  });

  it("Returns a hash if the event is not an object", () => {
    const event = "I am a string event";
    const hash = require("crypto")
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hash);
  })

});
