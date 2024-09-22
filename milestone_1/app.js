// Select dropdown menu and all sections
const sectionToggleDropdown = document.getElementById("sectionToggle");
// Sections to toggle
const profilePic = document.querySelector("#profile-picture");
const contactDetails = document.querySelector("#contact");
const skillsSection = document.querySelector("#skills");
const coursesSection = document.querySelector("#courses");
const educationSection = document.querySelector("#education");
const nameSection = document.querySelector("#name");
const objectiveSection = document.querySelector("#objective");
const workExperienceSection = document.querySelector("#experience");
// Function to toggle section visibility based on selected option
function toggleSection(section) {
    if (section.style.display === "none") {
        section.style.display = "block";
    }
    else {
        section.style.display = "none";
    }
}
// Add event listener for dropdown selection change
sectionToggleDropdown.addEventListener("change", () => {
    const selectedValue = sectionToggleDropdown.value;
    if (selectedValue === "profile-picture") {
        toggleSection(profilePic);
    }
    else if (selectedValue === "contact") {
        toggleSection(contactDetails);
    }
    else if (selectedValue === "skills") {
        toggleSection(skillsSection);
    }
    else if (selectedValue === "courses") {
        toggleSection(coursesSection);
    }
    else if (selectedValue === "education") {
        toggleSection(educationSection);
    }
    else if (selectedValue === "name") {
        toggleSection(nameSection);
    }
    else if (selectedValue === "objective") {
        toggleSection(objectiveSection);
    }
    else if (selectedValue === "experience") {
        toggleSection(workExperienceSection);
    }
});