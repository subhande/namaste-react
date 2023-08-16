import sum from "../sum";

test("Sum function should calculate the sum of the two numbers", () => {
  const result = sum(1, 2);
  // Assertion
  expect(result).toBe(3);
});

// test("Sum function should calculate the sum of the two numbers2", () => {
//   const result2 = sum(2, 2);
//   // Assertion
//   expect(result2).toBe(5);
// });
