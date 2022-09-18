import { Kafka } from "kafkajs";
import { triggerSchema } from "./triggerSchema.js";

const sendmsg = async (data) => {

    try {
        const kafka = new Kafka({
            "clientId": "kafkarnd",
            "brokers": ["localhost:9092"]
        })

        const producer = kafka.producer()
        console.log("Connecting to Producer!")
        await producer.connect()
        console.log("Connected to Producer!")

        const result = await producer.send(data)

        console.log(`Message pushed! ${JSON.stringify(result)}`)

        await producer.disconnect()
        console.log("Producer Disconnected!")
    } catch (err) {
        console.error("Err:", err)
    }
}


const schema = triggerSchema()
await sendmsg({
    "topic": "set_triggers",
    "messages": [{
        "value": schema.SMS.toBuffer({ "to": "+18605112345", "from": "+18605101111", "message": "Hello there SMS" }),
        "partition": 1
    }]
})

await sendmsg({
    "topic": "set_triggers",
    "messages": [{
        "value": schema.Voice.toBuffer({ "to": "+18605112345", "recordurl": "https://s3.com/vs.wav" }),
        "partition": 2
    }]
})

await sendmsg({
    "topic": "set_triggers",
    "messages": [{
        "value": schema.Email.toBuffer({ "to": "test@gmail.com", "from": "you@gmail.com", "body": "Email testing new" }),
        "partition": 3
    }]
})

await sendmsg({
    "topic": "set_triggers",
    "messages": [{
        "value": schema.Fax.toBuffer({ "to": "+1860510888", "from": "+1860510111", "docurl": "http://s3.com/doc.pdf" }),
        "partition": 4
    }]
})