const Duaa = require("../Models/DuaaModel");

const GetDuaa = async (req, res) => {
  try {
    const duaa = await Duaa.find({
      $or: [{ userId: { $exists: false } }, { userId: req.user._id }],
    }).sort({ updatedAt: -1 });
    res.status(200).json(duaa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const AddDuaa = async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: "Data is empty" });
  }
  const data = {
    content,
    userId: req.user._id,
  };
  try {
    const repeated = await Duaa.find({
      $and: [
        { $or: [{ userId: { $exists: false } }, { userId: req.user._id }] },
        { content:content },
      ],
    });
    if (repeated.length>0) {
      throw new Error("This Duaa is already there");
    }
    const duaaposted = await Duaa.create(data);
    res.status(200).json(duaaposted);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports = {
  GetDuaa,
  AddDuaa,
};
