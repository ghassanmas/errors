## The purpose of this repo is to illustrate 3 types of approach of handling errors based on

### [error-handling-workshop](https://github.com/foundersandcoders/error-handling-workshop).

### The examples are  based on the fs.readfile/fs.readfileSync functions. So let's check it out!.

#### First clone the repo `git clone https://github.com/ghassanmas/errors`

#### you will be on the `master` branch there is no error handling example.




#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;brnach&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function used&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;approach description


#### `git checkout approach1` `fs.readfile`, an example of error first callback

#### `git checkout approach2` `fs.readFileSync`, an example of try/catch

#### `git checkout approch2` `fs.readFileSync` and other function, an example of retuning an error.


#### `npm run start` will run on your localhost port 3000.

##### if there are no error you should get the html file which has only h1 heder of:  "Hey, I just met you, and this is crazy! Here is a callback, so call it maybe?"
##### if there were error in reading the file you should get "Don't call me may be"
