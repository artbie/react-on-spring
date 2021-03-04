FROM adoptopenjdk/openjdk11:jre-11.0.10_9-alpine

COPY webtest.jar /
WORKDIR /

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "/webtest.jar"]
