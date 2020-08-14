let ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(ip.test("127.0.0.1"))
console.log(ip.test("290.3.5.10"))
console.log(ip.test("1235.2123.4214.4134"))