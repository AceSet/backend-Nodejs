const User = require('./models/user')
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator')

class authController {
	async registration(req, res) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({message: "Ошибка при регистрации", errors})
			}
			const {username, password} = req.body
			const candidate = await User.findONe({username})
			if (candidate) {
				return res.status(400).json({message:"Пользователь  таким именем уже существует"})
			}
			const hashPassword = bcrypt.hashSync(password, 7);
			const user = new User( {username, password: hashPassword}) 
	} catch (e){
		console.log(e)
		res.status(400).json({message: 'Registration error'})
	}
	}


async login(req, res) {
	try {
		const {username, password} = req.body
		const user = await User.findOne({username})
		if (!user) {
			return res.status(400).json({messega:`Пользователь ${username} не найден`})
		}
		const validPassword = bcrypt.compareSync(password, user.password)
		if (!validPassword) {
			return res.status(400).json({message:`Введен неверный пароль`})
		}
	} catch (e){
		console.log(e)
		res.status(400).json({message: 'Login error'})
	}
	}


async getUsers(req, res) {
	try {
		res.json("Server work")
	} catch (e){
		
	}
	}
}

module.exports = new authController()