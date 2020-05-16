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

//Footer
const footerDate = document.getElementById('footer-date');
const year = new Date().getFullYear();
footerDate.innerHTML = year;
// End Footer

//Abilities
let abilities = [['HTML', 'green', 'html.png'], ['CSS', 'green', 'css.png'], ['Sass', 'green', 'sass.png'], ['Bootstrap', 'green', 'bootstrap.jpg'], ['MDBootstrap', 'green', 'mdbootstrap.jpg'], ['Javascript', 'green', 'js.png'], ['jQuery', 'green', 'jquery.png'], ['JSON', 'green', 'json.jpg'], ['Wordpress', 'green', 'wordpress.png'], ['Gulp.js', 'green', 'gulp.png'], ['Git', 'green', 'git.png'], ['Photoshop', 'green', 'photoshop.png'], ['Premiere', 'yellow', 'premiere.png'], ['Illustrator', 'yellow', 'illustrator-circle.png'], ['Node.js', 'blue', 'node.png'], ['Express', 'blue', 'express.png'], ['MongoDB', 'blue', 'mongodb.png']]

const abilitiesDiv = document.getElementById('abilities');

abilities.reverse().forEach(item => {
    let content = `<div class="chip z-depth-5 ${item[1]} darken-2">
                            <img src ="img/downloaded/icons/${item[2]}" alt="${item[0]} logo" > ${item[0]}
					    </div>`;
    abilitiesDiv.insertAdjacentHTML('afterbegin', content);
})

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

//Once the each individual project has been created, it has to be added to the projectsArray
let projectsArray = [amGameHub, eSports, vxAviation, blagoDarya, travelAtStyle, ttCustoms, creditScoreGuru, hugTampaBay, bwSpalon];

//Creating the projects' respective sections
projectsArray.forEach(project => { project.createSection(); })


// END OF PROJECTS

// PHOTOSHOP PROJECTS
function ProjectPSD(number, name, modalName, image, description, myRole, techUsed, launchDate, domain, remarks) {
    this.number = number;
    this.name = name;
    this.modalName = modalName;
    this.image = image;
    this.description = description;
    this.myRole = myRole;
    this.techUsed = techUsed;
    this.launchDate = launchDate;
    this.domain = domain;
    this.remarks = remarks || '';
}

