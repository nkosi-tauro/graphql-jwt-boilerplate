const bycrpt = require('bcryptjs')
// Schemas
const User = require("../../models/user")
const jwt = require('jsonwebtoken')


module.exports = {
    createUser: async (args) => {
        // No Duplicate Emails
        try {
            const user = await User.findOne({ email: args.userInput.email });
            if (user) {
                throw new Error("User Exists");
            }
            const hashedPassword = await bycrpt
                .hash(args.userInput.password, 12);
            const user_1 = new User({
                email: args.userInput.email,
                password: hashedPassword
            });
            const result = await user_1.save();
            console.log({...result._doc, password: null, _id: result.id} )
            return { ...result._doc, password: null, _id: result.id };
        }
        catch (err) {
            throw err;
        }
        
    },
    login: async ({email, password})=>{
        const user = await User.findOne({email: email});
        // user does not exist
        if(!user){
            throw new Error('Invalid Credentials (Email)')
        }
        const isEqual = await bycrpt.compare(password, user.password);
        // User Exists but password incorrect
        if (!isEqual){
            throw new Error("Invalid Credentials")
        }
        const token = jwt.sign({userId : user.id, email : user.email}, 'agent47coolsecret',{
            expiresIn : '1h'
        });
        return {userId: user.id, token, tokenExpiration : 1}
    }
}