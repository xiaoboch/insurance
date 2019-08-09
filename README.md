# insurance
 
## How to run the application: 
You may run all the commands in cmd tools or gitbash in windows or in linux terminal. 
    
    1. Install yarn: https://yarnpkg.com/lang/en/docs/install/#windows-stable
        1.1. You may install gitbash for better command line experience if you are using windows.

    2. Install parcel: 'yarn global add parcel-bundler'

    3. Under the project folder, install dependecies by running 'yarn'

    4. Run 'parcel index.html', the application should run under 'localhost: 1234'

# how to run cypress test
    1. Run 'yarn run cypress open'

# how to run cypress + cucumber
    1. Add   "ignoreTestFiles": "*.js" to cypress.json
    2. Run 'yarn run cypress open', you will only see the feature files.    

