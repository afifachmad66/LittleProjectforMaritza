/*==================================================
    PROJECT MARITZA v1.0 STABLE
    Created by : Afif
==================================================*/


/* ===========================
   ELEMENT
=========================== */

const opening = document.getElementById("opening");
const verifyPopup = document.getElementById("verifyPopup");
const introScreen = document.getElementById("introScreen");
const storyScreen = document.getElementById("storyScreen");
const gallery = document.getElementById("gallery");

const galleryImage = document.getElementById("galleryImage");
const photoCounter = document.getElementById("photoCounter");

const storyText = document.getElementById("storyText");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");

let fadeInterval = null;

function playMusic(){

    if(fadeInterval) clearInterval(fadeInterval);

    bgMusic.play();

    let volume = bgMusic.volume;

    fadeInterval = setInterval(()=>{

        volume += 0.02;

        bgMusic.volume = Math.min(volume, 0.35);

        if(bgMusic.volume >= 0.35){

            clearInterval(fadeInterval);

        }

    },100);

}

function fadeOutMusic(){

    if(fadeInterval) clearInterval(fadeInterval);

    let volume = bgMusic.volume;

    fadeInterval = setInterval(()=>{

        volume -= 0.05;

        bgMusic.volume = Math.max(volume, 0);

        if(bgMusic.volume <= 0){

            bgMusic.pause();

            clearInterval(fadeInterval);

        }

    },50);

}

/* ===========================
   DATA
=========================== */

const photos = [
    "gambar/gambar1.jpg",
    "gambar/gambar2.jpg",
    "gambar/gambar3.jpg",
    "gambar/gambar4.jpg",
    "gambar/gambar5.jpg",
    "gambar/gambar6.jpg",
    "gambar/gambar7.jpg",
    "gambar/gambar8.jpg",
    "gambar/gambar9.jpg",
    "gambar/gambar10.jpg",
    "gambar/gambar11.jpg",
    "gambar/gambar12.jpg",
    "gambar/gambar13.jpg",
    "gambar/gambar14.jpg",
    "gambar/gambar15.jpg",
    "gambar/gambar16.jpg",
    "gambar/gambar17.jpg",
    "gambar/gambar18.jpg",
    "gambar/gambar19.jpg",
    "gambar/gambar20.jpg",
    "gambar/gambar21.jpg",
    "gambar/gambar22.jpg",
    "gambar/gambar23.jpg",
    "gambar/gambar24.jpg",
    "gambar/gambar25.jpg",
    "gambar/gambar26.jpg",
    "gambar/gambar27.jpg",
    "gambar/gambar28.jpg",
    "gambar/gambar29.jpg",
    "gambar/gambar30.jpg",
    "gambar/gambar31.jpg",
    "gambar/gambar32.jpg",
    "gambar/gambar33.jpg",
    "gambar/gambar34.jpg",
    "gambar/gambar35.jpg",
    "gambar/gambar36.jpg",
    "gambar/gambar37.jpg",
    "gambar/gambar38.jpg",
    "gambar/gambar39.jpg",
    "gambar/gambar40.jpg"
];

let currentPhoto = 0;

let noCount = 0;


/* ===========================
   OPENING
=========================== */

startBtn.addEventListener("click",()=>{

    verifyPopup.classList.remove("hidden");
    playMusic();

});


/* ===========================
   VERIFY
=========================== */
const confirmPopup = document.getElementById("confirmPopup");
const confirmText = document.getElementById("confirmText");
const backBtn = document.getElementById("backBtn");
const maritzaBtn = document.getElementById("maritzaBtn");

yesBtn.onclick = () => {

    playMusic();
    verifyPopup.classList.add("hidden");
    opening.classList.add("hidden");

    showIntro();

};

const noMessages = [
    "😛 Ah yang bener 😛",
    "🤭 Masa iya bukan Maritza? 🤭",
    "🫣 Yakin banget nih bukan? 🫣",
];

noBtn.onclick = () => {

    confirmText.innerHTML = noMessages[noCount];

    verifyPopup.classList.add("hidden");
    confirmPopup.classList.remove("hidden");
};

backBtn.onclick = () => {

    confirmPopup.classList.add("hidden");
    verifyPopup.classList.remove("hidden");

    if(noCount < noMessages.length - 1){
        noCount++;
    }

};

maritzaBtn.onclick = () => {
  
    playMusic();
    confirmPopup.classList.add("hidden");
    verifyPopup.classList.add("hidden");
    opening.classList.add("hidden");

    showIntro();

};

/* ===========================
   INTRO
=========================== */

function showIntro(){

    introScreen.classList.remove("hidden");

    setTimeout(()=>{

        introScreen.classList.add("hidden");

        showStory();

    },4000);

}


/* ===========================
   STORY
=========================== */

function showStory(){

    storyScreen.classList.remove("hidden");

    setTimeout(()=>{

        storyText.classList.add("show");

    },300);

    setTimeout(()=>{

        storyText.innerHTML="And this is ours.";

    },2500);

    setTimeout(()=>{

        storyScreen.classList.add("hidden");

        startGallery();

    },5000);

}
/* ===========================
   GALLERY
=========================== */

function startGallery(){

    gallery.classList.remove("hidden");

    currentPhoto = 0;

    showPhoto();

}

function showPhoto(){

    galleryImage.classList.remove("show");

    setTimeout(()=>{

        galleryImage.src = photos[currentPhoto];

        photoCounter.innerHTML = `${currentPhoto+1} / ${photos.length}`;

        galleryImage.onload = ()=>{

            galleryImage.classList.add("show");

        };

    },400);

    setTimeout(()=>{

        nextPhoto();

    },3500);

}

