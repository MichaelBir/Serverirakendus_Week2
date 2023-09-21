//let userName = 'Aksel';
const userName = 'Voldemar';
let age = 11;
const isWizard = true;
let friends = ['Aadu', 'Klaabu', 'Maabu'];

friends.push ('Draco');

function greeding(name) {
    console.log ('KONTROLLI ANDMEID!!');
}
function WeAreNotFriends() {
    confirm.log ('Sina EI OLE SÕBER');
}


//friends.forEach(friend => {
//    friend = friend + '*'
//    console.log (friend);
//});

//userName = 'Perenimi';
//console.log(userName);
//if(age < 11) {
//    console.log(`${userName}, oled liiga noor`);
//}
//else if(age > 11) {
//    console.log(`${userName}, oled liiga vana`);
//}
//
//else {
//    console.log(`${userName}, oled õiges vanuses`);
//}

// || > OR
// !  > NOT
// && > AND

//if(userName === 'Voldemar' && age === 11 && isWizard === true ) {
//    console.log(`${userName}, Andmed sobivad`);
if (userName !== 'Voldemar' || age !== 11 || isWizard !== true ) {
    console.log(`${userName}, Andmed vigaselt sisestatud`);
    
}


else
for(let i = 0; i < friends.length ; i++) {
    if (friends[i] === 'Draco'){
        //WeAreNotFriends();
        friends [i] = friends [i] + ' * EI OLE SÕBER';
        }
    friends [i] = friends [i] + '  *';
        greeding(friends [i]);
    
   console.log(`${i + 1}. Ma ei usu et sa oled: ${userName}, Andmed ei klapi!!! Kas sa oled tegelikult: ${friends [i]}`);
}


