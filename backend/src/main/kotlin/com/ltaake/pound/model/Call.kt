package com.ltaake.pound.model

import com.ltaake.pound.rest.model.CallDto
import org.mapstruct.InheritInverseConfiguration
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.Mappings
import java.time.LocalDateTime

data class Call(
    var src: String,
    var dst: String,
    var callTime: LocalDateTime,
    var dcontext: String,
    var duration: Int,
    var disposition: String
) {
  constructor():
    this("", "", LocalDateTime.now(), "", 0, "")

}

@Mapper(componentModel = "spring")
interface CallConverter {

  @Mappings(Mapping(source = "callTime", target = "calldate"))
  fun toDto(entity: Call): CallDto
  fun toDtos(applications: Iterable<Call>): List<CallDto>

  @InheritInverseConfiguration
  fun toEntity(dto: CallDto): Call

}
