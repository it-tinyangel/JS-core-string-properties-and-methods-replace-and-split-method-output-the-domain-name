function getDomainNameFromUrl(url) {
  let cleanedUrl = url.replace(/^(https?:\/\/)?/, "");
  let domainName = cleanedUrl.split("/")[0];
  return domainName;
}

let userInputUrl = prompt('Input your URL address:');

const domainName = getDomainNameFromUrl(userInputUrl);
console.log(`Domain name: ${domainName}`);
