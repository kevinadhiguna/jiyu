const person = {
    name: "Austin Harper",
    age: 24,
    team: "Braves",
    friends: [
        {
            id: 1,
            name: "Jack Seager",
            team: "Mariners",
        },
        {
            id: 2,
            name: "Corey Buehler",
            team: "Dodgers",
        },
    ],
    salary: 157000,
};

console.log(
    `Hi, I am ${person.name} and am ${person.age} yo. My hobby is playing baseball so I play for ${person.team}. 
    Actually I have a friend named ${person.friends[0].name} who plays for ${person.friends[0].team}.
    ${person.friends[1].name} is also a friend of mine. He plays for ${person.friends[1].team}.`
);
