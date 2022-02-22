FROM eclipse-temurin:17.0.2_8-jre-centos7

COPY webtest.jar /
WORKDIR /

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "/webtest.jar"]
