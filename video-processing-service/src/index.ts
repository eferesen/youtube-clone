import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();
const port = process.env.port || 3000;

app.use(express.json())

app.post("/process-video", (req, res) => {
  // Input video file
  const inputFilePath = req.body.inputFilePath
  const outputFilePath = req.body.outputFilePath

  console.log(inputFilePath)
  console.log(outputFilePath)

  if (!inputFilePath || !outputFilePath) {
    res.status(400).send('Bad Request: Missing file path')
  }

  ffmpeg(inputFilePath)
    .outputOptions('-vf', 'scale=-1:360') // 360p
    .on('end', function () {
      console.log('Processing finished successfully');
      res.status(200).send('Processing finished successfully');
    })
    .on('error', function (err: any) {
      console.error('An error occurred: ' + err.message);
      res.status(500).send('An error occurred: ' + err.message);
    })
    .save(outputFilePath);


});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
