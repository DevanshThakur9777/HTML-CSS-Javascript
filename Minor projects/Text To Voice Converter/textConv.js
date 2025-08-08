
const speech = new SpeechSynthesisUtterance();
let voices = []; // in which store present voices
const voiceSelect = document.querySelector("select");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const textarea = document.querySelector("textarea");

// in Which load all browser voices
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // take present voices
    if (voices.length > 0) {
        speech.voice = voices[0]; // by default voices
    }

    voiceSelect.value = ' ';

    // Add an option for each voice
    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i); // create a name with index
        voiceSelect.add(option); // add voices in drop down
    });
};

// When the voice is changed from the dropdown
voiceSelect.addEventListener("change", () => {
    // Change the voice of the speech object based on the index of the selected voice
    speech.voice = voices[voiceSelect.value];

    // Check if speech is currently active and if there's text to speak
    if (window.speechSynthesis.speaking && textarea.value.trim() !== "") {
        window.speechSynthesis.cancel(); // Cancel current speech
        speech.text = textarea.value; // Re-set the text (it might have been cleared by cancel in some implementations)
        window.speechSynthesis.speak(speech); // Start speaking with the new voice
    }
});

// Start speech when the 'Listen' button is clicked
startBtn.addEventListener("click", () => {
    if (textarea.value.trim() !== "") { // Ensure the textarea is not empty
        speech.text = textarea.value; // Set the textarea's value as the speech text
        window.speechSynthesis.speak(speech); // Start speaking
    } else {
        alert("Please enter some text to speak!"); // Alert if the textarea is empty
    }
});

// Stop speech when the 'Stop' button is clicked
stopBtn.addEventListener("click", () => {
    window.speechSynthesis.cancel(); // stop the currently playing speech
});


  

   