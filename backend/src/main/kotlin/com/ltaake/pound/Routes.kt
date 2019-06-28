package com.ltaake.pound

import com.ltaake.pound.model.CallConverter
import com.ltaake.pound.model.CallConverterImpl
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.function.HandlerFunction
import org.springframework.web.servlet.function.RequestPredicates.GET
import org.springframework.web.servlet.function.RouterFunctions.route
import org.springframework.web.servlet.function.ServerResponse
import java.util.Optional.empty


@Configuration
open class RoutesConfiguration {

  @Bean
  open fun callController(service: CallService) = CallController(CallConverterImpl(), service)

  @Bean
  open fun routes(handler: CallController) = route(
      GET("/calls"),
      HandlerFunction {
        ServerResponse.ok().body(
            handler.getCalls()
        )
      }
  )
}

class CallController(
    private val callConverter: CallConverter,
    private val callService: CallService
) {

  fun getCalls() = callConverter.toDtos(callService.getCalls(empty(), empty(), empty(), empty()))
}
