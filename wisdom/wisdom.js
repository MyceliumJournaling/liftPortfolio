const quotes = [
    '"Live as if you were to die tomorrow. Learn as if you were to live forever." Mahatma Gandhi',
    '"Forget all you know about yourself; forget all you have ever thought about yourself; start as if you know nothing." Jiddu Krishnamurti',
    '"Being at ease with not knowing is crucial for answers to come to you." Eckhart Tolle',
    '"The things we truly love stay with us always, locked in our hearts as long as life remains." Josephine Baker',
    '"Life can only be understood backwards; but it must be lived forwards." Soren Kierkegaard',
    '"My race and sex had a great deal more to do with what people believed I could do than with what I actually could do." Octavia E. Butler',
    '"You can never stop and as older people, we have to learn how to take leadership from the youth and I guess I would say that this is what I am attempting to do right now." Angela Davis',
    '"Radical simply means grasping things at the root" Angela Davis',
    '"There has never been a major societal transformation in the history of mankind that has not been looked upon as unrealistic, idiotic, or utopian by the large majority of experts even a few years before the unthinkable becomes reality." Sebastian Scheerer',
    '"Environmentalism without class struggle is just gardening." Chico Mendes',
    '"We do not think you fight fire with fire best; we think you fight fire with water best. We are going to fight racism not with racism, but we are going to fight with solidarity. We say we are not going to fight capitalism with black capitalism, but we are going to fight capitalism with socialism." Fred Hampton'
];

const regenerateButton = document.getElementById("regenerateButton");
const quoteParagraph = document.getElementById("quoteParagraph");

function regenerateQuote() {
    const randomQuoteIndex = Math.floor(quotes.length * Math.random());
    const randomQuote = quotes[randomQuoteIndex];
    quoteParagraph.textContent = randomQuote;
}

regenerateButton.addEventListener("click", regenerateQuote);
