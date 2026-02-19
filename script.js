// Data for nascon-2026
const menuItems = [
    { title: "Agenda", icon: "📅" },
    { title: "Speakers", icon: "👤" },
    { title: "How to get there", icon: "📍" },
    { title: "Experience Zone", icon: "🎮" },
    { title: "Prepare for the event", icon: "🎒" }
];

const speakers = [
    { name: 'Francis Kong', tag: 'Keynote Speaker', bio: 'Francisco J. Kong is a multi-awarded business speaker...', img: 'https://via.placeholder.com/150', topic: 'The Invisible World' },
    { name: 'Hon. David L. Almirol, Jr.', tag: 'DICT Undersecretary', bio: 'Ten Outstanding Young Men (TOYM) awardee...', img: 'https://ucarecdn.com/68f87f36-eeab-4c7d-87f3-e15a348c40ab/', topic: 'Industry Disruptors' }
    // Add other speakers here...
];

const infoData = {
    "Agenda": `
        <div class="switcher-pill">
            <div id="btn-day1" class="pill-btn" style="background: var(--converge-teal); color: white;" onclick="switchDay(1)">DAY 1</div>
            <div id="btn-day2" class="pill-btn" style="color: #64748b;" onclick="switchDay(2)">DAY 2</div>
        </div>
        <div id="agenda-list">08:00 AM - Registration</div>
    `,
    "How to get there": `
        <p><strong>Venue:</strong> SMX Convention Center, Manila</p>
        <p>Grab/Taxi: Pin to "SMX Convention Center Main Lobby".</p>
        <div style="width:100%; height:200px; background:#eee; border-radius:15px; display:flex; align-items:center; justify-content:center;">[Map Placeholder]</div>
    `,
    "Experience Zone": `
        <p>Visit the following booths for interactive demos:</p>
        <ul>
            <li>AI Future Hub</li>
            <li>Connectivity Lounge</li>
            <li>Gaming Arena</li>
        </ul>
    `,
    "Prepare for the event": `
        <p><strong>Dress Code:</strong> Smart Casual</p>
        <p><strong>What to bring:</strong></p>
        <ul>
            <li>Digital Ticket (QR Code)</li>
            <li>Power Bank</li>
            <li>Business Cards</li>
        </ul>
    `
};

// INITIALIZE MENU
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
    
    if (title === "Speakers") {
        renderSpeakers();
    } else {
        document.getElementById('page-content').innerHTML = infoData[title] || "Content coming soon.";
    }
    view.classList.add('view-active');
}

function renderSpeakers() {
    let html = speakers.map((s, i) => `
        <div class="speaker-row" onclick="viewSpeaker(${i})">
            <img src="${s.img}" class="row-img">
            <div>
                <div style="font-weight:700; color:#2d3748;">${s.name}</div>
                <div style="font-size:0.75rem; color:var(--converge-teal);">${s.tag}</div>
            </div>
        </div>
    `).join('');
    document.getElementById('page-content').innerHTML = html;
}

function viewSpeaker(index) {
    const s = speakers[index];
    document.getElementById('profile-content').innerHTML = `
        <img src="${s.img}" style="width:100%; border-radius:25px; margin-bottom:20px;">
        <h2 style="font-weight:800;">${s.name}</h2>
        <p style="color:var(--converge-teal); font-weight:700;">${s.tag}</p>
        <hr>${s.bio}
    `;
    document.getElementById('speaker-profile-view').classList.add('view-active');
}

function closePage(id) {
    const view = document.getElementById(id);
    view.classList.remove('view-active');
    
    // Optional: wait for animation to finish before resetting scroll position
    setTimeout(() => {
        view.scrollTo(0, 0);
    }, 400);
}

function switchDay(day) {
    const btn1 = document.getElementById('btn-day1');
    const btn2 = document.getElementById('btn-day2');
    const content = document.getElementById('page-content'); // Or 'agenda-list' depending on your HTML

    // 1. Update Button Styles
    if (day === 1) {
        btn1.style.background = 'var(--converge-teal)';
        btn1.style.color = 'white';
        btn2.style.background = '#f1f5f9';
        btn2.style.color = '#64748b';
        
        // 2. Update Content for Day 1
        document.getElementById('page-content').innerHTML = `
            ${getAgendaTabs(1)}
            <div class="timeline-container">
                <p><strong>08:00 AM</strong> - Day 1 Registration</p>
                <p><strong>09:00 AM</strong> - Opening Keynote</p>
            </div>`;
    } else {
        btn2.style.background = 'var(--converge-teal)';
        btn2.style.color = 'white';
        btn1.style.background = '#f1f5f9';
        btn1.style.color = '#64748b';
        
        // 3. Update Content for Day 2
        document.getElementById('page-content').innerHTML = `
            ${getAgendaTabs(2)}
            <div class="timeline-container">
                <p><strong>09:00 AM</strong> - Day 2 Workshop</p>
                <p><strong>02:00 PM</strong> - Closing Ceremony</p>
            </div>`;
    }
}

// Helper to keep the tabs visible when switching
function getAgendaTabs(activeDay) {
    const style1 = activeDay === 1 ? 'background: var(--converge-teal); color: white;' : 'color: #64748b;';
    const style2 = activeDay === 2 ? 'background: var(--converge-teal); color: white;' : 'color: #64748b;';
    
    return `
        <div class="switcher-pill">
            <div id="btn-day1" class="pill-btn" style="${style1}" onclick="switchDay(1)">DAY 1</div>
            <div id="btn-day2" class="pill-btn" style="${style2}" onclick="switchDay(2)">DAY 2</div>
        </div>`;
}

init();
