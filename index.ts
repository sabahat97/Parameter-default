//default parameter , if you forget anything u have a backup
 function good (greet: string ="Hello," ,eveni: string ="good evening"):string {
    return greet + eveni
 }
 let response : string =good();
 console.log (response); // but here you forget to say good morning,

 // so you have a backup...
 function backup(greet: string ="Hello," ,morn: string ="good evening"){
return greet + morn
 }
 let responseBackup : string = backup("Hello,", "Good Morning");
 console.log (responseBackup); //output Hello,Good Morning