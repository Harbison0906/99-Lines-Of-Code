let friends = ['Jesse', 'Clark', 'Dub', 'Jake', 'Jonathan'];

for (let i=0; i < friends.length; i++) {
  for (let x=99; x >= 1; x--) {
  console.log(x + ' lines of code in the file, ' + x + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + x + ' lines of code in the file.');
  if (x == 1) {
    console.log(x + ' line of code in the file, ' + x + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, ' + x +  ' no more lines of code in the file.')
  }
  }
  
}