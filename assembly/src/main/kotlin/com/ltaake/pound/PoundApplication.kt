package com.ltaake.pound

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import springfox.documentation.swagger2.annotations.EnableSwagger2

@SpringBootApplication
@EnableSwagger2
open class PoundApplication

fun main(args: Array<String>) {
  SpringApplication.run(PoundApplication::class.java, *args)
}
