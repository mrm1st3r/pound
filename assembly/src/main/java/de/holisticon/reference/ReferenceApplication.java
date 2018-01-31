package de.holisticon.reference;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class ReferenceApplication {
    public static void main(final String[] args) {
        SpringApplication.run(ReferenceApplication.class, args);
    }
}
