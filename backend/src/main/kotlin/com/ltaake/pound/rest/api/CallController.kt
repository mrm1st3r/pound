package com.ltaake.pound.rest.api

import com.ltaake.pound.CallRepository
import com.ltaake.pound.model.CallConverter
import com.ltaake.pound.rest.model.CallDto
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.time.OffsetDateTime
import java.util.*

/**
 * Controller for handling REST calls against /calls
 */
@RestController
class CallController(
    private val callRepository: CallRepository,
    private val callConverter: CallConverter
) : CallsApi {

  @RequestMapping(path = ["/calls"], produces = ["application/json"], method = [(RequestMethod.GET)])
  override fun getCalls(
      @RequestParam(value = "disposition", required = false)
      disposition: Optional<String>?,
      @RequestParam(value = "calldate", required = false)
      calldate: Optional<OffsetDateTime>?,
      @RequestParam(value = "offset", required = false)
      offset: Optional<Int>?,
      @RequestParam(value = "limit", required = false)
      limit: Optional<Int>?): ResponseEntity<List<CallDto>> {

    val calls = callRepository.findCalls(disposition!!, calldate!!, offset!!.orElse(0), limit!!.orElse(20))
    return ResponseEntity.ok(callConverter.toDtos(calls))
  }
}
