const process = require('process');
const arguments = process.argv.slice(2);

// Default password conditions
let length = 8;

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

        
        Example:
        
        node index.js --length 12 --numbers

        (Generates a 12-character password with uppercase letters and numbers).
        `);

  process.exit();
}
