# Thought process:
1) Honestly nothing struck my mind on reading the task and the guidelines.
2) Some facts were apparent i.e. make a telegram bot, integrate google books api, get downloadable csv data
3) Yet I didn't know where to start, so I started with google and youtube and read several blogs and few tutorial
4) No site had the complete info regarding the functions, methods, usages and how to use the api
5) Eventually I came across the pyTelegramBotAPI which helped me the most
6) Read the docs on this module on several sites including :
   a) https://pypi.org/project/pyTelegramBotAPI/
   b) https://www.youtube.com/watch?v=NwBWW8cNCP4
7) Further searching lead to the following site and a similar project on github :
   a) https://www.mindk.com/blog/how-to-develop-a-chat-bot/
   b) https://github.com/eternnoir/pyTelegramBotAPI/blob/master/examples/payments_example.py
8) The github project example was the biggest help by far.
9) Rest of the task was to read through the BOOK api docs and fetch data.
10) The key url to fetching most of the data was 
    https://www.googleapis.com/books/v1/volumes
    now just appending to the url above I obtained the following data:
     a) for books by name => q = book_name
     b) for the genre of books => q = subject:genre