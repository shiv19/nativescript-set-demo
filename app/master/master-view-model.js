const Observable = require("data/observable").Observable;

function MasterViewModel() {
    const viewModel = new Observable();
    viewModel.masterData = [
        {
            id: "1",
            name: "Scott Addie",
            description: "Portfolio Solutions Architect, CUNA Mutual Group",
            imageUrl:
                "https://developer.telerik.com/wp-content/uploads/userphoto/1141.jpg",
            country: "Wisconsin, USA",
            expertise: ["Web Development", ".NET"],
            twitter: "https://twitter.com/scott_addie",
            github: "https://github.com/scottaddie",
            details:
                "Scott Addie is an avid blogger and technical evangelist of the modern web who has reached masses of developers through speaking engagements at user groups, code camps, and conferences across North America. With a strong emphasis on JavaScript and the Microsoft web technology stack, Scott holds numerous industry-recognized Microsoft development certifications and has been named a Microsoft MVP in the award category of Visual Studio and Development Technologies. As a firm believer in giving back to the community, Scott is a frequent open source contributor to high-profile GitHub projects, including ASP.NET Core, OmniSharp, Visual Studio Code, and a plethora of Visual Studio proper extensions."
        },
        {
            id: "2",
            name: "Nathanael Anderson",
            description: "DevOps, SecOps Consultant, Master Technology",
            imageUrl:
                "https://developer.telerik.com/wp-content/uploads/userphoto/961.png",
            country: "United States and Mexico",
            expertise: [
                "NativeScript",
                "Mobile Development",
                "Web Development",
                ".NET"
            ],
            twitter: "https://twitter.com/congocart",
            github: "https://github.com/nathanaela",
            details:
                "Nathanael J. Anderson has been developing software for over 20 years in a wide range of industries, including games, time management, imaging, service, printing, accounting, land management, security, web, and even (believe it or not) some very successful government projects. He is currently the owner of Master Technology and creates solutions for native, web, mobile, desktop, server and hybrid applications running on any operating system. He works actively in the NativeScript community, providing things such as build servers, Q&A for many technical questions; he has also founded several of the NativeScript communities. He is the author of the recently released Getting Started With NativeScript book."
        },
        {
            id: "3",
            name: "Alexander Ziskind",
            description: "Technical Director, Nuvious",
            imageUrl:
                "https://developer.telerik.com/wp-content/uploads/userphoto/441.png",
            country: "United States",
            expertise: ["NativeScript"],
            twitter: "https://twitter.com/digitalix",
            linkedIn: "https://www.linkedin.com/profile/view?id=alexziskind",
            github: "https://github.com/alexziskind1",
            details:
                "Alex loves tinkering with the latest web and mobile technologies and gets giddy over the possibilities that the cloud brings to those fields. He's passionate about distributed systems and service oriented architecture. When Alex isn't making awful noises on an analog synth, he makes it his goal to fuse together form and function in the world of mobile and web, and to bring products to life using the highest possible standards in software quality. For the last 15 years, Alex has been developing software solutions for the enterprise as well as small startups trying to get off the ground. In the last 5 years, his company Nuvious has been involved in architecting and implementing cloud solutions on an international scale."
        },
        {
            id: "4",
            name: "Shayne Boyer",
            description: "Senior Solutions Architect, Walt Disney World",
            imageUrl:
                "https://developer.telerik.com/wp-content/uploads/userphoto/471.jpg",
            country: "USA",
            expertise: ["Mobile", "Web"],
            twitter: "https://twitter.com/spboyer",
            details:
                "Shayne Boyer is a Solutions Architect with over 15 years experience working with Microsoft based solutions. He is an INETA community speaker, a Telerik Developer Expert, and Nokia Developer Champion. Over the past 10 years he has lead development teams working on enterprise solutions with a focus on productivity, performance and sustainability. Shayne often publishes content on ASP.NET, Web API, Node.js and Azure development and can always be found on twitter @spboyer or on his blog at tattoocoder.com"
        },
        {
            id: "5",
            name: "Brad Martin",
            description: "Manager of Software Development, Nastek National",
            imageUrl:
                "https://developer.telerik.com/wp-content/uploads/userphoto/861.jpg",
            country: "USA",
            expertise: [
                "NativeScript",
                "Mobile Development",
                "Web Development",
                ".NET"
            ],
            twitter: "https://twitter.com/BradWayneMartin",
            github: "https://github.com/bradmartin",
            details:
                "Brad works as the Director of Development for Nastek National, which specializes in the transportation industry for trucking companies. Brad mainly works maintaining a .NET web app and leads the development and design on their NativeScript Android and iOS apps."
        },
        {
            id: "6",
            name: "Steve McNiven-Scott",
            description: "Sitefinity Certified Developer, McMaster University",
            imageUrl:
                "https://developer.telerik.com/wp-content/uploads/userphoto/411.jpg",
            country: "Canada",
            expertise: ["Sitefinity", "UI for ASP.NET", "AJAX"],
            twitter: "https://twitter.com/stevemcniven",
            linkedIn: "https://www.linkedin.com/profile/view?id=62993704",
            github: "https://github.com/sitefinitysteve",
            details:
                "Steve is an overly enthusiastic web developer who enjoys talking about himself in the third person. He has been working near exclusively with the Telerik suite since 2008, and has since earned Telerik MVP status, Sitefinity Partner status, and is a certified Sitefinity developer. Learn more at SitefinitySteve.com."
        },
        {
            id: "7",
            name: "Nic Raboy",
            description: "Owner, The Polyglot Developer",
            imageUrl:
                "https://developer.telerik.com/wp-content/uploads/userphoto/981.jpg",
            country: "United States",
            expertise: [
                "NativeScript",
                "Mobile Development",
                "Web Development"
            ],
            twitter: "https://twitter.com/nraboy",
            linkedIn: "https://www.linkedin.com/profile/view?id=nraboy",
            github: "https://github.com/nraboy",
            details:
                "Nic is a skilled application developer that has released several native and hybrid mobile applications to iTunes and Google Play. He writes about his development experiences related to making web and mobile app development easier to understand and has experience in Android, Node.js, Apache Cordova, Java, NoSQL, SQL, PHP, NativeScript, and Unity3D."
        },
        {
            id: "8",
            name: "Josh Sommer",
            description: "Web Application Developer, Renovo Solutions LLC",
            imageUrl:
                "https://developer.telerik.com/wp-content/uploads/userphoto/1031.jpg",
            country: "United States",
            expertise: [
                "NativeScript",
                "Mobile Development",
                "Web Development",
                ".NET"
            ],
            twitter: "https://twitter.com/_JoshSommer",
            github: "https://github.com/TheOriginalJosh",
            details:
                "Josh Sommer has been a web application developer for 10 years. He specializes in the .NET stack, but has also dabbled in just about anything under the sun. Lately he has been working primarily on front end development with TypeScript and AngularJS. In his free time he enjoys spending time with his wife and son, doing things around the house. When not with them, he can often be found working on NativeScript projects."
        },
        {
            id: "9",
            name: "Nathan Walker",
            description: "Senior Software Engineer, Infowrap",
            imageUrl:
                "https://developer.telerik.com/wp-content/uploads/userphoto/891.jpeg",
            country: "United States",
            expertise: [
                "Angular",
                "NativeScript",
                "Mobile",
                "Web",
                "Telerik Platform"
            ],
            twitter: "https://twitter.com/wwwalkerrun",
            github: "https://github.com/NathanWalker",
            details:
                "Nathan is a Senior Software Engineer at Infowrap with over 15 years experience in web/mobile application development. His varied background rooted in the world of design and the arts (from magazine layouts to video production/documentaries as well as former Nashville musician) helps provide a unique foundation to problem solving. From Javascript, Objective C, Swift, Java, Ruby, Angular to NativeScript, Nathan crafts his code like he would design an ad, craft a cinematic story, or write a billboard hit. Always striving to balance his right brain approaches with his left brain sensibilities, he focuses on bringing solid results to a diversity of business environments."
        },
        {
            id: "10",
            name: "Jochem Bökkers",
            description: "Sitefinity Senior Consultant, Sogeti",
            country: "Switzerland",
            expertise: ["Sitefinity"],
            twitter: "https://twitter.com/jbokkers",
            linkedIn: "https://www.linkedin.com/profile/view?id=12980107",
            googlePlus: "https://plus.google.com/+JochemBokkers",
            imageUrl:
                "https://developer.telerik.com/wp-content/uploads/userphoto/461.jpg",
            details:
                "Jochem Bökkers started in the IT Industry in the late 90s and has been solely focused on the Sitefinity platform for the last 6 years. As a Certified Sitefinity Solution Developer he has been fortunate enough to help deliver Sitefinity projects in Europe, the US, Australia and the Middle East. In his role as Telerik MVP he is an active community member, jump started open-source projects like Twitter Bootstrap compatibility and continuously beta tests and pushes the system for maximum performance. Jochem joined Sogeti, to enrich Sogeti's digital solutions portfolio with Sitefinity and Telerik platform offerings."
        }
    ];
    return viewModel;
}

module.exports = MasterViewModel;
