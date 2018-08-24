package com.ltaake.pound

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class PoundApplication

fun main(args: Array<String>) {
  SpringApplication.run(PoundApplication::class.java, *args)
}
