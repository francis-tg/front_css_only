const recognition = new webkitSpeechRecognition()

recognition.lang = "fr"
const speech = new SpeechSynthesisUtterance();
recognition.interimResults = true
recognition.continuous = true

recognition.onstart = (e)=>{
    
}

speechSynthesis.speaking = true;
speechSynthesis.speak(speech)

speech.lang = "Fr"

speech.text = "bonjour"

speech.volume = 1
speech.rate = 1
speech.pitch =1

recognition.onend=(e)=>{
    console.log(e)
}

// console.log(speech)