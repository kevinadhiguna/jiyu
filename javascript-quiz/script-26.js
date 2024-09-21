const player = {
    name: 'Will Friedman',
    club: {
        name: 'Los Angeles Dodgers',
    },
};

Object.freeze(player);

console.log('-- Before modified --');
console.log('player.name:', player.name); // Will Friedman
console.log('player.club.name:', player.club.name); // Los Angeles Dodgers

player.name = 'Teoscar Muncy';
player.club.name = 'Los Dodgers';

console.log('-- After modified --');
console.log('player.name:', player.name); // Will Friedman
console.log('player.club.name:', player.club.name); // Los Dodgers

// Note:
// The Object.freeze method freezes only DIRECT PROPERTIES of an object. No properties can be added, modified, or removed.
// If the property is another object, like 'club' in this case, the properties on that object are not frozen and can be modified
