function updateRecord(Object, id, prop, value) {
    var oldCollection = JSON.parse(JSON.stringify(collection));
    var collection = {
    5439: {
        artist: "ABBA",
        tracks: "Take a Chance on Me"
    },
    2548: {
        artist: "",
        tracks: "Addicted to Love"
    },
}
}
console.log(updateRecord(collection, 5439, "artist", "ABBA"));
console.log(updateRecord(collection, 5439, "track", "Take a Chance on Me"));
console.log(updateRecord(collection, 2548, "track", ""));
console.log(updateRecord(collection, 2548, "track", "Addicted to Love"));
module.exports = updateRecord;


