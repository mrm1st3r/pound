package com.ltaake.pound

import com.ltaake.pound.jooq.Tables.CDR
import com.ltaake.pound.jooq.tables.records.CdrRecord
import org.jooq.Condition
import org.jooq.DSLContext
import org.jooq.Result
import org.jooq.impl.DSL
import org.springframework.stereotype.Repository
import java.sql.Timestamp
import java.time.OffsetDateTime
import java.util.*

@Repository
class CallRepository(
    private val dsl: DSLContext
) {

  fun findAllCalls(): Result<CdrRecord> {
    return dsl.selectFrom(CDR).fetch()
  }

  fun findCalls(
      disposition: Optional<String>,
      calldate: Optional<OffsetDateTime>,
      offset: Int,
      limit: Int): Result<CdrRecord> {
    var condition: Condition = DSL.trueCondition()
    disposition.ifPresent { condition = condition.and(CDR.DISPOSITION.eq(it)) }
    calldate.ifPresent { condition = condition.and(CDR.CALLDATE.greaterOrEqual(Timestamp.from(it.toInstant()))) }

    return dsl.selectFrom(CDR)
        .where(condition)
        .orderBy(CDR.CALLDATE.desc())
        .offset(offset)
        .limit(limit)
        .fetch()
  }
}
