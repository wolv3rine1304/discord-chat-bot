module.exports = {
    once: true,
    run: () => {
        console.warn('[BOT] Disconnecting, Good bye!');
        process.exit(0);
    }
}