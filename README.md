# affirmations-cookie 
a quick browser generator  

when a user navigates to the browser,   
onload - generate a random affirmation  
the affirmation message appears on the screen - in cute graphic? inside an opened fortune cookie?  

when the user clicks the button, affirm me  
grab antoher random affirmation  
the affrmation message on the screen changes to match the new affirmation  


# assets used
background image  
(plate of noodles)[https://unsplash.com/photos/LO7rNP0LRro]  
photo credit: (debbie tea)[https://unsplash.com/@debbietakesphoto]  

fortune cookie image  
()[]
credit: ()[]

some of the fortune cookie (messages)[http://www.fortunecookiemessage.com/archive.php?start=150

# pseudo code
//constants  
array of affirmations  

//state variables  
ourMessage

//cached elements  
affirm me button
message element

//event listeners  
document onload  
btn  click  

//functions  
init (onload)  
make a random index  
make ourMessage equal to the affirmation array at random index's value
render function   

render()  
change the message element's inner text to ourMessage

handleclick()  
make another random index
make ourMessage equal to the affirmation array at random index's value
render function


initial brainstorming of affirmations: [
'Be the you that believes in you',
'A hero is one who knows to hang on for one minute longer. You are that hero.',
'Happiness is an inside job that no one sees.',
'We are in charge of our actions and our feelings.',
'Great achievements are accomplished by daily small acts.',
'You already know the answers to your questions. Google does too.',
'You have the determination.',
'Success is not a straightforward upward path.',
'Do or do not. There is no try. -Yoda',
'Failure teaches us the greatest lesson of all - how to fail well.',
'If you want fried chicken, go get it.',
'You can fail and not give up. You can give up and not fail. You can also do both and that's okay.',
'Rest is an act of kindness to yourself.',
'Perfection is impossible. Set more attainable goals.',
'A mountain looms over the ant. The ant builds its home inside the mountain.'
'Winning doesn't have to be a competition. We can all win together.'
'No one achieves greatness alone.'
'You are more than what you produce. - The Nap Ministry',
'You define success. Success does not define you.',
'Naps are good for you.',
'Defining your self-worth based on productivity is a tool of the oppressor.',
'The worst thing that can happen in code is an error message. Press command+z to undo.',
'There are no rules except the ones we impose on ourselves.',
'All the water in the world can't sink a ship unless it gets inside.',
'It's okay if you'd rather wait to try again tomorrow.',
'Two small jumps can sometimes be better than one giant leap. Not everyone has/want to represent humankind.',
'I dreamt that it was time to go back to bed.',
'The rainbow shines after a rainstorm.',
'You don't need talent to gain experience.',
'Do not judge a book by its cover.',







]


