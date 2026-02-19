// 1. DATA: SPEAKERS
const speakers = [
    { 
        name: 'Francis Kong', 
        tag: 'Keynote Speaker', 
        bio: '<small>Francisco J. Kong is a multi-awarded business speaker, author, and leadership mentor...</small>', 
        img: 'https://via.placeholder.com/150', // Replace with actual image URLs
        topic: 'The Invisible World' 
    },
    { 
        name: 'Hon. David L. Almirol, Jr.', 
        tag: 'Undersecretary for E-Government', 
        bio: '<small>David L. Almirol, Jr. is the Undersecretary for E-Government of the DICT...</small>', 
        img: 'https://ucarecdn.com/68f87f36-eeab-4c7d-87f3-e15a348c40ab/', 
        topic: 'Industry Disruptors' 
    },
    { 
        name: 'Jack Madrid', 
        tag: 'President & CEO, IBPAP', 
        bio: '<small>Jack is a seasoned business leader with 20 years of experience...</small>', 
        img: 'https://via.placeholder.com/150', 
        topic: 'Industry Disruptors' 
    }
    // ... Add your other speakers here following the same pattern
];

// 2. DATA: AGENDA
const infoData = {
    "Agenda": `
        <div class="switcher-pill">
            <div id="btn-day1" class="pill-btn" style="background: var(--converge-teal); color: white;" onclick="switchDay(1)">DAY 1 (FEB 18)</div>
            <div id="btn-day2" class="pill-btn" style="color: #64748b;" onclick="switchDay(2)">DAY 2 (FEB 19)</div>
        </div>
        <div id="agenda-content">
            <p><strong>09:00 AM</strong> - Opening Ceremony</p>
            <p><strong>10:30 AM</strong> - Keynote: The Invisible World</p>
        </div>
    `
};

// 3. NAVIGATION FUNCTIONS
function openSpeakers() {
    const view = document.getElementById('details-view');
    document.getElementById('page-title').innerText = "Speakers";
    
    let html = '';
    speakers.forEach((s, index) => {
        html += `
            <div class="speaker-row" onclick="viewSpeaker(${index})">
                <img src="${s.img}" class="row-img">
                <div>
                    <div style="font-weight:700; color:#1a202c;">${s.name}</div>
                    <div style="font-size:0.75rem; color:#718096;">${s.tag}</div>
                </div>
            </div>
        `;
    });
    
    document.getElementById('page-content').innerHTML = html;
    view.classList.add('view-active');
}

function viewSpeaker(index) {
    const s = speakers[index];
    const view = document.getElementById('speaker-profile-view');
    document.getElementById('profile-content').innerHTML = `
        <img src="${s.img}" style="width:100%; border-radius:25px; margin-bottom:20px;">
        <h2 style="font-weight:800;">${s.name}</h2>
        <p style="color:var(--converge-teal); font-weight:600;">${s.tag}</p>
        <hr>
        <div>${s.bio}</div>
    `;
    view.classList.add('view-active');
}

function openAgenda() {
    const view = document.getElementById('details-view');
    document.getElementById('page-title').innerText = "Agenda";
    document.getElementById('page-content').innerHTML = infoData["Agenda"];
    view.classList.add('view-active');
}

function closePage(id) {
    document.getElementById(id).classList.remove('view-active');
}

function switchDay(day) {
    const btn1 = document.getElementById('btn-day1');
    const btn2 = document.getElementById('btn-day2');
    const content = document.getElementById('agenda-content');

    if (day === 1) {
        btn1.style.background = 'var(--converge-teal)'; btn1.style.color = 'white';
        btn2.style.background = '#f1f5f9'; btn2.style.color = '#64748b';
        content.innerHTML = `<p><strong>09:00 AM</strong> - Opening Ceremony</p>`;
    } else {
        btn2.style.background = 'var(--converge-teal)'; btn2.style.color = 'white';
        btn1.style.background = '#f1f5f9'; btn1.style.color = '#64748b';
        content.innerHTML = `<p><strong>09:00 AM</strong> - Day 2 Workshop</p>`;
    }
}

// 4. THE EMAIL FUNCTION (The Bridge to Apps Script)
async function sendDataToGoogle(userEmail, message) {
    const scriptURL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";
    
    // We use a simple object to match your processEmail(userEmail, message)
    const payload = {
        userEmail: userEmail,
        message: message
    };

    try {
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors', // Required for Apps Script
            body: JSON.stringify(payload)
        });
        alert("Message sent to the team!");
    } catch (e) {
        console.error("Error!", e.message);
    }
}
