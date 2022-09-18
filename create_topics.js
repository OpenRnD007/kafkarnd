import { Kafka } from "kafkajs";

const create = async (data) => {

    try {
        const kafka = new Kafka({
            "clientId": "kafkarnd",
            "brokers": ["localhost:9092"]
        })

        const admin = kafka.admin()
        console.log("Connecting to Admin!")
        await admin.connect()
        console.log("Connected to Admin!")

        const topics = await admin.createTopics({
            "topics": data
        })

        console.log("Topics created!", topics)

        await admin.disconnect()
        console.log("Admin Disconnected!")
    } catch (err) {
        console.error("Err:", err)
    }
}

create([{
    "topic": "set_triggers",
    "numPartitions": 5
}])
