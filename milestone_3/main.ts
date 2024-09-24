// Get form elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const displayName = document.getElementById('displayName') as HTMLElement;
const displayEmail = document.getElementById('displayEmail') as HTMLElement;
const displayPhone = document.getElementById('displayPhone') as HTMLElement;
const displayDegree = document.getElementById('displayDegree') as HTMLElement;
const displayInstitute = document.getElementById('displayInstitute') as HTMLElement;
const displayCompletion = document.getElementById('displayCompletion') as HTMLElement;
const displayTitle = document.getElementById('displayTitle') as HTMLElement;
const displayCompany = document.getElementById('displayCompany') as HTMLElement;
const displayYear = document.getElementById('displayYear') as HTMLElement;
const displaySkill1 = document.getElementById('displaySkill1') as HTMLElement;
const displaySkill2 = document.getElementById('displaySkill2') as HTMLElement;
const displaySkill3 = document.getElementById('displaySkill3') as HTMLElement;

// Function to dynamically update resume
function generateResume(event: Event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institute = (document.getElementById('institute') as HTMLInputElement).value;
    const completion = (document.getElementById('completion') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const skill1 = (document.getElementById('skill1') as HTMLInputElement).value;
    const skill2 = (document.getElementById('skill2') as HTMLInputElement).value;
    const skill3 = (document.getElementById('skill3') as HTMLInputElement).value;

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