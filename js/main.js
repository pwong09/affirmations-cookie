/*array of affirmations*/
affirmations = [
    'Be the you that believes in you -EC',
    'A hero is one who knows to hang on for one minute longer. You are that hero.',
    'Happiness is an inside job that no one sees. -PW',
    'We are in charge of our actions and our feelings.',
    'Great achievements are accomplished by daily small acts.',
    'You already know the answers to your questions. Google does too. -PW',
    'You have the determination.',
    'Success is not a straightforward upward path.',
    'Do or do not. There is no try. -Yoda',
    'Failure teaches us the greatest lesson of all - how to fail well.',
    'If you want fried chicken, go get it. -PW',
    'You can fail and not give up. You can give up and not fail. You can also do both and that\'s okay.',
    'Rest is an act of kindness to yourself. -The Nap Ministry (paraphrasing)',
    'Perfection is impossible. Set more attainable goals.',
    'A mountain looms over the ant. The ant builds its home inside the mountain. -PW',
    'Winning doesn\'t have to be a competition. We can all win together.',
    'No one achieves greatness alone.',
    'You are more than what you produce. - The Nap Ministry',
    'You define success. Success does not define you.',
    'Naps are good for you. -The Nap Ministry (paraphrasing, maybe)',
    'Defining your self-worth based on productivity is a tool of the oppressor.',
    'The worst thing that can happen in code is an error message. Press command+z to undo. -PW',
    'There are no rules except the ones we impose on ourselves. -PW',
    'All the water in the world can\'t sink a ship unless it gets inside.',
    'It\'s okay if you\'d rather wait to try again tomorrow. -PW',
    'Two small jumps can sometimes be better than one giant leap.',
    'I dreamt that it was time to go back to bed. -PW',
    'The rainbow shines after a rainstorm.',
    'You don\'t need talent to gain experience.',
    'Do not judge a book by its cover.',
    'It\'s 3pm somewhere. Take a nap. -PW',
    'You are the grandmaster of your life.',
    'Breathing sends oxygen into your brain and body. Having oxygen makes everything easier. -PW',
    'You\'ve got what it takes!',
    'Water benders are the best benders. -PW',
    'We are what we repeatedly do. Excellence, then, is not an act, but a habit. -Aristotle',
    'It\'s never crowded along the extra mile.',
    'To affirm is to make firm.',
    'You can overcome.',
    'The majority of the word \"can\'t\" is can.',
    'We cannot change the direction of the wind. But we can adjust our sails.',
    'Chinese food is good food. Get takeout now! -PW',
    'A cheerful message is on its way to you!',
    'Before you wonder \"Am I doing things right,\" ask \"Am I doing the right things?\"', 
    'Teamwork: the fuel that allows common people attain uncommon results.'
    ]
    

const affirmEl = document.querySelector('#affirm');
const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);


function handleClick(e){
    let randomIndex = Math.floor(Math.random() * affirmations.length)
    affirmEl.innerText = `${affirmations[randomIndex]}`;
}
