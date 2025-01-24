// JavaScript for Tab Switching Functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach((item) => item.classList.remove('active'));
    // Add active class to the clicked tab
    tab.classList.add('active');

    // Hide all tab contents
    tabContents.forEach((content) => content.classList.remove('active'));
    // Show the content of the clicked tab
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// JavaScript for adding course videos dynamically
const videoData = [
  {
    title: 'Introduction to HTML',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '10:30',
    views: 200,
    completed: false,
  },
  {
    title: 'CSS Basics',
    duration: '12:45',
    views: 350,
    completed: false,
  },
  {
    title: 'JavaScript Essentials',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '15:20',
    views: 500,
    completed: true,
  },
  {
    title: 'Advanced Frontend Tips',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '20:15',
    views: 150,
    completed: false,
  },
  {
    title: 'Introduction to HTML',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '10:30',
    views: 200,
    completed: false,
  },
  {
    title: 'CSS Basics',
    duration: '12:45',
    views: 350,
    completed: false,
  },
  {
    title: 'JavaScript Essentials',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '15:20',
    views: 500,
    completed: true,
  },
  {
    title: 'Advanced Frontend Tips',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '20:15',
    views: 150,
    completed: false,
  },
  {
    title: 'Introduction to HTML',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '10:30',
    views: 200,
    completed: false,
  },
  {
    title: 'CSS Basics',
    duration: '12:45',
    views: 350,
    completed: false,
  },
  {
    title: 'JavaScript Essentials',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '15:20',
    views: 500,
    completed: true,
  },
  {
    title: 'Advanced Frontend Tips',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '20:15',
    views: 150,
    completed: false,
  },
  {
    title: 'Introduction to HTML',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '10:30',
    views: 200,
    completed: false,
  },
  {
    title: 'CSS Basics',
    duration: '12:45',
    views: 350,
    completed: false,
  },
  {
    title: 'JavaScript Essentials',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '15:20',
    views: 500,
    completed: true,
  },
  {
    title: 'Advanced Frontend Tips',
    id: 'list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
    duration: '20:15',
    views: 150,
    completed: false,
  },
];

const videoContainer = document.getElementById('video-container');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const youtubePlayer = document.getElementById('youtube-player');
let currentVideoIndex = 0;

// Populate videos
function renderVideos() {
  videoContainer.innerHTML = '';
  let completedCount = 0;

  videoData.forEach((video, index) => {
    const videoItem = document.createElement('li');
    videoItem.innerHTML = `
            <span>${index + 1}. ${video.title} (${video.duration}, ${
  video.views
} views)</span>
            <input type="checkbox" ${
  video.completed ? 'checked' : ''
} data-index="${index}">
        `;
    videoContainer.appendChild(videoItem);

    if (video.completed) completedCount += 1;
  });

  // Update progress bar
  const progress = (completedCount / videoData.length) * 100;
  progressBar.value = progress;
  progressPercent.textContent = `${Math.round(progress)}%`;
}

// Handle video completion
videoContainer.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    const { index } = e.target.dataset;
    videoData[index].completed = e.target.checked;
    renderVideos();
  }
});

renderVideos();

// Save and Retrieve Notes
const notesArea = document.getElementById('custom-notes');

notesArea.value = localStorage.getItem('courseNotes') || '';

notesArea.addEventListener('input', () => {
  localStorage.setItem('courseNotes', notesArea.value);
});

// AI-Generated Questions
const aiQuestionsContainer = document.getElementById('tools');
aiQuestionsContainer.innerHTML += `
    <h3>AI-Generated Questions</h3>
    <ul>
        <li>What is the purpose of the <strong>DOCTYPE</strong> declaration in HTML?</li>
        <li>Explain the difference between <strong>class</strong> and <strong>id</strong> in CSS.</li>
        <li>How does JavaScript handle asynchronous operations?</li>
    </ul>
`;

// Rating System
const rateCourseButton = document.getElementById('rate-course');
rateCourseButton.addEventListener('click', () => {
  const rating = prompt('Rate this course (1 to 5 stars):');
  if (rating >= 1 && rating <= 5) {
    alert(`Thank you for rating the course ${rating} stars!`);
  } else {
    alert('Invalid rating. Please enter a number between 1 and 5.');
  }
});

// Next and Previous Buttons Functionality
function loadVideo(index) {
  if (index < 0 || index >= videoData.length) return;
  currentVideoIndex = index;
  const video = videoData[index];
  youtubePlayer.src = `https://www.youtube.com/embed?${video.id}`; // Adjust with valid YouTube IDs
  document.getElementById(
    'video-summary',
  ).textContent = `AI-Generated Summary: ${video.title}`;
}

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', () => {
  if (currentVideoIndex < videoData.length - 1) {
    loadVideo(currentVideoIndex + 1);
  }
});

const prevButton = document.createElement('button');
prevButton.textContent = 'Previous';
prevButton.addEventListener('click', () => {
  if (currentVideoIndex > 0) {
    loadVideo(currentVideoIndex - 1);
  }
});

document.querySelector('.video-player').appendChild(prevButton);
document.querySelector('.video-player').appendChild(nextButton);

// Load the first video
loadVideo(currentVideoIndex);
