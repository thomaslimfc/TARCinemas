const liveInput = document.querySelector(".live-input textarea");
const sendLiveBtn = document.querySelector(".live-input span");
const livebox = document.querySelector(".livebox");
const livebotToggler = document.querySelector(".livebot-toggler");
const livebotCloseBtn = document.querySelector(".close-btn");

let userMessage;

const API_KEY = "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";
const inputInitHeight = liveInput.scrolHeight;

const createLiveLi = (message, className) => {
    //Create a live <li> element with passed massage and className
    const liveLi = document.createElement("li");
    liveLi.classList.add("live", className);
    let liveContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    liveLi.innerHTML = liveContent;
    liveLi.querySelector("p").textContent = message;
    return liveLi;
}

const generateResponse = (incomingLiveLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingLiveLi.querySelector("p");

    const requestOptions = {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body:JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role:"user", content: userMessage}]
        })
    }

    // Send POST request to API, get response
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => livebox.scrollTo(0, livebox.scrollHeight));
} 

const handleLive = () => {
    userMessage = liveInput.value.trim();
    if(!userMessage) return;
    liveInput.value = "";
    liveInput.style.height = `${inputInitHeight}px`;


    //Append the user's massage to the livebox
    livebox.appendChild(createLiveLi(userMessage,"outgoing"));
    livebox.scrollTo(0, livebox.scrollHeight);

    setTimeout(() => {
        //display "Thinking..." message while waiting for the response
        const incomingLiveLi = createLiveLi("Thinking...","incoming")
        livebox.appendChild(incomingLiveLi);
        livebox.scrollTo(0, livebox.scrollHeight);
        generateResponse(incomingLiveLi);

    }, 600);

}
liveInput.addEventListener("input", () => {
    //Adjust th eheight of the input textarea basedmon its content
    liveInput.style.height = `${inputInitHeight}px`;
    liveInput.style.height = `${liveInput.scrollHeight}px`;
});

liveInput.addEventListener("keydown", (e) => {
    // If enter key is pressed without Shift key and the window
    //width is greater than 800px, handle the live
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800){
        e.preventDefault();
        handleLive();
    }
});

sendLiveBtn.addEventListener("click",handleLive);
livebotCloseBtn.addEventListener("click",() => document.body.classList.remove("show-livebot"));
livebotToggler.addEventListener("click",() => document.body.classList.toggle("show-livebot"));

