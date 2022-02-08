// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});

intent('shhhhhun', p => {
    p.play('(moon)');
});