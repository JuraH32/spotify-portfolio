import {Playlist} from "./types";
import {tags} from "./tags";

const publicURL = (url: string) => process.env.PUBLIC_URL + url;

export const tagColors = [
  '#F94144', // Red
  '#F3722C', // Orange
  '#F8961E', // Dark Orange
  '#F9C74F', // Yellow
  '#90BE6D', // Green
  '#43AA8B', // Teal
  '#577590', // Blue Gray
  '#277DA1', // Dark Cyan
  '#649E7D', // Grayish Teal
  '#264653', // Deep Blue
  '#2A9D8F', // Dark Cyan
  '#E76F51', // Rust
  '#E9C46A', // Mustard
  '#F4A261', // Light Orange
  '#E9A18C', // Light Salmon
  '#F6B6B6', // Pink
  '#B5838D', // Mauve
  '#1D3557', // Navy Blue
  '#457B9D', // Cool Blue
  '#82C9F8', // Sky Blue
  '#8ECAE6', // Light Cyan
  '#BAE4B3', // Pastel Green
  '#B3DE81', // Celadon Green
  '#C4D4A4', // Greenish Beige
  '#A9D6C2', // Light Teal
];


const mockDescription2 = {
    bulletPoints: ["Bullet 1", "Bullet 2"]
};

const mockDescription3 = {
    bulletPoints: ["Bullet 1", "Bullet 2", "Bullet 3", "Bullet 4"],
    link: "https://www.google.com"
}

//Personal projects

const PravaVrecica = {
    name: "Prava vrecica",
    description: {
        bulletPoints: [
            "Collaborated in a team of 3 on a Flutter mobile application for iOS and Android that employs\n" +
            "artificial intelligence for recognition of recyclable objects and gives guidelines for proper disposal",
            "Trained the machine learning model, collected, and processed about 1,500 images for training",
            "Designed a queue system to facilitate user feedback upload for further training which lowered\n" +
            "failed upload attempts by more than 80%",
            "Awarded the Rector’s Award and was in the final of Lumen Development competition"
        ],
        tags: [tags.Flutter, tags.ML, tags.Python, tags.Git, tags.GitHub, tags.Dart, tags.Android, tags.AI]
    },
    imageUrl: publicURL("/images/V_logo_s.png"),
    artist: "Team of 3",
    github: "https://github.com/jakta-org/prava_vrecica",
    lengthStart: "Mar 2023",
    lengthEnd: "Nov 2023",
};

const StickEmAll = {
    name: "Stick 'Em All",
    description: {
        bulletPoints: [
            "Created an iOS app using Swift as a part of a 2-person team which enables managing and\n" +
            "tracking of stickers and simplifying the exchange process using QR codes\n",
            "Built decoding and encoding of album data into a QR code, compressing the data by up to 93.5%"
        ],
        tags: [tags.iOS, tags.Swift, tags.Git, tags.GitHub],
    },
    artist: "Team of 2",
    github: "https://github.com/JuraH32/StickEmAll",
    imageUrl: publicURL("/images/stickemall.png"),
    lengthStart: "Apr 2023",
    lengthEnd: "Jul 2023",
}

const AIIzbori = {
    name: "AI Izbori",
    description: {
        bulletPoints: [
            'Part of "AI Izbori" competition, organized by N1 television',
            'In process of creating an AI model which will predict the results of the 2024 Croatian parliamental elections',
            'I created automated scrapers which gathered over 10 000 news articles from 7 different Croatian news portals',
            'We created a web platform "Pametni Izbor" to educate the public about the elections and' +
            'gather user predictions for the upcoming elections with over 100 visitors',
        ],
        tags: [tags.Python, tags.Pytorch, tags.AWS, tags.Git, tags.GitLab, tags.ML],
    },
    artist: "Team of 5",
    imageUrl: publicURL("/images/pametni_izbor.png"),
    lengthStart: "Dec 2023",
    lengthEnd: "Ongoing",
}

const Portfolio = {
    name: "Portfolio",
    description: {
        bulletPoints: [
            "Designed and developed a personal portfolio website using React, TypeScript, and Tailwind CSS" +
            "inspired by Spotify's design",
            "Deployed the website on GitHub Pages",
        ],
        tags: [tags.React, tags.TypeScript, tags["Tailwind CSS"], tags.Git, tags.GitHub],
    },
    artist: "Me",
    imageUrl: "https://via.placeholder.com/300",
    lengthStart: "Feb 2023",
    lengthEnd: "Ongoing",
    github: ""
}

const PersonalProjects = {
    name: "Projects",
    description: "Description 1",
    songs: [
        PravaVrecica,
        StickEmAll,
        AIIzbori,
        Portfolio
    ]
}

