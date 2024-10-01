# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# To-Do List (React + JSON Server API)

A **To-Do List** application built using **React**, with task management handled through a local **JSON Server API**. Users can add, update, delete, toggle tasks, and search through the tasks with all operations performed via API requests.

## Features

- **Add Tasks**: Users can add new tasks to the list, which are sent to the API for persistence.
- **Remove Tasks**: Users can remove tasks, and the API updates the data accordingly.
- **Mark Complete/Incomplete**: Users can toggle tasks as completed or incomplete, and the API updates the task status.
- **Search Tasks**: A search bar allows users to filter through tasks based on keywords.
- **Persistent Data**: All data is stored and managed through the local JSON Server, ensuring persistence across sessions.

## Project Structure Overview

- **`App.js`**: The main component that handles state management and API integration for fetching, adding, updating, and deleting tasks.
- **`Todo.js`**: A component responsible for rendering each individual task and the associated "Remove" button, as well as toggling completion status.
- **`TodoList.js`**: Maps over the tasks array and renders the list of `Todo` components.
- **`AddTodo.js`**: Handles the form input for adding new tasks, sending a POST request to the API.
- **`index.js`**: Entry point of the React app, where `App.js` is rendered.
- **`App.css`**: Contains styling for the UI, ensuring a clean and responsive design.

## Technologies Used

- **React**: For building the user interface and handling state.
- **JavaScript (ES6+)**: For logic and asynchronous API operations.
- **JSON Server API**: For managing tasks (CRUD operations).
- **HTML & CSS**: For structuring and styling the application.

## API Operations (CRUD)

1. **Fetch Tasks (GET Request)**:
   ```js
   fetch('http://localhost:5000/tasks')
   ```
   Retrieves the list of tasks from the JSON server.

2. **Add Task (POST Request)**:
   ```js
   fetch('http://localhost:5000/tasks', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(newTask)
   })
   ```
   Adds a new task to the server.

3. **Update Task (PUT Request)**:
   ```js
   fetch(`http://localhost:5000/tasks/${taskId}`, {
     method: 'PUT',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(updatedTask)
   })
   ```
   Updates a task's details or completion status.

4. **Delete Task (DELETE Request)**:
   ```js
   fetch(`http://localhost:5000/tasks/${taskId}`, {
     method: 'DELETE'
   })
   ```
   Removes a task from the server.

## Search Bar

The application also features a search bar that filters through the tasks based on the search input. The tasks are filtered in real-time as the user types, allowing for quick and efficient task searches.

Here’s the code for the search functionality:
```jsx
<main>
  {fetchError && (<p style={{'color':'red' , 'font-weight':'600'}}>{`Error: ${fetchError} `}</p>)}
  {isLoading && (<p>Loading todos items...</p>)}
  {!fetchError && !isLoading && <Content 
    toDos={toDos.filter((toDo) => (toDo.item).toLowerCase().includes(search.toLowerCase()))} 
    handleClick = {handleClick}
    handleDelete = {handleDelete}
  />}
</main>
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ketan-2905/todo_list.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo_list
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the JSON Server (assuming the server is set up to run on port 5000):
   ```bash
   npx json-server --watch db.json --port 5000
   ```
5. Start the React development server:
   ```bash
   npm start
   ```

## How to Use

1. **Adding a Task**: Input a task and click the "Add Task" button. The task will be sent to the JSON Server and displayed on the list.
2. **Removing a Task**: Click the "Remove" button to delete a task, which will also be deleted from the JSON Server.
3. **Marking a Task Complete/Incomplete**: Click on a task to toggle its completion status, which is updated on the server.
4. **Searching Tasks**: Use the search bar to filter tasks by name or keyword.

## Future Enhancements 

- **Task Editing**: Add functionality to edit existing tasks through the API.
- **Task Prioritization**: Implement a system to categorize and prioritize tasks.
- **Task Deadlines**: Add a feature to assign deadlines to tasks.
