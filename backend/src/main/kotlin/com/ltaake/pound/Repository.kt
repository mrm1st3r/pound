package com.ltaake.pound

import com.ltaake.pound.jooq.Tables.CDR
import com.ltaake.pound.model.Call
import org.jooq.DSLContext
import org.springframework.stereotype.Repository

@Repository
class CallRepository(
    private val dsl: DSLContext
) {

  fun findAllCalls(): List<Call> {
    val cdrRecord = dsl.selectFrom(CDR).fetch()

    return cdrRecord.map { Call(it.src, it.dst, it.calldate.toLocalDateTime(), it.dcontext, it.duration, it.disposition) }
  }
}
