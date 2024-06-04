///////////////////////////////////////////////////////////////////////////////////////////////
function updateCentralTime() {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  const centralOffset = 5; // Central Time (UTC-5) or 6 for daylight saving time
  const centralTime = new Date(currentTime.setHours(currentTime.getHours() - utcOffset + centralOffset));

  const hours = centralTime.getHours().toString().padStart(2, '0');
  const minutes = centralTime.getMinutes().toString().padStart(2, '0');
  const seconds = centralTime.getSeconds().toString().padStart(2, '0');

  const formattedTime = `${hours}:${minutes}`;

  document.getElementById('central-clock').style.color = '#db7093';
  document.getElementById('central-clock').style.fontSize = '80px';
  document.getElementById('central-clock').innerHTML = formattedTime;
  document.getElementById('central-clock').style.textAlign = 'middle';
}

// Update the Central Time clock every second
setInterval(updateCentralTime, 1000);

//////////////////////////////////////////////////////////////////////////////////////////////

// List of wallpaper image URLs
const wallpapers = [
  'Images/Wallpapers/wallpaper1.jpg',
  'Images/Wallpapers/wallpaper2.jpg',
  'Images/Wallpapers/wallpaper3.jpg',
  'Images/Wallpapers/wallpaper4.jpg',
  'Images/Wallpapers/wallpaper5.jpg',
  'Images/Wallpapers/wallpaper6.jpg',
  'Images/Wallpapers/wallpaper7.jpg',
  'Images/Wallpapers/wallpaper8.jpg',
  'Images/Wallpapers/wallpaper9.jpg',
  'Images/Wallpapers/wallpaper10.jpg',
  'Images/Wallpapers/wallpaper11.jpg',
  'Images/Wallpapers/wallpaper12.jpg',

  // Add more wallpaper URLs as needed//akslkndlknakndlkanlk
];

// Function to change wallpaper
function changeWallpaper() {
  const wallpaperContainer = document.getElementById('wallpaper-container');
  const randomIndex = Math.floor(Math.random() * wallpapers.length);
  wallpaperContainer.style.backgroundImage = `url(${wallpapers[randomIndex]})`;
}

// Change wallpaper on page load
window.onload = changeWallpaper;

// Optional: Change wallpaper every 10 minutes
setInterval(changeWallpaper, 60 * 1000);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function () {
  var audioFiles = [
    'Auido/Background Audio/Your Lie in April OPOpening Theme - Hikaru Nara.mp3',
    'Auido/Background Audio/1nonly - My Girl.mp3',
    'Auido/Background Audio/Glitch In The Simulation by Gryffin.mp3',
    'Auido/Background Audio/In My Mind by Dynoro.mp3',
    'Auido/Background Audio/Let You Down by Dawid Podsiadlo.mp3',
    'Auido/Background Audio/Juice WRLD - I Love You (Unreleased) [Prod. Max Chris].mp3',
    'Auido/Background Audio/Listen to I Really Want to Stay at Your House by Rosa Walton & Hallie Coggins I Really Want to Stay at Your House by Rosa Walton.mp3',
    'Auido/Background Audio/RØNIN - ALL GIRLS ARE THE SAME.mp3',
    'Auido/Background Audio/Shotgun Willy - Winnebago.mp3',
    'Auido/Background Audio/Suicidal idol - ecstacy (Slowed).mp3',
    'Auido/Background Audio/You look lonely, I can fix that.mp3'
  ];

  function getRandomAudioFile() {
      var randomIndex = Math.floor(Math.random() * audioFiles.length);
      return audioFiles[randomIndex];
  }

  var audio = document.getElementById("background-music");

  function playRandomSong() {
      var randomFile = getRandomAudioFile();
      console.log("Playing:", randomFile); // Debugging
      audio.src = randomFile;
      audio.play().catch(function(error) {
          console.log("Playback error:", error); // Debugging
      });
  }

  audio.volume = 0.02; // Set volume to 20% for testing
  audio.controls = true; // Add controls for testing
  playRandomSong();

  audio.addEventListener('ended', function () {
      playRandomSong();
  });
});

//////////////////////////////////////////////////////////////////////////////////////
