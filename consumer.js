import { Kafka } from "kafkajs";
import { triggerSchema } from "./triggerSchema.js";

const sendSMS = (info) => {
    console.log("--------------------------------------")
    console.log(`send SMS info: ${info}`)
    console.log("--------------------------------------")
}
const sendVoice = (info) => {
    console.log("--------------------------------------")
    console.log(`Send voicemail info ${info}`)
    console.log("--------------------------------------")
}
const sendEmail = (info) => {
    console.log("--------------------------------------")
    console.log(`send email info ${info}`)
    console.log("--------------------------------------")
}
const sendFax = (info) => {
    console.log("--------------------------------------")
    console.log(`send fax info ${info}`)
    console.log("--------------------------------------")
}

const receivedMsg = async (data) => {

    try {
        const kafka = new Kafka({
            "clientId": "kafkarnd",
            "brokers": ["localhost:9092"]
        })

        const consumer = kafka.consumer({ "groupId": "gp_trigger" })
        console.log("Connecting to Consumer!")
        await consumer.connect()
        console.log("Connected to Consumer!")

        await consumer.subscribe(data)

        const schema = triggerSchema()
        await consumer.run({
            "eachMessage": async result => {
                if (result.partition === 1) {
                    sendSMS(JSON.stringify(schema.SMS.fromBuffer(result.message.value)))
                } else if (result.partition === 2) {
                    sendVoice(JSON.stringify(schema.Voice.fromBuffer(result.message.value)))
                } else if (result.partition === 3) {
                    sendEmail(JSON.stringify(schema.Email.fromBuffer(result.message.value)))
                } else if (result.partition === 4) {
                    sendFax(JSON.stringify(schema.Fax.fromBuffer(result.message.value)))
                }
            }
        })

    } catch (err) {
        console.error("Err:", err)
    }
}

receivedMsg({
    "topic": "set_triggers",
    "fromBeginning": true
})
