# react-on-spring

### Build
```
./gradlew build
```

### Run
```
./gradlew bootRun
```

### Develop frontend on webpack-dev-server
```
npm install
npm start
```

### Build & run docker image
```
./gradlew docker
docker run -p 8080:8080 webtest:0.0.2-SNAPSHOT
```