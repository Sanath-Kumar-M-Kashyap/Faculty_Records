const facultyModel = require('../models/facultyModel');

async function getAllFaculty(req, res, next) {
  try {
    const faculty = await facultyModel.getAllFaculty();
    res.json({ faculty });
  } catch (error) {
    next(error);
  }
}

async function addFaculty(req, res, next) {
  const facultyData = req.body;

  if (!facultyData.Name || !facultyData.Dept || !facultyData.Reg_no) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const facultyId = await facultyModel.addFaculty(facultyData);
    res.json({ facultyId });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllFaculty,
  addFaculty,
};
