class FateDeck {
    static CARD_RED = 0;
    static CARD_BLACK = 1;
    static CARD_WHITE = 2;
    static CARD_BACKFACE = 3;

    static SUIT_SHIELD = 0
    static SUIT_ARROW = 1;
    static SUIT_HELM = 2;
    static SUIT_SWORD = 3;
    static SUIT_MOON = 4;
    static SUIT_ORB = 5;
    static SUIT_HEART = 6;
    static SUIT_CROWN = 7;
    static SUIT_DRAGON = 8;
    static MIN_HAND_SIZE = 2;
    static MAX_HAND_SIZE = 10;

    static CARD_COLORS = ['White', 'Red', 'Black'];
    static CARD_SUITS = ['Arrow', 'Crown', 'Dragon', 'Heart', 'Helm', 'Moon', 'Orb', 'Shield', 'Sword'];

    constructor(repeatingAttribute = 'repeating_cards', handsizeAttribute = 'hand', handAttribute = 'player_hand', graveyardAttribute = 'graveyard', delimiter = ',') {
        this._repeating = repeatingAttribute;
        this._handsizeAttribute = handsizeAttribute;;
        this._handAttribute = handAttribute;
        this._graveyardAttribute = graveyardAttribute;
        this._currentHandSizeAttribute = 'player_hand_size';
        this._drawButton = `${repeatingAttribute}:draw`;
        this._discardButton = `${repeatingAttribute}:discard`;
        this._delimiter = delimiter;
        this.setupListeners();
    }

    setupListeners() {
        on('sheet:opened', () => {
            this.setupPile();
        });
        on(`clicked:${this._drawButton}`, () => {
            this.drawCard();
        });
        on(`clicked:${this._discardButton}`, eventInfo => {
            const uid = SheetUtils.getUID(eventInfo.sourceAttribute);
            this.discardCard(uid);
        });
    }

    setupPile(callback) {
        this.getCardsDrawn(drawn => {
            if(drawn.hand.length > 0) return;

            const fateDeck = {
                "color": FateDeck.CARD_BACKFACE,
                "suit": FateDeck.SUIT_SHIELD,
                "name": "fate deck",
                "value": 10,
                "demeanor": "fate",
                "nature": "deck"
            };
            let update = {};
            const uid = generateRowID();
            Object.keys(fateDeck).forEach(property => {
                update[`${this._repeating}_${uid}_${property}`] = fateDeck[property];
            });
            update[this._handAttribute] = fateDeck.name;
            update[this._currentHandSizeAttribute] = 1;
            setAttrs(update, () => {
                if(callback) callback(update);
            });
        });
    }

    getCardsDrawn(callback, extraAttributes = []) {
        getAttrs([this._handsizeAttribute, this._handAttribute, this._graveyardAttribute].concat(extraAttributes), values => {
            const cardsInPlay = {
                handSize: (values[this._handsizeAttribute]) ? parseInt(values[this._handsizeAttribute]) + 1 : FateDeck.MIN_HAND_SIZE,
                hand: (values[this._handAttribute]) ? values[this._handAttribute].split(this._delimiter) : [], 
                graveyard: (values[this._graveyardAttribute]) ? values[this._graveyardAttribute].split(this._delimiter) : []
            };
            if(extraAttributes.length > 0) {
                delete values[this._handsizeAttribute];
                delete values[this._handAttribute];
                delete values[this._graveyardAttribute];
                cardsInPlay.extras = values;
            }
            if(callback) callback(cardsInPlay);
        });
    }

