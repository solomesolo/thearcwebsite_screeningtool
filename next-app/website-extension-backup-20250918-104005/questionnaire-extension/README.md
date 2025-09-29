# Questionnaire Extension

This project is a web extension that implements a questionnaire with a design and layout based on specified marketplace design specifications. The extension features a user-friendly interface with ambient lighting effects, responsive design, and a smooth animation system.

## Project Structure

```
questionnaire-extension
├── src
│   ├── styles
│   │   ├── main.css
│   │   ├── components.css
│   │   ├── animations.css
│   │   └── responsive.css
│   ├── components
│   │   ├── QuestionCard.js
│   │   ├── ProgressBar.js
│   │   ├── Button.js
│   │   └── LoadingState.js
│   ├── pages
│   │   ├── Welcome.js
│   │   ├── Questions.js
│   │   └── Results.js
│   ├── utils
│   │   ├── validation.js
│   │   └── animation.js
│   └── assets
│       └── fonts
├── public
│   ├── manifest.json
│   └── index.html
├── package.json
└── README.md
```

## Features

- **Overall Container Design**: Utilizes a radial gradient background and specified text colors.
- **Component Styles**: Includes styles for provider cards, buttons, and tags with hover effects and typography settings.
- **Animations**: Implements keyframe animations for fade-in effects, spinning loaders, and transitions for hover states.
- **Responsive Design**: Manages styles for different screen sizes to ensure a seamless user experience.
- **Questionnaire Components**: Comprises components for displaying questions, progress, and results with appropriate styling and animations.
- **Utility Functions**: Provides validation and animation management utilities to enhance functionality.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd questionnaire-extension
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Build and run the extension:
   ```
   npm start
   ```

## Design Specifications

The design adheres to the following specifications:
- Ambient lighting effects for a modern look.
- A consistent typography system and color palette.
- Well-defined button styles and loading states.
- Smooth animations for transitions and interactions.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.