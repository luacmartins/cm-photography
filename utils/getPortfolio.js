import fs from 'fs'
import path from 'path'

export default function getPortfolio() {
   const directory = path.join(process.cwd(), '/public/portfolio')
   const fileNames = fs.readdirSync(directory).filter(file => file !== '.DS_Store')
   return fileNames.map(fileName => `/portfolio/${fileName}`)
}