# affirmations-cookie 
a quick browser generator  

when a user navigates to the browser,   
onload - generate a random affirmation  
the affirmation message appears on the screen - in cute graphic? inside an opened fortune cookie?  

when the user clicks the button, affirm me  
grab antoher random affirmation  
the affrmation message on the screen changes to match the new affirmation  


# assets used
kawaii fortune cookie image
(fortune cookie)[https://www.pngitem.com/middle/oiTbwh_kawaii-cookie-cliparts-cute-kawaii-fortune-cookie-hd/]
credit: (Dj Tripti)[https://www.pngitem.com/userpic/17624/]

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
