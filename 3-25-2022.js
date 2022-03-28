// 7kyu - santa's reindeers

// Happy Holidays fellow Code Warriors!

// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!
// Sort Santa's Reindeer

// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

const sortReindeer = (list) =>
  [...list].sort((a, b) => {
    const [, surname1] = a.split(' ');
    console.log(surname1);

    const [, surname2] = b.split(' ');
    console.log(surname2);

    if (surname1 > surname2) return 1;
    if (surname2 > surname1) return -1;
    return 0;
  });

const results = sortReindeer([
  'Dasher Tonoyan',
  'Dancer Moore',
  'Prancer Chua',
  'Vixen Hall',
  'Comet Karavani',
  'Cupid Foroutan',
  'Donder Jonker',
  'Blitzen Claus',
]);

console.log(results);
