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
    document.getElementById(id).classList.remove('view-active');
}

init();
