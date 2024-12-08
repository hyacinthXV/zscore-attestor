require("dotenv").config();

async function validate(proofOfTask) {
  try {
    let isApproved = true;
    return isApproved;
  } catch (err) {
    console.error(err?.message);
    return false;
  }
}

module.exports = {
  validate,
};