function nextPhoto(){

    currentPhoto++;

    if(currentPhoto >= photos.length){

        gallery.classList.add("hidden");

        startVideo();

        return;

    }

    showPhoto();

}

/* ===========================
   VIDEO
=========================== */

const videoScreen = document.getElementById("videoScreen");
const memoryVideo = document.getElementById("memoryVideo");

const videos = [

    "video/video1.mp4",
    "video/video2.mp4",
];

let currentVideo = 0;

function startVideo(){

    fadeOutMusic();

    videoScreen.classList.remove("hidden");

    playVideo();

}

function playVideo(){

    memoryVideo.src = videos[currentVideo];

    memoryVideo.load();

    memoryVideo.play().catch(err=> {
        console.log(err);
    });

}

memoryVideo.addEventListener("ended",()=>{

    currentVideo++;

    if(currentVideo < videos.length){

        playVideo();

    }else{

        videoScreen.classList.add("hidden");

        playMusic();

        startBouquet();

    }

});
/* ===========================
   BOUQUET
=========================== */
// ===============================
// BOUQUET
// ===============================

const bouquet = document.getElementById("bouquet");
const sparkleContainer = document.getElementById("sparkleContainer");
const petalContainer = document.getElementById("petalContainer");

let bouquetTouched = false;

// ===============================
// SPARKLE
// ===============================

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random()*100 + "vw";
    sparkle.style.top = (70 + Math.random()*25) + "vh";

    sparkle.style.animationDuration =
        (3 + Math.random()*3) + "s";

    sparkle.style.opacity = Math.random();

    sparkleContainer.appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },6000);

}

setInterval(createSparkle,300);

// ===============================
// PETAL
// ===============================
function createPetals(){

    const petalImages=[
        "asset/petal1.png",
        "asset/petal2.png",
        "asset/petal3.png",
        "asset/petal4.png"
    ];

    for(let i=0;i<60;i++){

        const petal=document.createElement("img");

        petal.src=petalImages[Math.floor(Math.random()*petalImages.length)];

        petal.className="petal";

        petal.style.left="50%";
        petal.style.top="45%";

        petal.style.width=(18+Math.random()*18)+"px";

        petalContainer.appendChild(petal);

        const angle=Math.random()*360;
        const distance=250+Math.random()*300;

        const x=Math.cos(angle*Math.PI/180)*distance;
        const y=Math.sin(angle*Math.PI/180)*distance;

        petal.animate([
            {
                transform:"translate(0,0) rotate(0deg)",
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px) rotate(${720+Math.random()*720}deg)`,
                opacity:0
            }
        ],{
            duration:2500+Math.random()*1200,
            easing:"ease-out",
            fill:"forwards"
        });

        setTimeout(()=>{
            petal.remove();
        },4000);

    }

}

// ===============================
// CLICK
// ===============================

function startBouquet() {
    const bouquetScreen = document.getElementById("bouquetScreen");
    bouquetScreen.classList.remove("hidden");
}

bouquet.onclick = () => {
    if (bouquetTouched) return;
    bouquetTouched = true;
    createPetals();
    setTimeout(() => {
        const bouquetScreen = document.getElementById("bouquetScreen");
        bouquetScreen.classList.add("hidden");
        showLetter();
    }, 3000);
};


/* ===========================
   LETTER
=========================== */

const letterScreen = document.getElementById("letterScreen");
const letterContent = document.getElementById("letterContent");
const finishBtn = document.getElementById("finishBtn");

const letterText = `Hi sayang, sebenarnya ini mau tak kasih pas waktu kamu wisuda beserta bucket aslinya trus bisa kamu scan muncul ini gitu abis itu kita ngerayain bareng. Tapi ternyata jalan kita gak sepanjang itu 🥹. Tapi gpp kamu juga kelihatan jauh lebih seneng dan bahagia sama pilihanmu, yah walaupun masih belum rela juga sih sampe sekarang liatnya. Sebenarnya waktu kamu ajak photobooth aku seneng jadi bisa ngelengkapin ini dan aku udah kepikiran mau ajak kemana aja, tapi gagal dan mau gamau aku cuma isi dengan pap random cantikmu aja. Kalo boleh jujur masih berharap buat kamu kembali🥹, tapi keknya udah gak mungkin banget.
🌸`;

let letterIndex = 0;

function showLetter(){

    letterScreen.classList.remove("hidden");

    letterContent.innerHTML = "";

    typeLetter();

}

function typeLetter(){

    if(letterIndex < letterText.length){

        letterContent.innerHTML += letterText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,40);

    }

}

finishBtn.addEventListener("click",()=>{

    letterScreen.classList.add("hidden");

    showEnding();

});


/* ===========================
   ENDING
=========================== */

const endingScreen = document.getElementById("endingScreen");
const replayBtn = document.getElementById("replayBtn");

function showEnding(){

    endingScreen.classList.remove("hidden");

}

replayBtn.addEventListener("click",()=>{
  fadeOutMusic();
  bgMusic.currentTime = 0;

    currentPhoto = 0;

    currentVideo = 0;

    letterIndex = 0;

    bouquetTouched = false;

    endingScreen.classList.add("hidden");

    opening.classList.remove("hidden");

});


/* ===========================
   START
=========================== */

window.addEventListener("load",()=>{

    opening.classList.remove("hidden");

});