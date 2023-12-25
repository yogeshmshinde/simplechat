document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  const matchingReplies = searchPromptReplies(input);
  if (matchingReplies) {
    const exactHiMatches = matchingReplies.filter((pair) => pair.reply.toLowerCase() === "hi");
    
    if (exactHiMatches.length > 0) {
      product = exactHiMatches[0].reply; // Use the best exact match
    } else if (matchingReplies) {
      // Search for partial matches based on words
      const matchingReplies = searchPromptReplies(input);
      const bestMatch = matchingReplies?.sort((a, b) => {
        const aMatches = a.reply.toLowerCase().split(/\W+/).includes(input.toLowerCase());
        const bMatches = b.reply.toLowerCase().split(/\W+/).includes(input.toLowerCase());
        return bMatches - aMatches; // Sort in descending order of matches (true > false)
      })?.[0];

      if (bestMatch) {
        product = bestMatch.reply;
      } else {
        // If no matches found, return a random alternative
        product = "Not sure what you're trying to say, thank you!";
      }
    } else {
      // If no matches found, return a random alternative
      product = "Not sure what you're trying to say!";
    }
  }
  // Update DOM
  addChat(input, product);
}


function searchPromptReplies(query) {
  try {
    const results = savedData.filter((pair) => {
      // Check for matches in prompt or reply, ignoring case
      return (
        pair.prompt.toLowerCase().includes(query.toLowerCase()) ||
        pair.reply.toLowerCase().includes(query.toLowerCase())
      );
    });

    // Sort results based on the number of matching words
    results.sort((a, b) => {
      const aMatches = a.reply.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || [];
      const bMatches = b.reply.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || [];
      return bMatches.length - aMatches.length; // Sort in descending order of matches
    });

    return results.length > 0 ? results : null; // Return all sorted results or null if not found
  } catch (error) {
    console.error("Error searching data:", error);
    return null;
  }
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  const myArray = string.split(" ").join("|"); 
  console.log(myArray)
  const regexString = new RegExp('(?:'+myArray+')','ig');
  console.log("String 1", regexString)
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      // if (promptsArray[x][y] === string) {
      if ( (promptsArray[x][y]).match(regexString)  ) {
        console.log("String 2", (promptsArray[x][y]).match(regexString))
  
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="./images/user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "./images/bot.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000
  )

}