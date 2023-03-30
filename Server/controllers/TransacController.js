const Transac = require("../models/TransactionModel");
const accountSid = `ACb963744d30434c82c5a86ea10eca6487`;
const authToken = `0f323857a247fd441f713a5d9bfb2f22`;
// const client = require("twilio")(accountSid, authToken);
const twilio = require('twilio');
const client = twilio(accountSid, authToken);

const getAllTransac = async (req, res) => {
  const id = req.params.id;

  try {
    Transac.find({
      $or: [
        { User: { $elemMatch: { $eq: id } } },
        { User: { $elemMatch: { $eq: id } } },
      ],
    })
      .populate("houseHold", "-password")
      .populate("dealer", "-password")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        res.status(200).send(results);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const createTransac = async (req, res) => {
  try {
    const { houseHold, address, scrapType, mass, dealer } = req.body;

    const newTrans = await Transac.create({
      houseHold: houseHold,
      address: address,
      scrapType: scrapType,
      mass: mass,
      dealer: dealer,
    });

    res.status(200).json(newTrans);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateTransac = async (req, res) => {
  try {
    const transaction = await Transac.find({ _id: req.body._id });
    if (!transaction)
      res
        .status(400)
        .json({ message: "No such transaction exist, can't update" });
    const details = await Transac.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });

    res.status(200).json(details);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getTransDetails = async (req, res) => {
  const id = req.params.id;

  try {
    let details = await Transac.find({ _id: id })
      .populate("houseHold", "-password")
      .populate("dealer", "-password");

    if (!details)
      res.status(404).json({ message: "no such transaction exist" });

    res.status(200).json(details);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const newDealWhatsapp = async (req, res) => {
  let { userNo, dealerNo, hMessage, sMessage, orderData } = req.body;
  orderData = JSON.parse(orderData);

  const details = `
    Name of User: ${orderData.name},
    Address of User: ${orderData.address},
    Scrap Types: ${orderData.scrapType},
    Relative mass: ${orderData.mass} kg
  `;
  try {
    client.messages
      .create({
        body: `${hMessage} ${details}
        Dealer number: ${dealerNo}`,
        from: "+14346866284",
        to: `${userNo}`,
        mediaUrl:'https://img.freepik.com/free-vector/coming-soon-teaser-promo-display-background_1017-33738.jpg?w=740&t=st=1664561972~exp=1664562572~hmac=dbdca3b836bbdbc71ee4ecc975906e0e7895fd92c2828ff214fde3502249b3e2',
        contentType :  ['image/jpg']

      })
      .then((message) => console.log(message.sid))
      .catch((err) => console.log(err))
      .done();

    
    client.messages
      .create({
        body: `${sMessage} ${details}
        HouseHold number: ${userNo}`,
        from: "+14346866284",
        to: `${dealerNo}`,
      })
      .then((message) => console.log(message.sid))
      .catch((err) => console.log(err))
      .done();
      // client.messages
      // .create({
      //   from: "whatsapp:+14155238886",
      //   to: `whatsapp:${userNo}`,
       
      //   mediaUrl:'  https://img.freepik.com/free-vector/coming-soon-teaser-promo-display-background_1017-33738.jpg?w=740&t=st=1664561972~exp=1664562572~hmac=dbdca3b836bbdbc71ee4ecc975906e0e7895fd92c2828ff214fde3502249b3e2',
      //   contentType :  ['image/jpg']
  
      // })
      // .then((message) => console.log(message.sid))
      // .catch((err) => console.log(err))
      // .done(); 

    res.status(200).json({ message: "Notified both dealer and user" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  } 
};

module.exports = {
  getAllTransac,
  createTransac,
  updateTransac,
  getTransDetails,
  newDealWhatsapp,
};
