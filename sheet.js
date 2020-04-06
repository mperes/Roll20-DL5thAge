const spellAttributes = {
    meta: ['spell_name', 'spell_cost', 'spell_description'],
    global: ['spell_invocation_time', 'spell_range', 'spell_duration'],
    local: ['spell_area_of_effect', 'spell_effect'],
    lookup: {
        'spell_area_of_effect': ['spell_group_areas_of_effect', 'spell_place_areas_of_effect', 'spell_temporal_areas_of_effect'],
        'spell_effect': ['spell_numeric_adjustments', 'spell_healing_spells', 'spell_other_spell_effects']
    },
    all: function() {
        return this.meta.concat(this.global, this.local, this.lookup['spell_area_of_effect'], this.lookup['spell_effect']);
    }
}

const saveSpell = function() {
    const rowUID = generateRowID();
    let newSpell = {};
    getAttrs(spellAttributes.all(), attributes => {
        newSpell[`repeating_spells_${rowUID}_spell_name`] = attributes['spell_name'];
        newSpell[`repeating_spells_${rowUID}_spell_cost`] = attributes['spell_cost'];
        newSpell[`repeating_spells_${rowUID}_spell_description`] = attributes['spell_description'];
        spellAttributes.global.forEach(option => {
            newSpell[`repeating_spells_${rowUID}_${option}`] = getSpellOptionValue(attributes[option], 0);
        });
        spellAttributes.local.forEach(option => {
            const selectedOption = getSpellOptionValue(attributes[option]);
            const selectedOptionLabel = getSpellOptionValue(attributes[spellAttributes.lookup[option][selectedOption]], 0);
            newSpell[`repeating_spells_${rowUID}_${option}`] = selectedOptionLabel;
        });
        setAttrs(newSpell, () => {
            resetSpellDesigner(0);
        });
    });
}

const drawCard = () => {
    getSectionIDs("cards", ids => {
        if(ids.length >= 9) return;
        const randomCard = FATE_DECK[Math.round(Math.random() * (FATE_DECK.length-1))];
        const rowUID = generateRowID();
        let newCard = {};
        Object.keys(randomCard).forEach(property => {
            newCard[`repeating_cards_${rowUID}_${property}`] = randomCard[property];
        });
        setAttrs(newCard, () => {
            updateHandSize();
        });
    });
}

const discardCard = uid => {
    console.log(uid);
    removeRepeatingRow(`repeating_cards_${uid}`);
    updateHandSize();
}

const updateHandSize = () => {
    getSectionIDs("cards", ids => {
        setAttrs({ hand: ids.length });
    });
}

const getSpellCost = function(callback) {
    let spellCost = 0;
    getAttrs(spellAttributes.global.concat(spellAttributes.local, spellAttributes.lookup['spell_area_of_effect'], spellAttributes.lookup['spell_effect']), attributes => {
        spellAttributes.global.forEach(option => {
            spellCost += getSpellOptionValue(attributes[option]);
        });
        spellAttributes.local.forEach(option => {
            const selectedOption = getSpellOptionValue(attributes[option]);
            const selectedOptionCost = getSpellOptionValue(attributes[spellAttributes.lookup[option][selectedOption]]);
            spellCost += selectedOptionCost;
        });
        callback(spellCost);
    });
}

const getSpellOptionValue = function(attribute, returnCost=1) {
    if(!attribute) return 0;
    let value = (attribute.indexOf(',') > -1) ? attribute.split(',')[returnCost] : attribute;
    return (returnCost === 1) ? parseInt(value) : value;
}

const gotoStep = function(step = 1) {
    getAttrs(['spell_step'], values => {
        const currentStep = values['spell_step'];
        const nextStep = Math.min(Math.max(parseInt(currentStep)+step, 1), 20);
        getSpellCost(cost => {
            setAttrs({'spell_cost': cost }, () => {
                setAttrs({'spell_step': nextStep, 'designing_spell_lock': 1 }, () => {
                    console.log('Navigated to step ' + nextStep);
                });
            });
        });
    });
}

const resetSpellDesigner = function(designingSpell = 1) {
    let reset = {
        'designing_spell': designingSpell,
        'spell_cost': 0,
        'spell_step': 1
    }
    spellAttributes.all().forEach(attribute => {
        reset[attribute] = "";
    });
    setAttrs(reset, function() {
        console.log('Reseted Spell Designer');
    });
}

const changeSpellAttributes = spellAttributes.all().map(function(attribute){ return "change:"+attribute; }).join(' ');
on(changeSpellAttributes, eventInfo => {
    getSpellCost(cost => {
        setAttrs({'spell_cost': cost });
    });
});

on('clicked:draw', () => {
    drawCard();
});

on('clicked:repeating_cards:discard', function(eventInfo) {
    const uid = SheetUtils.getUID(eventInfo.sourceAttribute);
    discardCard(uid);
});

on('clicked:save', ()=> {
    saveSpell();
});

on('clicked:close', ()=> {
    resetSpellDesigner(0);
});

on('clicked:design', ()=> {
    resetSpellDesigner();
});

on('clicked:prev_step', ()=> {
    gotoStep(-1);
});

on('clicked:next_step', ()=> {
    gotoStep();
});

on('change:reason change:spirit', eventInfo => {
    getAttrs(['reason', 'spirit'], attributes => {
        const sorceryMax = (attributes['reason']) ? Math.pow(parseInt(attributes['reason']), 2) : 0;
        const mysticismMax = (attributes['spirit']) ? Math.pow(parseInt(attributes['spirit']), 2) : 0;
        setAttrs({'sorcery_max':sorceryMax, 'mysticism_max':mysticismMax});
    });
});

//# sourceURL=DL5THAGE.js