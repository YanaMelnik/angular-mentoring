const express = require('express');
const app = express();
const uuidv1 = require('uuid/v1');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/auth/login', (req, res) => {
  const {login, password} = req.body;
  const result = loginBase.filter(user => {
    return login === user.login && user.password === password;
  });
  if (!result) {
    res.status(403);
    res.send();
  } else {
    const loginUserToken = uuidv1();
    issuedTokens[loginUserToken] = result[0].login;
    res.status(200);
    res.json({token: loginUserToken});
  }
});

app.post('/api/auth/logout', (req, res) => {
  const userToken = req.body.userToken;
  delete issuedTokens[userToken];
  res.status(200);
  res.send();
});

app.get('/api/auth/user', (req, res) => {
  if (checkUserAccess(req)) {
    const userToken = req.header('Authorization');
    const login = issuedTokens[userToken];
    const result = loginBase.filter(user => {
      return login === user.login;
    })[0];
    res.status(200);
    res.json({
      login: result.login,
      firstName: result.firstName,
      lastName: result.lastName
    });
  }
});

app.get('/api/courses', (req, res) => {
  if (checkUserAccess(req)) {
    const pageNumber = req.query.start;
    const countOnPage = req.query.count;
    const endCourses = countOnPage * pageNumber;
    const startCourses = countOnPage * (pageNumber - 1);

    const items = courseList.slice(startCourses, endCourses);
    const moreAvailable = courseList.length > endCourses;

    const response = {
      items,
      moreAvailable
    };

    res.status(200);
    res.json(response);
  } else {
    res.status(403);
    res.send();
  }
});

app.put('/api/course', (req, res) => {
  const {newCourse} = req.body;
  newCourse.id = courseList.length + 1;
  courseList.push(newCourse);
  res.status(200);
  res.send();
});

app.get('/api/course/search', (req, res) => {
  const searchText = req.query.textFragment.toLowerCase();
  const searchCourse = courseList.filter(elem => {
    return elem.title.toLowerCase().includes(searchText)
      || elem.description.toLowerCase().includes(searchText);
  });
  if (searchCourse.length !== 0) {
    res.status(200);
    res.json(searchCourse);
  } else {
    res.status(404);
    res.send();
  }
});


app.post('/api/course', (req, res) => {
  const {course} = req.body;
  const courseForUpdate = courseList.findIndex(elem => elem.id === course.id);
  if (courseForUpdate !== -1) {
    courseList.splice(courseForUpdate, 1, course);
    res.status(200);
    res.send();
  } else {
    res.status(404);
    res.send();
  }
});

app.delete('/api/course/:id', (req, res) => {
  const id = +req.params.id;
  const deleteCourseIndex = courseList.findIndex(elem => elem.id === id);
  if (deleteCourseIndex !== -1) {
    courseList.splice(deleteCourseIndex, 1);
    res.status(200);
    res.send();
  } else {
    res.status(404);
    res.send();
  }
});

app.get('/api/course/:id', (req, res) => {
  const id = +req.params.id;
  console.log('want to find course with id: ' + id);
  const courseIndex = courseList.findIndex(elem => elem.id === id);
  if (courseIndex !== -1) {
    res.status(200);
    res.json(courseList[courseIndex]);
  } else {
    res.status(404);
    res.send();
  }
});


app.listen(3000, () => {
  console.log('BackEnd works!');
});

function checkUserAccess(req) {
  const userToken = req.header('Authorization');
  const authValid = !!issuedTokens[userToken];
  console.log("User token: " + userToken + '. Is present on server: ' + authValid);
  return authValid;
}

const issuedTokens = {};
const loginBase = [
  {
    firstName: 'Ivan',
    lastName: 'Pupkin',
    login: 'admin',
    password: 'admin'
  },
  {
    firstName: 'Petro',
    lastName: 'Supkin',
    login: 'root',
    password: 'root'
  }
];

const courseList = [
  {
    id: 1,
    title: 'Video Course #1',
    topRates: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    creationDate: new Date(2018, 5, 10),
    duration: 28
  },
  {
    id: 2,
    title: 'Video Course #2',
    topRates: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    creationDate: new Date(2018, 6, 5),
    duration: 27
  },
  {
    id: 3,
    title: 'Video Course #3',
    topRates: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    creationDate: new Date(2018, 6, 14),
    duration: 99
  },
  {
    id: 4,
    title: 'Video Course #4',
    topRates: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    creationDate: new Date(2018, 6, 16),
    duration: 70
  },
  {
    id: 5,
    title: 'Video Course #5',
    topRates: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    creationDate: new Date(2018, 7, 21),
    duration: 70
  }
];
