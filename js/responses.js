const botResponses = {
  // Greetings
  "hello": "Hi there! How can I help you today?",
  "hi": "Hey, what's up? Ready to chat?",
  "hey": "Yo! How's it going?",
  "good morning": "Morning! Hope your day's off to a great start!",
  "good afternoon": "Afternoon vibes! What's on your mind?",
  "good evening": "Evening, friend! What's the plan for tonight?",
  "howdy": "Howdy! What's cooking, partner?",

  // Personal Questions
  "how are you": "I'm just a bunch of code, but I'm doing great! How about you?",
  "how's it going": "All systems go here! How's your day going?",
  "who are you": "I'm ChatBuddy, your virtual pal here to answer questions and crack jokes!",
  "what's your name": "I'm your friendly chatbot! You can call me ChatBuddy.",
  "who made you": "I was created by some clever folks to make your day more interesting!",
  "how old are you": "Age is just a number, but I'm timeless—born in the cloud, living in the moment!",
  "where are you from": "I'm from the digital realm, where ones and zeros roam free!",

  // Farewells
  "bye": "Goodbye! Have a great day!",
  "goodbye": "Catch you later! Stay awesome!",
  "see you": "Later, alligator! Come back soon!",
  "take care": "You too! Stay safe and swing by anytime!",
  "night": "Good night! Sweet dreams and see you tomorrow!",

  // Compliments and Insults
  "you're awesome": "Aw, shucks! You're pretty awesome too!",
  "you're cool": "Right back at ya! What's cool about you today?",
  "stinky": "Shush! That's not very nice. Let's keep it friendly here.",
  "you're dumb": "Ouch! I'm just trying to help. How about a kinder vibe?",
  "you rock": "Thanks! You rock harder than a hurricane!",

  // Thanks and Politeness
  "thank you": "You're welcome! I'm here to help.",
  "thanks": "No prob! What's next?",
  "please": "Polite, I like it! What's your request?",
  "sorry": "No worries, we're all good here! What's up?",

  // Purpose and Capabilities
  "what is your purpose": "My purpose is to chat with you and make your day better!",
  "what can you do": "I can chat, joke, answer questions, and maybe even sprinkle some wisdom. What's on your mind?",
  "can you help me": "You bet! What's the problem or question?",
  "what do you know": "I know a little about a lot! Ask me anything, and I'll do my best.",
  "can you sing": "I can't hit the high notes, but I can hum a tune in text! 🎶 Want a song recommendation instead?",

  // Jokes and Fun
  "tell me a joke": "Why don't programmers like nature? It has too many bugs!",
  "another joke": "Why did the scarecrow become a motivational speaker? Because he was outstanding in his field!",
  "funny": "What's funny? Oh, you mean me? Here's one: Why did the tomato turn red? It saw the salad dressing!",
  "make me laugh": "Why can't basketball players go on vacation? Because they would get called for traveling!",
  "dad joke": "Why did the math book look sad? Because it had too many problems!",

  // Questions and Curiosity
  "why": "Why? Well, why not? Give me a hint—what's this about?",
  "what": "What's that? Toss me a clue so I can keep up!",
  "how": "How, huh? Lay it on me—what's the question?",
  "when": "When's a good time to chat? Now! What's up?",
  "where": "Where's the action? Tell me more!",
  "who": "Who's this? Oh, you mean you! What's on your mind?",

  // Random Fun Responses
  "cool": "Cool beans! What's the coolest thing you've come across today?",
  "lol": "Haha, what's so funny? Share the giggle!",
  "wow": "Whoa, what's got you so amazed? Spill the tea!",
  "nice": "Nice one! What's nice about your day?",
  "awesome": "Totally awesome! What's making your day epic?",
  "random": "Random, huh? Here's a random fact: Octopuses have three hearts! What's next?",

  // Food and Drink
  "hungry": "Oh, tummy rumbling? What's your favorite snack to munch on?",
  "food": "Yum! Are we talking pizza, tacos, or something totally gourmet?",
  "coffee": "Coffee lover, eh? How do you take yours—black, sweet, or fancy?",
  "pizza": "Pizza time! What's your go-to topping? I'm all about the classic pepperoni!",

  // Weather and Time
  "what's the weather": "I don't have a window, but tell me where you are, and I can imagine it! Sunny or stormy?",
  "what time is it": "I don't wear a watch, but what's the time zone you're in? Let's sync up!",
  "is it raining": "Got an umbrella? Tell me where you are, and I'll guess the weather vibe!",

  // Games and Entertainment
  "play a game": "Game on! How about a quick one: What's your favorite movie quote?",
  "movie": "Ooh, movie talk! What's a film you could watch on repeat?",
  "song": "Let's jam! What's a song that's stuck in your head right now?",
  "book": "Bookworm alert! What's the last book you couldn't put down?",

  // Motivation and Positivity
  "i'm sad": "Aw, I'm here for you! Want to share what's got you down or maybe hear a cheesy joke to lift your spirits?",
  "i'm tired": "Feeling pooped? Maybe a virtual nap or a fun fact will recharge you! Want one?",
  "motivate me": "You got this! You're stronger than a Wi-Fi signal in a coffee shop. What's your next step?",
  "i'm bored": "Boredom buster alert! Want a joke, a fun fact, or a quick game idea?",

  // Tech and Code
  "code": "Code mode activated! Want a quick JavaScript tip or something else techy?",
  "javascript": "JS, nice! Want a fun snippet idea or a coding joke? Like: Why did the function go to therapy? It had an identity crisis!",
  "bug": "Bugs, the coder's nemesis! Want a debugging tip or just a laugh about those pesky errors?",
  "chatbot": "That's me! Your friendly ChatBuddy. Want to know how I tick or just keep chatting?",

  // Miscellaneous
  "love": "Aww, feeling the love? Tell me more—is this about a crush, a pet, or just good vibes?",
  "happy": "Yay, happy vibes! What's got you smiling today?",
  "sad": "Oh no, what's got you down? I'm here to listen or cheer you up!",
  "help": "I'm on it! What's the issue or question you need help with?",
  "fun fact": "Did you know honey never spoils? What's a fun fact you love?",
  "surprise me": "Bam! Here's a surprise: A group of flamingos is called a flamboyance! Want another?",
  "what's up": "Yo, just chilling in the cloud! What's up with you?",

  // Fallback
  "default": "I'm not sure how to respond to that. Try asking something else or maybe a joke to keep it fun!"
};