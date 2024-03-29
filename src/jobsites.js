renderTheme();
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { renderTheme, setLightMode, setNightMode } from "./nightmode.js";

function callNightMode() {
  setNightMode();
}

function callLightMode() {
  setLightMode();
}

const firebaseConfig = {
  apiKey: "AIzaSyAvbph3Qpz8w_ZERUZQ-Oh5YEyZI-ulCWQ",
  authDomain: "applitrack.firebaseapp.com",
  projectId: "applitrack",
  storageBucket: "applitrack.appspot.com",
  messagingSenderId: "396436130687",
  appId: "1:396436130687:web:dca8e5f220ecb9a044284a",
  measurementId: "G-EZDMF0Q14Y",
};

initializeApp(firebaseConfig);
const auth = getAuth();

function openProfileBar() {
  document.querySelector("#profilename").textContent =
    "Hi, " + auth.currentUser.displayName + "!";
  document.querySelector("#profileemail").textContent = auth.currentUser.email;
  document.querySelector("#profileimage").src = auth.currentUser.photoURL;
  document.querySelector("#profilemenu").style.display = "block";
}

document.onclick = function (e) {
  if (
    !document.querySelector("#profilemenu").contains(e.target) &&
    !document.querySelector("#profilelink").contains(e.target)
  ) {
    document.querySelector("#profilemenu").style.display = "none";
  }
};

onAuthStateChanged(auth, async (user) => {
  if (user) {
    document.querySelector("#profilelinkimage").src = user.photoURL;
    CreateJobSiteTable(); //Create List of Job Sites
  } else {
    window.location.href = "index.html";
  }
});

function logout() {
  signOut(auth);
  window.location.href = "index.html";
}

//#region Job Site Info
const AIA = {
  logo: "images/AIA.png",
  title: "American Institute of Architects",
  desc:
    "American Institute of Architects provides a variety of architecture jobs. They have positions in their " +
    "own company and also provide positions from other architecture companies. This is a good source for full " +
    "time positions, however you might be able to find some internships among all the full time positions.",
  link: "https://www.aia.org/career-center",
  industries: ["Architecture"],
};

const Angel = {
  logo: "images/angellist.png",
  title: "Angel List",
  desc:
    "A job search website that provides opportunities for recruiters to find employees and for regular people " +
    "to find the job that fits them. They have opportunities for all sorts of industries and many start-ups " +
    "that are looking to hire.",
  link: "https://angel.co/jobs",
  industries: [
    "Engineering",
    "Computer Science",
    "Digital Design",
    "Product",
    "Operations",
    "Sales",
    "Marketing",
    "Management",
  ],
};

const Architects = {
  logo: "images/BSA.png",
  title: "Boston Society of Architects",
  desc:
    "The Boston Society for Architecture is a partnership between the Boston Society of Architects " +
    "and the BSA Foundation. As a member-led association, the BSA is one of the oldest and largest " +
    "chapters of the American Institute of Architects in the United States. Comprised of world-renowned " +
    "architects, designers, engineers, builders, and other industry professionals, the BSA benefits from " +
    "a committed membership who are some of the leading thinkers and innovators in professional practice today.",
  link: "https://www.architects.org/jobs",
  industries: ["Architecture"],
};

const ASID = {
  logo: "images/ASID.png",
  title: "American Society of Interior Designers",
  desc: "A job board for those who are in the architecture or design industry.",
  link: "https://www.asid.org/",
  industries: ["Architecture", "Interior Design"],
};

const Behance = {
  logo: "images/behance.png",
  title: "Behance",
  desc:
    "Jobs for designers. The JobList from creative platform Behance showcases opportunities within " +
    "some of the top global brands, including Google, Facebook, EA, Sony, Adobe, Apple, Microsoft " +
    "and others. You can search via company or category to help refine and narrow your results.",
  link: "https://www.behance.net/joblist?tracking_source=nav20",
  industries: ["Everything"],
};

