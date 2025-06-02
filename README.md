# 📝 React To-Do List Application

A beautiful, interactive To-Do List web application built with React.js and Vite. Features a modern design with gradient backgrounds, smooth animations, and full functionality for managing your daily tasks.

![To-Do App Preview](https://img.shields.io/badge/React-19+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- ➕ **Add Tasks** - Create new tasks with a simple input form
- ✅ **Mark Complete** - Toggle tasks between completed and pending states
- 🗑️ **Delete Tasks** - Remove individual tasks with a single click
- 📊 **Task Statistics** - View total, completed, and pending task counts
- 🧹 **Clear Completed** - Remove all completed tasks at once
- 💾 **Local Storage** - Tasks persist between browser sessions
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Beautiful UI** - Modern design with gradients and smooth animations
- ⏰ **Timestamps** - See when each task was created

## 🚀 Live Demo

Visit the live application: [React To-Do List](https://yourusername.github.io/react-to-do)

## 🛠️ Technologies Used

- **React 19** - Modern React with functional components and hooks
- **Vite 6** - Fast build tool and development server
- **CSS3** - Custom styling with gradients, animations, and responsive design
- **Local Storage API** - For data persistence
- **GitHub Pages** - For deployment

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-to-do.git
   cd react-to-do
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Main application styles
├── index.css            # Global styles
├── main.jsx             # Entry point
└── components/
    ├── AddTodo.jsx      # Add task form component
    ├── TodoList.jsx     # Task list container
    └── TodoItem.jsx     # Individual task component
```

## 🎯 Usage

1. **Adding Tasks**: Type your task in the input field and click "Add Task" or press Enter
2. **Completing Tasks**: Click the checkbox next to any task to mark it as complete
3. **Deleting Tasks**: Click the trash icon (🗑️) to remove a task
4. **Clearing Completed**: Use the "Clear Completed" button to remove all finished tasks
5. **Viewing Stats**: Check the header for total, completed, and pending task counts

## 🚀 Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages. Follow these steps:

### Prerequisites
- GitHub account
- Git installed on your computer

### Step-by-Step Deployment

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `react-to-do` (or any name you prefer)
   - Make it public
   - Don't initialize with README (we already have one)

2. **Update configuration files**
   - In `vite.config.js`, update the `base` field with your repository name:
     ```javascript
     base: '/your-repository-name/',
     ```
   - In `package.json`, update the `homepage` field:
     ```json
     "homepage": "https://yourusername.github.io/your-repository-name"
     ```

3. **Initialize git and push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: React To-Do List application"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repository-name.git
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select the `gh-pages` branch
   - Click Save

6. **Access your deployed app**
   Your app will be available at: `https://yourusername.github.io/your-repository-name`

## 🔧 Configuration

### Environment Variables
No environment variables are required for this application.

### Customization
- **Colors**: Modify the CSS variables in `src/App.css`
- **Fonts**: Update the font family in `src/index.css`
- **Layout**: Adjust component styles in individual CSS sections

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Vite](https://vitejs.dev/)
- Deployed on [GitHub Pages](https://pages.github.com/)
- Icons from Unicode Emoji

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact the maintainer.

---

**Happy Task Managing! 📝✨**
