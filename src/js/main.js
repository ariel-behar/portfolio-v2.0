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

//Languages
let languages = [['English', 'American flag', 'usa.png', '5 / 5 / 5 / 5'], ['Spanish', 'Spanish flag', 'spain.png', '4 / 4 / 5 / 5'], ['Bulgarian', 'Bulgarian flag', 'bulgaria.png', 'Native'], ['Hebrew', 'Israeli flag', 'israel.png', '5 / 5 / 5 / 5'], ['French', 'French flag', 'france.png', '2 / 2 / 3 / 3'], ['Russian', 'Russian flag', 'russia.png', '2 / 1 / 3 / 3']];

const languagesDiv = document.getElementById('languages');

languages.forEach(item => {
    let content = `<div class="col-4 col-sm-2 pb-1 text-center">
                        ${item[0]}
                        <img src="img/downloaded/flags/${item[2]}" alt="${item[1]}" class="img-fluid mx-auto">
                        <span class="text-muted">${item[3]}</span>
                    </div>`;
    languagesDiv.insertAdjacentHTML('beforeend', content);
})
// End of Languages


//Abilities
let abilities = [['HTML', 'green', 'html.png'], ['CSS', 'green', 'css.png'], ['Sass', 'green', 'sass.png'], ['Bootstrap', 'green', 'bootstrap.jpg'], ['MDBootstrap', 'green', 'mdbootstrap.jpg'], ['Javascript', 'green', 'js.png'], ['jQuery', 'green', 'jquery.png'], ['JSON', 'green', 'json.jpg'], ['Wordpress', 'green', 'wordpress.png'], ['Gulp.js', 'green', 'gulp.png'], ['Git', 'green', 'git.png'], ['Photoshop', 'green', 'photoshop.png'], ['Premiere', 'yellow', 'premiere.png'], ['Illustrator', 'yellow', 'illustrator-circle.png'], ['Node.js', 'blue', 'node.png'], ['Express', 'blue', 'express.png'], ['MongoDB', 'blue', 'mongodb.png']]

const abilitiesDiv = document.getElementById('abilities');

abilities.reverse().forEach(item => {
    let content = `<div class="chip z-depth-5 ${item[1]} darken-2">
                            <img src ="img/downloaded/icons/${item[2]}" alt="${item[0]} logo" > ${item[0]}
					    </div>`;
    abilitiesDiv.insertAdjacentHTML('afterbegin', content);
})
//End of Abilities


