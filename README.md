# http-app

Sample project to demonstrate MEAN technology. This is Angular HttpClientModule based project.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

After cloning this project need to work on below command
cd ../http-add/
http-add>node --version
http-add>npm --version
http-add>mongo --version
http-add> npm install express body-parser mongoose --save
http-add> npm run build
To work with mongoose please check the MongoDB instance in your system
1. Open another commandprompt and start "mongod"
2. Open another commandprompt and start "mongo"
3. Run below commands
	> show dbs;
	> use bookdb;
	> show collections;
	> db.books.insert([
	
{
bookId:1001,
bookName:"The monk who sold his ferrari",
authorName:"Robin Sharma",
unitPrice:350.00,
  availability:'available'
},
{
bookId:1002,
bookName:"The Alchemist",
authorName:"Paulo Coelho",
unitPrice:350.00,
  availability:'available'
},
{
bookId:1003,
bookName:"The 7 Habits of Highly Effective People",
authorName:"Stephen R. Covey",
unitPrice:350.00,
  availability:'available'
},
{
bookId:1004,
bookName:"Rich Dad, Poor Dad",
authorName:"Robert Kiyosaki",
unitPrice:350.00,
  availability:'available'
},
{
bookId:1005,
bookName:"Think and Grow Rich",
authorName:"Napoleon Hill",
unitPrice:350.00,
  availability:'available'
},
{
bookId:1006,
bookName:"What to Say When You Talk to Your Self",
authorName:"Dr. Shad Helmstetter",
unitPrice:350.00,
  availability:'available'
},
 {
bookId:1007,
bookName:"The Power of Positive Thinking",
authorName:"Dr. Norman Vincent Peale",
unitPrice:350.00,
  availability:'available'
 },
{
  bookId:1008,
  bookName:"The Magic of Thinking Big",
  authorName:"David J. Schwartz",
  unitPrice:350.00,
  availability:'available'
},
 {
  bookId:1009,
  bookName:"Awaken the Giant Within",
  authorName:"Tony Robbins",
  unitPrice:350.00,
  availability:'available'
},
{
  bookId:1010,
  bookName:" The Seven Spiritual Laws of Success",
  authorName:"Deepak Chopra",
  unitPrice:350.00,
  availability:'available'
 }
	]);
4. db.books.find();
5. db.books.find({bookId:1010},{_id:0});
	

### Installing
npm install -g nodemon
npm install -g @angular/cli
etc...

```
Give an example
```

## Deployment
To execute the code : npm run build
Each time you modify the Angular code stop npm by pressing 'CTRL+C'


## Built With

* [VisualCode](https://code.visualstudio.com/docs) - TextEditor
* [Angular](https://angular.io/guide) - Dependency Management
* [Node](https://nodejs.org/en/docs/) - Used for server side backedn coding
* [Express](https://expressjs.com/en/guide/routing.html) - Used for server side backedn coding
* [Mongo](https://docs.mongodb.com/?_ga=2.58404010.1441816397.1549639779-1187479519.1549639779) - Used for server side backedn coding



## Authors

* **Dhanashree Jawle** 

## License


## Acknowledgments

* Inspiration www.djamware.com
* Inspiration javatpoint.com
* angular.io/guide