const Biopharmguy = {
  logo: "images/BPG.png",
  title: "BioPharmGuy",
  desc:
    "Not a job search engine, but a fairly comprehensive list of biotech and pharma companies " +
    "in MA broken down by town; great for biomeds doing direct outreach.",
  link: "https://biopharmguy.com/career-by-location.php",
  industries: ["BioTech", "Biology", "Chemistry"],
};

const BostonStartups = {
  logo: "images/BSG.png",
  title: "Boston Startups Guide",
  desc: "Boston Startups Guide provides a current, curated list of Boston startups & community resources.",
  link: "https://bostonstartupsguide.com/boston-startup-jobs/",
  industries: ["Engineering", "Computer Science"],
};

const BIB = {
  logo: "images/BIB.png",
  title: "Built in Boston",
  desc: "Boston area tech jobs; can search by internships.",
  link: "https://www.builtinboston.com/",
  industries: [
    "Data Science",
    "Digital Design",
    "Engineering",
    "Computer Science",
    "Finance",
    "Human Resources",
    "Legal",
    "Marketing",
    "Operations",
    "Product",
    "Management",
    "Sales",
  ],
};

const CollegeRecruiter = {
  logo: "images/CollegeRecruiter.png",
  title: "College Recruiter",
  desc: "Helping College and University Students and Recent Grads Find Great Internships, Entry-Level Jobs, and Careers.",
  link: "https://collegerecruiter.com/",
  industries: [
    "Computer Science",
    "Management",
    "Marketing",
    "Sales",
    "Operations",
    "Engineering",
    "Human Resources",
    "Product",
  ],
};

const Coroflot = {
  logo: "images/Coroflot.png",
  title: "Coroflot",
  desc: "Jobs for designers. Choose internships in the Job Level menu.",
  link: "https://www.coroflot.com/design-jobs",
  industries: ["Digital Design", "Engineering", "Design"],
};

const DesignJobs = {
  logo: "images/AIGA.png",
  title: "AIGA Design Jobs",
  desc: "Jobs for designers. Users can search for internships or jobs, and narrow by geographic location.",
  link: "https://designjobs.aiga.org/",
  industries: ["Digital Design", "Design"],
};

const Dice = {
  logo: "images/Dice.png",
  title: "Dice",
  desc: "Search across 85,762 Tech Jobs in the USA.",
  link: "https://www.dice.com/",
  industries: ["Computer Science", "Data Science", "Management"],
};

const EngineerJobs = {
  logo: "images/Engineerjobs.png",
  title: "Engineer Jobs",
  desc: "Engineering specific jobs. You can search by location and job type.",
  link: "https://www.engineerjobs.com/",
  industries: ["Computer Science", "Engineering"],
};

const GlassDoor = {
  logo: "images/Glassdoor.png",
  title: "Glassdoor",
  desc:
    "Search all the open positions on the web. Get your own personalized salary estimate. Read reviews " +
    "on over 600,000 companies worldwide. The right job is out there, use Glassdoor to find it.",
  link: "https://www.glassdoor.com/",
  industries: ["Everything"],
};

const Greentown = {
  logo: "images/Greentown.png",
  title: "Greentown Labs",
  desc: "Jobs for those working in at the largest clean technology incubator in the US.",
  link: "https://greentownlabs.com/",
  industries: [
    "Engineering",
    "Business",
    "Data Science",
    "Digital Design",
    "Marketing",
    "Operations",
    "Sales",
    "Computer Science",
  ],
};

const HackerRank = {
  logo: "images/HackerRank.png",
  title: "Hacker Rank",
  desc: "Great for Software Development and practicing coding.",
  link: "https://www.hackerrank.com/",
  industries: ["Data Science", "Computer Science"],
};

