const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require('./data/catagories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Learning API is Running');
});

app.get('/course-catagories', (req, res) => {
    res.send(catagories)
});

app.get('/course/:id',(req,res)=>{
  const id = req.params.id;
  const selectedCourse = courses.find(item => item._id === id);
  res.send(selectedCourse);
})

app.get('/course',(req,res)=>{
	res.send(courses);
})

app.get('/catagory/:id',(req,res)=>{
  const id = req.params.id;
  if(id==='08'){
    res.send(courses);
  }
  else{
    const catagoryCourses = news.filter(item => item.catagory_id === id);
    res.send(catagoryCourses);
  }
})

app.listen(port, () => {
    console.log("Learning platform is running");
})

//https://learning-school-server-side.vercel.app/
//vercel --prod