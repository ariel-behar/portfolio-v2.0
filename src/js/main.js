// LOADER OVERLAY + WELCOME MESSAGE
const overlay = document.getElementById('loader-overlay');

window.addEventListener('load', () => {
    $('#loader-overlay').fadeOut('slow');
    setTimeout(() => {
        overlay.style.display = 'none'; // LOADER OVERLAY DISSAPEAR
    }, 1000);

    setTimeout(() => {
        $('#front-logo').fadeTo(2500, 1).addClass('d-block');
    }, 3000);

    // WELCOME MESSAGE
    $(document).ready(() => {
        setTimeout(() => {
            // FLY IN TEXT APPEARS
            $('.fly-in-text').removeClass('hidden');
        }, 1000);
        // MAKING THE WEB DESING HEADING APPEAR
        $('#design-heading, #go-to-site-btn').fadeIn(1).addClass('animated zoomIn').css('opacity', 1);
    });
});

$(document).ready(function () {
    $('#thumbnails-carousel-4-thumbs .carousel-inner ol li,#thumbnails-carousel-3-thumbs .carousel-inner ol li').on('click', function () {
        $('#thumbnails-carousel-4-thumbs .carousel-inner ol li, #thumbnails-carousel-3-thumbs .carousel-inner ol li').removeClass('active');
        $(this).addClass('active');
    });
});

// MAKE THE VIDEO DISSAPEAR
$(document).ready(() => {
    $('#go-to-site-btn').click(() => {
        $('.wrapper').slideUp(2500);
        setTimeout(() => {
            $('main').fadeTo(4000, 1).removeClass('main-hidden');
            $('header').fadeTo(3000, 1);
            $('footer').fadeTo(3000, 1);
        });
        setTimeout(() => {
            $('.dotted-scrollspy').fadeTo('slow', 0.5);
            $('#nav-menu').removeClass('d-none');
        }, 2000);
    });
});

$(document).ready(() => {
    $('#nav-menu').on('mouseenter', () => {
        $('#nav-menu').fadeTo('fast', 1);
    });
    $('#nav-menu').on('mouseleave', () => {
        $('#nav-menu').fadeTo('fast', 0.5);
    });
});

const footerDate = document.getElementById('footer-date');
const year = new Date().getFullYear();
footerDate.innerHTML = year;

//PROJECTS
function Project(number, name, description, myRole, techUsed, launchDate, domain, remarks) {
    this.number = number;
    this.name = name;
    this.description = description;
    this.myRole = myRole;
    this.techUsed = techUsed;
    this.launchDate = launchDate;
    this.domain = domain;
    this.remarks = remarks || '';
}

Project.prototype = {
    constructor: Project,
    descriptionTitle: 'Project Description:',
    createSection: function () {
        const listItem = document.querySelectorAll(`li[data-slide-to='${this.number}'`);
        const projectContent = document.getElementById('project-content');

        listItem.forEach(item => {
            item.addEventListener('click', () => {
                setTimeout(() => {
                    projectContent.style.opacity = 0;
                    projectContent.classList.remove('flex-center');
                    projectContent.style.height = 'auto';
                    projectContent.textContent = '';
                }, 300);

                setTimeout(() => {
                    projectContent.innerHTML = `<h4 class='text-center mb-2'><b>${this.name}</b></h4>
                <h5 class='text-left mb-1'>Project Description:</h5>
                <p class='mb-1'>${this.description}${this.remarks}</p>
                <h5 class='text-left mb-1'>My Role in the Project:</h5>
                <p class='mb-1'>${this.myRole}</p>
                <h5 class='text-left mb-1'>Technologies Used:</h5>
                <ul class='text-left mb-1 list-inline' id='techs-used'></ul>
                <h5 class='text-left mb-1'>Project Launched in: <span class='text-success'>${this.launchDate}</span></h5>
                <h5 class='text-left mb-1'>Visit site: <a href='${this.domain}' target='_blank'>${this.name}</a></h5>`;

                    this.techUsed.forEach(e => {
                        document.getElementById('techs-used').innerHTML += '<li class="list-inline-item">•' + e + '</li>';
                    });

                    projectContent.style.opacity = 1;
                }, 500);
            });
        });
    },
};

//A&M GameHub
let amGameHub = new Project(
    1,
    'A&M GameHub',
    'A desktop based web application to assist my little sisters learn English, European geography and Hebrew.',
    'I am the sole designer and developer of this project from conceptualization to execution. The functionality of the application is written in vanilla JavaScript with the exception of a few lines of jQuery. Overall, a very exciting project with gratifying results.',
    ['HTML', 'CSS', 'SASS', 'Bootstrap', 'JavaScript', 'jQuery', 'Gulp.js'],
    'Jan 2018',
    'http://www.am-gamehub.arielbehar.com/',
    "<br><span class='text-muted pl-2'>*The site's language is Bulgarian.</span><br><span class='text-muted pl-2'>*Optimized only for large screen sizes.</span>"
);

amGameHub.createSection();

//eSports Marketing Group
let eSports = new Project(
    2,
    'eSports Marketing Group',
    'Online marketing firm for eSports competitors. The site is a hub for people to receive representation, guidance and marketing tools on a professional level.',
    'Lead developer from conceptualization to execution. It was the first site I ever built with Wordpress and served me as an introduction to the CMS platform. It was an interesting concept to work on and I am very happy with the final result.',
    ['Wordpress', 'HTML', 'CSS'],
    'Aug 2017',
    'http://esportmarketinggroup.com/'
);

