const url = "https://quotes-api-self.vercel.app/quote";
const thought = document.querySelector(".quote-box blockquote");
const writer = document.querySelector(".quote-box span");
const newbtn = document.querySelector(".quote-box button")

const displayQuote = async () => {
  let reponse = await fetch(url);
  let data = await reponse.json();
  let quo = data.quote;
  let wri = data.author;
  thought.innerText = quo;
  writer.innerText = wri;
};

displayQuote();

newbtn.addEventListener('click',()=>{
  displayQuote();
})