// 1. DATA DEFINITIONS
const menuItems = [
    { title: "Agenda", icon: "📅" },
    { title: "Speakers", icon: "👤" },
    { title: "How to get there", icon: "📍" },
    { title: "Experience Zone", icon: "🎮" },
    { title: "Prepare for the event", icon: "🎒" }
];

const speakers = [
    { 
        name: 'Francis Kong', 
        tag: 'Keynote Speaker', 
        bio: 'Francisco J. Kong is a multi-awarded business speaker...', 
        img: 'https://via.placeholder.com/150', 
        topic: 'The Invisible World' 
    },
    { 
        name: 'Hon. David L. Almirol, Jr.', 
        tag: 'DICT Undersecretary', 
        bio: 'Ten Outstanding Young Men (TOYM) awardee...', 
        img: 'https://ucarecdn.com/68f87f36-eeab-4c7d-87f3-e15a348c40ab/', 
        topic: 'Industry Disruptors' 
    }
];

const agendaEvents = {
    "reg": { 
        time: "08:00 AM", 
        title: "Registration & Morning Coffee", 
        desc: "Pick up your badges at the main lobby. Networking coffee will be served until 9:00 AM." 
    },
    "keynote": { 
        time: "09:00 AM", 
        title: "The Invisible World", 
        desc: "Keynote session by Francis Kong focusing on leadership in the digital age." 
    },
    "disrupt": { 
        time: "10:30 AM", 
        title: "Industry Disruptors Panel", 
        desc: "A deep dive into how AI and E-Government are changing the landscape." 
    }
};

const infoData = {
    "How to get there": `<p><strong>Venue:</strong> SMX Convention Center, Manila</p><p>Grab/Taxi: Pin to "SMX Convention Center Main Lobby".</p>`,
    "Experience Zone": `<p>Visit the following booths:</p><ul><li>AI Future Hub</li><li>Gaming Arena</li></ul>`,
    "Prepare for the event": `<p><strong>Dress Code:</strong> Smart Casual</p><ul><li>Digital Ticket</li><li>Power Bank</li></ul>`
};

// 2. CORE NAVIGATION
function init() {
    const container = document.getElementById('menu-container');
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
    const content = document.getElementById('page-content');

    if (title === "Speakers") {
        renderSpeakers();
    } else if (title === "Agenda") {
        switchDay(1);
    } else {
        content.innerHTML = infoData[title] || "Content coming soon.";
    }
    
    view.style.display = 'block'; // Ensure it's visible
    setTimeout(() => { view.classList.add('view-active'); }, 10);
}

function closePage(id) {
    const view = document.getElementById(id);
    view.classList.remove('view-active');
    
    // For the Agenda Detail which uses direct transform/display
    view.style.transform = 'translateY(100%)';
    
    setTimeout(() => {
        if(id === 'agenda-detail-view') view.style.display = 'none';
        view.scrollTo(0, 0);
    }, 400);
}

// 3. AGENDA LOGIC
function switchDay(day) {
    const content = document.getElementById('page-content');
    let dayContent = "";

    if (day === 1) {
        dayContent = `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <span class="time-label">08:00 AM</span>
                <div class="event-card" onclick="viewAgendaDetail('reg')">
                    <strong>Registration & Coffee</strong><span>Main Lobby</span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <span class="time-label">09:00 AM</span>
                <div class="event-card" onclick="viewAgendaDetail('keynote')">
                    <strong>Keynote: Francis Kong</strong><span>Main Hall</span>
                </div>
            </div>`;
    } else {
        dayContent = `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <span class="time-label">10:30 AM</span>
                <div class="event-card" onclick="viewAgendaDetail('disrupt')">
                    <strong>Industry Disruptors</strong><span>Panel Discussion</span>
                </div>
            </div>`;
    }

    content.innerHTML = `
        <div class="switcher-pill">
            <div id="btn-day1" class="pill-btn" style="${day === 1 ? 'background:var(--converge-teal);color:white;' : 'color:#64748b;'}" onclick="switchDay(1)">DAY 1</div>
            <div id="btn-day2" class="pill-btn" style="${day === 2 ? 'background:var(--converge-teal);color:white;' : 'color:#64748b;'}" onclick="switchDay(2)">DAY 2</div>
        </div>
        <div class="timeline-container">
            <div class="timeline-line"></div>
            ${dayContent}
        </div>`;
}

function viewAgendaDetail(eventId) {
    const event = agendaEvents[eventId];
    if(!event) return;

    document.getElementById('agenda-time-display').innerText = event.time;
    document.getElementById('agenda-title-display').innerText = event.title;
    document.getElementById('agenda-desc-display').innerHTML = event.desc;
    
    const view = document.getElementById('agenda-detail-view');
    view.style.display = 'block';
    setTimeout(() => { view.style.transform = 'translateY(0)'; }, 10);
}

// 4. SPEAKER LOGIC (Carousel + List)
function renderSpeakers() {
    const container = document.getElementById('page-content');
    
    let carouselHtml = '<div class="carousel-wrapper" id="speaker-carousel">';
    speakers.slice(0, 3).forEach((s, i) => {
        carouselHtml += `
            <div class="carousel-item-box" onclick="viewSpeaker(${i})">
                <img src="${s.img}" class="carousel-img" onerror="this.src='https://via.placeholder.com/400x300?text=NASCON'">
                <div class="carousel-caption">
                    <div style="font-weight:800; font-size:1.2rem;">${s.name}</div>
                    <div style="font-size:0.85rem;">${s.topic}</div>
                </div>
            </div>`;
    });
    carouselHtml += '</div>';

    let listHtml = '<h5 style="margin: 10px 0 20px 0; font-weight: 800;">All Speakers</h5>';
    speakers.forEach((s, i) => {
        listHtml += `
            <div class="speaker-row" onclick="viewSpeaker(${i})">
                <img src="${s.img}" class="row-img">
                <div style="flex-grow:1;">
                    <div style="font-weight:700;">${s.name}</div>
                    <div style="font-size:0.8rem; color:var(--converge-teal);">${s.tag}</div>
                </div>
                <span>›</span>
            </div>`;
    });

    container.innerHTML = carouselHtml + listHtml;

    // Auto-slide logic
    const wrapper = document.getElementById('speaker-carousel');
    if (window.carouselInterval) clearInterval(window.carouselInterval);
    window.carouselInterval = setInterval(() => {
        const step = wrapper.querySelector('.carousel-item-box').offsetWidth + 15;
        if (wrapper.scrollLeft >= (wrapper.scrollWidth - wrapper.offsetWidth - 20)) {
            wrapper.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            wrapper.scrollBy({ left: step, behavior: 'smooth' });
        }
    }, 4000);
}

function viewSpeaker(index) {
    const s = speakers[index];
    document.getElementById('profile-content').innerHTML = `
        <img src="${s.img}" style="width:100%; border-radius:25px; margin-bottom:20px;">
        <h2 style="font-weight:800;">${s.name}</h2>
        <p style="color:var(--converge-teal); font-weight:700;">${s.tag}</p>
        <hr>${s.bio}`;
    document.getElementById('speaker-profile-view').style.display = 'block';
    setTimeout(() => { document.getElementById('speaker-profile-view').classList.add('view-active'); }, 10);
}

// Start
init();