//Professional Experience
const Croz = {
    name: "Software Engineer Intern",
    description: {
        bulletPoints: [
            "Collaborated in an agile environment in a team of 10 to develop a new web application from the\n" +
            "ground up using Spring Boot (Java) and React (Typescript)\n",
            "Optimized filtering, searching, and sorting based on JSON data to improve user experience with\n" +
            "50% improvement in filtering and searching speed\n",
            "Implemented data scraping from multiple websites which gathered details of over 100 different\n" +
            "funding opportunities, as well as developed a user alert system based on website updates which\n" +
            "combined saves users more than 4 hours a week"
        ],
        tags: [tags.Java, tags["Spring Boot"], tags.React, tags.TypeScript, tags.Git, tags.GitLab, tags.Agile]
    },
    imageUrl: publicURL("/images/croz.png"),
    artist: "Croz Ltd",
    lengthStart: "Jul 2022",
    lengthEnd: "Dec 2022",
    location: "Zagreb"
}

const ZRS = {
    name: "Programming lecturer and Mentor",
    description: {
        bulletPoints: [
            "Lead mentor for 5th grade students for competitive programming in Python, C++, and FMS Logo with\n" +
            "emphasis on algorithms, data structures, and programming basics\n",
            "Mentored kids with top 3 placements in the National Programming Competition and a student\n" +
            "participating in the Junior Croatian Informatics Olympiad with 2nd best score for the age group"
        ],
        tags: [tags.Python, tags["C++"], tags.Education, tags.FMSLogo,]
    },
    imageUrl: publicURL("/images/zrs.jpeg"),
    artist: "ZRS",
    lengthStart: "Sep 2021",
    lengthEnd: "Present",
    location: "Zagreb"
}

const ReversingLabs = {
    name: "Software Engineer Intern",
    description: {
        bulletPoints: [
            "Maintain and improve existing secure software products as part of an agile team, using Django\n" +
            "(Python), React (JavaScript), and Go on Linux\n",
            "Expanded API-s and implemented dynamically created documentation on over 20% of endpoints\n",
            "Designed a system for enabling and disabling features which shortened development time by 5%"
        ],
        tags: [tags.Python, tags.Django, tags.React, tags.JavaScript, tags.Go, tags.Linux, tags.Agile]
    },
    imageUrl: publicURL("/images/RL.jpeg"),
    artist: "ReversingLabs Ltd",
    lengthStart: "Dec 2022",
    lengthEnd: "Present",
    location: "Zagreb"
}

const ProfessionalExperience = {
    name: "Professional Experience",
    description: "Description 2",
    songs: [
        Croz,
        ZRS,
        ReversingLabs
    ]
}

//Education
const MIOC = {
    name: "MIOC",
    description: {
        bulletPoints: [
            "Graduated from the Mathematical Gymnasium in Zagreb, the most prestigious high school in Croatia\n",
            "During high school, I participated in National competition in 3 different subject and won 3rd" +
            "place in the National competition in Informatics",

        ],
    },
    imageUrl: "https://via.placeholder.com/300",
    artist: "MIOC",
    lengthStart: "Sep 2017",
    lengthEnd: "Jun 2021",
    location: "Zagreb"

}

const FER = {
    name: "FER",
    description: {
        bulletPoints: [
            "Currently studying at the Faculty of Electrical Engineering and Computing in Zagreb, Croatia\n",
            "Expected to graduate in 2026 with a Master's degree in Computer Science",
            "Relevant Courses: Algorithms and Data Structures, Object-Oriented Programming, Web Development, " +
            "Database Systems, Operating Systems, Software Engineering, Competitive Programming, " +
            "Service and application development for iOS"
        ],
    },
    imageUrl: "https://via.placeholder.com/300",
    artist: "FER",
    lengthStart: "Sep 2021",
    lengthEnd: "Present",
    location: "Zagreb"

}

const Education = {
    name: "Education",
    description: "Description 3",
    songs: [
        MIOC,
        FER
    ]
}

const mockSong3 = {
    name: "Song 3",
    description: mockDescription3,
    lengthStart: "Mar 2021",
    lengthEnd: "Oct 2021",
    imageUrl: "https://via.placeholder.com/300",
    artist: "Artist 3",

};

const mockSong4 = {
    name: "Song 4",
    description: mockDescription2,
    lengthStart: "Sep 2022",
    lengthEnd: "Nov 2022",
    imageUrl: "https://via.placeholder.com/300",
    artist: "Artist 4"
};

const mockSong5 = {
    name: "Song 5",
    description: mockDescription2,
    lengthStart: "Jan 2022",
    lengthEnd: "ongoing",
    imageUrl: "https://via.placeholder.com/300",
    artist: "Artist 5"
};

const mockSong6 = {
    name: "Song 6",
    description: mockDescription3,
    imageUrl: "https://via.placeholder.com/300",
    artist: "Artist 6"
};

const mockSong7 = {
    name: "Song 7",
    description: mockDescription2,
    duration: 700,
    imageUrl: "https://via.placeholder.com/300"
};

export const mockPlaylists: Playlist[] = [
    PersonalProjects,
    ProfessionalExperience,
    Education,
    {
        name: "Playlist 4",
        description: "Description 4",
        songs: [
            mockSong3,
            mockSong4,
            mockSong5
        ],
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        name: "Playlist 5",
        description: "Description 5",
        songs: [
            mockSong3,
            mockSong7
        ],
        imageUrl: "https://via.placeholder.com/300"
    }
];
