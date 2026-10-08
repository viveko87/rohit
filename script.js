// Relationship configuration: keep the existing counter date; change it when the couple confirms another date.
const relationshipStartDate = "2026-09-08T00:00:00";
const boyfriendName = "Your Name";
const girlfriendName = "Her Name";

const memories = [
  {
    image: "assets/images/photo1.jpg",
    title: "That Smile ❤️",
    description: "The smile I could look at forever.",
  },
  {
    image: "assets/images/photo2.jpg",
    title: "Our Crazy Moment 😂",
    description: "One of those moments we will always remember.",
  },
  {
    image: "assets/images/photo3.jpg",
    title: "My Favorite Memory 🌸",
    description: "A moment that became special.",
  },
  {
    image: "assets/images/photo4.jpg",
    title: "Us 🥺❤️",
    description: "Just you and me.",
  },
  {
    image: "assets/images/photo1.jpg",
    title: "That Beautiful Day ✨",
    description: "A memory worth keeping forever.",
  },
  {
    image: "assets/images/photo2.jpg",
    title: "Forever Memory 💜",
    description: "One more beautiful chapter of us.",
  },
];

let songs = [];
const backgroundSongSource = "assets/music/Until I Found You - Stephen Sanchez (AI Filtered Instrumental).mp3";
const uploadedSongsDatabaseName = "romantic-anniversary-songs";
const uploadedSongsStoreName = "songs";

const promises = [
  {
    icon: "❤️",
    title: "I Promise To Listen",
    description: "Even when we don't agree, I'll listen to your heart and try to understand you.",
  },
  {
    icon: "🌹",
    title: "I Promise To Respect You",
    description: "Your feelings, your dreams, your opinions and your boundaries will always matter to me.",
  },
  {
    icon: "🥺",
    title: "I Promise To Say Sorry",
    description: "When I'm wrong, I'll put my ego aside and say sorry.",
  },
  {
    icon: "🧸",
    title: "I Promise To Make You Smile",
    description: "I'll keep finding little ways to make your ordinary days feel special.",
  },
  {
    icon: "💜",
    title: "I Promise To Stay",
    description: "Through good days, difficult days, silly fights and everything between them, I'll keep choosing us.",
  },
  {
    icon: "♾️",
    title: "I Promise To Choose You",
    description: "Not just today. Not just for this month. But again and again.",
  },
];

const thingsILove = [
  {
    icon: "❤️",
    title: "Your Smile",
    description: "The kind of smile that can instantly make my day better.",
  },
  {
    icon: "🌸",
    title: "Your Nature",
    description: "The beautiful person you are from the inside.",
  },
  {
    icon: "🥺",
    title: "The Way You Care",
    description: "Even your little acts of care mean so much to me.",
  },
  {
    icon: "😂",
    title: "Your Cute Anger",
    description: "Even when you're angry, somehow you're still adorable.",
  },
  {
    icon: "🧸",
    title: "Your Cuteness",
    description: "Honestly, sometimes you're just too cute to handle.",
  },
  {
    icon: "✨",
    title: "The Way You Make Me Happy",
    description: "Somehow you make ordinary moments feel special.",
  },
  {
    icon: "💜",
    title: "The Way You Understand Me",
    description: "Being understood by you means more than I can explain.",
  },
  {
    icon: "🌹",
    title: "Simply... YOU",
    description: "I don't need a reason. I just love you for being you.",
  },
];

const openHeartButton = document.querySelector("#open-heart");
const nextSection = document.querySelector("#one-month");
const celebrationBurst = document.querySelector(".celebration-burst");
const welcomeScreen = document.querySelector("#welcome-screen");
const enterButton = document.querySelector("#enter-button");
const websiteContent = document.querySelector("#website-content");
const welcomeParticles = document.querySelector(".welcome-screen__particles");
const anniversarySection = document.querySelector(".anniversary-section");
const anniversaryHearts = document.querySelector(".anniversary-hearts");
const memoriesSection = document.querySelector(".memories-section");
const memoryGrid = document.querySelector("#memory-grid");
const memoriesHearts = document.querySelector(".memories-hearts");
const loveSection = document.querySelector(".love-section");
const loveGrid = document.querySelector("#love-grid");
const apologySection = document.querySelector(".apology-section");
const apologyLetterStage = document.querySelector(".apology-letter-stage");
const openLetterButton = document.querySelector("#open-letter");
const apologyLetter = document.querySelector("#apology-letter");
const forgiveButton = document.querySelector("#forgive-button");
const forgivenessResponse = document.querySelector("#forgiveness-response");
const forgivenessConfetti = document.querySelector(".forgiveness__confetti");
const proposalSection = document.querySelector(".proposal-section");
const proposalButtons = document.querySelectorAll(".proposal-button");
const proposalParticles = document.querySelector(".proposal-particles");
const proposalCelebration = document.querySelector(".proposal-celebration");
const promisesSection = document.querySelector(".promises-section");
const promisesGrid = document.querySelector("#promises-grid");
const reProposalSection = document.querySelector(".reproposal-section");
const reProposalQuestionText = document.querySelector("#reproposal-question span");
const reProposalYesButton = document.querySelector("#reproposal-yes");
const reProposalThinkButton = document.querySelector("#reproposal-think");
const reProposalThinkMessage = document.querySelector("#reproposal-think-message");
const reProposalThinkCloseButton = document.querySelector("#reproposal-think-close");
const reProposalCelebration = document.querySelector("#reproposal-celebration");
const reProposalCelebrationParticles = document.querySelector(".reproposal-celebration__particles");
const reProposalCelebrationCloseButton = document.querySelector("#reproposal-celebration-close");
const storyEnding = document.querySelector("#ending");
const storyStartDate = document.querySelector("#story-start-date");
const storyLetterGreeting = document.querySelector("#story-letter-greeting");
const storyLetterSignature = document.querySelector("#story-letter-signature");
const replayStoryButton = document.querySelector("#replay-story");
const replayStoryToast = document.querySelector("#story-replay-toast");
const finalSurpriseButton = document.querySelector("#open-final-surprise");
const finalSurpriseMessage = document.querySelector("#final-surprise-message");
const chapterDock = document.querySelector(".chapter-dock");
const chapterDockToggle = document.querySelector("#chapter-dock-toggle");
const chapterDockMenu = document.querySelector("#chapter-dock-menu");
const chapterMenuLinks = document.querySelectorAll(".chapter-dock__menu [data-chapter-target]");
const promiseModal = document.querySelector("#promise-modal");
const makePromiseButton = document.querySelector("#make-promise");
const closePromiseModalButton = document.querySelector("#promise-modal-close");
const acceptPromiseButton = document.querySelector("#promise-accept");
const promiseResponse = document.querySelector("#promise-response");
const promiseModalParticles = document.querySelector(".promise-modal__particles");
const promisesParticles = document.querySelector(".promises-particles");
const backgroundAudio = document.querySelector("#backgroundMusic");
const audio = document.querySelector("#soundtrackAudio");
const musicPlayer = document.querySelector(".music-player");
const albumArtwork = document.querySelector("#album-artwork");
const songTitle = document.querySelector("#song-title");
const songArtist = document.querySelector("#song-artist");
const musicStatus = document.querySelector("#music-status");
const playlistItems = document.querySelector("#playlist-items");
const addSongButton = document.querySelector("#add-song-button");
const musicUploadDialog = document.querySelector("#music-upload-dialog");
const musicUploadForm = document.querySelector("#music-upload-form");
const uploadSongTitle = document.querySelector("#upload-song-title");
const uploadSongSubtitle = document.querySelector("#upload-song-subtitle");
const uploadSongFile = document.querySelector("#upload-song-file");
const uploadSongFileField = document.querySelector("#upload-song-file-field");
const musicUploadStatus = document.querySelector("#music-upload-status");
const cancelSongUploadButton = document.querySelector("#cancel-song-upload");
const removeSongDialog = document.querySelector("#remove-song-dialog");
const removeSongName = document.querySelector("#remove-song-name");
const confirmRemoveSongButton = document.querySelector("#confirm-remove-song");
const cancelRemoveSongButton = document.querySelector("#cancel-remove-song");
const playPauseButton = document.querySelector("#play-pause");
const previousSongButton = document.querySelector("#previous-song");
const nextSongButton = document.querySelector("#next-song");
const progressBar = document.querySelector("#progress-bar");
const currentTimeDisplay = document.querySelector("#current-time");
const durationDisplay = document.querySelector("#duration");
const volumeSlider = document.querySelector("#volume-slider");
const muteButton = document.querySelector("#mute-button");
const memoryLightbox = document.querySelector("#memory-lightbox");
const lightboxImage = memoryLightbox.querySelector(".memory-lightbox__image");
const lightboxTitle = memoryLightbox.querySelector("#lightbox-title");
const lightboxDescription = memoryLightbox.querySelector("#lightbox-description");
const lightboxCloseButton = memoryLightbox.querySelector(".memory-lightbox__close");
const lightboxPreviousButton = memoryLightbox.querySelector(".memory-lightbox__nav--previous");
const lightboxNextButton = memoryLightbox.querySelector(".memory-lightbox__nav--next");
const relationshipStartTimestamp = new Date(relationshipStartDate).getTime();
const counterElements = {
  days: document.querySelector("#counter-days"),
  hours: document.querySelector("#counter-hours"),
  minutes: document.querySelector("#counter-minutes"),
  seconds: document.querySelector("#counter-seconds"),
};
let currentSongIndex = 0;
let isStartingPlayback = false;
let lastNonzeroVolume = 0.75;
let experienceStarted = false;
let currentChapterId = "hero";
let soundtrackSectionActive = false;
let savedBackgroundPosition = 0;
let uploadedSongsDatabasePromise = null;
const uploadedSongObjectUrls = new Map();
let editingSongId = null;
let pendingRemoveSongId = null;
let previousFocusBeforePromise = null;
let previousBodyOverflowBeforePromise = "";
let promiseModalComplete = false;
let reProposalCelebrationStarted = false;
let previousFocusBeforeReProposalCelebration = null;
let previousBodyOverflowBeforeReProposalCelebration = "";
let reProposalTypewriterStarted = false;
let storyEndingObserver = null;
let replayToastTimeout = null;
let chapterArrivalTimeout = null;
let chapterScrollFallbackTimeout = null;
let pendingChapterArrivalHandler = null;