    getDeckStatus(callback) {
        const allCards = [
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_ARROW,
                "name": "tass",
                "value": 1,
                "demeanor": "careless",
                "nature": "innovative"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_ARROW,
                "name": "tanis",
                "value": 2,
                "demeanor": "meticulous",
                "nature": "resourceful"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_ARROW,
                "name": "theros",
                "value": 3,
                "demeanor": "scrupulous",
                "nature": "artistic"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_ARROW,
                "name": "blister",
                "value": 4,
                "demeanor": "cautious",
                "nature": "inventive"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_ARROW,
                "name": "kith-kanan",
                "value": 5,
                "demeanor": "conscientious",
                "nature": "clever"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_ARROW,
                "name": "porthios",
                "value": 6,
                "demeanor": "distant",
                "nature": "cunning"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_ARROW,
                "name": "otik",
                "value": 7,
                "demeanor": "fastidious",
                "nature": "conventional"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_ARROW,
                "name": "gildentongue",
                "value": 8,
                "demeanor": "careful",
                "nature": "unimaginative"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_ARROW,
                "name": "bakaris",
                "value": 9,
                "demeanor": "heedless",
                "nature": "dogmatic"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_CROWN,
                "name": "gunthar",
                "value": 1,
                "demeanor": "authoritative",
                "nature": "just"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_CROWN,
                "name": "laurana",
                "value": 2,
                "demeanor": "inspiring",
                "nature": "fair"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_CROWN,
                "name": "moonsong",
                "value": 3,
                "demeanor": "independent",
                "nature": "reasonable"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_CROWN,
                "name": "severus",
                "value": 4,
                "demeanor": "charismatic",
                "nature": "demanding"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_CROWN,
                "name": "belladonna",
                "value": 5,
                "demeanor": "lawless",
                "nature": "tough"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_CROWN,
                "name": "mirielle",
                "value": 6,
                "demeanor": "imperious",
                "nature": "commanding"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_CROWN,
                "name": "seeker hederick",
                "value": 7,
                "demeanor": "egotistical",
                "nature": "despotic"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_CROWN,
                "name": "fewmaster toede",
                "value": 8,
                "demeanor": "inspiring",
                "nature": "tyranical"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_CROWN,
                "name": "verminaard",
                "value": 9,
                "demeanor": "domineering",
                "nature": "dictatorial"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_DRAGON,
                "name": "solomirathnius",
                "value": 1,
                "demeanor": "eccentric",
                "nature": ""
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_DRAGON,
                "name": "suhnrysanti",
                "value": 2,
                "demeanor": "hedonistic",
                "nature": ""
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_DRAGON,
                "name": "shatraklangg",
                "value": 3,
                "demeanor": "cantankerous",
                "nature": ""
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_DRAGON,
                "name": "teranyex",
                "value": 4,
                "demeanor": "egomaniacal",
                "nature": ""
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_DRAGON,
                "name": "iyesta",
                "value": 5,
                "demeanor": "vain",
                "nature": ""
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_DRAGON,
                "name": "onysablet",
                "value": 6,
                "demeanor": "treacherous",
                "nature": ""
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_DRAGON,
                "name": "khellendros",
                "value": 7,
                "demeanor": "wrathful",
                "nature": ""
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_DRAGON,
                "name": "beryllinthranox",
                "value": 8,
                "demeanor": "malicious",
                "nature": ""
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_DRAGON,
                "name": "gellidus",
                "value": 9,
                "demeanor": "sadistic",
                "nature": ""
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_DRAGON,
                "name": "malystryx",
                "value": 10,
                "demeanor": "megalomaniac",
                "nature": ""
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_HEART,
                "name": "crysania",
                "value": 1,
                "demeanor": "calm",
                "nature": "merciful"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_HEART,
                "name": "jasper",
                "value": 2,
                "demeanor": "honest",
                "nature": "kind"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_HEART,
                "name": "goldmoon",
                "value": 3,
                "demeanor": "sensible",
                "nature": "compassionate"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_HEART,
                "name": "vinas",
                "value": 4,
                "demeanor": "honorable",
                "nature": "grandiose"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_HEART,
                "name": "lorac",
                "value": 5,
                "demeanor": "realistic",
                "nature": "self-centered"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_HEART,
                "name": "gargath",
                "value": 6,
                "demeanor": "deceitful",
                "nature": "uncaring"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_HEART,
                "name": "lord soth",
                "value": 7,
                "demeanor": "pragmatic",
                "nature": "murderous"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_HEART,
                "name": "ariakan",
                "value": 8,
                "demeanor": "forthright",
                "nature": "cruel"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_HEART,
                "name": "kingpriest",
                "value": 9,
                "demeanor": "dishonest",
                "nature": "immoral"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_HELM,
                "name": "caramon",
                "value": 1,
                "demeanor": "thorough",
                "nature": "brave"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_HELM,
                "name": "flint",
                "value": 2,
                "demeanor": "resolute",
                "nature": "stouthearted"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_HELM,
                "name": "kharas",
                "value": 3,
                "demeanor": "decisive",
                "nature": "corageous"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_HELM,
                "name": "derkin",
                "value": 4,
                "demeanor": "cautious",
                "nature": "resolute"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_HELM,
                "name": "dougan",
                "value": 5,
                "demeanor": "purposeful",
                "nature": "careful"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_HELM,
                "name": "silver claw",
                "value": 6,
                "demeanor": "determined",
                "nature": "cicumspect"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_HELM,
                "name": "rennard",
                "value": 7,
                "demeanor": "decisive",
                "nature": "cowaraly"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_HELM,
                "name": "bertrem",
                "value": 8,
                "demeanor": "dedicated",
                "nature": "timid"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_HELM,
                "name": "bupu",
                "value": 9,
                "demeanor": "groveling",
                "nature": "afraid"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_MOON,
                "name": "palin",
                "value": 1,
                "demeanor": "impulsive",
                "nature": "inquisitive"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_MOON,
                "name": "par-salian",
                "value": 2,
                "demeanor": "thoughful",
                "nature": "curious"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_MOON,
                "name": "fizban",
                "value": 3,
                "demeanor": "absent-minded",
                "nature": "nosy"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_MOON,
                "name": "justarius",
                "value": 4,
                "demeanor": "thoughful",
                "nature": "contemplative"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_MOON,
                "name": "shadow sorcerer",
                "value": 5,
                "demeanor": "enigmatic",
                "nature": "introspective"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_MOON,
                "name": "magius",
                "value": 6,
                "demeanor": "rash",
                "nature": "crafty"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_MOON,
                "name": "fistandantilus",
                "value": 7,
                "demeanor": "mysterious",
                "nature": "plotting"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_MOON,
                "name": "dalamar",
                "value": 8,
                "demeanor": "thoughful",
                "nature": "conniving"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_MOON,
                "name": "raistlin",
                "value": 9,
                "demeanor": "obsessive",
                "nature": "scheming"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_ORB,
                "name": "alhana",
                "value": 1,
                "demeanor": "reserved",
                "nature": "insightful"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_ORB,
                "name": "gilthas",
                "value": 2,
                "demeanor": "serious",
                "nature": "open-minded"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_ORB,
                "name": "sara",
                "value": 3,
                "demeanor": "toughful",
                "nature": "insightful"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_ORB,
                "name": "astinus",
                "value": 4,
                "demeanor": "studious",
                "nature": "methodcal"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_ORB,
                "name": "riverwind",
                "value": 5,
                "demeanor": "deliberate",
                "nature": "vigilant"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_ORB,
                "name": "groller",
                "value": 6,
                "demeanor": "simple",
                "nature": "observant"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_ORB,
                "name": "ackal",
                "value": 7,
                "demeanor": "shrewd",
                "nature": "bigoted"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_ORB,
                "name": "verash",
                "value": 8,
                "demeanor": "studious",
                "nature": "opinionated"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_ORB,
                "name": "highbulp phudge",
                "value": 9,
                "demeanor": "lazy",
                "nature": "prejudiced"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_SHIELD,
                "name": "tika",
                "value": 1,
                "demeanor": "nosy",
                "nature": "opinionated"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_SHIELD,
                "name": "usha",
                "value": 2,
                "demeanor": "gregarious",
                "nature": "optimistic"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_SHIELD,
                "name": "linsha",
                "value": 3,
                "demeanor": "tight-lipped",
                "nature": "confident"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_SHIELD,
                "name": "gilthanas",
                "value": 4,
                "demeanor": "capable",
                "nature": "stubborn"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_SHIELD,
                "name": "maquesta",
                "value": 5,
                "demeanor": "open",
                "nature": "sensible"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_SHIELD,
                "name": "milgas",
                "value": 6,
                "demeanor": "modest",
                "nature": "practical"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_SHIELD,
                "name": "ferilleeagh",
                "value": 7,
                "demeanor": "wild",
                "nature": "realistic"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_SHIELD,
                "name": "rig mer-krel",
                "value": 8,
                "demeanor": "roguish",
                "nature": "cynical"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_SHIELD,
                "name": "jendaron",
                "value": 9,
                "demeanor": "prying",
                "nature": "pessimistic"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_SWORD,
                "name": "sturm",
                "value": 1,
                "demeanor": "courageous",
                "nature": "inspiring"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_SWORD,
                "name": "sir liam",
                "value": 2,
                "demeanor": "brave",
                "nature": "commanding"
            },
            {
                "color": FateDeck.CARD_WHITE,
                "suit": FateDeck.SUIT_SWORD,
                "name": "huma",
                "value": 3,
                "demeanor": "valiant",
                "nature": "motivated"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_SWORD,
                "name": "steel",
                "value": 4,
                "demeanor": "aggressive",
                "nature": "commanding"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_SWORD,
                "name": "dhamon",
                "value": 5,
                "demeanor": "relentless",
                "nature": "independent"
            },
            {
                "color": FateDeck.CARD_RED,
                "suit": FateDeck.SUIT_SWORD,
                "name": "kaz",
                "value": 6,
                "demeanor": "domineering",
                "nature": "belligerent"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_SWORD,
                "name": "chot",
                "value": 7,
                "demeanor": "aggressive",
                "nature": "brutal"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_SWORD,
                "name": "kitiara",
                "value": 8,
                "demeanor": "commanding",
                "nature": "fierce"
            },
            {
                "color": FateDeck.CARD_BLACK,
                "suit": FateDeck.SUIT_SWORD,
                "name": "emperor ariakas",
                "value": 9,
                "demeanor": "ruthless",
                "nature": "sadistic"
            }
        ];
        
