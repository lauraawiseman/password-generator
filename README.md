# QAP 1 - Password Generator
### Purpose
- The purpose of this application is to generate a random password for a user. By default, the generated password will consist of 8 lowercase letters.

- Users can customize their password using flags: 
  -  _--length_ allows the user to specify the number of characters in the password.
    
  - _--numbers_ adds numbers to the mix, creating a password with both lowercase letters and numbers.
  
### Functionality
#### How can I run this application?

1. Download Files: Download index.js and package.json files from this repository.
2. Open VS Code: Open the downloaded files in Visual Studio Code.
3. Open CLI: Navigate to the directory containing the files and open a new CLI terminal.
4. Run Command: Type node index.js --help for a brief explanation of how to use the application.

## Run Command Examples and Outputs
###  1. _node index.js_
- Returns a password with a default of 8 lowercase letters.
### 2. _node index.js --length 10_
- Returns a password with 10 lowercase characters.
### 3. _node index.js --length 10 --numbers_
- Returns a password with a mix of 10 lowercase letters and numbers.
### 4. _node index.js --numbers_
- Returns a password with 8 (default) characters and numbers.

  