ProjectPSD.prototype = {
    constructor: ProjectPSD,
    createSection: function () {
        let classActive;
        if (this.number === 0) {
            classActive = 'active';
        } else {
            classActive = '';
        }

        const template = `<div class="carousel-item ${classActive}">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <a onclick="${this.modalName}.createModal()" href="" data-toggle="modal" data-target="#${this.modalName}-modal">
                                            <img src="img/downloaded/${this.image}" alt="${this.name} PSD image"
                                                class="img-fluid mx-auto">
                                        </a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4 class='text-center my-1'>
                                            <b>${this.name}</b>
                                        </h4>
                                        <h5 class="text-center h5-responsive">
                                            <a onclick="${this.modalName}.createModal()" href="" data-toggle="modal" data-target="#${this.lowerCaseName}-modal"
                                                class="d-inline-block">Project
                                                Description </a>
                                            <span class="">|</span>
                                            <a href="${this.domain}" target="_blank"
                                                class="d-inline-block">Visit Project's
                                                Site</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        const psdCarouselIndicators = document.getElementById('psd-carousel-indicators');
        const carouselItemTemplate = `<li data-target="#carousel-psd" data-slide-to="${this.number}" class="${classActive}"></li>`;

        psdCarouselIndicators.insertAdjacentHTML('afterbegin', carouselItemTemplate)

        const psdCarouselInner = document.getElementById('psd-carousel-inner');

        psdCarouselInner.insertAdjacentHTML('afterbegin', template);

        // let createModalClass = document.getElementsByClassName('create-modal');
        // console.log('createModalClass:', createModalClass)

        // createModalClass.forEach(item => {
        //     // item.addEventListener('click', () => {
        //     //     this.createModal();
        //     // })
        //     console.log(item);
        // })

    },
    createModal: function () {
        console.log('bla');
        // let modalTemplate = `<div class="modal fade psd-to-html-modal" id="${this.modalName}" tabindex="-1" role="dialog"
        //                         aria-labelledby="myModalLabel" aria-hidden="true">
        //                         <div class="modal-dialog modal-lg" role="document">
        //                             <div class="modal-content">
        //                                 <div class="modal-header">
        //                                     <h4 class="modal-title w-100 text-white text-center" id="myModalLabel">
        //                                         <b>${this.name}</b>
        //                                     </h4>
        //                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        //                                         <span aria-hidden="true" class="grey-text">&times;</span>
        //                                     </button>
        //                                 </div>
        //                                 <div class="modal-body p-0">
        //                                     <img src="img/downloaded/${this.image}" class="img-fluid" alt="${this.name}" height="100%" width="100%">
        //                                     <div class="px-5 py-3">
        //                                         <h5 class='text-left mb-1'>Project Description:</h5>
        //                                         <p class='mb-1'>${this.description}</p>
        //                                         <h5 class='text-left mb-1'>My Role in the Project:</h5>
        //                                         <p class='mb-1'>${this.myRole}</p>
        //                                         <h5 class='text-left mb-1'>Technologies Used:</h5>
        //                                         <ul class='text-left mb-1 list-inline' id="tech-used-psd">
        //                                         </ul>
        //                                         <h5 class='text-left mb-1'>Project Launched in: &nbsp;&nbsp;&nbsp;
        //                                             <span class='text-success'>${this.launchDate}</span>
        //                                         </h5>
        //                                         <h5 class='text-left mb-1'>Visit site:
        //                                             <a href='${this.domain}' target='_blank'>${this.name}</a>
        //                                         </h5>
        //                                         <p class="text-muted" id="remarks-psd"></p>
        //                                     </div>
        //                                 </div>
        //                                 <div class="modal-footer">
        //                                     <button type="button" class="btn btn-lg primary-color-dark" data-dismiss="modal">Close</button>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>`;
        // this.techUsed.forEach(item => {
        //     if (item === 'Adobe Photoshop') {
        //         document.getElementById('techs-used-psd').innerHTML += '<li class="list-inline-item text-white">•' + item + '</li>';
        //     } else {
        //         document.getElementById('techs-used-psd').innerHTML += '<li class="list-inline-item">•' + item + '</li>';
        //     }
        // });
        // if (this.remarks) {
        //     document.getElementById('remarks-psd').innerHTML = this.remarks[0] + this.remarks[1];
        // }

        // document.getElementById('modals').innerHTML = modalTemplate;

        //REMEMBER TO HANDLE THE REMARKS on certain projects. For example Preferred brands
        // REMEMBER TO FIX THE MODAL NAMES FOR EACH PROJECT
    }
}
// function ProjectPSD(number, name, modalName, image, description, myRole, techUsed, launchDate, domain, remarks) {

let chiropractor = new ProjectPSD(0, 'Chiropractor', 'chiropractor', 'chiropractor.jpg', 'A fiction chiropractor home page design.', "I designed this mock-up web page in Photoshop, as a potential template to be used in future chiropractor's site development.", ['HTML', 'CSS', 'SASS', 'Javascript', 'Gulp.js', 'Adobe Photoshop'], 'April 2020', 'http://chiropractor.arielbehar.com/');


let preferredBrands = new ProjectPSD(1, 'Preferred Brands Inc', 'preferredBrands', 'preferredbrandsinc.jpg', 'A brokerage company representing fine wines, spirits, mixers, and specialty food products.', 'I was tasked with an entire concept re-design of a home page of an the already existing website. The idea was to bring the site up to date with current 2017 trends in contrast to the existing ones from 2006. I did this project in the capacity of web designer for Visual Edge Design.', ['HTML', 'CSS', 'SASS', 'Javascript', 'Gulp.js', 'Adobe Photoshop'], 'Dec 2017', 'http://preferredbrandsinc.arielbehar.com/', ['*Feel free to see the original site on which this project is based on', '<a href="http://preferredbrandsinc.com/" target="_blank">here</a>']);

