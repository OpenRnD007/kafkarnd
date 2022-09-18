import avro from 'avsc'

export const triggerSchema = () => {
    return {
        "SMS": avro.Type.forSchema({
            type: "record",
            name: "sms",
            fields: [
                { name: "to", type: 'string' },
                { name: "from", type: 'string' },
                { name: "message", type: 'string' },
            ]
        }),
        "Voice": avro.Type.forSchema({
            type: "record",
            name: "voice",
            fields: [
                { name: "to", type: 'string' },
                { name: "recordurl", type: 'string' },
            ]
        }),
        "Email": avro.Type.forSchema({
            type: "record",
            name: "email",
            fields: [
                { name: "to", type: 'string' },
                { name: "from", type: 'string' },
                { name: "body", type: 'string' },
            ]
        }),
        "Fax": avro.Type.forSchema({
            type: "record",
            name: "fax",
            fields: [
                { name: "to", type: 'string' },
                { name: "from", type: 'string' },
                { name: "docurl", type: 'string' },
            ]
        }),
    }
}