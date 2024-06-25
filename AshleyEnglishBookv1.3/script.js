const words = ["friendly", "powerful", "fast", "short", "bih", "order", "form", "alarm", "harm", "roar", "dare", "tore", "aware", "prepare", "share", "chore", "soar", "hardly", "orchard", "fork", "market", "barber", "fort", "rare", "chart", "music", "broom", "spoon", "cute", "huge", "tuna", "tool", "glue", "unit", "clue", "cube", "booth", "scooter", "tulip", "duty", "mule", "bloom", "spool", "stool", "leng", "small", "thin", "fat", "old", "burst", "clerk", "curl", "merchant", "alert", "person", "stir", "nurse", "dirt", "purse", "perfect", "fem", "term", "churn", "shirt", "germ", "firm", "birth", "stern", "further", "mirror", "tractor", "sailor", "member", "flavor", "master", "visitor", "center", "odor", "camper", "actor", "fever", "razor", "hunter", "harbor", "trainer", "framer", "sweater", "answer", "owner", "puzzle", "turtle", "wooden", "paddle", "metal", "open", "lemon", "tickle", "equal", "signal", "dozen", "chicken", "bacon", "kattle", "ribbon", "frighten", "central", "button", "battle", "sveral", "since", "microscope", "experiment", "oxygen", "skeleton", "eclipse", "digestion", "animal", "root", "humid", "protein", "crystal", "humidity", "planet", "expand", "orbit", "magnet", "contract", "hurricane", "decay", "carbon", "basketball", "outdoors", "railroad", "everyday", "teaspoon", "forever", "rainbow", "anyhow", "sunshine", "themselves", "fireplace", "nobody", "upstairs", "sidewalk", "southwest", "drugstore", "downtown", "breakfast", "moonlight", "baseball", "costume", "section", "oatmeal", "public", "headache", "custom", "narrow", "tunnel", "meanwhile", "welcome", "daylight", "better", "practice", "supper", "coffee", "sunset", "tonsils", "confuse", "bottom", "seldom", "broken", "vanish", "salad", "cabin", "spider", "moment", "palace", "raisin", "habit", "meadow", "soda", "reason", "modern", "clover", "punish", "spoken", "climate", "favor", "motel", "hotel", "unlucky", "unkind", "unmade", "unable", "unlike", "unhappy", "unusual", "unpaid", "unsafe", "repay", "rename", "refill", "rerum", "replace", "reload", "replay", "misspell", "misplace", "misuse", "mistake", "history", "geography", "map", "muddy", "shiny", "beautiful", "truly", "tasty", "foggy", "cheerful", "healthy", "lovely", "playful", "lickly", "quietly", "lately", "harmful", "colorful", "nicely", "quickly", "thankful", "rainy", "windy"];

const usedWords = [];

function updateWordCount() {
  document.getElementById("wordCount").textContent = words.length;
}

function generateWord() {
  if (words.length === 0) {
    alert("一天又平安的過去了,感謝飛天小女警的努力!");
    return;
  }
  
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  usedWords.push(randomWord);
  words.splice(randomIndex, 1);
  
  if(wordDisplayB.value =="")
  {
    Do_AddItemWithGoogleTranslate();
  }

  wordDisplayB.value ="";
  document.getElementById("wordDisplay").value = randomWord;
  updateWordCount();
}

window.onload = function() {
  document.getElementById("generateButton").onclick = generateWord;
  updateWordCount();
};

let isSpeaking = false;

document.addEventListener("keydown", function(event) {
  if (event.key === " ") {
    event.preventDefault();
    playAudio(document.getElementById("wordDisplay").value);
  }
});

async function Do_AddItemWithGoogleTranslate()
{
  const englishWord = document.getElementById("wordDisplay").value;
  const existingText = document.getElementById("leftTextArea").value;
  if(englishWord =="")
  {
    return;
  }
    
  try {
    const googleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${englishWord}`;
    const googleResponse = await fetch(googleUrl);
    const googleData = await googleResponse.json();
    const googleChinese = googleData[0][0][0];
    
    document.getElementById("leftTextArea").value = englishWord+"("+googleChinese+")"+ "\n" + existingText;

  } catch (error) {
    
    showErrorMessage("翻譯錯誤");
    document.getElementById("leftTextArea").value = englishWord+ "\n" + existingText;
    console.error("翻譯錯誤：", error);
  }
}

document.addEventListener("keydown", async function(event) {
  if (event.key === "1") {
    const englishWord = document.getElementById("wordDisplay").value;

    try {
      const googleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${englishWord}`;
      const googleResponse = await fetch(googleUrl);
      const googleData = await googleResponse.json();
      const googleChinese = googleData[0][0][0];
      
      if(wordDisplayB.value != googleChinese)
      {
        const rightTextArea = document.getElementById("rightTextArea");
        rightTextArea.value += wordDisplay.value +"("+googleChinese+")"+"\n";
      }
    
      wordDisplayB.value = googleChinese;

    } catch (error) {
      showErrorMessage("翻譯錯誤");
      console.error("翻譯錯誤：", error);
    }
  }
});

function playAudio(word) {

  function getRandomColor(alpha = 0.8) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const errorMessage = document.createElement("div");
  errorMessage.textContent = "讀取發音...";
  errorMessage.style.backgroundColor = getRandomColor(); // 使用隨機顏色
  errorMessage.style.color = "white";
  errorMessage.style.padding = "10px";
  errorMessage.style.borderRadius = "5px";
  //errorMessage.style.zIndex = "1000";
  document.body.appendChild(errorMessage);

  // 1.5 秒後移除錯誤信息元素
  setTimeout(() => {
      document.body.removeChild(errorMessage);
  }, 800);

  if (!isSpeaking) {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = "en-US";
    speechSynthesis.speak(speech);

    isSpeaking = true;
    speech.onend = function() {
      isSpeaking = false;
    };
  }
}

function showErrorMessage(message) {
  const errorMessage = document.createElement("div");
  errorMessage.textContent = message;
  errorMessage.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
  errorMessage.style.color = "white";
  errorMessage.style.padding = "10px";
  errorMessage.style.borderRadius = "5px";
  document.body.appendChild(errorMessage);

  setTimeout(() => {
    document.body.removeChild(errorMessage);
  }, 1500);
}

document.getElementById("btn_Sound").addEventListener("click", () => {
  playAudio(document.getElementById("wordDisplay").value);
});

document.getElementById("btn_Answer").addEventListener("click", async () => {
  const englishWord = document.getElementById("wordDisplay").value;

  try {
    const googleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${englishWord}`;
    const googleResponse = await fetch(googleUrl);
    const googleData = await googleResponse.json();
    const googleChinese = googleData[0][0][0];

    if(wordDisplayB.value != googleChinese)
    {
      const rightTextArea = document.getElementById("rightTextArea");
      rightTextArea.value += wordDisplay.value +"("+googleChinese+")"+"\n";
    }

    wordDisplayB.value = googleChinese;

  } catch (error) {
    showErrorMessage("翻譯錯誤");
    console.error("翻譯錯誤：", error);
  }
});