const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Learning API is Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/course/:id',(req,res)=>{
  const id = req.params.id;
  const selectedCourse = courses.find(item => item._id === id);
  res.send(selectedCourse);
})

app.get('/course',(req,res)=>{
	res.send(courses);
})

app.get('/category/:id',(req,res)=>{
  const id = req.params.id;
  if(id==='08'){
    res.send(courses);
  }
  else{
    const categoryCourses = courses.filter(item => item.category_id === id);
    res.send(categoryCourses);
  }
})

app.listen(port, () => {
    console.log("Learning platform is running");
})

//https://learning-school-server-side.vercel.app/
//vercel --prod