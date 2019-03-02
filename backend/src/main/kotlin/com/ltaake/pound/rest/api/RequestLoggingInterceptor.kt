package com.ltaake.pound.rest.api

import org.slf4j.LoggerFactory
import org.springframework.stereotype.Component
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


@Component
class RequestLoggingInterceptor : HandlerInterceptorAdapter() {

  companion object {
    val log = LoggerFactory.getLogger(RequestLoggingInterceptor::class.java)!!
  }

  override fun preHandle(
      request: HttpServletRequest,
      response: HttpServletResponse,
      handler: Any): Boolean {
    log.info("Incoming request: " + request.requestURI)

    return true
  }
}
