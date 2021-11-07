## Information

Application load and show a list of the 20 latest issues from Github repository.

- After scrolling to the bottom of the list, app load the next 20 additional elements, and so on
- You can search issue title using search engine
- After one of the issues is pressed, the application navigate the user to the screen with selected issue details (state, title, body).
- You can comment specific issue. The comment is storage in local storage

## Running

Install dependencies first:

```shell script
npm install
```

```shell script
pod install --project-directory=ios
```

Then run the application:

```shell script
npm run android
```

```shell script
npm run ios
```

## Technologies

Projects are created with:

- React Native
- Redux/toolkit
- TypeScript
- AsyncStorage