window.scrollTo(0, 0);

if (Number.isNaN(relationshipStartTimestamp)) {
  throw new Error("relationshipStartDate must be a valid date and time.");
}

function updateRelationshipCounter() {
  const elapsedSeconds = Math.floor(
    Math.max(0, Date.now() - relationshipStartTimestamp) / 1000,
  );
  const days = Math.floor(elapsedSeconds / 86400);
  const hours = Math.floor((elapsedSeconds % 86400) / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  counterElements.days.textContent = String(days).padStart(2, "0");
  counterElements.hours.textContent = String(hours).padStart(2, "0");
  counterElements.minutes.textContent = String(minutes).padStart(2, "0");
  counterElements.seconds.textContent = String(seconds).padStart(2, "0");
}

function configureStoryEnding() {
  const dateOnly = relationshipStartDate.slice(0, 10);
  const parsedStartDate = new Date(`${dateOnly}T12:00:00`);
  if (!Number.isNaN(parsedStartDate.getTime())) {
    storyStartDate.dateTime = dateOnly;
    storyStartDate.textContent = new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(parsedStartDate);
  } else {
    storyStartDate.textContent = dateOnly;
  }

  if (girlfriendName !== "Her Name") {
    storyLetterGreeting.textContent = `Hey ${girlfriendName}... ❤️`;
  }
  if (boyfriendName !== "Your Name") {
    storyLetterSignature.textContent = `Your Man, ${boyfriendName} ❤️`;
  }
}

function closeChapterMenu() {
  chapterDock.classList.remove("is-open");
  chapterDockToggle.setAttribute("aria-expanded", "false");
  chapterDockToggle.setAttribute("aria-label", "Open chapter navigation");
  chapterDockMenu.setAttribute("aria-hidden", "true");
}

function enterSoundtrackSection() {
  if (soundtrackSectionActive) {
    return;
  }

  savedBackgroundPosition = backgroundAudio.currentTime || savedBackgroundPosition;
  backgroundAudio.pause();
  backgroundAudio.currentTime = savedBackgroundPosition;
  audio.pause();
  audio.currentTime = 0;
  soundtrackSectionActive = true;
  updatePlayerUI(false);
  updateProgress();
}

function leaveSoundtrackSection() {
  if (!soundtrackSectionActive) {
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  updatePlayerUI(false);
  updateProgress();
  soundtrackSectionActive = false;

  if (!experienceStarted || !backgroundAudio.getAttribute("src")) {
    return;
  }

  backgroundAudio.currentTime = savedBackgroundPosition;
  backgroundAudio.play().catch((error) => {
    console.warn("Background music could not resume after leaving the soundtrack:", error);
  });
}

function navigateToChapter(targetId) {
  const destination = document.getElementById(targetId);
  if (!destination) {
    return;
  }

  if (targetId === "music") {
    enterSoundtrackSection();
  } else {
    leaveSoundtrackSection();
  }
  currentChapterId = targetId;
  updateActiveChapter(targetId);
  closeChapterMenu();
  if (pendingChapterArrivalHandler) {
    window.removeEventListener("scrollend", pendingChapterArrivalHandler);
    pendingChapterArrivalHandler = null;
  }
  if (chapterScrollFallbackTimeout !== null) {
    window.clearTimeout(chapterScrollFallbackTimeout);
    chapterScrollFallbackTimeout = null;
  }
  if (chapterArrivalTimeout !== null) {
    window.clearTimeout(chapterArrivalTimeout);
    chapterArrivalTimeout = null;
  }
  document.querySelectorAll(".chapter-arrival").forEach((section) => section.classList.remove("chapter-arrival"));

  const showArrivalGlow = () => {
    if (pendingChapterArrivalHandler) {
      window.removeEventListener("scrollend", pendingChapterArrivalHandler);
      pendingChapterArrivalHandler = null;
    }
    if (chapterScrollFallbackTimeout !== null) {
      window.clearTimeout(chapterScrollFallbackTimeout);
      chapterScrollFallbackTimeout = null;
    }
    destination.classList.add("chapter-arrival");
    chapterArrivalTimeout = window.setTimeout(() => {
      destination.classList.remove("chapter-arrival");
      chapterArrivalTimeout = null;
    }, 1600);
  };

  pendingChapterArrivalHandler = showArrivalGlow;
  window.addEventListener("scrollend", showArrivalGlow, { once: true });
  const expectedScrollDuration = Math.min(
    2800,
    Math.max(500, Math.abs(destination.getBoundingClientRect().top) / 5),
  );
  chapterScrollFallbackTimeout = window.setTimeout(showArrivalGlow, expectedScrollDuration);
  destination.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateActiveChapter(activeId) {
  chapterMenuLinks.forEach((link) => {
    if (link.dataset.chapterTarget === activeId) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "location");
    } else {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    }
  });
}

function showReplayToast() {
  replayStoryToast.classList.add("is-visible");
  replayStoryToast.setAttribute("aria-hidden", "false");
  if (replayToastTimeout !== null) {
    window.clearTimeout(replayToastTimeout);
  }
  replayToastTimeout = window.setTimeout(() => {
    replayStoryToast.classList.remove("is-visible");
    replayStoryToast.setAttribute("aria-hidden", "true");
    replayToastTimeout = null;
  }, 3600);
}

function replayStory() {
  storyEnding.classList.remove("is-visible");
  storyEnding.classList.remove("surprise-revealed");
  finalSurpriseMessage.hidden = true;
  finalSurpriseMessage.classList.remove("is-visible");
  finalSurpriseButton.setAttribute("aria-expanded", "false");
  finalSurpriseButton.textContent = "Open It 💌";
  if (storyEndingObserver) {
    storyEndingObserver.unobserve(storyEnding);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  showReplayToast();

  if (storyEndingObserver) {
    let fallbackTimeout = null;
    const observeEndingAgain = () => {
      if (fallbackTimeout !== null) {
        window.clearTimeout(fallbackTimeout);
      }
      window.removeEventListener("scrollend", observeEndingAgain);
      storyEndingObserver.observe(storyEnding);
    };
    window.addEventListener("scrollend", observeEndingAgain, { once: true });
    fallbackTimeout = window.setTimeout(observeEndingAgain, 2000);
  }
}

function revealFinalSurprise() {
  if (finalSurpriseButton.getAttribute("aria-expanded") === "true") {
    return;
  }
  finalSurpriseButton.setAttribute("aria-expanded", "true");
  finalSurpriseButton.textContent = "A little note for you 💜";
  finalSurpriseMessage.hidden = false;
  storyEnding.classList.add("surprise-revealed");
  window.requestAnimationFrame(() => finalSurpriseMessage.classList.add("is-visible"));
}

function createWelcomeParticles() {
  const decorations = ["❤️", "💕", "✨", "💜", "✧"];
  for (let index = 0; index < 18; index += 1) {
    const particle = document.createElement("span");
    particle.className = "welcome-screen__particle";
    particle.textContent = decorations[index % decorations.length];
    particle.style.left = `${7 + Math.random() * 86}%`;
    particle.style.setProperty("--welcome-particle-delay", `${Math.random() * 350}ms`);
    particle.style.setProperty("--welcome-particle-drift", `${Math.round((Math.random() - 0.5) * 130)}px`);
    welcomeParticles.append(particle);
    particle.addEventListener("animationend", () => particle.remove(), { once: true });
    window.setTimeout(() => particle.remove(), 1800);
  }
}

async function enterExperience() {
  if (experienceStarted) {
    return;
  }

  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  document.documentElement.style.scrollBehavior = previousScrollBehavior;

  experienceStarted = true;
  enterButton.disabled = true;
  welcomeScreen.classList.add("is-opening");
  createWelcomeParticles();

  try {
    if (!backgroundAudio.getAttribute("src")) {
      backgroundAudio.src = backgroundSongSource;
      backgroundAudio.load();
    }
    await backgroundAudio.play();
  } catch (error) {
    if (backgroundAudio.error || error.name === "NotSupportedError") {
      musicStatus.textContent = "The background song could not be played.";
    } else if (error.name === "NotAllowedError") {
      musicStatus.textContent = "Press Play in the music player to listen 🎵";
    } else {
      musicStatus.textContent = "Music could not start. Press Play to try again 🎵";
    }
  }

  welcomeScreen.classList.add("is-leaving");
  welcomeScreen.setAttribute("aria-hidden", "true");
  websiteContent.setAttribute("aria-hidden", "false");
  chapterDock.setAttribute("aria-hidden", "false");
  document.body.classList.remove("awaiting-experience");
  document.body.classList.add("experience-started");
  window.setTimeout(() => {
    welcomeScreen.hidden = true;
  }, 1100);
}

function formatTime(timeInSeconds) {
  if (!Number.isFinite(timeInSeconds) || timeInSeconds < 0) {
    return "0:00";
  }

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updatePlayerUI(isPlaying) {
  musicPlayer.classList.toggle("is-playing", isPlaying);
  playPauseButton.textContent = isPlaying ? "❚❚" : "▶";
  playPauseButton.setAttribute("aria-label", isPlaying ? "Pause music" : "Play music");

  const playlistButtons = playlistItems.querySelectorAll(".music-playlist__play");
  playlistButtons.forEach((button, index) => {
    const selected = index === currentSongIndex;
    button.textContent = selected && isPlaying ? "❚❚" : "▶";
    button.setAttribute(
      "aria-label",
      `${selected && isPlaying ? "Pause" : "Play"} ${songs[index]?.title || "song"}`,
    );
  });
}

function renderPlaylist() {
  playlistItems.replaceChildren();
  songs.forEach((song, index) => {
    const item = document.createElement("li");
    item.className = "music-playlist__item";
    item.dataset.songIndex = String(index);

    const icon = document.createElement("span");
    icon.className = "music-playlist__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "🎵";

    const details = document.createElement("div");
    details.className = "music-playlist__details";

    const title = document.createElement("div");
    title.className = "music-playlist__title";
    title.textContent = song.title;

    const artist = document.createElement("div");
    artist.className = "music-playlist__artist";
    artist.textContent = song.artist;
    const actions = document.createElement("div");
    actions.className = "music-playlist__song-actions";
    const editButton = document.createElement("button");
    editButton.className = "music-playlist__song-action";
    editButton.type = "button";
    editButton.dataset.editSong = song.id;
    editButton.textContent = "Edit ✏️";
    editButton.setAttribute("aria-label", `Edit ${song.title}`);
    const removeButton = document.createElement("button");
    removeButton.className = "music-playlist__song-action";
    removeButton.type = "button";
    removeButton.dataset.removeSong = song.id;
    removeButton.textContent = "Remove 🗑️";
    removeButton.setAttribute("aria-label", `Remove ${song.title}`);
    actions.append(editButton, removeButton);
    details.append(title, artist, actions);

    const playButton = document.createElement("button");
    playButton.className = "music-playlist__play";
    playButton.type = "button";
    playButton.dataset.playSong = String(index);
    playButton.setAttribute("aria-label", `Play ${song.title}`);
    playButton.textContent = "▶";

    item.append(icon, details, playButton);
    playlistItems.append(item);
  });
}

function updatePlaylistSelection() {
  playlistItems.querySelectorAll(".music-playlist__item").forEach((item, index) => {
    const selected = index === currentSongIndex;
    item.classList.toggle("is-current", selected);
    if (selected) {
      item.setAttribute("aria-current", "true");
    } else {
      item.removeAttribute("aria-current");
    }
  });
}

function loadSong(index = currentSongIndex) {
  if (songs.length === 0) {
    musicStatus.textContent = "Add a song to your playlist to begin 🎵";
    return;
  }

  currentSongIndex = (index + songs.length) % songs.length;
  const song = songs[currentSongIndex];

  audio.src = song.src;
  audio.load();
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  musicStatus.textContent = "";
  progressBar.value = "0";
  progressBar.max = "100";
  currentTimeDisplay.textContent = "0:00";
  durationDisplay.textContent = "0:00";
  updatePlaylistSelection();
  updatePlayerUI(false);
}

async function playSong() {
  if (isStartingPlayback || songs.length === 0 || !soundtrackSectionActive || currentChapterId !== "music") {
    if (!soundtrackSectionActive || currentChapterId !== "music") {
      musicStatus.textContent = "Choose a song when you reach Our Little Soundtrack 🎵";
    }
    return;
  }

  isStartingPlayback = true;
  try {
    backgroundAudio.pause();
    await audio.play();
    updatePlayerUI(!audio.paused);
  } catch (error) {
    updatePlayerUI(false);
    if (error.name === "NotAllowedError") {
      musicStatus.textContent = "Tap, touch, or press a key to start the music 🎵";
    } else {
      musicStatus.textContent = "This song could not be played. Try another audio file 💜";
    }
  } finally {
    isStartingPlayback = false;
  }
}

function pauseSong() {
  audio.pause();
  updatePlayerUI(false);
}

function nextSong() {
  if (songs.length === 0) {
    return;
  }
  loadSong(currentSongIndex + 1);
  playSong();
}

function previousSong() {
  if (songs.length === 0) {
    return;
  }

  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    updateProgress();
    return;
  }

  loadSong(currentSongIndex - 1);
  playSong();
}

function updateProgress() {
  if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
    progressBar.value = "0";
    progressBar.max = "100";
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    durationDisplay.textContent = "0:00";
    return;
  }

  progressBar.max = String(audio.duration);
  progressBar.value = String(audio.currentTime);
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  durationDisplay.textContent = formatTime(audio.duration);
}

function setProgress() {
  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    audio.currentTime = Number(progressBar.value);
    updateProgress();
  }
}

