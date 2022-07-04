console.log("Welcome to spotify");
let audioElement=new Audio('./audio/1.mp3');//constructor that creates an audio API's
let index=1;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songitems=Array.from(document.getElementsByClassName('song-items'))
let songs=[
    {songname: "Journey Song" ,filePath:"audio/pal.mp3",coverPath:"cover/1.jpg"},
    {songname: "Desi Kalakaar" ,filePath:"audio/2.mp3",coverPath:"cover/2.jpg"},
    {songname: "Arambh" ,filePath:"audio/3.mp3",coverPath:"cover/3.jpg"},
    {songname: "Kyon" ,filePath:"audio/4.mp3",coverPath:"cover/4.jpg"},
    {songname: "Te Amo" ,filePath:"audio/5.mp3",coverPath:"cover/5.jpg"},
    {songname: "Daru Badnam" ,filePath:"audio/6.mp3",coverPath:"cover/6.jpg"},
    {songname: "Kya Mujhe Payaar Hai" ,filePath:"audio/7.mp3",coverPath:"cover/7.jpg"},
    {songname: "Mast Magan - Arijit Singh " ,filePath:"audio/8.mp3",coverPath:"cover/8.jpg"},
]
songitems.forEach((element,i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;

});
//Handle Pause/Play button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity =1;
    }
    else if(audioElement.play){
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity =0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress=parseFloat((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;

});
const makeAllPlay=()=>{
    songItemPlay.forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
//previous one automatically gets  paused/play
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
songItemPlay.forEach((element) =>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`audio/${index}.mp3`;
        masterSongName.innerText=songs[index].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
//for next/previous 
let next=document.getElementById('next');
next.addEventListener('click',()=> { 
    if(index>=8){
        index=1;
    }
    else{
        index+=1;
    }
    audioElement.src=`audio/${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText=songs[index].songname;
})
let previous=document.getElementById('previous');
previous.addEventListener('click',()=> {
    if(index<=1){
        index=1;
    }
    else{
        index-=1;
    }
    audioElement.src=`audio/${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText=songs[index].songname;
})
