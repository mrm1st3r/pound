package com.ltaake.pound.rest.api

import com.ltaake.pound.Application
import com.ltaake.pound.ApplicationConverter
import com.ltaake.pound.rest.model.ApplicationDto
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.core.ParameterizedTypeReference
import org.springframework.http.HttpMethod
import org.springframework.http.HttpStatus
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.junit4.SpringRunner

@RunWith(SpringRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("itest")
open class ApplicationControllerITest {

  @Autowired
  private lateinit var restTemplate: TestRestTemplate

  @Autowired
  private lateinit var converter: ApplicationConverter

  @Test
  fun `controller respond to request`() {
    // given
    val application = Application(id = 1, name = "APP", description = "Reference application")
    val applicationDto = converter.toDto(application)
//    `when`(repository.findAll()).thenReturn(arrayOf(application).toMutableList())

    // when
    val response = restTemplate.exchange("/applications/test", HttpMethod.GET, null, object : ParameterizedTypeReference<List<ApplicationDto>>() {})

    // then
    assertThat(response.statusCode).isEqualTo(HttpStatus.OK)
    assertThat(response.body).contains(applicationDto)
  }
}
