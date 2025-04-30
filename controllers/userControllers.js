const getAllUsers = (req, res) => {
    res.send("Fetching all users");
}

const addNewUser = (req, res) => {
    res.send("Adding a new user");
}

const getUserById = (req, res) => {
    res.send("Feting user by ID: " + req.params.id);
}

module.exports = {getAllUsers, addNewUser, getUserById}