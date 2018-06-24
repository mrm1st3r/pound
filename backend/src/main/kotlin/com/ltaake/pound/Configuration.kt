package com.ltaake.pound

import org.jooq.ExecuteContext
import org.jooq.impl.*
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.jdbc.datasource.TransactionAwareDataSourceProxy
import org.springframework.jdbc.support.SQLErrorCodeSQLExceptionTranslator
import javax.sql.DataSource


@Configuration
open class DatabaseConfiguration(
    private val dataSource: DataSource?
) {

  @Bean
  open fun connectionProvider(): DataSourceConnectionProvider {
    return DataSourceConnectionProvider(TransactionAwareDataSourceProxy(dataSource!!))
  }

  @Bean
  open fun dsl(): DefaultDSLContext {
    return DefaultDSLContext(configuration())
  }

  fun configuration(): DefaultConfiguration {
    val jooqConfiguration = DefaultConfiguration()
    jooqConfiguration.set(connectionProvider())
    jooqConfiguration
        .set(DefaultExecuteListenerProvider(exceptionTransformer()))

    return jooqConfiguration
  }

  fun exceptionTransformer(): ExceptionTranslator {
    return ExceptionTranslator()
  }
}

class ExceptionTranslator : DefaultExecuteListener() {
  override fun exception(context: ExecuteContext) {
    val dialect = context.configuration().dialect()
    val translator = SQLErrorCodeSQLExceptionTranslator(dialect.name)
    context.exception(translator
        .translate("Access database using jOOQ", context.sql(), context.sqlException()))
  }
}
