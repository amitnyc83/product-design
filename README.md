### The Task
Goal To expand on your project to your Product Detail Page (PDP).
I would like to make the following modifications to the pdp page.

 1. Use the new data object found in data.json instead of the data source data.js  
 2. Render both products and link them together under a section that says related items 
 3. Render the shades color as a dropdown choice and include the label Shade. [example](https://d.pr/i/VvLPCP)  
 4. Display Ingredients on PDP Page as a drop down accordion  
 5. Render all images in the product json and have a thumbnail and main image. When selecting the thumbnail the main image should change. You should also have a methodology for knowing which thumbnail is selected.  
 6. Render "More Info" property as a modal that is responsively displayed center on desktop and mobile. [example](https://d.pr/i/1Ag3TC)
 7. Include Vegan svg  next to [title](https://d.pr/i/d3AT1P) if keyIngredient attribute includes "vegan" [svg](https://www.dropbox.com/t/iHDPRNsbFXFuGV9R)  
 8. Render "Best Makeup Guarantee" from garantee.json if "garantee" property has a value of 1 [example](https://d.pr/i/Mqobyl)  
 9. Please include the following note with ingredients: "Please be aware that ingredient lists may change or vary from time to time. Please refer to the ingredient list on the product package you receive for the most up to date list of ingredients."  
10. Render badge for "New and Improved"  on product that has the attribute "new" for the property "badge" [example](https://d.pr/i/1g1QA2)  
11. Make the Quantity UI functional which allows for the adding and subtracting of items you are adding to your cart icon.  
12. Create an a numerical representation that shows the number of items in your bag based off the quantity you add to the bag. You do not have to show the contents of your cart.  
13. Deploy project to either heroku or netlify.  


 ## Original Task
Desktop and mobile designs for a Clinique Single Product Page:

Task is to use HTML/CSS/SCSS, including the BEM (Block Element Modifier) methodology, to translate these specs into a pixel-perfext UI.

Specifically, styling all of the following React components found in the starter code:

* src/Product.js
* src/ProductImage.js
* src/ProductPurchase.js
* src/ProductDesc.js


## Getting Started

### Prerequisites

* NodeJS >= 8.10 
* NPM 

### Step 1 - Node Modules

The first thing you need to do to get this app working is to install the node modules with the following command:

    npm install

### Step 2 - Running the App

After installing the Node modules, you can run the  app in development mode with this command:

    npm start

Open http://localhost:3000 to view the product page in the browser.

App is deployed on Heroku.
