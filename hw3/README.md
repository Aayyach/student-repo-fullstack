# Homework 3

## Socket.IO Chat App
Running the application:
1. Clone the hw3 repo with the command:

    ```sh
    git clone --single-branch --branch hw3 git@github.com:Aayyach/student-repo-fullstack.git
    ```

2. Change into the `chat-app` directory

3. Run the command: 

    ```sh
    node index.js
    ```

4. Open up `http://localhost:3000` on a local browser

5. Enter a message into the input field at the bottom of the browser and press the `Send' button to send a message!

## React Tic-Tac-Toe App
Issues I ran into:

    - Running `npm install` gave me an error:
        Could not resolve dependency:
        ...
        react-scripts@"^5.0.0" from the root project

        This is because react-scripts is deprecated, and the canary version of React 19.3 gives an error as well. I changed the React version to 19.3.0 and the react-scripts to 5.0.1, which fixed the issue from the tutorial and allowed me to use the sandbox environment from CodeSandbox locally on my machine.

Running the application:
1. Clone the hw3 repo with the command (if not cloned):

    ```sh
    git clone --single-branch --branch hw3 git@github.com:Aayyach/student-repo-fullstack.git
    ```

2. Change into the `tic-tac-toe/sandbox` directory

3. Run the command: 

    ```sh
    npm start
    ```

4. Open up `http://localhost:3000` on a local browser

5. Play a tic-tac-toe game!

## Rick and Morty API with React/Express
For the react Rick and Morty app, I decided to build the frontend with React/Vite and the backend with Express. This was for seperation of concerns and to handle passing simpler data from the Rick and Morty API to the frontend where it was displayed.

Running the application:
1. Clone the hw3 repo with the command:

    ```sh
    git clone --single-branch --branch hw3 git@github.com:Aayyach/student-repo-fullstack.git
    ```

2. Change into the `rick-morty-app` directory

3. Change into the `backend` directory

4. Run the command:

    ```sh
    npm run dev
    ```

5. Open another terminal

6. Change into the `frontend` directory

7. Run the command:

    ```sh
    npm run dev
    ```

8. Open the link that React generates for you and attach the route you want to see onto the URL
