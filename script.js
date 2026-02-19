// Data for nascon-2026
const speakers = [
    { 
      name: 'Francis Kong', 
      tag: 'Keynote Speaker', 
      bio: 'Francisco J. Kong is a multi-awarded business speaker and leadership mentor...', 
      img: 'https://via.placeholder.com/150', // Replace with real image links
      topic: 'The Invisible World' 
    },
    { 
      name: 'Jack Madrid', 
      tag: 'President & CEO, IBPAP', 
      bio: 'Jack is a seasoned business leader with 20 years of experience...', 
      img: 'https://via.placeholder.com/150', 
      topic: 'Industry Disruptors' 
    }
];

const agendaData = `
    <div style="border-left: 3px solid var(--converge-teal); padding-left: 15px;">
        <p><strong>08:00 AM</strong> - Registration</p>
        <p><strong>09:00 AM</strong> - Welcome Remarks</p>
        <p><strong>10:00 AM</strong> - Keynote Session</p>
        <p><strong>12:00 PM</strong> - Networking Lunch</p>
    </div>
`;

// UI Logic
function renderSpeakers() {
    const content = document.getElementById('page-content');
    document.getElementById('page-title').innerText = "Speakers";
    
    let html = '';
    speakers.forEach((s, index) => {
        html += `
            <div class="speaker-row" onclick="viewSpeaker(${index})">
                <img src="${s.img}" class="row-img">
                <div>
                    <div style="font-weight:700;">${s.name}</div>
                    <div style="font-size:0.8rem; color:#667085;">${s.tag}</div>
                </div>
            </div>
        `;
    });
    content.innerHTML = html;
    document.getElementById('details-view').classList.add('view-active');
}

function renderAgenda() {
    document.getElementById('page-title').innerText = "Agenda";
    document.getElementById('page-content').innerHTML = agendaData;
    document.getElementById('details-view').classList.add('view-active');
}

function viewSpeaker(index) {
    const s = speakers[index];
    document.getElementById('profile-content').innerHTML = `
        <img src="${s.img}" style="width:100%; border-radius:20px; margin-bottom:20px;">
        <h2>${s.name}</h2>
        <h5 style="color:var(--converge-teal)">${s.tag}</h5>
        <p style="margin-top:20px;">${s.bio}</p>
    `;
    document.getElementById('speaker-profile-view').classList.add('view-active');
}

function closePage(id) {
    document.getElementById(id).classList.remove('view-active');
}
