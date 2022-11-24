import mongoose from 'mongoose'
require('dotenv').config()

// main().catch((err) => console.log(err))

interface PetDocument extends mongoose.Document {
    name: string
    animal: string
    age: number
    speak(): void
}

async function main() {
    await mongoose.connect(process.env.PLAY_STRING!)

    const petSchema = new mongoose.Schema<PetDocument>({
        name: { type: String, required: true },
        animal: { type: String, required: true },
        age: { type: Number, required: true },
    })

    petSchema.methods.speak = function () {
        console.log('My name is ' + this.name)
    }
    const Pet = mongoose.model('Pet', petSchema)

    const cookie = new Pet({ name: 'Cookie', animal: 'Dog', age: 2 })

    cookie.speak()

    await cookie.save()
    process.exit(0)
}

export {}
