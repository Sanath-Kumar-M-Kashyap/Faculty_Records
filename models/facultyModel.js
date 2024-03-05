const connectionPool = require('../db/connection');

async function getAllFaculty() {
  try {
    const [rows] = await connectionPool.query('SELECT * FROM faculty');
    return rows;
  } catch (error) {
    throw new Error(`Error fetching faculty: ${error.message}`);
  }
}

async function addFaculty(facultyData) {
  try {
    const { Name, Dept, FID } = facultyData;
    const [result] = await connectionPool.execute(
      'INSERT INTO faculty (FID, Name, Dept) VALUES (?, ?, ?, ?)',
      [FID, Name, Dept]
      // ^^^ Corrected variable name here
    );

    return result.insertId;
  } catch (error) {
    throw new Error(`Error adding faculty: ${error.message}`);
  }
}

module.exports = {
  getAllFaculty,
  addFaculty,
};

