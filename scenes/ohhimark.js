const mark = add([
	sprite("mark"),
	scale(1),
	pos(width() / 2, height() / 2 - 24),
]);

mark.action(() => {
	mark.scale = vec2(wave(1, 2, 6));
}); 

add([
	text(`${args.score}`, 32),
	pos(width() / 2, height() / 2 + 32),
]);

keyPress("space", () => {
	go("main");
});
