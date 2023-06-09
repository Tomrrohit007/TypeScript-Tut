// BigInt Cannot be a decimal and Math function not work on it
// The second method of assigning value to bigint only work for esmodule 2020 or above.
const safeInt1:bigint = BigInt(12345)
const safeInt2:bigint = 23456n
console.log(safeInt1)