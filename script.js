let userInputUrl = prompt('Input your URL address:');

let cleanedUrl = userInputUrl.replace(/^(https?:\/\/)?/, '');
let domainName = cleanedUrl.split('/')[0];

console.log(`Domain name: ${domainName}`);