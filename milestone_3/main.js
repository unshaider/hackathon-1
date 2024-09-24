// Get form elements
const resumeForm = document.getElementById('resumeForm');
const displayName = document.getElementById('displayName');
const displayEmail = document.getElementById('displayEmail');
const displayPhone = document.getElementById('displayPhone');
const displayDegree = document.getElementById('displayDegree');
const displayInstitute = document.getElementById('displayInstitute');
const displayCompletion = document.getElementById('displayCompletion');
const displayTitle = document.getElementById('displayTitle');
const displayCompany = document.getElementById('displayCompany');
const displayYear = document.getElementById('displayYear');
const displaySkill1 = document.getElementById('displaySkill1');
const displaySkill2 = document.getElementById('displaySkill2');
const displaySkill3 = document.getElementById('displaySkill3');
// Function to dynamically update resume
function generateResume(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const institute = document.getElementById('institute').value;
    const completion = document.getElementById('completion').value;
    const title = document.getElementById('title').value;
    const company = document.getElementById('company').value;
    const year = document.getElementById('year').value;
    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value;
    const skill3 = document.getElementById('skill3').value;
    // Update resume content dynamically
    displayName.textContent = `Name: ${name}`;
    displayEmail.textContent = `Email: ${email}`;
    displayPhone.textContent = `Phone: ${phone}`;
    displayDegree.textContent = `Degree: ${degree}`;
    displayInstitute.textContent = `Institute Name: ${institute}`;
    displayCompletion.textContent = `Completion Year: ${completion}`;
    displayTitle.textContent = `Job Title: ${title}`;
    displayCompany.textContent = `Company Name: ${company}`;
    displayYear.textContent = `Year: ${year}`;
    displaySkill1.textContent = `${skill1}`;
    displaySkill2.textContent = `${skill2}`;
    displaySkill3.textContent = `${skill3}`;
}
// Attach event listener to form submission
resumeForm.addEventListener('submit', generateResume);
