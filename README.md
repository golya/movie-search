## Getting Started

The idea behind this project was to demonstrate the control of behavior from the user interface to the "backend" using Behavior-Driven Development (BDD). Few parts like state handling seems over engineered for this test project. I solve like this to have a discussion about state management in complex projects. 

Please do not forget to create the .env file from .env.example and fill the api key.

### Start external services

```bash
docker compose up
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

You can run the test suite using the following command:

```bash
npm run test
```

# Storybook
Storybook is a tool for developing UI components in isolation. It can help you build components without needing to worry about app-specific dependencies and requirements.

You can start Storybook using the following command:

```bash
npm run storybook
```

# TODO

- refactor the container files
- refactor the components and seprate the operations and UI part
- generic error handling
- error handling on UI
- remove all the custom style form all the components
- separate more the client, shared and server side parts
- get urls from config
- optimize types
- limit the maximum lenght of the inputs (page, query)
- calculate the item number by window width
- put the query params into the url
- create better/detailed UI design