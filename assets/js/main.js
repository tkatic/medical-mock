/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop);

/*==================== SCROLL REVEAL ANIMATION ====================*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '20px',
//     duration: 0,
//     reset: false
// });

// sr.reveal(`.home__data, .home__img,
//             .about__data, .about__img,
//             .services__content, .menu__content,
//             .app__data, .app__img,
//             .contact__data, .contact__button,
//             .footer__content`, {
//     interval: 200
// })

// Modal functionality for team members
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const closeButton = modal.querySelector('.close');

  // Data for each team member modal content
  const teamData = [
    {
      image: "assets/img/plate1.jpg", // Alain Katic
      name: "Dr. Alain Katic, MD",
      content: `
        <p>Dr. Katic completed his undergraduate studies at Baylor University in Waco, Texas, where he received a Bachelor of Science in Biology. Shortly thereafter, he received a medical doctorate from the University of Texas Medical Branch in Galveston, Texas, and went on to complete his internship and residency program in Psychiatry at Brown University’s Butler Hospital. His post-residency training included a two-year fellowship in Child Psychiatry at Children’s Hospital Boston and Harvard Medical School, and a year as a Developmental Evaluation Center Fellow at Children’s Hospital in Boston, Massachusetts.</p>
        <p>Since then, Dr. Katic continues to shape the next generation of psychiatrists as a Clinical Assistant Professor in the Department of Psychiatry and Behavioral Sciences at Baylor College of Medicine.</p>
        <p>Dr. Katic has an extensive background in psychopharmacology, autism, major depressive disorder, schizophrenia, migraine in children and adolescents, adolescent and adult Attention Deficit/Hyperactivity Disorder (ADHD), and Bipolar 1 Depression. He’s served as Medical Director for numerous hospitals and treatment facilities, including Houston Clinical Trials, where he currently serves as President and Medical Director. His research has been published in reputable scientific journals and presented at scientific meetings.</p>
        <p>For over 17 years, Dr. Katic has served as a principal and sub-investigator on over 200 Phase I-IV clinical trials in adult, adolescent, and child psychiatry. As a principal investigator, he has conducted clinical trials for a comprehensive spectrum of indications including ADHD, major depressive disorder, bipolar disorder, anxiety disorder, schizophrenia, sleep disorders, and substance abuse. Dr. Katic moved his private practice to Houston, Texas, in 2000 and became the president and Medical Director of Houston Clinical Trials in 2011, where he continues to conduct clinical research trials and treat patients with psychiatric disorders. He is a member of the American Psychiatric Association, the American Academy of Child and Adolescent Psychiatry, and the Texas Society of Psychiatric Physicians.</p>
      `
    },
    {
      image: "assets/img/plate2.jpg", // Janice Roggenkamp
      name: "Janice Roggenkamp, BBA, CPA",
      content: `
        <p>Janice Roggenkamp has been an Administrator in Central Nervous System (CNS) research since 1983. After earning her BBA from University of Houston and Texas CPA license, she spent 14 years as CEO of an innovative, early phase clinical trial site before narrowing her focus to CNS Business Development. Over the next two decades, Janice provided Business Development services for a number of clinical research sites specializing in CNS indications.</p>
        <p>In 2012, Janice became a co-founder and Director of Business Development and Administration for the newly formed Houston Clinical Trials. In addition to facilitating exciting and cutting edge clinical projects for Houston Clinical Trials, her responsibilities include study budget and contract negotiations and operations management support. Her love of and commitment to psychiatric research has fueled her participation in over 1,000 clinical trials in all Phases and many indications from multiple sites dedicated to CNS clinical research.</p>
      `
    },
    {
      image: "assets/img/plate3.jpg", // Wilma Malit
      name: "Wilma Malit, BSN",
      content: `
        <p>Wilma Malit is a Clinical Research Study Coordinator for Houston Clinical Trials in Houston, Texas. She received her Bachelor of Science in Nursing from Manila Central University in Caloocan City, Manila, Philippines. For over seven years as a Clinical Research Study Coordinator, Ms. Malit has participated in over 50 clinical trials researching major depressive disorder (MDD), bipolar disorder, and children, adolescents and adults with Attention Deficit/Hyperactivity Disorder (ADHD).</p>
        <p>As study coordinator, she serves as a resource in the collection, compilation, documentation and analysis of clinical research data. Ms. Malit joined Houston Clinical Trials in 2013, where she continues to participate in clinical research trials for the treatment of psychiatric and mental disorders.</p>
      `
    },
    {
      image: "assets/img/plate4.jpg", // Johnny M. Timmons
      name: "Johnny M. Timmons, LVN",
      content: `
        <p>Johnny Timmons is a Clinical Research Study Coordinator and Rater for Houston Clinical Trials in Houston. He became a Licensed Vocational Nurse at South Plains College in Lubbock, Texas, in 1984. Mr. Timmons has numerous certifications, which include: the American Heart Association—Cardio Pulmonary Resuscitation, Dangerous Goods Training and Certification, the International Air Transport Association (IATA) Certification, and the National Institute of Health (NIH) Certification.</p>
        <p>Since 2003, Mr. Timmons has served the medical community as a Clinical Research Coordinator and Rater on more than 100 clinical trials pertaining to behavioral health and mental disorders. In 2012, Mr. Timmons joined the Houston Clinical Trial team, where he continues to pursue innovative treatments.</p>
      `
    }
  ];

  // Get all menu__button elements (assumes order matches teamData)
  const menuButtons = document.querySelectorAll('.menu__button');

  // Attach click events for each button to update modal content
  menuButtons.forEach((button, index) => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      // Update the modal header: image and title
      const modalHeader = modal.querySelector('.modal-header');
      const modalImg = modalHeader.querySelector('img');
      const modalTitle = modalHeader.querySelector('h2');

      modalImg.src = teamData[index].image;
      modalImg.alt = teamData[index].name;
      modalTitle.textContent = teamData[index].name;

      // Update the modal body with the detailed content
      const modalBody = modal.querySelector('.modal-body');
      modalBody.innerHTML = teamData[index].content;

      // Display the modal
      modal.style.display = 'block';
    });
  });

  // Close modal when the close button is clicked
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

//phone logic
document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('phone');
  
  phoneInput.addEventListener('input', function(e) {
    // Remove all non-digit characters
    let digits = phoneInput.value.replace(/\D/g, '');

    // Limit to 10 digits (for a standard US phone number)
    digits = digits.substring(0, 10);

    // Format the number as XXX-XXX-XXXX
    let formattedNumber = '';
    if (digits.length > 0) {
      formattedNumber = digits.substring(0, 3);
    }
    if (digits.length >= 4) {
      formattedNumber += '-' + digits.substring(3, 6);
    }
    if (digits.length >= 7) {
      formattedNumber += '-' + digits.substring(6, 10);
    }
    
    phoneInput.value = formattedNumber;
  });
});
