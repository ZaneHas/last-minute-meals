# last-minute-meals

# Inspiration
During Covid many people are facing financial challenges with having a tighter spending budget, and a lack of time to cook meals since they can't go out to eat. We decided to both tackle these issues and the issue of food waste, by creating an app to enable users to live more environmentally sustainable lives.

# What it does
Our Android app tackles the issue of food waste and sustainability. It keeps track of the user’s “virtual fridge” based on the items on their receipt, and provides reminders for when items are going bad soon. Based on the foods’ packaging, it gives advice on how to recycle it most effectively. Additionally, given how many people are new to cooking in Covid since it’s harder to go out to eat, it recommends dishes to users using those items in their fridge, and based on their individual preferences such as vegetarian options.

# How we built it
For the Machine Learning we utilized Python and packages such as pytesseract, pandas, opencv, etc to conduct Computer Vision on receipts, extract text, then run it into our NLP model which removes any non-food words, then translates receipt abbreviations into complete words!

For the App we utilized Android Studio, React Native, JavaScript, and connected these with our Backend using Flask to create a fully functioning Android Application!

# Challenges we ran into
There were unforeseen challenges when reading receipts, such as how most receipts don't list the full names of items, only abbreviations. Additionally, hooking up the Python backend with the Front-End proved to be challenging, but we were able to do it.

# Accomplishments that we're proud of
We were able to not only implement a Computer Vision model for conducting OCR on receipts, but also an NLP model for recognizing food words, and translating abbreviations into complete words.

Additionally we were able to turn everything into a complete Android app, which was a real achievement considering 2 of our members are hackathon beginners!

# What we learned
We learned a ton about implementing ML models into apps, designing an app, and also working effectively in a virtual setting.

# What's next for Last Minute Meals
We plan to add other features such as identifying compost stations close to the user on a Google Maps interface using their IP address. Also creating a more versatile Computer Vision Model to identify receipts from many different angles and conditions.
