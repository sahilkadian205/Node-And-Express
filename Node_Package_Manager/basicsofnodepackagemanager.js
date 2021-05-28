//node package manager is a command line tool and as well as a open source repository of third party libraries that we can add to our 
//node application.

//We add these third party modules using command line tool - npm (node package manager)
//npm comes with node. When you install node npm is also installed.
//check verison using command npm -v.

//Before you add any package or modules to your application you need to have package.json file. This file contain the metadata and 
//dependecies of modules.
//run npm init in your project root folder.
//Then you will be asked some questions answer them and package.json file will be created.
//to skip these questions use npm init --yes

//To install modules use command-
//npm i -g modulename
// i - install , g - global scope (g is not mandatory)

//To install specific version
//npm i modulename@version

//To uninstall module
//npm un modulename

//search for modules on https://www.npmjs.com/ . you will get command to install that package.

//After installing a module it will be added in dependencies property in package.json file. The installed module will be present in 
//node_modules folder.That module will have package.json file as well which contains dependencies to other modules.

//Require resolves a module in following way - 
//e.g- require('underscore');
//First require assumes that underscore is a built in module.
//If not then it assumes that this module is present in current folder.
//If not then it checks in node_modules folder.

//When you install a module check under node_modules folder you fill find that module folder here. Now this installed package has also
//package.json file which can have dependencies mentioned in dependencies property.If dependencies are present then along with this
//module that you installed its dependent modules will be insatlled as well.

//node_modules will have lots of modules in real world application which in gigabytes or more. We don't want to add this node_modules on
//git or some other repo where you want to store your application as if someone downloads this application he have to wait for 
//node_modules folder to get downloaded.
//But if we don't add node_modules so how will other person will get the dependent modules of our application.
//So, package.json file comes into the play. It contains all our dependencies.
//We have our application source code on git and we haven't added node_modules folder on git repo.
//Other person will download our source and then to get dependent modules he can simply run 'npm install' or 'npm i' and work is done. 
//node_modules folder will be created and all the dependent modules will be installed under node_modules folder which are present in 
//package.json file.
//We add node_modules/ in .gitignore file so that node_modules folder is not pushed to git.


//Semantic Verisioning

// "dependencies": {
//     "mongoose": "^5.12.11",
//     "underscore": "^1.13.1"
//   }
//"mongoose": "^5.12.11"  5-major verison, 12 - minor version, 11 - patch version

//minor version is released when new functionality is added and can break existing api.
//minor version is released when new functionality is added without changing existing api.
//patch verion is released when some bug is fixed.

// ^5.12.11  what does ^ means.
//^ means we want to install 5.x (x will be latest minor release along with latest patch release)

// we can add ~ as well ~5.12.11
//~ means we want to install 5.12.x (x will be latest patch version)

//But newer releases can have bugs as well and so we can simply write "mongoose": "5.12.11" (without ^ or ~).
//Now if someone checksout out our code and run npm install then he will get exactly same module version (5.12.11) installed under 
//node_modules folder.

//To check dependecies run command npm list
//To check only project dependencies npm list --depth=0 

//Updating packages
//use npm outdated to check outdated pacakges.
//use npm update to update module to latest version based on ~ or ^ mentioned in package.json.If ~ or ^ are not present it will not be updated
//to update a module to latest verison present on npmjs repo we need another command line tool npm-check-updates
//npm i -g npm-check-updates  (to install npm-check-updates command line tool. g is not mandatory here)
//npm-check-updates -u or ncu -u (this command will only make entry of latest verison of different packages in package.json file. 
                                 //We still need to install them)
//npm i (now latest packages will be installed)                                 



//Dev dependencies

//Sometimes we can have some dependencies which will be used for development only. We don't want them to go into production.
//It will be added under different property and called devDependecies in package.json file.
//Dev dependencies are also present inside node_modules folder.
//lets install jshint which static javascript anaylsis tool under dev dependencies
//eg npm i jshint --save-dev

//Now check package.json you will see - 
// "devDependencies": {
//     "jshint": "^2.12.0"
// }