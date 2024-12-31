import fs from 'fs'

const dirPath = './src/data'
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath)
}

const dataPath = './src/data/todos.json'
if (!fs.existsSync(dataPath)) {
	fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const loadTodos = () => {
	const fileBuffer = fs.readFileSync('./src/data/notes.json', 'utf-8')
	const todos = JSON.parse(fileBuffer)
	return todos
}

export default { loadTodos }
