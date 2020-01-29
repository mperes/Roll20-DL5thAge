on('clicked:close', ()=> {
    setAttrs({'modal': 0, 'spell-step':1, 'spell-area-of-effect':'a', 'spell-effect': 'a' }, function() {
        console.log('Closed modal');
    });
});

on('clicked:design', ()=> {
    setAttrs({'modal': 1, 'spell-step':1, 'spell-area-of-effect':'a', 'spell-effect': 'a' }, function() {
        console.log('Opened modal');
    });
});

on('clicked:prev-step', ()=> {
    getAttrs(['spell-step'], values => {
        const currentStep = values['spell-step'];
        const prevStep = Math.max(1, currentStep-1);
        setAttrs({'spell-step': prevStep }, function() {
            console.log('Navigated to step ' + prevStep);
        });
    });
});

on('clicked:next-step', ()=> {
    getAttrs(['spell-step'], values => {
        const currentStep = values['spell-step'];
        const nextStep = Math.min(7, currentStep+1);
        setAttrs({'spell-step': nextStep }, function() {
            console.log('Navigated to step ' + nextStep);
        });
    });
});

on('change:repeating_spells', function(eventInfo) {
    console.log(eventInfo);
});


//# sourceURL=DL5THAGE.js