        this.getCardsDrawn(drawn => {
            const cardsLeft = allCards.filter(card => { return drawn.hand.indexOf(card.name) === -1 && drawn.graveyard.indexOf(card.name) === -1 });
            if(callback) callback({ pile: cardsLeft, hand: drawn.hand, graveyard: drawn.graveyard, handSize: drawn.handSize });
        });
    }

    drawCard(callback) {
        this.getDeckStatus(status => {
            if(status.hand.length >= status.handSize || status.hand.length >= FateDeck.MAX_HAND_SIZE) {
                if(callback) callback();
                return;
            }
            const randomCard = status.pile[Math.round(Math.random() * (status.pile.length-1))];
            const uid = generateRowID();
            let update = {};
            Object.keys(randomCard).forEach(property => {
                update[`${this._repeating}_${uid}_${property}`] = randomCard[property];
            });
            this.getCardsDrawn(drawn => {
                let hand = new Set(drawn.hand);
                hand.add(randomCard.name);
                update[this._handAttribute] = Array.from(hand).join(this._delimiter);
                update[this._currentHandSizeAttribute] = hand.size;
                setAttrs(update, () => {
                    if(callback) callback(update);
                });
            });
        });
    }

    discardCard(uid) {
        const row = `${this._repeating}_${uid}`;
        const cardNameAttribute = `${row}_name`;
        this.getCardsDrawn(status => {
            let update = {};
            const cardsLeft = status.hand.filter(card => { return card !== status.extras[cardNameAttribute] });
            status.graveyard.push(status.extras[cardNameAttribute]);
            update[this._handAttribute] = cardsLeft.join(this._delimiter);
            update[this._graveyardAttribute] = status.graveyard.join(this._delimiter);
            update[this._currentHandSizeAttribute] = cardsLeft.length;
            setAttrs(update, () => {
                removeRepeatingRow(row);
            });
        },
        [cardNameAttribute]
        );
    }
}