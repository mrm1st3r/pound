package com.ltaake.pound

import com.ltaake.pound.model.Call
import com.ltaake.pound.model.Direction
import com.ltaake.pound.rest.api.RequestLoggingInterceptor
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.time.OffsetDateTime
import java.util.*

@Service
class CallService(
    private val callRepository: CallRepository,
    @Value("\${pound.context.incoming:[]}")
    private val incomingContexts: List<String>,
    @Value("\${pound.context.outgoing:[]}")
    private val outgoingContexts: List<String>
) {

  init {
    log.info("Configured incoming contexts: $incomingContexts")
    log.info("Configured outgoing contexts: $outgoingContexts")
  }

  companion object {
    val log = LoggerFactory.getLogger(RequestLoggingInterceptor::class.java)!!

    private const val DEFAULT_LIMIT = 20
    private const val DEFAULT_OFFSET = 0
  }

  fun getCalls(
      disposition: Optional<String>,
      calldate: Optional<OffsetDateTime>,
      offset: Optional<Int>,
      limit: Optional<Int>): List<Call> {

    val cdrRecords = callRepository.findCalls(disposition, calldate, offset.orElse(DEFAULT_OFFSET), limit.orElse(DEFAULT_LIMIT))

    return cdrRecords.map {
      Call(
          it.src,
          it.dst,
          it.calldate.toLocalDateTime(),
          it.dcontext,
          it.duration,
          it.disposition,
          determineDirection(it.dcontext)
      )
    }
  }

  private fun determineDirection(context: String?) =
      when {
        incomingContexts.contains(context) -> Direction.INCOMING
        outgoingContexts.contains(context) -> Direction.OUTGOING
        else -> Direction.UNKNOWN
      }
}
