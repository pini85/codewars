const likes = names => {
  let whoLikesIt = "";
  switch (names.length) {
    case 0:
      whoLikesIt = "no one likes this";
      break;
    case 1:
      whoLikesIt = `${names[0]} likes this`;
      break;
    case 2:
      whoLikesIt = `${names[0]} and ${names[1]} likes this`;
      break;
    case 3:
      whoLikesIt = `${names[0]},${names[1]} and ${names[2]} likes this`;
      break;
    default:
      if (names.length > 3)
        whoLikesIt = `${names[0]},${names[1]} and ${names.length -
          2} like this`;
      break;
  }
  return whoLikesIt;
};

const names = ["pini", "john", "hello"];
console.log(likes(names));

// describe("example tests", function() {
//   it("should return correct text", function() {
//     Test.assertEquals(likes([]), "no one likes this");
//     Test.assertEquals(likes(["Peter"]), "Peter likes this");
//     Test.assertEquals(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
//     Test.assertEquals(
//       likes(["Max", "John", "Mark"]),
//       "Max, John and Mark like this"
//     );
//     Test.assertEquals(
//       likes(["Alex", "Jacob", "Mark", "Max"]),
//       "Alex, Jacob and 2 others like this"
//     );
//   });
// });
