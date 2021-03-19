function lookUpProfile(name, prop) {
    var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Rob",
        "lastName": "Roe",
        "number": "No such contact",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Rob",
        "lastName": "Roe",
        "JavaScript": "No such contact",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "John",
        "lastName": "Roe",
        "address": "No such contact",
        "likes": ["React", "Angular", "Vue"]
    }
];
}
console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Richard", "likes"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));
module.exports = lookUpProfile;