function setVolume() {
  const volume = Number(volumeSlider.value);
  audio.volume = volume;
  backgroundAudio.volume = volume;
  if (volume > 0) {
    lastNonzeroVolume = volume;
    audio.muted = false;
    backgroundAudio.muted = false;
  }
  updateMuteButton();
}

function updateMuteButton() {
  const muted = audio.muted || audio.volume === 0;
  muteButton.textContent = muted ? "🔇" : audio.volume < 0.5 ? "🔉" : "🔊";
  muteButton.setAttribute("aria-label", muted ? "Unmute" : "Mute");
  if (volumeSlider.value !== String(audio.volume)) {
    volumeSlider.value = String(audio.volume);
  }
}

function toggleMute() {
  if (audio.muted || audio.volume === 0) {
    audio.muted = false;
    audio.volume = lastNonzeroVolume || 0.75;
    backgroundAudio.muted = false;
    backgroundAudio.volume = audio.volume;
  } else {
    lastNonzeroVolume = audio.volume;
    audio.muted = true;
    backgroundAudio.muted = true;
  }
  updateMuteButton();
}

function initializeMusicPlayer() {
  backgroundAudio.volume = Number(volumeSlider.value);
  audio.volume = Number(volumeSlider.value);
  lastNonzeroVolume = audio.volume;

  backgroundAudio.addEventListener("error", () => {
    musicStatus.textContent = "The background song could not be played.";
  });
  audio.addEventListener("playing", () => {
    musicStatus.textContent = "";
    updatePlayerUI(true);
  });
  audio.addEventListener("pause", () => updatePlayerUI(false));
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("loadedmetadata", updateProgress);
  audio.addEventListener("durationchange", updateProgress);
  audio.addEventListener("volumechange", updateMuteButton);
  audio.addEventListener("ended", nextSong);
  audio.addEventListener("error", () => {
    updatePlayerUI(false);
    musicStatus.textContent = "This song could not be played. Try another audio file 💜";
  });

  currentSongIndex = 0;
  updatePlayerUI(false);
  updateProgress();
  void discoverSongs();
}

