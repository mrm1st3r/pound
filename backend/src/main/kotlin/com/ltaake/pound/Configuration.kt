package com.ltaake.pound

import com.ltaake.pound.rest.api.RequestLoggingInterceptor
import org.jooq.ExecuteContext
import org.jooq.impl.*
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile
import org.springframework.jdbc.datasource.TransactionAwareDataSourceProxy
import org.springframework.jdbc.support.SQLErrorCodeSQLExceptionTranslator
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.firewall.DefaultHttpFirewall
import org.springframework.security.web.firewall.HttpFirewall
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import springfox.documentation.swagger2.annotations.EnableSwagger2
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

@EnableWebSecurity
open class WebSecurityConfig: WebSecurityConfigurerAdapter() {

  @Value("\${pound.frontend.url}")
  private var frontendUrl: String = ""

  override fun configure(http: HttpSecurity) {
    http.cors()
  }

  @Bean
  open fun corsConfigurationSource(): CorsConfigurationSource {
    val urlBasedCorsConfigurationSource = UrlBasedCorsConfigurationSource()
    val corsConfiguration = CorsConfiguration()
    corsConfiguration.allowedOrigins = listOf(frontendUrl)
    urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration)
    return urlBasedCorsConfigurationSource
  }
}

@Configuration
open class WebConfigurer(
    private val loggingInterceptor: RequestLoggingInterceptor
): WebMvcConfigurer {

  @Bean
  open fun defaultHttpFirewall(): HttpFirewall {
    return DefaultHttpFirewall()
  }

  override fun addInterceptors(registry: InterceptorRegistry) {
    registry.addInterceptor(loggingInterceptor)
  }
}

@Configuration
@Profile("swagger")
@EnableSwagger2
open class SwaggerConfiguration
