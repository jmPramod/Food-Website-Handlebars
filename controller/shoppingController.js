const FoodModel = require('../Model/FoodSchema');
const cloudinary = require('../config/cloudinary');
// const uploader = require('../config/multer');
const homeController = (req, res) => {
  res.render('home', { style: 'home.css' });
};
const createFoodController = async (req, res) => {
  try {
    // let error = [];
    // console.log(req);
    let { id, name, dsc, price, rate, country } = req.body;
    let img = req.files[0];
    let video = req.files[1];
    console.log('img', img);
    console.log('video ', video);
    console.log(req.files);
    // await cloudinary.uploader.upload(rs
    // 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    //   { public_id: 'olympic_flag' },
    //   function (error, result) {
    //     console.log(result);
    //   };
    // );
    let z = await cloudinary.v2.uploader.upload(
      img.path,
      { public_id: 'olympic_flag' },
      function (error, result) {
        console.log('result', result);
      }
    );
    // console.log('img.path)', img.path);
    // const imgResult = await cloudinary.v2.uploader.upload(img.path);
    console.log('1');
    // const upload = await cloudinary.v2.uploader.upload(req.file.path);
    // const videoResult = await cloudinary.v2.uploader.upload(video.path);
    console.log('2');
    let data = new FoodModel({
      id,
      name,
      dsc,
      price,
      rate,
      country,
      img: imgResult.secure_url, // Save the Cloudinary URL for the image
      video: videoResult.secure_url,
    });
    console.log('3');
    const result = await data.save();
    // console.log('data', res);

    req.flash('SUCCESS_MESSAGE', 'Successfully Movie Created.');
    // res.redirect('/'); // Redirect to the home page or any other appropriate page
  } catch (err) {
    console.log('err,', err);
  }
};
module.exports = { homeController, createFoodController };