eSports.createSection();

//VX Aviation
let vxAviation = new Project(
    3,
    'VX Aviation',
    'Company site for a Tampa Bay area based personal flight training school aiming for new student recruitement.',
    'Sole designer and developer from conceptualization to execution. The development of this project was rather fast and enjoyable because of how comfortable I was feeling working with the Bootstrap framework at this point.',
    ['HTML', 'CSS', 'SASS', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP'],
    'Aug 2017',
    'http://vxaviation.arielbehar.com/'
);

vxAviation.createSection();

//Blago-Darya
let blagoDarya = new Project(
    4,
    'Blago-darya',
    'Voluntary initiative to help shelter homeless and wounded animals in Bulgaria. The organization gathers funds through direct donations and product sales.',
    'Sole designer and developer. This is my biggest and most gratifying project to date. It is for a great cause and is being led by a passionate friend which will expand this initiative to become the leading one of its kind in the country.',
    ['Wordpress', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
    'Currently in Production',
    'http://my-dummy-site.com/',
    '<br><span class="text-muted pl-2">*The site\'s language is Bulgarian.</span></p>'
);

blagoDarya.createSection();

//Travel @ Style
let travelAtStyle = new Project(
    5,
    'Travel@Style',
    'eCommerce platform for a New York based store focusing on travel apparel and hand-held steamer irons.',
    'Sole designer and developer from conceptualization to execution. T@S is my first more complex extracurricular Bootstrap/JavaScript project. It took 2 months of sporadic work to finish it, but it was all worth it because it has all the functionalities it was intended to have.',
    ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP'],
    'Aug 2017',
    'http://travelatstyle.biz/'
);

travelAtStyle.createSection();

//T&T Customs
let ttCustoms = new Project(
    6,
    'T&T Customs',
    'The site is a front for a business creating custom apparel for school sports teams in the Tampa Bay area.',
    'Lead developer from conceptualization to execution. The site went through several modifications during the development process since new and better creative tools were being provided which were then implemented. The final result was rather pleasing.',
    ['Wordpress', 'HTML', 'CSS'],
    'July 2017',
    'http://thomasandthomascustoms.com/'
);

ttCustoms.createSection();

//The Credit Score Guru
let creditScoreGuru = new Project(
    7,
    'The Credit Score Guru',
    'Credit repair site aiming to present viable options for people to fix their credit score and create positive purchasing habits in the future.',
    'Lead developer from conceptualization to execution. This site was a rather enjoyable project for me to work on because of the relative experience I had already gained working with Wordpress.',
    ['Wordpress', 'HTML', 'CSS'],
    'July 2017',
    'http://thecreditscore.guru/'
);

creditScoreGuru.createSection();

//HUG Tampa Bay
let hugTampaBay = new Project(
    8,
    'HUG Tampa Bay',
    'A Tampa based non-profit organization that strives to connect people with disabilities to social activities and events in the community',
    'I worked on this project in the capacity of web designer for Visual Edge Design. I was tasked to redesign it while being provided with clear instructions what the final outcome should be. Additionally, I incorporated different functionalities and improved on the overall look and feel while sticking to the original character of the site.',
    ['Wordpress', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
    'Oct 2017',
    'http://helpusgather.org/'
);

hugTampaBay.createSection();

//Body Wrap Spalon
let bwSpalon = new Project(
    9,
    'Body Wrap Spalon',
    'An Oklahoma based Spa Services website. The site appeals mainly to women, but offers treatments also for men.',
    'Redesign and face-lift of the overall look and feel of the website. I worked on this project in the capacity of web designer for Visual Edge Design. I was tasked to bring this site up to date, by applying design concepts that conform to the 2017 tendencies, while also keeping the already established character of the brand.',
    ['Wordpress', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
    'Nov 2017',
    'http://www.bodywrapspalon.com/'
);

bwSpalon.createSection();

// END OF PROJECTS

$(() => {
    $('#bonus-button').on('click', () => {
        $('#bonus-div').slideUp();
        $('#daniel-site-section').show().css('display', 'block');
        setTimeout(() => {
            $('#bonus-div').css('display', 'none');
        }, 500);
    });
    $('#x-button').on('click', () => {
        $('#bonus-div').slideDown();
        $('#daniel-site-section').hide(500);
    });
});

$(document).ready(function () {
    $('#on-button').on('click', function () {
        $('#on-button').addClass('text-success');
        $('#off-button').removeClass('text-danger');
        $('#psd-to-html-video').fadeTo(300, 1);
    });
    $('#off-button').on('click', function () {
        $('#off-button').addClass('text-danger');
        $('#on-button').removeClass('text-success');
        $('#psd-to-html-video').fadeTo(300, 0);
    });
});

$(() => {
    $('#proficient').mouseenter(() => {
        $('.yellow.darken-2, .blue.darken-2').css('opacity', 0.2);
    });
    $('#proficient').mouseleave(() => {
        $('.yellow.darken-2, .blue.darken-2').css('opacity', 1);
    });
    $('#competent').mouseenter(() => {
        $('.green.darken-2, .blue.darken-2').css('opacity', 0.2);
    });
    $('#competent').mouseleave(() => {
        $('.green.darken-2, .blue.darken-2').css('opacity', 1);
    });
    $('#novice').mouseenter(() => {
        $('.yellow.darken-2, .green.darken-2').css('opacity', 0.2);
    });
    $('#novice').mouseleave(() => {
        $('.yellow.darken-2, .green.darken-2').css('opacity', 1);
    });
});
