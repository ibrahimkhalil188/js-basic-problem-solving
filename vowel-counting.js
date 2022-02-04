function vowelCounting(string) {
    let count = [];
    const lowercase = string.toLowerCase();
    const vowel = ['a', 'e', 'i', 'o', 'u']
    for (const element of lowercase) {
        if (vowel.indexOf(element) != -1) {
            count++;
        }
    }
    return count;
}

const string = vowelCounting("I am a student of p hero!");
console.log(string);
