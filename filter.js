function getShortMessages(messages) {
        const box = messages.map(item => item.message)
        return box.filter(result => result.length < 50)
}
module.exports = getShortMessages

