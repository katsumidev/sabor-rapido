<p align="center"><img src="https://github.com/mooncoded/sabor-rapido-grao/blob/main/src/assets/simple_logo.png" width="100px" /></p>

<h1 align="center">Sabor Rápido Project 🍔</h1>

![SaborRapido](https://github.com/mooncoded/sabor-rapido-grao/blob/main/extra/demo.gif)

---

### Requirements to Run the Project

- [ReactJs](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com)
- [NodeJS](https://nodejs.org/en)

---

### 🚀 Instructions

1. **Download Necessary Tools:**
   - Make sure you have the latest versions of NodeJS, npm, and yarn installed.
   - Download the [MongoDB terminal tools package](https://www.mongodb.com/try/download/database-tools).
   - Download and install [MongoDB Community](https://www.mongodb.com/try/download/community).

2. **Download and Install Project Dependencies:**
   - For the frontend:
     ```
     yarn install
     ```
   - For the backend:
     ```
     cd server
     yarn install
     ```

   - Start the backend to generate the database
     ```
     cd server/src
     node index.js
     ```

---

### 🛠️ Data Configuration

1. **Create the `.env` File:**
   - Create a `.env` file based on the template in `.env-copy` for both the backend and frontend.
   - Include the URLs for the backend API and MongoDB connection.

2. **Import MongoDB Database:**
   1. Go to the MongoDB executables directory.
   2. Move the `.csv` files from the "extra" folder to the MongoDB folder.
   3. Run the following commands to import the collections:
      - Restaurants:
        ```
        mongoimport /db:sabor-rapido /collection:restaurants /file:restaurantes.csv
        ```
      - Users:
        ```
        mongoimport /db:sabor-rapido /collection:users /file:users.csv
        ```

---
### Running the Project

   - For the frontend:
     ```
     yarn start
     ```
   - For the backend:
     ```
     cd server/src
     node index.js
     ```

---

## 📖 Author
<table>
  <tr>
    <td  align=center>
        <img src="https://avatars.githubusercontent.com/u/90803853?v=4" width="100px" alt="Moon">
        <a href="https://github.com/mooncoded">
          <br>
            Moon
          </br>
        </a>
    </td>
  </tr>
</table>
