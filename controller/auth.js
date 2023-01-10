const stautsModal = require("../modals/stutus")
const userMadal = require("../modals/user")

const resister = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            address,
            email,
            dob,
            password,
            salary,
            gender
        } = req.body
        const NewUser = await userMadal({
            firstname,
            lastname,
            address,
            email,
            dob,
            password,
            salary,
            role: 'r2',
            gender
        })
        await NewUser.save()

        res.status(201).json({ massage: 'Success' })
    } catch (e) {
        res.status(500).json({ massage: e.massage })

    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const User = await userMadal.find({ email })
        if (!User) {
            res.status(403).json({ massage: 'User not found' })
        }

        res.status(200).json(User)

    }
    catch (e) {
        res.status(500).json({ massage: e.massage })
    }
}
const status = async (req, res) => {
    const {
        email,
        number,
        dos
    } = req.body

    let user = await userMadal.find({ email })

    if (!user) {
        return res.status(403).json({ massage: 'User not found' })
    }
    const { firstname, lastname, address, gender, dob, salary, role } = user[0]._doc

    const userStatus = await stautsModal({
        firstname,
        email,
        lastname,
        address,
        dob,
        gender,
        salary,
        role,
        number,
        dos,
        remarkStatus: 'pending',
        remarkMassage: ''
    })

    const issaved = await userStatus.save()
    res.send(issaved)
}
const getstatus = async (req, res) => {

    const { _id } = req.query

    let user = await userMadal.findById(_id)

    let userStatus = await stautsModal.find({ email: user.email })

    if (!userStatus) return res.status(403).json('user not found')

    res.status(200).json(...userStatus)

}

module.exports = {
    resister,
    login,
    status,
    getstatus
}
