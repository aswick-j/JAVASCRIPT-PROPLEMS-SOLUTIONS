const palindromeName = "lel";

const palindromCheck = (name) => {
  name = name.toLowerCase();
  return name === name.toLowerCase().split("").reverse("").join("");
};

if (palindromCheck(palindromeName) === true) {
  console.log(`The String ${palindromeName} is Palindrome`);
} else {
  console.log(`The String ${palindromeName} is Not a Palindrome`);
}
