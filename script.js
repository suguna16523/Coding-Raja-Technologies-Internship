function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const resumeContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h4>Professional Summary</h4>
        <p>${summary}</p>
        <h4>Work Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    document.getElementById('resume-content').innerHTML = resumeContent;
}