let floridaDentalClinic = new ProjectPSD(2, 'Florida Dental Clinic', 'floridaDentalClinic', 'florida-dental-clinic.jpg', 'A fictional dental clinic home page design.', 'I designed this mock-up website in Photoshop for Visual Edge Design, as a potential template to be used in future dental site development.', ['HTML', 'CSS', 'SASS', 'Javascript', 'Gulp.js', 'Adobe Photoshop'], 'Dec 2017', 'http://florida-dental-clinic.arielbehar.com/');

let advancedCabinetServices = new ProjectPSD(3, 'Advanced Cabinet Services', 'advancedCabinetServices', 'advancedcabinetservices.jpg', 'A company selling hardware and accessories for home improvement', 'I was tasked with designing a face lift home page of the already existing website while sticking as much as possible to the original look of the same page from 2010. I did this project in the capacity of web designer for Visual Edge Design.', ['HTML', 'CSS', 'SASS', 'Javascript', 'Gulp.js', 'Adobe Photoshop'], 'Dec 2017', 'http://advancedcabinetservices.arielbehar.com/', ['*Feel free to see the original site on which this project is based on', '<a href="https://www.advancedcabinetservices.com/" target="_blank">here</a>']);

let dentalClinic = new ProjectPSD(4, 'Dental Clinic', 'dentalClinic', 'dental-clinic.jpg', 'A fiction dental clinic home page design.', 'I designed this site in Photoshop for Visual Edge Design, as a potential template to be used in future dental site development.', ['HTML', 'CSS', 'SASS', 'Javascript', 'Gulp.js', 'Adobe Photoshop'], 'Dec 2017', 'http://dental-clinic.arielbehar.com/');

let stylishPortfolio = new ProjectPSD(5, 'Stylish Portfolio', 'stylishPortfolio', 'stylish-portfolio.jpg', 'Portfolio site for a fictional web and graphic design company. One pager with no actual functionalities and no other purpose apart from pure Photoshop practice and Bootstrap based recreation.', 'The Photoshop design for this project is not mine although I did compose the actual PSD file. The conversion to an HTML based website is entirely on me and it was my first project on which I practiced accurate recreation of an already existing design. Having the Photoshop file available in front of me helped me finish this project in about 2 hours.', ['HTML', 'CSS', 'SASS', 'Bootstrap', 'Adobe Photoshop'], 'Oct 2017', 'http://stylish-portfolio.arielbehar.com/', ['* Feel free to check out Mir Rom\'s tutorial on which this project is based on', '<a href="https://www.youtube.com/watch?v=GKRQC4fLNHs&amp;t=677s" target="_blank">here</a>']);

let hizamoPortfolio = new ProjectPSD(6, 'Hizamo Portfolio', 'hizamoPortfolio', 'hizamo-portfolio.jpg', 'Portfolio site for a fictional web design company. One pager with no actual functionalities and no other purpose apart from pure Photoshop practice and Bootstrap based recreation.', 'The Photoshop design for this project is not mine although I did compose the actual PSD file. The conversion to an HTML based website is entirely on me and it was my second project on which I practiced accurate recreation of an already existing design. Having the Photoshop file available in front of me helped me finish this project in about 2 hours.', ['HTML', 'CSS', 'SASS', 'Bootstrap', 'Adobe Photoshop'], 'Oct 2017', 'http://hizamo-portfolio.arielbehar.com/', ['* Feel free to check out Mir Rom\'s tutorial on which this project is based on', '<a href="https://www.youtube.com/watch?v=qZ3zbDzDuFU&t=200s" target="_blank">here</a>']);


//Once the each individual project has been created, it has to be added to the projectsArray
let projectsPSDArray = [chiropractor, preferredBrands, floridaDentalClinic, advancedCabinetServices, dentalClinic, stylishPortfolio, hizamoPortfolio];

//Creating the projects' respective sections
projectsPSDArray.reverse().forEach(project => { project.createSection(); })


// END of Photoshop projects

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
