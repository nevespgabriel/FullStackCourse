

for(let c=0; c<document.querySelectorAll("button.drum").length; c++){
    document.querySelectorAll("button.drum")[c].addEventListener("click", function() {
        letter = this.textContent;
        let path;
        switch(letter){
            case 'w':
                path = "sounds/tom-1.mp3";
                break;
            case 'a':
                path = "sounds/tom-2.mp3";
                break;
            case 's':
                path = "sounds/tom-3.mp3";
                break;
            case 'd':
                path = "sounds/tom-4.mp3";
                break;
            case 'j':
                path = "sounds/snare.mp3";
                break;
            case 'k':
                path = "sounds/crash.mp3";
                break;
            case 'l':
                path = "sounds/kick-bass.mp3";
                break;
        }
        const sound = new Audio(path);
        sound.play();
    });
}