//PROJECTS
function Project(number, name, projectImage, description, myRole, techUsed, launchDate, domain, remarks) {
    this.number = number;
    this.name = name;
    this.projectImage = projectImage;
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
    displaySection: function () {
        const listItem = document.querySelector(`li[data-slide-to='${this.number + 1}'`);
        const projectContent = document.getElementById('project-content');

        listItem.addEventListener('click', () => {
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
    },
    createSlide: function () {
        let thumbnailTemplate = `<div class="carousel-item">
                                <a href="${this.domain} target="_blank" class="mx-auto">
                                    <img class="img-fluid d-block mx-auto"
                                        src="img/downloaded/slides/${this.projectImage}" alt="Slide Number: ${this.number}">
                                </a>
                            </div>`
        let carouselThumb = document.querySelector('#carousel-thumb .carousel-inner');


        carouselThumb.insertAdjacentHTML('beforeend', thumbnailTemplate);
    },
    createCarouselThumb: function () {
        let carouselFourThumbs = document.getElementById('thumbnails-carousel-4-thumbs');

        let projectTemplate = `<li data-target="#carousel-thumb" data-slide-to="${this.number + 1}"
                            class="active list-inline-item">
                            <img class="d-block w-100"
                                src="img/downloaded/slides/${this.projectImage}" class="img-fluid">
                            </li>`

        let carouselInnerTemplate = `<div class="carousel-inner" role="listbox"></div>`;

        if (carouselFourThumbs) {
            let projectCounter = this.number;
            let carouselItemSlideFunc = function () {
                let result = projectCounter / 4;
                return result;
            };
            let carouselItemSlide = carouselItemSlideFunc();

            let carouselItemTemplate = `<div class="carousel-item">
                                        <div class="col-12 px-0 px-sm-1">
                                            <ol class="list-inline px-2 px-sm-0" id="thumbs-4-slide-${Math.floor(carouselItemSlide)}"></ol>
                                        </div>
                                    </div>`;
            if (carouselItemSlide == 0) {
                carouselFourThumbs.insertAdjacentHTML('afterbegin', carouselInnerTemplate);
                document.querySelector(`#thumbnails-carousel-4-thumbs .carousel-inner`).insertAdjacentHTML('beforeend', carouselItemTemplate);
                document.querySelector(`#thumbnails-carousel-4-thumbs .carousel-inner .carousel-item`).classList.add('active');

                document.querySelector(`#thumbnails-carousel-4-thumbs .carousel-inner .carousel-item div ol#thumbs-4-slide-${Math.floor(carouselItemSlide).toFixed(0)}`).insertAdjacentHTML('beforeend', `<li data-target="#carousel-thumb" data-slide-to='0' class="list-inline-item d-none"></li>`)

                if (projectCounter % 4 == 0) {
                    insertProject(4, carouselItemSlide);
                } else {
                    insertProject(4, carouselItemSlide);
                }
            } else {
                if (projectCounter % 4 == 0) {
                    createNewSlide(4, carouselItemTemplate);
                    insertProject(4, carouselItemSlide);

                } else {
                    insertProject(4, Math.floor(carouselItemSlide).toFixed(0));

                }
            }
        }

        function createNewSlide(num, carouselItemTemplate) {
            document.querySelector(`#thumbnails-carousel-${num}-thumbs .carousel-inner`).insertAdjacentHTML('beforeend', carouselItemTemplate);
        }
        function insertProject(num, carouselItemSlide) {
            document.querySelector(`#thumbnails-carousel-${num}-thumbs .carousel-inner .carousel-item div ol#thumbs-4-slide-${Math.floor(carouselItemSlide).toFixed(0)}`).insertAdjacentHTML('beforeend', projectTemplate)
        }
    }
};

//A&M GameHub
let amGameHub = new Project(
    0,
    'A&M GameHub',
    'am-gamehub.jpg',
    'A desktop based web application to assist my little sisters learn English, European geography and Hebrew.',
    'I am the sole designer and developer of this project from conceptualization to execution. The functionality of the application is written in vanilla JavaScript with the exception of a few lines of jQuery. Overall, a very exciting project with gratifying results.',
    ['HTML', 'CSS', 'SASS', 'Bootstrap', 'JavaScript', 'jQuery', 'Gulp.js'],
    'Jan 2018',
    'http://www.am-gamehub.arielbehar.com/',
    "<br><span class='text-muted pl-2'>*The site's language is Bulgarian.</span><br><span class='text-muted pl-2'>*Optimized only for large screen sizes.</span>"
);

//eSports Marketing Group
let eSports = new Project(
    1,
    'eSports Marketing Group',
    'esports.jpg',
    'Online marketing firm for eSports competitors. The site is a hub for people to receive representation, guidance and marketing tools on a professional level.',
    'Lead developer from conceptualization to execution. It was the first site I ever built with Wordpress and served me as an introduction to the CMS platform. It was an interesting concept to work on and I am very happy with the final result.',
    ['Wordpress', 'HTML', 'CSS'],
    'Aug 2017',
    'http://esportmarketinggroup.com/'
);

//VX Aviation
let vxAviation = new Project(
    2,
    'VX Aviation',
    'vx-aviation.jpg',
    'Company site for a Tampa Bay area based personal flight training school aiming for new student recruitement.',
    'Sole designer and developer from conceptualization to execution. The development of this project was rather fast and enjoyable because of how comfortable I was feeling working with the Bootstrap framework at this point.',
    ['HTML', 'CSS', 'SASS', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP'],
    'Aug 2017',
    'http://vxaviation.arielbehar.com/'
);

//Blago-Darya
let blagoDarya = new Project(
    3,
    'Blago-darya',
    'blago-darya.jpg',
    'Voluntary initiative to help shelter homeless and wounded animals in Bulgaria. The organization gathers funds through direct donations and product sales.',
    'Sole designer and developer. This is my biggest and most gratifying project to date. It is for a great cause and is being led by a passionate friend which will expand this initiative to become the leading one of its kind in the country.',
    ['Wordpress', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
    'Currently in Production',
    'http://my-dummy-site.com/',
    '<br><span class="text-muted pl-2">*The site\'s language is Bulgarian.</span></p>'
);

//Travel @ Style
let travelAtStyle = new Project(
    4,
    'Travel@Style',
    'travel.jpg',
    'eCommerce platform for a New York based store focusing on travel apparel and hand-held steamer irons.',
    'Sole designer and developer from conceptualization to execution. T@S is my first more complex extracurricular Bootstrap/JavaScript project. It took 2 months of sporadic work to finish it, but it was all worth it because it has all the functionalities it was intended to have.',
    ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP'],
    'Aug 2017',
    'http://travelatstyle.biz/'
);

//T&T Customs
let ttCustoms = new Project(
    5,
    'T&T Customs',
    'tt.jpg',
    'The site is a front for a business creating custom apparel for school sports teams in the Tampa Bay area.',
    'Lead developer from conceptualization to execution. The site went through several modifications during the development process since new and better creative tools were being provided which were then implemented. The final result was rather pleasing.',
    ['Wordpress', 'HTML', 'CSS'],
    'July 2017',
    'http://thomasandthomascustoms.com/'
);

//The Credit Score Guru
let creditScoreGuru = new Project(
    6,
    'The Credit Score Guru',
    'guru.jpg',
    'Credit repair site aiming to present viable options for people to fix their credit score and create positive purchasing habits in the future.',
    'Lead developer from conceptualization to execution. This site was a rather enjoyable project for me to work on because of the relative experience I had already gained working with Wordpress.',
    ['Wordpress', 'HTML', 'CSS'],
    'July 2017',
    'http://thecreditscore.guru/'
);

//HUG Tampa Bay
let hugTampaBay = new Project(
    7,
    'HUG Tampa Bay',
    'hug.jpg',
    'A Tampa based non-profit organization that strives to connect people with disabilities to social activities and events in the community',
    'I worked on this project in the capacity of web designer for Visual Edge Design. I was tasked to redesign it while being provided with clear instructions what the final outcome should be. Additionally, I incorporated different functionalities and improved on the overall look and feel while sticking to the original character of the site.',
    ['Wordpress', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
    'Oct 2017',
    'http://helpusgather.org/'
);

//Body Wrap Spalon
let bwSpalon = new Project(
    8,
    'Body Wrap Spalon',
    'ispalon.jpg',
    'An Oklahoma based Spa Services website. The site appeals mainly to women, but offers treatments also for men.',
    'Redesign and face-lift of the overall look and feel of the website. I worked on this project in the capacity of web designer for Visual Edge Design. I was tasked to bring this site up to date, by applying design concepts that conform to the 2017 tendencies, while also keeping the already established character of the brand.',
    ['Wordpress', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
    'Nov 2017',
    'http://www.bodywrapspalon.com/'
);

let arielBehar = new Project(
    9,
    'Ariel Behar Portfolio',
    'portfolio.jpg',
    'My personal portfolio. Although originally created in 2017 bla bla blablablab lablabalb',
    'bla bla blablablab lablabalb description',
    ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Node.js', 'Express'],
    'May 2020',
    'http://www.arielbehar.com'
)

//Once the each individual project has been created, it has to be added to the projectsArray
let projectsArray = [amGameHub, eSports, vxAviation, blagoDarya, travelAtStyle, ttCustoms, creditScoreGuru, hugTampaBay, bwSpalon, arielBehar];

//Creating the projects' respective sections
projectsArray.forEach(project => {

    //Creating the carousel's slides for the respective sections
    project.createSlide();

    //Creates the carousel thumbnails that activate the slider
    project.createCarouselThumb();
    //Creating the projects' respective sections
    project.displaySection();
})


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
                                            <a onclick="${this.modalName}.createModal()" href="" data-toggle="modal" data-target="#${this.modalName}-modal"
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


    },
    createModal: function () {
        let modalTemplate = `<div class="modal fade psd-to-html-modal" id="${this.modalName}-modal" tabindex="-1" role="dialog"
                                aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title w-100 text-white text-center" id="myModalLabel">
                                                <b>${this.name}</b>
                                            </h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true" class="grey-text">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-0">
                                            <img src="img/downloaded/${this.image}" class="img-fluid" alt="${this.name}" height="100%" width="100%">
                                            <div class="px-5 py-3">
                                                <h5 class='text-left mb-1'>Project Description:</h5>
                                                <p class='mb-1'>${this.description}</p>
                                                <h5 class='text-left mb-1'>My Role in the Project:</h5>
                                                <p class='mb-1'>${this.myRole}</p>
                                                <h5 class='text-left mb-1'>Technologies Used:</h5>
                                                <ul class='text-left mb-1 list-inline' id="techs-used-psd">
                                                </ul>
                                                <h5 class='text-left mb-1'>Project Launched in: &nbsp;&nbsp;&nbsp;
                                                    <span class='text-success'>${this.launchDate}</span>
                                                </h5>
                                                <h5 class='text-left mb-1'>Visit site:
                                                    <a href='${this.domain}' target='_blank'>${this.name}</a>
                                                </h5>
                                                <p class="text-muted" id="remarks-psd"></p>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-lg primary-color-dark" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>`;


        document.getElementById('modals').innerHTML = modalTemplate;

        this.techUsed.forEach(item => {
            if (item === 'Adobe Photoshop') {
                document.getElementById('techs-used-psd').innerHTML += '<li class="list-inline-item text-white">•' + item + '</li>';
            } else {
                document.getElementById('techs-used-psd').innerHTML += '<li class="list-inline-item">•' + item + '</li>';
            }
        });
        if (this.remarks) {
            document.getElementById('remarks-psd').innerHTML = this.remarks[0] + ' ' + this.remarks[1];
        }

        //REMEMBER TO HANDLE THE REMARKS on certain projects. For example Preferred brands
        // REMEMBER TO FIX THE MODAL NAMES FOR EACH PROJECT
    }
}


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

//Footer
const footerDate = document.getElementById('footer-date');
const year = new Date().getFullYear();
footerDate.innerHTML = year;
// End Footer