// --- DATA DEFINITIONS ---
const menuItems = [
    { title: "Agenda", icon: "📅" },
    { title: "Speakers", icon: "👤" },
    { title: "How to get there", icon: "📍" },
    { title: "Experience Zone", icon: "🎮" },
    { title: "Prepare for the event", icon: "🎒" }
];

const speakers = [
    { 
        name: 'Coming Soon!', 
        tag: 'Tech Visionary', 
        topic: 'Industry Disruptor', 
        img: 'https://lh7-rt.googleusercontent.com/formsz/AN7BsVAiAylHg-rf4ksf-eU1Ay8_qHkvRwpaaZVaUnqGaKvvgxBSICuKPb97M4FZwE9Bar7M6Hiwkbib0Ayr3AmoC_iZE0P1sX5w2O3NqO0iOSaCV2QylfMH20sDxrkNxXVE7FvRALf1fjti5RKesmphWpAKoyWjZxDmmqMleA?key=ZWZTTKYsQX6t2NYllweoDg', 
        bio: 'Coming Soon!' 
    },
    { 
        name: 'Coming Soon!', 
        tag: 'Tech Visionary', 
        topic: 'Industry Disruptors', 
        img: 'https://lh7-rt.googleusercontent.com/formsz/AN7BsVAiAylHg-rf4ksf-eU1Ay8_qHkvRwpaaZVaUnqGaKvvgxBSICuKPb97M4FZwE9Bar7M6Hiwkbib0Ayr3AmoC_iZE0P1sX5w2O3NqO0iOSaCV2QylfMH20sDxrkNxXVE7FvRALf1fjti5RKesmphWpAKoyWjZxDmmqMleA?key=ZWZTTKYsQX6t2NYllweoDg', 
        bio: 'Coming Soon!' 
    }
];

const agendaData = {
    1: [
        { id: "agenda1", time: "08:00 AM", title: "Coming Soon!", location: "Coming Soon!" },
        { id: "agenda12", time: "09:00 AM", title: "Coming Soon!", location: "Coming Soon!" }
    ],
    2: [
        { id: "agenda2", time: "09:00 AM", title: "Coming Soon!", location: "Coming Soon!" },
        { id: "agenda21", time: "10:30 AM", title: "Coming Soon!", location: "Coming Soon!" }
    ]
};

const agendaDetails = {
    "reg": "Pick up your badges at the main lobby. Networking coffee will be served until 9:00 AM.",
    "keynote": "Keynote session by Francis Kong focusing on leadership in the digital age.",
    "day2start": "Welcome back! A quick recap of Day 1 highlights and opening remarks for Day 2.",
    "disrupt": "A deep dive with top leaders on how industry disruptors are changing the landscape."
};

const infoData = {
    "How to get there": `<p><strong>Venue:</strong> SMX Convention Center, Manila</p><p>Grab/Taxi: Pin to "SMX Convention Center Main Lobby".</p>`,
    "Experience Zone": `<p>Visit the following booths for interactive demos:</p><ul><li>AI Future Hub</li><li>Gaming Arena</li></ul>`,
    "Prepare for the event": `<p><strong>Dress Code:</strong> Smart Casual</p><ul><li>Digital Ticket (QR Code)</li><li>Power Bank</li></ul>`
};

// --- CORE NAVIGATION ---
function init() {
    const container = document.getElementById('menu-container');
    if (!container) return;
    
    container.innerHTML = menuItems.map(item => `
        <div class="menu-card" onclick="openPage('${item.title}')">
            <div class="card-body">
                <div class="icon-box">${item.icon}</div>
                <div class="card-text">${item.title}</div>
            </div>
        </div>
    `).join('');
}

function openPage(title) {
    const view = document.getElementById('details-view');
    document.getElementById('page-title').innerText = title;
    
    if (title === "Speakers") {
        renderSpeakers();
    } else if (title === "Agenda") {
        switchDay(1);
    } else {
        document.getElementById('page-content').innerHTML = infoData[title] || "Coming soon.";
    }
    
    view.style.display = 'block';
    setTimeout(() => view.classList.add('view-active'), 10);
}

function closePage(id) {
    const view = document.getElementById(id);
    view.classList.remove('view-active');
    setTimeout(() => {
        view.style.display = 'none';
        view.scrollTo(0, 0);
    }, 400);
}

