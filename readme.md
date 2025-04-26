# Product Listing Website

This is a **fully responsive** Product Listing Webpage built using **HTML**, **CSS**, and **JavaScript**.  
The project includes a **Navbar**, **Hero Section with Carousel**, **Dynamic Product List Page**, and a **Footer**, designed with industry-level best practices.

---

## Features

- **Responsive Navbar**

  - Adapts seamlessly across desktop, tablet, and mobile devices.

- **Hero Section with Auto-Carousel**

  - A sliding carousel that automatically loops every **3 seconds**.
  - Implemented using `setInterval()` in JavaScript.

- **Dynamic Product List**

  - Products are **fetched from a single API** containing thousands of products.
  - **Server-side Filtering**:
    - Filter products by category by passing a `categoryId` to the API.
  - **Client-side Pagination**:
    - Products are paginated on the frontend for better user experience.

- **URL State Persistence**

  - The current **page number** and **selected category** are maintained in the **URL** as query parameters.  
    Example:
    ```
    ?page=1&category=women-joggers
    ```
  - This ensures that the page state is preserved across reloads or when sharing the link — an **industry-level standard** approach.

- **Responsive Footer**
  - Clean and fully responsive footer optimized for all device sizes.

---

## How to Run the Project

To view the live project:

1. Download or clone the project repository.
2. Open the project folder.
3. Open the `index.html` file using **Live Server** (recommended) or manually open it in your browser.
   - If you are using VS Code, right-click on `index.html` and select **"Open with Live Server"**.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## Folder Structure (Example)

```
/project-folder
├── src/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
│       └── config.js
│       └── filter.js
│       └── navbar.js
└── index.html
└── readme.md
```

## Important Notes

- The project focuses on **clean code**, **responsive design**, and **efficient state management** through the URL.
- Both **server-side filtering** and **client-side pagination** techniques are applied for better performance and scalability.
