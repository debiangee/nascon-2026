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
        { id: "agenda2", time: "08:00 - 09:00", title: "Registration", location: "" },
        { id: "agenda21", time: "09:00 - 09:45", title: "Plenary 1 Session", location: "The Connected Consumer 2026: Beyond the Buy Button" },
        { id: "agenda22", time: "09:55 - 10:40", title: "Plenary 2 Panel", location: "The State of the Ecosystem: Winning Through Partners" },
        { id: "agenda23", time: "10:40 - 10:55", title: "Break", location: "" },
        { id: "agenda24", time: "11:00 - 11:45", title: "Plenary 3 Session", location: "The Switch Mindset: Disruption as a Sales Tool" },
        { id: "agenda25", time: "11:45 - 12:55", title: "Lunch Break", location: "" },
        { id: "agenda26", time: "01:00 - 01:45", title: "Track A1, B1, C1", location: "Scaling Growth Through Influence, Winning the Switch, NextGen Sales" },
        { id: "agenda27", time: "01:45 - 02:30", title: "Track A2, B2, C2", location: "Scaling Growth Through Influence, Winning the Switch, NextGen Sales" },
        { id: "agenda28", time: "02:30 - 02:40", title: "Quick Break", location: "" },
        { id: "agenda29", time: "02:40 - 03:25", title: "Wild Card Session", location: "Navigating the Economic Buyer as Sole Proprietor" }
    ]
};

const agendaDetails = {
    "agenda1": "Pick up your badges at the main lobby. Networking coffee will be served until 9:00 AM.",
    "agenda12": "Keynote session by Francis Kong focusing on leadership in the digital age.",
    "agenda2": "Welcome back! A quick recap of Day 1 highlights and opening remarks for Day 2.",
    "agenda21": "A keynote on the evolving B2C landscape where AI-driven personalization and \"instant gratification\" are the baselines. This session focuses on how the salesforce moves from being 'transactional vendors' to 'lifestyle architects'.",
    "agenda22": "A leadership panel featuring internal execs and key Managed Service Partners (MSPs). It highlights how our collaborative 'TechCo' ecosystem creates a competitive advantage for Converge.",
    "agenda23": "Short Break",
    "agenda24": "An inspirational session on the psychology of the 'Switch'. It reframes market saturation not as a hurdle, but as an opportunity to win over dissatisfied customers from legacy providers through superior tech value. ",
    "agenda25": "Lunch Break",
    "agenda26": "<small><b>TRACK A1 | Influencing the Influencers: Retail & Third-Part Management</b><br><br>This session focuses on how to effectively influence, motivate, and enable MSPs who do not report directly to you. Participants will learn practical strategies to align incentives, build accountability, and drive performance through trust, clarity, and partnership without relying on formal authority.<hr><b>TRACK B1 | The Art of the \"Pain Point\" Pivot</b><br><br>A tactical, hands-on workshop on switch selling. Participants will practice identifying competitor pain points, such as unreliable technology, slow support, or rigid contracts, and learn how to re-anchor customer conversations toward Converge’s differentiated value. The session emphasizes mastering \“contract buy-out\” and \“upgrade path\” discussions, helping reps make the friction of switching feel minimal compared to the cost of staying with a legacy provider.<hr><b>TRACK C1 | Social Selling: Your Personal Brand Advantage</b><br><br>This session explores how to turn LinkedIn and other social platforms into a 24/7 lead-generation and credibility engine. Participants will learn how to share targeted “micro-insights” that resonate with preferred consumers and SME owners, and how to build a personal brand that transforms cold outreach into warm, trust-based conversations.<br><br>The session also covers positioning yourself as a local tech expert, so when customers are ready to switch, you are their first message.</small>",
    "agenda27": "<small><b>TRACK A2 | The \"Invisible\" Channel: Optimizing Referral Networks</b><br><br>Word-of-mouth remains one of the most powerful yet underutilized growth channels. This session explores how to intentionally build, manage, and incentivize non-traditional referral partners—such as real estate agents, property managers, and local tech influencers—to generate a consistent pipeline of high-quality, \"warm|' leads that accelerate the sales funnel.<hr><b>TRACK B2 | The Art of the Switch: Winning the Port-In War</b><br><br>In a saturated market, growth comes from winning customers already served by competitors. This session unpacks the mindset and psychology of the \"switcher,\" equipping sales teams to confidently address hesitation and resistance. Participants will learn proven switching scripts and strategies that emphasize seamless transition, clear value stacking, and effective removal of the perceived \"hassle barrier.\"<hr><b>TRACK C2 | The Churn-Shield: Predictive Retention Tactics</b><br><br>It is more cost-effective to keep a customer than to acquire a new one. This session introduces predictive retention by helping teams identify early \"at-risk\" signals: such as declining usage patterns or repeated support interactions, before churn happens. Participants will be trained on conducting proactive \"save\" conversations that go beyond discounts, focusing instead on re-aligning the customer’s plan to their evolving lifestyle and business needs.</small>",
    "agenda28": "Quick Break.",
    "agenda29": "Understanding the psychology of the entrepreneur. This session covers how to pivot from \"Business ROI\" to \"Personal Freedom and Time Saved.\" It addresses the specific fears of SME owners (risk, implementation time, and cash flow).",
    "agenda99": "A deep dive with top leaders on how industry disruptors are changing the landscape."
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
