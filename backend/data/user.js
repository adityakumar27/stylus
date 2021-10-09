import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Sai Vishal',
        email: 'sai@example.com',
        password: bcrypt.hashSync('123456',10),
    
    },
    {
        name: 'Shrestha Karn',
        email: 'karn@example.com',
        password: bcrypt.hashSync('123456',10),
       
    },
    
] 
export default users