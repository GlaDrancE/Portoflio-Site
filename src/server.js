const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3001;
app.use(cors())
app.use(bodyParser.json());
app.use('/upload', express.static('uploads'));

const storage = multer.memoryStorage();
const local_storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the directory where images will be stored
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const uri = 'mongodb+srv://ayushr16060:%40yusH11011@cluster0.3ekelbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

connectToDatabase();

app.get('/api/blog/:id', async function (req, res) {
    const collection = await client.db('PortfolioData').collection('blog_data');
    data = collection.find({ _id: new ObjectId(req.params.id) })
    resData = await data.toArray();
    res.send(resData);
})
app.post('/api/blog', upload.single('blog_thumbnail'), async (req, res) => {
    const { blog_title, blog_content, publish_date } = req.body;
    // create an image buffer with contentType assigned
    const imageBuffer = {
        data: req.file.buffer,
        contentType: req.file.mimetype
    };
    const blogData = {
        blogTitle: blog_title,
        blogContent: blog_content,
        publishDate: publish_date,
        blogThumb: imageBuffer
    }

    const collection = await client.db('PortfolioData').collection('blog_data');
    await collection.insertOne(blogData, async (err, result) => {
        if (err) {
            console.error(err)
            res.send({ response: 500 });
            return;
        }
        console.log("Data inserted succesfully", await result)
        res.send({ response: 200 });
    })
})
app.get('/api/get-blogs', async (req, res) => {
    const collection = await client.db('PortfolioData').collection('blog_data');
    const cursor = await collection.find({})
    const blogDocument = await cursor.toArray();
    res.send(blogDocument)
})
// app.post('/api/upload-projects', multer({ storage: local_storage }).single('blog_thumbnail'), async (req, res) => {
//     const imagePath = 'uploads/' + req.file.filename;
//     const collection = await client.db('PortfolioData').collection('projects_data');
//     collection.insertOne({ "project_images": [imagePath] })
//     res.json({ imagePath });
// })

app.get('/api/get-project', async (req, res) => {
    const collection = await client.db('PortfolioData').collection('projects_data');
    const cursor = await collection.find({})
    projectData = await cursor.toArray();
    res.send(projectData)
})
app.get('/api/get-project/:id', async (req, res) => {
    try {
        const collection = client.db('PortfolioData').collection('projects_data');

        const result = await collection.findOne({ _id: new ObjectId(req.params.id) });

        if (!result) {
            // Handle case where the document is not found
            return res.status(404).json({ error: 'Project not found' });
        }

        res.json(result);
    } catch (error) {
        console.error('Error fetching project data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/api/get-testimonials', async (req, res) => {
    const collection = await client.db('PortfolioData').collection('testimonials');
    const cursor = await collection.find({})
    testimonialsData = await cursor.toArray();
    res.send(testimonialsData)
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});