const CARD_RED = 0;
const CARD_BLACK = 1;
const CARD_WHITE = 2;

const SUIT_SHIELD = 0
const SUIT_ARROW = 1;
const SUIT_HELM = 2;
const SUIT_SWORD = 3;
const SUIT_MOON = 4;
const SUIT_ORB = 5;
const SUIT_HEART = 6;
const SUIT_CROWN = 7;
const SUIT_DRAGON = 8;

const CARD_COLORS = ['White', 'Red', 'Black'];
const CARD_SUITS = ['Arrow', 'Crown', 'Dragon', 'Heart', 'Helm', 'Moon', 'Orb', 'Shield', 'Sword'];

const FATE_DECK = [
    {
        "color": CARD_WHITE,
        "suit": SUIT_ARROW,
        "name": "Tass",
        "value": 1,
        "demeanor": "Careless",
        "nature": "Innovative"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_ARROW,
        "name": "Tanis",
        "value": 2,
        "demeanor": "Meticulous",
        "nature": "Resourceful"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_ARROW,
        "name": "Theros",
        "value": 3,
        "demeanor": "Scrupulous",
        "nature": "Artistic"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_ARROW,
        "name": "Blister",
        "value": 4,
        "demeanor": "Cautious",
        "nature": "Inventive"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_ARROW,
        "name": "Kith-Kanan",
        "value": 5,
        "demeanor": "Conscientious",
        "nature": "Clever"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_ARROW,
        "name": "Porthios",
        "value": 6,
        "demeanor": "Distant",
        "nature": "Cunning"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_ARROW,
        "name": "Otik",
        "value": 7,
        "demeanor": "Fastidious",
        "nature": "Conventional"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_ARROW,
        "name": "Gildentongue",
        "value": 8,
        "demeanor": "Careful",
        "nature": "Unimaginative"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_ARROW,
        "name": "Bakaris",
        "value": 9,
        "demeanor": "Heedless",
        "nature": "Dogmatic"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_CROWN,
        "name": "Gunthar",
        "value": 1,
        "demeanor": "Authoritative",
        "nature": "Just"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_CROWN,
        "name": "Laurana",
        "value": 2,
        "demeanor": "Inspiring",
        "nature": "Fair"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_CROWN,
        "name": "Moonsong",
        "value": 3,
        "demeanor": "Independent",
        "nature": "Reasonable"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_CROWN,
        "name": "Severus",
        "value": 4,
        "demeanor": "Charismatic",
        "nature": "Demanding"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_CROWN,
        "name": "Belladonna",
        "value": 5,
        "demeanor": "Lawless",
        "nature": "Tough"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_CROWN,
        "name": "Mirielle",
        "value": 6,
        "demeanor": "Imperious",
        "nature": "Commanding"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_CROWN,
        "name": "Seeker Hederick",
        "value": 7,
        "demeanor": "Egotistical",
        "nature": "Despotic"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_CROWN,
        "name": "Fewmaster Toede",
        "value": 8,
        "demeanor": "Inspiring",
        "nature": "Tyranical"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_CROWN,
        "name": "Verminaard",
        "value": 9,
        "demeanor": "Domineering",
        "nature": "Dictatorial"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_DRAGON,
        "name": "Solomirathnius",
        "value": 1,
        "demeanor": "Eccentric",
        "nature": ""
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_DRAGON,
        "name": "Suhnrysanti",
        "value": 2,
        "demeanor": "Hedonistic",
        "nature": ""
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_DRAGON,
        "name": "Shatraklangg",
        "value": 3,
        "demeanor": "Cantankerous",
        "nature": ""
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_DRAGON,
        "name": "Teranyex",
        "value": 4,
        "demeanor": "Egomaniacal",
        "nature": ""
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_DRAGON,
        "name": "Iyesta",
        "value": 5,
        "demeanor": "Vain",
        "nature": ""
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_DRAGON,
        "name": "Onysablet",
        "value": 6,
        "demeanor": "Treacherous",
        "nature": ""
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_DRAGON,
        "name": "Khellendros",
        "value": 7,
        "demeanor": "Wrathful",
        "nature": ""
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_DRAGON,
        "name": "Beryllinthranox",
        "value": 8,
        "demeanor": "Malicious",
        "nature": ""
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_DRAGON,
        "name": "Gellidus",
        "value": 9,
        "demeanor": "Sadistic",
        "nature": ""
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_DRAGON,
        "name": "Malystryx",
        "value": 10,
        "demeanor": "Megalomaniac",
        "nature": ""
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_HEART,
        "name": "Crysania",
        "value": 1,
        "demeanor": "Calm",
        "nature": "Merciful"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_HEART,
        "name": "Jasper",
        "value": 2,
        "demeanor": "Honest",
        "nature": "Kind"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_HEART,
        "name": "Goldmoon",
        "value": 3,
        "demeanor": "Sensible",
        "nature": "Compassionate"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_HEART,
        "name": "Vinas",
        "value": 4,
        "demeanor": "Honorable",
        "nature": "Grandiose"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_HEART,
        "name": "Lorac",
        "value": 5,
        "demeanor": "Realistic",
        "nature": "Self-Centered"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_HEART,
        "name": "Gargath",
        "value": 6,
        "demeanor": "Deceitful",
        "nature": "Uncaring"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_HEART,
        "name": "Lord Soth",
        "value": 7,
        "demeanor": "Pragmatic",
        "nature": "Murderous"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_HEART,
        "name": "Ariakan",
        "value": 8,
        "demeanor": "Forthright",
        "nature": "Cruel"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_HEART,
        "name": "Kingpriest",
        "value": 9,
        "demeanor": "Dishonest",
        "nature": "Immoral"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_HELM,
        "name": "Caramon",
        "value": 1,
        "demeanor": "Thorough",
        "nature": "Brave"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_HELM,
        "name": "Flint",
        "value": 2,
        "demeanor": "Resolute",
        "nature": "Stouthearted"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_HELM,
        "name": "Kharas",
        "value": 3,
        "demeanor": "Decisive",
        "nature": "Corageous"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_HELM,
        "name": "Derkin",
        "value": 4,
        "demeanor": "Cautious",
        "nature": "Resolute"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_HELM,
        "name": "Dougan",
        "value": 5,
        "demeanor": "Purposeful",
        "nature": "Careful"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_HELM,
        "name": "Silver Claw",
        "value": 6,
        "demeanor": "Determined",
        "nature": "Cicumspect"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_HELM,
        "name": "Rennard",
        "value": 7,
        "demeanor": "Decisive",
        "nature": "Cowaraly"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_HELM,
        "name": "Bertrem",
        "value": 8,
        "demeanor": "Dedicated",
        "nature": "Timid"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_HELM,
        "name": "Bupu",
        "value": 9,
        "demeanor": "Groveling",
        "nature": "Afraid"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_MOON,
        "name": "Palin",
        "value": 1,
        "demeanor": "Impulsive",
        "nature": "Inquisitive"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_MOON,
        "name": "Par-Salian",
        "value": 2,
        "demeanor": "Thoughful",
        "nature": "Curious"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_MOON,
        "name": "Fizban",
        "value": 3,
        "demeanor": "Absent-Minded",
        "nature": "Nosy"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_MOON,
        "name": "Justarius",
        "value": 4,
        "demeanor": "Thoughful",
        "nature": "Contemplative"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_MOON,
        "name": "Shadow Sorcerer",
        "value": 5,
        "demeanor": "Enigmatic",
        "nature": "Introspective"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_MOON,
        "name": "Magius",
        "value": 6,
        "demeanor": "Rash",
        "nature": "Crafty"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_MOON,
        "name": "Fistandantilus",
        "value": 7,
        "demeanor": "Mysterious",
        "nature": "Plotting"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_MOON,
        "name": "Dalamar",
        "value": 8,
        "demeanor": "Thoughful",
        "nature": "Conniving"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_MOON,
        "name": "Raistlin",
        "value": 9,
        "demeanor": "Obsessive",
        "nature": "Scheming"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_ORB,
        "name": "Alhana",
        "value": 1,
        "demeanor": "Reserved",
        "nature": "Insightful"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_ORB,
        "name": "Gilthas",
        "value": 2,
        "demeanor": "Serious",
        "nature": "Open-Minded"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_ORB,
        "name": "Sara",
        "value": 3,
        "demeanor": "Toughful",
        "nature": "Insightful"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_ORB,
        "name": "Astinus",
        "value": 4,
        "demeanor": "Studious",
        "nature": "Methodcal"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_ORB,
        "name": "Riverwind",
        "value": 5,
        "demeanor": "Deliberate",
        "nature": "Vigilant"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_ORB,
        "name": "Groller",
        "value": 6,
        "demeanor": "Simple",
        "nature": "Observant"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_ORB,
        "name": "Ackal",
        "value": 7,
        "demeanor": "Shrewd",
        "nature": "Bigoted"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_ORB,
        "name": "Verash",
        "value": 8,
        "demeanor": "Studious",
        "nature": "Opinionated"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_ORB,
        "name": "Highbulp Phudge",
        "value": 9,
        "demeanor": "Lazy",
        "nature": "Prejudiced"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_SHIELD,
        "name": "Tika",
        "value": 1,
        "demeanor": "Nosy",
        "nature": "Opinionated"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_SHIELD,
        "name": "Usha",
        "value": 2,
        "demeanor": "Gregarious",
        "nature": "Optimistic"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_SHIELD,
        "name": "Linsha",
        "value": 3,
        "demeanor": "Tight-Lipped",
        "nature": "Confident"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_SHIELD,
        "name": "Gilthanas",
        "value": 4,
        "demeanor": "Capable",
        "nature": "Stubborn"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_SHIELD,
        "name": "Maquesta",
        "value": 5,
        "demeanor": "Open",
        "nature": "Sensible"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_SHIELD,
        "name": "Milgas",
        "value": 6,
        "demeanor": "Modest",
        "nature": "Practical"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_SHIELD,
        "name": "Ferilleeagh",
        "value": 7,
        "demeanor": "Wild",
        "nature": "Realistic"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_SHIELD,
        "name": "Rig Mer-Krel",
        "value": 8,
        "demeanor": "Roguish",
        "nature": "Cynical"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_SHIELD,
        "name": "Jendaron",
        "value": 9,
        "demeanor": "Prying",
        "nature": "Pessimistic"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_SWORD,
        "name": "Sturm",
        "value": 1,
        "demeanor": "Courageous",
        "nature": "Inspiring"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_SWORD,
        "name": "Sir Liam",
        "value": 2,
        "demeanor": "Brave",
        "nature": "Commanding"
    },
    {
        "color": CARD_WHITE,
        "suit": SUIT_SWORD,
        "name": "Huma",
        "value": 3,
        "demeanor": "Valiant",
        "nature": "Motivated"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_SWORD,
        "name": "Steel",
        "value": 4,
        "demeanor": "Aggressive",
        "nature": "Commanding"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_SWORD,
        "name": "Dhamon",
        "value": 5,
        "demeanor": "Relentless",
        "nature": "Independent"
    },
    {
        "color": CARD_RED,
        "suit": SUIT_SWORD,
        "name": "Kaz",
        "value": 6,
        "demeanor": "Domineering",
        "nature": "Belligerent"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_SWORD,
        "name": "Chot",
        "value": 7,
        "demeanor": "Aggressive",
        "nature": "Brutal"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_SWORD,
        "name": "Kitiara",
        "value": 8,
        "demeanor": "Commanding",
        "nature": "Fierce"
    },
    {
        "color": CARD_BLACK,
        "suit": SUIT_SWORD,
        "name": "Emperor Ariakas",
        "value": 9,
        "demeanor": "Ruthless",
        "nature": "Sadistic"
    }
];