const InteriorDesign = {
  logo: "images/IIDA.png",
  title: "International Interior Design Association",
  desc:
    "IIDA Career Center contains the largest source of Interior Design jobs in the nation. " +
    "It’s where Interior Design professionals go to find the right Interior Design jobs and " +
    "where employers go to find the highest quality Interior Design talent. IIDA Career Center " +
    "connects employers with thousands of highly engaged Interior Designers, including over 20,000 " +
    "IIDA member Interior Designers, nonmembers, and institutions.",
  link: "https://iida-jobs.careerwebsite.com/",
  industries: ["Interior Design"],
};

const Indeed = {
  logo: "images/Indeed.png",
  title: "Indeed",
  desc:
    "Indeed is the #1 job site in the world1 with over 250M unique visitors every month. " +
    "Indeed strives to put job seekers first, giving them free access to search for jobs, " +
    "post resumes, and research companies. Every day, we connect millions of people to new opportunities.",
  link: "https://www.indeed.com/",
  industries: ["Everything"],
};

const Interships = {
  logo: "images/Chegg.png",
  title: "Chegg Internships",
  desc:
    "Chegg Internships brings students and employers together in one centralized location, " +
    "providing tools and services for students to develop the real-world skills they will need upon " +
    "graduation and for employers to find the best candidates.",
  link: "https://www.internships.com/",
  industries: ["Everything"],
};

const Krop = {
  logo: "images/Krop.png",
  title: "Krop",
  desc:
    "Jobs for designers. Krop started in 2000 as a private mailing list and has grown into one " +
    "of biggest job boards online. It has over 1 million visits each month, and is constantly evolving " +
    "with new tools and features. You can search by keyword or location to find jobs that match your " +
    "requirements, and have new jobs that match your criteria emailed to you as they are posted.",
  link: "https://www.krop.com/creative-jobs/",
  industries: ["Management", "Digital Design", "Computer Science"],
};

const LinkedIn = {
  logo: "images/linkedin.png",
  title: "LinkedIn",
  desc:
    "LinkedIn operates the world’s largest professional network on the Internet with more " +
    "than 500 million members in over 200 countries and territories.",
  link: "https://www.linkedin.com/",
  industries: ["Everything"],
};

const NSF = {
  logo: "images/NSF.png",
  title: "National Science Foundation",
  desc:
    "National Science Foundation REU (Research Experience for Undergraduates) – opportunities " +
    "exist for many technical disciplines including engineering, but it is most heavily used by " +
    "applied math students; opportunities to conduct collegiate-level research across the US",
  link: "https://nsf.gov/",
  industries: ["Biology", "Computer Science", "Engineering", "Human Resources"],
};

const SimplyHired = {
  logo: "images/SimplyHired.png",
  title: "Simply Hired.",
  desc:
    "A good jobsite that offers a variety of companies and positions. SimplyHired also offers a free " +
    "resume builder.",
  link: "https://www.simplyhired.com/",
  industries: ["Everything"],
};

const TechReview = {
  logo: "images/MIT.png",
  title: "MIT Technology Review",
  desc:
    "MIT Technology Review derives authority from its relationship to the world's foremost technology " +
    "institution and from its editors' deep technical knowledge, capacity to see technologies in their " +
    "broadest context, and unequaled access to leading innovators and researchers. Their in-depth reporting " +
    "reveals what’s going on now to prepare you for what’s coming next.",
  link: "https://www.technologyreview.com/open-positions/",
  industries: [
    "Computer Science",
    "Data Science",
    "Digital Design",
    "Engineering",
  ],
};

const USAJobs = {
  logo: "images/USA.png",
  title: "USA Jobs",
  desc:
    "USAJOBS connects job seekers with federal employment opportunities across the United States and " +
    "around the world. As the Federal Government’s official employment site, USAJOBS helps the right people " +
    "find the right jobs.",
  link: "https://www.usajobs.gov/",
  industries: ["Everything"],
};