function openUploadedSongsDatabase() {
  if (uploadedSongsDatabasePromise) {
    return uploadedSongsDatabasePromise;
  }

  uploadedSongsDatabasePromise = new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("This browser does not support saved song storage."));
      return;
    }

    const request = window.indexedDB.open(uploadedSongsDatabaseName, 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(uploadedSongsStoreName)) {
        database.createObjectStore(uploadedSongsStoreName, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Could not open saved song storage."));
    request.onblocked = () => reject(new Error("Saved song storage is busy in another tab."));
  });

  uploadedSongsDatabasePromise.catch(() => {
    uploadedSongsDatabasePromise = null;
  });
  return uploadedSongsDatabasePromise;
}

async function readUploadedSongs() {
  const database = await openUploadedSongsDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(uploadedSongsStoreName, "readonly");
    const request = transaction.objectStore(uploadedSongsStoreName).getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Could not read saved songs."));
    transaction.onerror = () => reject(transaction.error || new Error("Could not read saved songs."));
  });
}

async function saveUploadedSong(song) {
  const database = await openUploadedSongsDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(uploadedSongsStoreName, "readwrite");
    transaction.objectStore(uploadedSongsStoreName).put(song);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not save this song."));
    transaction.onabort = () => reject(transaction.error || new Error("Saving this song was cancelled."));
  });
}

async function updateUploadedSong(id, title, subtitle) {
  const database = await openUploadedSongsDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(uploadedSongsStoreName, "readwrite");
    const store = transaction.objectStore(uploadedSongsStoreName);
    const request = store.get(id);
    request.onsuccess = () => {
      if (!request.result) {
        transaction.abort();
        reject(new Error("The selected saved song could not be found."));
        return;
      }
      store.put({ ...request.result, title, subtitle });
    };
    request.onerror = () => reject(request.error || new Error("Could not load the saved song to edit."));
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not update this song."));
    transaction.onabort = () => reject(transaction.error || new Error("Updating this song was cancelled."));
  });
}

async function deleteUploadedSong(id) {
  const database = await openUploadedSongsDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(uploadedSongsStoreName, "readwrite");
    transaction.objectStore(uploadedSongsStoreName).delete(id);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not remove this song."));
    transaction.onabort = () => reject(transaction.error || new Error("Removing this song was cancelled."));
  });
}

async function discoverSongs() {
  try {
    const savedSongs = await readUploadedSongs();
    songs = savedSongs
      .filter((savedSong) => savedSong.blob instanceof Blob
        && typeof savedSong.title === "string"
        && typeof savedSong.id === "string")
      .sort((first, second) => first.addedAt - second.addedAt)
      .map((savedSong) => {
        const source = URL.createObjectURL(savedSong.blob);
        uploadedSongObjectUrls.set(savedSong.id, source);
        return {
          id: savedSong.id,
          title: savedSong.title,
          artist: savedSong.subtitle || "",
          src: source,
          storage: "indexeddb",
        };
      });

    currentSongIndex = songs.length > 0 ? 0 : -1;
    renderPlaylist();
    const firstSong = songs[0];
    if (firstSong) {
      loadSong(0);
    } else {
      songTitle.textContent = "Choose a song for us ❤️";
      songArtist.textContent = "";
      musicStatus.textContent = "Add a song to your playlist to begin 🎵";
      updatePlaylistSelection();
      updatePlayerUI(false);
      updateProgress();
    }
  } catch (error) {
    console.error("Could not load uploaded songs from browser storage:", error);
    musicStatus.textContent = "Uploaded songs could not be loaded from this browser.";
  }
}

function isSupportedAudioFile(file) {
  const audioExtension = /\.(?:mp3(?:\.mpeg)?|mpeg|mpga|m4a|aac|ogg|oga|wav|flac|opus|aiff|wma)$/i;
  return file.type.startsWith("audio/") || audioExtension.test(file.name);
}

function verifyPlayableAudio(file) {
  return new Promise((resolve) => {
    const source = URL.createObjectURL(file);
    const probe = new Audio();
    let completed = false;
    const timeoutId = window.setTimeout(() => finish(false), 10000);

    const finish = (isPlayable) => {
      if (completed) {
        return;
      }
      completed = true;
      window.clearTimeout(timeoutId);
      probe.pause();
      probe.removeAttribute("src");
      probe.load();
      URL.revokeObjectURL(source);
      resolve(isPlayable);
    };

    probe.addEventListener("canplay", () => finish(true), { once: true });
    probe.addEventListener("error", () => finish(false), { once: true });
    probe.src = source;
    probe.load();
  });
}

function closeSongUploadDialog() {
  musicUploadDialog.close();
  musicUploadForm.reset();
  editingSongId = null;
  uploadSongFileField.hidden = false;
  uploadSongFile.required = true;
  musicUploadForm.querySelector(".music-upload__title").textContent = "Add Your Song ❤️";
  musicUploadForm.querySelector(".music-upload__submit").textContent = "Add Song ❤️";
  musicUploadStatus.textContent = "";
  addSongButton.focus();
}

function editUploadedSong(id) {
  const song = songs.find((entry) => entry.id === id);
  if (!song) {
    return;
  }

  editingSongId = id;
  musicUploadStatus.textContent = "";
  uploadSongTitle.value = song.title;
  uploadSongSubtitle.value = song.artist;
  uploadSongFile.value = "";
  uploadSongFile.required = false;
  uploadSongFileField.hidden = true;
  musicUploadForm.querySelector(".music-upload__title").textContent = "Edit Your Song ✏️";
  musicUploadForm.querySelector(".music-upload__submit").textContent = "Save Changes ❤️";
  musicUploadDialog.showModal();
  uploadSongTitle.focus();
}

function requestRemoveUploadedSong(id) {
  const song = songs.find((entry) => entry.id === id);
  if (!song) {
    return;
  }

  pendingRemoveSongId = id;
  removeSongName.textContent = song.title;
  removeSongDialog.showModal();
  cancelRemoveSongButton.focus();
}