// --- AGENDA LOGIC ---
function switchDay(day) {
    const content = document.getElementById('page-content');
    
    const dayItems = agendaData[day].map(item => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <span class="time-label">${item.time}</span>
            <div class="event-card" onclick="viewAgendaDetail('${item.id}')">
                <strong>${item.title}</strong>
                <span>${item.location}</span>
            </div>
        </div>
    `).join('');

    content.innerHTML = `
        <div class="switcher-pill">
            <div class="pill-btn" style="${day===1?'background:var(--converge-teal);color:white;':''}" onclick="switchDay(1)">DAY 1</div>
            <div class="pill-btn" style="${day===2?'background:var(--converge-teal);color:white;':''}" onclick="switchDay(2)">DAY 2</div>
        </div>
        <div class="timeline-container">
            <div class="timeline-line"></div>
            ${dayItems}
        </div>`;
}

function viewAgendaDetail(id) {
    const allEvents = [...agendaData[1], ...agendaData[2]];
    const eventInfo = allEvents.find(e => e.id === id);
    const description = agendaDetails[id];

    if(!eventInfo) return;

    document.getElementById('agenda-time-display').innerText = eventInfo.time;
    document.getElementById('agenda-title-display').innerText = eventInfo.title;
    document.getElementById('agenda-desc-display').innerHTML = description;
    
    const view = document.getElementById('agenda-detail-view');
    view.style.display = 'block';
    setTimeout(() => view.classList.add('view-active'), 10);
}

// --- SPEAKER LOGIC (With Auto-Slide) ---
function renderSpeakers() {
    const container = document.getElementById('page-content');
    let carouselHtml = '<div class="carousel-wrapper" id="speaker-carousel">';
    
    speakers.forEach((s, i) => {
        carouselHtml += `
            <div class="carousel-item-box" onclick="viewSpeaker(${i})">
                <img src="${s.img}" class="carousel-img">
                <div class="carousel-caption">
                    <div style="font-weight:800; font-size:1.2rem;">${s.name}</div>
                    <div style="font-size:0.85rem;">${s.topic}</div>
                </div>
            </div>`;
    });
    carouselHtml += '</div><h5 style="font-weight:800; margin-bottom:20px;">All Speakers</h5>';
    
    let listHtml = speakers.map((s, i) => `
        <div class="speaker-row" onclick="viewSpeaker(${i})">
            <img src="${s.img}" class="row-img">
            <div style="flex-grow:1;">
                <div style="font-weight:700;">${s.name}</div>
                <div style="font-size:0.8rem; color:var(--converge-teal);">${s.tag}</div>
            </div>
            <span>›</span>
        </div>`).join('');
    
    container.innerHTML = carouselHtml + listHtml;

    // --- AUTO-SLIDE LOGIC START ---
    const wrapper = document.getElementById('speaker-carousel');
    
    // Clear any existing timer so it doesn't double up
    if (window.carouselTimer) clearInterval(window.carouselTimer);

    window.carouselTimer = setInterval(() => {
        if (!wrapper) return;
        
        // Calculate the width of one card
        const cardWidth = wrapper.querySelector('.carousel-item-box').offsetWidth + 20; 
        
        // If we reached the end, go back to the start
        if (wrapper.scrollLeft >= (wrapper.scrollWidth - wrapper.offsetWidth - 10)) {
            wrapper.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Otherwise, slide to the next card
            wrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    }, 3000); // 3000ms = 3 seconds
    // --- AUTO-SLIDE LOGIC END ---
}

function viewSpeaker(i) {
    const s = speakers[i];
    document.getElementById('profile-content').innerHTML = `
        <img src="${s.img}" style="width:100%; border-radius:25px; margin-bottom:20px;">
        <h2 style="font-weight:800;">${s.name}</h2>
        <p style="color:var(--converge-teal); font-weight:700;">${s.tag}</p>
        <hr>${s.bio}`;
    const view = document.getElementById('speaker-profile-view');
    view.style.display = 'block';
    setTimeout(() => view.classList.add('view-active'), 10);
}

// --- INITIALIZE ---
document.addEventListener('DOMContentLoaded', init);