const VentureLoop = {
  logo: "images/Venture.png",
  title: "Venture Loop",
  desc:
    "VentureLoop's products and services connect growth companies, talent, entrepreneurs and resources. " +
    "They create long-term relationships with venture capital firms, entrepreneurial individuals and " +
    "service providers to develop a valuable pool of relationship capital for their venture-backed " +
    "customers. For job seekers, VentureLoop is the worldwide leader in job postings focused on " +
    "venture-backed companies. Many of the job postings found on VentureLoop cannot be found on any " +
    "other job board.",
  link: "https://www.ventureloop.com/ventureloop/home.php",
  industries: [
    "Finance",
    "Data Science",
    "Computer Science",
    "Engineering",
    "Business",
    "Human Resources",
    "Operations",
  ],
};

const VentureFizz = {
  logo: "images/VentureFizz.png",
  title: "Venture Fizz",
  desc:
    "VentureFizz is the leading authority for jobs & careers in the tech industry. They have the top " +
    "Job Board focused on our industry featuring thousands of job opportunities across all functional " +
    "areas. They are also your company discovery platform, where they help you navigate the tech industry to " +
    "discover what companies align with your interests and values. Their profiles and videos are another key " +
    "resource, as they give you the inside look at a company, its people, and culture.",
  link: "https://venturefizz.com/jobs",
  industries: [
    "Engineering",
    "Computer Science",
    "Digital Design",
    "Marketing",
    "Sales",
    "Human Resources",
    "Management",
    "Data Science",
  ],
};

const WayUp = {
  logo: "images/Wayup.png",
  title: "Way Up",
  desc:
    "WayUp was made to enable early-career candidates to discover and be discovered by employers. " +
    "From landing paid internships throughout college to your first or second job (or even third job), " +
    "WayUp is there for you and helping you to uncover opportunities for your future that you never even " +
    "knew existed. And they're always making sure that the jobs they recommend will benefit you as much as " +
    "they will benefit the company.",
  link: "https://www.wayup.com/",
  industries: ["Everything"],
};
//#endregion

const sites = [
  AIA,
  Angel,
  Architects,
  ASID,
  Behance,
  Biopharmguy,
  BostonStartups,
  BIB,
  CollegeRecruiter,
  Coroflot,
  DesignJobs,
  Dice,
  EngineerJobs,
  GlassDoor,
  Greentown,
  HackerRank,
  InteriorDesign,
  Indeed,
  Interships,
  Krop,
  LinkedIn,
  NSF,
  SimplyHired,
  TechReview,
  USAJobs,
  VentureFizz,
  VentureLoop,
  WayUp,
];

const industryTags = [
  "Architecture",
  "Engineering",
  "Computer Science",
  "Digital Design",
  "Product",
  "Operations",
  "Sales",
  "Marketing",
  "Management",
  "Interior Design",
  "Everything",
  "BioTech",
  "Biology",
  "Chemistry",
  "Data Science",
  "Finance",
  "Human Resources",
  "Legal",
  "Economics",
  "Psychology",
  "Business",
  "HealthCare",
  "Education",
  "Language",
  "Design",
];

var filters = [];

const siteTable = document.querySelector("#sitestable");

/**
 * Function to display table consisting of job website objects defined above
 *
 * If there are filters active from the dropdown, the websites will be filtered
 * through accordingly by their tags
 */
