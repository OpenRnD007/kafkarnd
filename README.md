## Kafka with Kraft [No Zookepeer]
```
./bin/kafka-storage format --config ./etc/kafka/kraft/server.properties --cluster-id $(./bin/kafka-storage random-uuid)
./bin/kafka-server-start ./etc/kafka/kraft/server.properties
```

## Kafka with Zookepeer
```
./bin/zookeeper-server-start ./etc/kafka/zookeeper.properties
./bin/kafka-server-start ./etc/kafka/server.properties
```

### Create Topic
```
./bin/kafka-topics --bootstrap-server localhost:9092 --create --topic quickstart
```
### Produce Data
```
./bin/kafka-console-producer --bootstrap-server localhost:9092 --topic quickstart
```
### Consume Data
```
./bin/kafka-console-consumer --bootstrap-server localhost:9092 --topic quickstart --from-beginning
```

## Using Nodejs
#### Start Kafka [using Kraft or ZooKepeer]

### Install All Dependencies
#### for npm
```
npm install
```
#### for yarn
```
yarn install
```

### Create Topic
```
node create_topics.js
```

### Produce Data
```
node producer.js
```

### Consume Data
```
node consumer.js
```
