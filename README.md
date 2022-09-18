./bin/kafka-storage format --config ./etc/kafka/kraft/server.properties --cluster-id $(./bin/kafka-storage random-uuid)
./bin/kafka-server-start ./etc/kafka/kraft/server.properties
./bin/kafka-topics --bootstrap-server localhost:9092 --create --topic quickstart

./bin/kafka-console-producer --bootstrap-server localhost:9092 --topic quickstart
./bin/kafka-console-consumer --bootstrap-server localhost:9092 --topic quickstart --from-beginning



./bin/zookeeper-server-start ./etc/kafka/zookeeper.properties
./bin/kafka-server-start ./etc/kafka/server.properties

./bin/kafka-topics --bootstrap-server localhost:9092 --create --topic zooquickstart
./bin/kafka-console-producer --bootstrap-server localhost:9092 --topic zooquickstart
./bin/kafka-console-consumer --bootstrap-server localhost:9092 --topic zooquickstart


./bin/kafka-topics.sh --describe --zookeeper localhost:2181 --topic settrigger