function CreateJobSiteTable() {
  while (siteTable.firstChild) {
    siteTable.removeChild(siteTable.firstChild);
  }
  var tableBody = document.createElement("tbody");
  for (var i = 0; i < sites.length; i++) {
    var isIncluded = true;
    for (var k = 0; k < filters.length; k++) {
      if (!sites[i].industries.includes(filters[k])) {
        isIncluded = false;
      }
    }
    if (
      isIncluded ||
      filters.length == 0 ||
      sites[i].industries.includes("Everything")
    ) {
      var tRow = document.createElement("tr");
      tRow.setAttribute("id", "sitetablerow");
      tRow.setAttribute("class", "clickable");
      //Site Link
      var siteLink = sites[i].link;
      tRow.setAttribute("onclick", "window.open('" + siteLink + "','_blank')");

      //Site Logo
      var siteLogo = document.createElement("td");
      siteLogo.setAttribute("id", "siteLogoTD");
      var imageFigure = document.createElement("figure");
      var siteImg = document.createElement("img");
      siteImg.setAttribute("src", sites[i].logo);
      siteImg.setAttribute("width", "500");
      siteImg.setAttribute("height", "500");
      imageFigure.appendChild(siteImg);
      siteLogo.appendChild(imageFigure);

      //Site Name
      var siteName = document.createElement("td");
      siteName.setAttribute("id", "siteNameTD");
      siteName.textContent = sites[i].title;

      //Site Description
      var siteDesc = document.createElement("td");
      siteDesc.textContent = sites[i].desc;

      var siteTags = document.createElement("span");
      siteTags.style.display = "block";

      for (var j = 0; j < sites[i].industries.length; j++) {
        var siteTag = document.createElement("span");
        siteTag.classList.add("tag", "is-dark", "my-2", "mr-2");
        siteTag.textContent = sites[i].industries[j];
        if (
          sites[i].industries[j] == "Engineering" ||
          sites[i].industries[j] == "Computer Science" ||
          sites[i].industries[j] == "Digital Design" ||
          sites[i].industries[j] == "Data Science"
        ) {
          siteTag.style.backgroundColor = "#187498";
        } else if (
          sites[i].industries[j] == "Sales" ||
          sites[i].industries[j] == "Product" ||
          sites[i].industries[j] == "Operations" ||
          sites[i].industries[j] == "Marketing" ||
          sites[i].industries[j] == "Management" ||
          sites[i].industries[j] == "Finance" ||
          sites[i].industries[j] == "Human Resources" ||
          sites[i].industries[j] == "Legal" ||
          sites[i].industries[j] == "Economics" ||
          sites[i].industries[j] == "Business"
        ) {
          siteTag.style.backgroundColor = "#EB5353";
        } else if (
          sites[i].industries[j] == "BioTech" ||
          sites[i].industries[j] == "Biology" ||
          sites[i].industries[j] == "Chemistry" ||
          sites[i].industries[j] == "Psychology" ||
          sites[i].industries[j] == "HealthCare" ||
          sites[i].industries[j] == "Education" ||
          sites[i].industries[j] == "Language"
        ) {
          siteTag.style.backgroundColor = "#36AE7C";
        }
        siteTags.appendChild(siteTag);
      }

      tRow.appendChild(siteLogo);
      tRow.appendChild(siteName);
      siteDesc.appendChild(siteTags);
      tRow.appendChild(siteDesc);
      tableBody.appendChild(tRow);
    }
  }

  siteTable.appendChild(tableBody);

  renderTheme();
}

/**
 * Selects filters from dropdown and filters through job websites containing said tags
 * Displays the tag next to the filter button
 */
function addFilterTags() {
  filters = [];
  while (document.getElementById("filterTags").firstChild) {
    document
      .getElementById("filterTags")
      .removeChild(document.getElementById("filterTags").firstChild);
  }
  for (var i = 0; i < industryTags.length; i++) {
    if (industryTags[i] == "Everything") {
      continue;
    }
    if (
      document.getElementById("check" + industryTags[i].replace(/ /g, ""))
        .checked
    ) {
      filters.push(industryTags[i]);
      var filterTag = document.createElement("span");
      filterTag.classList.add("tag", "is-link", "ml-1", "mr-2", "mb-2");
      filterTag.textContent = industryTags[i];
      document.getElementById("filterTags").appendChild(filterTag);
    }
  }
  CreateJobSiteTable();
}

export { logout, addFilterTags, callLightMode, callNightMode, openProfileBar };
