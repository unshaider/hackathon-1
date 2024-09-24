// Select dropdown menu and all sections
const sectionToggleDropdown = document.getElementById(
  "sectionToggle"
) as HTMLSelectElement;

// Sections to toggle
const profilePic = document.querySelector(
  "#profile-picture"
) as HTMLImageElement;
const contactDetails = document.querySelector("#contact") as HTMLElement;
const skillsSection = document.querySelector("#skills") as HTMLElement;
const coursesSection = document.querySelector("#courses") as HTMLElement;
const educationSection = document.querySelector("#education") as HTMLElement;
const nameSection = document.querySelector("#name") as HTMLElement;
const objectiveSection = document.querySelector("#objective") as HTMLElement;
const workExperienceSection = document.querySelector(
  "#experience"
) as HTMLElement;

// Function to toggle section visibility based on selected option
function toggleSection(section: HTMLElement) {
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

// Add event listener for dropdown selection change
sectionToggleDropdown.addEventListener("change", () => {
  const selectedValue = sectionToggleDropdown.value;
  if (selectedValue === "profile-picture") {
    toggleSection(profilePic);
  } else if (selectedValue === "contact") {
    toggleSection(contactDetails);
  } else if (selectedValue === "skills") {
    toggleSection(skillsSection);
  } else if (selectedValue === "courses") {
    toggleSection(coursesSection);
  } else if (selectedValue === "education") {
    toggleSection(educationSection);
  } else if (selectedValue === "name") {
    toggleSection(nameSection);
  } else if (selectedValue === "objective") {
    toggleSection(objectiveSection);
  } else if (selectedValue === "experience") {
    toggleSection(workExperienceSection);
  }
});
