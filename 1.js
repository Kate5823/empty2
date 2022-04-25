intent('hello world', p => {
    p.play('(hello|hi there)');
});

intent('sun', p => {
    p.play('(moon)');
});