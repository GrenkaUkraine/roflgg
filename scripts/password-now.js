const passwordInput = document.getElementById('password');
const rulesDiv = document.getElementById('rules');

// Function to calculate the current moon phase
function getCurrentMoonPhase() {
    const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // Using John Conway's formula to calculate the moon phase
    const c = e = jd = b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; // JD is total days elapsed
    jd /= 29.5305882; // Divide by the moon cycle
    b = parseInt(jd); // Int(jd) -> b, take integer part of jd
    jd -= b; // Subtract integer part to leave fractional part of original jd
    b = Math.round(jd * 8); // Scale fraction from 0-8 and round

    if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0
    return phases[b];
}

// Password validation rules
const rules = [
    { message: "Password must contain numbers", check: password => /\d/.test(password) },
    { message: "Password must be at least 6 characters long", check: password => password.length >= 6 },
    { message: "Password must contain letters", check: password => /[a-zA-Z]/.test(password) },
    { message: "Password must contain uppercase letters", check: password => /[A-Z]/.test(password) },
    { message: "Password must contain special characters", check: password => /[!@#$%^&*(),.?":{}|<>]/.test(password) },
    { message: "The digits in the password must add up to 54", check: password => password.split('').reduce((sum, char) => /\d/.test(char) ? sum + parseInt(char) : sum, 0) === 54 },
    { message: "Password must contain at least one of each digit from 1 to 9", check: password => [...Array(9).keys()].every(i => password.includes((i + 1).toString())) },
    { message: "Password must not contain the letters: zov", check: password => !/[zov]/i.test(password) },
    { message: "Password must contain the name of a supported country: Ukraine", check: password => /Ukraine/.test(password) },
    // { message: "Password must contain one of our sponsors: Zaglyt, Luckis, Orphesus", check: password => /Luckis/.test(password) },
    { message: "Password must contain the current moon phase (emoji)", check: password => password.includes(getCurrentMoonPhase()) },
    { message: "Password must not contain subjects: Math, Physics, Biology, PE", check: password => !/(Math|Physics|Biology|PE)/.test(password) },
    { message: "Password must be a palindrome", check: password => password === password.split('').reverse().join('') },
    { message: "Password must be written in Latin alphabet", check: password => /^[a-zA-Z]+$/.test(password) },
    { message: "Password must include the sequence '12345'", check: password => /12345/.test(password) },
    { message: "Password must start with 'A' and end with 'X'", check: password => /^A.*X$/.test(password) },
    { message: "Password must contain the word 'password'", check: password => /password/.test(password) },
    { message: "Password must contain an emoji representing your current mood", check: password => /😊|😢|😡|🤔|😴/.test(password) },
    { message: "Password must contain the name of a fruit", check: password => /apple|banana|cherry|grape|lemon|orange/.test(password) },
    { message: "Password must include at least one vowel", check: password => /[aeiouAEIOU]/.test(password) },
    { message: "Password must contain the name of a color", check: password => /red|blue|green|yellow|purple|orange/.test(password) },
    { message: "Password must contain the sequence '!@#'", check: password => /!@#/.test(password) },
    { message: "Password must include at least one word exactly 5 letters long", check: password => /\b\w{5}\b/.test(password) },
    { message: "Password must contain at least two identical characters in a row", check: password => /(.)\1/.test(password) },
    { message: "Password must contain a word related to nature", check: password => /tree|river|mountain|ocean|forest|flower/.test(password) },
];

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const nextRule = rules.find(rule => !rule.check(password));
    
    if (nextRule) {
        rulesDiv.textContent = nextRule.message + " " + nextRule.check(password).toString();
    } else {
        rulesDiv.textContent = "Password meets all rules!";
    }
});
