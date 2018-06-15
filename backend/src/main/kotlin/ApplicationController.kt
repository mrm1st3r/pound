package com.ltaake.pound.rest.api

import com.ltaake.pound.data.ApplicationConverter
import com.ltaake.pound.data.ApplicationRepository
import com.ltaake.pound.rest.model.ApplicationDto
import io.swagger.annotations.ApiParam
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import java.util.*
import javax.validation.Valid

@RestController
class ApplicationController(
    private val applicationRepository: ApplicationRepository,
    private val applicationConverter: ApplicationConverter
) : ApplicationsApi  {

  companion object {
      const val CONSTANT = "VALUE"
  }

  override fun createApplication(
      @ApiParam(value = "Stage of the application", required = true)
      @PathVariable("stage")
      stage: String,
      @ApiParam(value = "Application to create.", required = true)
      @Valid @RequestBody
      application: ApplicationDto
  ): ResponseEntity<String> {
    val entity = applicationConverter.toEntity(application)
    val result = applicationRepository.save(entity)
    val location = ServletUriComponentsBuilder
        .fromCurrentRequest().path("/{id}")
        .buildAndExpand(result.id).toUri()
    return ResponseEntity.created(location).build()
  }

  override fun getApplications(
      @PathVariable("stage") stage: String,
      @RequestParam(value = "id", required = false)
      @Valid id: Optional<List<String>>,
      @RequestParam(value = "offset", required = false)
      @Valid offset: Optional<Int>,
      @RequestParam(value = "limit", required = false)
      @Valid limit: Optional<Int>): ResponseEntity<List<ApplicationDto>> {
    val all = applicationRepository.findAll()
    return ResponseEntity.ok(applicationConverter.toDtos(all))
  }

  fun getConstantValue(): String {
    return CONSTANT
  }
}