async function removeUploadedSong() {
  const songIndex = songs.findIndex((song) => song.id === pendingRemoveSongId);
  if (songIndex < 0) {
    removeSongDialog.close();
    pendingRemoveSongId = null;
    return;
  }

  confirmRemoveSongButton.disabled = true;
  cancelRemoveSongButton.disabled = true;
  const [removedSong] = songs.splice(songIndex, 1);
  try {
    await deleteUploadedSong(removedSong.id);
  } catch (error) {
    songs.splice(songIndex, 0, removedSong);
    console.error("Could not remove uploaded song:", error);
    removeSongName.textContent = "This song could not be removed. Please try again.";
    confirmRemoveSongButton.disabled = false;
    cancelRemoveSongButton.disabled = false;
    return;
  }

  if (removedSong.id === songs[currentSongIndex]?.id || songIndex === currentSongIndex) {
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    currentSongIndex = songs.length > 0 ? Math.min(songIndex, songs.length - 1) : -1;
    if (currentSongIndex >= 0) {
      loadSong(currentSongIndex);
    } else {
      songTitle.textContent = "Choose a song for us ❤️";
      songArtist.textContent = "";
      updatePlayerUI(false);
      updateProgress();
    }
    musicStatus.textContent = "Song removed from our playlist ❤️";
  } else if (songIndex < currentSongIndex) {
    currentSongIndex -= 1;
  }

  const objectUrl = uploadedSongObjectUrls.get(removedSong.id);
  if (objectUrl) {
    URL.revokeObjectURL(objectUrl);
    uploadedSongObjectUrls.delete(removedSong.id);
  }
  renderPlaylist();
  updatePlaylistSelection();
  removeSongDialog.close();
  pendingRemoveSongId = null;
  confirmRemoveSongButton.disabled = false;
  cancelRemoveSongButton.disabled = false;
}

async function addUploadedSong(event) {
  event.preventDefault();
  musicUploadStatus.textContent = "";
  const submitButton = musicUploadForm.querySelector(".music-upload__submit");

  const title = uploadSongTitle.value.trim();
  const subtitle = uploadSongSubtitle.value.trim();
  if (editingSongId) {
    const editedSong = songs.find((song) => song.id === editingSongId);
    if (!editedSong) {
      musicUploadStatus.textContent = "This song is no longer in the playlist.";
      return;
    }
    submitButton.disabled = true;
    try {
      await updateUploadedSong(editingSongId, title, subtitle);
    } catch (error) {
      console.error("Could not update uploaded song:", error);
      musicUploadStatus.textContent = "This song could not be updated. Please try again.";
      submitButton.disabled = false;
      return;
    }

    editedSong.title = title;
    editedSong.artist = subtitle;
    const editedIndex = songs.indexOf(editedSong);
    if (editedIndex === currentSongIndex) {
      songTitle.textContent = title;
      songArtist.textContent = subtitle;
    }
    renderPlaylist();
    updatePlaylistSelection();
    submitButton.disabled = false;
    closeSongUploadDialog();
    musicStatus.textContent = "Song details saved ❤️";
    return;
  }

  const file = uploadSongFile.files[0];
  if (!title) {
    musicUploadStatus.textContent = "Please enter a song name ❤️";
    uploadSongTitle.focus();
    return;
  }
  if (!file) {
    musicUploadStatus.textContent = "Please choose an audio file 🎵";
    uploadSongFile.focus();
    return;
  }
  if (!isSupportedAudioFile(file)) {
    musicUploadStatus.textContent = "Please choose a supported audio file, such as MP3, WAV, or M4A.";
    uploadSongFile.focus();
    return;
  }

  const id = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  submitButton.disabled = true;
  let playable;
  try {
    playable = await verifyPlayableAudio(file);
  } catch (error) {
    console.error("Could not verify the uploaded audio file:", error);
    musicUploadStatus.textContent = "This file could not be checked. Please try another audio file.";
    submitButton.disabled = false;
    return;
  }
  if (!playable) {
    musicUploadStatus.textContent = "This file does not contain audio the browser can play. Please choose another file.";
    uploadSongFile.focus();
    submitButton.disabled = false;
    return;
  }

  try {
    await saveUploadedSong({ id, title, subtitle, blob: file, addedAt: Date.now() });
  } catch (error) {
    console.error("Could not save uploaded song:", error);
    musicUploadStatus.textContent = "This song could not be saved in your browser. Please try again.";
    submitButton.disabled = false;
    return;
  }

  const source = URL.createObjectURL(file);
  uploadedSongObjectUrls.set(id, source);
  songs.push({ id, title, artist: subtitle, src: source, storage: "indexeddb" });
  if (currentSongIndex < 0) {
    loadSong(0);
  }
  renderPlaylist();
  updatePlaylistSelection();
  updatePlayerUI(!audio.paused);
  musicStatus.textContent = "Your song was added to the playlist ❤️";
  submitButton.disabled = false;
  closeSongUploadDialog();
}

