let message1 = ['Let yourself be drawn', "No matter who you are, no matter what you did", 'Do your own thing', 'If you always do', 'The joy in life']
let message2 = ['by the stronger pull', 'you can always change', 'on your own terms', 'what interests you', 'is his who has']
let message3 = ['of that which you truly love.', 'become a better version of yourself.', 'and get what you came here for.', 'at least one person is pleased.', 'the heart to demand it.']

const createRandomMessage = () => {
    const part1 = message1[Math.floor(Math.random() * message1.length)];
    const part2 = message2[Math.floor(Math.random() * message2.length)];
    const part3 = message3[Math.floor(Math.random() * message3.length)]
    let randomMessage = part1 + ' ' + part2 + ' ' + part3
    return randomMessage
}

console.log(createRandomMessage())