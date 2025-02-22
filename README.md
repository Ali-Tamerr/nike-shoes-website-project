# Nike Shoes Website With ReactJS + Vite + Tailwindcss

- This is my first project made with a CSS framework after mastering pure CSS and learning many new techniques from it.
- Thanks to @adrianhajdin video tutorial of TailwindCSS and making a Nike Landiing page using this framework, After I've finished writing the code to be like his project i decided to continue working and adding many features to it to be for me a project that is competitive enough compared to projects made by other developers.
- You can view the details of the products, Add them to cart or remove them from it & Confirm your checkout after you are finished reviewing all the products to be bought, And also you can sign in with your google account.
- It's a small preview of how a shopping website is, yet contains most of the basics of a shopping website.


# Here are the techniques and Imports I used in my code:

- TailwindCSS custom values, animations, hover and active effects, classes and even if statements inside the classNames.
- BrowserRouter for managing paths and Link for navigation to these paths.
- useState & useEffect for many operations, the most important of which is handling the cart count and adding the product details to the cart without duplicating or the "Add to cart" button being bugged out when the "remove all" in cart section is clicked.
- localStorage.setItem , .getItem & .removeItem for placing the product details into the cart when "Add to cart" of the product is pressed.
- Managing Google OAuth settings including googleLogout, useGoogleLogin & axios for ensuring the successful sign in and display the account details at the Nav component (Normal sign in / login is still in development).
- An index.js that contains some constants that look like a local database for easily export them to components.
- useRef for managing the carousel and carousel arrows easily in product details section (/product/:product-name).
- JSON.parse and .stringify for being able to fetch and push the cart count in localStorage.
- also used .parse and .parseFloat for calculating the total price of the products added in the cart to be displayed on the page.


### <p align=center font-weight=bold> Hope I covered all the features in this project and looking forward to learn about the next ReactJS techniques and make my next project with next.js! </p>