function createFloatingHearts() {
  for (let index = 0; index < 7; index += 1) {
    const heart = document.createElement("span");
    heart.className = "anniversary-heart-particle";
    heart.textContent = index % 2 === 0 ? "♡" : "♥";
    anniversaryHearts.append(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}

function createMemoryPlaceholder(index) {
  const palettes = [
    ["#a477c4", "#edabc9", "#fff0f6"],
    ["#8062b1", "#e49ab9", "#fff1de"],
    ["#b17dbd", "#f2b2c8", "#fff4e8"],
    ["#7c75bd", "#e6a6d0", "#f7ecff"],
    ["#bd82b6", "#efb6c8", "#fff2e8"],
    ["#9470c0", "#e8a1c6", "#f7eaff"],
  ];
  const [start, end, highlight] = palettes[index % palettes.length];
  const number = String(index + 1).padStart(2, "0");
  const artwork = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="memory-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${start}"/>
          <stop offset="1" stop-color="${end}"/>
        </linearGradient>
        <linearGradient id="memory-hill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${highlight}" stop-opacity=".92"/>
          <stop offset="1" stop-color="#fff" stop-opacity=".48"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#memory-bg)"/>
      <circle cx="635" cy="142" r="82" fill="#fff" opacity=".24"/>
      <circle cx="174" cy="132" r="3" fill="#fff" opacity=".8"/>
      <circle cx="255" cy="202" r="4" fill="#fff" opacity=".72"/>
      <circle cx="552" cy="270" r="3" fill="#fff" opacity=".8"/>
      <path d="M0 410c126-98 219 26 352-55s231-27 448 22v223H0z" fill="#fff" opacity=".18"/>
      <path d="M0 476c166-106 274-34 415-56s250 4 385 76v104H0z" fill="url(#memory-hill)"/>
      <path d="M400 238c-46-57-133 9-87 64l87 85 87-85c46-55-41-121-87-64z"
        fill="#fff" fill-opacity=".86"/>
      <text x="400" y="493" text-anchor="middle" fill="#fff" font-family="Georgia,serif"
        font-size="24" letter-spacing="7" opacity=".92">A LITTLE MEMORY</text>
      <text x="400" y="545" text-anchor="middle" fill="#fff" font-family="Georgia,serif"
        font-size="17" letter-spacing="5" opacity=".72">${number} · ALWAYS US</text>
    </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(artwork)}`;
}

function setMemoryImageSource(image, source, index) {
  image.dataset.memoryIndex = String(index);
  image.dataset.placeholderApplied = "false";
  image.onerror = () => {
    if (image.dataset.placeholderApplied === "true") {
      return;
    }

    image.dataset.placeholderApplied = "true";
    image.src = createMemoryPlaceholder(Number(image.dataset.memoryIndex));
  };
  image.src = source;
}

function renderMemories() {
  memories.forEach((memory, index) => {
    const card = document.createElement("button");
    card.className = "memory-card";
    card.type = "button";
    card.setAttribute("aria-label", `${memory.title} ${memory.description} Open photo.`);
    card.dataset.memoryIndex = String(index);

    const image = document.createElement("img");
    image.className = "memory-card__photo";
    image.alt = memory.title;
    image.loading = "lazy";
    image.decoding = "async";
    setMemoryImageSource(image, memory.image, index);

    const heart = document.createElement("span");
    heart.className = "memory-card__heart";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = "♥";

    const title = document.createElement("span");
    title.className = "memory-card__title";
    title.textContent = memory.title;

    const description = document.createElement("span");
    description.className = "memory-card__description";
    description.textContent = memory.description;

    card.append(image, heart, title, description);
    memoryGrid.append(card);
  });
}

function renderThingsILove() {
  thingsILove.forEach((item) => {
    const card = document.createElement("article");
    card.className = "love-card";

    const heart = document.createElement("span");
    heart.className = "love-card__heart";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = "♥";

    const icon = document.createElement("span");
    icon.className = "love-card__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = item.icon;

    const title = document.createElement("h3");
    title.className = "love-card__title";
    title.textContent = item.title;

    const description = document.createElement("p");
    description.className = "love-card__description";
    description.textContent = item.description;

    card.append(heart, icon, title, description);
    loveGrid.append(card);
  });
}

function renderPromises() {
  promises.forEach((promise, index) => {
    const card = document.createElement("article");
    card.className = "promise-card";
    card.style.setProperty("--promise-delay", `${120 + index * 100}ms`);

    const cornerHeart = document.createElement("span");
    cornerHeart.className = "promise-card__corner-heart";
    cornerHeart.setAttribute("aria-hidden", "true");
    cornerHeart.textContent = "♥";

    const icon = document.createElement("span");
    icon.className = "promise-card__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = promise.icon;

    const title = document.createElement("h3");
    title.className = "promise-card__title";
    title.textContent = promise.title;

    const description = document.createElement("p");
    description.className = "promise-card__description";
    description.textContent = promise.description;

    const floatingHearts = document.createElement("span");
    floatingHearts.className = "promise-card__floating-hearts";
    floatingHearts.setAttribute("aria-hidden", "true");
    floatingHearts.textContent = "♡  ♥  ♡";

    card.append(cornerHeart, icon, title, description, floatingHearts);
    promisesGrid.append(card);
  });
}

function addPromiseParticles(container, count = 18) {
  const particles = ["❤️", "💜", "💕", "✧", "✨", "🌹", "♡"];
  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement("span");
    const content = particles[Math.floor(Math.random() * particles.length)];
    const isSparkle = content === "✧" || content === "✨";
    particle.className = `promise-particle${isSparkle ? " promise-particle--sparkle" : ""}`;
    particle.textContent = content;
    particle.style.left = `${5 + Math.random() * 90}%`;
    particle.style.setProperty("--promise-particle-size", `${12 + Math.random() * 14}px`);
    particle.style.setProperty("--promise-particle-delay", `${Math.random() * 0.65}s`);
    particle.style.setProperty("--promise-particle-drift", `${Math.round((Math.random() - 0.5) * 100)}px`);
    particle.style.setProperty("--promise-particle-duration", `${2.5 + Math.random() * 1.5}s`);
    container.append(particle);

    const removeParticle = () => particle.remove();
    particle.addEventListener("animationend", removeParticle, { once: true });
    window.setTimeout(removeParticle, 4800);
  }
}

function typeReProposalQuestion() {
  if (reProposalTypewriterStarted) {
    return;
  }

  reProposalTypewriterStarted = true;
  const question = "Will You Be Mine Again? 💍❤️";
  const characterDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 32;
  let characterIndex = 0;

  const showNextCharacter = () => {
    reProposalQuestionText.textContent = question.slice(0, characterIndex);
    characterIndex += 1;
    if (characterIndex <= question.length) {
      window.setTimeout(showNextCharacter, characterDelay);
    } else {
      reProposalSection.classList.add("question-typed");
    }
  };

  window.setTimeout(showNextCharacter, 780);
}

function createReProposalCelebrationParticle(kind, index) {
  const particle = document.createElement("span");
  particle.className = `reproposal-particle reproposal-particle--${kind}`;
  const duration = kind === "heart" ? 5 + Math.random() * 2.5 : 3.5 + Math.random() * 2;
  const delay = Math.random() * (kind === "heart" ? 1.8 : 1.2);

  particle.style.left = `${Math.random() * 100}%`;
  particle.style.setProperty("--reproposal-particle-duration", `${duration}s`);
  particle.style.setProperty("--reproposal-particle-delay", `${delay}s`);
  particle.style.setProperty("--reproposal-particle-drift", `${Math.round((Math.random() - 0.5) * 170)}px`);
  particle.style.setProperty("--reproposal-particle-rotation", `${Math.round((Math.random() - 0.5) * 720)}deg`);

  if (kind === "heart") {
    const hearts = ["❤️", "💕", "💜", "💗", "♥"];
    particle.textContent = hearts[index % hearts.length];
    particle.style.setProperty("--reproposal-particle-size", `${16 + Math.random() * 22}px`);
  } else if (kind === "rose") {
    particle.textContent = "🌹";
    particle.style.setProperty("--reproposal-particle-size", `${20 + Math.random() * 16}px`);
  } else if (kind === "sparkle") {
    particle.textContent = Math.random() > 0.5 ? "✨" : "✧";
    particle.style.setProperty("--reproposal-particle-size", `${14 + Math.random() * 16}px`);
  } else if (kind === "confetti") {
    const colors = ["#f6a9d1", "#d4b4ff", "#fff0b8", "#ef82ba", "#b99ce9"];
    particle.style.setProperty("--reproposal-confetti-color", colors[index % colors.length]);
    particle.style.setProperty("--reproposal-confetti-rotation", `${Math.random() * 360}deg`);
  } else {
    particle.style.setProperty("--reproposal-particle-size", `${5 + Math.random() * 7}px`);
  }

  reProposalCelebrationParticles.append(particle);
  const removeParticle = () => particle.remove();
  particle.addEventListener("animationend", removeParticle, { once: true });
  window.setTimeout(removeParticle, (duration + delay + 0.5) * 1000);
}

function closeReProposalCelebration() {
  reProposalCelebration.classList.remove("is-visible");
  reProposalCelebration.setAttribute("aria-hidden", "true");
  document.body.style.overflow = previousBodyOverflowBeforeReProposalCelebration;
  reProposalSection.classList.remove("is-celebrating");
  reProposalCelebrationParticles.replaceChildren();
  if (previousFocusBeforeReProposalCelebration instanceof HTMLElement) {
    previousFocusBeforeReProposalCelebration.focus();
  }
}

function startReProposalCelebration() {
  if (reProposalCelebrationStarted) {
    return;
  }

  reProposalCelebrationStarted = true;
  previousFocusBeforeReProposalCelebration = document.activeElement;
  previousBodyOverflowBeforeReProposalCelebration = document.body.style.overflow;
  reProposalSection.classList.add("is-celebrating");
  reProposalThinkButton.disabled = true;
  reProposalThinkMessage.hidden = true;
  document.body.append(reProposalCelebration);
  reProposalCelebration.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  const particleCounts = {
    heart: isMobile ? 110 : 180,
    rose: 18,
    sparkle: 30,
    confetti: 42,
    glow: 18,
  };
  Object.entries(particleCounts).forEach(([kind, count]) => {
    for (let index = 0; index < count; index += 1) {
      createReProposalCelebrationParticle(kind, index);
    }
  });

  window.setTimeout(() => {
    reProposalCelebration.classList.add("is-visible");
    reProposalCelebrationCloseButton.focus();
  }, 850);
}

function openReProposalThinkMessage() {
  reProposalThinkMessage.hidden = false;
  reProposalThinkMessage.classList.add("is-visible");
  reProposalThinkCloseButton.focus();
}

function closeReProposalThinkMessage() {
  reProposalThinkMessage.classList.remove("is-visible");
  reProposalThinkMessage.hidden = true;
  reProposalThinkButton.focus();
}

function openPromiseModal() {
  previousFocusBeforePromise = document.activeElement;
  previousBodyOverflowBeforePromise = document.body.style.overflow;
  promiseModal.classList.add("is-open");
  promiseModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closePromiseModalButton.focus();
}

function closePromiseModal() {
  promiseModal.classList.remove("is-open");
  promiseModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = previousBodyOverflowBeforePromise;
  if (previousFocusBeforePromise instanceof HTMLElement) {
    previousFocusBeforePromise.focus();
  }
}

function makePromise() {
  if (promiseModalComplete) {
    return;
  }

  promiseModalComplete = true;
  promiseModal.classList.add("is-made");
  promiseModal.setAttribute("aria-label", "Promise made");
  promiseResponse.hidden = false;
  window.requestAnimationFrame(() => promiseResponse.classList.add("is-visible"));
  acceptPromiseButton.disabled = true;
  addPromiseParticles(promiseModalParticles, 24);
  addPromiseParticles(promisesParticles, 12);
}

let activeMemoryIndex = 0;
let previouslyFocusedElement = null;
let previousBodyOverflow = "";
let touchStartX = null;

function showMemory(index) {
  activeMemoryIndex = (index + memories.length) % memories.length;
  const memory = memories[activeMemoryIndex];
  const cardImage = memoryGrid.querySelector(
    `[data-memory-index="${activeMemoryIndex}"] .memory-card__photo`,
  );

  lightboxTitle.textContent = memory.title;
  lightboxDescription.textContent = memory.description;
  lightboxImage.alt = memory.title;
  setMemoryImageSource(lightboxImage, cardImage.src, activeMemoryIndex);
}

function openMemory(index) {
  previouslyFocusedElement = document.activeElement;
  previousBodyOverflow = document.body.style.overflow;
  showMemory(index);
  memoryLightbox.classList.add("is-open");
  memoryLightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxCloseButton.focus();
}

function closeMemory() {
  memoryLightbox.classList.remove("is-open");
  memoryLightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = previousBodyOverflow;
  if (previouslyFocusedElement instanceof HTMLElement) {
    previouslyFocusedElement.focus();
  }
}

function createMemoriesHearts() {
  for (let index = 0; index < 7; index += 1) {
    const heart = document.createElement("span");
    heart.className = "memories-heart-particle";
    heart.textContent = index % 2 === 0 ? "♡" : "♥";
    memoriesHearts.append(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}

renderMemories();
renderThingsILove();
renderPromises();
configureStoryEnding();

updateRelationshipCounter();
window.setInterval(updateRelationshipCounter, 1000);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        anniversarySection.classList.add("is-visible");
        createFloatingHearts();
        sectionObserver.unobserve(anniversarySection);
      }
    },
    { threshold: 0.15 },
  );

  sectionObserver.observe(anniversarySection);
} else {
  anniversarySection.classList.add("is-visible");
  createFloatingHearts();
}

if ("IntersectionObserver" in window) {
  const memoriesObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        memoriesSection.classList.add("is-visible");
        createMemoriesHearts();
        memoriesObserver.unobserve(memoriesSection);
      }
    },
    { threshold: 0.12 },
  );

  memoriesObserver.observe(memoriesSection);
} else {
  memoriesSection.classList.add("is-visible");
  createMemoriesHearts();
}

if ("IntersectionObserver" in window) {
  const loveSectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        loveSection.classList.add("is-visible");
        loveSectionObserver.unobserve(loveSection);
      }
    },
    { threshold: 0.12 },
  );

  loveSectionObserver.observe(loveSection);
} else {
  loveSection.classList.add("is-visible");
}

if ("IntersectionObserver" in window) {
  const apologySectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        apologySection.classList.add("is-visible");
        apologySectionObserver.unobserve(apologySection);
      }
    },
    { threshold: 0.12 },
  );

  apologySectionObserver.observe(apologySection);
} else {
  apologySection.classList.add("is-visible");
}

if ("IntersectionObserver" in window) {
  const proposalSectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        proposalSection.classList.add("is-visible");
        proposalSectionObserver.unobserve(proposalSection);
      }
    },
    { threshold: 0.12 },
  );

  proposalSectionObserver.observe(proposalSection);
} else {
  proposalSection.classList.add("is-visible");
}

if ("IntersectionObserver" in window) {
  const promisesSectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        promisesSection.classList.add("is-visible");
        promisesSectionObserver.unobserve(promisesSection);
      }
    },
    { threshold: 0.12 },
  );

  promisesSectionObserver.observe(promisesSection);
} else {
  promisesSection.classList.add("is-visible");
}

if ("IntersectionObserver" in window) {
  const reProposalObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        reProposalSection.classList.add("is-visible");
        typeReProposalQuestion();
        reProposalObserver.unobserve(reProposalSection);
      }
    },
    { threshold: 0.12 },
  );

  reProposalObserver.observe(reProposalSection);
} else {
  reProposalSection.classList.add("is-visible");
  typeReProposalQuestion();
}

if ("IntersectionObserver" in window) {
  storyEndingObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        storyEnding.classList.add("is-visible");
        storyEndingObserver.unobserve(storyEnding);
      }
    },
    { threshold: 0.1 },
  );
  storyEndingObserver.observe(storyEnding);
} else {
  storyEnding.classList.add("is-visible");
}

updateActiveChapter("hero");

memoryGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".memory-card");
  if (card) {
    openMemory(Number(card.dataset.memoryIndex));
  }
});

lightboxCloseButton.addEventListener("click", closeMemory);
lightboxPreviousButton.addEventListener("click", () => showMemory(activeMemoryIndex - 1));
lightboxNextButton.addEventListener("click", () => showMemory(activeMemoryIndex + 1));

memoryLightbox.addEventListener("click", (event) => {
  if (event.target === memoryLightbox) {
    closeMemory();
  }
});

memoryLightbox.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

memoryLightbox.addEventListener("touchend", (event) => {
  if (touchStartX === null) {
    return;
  }

  const swipeDistance = event.changedTouches[0].clientX - touchStartX;
  touchStartX = null;
  if (Math.abs(swipeDistance) > 55) {
    showMemory(activeMemoryIndex + (swipeDistance < 0 ? 1 : -1));
  }
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chapterDock.classList.contains("is-open")) {
    closeChapterMenu();
  }

  if (reProposalCelebration.classList.contains("is-visible")) {
    if (event.key === "Escape") {
      closeReProposalCelebration();
    } else if (event.key === "Tab") {
      event.preventDefault();
      reProposalCelebrationCloseButton.focus();
    }
    return;
  }

  if (promiseModal.classList.contains("is-open")) {
    if (event.key === "Escape") {
      closePromiseModal();
    } else if (event.key === "Tab") {
      const focusableButtons = [closePromiseModalButton];
      if (!acceptPromiseButton.disabled) {
        focusableButtons.push(acceptPromiseButton);
      }
      const currentIndex = focusableButtons.indexOf(document.activeElement);
      const nextIndex = event.shiftKey
        ? (currentIndex <= 0 ? focusableButtons.length - 1 : currentIndex - 1)
        : (currentIndex === focusableButtons.length - 1 ? 0 : currentIndex + 1);
      event.preventDefault();
      focusableButtons[nextIndex].focus();
    }
    return;
  }

  if (!memoryLightbox.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeMemory();
  } else if (event.key === "ArrowLeft") {
    showMemory(activeMemoryIndex - 1);
  } else if (event.key === "ArrowRight") {
    showMemory(activeMemoryIndex + 1);
  } else if (event.key === "Tab") {
    const focusableButtons = [
      lightboxCloseButton,
      lightboxPreviousButton,
      lightboxNextButton,
    ];
    const currentIndex = focusableButtons.indexOf(document.activeElement);
    const nextIndex = event.shiftKey
      ? (currentIndex <= 0 ? focusableButtons.length - 1 : currentIndex - 1)
      : (currentIndex === focusableButtons.length - 1 ? 0 : currentIndex + 1);
    event.preventDefault();
    focusableButtons[nextIndex].focus();
  }
});

makePromiseButton.addEventListener("click", openPromiseModal);
closePromiseModalButton.addEventListener("click", closePromiseModal);
acceptPromiseButton.addEventListener("click", makePromise);
promiseModal.addEventListener("click", (event) => {
  if (event.target === promiseModal) {
    closePromiseModal();
  }
});

reProposalYesButton.addEventListener("click", startReProposalCelebration);
reProposalThinkButton.addEventListener("click", openReProposalThinkMessage);
reProposalThinkCloseButton.addEventListener("click", closeReProposalThinkMessage);
reProposalCelebrationCloseButton.addEventListener("click", closeReProposalCelebration);
replayStoryButton.addEventListener("click", replayStory);
finalSurpriseButton.addEventListener("click", revealFinalSurprise);

document.querySelectorAll("[data-chapter-target]").forEach((control) => {
  control.addEventListener("click", (event) => {
    event.preventDefault();
    if (control.closest(".chapter-dock__menu")) {
      closeChapterMenu();
      return;
    }
    navigateToChapter(control.dataset.chapterTarget);
  });
});

chapterDockToggle.addEventListener("click", () => {
  const isOpening = !chapterDock.classList.contains("is-open");
  chapterDock.classList.toggle("is-open", isOpening);
  chapterDockToggle.setAttribute("aria-expanded", String(isOpening));
  chapterDockToggle.setAttribute(
    "aria-label",
    isOpening ? "Close chapter navigation" : "Open chapter navigation",
  );
  chapterDockMenu.setAttribute("aria-hidden", String(!isOpening));
});

document.addEventListener("click", (event) => {
  if (!chapterDock.contains(event.target)) {
    closeChapterMenu();
  }
});

openLetterButton.addEventListener("click", () => {
  if (openLetterButton.getAttribute("aria-expanded") === "true") {
    return;
  }

  openLetterButton.setAttribute("aria-expanded", "true");
  apologyLetterStage.classList.add("is-opening");

  ["❤️", "✧", "💕", "✨", "♡", "✦"].forEach((particle) => {
    const element = document.createElement("span");
    element.className = "envelope-particle";
    element.textContent = particle;
    apologyLetterStage.append(element);
    element.addEventListener("animationend", () => element.remove(), { once: true });
  });

  window.setTimeout(() => {
    apologyLetterStage.classList.remove("is-opening");
    apologyLetterStage.classList.add("is-open");
    apologyLetter.classList.add("is-visible");
    apologyLetter.setAttribute("aria-hidden", "false");
    openLetterButton.querySelector(".envelope-trigger__label").textContent = "Your letter is open ❤️";
    window.setTimeout(() => {
      apologyLetter.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  }, 680);
});

forgiveButton.addEventListener("click", () => {
  if (forgiveButton.disabled) {
    return;
  }

  forgiveButton.disabled = true;
  forgiveButton.classList.add("is-thanked");
  forgivenessResponse.hidden = false;
  window.requestAnimationFrame(() => forgivenessResponse.classList.add("is-visible"));

  for (let index = 0; index < 8; index += 1) {
    const particle = document.createElement("span");
    particle.className = `forgiveness-particle forgiveness-particle--${index % 2 === 0 ? "heart" : "confetti"}`;
    particle.textContent = index % 2 === 0 ? (index % 4 === 0 ? "❤️" : "💜") : "";
    forgivenessConfetti.append(particle);
    particle.addEventListener("animationend", () => particle.remove(), { once: true });
  }
});

function createProposalParticle(kind) {
  const particle = document.createElement("span");
  particle.className = `proposal-particle proposal-particle--${kind}`;

  const left = Math.random() * 100;
  const duration = kind === "heart"
    ? 3.8 + Math.random() * 1.5
    : 3 + Math.random() * 1.3;
  const delay = Math.random() * 0.55;
  const drift = Math.round((Math.random() - 0.5) * 150);
  const rotation = Math.round((Math.random() - 0.5) * 1000);

  particle.style.left = `${left}%`;
  particle.style.setProperty("--particle-duration", `${duration}s`);
  particle.style.setProperty("--particle-delay", `${delay}s`);
  particle.style.setProperty("--particle-drift", `${drift}px`);
  particle.style.setProperty("--particle-rotation", `${rotation}deg`);

  if (kind === "heart") {
    const hearts = ["❤️", "💜", "💕", "💗", "♥"];
    particle.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    particle.style.setProperty("--particle-size", `${16 + Math.random() * 20}px`);
  } else if (kind === "confetti") {
    const colors = ["#d783bd", "#b99be7", "#efabc9", "#f6c8e2", "#a979c6"];
    particle.style.setProperty(
      "--particle-color",
      colors[Math.floor(Math.random() * colors.length)],
    );
  } else {
    particle.textContent = "✦";
  }

  proposalParticles.append(particle);
  const cleanupParticle = () => particle.remove();
  particle.addEventListener("animationend", cleanupParticle, { once: true });
  window.setTimeout(cleanupParticle, (duration + delay + 0.5) * 1000);
}

function startProposalCelebration() {
  if (proposalSection.classList.contains("is-celebrating")) {
    return;
  }

  proposalSection.classList.add("is-celebrating");
  proposalCelebration.setAttribute("aria-hidden", "false");
  proposalButtons.forEach((button) => {
    button.disabled = true;
  });

  for (let index = 0; index < 22; index += 1) {
    createProposalParticle("heart");
  }

  for (let index = 0; index < 20; index += 1) {
    createProposalParticle("confetti");
  }

  for (let index = 0; index < 9; index += 1) {
    createProposalParticle("sparkle");
  }
}

proposalButtons.forEach((button) => {
  button.addEventListener("click", startProposalCelebration);
});

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

previousSongButton.addEventListener("click", previousSong);
nextSongButton.addEventListener("click", nextSong);
progressBar.addEventListener("input", setProgress);
volumeSlider.addEventListener("input", setVolume);
muteButton.addEventListener("click", toggleMute);

playlistItems.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-song]");
  if (editButton) {
    if (currentChapterId === "music" && soundtrackSectionActive) {
      editUploadedSong(editButton.dataset.editSong);
    }
    return;
  }

  const removeButton = event.target.closest("[data-remove-song]");
  if (removeButton) {
    if (currentChapterId === "music" && soundtrackSectionActive) {
      requestRemoveUploadedSong(removeButton.dataset.removeSong);
    }
    return;
  }

  const playButton = event.target.closest("[data-play-song]");
  if (!playButton) {
    return;
  }
  if (currentChapterId !== "music" || !soundtrackSectionActive) {
    return;
  }

  const selectedIndex = Number(playButton.dataset.playSong);
  if (selectedIndex === currentSongIndex && !audio.paused) {
    pauseSong();
    return;
  }

  if (selectedIndex !== currentSongIndex) {
    loadSong(selectedIndex);
  }
  playSong();
});

addSongButton.addEventListener("click", () => {
  musicUploadStatus.textContent = "";
  musicUploadDialog.showModal();
  uploadSongTitle.focus();
});

musicUploadForm.addEventListener("submit", addUploadedSong);
cancelSongUploadButton.addEventListener("click", closeSongUploadDialog);
musicUploadDialog.addEventListener("click", (event) => {
  if (event.target === musicUploadDialog) {
    closeSongUploadDialog();
  }
});
musicUploadDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeSongUploadDialog();
});
cancelRemoveSongButton.addEventListener("click", () => {
  removeSongDialog.close();
  pendingRemoveSongId = null;
});
confirmRemoveSongButton.addEventListener("click", removeUploadedSong);
removeSongDialog.addEventListener("click", (event) => {
  if (event.target === removeSongDialog) {
    removeSongDialog.close();
    pendingRemoveSongId = null;
  }
});
removeSongDialog.addEventListener("cancel", () => {
  pendingRemoveSongId = null;
});

window.addEventListener("pagehide", () => {
  uploadedSongObjectUrls.forEach((source) => URL.revokeObjectURL(source));
  uploadedSongObjectUrls.clear();
});

openHeartButton.addEventListener("click", () => {
  const particles = ["❤️", "✨", "💜", "✦", "💕", "✧", "❤️", "✨"];

  particles.forEach((particle) => {
    const element = document.createElement("span");
    element.className = "burst-particle";
    element.textContent = particle;
    celebrationBurst.append(element);
    element.addEventListener("animationend", () => element.remove(), { once: true });
  });

  navigateToChapter("one-month");
});

enterButton.addEventListener("click", enterExperience);

initializeMusicPlayer();
