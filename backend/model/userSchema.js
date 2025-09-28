const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema =new Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        minLength: [5, 'Name must be at least 5 characters'],
        maxLength: [50, 'Name must be at most 50 characters'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        unique: [true, 'Email already exists'], 
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordExpiryDate: {
        type: Date,
    }
},{
    timestamps: true,
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
});

userSchema.methods ={
    jwtToken(){
        return jwt.sign(
            { id: this._id ,email: this.email}, 
            process.env.SECRET,
            {expiresIn: '24h'},
        );
    }
}

const usermodel = mongoose.model('user', userSchema);
module.exports = usermodel;