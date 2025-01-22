const process = require('process');
const arguments = process.argv.slice(2);

// Default password conditions
let length = 8;

arguments.forEach((arg, index) => {
  if (arg === '--length') {
    // Index + 1 reads number after --length,
    const value = parseInt(arguments[index + 1]);

    // Check if value after --length is valid number
    if (!isNaN(value) && value > 0) {
      length = value;
    } else {
      console.error(
        'Error - Invalid value for --length. Please provide a valid number. '
      );
      process.exit(1);
    }
  }
});

if (arguments.includes('--help')) {
  console.log(` 
        Password Generator:
        
        This application will generate a password based on 
        conditions chosen by the user. The user will use flags to 
        customize their password. The default password, if not
        specified by the user, will be 8 lowercase letters. If the 
        user would like to add numbers to their password, they 
        must add the --numbers flag. See usage below.
    
        Usage: node index.js [options]

        Options:
        
        --length <number>  Specify the length of the password (default: 8)

        --numbers          Include numbers in the password 

        --help             Opens this menu
        
        Example:
        
        node index.js --length 12 --numbers

        (Generates a 12-character password with uppercase letters and numbers).
        `);

  process.exit();
}

function generatePassword(length) {
  const lowerChar = 'abcedfghijklmnopqrstuvwxyz';

  // Keep the characters lowercase
  let charPool = lowerChar;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    // Adds the character to the password string
    password += charPool[randomIndex];
  }

  return password;
}

const password = generatePassword(length);

console.log(`Generated Password: ${password}`);
